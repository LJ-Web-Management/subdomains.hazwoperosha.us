// utility.hazwoperosha.us: HAZWOPER for gas, pipeline and electric utility crews. Hi-vis.
export default {
  title: "HAZWOPER Training for Utility & Pipeline Crews | Industrial Certified Training",
  description: "HAZWOPER and emergency response training for gas, pipeline and electric utility crews: 40-hour utility/pipeline, gas detection, incident command, awareness and annual refreshers.",
  theme: "#0f1a2e",
  fonts: "family=Saira+Condensed:wght@600;700;800&family=Inter:wght@400;500;600",
  coursesTagline: "HAZWOPER and response training built for crews who work the line.",
  guidesTagline: "Line strikes, unified command and where HAZWOPER fits in utility work.",

  courses: [
    {
      id: 592, short: "40 Hr Utility / Pipeline",
      summary: "The 40-hour HAZWOPER for utility and pipeline crews who respond to releases on the line.",
      body: `Utility and pipeline crews respond to releases that are someone else's emergency and their job to fix. This 40-hour track under 29 CFR 1910.120 covers line strikes, leaks, contaminated rights-of-way and working inside an incident command system with the fire department.`,
      topics: ["Natural gas, liquids and other pipeline products", "Line strike and leak response", "Incident command and unified command", "Contaminated excavations and rights-of-way", "Flammable and toxic atmosphere monitoring", "PPE and decon for field crews"],
      who: "Gas and pipeline field crews, damage-prevention staff, electric utility crews and contractors.",
    },
    {
      id: 1056, short: "Gas Detection",
      summary: "Combustible gas indicators, multi-gas meters and PIDs for utility work.",
      body: `Reading a combustible gas indicator correctly can be the difference between a controlled leak and an explosion. Two hours on sensors, calibration and readings in vaults, manholes and excavations.`,
      topics: ["% LEL vs % gas", "Multi-gas and CGI instruments", "Bump test and calibration", "Vaults, manholes and excavations", "Alarm set points"],
      who: "Leak investigators, field crews and confined space attendants.",
    },
    {
      id: 593, short: "Incident Command",
      summary: "Incident command for utility supervisors who'll work in unified command.",
      body: `At a utility emergency, the fire department usually commands and the utility joins unified command. This eight-hour course prepares supervisors for that role.`,
      topics: ["ICS and unified command", "The utility's role at the command post", "Hazard size-up", "Isolation and shutdown decisions", "Termination and critique"],
      who: "Utility supervisors, emergency coordinators and on-call managers.",
    },
    {
      id: 1099, short: "Awareness",
      summary: "Awareness-level training for meter readers, locators and office field staff.",
      body: `People who aren't on response crews still find leaks and spills. Four hours on recognizing, isolating and reporting.`,
      topics: ["Recognizing a release", "Getting clear", "Notifying", "Keeping the public back"],
      who: "Meter readers, locators, inspectors and customer service field staff.",
    },
    {
      id: 595, short: "8 Hr Refresher",
      summary: "The annual 8-hour HAZWOPER refresher for site workers.",
      body: `Keep your 40-hour current with eight hours of refresher training a year.`,
      topics: ["Hazard review", "Monitoring and PPE review", "Case studies"],
      who: "Crews with a current 40- or 24-hour certificate.",
    },
    {
      id: 574, short: "Responder Refresher",
      summary: "Annual refresher for responders and incident commanders.",
      body: `For crews and supervisors who respond to emergencies and need a refresher with incident command review.`,
      topics: ["ICS review", "Responder levels", "Lessons learned"],
      who: "Emergency responders and incident commanders.",
    },
  ],

  guides: [
    {
      slug: "responding-to-a-gas-line-strike",
      title: "Responding to a gas line strike",
      description: "An excavator hits a gas line. What the first crew on scene should and shouldn't do.",
      date: "2026-10-25",
      courses: [592, 1056],
      body: `A third-party excavator hits a gas service line. Gas is blowing. Your crew is first on scene. Every utility has its own procedures, so follow yours. These principles are common to most.

## Do

1. **Call 911** and your gas control or dispatch.
2. **Evacuate** people from nearby buildings and keep the public back, upwind.
3. **Eliminate ignition sources.** No smoking, no starting vehicles in the area, no operating switches, doorbells or phones close to the leak.
4. **Monitor** with a combustible gas indicator at the perimeter and nearby buildings, especially basements.
5. **Let qualified crews control the gas** by closing valves or squeezing off the line, following company procedures.

## Don't

- Try to plug or bury the leak, or let the excavator operator do it
- Shut off equipment near the leak if that could cause a spark. Leave it running and walk away.
- Assume outdoor gas stays outside. It migrates through soil and into buildings along utility trenches.
- Go back in until readings confirm it's safe

## Afterward

Report the damage under your state's one-call rules. Most strikes are preventable: call 811 before digging, wait for the locates and hand-dig near marked lines.

{{buy:592}}`,
    },
    {
      slug: "where-hazwoper-fits-in-utility-work",
      title: "Where HAZWOPER fits in utility work",
      description: "Not every leak call is a HAZWOPER response. Here's how utilities usually draw the line.",
      date: "2026-10-25",
      courses: [592, 1099, 593],
      body: `Utilities have their own federal safety rules (for gas pipelines, DOT's 49 CFR Parts 192 and 195, including operator qualification). HAZWOPER applies alongside them in specific situations.

## Usually not HAZWOPER

- Routine leak surveys and repairs handled under normal operating procedures
- Incidental releases that the crew can control without significant hazard

## Often HAZWOPER

- **Emergency response** to a release beyond incidental, for example a large gas release, fire, or liquids spill reaching waterways (1910.120(q))
- **Cleanup** of contaminated soil or water after a release, such as a liquids pipeline spill
- **Work in contaminated rights-of-way**, for example former manufactured gas plant (MGP) sites

## Typical training by role

| Role | Training |
|---|---|
| Meter readers, locators, inspectors | [[1099]] |
| Field crews who respond to emergencies | [[592]] and annual refresher |
| Supervisors and on-call managers | [[593]] |
| Leak investigators | Gas detection: [[1056]] |

## Operator qualification is separate

DOT operator qualification covers specific covered tasks on pipelines. It doesn't replace HAZWOPER, and HAZWOPER doesn't replace it.`,
    },
    {
      slug: "unified-command-with-the-fire-department",
      title: "Working in unified command with the fire department",
      description: "At a utility emergency, you'll rarely be in charge alone. How to be useful at the command post.",
      date: "2026-10-25",
      courses: [593, 574],
      body: `When a gas main fails or a substation burns, the fire department usually arrives first and establishes incident command. The utility's job is to bring the knowledge only it has.

## What unified command means

Agencies and organizations with responsibility for the incident share command and agree on objectives. The fire department leads life safety, the utility leads controlling its system, and police lead traffic and perimeter.

## What the utility representative brings

- **System knowledge:** where the valves are, what feeds the area and what else will be affected by a shutdown
- **Monitoring:** combustible gas readings and their meaning
- **Time estimates:** how long to isolate, purge and restore
- **Resources:** crews, equipment and contractors on the way

## At the command post

1. Check in with the incident commander and identify yourself and your role.
2. Share what you know and what you don't. Give clear estimates.
3. Agree on objectives and who does what.
4. Keep your crews inside the incident's safety rules.

## After

Join the critique. Utilities and fire departments that train together respond better. Many hold joint tabletop exercises every year.

{{buy:593}}`,
    },
  ],

  shell({ body, h }) {
    return `<div class="tape" aria-hidden="true"></div>
${h.header(592)}
<main>${body}</main>
<footer class="foot"><div class="tape" aria-hidden="true"></div><div class="wrap foot-in">
<div><a class="logo" href="/">${h.logo}</a><p>Utility and pipeline HAZWOPER training from Industrial Certified Training, delivered on hazwoper-osha.com.</p></div>
<div><h4>Courses</h4>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h4>Contact</h4><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="wrap hero-in">
<div>
<h1>Strike.<br>Leak.<br><span>Respond.</span></h1>
<p class="hero-lede">HAZWOPER for gas, pipeline and electric utility crews who respond to releases on the line.</p>
<div class="hero-cta">${h.buy(592, "Enroll the crew · $249.99")}<a class="btn btn-alt" href="/guides/responding-to-a-gas-line-strike">Line strike guide</a></div>
</div>
</div></section>

<section class="band"><div class="wrap band-in">
<span>Call 911</span><span>Evacuate</span><span>No ignition</span><span>Monitor</span><span>Isolate</span>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Crew <span>courses</span></h2>
<div class="cgrid">${courses.map((c) => `<article class="cc"><p class="meta">${esc(c.duration)} · #${c.id}</p><h3><a href="${c.url}">${esc(c.name)}</a></h3><p>${esc(c.summary)}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Field <span>guides</span></h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
