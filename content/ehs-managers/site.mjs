// ehs-managers.hazwoperosha.us: HAZWOPER program building for EHS managers. Dark SaaS.
export default {
  brand: "EHS Stack",
  title: "HAZWOPER Program Training for EHS Managers | EHS Stack",
  description: "Training for EHS managers who run HAZWOPER and hazardous waste programs: train-the-trainer, supervisor, incident command, contingency planning, RCRA generator and state-plan refresher courses.",
  theme: "#0c0a1a",
  fonts: "family=Manrope:wght@400;500;600;700;800",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#7c3aed"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs><rect width="32" height="32" rx="8" fill="#0c0a1a"/><path d="M16 6l9 10-9 10-9-10z" fill="url(#g)"/></svg>`,
  coursesTagline: "The courses an EHS lead uses to build, staff and run a compliant HAZWOPER program.",
  guidesTagline: "Program checklists, renewal cycles and medical surveillance, for the people who own compliance.",

  courses: [
    {
      id: 1016, short: "Train-the-Trainer",
      summary: "Become a qualified in-house HAZWOPER trainer under 1910.120(e)(5).",
      body: `Bringing HAZWOPER training in-house saves money and makes it site-specific, but trainers must be qualified to teach it. This 24-hour course covers the content and the teaching.`,
      topics: ["Trainer qualifications", "Lesson planning for 40, 24 and 8-hour courses", "Hands-on exercises and field days", "Testing competency", "Certificates and records"],
      who: "EHS managers and safety coordinators who'll train crews.",
    },
    {
      id: 597, short: "Supervisor",
      summary: "The 8-hour HAZWOPER supervisor course under 1910.120(e)(4).",
      body: `Your site leads need eight extra hours on managing hazardous waste operations. So do you, if you direct site work.`,
      topics: ["Safety and health program", "Training program", "PPE program", "Spill containment", "Monitoring"],
      who: "Supervisors, site leads and EHS managers who direct site work.",
    },
    {
      id: 593, short: "Incident Command",
      summary: "Incident command for HAZWOPER emergency response.",
      body: `If your organization responds to releases, someone must be ready to take command. Eight hours on ICS and the incident commander's duties under (q)(3).`,
      topics: ["ICS", "Size-up", "Entry teams", "Safety officer", "Critique"],
      who: "Emergency coordinators and response leaders.",
    },
    {
      id: 412, short: "Contingency Plan",
      summary: "RCRA contingency plans and the emergency coordinator role.",
      body: `For large quantity generators and TSDFs: what the plan must contain, the quick reference guide and the coordinator's duties.`,
      topics: ["Plan contents", "Quick reference guide", "Coordinator duties", "Local arrangements"],
      who: "EHS managers and emergency coordinators.",
    },
    {
      id: 601, short: "RCRA Generator",
      summary: "RCRA generator training for EHS staff and waste handlers.",
      body: `Eight hours on the generator rules your program has to meet and train others on.`,
      topics: ["Waste determination", "Generator categories", "Containers and accumulation", "Inspections and records", "Emergencies"],
      who: "EHS staff and waste handlers.",
    },
    {
      id: 900, short: "State-Plan Refresher",
      summary: "8-hour refresher covering federal and state-plan HAZWOPER rules.",
      body: `For multi-state programs: the annual refresher with state-plan equivalents, so one course works across your locations.`,
      topics: ["Federal refresher content", "State-plan differences", "Core review"],
      who: "Workers across multiple states.",
    },
  ],

  guides: [
    {
      slug: "hazwoper-program-checklist",
      title: "The HAZWOPER program checklist for EHS managers",
      description: "Training is one piece. Here's every element an inspector expects a HAZWOPER program to have.",
      date: "2026-10-25",
      courses: [597, 1016],
      body: `29 CFR 1910.120(b) requires employers with hazardous waste operations to have a **written safety and health program**. Training is a big part, but far from all of it.

## The checklist

- **Organizational structure.** Who's in charge, who's the site safety officer, lines of authority.
- **Comprehensive work plan.** Tasks, objectives, methods and personnel needed.
- **Site-specific safety and health plans** for each site.
- **Training program.** 40/24-hour initial, field experience, supervisor training and annual refreshers.
- **Medical surveillance program** under (f).
- **Standard operating procedures** for safety and health.
- **PPE program** under (g), including respiratory protection under 1910.134.
- **Exposure monitoring** under (h).
- **Site control** under (d).
- **Decontamination** under (k).
- **Emergency response plan** under (l), or (q) if you respond to emergencies.
- **Recordkeeping.** Training certificates, medical records, exposure records.

## The training piece

| Role | Requirement |
|---|---|
| General site workers | 40 hours + 3 days field, 8 hours a year |
| Limited-exposure workers | 24 hours + 1 day field, 8 hours a year |
| Supervisors | Plus 8 hours of supervisor training |
| Trainers | Qualified under (e)(5) |
| Responders | By (q) responder level, annually |

## Make it reviewable

Keep the program in one place, version it and review it at least annually or when operations change. When an inspector asks for "your HAZWOPER program," you should be able to hand it over in minutes.`,
    },
    {
      slug: "tracking-training-renewal-cycles",
      title: "Tracking training renewal cycles across your workforce",
      description: "Every rule has its own clock. A reference table for the cycles EHS teams track most.",
      date: "2026-10-25",
      courses: [900, 601],
      body: `The hardest part of training compliance isn't the training. It's the calendar. Each rule renews on a different cycle.

## Common renewal cycles

| Requirement | Initial | Renewal |
|---|---|---|
| HAZWOPER site workers (1910.120(e)) | 40 or 24 hours before work | 8 hours every 12 months |
| HAZWOPER supervisors | +8 hours before supervising | Within the annual refresher |
| HAZWOPER responders (q) | By level before responding | Annually, or demonstrated competency |
| TSDF workers (p) | 24 hours | 8 hours every 12 months |
| RCRA LQG personnel | Within 6 months of assignment | Annual review |
| DOT hazmat employees | Within 90 days | At least every 3 years |
| Respirator fit test (1910.134) | Before use | Every 12 months |
| PSM operator refresher (1910.119) | Before operating | At least every 3 years |
| Medical surveillance (1910.120(f)) | Before assignment | Usually every 12 months |

## How to track it

1. Build a **training matrix**: people down the side, requirements across the top, due dates in the cells.
2. Flag anything due within **60 days**.
3. Align renewals where you can. For example, put the whole crew's HAZWOPER refresher and respirator fit test in the same month.
4. Keep certificates attached to the matrix, not in a separate drawer.

## Multi-state programs

If you operate in state-plan states, check whether the state has its own HAZWOPER rule. [[900]] covers federal and state-plan equivalents in one refresher.`,
    },
    {
      slug: "hazwoper-medical-surveillance",
      title: "HAZWOPER medical surveillance: who, when and what",
      description: "Paragraph (f) is easy to overlook and expensive to get wrong. The essentials.",
      date: "2026-10-25",
      courses: [597],
      body: `29 CFR 1910.120(f) requires a medical surveillance program for certain HAZWOPER workers. It's separate from training, but auditors look at both together.

## Who's covered

- Employees exposed, or potentially exposed, at or above the PEL (or published exposure levels if there's no PEL) for **30 days or more a year**, without regard to respirator use
- Employees who wear a respirator **30 days or more a year**, or as required by 1910.134
- Employees injured, ill or with symptoms from possible overexposure in an emergency
- Members of **HAZMAT teams**

## When exams happen

- Before assignment
- At least every **12 months**, unless the physician determines a longer interval (up to every 2 years) is appropriate
- At termination or reassignment, if no exam in the past 6 months
- As soon as possible after signs or symptoms of overexposure
- More often if the physician says so

## What you give the physician

A copy of the standard and its appendices, a description of the employee's duties and exposures, exposure levels, PPE used, and information from previous exams.

## What you get back

A written opinion: whether the employee has any condition that would put them at increased risk, any recommended limitations, and the results. The employer keeps medical records under 29 CFR 1910.1020 for the duration of employment plus 30 years.

## Practical tips

Align medical exams with fit tests and refreshers, and keep a single due-date list. Missing a medical clearance can take a trained worker off a site as surely as missing a refresher.`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(1016)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/"><span class="dia" aria-hidden="true"></span>EHS Stack</a><p>HAZWOPER program training for EHS teams from HAZWOPER OSHA Training LLC, delivered on hazwoper-osha.com.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    const modules = [["Train", "Qualify in-house trainers", 1016], ["Lead", "Supervisors and site leads", 597], ["Respond", "Incident command", 593], ["Comply", "RCRA and contingency", 601]];
    return `<section class="hero"><div class="mesh" aria-hidden="true"></div><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Run your whole HAZWOPER program.</h1>
<p class="hero-lede">Trainers, supervisors, generator training and contingency plans. Everything an EHS lead needs to keep the company compliant, in one place.</p>
<div class="hero-cta">${h.buy(1016, "Start with Train-the-Trainer")}<a class="btn btn-alt" href="/guides/hazwoper-program-checklist">Program checklist →</a></div>
</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Courses</h2>
<div class="cgrid">${courses.map((c) => `<article class="cc"><p class="meta">${esc(c.duration)} · #${c.id}</p><h3><a href="${c.url}">${esc(c.short)}</a></h3><p>${esc(c.summary)}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Guides</h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
