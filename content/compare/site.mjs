// compare.hazwoperosha.us: compare any HAZWOPER courses side by side. Comparison table tool.
export default {
  title: "Compare HAZWOPER Courses Side by Side | Industrial Certified Training",
  description: "Pick up to three HAZWOPER, refresher, waste or data center courses and compare length, price, regulation and audience side by side, then enroll in the one that fits.",
  theme: "#0b7285",
  fonts: "family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600",
  hero: {
    title: "40 or 24? <span>Compare them.</span>",
    lede: "Not sure between two courses? Put up to three side by side and see the length, price, regulation and who each one is for.",
    cta: [587, "40-hour HAZWOPER · $249.99"],
    alt: ["#compare", "Open the comparison"],
  },
  coursesTitle: "Popular comparisons",
  coursesTagline: "Courses people compare most often.",
  guidesTagline: "The comparisons people ask about most.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "Initial training for general site workers.", body: `29 CFR 1910.120(e)(3)(i).`, topics: ["Hazard recognition", "PPE", "Monitoring", "Decon"], who: "General site workers." },
    { id: 581, short: "24-Hour HAZWOPER", summary: "Initial training for occasional and low-exposure workers.", body: `29 CFR 1910.120(e)(3)(ii)-(iii).`, topics: ["Who qualifies", "Hazard recognition", "PPE basics"], who: "Occasional and low-exposure workers." },
    { id: 582, short: "24-Hr TSD Operations", summary: "Initial training for TSD facility workers.", body: `29 CFR 1910.120(p).`, topics: ["(p) requirements", "Waste handling"], who: "TSDF workers." },
    { id: 595, short: "8-Hour Refresher", summary: "The annual refresher.", body: `1910.120(e)(8).`, topics: ["Review", "Case studies"], who: "Certified workers." },
    { id: 900, short: "State-Plan Refresher", summary: "The annual refresher with state-plan versions.", body: `For state-plan states.`, topics: ["Federal and state content"], who: "State-plan workers." },
    { id: 577, short: "Cal/OSHA 40-Hour", summary: "The 40-hour written to California's 8 CCR 5192.", body: `California's HAZWOPER rule.`, topics: ["Title 8", "Cal/OSHA limits"], who: "California workers." },
  ],

  feature: (h) => `<section class="sec cmp-sec" id="compare"><div class="wrap">
<h2 class="title">Compare courses</h2>
<div class="pickers">${[587, 581, 0].map((id, i) => `<label>Course ${i + 1}<select class="cmp-pick"><option value="">—</option>${h.catalog.map((c) => `<option value="${c.id}"${c.id === id ? " selected" : ""}>${h.esc(c.name)}</option>`).join("")}</select></label>`).join("")}</div>
<div class="table-wrap"><table class="cmp" id="cmpTable"></table></div>
</div></section>
<script>
window.CMP = ${JSON.stringify(Object.fromEntries(h.catalog.map((c) => [c.id, { n: c.name, p: c.price, d: c.duration, r: c.citation, a: c.audience, c: c.category }]))).replace(/</g, "\\u003c")};
(function () {
  var picks = document.querySelectorAll(".cmp-pick"), t = document.getElementById("cmpTable");
  var rows = [["Length", "d"], ["Price per seat", "p"], ["Regulation / standard", "r"], ["Who it's for", "a"], ["Category", "c"]];
  function cell(tag, text) { var e = document.createElement(tag); e.textContent = text; return e; }
  function draw() {
    var ids = Array.prototype.map.call(picks, function (s) { return s.value; }).filter(Boolean);
    t.textContent = "";
    var head = document.createElement("tr"); head.appendChild(cell("th", ""));
    ids.forEach(function (id) { head.appendChild(cell("th", window.CMP[id].n + " (#" + id + ")")); });
    t.appendChild(head);
    rows.forEach(function (r) {
      var tr = document.createElement("tr"); tr.appendChild(cell("th", r[0]));
      ids.forEach(function (id) { var v = window.CMP[id][r[1]]; tr.appendChild(cell("td", r[1] === "p" ? "$" + v.toFixed(2) : (v || "—"))); });
      t.appendChild(tr);
    });
    var tr = document.createElement("tr"); tr.appendChild(cell("th", ""));
    ids.forEach(function (id) { var td = document.createElement("td"); td.innerHTML = '<a class="btn btn-sm" href="?buy=' + id + '" data-buy="' + id + '">Enroll</a>'; tr.appendChild(td); });
    t.appendChild(tr);
  }
  picks.forEach(function (s) { s.addEventListener("change", draw); });
  draw();
})();
</script>`,

  guides: [
    {
      slug: "40-hour-vs-24-hour-vs-tsdf",
      title: "40-hour vs 24-hour vs 24-hour TSD: what's the difference?",
      description: "Three initial HAZWOPER courses, three different jobs.",
      date: "2026-10-25",
      courses: [587, 581, 582],
      body: `| | [[587]] | [[581]] | [[582]] |
|---|---|---|---|
| Paragraph | 1910.120(e) | 1910.120(e) | 1910.120(p) |
| Where | Uncontrolled hazardous waste sites | Same sites, limited exposure | Permitted TSD facilities |
| Who | General site workers, possible exposure above PELs | Occasional or monitored low-exposure workers | TSDF employees |
| Field experience | 3 days supervised | 1 day supervised | Not specified the same way |
| Refresher | 8 hours/year | 8 hours/year | 8 hours/year |

## The short version

- Working on a cleanup site with real exposure potential: **40-hour**
- On a cleanup site occasionally or only in monitored, low-exposure areas: **24-hour**
- Working at a permitted facility that treats, stores or disposes of hazardous waste: **24-hour TSD**

Use the comparison tool above to put them side by side with prices.`,
    },
    {
      slug: "federal-vs-state-plan-vs-cal-osha-refresher",
      title: "Federal, state-plan or Cal/OSHA refresher?",
      description: "Three refreshers that all meet the annual requirement. Which one fits where you work.",
      date: "2026-10-25",
      courses: [595, 900, 577],
      body: `All three give you the eight hours of annual refresher training. The difference is which rule they're written around.

| Refresher | Best for |
|---|---|
| [[595]] | Federal OSHA states, and state plans that adopt the federal rule |
| [[900]] | State-plan states and multi-state crews |
| Cal/OSHA 8-Hour Refresher | California workers under 8 CCR 5192 |

## How to choose

1. **Where do you work most?** That state's rule is what an inspector will cite.
2. **Does your state write its own HAZWOPER rule?** California, Washington and Michigan do. Most state plans adopt the federal rule.
3. **Multi-state crew?** The state-plan refresher covers more ground.

California workers starting from scratch can compare [[577]] with the federal 40-hour in the tool above.`,
    },
  ],
};
