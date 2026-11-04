// dc-generators.hazwoperosha.us: standby generators and fuel, with a fuel runtime estimator. Diesel yard, safety orange on steel.
export default {
  title: "Data Center Generator Training & Fuel Runtime Estimator | Industrial Certified Training",
  description: "Generator training for data center teams: generator operations and maintenance, emergency and standby power, EPO procedures and fuel spill prevention, with a diesel runtime estimator.",
  theme: "#f77f00",
  fonts: "family=Big+Shoulders+Display:wght@700;900&family=Inter:wght@400;500;600",
  hero: {
    title: "When the grid <span>goes dark.</span>",
    lede: "Diesel generators are the last line between a utility outage and a data center outage. Training on generator operation, maintenance, standby power systems and fuel, with a runtime estimator.",
    cta: [835, "Generator O&M · $99.99"],
    alt: ["#fuel", "Fuel runtime estimator"],
  },
  coursesTagline: "Generator, standby power and fuel training.",
  guidesTagline: "Load testing, fuel quality and the failures that keep generators from starting.",

  courses: [
    { id: 835, short: "Generator Operations & Maintenance" },
    { id: 1098, short: "Emergency/Standby Power Systems" },
    { id: 853, short: "Emergency Power Off (EPO)" },
    { id: 416, short: "Spill Prevention & Response", summary: "Fuel deliveries, day tanks and spill response.", body: `Two hours on preventing and responding to diesel spills at generator yards: deliveries, tanks, containment and reporting.`, topics: ["Fuel deliveries", "Day tanks", "Secondary containment", "Reporting"], who: "Generator and facility technicians." },
    { id: 479, short: "Spill Kit Selection & Use", summary: "Choosing and using spill kits for fuel.", body: `One hour on choosing, placing and using spill kits, including oil-only kits for diesel.`, topics: ["Kit types", "Placement", "Using absorbents", "Disposal"], who: "Generator and facility technicians." },
  ],

  feature: () => `<section class="sec gy-sec" id="fuel"><div class="wrap gy-in">
<form class="gy-form" onsubmit="return false"><h2>Fuel runtime estimator</h2>
<label>Generator rating (kW)<input id="gyK" type="number" min="1" value="2000"></label>
<label>Load (% of rating)<input id="gyP" type="range" min="10" max="100" step="5" value="60"><output id="gyPo">60%</output></label>
<label>Fuel in the tank (gallons)<input id="gyG" type="number" min="0" value="6000"></label>
<label>Usable fuel (%)<input id="gyU" type="number" min="50" max="100" value="90"></label>
</form>
<div class="gy-out" aria-live="polite"><p class="gy-k">Burn rate</p><p class="gy-v"><span id="gyB">–</span> <small>gal/hr</small></p><p class="gy-k">Estimated runtime</p><p class="gy-v big"><span id="gyR">–</span> <small>hours</small></p>
<p class="gy-note">A rule-of-thumb estimate for diesel units (about 7.4 gal/hr per 100 kW at full load, less at partial load). Use your generator's fuel consumption data and keep a fuel delivery contract for long outages.</p></div>
</div></section>
<script>
(function () {
  function n(id) { return parseFloat(document.getElementById(id).value) || 0; }
  function calc() {
    var L = n("gyP") / 100, gph = n("gyK") * (0.010 + 0.064 * L);
    document.getElementById("gyPo").textContent = Math.round(L * 100) + "%";
    document.getElementById("gyB").textContent = gph ? Math.round(gph) : "–";
    var h = gph ? n("gyG") * n("gyU") / 100 / gph : 0;
    document.getElementById("gyR").textContent = h ? (h < 10 ? h.toFixed(1) : Math.round(h)) : "–";
  }
  document.querySelectorAll(".gy-form input").forEach(function (i) { i.addEventListener("input", calc); });
  calc();
})();
</script>`,

  guides: [
    {
      slug: "why-generators-fail-to-start",
      title: "Why standby generators fail to start",
      description: "The usual suspects, and the maintenance that rules them out.",
      date: "2026-10-25",
      courses: [835, 1098],
      body: `## Batteries

Weak or failed starting batteries are among the most common causes. Check voltage, electrolyte where applicable, connections and chargers regularly, and replace on schedule.

## Fuel

- Water and microbial growth in stored diesel
- Clogged filters
- Air in the fuel lines after maintenance
- Day tank pumps or controls that don't refill

## Controls left in the wrong position

A generator left in "off" or "manual" after maintenance won't answer an auto-start signal. Check switch positions as part of every handover.

## Cooling and heating

Failed block heaters make cold starts slow or impossible. Coolant leaks lead to shutdowns under load.

## Wet stacking

Diesels run for long periods at light load can build up unburned fuel in the exhaust. Load bank testing helps burn it off.

## Prevention

Follow NFPA 110 inspection and testing, run monthly tests under load, and load bank test as required.

{{buy:835}}`,
    },
    {
      slug: "diesel-fuel-quality",
      title: "Keeping stored diesel fuel healthy",
      description: "Fuel that sits for years can fail you when you need it most.",
      date: "2026-10-25",
      courses: [835, 416],
      body: `## What goes wrong

- **Water** from condensation collects at the bottom of the tank
- **Microbes** grow at the fuel-water interface and make sludge
- **Oxidation** forms gums and sediment over time

## What to do

1. **Test** fuel on a schedule (commonly annually) for water, sediment and microbial growth
2. **Drain water** from tank sumps regularly
3. **Polish** fuel by filtering and recirculating it
4. **Keep tanks full** to limit condensation, where your SPCC plan allows
5. **Record** every delivery, test and treatment

## Spill risks

Fuel deliveries, overfills and tank leaks are the main spill risks at most data centers. Watch every delivery, use secondary containment and keep spill kits nearby. See [[416]] and [[479]].`,
    },
  ],
};
