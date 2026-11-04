// demolition.hazwoperosha.us: HAZWOPER for demolition on contaminated sites. Brutalist concrete + wrecking ball.
export default {
  title: "HAZWOPER for Demolition Crews | Contaminated Buildings & Sites | Industrial Certified Training",
  description: "HAZWOPER training for demolition crews on contaminated sites: 40-hour construction, 24-hour, supervisor, gas detection, PPE and decon, with guides to pre-demolition surveys and dust control.",
  theme: "#2b2b2b",
  fonts: "family=Bebas+Neue&family=Inter:wght@400;500;600;700",
  hero: {
    title: "Tear it down. <span>Not your lungs.</span>",
    lede: "Old plants and contaminated buildings hide chemicals, residues and impacted soil. HAZWOPER training for the crews who take them apart.",
    cta: [588, "40 Hr Construction · $249.99"],
    alt: ["/guides/pre-demolition-surveys", "Pre-demo surveys"],
  },
  heroArt: `<div class="ball" aria-hidden="true"><i></i></div>`,
  coursesTagline: "HAZWOPER courses for demolition contractors.",
  guidesTagline: "Surveys, hazardous materials removal and dust control.",

  courses: [
    { id: 588, short: "40 Hr Construction",
      summary: "The 40-hour HAZWOPER for construction and demolition on contaminated sites.",
      body: `Demolition at a contaminated industrial site is construction work under 29 CFR 1926.65 when it's part of a cleanup. This 40-hour course is built for construction crews.`,
      topics: ["1926.65 on demolition projects", "Contaminated structures and soil", "Equipment decon", "Dust and vapor control", "Working under a HASP"],
      who: "Demolition laborers, operators and foremen." },
    { id: 581, short: "24-Hour HAZWOPER",
      summary: "The 24-hour HAZWOPER for limited-exposure crew members.",
      body: `For crew members on site occasionally or only in monitored areas.`,
      topics: ["Who qualifies", "Hazard recognition", "PPE basics"],
      who: "Surveyors, spotters and support staff." },
    { id: 597, short: "Supervisor",
      summary: "The 8-hour supervisor course for demo foremen and superintendents.",
      body: `Eight more hours for those who direct crews on hazardous waste sites.`,
      topics: ["Safety program", "PPE decisions", "Monitoring", "Site control"],
      who: "Foremen and superintendents." },
    { id: 1056, short: "Gas Detection",
      summary: "Monitoring pits, sumps, tanks and basements before and during demolition.",
      body: `Old plants have pits, sumps and tanks with residues and vapors. Two hours on gas detection.`,
      topics: ["O2, LEL, H2S, CO", "PIDs", "Confined spaces"],
      who: "Crews working below grade or near tanks." },
    { id: 585, short: "PPE Levels A–D",
      summary: "A 15-minute module on PPE levels.",
      body: `What each level of protection includes.`,
      topics: ["Levels A, B, C and D"],
      who: "New crew members." },
    { id: 584, short: "Decontamination",
      summary: "A 20-minute decon module.",
      body: `Decon for people and equipment.`,
      topics: ["Decon stations", "Doffing", "Equipment"],
      who: "All crew members." },
  ],

  guides: [
    {
      slug: "pre-demolition-surveys",
      title: "Pre-demolition surveys and hazardous materials removal",
      description: "What has to come out of a building before the excavator goes in.",
      date: "2026-10-25",
      courses: [588, 597],
      body: `Before a building comes down, hazardous materials have to be found and removed. Missing them puts the crew at risk and can turn a whole debris pile into hazardous waste.

## Required by law

**Asbestos:** the federal asbestos NESHAP (40 CFR Part 61, Subpart M) requires a thorough inspection for asbestos before demolition of regulated facilities, and removal of regulated asbestos-containing material first.

## Commonly found

| Material | Where |
|---|---|
| Asbestos | Insulation, floor tile, roofing, transite, mastics |
| Lead paint | Steel structures, older interiors |
| PCBs | Light ballasts, transformers, some caulks and paints |
| Mercury | Thermostats, switches, fluorescent lamps |
| Refrigerants | HVAC and refrigeration equipment |
| Process residues | Tanks, pipes, pits and sumps in industrial buildings |
| Universal waste | Lamps and batteries |

## Separate rules apply

Asbestos (29 CFR 1926.1101) and lead (1926.62) have their own OSHA standards and training. HAZWOPER applies when the demolition is part of a hazardous waste cleanup, or when crews handle hazardous waste and process residues on a contaminated site.

## Order of work

1. Survey
2. Remove and dispose of hazardous materials
3. Clean and decontaminate process equipment
4. Demolish
5. Manage soil and debris under the site plan

{{buy:588}}`,
    },
    {
      slug: "demolition-dust-control",
      title: "Dust control on contaminated demolition sites",
      description: "On contaminated sites, dust carries contaminants to workers and neighbors. Controls that work.",
      date: "2026-10-25",
      courses: [588, 1056],
      body: `On a contaminated site, dust isn't just a nuisance. It can carry lead, PCBs, metals and other contaminants into workers' lungs and across the fence line.

## Controls

- **Water:** misting cannons and hose lines at the point of demolition, wetting debris before loading
- **Sequencing:** remove contaminated materials before structural demo
- **Limit drop heights** when loading trucks
- **Cover stockpiles** and truck loads
- **Stop work** in high winds
- **Track-out control** with wash stations at the exit

## Monitoring

Many contaminated demo projects run **perimeter air monitoring** with dust monitors at the fence line and action levels that trigger more controls or a work stoppage. Personal sampling checks worker exposure.

## For crews

- Respirators as the plan requires, with fit tests
- Disposable coveralls where contamination is significant
- Decon before breaks and before leaving the site
- No eating, drinking or smoking in the work area`,
    },
    {
      slug: "demolishing-old-industrial-plants",
      title: "Demolishing old industrial plants: what you'll find",
      description: "Pits, tanks, residue-filled pipes and stained floors. Hazards specific to industrial teardown.",
      date: "2026-10-25",
      courses: [1056, 584],
      body: `Old plants are full of surprises. Process equipment may never have been fully emptied, and floors and soils can be saturated with decades of leaks.

## Common hazards

- **Residues in pipes and tanks**: acids, solvents, oils and sludges
- **Pits, sumps and trenches** with liquids and vapors
- **Contaminated floors and soils** under equipment
- **Underground tanks** that aren't on the drawings
- **Electrical and stored energy** in equipment that wasn't de-energized

## Before cutting

1. Confirm lines and vessels are empty, flushed and isolated
2. Test atmospheres in pits, sumps and tanks. See [[1056]].
3. Use hot work permits for torch cutting, with LEL monitoring
4. Mark unknown pipes and containers as hazardous until identified

## When you find something unexpected

Stop work in the area, keep the crew back and notify the supervisor and site safety officer. Unknown liquids and drums get characterized before anything else happens.

{{buy:1056}}`,
    },
  ],
};
