// universal-waste.hazwoperosha.us: universal waste rules with a "which bin?" sorter. Recycling bins, five category colors.
const CATS = {
  batteries: ["Batteries", "#2f9e44"],
  lamps: ["Lamps", "#1c7ed6"],
  mercury: ["Mercury-containing equipment", "#ae3ec9"],
  aerosols: ["Aerosol cans", "#f08c00"],
  pesticides: ["Pesticides", "#e03131"],
  no: ["Not universal waste", "#495057"],
};
const ITEMS = [
  ["Spent fluorescent tube", "lamps", "Fluorescent, HID, neon and other mercury-containing lamps are universal waste lamps when discarded."],
  ["Used lithium-ion laptop battery", "batteries", "Most spent batteries can be managed as universal waste. Damaged lithium batteries need extra care in packaging."],
  ["Mercury thermostat", "mercury", "Thermostats, switches, gauges and thermometers containing mercury are mercury-containing equipment."],
  ["Partly full aerosol can of spray paint", "aerosols", "Aerosol cans became federal universal waste in 2019. Check your state has adopted it."],
  ["Recalled pesticide", "pesticides", "Recalled or unused pesticides collected under a take-back or recall program can be universal waste."],
  ["Used motor oil", "no", "Used oil has its own rules (40 CFR 279), not the universal waste rules."],
  ["Solvent-soaked rags", "no", "These may be hazardous waste or excluded solvent-contaminated wipes, but not universal waste."],
  ["Old CRT computer monitor", "no", "Not federal universal waste. CRTs have their own federal rules, and some states treat electronics as universal waste."],
  ["Lead-acid forklift battery", "batteries", "Can be managed as universal waste, or under the lead-acid battery recycling rules in 40 CFR 266 Subpart G."],
  ["Broken mercury switch", "mercury", "Still mercury-containing equipment, but leaking equipment must be contained and cleaned up properly."],
];

export default {
  title: "Universal Waste Sorter & Handler Training | Industrial Certified Training",
  description: "Is it universal waste? Sort ten common items into batteries, lamps, mercury-containing equipment, aerosol cans and pesticides, then train your handlers on the rules.",
  theme: "#2f9e44",
  fonts: "family=Nunito:wght@600;800;900",
  hero: {
    title: "Which bin <span>does it go in?</span>",
    lede: "Universal waste rules make batteries, lamps, mercury equipment, aerosol cans and pesticides easier to manage. But only if they go in the right place. Test yourself below.",
    cta: [602, "Universal Waste · $34.99"],
    alt: ["#sort", "Start sorting"],
  },
  coursesTagline: "Universal waste and generator training.",
  guidesTagline: "Handler rules and labels.",

  courses: [
    { id: 602, short: "Universal Waste Handler", summary: "Two hours on the five categories, labels, time limits and shipping.", body: "Two hours on managing universal waste: what qualifies, small and large quantity handler rules, labeling, the one-year limit, broken items and shipping.", topics: ["The five federal categories", "Small vs large quantity handlers", "Labels and dates", "Releases and broken items", "Shipping"] },
    { id: 601, short: "RCRA Generator Training", summary: "For the wastes that aren't universal waste.", body: "Eight hours on hazardous waste generator rules for wastes that aren't universal waste.", topics: ["Waste determinations", "Generator categories", "Manifests"] },
    { id: 415, short: "Satellite Accumulation Areas", summary: "Collecting hazardous waste where it's made.", body: "Two hours on satellite accumulation area rules.", topics: ["Location", "Limits", "Labels"] },
  ],

  feature: (h) => `<section class="sec ub-sec" id="sort"><div class="wrap">
<div class="ub-card" aria-live="polite"><p class="ub-k">Item <span id="ubI">1</span> of ${ITEMS.length}</p><h2 id="ubN"></h2><p id="ubR" class="ub-r"></p></div>
<div class="ub-bins-row">${Object.entries(CATS).map(([k, v]) => `<button type="button" data-k="${k}" style="--c:${v[1]}"><span></span>${h.esc(v[0])}</button>`).join("")}</div>
<p class="ub-score">Score: <b id="ubS">0</b> · <button type="button" id="ubNext" class="btn btn-sm" hidden>Next item</button></p>
</div></section>
<script>
window.UB = { items: ${JSON.stringify(ITEMS).replace(/</g, "\\u003c")}, cats: ${JSON.stringify(CATS).replace(/</g, "\\u003c")} };
(function () {
  var i = 0, s = 0, done = false, nx = document.getElementById("ubNext");
  function show() { var it = window.UB.items[i]; done = false; document.getElementById("ubI").textContent = i + 1; document.getElementById("ubN").textContent = it[0]; document.getElementById("ubR").textContent = ""; document.getElementById("ubR").className = "ub-r"; nx.hidden = true; }
  document.querySelectorAll(".ub-bins-row button").forEach(function (b) {
    b.addEventListener("click", function () {
      if (done) return; done = true;
      var it = window.UB.items[i], ok = b.getAttribute("data-k") === it[1], r = document.getElementById("ubR");
      if (ok) s++; document.getElementById("ubS").textContent = s;
      r.textContent = (ok ? "Right: " : "Not quite. It's " + window.UB.cats[it[1]][0].toLowerCase() + ". ") + it[2];
      r.className = "ub-r " + (ok ? "ok" : "no");
      nx.hidden = false; nx.textContent = i < window.UB.items.length - 1 ? "Next item" : "Start over";
    });
  });
  nx.addEventListener("click", function () { if (i < window.UB.items.length - 1) i++; else { i = 0; s = 0; document.getElementById("ubS").textContent = 0; } show(); });
  show();
})();
</script>`,

  guides: [
    {
      slug: "small-vs-large-quantity-handlers",
      title: "Small vs large quantity handlers of universal waste",
      description: "The 5,000 kg line and what changes when you cross it.",
      date: "2026-10-25",
      courses: [602],
      body: `| | Small quantity handler | Large quantity handler |
|---|---|---|
| Accumulates at any one time | Less than 5,000 kg total | 5,000 kg or more |
| EPA notification and ID number | Not required | Required |
| Training | Inform employees of handling and emergency procedures | Ensure employees are thoroughly familiar with proper handling and emergency procedures |
| Shipment records | Not required | Keep records of shipments received and sent |

## Both

- **Time limit**: up to one year from when the waste was generated or received
- **Labels**: for example "Universal Waste—Batteries" or "Used Lamps"
- **Show the date**: on the container, an inventory, or another method
- **Contain releases** and manage broken items properly
- **Ship only** to another handler or a destination facility

Many states add their own categories, such as electronics, so check your state.

{{buy:602}}`,
    },
    {
      slug: "storing-lamps-and-batteries",
      title: "Storing lamps and batteries safely",
      description: "Preventing breakage, fires and leaks while waste waits for pickup.",
      date: "2026-10-25",
      courses: [602, 415],
      body: `## Lamps

- Store in closed, structurally sound containers, such as the original boxes
- Don't tape tubes together or break them to save space
- Clean up broken lamps right away and keep the debris in a closed container

## Batteries

- Store in containers that are closed, compatible and in good condition
- **Tape terminals or bag batteries individually**, especially lithium batteries, to prevent short circuits and fires
- Keep damaged or swollen lithium batteries separate, in non-combustible containers
- Keep away from heat and ignition sources

## Everyone

Label the container and show the start date. Train staff where the containers are and what goes in them. See [[602]].`,
    },
  ],
};
