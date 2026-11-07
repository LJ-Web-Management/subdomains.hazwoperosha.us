// boom-calculator.hazwoperosha.us: spill boom length calculator (encircle and deflect). Water blue with a yellow boom line.
export default {
  brand: "Boom Length",
  logo: `<span class="bl-boom"></span>Boom Length`,
  title: "Spill Boom Length Calculator & Oil Spill Response Training | Boom Length",
  description: "Estimate how much containment boom you need to encircle a slick or deflect oil across a current, then train your crew on booms, spill kits and oil spill response.",
  theme: "#0b7285",
  fonts: "family=Atkinson+Hyperlegible:wght@400;700&family=Anton",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0b7285"/><path d="M4 22c6-10 18-10 24 0" stroke="#ffd43b" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="16" cy="21" rx="6" ry="3" fill="#212529"/></svg>`,
  hero: {
    title: "How much boom <span>do you need?</span>",
    lede: "Containment boom works only if there's enough of it, set at the right angle for the current. Get a quick estimate below, then train the crew that deploys it.",
    cta: [478, "Boom Training · $24.99"],
    alt: ["#calc", "Calculate"],
  },
  heroArt: `<svg class="bl-wave" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 60 Q150 20 300 60 T600 60 T900 60 T1200 60 V120 H0z" fill="#0b7285" opacity=".15"/><path d="M0 80 Q150 40 300 80 T600 80 T900 80 T1200 80 V120 H0z" fill="#0b7285" opacity=".2"/></svg>`,
  coursesTagline: "Boom, spill kit and oil spill response training.",
  guidesTagline: "Deploying boom in moving water, and why boom fails.",

  courses: [
    { id: 478, short: "Absorbent & Containment Booms", summary: "Choosing, deploying and recovering boom.", body: "One hour on containment and absorbent booms: types, sizes, connectors, anchoring and deployment for containment, deflection and exclusion.", topics: ["Containment vs absorbent boom", "Deployment configurations", "Anchoring", "Recovery and disposal"] },
    { id: 479, short: "Spill Kit Selection & Use", summary: "The right kit for the spill.", body: "One hour on choosing, placing and using spill kits for oil, chemicals and universal spills.", topics: ["Kit types", "Placement", "Using absorbents"] },
    { id: 416, short: "Spill Prevention & Response", summary: "Preventing spills and the first response.", body: "Two hours on preventing spills and responding safely when they happen.", topics: ["Prevention", "First response", "Reporting"] },
    { id: 591, short: "40-Hour Oil & Gas Spill Response", summary: "Full HAZWOPER for oil spill responders.", body: "The 40-hour HAZWOPER course built for oil and gas spill response crews.", topics: ["Oil spill hazards", "Containment and recovery", "PPE and decon", "Site safety"] },
  ],

  feature: () => `<section class="sec bl-sec" id="calc"><div class="wrap bl-in">
<form class="bl-form" method="post">
<div class="bl-tabs"><button type="button" class="on" data-m="enc">Encircle a slick</button><button type="button" data-m="def">Deflect across a current</button></div>
<div data-p="enc"><label>Slick diameter (ft)<input id="blD" type="number" min="1" value="100"></label></div>
<div data-p="def" hidden><label>Width to cover (ft)<input id="blW" type="number" min="1" value="200"></label><label>Current speed (knots)<input id="blC" type="number" min="0.1" step="0.1" value="1.5"></label></div>
<label>Extra for slack, anchors and overlap (%)<input id="blX" type="number" min="0" value="20"></label>
</form>
<div class="bl-out" aria-live="polite"><p class="bl-k">Estimated boom</p><p class="bl-v"><span id="blV">–</span> ft</p><p id="blS" class="bl-s"></p>
<p class="bl-note">A planning estimate. Boom generally starts losing oil underneath when the current component across it exceeds about 0.7 knots, so faster water needs sharper angles and more boom. Site conditions, waves and wind change everything.</p></div>
</div></section>
<script>
(function () {
  document.querySelector(".bl-form").addEventListener("submit", function (e) { e.preventDefault(); });
  var m = "enc";
  function n(id) { return parseFloat(document.getElementById(id).value) || 0; }
  function calc() {
    var x = 1 + n("blX") / 100, L = 0, s = "";
    if (m === "enc") { L = Math.PI * n("blD") * x; s = "Circumference of the slick plus extra."; }
    else { var v = n("blC"), w = n("blW"), a = v > 0.7 ? Math.asin(0.7 / v) : Math.PI / 2; L = w / Math.sin(a) * x; s = "Boom angle about " + Math.round(a * 180 / Math.PI) + "° to the current."; }
    document.getElementById("blV").textContent = L ? Math.round(L).toLocaleString() : "–";
    document.getElementById("blS").textContent = s;
  }
  document.querySelectorAll(".bl-tabs button").forEach(function (b) { b.addEventListener("click", function () { m = b.getAttribute("data-m"); document.querySelectorAll(".bl-tabs button").forEach(function (x) { x.classList.toggle("on", x === b); }); document.querySelectorAll("[data-p]").forEach(function (p) { p.hidden = p.getAttribute("data-p") !== m; }); calc(); }); });
  document.querySelectorAll(".bl-form input").forEach(function (i) { i.addEventListener("input", calc); });
  calc();
})();
</script>`,

  guides: [
    {
      slug: "deploying-boom-in-moving-water",
      title: "Deploying boom in moving water",
      description: "Angles, anchors and collection points for creeks, rivers and channels.",
      date: "2026-10-25",
      courses: [478, 591],
      body: `In moving water, boom set straight across the current usually fails: oil is carried under the skirt (entrainment). Instead, crews **angle** the boom to deflect oil toward a calm collection point on the bank.

## The angle

The faster the current, the sharper the angle. A common rule of thumb keeps the current component perpendicular to the boom below about 0.7 knots.

## Setting it up

1. Pick a collection point on a bank with slow water and access for recovery equipment
2. Anchor the upstream end, then let the current swing the boom into position
3. Anchor along the length as needed to hold the angle
4. Use multiple shorter booms in a cascade for fast or wide water

## Safety

- Work in pairs with PFDs near water
- Watch for slippery banks and debris
- Never stand in the bight of a line under tension

{{buy:478}}`,
    },
    {
      slug: "why-boom-fails",
      title: "Why boom fails",
      description: "Five ways oil gets past containment boom.",
      date: "2026-10-25",
      courses: [478, 416],
      body: `## 1. Entrainment

Current too fast across the boom pulls oil droplets under the skirt.

## 2. Splashover

Waves carry oil over the top of the freeboard.

## 3. Drainage failure

Thick oil pools against the boom and flows down and under it.

## 4. Planing

Wind and current push the boom flat so it lies on the water.

## 5. Gaps

Poor connections, anchors that drag, or boom that doesn't reach the shore.

## Fix it

Change the angle, add a second line of boom, choose a boom with a larger skirt or freeboard for the conditions, and check connections and anchors often. See [[416]] for spill response basics.`,
    },
  ],
};
