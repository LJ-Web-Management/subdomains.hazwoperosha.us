// washington.hazwoperosha.us: HAZWOPER in Washington State (WAC 296-843). Pacific Northwest evergreen.
export default {
  brand: "Evergreen HAZWOPER",
  logo: `<span class="tree">▲</span> Evergreen HAZWOPER`,
  title: "HAZWOPER Training in Washington State | WAC 296-843 | Evergreen HAZWOPER",
  description: "HAZWOPER training for Washington State workers under WAC 296-843: 40-hour, 24-hour, remediation, refreshers and gas detection, with guides to dangerous waste and MTCA cleanups.",
  theme: "#1f3b2d",
  fonts: "family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#e6ece6"/><path d="M16 3l-7 10h4l-6 8h5l-5 7h18l-5-7h5l-6-8h4z" fill="#1f3b2d"/></svg>`,
  hero: {
    title: "HAZWOPER for the <em>Evergreen State.</em>",
    lede: "Washington writes its own HAZWOPER rule and its own dangerous waste rules. Training for crews from Puget Sound to the Tri-Cities.",
    cta: [587, "40-hour HAZWOPER · $249.99"],
    alt: ["/guides/wac-296-843-washington-hazwoper", "About WAC 296-843"],
  },
  heroArt: `<div class="fog" aria-hidden="true"></div>`,
  coursesTagline: "HAZWOPER courses for Washington cleanup, industrial and response crews.",
  guidesTagline: "WAC 296-843, dangerous waste and MTCA cleanups.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER",
      summary: "The 40-hour initial HAZWOPER, with the same hours Washington requires.",
      body: `Washington's HAZWOPER rule, WAC 296-843, keeps the federal training hours. This is the 40-hour initial course for general site workers.`,
      topics: ["Hazard recognition", "Site safety plans", "PPE and respirators", "Monitoring", "Decon", "Emergencies"],
      who: "Hazardous waste site workers in Washington." },
    { id: 581, short: "24-Hour HAZWOPER",
      summary: "The 24-hour HAZWOPER for occasional and low-exposure workers.",
      body: `For workers on site only occasionally or in monitored low-exposure areas.`,
      topics: ["Who qualifies", "Hazard recognition", "PPE basics"],
      who: "Surveyors, inspectors and support staff." },
    { id: 595, short: "8-Hour Refresher",
      summary: "The standard annual 8-hour refresher.",
      body: `Eight hours of annual refresher training.`,
      topics: ["Hazard review", "PPE and monitoring", "Case studies"],
      who: "Certified HAZWOPER workers." },
    { id: 1056, short: "Gas Detection",
      summary: "Gas detection for excavations, vaults and confined spaces.",
      body: `Two hours on multi-gas meters and PIDs.`,
      topics: ["Sensors", "Calibration", "Alarm set points", "Confined spaces"],
      who: "Field crews who carry monitors." },
  ],

  guides: [
    {
      slug: "wac-296-843-washington-hazwoper",
      title: "WAC 296-843: Washington's HAZWOPER rule",
      description: "Washington writes its own HAZWOPER rule. What's the same as federal OSHA and what to watch for.",
      date: "2026-10-25",
      courses: [587],
      body: `Washington is a state-plan state. Its Department of Labor and Industries (L&I), through the Division of Occupational Safety and Health (DOSH), enforces workplace safety. Washington's HAZWOPER rule is **chapter 296-843 WAC**.

## What's the same

The training structure follows the federal rule:

- 40 hours plus 3 days of supervised field experience for general site workers
- 24 hours plus 1 day for limited-exposure workers
- 8 additional hours for supervisors
- 8 hours of refresher training every year
- Emergency response training by responder level

## What's different

- **Numbering and wording.** Washington organized the rule its own way, so citations look different.
- **Related rules.** Respiratory protection, confined spaces and other related standards are in Washington's own chapters.
- **Public employees.** As a state plan, Washington covers state and local government workers.

## Training approach

A federal 40-hour course covers the same core training. For the annual refresher, [[595]] covers the federal core; brief your crew on the WAC differences. Keep certificates with your company's written HAZWOPER program, since L&I inspectors will want to see both.

{{buy:587}}`,
    },
    {
      slug: "dangerous-waste-in-washington",
      title: "Dangerous waste in Washington: a broader definition",
      description: "Washington calls it 'dangerous waste,' and it covers more than federal hazardous waste. What generators need to know.",
      date: "2026-10-25",
      courses: [],
      body: `Washington's Department of Ecology runs the state's hazardous waste program under the **Dangerous Waste Regulations, chapter 173-303 WAC**. "Dangerous waste" includes everything federal RCRA calls hazardous, and more.

## State-only dangerous wastes

Washington adds its own criteria, so some wastes that aren't federally hazardous are dangerous waste here. These are often called state-only dangerous wastes. Examples come from Washington's toxicity criteria and its persistence criteria for certain halogenated organic compounds and PAHs.

## What that means in practice

- A waste stream that's "non-hazardous" in another state may be regulated in Washington.
- Generators count state-only wastes toward their generator category.
- Labels, containers, accumulation and shipping follow the Washington rules.

## Who needs training

Washington, like EPA, requires training for personnel who manage dangerous waste at larger generators, with documented initial training and annual review. Smaller generators still need staff who know proper handling and emergency procedures.

## Where to check

Ecology publishes guidance on designating waste. When in doubt, have the waste profiled by someone familiar with Washington's designation procedures, not just the federal ones.`,
    },
    {
      slug: "mtca-cleanups-for-field-crews",
      title: "MTCA cleanups: what Washington field crews should know",
      description: "Most Washington cleanups run under the Model Toxics Control Act. The basics for crews on site.",
      date: "2026-10-25",
      courses: [1056],
      body: `Washington's cleanup law is the **Model Toxics Control Act (MTCA)**, passed by voters in 1988 and administered by the Department of Ecology. Cleanups run either under Ecology oversight or through the Voluntary Cleanup Program.

## Typical Washington sites

- Former wood treatment and pulp mill sites with dioxins, PAHs and pentachlorophenol
- Shoreline and sediment sites in Puget Sound
- Gas stations and fuel terminals with petroleum
- Former smelter areas with arsenic and lead
- Dry cleaners with chlorinated solvents

## For crews

HAZWOPER applies to cleanup work at these sites. Expect:

- A site-specific health and safety plan with action levels for the contaminants of concern
- Dust control where metals are present
- Vapor monitoring with PIDs and multi-gas meters where solvents or petroleum are present
- Wet-weather work, which makes decon and footing harder

## Sediment and shoreline work

Work near water adds drowning hazards, tides and boat work to the usual HAZWOPER hazards. Life jackets, rescue plans and tide schedules belong in the HASP.
`,
    },
  ],
};
