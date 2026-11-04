// Search and AI-agent helpers shared by tools/build.mjs (the course sites) and tools/imported.mjs (the
// sites copied in from the onlinetrainingcourses generator): the company's Organization record, title and
// description fitting, sitemap <lastmod> dates, CSS minifying and the copy for the about, contact,
// privacy and FAQ blocks.
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { esc, money } from "./lib.mjs";

export const DOMAIN = "hazwoperosha.us";
// The IndexNow key every site serves at /<key>.txt (tools/indexnow.mjs submits changed URLs with it).
export const INDEXNOW_KEY = "9300793dac54ec99fe50a20348f6d857";
export const PHONE = "+1-866-429-6742";
export const PHONE_HREF = "tel:+18664296742";
export const PHONE_SHOW = "(866) 429-6742";
export const EMAIL = "info@hazwoper-osha.com";
export const ADDRESS = "11901 Santa Monica Blvd., Suite 414, Los Angeles, CA 90025";

// HAZWOPER OSHA Training, LLC exactly as hazwoper-osha.com describes itself in its own JSON-LD. Every
// site uses the same @id, so search engines and AI models see one company behind all of them.
export const ORG_ID = "https://hazwoper-osha.com/#organization";
export const ORG = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "HAZWOPER OSHA Training, LLC",
  description: "Online OSHA HAZWOPER, hazardous waste, DOT hazmat and workplace safety training. Self-paced courses with a certificate of completion, sold per seat for individuals and crews.",
  url: "https://hazwoper-osha.com/",
  logo: "https://media.hazwoper-osha.com/wp-content/uploads/2023/02/1676446749/logo-final.webp",
  email: EMAIL,
  telephone: PHONE,
  contactPoint: [{ "@type": "ContactPoint", telephone: PHONE, email: EMAIL, contactType: "customer service" }],
  address: {
    "@type": "PostalAddress", streetAddress: "11901 Santa Monica Blvd., Suite 414", addressLocality: "Los Angeles",
    addressRegion: "CA", postalCode: "90025", addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/HazwoperOsha",
    "https://twitter.com/HazwoperOsha/",
    "https://www.instagram.com/hazwoper_osha_training/",
    "https://www.youtube.com/@hazwoper-osha",
    "https://www.linkedin.com/company/hazwoper-osha/",
    "https://www.pinterest.com/HazwoperOsha/",
  ],
};

export const TITLE_MAX = 60;
export const DESC_MAX = 160;

// "Name | Brand" when it fits in 60 characters, otherwise just the name. A title written with several
// " | " parts (the home pages) loses parts from the end until it fits, keeping at least the first.
export function fitTitle(main, brand) {
  if (brand && `${main} | ${brand}`.length <= TITLE_MAX) return `${main} | ${brand}`;
  const parts = main.split(" | ");
  while (parts.length > 1 && parts.join(" | ").length > TITLE_MAX) parts.pop();
  return parts.join(" | ");
}

// The first candidate between 20 and 60 characters (falls back to the last one).
export function pickTitle(...candidates) {
  const list = candidates.filter(Boolean);
  return list.find((t) => t.length <= TITLE_MAX && t.length >= 20) || list.at(-1);
}

// Titles for the about, contact and privacy pages: the site's name when it fits, the company's otherwise.
export function infoTitle(kind, h1, brand) {
  const co = "HAZWOPER OSHA Training";
  const bare = brand.replace(/ Training$/, "");
  if (kind === "about") return pickTitle(h1.includes(brand) ? `${h1} | ${co}` : `${h1} | ${brand}`, h1.includes(brand) ? h1 : "", `${h1.replace(brand, bare)}`, `About this site | ${co}`);
  if (kind === "contact") return pickTitle(h1.includes(brand) ? `${h1} | ${co}` : `${h1} | ${brand}`, h1.includes(brand) ? h1 : "", `${h1.replace(brand, bare)}`, `Contact ${co} | ${PHONE_SHOW}`);
  return pickTitle(`${h1} | ${brand}`, `${h1} | ${co}`);
}

// Adds sentences from `extra` to `first` while the result fits in 160 characters. A first sentence that's
// already too long is cut at a sentence or word boundary.
export function fitDescription(first, ...extra) {
  let out = clip(String(first).trim());
  for (const e of extra.filter(Boolean)) {
    const next = `${out} ${e}`;
    if (next.length <= DESC_MAX) out = next;
  }
  return out;
}

