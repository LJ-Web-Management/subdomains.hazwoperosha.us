// dc-tiers.hazwoperosha.us: Tier I–IV infrastructure, with a tier explorer. Stacked monolith.
const TIERS = [
  ["I", "Basic capacity", "A single path for power and cooling and no redundant components. Planned maintenance means shutting down.", "Single path · N"],
  ["II", "Redundant capacity components", "Redundant components (such as extra UPS modules, chillers or generators) on a single distribution path. Some component maintenance without shutdown, but the path is still a single point of failure.", "Single path · N+1"],
  ["III", "Concurrently maintainable", "Multiple distribution paths, with one active at a time. Every component and path can be taken out for planned maintenance without shutting down IT equipment.", "Multiple paths · N+1"],
  ["IV", "Fault tolerant", "Multiple independent, physically isolated, active paths. A single failure of any component or path doesn't affect IT equipment, and the site can be maintained concurrently.", "2N or 2(N+1) · compartmentalized"],
];

export default {
  title: "Data Center Tier I–IV Explained & Tier Infrastructure Training | Industrial Certified Training",
  description: "Learn the four data center tiers, from basic capacity to fault tolerant, with an interactive tier explorer and training on tier infrastructure, design and continuity.",
  theme: "#111111",
  fonts: "family=Archivo:wght@400;600;800;900",
  hero: {
    title: "Know your <span>tier.</span>",
    lede: "Tiers describe how a data center's power and cooling infrastructure handles maintenance and failure. Explore the four levels, then train your team on what it takes to run each one.",
    cta: [849, "Tier Infrastructure · $280.99"],
    alt: ["#tiers", "Explore the tiers"],
  },
  coursesTagline: "Tier, design and continuity training.",
  guidesTagline: "What concurrent maintainability and fault tolerance mean on the floor.",

  courses: [
    { id: 849, short: "Tier Infrastructure" },
    { id: 842, short: "Design Fundamentals" },
    { id: 844, short: "Disaster Recovery & Continuity" },
    { id: 847, short: "Power Systems & Electrical" },
  ],

  feature: (h) => `<section class="sec tl-sec" id="tiers"><div class="wrap">
<div class="tl-tabs" role="tablist">${TIERS.map((t, i) => `<button type="button" role="tab" data-t="${i}"${i === 2 ? ' class="on"' : ""}>Tier ${t[0]}</button>`).join("")}</div>
<div class="tl-panel">${TIERS.map((t, i) => `<article data-p="${i}"${i === 2 ? "" : " hidden"}><p class="tl-n">${t[0]}</p><div><h2>${h.esc(t[1])}</h2><p>${h.esc(t[2])}</p><p class="tl-arch">${h.esc(t[3])}</p></div></article>`).join("")}</div>
<p class="tl-note">Summary for training. The Uptime Institute's Tier Standard is the authority on tier definitions and certification.</p>
</div></section>
<script>
(function () {
  var tabs = document.querySelectorAll(".tl-tabs button"), ps = document.querySelectorAll(".tl-panel article");
  tabs.forEach(function (b) { b.addEventListener("click", function () { var t = b.getAttribute("data-t"); tabs.forEach(function (x) { x.classList.toggle("on", x === b); }); ps.forEach(function (p) { p.hidden = p.getAttribute("data-p") !== t; }); }); });
})();
</script>`,

  guides: [
    {
      slug: "concurrent-maintainability",
      title: "Concurrent maintainability, in plain terms",
      description: "What Tier III really asks for, and how operations teams use it.",
      date: "2026-10-25",
      courses: [849, 847],
      body: `A **concurrently maintainable** site lets you take any single component or distribution path out of service for planned work without shutting down IT equipment.

## What that looks like

- Two power paths to every rack, so one can be de-energized for breaker or switchgear work
- Isolation valves on chilled water loops, so a section can be drained
- Spare capacity (N+1) so a chiller, UPS module or generator can come offline

## Where sites fall short

- A single shared component nobody noticed: one fuel line, one control panel, one valve
- Single-corded equipment plugged into one path only
- Procedures that assume both paths are always up

## Operations matter as much as design

A Tier III design run without switching procedures, method of procedure (MOP) documents and trained staff doesn't deliver Tier III results.

{{buy:849}}`,
    },
    {
      slug: "fault-tolerance-vs-redundancy",
      title: "Fault tolerance vs redundancy",
      description: "Why Tier IV is more than 'more equipment'.",
      date: "2026-10-25",
      courses: [849, 844],
      body: `Redundancy means having spares. **Fault tolerance** means a failure anywhere doesn't reach the IT load, without anyone having to act.

## What Tier IV adds

- **Simultaneously active paths**, not a standby path waiting to be switched in
- **Compartmentalization**: paths physically separated so a fire or flood in one room can't take out both
- **Continuous cooling**, so a power transfer doesn't let temperatures spike
- **Autonomous response**: the system rides through a failure on its own

## The trade-offs

Fault tolerance costs capital, space and efficiency. Many organizations instead spread workloads across multiple Tier III sites and rely on disaster recovery ([[844]]).`,
    },
  ],
};
