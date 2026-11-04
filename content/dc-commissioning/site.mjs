// dc-commissioning.hazwoperosha.us: commissioning levels L1–L5 with a level stepper. Punch-list green.
const LEVELS = [
  ["L1", "Factory witness testing", "Major equipment such as generators, UPS modules, switchgear and chillers is tested at the factory before it ships, with the owner or commissioning agent present."],
  ["L2", "Site acceptance", "Equipment arriving on site is inspected for shipping damage and checked against the submittals: model, ratings, accessories and documentation."],
  ["L3", "Pre-functional checks and startup", "Installation checks and manufacturer startup: torque, wiring, rotation, fluid levels, controls points and first energization."],
  ["L4", "Functional performance testing", "Each system is tested on its own across its full range: load banks on UPS and generators, failover of chillers and pumps, alarms and sequences."],
  ["L5", "Integrated systems testing", "Everything together under simulated IT load: pull the utility, fail a generator, lose a chiller, and confirm the whole facility responds as designed."],
];

export default {
  title: "Data Center Commissioning Training: Levels 1–5 Explained | Industrial Certified Training",
  description: "Learn the five levels of data center commissioning, from factory witness tests to integrated systems testing, with training on commissioning, design and UPS and generator testing.",
  theme: "#2b9348",
  fonts: "family=Chivo:wght@400;700;900&family=Chivo+Mono:wght@500",
  hero: {
    title: "Test it all <span>before day one.</span>",
    lede: "Commissioning proves a data center works before the first server goes live. Walk through the five levels, then train the team that runs them.",
    cta: [845, "Commissioning & Startup · $267.99"],
    alt: ["#levels", "The five levels"],
  },
  coursesTagline: "Commissioning, design and load testing training.",
  guidesTagline: "Integrated systems testing and handover from construction to operations.",

  courses: [
    { id: 845, short: "Commissioning & Startup" },
    { id: 842, short: "Design Fundamentals" },
    { id: 840, short: "UPS Operations & Load Testing" },
    { id: 835, short: "Generator Operations & Maintenance" },
  ],

  feature: (h) => `<section class="sec pl-sec" id="levels"><div class="wrap">
<h2 class="title">The five levels</h2>
<ol class="pl-steps">${LEVELS.map((l, i) => `<li><button type="button" data-i="${i}"${i === 0 ? ' class="on"' : ""}><b>${l[0]}</b><span>${h.esc(l[1])}</span></button></li>`).join("")}</ol>
<div class="pl-card" aria-live="polite"><p class="pl-lv" id="plLv">${LEVELS[0][0]}</p><h3 id="plT">${h.esc(LEVELS[0][1])}</h3><p id="plD">${h.esc(LEVELS[0][2])}</p></div>
</div></section>
<script>
window.PL = ${JSON.stringify(LEVELS).replace(/</g, "\\u003c")};
(function () {
  var bs = document.querySelectorAll(".pl-steps button");
  bs.forEach(function (b) { b.addEventListener("click", function () { var l = window.PL[+b.getAttribute("data-i")]; bs.forEach(function (x) { x.classList.toggle("on", x === b); }); document.getElementById("plLv").textContent = l[0]; document.getElementById("plT").textContent = l[1]; document.getElementById("plD").textContent = l[2]; }); });
})();
</script>`,

  guides: [
    {
      slug: "integrated-systems-testing",
      title: "Integrated systems testing (L5): what to expect",
      description: "The day you pull the plug on purpose.",
      date: "2026-10-25",
      courses: [845],
      body: `Integrated systems testing (IST) proves that power, cooling, controls and fire systems work together under realistic load.

## Set up

- **Load banks** in the white space to simulate IT heat and power
- **Temperature sensors** across the room to record conditions
- **Scripts** for each test with pass/fail criteria, approved in advance
- **Everyone briefed**: contractors, vendors, the owner, operations staff

## Typical tests

1. Utility failure: UPS carries the load, generators start, transfer, recover
2. Generator failure while on generator power
3. Chiller or CRAH failure: does the redundant unit pick up in time?
4. Controls or BMS failure: does equipment fail to a safe state?
5. Return to utility

## Pass criteria

No interruption to the simulated IT load, temperatures within limits, alarms correct, sequences as designed.

## Afterwards

Fix the failures, retest, and record everything. Operations staff who witness IST learn the building better than any manual can teach.

{{buy:845}}`,
    },
    {
      slug: "construction-to-operations-handover",
      title: "Handover from construction to operations",
      description: "What operations teams should demand before they accept the keys.",
      date: "2026-10-25",
      courses: [845, 840, 835],
      body: `The handover is the last chance to get what the operations team needs before the contractors leave.

## Documents

- As-built drawings, including the one-line diagrams
- Commissioning reports for every level, with resolved issues
- Operation and maintenance manuals, warranties, spare parts lists
- Controls sequences and BMS point lists

## Training

- Vendor training on UPS, generators, switchgear, chillers and controls
- Walkdowns of every system with the people who installed it

## Procedures

- SOPs, MOPs and EOPs written and tested before go-live
- Maintenance plans loaded into the CMMS

## Open items

Agree in writing on every open punch list item, who fixes it and by when.

Learn UPS ([[840]]) and generator ([[835]]) testing so your team can repeat it every year.`,
    },
  ],
};
