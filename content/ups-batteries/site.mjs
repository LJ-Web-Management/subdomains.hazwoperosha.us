// ups-batteries.hazwoperosha.us: UPS and battery systems, with a rough runtime estimator. Battery charge bars.
export default {
  title: "UPS & Battery Systems Training for Data Centers | Industrial Certified Training",
  description: "UPS and battery training for data center staff: UPS fundamentals, operations and load testing, battery safety, DC circuits and lithium-ion thermal runaway, with a UPS runtime estimator.",
  theme: "#2a9d8f",
  fonts: "family=Rubik:wght@400;500;700;800",
  hero: {
    title: "The minutes <span>that matter most.</span>",
    lede: "When the utility drops, the UPS carries everything until the generators take over. Training on UPS systems, battery safety and load testing, plus a quick runtime estimator.",
    cta: [857, "UPS & Battery Safety · $99.99"],
    alt: ["#runtime", "Estimate runtime"],
  },
  coursesTagline: "UPS, battery and DC training.",
  guidesTagline: "Battery room safety and battery maintenance.",

  courses: [
    { id: 857, short: "UPS & Battery System Safety" },
    { id: 1102, short: "UPS Systems Fundamentals" },
    { id: 840, short: "UPS Operations & Load Testing" },
    { id: 1084, short: "Batteries and DC Circuits" },
    { id: 1021, short: "Li-ion Thermal Runaway Response" },
  ],

  feature: () => `<section class="sec cs-sec" id="runtime"><div class="wrap cs-in">
<form class="cs-form" onsubmit="return false">
<h2>UPS runtime estimator</h2>
<label>Battery energy (kWh)<input id="csE" type="number" min="0" step="0.1" value="40"></label>
<label>IT load on the UPS (kW)<input id="csL" type="number" min="0.1" step="0.1" value="120"></label>
<label>Inverter efficiency (%)<input id="csF" type="number" min="50" max="100" value="95"></label>
<label>Battery health (% of rated capacity)<input id="csH" type="number" min="10" max="100" value="80"></label>
</form>
<div class="cs-out" aria-live="polite"><p class="cs-k">Estimated runtime</p><p class="cs-v"><span id="csV">–</span> min</p><div class="cs-bar"><i id="csB"></i></div>
<p class="cs-note">A rough, linear estimate. Batteries deliver less energy at high discharge rates, so real runtime is often shorter. Use the manufacturer's runtime tables and load tests for real decisions.</p></div>
</div></section>
<script>
(function () {
  function n(id) { return parseFloat(document.getElementById(id).value) || 0; }
  function calc() {
    var load = n("csL"), m = load > 0 ? n("csE") * (n("csF") / 100) * (n("csH") / 100) / load * 60 : 0;
    document.getElementById("csV").textContent = m ? (m < 10 ? m.toFixed(1) : Math.round(m)) : "–";
    document.getElementById("csB").style.width = Math.min(100, m / 15 * 100) + "%";
    document.getElementById("csB").className = m < 5 ? "lo" : m < 10 ? "mid" : "";
  }
  document.querySelectorAll(".cs-form input").forEach(function (i) { i.addEventListener("input", calc); });
  calc();
})();
</script>`,

  guides: [
    {
      slug: "battery-room-safety",
      title: "Battery room safety: VRLA and lithium-ion",
      description: "Hydrogen, acid, arc flash and thermal runaway: the hazards and the controls.",
      date: "2026-10-25",
      courses: [857, 1021],
      body: `## Hazards

| Hazard | VRLA (lead-acid) | Lithium-ion |
|---|---|---|
| Flammable gas | Hydrogen during charging | Flammable vent gases in thermal runaway |
| Chemical | Sulfuric acid electrolyte | Electrolyte and toxic gases (including hydrogen fluoride) |
| Electrical | High DC voltage, arc flash, short circuits | Same |
| Fire | Less common | Thermal runaway, which can spread cell to cell |

## Controls

- **Ventilation** sized to keep hydrogen well below its lower explosive limit
- **Eyewash and shower** where electrolyte can splash (29 CFR 1910.151(c))
- **Insulated tools**, no jewelry, arc-rated PPE for the hazard
- **Spill kits** with acid neutralizer for flooded and VRLA systems
- **Battery monitoring** for voltage, temperature and internal resistance
- **Off-gas detection** for lithium-ion rooms

## Before work

Check the battery monitoring system, confirm the UPS bypass state, and follow your electrical safety program.

{{buy:857}}`,
    },
    {
      slug: "battery-maintenance-schedule",
      title: "A battery maintenance schedule that catches failures early",
      description: "What to check monthly, quarterly and yearly on UPS batteries.",
      date: "2026-10-25",
      courses: [840, 1084],
      body: `One weak battery can take a whole string down. Regular checks find it first. Always follow the manufacturer's schedule and IEEE guidance for your battery type.

## Monthly

- Visual inspection: swelling, leaks, corrosion, cracked cases
- Room temperature (heat shortens life fast)
- Overall string float voltage and charger output

## Quarterly

- Individual cell or block voltages
- Internal resistance or impedance, trended over time
- Terminal temperatures with an infrared camera

## Yearly

- Connection resistance and torque
- Load or capacity test as the manufacturer and your program require

## Replace when

Capacity falls below about 80% of rated, resistance rises sharply against its baseline, or the case is damaged. Learn the DC basics in [[1084]].`,
    },
  ],
};
