// crews.hazwoperosha.us: buying HAZWOPER seats for whole crews. Fintech, with a crew cost calculator.
export default {
  brand: "crewseats",
  title: "HAZWOPER Training for Whole Crews | Buy Seats in One Checkout | crewseats",
  description: "Buy HAZWOPER training seats for your whole crew: 40-hour, 24-hour, refresher, supervisor, train-the-trainer and awareness courses. Crew cost calculator, one checkout per course, invoices available.",
  theme: "#635bff",
  fonts: "family=Plus+Jakarta+Sans:wght@400;500;600;700;800",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ff7ab6"/><stop offset=".5" stop-color="#a960ee"/><stop offset="1" stop-color="#5ad1ff"/></linearGradient></defs><rect width="32" height="32" rx="9" fill="url(#g)"/><circle cx="12" cy="13" r="4" fill="#fff"/><circle cx="21" cy="13" r="4" fill="#fff" opacity=".7"/><path d="M5 26c1-5 4-7 7-7s6 2 7 7z" fill="#fff"/></svg>`,
  coursesTagline: "Every course on this site can be bought for any number of seats in one payment.",
  guidesTagline: "Budgeting, onboarding and planning HAZWOPER training for crews of any size.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", default: 10,
      summary: "The OSHA 40-hour initial HAZWOPER for general site workers.",
      body: `The standard 40-hour initial training under 29 CFR 1910.120(e). Buy one seat or a hundred in a single payment. Each worker who completes it gets a certificate.`,
      topics: ["Hazard recognition", "Site safety plan", "PPE and respirators", "Monitoring", "Decontamination", "Emergency procedures"],
      who: "General site workers." },
    { id: 581, short: "24-Hour HAZWOPER", default: 0,
      summary: "The 24-hour HAZWOPER for occasional and low-exposure workers.",
      body: `For crew members who are on site occasionally or only in monitored low-exposure areas.`,
      topics: ["Who qualifies", "Hazard recognition", "PPE basics", "Site zones and decon"],
      who: "Occasional and low-exposure site workers." },
    { id: 595, short: "8-Hour Refresher", default: 20,
      summary: "The annual 8-hour refresher for every certified worker.",
      body: `The annual refresher under 1910.120(e)(8). Put the whole crew on one renewal month.`,
      topics: ["Hazard review", "PPE and monitoring review", "Case studies"],
      who: "Everyone with a current HAZWOPER certificate." },
    { id: 597, short: "8-Hour Supervisor", default: 2,
      summary: "The 8-hour supervisor course for foremen and site leads.",
      body: `Eight extra hours for anyone who directs crews on hazardous waste sites.`,
      topics: ["Safety program", "PPE program", "Monitoring", "Site control"],
      who: "Foremen and site leads." },
    { id: 1016, short: "Train-the-Trainer", default: 0,
      summary: "Qualify an in-house trainer to run field days and refreshers.",
      body: `For larger crews, an in-house trainer can run field experience days and site-specific training.`,
      topics: ["Trainer qualifications", "Lesson planning", "Field exercises", "Records"],
      who: "EHS leads and senior supervisors." },
    { id: 1099, short: "Awareness", default: 0,
      summary: "First responder awareness for support staff.",
      body: `Four hours for staff who may discover a release but won't respond.`,
      topics: ["Recognize", "Isolate", "Notify"],
      who: "Office, yard and support staff." },
  ],

  guides: [
    {
      slug: "budgeting-for-crew-hazwoper-training",
      title: "Budgeting for crew HAZWOPER training",
      description: "The course fee is the smallest line. A realistic budget for training a crew.",
      date: "2026-10-25",
      courses: [587, 595],
      body: `When contractors price HAZWOPER training, they usually price the course. The bigger costs are elsewhere.

## The full cost of a new 40-hour worker

| Item | Notes |
|---|---|
| Course seat | $249.99 for [[587]] |
| Paid training time | 40 hours of wages, often the largest single cost |
| Field experience | 3 days under a supervisor, often on a real job |
| Medical exam | Before assignment, if covered by medical surveillance |
| Respirator fit test | Before respirator use and every 12 months |
| PPE | Boots, gloves, suits and respirator |

## The yearly cost of a certified worker

- [[595]] at $59.99 per seat
- 8 hours of paid time
- Annual fit test and, for most, an annual medical exam

## Ways to save

1. **Online courses.** No travel and no trainer day rate, and workers can train on slow days or between jobs.
2. **One renewal month.** Line up refreshers, fit tests and medicals for the whole crew in the same month.
3. **Train the right level.** Not everyone needs 40 hours. Workers who qualify can take [[581]].
4. **Build field days into real work.** The first project a new hire works on can be their supervised field experience.
5. **An in-house trainer** pays off for larger crews. See [[1016]].

## Plan for turnover

Budget for new hires through the year, not just the start-of-season crew.`,
    },
    {
      slug: "onboarding-a-new-hire-with-prior-hazwoper",
      title: "Onboarding a new hire who already has HAZWOPER",
      description: "Their certificate came from another employer. What to check before they start.",
      date: "2026-10-25",
      courses: [595, 587],
      body: `A new hire with a HAZWOPER card can save you 40 hours of training, if the card holds up.

## Check the paperwork

1. **The initial certificate.** 40 or 24 hours, the provider, the date and the worker's name.
2. **Refreshers.** Is the most recent one within the last 12 months? If not, they need [[595]] before starting.
3. **Field experience.** Is there a record of the supervised days? If not, plan to provide them.
4. **Supervisor training**, if they'll lead others.
5. **Medical clearance and fit test**, current for your program.

## Equivalent training

29 CFR 1910.120(e)(9) lets employers accept prior training and experience as equivalent, if they can show it. Document what you reviewed and why you accepted it.

## Red flags

- A certificate with no hours or no provider listed
- Gaps of several years with no refresher
- A card that doesn't match the worker's name or ID
- Training from a provider you can't verify

When in doubt, retraining costs less than defending a citation.

## Site-specific orientation

Even a fully certified worker needs your site's briefing: your site safety plan, your PPE, your emergency procedures. That's required for every worker on every site.`,
    },
    {
      slug: "online-vs-in-person-hazwoper-for-crews",
      title: "Online or in-person HAZWOPER for your crew?",
      description: "Both have a place. How to choose, and how to combine them.",
      date: "2026-10-25",
      courses: [587, 1016],
      body: `There's no single right answer. Most contractors end up using both.

## Online works best for

- **The classroom hours** of the 40-hour, 24-hour and refresher
- Workers spread across sites or states
- Crews who need to train between jobs or on rain days
- Keeping cost and travel down

## In-person works best for

- **Hands-on skills:** donning and doffing PPE, respirator fit, decon line practice, monitor use
- The **supervised field experience** OSHA requires after the initial course
- Workers who learn better with an instructor in the room

## The blended model

1. Workers complete the online course on their own time.
2. A supervisor or in-house trainer runs a hands-on day: PPE, decon and instruments.
3. The worker's first days on a real site serve as the supervised field experience.

## Checklist for any provider

- Does the course cover all the topics in 1910.120(e)?
- Can workers ask a qualified person questions?
- Does each worker get a certificate with hours, date and provider?
- Can you see completion status for the whole crew?`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(587)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/"><span class="dot" aria-hidden="true"></span>crewseats</a><p>Crew HAZWOPER training from HAZWOPER OSHA Training LLC, delivered on hazwoper-osha.com. Invoices and purchase orders: +1-866-429-6742.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="mesh" aria-hidden="true"></div><div class="wrap hero-in">
<div>
<h1>Train the whole crew in one checkout.</h1>
<p class="hero-lede">Buy HAZWOPER seats for 5 or 500 workers, one payment per course. Questions about setting up a large crew? Call +1-866-429-6742.</p>
<div class="hero-cta">${h.buy(587, "Buy 40-hour seats")}<a class="btn btn-alt" href="#calc">Price your crew</a></div>
</div>
<div class="calc" id="calc">
<p class="calc-head">Crew estimate</p>
${courses.map((c) => `<label class="crow"><span><b>${esc(c.short)}</b><small>${c.lmsId ? `#${c.lmsId} · ` : ""}${money(c.price)} per seat</small></span><input type="number" min="0" max="10000" step="1" value="${c.default}" data-price="${c.price}" aria-label="Seats of ${esc(c.short)}"></label>`).join("")}
<div class="ctotal"><span>Estimated total</span><strong id="crewTotal">—</strong></div>
<p class="cnote">Each course is checked out separately with its seat count. For one invoice or a purchase order, call +1-866-429-6742.</p>
</div>
</div></section>
<script>
(function () {
  var inputs = document.querySelectorAll('.calc input');
  var out = document.getElementById('crewTotal');
  function sum() {
    var t = 0;
    inputs.forEach(function (i) { t += Math.max(0, parseInt(i.value, 10) || 0) * parseFloat(i.dataset.price); });
    out.textContent = '$' + t.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  inputs.forEach(function (i) { i.addEventListener('input', sum); });
  sum();
})();
</script>

<section class="sec"><div class="wrap">
<h2 class="title">How crew checkout works</h2>
<div class="steps">
<div><b>1</b><h3>Pick a course</h3><p>Choose the course and set the number of seats.</p></div>
<div><b>2</b><h3>Pay once</h3><p>One card payment covers every seat for that course.</p></div>
<div><b>3</b><h3>Train</h3><p>Workers complete the course online, at their own pace.</p></div>
<div><b>4</b><h3>Certify</h3><p>Each worker who passes gets a certificate for your records.</p></div>
</div></div></section>

<section class="sec sec-alt"><div class="wrap">
<h2 class="title">Courses</h2>
<div class="course-list">${courses.map(h.courseRow).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Guides for crew leads</h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
