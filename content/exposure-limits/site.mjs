// exposure-limits.hazwoperosha.us: searchable table of common OSHA PELs and NIOSH IDLH values. Lab data sheet.
const CHEMS = [
  ["Acetone", "1,000 ppm", "2,500 ppm", "Flammable solvent"],
  ["Ammonia", "50 ppm", "300 ppm", "Refrigeration, fertilizer"],
  ["Arsenic (inorganic)", "10 µg/m³", "5 mg/m³", "Own standard, 29 CFR 1910.1018"],
  ["Benzene", "1 ppm (STEL 5 ppm)", "500 ppm", "Own standard, 29 CFR 1910.1028. Carcinogen"],
  ["Carbon dioxide", "5,000 ppm", "40,000 ppm", "Displaces oxygen in low areas"],
  ["Carbon monoxide", "50 ppm", "1,200 ppm", "Engines, generators, combustion"],
  ["Chlorine", "1 ppm (ceiling)", "10 ppm", "Water treatment, pool chemicals"],
  ["Formaldehyde", "0.75 ppm (STEL 2 ppm)", "20 ppm", "Own standard, 29 CFR 1910.1048"],
  ["Hydrogen chloride", "5 ppm (ceiling)", "50 ppm", "Hydrochloric acid vapor"],
  ["Hydrogen cyanide", "10 ppm (skin)", "50 ppm", "Acids mixed with cyanides"],
  ["Hydrogen sulfide", "20 ppm (ceiling)", "100 ppm", "Sewers, oilfield, decomposition. General industry PEL"],
  ["Lead (inorganic)", "50 µg/m³", "100 mg/m³", "Own standard, 29 CFR 1910.1025"],
  ["Methanol", "200 ppm", "6,000 ppm", "Flammable solvent, skin absorption"],
  ["Nitric acid", "2 ppm", "25 ppm", "Corrosive, oxidizer"],
  ["Sulfur dioxide", "5 ppm", "100 ppm", "Combustion, smelting"],
  ["Sulfuric acid", "1 mg/m³", "15 mg/m³", "Battery electrolyte, mist"],
  ["Tetrachloroethylene", "100 ppm (ceiling 200 ppm)", "150 ppm", "Dry cleaning solvent"],
  ["Toluene", "200 ppm (ceiling 300 ppm)", "500 ppm", "Paints, solvents, fuels"],
  ["Trichloroethylene", "100 ppm", "1,000 ppm", "Degreasing solvent"],
  ["Xylene", "100 ppm", "900 ppm", "Paints, solvents, fuels"],
];

