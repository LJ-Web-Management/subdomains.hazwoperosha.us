// Checkout shared by every site in sites/. Load it after /_shared/catalog.js:
//
//   <script src="/_shared/catalog.js"></script>
//   <script src="/_shared/checkout.js" data-site="forty-hour" data-lang="en" defer></script>
//
// Any element with data-buy="<catalog id>" opens a checkout dialog for that course, and
// ?buy=<id> in the URL opens it on load. The catalog id is only a key: add_order gets the course's
// lmsId (the hazwoper-osha.com LMS course id). A course whose lmsId is null has no LMS match, so the
// dialog offers enrollment by phone or email instead of taking a card. Payment works like the hazwoperosha.us checkout so
// orders land in the hazwoper-osha.com LMS the same way:
//   1. Stripe.js creates a card PaymentMethod
//   2. POST {API_BASE_URL}/add_new_user  -> customer id
//   3. POST {API_BASE_URL}/add_order     -> order with the course id and seat count
//                                           (+ clientSecret to confirm, if the API asks)
// Each site styles the dialog through the --co-* custom properties in checkout.css.
(function () {
  var STRIPE_PUBLISHABLE_KEY = 'pk_live_doCHB0jglD5eISjEmB1vB6mb00xIg51noK';
  var API_BASE_URL = 'https://hazwoper-osha.com/api';
  var ENROLL_EMAIL = 'info@hazwoper-osha.com';
  var PHONE = '+1-866-429-6742';
  var PHONE_HREF = '+18664296742';

  var script = document.currentScript;
  var SITE = (script && script.getAttribute('data-site')) || location.hostname.split('.')[0];
  // The site the sale came from, as its hostname: rcra.hazwoperosha.us.
  var ORDER_FROM = SITE + '.hazwoperosha.us';
  var LANG = (script && script.getAttribute('data-lang')) === 'es' ? 'es' : 'en';

  var T = {
    en: {
      title: 'Enroll', seats: 'Seats', seat: 'seat', seatsWord: 'seats', perSeat: 'per seat', total: 'Total',
      first: 'First name', last: 'Last name', email: 'Email', phone: 'Phone', company: 'Company (optional)',
      address: 'Billing address', city: 'City', state: 'State', zip: 'ZIP', card: 'Card',
      pay: 'Pay', paying: 'Processing…', close: 'Close',
      secure: 'Secure card payment by Stripe. Your login arrives by email right after payment.',
      po: 'Need an invoice or purchase order? Call ',
      orEmail: ' or email ',
      doneTitle: 'You’re enrolled', done1: 'Order ', done2: ' is confirmed. Login details are on their way to ',
      doneBtn: 'Done', failed: 'Payment failed. Please check your card details and try again.',
      noStripe: 'The card form didn’t load. Refresh the page, or call us to enroll by phone.',
      reqText: 'We enroll this course by request. Call or email us with the number of seats and we’ll set up your order.',
      reqEmail: 'Email an enrollment request', reqSubject: 'Enrollment request: ', reqBody: 'Course: ', reqSeats: 'Seats: ', reqFrom: 'Site: '
    },
    es: {
      title: 'Inscripción', seats: 'Asientos', seat: 'asiento', seatsWord: 'asientos', perSeat: 'por asiento', total: 'Total',
      first: 'Nombre', last: 'Apellido', email: 'Correo electrónico', phone: 'Teléfono', company: 'Empresa (opcional)',
      address: 'Dirección de facturación', city: 'Ciudad', state: 'Estado', zip: 'Código postal', card: 'Tarjeta',
      pay: 'Pagar', paying: 'Procesando…', close: 'Cerrar',
      secure: 'Pago seguro con tarjeta a través de Stripe. Recibirá su acceso por correo justo después del pago.',
      po: '¿Necesita factura u orden de compra? Llame al ',
      orEmail: ' o escriba a ',
      doneTitle: '¡Ya está inscrito!', done1: 'El pedido ', done2: ' está confirmado. Los datos de acceso van en camino a ',
      doneBtn: 'Listo', failed: 'El pago no se pudo procesar. Revise los datos de su tarjeta e intente de nuevo.',
      noStripe: 'El formulario de pago no cargó. Actualice la página o llámenos para inscribirse por teléfono.',
      reqText: 'Este curso se inscribe por solicitud. Llámenos o escríbanos con el número de asientos y prepararemos su pedido.',
      reqEmail: 'Enviar solicitud de inscripción', reqSubject: 'Solicitud de inscripción: ', reqBody: 'Curso: ', reqSeats: 'Asientos: ', reqFrom: 'Sitio: '
    }
  }[LANG];

  var money = function (n) {
    return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };
  var course = function (id) {
    var c = window.HUB_COURSES && window.HUB_COURSES[id];
    return c || null;
  };
  var errorText = function (err) {
    if (!err) return T.failed;
    if (typeof err === 'string') return err;
    if (typeof err.message === 'string') return err.message;
    if (typeof err.error === 'string') return err.error;
    if (err.error && typeof err.error.message === 'string') return err.error.message;
    return T.failed;
  };

  var dialog, form, current, stripe, card;

  function field(name, label, type, attrs) {
    return '<label class="co-field co-' + name + '"><span>' + label + '</span><input name="' + name + '" type="' + (type || 'text') + '" ' + (attrs || 'required') + '></label>';
  }

  function build() {
    dialog = document.createElement('dialog');
    dialog.className = 'co-dialog';
    dialog.setAttribute('aria-labelledby', 'co-title');
    dialog.innerHTML =
      '<form class="co-form" method="post" novalidate>' +
        '<div class="co-head"><h2 id="co-title">' + T.title + '</h2><button type="button" class="co-x" aria-label="' + T.close + '">×</button></div>' +
        '<div class="co-course"><strong class="co-name"></strong><span class="co-meta"></span></div>' +
        '<div class="co-qty"><label><span>' + T.seats + '</span><input name="qty" type="number" min="1" max="10000" step="1" value="1" inputmode="numeric"></label>' +
          '<div class="co-total"><span>' + T.total + '</span><strong class="co-sum"></strong></div></div>' +
        '<div class="co-grid">' +
          field('first', T.first, 'text', 'required autocomplete="given-name"') +
          field('last', T.last, 'text', 'required autocomplete="family-name"') +
          field('email', T.email, 'email', 'required autocomplete="email"') +
          field('phone', T.phone, 'tel', 'required autocomplete="tel"') +
          field('company', T.company, 'text', 'autocomplete="organization"') +
          field('line1', T.address, 'text', 'required autocomplete="address-line1"') +
          field('city', T.city, 'text', 'required autocomplete="address-level2"') +
          field('state', T.state, 'text', 'required autocomplete="address-level1"') +
          field('zip', T.zip, 'text', 'required autocomplete="postal-code"') +
        '</div>' +
        '<div class="co-field co-card"><span>' + T.card + '</span><div class="co-card-el"></div></div>' +
        '<p class="co-error" role="alert" hidden></p>' +
        '<button type="submit" class="co-pay"></button>' +
        '<p class="co-note">' + T.secure + '<br>' + T.po + '<a href="tel:' + PHONE_HREF + '">' + PHONE + '</a>' + T.orEmail +
          '<a href="mailto:' + ENROLL_EMAIL + '">' + ENROLL_EMAIL + '</a>.</p>' +
      '</form>' +
      '<div class="co-request" hidden><div class="co-head"><h2>' + T.title + '</h2><button type="button" class="co-x co-req-x" aria-label="' + T.close + '">×</button></div>' +
        '<div class="co-course"><strong class="co-req-name"></strong><span class="co-req-meta"></span></div>' +
        '<p>' + T.reqText + '</p>' +
        '<p><a class="co-pay co-req-mail" href="#">' + T.reqEmail + '</a></p>' +
        '<p class="co-note"><a href="tel:' + PHONE_HREF + '">' + PHONE + '</a>' + T.orEmail + '<a href="mailto:' + ENROLL_EMAIL + '">' + ENROLL_EMAIL + '</a></p>' +
      '</div>' +
      '<div class="co-done" hidden><h2>' + T.doneTitle + '</h2><p class="co-done-text"></p><button type="button" class="co-pay co-done-btn">' + T.doneBtn + '</button></div>';
    document.body.appendChild(dialog);
    form = dialog.querySelector('form');

    dialog.querySelector('.co-x').addEventListener('click', function () { dialog.close(); });
    dialog.querySelector('.co-req-x').addEventListener('click', function () { dialog.close(); });
    dialog.querySelector('.co-done-btn').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
    form.qty.addEventListener('input', render);
    form.addEventListener('submit', submit);
  }

  function seats() {
    var n = parseInt(form.qty.value, 10);
    return n > 0 ? Math.min(n, 10000) : 1;
  }
  function total() { return Math.round(current.price * seats() * 100) / 100; }

  function render() {
    var n = seats();
    dialog.querySelector('.co-name').textContent = current.name;
    dialog.querySelector('.co-meta').textContent = current.duration + ' · ' + money(current.price) + ' ' + T.perSeat + (current.lmsId ? ' · #' + current.lmsId : '');
    dialog.querySelector('.co-sum').textContent = money(total());
    dialog.querySelector('.co-pay').textContent = T.pay + ' ' + money(total()) + (n > 1 ? ' · ' + n + ' ' + T.seatsWord : '');
  }

  function loadStripe(done) {
    if (window.Stripe) return done();
    var tag = document.createElement('script');
    tag.src = 'https://js.stripe.com/v3/';
    tag.onload = done;
    tag.onerror = function () { showError(T.noStripe); };
    document.head.appendChild(tag);
  }

  function mountCard() {
    if (card || !window.Stripe) return;
    var cs = getComputedStyle(dialog);
    stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
    card = stripe.elements().create('card', {
      hidePostalCode: true,
      style: { base: { fontSize: '16px', color: cs.getPropertyValue('--co-fg').trim() || '#111', '::placeholder': { color: '#999' } } }
    });
    card.mount(dialog.querySelector('.co-card-el'));
  }

  function showError(msg) {
    var el = dialog.querySelector('.co-error');
    el.textContent = msg;
    el.hidden = false;
    busy(false);
  }
  function busy(on) {
    var btn = form.querySelector('.co-pay');
    btn.disabled = on;
    if (on) btn.textContent = T.paying; else render();
  }

  function open(id) {
    var c = course(id);
    if (!c) return;
    if (!dialog) build();
    current = c;
    var req = dialog.querySelector('.co-request');
    if (!c.lmsId) {
      form.hidden = true;
      dialog.querySelector('.co-done').hidden = true;
      req.hidden = false;
      req.querySelector('.co-req-name').textContent = c.name;
      req.querySelector('.co-req-meta').textContent = c.duration + ' · ' + money(c.price) + ' ' + T.perSeat;
      req.querySelector('.co-req-mail').href = 'mailto:' + ENROLL_EMAIL + '?subject=' + encodeURIComponent(T.reqSubject + c.name) +
        '&body=' + encodeURIComponent(T.reqBody + c.name + '\n' + T.reqSeats + '\n' + T.reqFrom + ORDER_FROM + '\n');
      dialog.showModal();
      return;
    }
    req.hidden = true;
    form.hidden = false;
    form.qty.value = '1';
    dialog.querySelector('.co-done').hidden = true;
    dialog.querySelector('.co-error').hidden = true;
    render();
    dialog.showModal();
    loadStripe(mountCard);
  }

  async function submit(e) {
    e.preventDefault();
    if (!current || !current.lmsId) return;
    if (!form.reportValidity()) return;
    if (!stripe || !card) return showError(T.noStripe);
    busy(true);
    dialog.querySelector('.co-error').hidden = true;

    var v = function (n) { return form[n].value.trim(); };
    var first = v('first'), last = v('last'), email = v('email'), phone = v('phone'), company = v('company');
    var addr = { line1: v('line1'), line2: '', city: v('city'), state: v('state'), postal_code: v('zip'), country: 'US' };

    var pm = await stripe.createPaymentMethod({
      type: 'card', card: card,
      billing_details: { name: first + ' ' + last, email: email, phone: phone, address: addr }
    });
    if (pm.error) return showError(errorText(pm.error));
    var paymentMethodId = pm.paymentMethod ? pm.paymentMethod.id : '';

    var customerId = 0;
    try {
      var userRes = await fetch(API_BASE_URL + '/add_new_user', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name: first, last_name: last, email: email, user_name: first + ' ' + last, user_role_id: 2, phone: phone })
      });
      if (userRes.ok) {
        var u = await userRes.json();
        if (u) {
          customerId = u.user_id || (u.data && u.data.user_id) || (u.success && u.success.user_id) ||
            (u.user && u.user.user_id) || (u.is_duplicate && Number(u.existing_email)) || 0;
        }
      }
    } catch (err) {
      console.warn('add_new_user API call notice:', err);
    }

    var orderId = 'HZ-' + Math.floor(100000 + Math.random() * 900000);
    try {
      var orderRes = await fetch(API_BASE_URL + '/add_order', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_id: customerId,
          payment_method: 'stripe',
          payment_method_id: paymentMethodId,
          order_type: 'normal',
          order_status: 'pending',
          order_from: ORDER_FROM,
          billing_first_name: first, billing_last_name: last, billing_name: first + ' ' + last,
          billing_email: email, billing_phone: phone, billing_company: company, reg_company: company,
          billing_address_1: addr.line1, billing_address_2: '', billing_city: addr.city,
          billing_state: addr.state, billing_postcode: addr.postal_code, billing_country: addr.country,
          shipping_address_1: addr.line1, shipping_address_2: '', shipping_city: addr.city,
          shipping_state: addr.state, shipping_postcode: addr.postal_code, shipping_country: addr.country,
          courses: [{ course_id: current.lmsId, quantity: seats(), users: [{ first_name: first, last_name: last, email: email, user_name: '' }] }]
        })
      });
      var data = await orderRes.json();
      if (!orderRes.ok || (data && (data.success === false || data.error))) return showError(errorText(data && data.error ? data.error : data));
      if (data && (data.order_id || data.id)) orderId = String(data.order_id || data.id);
      if (data && data.clientSecret) {
        var confirm = await stripe.confirmCardPayment(data.clientSecret, { payment_method: paymentMethodId });
        if (confirm && confirm.error) return showError(errorText(confirm.error));
      }
    } catch (err) {
      return showError(errorText(err));
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'purchase', {
        transaction_id: orderId, currency: 'USD', value: total(),
        items: [{ item_id: String(current.lmsId), item_name: current.name, price: current.price, quantity: seats() }]
      });
    }
    busy(false);
    form.hidden = true;
    var done = dialog.querySelector('.co-done');
    done.querySelector('.co-done-text').textContent = T.done1 + '#' + orderId.replace(/^#/, '') + T.done2 + email + '.';
    done.hidden = false;
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-buy]');
    if (!btn || !course(btn.getAttribute('data-buy'))) return;
    e.preventDefault();
    open(btn.getAttribute('data-buy'));
  });

  var initial = new URLSearchParams(location.search).get('buy');
  if (initial) {
    var go = function () { open(initial); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  }

  window.HubCheckout = { open: open };
})();
