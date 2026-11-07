// heat-stress.hazwoperosha.us: heat index calculator for crews in PPE. Thermometer gradient, warm sunset.
export default {
  brand: "Suit Heat",
  logo: `<span class="sh-therm"></span>Suit Heat`,
  title: "Heat Index Calculator for HAZWOPER Crews in PPE | Suit Heat",
  description: "Calculate the heat index and risk level for your crew, see why chemical protective clothing makes heat stress worse, and train on PPE and site safety.",
  theme: "#e8590c",
  fonts: "family=Familjen+Grotesk:wght@400;600;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="13" y="3" width="6" height="20" rx="3" fill="#fff" stroke="#e8590c" stroke-width="2"/><circle cx="16" cy="25" r="5" fill="#e8590c"/><rect x="15" y="10" width="2" height="14" fill="#e8590c"/></svg>`,
  hero: {
    title: "It's hotter <span>inside the suit.</span>",
    lede: "Chemical protective clothing traps heat and sweat, so crews in PPE can overheat at temperatures that feel comfortable in a T-shirt. Check today's heat index and plan for it.",
    cta: [585, "PPE Levels · $12.99"],
    alt: ["#calc", "Check the heat index"],
  },
  coursesTagline: "PPE, site safety and HAZWOPER training.",
  guidesTagline: "Heat stress in PPE, and a heat plan for your site.",

  courses: [
    { id: 585, short: "PPE Levels A–D", summary: "The four levels of protection and their trade-offs.", body: "Fifteen minutes on PPE levels A through D, including the heat and mobility burden each one adds.", topics: ["Levels A–D", "Heat and mobility burden", "Choosing a level"] },
    { id: 587, short: "40-Hour HAZWOPER", summary: "Heat stress, PPE and site safety in depth.", body: "The full 40-hour initial course, including heat stress, PPE, medical surveillance and site safety plans.", topics: ["Heat stress", "PPE", "Medical surveillance", "Site safety plans"] },
    { id: 597, short: "HAZWOPER Supervisor", summary: "Planning work/rest and monitoring crews.", body: "Eight hours for supervisors, including planning work around heat and PPE.", topics: ["Site safety program", "PPE decisions", "Monitoring workers"] },
    { id: 595, short: "8-Hour Refresher", summary: "The annual refresher.", body: "The annual 8-hour HAZWOPER refresher.", topics: ["Review", "Lessons learned"] },
  ],

  feature: () => `<section class="sec sh-sec" id="calc"><div class="wrap sh-in">
<form class="sh-form" method="post">
<label>Air temperature (°F)<input id="shT" type="number" value="88"></label>
<label>Relative humidity (%)<input id="shR" type="number" min="0" max="100" value="55"></label>
<label class="ck"><input id="shP" type="checkbox" checked> Crew is wearing chemical protective clothing</label>
</form>
<div class="sh-out" aria-live="polite">
<div class="sh-bar"><i id="shM"></i></div>
<p class="sh-k">Heat index</p><p class="sh-v"><span id="shV">–</span>°F</p>
<p class="sh-lvl" id="shL"></p><p id="shA"></p>
<p class="sh-note">Heat index uses the National Weather Service formula and shade conditions. Full sun can add up to 15 °F. Risk levels follow OSHA's heat index bands. Impermeable PPE can make real heat stress far worse than the index shows, so use physiological monitoring and your site's heat plan.</p>
</div></div></section>
<script>
(function () {
  document.querySelector(".sh-form").addEventListener("submit", function (e) { e.preventDefault(); });
  function hi(T, R) {
    var s = 0.5 * (T + 61 + (T - 68) * 1.2 + R * 0.094);
    if ((s + T) / 2 < 80) return s;
    return -42.379 + 2.04901523 * T + 10.14333127 * R - 0.22475541 * T * R - 0.00683783 * T * T - 0.05481717 * R * R + 0.00122874 * T * T * R + 0.00085282 * T * R * R - 0.00000199 * T * T * R * R;
  }
  function calc() {
    var T = parseFloat(document.getElementById("shT").value) || 0, R = parseFloat(document.getElementById("shR").value) || 0, v = Math.round(hi(T, R)), p = document.getElementById("shP").checked;
    var lv = v < 91 ? ["Lower (caution)", "Provide water, rest and shade. Train workers on heat illness signs."] : v < 103 ? ["Moderate", "Remind workers to drink water often, schedule rest breaks, and watch for symptoms."] : v <= 115 ? ["High", "Increase rest breaks, use cooling measures, reschedule heavy work to cooler hours, and use a buddy system."] : ["Very high to extreme", "Reschedule non-essential work. Strict work/rest limits and close medical monitoring for anything that must be done."];
    document.getElementById("shV").textContent = v;
    document.getElementById("shL").textContent = "Risk: " + lv[0] + (p ? " (treat as higher in chemical protective clothing)" : "");
    document.getElementById("shA").textContent = lv[1];
    document.getElementById("shM").style.left = Math.max(0, Math.min(100, (v - 70) / 60 * 100)) + "%";
  }
  document.querySelectorAll(".sh-form input").forEach(function (i) { i.addEventListener("input", calc); i.addEventListener("change", calc); });
  calc();
})();
</script>`,

  guides: [
    {
      slug: "heat-stress-in-chemical-protective-clothing",
      title: "Heat stress in chemical protective clothing",
      description: "Why PPE changes the heat math, and how to protect crews.",
      date: "2026-10-25",
      courses: [585, 587],
      body: `Your body cools mostly by sweating. Impermeable suits stop sweat from evaporating, so heat builds up quickly, even on a mild day.

## Signs to watch

| Condition | Signs | Action |
|---|---|---|
| Heat rash, cramps | Muscle spasms, red bumps | Rest, water, cool place |
| Heat exhaustion | Heavy sweating, weakness, dizziness, nausea, headache | Remove from heat, remove PPE after decon, cool down, fluids, get medical help if not improving |
| Heat stroke | Confusion, slurred speech, hot skin, collapse, seizures | **Emergency: call 911**, cool the worker immediately |

## Controls

- **Acclimatize** new and returning workers gradually
- **Work/rest cycles** based on heat, workload and PPE level
- **Cooling vests** and shaded, cool rest areas
- **Hydration**: small amounts often
- **Physiological monitoring**: heart rate and body temperature as your site plan specifies
- **Buddy system** to spot early signs

{{buy:585}}`,
    },
    {
      slug: "site-heat-plan",
      title: "Writing a heat plan for your site",
      description: "What to put in the heat section of your site safety and health plan.",
      date: "2026-10-25",
      courses: [597, 587],
      body: `1. **Who's in charge** of checking the forecast and heat index each day
2. **Triggers**: heat index levels that change work/rest schedules
3. **Acclimatization** schedule for new or returning workers
4. **Work/rest schedules** by PPE level and workload
5. **Water, shade and cool-down areas**, and where they are
6. **Monitoring**: what, how often, and the limits that pull a worker from work
7. **Emergency procedures** for heat illness, including how to remove PPE quickly and cool a worker
8. **Training** on signs, symptoms and first aid

Supervisors ([[597]]) should review the plan at the morning tailgate on hot days.`,
    },
  ],
};
