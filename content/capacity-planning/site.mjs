// capacity-planning.hazwoperosha.us: capacity planning with a rack heat and cooling calculator. Spreadsheet grid, indigo.
export default {
  brand: "Headroom",
  logo: `<span class="hr-meter"><i></i></span>Headroom`,
  title: "Data Center Capacity Planning Training & Rack Calculator | Headroom",
  description: "Capacity planning training for data center teams, with a calculator that turns racks and kW per rack into IT load, heat in BTU/hr, tons of cooling and current per rack.",
  theme: "#3a0ca3",
  fonts: "family=Inter+Tight:wght@400;600;800&family=Roboto+Mono:wght@500",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#3a0ca3"/><rect x="6" y="20" width="4" height="6" fill="#fff"/><rect x="12" y="15" width="4" height="11" fill="#fff"/><rect x="18" y="10" width="4" height="16" fill="#fff"/><rect x="24" y="5" width="3" height="21" fill="#f72585"/></svg>`,
  hero: {
    title: "Know your <span>headroom.</span>",
    lede: "Running out of power or cooling is a slow emergency that becomes a fast one. Training on forecasting and capacity planning, plus a quick rack load calculator.",
    cta: [829, "Capacity Planning · $99.99"],
    alt: ["#calc", "Rack load calculator"],
  },
  coursesTagline: "Capacity, design and operations training.",
  guidesTagline: "Stranded capacity and forecasting basics.",

  courses: [
    { id: 829, short: "Capacity Planning & Forecasting" },
    { id: 842, short: "Design Fundamentals" },
    { id: 843, short: "Operations Management" },
    { id: 1092, short: "Power Distribution Systems" },
    { id: 830, short: "DCIM Platform Fundamentals" },
  ],

  feature: () => `<section class="sec hr-sec" id="calc"><div class="wrap">
<h2 class="title">Rack load calculator</h2>
<div class="hr-grid">
<label>Racks<input id="hrR" type="number" min="1" value="40"></label>
<label>Average kW per rack<input id="hrK" type="number" min="0.1" step="0.5" value="8"></label>
<label>Voltage (3-phase)<select id="hrV"><option value="208">208 V</option><option value="415">415 V</option><option value="480">480 V</option></select></label>
<label>Power factor<input id="hrF" type="number" min="0.5" max="1" step="0.01" value="0.95"></label>
</div>
<table class="hr-table" aria-live="polite"><tbody>
<tr><th>Total IT load</th><td id="hrT">–</td></tr>
<tr><th>Heat to remove</th><td id="hrB">–</td></tr>
<tr><th>Cooling needed</th><td id="hrC">–</td></tr>
<tr><th>Current per rack (per phase)</th><td id="hrA">–</td></tr>
</tbody></table>
<p class="hr-note">Assumes nearly all IT power becomes heat (1 kW ≈ 3,412 BTU/hr; 12,000 BTU/hr = 1 ton). Add redundancy, growth and non-IT heat loads before sizing equipment.</p>
</div></section>
<script>
(function () {
  function n(id) { return parseFloat(document.getElementById(id).value) || 0; }
  function f(x) { return Math.round(x).toLocaleString(); }
  function calc() {
    var kw = n("hrR") * n("hrK"), btu = kw * 3412, amps = n("hrK") * 1000 / (Math.sqrt(3) * n("hrV") * (n("hrF") || 1));
    document.getElementById("hrT").textContent = f(kw) + " kW";
    document.getElementById("hrB").textContent = f(btu) + " BTU/hr";
    document.getElementById("hrC").textContent = (btu / 12000).toFixed(1) + " tons (" + f(kw) + " kW)";
    document.getElementById("hrA").textContent = amps.toFixed(1) + " A";
  }
  document.querySelectorAll(".hr-grid input, .hr-grid select").forEach(function (i) { i.addEventListener("input", calc); });
  calc();
})();
</script>`,

  guides: [
    {
      slug: "stranded-capacity",
      title: "Stranded capacity: the power and cooling you can't use",
      description: "Why a half-full data center can still be 'full'.",
      date: "2026-10-25",
      courses: [829, 830],
      body: `**Stranded capacity** is power, cooling or space you've paid for but can't use, because another resource runs out first.

## Common examples

- Racks with free space but no power left on their circuits
- Power available in one room, cooling available in another
- Cooling capacity tied up by poor airflow (hot spots force low setpoints)
- Breakers and PDUs reserved for equipment that was never installed
- Floor-loading limits that stop dense racks

## How to find it

Compare **design capacity**, **provisioned capacity** and **actual measured load** for power, cooling, space and network ports, by room and by rack. DCIM tools help ([[830]]).

## How to recover it

- Rebalance loads across circuits and PDUs
- Fix airflow so cooling can be used where it's needed
- Release reservations nobody is using
- Plan new deployments where all four resources line up

{{buy:829}}`,
    },
    {
      slug: "forecasting-basics",
      title: "Capacity forecasting basics",
      description: "Turning growth plans into a date you'll run out.",
      date: "2026-10-25",
      courses: [829, 842],
      body: `## Start with the trend

Plot monthly peak IT load for the last two years. Fit a simple trend.

## Add known demand

Ask IT and customers about planned deployments, refreshes and migrations. Add them as steps on top of the trend.

## Set thresholds

Choose the point at which you need more capacity, often around 80% of usable capacity, leaving room for redundancy and surprises.

## Work back from lead times

New power or cooling capacity can take months to years. Your decision date is the threshold date minus the lead time.

## Revisit often

Update the forecast quarterly. Watch rack densities: higher kW per rack can exhaust cooling long before space runs out. See [[842]] for design options.`,
    },
  ],
};
