// placards.hazwoperosha.us: DOT hazard class placard explorer. Diamond placards on asphalt gray.
const CLASSES = [
  ["1", "Explosives", "#f76707", "#000", "Divisions 1.1–1.6, from mass explosion hazards to very insensitive substances. Examples: ammunition, fireworks, blasting agents."],
  ["2.1", "Flammable gas", "#e03131", "#fff", "Gases that ignite easily. Examples: propane, acetylene, hydrogen."],
  ["2.2", "Non-flammable gas", "#2f9e44", "#fff", "Compressed gases that aren't flammable or toxic but can still suffocate or burst containers. Examples: nitrogen, argon, CO₂."],
  ["2.3", "Poison gas", "#fff", "#000", "Gases toxic by inhalation. Examples: chlorine, anhydrous hydrogen fluoride, phosgene."],
  ["3", "Flammable liquid", "#e03131", "#fff", "Liquids with a flash point of 60 °C (140 °F) or below. Examples: gasoline, acetone, paint thinners."],
  ["4", "Flammable solids", "linear-gradient(90deg,#e03131 0 12%,#fff 12% 24%,#e03131 24% 36%,#fff 36% 48%,#e03131 48% 60%,#fff 60% 72%,#e03131 72% 84%,#fff 84%)", "#000", "4.1 flammable solids, 4.2 spontaneously combustible, 4.3 dangerous when wet. Examples: matches, oily rags, sodium metal."],
  ["5", "Oxidizers and organic peroxides", "#fcc419", "#000", "5.1 oxidizers and 5.2 organic peroxides, which can feed or start fires. Examples: ammonium nitrate, hydrogen peroxide, benzoyl peroxide."],
  ["6", "Toxic and infectious", "#fff", "#000", "6.1 toxic substances and 6.2 infectious substances. Examples: pesticides, cyanides, medical waste."],
  ["7", "Radioactive", "linear-gradient(180deg,#fcc419 0 50%,#fff 50%)", "#000", "Materials that emit ionizing radiation. Examples: medical isotopes, density gauges, uranium hexafluoride."],
  ["8", "Corrosive", "linear-gradient(180deg,#fff 0 50%,#111 50%)", "#fff", "Materials that destroy skin or corrode metal. Examples: sulfuric acid, sodium hydroxide, battery acid."],
  ["9", "Miscellaneous", "linear-gradient(180deg,#000 0 6%,#fff 6% 12%,#000 12% 18%,#fff 18% 24%,#000 24% 30%,#fff 30% 36%,#000 36% 42%,#fff 42%)", "#000", "Hazards not covered elsewhere. Examples: lithium batteries, dry ice, hazardous substances like PCBs, elevated-temperature materials."],
];

