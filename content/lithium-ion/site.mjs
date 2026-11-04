// lithium-ion.hazwoperosha.us: Li-ion battery thermal runaway, with a stage explorer. Heat-map gradient on graphite.
const STAGES = [
  ["Abuse", "Something stresses a cell: overcharge, physical damage, internal short, external heat or a manufacturing defect.", "Prevention: battery management system limits, temperature control, careful handling."],
  ["Off-gassing", "The cell starts venting small amounts of electrolyte vapor, often before smoke or fire. This is the best window to act.", "Off-gas detection can give early warning. Isolate the affected rack or string if procedures allow."],
  ["Venting", "Pressure builds and the cell vents more gas: flammable and toxic, including hydrogen fluoride.", "Evacuate the area. Don't open doors to a room filling with gas. Call emergency services."],
  ["Thermal runaway", "The cell heats itself faster than it can cool. Temperatures climb rapidly, and fire or explosion can follow.", "Responders need to know battery type and location. Accumulated gas can explode."],
  ["Propagation", "Heat spreads to neighboring cells and modules, which go into runaway too.", "Cooling with large amounts of water is commonly used by fire services. Reignition is possible hours or days later."],
];

export default {
  title: "Lithium-Ion Battery Thermal Runaway Training for Data Centers | Industrial Certified Training",
  description: "Training on lithium-ion battery thermal runaway in data centers: warning signs, off-gas detection, emergency response, UPS battery safety and DC circuits, with a five-stage explorer.",
  theme: "#ff7b00",
  fonts: "family=Unbounded:wght@500;700;800&family=Inter:wght@400;500;600",
  hero: {
    title: "Catch it at <span>off-gas.</span>",
    lede: "Lithium-ion UPS batteries save space and last longer, but a cell in thermal runaway is a serious emergency. Learn the warning signs and how to respond.",
    cta: [1021, "Thermal Runaway Response · $99.99"],
    alt: ["#stages", "The five stages"],
  },
  coursesTagline: "Battery safety and emergency response training.",
  guidesTagline: "Li-ion in the data center, and responding to a battery event.",

  courses: [
    { id: 1021, short: "Li-ion Thermal Runaway Response" },
    { id: 857, short: "UPS & Battery System Safety" },
    { id: 1084, short: "Batteries and DC Circuits" },
    { id: 602, short: "Universal Waste (spent batteries)", summary: "Managing spent and damaged batteries.", body: `Two hours on universal waste rules for batteries: labeling, accumulation time limits, damaged batteries and shipping.`, topics: ["Battery categories", "Labeling and time limits", "Damaged batteries", "Shipping"], who: "Facility and battery service staff." },
  ],

  feature: (h) => `<section class="sec rw-sec" id="stages"><div class="wrap">
<h2 class="title">Five stages of a battery event</h2>
<div class="rw-track">${STAGES.map((s, i) => `<button type="button" data-i="${i}"${i === 1 ? ' class="on"' : ""} style="--h:${i}"><b>${i + 1}</b>${h.esc(s[0])}</button>`).join("")}</div>
<div class="rw-card" aria-live="polite"><h3 id="rwT">${h.esc(STAGES[1][0])}</h3><p id="rwD">${h.esc(STAGES[1][1])}</p><p class="rw-a" id="rwA">${h.esc(STAGES[1][2])}</p></div>
<p class="rw-note">General awareness information. Follow your site's emergency plan, the battery manufacturer's guidance and the fire department's direction.</p>
</div></section>
<script>
window.RW = ${JSON.stringify(STAGES).replace(/</g, "\\u003c")};
(function () {
  var bs = document.querySelectorAll(".rw-track button");
  bs.forEach(function (b) { b.addEventListener("click", function () { var s = window.RW[+b.getAttribute("data-i")]; bs.forEach(function (x) { x.classList.toggle("on", x === b); }); document.getElementById("rwT").textContent = s[0]; document.getElementById("rwD").textContent = s[1]; document.getElementById("rwA").textContent = s[2]; }); });
})();
</script>`,

  guides: [
    {
      slug: "lithium-ion-in-the-data-center",
      title: "Lithium-ion in the data center: what changes",
      description: "Compared with VRLA, here's what facility teams need to know.",
      date: "2026-10-25",
      courses: [857, 1021],
      body: `## Why sites switch

Smaller footprint, lighter weight, longer service life, and better tolerance of warmer rooms than VRLA.

## What changes for safety

- **Different failure mode**: thermal runaway can propagate and produce flammable, toxic gases
- **Battery management system (BMS)**: monitors cell voltage and temperature and can isolate modules. Learn its alarms
- **Off-gas detection** is increasingly used for early warning
- **Fire codes**: NFPA 855 and local fire codes set rules for energy storage systems, including spacing, quantities and suppression
- **Emergency planning**: share battery type, location and shutdown procedures with the local fire department

## Handling and disposal

Damaged lithium-ion batteries need special packaging and shipping. Spent batteries can usually be managed as universal waste ([[602]]).

{{buy:1021}}`,
    },
    {
      slug: "battery-event-response-plan",
      title: "Writing a battery event response plan",
      description: "Who does what when a lithium-ion battery alarms.",
      date: "2026-10-25",
      courses: [1021, 1084],
      body: `## Triggers

Define what starts the plan: a BMS temperature alarm, an off-gas detector, visible smoke, or a strange smell in the battery room.

## Immediate actions

1. Don't enter a room that may contain battery gases
2. Evacuate the area and call emergency services
3. Notify the facility manager and the battery or UPS vendor
4. Isolate the affected string remotely if the procedure allows and it's safe

## Information for responders

- Battery chemistry, quantity and location
- Room layout and access
- Ventilation controls and how to operate them
- Electrical isolation points

## After the event

The battery may reignite. Keep the area monitored, and don't move damaged modules without the vendor and the fire department's agreement.

## Practice

Walk through the plan with the local fire department once a year. Learn DC basics with [[1084]].`,
    },
  ],
};
