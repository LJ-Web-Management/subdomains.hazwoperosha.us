// 24-hour.hazwoperosha.us: the 24-hour HAZWOPER for occasional and low-exposure workers. Bauhaus.
export default {
  brand: "24·Hour·HAZWOPER",
  title: "OSHA 24-Hour HAZWOPER Training Online | Occasional Site Workers | 24·Hour·HAZWOPER",
  description: "The OSHA 24-hour HAZWOPER online for occasional site workers and workers below exposure limits under 29 CFR 1910.120(e)(3)(ii)-(iii). $169.99, certificate included.",
  theme: "#e63b2e",
  fonts: "family=Josefin+Sans:wght@400;600;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#f2ece0"/><circle cx="11" cy="11" r="8" fill="#e63b2e"/><rect x="16" y="16" width="14" height="14" fill="#1f4fa3"/><path d="M3 30l7-12 7 12z" fill="#f6c41a"/></svg>`,
  coursesTagline: "The 24-hour initial course, its California version and the refreshers that follow.",
  guidesTagline: "Who qualifies for 24 hours, what the field day is and when to step up to 40.",

  courses: [
    {
      id: 581, short: "OSHA 24-Hour",
      summary: "The OSHA 24-hour initial HAZWOPER for occasional site workers and workers in monitored, low-exposure areas.",
      body: `29 CFR 1910.120(e)(3)(ii) and (iii) allow 24 hours of initial training, instead of 40, for two groups: workers on site only occasionally for a specific, limited task, and workers regularly on site in areas monitored below the exposure limits where respirators aren't needed. They also need one day of supervised field experience, arranged by the employer.`,
      topics: ["Who qualifies for 24-hour training", "Hazard recognition and toxicology basics", "Reading the site safety and health plan", "PPE and when to leave an area", "Site control zones and decontamination", "Emergency procedures"],
      who: "Surveyors, inspectors, drivers, delivery and support staff, and workers in areas monitored below the PEL.",
    },
    {
      id: 576, short: "Cal/OSHA 24-Hour",
      summary: "The 24-hour initial HAZWOPER written to Cal/OSHA Title 8 section 5192 for California workers.",
      body: `The California version of the 24-hour course. Same hours and same idea, written to 8 CCR 5192 with California exposure limits and agencies.`,
      topics: ["8 CCR 5192(e) and who qualifies for 24 hours", "Cal/OSHA exposure limits", "Site safety plan basics", "PPE and decon", "Emergency procedures"],
      who: "California workers with occasional or low-exposure hazardous waste site work.",
    },
    {
      id: 595, short: "8-Hour Refresher",
      summary: "The annual 8-hour refresher that keeps a 24-hour (or 40-hour) certificate current.",
      body: `A 24-hour certificate needs the same annual 8-hour refresher as a 40-hour one, under 1910.120(e)(8).`,
      topics: ["Hazard recognition review", "PPE and respirator review", "Monitoring and decon review", "Lessons from recent incidents"],
      who: "Anyone with an initial 24- or 40-hour HAZWOPER certificate.",
    },
    {
      id: 1099, short: "4-Hour Awareness",
      summary: "First responder awareness training for staff who may discover a release but won't work on a waste site.",
      body: `If your people don't work on a hazardous waste site at all but might see a release, they may need awareness-level training under 1910.120(q)(6)(i) instead of the 24-hour.`,
      topics: ["Recognizing a release", "Identifying the material", "Securing the area", "Notifying the right people"],
      who: "Security, warehouse and facility staff who may witness a hazardous substance release.",
    },
  ],

  guides: [
    {
      slug: "do-you-qualify-for-24-hour-hazwoper",
      title: "Do you qualify for the 24-hour HAZWOPER?",
      description: "Two narrow groups can take 24 hours instead of 40. Here's how to tell if you're in one.",
      date: "2026-10-25",
      courses: [581],
      body: `The 40-hour is the default for hazardous waste site workers. The 24-hour is the exception, and it's narrower than many people think.

## The two groups

**1. Occasional workers with limited tasks** (1910.120(e)(3)(ii)). You're on site only occasionally, for a specific limited task such as groundwater monitoring, land surveying or a geophysical survey, and you're unlikely to be exposed over the permissible exposure limits.

**2. Regular workers in low-exposure areas** (1910.120(e)(3)(iii)). You're on site regularly, but only in areas that have been monitored and fully characterized, where exposures are below the limits and respirators aren't needed, and there are no health hazards or the possibility of an emergency developing.

## Quick test

| Question | 24-hour is possible if… |
|---|---|
| Will you need a respirator? | No |
| Has the work area been monitored and characterized? | Yes |
| Could you be exposed at or above a PEL? | No |
| Do you enter the exclusion zone for hands-on work? | No, or only occasionally for a limited task |

If any answer goes the wrong way, it's the 40-hour.

## Field experience

The 24-hour also requires **one day** of actual field experience under a trained, experienced supervisor. The online course covers the 24 hours of instruction, and your employer runs the field day.

> The 24-hour isn't a "lite" version of the 40-hour for busy people. It's for workers whose exposure really is limited. If that changes, so does your training.

{{buy:581}}`,
    },
    {
      slug: "upgrading-from-24-to-40-hour",
      title: "Upgrading from the 24-hour to the 40-hour",
      description: "Your job changed and now you need the 40-hour. You don't have to start from zero.",
      date: "2026-10-25",
      courses: [581, 595],
      body: `It happens all the time. A surveyor starts helping with sampling, or a driver starts working inside the exclusion zone. The 24-hour training no longer fits the job.

## What the rule allows

Under 29 CFR 1910.120(e)(3)(iv), a worker with 24 hours of training who becomes a general site worker, or who needs a respirator, needs:

- **16 more hours** of training, and
- **2 more days** of supervised field experience,

for a total of 40 hours and three days.

## In practice

Many employers just enroll the worker in the full 40-hour course. It's simpler to track, it gives one clean certificate that every future employer recognizes, and the review of the first 24 hours doesn't hurt. If you only take the extra 16 hours, keep both certificates together so the full 40 is clear.

## Your refresher date

Your annual 8-hour refresher keeps running from your most recent HAZWOPER training. Upgrading resets nothing except your certificate level.

## When to upgrade

- Before the first day you work in an area where exposure could exceed a PEL
- Before you're assigned a respirator
- Before you start hands-on work in the exclusion zone

Not after. The training has to come first.`,
    },
    {
      slug: "the-24-hour-field-day",
      title: "What happens on the one-day field experience",
      description: "The 24-hour comes with a supervised day on site. Here's what a good one covers.",
      date: "2026-10-25",
      courses: [581, 576],
      body: `The 24 hours of instruction can be done online. The field day can't. OSHA requires a minimum of one day of actual field experience under the direct supervision of a trained, experienced supervisor.

## A good field day covers

1. **The site tour.** Exclusion zone, contamination reduction zone and support zone, plus where the decon line is and where you muster in an emergency.
2. **The site safety plan.** What hazards are present, what the action levels are and who's in charge.
3. **Your PPE.** Put it on and take it off with the supervisor watching.
4. **Your task.** Do the real task you're there for, with the supervisor alongside.
5. **Decon.** Walk through decon as if you'd been in the exclusion zone.
6. **Emergency signals.** What the horn means and where to go.

## Who signs off

The supervising person, who should have their own HAZWOPER training plus supervisor training and real site time, records the date, site, tasks and their signature.

## Keep it with your certificate

Your 24-hour qualification is the course certificate plus the field day record. Keep both. A future employer or an inspector will want to see both.`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(581)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><p class="foot-big">24</p><p>OSHA 24-hour HAZWOPER from HAZWOPER OSHA Training LLC, delivered on hazwoper-osha.com.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="shapes" aria-hidden="true"><i class="c1"></i><i class="c2"></i><i class="c3"></i></div><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Twenty-four <span>hours.</span> Done.</h1>
<p class="hero-lede">For workers who visit hazardous waste sites now and then, or work where exposure stays below the limits. 100% online, plus one supervised field day with your employer.</p>
<div class="hero-cta">${h.buy(581, "Enroll · $169.99")}<a class="btn btn-alt" href="/guides/do-you-qualify-for-24-hour-hazwoper">Do I qualify?</a></div>
</div></div></section>

<section class="sec"><div class="wrap">
<h2 class="title">24 <span class="dot r"></span> or 40 <span class="dot b"></span></h2>
<div class="vs">
<div class="vs-card r"><h3>24 hours + 1 field day</h3><ul><li>On site occasionally for a limited task</li><li>Or in areas monitored below the PEL</li><li>No respirator needed</li></ul></div>
<div class="vs-card b"><h3>40 hours + 3 field days</h3><ul><li>General site worker</li><li>Possible exposure at or above the PEL</li><li>Respirator use</li></ul></div>
</div></div></section>

<section class="sec sec-y"><div class="wrap">
<h2 class="title">Courses</h2>
<div class="cgrid">${courses.map((c, i) => `<article class="cc cc${i % 3}"><span class="shape" aria-hidden="true"></span><p class="meta">${esc(c.duration)} · #${c.id}</p><h3><a href="${c.url}">${esc(c.name)}</a></h3><p>${esc(c.summary)}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Guides</h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
