// cert-tracker.hazwoperosha.us: free crew HAZWOPER certificate tracker (browser-only). Dashboard.
export default {
  brand: "Cert Tracker",
  logo: `<span class="pulse"></span>Cert Tracker`,
  title: "Free HAZWOPER Certificate Tracker for Crews | Cert Tracker",
  description: "Track your crew's HAZWOPER certificates and refresher due dates in your browser. See who's current, due soon or overdue, export a CSV and renew in one click.",
  theme: "#1971c2",
  fonts: "family=Plus+Jakarta+Sans:wght@500;700;800&family=Inter:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#1971c2"/><rect x="7" y="18" width="4" height="7" fill="#fff"/><rect x="14" y="12" width="4" height="13" fill="#fff"/><rect x="21" y="7" width="4" height="18" fill="#69db7c"/></svg>`,
  hero: {
    title: "Who's due <span>for a refresher?</span>",
    lede: "Add your crew, the date of each person's last HAZWOPER certificate and see at a glance who's current, due soon or overdue.",
    cta: [595, "Renew a worker · $59.99"],
    alt: ["#tracker", "Open the tracker"],
  },
  coursesTagline: "Refreshers and initial courses for keeping a crew current.",
  guidesTagline: "Keeping training records an inspector will accept.",

  courses: [
    { id: 595, short: "8-Hour Refresher", summary: "The annual refresher for site workers.", body: `Required every 12 months.`, topics: ["Review", "Case studies"], who: "Certified workers." },
    { id: 596, short: "Supervisor Refresher", summary: "The annual refresher for supervisors.", body: `Eight hours a year.`, topics: ["Plan upkeep", "Briefings"], who: "Supervisors." },
    { id: 574, short: "Responder Refresher", summary: "The annual refresher for responders.", body: `Annual training under (q)(8).`, topics: ["ICS review", "PPE"], who: "Responders." },
    { id: 594, short: "TSD Refresher", summary: "The annual refresher for TSD workers.", body: `Eight hours a year under (p).`, topics: ["(p) review"], who: "TSDF workers." },
    { id: 587, short: "40-Hour HAZWOPER", summary: "For new hires, or lapsed workers who need to start over.", body: `The full initial course.`, topics: ["Hazard recognition", "PPE", "Decon"], who: "New site workers." },
  ],

  feature: (h) => `<section class="sec tr-sec" id="tracker"><div class="wrap">
<form class="tr-add" id="trForm" method="post">
<input id="trName" placeholder="Worker name" required aria-label="Worker name">
<select id="trType" aria-label="Certificate">${h.courses.slice(0, 4).map((c) => `<option value="${c.id}">${h.esc(c.short)}</option>`).join("")}</select>
<input id="trDate" type="date" required aria-label="Date of last certificate">
<button class="btn" type="submit">Add</button>
</form>
<div class="tr-stats"><div><b id="sOk">0</b><span>Current</span></div><div><b id="sSoon">0</b><span>Due within 60 days</span></div><div><b id="sLate">0</b><span>Overdue</span></div></div>
<div class="table-wrap"><table class="tr" id="trTable"><thead><tr><th>Worker</th><th>Renews with</th><th>Last certificate</th><th>Due</th><th>Status</th><th></th></tr></thead><tbody></tbody></table></div>
<div class="tr-actions"><button type="button" class="btn btn-alt" id="trCsv">Export CSV</button><span>Saved in this browser only. Nothing is uploaded.</span></div>
</div></section>
<script>
(function () {
  var KEY = "hz-cert-tracker-v1", list = [];
  try { list = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) {}
  var tb = document.querySelector("#trTable tbody"), f = document.getElementById("trForm");
  function due(d) { var x = new Date(d + "T00:00:00"); x.setFullYear(x.getFullYear() + 1); return x; }
  function fmt(x) { return x.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }
  function draw() {
    tb.textContent = ""; var ok = 0, soon = 0, late = 0;
    list.slice().sort(function (a, b) { return due(a.d) - due(b.d); }).forEach(function (w) {
      var dd = due(w.d), days = Math.ceil((dd - new Date()) / 864e5), st = days < 0 ? "late" : days <= 60 ? "soon" : "ok";
      if (st === "ok") ok++; else if (st === "soon") soon++; else late++;
      var c = (window.HUB_COURSES || {})[w.c] || { name: "#" + w.c };
      var tr = document.createElement("tr"); tr.className = st;
      [w.n, c.name, fmt(new Date(w.d + "T00:00:00")), fmt(dd)].forEach(function (t) { var td = document.createElement("td"); td.textContent = t; tr.appendChild(td); });
      var s = document.createElement("td"); s.innerHTML = '<span class="badge"></span>';
      s.firstChild.textContent = st === "late" ? "Overdue " + (-days) + "d" : st === "soon" ? "Due in " + days + "d" : "Current";
      tr.appendChild(s);
      var a = document.createElement("td");
      a.innerHTML = (st !== "ok" ? '<a class="btn btn-sm" rel="nofollow" href="?buy=' + w.c + '" data-buy="' + w.c + '">Renew</a> ' : "") + '<button type="button" class="x" aria-label="Remove">×</button>';
      a.querySelector(".x").addEventListener("click", function () { list.splice(list.indexOf(w), 1); save(); draw(); });
      tr.appendChild(a); tb.appendChild(tr);
    });
    document.getElementById("sOk").textContent = ok; document.getElementById("sSoon").textContent = soon; document.getElementById("sLate").textContent = late;
  }
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    list.push({ n: document.getElementById("trName").value.trim(), c: document.getElementById("trType").value, d: document.getElementById("trDate").value });
    save(); draw(); f.reset();
  });
  document.getElementById("trCsv").addEventListener("click", function () {
    var rows = [["Worker", "Course", "Last certificate", "Due"]].concat(list.map(function (w) { var c = (window.HUB_COURSES || {})[w.c] || {}; return [w.n, c.name || w.c, w.d, due(w.d).toISOString().slice(0, 10)]; }));
    var csv = rows.map(function (r) { return r.map(function (v) { return '"' + String(v).replace(/"/g, '""') + '"'; }).join(","); }).join("\\n");
    var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" })); a.download = "hazwoper-certificates.csv";
    document.body.appendChild(a); a.click(); a.remove();
  });
  draw();
})();
</script>`,

  guides: [
    {
      slug: "hazwoper-training-records-inspectors-accept",
      title: "HAZWOPER training records an inspector will accept",
      description: "What to keep for each worker, and how to organize it.",
      date: "2026-10-25",
      courses: [595, 587],
      body: `When OSHA asks how a worker was trained, the answer has to be on paper. 29 CFR 1910.120(e)(6) requires written certification that employees completed training, and employers need to be able to show it.

## For each worker, keep

- **Initial training certificate**: 40-hour or 24-hour, provider, date and hours
- **Field experience record**: dates, site, supervisor signature
- **Every annual refresher certificate**
- **Supervisor training**, if applicable
- **Responder training**, by level, if applicable
- **Equivalency documentation**, if prior training was accepted under (e)(9)
- **Respirator fit tests** and **medical clearance** (medical records are kept separately and confidentially)

## Organize it

- One folder per worker, digital or paper
- A summary list or tracker showing each person's due dates
- Copies on site for the crew working there, where practical

## Use the tracker

The tracker above gives a quick view of who's current. Keep the certificates themselves in your records system.

{{buy:595}}`,
    },
    {
      slug: "what-to-do-when-a-worker-lapses",
      title: "What to do when a worker's HAZWOPER lapses",
      description: "Someone's refresher is overdue. The practical steps to get them back on site.",
      date: "2026-10-25",
      courses: [595, 587],
      body: `## 1. Take them off HAZWOPER tasks

A worker who's past 12 months is out of compliance until they complete a refresher. Assign other work until then.

## 2. Assess the gap

- **Weeks or a few months:** enroll them in [[595]] right away.
- **Years:** decide whether they can still demonstrate competency. Many employers require the initial course again ([[587]]) after a long lapse, especially if the worker has been away from HAZWOPER work.

## 3. Document the decision

Record what you decided and why, especially if you accept prior training under the equivalency provision.

## 4. Prevent the next one

Put everyone's due dates in a tracker with reminders 60 days ahead, and consider moving the crew to one renewal month.`,
    },
  ],
};
