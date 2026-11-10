// forty-hour.hazwoperosha.us: the OSHA 40-Hour HAZWOPER. Industrial look.
export default {
  brand: "40 Hour HAZWOPER",
  title: "OSHA 40-Hour HAZWOPER Training Online | 40 Hour HAZWOPER",
  description: "Take the OSHA 40-Hour HAZWOPER online under 29 CFR 1910.120(e). Self-paced, written for every industry. $249.99, certificate included.",
  theme: "#111111",
  fonts: "family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#111"/><path d="M4 26L16 5l12 21z" fill="#ffcc00"/><text x="16" y="24" font-size="11" font-family="Arial" font-weight="900" text-anchor="middle" fill="#111">40</text></svg>`,
  coursesTagline: "The full 40-hour initial HAZWOPER, written for every industry.",
  guidesTagline: "Straight answers about the 40-hour: who needs it, what it covers and what happens after you pass.",

  courses: [
    {
      id: 587,
      short: "40 Hr · General",
      summary: "The standard OSHA 40-hour initial HAZWOPER for general site workers on uncontrolled hazardous waste sites.",
      body: `This is the course most people mean when they say "HAZWOPER." It covers the 40 hours of off-site instruction that 29 CFR 1910.120(e)(3)(i) requires before a general site worker goes into a hazardous waste operation, and the matching construction rule, 1926.65(e).

It's written for any industry, so it fits construction, remediation, oil and gas, pipeline and hazmat crews alike, and it's the right choice if you're not sure yet where you'll be placed.`,
      topics: ["Hazard recognition: chemical, physical, biological and radiological", "Toxicology basics and exposure limits", "Site characterization and the site safety and health plan", "PPE levels A through D and respirator use", "Air monitoring and direct-reading instruments", "Decontamination and site control zones", "Emergency procedures and spill containment"],
      who: "Laborers, equipment operators, technicians and supervisors on hazardous waste cleanup sites who may be exposed at or above permissible exposure limits.",
    },
  ],

  guides: [
    {
      slug: "40-hour-or-24-hour-hazwoper",
      title: "40-hour or 24-hour HAZWOPER: which one does your job need?",
      description: "OSHA ties the hours to your exposure, not your job title. Here's how to tell which initial course applies.",
      date: "2026-10-25",
      courses: [587],
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

There's one: [[587]] covers the 40 hours of instruction for every industry.

{{buy:587}}`,
    },
    {
      slug: "hazwoper-field-experience-three-days", seoTitle: "HAZWOPER's three days of field experience, explained",
      title: "The three days of field experience: what online training can't do for you",
      description: "The 40-hour has two parts. The course covers the classroom part. Here's how employers handle the supervised days on site.",
      date: "2026-10-25",
      courses: [587],
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
  ],

  shell({ body, h }) {
    return `<div class="tape" aria-hidden="true"></div>
${h.header(587)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">40HOUR<b>HAZWOPER</b></a><p>Online OSHA 40-Hour HAZWOPER training from HAZWOPER OSHA Training LLC. Courses are delivered through the hazwoper-osha.com learning platform.</p></div>
<div><h2>Course</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Help</h2><a href="/guides/">Guides</a><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div><div class="tape tape-thin" aria-hidden="true"></div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="wrap hero-in">
<div class="hero-copy">
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Built for<br>the <span>hot zone.</span></h1>
<p class="hero-lede">The full OSHA 40-Hour HAZWOPER for site workers in construction, remediation, oil &amp; gas, pipeline and hazmat work. 100% online. Certificate the day you finish.</p>
<div class="hero-cta">${h.buy(587, "Enroll · $249.99")}<a class="btn btn-alt" href="/courses/">Course details</a></div>
</div>
</div></section>

<section class="stats"><div class="wrap stats-in">
<div><b>40</b><span>hours of instruction, self-paced</span></div>
<div><b>3</b><span>days of supervised field work, done with your employer</span></div>
<div><b>8</b><span>hour refresher due every 12 months</span></div>
<div><b>24/7</b><span>access on any device</span></div>
</div></section>

<section class="tracks"><div class="wrap">
<h2 class="section-title">The <span>course</span></h2>
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
<details><summary>Can I buy seats for my crew?</summary><p>Yes. Choose any course, set the number of seats in checkout and pay once. For invoices or purchase orders call +1-866-429-6742.</p></details>
<details><summary>What comes after the 40-hour?</summary><p>An 8-hour refresher every 12 months. If you'll lead a crew, add the 8-hour HAZWOPER supervisor course.</p></details>
</div></section>

<section class="final"><div class="wrap final-in"><h2>Get cleared for the site.</h2>${h.buy(587, "Start the 40-hour · $249.99")}</div></section>`;
  },
};
