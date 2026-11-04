// ammonia.hazwoperosha.us: HAZWOPER for ammonia refrigeration facilities. Ice frost.
export default {
  title: "Ammonia Refrigeration HAZWOPER Training | Release Response | Industrial Certified Training",
  description: "HAZWOPER training for anhydrous ammonia refrigeration: 8-hour HAZWOPER and safe ammonia handling refresher, gas detection, incident command, awareness and responder refresher.",
  theme: "#0b2a4a",
  fonts: "family=Sora:wght@300;400;600;700",
  coursesTagline: "Training for technicians, operators and responders at ammonia refrigeration facilities.",
  guidesTagline: "Ammonia hazards, regulations and release response for cold storage and food plants.",

  courses: [
    {
      id: 598, short: "HAZWOPER + Ammonia Refresher",
      summary: "The annual 8-hour HAZWOPER refresher built around anhydrous ammonia.",
      body: `Ammonia refrigeration facilities often train technicians as HAZWOPER responders for ammonia releases. This eight-hour refresher covers the annual requirement and keeps it on ammonia: properties, detection, PPE, isolation and release response.`,
      topics: ["Anhydrous ammonia properties and health effects", "1910.111 storage and handling", "Detection and alarms", "Respirators and chemical protective clothing", "Emergency isolation and shutdown", "Release response tactics"],
      who: "Refrigeration technicians and operators on the facility's response team.",
    },
    {
      id: 1056, short: "Gas Detection",
      summary: "Fixed and portable ammonia detection, plus multi-gas monitoring.",
      body: `Detection is the first line of defense in an ammonia system. This two-hour course covers how sensors work, calibration, alarm set points and what readings mean.`,
      topics: ["Fixed and portable detectors", "Calibration and bump tests", "Alarm set points", "Machinery room monitoring", "Confined spaces"],
      who: "Technicians, operators and maintenance staff.",
    },
    {
      id: 593, short: "Incident Command",
      summary: "Incident command for the person who takes charge of an ammonia release.",
      body: `When an ammonia release goes beyond incidental, someone has to command it. This eight-hour course trains supervisors to set up incident command and work with the fire department.`,
      topics: ["Incident command structure", "Size-up and isolation zones", "Entry teams and backup", "Coordination with fire services"],
      who: "Refrigeration supervisors, plant managers and response team leaders.",
    },
    {
      id: 1099, short: "Awareness",
      summary: "Awareness training for everyone else in the building.",
      body: `Warehouse, production and office staff need to know what an ammonia alarm means and what to do: get out, go upwind and report.`,
      topics: ["Recognizing an ammonia release", "Alarms and evacuation", "Going upwind", "Reporting"],
      who: "Warehouse, production, sanitation and office staff.",
    },
    {
      id: 574, short: "Responder Refresher",
      summary: "Annual refresher for responders and incident commanders.",
      body: `For responders who need an annual refresher with incident command review.`,
      topics: ["ICS review", "Responder levels", "PPE review", "Lessons learned"],
      who: "Response team members and incident commanders.",
    },
  ],

  guides: [
    {
      slug: "anhydrous-ammonia-hazards",
      title: "Anhydrous ammonia hazards every technician should know",
      description: "The numbers, the behavior and the injuries that make ammonia worth respecting.",
      date: "2026-10-25",
      courses: [598, 1056],
      body: `Anhydrous ammonia is an efficient, widely used refrigerant. It's also toxic, corrosive and, in the right mix, flammable.

## The numbers

| Measure | Value |
|---|---|
| Odor threshold | About 5 ppm, often lower |
| OSHA PEL (8-hour TWA) | 50 ppm |
| NIOSH REL (TWA / short-term) | 25 ppm / 35 ppm |
| IDLH | 300 ppm |
| Flammable range in air | About 15% to 28% |

## How it behaves

- **Lighter than air** as a pure dry gas, so it rises. But a release of liquid makes a cold, dense aerosol cloud that can hug the ground.
- **Hygroscopic.** It seeks moisture in eyes, throat, lungs and sweaty skin, and forms corrosive ammonium hydroxide.
- **Liquid ammonia boils at about −28 °F (−33 °C).** Liquid contact causes frostbite-like burns on top of chemical burns.

## Warning signs

Ammonia's smell warns early, but **olfactory fatigue** sets in and you stop noticing it. Trust detectors, not your nose.

## Injuries

Eye damage, airway burns and lung injury can happen fast at high concentrations. First aid is flushing with water for at least 15 minutes and getting medical help.

## Controls

Machinery room ventilation, fixed detection with alarms, emergency shutdown, labeled valves and piping, proper PPE and trained people.

{{buy:598}}`,
    },
    {
      slug: "psm-rmp-hazwoper-ammonia",
      title: "PSM, RMP and HAZWOPER: how ammonia facilities fit together",
      description: "Three rule sets, one refrigeration system. How they overlap and what each expects for training.",
      date: "2026-10-25",
      courses: [598, 593],
      body: `Ammonia refrigeration facilities often fall under three different programs. They overlap, and good training covers all three.

## Process Safety Management (OSHA 1910.119)

Applies when a process holds **more than 10,000 pounds** of anhydrous ammonia. PSM is about preventing releases: process safety information, hazard analysis, operating procedures, training, mechanical integrity and management of change.

**Training:** operators trained on operating procedures, with refresher training at least every three years.

## Risk Management Program (EPA 40 CFR Part 68)

Also triggered at **more than 10,000 pounds** of ammonia. RMP adds off-site consequence analysis, an emergency response program and public reporting.

**Training:** emergency response training if your employees respond, and coordination with local responders.

## HAZWOPER (OSHA 1910.120(q))

Applies whenever employees are expected to respond to a release, **regardless of quantity**.

**Training:** by responder level, with annual refresher training or demonstrated competency.

## Below 10,000 pounds

Smaller systems are generally outside PSM and RMP, but the EPA Clean Air Act general duty clause and OSHA general duty clause still apply. Industry guidance such as IIAR standards is widely used as good practice.

## Putting it together

| Program | Focus | Typical training |
|---|---|---|
| PSM | Prevent releases | Operating procedures, every 3 years |
| RMP | Plan for consequences | Emergency response, coordination |
| HAZWOPER (q) | Respond safely | Responder level, annually |`,
    },
    {
      slug: "first-ten-minutes-of-an-ammonia-release",
      title: "The first ten minutes of an ammonia release",
      description: "What happens in the opening minutes decides whether a leak stays small.",
      date: "2026-10-25",
      courses: [1099, 593, 598],
      body: `Every facility's emergency response plan is different. This is the general shape of a good first ten minutes.

## Minute 0–2: alarm and evacuate

- The ammonia detector alarms, or someone smells ammonia.
- Everyone not on the response team **evacuates upwind and uphill**, to the assembly point.
- Someone calls the emergency number and the plant's responders.

## Minute 2–5: shut down and isolate

- Trained staff trigger the **emergency shutdown** from outside the affected area if possible.
- The machinery room ventilation runs at emergency rate.
- An incident commander takes charge and sets an isolation zone.

## Minute 5–10: size up

- Where is the leak? How big? Is liquid or vapor coming out?
- What do the detectors read at the perimeter?
- Is anyone missing or hurt?
- Is the release growing or controlled?

## Then decide

Only trained, properly equipped responders make entry. For large releases that typically means SCBA and chemical protective clothing, often Level A for high concentrations, with a backup team ready.

## Never

- Enter a cloud without SCBA
- Spray water into a pool of liquid ammonia, which increases vaporization (water fog to knock down vapor is a separate tactic, used deliberately)
- Re-enter after the alarm clears without confirming readings

{{buy:593}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(598)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">${h.logo}</a><p>Ammonia refrigeration HAZWOPER training from Industrial Certified Training, delivered on hazwoper-osha.com.</p></div>
<div><h4>Courses</h4>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h4>Contact</h4><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="flake" aria-hidden="true">❄</div><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Ammonia releases <b>don't wait.</b></h1>
<p class="hero-lede">HAZWOPER training for ammonia refrigeration technicians and the teams around them. Online, self-paced, ammonia-focused.</p>
<div class="hero-cta">${h.buy(598, "Enroll · $109.99")}<a class="btn btn-alt" href="/guides/first-ten-minutes-of-an-ammonia-release">The first ten minutes</a></div>
</div>
</div></section>

<section class="sec"><div class="wrap">
<div class="nums">
<div><b>5</b><span>ppm: about where most people smell it</span></div>
<div><b>50</b><span>ppm: OSHA 8-hour exposure limit</span></div>
<div><b>300</b><span>ppm: immediately dangerous to life or health</span></div>
<div><b>−28°F</b><span>boiling point of liquid ammonia</span></div>
</div></div></section>

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
