// refresher.hazwoperosha.us: annual 8-hour HAZWOPER refreshers. Swiss / International style.
export default {
  brand: "Refresh.8",
  title: "8-Hour HAZWOPER Refresher Online | Annual OSHA Renewal | Refresh.8",
  description: "Renew your HAZWOPER certification online. OSHA 8-hour annual refresher, state-plan, supervisor, incident command and ammonia versions. From $59.99.",
  theme: "#e30613",
  fonts: "family=Inter:wght@400;500;600;700;800",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#fff"/><text x="16" y="27" font-size="30" font-family="Arial" font-weight="900" text-anchor="middle" fill="#e30613">8</text></svg>`,
  coursesTagline: "Five versions of the annual 8-hour refresher. Same deadline, different jobs.",
  guidesTagline: "Deadlines, lapses and choosing the right refresher, answered in plain language.",

  courses: [
    {
      id: 595,
      short: "8-Hour Refresher",
      summary: "The standard OSHA annual 8-hour HAZWOPER refresher for anyone who holds a 40- or 24-hour certificate.",
      body: `29 CFR 1910.120(e)(8) requires at least eight hours of refresher training every year for everyone covered by the initial 40- or 24-hour training. This is that course. It reviews the core of the initial training and brings in recent incidents, lessons learned and changes in practice.

If you're not a supervisor, an incident commander or an ammonia technician, this is your refresher.`,
      topics: ["Review of hazard recognition and toxicology", "PPE selection and respirator refresher", "Air monitoring review", "Decontamination procedures", "Recent incidents and lessons learned", "Changes in standards and good practice"],
      who: "Any worker with an initial 40-hour or 24-hour HAZWOPER certificate who needs to stay current.",
    },
    {
      id: 900,
      short: "State-Plan Refresher",
      summary: "The annual 8-hour refresher for workers in OSHA state-plan states, with state versions available.",
      body: `Twenty-some states run their own OSHA-approved programs. Most adopt the federal HAZWOPER rule word for word. A few write their own version. This refresher covers the federal requirement and the state-plan equivalents, so the certificate makes sense to an inspector in your state.`,
      topics: ["Federal 1910.120(e)(8) refresher content", "How state plans adopt or adapt HAZWOPER", "State-specific references where they differ", "Hazard recognition, PPE and monitoring review", "Decon and emergency procedures review"],
      who: "HAZWOPER-certified workers employed in state-plan jurisdictions, and employers with crews in several states.",
    },
    {
      id: 596,
      short: "Supervisor Refresher",
      summary: "The annual refresher for HAZWOPER supervisors: the 8 hours your crew needs, plus the supervisor's view.",
      body: `Supervisors need the same annual refresher as their crews, and they're responsible for the site safety program. This version covers the standard refresher topics and spends extra time on the supervisor's job: the site safety and health plan, the pre-entry briefing and enforcement.`,
      topics: ["Refresher review of core HAZWOPER topics", "Site safety and health plan upkeep", "Pre-entry briefings and daily tailgates", "Monitoring programs and action levels", "Recordkeeping and medical surveillance", "Leading through an incident"],
      who: "Site supervisors, foremen and project managers who hold the 8-hour HAZWOPER supervisor certificate.",
    },
    {
      id: 574,
      short: "Incident Command Refresher",
      summary: "The annual refresher for emergency responders and incident commanders under 1910.120(q).",
      body: `Emergency responders under paragraph (q) need annual refresher training, or a yearly demonstration of competency, under 1910.120(q)(8). This 8-hour course combines the HAZWOPER refresher with an incident command review, so one course covers both sides of a responder's job.`,
      topics: ["Incident command system review", "Responder levels and their limits", "Hazard and risk assessment on scene", "PPE for response operations", "Decon on scene", "Post-incident critique"],
      who: "Hazmat team members, fire brigade members, industrial ERT members and on-scene incident commanders.",
    },
    {
      id: 598,
      short: "Ammonia Refresher",
      summary: "The annual HAZWOPER refresher for technicians who work with anhydrous ammonia refrigeration.",
      body: `Ammonia refrigeration facilities often train their technicians as HAZWOPER responders for ammonia releases. This refresher meets the 8-hour annual requirement and keeps the content on ammonia: its hazards, detection, PPE and release response.`,
      topics: ["Anhydrous ammonia properties and health effects", "1910.111 storage and handling basics", "Release detection and alarm response", "PPE and respirators for ammonia", "Emergency isolation and response", "HAZWOPER refresher core review"],
      who: "Ammonia refrigeration technicians and operators at food processing, cold storage and industrial facilities.",
    },
  ],

  guides: [
    {
      slug: "when-is-my-hazwoper-refresher-due",
      title: "When is my HAZWOPER refresher due? And what if I missed it?",
      description: "The 12-month clock, what happens when you're late and how to get back in compliance.",
      date: "2026-10-25",
      courses: [595, 900],
      body: `OSHA's rule is short: covered workers "shall receive eight hours of refresher training annually" (29 CFR 1910.120(e)(8)). Everything else is interpretation. Here's how most employers and auditors read it.

## The 12-month clock

Count 12 months from the date on your last certificate, either your initial 40/24-hour or your last refresher. If your 40-hour certificate says March 3, 2026, your refresher is due by March 3, 2027.

Many employers line everyone up on one renewal month to make tracking easier. That's fine, as long as nobody goes more than 12 months between trainings.

## What if I'm late?

The standard has no grace period. If you're past 12 months, you're out of compliance until you finish a refresher. Two practical points:

- **A short lapse** (weeks or a few months) is normally fixed by taking the 8-hour refresher right away. Your new 12-month clock starts from the new certificate.
- **A long lapse** (years) is a judgment call for your employer. OSHA's equivalency rule, 1910.120(e)(9), lets an employer accept training and experience they can document. If you've been away from HAZWOPER work for a long time and can't show current competency, many employers will have you retake the initial course.

> Out of compliance means off the site. Most site safety plans won't let a worker with an expired refresher into the exclusion zone, so a lapse costs work days, not just paperwork.

## Can I take it early?

Yes. Taking it early just moves your next due date earlier.

## Does online count?

The refresher has no hands-on field component the way the initial 40-hour does. An online course that covers the required topics and lets you ask a qualified instructor questions is widely used for the annual refresher.

{{buy:595}}`,
    },
    {
      slug: "which-8-hour-refresher",
      title: "Which 8-hour refresher fits your job?",
      description: "Five refreshers, one requirement. A side-by-side guide to choosing the right one.",
      date: "2026-10-25",
      courses: [595, 900, 596, 574, 598],
      body: `Every refresher on this site gives you the eight hours that 1910.120(e)(8) requires each year. The difference is what fills those eight hours.

## Side by side

| Refresher | Best for | Price |
|---|---|---|
| [[595]] | Any 40- or 24-hour worker | $59.99 |
| [[900]] | Workers in state-plan states | $84.99 |
| [[596]] | Supervisors and site leads | $69.99 |
| [[574]] | Responders and incident commanders | $249.99 |
| [[598]] | Ammonia refrigeration technicians | $89.99 |

## Three quick rules

1. **Took the supervisor course?** Take the supervisor refresher, so the leadership part of your training stays current too.
2. **On a response team?** Take the incident command refresher. Responders under paragraph (q) need yearly refresher training or a demonstration of competency, and this covers it in one go.
3. **Not sure?** The standard 8-hour refresher always meets the base requirement.

## Mixed crews

You don't have to put the whole crew in one course. A typical contractor puts most people in the standard refresher, foremen in the supervisor refresher and the response team in the incident command refresher. Everyone gets the same renewal date.`,
    },
    {
      slug: "state-plan-states-hazwoper-refresher",
      title: "State-plan states and the HAZWOPER refresher",
      description: "If your state runs its own OSHA program, does your refresher need to be different? Usually not, but here's when it matters.",
      date: "2026-10-25",
      courses: [900, 595],
      body: `About half of US states run their own OSHA-approved occupational safety program, called a "state plan." State plans must be at least as effective as federal OSHA. For HAZWOPER, most simply adopt 29 CFR 1910.120 as written.

## When your state has its own version

A few states publish their own HAZWOPER rule. Examples include California (Title 8, section 5192), Washington (WAC 296-843) and Michigan (MIOSHA Part 432). The hours are the same as the federal rule: 40 or 24 hours initial, 8 hours a year. But the section numbers, some definitions and some details differ.

An inspector in those states will cite the state rule, not the federal one. A refresher that references the right rule makes your records easier to defend.

## Public employees

Federal OSHA doesn't cover state and local government workers, but state plans do. In a state-plan state, a county road crew or a municipal hazmat team is covered by HAZWOPER the same way a private contractor is. In federal-OSHA states, EPA's worker protection rule (40 CFR Part 311) applies HAZWOPER to public employees who'd otherwise be left out.

## What to do

- **Federal-OSHA state, or a state plan that adopts the federal rule:** [[595]] covers you.
- **State with its own HAZWOPER rule, or crews in several states:** [[900]] covers the federal rule and the state equivalents.
- **California specifically:** see our sister site [cal-osha.hazwoperosha.us](https://cal-osha.hazwoperosha.us/) for Cal/OSHA courses.

{{buy:900}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(595)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div class="foot-big">8</div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Guides</h2>${h.guides.map((g) => `<a href="${g.url}">${h.esc(g.title)}</a>`).join("")}</div>
<div><h2>Contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a><p>HAZWOPER OSHA Training LLC. Courses delivered on hazwoper-osha.com.</p></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="wrap hero-in">
<div class="hero-num" aria-hidden="true">8</div>
<div class="hero-copy">
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Hours. Once a year.<br>Stay certified.</h1>
<p class="hero-lede">OSHA requires an 8-hour HAZWOPER refresher every 12 months. Pick your version, finish at your own pace and download your certificate.</p>
${h.buy(595, "Renew now · $59.99")}
</div></div></section>

<section class="grid-sec" id="courses"><div class="wrap">
<div class="sec-head"><p class="label">02 — Courses</p><h2>Five refreshers.<br>One deadline.</h2></div>
<ol class="clist">
${courses.map((c, i) => `<li><span class="idx">${String(i + 1).padStart(2, "0")}</span><div><a href="${c.url}">${esc(c.name)}</a><p>${esc(c.summary)}</p></div><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</li>`).join("")}
</ol></div></section>

<section class="grid-sec due" id="due"><div class="wrap due-in">
<div class="sec-head"><p class="label">03 — Due date</p><h2>When is yours due?</h2><p>Enter the date on your last HAZWOPER certificate, initial or refresher.</p></div>
<div class="calc">
<label for="lastCert">Last certificate date</label>
<input type="date" id="lastCert">
<output id="dueOut" aria-live="polite"><span>Your refresher is due</span><strong>—</strong><em></em></output>
</div></div></section>
<script>
(function () {
  var input = document.getElementById('lastCert'), out = document.getElementById('dueOut');
  input.addEventListener('input', function () {
    if (!input.value) return;
    var d = new Date(input.value + 'T00:00:00'); d.setFullYear(d.getFullYear() + 1);
    var days = Math.ceil((d - new Date()) / 864e5);
    out.querySelector('strong').textContent = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    out.querySelector('em').textContent = days < 0 ? 'Overdue by ' + (-days) + ' days. Renew now to get back in compliance.' : days + ' days left.';
    out.className = days < 0 ? 'late' : days < 45 ? 'soon' : '';
  });
})();
</script>

<section class="grid-sec facts"><div class="wrap facts-in">
<div><p class="label">04 — Facts</p></div>
<div><b>12</b><span>months between refreshers, counted from your last certificate</span></div>
<div><b>0</b><span>days of grace period in the federal standard</span></div>
<div><b>1</b><span>certificate, downloadable the day you finish</span></div>
</div></section>

<section class="grid-sec"><div class="wrap">
<div class="sec-head"><p class="label">05 — Guides</p><h2>Read before you renew.</h2></div>
<div class="glist">${guides.map((g, i) => `<a href="${g.url}"><span class="idx">${String(i + 1).padStart(2, "0")}</span><strong>${esc(g.title)}</strong><span>${esc(g.description)}</span></a>`).join("")}</div>
</div></section>`;
  },
};
