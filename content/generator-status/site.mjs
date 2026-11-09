// generator-status.hazwoperosha.us: VSQG / SQG / LQG calculator for hazardous waste generators. Three-step scale, kilogram weights.
export default {
  brand: "Generator Status",
  logo: `<span class="gs-kg">kg</span>Generator Status`,
  title: "Hazardous Waste Generator Calculator: VSQG, SQG or LQG? | Generator Status",
  description: "Work out your RCRA hazardous waste generator category from your monthly waste amounts, see the accumulation limits that apply, and train your staff on generator rules.",
  theme: "#6741d9",
  fonts: "family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#6741d9"/><path d="M6 24h20M10 24v-6h4v6M16 24V12h4v12M22 24V7h4v17" stroke="#fff" stroke-width="2" fill="#b197fc"/></svg>`,
  hero: {
    title: "Which generator <span>are you?</span>",
    lede: "Your generator category sets how long you can store waste, how much paperwork you need and how much training your people need. Enter your monthly amounts to find yours.",
    cta: [601, "RCRA Generator · $89.99"],
    alt: ["#calc", "Find my category"],
  },
  coursesTagline: "Generator training for every category.",
  guidesTagline: "Counting waste and what happens when your category changes.",

  courses: [
    { id: 601, short: "RCRA Generator Training", summary: "The full generator course: determinations, accumulation, manifests and training.", body: "Eight hours on the federal hazardous waste generator rules: identifying hazardous waste, working out your category, accumulating waste on site, manifests, training and emergency preparedness.", topics: ["Waste determinations", "VSQG, SQG and LQG requirements", "Accumulation time and quantity limits", "Manifests and records"] },
    { id: 600, short: "RCRA Generator Refresher", summary: "The annual refresher for LQG personnel and anyone who needs an update.", body: "Four hours that refresh the generator rules for staff who handle hazardous waste every day, including recent rule changes.", topics: ["Generator categories", "Container management", "Recent rule changes"] },
    { id: 415, short: "Satellite Accumulation Areas", summary: "Rules for waste collected at the point of generation.", body: "Two hours on satellite accumulation: where SAAs can be, how much they can hold, labeling and keeping containers closed.", topics: ["Point of generation", "55-gallon and acute limits", "Labels and closed containers"] },
    { id: 412, short: "Contingency Plan & Emergency Coordinator", summary: "Contingency plans and the emergency coordinator role for LQGs.", body: "Four hours on the contingency plan and the emergency coordinator's role during fires, explosions and releases of hazardous waste.", topics: ["Contingency plan contents", "Emergency coordinator duties", "Quick reference guide", "Notification"] },
    { id: 580, short: "Hazardous Waste Manifest", summary: "Filling out and tracking the manifest for every shipment.", body: "Two hours on completing, signing and tracking the Uniform Hazardous Waste Manifest and using e-Manifest.", topics: ["Manifest boxes", "Signatures and copies", "e-Manifest", "Discrepancies and exceptions"] },
  ],

  feature: () => `<section class="sec gs-sec" id="calc"><div class="wrap gs-in">
<form class="gs-form" method="post"><h2>Monthly amounts</h2>
<label>Non-acute hazardous waste generated this month (kg)<input id="gsH" type="number" min="0" value="250"></label>
<label>Acute hazardous waste (P-listed and some F-codes) this month (kg)<input id="gsA" type="number" min="0" step="0.1" value="0"></label>
<label>Residue from cleanup of acute hazardous waste spills this month (kg)<input id="gsR" type="number" min="0" value="0"></label>
<p class="gs-tip">1 kg ≈ 2.2 lb. A 55-gallon drum of water-like liquid weighs about 208 kg.</p>
</form>
<div class="gs-out" aria-live="polite">
<div class="gs-scale"><span data-c="VSQG">VSQG</span><span data-c="SQG">SQG</span><span data-c="LQG">LQG</span></div>
<h3 id="gsT"></h3><ul id="gsL"></ul>
<p class="gs-note">Federal rules. Many states are stricter or count differently. Your category can change month to month; check your state's rules.</p>
</div></div></section>
<script>
(function () {
  document.querySelector(".gs-form").addEventListener("submit", function (e) { e.preventDefault(); });
  var R = {
    VSQG: ["Very small quantity generator", ["No federal time limit, but keep no more than 1,000 kg on site", "Make sure waste goes to a facility allowed to take it", "Identify (characterize) every waste"]],
    SQG: ["Small quantity generator", ["Up to 180 days on site (270 if the facility is over 200 miles away)", "No more than 6,000 kg on site at any time", "Manifest every shipment", "Emergency preparedness and a designated emergency contact", "Employees familiar with proper handling and emergency procedures"]],
    LQG: ["Large quantity generator", ["Up to 90 days on site", "Manifest every shipment", "Written contingency plan with an emergency coordinator", "Formal training program with annual review", "Biennial hazardous waste report"]]
  };
  function n(id) { return parseFloat(document.getElementById(id).value) || 0; }
  function calc() {
    var h = n("gsH"), a = n("gsA"), r = n("gsR");
    var c = (h >= 1000 || a > 1 || r > 100) ? "LQG" : h > 100 ? "SQG" : "VSQG";
    document.querySelectorAll(".gs-scale span").forEach(function (s) { s.classList.toggle("on", s.getAttribute("data-c") === c); });
    document.getElementById("gsT").textContent = R[c][0];
    var ul = document.getElementById("gsL"); ul.innerHTML = "";
    R[c][1].forEach(function (t) { var li = document.createElement("li"); li.textContent = t; ul.appendChild(li); });
  }
  document.querySelectorAll(".gs-form input").forEach(function (i) { i.addEventListener("input", calc); });
  calc();
})();
</script>`,

  guides: [
    {
      slug: "counting-hazardous-waste",
      title: "Counting your hazardous waste correctly",
      description: "What counts toward your monthly total, and what doesn't.",
      date: "2026-10-25",
      courses: [601],
      body: `Generator category is based on the amount of hazardous waste you **generate in a calendar month**, not how much you ship or store.

## Count

- Hazardous waste accumulated on site before shipment
- Waste packaged and shipped off site
- Waste placed directly in on-site treatment or disposal

## Generally don't count

- Waste managed under the universal waste rules
- Used oil managed under the used oil rules
- Waste that's exempt or excluded (for example, some recycled materials)
- Waste already counted once

## Acute hazardous waste is counted separately

More than 1 kg of acute hazardous waste in a month makes you an LQG on its own, no matter how little other waste you generate.

## Keep records

Track monthly totals so you can show your category if an inspector asks.

{{buy:601}}`,
    },
    {
      slug: "episodic-generation",
      title: "When your category changes for a month: episodic generation",
      description: "A cleanout or a spill can bump you up a category. Here's how the episodic rule works.",
      date: "2026-10-25",
      courses: [601, 600],
      body: `A one-time event, like a tank cleanout, a lab cleanout or a spill, can push a VSQG or SQG into a higher category for that month.

## The federal episodic generation rule

Under 40 CFR 262 Subpart L, a VSQG or SQG can keep its normal category during an **episodic event** if it:

- Notifies EPA or the state before a planned event (or within 72 hours of an unplanned one)
- Gets an EPA ID number if it doesn't have one
- Labels and manages the episodic waste properly
- Ships it off with a manifest within 60 days

Generally one event a year is allowed, with a petition for one more.

## Not every state has adopted it

Check your state's rules before you count on it.

## Otherwise

Without the rule, you must meet the higher category's requirements for that month. See [[600]] for an annual refresher.`,
    },
  ],
};
