// safety-plan-checklist.hazwoperosha.us: printable site safety and health plan checklist (1910.120(b)(4)). Clipboard.
const ITEMS = [
  ["Hazard analysis", "Safety and health risk or hazard analysis for each site task and operation in the work plan."],
  ["Training assignments", "Employee training assignments, so each worker is trained for their tasks and hazards."],
  ["Personal protective equipment", "PPE to be used by employees for each site task and operation."],
  ["Medical surveillance", "Medical surveillance requirements for the site's workers."],
  ["Monitoring and sampling", "Frequency and types of air monitoring, personnel monitoring and environmental sampling, and the instruments used, including maintenance and calibration."],
  ["Site control", "Site control measures, including work zones, the buddy system, communications and safe work practices."],
  ["Decontamination", "Decontamination procedures for people and equipment."],
  ["Emergency response plan", "An emergency response plan for safe and effective responses to emergencies, including PPE and other equipment."],
  ["Confined space entry", "Confined space entry procedures, where confined spaces exist."],
  ["Spill containment", "A spill containment program."],
  ["Pre-entry briefings", "Pre-entry briefings before site activities begin, and as often as needed to keep workers safe."],
  ["Plan inspections", "Inspections by the site safety officer or another qualified person to check the plan is followed and effective."],
];

export default {
  brand: "HASP Checklist",
  logo: `<span class="clip">☑</span> HASP Checklist`,
  title: "Site Safety and Health Plan (HASP) Checklist | 29 CFR 1910.120(b)(4) | HASP Checklist",
  description: "An interactive, printable checklist of what a HAZWOPER site safety and health plan must address under 29 CFR 1910.120(b)(4). Tick items off, save progress in your browser and print.",
  theme: "#495057",
  fonts: "family=Patrick+Hand&family=Inter:wght@400;500;600;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="6" y="5" width="20" height="25" rx="2" fill="#c49a6c"/><rect x="9" y="8" width="14" height="19" fill="#fff"/><rect x="12" y="3" width="8" height="5" rx="1" fill="#495057"/><path d="M11 17l3 3 6-7" stroke="#2f9e44" stroke-width="2.5" fill="none"/></svg>`,
  hero: {
    title: "Is your site safety plan <span>complete?</span>",
    lede: "Every hazardous waste site needs a site-specific safety and health plan. Check yours against what the standard requires, then print the checklist for your file.",
    cta: [597, "Supervisor course · $69.99"],
    alt: ["#checklist", "Open the checklist"],
  },
  coursesTagline: "Courses for the people who write and run site safety plans.",
  guidesTagline: "Writing plans people use, and keeping them current.",

  courses: [
    { id: 597, short: "Supervisor", summary: "Running the site safety and health plan.", body: `Eight hours for site supervisors under 1910.120(e)(4).`, topics: ["Safety program", "Site plan", "Monitoring", "Briefings"], who: "Supervisors and site safety officers." },
    { id: 596, short: "Supervisor Refresher", summary: "Annual refresher for plan owners.", body: `Eight hours a year for supervisors.`, topics: ["Plan upkeep", "Briefings"], who: "Supervisors." },
    { id: 1016, short: "Train-the-Trainer", summary: "Teach the plan to your crews.", body: `24 hours on qualifying in-house trainers.`, topics: ["Trainer qualifications", "Lesson plans"], who: "EHS staff." },
    { id: 587, short: "40-Hour HAZWOPER", summary: "The foundation every plan assumes.", body: `The full initial course.`, topics: ["Site safety plans", "PPE", "Monitoring"], who: "Site workers." },
  ],

  feature: (h) => `<section class="sec ck-sec" id="checklist"><div class="wrap">
<div class="board">
<div class="board-clip" aria-hidden="true"></div>
<div class="sheet">
<div class="sheet-head"><h2>Site Safety &amp; Health Plan Checklist</h2><label>Site / project <input id="ckSite" type="text"></label></div>
<p class="prog"><b id="ckDone">0</b> of ${ITEMS.length} complete</p>
<ul class="ck">${ITEMS.map((it, i) => `<li><label><input type="checkbox" data-i="${i}"><span><b>${h.esc(it[0])}</b>${h.esc(it[1])}</span></label></li>`).join("")}</ul>
<div class="ck-actions no-print"><button type="button" class="btn" id="ckPrint">Print checklist</button><button type="button" class="btn btn-alt" id="ckClear">Clear</button></div>
<p class="ck-note no-print">Your ticks are saved in this browser only.</p>
</div></div></div></section>
<script>
(function () {
  var KEY = "hasp-checklist-v1", boxes = document.querySelectorAll(".ck input"), site = document.getElementById("ckSite"), done = document.getElementById("ckDone");
  var st = {}; try { st = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
  boxes.forEach(function (b) { b.checked = !!(st.c && st.c[b.dataset.i]); });
  site.value = st.s || "";
  function save() {
    var c = {}; boxes.forEach(function (b) { if (b.checked) c[b.dataset.i] = 1; });
    done.textContent = Object.keys(c).length;
    try { localStorage.setItem(KEY, JSON.stringify({ c: c, s: site.value })); } catch (e) {}
  }
  boxes.forEach(function (b) { b.addEventListener("change", save); }); site.addEventListener("input", save);
  document.getElementById("ckPrint").addEventListener("click", function () { window.print(); });
  document.getElementById("ckClear").addEventListener("click", function () { boxes.forEach(function (b) { b.checked = false; }); site.value = ""; save(); });
  save();
})();
</script>`,

  guides: [
    {
      slug: "writing-a-hasp-crews-will-use",
      title: "Writing a HASP your crew will actually use",
      description: "Complete isn't the same as usable. How to make the plan work on the tailgate.",
      date: "2026-10-25",
      courses: [597],
      body: `A site safety and health plan can cover every required element and still sit unread in a truck. These habits make it useful.

## One-page field summary

Put the site map with zones, PPE by task, action levels, the emergency signal, muster point, nearest hospital route and phone numbers on one laminated page.

## Action levels as decisions

"If the PID reads above X for Y minutes in the breathing zone, upgrade to Level C" is clearer than a table of exposure limits.

## Write for today's tasks

If drilling ends next week and excavation starts, update the hazard analysis and brief the crew.

## Brief it every day

Pre-entry briefings are required, and they're where the plan becomes real. Ask the crew questions to check they understood.

## Keep it current

Update the plan when conditions, tasks or contaminants change, and record the change.

{{buy:597}}`,
    },
    {
      slug: "hasp-inspections-and-updates",
      title: "Inspecting and updating the site safety plan",
      description: "The plan has to be checked and updated as work goes on. How to make that routine.",
      date: "2026-10-25",
      courses: [597, 596],
      body: `29 CFR 1910.120(b)(4)(iv) requires inspections by the site safety and health supervisor, or another qualified person, to check that the plan is being followed and is effective.

## What to inspect

- Are workers in the right PPE for their task?
- Are monitors calibrated, bump tested and in use?
- Are zone boundaries marked and respected?
- Is decon set up and working?
- Are emergency equipment and communications ready?
- Are training and medical records current for everyone on site?

## When to update the plan

- New contaminants or higher concentrations found
- New tasks or equipment
- Changes in weather or season that affect hazards
- After any incident or near miss
- When inspections find the plan isn't working

## Document it

Record each inspection, what was found, what was fixed and any plan revision. Brief the crew on every change.

{{buy:596}}`,
    },
  ],
};