export default {
  title: "DOT Hazard Classes & Placards Explained | Industrial Certified Training",
  description: "Explore the nine DOT hazard classes and their placards, with examples, then train on RCRA and DOT hazmat shipping, manifests and emergency response.",
  theme: "#e03131",
  fonts: "family=Barlow+Semi+Condensed:wght@500;700;800&family=Barlow:wght@400;500",
  hero: {
    title: "Read the <span>diamond.</span>",
    lede: "Placards tell drivers, workers and responders what's inside at a glance. Tap a class to learn what it means, then train on shipping and handling hazmat.",
    cta: [403, "RCRA/DOT Compliance · $149.99"],
    alt: ["#classes", "Explore the classes"],
  },
  coursesTagline: "Shipping, manifest and response training.",
  guidesTagline: "Placarding rules and the Emergency Response Guidebook.",

  courses: [
    { id: 403, short: "RCRA/DOT Combined Compliance", summary: "Hazmat shipping and hazardous waste rules together.", body: "Eight hours on DOT hazardous materials and RCRA hazardous waste rules for shippers: classification, packaging, marking, labeling, placarding and shipping papers.", topics: ["Hazard classes", "Marking and labeling", "Placarding", "Shipping papers and manifests"] },
    { id: 580, short: "Hazardous Waste Manifest", summary: "The shipping paper for hazardous waste.", body: "Two hours on the hazardous waste manifest, the shipping paper for hazardous waste.", topics: ["Manifest boxes", "DOT descriptions", "Signatures"] },
    { id: 1099, short: "First Responder Awareness", summary: "Recognize, isolate, notify: using placards and the ERG.", body: "Four hours of first responder awareness training: recognizing hazardous materials releases, using placards and the ERG, isolating the area and notifying.", topics: ["Recognizing hazmat", "Placards and the ERG", "Isolate and deny entry", "Notification"] },
    { id: 589, short: "40-Hour Fire/Hazmat Teams", summary: "Full HAZWOPER for hazmat response teams.", body: "The 40-hour HAZWOPER course built for fire service and hazmat response teams.", topics: ["Hazmat response operations", "PPE and decontamination", "Incident command"] },
  ],

  feature: (h) => `<section class="sec pc-sec" id="classes"><div class="wrap pc-in">
<div class="pc-grid">${CLASSES.map((c, i) => `<button type="button" data-i="${i}" aria-label="Class ${c[0]}: ${h.esc(c[1])}"${i === 4 ? ' class="on"' : ""}><span class="pc-d" style="background:${c[2]};color:${c[3]}"><b>${c[0]}</b></span></button>`).join("")}</div>
<div class="pc-info" aria-live="polite"><p class="pc-k">Class <span id="pcN">${CLASSES[4][0]}</span></p><h2 id="pcT">${h.esc(CLASSES[4][1])}</h2><p id="pcD">${h.esc(CLASSES[4][4])}</p></div>
</div></section>
<script>
window.PC = ${JSON.stringify(CLASSES.map((c) => [c[0], c[1], c[4]])).replace(/</g, "\\u003c")};
(function () {
  var bs = document.querySelectorAll(".pc-grid button");
  bs.forEach(function (b) { b.addEventListener("click", function () { var c = window.PC[+b.getAttribute("data-i")]; bs.forEach(function (x) { x.classList.toggle("on", x === b); }); document.getElementById("pcN").textContent = c[0]; document.getElementById("pcT").textContent = c[1]; document.getElementById("pcD").textContent = c[2]; }); });
})();
</script>`,

  guides: [
    {
      slug: "using-the-erg",
      title: "Using the Emergency Response Guidebook (ERG)",
      description: "From placard to protective actions in under a minute.",
      date: "2026-10-25",
      courses: [1099, 403],
      body: `The **Emergency Response Guidebook** helps first responders make quick decisions in the first minutes of a hazmat incident.

## Find the guide

1. **Yellow pages**: look up the 4-digit UN/NA number on the placard, orange panel or shipping paper
2. **Blue pages**: look up by material name
3. **Placard table**: if you only know the placard, use the placard pages to find a guide

## Read the guide (orange pages)

- Potential hazards: fire, explosion and health
- Public safety: isolation distance and protective clothing
- Emergency response: fire, spill and first aid

## Green pages

For materials highlighted in the yellow and blue pages, the green table gives initial isolation and protective action distances for toxic inhalation hazards.

## Stay back

Approach from upwind and uphill, and use binoculars to read placards from a distance. See [[1099]].

{{buy:1099}}`,
    },
    {
      slug: "when-is-a-placard-required",
      title: "When is a placard required?",
      description: "The basics of placarding hazardous waste and hazmat shipments.",
      date: "2026-10-25",
      courses: [403, 580],
      body: `Placarding rules are in 49 CFR 172 Subpart F. In general:

## Table 1 materials: placard any quantity

Includes Division 1.1–1.3 explosives, 2.3 poison gas, 4.3 dangerous when wet, 5.2 organic peroxide Type B (temperature controlled), poison inhalation hazard materials and highway route controlled quantities of radioactive material.

## Table 2 materials: 1,001 lb or more

Most other classes need placards when the total aggregate gross weight of all Table 2 materials on the vehicle is 1,001 lb (454 kg) or more.

## Other points

- Placards go on all four sides of the vehicle
- Bulk packages have their own rules, often with the UN number displayed
- The "DANGEROUS" placard can be used in some mixed loads

Shippers must offer the right placards to the carrier unless the vehicle already has them. See [[403]] for training.`,
    },
  ],
};
