// michigan.hazwoperosha.us: HAZWOPER in Michigan (MIOSHA Part 432). Retro Detroit badge.
export default {
  title: "HAZWOPER Training in Michigan | MIOSHA Part 432 | Industrial Certified Training",
  description: "HAZWOPER training for Michigan workers under MIOSHA Part 432: 40-hour, refreshers, state-plan refresher, manufacturing ERT, RCRA generator and awareness, with guides to Part 201 cleanups.",
  theme: "#c8102e",
  fonts: "family=Righteous&family=Work+Sans:wght@400;500;600;700",
  hero: {
    title: "Made in <span>Michigan.</span>",
    lede: "HAZWOPER training for Michigan's plants, cleanup crews and public responders, under MIOSHA's own HAZWOPER standard.",
    cta: [587, "40-hour HAZWOPER · $249.99"],
    alt: ["/guides/miosha-part-432", "About Part 432"],
  },
  coursesTagline: "HAZWOPER and plant response courses for Michigan workers.",
  guidesTagline: "MIOSHA Part 432, Part 201 cleanups and plant emergency response.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER",
      summary: "The 40-hour initial HAZWOPER for Michigan hazardous waste site workers.",
      body: `MIOSHA Part 432 keeps the federal training hours. This is the 40-hour initial course for general site workers.`,
      topics: ["Hazard recognition", "Site safety plans", "PPE and respirators", "Monitoring", "Decon", "Emergencies"],
      who: "Michigan remediation, waste and response workers." },
    { id: 702, short: "Plant ERT",
      summary: "Training for in-plant emergency response teams.",
      body: `Michigan's auto, chemical and manufacturing plants often run their own ERTs. Eight hours on the ERT's role under HAZWOPER emergency response rules.`,
      topics: ["Emergency response plan", "ERT roles", "PPE", "Defensive actions", "Hand-off to outside responders"],
      who: "Plant ERT members." },
    { id: 1099, short: "Awareness",
      summary: "First responder awareness for plant and facility staff.",
      body: `Four hours on recognizing, isolating and reporting a release.`,
      topics: ["Recognize", "Isolate", "Notify"],
      who: "Operators, maintenance, warehouse and security staff." },
    { id: 601, short: "RCRA Generator",
      summary: "Hazardous waste generator training for Michigan facilities.",
      body: `Michigan regulates hazardous waste under Part 111 of its environmental code, with EGLE running the program. This course covers the generator rules it builds on.`,
      topics: ["Waste determination", "Containers and labels", "Accumulation", "Manifests"],
      who: "Waste handlers and EHS staff." },
    { id: 900, short: "State-Plan Refresher",
      summary: "The annual refresher with state-plan versions available.",
      body: `For workers in state-plan states like Michigan.`,
      topics: ["Federal refresher content", "State-plan differences", "Core review"],
      who: "Michigan HAZWOPER workers." },
    { id: 595, short: "8-Hour Refresher",
      summary: "The standard annual 8-hour refresher.",
      body: `Eight hours of annual refresher training.`,
      topics: ["Hazard review", "PPE and monitoring", "Case studies"],
      who: "Certified HAZWOPER workers." },
  ],

  guides: [
    {
      slug: "miosha-part-432",
      title: "MIOSHA Part 432: Michigan's HAZWOPER standard",
      description: "Michigan enforces its own HAZWOPER rule. What's the same, what's different and who's covered.",
      date: "2026-10-25",
      courses: [587, 900],
      body: `Michigan is a state-plan state. **MIOSHA**, the Michigan Occupational Safety and Health Administration, enforces workplace safety for most private and public employers. Its HAZWOPER rule is **Part 432, Hazardous Waste Operations and Emergency Response**.

## What's the same

Part 432 follows the federal training structure: 40 or 24 hours of initial training with supervised field days, 8 more hours for supervisors, 8 hours of refresher training each year, and emergency response training by responder level.

## What's different

- **Citations** are to Part 432, not 29 CFR 1910.120.
- **Related standards** such as respiratory protection and confined spaces have their own MIOSHA parts.
- **Public employees** are covered, so city and county responders fall under Part 432.

## Training

Federal-based 40-hour and 24-hour courses cover the core. For the annual refresher, a course that addresses state-plan rules, like [[900]], keeps records easy to defend in a MIOSHA inspection.

{{buy:587}}`,
    },
    {
      slug: "part-201-cleanups-michigan",
      title: "Part 201 sites: environmental cleanups in Michigan",
      description: "Michigan's cleanup program covers thousands of contaminated sites. What crews working on them should know.",
      date: "2026-10-25",
      courses: [587],
      body: `Michigan's environmental cleanup program falls under **Part 201 (Environmental Remediation)** of the Natural Resources and Environmental Protection Act, run by EGLE, the Department of Environment, Great Lakes, and Energy. Leaking underground storage tanks have a separate program under Part 213.

## Common Michigan sites

- Former auto and parts plants with solvents, oils and metals
- Foundries with metals and foundry sand
- Gas stations and fuel terminals
- Sites with PFAS contamination, which Michigan has investigated extensively
- Former manufactured gas plants with coal tar

## For field crews

HAZWOPER applies when the cleanup is a hazardous waste operation. Expect a site health and safety plan with:

- Contaminants of concern and their exposure limits
- PPE by task
- Air monitoring and action levels
- Decon procedures

## PFAS

PFAS doesn't usually create an acute inhalation hazard on site, but it gets into everything. Decon, sample handling and avoiding cross-contamination (for example, avoiding some waterproofed gear and certain materials near samples) get extra attention on PFAS sites.

## Winter work

Michigan cleanups often run through winter. Cold stress, frozen ground and icy decon pads belong in the HASP alongside the chemical hazards.

{{buy:587}}`,
    },
    {
      slug: "michigan-plant-emergency-response",
      title: "Emergency response at Michigan plants",
      description: "How plants set up response teams, and the training each person on the roster needs.",
      date: "2026-10-25",
      courses: [702, 1099],
      body: `Michigan's plants handle paints, solvents, acids, ammonia and fuels. When something releases, the plant has two choices: evacuate and call for outside help, or respond with its own trained team.

## Evacuate-only plants

If no employee will respond beyond incidental cleanup, the plant needs an emergency action plan with alarms, evacuation routes and accounting for people. Everyone should still know how to recognize and report a release. That's [[1099]].

## Plants with an ERT

If employees respond, the plant needs a written emergency response plan, responders trained to their level, incident command and PPE.

| Role | Training |
|---|---|
| All employees | [[1099]] |
| ERT members | [[702]] |
| Shift supervisors | Incident command training |
| Emergency coordinator | Plan, drills and coordination with the fire department |

## Work with your fire department

Invite the local fire department to tour the plant and join a drill. They need to know your chemicals, your layout and your ERT's capabilities before the night they arrive at the gate.`,
    },
  ],
};
