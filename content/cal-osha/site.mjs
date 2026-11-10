// cal-osha.hazwoperosha.us: Cal/OSHA (Title 8, section 5192) HAZWOPER and California hazardous waste. Retro sunset.
export default {
  brand: "Cal HAZWOPER",
  title: "Cal/OSHA HAZWOPER Training Online | 8 CCR 5192 | Cal HAZWOPER",
  description: "California HAZWOPER courses written for Cal/OSHA Title 8 section 5192: 40-hour, 24-hour, 8-hour refresher, TSDF and California RCRA hazardous waste training.",
  theme: "#e84a27",
  fonts: "family=Shrikhand&family=DM+Sans:wght@400;500;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#fff4e0"/><circle cx="16" cy="18" r="11" fill="#e84a27"/><rect y="17" width="32" height="2" fill="#fff4e0"/><rect y="22" width="32" height="2" fill="#fff4e0"/></svg>`,
  coursesTagline: "Cal/OSHA HAZWOPER and California hazardous waste courses, built on Title 8 and Title 22.",
  guidesTagline: "How California's rules differ from federal OSHA and EPA, and what that means for your training.",

  courses: [
    {
      id: 577, short: "Cal/OSHA 40-Hour",
      summary: "The 40-hour initial HAZWOPER for California workers, written to Title 8 section 5192 (2026 edition).",
      body: `California runs its own OSHA program, and its HAZWOPER rule is 8 CCR 5192, not 29 CFR 1910.120. The hours are the same: 40 hours of instruction and three days of supervised field experience for general site workers. This course teaches the Title 8 version, with California's exposure limits and California agencies.`,
      topics: ["8 CCR 5192 scope and how Cal/OSHA enforces it", "Cal/OSHA permissible exposure limits (8 CCR 5155)", "Site characterization and the site safety plan", "PPE levels and respiratory protection under 8 CCR 5144", "Air monitoring and decontamination", "Working with DTSC, CUPAs and local fire agencies"],
      who: "Remediation, emergency response and hazardous waste site workers employed in California.",
    },
    {
      id: 576, short: "Cal/OSHA 24-Hour",
      summary: "The 24-hour initial HAZWOPER for California workers with limited or occasional site exposure.",
      body: `Under 8 CCR 5192(e), workers who are on site only occasionally for a specific task, or who work in areas monitored below the exposure limits without respirators, need 24 hours of instruction and one day of supervised field experience. This is that course, written for California.`,
      topics: ["Who qualifies for 24-hour training under 5192(e)", "Hazard recognition and toxicology basics", "Reading the site safety plan", "PPE basics and when to leave the area", "Site control zones and decon", "Emergency procedures"],
      who: "Surveyors, inspectors, delivery and support staff, and occasional visitors to California hazardous waste sites.",
    },
    {
      id: 578, short: "Cal/OSHA 8-Hour Refresher",
      summary: "The annual 8-hour HAZWOPER refresher, written to Cal/OSHA Title 8.",
      body: `8 CCR 5192(e)(8) requires eight hours of refresher training every year. This refresher reviews the core HAZWOPER topics with California references, so the certificate lines up with what a Cal/OSHA inspector will look for.`,
      topics: ["Title 8 HAZWOPER refresher review", "Updates to Cal/OSHA rules and exposure limits", "Heat illness prevention on hazardous waste sites", "PPE and respirator refresher", "Decon and emergency procedures", "California incident lessons learned"],
      who: "California workers with a Cal/OSHA or federal 40- or 24-hour HAZWOPER certificate.",
    },
    {
      id: 575, short: "Cal/OSHA 24-Hr TSDF",
      summary: "The 24-hour initial training for California treatment, storage and disposal facility workers.",
      body: `Workers at permitted hazardous waste treatment, storage and disposal facilities fall under 8 CCR 5192(p), with 24 hours of initial training. California TSDFs are also permitted by DTSC under Title 22, so this course covers both the Cal/OSHA worker-safety side and the hazardous waste rules that shape daily work.`,
      topics: ["8 CCR 5192(p) requirements for TSD facilities", "DTSC permits and Title 22 operating requirements", "Container and tank management", "Waste receipt, sampling and profiling", "Facility emergency response plan", "PPE, monitoring and decon at a TSDF"],
      who: "Operators and technicians at California hazardous waste TSD facilities.",
    },
    {
      id: 579, short: "Cal/OSHA 8-Hr TSDF Refresher",
      summary: "The annual 8-hour refresher for California TSDF workers.",
      body: `TSD facility workers need eight hours of refresher training each year. This course reviews Cal/OSHA 5192(p) and the Title 22 operating rules, with a focus on what has changed and what goes wrong at TSD facilities.`,
      topics: ["5192(p) refresher review", "Title 22 updates for permitted facilities", "Container, tank and secondary containment review", "Emergency coordinator and contingency plan review", "Incident case studies"],
      who: "California TSD facility workers who completed the 24-hour TSDF course.",
    },
    {
      id: 1051, short: "Cal/OSHA RCRA Waste",
      summary: "California hazardous waste generator training under Title 22, federal RCRA and Title 8.",
      body: `California regulates more waste as hazardous than federal EPA does, and generators answer to DTSC and their local CUPA. This short course covers what generator staff need to handle waste correctly in California: identification, containers, labels, accumulation times and manifests.`,
      topics: ["California-only hazardous wastes and why they exist", "Generator categories and accumulation time limits", "Container labels and inspections", "Satellite accumulation", "Manifests and e-Manifest", "CUPA inspections and common violations"],
      who: "Staff at California businesses that generate hazardous waste: shops, labs, manufacturers, hospitals and warehouses.",
    },
  ],

  guides: [
    {
      slug: "cal-osha-vs-federal-hazwoper", seoTitle: "Cal/OSHA vs federal OSHA HAZWOPER: what's different",
      title: "Cal/OSHA vs federal OSHA HAZWOPER: what's different in California",
      description: "The training hours match, but the rule, the exposure limits and the agencies don't. Here's what changes when you work in California.",
      date: "2026-10-25",
      courses: [577, 578],
      body: `California is a state-plan state. Federal OSHA approved Cal/OSHA to run its own program, and in California the HAZWOPER rule is **Title 8, California Code of Regulations, section 5192**. It mirrors 29 CFR 1910.120 closely, but it isn't identical.

## What's the same

- **Training hours.** 40 hours plus three supervised field days for general site workers, 24 hours plus one day for limited-exposure workers, eight more hours for supervisors and eight hours of refresher every year.
- **Structure.** Site characterization, site safety and health plan, PPE, monitoring, medical surveillance, decon and emergency response all appear in the same order.

## What's different

| Topic | Federal | California |
|---|---|---|
| HAZWOPER rule | 29 CFR 1910.120 | 8 CCR 5192 |
| Exposure limits | 29 CFR 1910.1000 tables | 8 CCR 5155, Table AC-1, often lower |
| Respiratory protection | 29 CFR 1910.134 | 8 CCR 5144 |
| Public employees | Not covered by federal OSHA | Covered by Cal/OSHA |
| Hazardous waste agency | US EPA | DTSC, plus local CUPAs |

## Why the exposure limits matter

Cal/OSHA updates its permissible exposure limits more often than federal OSHA, and many are lower. A site that's "below the PEL" under federal tables can be above it under California's. That changes respirator decisions, monitoring action levels and whether a worker counts as exposed. A California course teaches the limits you'll actually be held to.

## Heat

California has its own outdoor heat illness prevention standard (8 CCR 3395), and heat is a top hazard for anyone in chemical protective clothing. Expect California training and site plans to spend real time on it.

## Do I need a California certificate?

Cal/OSHA cares that your training covered what 5192 requires. A federal certificate isn't automatically invalid in California. But a course written to Title 8 is the easiest record to defend in an inspection, especially for the annual refresher.

{{buy:577}}`,
    },
    {
      slug: "california-hazardous-waste-dtsc-cupa", seoTitle: "California hazardous waste rules: DTSC, CUPAs and more",
      title: "California hazardous waste rules: DTSC, CUPAs and the waste federal EPA doesn't count",
      description: "Why California generators manage more waste as hazardous, who inspects them and what staff need to know.",
      date: "2026-10-25",
      courses: [1051],
      body: `If you've managed hazardous waste in another state, California will feel familiar, with more of it. The state runs its own program under **Title 22, Division 4.5**, authorized by US EPA, and it's broader than federal RCRA.

## Who's in charge

- **DTSC**, the Department of Toxic Substances Control, writes the rules and permits treatment, storage and disposal facilities.
- **CUPAs**, Certified Unified Program Agencies, are usually county environmental health or fire departments. They inspect most generators.

Your inspector is probably from the CUPA, not DTSC or EPA.

## Waste that's hazardous only in California

California has its own tests and lists, so some waste that's non-hazardous federally is hazardous here. These are often called "non-RCRA" or "California-only" hazardous wastes. Common examples:

- **Used oil**, which California regulates as hazardous waste
- Wastes that fail California's own toxicity tests (the TTLC and STLC limits)
- Some wastes that are toxic to aquatic life under California's fish bioassay test

Staff who sort waste need to know these exist. Otherwise a "non-hazardous" drum leaves the site illegally.

## What generator staff must know

Every California generator needs people who can:

1. Identify which of their waste streams are hazardous
2. Use the right containers, keep them closed and label them with the accumulation start date
3. Stay within accumulation time limits for their generator category
4. Run satellite accumulation correctly at the point of generation
5. Sign a manifest and know what they're certifying
6. Respond to a spill using the facility's procedures

## Training records

Large quantity generators need documented, job-specific training for everyone who handles hazardous waste, with annual review. CUPAs commonly ask to see these records. Smaller generators still have to make sure staff know proper handling and emergency procedures. A short course with a certificate is the simplest way to show it.

{{buy:1051}}`,
    },
    {
      slug: "working-in-california-with-out-of-state-hazwoper", seoTitle: "Using an out-of-state HAZWOPER certificate in California",
      title: "Moving to a California job with an out-of-state HAZWOPER certificate",
      description: "Your 40-hour likely still counts. Here's what California employers check, and when a Cal/OSHA course is the smart move.",
      date: "2026-10-25",
      courses: [578, 577, 576],
      body: `Crews follow the work, and plenty of California HAZWOPER jobs go to people trained in Texas, Nevada or Arizona. Do you need to start over? Usually not.

## What Cal/OSHA looks at

Cal/OSHA doesn't keep a list of approved providers or reject certificates from other states. 8 CCR 5192 asks whether the worker's training covered the required topics and hours, and whether the employer can show it. Like the federal rule, it lets an employer accept equivalent prior training if they document it.

So a valid federal 40-hour certificate plus a current refresher is generally a sound starting point.

## Where gaps show up

- **Exposure limits.** Your training taught federal PELs. California's are often lower. Your new site's safety plan will use the California numbers.
- **Heat illness.** California's heat rule is specific about water, shade, rest and acclimatization. Expect a site-specific briefing.
- **Agencies.** Spills and waste go to DTSC, the CUPA, the Regional Water Board and the local fire department, not just "the EPA."

## The simple fix

When your next annual refresher comes up, take [[578]]. It covers the 8-hour annual requirement and fills in the California differences. Your new certificate then references the rule your inspector will cite.

## If your certificate has lapsed

If your refresher is more than 12 months old, you're out of compliance until you finish one. If it's been years, your new employer may ask you to retake the initial course. In that case take [[577]], or [[576]] if your role is limited-exposure.

## Bring your records

Bring your initial certificate, every refresher, any supervisor certificate, your respirator fit test and your medical clearance. Missing paperwork is the most common reason a qualified worker gets sent back to class.`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(577)}
<main>${body}</main>
<footer class="foot"><div class="foot-sun" aria-hidden="true"></div><div class="wrap foot-in">
<div><a class="logo" href="/">Cal HAZWOPER</a><p>Cal/OSHA HAZWOPER and California hazardous waste training from HAZWOPER OSHA Training LLC, delivered on hazwoper-osha.com.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Reach us</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a><a href="/guides/">Guides</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="sun" aria-hidden="true"></div><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Golden State certified.</h1>
<p class="hero-lede">Cal/OSHA HAZWOPER courses written for California's rules, not just the federal ones. Work from LA to the Bay.</p>
<div class="hero-cta">${h.buy(577, "Start the Cal/OSHA 40-Hour")}<a class="btn btn-alt" href="/courses/">All California courses</a></div>
</div>
</div></section>

<div class="ticker" aria-hidden="true"><div>Los Angeles ✺ Bay Area ✺ Central Valley ✺ San Diego ✺ Inland Empire ✺ Sacramento ✺ Kern County ✺ Orange County ✺ Los Angeles ✺ Bay Area ✺ Central Valley ✺ San Diego ✺ Inland Empire ✺ Sacramento ✺</div></div>

<section class="sec"><div class="wrap">
<h2 class="title">Same hours, <span>California rules.</span></h2>
<div class="compare">
<div><h3>Federal OSHA</h3><ul><li>29 CFR 1910.120</li><li>Federal PEL tables</li><li>US EPA for waste</li><li>Private employers only</li></ul></div>
<div class="arrow" aria-hidden="true">→</div>
<div class="ca"><h3>Cal/OSHA</h3><ul><li>8 CCR 5192</li><li>Table AC-1, often lower limits</li><li>DTSC and your local CUPA</li><li>Public employees covered too</li></ul></div>
</div>
<p class="center"><a href="/guides/cal-osha-vs-federal-hazwoper">Read the full comparison →</a></p>
</div></section>

<section class="sec sec-warm"><div class="wrap">
<h2 class="title">California <span>courses</span></h2>
<div class="cgrid">${courses.map((c) => `<article class="ccard"><p class="ccard-tag">${esc(c.duration)}${c.lmsId ? ` · #${c.lmsId}` : ""}</p><h3><a href="${c.url}">${esc(c.name)}</a></h3><p>${esc(c.summary)}</p><div class="ccard-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Field <span>notes</span></h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>

<section class="sec faq"><div class="wrap">
<h2 class="title">Questions</h2>
<details><summary>Is my federal 40-hour valid in California?</summary><p>Generally, yes. The hours match, and Cal/OSHA looks at whether your training covered the 5192 requirements. Taking your next refresher as a Cal/OSHA course fills in the California differences. <a href="/guides/working-in-california-with-out-of-state-hazwoper">More here.</a></p></details>
<details><summary>Do public employees need HAZWOPER in California?</summary><p>Yes. Cal/OSHA covers state and local government workers, so city and county crews who work hazardous waste sites or respond to releases fall under 8 CCR 5192.</p></details>
<details><summary>Does the online course cover the field days?</summary><p>The course covers the classroom hours. The supervised field experience (three days for the 40-hour, one for the 24-hour) is done on the job with your employer.</p></details>
<details><summary>Can I enroll my whole crew?</summary><p>Yes. Set the number of seats in checkout and pay once, or call +1-866-429-6742 for invoicing.</p></details>
</div></section>`;
  },
};