function clip(s) {
  if (s.length <= DESC_MAX) return s;
  const cut = s.slice(0, DESC_MAX);
  const sentence = cut.lastIndexOf(". ");
  if (sentence > 90) return cut.slice(0, sentence + 1);
  return cut.slice(0, cut.lastIndexOf(" ", DESC_MAX - 1)).replace(/[,;:\s]+$/, "") + "…";
}

// "40 Hours" -> "PT40H", "15 Min" -> "PT15M" (Course schema wants ISO 8601 durations).
export function isoDuration(text) {
  const m = String(text).match(/([\d.]+)\s*(hour|hr|min)/i);
  if (!m) return undefined;
  const n = Number(m[1]);
  if (/^min/i.test(m[2])) return `PT${Math.round(n)}M`;
  const h = Math.floor(n), min = Math.round((n - h) * 60);
  return `PT${h ? h + "H" : ""}${min ? min + "M" : ""}`;
}

// Sitemap <lastmod> that only moves when a page really changes. content/lastmod.json keeps a hash and a
// date for every URL; a page whose hash is unchanged keeps its old date, so rebuilding changes nothing.
export function lastmods(file, today = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10)) {
  const old = existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : {};
  const seen = {};
  return {
    date(url, text) {
      const hash = createHash("sha1").update(text).digest("hex").slice(0, 12);
      const prev = old[url];
      seen[url] = prev && prev[0] === hash ? prev : [hash, today];
      return seen[url][1];
    },
    // Writes the URLs seen this run and keeps the old entries for hosts this run didn't build.
    save(hosts) {
      const keep = Object.entries(old).filter(([u]) => !hosts.has(new URL(u).host));
      const all = Object.fromEntries([...keep, ...Object.entries(seen)].sort(([a], [b]) => a.localeCompare(b)));
      writeFileSync(file, JSON.stringify(all, null, 0).replace(/\],"/g, '],\n"') + "\n");
    },
  };
}

export function sitemapXml(entries) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
    entries.map((e) => `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod></url>`).join("\n")}\n</urlset>\n`;
}

export function robotsTxt(base) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;
}

export function shortHash(text) {
  return createHash("sha1").update(text).digest("hex").slice(0, 10);
}

// Comments and extra whitespace out, quoted strings and url() left exactly as written.
export function minifyCss(css) {
  const keep = [];
  const masked = css.replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|url\([^)]*\)/g, (m) => `\u0000${keep.push(m) - 1}\u0000`);
  return masked.replace(/\s+/g, " ").replace(/\s*([{};,>])\s*/g, "$1").replace(/;}/g, "}").trim()
    .replace(/\u0000(\d+)\u0000/g, (_, i) => keep[i]);
}

// Markdown twin path for a page path: "/" -> "/index.md", "/courses/x" -> "/courses/x.md".
export function mdPath(path) {
  return path.endsWith("/") ? path + "index.md" : path + ".md";
}

// Copy for the about, contact and privacy pages and the course FAQ. Facts only: everything here is
// stated on hazwoper-osha.com or done by sites/_shared/checkout.js.
const TEXT = {
  en: {
    about: "About", contact: "Contact", privacy: "Privacy", legal: "Site information", faq: "Frequently asked questions",
    aboutH1: (b) => `About ${b}`,
    aboutDesc: (b) => `${b} sells online training from HAZWOPER OSHA Training, LLC: self-paced courses with a certificate of completion, priced per seat.`,
    aboutBody: (site, h) => `
<h2>Who delivers the training</h2>
<p>Every course on ${esc(site.brand)} is delivered by HAZWOPER OSHA Training, LLC on its online learning portal at <a href="https://hazwoper-osha.com/">hazwoper-osha.com</a>. When you enroll here, your order goes to hazwoper-osha.com and your course login arrives by email right after payment.</p>
<h2>How the courses work</h2>
<p>Courses are 100% online and self-paced, and each one includes a certificate of completion. Prices are per seat, and you can buy seats for a whole crew in one checkout. To pay by invoice or purchase order, call <a href="${PHONE_HREF}">${PHONE_SHOW}</a> or email <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
<h2>Courses on this site</h2>
<ul class="info-list">${h.courses.map((c) => `<li><a href="${c.url}">${esc(c.name)}</a>: ${esc(c.duration)}, ${money(c.price)} per seat</li>`).join("")}</ul>
${h.total ? `<p>The <a href="/courses/#all">full catalog of ${h.total} trainings</a> can be ordered here too${h.guides.length ? `, and the <a href="/guides/">guides</a> explain the rules behind them in plain language` : ""}.</p>` : `<p>More courses from the same provider are listed at <a href="https://hazwoper-osha.com/online-courses">hazwoper-osha.com/online-courses</a>.</p>`}
<h2>Company details</h2>
<ul class="info-list"><li>HAZWOPER OSHA Training, LLC</li><li>Mailing address: ${ADDRESS}</li><li>Phone: <a href="${PHONE_HREF}">${PHONE_SHOW}</a> (toll free)</li><li>Email: <a href="mailto:${EMAIL}">${EMAIL}</a></li><li>More about the company: <a href="https://hazwoper-osha.com/about">hazwoper-osha.com/about</a></li></ul>`,
    contactH1: (b) => `Contact ${b}`,
    contactDesc: (b) => `Call ${PHONE_SHOW} or email ${EMAIL} about a course, a crew order, an invoice or a certificate from ${b}.`,
    contactBody: (site) => `
