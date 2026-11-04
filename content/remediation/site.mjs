// remediation.hazwoperosha.us: environmental remediation crews. Earthy, organic, editorial.
export default {
  brand: "Remediate",
  title: "HAZWOPER Training for Environmental Remediation Crews | Remediate",
  description: "Training for environmental remediation crews: 40-hour HAZWOPER for remediation, site characterization, air monitoring, decontamination and gas detection, online and self-paced.",
  theme: "#4c6b3c",
  fonts: "family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,600&family=Work+Sans:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#ece3cf"/><path d="M8 24C8 12 16 7 26 6c-1 10-6 18-18 18z" fill="#4c6b3c"/><path d="M8 24l10-10" stroke="#ece3cf" stroke-width="2"/></svg>`,
  coursesTagline: "From the first site walk to the last confirmation sample: training for remediation crews.",
  guidesTagline: "Field notes for samplers, techs and laborers on cleanup sites.",

  courses: [
    {
      id: 590, short: "40 Hr Remediation",
      summary: "The 40-hour initial HAZWOPER for environmental remediation crews.",
      body: `Remediation is the heart of HAZWOPER. This 40-hour course under 29 CFR 1910.120(e) follows a cleanup from investigation through excavation, treatment and closure, with the hazards and controls at each step.`,
      topics: ["Phases of a cleanup and their hazards", "Drilling, sampling and test pits", "Drum and container handling", "Treatment systems: SVE, pump-and-treat, in-situ", "Air monitoring and action levels", "Decon of people and equipment"],
      who: "Field technicians, geologists, samplers, laborers and operators on remediation projects.",
    },
    {
      id: 586, short: "Site Characterization",
      summary: "A 20-minute module on how sites are evaluated before and during work.",
      body: `Before anyone goes in, the site is characterized. This module explains the preliminary evaluation, IDLH conditions and how monitoring keeps the picture up to date.`,
      topics: ["Preliminary evaluation", "Recognizing IDLH conditions", "Site history and records", "Ongoing monitoring"],
      who: "New field staff and anyone who walks a site before work starts.",
    },
    {
      id: 583, short: "Air Monitoring",
      summary: "A 20-minute module on direct-reading instruments and action levels.",
      body: `PIDs, multi-gas meters and dust monitors drive most PPE decisions on a cleanup. This module covers what they measure and how to read them.`,
      topics: ["PIDs and multi-gas meters", "Bump test vs calibration", "Action levels", "Breathing-zone readings"],
      who: "Anyone who carries or reads monitoring equipment.",
    },
    {
      id: 584, short: "Decontamination",
      summary: "A 20-minute module on the decon line, station by station.",
      body: `Decon is where contamination either stays on site or goes home. This module walks the decon line and the common doffing mistakes.`,
      topics: ["Site zones", "Decon stations in order", "Doffing safely", "Equipment decon"],
      who: "All remediation field staff and decon techs.",
    },
    {
      id: 1056, short: "Gas Detection",
      summary: "Two-hour training on gas detection for excavations, vaults and treatment systems.",
      body: `Remediation work often happens in excavations, manholes and treatment enclosures where vapors build up. This course covers multi-gas and PID monitoring in depth.`,
      topics: ["Oxygen, LEL and toxic sensors", "PIDs", "Calibration", "Confined spaces"],
      who: "Field techs who work around excavations, wells and treatment systems.",
    },
    {
      id: 595, short: "8 Hr Refresher",
      summary: "The annual 8-hour HAZWOPER refresher.",
      body: `Keep your 40-hour current with eight hours of refresher training each year.`,
      topics: ["Hazard review", "Monitoring and PPE review", "Case studies"],
      who: "Remediation workers with a current HAZWOPER certificate.",
    },
  ],

  guides: [
    {
      slug: "first-week-on-a-remediation-site",
      title: "Your first week on a remediation site",
      description: "What new field techs should expect, from the HASP briefing to the decon line.",
      date: "2026-10-25",
      courses: [590, 584],
      body: `You have your 40-hour certificate. Now comes the part the course can't give you: real days on a real site.

## Day one: paperwork and briefing

Expect to show your 40-hour certificate, refresher (if more than 12 months since the 40), medical clearance and respirator fit test. Then the pre-entry briefing: hazards, zones, PPE by task, action levels, emergency signals and muster point.

## Your field days

Under 29 CFR 1910.120(e)(3)(i), new general site workers need **three days** of field experience under a trained, experienced supervisor. That's this week. Ask questions. That's what it's for.

## Things nobody tells you

- **Bring extra layers and dry socks.** Tyvek and boots are hot in summer and cold in winter.
- **Hydrate before you suit up.** Water goes on the support side of the line.
- **Label your sample jars as you go.** Waiting until the end of the day causes mix-ups.
- **Learn the decon line both ways.** You'll go through it, and some days you'll run it.

## When to stop and ask

- A reading on the monitor you don't understand
- An unexpected drum, odor, sheen or stained soil
- Your PPE gets torn or soaked through
- You feel dizzy, sick or overheated

On a good site, stopping to ask is part of the job.`,
    },
    {
      slug: "action-levels-explained",
      title: "Action levels explained: what the PID reading means for you",
      description: "Most remediation PPE decisions come down to a few numbers in the HASP. Here's how to read them.",
      date: "2026-10-25",
      courses: [583, 1056],
      body: `Every remediation health and safety plan has a table of action levels: readings that tell the crew when to keep working, upgrade PPE or stop. Understanding that table is one of the most useful things a field tech can learn.

## A typical action level table

| Breathing-zone reading (PID, sustained) | Action |
|---|---|
| Below 1 ppm above background | Continue in Level D |
| 1 to 5 ppm | Increase monitoring, consider Level C, identify the source |
| 5 to 50 ppm | Level C with organic vapor cartridges, if the contaminant allows |
| Above 50 ppm | Stop work, leave the area, call the site safety officer |

These numbers are only an example. **Your site's plan sets the real ones**, based on the contaminants present and their exposure limits.

## Key words

- **Breathing zone.** Measured near your nose and mouth, not at the ground.
- **Sustained.** Usually several minutes. A one-second spike isn't the trigger.
- **Above background.** Measured relative to clean air upwind.

## Why the PID isn't the whole story

A PID reads total volatile organics. It can't tell benzene from gasoline, and it doesn't see some chemicals at all. Sites with specific contaminants of concern use tubes, badges or lab samples to know what the PID number means.

## Oxygen and LEL first

In excavations and enclosed areas, check oxygen and LEL before trusting a PID reading. Low oxygen affects many sensors.

{{buy:583}}`,
    },
    {
      slug: "drums-on-a-cleanup-site",
      title: "Finding drums on a cleanup site",
      description: "Buried or abandoned drums are one of the most dangerous surprises on a remediation job.",
      date: "2026-10-25",
      courses: [590, 586],
      body: `Unknown drums turn a routine excavation into a hazmat situation. 29 CFR 1910.120(j) sets specific rules for handling them.

## When you find one

1. **Stop.** Don't touch, tip or puncture it.
2. **Back off** and tell your supervisor.
3. **Monitor the air** from a safe distance, upwind.
4. **Keep the area clear** until a plan is made.

## Why drums are dangerous

- Contents are often unknown and can be incompatible with each other.
- Rusted drums can collapse or leak when moved.
- Bulging drums may be pressurized.
- Some may contain shock-sensitive or reactive materials.

## What the rule requires

- Drums are inspected and their integrity assured before being moved, where practical.
- Unlabeled drums are treated as hazardous until characterized.
- Spill containment such as overpacks, absorbent and salvage drums is available where spills could occur.
- Drums that can't be moved safely are emptied in place into sound containers.
- Workers handling drums are trained for it, and only the minimum number of people are exposed.

## Equipment

Remote drum handling (grapplers, drum openers) and non-sparking tools are standard for unknown drums. Opening drums is done remotely or with shielding when contents might be pressurized or reactive.

> Drum handling isn't a task for a new hire's first week. Watch, learn and let the experienced crew lead.

{{buy:590}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(590)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">Remediate<span>.</span></a><p>Training for environmental remediation crews from HAZWOPER OSHA Training LLC, delivered on hazwoper-osha.com.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    const phases = [["Investigate", "Site walk, history, borings and samples"], ["Excavate", "Dig, stockpile, load out"], ["Treat", "SVE, pump-and-treat, in-situ"], ["Confirm", "Confirmation samples and closure"]];
    return `<section class="hero"><div class="leaf" aria-hidden="true"></div><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Clean up the site. <em>Go home clean.</em></h1>
<p class="hero-lede">HAZWOPER and field-skills training for the people who investigate, excavate and treat contaminated sites.</p>
<div class="hero-cta">${h.buy(590, "Start the 40-hour · $249.99")}<a class="btn btn-alt" href="/guides/first-week-on-a-remediation-site">Your first week</a></div>
</div></div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Every phase of the <em>cleanup</em></h2>
<ol class="phases">${phases.map(([t, d]) => `<li><b>${t}</b><span>${d}</span></li>`).join("")}</ol>
</div></section>

<section class="sec sec-paper"><div class="wrap">
<h2 class="title">Courses</h2>
<div class="cgrid">${courses.map((c) => `<article class="cc"><p class="meta">${esc(c.duration)} · #${c.id}</p><h3><a href="${c.url}">${esc(c.short)}</a></h3><p>${esc(c.summary)}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Field <em>notes</em></h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
