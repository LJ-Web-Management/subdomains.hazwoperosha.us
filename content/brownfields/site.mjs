// brownfields.hazwoperosha.us: HAZWOPER for brownfield redevelopment. Concrete-to-green urban renewal.
export default {
  brand: "Brownfield Build",
  logo: `brownfield<span>/</span>build`,
  title: "HAZWOPER for Brownfield Redevelopment | Brownfield Build",
  description: "HAZWOPER training for brownfield redevelopment: construction on contaminated sites, remediation, site characterization, supervisor and gas detection courses, with guides to ESAs and vapor intrusion.",
  theme: "#3f6b3f",
  fonts: "family=DM+Serif+Display:ital@0;1&family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#8a8f93"/><rect x="16" width="16" height="32" fill="#3f6b3f"/><path d="M6 26V14h6v12M20 26V10h6v16" fill="#fff"/></svg>`,
  hero: {
    title: "From brownfield <em>to building.</em>",
    lede: "Redevelopment turns contaminated land into housing, parks and jobs. The crews who dig the first foundation need HAZWOPER training.",
    cta: [581, "24-Hour HAZWOPER · $169.99"],
    alt: ["/guides/what-makes-a-site-a-brownfield", "What's a brownfield?"],
  },
  coursesTagline: "Training for developers' crews, remediation contractors and site leads.",
  guidesTagline: "ESAs, soil management and vapor intrusion for redevelopment teams.",

  courses: [
    { id: 581, short: "24-Hour HAZWOPER",
      summary: "The 24-hour HAZWOPER for limited-exposure staff.",
      body: `For surveyors, inspectors and trades who are on site occasionally or in monitored areas.`,
      topics: ["Who qualifies", "Hazard recognition", "PPE basics"],
      who: "Surveyors, inspectors and visiting trades." },
    { id: 597, short: "Supervisor",
      summary: "The 8-hour supervisor course for site leads.",
      body: `For foremen and superintendents directing work on contaminated ground.`,
      topics: ["Safety program", "PPE decisions", "Monitoring", "Site control"],
      who: "Foremen and superintendents." },
    { id: 1056, short: "Gas Detection",
      summary: "Gas detection for excavations and below-grade work.",
      body: `Two hours on monitoring for vapors, methane and low oxygen.`,
      topics: ["Sensors", "Calibration", "Excavations", "Alarm set points"],
      who: "Crews working below grade." },
  ],

  feature: (h) => `<section class="sec split"><div class="split-in"><div class="before"><span>BEFORE</span><b>Vacant lot. Stained soil. Old tanks.</b></div><div class="after"><span>AFTER</span><b>Housing, parks and jobs.</b></div></div></section>`,

  guides: [
    {
      slug: "what-makes-a-site-a-brownfield",
      title: "What makes a site a brownfield?",
      description: "The definition, the common contaminants and why redevelopment crews need HAZWOPER.",
      date: "2026-10-25",
      courses: [],
      body: `EPA defines a brownfield as a property whose expansion, redevelopment or reuse may be complicated by the presence or potential presence of a hazardous substance, pollutant or contaminant.

In plain terms: land that's probably contaminated, which makes building on it harder.

## Common brownfields

- Former gas stations and auto repair shops
- Old factories, foundries and rail yards
- Dry cleaners
- Former landfills and dumps
- Abandoned industrial and commercial buildings

## Common contaminants

Petroleum, chlorinated solvents, metals like lead and arsenic, PCBs, PAHs, and asbestos in old buildings.

## Why crews need HAZWOPER

When redevelopment includes digging up, moving or managing contaminated soil, or cleaning up under a state or federal program, the work is often a hazardous waste operation. Construction crews doing it fall under 29 CFR 1926.65.

## How projects usually run

1. Phase I and Phase II environmental site assessments
2. A cleanup or soil management plan, often under a state voluntary cleanup program
3. Remediation, sometimes combined with construction
4. Engineering controls such as caps and vapor barriers built into the new development
`,
    },
    {
      slug: "phase-i-and-phase-ii-esas",
      title: "Phase I and Phase II environmental site assessments",
      description: "What ESAs are, and what they tell field crews about the hazards they'll find.",
      date: "2026-10-25",
      courses: [],
      body: `Before buying or redeveloping a property, buyers and lenders commission environmental site assessments.

## Phase I ESA

A Phase I looks for **recognized environmental conditions** without sampling. It reviews historical records, aerial photos, regulatory databases and interviews, and includes a site walk. Most are done under ASTM's Phase I standard (E1527) to support legal protections for buyers under federal law.

## Phase II ESA

If the Phase I finds concerns, a Phase II samples soil, groundwater, soil vapor or building materials to confirm whether contamination is there and how much.

## Why crews should read them

The ESAs tell you:

- **What contaminants** may be present, and where
- **Where the hot spots are**: old tanks, stained areas, former process areas
- **What's been found in samples**, which drives monitoring and PPE

Ask the project team for the ESA summaries and the site health and safety plan before mobilizing.

## Surprises still happen

ESAs sample a small fraction of a site. Unknown tanks, drums and buried debris turn up during excavation. That's why crews need training to recognize them and stop work. See [[581]].`,
    },
    {
      slug: "vapor-intrusion-and-new-buildings",
      title: "Vapor intrusion and new buildings on brownfields",
      description: "Contaminant vapors can move from soil into buildings. How redevelopment projects design for it.",
      date: "2026-10-25",
      courses: [1056, 597],
      body: `Volatile contaminants in soil and groundwater, such as petroleum and chlorinated solvents, can move up as vapor and into buildings. That's **vapor intrusion**, and it's one of the main long-term issues on redeveloped brownfields.

## How projects address it

- **Vapor barriers**: membranes installed under the slab
- **Sub-slab depressurization**: piping and fans that vent vapor from beneath the building
- **Passive venting** layers that can be made active later
- **Indoor air and sub-slab monitoring** after construction

## For construction crews

Installing these systems usually happens while the crew is working in or above contaminated soil. That means:

- Monitoring in excavations and utility trenches, where vapors collect. See [[1056]].
- PPE and action levels from the site health and safety plan
- Care not to puncture or damage membranes, which can compromise the system

## For site leads

Membranes, seams and penetrations get inspected before the slab is poured. Coordinate inspections, and document everything for the regulator. Site leads directing this work need supervisor training ([[597]]).`,
    },
  ],
};