export default {
  title: "OSHA PEL and IDLH Lookup for Common Hazardous Chemicals | Industrial Certified Training",
  description: `Look up OSHA permissible exposure limits and NIOSH IDLH values for ${CHEMS.length} chemicals common on hazardous waste sites, with links to air monitoring and HAZWOPER training.`,
  theme: "#2b8a3e",
  fonts: "family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500",
  hero: {
    title: "Look up the <span>limit.</span>",
    lede: "Quick reference for exposure limits of chemicals you're likely to meet on hazardous waste sites. Search, compare and then learn to monitor for them.",
    cta: [1056, "Gas detection course · $49.99"],
    alt: ["#limits", "Search the table"],
  },
  coursesTagline: "Monitoring and HAZWOPER courses for working around these chemicals.",
  guidesTagline: "Reading exposure limits and turning them into action levels.",

  courses: [
    { id: 1056, short: "Gas Detection", summary: "Monitoring for the chemicals in this table.", body: `Two hours on multi-gas meters and PIDs.`, topics: ["Sensors", "Calibration", "Alarm set points"], who: "Anyone who carries a monitor." },
    { id: 583, short: "Air Monitoring", summary: "Direct-reading instruments and action levels in 20 minutes.", body: `A short module on instruments.`, topics: ["PIDs", "LEL", "Action levels"], who: "Anyone." },
    { id: 587, short: "40-Hour HAZWOPER", summary: "Toxicology, exposure limits and controls in depth.", body: `The full initial course.`, topics: ["Toxicology", "Exposure limits", "PPE", "Monitoring"], who: "Site workers." },
    { id: 585, short: "PPE Levels A–D", summary: "What to wear when limits are exceeded.", body: `15 minutes on PPE levels.`, topics: ["Levels A–D"], who: "Anyone." },
  ],

  feature: (h) => `<section class="sec lim-sec" id="limits"><div class="wrap">
<div class="lim-search"><input id="limQ" type="search" placeholder="Search a chemical, e.g. benzene" aria-label="Search chemicals"></div>
<div class="table-wrap"><table class="lim" id="limT"><thead><tr><th>Chemical</th><th>OSHA PEL (8-hr TWA unless noted)</th><th>NIOSH IDLH</th><th>Notes</th></tr></thead>
<tbody>${CHEMS.map((c) => `<tr><td>${h.esc(c[0])}</td><td class="num">${h.esc(c[1])}</td><td class="num">${h.esc(c[2])}</td><td>${h.esc(c[3])}</td></tr>`).join("")}</tbody></table></div>
<p class="lim-note">Federal OSHA general industry values (29 CFR 1910.1000 tables or substance-specific standards) and NIOSH IDLH values, for reference and training. Always check the current OSHA tables, the NIOSH Pocket Guide and your site's safety plan. State plans such as Cal/OSHA may set lower limits, and NIOSH and ACGIH often recommend lower values than the OSHA PEL.</p>
</div></section>
<script>
(function () {
  var q = document.getElementById("limQ"), rows = document.querySelectorAll("#limT tbody tr");
  q.addEventListener("input", function () { var v = q.value.toLowerCase(); rows.forEach(function (r) { r.hidden = v && r.textContent.toLowerCase().indexOf(v) === -1; }); });
})();
</script>`,

  guides: [
    {
      slug: "from-exposure-limit-to-action-level",
      title: "From exposure limit to action level",
      description: "How a site safety plan turns a PEL into a number on your monitor that tells you what to do.",
      date: "2026-10-25",
      courses: [583, 1056],
      body: `Exposure limits are averaged over time, usually 8 hours. A monitor reads right now. Action levels bridge the two.

## How sites set them

1. **Identify the contaminants of concern** from site characterization.
2. **Pick the most protective limit**: often the lowest of the OSHA PEL, the NIOSH REL and the ACGIH TLV.
3. **Set an action level below it**, often half the limit, so crews act before an exposure limit is reached.
4. **Translate to the instrument.** A PID reads total VOCs, so the action level is set on PID units, with a safety margin for the most toxic compound present.
5. **Define the response**: more monitoring, PPE upgrade, engineering controls or stop work.

## Example

Benzene's PEL is 1 ppm, and its action level under the benzene standard is 0.5 ppm. A site with gasoline contamination might set a PID action level that triggers benzene-specific monitoring, and stop work or upgrade to respirators if benzene approaches 0.5 ppm in the breathing zone.

## Your job

Know the numbers for today's task, watch the monitor and act on the plan, not on smell.

{{buy:1056}}`,
    },
    {
      slug: "why-you-cant-trust-your-nose",
      title: "Why you can't trust your nose",
      description: "Some chemicals smell only at dangerous levels, and some stop smelling at all. Monitor instead.",
      date: "2026-10-25",
      courses: [1056, 587],
      body: `Smell is a poor warning system for chemical exposure.

## Olfactory fatigue

**Hydrogen sulfide** smells like rotten eggs at very low levels, but at higher concentrations it deadens your sense of smell. Workers have walked into fatal concentrations because "the smell went away."

## No smell at all

**Carbon monoxide** and low oxygen have no smell. **Carbon dioxide** has no smell at typical concentrations and collects in low areas.

## Smell only after the limit

Some chemicals can only be smelled at or above their exposure limit, so by the time you notice, you're already overexposed.

## What to do instead

- Carry a calibrated multi-gas monitor, and bump test it daily
- Use PIDs and chemical-specific tubes for vapors
- Follow the action levels in your site plan
- Leave immediately when an alarm sounds

{{buy:1056}}`,
    },
  ],
};
