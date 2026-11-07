// pue.hazwoperosha.us: PUE calculator and energy efficiency training. Efficiency label, leaf green gradient scale.
export default {
  brand: "PUE Calc",
  logo: `<span class="pu-mark">1.2</span>PUE Calc`,
  title: "PUE Calculator & Data Center Energy Efficiency Training | PUE Calc",
  description: "Calculate your data center's power usage effectiveness (PUE) and DCiE, see what overhead costs per year, and train your team on energy efficiency, cooling optimization and monitoring.",
  theme: "#2d6a4f",
  fonts: "family=Lexend:wght@300;400;600;800",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#2d6a4f"/><text x="16" y="21" font-size="12" font-family="Arial" font-weight="700" text-anchor="middle" fill="#d8f3dc">PUE</text></svg>`,
  hero: {
    title: "What's your <span>PUE?</span>",
    lede: "Power usage effectiveness shows how much energy goes to overhead instead of computing. Work out yours below, see what the overhead costs, then learn how to bring it down.",
    cta: [832, "Energy Efficiency & PUE · $99.99"],
    alt: ["#calc", "Calculate PUE"],
  },
  coursesTagline: "Efficiency, cooling and monitoring training.",
  guidesTagline: "Measuring PUE properly, and quick wins that lower it.",

  courses: [
    { id: 832, short: "Energy Efficiency & PUE" },
    { id: 841, short: "Cooling Systems Design & Optimization" },
    { id: 846, short: "Monitoring, Automation & BMS" },
    { id: 830, short: "DCIM Platform Fundamentals" },
  ],

  feature: () => `<section class="sec pu-sec" id="calc"><div class="wrap pu-in">
<form class="pu-form" method="post">
<label>Total facility power (kW)<input id="puT" type="number" min="0" value="1500"></label>
<label>IT equipment power (kW)<input id="puI" type="number" min="0.1" value="1000"></label>
<label>Electricity cost ($ per kWh)<input id="puC" type="number" min="0" step="0.01" value="0.10"></label>
</form>
<div class="pu-out" aria-live="polite">
<p class="pu-big"><span id="puV">–</span><small>PUE</small></p>
<div class="pu-scale"><i id="puM"></i></div><div class="pu-lbl"><span>1.0</span><span>1.5</span><span>2.0</span><span>2.5</span><span>3.0+</span></div>
<dl><dt>DCiE</dt><dd id="puD">–</dd><dt>Overhead power</dt><dd id="puO">–</dd><dt>Overhead cost per year</dt><dd id="puY">–</dd></dl>
<p class="pu-note">Use energy (kWh) over a full year for a real PUE. Instant power readings swing with weather and load.</p>
</div></div></section>
<script>
(function () {
  document.querySelector(".pu-form").addEventListener("submit", function (e) { e.preventDefault(); });
  function n(id) { return parseFloat(document.getElementById(id).value) || 0; }
  function calc() {
    var t = n("puT"), it = n("puI"), ok = it > 0 && t >= it, p = ok ? t / it : 0, o = t - it;
    document.getElementById("puV").textContent = ok ? p.toFixed(2) : "–";
    document.getElementById("puD").textContent = ok ? Math.round(100 / p) + "%" : "–";
    document.getElementById("puO").textContent = ok ? Math.round(o).toLocaleString() + " kW" : "–";
    document.getElementById("puY").textContent = ok ? "$" + Math.round(o * 8760 * n("puC")).toLocaleString() : "–";
    document.getElementById("puM").style.left = ok ? Math.min(100, (p - 1) / 2 * 100) + "%" : "0";
  }
  document.querySelectorAll(".pu-form input").forEach(function (i) { i.addEventListener("input", calc); });
  calc();
})();
</script>`,

  guides: [
    {
      slug: "measuring-pue-properly",
      title: "Measuring PUE properly",
      description: "Where to meter, over what period, and the mistakes that flatter the number.",
      date: "2026-10-25",
      courses: [832, 846],
      body: `**PUE = total facility energy ÷ IT equipment energy.** A perfect score is 1.0. The inverse, **DCiE**, is the percentage of energy that reaches IT.

## Where to measure

- **Total facility energy**: at the utility meter (and generator output when running), covering everything that serves the data center
- **IT energy**: as close to the IT load as practical. UPS output is common; PDU output or rack-level metering is better

## Over what period

Use **annual energy (kWh)**, not a single power reading. PUE changes with outdoor temperature and IT load, so a cold winter morning flatters the number.

## Common mistakes

- Leaving out shared loads like office space, lighting or a shared chiller plant
- Counting losses inside the UPS as IT load
- Comparing your PUE with another site that measures differently

## Track the trend

Your own PUE over time, measured the same way, is the most useful number. ISO/IEC 30134-2 defines PUE formally.

{{buy:832}}`,
    },
    {
      slug: "quick-wins-to-lower-pue",
      title: "Quick wins to lower PUE",
      description: "Changes that pay back fast, roughly in order of effort.",
      date: "2026-10-25",
      courses: [841, 832],
      body: `1. **Install blanking panels** and seal cable openings so cold and hot air stop mixing
2. **Move perforated tiles** to where the IT load actually is
3. **Raise supply air temperature** within ASHRAE's recommended range, in small steps
4. **Turn off or idle extra cooling units** once airflow is managed
5. **Use variable speed fans and pumps** and let them slow down
6. **Raise chilled water temperature** to get more economizer hours
7. **Contain the aisles** (hot or cold)
8. **Right-size UPS** and run modules at efficient load levels
9. **Switch to LED lighting** with occupancy sensors
10. **Remove zombie servers**: IT that's powered but doing nothing

Measure before and after each change. See [[841]] for cooling design.`,
    },
  ],
};
