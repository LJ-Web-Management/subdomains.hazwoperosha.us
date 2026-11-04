// fire-departments.hazwoperosha.us: hazmat and HAZWOPER training for fire departments. Firehouse red and gold leaf.
export default {
  title: "Hazmat & HAZWOPER Training for Fire Departments | Industrial Certified Training",
  description: "HAZWOPER and hazmat training for fire departments: 40-hour fire/hazmat, incident command, responder refresher, awareness, gas detection and decon, with guides to responder levels and decon.",
  theme: "#a4161a",
  fonts: "family=Cinzel:wght@600;700;800&family=Lato:wght@400;700;900",
  hero: {
    title: "Ready for the <em>call.</em>",
    lede: "Hazmat and HAZWOPER training for career and volunteer departments: awareness for every member, command for officers, and the 40-hour for hazmat teams.",
    cta: [589, "40 Hr Fire / Hazmat · $249.99"],
    alt: ["/guides/hazwoper-for-fire-departments", "Which level?"],
  },
  coursesTagline: "Hazmat training for firefighters, officers and hazmat teams.",
  guidesTagline: "Responder levels, decon and keeping the annual refresher manageable.",

  courses: [
    { id: 1099, short: "Awareness",
      summary: "Awareness level training for every member of the department.",
      body: `Every firefighter may arrive first at a hazmat call. Four hours on recognizing, isolating and notifying.`,
      topics: ["Recognizing hazmat", "Placards and the ERG", "Isolation and denial of entry", "Calling for resources"],
      who: "All members, career and volunteer." },
    { id: 589, short: "40 Hr Fire / Hazmat",
      summary: "The 40-hour HAZWOPER for fire and hazmat teams.",
      body: `For teams whose work extends into post-emergency cleanup or remediation support.`,
      topics: ["Response vs cleanup", "Hazmat branch operations", "Chemical protective clothing and SCBA", "Detection", "Technical and mass decon"],
      who: "Hazmat team members and technicians." },
    { id: 593, short: "Incident Command",
      summary: "Incident command for hazmat incidents.",
      body: `Eight hours on taking command of a hazmat incident under 1910.120(q)(3).`,
      topics: ["ICS and the hazmat branch", "Size-up", "Entry and backup teams", "Safety officer", "Termination"],
      who: "Company officers and chiefs." },
    { id: 574, short: "Responder Refresher",
      summary: "The annual hazmat refresher with incident command review.",
      body: `Eight hours of annual refresher training for responders and commanders.`,
      topics: ["ICS review", "Responder levels", "PPE review", "Lessons learned"],
      who: "All hazmat-trained members." },
    { id: 1056, short: "Gas Detection",
      summary: "Multi-gas meters and PIDs on scene.",
      body: `Two hours on the monitors your rigs carry: what they read and what the numbers mean.`,
      topics: ["O2, LEL, CO, H2S", "PIDs", "Bump tests", "Interpreting readings"],
      who: "Engine and truck companies." },
    { id: 584, short: "Decontamination",
      summary: "A 20-minute decon module.",
      body: `Decon stations and doffing, in 20 minutes.`,
      topics: ["Decon stations", "Doffing", "Equipment decon"],
      who: "All members." },
  ],

  guides: [
    {
      slug: "hazwoper-for-fire-departments",
      title: "HAZWOPER for fire departments: which level does each member need?",
      description: "OSHA's responder levels, applied to a fire department roster.",
      date: "2026-10-25",
      courses: [1099, 589, 593],
      body: `Fire departments are emergency responders under HAZWOPER paragraph (q). In state-plan states the state rule applies to public employees. In federal OSHA states, EPA's 40 CFR Part 311 applies the same requirements to public employees. Volunteer coverage depends on the state.

Many departments also train to NFPA's hazmat competency standard (now NFPA 470), which lines up with OSHA's levels.

## Matching levels to roles

| Role | OSHA level | Course |
|---|---|---|
| Every member | Awareness, and usually operations | [[1099]] |
| Engine and truck companies | Operations: defensive actions, isolation, decon support | Department operations training |
| Hazmat team | Technician | [[589]] plus team training |
| Company officers and chiefs | Incident commander | [[593]] |

## Operations level

OSHA requires at least 8 hours of training, or demonstrated competency, for first responders at the operations level. Most departments deliver it in-house with hands-on drills.

## Annual refresher

Responders need annual refresher training, or a documented demonstration of competency, under (q)(8). See [[574]].

{{buy:589}}`,
    },
    {
      slug: "decon-on-the-fireground",
      title: "Decon on the fireground: gross, technical and mass decon",
      description: "Three kinds of decon, when each is used and who runs them.",
      date: "2026-10-25",
      courses: [584, 589],
      body: `Every hazmat incident needs a decon plan before anyone enters the hot zone.

## Gross decon

The fast first step: removing most contamination, usually by flushing with water and removing outer clothing. It's used for emergency decon of injured or exposed people and as the first station on a full line.

## Technical decon

A planned, multi-station line for entry teams in chemical protective clothing. Stations typically include equipment drop, wash, rinse, suit removal, SCBA removal and a final wash. The order keeps contamination moving away from the clean side.

## Mass decon

For large numbers of exposed civilians. Engines are often parked to form a corridor with fog streams (a ladder pipe or hose lines) so people can walk through, remove clothing and rinse. Speed matters more than perfection.

## Decon team safety

The decon team works in the warm zone and needs PPE, usually one level below the entry team, plus its own decon before leaving.

## Plan it before entry

Under HAZWOPER, the decon procedures must be in place before entry. No entry without a decon line ready.

{{buy:584}}`,
    },
    {
      slug: "annual-hazmat-refresher-fire",
      title: "Keeping the annual hazmat refresher manageable",
      description: "Meeting (q)(8) every year without burning a whole shift. Practical approaches for departments.",
      date: "2026-10-25",
      courses: [574, 1056],
      body: `HAZWOPER (q)(8) requires annual refresher training "of sufficient content and duration to maintain their competencies," or a demonstration of competency each year, documented.

## Mix and match

| Method | Good for |
|---|---|
| Online refresher | Regulations, chemistry, ICS review. Done on shift between calls |
| Company drills | PPE donning, decon setup, meter use |
| Multi-company exercises | Command, hazmat branch, mass decon |
| Post-incident critiques | Real lessons from real calls |

## A sample year

- **Quarter 1:** online refresher such as [[574]]
- **Quarter 2:** meter and detection drills, see [[1056]]
- **Quarter 3:** decon drill
- **Quarter 4:** tabletop or full-scale exercise with mutual aid

## Document it

For each member: date, topic, hours or competency demonstrated, and instructor. When OSHA, the state or your insurer asks, records are the proof.`,
    },
  ],
};
