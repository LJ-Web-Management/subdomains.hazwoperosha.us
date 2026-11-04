// respirator-muc.hazwoperosha.us: assigned protection factors and maximum use concentration calculator. Filter cartridge colors on clean white.
const APF = [
  ["Half mask air-purifying (elastomeric or filtering facepiece)", 10],
  ["Full facepiece air-purifying", 50],
  ["Loose-fitting facepiece PAPR", 25],
  ["Half mask PAPR", 50],
  ["Full facepiece PAPR", 1000],
  ["Supplied-air, full facepiece, pressure-demand", 1000],
  ["SCBA, full facepiece, pressure-demand", 10000],
];

export default {
  title: "Respirator APF & Maximum Use Concentration (MUC) Calculator | Industrial Certified Training",
  description: "Calculate the maximum use concentration for a respirator from its assigned protection factor and the exposure limit, with training on PPE, air monitoring and HAZWOPER.",
  theme: "#5c7cfa",
  fonts: "family=Instrument+Sans:wght@400;600;700",
  hero: {
    title: "How high can <span>you go?</span>",
    lede: "Every respirator has a ceiling. The maximum use concentration is the highest airborne level a respirator can be used in, based on its assigned protection factor. Work it out below.",
    cta: [585, "PPE Levels · $12.99"],
    alt: ["#calc", "Calculate MUC"],
  },
  coursesTagline: "PPE, monitoring and HAZWOPER training.",
  guidesTagline: "APFs, MUCs and cartridge change schedules.",

  courses: [
    { id: 585, short: "PPE Levels A–D", summary: "Respiratory protection across the four PPE levels.", body: "Fifteen minutes on PPE levels A through D and the respiratory protection each uses.", topics: ["Levels A–D", "SCBA vs air-purifying", "Choosing a level"] },
    { id: 583, short: "Air Monitoring", summary: "Measuring what's in the air.", body: "Twenty minutes on direct-reading instruments: oxygen, LEL, PIDs and colorimetric tubes.", topics: ["Instruments", "Action levels", "Calibration"] },
    { id: 1056, short: "Air Monitoring & Gas Detection", summary: "Two hours on gas detection.", body: "Two hours on air monitoring and gas detection, from bump tests to reading results.", topics: ["Gas detectors", "Bump tests and calibration", "Interpreting readings"] },
    { id: 587, short: "40-Hour HAZWOPER", summary: "Respiratory protection in depth.", body: "The full 40-hour initial course, including respiratory protection and PPE selection.", topics: ["Respirators", "PPE", "Air monitoring", "Site safety"] },
  ],

  feature: (h) => `<section class="sec mu-sec" id="calc"><div class="wrap mu-in">
<form class="mu-form" onsubmit="return false">
<label>Respirator type<select id="muR">${APF.map((a, i) => `<option value="${a[1]}"${i === 1 ? " selected" : ""}>${h.esc(a[0])} (APF ${a[1].toLocaleString("en-US")})</option>`).join("")}</select></label>
<label>Exposure limit (ppm or mg/m³)<input id="muL" type="number" min="0" step="any" value="50"></label>
<label>IDLH, if known (same units)<input id="muI" type="number" min="0" step="any" value="500"></label>
<label>Measured concentration (optional)<input id="muC" type="number" min="0" step="any" value="1200"></label>
</form>
<div class="mu-out" aria-live="polite"><p class="mu-k">Maximum use concentration</p><p class="mu-v" id="muV">–</p><p id="muS" class="mu-s"></p>
<p class="mu-note">MUC = APF × exposure limit. Air-purifying respirators may not be used at or above IDLH, and cartridge and filter limits can be lower. This doesn't replace your respiratory protection program, fit testing or medical evaluation.</p></div>
</div></section>
<script>
(function () {
  function n(id) { return parseFloat(document.getElementById(id).value) || 0; }
  function calc() {
    var apf = n("muR"), lim = n("muL"), idlh = n("muI"), c = n("muC"), muc = apf * lim, sel = document.getElementById("muR"), apr = sel.selectedIndex < 4, cap = apr && idlh > 0 && muc >= idlh;
    var eff = cap ? idlh : muc;
    document.getElementById("muV").textContent = lim ? eff.toLocaleString("en-US") + (cap ? " (limited by IDLH)" : "") : "–";
    var s = "";
    if (c && lim) s = c < eff && !(apr && idlh && c >= idlh) ? "The measured concentration is below the MUC for this respirator." : "The measured concentration is too high for this respirator. Choose one with a higher APF.";
    var el = document.getElementById("muS"); el.textContent = s; el.className = "mu-s " + (s ? (s.indexOf("below") > 0 ? "ok" : "no") : "");
  }
  document.querySelectorAll(".mu-form input, .mu-form select").forEach(function (i) { i.addEventListener("input", calc); i.addEventListener("change", calc); });
  calc();
})();
</script>`,

  guides: [
    {
      slug: "apf-and-muc-explained",
      title: "APF and MUC explained",
      description: "The two numbers behind every respirator selection.",
      date: "2026-10-25",
      courses: [585, 587],
      body: `## Assigned protection factor (APF)

The level of protection a respirator is expected to give workers when it's used as part of a proper respiratory protection program. An APF of 10 means the respirator should reduce the concentration inside the facepiece to about one tenth of the outside air.

| Respirator | APF (OSHA) |
|---|---|
| Half mask air-purifying | 10 |
| Full facepiece air-purifying | 50 |
| Loose-fitting PAPR | 25 |
| Full facepiece PAPR | 1,000 |
| SCBA, pressure-demand, full facepiece | 10,000 |

## Maximum use concentration (MUC)

**MUC = APF × exposure limit.** It's the highest concentration in which the respirator can be used.

## Limits on the MUC

- Air-purifying respirators can't be used in IDLH atmospheres or oxygen-deficient air
- Cartridges and filters have their own maximum concentrations
- APFs only apply with fit testing, training and maintenance

{{buy:585}}`,
    },
    {
      slug: "cartridge-change-schedules",
      title: "Cartridge change schedules",
      description: "Why 'change it when you smell it' isn't allowed.",
      date: "2026-10-25",
      courses: [583, 1056],
      body: `For gases and vapors, OSHA requires air-purifying respirators to have either an **end-of-service-life indicator** or a **change schedule** based on objective data.

## Building a schedule

Use the manufacturer's service-life software or data, with:

- The contaminants and their concentrations (from air monitoring, see [[1056]])
- Temperature and humidity
- Work rate and breathing rate

## Then

- Write the schedule into the respiratory protection program
- Build in a safety margin
- Change cartridges at least as often as the schedule says, or at the end of every shift if that's sooner for your conditions

## Don't rely on odor

Many chemicals have poor warning properties, or are only detectable by smell above their exposure limit.`,
    },
  ],
};
