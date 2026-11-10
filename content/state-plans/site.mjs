// state-plans.hazwoperosha.us: HAZWOPER in OSHA state-plan states. WPA national park poster.
export default {
  brand: "State Plan HAZWOPER",
  title: "HAZWOPER Training for OSHA State-Plan States | State Plan HAZWOPER",
  description: "HAZWOPER training for workers in OSHA state-plan states: federal 8-hour refresher and Cal/OSHA 40-hour, 24-hour and refresher courses, with guides to state rules.",
  theme: "#b5452a",
  fonts: "family=Alfa+Slab+One&family=Libre+Franklin:wght@400;500;600;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#e9dcc0"/><rect y="20" width="32" height="12" fill="#3e5641"/><path d="M0 22l9-10 7 7 6-5 10 8z" fill="#7a8b5a"/><circle cx="22" cy="9" r="4" fill="#d2693c"/></svg>`,
  coursesTagline: "HAZWOPER courses for workers in the states that run their own OSHA programs.",
  guidesTagline: "Which states run their own plans, which wrote their own HAZWOPER rules and who's covered.",

  courses: [
    {
      id: 595, short: "Federal 8-Hr Refresher",
      summary: "The standard federal OSHA 8-hour refresher.",
      body: `For workers in federal OSHA states, or in state-plan states that adopt 1910.120 as written.`,
      topics: ["Hazard review", "PPE and respirators", "Monitoring and decon", "Case studies"],
      who: "HAZWOPER workers needing their annual refresher.",
    },
    {
      id: 577, short: "Cal/OSHA 40-Hour",
      summary: "The 40-hour initial HAZWOPER written to California's 8 CCR 5192.",
      body: `California has the most distinct state HAZWOPER rule. This 40-hour course teaches Title 8 with California exposure limits and agencies.`,
      topics: ["8 CCR 5192", "Cal/OSHA exposure limits", "Site safety plan", "PPE and decon", "California agencies"],
      who: "California hazardous waste site workers.",
    },
    {
      id: 576, short: "Cal/OSHA 24-Hour",
      summary: "The 24-hour HAZWOPER for California workers with limited exposure.",
      body: `California's 24-hour course for occasional and low-exposure site workers.`,
      topics: ["Who qualifies", "Hazard recognition", "PPE basics", "Emergency procedures"],
      who: "California occasional site workers.",
    },
    {
      id: 578, short: "Cal/OSHA 8-Hr Refresher",
      summary: "The annual refresher written to Cal/OSHA Title 8.",
      body: `California's annual 8-hour refresher.`,
      topics: ["Title 8 review", "Exposure limit updates", "Heat illness", "Case studies"],
      who: "California HAZWOPER workers.",
    },
  ],

  guides: [
    {
      slug: "which-states-have-osha-state-plans",
      title: "Which states run their own OSHA plans?",
      description: "About half the country is covered by a state-run OSHA program. A quick reference.",
      date: "2026-10-25",
      courses: [],
      body: `Section 18 of the OSH Act lets states run their own workplace safety programs, called **state plans**, if they're at least as effective as federal OSHA. Federal OSHA approves and monitors them.

## Plans covering private and public employers

These states and territories run plans covering most private employers and state and local government workers:

Alaska, Arizona, California, Hawaii, Indiana, Iowa, Kentucky, Maryland, Michigan, Minnesota, Nevada, New Mexico, North Carolina, Oregon, Puerto Rico, South Carolina, Tennessee, Utah, Vermont, Virginia, Washington and Wyoming.

## Plans covering public employees only

Several states and territories, including Connecticut, Illinois, Maine, New Jersey and New York, run plans that cover only state and local government workers. Private employers there are under federal OSHA.

> State plans change over time. Check OSHA's state plan page (osha.gov/stateplans) for the current list before you rely on it.

## What it means for HAZWOPER

- In most state-plan states, the state adopts 29 CFR 1910.120 word for word or by reference. Your federal training works as-is.
- A few states write their own version. California, Washington and Michigan are the best-known examples.
- In every state-plan state, **public employees** doing HAZWOPER work are covered by the state rule.

## Choosing a refresher

| Your situation | Course |
|---|---|
| Federal OSHA state, or a state plan that adopts 1910.120 | [[595]] |
| State with its own HAZWOPER rule, or crews in several states | [[595]], plus a briefing on the state rule |
| California | [[578]] |`,
    },
    {
      slug: "states-with-their-own-hazwoper-rules",
      title: "States that wrote their own HAZWOPER rules",
      description: "California, Washington and Michigan each publish their own version. What's the same and what to watch for.",
      date: "2026-10-25",
      courses: [577],
      body: `Most state plans adopt federal HAZWOPER as written. A few rewrote it into their own codes.

## California: Title 8, section 5192

The best-known example. Same training hours as the federal rule, but enforced by Cal/OSHA with California's own exposure limits (often lower), respiratory protection rule and heat illness standard. Hazardous waste itself is regulated by DTSC under Title 22.

## Washington: WAC 296-843

Washington's Department of Labor and Industries (L&I) publishes its HAZWOPER rule in its own chapter, with its own numbering. Training hours match the federal rule.

## Michigan: MIOSHA Part 432

Michigan's "Hazardous Waste Operations and Emergency Response" standard, enforced by MIOSHA.

## What stays the same

In every case, the core structure is the federal one:

- 40 hours plus 3 days of field experience for general site workers
- 24 hours plus 1 day for limited-exposure workers
- 8 hours of supervisor training
- 8 hours of refresher training every year
- Emergency response training by responder level

## What changes

- **Citations.** Inspectors cite the state rule.
- **Exposure limits.** Some states set their own.
- **Related rules.** Respiratory protection, heat and confined spaces can differ.
- **Agencies.** Spill reporting and waste rules involve state agencies.

## Training approach

Federal-based training covers the core. A refresher that references your state's rule makes your records easier to defend. See [[595]], or for California [[577]] and [[578]].`,
    },
    {
      slug: "public-employees-and-hazwoper",
      title: "Public employees and HAZWOPER",
      description: "City crews, county hazmat teams and state road workers: who covers them depends on where they work.",
      date: "2026-10-25",
      courses: [595],
      body: `Federal OSHA doesn't cover state and local government employees. That doesn't mean public workers go without HAZWOPER protection.

## In state-plan states

State plans must cover state and local government workers. A county road crew cleaning up a spill or a municipal hazmat team is covered by the state's HAZWOPER rule, just like a private contractor.

## In federal OSHA states

EPA's **Worker Protection rule, 40 CFR Part 311**, applies the HAZWOPER standard to state and local government employees who do hazardous waste operations or emergency response in states without a state plan covering them.

## Who this usually includes

- Fire departments and hazmat teams
- Public works and road crews who respond to spills
- Water and wastewater utility staff
- Municipal landfill and transfer station workers
- Police officers who may be first on scene (typically awareness level)

## Volunteers

Coverage of volunteers, such as volunteer firefighters, depends on the state and how the volunteer relationship is set up. Check with your state plan or EPA region.

## Training

Public employees need the same training as private workers in the same roles: responder-level training under (q) for emergency response, and 40/24-hour training for cleanup work, with annual refreshers.`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(900)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">State Plan HAZWOPER</a><p>HAZWOPER training for state-plan states from HAZWOPER OSHA Training LLC, delivered on hazwoper-osha.com.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Every state. Every rule.</h1>
<p class="hero-lede">About half the country runs its own OSHA program. Train to the rule your state enforces.</p>
<div class="hero-cta">${h.buy(595, "8-hour refresher · $59.99")}<a class="btn btn-alt" href="/guides/which-states-have-osha-state-plans">Is my state one?</a></div>
</div>
<div class="poster" aria-hidden="true"><div class="sun"></div><div class="m1"></div><div class="m2"></div><div class="fl"></div><span>SAFE WORK<br>IN EVERY STATE</span></div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Courses</h2>
<div class="cgrid">${courses.map((c) => `<article class="cc"><p class="meta">${esc(c.duration)} · No. ${c.id}</p><h3><a href="${c.url}">${esc(c.short)}</a></h3><p>${esc(c.summary)}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec sec-green"><div class="wrap">
<h2 class="title">States with their own HAZWOPER rule</h2>
<div class="states"><div><b>California</b><span>8 CCR 5192</span></div><div><b>Washington</b><span>WAC 296-843</span></div><div><b>Michigan</b><span>MIOSHA Part 432</span></div></div>
<p class="center"><a href="/guides/states-with-their-own-hazwoper-rules">What's different in each →</a></p>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Guides</h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
