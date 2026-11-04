// federal-sites.hazwoperosha.us: HAZWOPER for contractors on DoD and DOE cleanup sites. Olive drab stencil.
export default {
  title: "HAZWOPER for Federal Cleanup Contractors | DoD & DOE Sites | Industrial Certified Training",
  description: "HAZWOPER training for contractors on Department of Defense and Department of Energy cleanup sites: 40-hour, remediation, supervisor, incident command, train-the-trainer and refresher courses.",
  theme: "#4b5320",
  fonts: "family=Saira+Stencil+One&family=IBM+Plex+Sans+Condensed:wght@400;500;600;700",
  hero: {
    title: "Cleared for <span>federal sites.</span>",
    lede: "Former bases, ranges and weapons-complex sites are some of the largest cleanups in the country. HAZWOPER training for the contractors who work them.",
    cta: [590, "40 Hr Remediation · $249.99"],
    alt: ["/guides/hazwoper-on-federal-cleanup-sites", "Who's covered"],
  },
  coursesTagline: "HAZWOPER courses for federal cleanup contractors.",
  guidesTagline: "Federal coverage rules, munitions safety and radiological awareness.",

  courses: [
    { id: 590, short: "40 Hr Remediation",
      summary: "The 40-hour HAZWOPER for remediation crews on federal cleanup sites.",
      body: `Federal site cleanups are hazardous waste operations. This 40-hour course covers the initial training under 29 CFR 1910.120(e).`,
      topics: ["Cleanup phases", "Sampling and drilling", "Drums and containers", "Monitoring", "Decon"],
      who: "Remediation contractors on DoD and DOE sites." },
    { id: 587, short: "40-Hour HAZWOPER",
      summary: "The standard 40-hour initial HAZWOPER.",
      body: `The general 40-hour course for site workers.`,
      topics: ["Hazard recognition", "Site safety plans", "PPE", "Monitoring", "Decon"],
      who: "General site workers." },
    { id: 597, short: "Supervisor",
      summary: "The 8-hour supervisor course for site leads.",
      body: `Eight more hours for supervisors directing hazardous waste work.`,
      topics: ["Safety program", "PPE decisions", "Monitoring", "Site control"],
      who: "Site superintendents and field leads." },
    { id: 593, short: "Incident Command",
      summary: "Incident command for site emergencies.",
      body: `Eight hours on taking command of a site emergency.`,
      topics: ["ICS", "Size-up", "Entry teams", "Critique"],
      who: "Site managers and emergency coordinators." },
    { id: 1016, short: "Train-the-Trainer",
      summary: "Qualify in-house trainers for large federal programs.",
      body: `Large federal contracts often run their own HAZWOPER training. 24 hours on qualifying trainers.`,
      topics: ["Trainer qualifications", "Lesson plans", "Field exercises", "Records"],
      who: "Contractor training and EHS staff." },
    { id: 595, short: "8-Hour Refresher",
      summary: "The annual 8-hour refresher.",
      body: `Eight hours of annual refresher training.`,
      topics: ["Hazard review", "PPE and monitoring", "Case studies"],
      who: "Certified HAZWOPER workers." },
  ],

  guides: [
    {
      slug: "hazwoper-on-federal-cleanup-sites",
      title: "HAZWOPER on federal cleanup sites: who's covered by what",
      description: "Contractors, federal employees and DOE sites each have their own path to the same HAZWOPER rule.",
      date: "2026-10-25",
      courses: [590, 587],
      body: `Federal cleanup sites mix contractors and federal employees, and different rules bring HAZWOPER to each.

## Contractors

Private contractors on federal sites are covered by OSHA (or the state plan, where it applies), so 29 CFR 1910.120 or 1926.65 applies to their hazardous waste work.

## Federal employees

Federal agencies follow OSHA standards for their own employees under **29 CFR Part 1960** and Executive Order 12196. Federal workers doing hazardous waste operations need the same training as contractors.

## Department of Energy sites

DOE contractors follow DOE's worker safety and health program rule, **10 CFR Part 851**, which requires compliance with OSHA standards including HAZWOPER. Radiological work adds DOE's radiation protection rules (10 CFR Part 835) and radiological worker training.

## Department of Defense sites

Cleanups at active installations, Base Realignment and Closure (BRAC) sites and Formerly Used Defense Sites (FUDS) are usually done by contractors under OSHA, with additional DoD requirements for munitions safety where applicable.

## Training

The core is the same everywhere: [[587]] or [[590]], supervisor training for leads and an annual refresher. Site-specific training, such as munitions awareness or rad worker training, is added on top.`,
    },
    {
      slug: "munitions-recognize-retreat-report",
      title: "Munitions on cleanup sites: recognize, retreat, report",
      description: "Former ranges and bases can hide unexploded ordnance. HAZWOPER crews aren't trained to handle it, and shouldn't.",
      date: "2026-10-25",
      courses: [590, 597],
      body: `Former military ranges and training areas can contain **munitions and explosives of concern (MEC)**, including unexploded ordnance (UXO). HAZWOPER training doesn't qualify anyone to handle them.

## The 3Rs

DoD's explosives safety message for everyone:

1. **Recognize** when you may have found a munition. It may be rusted, buried, partly exposed or look like scrap.
2. **Retreat.** Don't touch, move or disturb it. Carefully leave the area the way you came.
3. **Report.** Tell your supervisor and the site's UXO personnel, or call 911 off site.

## How sites manage it

- **MEC surveys** before intrusive work
- **UXO technicians** escort crews or clear work areas on sites where munitions may be present
- **Construction support:** qualified UXO personnel monitor digging
- **Briefings** for every worker before entry

## For supervisors

Know the site's MEC plan, who the UXO lead is and the stop-work procedure. Make sure every crew member has had the munitions awareness briefing. See [[597]].`,
    },
    {
      slug: "radiological-awareness-cleanup-sites",
      title: "Radiological awareness on cleanup sites",
      description: "Some federal and industrial sites have radiological contamination. What HAZWOPER workers should know.",
      date: "2026-10-25",
      courses: [590, 595],
      body: `HAZWOPER covers chemical, physical, biological **and radiological** hazards. On some federal sites, especially in the DOE weapons complex, radiological contamination is part of the job.

## Basic protection principles

- **Time:** spend as little time near sources as possible
- **Distance:** dose drops quickly with distance
- **Shielding:** put material between you and the source
- **Contamination control:** keep radioactive material off skin and out of lungs

## On site, expect

- **Rad worker training** on top of HAZWOPER, required at DOE sites under 10 CFR 835
- **Dosimetry** to track exposure
- **Radiological control technicians** surveying work areas, equipment and people
- **Step-off pads and frisking** when leaving contaminated areas
- **Contamination area postings** that you must obey

## Where it overlaps HAZWOPER

The site safety plan, PPE, monitoring and decon all address radiological hazards alongside chemical ones. Your 40-hour and refresher ([[595]]) provide the base, and site-specific rad training builds on it.`,
    },
  ],
};
