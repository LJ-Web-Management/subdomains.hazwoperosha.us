// lel-converter.hazwoperosha.us: %LEL to ppm converter with gas presets. Four-gas meter LCD.
const GASES = [["Methane", 5.0], ["Propane", 2.1], ["Hydrogen", 4.0], ["Pentane", 1.5], ["Hexane", 1.1], ["Gasoline", 1.4], ["Toluene", 1.1], ["Acetone", 2.5], ["Ethanol", 3.3], ["Hydrogen sulfide", 4.0], ["Carbon monoxide", 12.5], ["Ammonia", 15.0]];

export default {
  title: "%LEL to PPM Converter & Gas Detection Training | Industrial Certified Training",
  description: "Convert %LEL readings to ppm and percent by volume for common gases, see where 10% LEL falls, and train on air monitoring and gas detection.",
  theme: "#94d82d",
  fonts: "family=VT323&family=Inter:wght@400;600;800",
  hero: {
    title: "What does <span>10% LEL</span> really mean?",
    lede: "Combustible gas meters read in percent of the lower explosive limit. Convert a reading to ppm and percent by volume for the gas you're dealing with.",
    cta: [1056, "Gas Detection · $49.99"],
    alt: ["#calc", "Convert a reading"],
  },
  coursesTagline: "Air monitoring and gas detection training.",
  guidesTagline: "Correction factors and bump tests.",

  courses: [
    { id: 1056, short: "Air Monitoring & Gas Detection", summary: "Two hours on gas detection and reading meters.", body: "Two hours on air monitoring and gas detection: sensor types, bump tests, calibration, alarm settings and interpreting readings.", topics: ["Sensor types", "Bump tests and calibration", "Alarm set points", "Interpreting readings"] },
    { id: 583, short: "Air Monitoring Micro-Module", summary: "Direct-reading instruments in 20 minutes.", body: "Twenty minutes on direct-reading instruments for HAZWOPER sites.", topics: ["O₂ and LEL", "PIDs", "Action levels"] },
    { id: 587, short: "40-Hour HAZWOPER", summary: "Monitoring in the context of site safety.", body: "The full 40-hour initial course, including air monitoring, site characterization and PPE.", topics: ["Air monitoring", "Site characterization", "PPE"] },
    { id: 586, short: "Site Characterization", summary: "Evaluating a site before entry.", body: "Twenty minutes on site characterization and hazard assessment.", topics: ["Preliminary evaluation", "Entry monitoring"] },
  ],

  feature: (h) => `<section class="sec lc-sec" id="calc"><div class="wrap lc-in">
<form class="lc-form" onsubmit="return false">
<label>Gas<select id="lcG">${GASES.map((g, i) => `<option value="${g[1]}"${i === 0 ? " selected" : ""}>${h.esc(g[0])} (LEL ${g[1]}%)</option>`).join("")}</select></label>
<label>Meter reading (% LEL)<input id="lcR" type="number" min="0" max="100" step="any" value="10"></label>
</form>
<div class="lc-meter" aria-live="polite">
<div class="lc-screen"><p><span>LEL</span><b id="lcP">10</b><i>%</i></p><p><span>PPM</span><b id="lcM">–</b></p><p><span>VOL</span><b id="lcV">–</b><i>%</i></p></div>
<div class="lc-bar"><i id="lcB"></i><s></s></div><p class="lc-s" id="lcS"></p>
</div></div>
<p class="wrap lc-note">Assumes the meter is calibrated for the gas selected. LEL values are typical published figures; check the SDS for your material. Under OSHA confined space rules, flammable gas above 10% of its LEL is a hazardous atmosphere.</p></section>
<script>
(function () {
  function calc() {
    var lel = parseFloat(document.getElementById("lcG").value) || 0, r = parseFloat(document.getElementById("lcR").value) || 0, vol = r / 100 * lel;
    document.getElementById("lcP").textContent = r;
    document.getElementById("lcM").textContent = Math.round(vol * 10000).toLocaleString("en-US");
    document.getElementById("lcV").textContent = vol.toFixed(3).replace(/\\.?0+$/, "");
    document.getElementById("lcB").style.width = Math.min(100, r) + "%"; document.getElementById("lcB").className = r >= 50 ? "alarm" : r > 10 ? "warn" : "";
    document.getElementById("lcS").textContent = r >= 100 ? "At or above the LEL: the atmosphere can ignite." : r > 10 ? "Above 10% LEL: hazardous atmosphere. Get out and ventilate." : "At or below 10% LEL.";
    document.getElementById("lcS").className = "lc-s " + (r > 10 ? "no" : "ok");
  }
  document.querySelectorAll(".lc-form input, .lc-form select").forEach(function (i) { i.addEventListener("input", calc); i.addEventListener("change", calc); });
  calc();
})();
</script>`,

  guides: [
    {
      slug: "lel-correction-factors",
      title: "LEL correction factors: when your meter isn't calibrated for the gas",
      description: "A methane-calibrated meter reading pentane gives the wrong number. Here's why.",
      date: "2026-10-25",
      courses: [1056, 583],
      body: `Catalytic bead LEL sensors respond differently to different gases. A meter calibrated on methane will over- or under-read other gases.

## Correction factors

Manufacturers publish **correction factors** (or response factors): multiply the reading by the factor to estimate the true %LEL for the gas being measured. They are specific to each sensor model, so use your manufacturer's table.

## Rules of thumb

- Many heavier hydrocarbons (like pentane, hexane or fuel vapors) read **low** on a methane-calibrated sensor, which is the dangerous direction
- Some sites calibrate on pentane or propane to be conservative for a range of vapors
- Infrared LEL sensors behave differently and can't see some gases (like hydrogen) at all

## Also watch for

- Oxygen below about 10% makes catalytic sensors read low or zero
- Silicones, lead and sulfur compounds can poison catalytic sensors

{{buy:1056}}`,
    },
    {
      slug: "bump-test-vs-calibration",
      title: "Bump test vs calibration",
      description: "Two checks, two jobs. Both matter.",
      date: "2026-10-25",
      courses: [1056],
      body: `| | Bump test | Calibration |
|---|---|---|
| Purpose | Confirms sensors respond and alarms work | Adjusts the meter to read accurately against a known gas |
| When | Before each day's use (common industry practice and many manufacturers' recommendation) | On the manufacturer's schedule, or when a bump test fails |
| Gas | Known concentration, briefly | Known concentration, until readings stabilize |
| Result | Pass or fail | Meter adjusted |

## Record both

Keep records of every bump test and calibration. If an incident happens, they show the meter was working.

## If a bump test fails

Calibrate and bump again. If it still fails, take the meter out of service. See [[1056]].`,
    },
  ],
};
