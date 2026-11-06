// hub.hazwoperosha.us: the notch search, status menu, course finder and directory. Copied to sites/hub/ by tools/hub.mjs.
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, reduce ? Math.min(ms, 60) : ms); }); };

  // ---- Shortcut hints that follow the device (INPUT in tools/hub.mjs sets the first value) ----------------
  var root = document.documentElement, coarse = matchMedia("(hover: none) and (pointer: coarse)");
  var os = /mac|iphone|ipad|ipod/i.test(((navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "") + " " + navigator.userAgent) ? "mac" : "pc";
  function setInput(touch) { root.dataset.input = touch ? "touch" : os; }
  function onCoarse() { setInput(coarse.matches); }
  if (!root.dataset.input) onCoarse();
  if (coarse.addEventListener) coarse.addEventListener("change", onCoarse); else if (coarse.addListener) coarse.addListener(onCoarse);
  // A tablet with a hardware keyboard: pressing ⌘K or Ctrl+K there switches the hints to keys.
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K") && root.dataset.input === "touch") setInput(false);
  }, true);

  // ---- Keep the menu bar clear of the notch -----------------------------------------------------------
  // hub.css shows the names, links and clock only at widths where they clear the notch. Fonts, locales and the
  // clock's own text change those widths, so this also hides whatever still reaches it: links, then the full
  // name (for the short one), then the short name; the clock on the right.
  var CUTS = ["cut-links", "cut-full", "cut-short", "cut-clock"];
  function clearNotch() {
    var bar = $(".menubar");
    if (!bar) return;
    CUTS.forEach(function (c) { bar.classList.toggle(c, false); });
    var vw = root.clientWidth, w = parseFloat(getComputedStyle(root).getPropertyValue("--notch")) || 200;
    var L = (vw - w) / 2 - 10, R = (vw + w) / 2 + 10;
    var edge = function () {
      return $$(".left > *", bar).reduce(function (m, el) { return el.offsetWidth ? Math.max(m, el.getBoundingClientRect().right) : m; }, 0);
    };
    for (var i = 0; i < 3 && edge() > L; i++) bar.classList.add(CUTS[i]);
    var c = $(".clock", bar);
    if (c && c.offsetWidth && c.getBoundingClientRect().left < R) bar.classList.add("cut-clock");
  }
  var fitQueued = false;
  addEventListener("resize", function () {
    if (fitQueued) return;
    fitQueued = true;
    requestAnimationFrame(function () { fitQueued = false; clearNotch(); });
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(clearNotch);

  // ---- Menu bar clock -------------------------------------------------------------------------------
  var clock = $("#clock");
  function tick() {
    if (!clock) return;
    var d = new Date();
    clock.textContent = d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" }) + "  " +
      d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
    clearNotch();
  }
  tick(); setInterval(tick, 15000);

  // ---- Status menu ----------------------------------------------------------------------------------
  var statusBtn = $("#statusBtn"), menu = $("#statusMenu");
  function setMenu(open) {
    if (!menu) return;
    menu.hidden = !open;
    statusBtn.setAttribute("aria-expanded", String(open));
    if (open) { var first = $("[role=menuitem]", menu); if (first) first.focus(); }
  }
  if (statusBtn) statusBtn.addEventListener("click", function (e) { e.stopPropagation(); setMenu(menu.hidden); });
  document.addEventListener("click", function (e) {
    if (menu && !menu.hidden && !menu.contains(e.target)) setMenu(false);
    if (island.classList.contains("open") && !island.contains(e.target) && !e.target.closest("[data-act=search]")) closeIsland();
  });
  if (menu) {
    menu.addEventListener("click", function (e) { if (e.target.closest("[role=menuitem]")) setMenu(false); });
    menu.addEventListener("keydown", function (e) {
      var items = $$("[role=menuitem]", menu), i = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
      if (e.key === "Escape") { setMenu(false); statusBtn.focus(); }
    });
  }

  // ---- Site index: the directory rows on the home page, or fetched from it elsewhere -----------------
  var index = null;
  function readRows(root) {
    return $$("li[data-q]", root).map(function (li) {
      var a = $("a", li);
      return { li: li, q: (li.dataset.q + " " + a.textContent).toLowerCase(), name: li.dataset.name, cat: li.dataset.cat, href: a.href,
        title: $(".t b", a).textContent, desc: $(".t small", a).textContent, tile: $(".tile", a).outerHTML };
    });
  }
  function getIndex() {
    if (index) return Promise.resolve(index);
    if ($("#list")) return Promise.resolve(index = readRows(document));
    return fetch("/", { credentials: "same-origin" }).then(function (r) { return r.text(); }).then(function (html) {
      return (index = readRows(new DOMParser().parseFromString(html, "text/html")));
    }).catch(function () { return (index = []); });
  }
  function tokens(q) { return q.toLowerCase().replace(/[^a-z0-9.\- ]+/g, " ").split(/\s+/).filter(Boolean); }
  function search(list, q) {
    var t = tokens(q);
    if (!t.length) return [];
    return list.map(function (s) {
      var score = 0, title = s.title.toLowerCase();
      for (var i = 0; i < t.length; i++) {
        if (s.q.indexOf(t[i]) === -1) return null;
        score += 1 + (title.indexOf(t[i]) !== -1 ? 3 : 0) + (s.name.indexOf(t[i]) === 0 ? 2 : 0);
      }
      return { s: s, score: score };
    }).filter(Boolean).sort(function (a, b) { return b.score - a.score || a.s.title.localeCompare(b.s.title); }).map(function (r) { return r.s; });
  }
  function resultHTML(s) {
    var a = document.createElement("a");
    a.href = s.href;
    a.innerHTML = s.tile + "<span><b></b><small></small></span>";
    $("b", a).textContent = s.title;
    $("small", a).textContent = s.desc;
    var li = document.createElement("li"); li.appendChild(a); return li;
  }

  // ---- The notch ------------------------------------------------------------------------------------
  var island = $("#island"), idle = $("#islandIdle"), input = $("#islandInput"), scan = $("#islandScan"),
    msg = $("#islandMsg"), results = $("#islandResults"), closeBtn = $("#islandClose");
  var lastFocus = null, sel = -1, timer = 0, busy = false;

  function ring(state) {
    scan.classList.remove("scanning", "ok", "bad");
    if (state) scan.classList.add(state);
  }
  // The panel grows to fit its results, but never past the visible screen (short landscape phones, or an
  // on-screen keyboard): the results list scrolls instead.
  function fit() {
    var vh = window.visualViewport ? window.visualViewport.height : innerHeight;
    results.style.maxHeight = Math.max(110, vh - 100) + "px";
    var h = $(".body", island).scrollHeight;
    island.style.setProperty("--h", h + "px");
    island.classList.toggle("tall", h > 64);
  }
  function shake() {
    island.classList.remove("shake"); void island.offsetWidth; island.classList.add("shake");
  }
  var gen = 0;
  function openIsland() {
    if (busy) { gen++; busy = false; }
    lastFocus = document.activeElement;
    msg.hidden = true; input.hidden = false; closeBtn.hidden = false;
    island.classList.add("open");
    island.setAttribute("aria-modal", "true");
    ring(null); fit();
    input.focus({ preventScroll: true });
    getIndex();
  }
  function closeIsland() {
    island.classList.remove("open", "tall", "shake");
    island.setAttribute("aria-modal", "false");
    input.value = ""; results.hidden = true; results.innerHTML = ""; sel = -1; ring(null);
    if (lastFocus && lastFocus.focus && island.contains(document.activeElement)) lastFocus.focus();
  }
  function runSearch() {
    var q = input.value.trim();
    clearTimeout(timer);
    if (!q) { ring(null); results.hidden = true; results.innerHTML = ""; fit(); return; }
    ring("scanning");
    timer = setTimeout(function () {
      getIndex().then(function (list) {
        var found = search(list, q).slice(0, 5);
        results.innerHTML = ""; sel = found.length ? 0 : -1;
        found.forEach(function (s) { results.appendChild(resultHTML(s)); });
        if (found.length) { results.hidden = false; ring("ok"); highlight(); }
        else { results.hidden = true; ring("bad"); shake(); }
        fit();
      });
    }, 220);
  }
  function highlight() {
    var links = $$("a", results);
    links.forEach(function (a, i) { a.classList.toggle("on", i === sel); });
    var a = links[sel];
    if (!a) return;
    var rb = results.getBoundingClientRect(), ab = a.getBoundingClientRect();
    if (ab.top < rb.top) results.scrollTop -= rb.top - ab.top;
    else if (ab.bottom > rb.bottom) results.scrollTop += ab.bottom - rb.bottom;
  }
  // A short message in the panel: scanning, then success or failure, then back into the notch.
  function announce(title, sub, outcome, hold) {
    if (island.classList.contains("open") && !busy) return Promise.resolve();
    busy = true;
    var my = ++gen, live = function () { return my === gen; };
    input.hidden = true; closeBtn.hidden = true; results.hidden = true;
    $("b", msg).textContent = title; $("small", msg).textContent = sub; msg.hidden = false;
    island.classList.add("open"); ring("scanning"); fit();
    return wait(1300).then(function () {
      if (!live()) return;
      ring(outcome);
      if (outcome === "bad") shake();
      return wait(hold || 1200);
    }).then(function () {
      if (!live()) return;
      island.classList.remove("open", "tall");
      return wait(420);
    }).then(function () { if (!live()) return; busy = false; ring(null); msg.hidden = true; input.hidden = false; closeBtn.hidden = false; });
  }
  window.hubAnnounce = announce;

  idle.addEventListener("click", function (e) { e.stopPropagation(); openIsland(); });
  // A tap on the notch while it shows a message (the opening animation) opens search too.
  island.addEventListener("click", function (e) { if (busy) { e.stopPropagation(); openIsland(); } });
  if (window.visualViewport) window.visualViewport.addEventListener("resize", function () { if (island.classList.contains("open")) fit(); });
  closeBtn.addEventListener("click", closeIsland);
  input.addEventListener("input", runSearch);
  input.addEventListener("keydown", function (e) {
    var links = $$("a", results);
    if (e.key === "ArrowDown" && links.length) { e.preventDefault(); sel = (sel + 1) % links.length; highlight(); }
    else if (e.key === "ArrowUp" && links.length) { e.preventDefault(); sel = (sel - 1 + links.length) % links.length; highlight(); }
    else if (e.key === "Enter") { e.preventDefault(); if (links[sel]) location.href = links[sel].href; else if (input.value.trim()) shake(); }
  });
  island.addEventListener("keydown", function (e) { if (e.key === "Escape") { e.stopPropagation(); closeIsland(); } });
  document.addEventListener("keydown", function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) { e.preventDefault(); island.classList.contains("open") && !busy ? closeIsland() : openIsland(); }
    else if (e.key === "Escape" && menu && !menu.hidden) setMenu(false);
  });
  $$("[data-act=search]").forEach(function (b) { b.addEventListener("click", function (e) { e.stopPropagation(); setMenu(false); openIsland(); }); });

  // Once per visit, on the home page, the notch shows the catalog loading.
  var seen = false;
  try { seen = sessionStorage.getItem("hub-intro") === "1"; sessionStorage.setItem("hub-intro", "1"); } catch (e) {}
  var count = $$("li[data-q]").length;
  if (!seen && count) setTimeout(function () { announce("Industrial Certified Training", "Checking " + count + " course sites", "ok"); }, 650);

  // ---- Directory ------------------------------------------------------------------------------------
  var list = $("#list");
  if (list) {
    var rows = readRows(document), cat = "all", q = "", dirSearch = $("#dirSearch"), paneTitle = $("#paneTitle"),
      sort = $("#sort"), details = $("#details"), empty = $("#empty"), az = null;
    var sections = $$("section[data-cat]", list);
    var apply = function () {
      var matches = q ? search(rows, q) : rows, set = new Set(matches.map(function (r) { return r.li; })), shown = 0;
      rows.forEach(function (r) {
        var ok = set.has(r.li) && (cat === "all" || r.cat === cat);
        r.li.hidden = !ok; if (ok) shown++;
      });
      if (sort.value === "az") {
        if (!az) {
          az = document.createElement("section");
          az.innerHTML = "<h4>A–Z</h4><ul></ul>";
          list.insertBefore(az, list.firstChild);
        }
        var ul = $("ul", az);
        rows.slice().sort(function (a, b) { return a.title.localeCompare(b.title); }).forEach(function (r) { ul.appendChild(r.li); });
        sections.forEach(function (s) { s.hidden = true; });
        az.hidden = !shown;
      } else {
        if (az) { rows.forEach(function (r) { $("section[data-cat=" + r.cat + "] ul", list).appendChild(r.li); }); az.remove(); az = null; }
        sections.forEach(function (s) { s.hidden = !$$("li", s).some(function (li) { return !li.hidden; }); });
      }
      // Keep the hairline separators right when rows in the middle are hidden.
      $$("ul", list).forEach(function (ul) {
        var first = true;
        $$("li", ul).forEach(function (li) { if (!li.hidden) { $("a", li).style.borderTop = first ? "0" : ""; first = false; } });
      });
      empty.hidden = shown > 0;
    };
    $$("#cats button").forEach(function (b) {
      b.addEventListener("click", function () {
        $$("#cats button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        cat = b.dataset.cat;
        paneTitle.textContent = b.childNodes[1].textContent.trim();
        apply(); list.scrollTop = 0;
      });
    });
    dirSearch.addEventListener("input", function () { q = dirSearch.value.trim(); apply(); });
    sort.addEventListener("change", apply);
    details.addEventListener("change", function () { list.classList.toggle("compact", !details.checked); });
    try {
      if (localStorage.getItem("hub-compact") === "1") { details.checked = false; list.classList.add("compact"); }
      details.addEventListener("change", function () { try { localStorage.setItem("hub-compact", details.checked ? "0" : "1"); } catch (e) {} });
    } catch (e) {}
  }

  // ---- Course finder: one card per step -------------------------------------------------------------
  var onboard = $("#onboard");
  if (onboard) {
    var steps = $$(".step", onboard), dots = $$(".dots i", onboard), stepsBox = $(".steps", onboard), at = 0;
    var CHOICES = JSON.parse($("#choices").textContent);
    var picked = new Set(), kw = $("#kw"), workNext = $("#workNext");
    var show = function (n, back) {
      var from = steps[at], to = steps[n];
      stepsBox.style.height = from.offsetHeight + "px";
      from.hidden = true; to.hidden = false;
      to.classList.remove("in", "back", "play"); void to.offsetWidth; to.classList.add(back ? "back" : "in");
      var h = to.offsetHeight; stepsBox.style.height = h + "px";
      setTimeout(function () { stepsBox.style.height = ""; }, 520);
      dots.forEach(function (d, i) { d.classList.toggle("on", i === n); });
      at = n;
      var focus = $("input, button.choice, [data-next], a.btn", to);
      if (focus && n !== 3) setTimeout(function () { focus.focus({ preventScroll: true }); }, 80);
      if (n === 3) match();
    };
    onboard.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      if (b.hasAttribute("data-next")) show(at + 1);
      else if (b.hasAttribute("data-back")) show(at - 1, true);
      else if (b.hasAttribute("data-restart")) { picked.clear(); kw.value = ""; $$(".choice", onboard).forEach(function (c) { c.setAttribute("aria-pressed", "false"); }); workNext.disabled = true; show(0, true); }
      else if (b.dataset.choice) {
        var i = Number(b.dataset.choice), on = !picked.has(i);
        on ? picked.add(i) : picked.delete(i);
        b.setAttribute("aria-pressed", String(on));
        $(".grant", b).textContent = on ? "Chosen" : "Choose";
        workNext.disabled = picked.size === 0;
      }
    });
    $("#kwForm").addEventListener("submit", function (e) { e.preventDefault(); show(3); });

    var rank = function () {
      var all = readRows(document), cats = new Set(), boost = [], words = kw.value.trim();
      picked.forEach(function (i) { CHOICES[i].cats.forEach(function (c) { cats.add(c); }); boost = boost.concat(CHOICES[i].boost); });
      var hits = words ? search(all, words) : [];
      var scored = all.map(function (s) {
        var score = 0, b = boost.indexOf(s.name);
        if (cats.has(s.cat)) score += 2;
        if (b !== -1) score += 6 - Math.min(b, 4) * .5;
        var h = hits.indexOf(s);
        if (h !== -1) score += 9 - Math.min(h, 6);
        else if (words) score -= 1;
        if (s.cat === "tools") score -= 1.5;
        return { s: s, score: score };
      }).filter(function (r) { return r.score > 0; }).sort(function (a, b) { return b.score - a.score; });
      return { picks: scored.slice(0, 3).map(function (r) { return r.s; }), missed: !!words && !hits.length };
    };

    var match = function () {
      var enroll = $("#enroll"), segs = $$(".seg", enroll), text = $("#enrollText"), n = segs.length;
      var lines = ["Reading your answers", "Checking " + $$("li[data-q]").length + " course sites", "Ranking the best matches"];
      enroll.classList.remove("done");
      segs.forEach(function (s) { s.classList.remove("on"); });
      var result = rank();
      if (window.hubAnnounce) window.hubAnnounce("Course Finder", "Matching your answers", result.missed ? "bad" : "ok", 900);
      var i = 0, step = reduce ? 1 : 55;
      var lens = $(".lens img", enroll);
      (function fill() {
        if (at !== 3) return;
        segs[i].classList.add("on");
        text.textContent = lines[Math.min(2, Math.floor((i / n) * 3))] + "…";
        if (lens) lens.style.transform = "rotate(" + ((i / n) * 24 - 12) + "deg) scale(" + (1 + (i / n) * .06) + ")";
        i++;
        if (i < n) setTimeout(fill, step);
        else { enroll.classList.add("done"); setTimeout(function () { finish(result); }, reduce ? 0 : 420); }
      })();
    };

    var finish = function (result) {
      if (at !== 3) return;
      var picks = $("#picks");
      picks.innerHTML = "";
      result.picks.forEach(function (s) { picks.appendChild(resultHTML(s)); });
      $$("a", picks).forEach(function (a) { a.classList.add("site"); a.insertAdjacentHTML("beforeend", '<svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M4.5 2.5 8 6l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'); var sp = $("span:not(.tile)", a); if (sp) sp.className = "t"; });
      $("#doneTitle").textContent = result.missed ? "Closest matches." : "Your matches are ready.";
      $("#doneSub").textContent = result.missed
        ? "Nothing matched “" + kw.value.trim() + "” exactly, so these fit the work you chose."
        : "Start with the first one. Every site lists its courses, prices and enrollment.";
      show(4);
      requestAnimationFrame(function () { steps[4].classList.add("play"); });
    };
  }
})();