<h2>Phone</h2>
<p><a href="${PHONE_HREF}">${PHONE_SHOW}</a> (toll free). Call to ask which course fits a job, to order seats for a crew, or to pay by invoice or purchase order.</p>
<h2>Email</h2>
<p><a href="mailto:${EMAIL}">${EMAIL}</a>. Include the course name and the number of seats if you're ordering for a team.</p>
<h2>Mailing address</h2>
<p>HAZWOPER OSHA Training, LLC<br>11901 Santa Monica Blvd., Suite 414<br>Los Angeles, CA 90025</p>
<p>This is the corporate office mailing address and the California training center, which is open by appointment only. The courses on ${esc(site.brand)} are online.</p>
<h2>Already enrolled?</h2>
<p>Sign in to your course at <a href="https://hazwoper-osha.com/login">hazwoper-osha.com/login</a>. To check a certificate, use <a href="https://hazwoper-osha.com/certificate-verification">certificate verification</a>. You can also write through the <a href="https://hazwoper-osha.com/contact">contact form on hazwoper-osha.com</a>.</p>`,
    privacyH1: "Privacy notice",
    privacyDesc: (b) => `What ${b} collects: analytics from Google Analytics and Microsoft Clarity, and the details you enter at checkout, which go to Stripe and hazwoper-osha.com.`,
    privacyBody: (site, host) => `
