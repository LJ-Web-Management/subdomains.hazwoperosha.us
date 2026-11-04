// forty-hour.hazwoperosha.us: the OSHA 40-Hour HAZWOPER and its industry tracks. Industrial look.
export default {
  brand: "40 Hour HAZWOPER",
  title: "OSHA 40-Hour HAZWOPER Training Online | Industry Tracks | 40 Hour HAZWOPER",
  description: "Take the OSHA 40-Hour HAZWOPER online under 29 CFR 1910.120(e). General, construction, remediation, oil & gas, pipeline and fire/hazmat tracks. $249.99, certificate included.",
  theme: "#111111",
  fonts: "family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#111"/><path d="M4 26L16 5l12 21z" fill="#ffcc00"/><text x="16" y="24" font-size="11" font-family="Arial" font-weight="900" text-anchor="middle" fill="#111">40</text></svg>`,
  coursesTagline: "The full 40-hour initial HAZWOPER, plus versions built around the work your crew actually does.",
  guidesTagline: "Straight answers about the 40-hour: who needs it, what it covers and what happens after you pass.",

  courses: [
    {
      id: 587,
      short: "40 Hr · General",
      summary: "The standard OSHA 40-hour initial HAZWOPER for general site workers on uncontrolled hazardous waste sites.",
      body: `This is the course most people mean when they say "HAZWOPER." It covers the 40 hours of off-site instruction that 29 CFR 1910.120(e)(3)(i) requires before a general site worker goes into a hazardous waste operation, and the matching construction rule, 1926.65(e).

It's written for any industry. If your work doesn't fit one of the industry tracks below, or you're not sure yet where you'll be placed, take this one.`,
      topics: ["Hazard recognition: chemical, physical, biological and radiological", "Toxicology basics and exposure limits", "Site characterization and the site safety and health plan", "PPE levels A through D and respirator use", "Air monitoring and direct-reading instruments", "Decontamination and site control zones", "Emergency procedures and spill containment"],
      who: "Laborers, equipment operators, technicians and supervisors on hazardous waste cleanup sites who may be exposed at or above permissible exposure limits.",
    },
    {
      id: 588,
      short: "40 Hr · Construction",
      summary: "The 40-hour initial HAZWOPER told through the lens of construction work on contaminated ground.",
      body: `Construction crews on brownfields, landfill caps and contaminated excavations work under 29 CFR 1926.65. The training hours are the same as the general 40-hour, but the examples are about trenching through impacted soil, running equipment in the exclusion zone and working alongside an environmental contractor.`,
      topics: ["How 1926.65 applies to construction on contaminated sites", "Excavation and trenching in impacted soil", "Heavy equipment decon and site control", "Dust, vapor and heat stress on active job sites", "Working under another employer's site safety plan", "PPE and respirators for earthmoving crews"],
      who: "Construction laborers, operators, foremen and project managers on brownfield, landfill and contaminated-site projects.",
    },
    {
      id: 590,
      short: "40 Hr · Remediation",
      summary: "The 40-hour initial HAZWOPER for remediation crews, from site investigation to closure.",
      body: `Remediation is where HAZWOPER started, and it's still the core of the rule. This track walks through a cleanup from first entry to closure: drilling and sampling, excavating and hauling waste, treatment systems and confirmation sampling.`,
      topics: ["Phases of a remediation project and the hazards in each", "Sampling and drilling safety", "Waste handling, drums and container management", "Treatment systems and their hazards", "Air monitoring for remediation", "Decon of people, tools and equipment"],
      who: "Environmental technicians, field geologists, samplers and remediation laborers.",
    },
    {
      id: 591,
      short: "40 Hr · Oil & Gas Spill",
      summary: "The 40-hour initial HAZWOPER for crews who respond to crude, fuel and produced-water spills.",
      body: `Oil spill response is a hazardous waste operation. This track focuses on what a spill crew sees: benzene and H2S exposure, flammable atmospheres, shoreline and land cleanup and waste you'll be loading out for days.`,
      topics: ["Crude and refined product hazards, including benzene and H2S", "Flammable atmospheres and LEL monitoring", "Booming, skimming and land-based recovery", "Shoreline and soil cleanup", "Heat stress and long-shift fatigue", "Oily waste handling and decon"],
      who: "Oil spill response organization (OSRO) crews, oilfield service workers and pipeline and terminal response teams.",
    },
    {
      id: 592,
      short: "40 Hr · Utility / Pipeline",
      summary: "The 40-hour initial HAZWOPER for utility and pipeline crews who respond to releases on the line.",
      body: `Gas, liquids and power utilities send crews to releases that are someone else's emergency and their job. This track covers responding to line strikes, leaks and contaminated rights-of-way, and working with the fire department when they're already on scene.`,
      topics: ["Natural gas, liquids and other pipeline product hazards", "Line strikes and leak response", "Working under an incident command system", "Contaminated rights-of-way and excavations", "Monitoring for flammable and toxic atmospheres", "PPE and decon for field crews"],
      who: "Gas, pipeline and electric utility field crews, damage-prevention staff and contractors.",
    },
    {
      id: 589,
      short: "40 Hr · Fire / Hazmat",
      summary: "The 40-hour initial HAZWOPER for fire departments and industrial hazmat teams.",
      body: `Most of a hazmat team's work falls under 1910.120(q). But teams that also do post-emergency cleanup, or that support remediation, need the 40-hour too. This track speaks firefighter: incident command, hot/warm/cold zones, entry teams and the step from response into cleanup.`,
      topics: ["Where emergency response ends and cleanup begins", "Incident command and the hazmat branch", "Entry and backup teams, buddy system", "Chemical protective clothing and SCBA", "Detection and monitoring on scene", "Technical and mass decontamination"],
      who: "Firefighters, industrial fire brigades, hazmat technicians and emergency response contractors.",
    },
  ],

  guides: [
    {
      slug: "40-hour-or-24-hour-hazwoper",
      title: "40-hour or 24-hour HAZWOPER: which one does your job need?",
      description: "OSHA ties the hours to your exposure, not your job title. Here's how to tell which initial course applies.",
      date: "2026-10-25",
      courses: [587, 588],
      body: `OSHA's HAZWOPER standard doesn't say "laborers need 40 hours." It ties the training to how much exposure you could have. That's why two people on the same site can need different courses.

## The rule in one table

| Who | Initial training | Field experience | Rule |
|---|---|---|---|
| General site workers who may be exposed at or above the PEL | 40 hours | 3 days, supervised | 1910.120(e)(3)(i) |
| Workers on site only occasionally for a limited task | 24 hours | 1 day, supervised | 1910.120(e)(3)(ii) |
| Workers regularly on site in areas monitored below the PEL, no respirator needed | 24 hours | 1 day, supervised | 1910.120(e)(3)(iii) |
| Supervisors and managers of site work | 40 or 24 hours, plus 8 hours of supervisor training | Same as their crew | 1910.120(e)(4) |

## Ask three questions

1. **Could I be exposed at or above a permissible exposure limit?** If yes, or if nobody knows yet, it's the 40-hour.
2. **Will I need a respirator?** Respirator use almost always means 40 hours.
3. **Am I there every day, or once in a while for one task?** A surveyor who walks the site twice is the textbook 24-hour worker. The excavator operator in the hot zone all week isn't.

> When the site isn't characterized yet, assume the 40-hour. Exposure is unknown, and OSHA expects you to plan for the worst until monitoring says otherwise.

## Moving up from 24 to 40

If you took the 24-hour and your job changes, you don't start over. Under 1910.120(e)(3)(iv), a 24-hour worker who becomes a general site worker needs **16 more hours** of training and two more days of field experience. Many employers simply enroll the worker in the full 40-hour, which also gives a clean single certificate.

## After either one

Both courses lead to the same annual 8-hour refresher. The clock starts on the date of your initial certificate.

## Which 40-hour?

Every 40-hour track on this site meets the same 40 hours of instruction. The difference is the examples. Pick the one that sounds like your workday: [[588]], [[590]], [[591]], [[592]] or [[589]]. If none fits, [[587]] covers everything.

{{buy:587}}`,
    },
    {
      slug: "hazwoper-field-experience-three-days", seoTitle: "HAZWOPER's three days of field experience, explained",
      title: "The three days of field experience: what online training can't do for you",
      description: "The 40-hour has two parts. The course covers the classroom part. Here's how employers handle the supervised days on site.",
      date: "2026-10-25",
      courses: [587, 590],
      body: `Every honest 40-hour HAZWOPER provider should tell you this up front: the 40 hours of instruction are only half of the requirement. 29 CFR 1910.120(e)(3)(i) also requires **a minimum of three days of actual field experience under the direct supervision of a trained, experienced supervisor.**

An online course covers the 40 hours. Your employer provides the three days.

## What counts as field experience

OSHA doesn't publish a checklist, but the intent is clear. The new worker should do the real tasks of the site while someone qualified watches, corrects and signs off. Typical days include:

- Suiting up and doffing in the PPE level the site actually uses, including a respirator fit check
- Working the decon line, both as the person being decontaminated and as a decon tech
- Reading and using the site's air monitoring instruments
- Walking the site control zones and the emergency routes
- Doing normal tasks such as sampling, excavation support or drum handling with a supervisor alongside

## Who can supervise

A trained, experienced supervisor. In practice that means someone with their own 40-hour, the 8-hour supervisor course and real time on hazardous waste sites. That's often the site safety officer or a foreman.

## Writing it down

Keep a simple record for each worker: dates, site, tasks performed and the supervisor's signature. Put it with the course certificate. Together they make up the worker's initial HAZWOPER qualification under 1910.120(e)(6).

> Tip for contractors: build the field days into the first project a new hire works on. It's cheaper than a separate training event, and the experience is real.

## Can the field days be skipped?

Only through the equivalent-training route in 1910.120(e)(9). An employer can count documented prior experience and training as equivalent, but must be able to show it. A worker coming from another HAZWOPER site with records in hand is the usual case. "He's been around this stuff for years" without paperwork is not.

{{buy:587}}`,
    },
    {
      slug: "choosing-a-40-hour-industry-track", seoTitle: "Picking your 40-hour HAZWOPER industry track",
      title: "Construction, remediation, oil & gas, pipeline or hazmat: picking your 40-hour track",
      description: "All six 40-hour courses meet the same OSHA requirement. The track decides which examples, hazards and scenarios you'll study.",
      date: "2026-10-25",
      courses: [588, 590, 591, 592, 589],
      body: `Every 40-hour course on this site meets the same OSHA requirement and prints the same kind of certificate. So why have six?

Because people remember training that looks like their job. A pipeline crew learns more from a line-strike scenario than from a drum-handling one, even when the underlying lesson about flammable atmospheres is identical.

## Quick picker

| If your crew mostly... | Take |
|---|---|
| Digs, grades or builds on contaminated ground | [[588]] |
| Samples, drills, excavates and hauls during a cleanup | [[590]] |
| Responds to crude, fuel or produced-water releases | [[591]] |
| Repairs gas, liquids or power lines when something leaks | [[592]] |
| Runs a fire or industrial hazmat team | [[589]] |
| Does a mix, or doesn't know yet | [[587]] |

## What's the same in every track

- Hazard recognition and toxicology
- The site safety and health plan
- PPE levels and respirators
- Air monitoring
- Decontamination
- Site control and emergency procedures

## What changes

The scenarios, the photos and the walk-throughs. A construction track spends more time on trenching through impacted soil. The oil & gas track spends more on benzene, H2S and LEL readings. The fire/hazmat track spends more on incident command and the hand-off from emergency response to cleanup.

## Mixed crews

If a contractor sends people to many kinds of jobs, the general [[587]] is the safest single choice. Use the industry tracks when a crew is dedicated to one kind of work.

## Will another employer accept it?

Yes. The certificate states the 40 hours under 1910.120(e). The industry name tells the next employer what you trained on, which usually helps.`,
    },
  ],

  shell({ body, h }) {
    return `<div class="tape" aria-hidden="true"></div>
${h.header(587)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">40HOUR<b>HAZWOPER</b></a><p>Online OSHA 40-Hour HAZWOPER training from HAZWOPER OSHA Training LLC. Courses are delivered through the hazwoper-osha.com learning platform.</p></div>
<div><h2>Tracks</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Help</h2><a href="/guides/">Guides</a><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div><div class="tape tape-thin" aria-hidden="true"></div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="wrap hero-in">
<div class="hero-copy">
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Built for<br>the <span>hot zone.</span></h1>
<p class="hero-lede">The full OSHA 40-Hour HAZWOPER, plus tracks for construction, remediation, oil &amp; gas, pipeline and fire/hazmat crews. 100% online. Certificate the day you finish.</p>
<div class="hero-cta">${h.buy(587, "Enroll · $249.99")}<a class="btn btn-alt" href="/courses/">Compare tracks</a></div>
</div>
</div></section>

<section class="stats"><div class="wrap stats-in">
<div><b>40</b><span>hours of instruction, self-paced</span></div>
<div><b>3</b><span>days of supervised field work, done with your employer</span></div>
<div><b>8</b><span>hour refresher due every 12 months</span></div>
<div><b>6</b><span>industry tracks, one OSHA standard</span></div>
</div></section>

<section class="tracks"><div class="wrap">
<h2 class="section-title">Pick your <span>track</span></h2>
<div class="track-grid">
${courses.map((c, i) => `<article class="track"><span class="track-no">0${i + 1}</span><h3><a href="${c.url}">${esc(c.name)}</a></h3><p>${esc(c.summary)}</p><div class="track-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}
</div></div></section>

<section class="how"><div class="wrap how-in">
<h2 class="section-title">How it <span>works</span></h2>
<ol>
<li><b>Enroll</b> Pay by card. Your login arrives by email within minutes.</li>
<li><b>Train</b> Work through the modules at your own pace, on any device. Progress saves as you go.</li>
<li><b>Pass</b> Finish the module quizzes and the final exam.</li>
<li><b>Print</b> Download your certificate and wallet card the same day.</li>
</ol></div></section>

<section class="guides-strip"><div class="wrap">
<h2 class="section-title">Know before <span>you go</span></h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>

<section class="faq" id="faq"><div class="wrap">
<h2 class="section-title">F<span>A</span>Q</h2>
<details><summary>Is the online 40-hour accepted by OSHA?</summary><p>The course covers the 40 hours of off-site instruction required by 29 CFR 1910.120(e)(3)(i) and 1926.65(e). OSHA also requires three days of supervised field experience, which your employer provides on site. <a href="/guides/hazwoper-field-experience-three-days">Here's how that works.</a></p></details>
<details><summary>How long do I have to finish?</summary><p>The course is self-paced. Most people finish within one to two weeks working a few hours a day. OSHA caps nothing, but your employer may set a deadline.</p></details>
<details><summary>Which track should I pick?</summary><p>All six meet the same requirement. Pick the one that sounds like your workday, or the general course if you're unsure. <a href="/guides/choosing-a-40-hour-industry-track">See the track picker.</a></p></details>
<details><summary>Can I buy seats for my crew?</summary><p>Yes. Choose any course, set the number of seats in checkout and pay once. For invoices or purchase orders call +1-866-429-6742.</p></details>
<details><summary>What comes after the 40-hour?</summary><p>An 8-hour refresher every 12 months. If you'll lead a crew, add the 8-hour HAZWOPER supervisor course.</p></details>
</div></section>

<section class="final"><div class="wrap final-in"><h2>Get cleared for the site.</h2>${h.buy(587, "Start the 40-hour · $249.99")}</div></section>`;
  },
};
