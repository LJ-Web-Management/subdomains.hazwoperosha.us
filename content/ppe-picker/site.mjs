// ppe-picker.hazwoperosha.us: interactive PPE level (A/B/C/D) explainer. Gear-locker look.
export default {
  brand: "PPE Picker",
  logo: `<span class="lv">A</span><span class="lv">B</span><span class="lv">C</span><span class="lv">D</span> PPE Picker`,
  title: "Which PPE Level? Interactive Level A, B, C, D Picker | PPE Picker",
  description: "Answer a few questions about the hazard and see which EPA/OSHA level of protection (A, B, C or D) typically applies, with an explanation. Then train with PPE and HAZWOPER courses.",
  theme: "#1864ab",
  fonts: "family=Archivo+Black&family=Inter:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#1864ab"/><circle cx="16" cy="11" r="5" fill="#ffd43b"/><path d="M8 28c0-6 4-10 8-10s8 4 8 10z" fill="#ffd43b"/></svg>`,
  hero: {
    title: "Which level <span>of protection?</span>",
    lede: "Work through the same questions a site safety officer asks, and see which level of protection usually fits. For learning, not for picking PPE on a real site.",
    cta: [587, "40-Hour HAZWOPER · $249.99"],
    alt: ["#picker", "Try the picker"],
  },
  coursesTagline: "PPE and HAZWOPER courses.",
  guidesTagline: "Choosing, upgrading and working in PPE.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "PPE in depth, with the rest of HAZWOPER.", body: `The full initial course, including PPE selection, respirators and limits.`, topics: ["PPE program", "Respirators", "Heat stress", "Decon"], who: "Site workers." },
    { id: 597, short: "Supervisor", summary: "Making PPE decisions as a supervisor.", body: `Eight hours for site supervisors.`, topics: ["PPE program", "Monitoring", "Upgrades"], who: "Supervisors." },
  ],

  feature: () => `<section class="sec pk-sec" id="picker"><div class="wrap pk-in">
<div class="pk">
<p class="pk-step" id="pkStep"></p>
<h2 id="pkQ"></h2>
<div class="pk-opts" id="pkOpts"></div>
<button type="button" class="pk-reset" id="pkReset" hidden>Start over</button>
</div>
<div class="suits" aria-hidden="true">${["A", "B", "C", "D"].map((l) => `<div class="suit" data-l="${l}"><b>${l}</b></div>`).join("")}</div>
</div>
<p class="pk-note">Educational tool only. On a real site, PPE is set by the site safety and health plan and a qualified person, based on monitoring and site characterization.</p>
</section>
<script>
(function () {
  var L = {
    A: "Level A: fully encapsulating, vapor-tight chemical suit with SCBA or supplied air. For the highest respiratory hazard plus a serious skin, eye or absorption hazard, or unknown conditions where that's possible.",
    B: "Level B: SCBA or supplied air, with chemical-resistant splash clothing. For the highest respiratory hazard (including IDLH, oxygen-deficient or unknown atmospheres) with a lower skin hazard.",
    C: "Level C: air-purifying respirator with chemical-resistant clothing. Only when contaminants are identified, concentrations are measured, oxygen is adequate and the respirator is approved for them.",
    D: "Level D: work uniform, safety boots, gloves and eye protection. No respiratory hazard and minimal skin hazard. Add chemical-resistant boots and gloves if there's splash contact (often called modified Level D)."
  };
  var Q = {
    known: { q: "Are the contaminants identified and their concentrations measured?", o: [["Yes", "idlh"], ["No, or not yet", "skinU"]] },
    skinU: { q: "Could there be vapors or liquids that harm or absorb through the skin?", o: [["Possibly / yes", "A"], ["Unlikely", "B"]] },
    idlh: { q: "Could the atmosphere be IDLH or below 19.5% oxygen?", o: [["Yes", "skinU"], ["No", "resp"]] },
    resp: { q: "Is any airborne contaminant above its exposure limit or action level?", o: [["Yes", "apr"], ["No", "D"]] },
    apr: { q: "Is there an air-purifying cartridge approved for it, with concentrations within its limits?", o: [["Yes", "skinC"], ["No", "skinU"]] },
    skinC: { q: "Is there a serious skin absorption or vapor hazard to the skin?", o: [["Yes", "A"], ["No", "C"]] }
  };
  var path = [], q = document.getElementById("pkQ"), o = document.getElementById("pkOpts"), st = document.getElementById("pkStep"), rs = document.getElementById("pkReset");
  var suits = document.querySelectorAll(".suit");
  function light(l) { suits.forEach(function (s) { s.classList.toggle("on", s.getAttribute("data-l") === l); }); }
  function go(k) {
    path.push(k); o.textContent = ""; rs.hidden = path.length < 2;
    if (L[k]) { st.textContent = "Typical level"; q.textContent = "Level " + k; var p = document.createElement("p"); p.textContent = L[k]; o.appendChild(p); light(k); return; }
    light(null); st.textContent = "Question " + path.length; q.textContent = Q[k].q;
    Q[k].o.forEach(function (x) { var b = document.createElement("button"); b.type = "button"; b.className = "pk-opt"; b.textContent = x[0]; b.addEventListener("click", function () { go(x[1]); }); o.appendChild(b); });
  }
  rs.addEventListener("click", function () { path = []; go("known"); });
  go("known");
})();
</script>`,

  guides: [
    {
      slug: "upgrading-and-downgrading-ppe",
      title: "Upgrading and downgrading PPE on site",
      description: "PPE levels change as monitoring data comes in. How sites decide, and why downgrading matters too.",
      date: "2026-10-25",
      courses: [597],
      body: `The level of protection isn't fixed for the whole job. The site safety plan sets the starting level and the conditions for changing it.

## Typical upgrade triggers

- Readings above an action level in the breathing zone
- Unknown drums, odors or staining found during work
- Moving into a more contaminated area
- Change in task, for example from walking the site to opening containers
- Change in weather that affects vapor levels

## Typical downgrade triggers

- Monitoring data shows sustained low readings
- Contaminants are identified and confirmed below limits
- The most hazardous phase of work is complete

## Why downgrading matters

Higher levels bring heat stress, fatigue, poor visibility and slower work. Staying in Level B when Level C or D is safe raises the risk of heat illness and accidents. Good programs move down as soon as the data supports it.

## Who decides

The site safety officer or supervisor, using the plan's action levels. Workers should never change their own level without direction. See [[597]].`,
    },
    {
      slug: "working-safely-in-level-a-and-b",
      title: "Working safely in Level A and Level B",
      description: "Encapsulated work is physically demanding. The precautions that keep entry teams safe.",
      date: "2026-10-25",
      courses: [587],
      body: `## Before entry

- Medical clearance and a recent check of vital signs
- Hydrate well before suiting up
- Inspect the suit, zippers, gloves and boots
- Check SCBA cylinder pressure and do a function test
- Set a work time based on air supply and heat, not just the task

## During entry

- Work in buddy pairs with a backup team suited and ready
- Use hand signals for "out of air," "need help" and "leaving now"
- Leave with enough air to finish decon
- Watch your partner for signs of heat stress

## After entry

- Full decon before doffing
- Rest, rehydrate and check vital signs again
- Note any suit damage or problems for the team

## Heat is the main risk

Encapsulating suits trap almost all body heat. Work periods in hot weather can be as short as 15 to 20 minutes. Cooling vests and shaded rest areas help.
`,
    },
  ],
};