<p>This notice covers ${esc(host)}. The full <a href="https://hazwoper-osha.com/privacy-policy">privacy policy of HAZWOPER OSHA Training, LLC</a> also applies, because that company runs the courses sold here.</p>
<h2>Analytics</h2>
<p>Pages on this site load Google Analytics and Microsoft Clarity. They use cookies and similar technology to count visits and to record how pages are used, such as clicks and scrolling, so the site can be improved.</p>
<h2>Checkout</h2>
<p>When you enroll, the checkout form asks for your name, email, phone, company (optional), billing address and the number of seats. Your card details go straight to Stripe, the payment processor, through Stripe's card form and are never stored on this site. Your name, contact details and order are sent to hazwoper-osha.com to create your learning account and your order.</p>
<h2>Accounts</h2>
<p>This site has no sign-in of its own. Your course account lives on hazwoper-osha.com.</p>
<h2>Your choices</h2>
<p>You can block or delete cookies in your browser settings. Google offers a <a href="https://tools.google.com/dlpage/gaoptout">browser add-on to opt out of Google Analytics</a>.</p>
<h2>Questions</h2>
<p>Email <a href="mailto:${EMAIL}">${EMAIL}</a>, call <a href="${PHONE_HREF}">${PHONE_SHOW}</a>, or write to HAZWOPER OSHA Training, LLC, ${ADDRESS}.</p>`,
    faqs: (c) => [
      [`How long is ${c.name}?`, `${c.duration.toLowerCase()} of online training. It's self-paced, so you can work through it in several sittings.`],
      [`How much does ${c.name} cost?`, `${money(c.price)} per seat. To train a crew, choose the number of seats at checkout.`],
      c.citation && [`Which regulation does it cover?`, `It covers ${c.citation}.`],
      [`Do I get a certificate?`, `Yes. A certificate of completion is included with the course.`],
      [`Who delivers the course?`, `HAZWOPER OSHA Training, LLC, on its learning portal at hazwoper-osha.com. Your login arrives by email right after payment.`],
      [`Can I pay by invoice or purchase order?`, `Yes. Call ${PHONE_SHOW} or email ${EMAIL}. Card payments go through Stripe at checkout.`],
    ].filter(Boolean),
    coursePitch: (c) => [`${durationAdj(c.duration)} online course, ${money(c.price)} per seat.`, `Self-paced, with a certificate of completion.`, `Enroll a whole crew in one checkout.`],
    guidePitch: (g, brand) => [`A ${g.minutes}-minute guide from ${brand}.`, `Plain-language rules, plus the courses that cover them.`],
  },
  es: {
    about: "Quiénes somos", contact: "Contacto", privacy: "Privacidad", legal: "Información del sitio", faq: "Preguntas frecuentes",
    aboutH1: () => "Quiénes somos",
    aboutDesc: (b) => `${b} ofrece capacitación en línea de HAZWOPER OSHA Training, LLC: cursos a su propio ritmo, con certificado al terminar y precio por asiento.`,
    aboutBody: (site, h) => `
<h2>Quién imparte la capacitación</h2>
<p>Todos los cursos de ${esc(site.brand)} los imparte HAZWOPER OSHA Training, LLC en su portal de aprendizaje en <a href="https://hazwoper-osha.com/">hazwoper-osha.com</a>. Al inscribirse aquí, su pedido va a hazwoper-osha.com y recibe su acceso al curso por correo justo después del pago.</p>
<h2>Cómo funcionan los cursos</h2>
<p>Los cursos son 100% en línea y a su propio ritmo, y cada uno incluye un certificado al terminar. El precio es por asiento y puede comprar asientos para toda una cuadrilla en un solo pago. Para pagar con factura u orden de compra, llame al <a href="${PHONE_HREF}">${PHONE_SHOW}</a> o escriba a <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
<h2>Cursos en este sitio</h2>
<ul class="info-list">${h.courses.map((c) => `<li><a href="${c.url}">${esc(c.name)}</a>: ${esc(c.duration)}, ${money(c.price)} por asiento</li>`).join("")}</ul>
${h.total ? `<p>También puede pedir aquí cualquiera de las <a href="/courses/#all">${h.total} capacitaciones del catálogo</a>${h.guides.length ? `, y las <a href="/guides/">guías</a> explican las normas en palabras sencillas` : ""}.</p>` : `<p>Vea más cursos del mismo proveedor en <a href="https://hazwoper-osha.com/online-courses">hazwoper-osha.com/online-courses</a>.</p>`}
<h2>Datos de la empresa</h2>
<ul class="info-list"><li>HAZWOPER OSHA Training, LLC</li><li>Dirección postal: ${ADDRESS}</li><li>Teléfono: <a href="${PHONE_HREF}">${PHONE_SHOW}</a> (gratuito)</li><li>Correo: <a href="mailto:${EMAIL}">${EMAIL}</a></li><li>Más sobre la empresa: <a href="https://hazwoper-osha.com/about">hazwoper-osha.com/about</a></li></ul>`,
    contactH1: () => "Contacto",
    contactDesc: (b) => `Llame al ${PHONE_SHOW} o escriba a ${EMAIL} sobre un curso, un pedido para su cuadrilla, una factura o un certificado de ${b}.`,
    contactBody: (site) => `
<h2>Teléfono</h2>
<p><a href="${PHONE_HREF}">${PHONE_SHOW}</a> (llamada gratuita). Llame para saber qué curso necesita, para pedir asientos para una cuadrilla o para pagar con factura u orden de compra.</p>
<h2>Correo electrónico</h2>
<p><a href="mailto:${EMAIL}">${EMAIL}</a>. Si pide para un equipo, incluya el nombre del curso y el número de asientos.</p>
<h2>Dirección postal</h2>
<p>HAZWOPER OSHA Training, LLC<br>11901 Santa Monica Blvd., Suite 414<br>Los Angeles, CA 90025</p>
<p>Es la dirección postal de la oficina corporativa y del centro de capacitación de California, que atiende solo con cita. Los cursos de ${esc(site.brand)} son en línea.</p>
<h2>¿Ya está inscrito?</h2>
<p>Entre a su curso en <a href="https://hazwoper-osha.com/login">hazwoper-osha.com/login</a>. Para verificar un certificado, use la <a href="https://hazwoper-osha.com/certificate-verification">verificación de certificados</a>. También puede escribir por el <a href="https://hazwoper-osha.com/contact">formulario de contacto de hazwoper-osha.com</a>.</p>`,
    privacyH1: "Aviso de privacidad",
    privacyDesc: (b) => `Qué datos recopila ${b}: analítica de Google Analytics y Microsoft Clarity, y lo que escribe al pagar, que va a Stripe y a hazwoper-osha.com.`,
    privacyBody: (site, host) => `
<p>Este aviso cubre ${esc(host)}. También aplica la <a href="https://hazwoper-osha.com/privacy-policy">política de privacidad completa de HAZWOPER OSHA Training, LLC</a>, la empresa que imparte los cursos que se venden aquí.</p>
<h2>Analítica</h2>
<p>Las páginas de este sitio cargan Google Analytics y Microsoft Clarity. Usan cookies y tecnologías similares para contar visitas y registrar cómo se usan las páginas, como clics y desplazamiento, para mejorar el sitio.</p>
<h2>Pago</h2>
<p>Al inscribirse, el formulario de pago pide su nombre, correo, teléfono, empresa (opcional), dirección de facturación y el número de asientos. Los datos de su tarjeta van directamente a Stripe, el procesador de pagos, a través de su formulario seguro, y nunca se guardan en este sitio. Su nombre, datos de contacto y pedido se envían a hazwoper-osha.com para crear su cuenta de aprendizaje y su pedido.</p>
<h2>Cuentas</h2>
<p>Este sitio no tiene inicio de sesión propio. Su cuenta del curso está en hazwoper-osha.com.</p>
<h2>Sus opciones</h2>
<p>Puede bloquear o borrar las cookies en la configuración de su navegador. Google ofrece un <a href="https://tools.google.com/dlpage/gaoptout">complemento para no participar en Google Analytics</a>.</p>
<h2>Preguntas</h2>
<p>Escriba a <a href="mailto:${EMAIL}">${EMAIL}</a>, llame al <a href="${PHONE_HREF}">${PHONE_SHOW}</a> o escriba a HAZWOPER OSHA Training, LLC, ${ADDRESS}.</p>`,
    faqs: (c) => [
      [`¿Cuánto dura ${c.name}?`, `${c.duration} de capacitación en línea. Es a su propio ritmo, así que puede hacerlo en varias sesiones.`],
      [`¿Cuánto cuesta ${c.name}?`, `${money(c.price)} por asiento. Para capacitar a una cuadrilla, elija el número de asientos al pagar.`],
      c.citation && [`¿Qué norma cubre?`, `Cubre ${c.citation}.`],
      [`¿Recibo un certificado?`, `Sí. El curso incluye un certificado al terminar.`],
      [`¿Quién imparte el curso?`, `HAZWOPER OSHA Training, LLC, en su portal de aprendizaje en hazwoper-osha.com. Recibe su acceso por correo justo después del pago.`],
      [`¿Puedo pagar con factura u orden de compra?`, `Sí. Llame al ${PHONE_SHOW} o escriba a ${EMAIL}. Los pagos con tarjeta se hacen con Stripe al inscribirse.`],
    ].filter(Boolean),
    coursePitch: (c) => [`Curso en línea de ${c.duration}, ${money(c.price)} por asiento.`, `A su propio ritmo y con certificado.`, `Inscriba a toda su cuadrilla en un solo pago.`],
    guidePitch: (g, brand) => [`Guía de ${g.minutes} minutos de ${brand}.`, `Las normas en palabras sencillas y los cursos que las cubren.`],
  },
};

// "8 Hours" -> "An 8-hour", "15 Min" -> "A 15-minute" (for "An 8-hour online course").
function durationAdj(d) {
  const m = String(d).match(/([\d.]+)\s*(hour|hr|min)/i);
  if (!m) return d;
  const adj = `${m[1]}-${/^min/i.test(m[2]) ? "minute" : "hour"}`;
  return `${/^(8|11|18)\b|^8\d/.test(m[1]) ? "An" : "A"} ${adj}`;
}

export function text(lang) {
  return TEXT[lang] || TEXT.en;
}

// The about/contact/privacy links every page's footer gets, before its closing </footer>.
export function legalNav(lang) {
  const t = text(lang);
  return `<nav class="foot-legal" aria-label="${t.legal}"><a href="/about">${t.about}</a><a href="/contact">${t.contact}</a><a href="/privacy">${t.privacy}</a><a href="/llms.txt">llms.txt</a><a href="/sitemap.xml">Sitemap</a></nav>`;
}

export function withLegalNav(html, lang) {
  const at = html.lastIndexOf("</footer>");
  return at === -1 ? html + legalNav(lang) : html.slice(0, at) + legalNav(lang) + html.slice(at);
}
