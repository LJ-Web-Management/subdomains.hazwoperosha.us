// construction.hazwoperosha.us: HAZWOPER for construction on contaminated sites (29 CFR 1926.65). Blueprint.
export default {
  brand: "SITEWORK/HAZ",
  title: "HAZWOPER for Construction Workers | 29 CFR 1926.65 Online | SITEWORK/HAZ",
  description: "HAZWOPER training for construction crews on brownfields, landfills and contaminated excavations: 40-hour construction track, 24-hour, supervisor and PPE modules under 29 CFR 1926.65.",
  theme: "#0d3b78",
  fonts: "family=Archivo+Narrow:wght@500;600;700&family=Roboto+Mono:wght@400;500;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#0d3b78"/><path d="M4 26h24M8 26V12l8-6 8 6v14" stroke="#e6f0ff" stroke-width="2" fill="none"/><path d="M13 26v-7h6v7" stroke="#9cc3ff" stroke-width="2" fill="none"/></svg>`,
  coursesTagline: "HAZWOPER courses specified for construction crews working on contaminated ground.",
  guidesTagline: "Drawings and notes for contractors who dig, grade and build on impacted sites.",

  courses: [
    {
      id: 588, short: "40 HR Construction",
      summary: "The 40-hour initial HAZWOPER for construction workers on contaminated sites under 29 CFR 1926.65.",
      body: `Construction work on a hazardous waste site falls under 29 CFR 1926.65, the construction twin of 1910.120. The hours are the same: 40 hours of instruction and three days of supervised field experience for general site workers. This track teaches it through construction work: excavation, earthmoving, utilities and foundations in impacted soil.`,
      topics: ["How 1926.65 applies to construction projects", "Excavating and trenching through contaminated soil", "Heavy equipment in the exclusion zone", "Dust, vapor and heat on the job site", "Working under the environmental contractor's site plan", "PPE, respirators and decon for crews"],
      who: "Laborers, operators, pipe layers, foremen and superintendents on brownfield, landfill and contaminated-site projects.",
    },
    {
      id: 581, short: "24 HR HAZWOPER",
      summary: "The 24-hour HAZWOPER for construction staff who are on contaminated sites only occasionally or in low-exposure areas.",
      body: `Not everyone on a contaminated project needs 40 hours. Surveyors, inspectors and workers who stay in areas monitored below the exposure limits may qualify for 24 hours plus one supervised field day.`,
      topics: ["Who on a construction project qualifies for 24 hours", "Hazard recognition", "Site zones and decon", "PPE basics", "Emergency procedures"],
      who: "Surveyors, inspectors, delivery drivers and support trades with limited exposure.",
    },
    {
      id: 597, short: "8 HR Supervisor",
      summary: "The 8-hour HAZWOPER supervisor course for foremen and superintendents running crews on contaminated sites.",
      body: `Anyone who directs workers on a hazardous waste site needs eight more hours of supervisor training under 1926.65(e)(4). On construction projects that usually means foremen, superintendents and the contractor's site safety lead.`,
      topics: ["Your site safety program and training program", "PPE program and respirator decisions", "Spill containment program", "Monitoring procedures and action levels", "Daily briefings and enforcement"],
      who: "Foremen, superintendents and project safety leads.",
    },
    {
      id: 595, short: "8 HR Refresher",
      summary: "The annual 8-hour refresher that keeps construction crews' HAZWOPER certificates current.",
      body: `Every 40- and 24-hour worker needs eight hours of refresher training each year. Schedule it in the off-season so crews are current when bid season starts.`,
      topics: ["Hazard and PPE review", "Monitoring and decon review", "Construction incident case studies", "Regulatory updates"],
      who: "Construction workers with a current 40- or 24-hour certificate.",
    },
    {
      id: 585, short: "PPE Levels A–D",
      summary: "A 15-minute module on PPE levels, built for tailgate meetings.",
      body: `A quick, focused lesson on what Level A, B, C and D mean, ideal for a morning tailgate before a PPE change on site.`,
      topics: ["Levels A, B, C and D", "Respiratory vs skin protection", "Upgrading and downgrading"],
      who: "Crews before a PPE change, new hires and anyone needing a quick refresher.",
    },
  ],

  guides: [
    {
      slug: "does-my-construction-crew-need-hazwoper",
      title: "Does my construction crew need HAZWOPER?",
      description: "Brownfields, landfills and contaminated excavations bring 1926.65 onto the job. Here's when it applies.",
      date: "2026-10-25",
      courses: [588, 581],
      body: `Most construction never touches HAZWOPER. Then a project lands on a former gas station, a closed landfill or a brownfield, and suddenly it does.

## When 1926.65 applies

29 CFR 1926.65 covers construction work that involves:

- Cleanup operations at uncontrolled hazardous waste sites required by a government body
- Corrective actions at RCRA sites
- Voluntary cleanup at sites recognized by a government body as uncontrolled hazardous waste sites
- Emergency response to releases of hazardous substances

In practice, if your project is part of a remediation or the contaminated material is being dug up, moved or managed, assume HAZWOPER applies to the crew doing that work.

## Red flags in bid documents

| Look for | What it usually means |
|---|---|
| "Environmental contractor" or "LSP/LEP oversight" | Contamination is known |
| "Soil management plan" or "materials management plan" | Impacted soil will be handled |
| "Health and safety plan required" | Site-specific HASP under HAZWOPER |
| "40-hour HAZWOPER required for all personnel in work zone" | Exactly what it says |

## Who needs what

- **Crew in the excavation or operating equipment in impacted areas:** [[588]]
- **Occasional visitors and staff in monitored, low-exposure areas:** [[581]]
- **Foremen and superintendents:** add [[597]]

> Get the training before mobilization. A crew that shows up without certificates sits on the sidelines while the environmental contractor works.`,
    },
    {
      slug: "excavating-contaminated-soil",
      title: "Excavating contaminated soil: what changes for the crew",
      description: "Digging impacted soil is still digging. But air, skin and decon now matter as much as trench protection.",
      date: "2026-10-25",
      courses: [588, 585],
      body: `An excavation on a contaminated site has every hazard a normal trench has, plus chemical ones. The trench rules (1926 Subpart P) still apply in full.

## Air

Volatile contaminants such as fuels and solvents collect in trenches and low spots. Expect:

- Direct-reading monitoring at the excavation, often with a PID and a multi-gas meter
- Action levels in the site plan that trigger a PPE upgrade or a stop-work
- Oxygen and LEL checks before anyone enters a trench deeper than 4 feet where a hazardous atmosphere could exist

## Skin

Impacted soil and groundwater get on boots, gloves and equipment. Chemical-resistant boots and gloves are common, even at Level D.

## Dust

Dry, impacted soil becomes airborne contamination. Wet it down, limit drop heights and stop when monitors climb.

## Equipment

Machines that work in the exclusion zone get decontaminated before they leave, typically at a wash pad with containment. Tracks and buckets carry the most.

## Spoils

Contaminated spoils are waste, not fill. Stockpile them on liners, cover them and keep them separate from clean soil.

## Groundwater

Pumped water from an impacted excavation usually can't go to a storm drain. Follow the site plan for treatment or containment.

{{buy:588}}`,
    },
    {
      slug: "working-under-the-environmental-contractors-hasp", seoTitle: "Working under an environmental contractor's HASP",
      title: "Working under the environmental contractor's health and safety plan",
      description: "On remediation-driven projects, the site plan often isn't yours. Here's how to work inside it.",
      date: "2026-10-25",
      courses: [597, 588],
      body: `On many contaminated-site projects, an environmental consultant or remediation contractor writes the site health and safety plan (HASP) and controls the zones. Your construction crew works inside their system.

## Before mobilization

- Get the HASP and read it, especially hazards, action levels, PPE by task and emergency procedures.
- Confirm every worker has current training: the 40-hour or 24-hour, a refresher within 12 months, supervisor training for foremen, medical clearance and respirator fit tests if needed.
- Ask who has stop-work authority. Usually it's both companies' site leads.

## On site

- Attend the daily tailgate. The plan can change daily as monitoring data comes in.
- Follow the zone boundaries. Construction equipment doesn't cross into the support zone without decon.
- Report changes, such as new odors, staining, drums or buried debris, right away.

## Your responsibilities still apply

Your company still owns its own workers' safety under OSHA's multi-employer citation policy. Following the other company's HASP doesn't replace your own training, PPE program and supervision. That's what [[597]] covers.

## Common friction points

| Issue | Fix |
|---|---|
| Different PPE assumptions | Agree on PPE by task in writing before the job starts |
| Decon slows production | Plan the decon pad and traffic flow into the schedule |
| Unclear stop-work authority | Name it in the pre-job meeting |`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(588)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div class="titleblock"><div><span>PROJECT</span><b>SITEWORK/HAZ</b></div><div><span>BY</span><b>HAZWOPER OSHA Training LLC</b></div><div><span>DELIVERED ON</span><b>hazwoper-osha.com</b></div><div><span>SHEET</span><b>A-9</b></div></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Build on contaminated ground.</h1>
<p class="hero-lede">HAZWOPER for construction crews on brownfields, landfills and impacted excavations. Online, self-paced, with certificates the environmental contractor will accept.</p>
<div class="hero-cta">${h.buy(588, "Enroll · 40 HR Construction")}<a class="btn btn-alt" href="/guides/does-my-construction-crew-need-hazwoper">Does my crew need it?</a></div>
</div>
<div class="plan" aria-hidden="true">
<svg viewBox="0 0 400 300"><g fill="none" stroke="#9cc3ff" stroke-width="1.5"><rect x="20" y="20" width="360" height="260" stroke-dasharray="6 4"/><rect x="40" y="40" width="150" height="120" stroke="#ff8f7a" stroke-width="2"/><rect x="200" y="40" width="80" height="120" stroke="#ffd36b" stroke-width="2"/><rect x="290" y="40" width="70" height="220" stroke="#8ff0b5" stroke-width="2"/><path d="M60 200h110v50H60z"/><path d="M200 240h70"/></g><g font-family="Roboto Mono" font-size="11" fill="#e6f0ff"><text x="48" y="58">EXCLUSION ZONE</text><text x="206" y="58">CRZ / DECON</text><text x="296" y="58">SUPPORT</text><text x="64" y="218">SPOILS ON LINER</text><text x="200" y="232">WASH PAD</text></g></svg>
</div></div></section>

<section class="sec"><div class="wrap">
<p class="tag">SCHEDULE OF COURSES</p>
<div class="schedule">
<div class="srow shead"><span>ID</span><span>COURSE</span><span>LENGTH</span><span>PRICE</span><span></span></div>
${courses.map((c) => `<div class="srow"><span>${c.lmsId ? `#${c.lmsId}` : ""}</span><a href="${c.url}">${esc(c.name)}</a><span>${esc(c.duration)}</span><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div>`).join("")}
</div></div></section>

<section class="sec"><div class="wrap">
<p class="tag">GENERAL NOTES</p>
<ol class="notes">
<li>ALL PERSONNEL IN THE EXCLUSION ZONE SHALL HOLD CURRENT 40 HR (OR 24 HR WHERE ALLOWED) HAZWOPER TRAINING.</li>
<li>FOREMEN DIRECTING WORK SHALL COMPLETE 8 HR SUPERVISOR TRAINING.</li>
<li>REFRESHER TRAINING SHALL BE COMPLETED WITHIN 12 MONTHS OF LAST CERTIFICATE.</li>
<li>SUPERVISED FIELD EXPERIENCE (3 DAYS / 1 DAY) IS PROVIDED BY THE EMPLOYER ON SITE.</li>
</ol></div></section>

<section class="sec"><div class="wrap">
<p class="tag">DETAILS &amp; GUIDES</p>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
