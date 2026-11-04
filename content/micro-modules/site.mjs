// micro-modules.hazwoperosha.us: 15-20 minute HAZWOPER micro-modules and one-hour equipment courses. Neo-brutalist.
export default {
  brand: "micro.hazwoper",
  title: "HAZWOPER Micro-Modules | 15-Minute Safety Lessons Online | micro.hazwoper",
  description: "Bite-size HAZWOPER training: PPE levels, decontamination, air monitoring and site characterization in 15-20 minutes, plus one-hour spill equipment courses. From $12.99.",
  theme: "#ff90e8",
  fonts: "family=Space+Grotesk:wght@400;500;600;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" fill="#ffe14d" stroke="#000" stroke-width="3"/><path d="M18 6l-8 12h6l-2 8 8-12h-6z" fill="#000"/></svg>`,
  coursesTagline: "Short, focused lessons on one HAZWOPER skill at a time.",
  guidesTagline: "Quick reads to go with the quick lessons.",

  courses: [
    {
      id: 585, short: "PPE Levels A–D",
      summary: "The four EPA/OSHA levels of protection explained in 15 minutes.",
      body: `Level A, B, C or D? This micro-module explains what each level includes, when it's used and how a site decides. It's built for toolbox talks, onboarding and quick reviews, and it's a supplement to the full HAZWOPER course, not a substitute.`,
      topics: ["What's in Level A, B, C and D", "Respiratory vs skin protection", "How sites choose a level", "Upgrading and downgrading", "Limits: heat stress and mobility"],
      who: "New HAZWOPER workers, crews before a PPE change, and anyone who wants a fast refresher.",
    },
    {
      id: 584, short: "Decontamination",
      summary: "How the decon line works, station by station, in 20 minutes.",
      body: `Decontamination keeps contamination inside the hot zone. This module walks through a typical decon line, explains why the order matters and covers the most common mistakes in doffing.`,
      topics: ["Site zones and the contamination reduction corridor", "Decon stations in order", "Doffing without contaminating yourself", "Equipment and tool decon", "Emergency decon"],
      who: "HAZWOPER workers and decon line staff.",
    },
    {
      id: 583, short: "Air Monitoring",
      summary: "Direct-reading instruments and what their readings mean, in 20 minutes.",
      body: `Gas meters and PIDs only help if you trust and understand the reading. This module covers what each sensor measures, bump tests and calibration, and the common action levels on HAZWOPER sites.`,
      topics: ["Oxygen, LEL and toxic sensors", "Photoionization detectors", "Bump test vs calibration", "Monitoring order", "Reading action levels"],
      who: "Workers who carry or read gas monitors on site.",
    },
    {
      id: 586, short: "Site Characterization",
      summary: "How a hazardous waste site is evaluated before and during work, in 20 minutes.",
      body: `Before anyone goes in, the site has to be characterized. This module explains the preliminary evaluation, the hazards it looks for and how ongoing monitoring updates the picture.`,
      topics: ["Preliminary evaluation before entry", "Recognizing IDLH conditions", "Records, interviews and site history", "Initial entry and monitoring", "Updating the site safety plan"],
      who: "New HAZWOPER workers, samplers and supervisors-in-training.",
    },
    {
      id: 478, short: "Booms (1 hr)",
      summary: "One-hour equipment course on absorbent and containment booms.",
      body: `A slightly longer module for crews who deploy booms. It covers boom types, placement in current and anchoring, and what to do when a boom fails.`,
      topics: ["Absorbent vs containment booms", "Placement and angle", "Connecting and anchoring", "Common failures", "Recovery and disposal"],
      who: "Facility and response staff who deploy booms.",
    },
    {
      id: 479, short: "Spill Kits (1 hr)",
      summary: "One-hour equipment course on choosing and using spill kits.",
      body: `Kit types, sizing, placement and the step-by-step use of each item in a spill kit, in one hour.`,
      topics: ["Universal, oil-only and hazmat kits", "Sizing and placement", "Using socks, pads and drain covers", "Disposal", "Inspection and restocking"],
      who: "Anyone expected to use a spill kit.",
    },
  ],

  guides: [
    {
      slug: "ppe-levels-cheat-sheet",
      title: "PPE levels A, B, C and D on one page",
      description: "The fastest way to remember what each level of protection includes and when it's used.",
      date: "2026-10-25",
      courses: [585],
      body: `The four levels of protection come from EPA and are described in Appendix B of OSHA's HAZWOPER standard, 29 CFR 1910.120. The idea is simple: **respiratory protection and skin protection are chosen separately**, and the level names the combination.

## The cheat sheet

| Level | Breathing | Skin | Use when |
|---|---|---|---|
| **A** | SCBA or supplied air | Fully encapsulating, vapor-tight chemical suit | Highest skin and respiratory hazard, or unknown conditions |
| **B** | SCBA or supplied air | Chemical-resistant splash suit, not vapor-tight | Highest respiratory hazard, lower skin hazard |
| **C** | Air-purifying respirator (APR or PAPR) | Chemical-resistant clothing | Contaminant known, concentration measured, APR criteria met |
| **D** | None | Work uniform, boots, gloves, safety glasses | No respiratory hazard, minimal skin hazard |

## Memory trick

- **A** = **A**ll covered, airtight
- **B** = **B**reathing at maximum, splash on skin
- **C** = **C**artridge respirator
- **D** = **D**aily work clothes

## The Level C rule

Level C is only allowed when you know what's in the air, you've measured how much, and an air-purifying respirator is rated for it. That also means oxygen is adequate (at least 19.5%) and conditions aren't immediately dangerous to life or health. If you don't know what's there, you're not in Level C.

## Higher isn't always safer

Level A is hot, heavy, limits your vision and wears you out fast. Heat stress is a real risk in A and B. Sites upgrade when monitoring shows they need to, and downgrade when it's safe, so the crew can work longer and with fewer mistakes.

{{buy:585}}`,
    },
    {
      slug: "micro-modules-for-toolbox-talks",
      title: "Using micro-modules for toolbox talks",
      description: "A 15-minute lesson fits a morning tailgate. Here's how to run one, and what micro-modules can't replace.",
      date: "2026-10-25",
      courses: [585, 584, 583, 586],
      body: `Most crews already hold a short safety meeting before work. A 15 to 20 minute micro-module turns that meeting into a focused lesson on one skill.

## What they're for

- **Toolbox talks and tailgates.** One topic, one morning.
- **Onboarding.** A new hire reviews PPE and decon before their first day in the zone.
- **Before a change.** The site is moving from Level D to Level C next week, so everyone takes the PPE module.
- **After an incident.** Someone doffed wrong, so the crew takes the decon module.
- **Between refreshers.** Keeps key skills fresh during the 12 months between annual refreshers.

## What they're not

Micro-modules **don't replace** the required HAZWOPER hours. The initial 40-hour or 24-hour course and the 8-hour annual refresher are still required under 29 CFR 1910.120(e). Think of micro-modules as extra practice, not a shortcut.

## A 20-minute tailgate plan

1. **Two minutes.** Say why this topic, today.
2. **Fifteen minutes.** Everyone takes the module on their phone, or watch it together on a tablet.
3. **Three minutes.** Ask two questions from the module, tied to today's task. "What's our action level today?" "Which station is first on our decon line?"

## Keep a record

Each module gives a completion certificate. Save them in the worker's training file. They show an inspector, and your own team, that safety training happens all year, not once a year.

## A four-week rotation

| Week | Module |
|---|---|
| 1 | [[586]] |
| 2 | [[583]] |
| 3 | [[585]] |
| 4 | [[584]] |`,
    },
    {
      slug: "decon-line-station-by-station",
      title: "The decon line, station by station",
      description: "Why decon goes in a fixed order, and the mistakes that send contamination home with workers.",
      date: "2026-10-25",
      courses: [584],
      body: `A hazardous waste site is divided into zones. Decontamination happens in between, and the order of the steps is what keeps contamination from leaving the site.

## The zones

- **Exclusion zone (hot zone).** Where the contamination is.
- **Contamination reduction zone (warm zone).** Where the decon line sits.
- **Support zone (cold zone).** Clean. Command, break areas, vehicles.

Everyone and everything leaving the hot zone passes through decon, moving from dirtiest to cleanest.

## A typical line

Exact stations vary by site and PPE level. A common Level B line looks like this:

1. **Equipment drop.** Tools and sample containers go on a plastic sheet.
2. **Outer boot and glove wash.** Scrub with decon solution.
3. **Rinse.** Rinse boots and gloves.
4. **Tape removal.** Remove the tape at the wrists and ankles.
5. **Outer boot and glove removal.**
6. **Suit removal.** Roll the suit outward and down, so the dirty side stays inside.
7. **SCBA or respirator removal.**
8. **Inner glove removal.** Last, so clean hands never touch dirty gear.
9. **Field wash.** Wash hands and face before entering the support zone.

## The mistakes we see most

- **Touching your face** with dirty gloves while you're doffing
- **Pulling the suit off over your head**, dragging the outside across your face
- **Skipping stations** when the line is busy or it's hot
- **Decon techs without PPE.** The people running decon need protection too, usually one level below the entry team.

## Emergency decon

If someone is injured or exposed, life comes first. Remove gross contamination fast, usually by cutting off the suit and flushing with water, and get them to medical care. Full decon can wait. Contamination can be managed. A heart attack in Level A can't wait.

{{buy:584}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(585)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">micro.hazwoper</a><p>Bite-size HAZWOPER lessons from HAZWOPER OSHA Training LLC. Delivered on hazwoper-osha.com.</p></div>
<div><h2>Modules</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Help</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    const minutes = (c) => c.duration.replace(" Min", " min").replace(" Hour", " hr");
    return `<section class="hero"><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Tiny lessons.<br>Big safety.</h1>
<p class="hero-lede">Bite-size HAZWOPER modules for toolbox talks, onboarding or a quick skills check. Starting at $12.99.</p>
<div class="hero-cta">${h.buy(585, "Start a module →")}<a class="btn btn-alt" href="/guides/micro-modules-for-toolbox-talks">Use them for tailgates</a></div>
</div>
</div></section>

<div class="marquee" aria-hidden="true"><div>PPE ★ DECON ★ AIR MONITORING ★ SITE CHARACTERIZATION ★ BOOMS ★ SPILL KITS ★ PPE ★ DECON ★ AIR MONITORING ★ SITE CHARACTERIZATION ★ BOOMS ★ SPILL KITS ★</div></div>

<section class="sec" id="how"><div class="wrap">
<h2 class="title"><span class="hl">How</span> it works</h2>
<div class="how">
<div class="box"><b>1</b><h3>Pick one</h3><p>One skill per module. No 40-hour commitment.</p></div>
<div class="box"><b>2</b><h3>Watch it</h3><p>15–20 minutes on your phone, at the tailgate or on break.</p></div>
<div class="box"><b>3</b><h3>Get the cert</h3><p>A completion certificate for your training file.</p></div>
</div>
<p class="fine">Micro-modules supplement the required 40/24-hour HAZWOPER and annual 8-hour refresher. They don't replace them.</p>
</div></section>

<section class="sec sec-pink"><div class="wrap">
<h2 class="title">All <span class="hl">modules</span></h2>
<div class="mgrid">${courses.map((c) => `<article class="mod"><div class="mod-top"><span class="time">${esc(minutes(c))}</span><span>#${c.id}</span></div><h3><a href="${c.url}">${esc(c.short)}</a></h3><p>${esc(c.summary)}</p><div class="mod-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Start", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Quick <span class="hl">reads</span></h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
