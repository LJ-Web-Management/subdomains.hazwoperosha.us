// supervisor.hazwoperosha.us: HAZWOPER supervisor, incident command and train-the-trainer. Editorial magazine.
export default {
  brand: "The Site Supervisor",
  title: "HAZWOPER Supervisor Training Online | Incident Command & Train-the-Trainer | The Site Supervisor",
  description: "HAZWOPER leadership training: 8-hour supervisor course under 29 CFR 1910.120(e)(4), supervisor refresher, (q) incident command and HAZWOPER train-the-trainer certification.",
  theme: "#141414",
  fonts: "family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Inter:wght@500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#fbf8f1"/><text x="16" y="25" font-size="24" font-family="Georgia" font-style="italic" font-weight="700" text-anchor="middle" fill="#141414">S</text><rect x="6" y="28" width="20" height="2" fill="#a07c2c"/></svg>`,
  bodyClass: "ed",
  coursesTagline: "Four courses for the people who run the site, command the response and train the crew.",
  guidesTagline: "Essays and how-tos on leading hazardous waste work.",

  courses: [
    {
      id: 597, short: "Supervisor Training",
      summary: "The 8 additional hours of specialized training that HAZWOPER supervisors need under 1910.120(e)(4).",
      body: `On-site managers and supervisors who direct hazardous waste operations need the same initial training as their crew, plus at least eight more hours of specialized training. This is those eight hours. It covers the programs a supervisor is responsible for and how to run them on a real site.`,
      topics: ["The employer's safety and health program", "Running the training program for your crew", "The PPE program and respirator decisions", "The spill containment program", "Health hazard monitoring: procedures and techniques", "Site control, briefings and enforcement"],
      who: "Foremen, site supervisors, project managers and site safety officers who already hold a 40- or 24-hour certificate.",
    },
    {
      id: 593, short: "(q) Incident Command",
      summary: "Incident command training for HAZWOPER emergency response under 29 CFR 1910.120(q).",
      body: `When an emergency response begins, the senior emergency response official on scene becomes the incident commander under 1910.120(q)(3). This eight-hour course prepares that person to set up an incident command system, size up the hazards and direct responders safely.`,
      topics: ["Incident command system structure", "The incident commander's duties under (q)(3)", "Size-up and hazard assessment", "Choosing PPE and entry teams", "The safety officer's authority", "Decon, termination and critique"],
      who: "On-scene incident commanders, shift supervisors, hazmat team leaders and plant emergency coordinators.",
    },
    {
      id: 596, short: "Supervisor Refresher",
      summary: "The annual 8-hour refresher for HAZWOPER supervisors.",
      body: `Supervisors need eight hours of refresher training a year, the same as their crews. This version keeps the supervisor's perspective: the programs, the paperwork and the judgment calls.`,
      topics: ["Refresher review of HAZWOPER core topics", "Site safety and health plan upkeep", "Briefings and tailgate meetings", "Monitoring results and action levels", "Medical surveillance and recordkeeping", "Case studies in site leadership"],
      who: "Supervisors who completed the 8-hour HAZWOPER supervisor course.",
    },
    {
      id: 1016, short: "Train-the-Trainer",
      summary: "Become a qualified in-house HAZWOPER trainer for your organization.",
      body: `29 CFR 1910.120(e)(5) requires that HAZWOPER trainers be qualified to teach the subject, through a training program or academic credentials plus instructional experience. This 24-hour course covers both the HAZWOPER content and how to teach it to adults on a work site.`,
      topics: ["Trainer qualifications under (e)(5)", "How adults learn on the job", "Building lesson plans for the 40, 24 and 8-hour courses", "Running hands-on and field exercises", "Testing and demonstrating competency", "Certificates and training records"],
      who: "EHS managers, safety coordinators and experienced site supervisors who'll train their own crews.",
    },
  ],

  guides: [
    {
      slug: "hazwoper-supervisor-eight-hours",
      title: "The supervisor's eight hours: what 1910.120(e)(4) adds",
      description: "Why a foreman with a 40-hour card still isn't trained to supervise, and what the extra hours are for.",
      date: "2026-10-25",
      courses: [597, 596],
      body: `Every site has someone who knows the work better than anyone and has been promoted for it. The day they start directing the crew, OSHA's expectations change.

## What the rule says

29 CFR 1910.120(e)(4) is one sentence: on-site management and supervisors directly responsible for, or who supervise, employees in hazardous waste operations must receive the same initial training as those employees, plus **at least eight additional hours of specialized training** on managing such operations.

The rule names what the specialized training covers:

- the employer's safety and health program and the associated employee training program
- the personal protective equipment program
- the spill containment program
- health hazard monitoring procedures and techniques

## The shift in responsibility

A worker follows the site safety and health plan. A supervisor makes sure it's followed. That means:

- Holding the pre-entry briefing before work starts
- Deciding whether today's air monitoring results change the PPE level
- Stopping work when conditions change
- Making sure every person in the exclusion zone is trained, fit-tested and medically cleared
- Keeping the records that prove all of that

> The supervisor is often the first person an OSHA inspector talks to. "I didn't know" is not an answer that works from that seat.

## Who counts as a supervisor?

Look at what the person does, not their title. A lead hand who assigns tasks in the exclusion zone is supervising. A project manager who sets the schedule from the office, but never directs the field crew, may not be. When in doubt, train them. Eight hours is cheap insurance.

## Keeping it current

Supervisors need eight hours of refresher training each year like everyone else. [[596]] keeps the supervisor's perspective in that refresher, so the leadership part of their training stays current too.

{{buy:597}}`,
    },
    {
      slug: "site-safety-and-health-plan", seoTitle: "Writing a site safety and health plan crews will use",
      title: "Writing a site safety and health plan your crew will actually use",
      description: "OSHA lists what the plan must contain. Making it useful in the field is the supervisor's job.",
      date: "2026-10-25",
      courses: [597],
      body: `Every hazardous waste site needs a site-specific safety and health plan. 29 CFR 1910.120(b)(4) lists what it must address. Most plans cover all of it, and most are still too long for anyone to read on the tailgate.

## What the plan must address

1. A safety and health risk or hazard analysis for each site task and operation
2. Employee training assignments
3. Personal protective equipment for each task
4. Medical surveillance requirements
5. Frequency and types of air monitoring, personnel monitoring and sampling, and the instruments used
6. Site control measures
7. Decontamination procedures
8. An emergency response plan
9. Confined space entry procedures
10. A spill containment program

The plan must also provide for **pre-entry briefings** before site activities begin, and as often as needed to keep workers safe.

## Making it usable

**Lead with a one-page summary.** Put the site map with zones, the PPE level by task, action levels, the emergency signal, the muster point and phone numbers on one page. Laminate it.

**Write action levels as decisions.** "If the PID reads above 5 ppm in the breathing zone for 5 minutes, upgrade to Level C" beats a table of exposure limits.

**Match tasks to reality.** If the crew is drilling this week and excavating next week, the hazard analysis should say so.

**Update it.** The plan is a living document. New contaminant found, new task added or PPE changed: update the plan and brief the crew.

## The tailgate test

At the morning briefing, ask a crew member three questions: What's our PPE level for this task? What's the reading that makes us stop? Where do we go if the horn sounds? If they can answer, the plan is working.`,
    },
    {
      slug: "becoming-an-in-house-hazwoper-trainer",
      title: "Becoming an in-house HAZWOPER trainer",
      description: "What OSHA requires of trainers, when bringing training in-house pays off, and what records you'll need.",
      date: "2026-10-25",
      courses: [1016, 597],
      body: `Many organizations reach a point where sending every new hire to an outside 40-hour course costs more than it should, and where the training doesn't reflect their own sites. That's when they consider an in-house trainer.

## What OSHA requires

29 CFR 1910.120(e)(5) says trainers must be qualified to instruct employees about the subject matter. They show it in one of two ways:

- completing a training program for teaching the subjects they'll teach, or
- having the academic credentials and instructional experience necessary to teach them.

They must also be competent in the subject, which in practice means HAZWOPER field experience.

## When in-house training pays off

| In-house is a good fit when... | Outside training is better when... |
|---|---|
| You train more than a handful of new HAZWOPER workers a year | You hire one or two people a year |
| Your sites have specific hazards worth teaching | Your work is general and varied |
| You need to run the field days and refreshers anyway | No one on staff has time to teach |
| You have an experienced supervisor who teaches well | Your best field person dislikes teaching |

## What changes for you

**You own the content.** Lesson plans, exams and exercises must cover the topics in 1910.120(e). Review them when the rule, your sites or your equipment change.

**You certify.** Under (e)(6), workers who complete training get a written certificate. As trainer, you're vouching for their competency.

**You keep the records.** Keep rosters, lesson plans, exam results, field-experience sign-offs and certificates. If OSHA asks how a worker was trained, the answer is in your files.

## A blended model

Many employers mix approaches. New hires take the online 40-hour for the classroom hours, and the in-house trainer runs the field days, the site-specific modules and the annual refresher. It's often the best of both.

{{buy:1016}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(597)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><p class="foot-logo">The Site Supervisor</p><p>Leadership training for hazardous waste operations, published by HAZWOPER OSHA Training LLC. Courses delivered on hazwoper-osha.com.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Correspondence</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    const roman = ["I", "II", "III", "IV", "V"];
    return `<section class="lead"><div class="wrap lead-in">
<div class="lead-main">
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>The crew looks to <em>you.</em></h1>
<p class="dropcap">Supervisors on a hazardous waste site need eight more hours on top of their 40. That's where you learn to run the site safety plan, the decon line and the people. It's the difference between knowing the work and being responsible for it.</p>
<div class="lead-cta">${h.buy(597, "Enroll in the supervisor course · $179.99")}<a class="textlink" href="/guides/hazwoper-supervisor-eight-hours">Read the cover story →</a></div>
</div>
<aside class="contents"><h2>In this issue</h2>
<ol>${guides.map((g, i) => `<li><span>${roman[i]}.</span><a href="${g.url}"><b>${esc(g.title)}</b><small>${g.minutes} min read</small></a></li>`).join("")}</ol>
</aside></div></section>

<section class="quote"><div class="wrap"><blockquote>“A worker follows the site safety plan. <em>A supervisor makes sure it's followed.</em>”</blockquote></div></section>

<section class="features"><div class="wrap">
<h2 class="sec-title"><span>The Curriculum</span></h2>
<div class="feat-grid">${courses.map((c, i) => `<article class="feat"><p class="feat-no">${roman[i]}</p><h3><a href="${c.url}">${esc(c.name)}</a></h3><p>${esc(c.summary)}</p><p class="feat-meta">${esc(c.duration)} · Course #${c.id}</p><div class="feat-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="ladder"><div class="wrap">
<h2 class="sec-title"><span>The Leadership Ladder</span></h2>
<ol class="steps">
<li><b>40-Hour HAZWOPER</b><span>The foundation. Required for everyone you supervise, and for you.</span></li>
<li><b>Supervisor, 8 hours</b><span>Programs, monitoring, PPE decisions and site control.</span></li>
<li><b>Incident Command</b><span>Taking charge when a release becomes an emergency.</span></li>
<li><b>Train-the-Trainer</b><span>Teaching the next crew yourself.</span></li>
</ol></div></section>`;
  },
};
