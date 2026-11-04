// gulf-coast.hazwoperosha.us: refineries and petrochemical plants on the Gulf Coast. Refinery-at-night.
export default {
  title: "HAZWOPER for Refinery & Petrochemical Workers | Industrial Certified Training",
  description: "HAZWOPER training for Gulf Coast refinery, petrochemical and terminal workers: 40-hour, incident command, gas detection, manufacturing ERT and oil spill response, plus turnaround and benzene guides.",
  theme: "#0b1530",
  fonts: "family=Barlow+Semi+Condensed:wght@500;600;700;800&family=Inter:wght@400;500",
  hero: {
    title: "Built for the <span>plant.</span>",
    lede: "HAZWOPER training for refinery, petrochemical and terminal workers from Corpus Christi to Lake Charles and beyond. Get your crew cleared before turnaround.",
    cta: [587, "40-hour HAZWOPER · $249.99"],
    alt: ["/guides/turnaround-season-hazwoper", "Turnaround guide"],
  },
  heroArt: `<div class="skyline" aria-hidden="true"></div>`,
  coursesTagline: "HAZWOPER, response and monitoring courses for plant workers and contractors.",
  guidesTagline: "Turnarounds, benzene and plant emergency response.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER",
      summary: "The 40-hour HAZWOPER for plant cleanup, tank and waste work.",
      body: `Tank cleaning, waste handling and contaminated soil work at plants can all be hazardous waste operations. This is the 40-hour initial course under 29 CFR 1910.120(e).`,
      topics: ["Hazard recognition", "Site safety plans", "PPE and respirators", "Monitoring", "Decon", "Emergencies"],
      who: "Plant and contractor workers in waste, cleaning and remediation roles." },
    { id: 593, short: "Incident Command",
      summary: "Incident command for plant shift supervisors and ERT leaders.",
      body: `When a release, fire or spill becomes an emergency, a shift supervisor often takes command until the plant's emergency organization is set up.`,
      topics: ["ICS", "Size-up", "Entry and backup teams", "Safety officer", "Critique"],
      who: "Shift supervisors, operations leads and ERT captains." },
    { id: 1056, short: "Gas Detection",
      summary: "Multi-gas meters and PIDs for H2S, LEL, benzene screening and oxygen.",
      body: `Monitors are standard issue in units, tank farms and turnaround work. Two hours on what they read and when to leave.`,
      topics: ["O2, LEL, H2S, CO", "PIDs and benzene screening", "Bump tests", "Alarm set points"],
      who: "Operators, contractors and confined space attendants." },
    { id: 702, short: "Plant ERT",
      summary: "Training for in-plant emergency response team members.",
      body: `Many plants staff their own emergency response teams. Eight hours on the ERT's role under HAZWOPER (q).`,
      topics: ["Emergency response plan", "ERT roles", "PPE", "Defensive actions", "Working with outside responders"],
      who: "Plant ERT members." },
    { id: 591, short: "40 Hr Oil Spill",
      summary: "The 40-hour HAZWOPER for terminal and dock spill response.",
      body: `For terminal and marine crews who respond to product spills on land and water.`,
      topics: ["Product hazards", "Booming and recovery", "Shoreline cleanup", "Heat stress"],
      who: "Terminal, dock and spill response crews." },
    { id: 595, short: "8-Hour Refresher",
      summary: "The annual 8-hour refresher.",
      body: `Eight hours a year to keep certificates current before the next turnaround.`,
      topics: ["Hazard review", "PPE and monitoring", "Case studies"],
      who: "Certified HAZWOPER workers." },
  ],

  guides: [
    {
      slug: "turnaround-season-hazwoper",
      title: "Turnaround season: getting contractor crews HAZWOPER-ready",
      description: "Turnarounds bring hundreds of contractors on site at once. Training paperwork is the first bottleneck.",
      date: "2026-10-25",
      courses: [587, 595],
      body: `A refinery turnaround can bring hundreds or thousands of contract workers on site for a few weeks. Gate access depends on paperwork, and HAZWOPER is often on the list.

## When HAZWOPER applies in a turnaround

Not every turnaround task is a hazardous waste operation. HAZWOPER typically applies to:

- Tank and vessel cleaning that removes hazardous waste or sludge
- Handling, packaging and loading out hazardous waste
- Remediation of contaminated soil or groundwater found during the work
- Emergency response, for those assigned to it

Many plants require the 40-hour for whole contractor crews in those scopes. Check the contract and the plant's contractor safety requirements.

## The paperwork checklist

1. 40-hour or 24-hour certificate as the scope requires
2. Current 8-hour refresher (within 12 months)
3. Supervisor training for foremen
4. Respirator fit test and medical clearance
5. Site-specific orientation, which every plant runs itself

## Avoid the gate-day scramble

- Start pulling certificates **six to eight weeks out**.
- Put lapsed workers through [[595]] before mobilization, not during.
- New hires can complete the online [[587]] while waiting for their start date.

## Multi-employer sites

The plant and each contractor have their own responsibilities. A contractor's workers are still that contractor's to train, even when the plant runs the orientation.`,
    },
    {
      slug: "benzene-at-refineries",
      title: "Benzene at refineries and chemical plants",
      description: "Benzene has its own OSHA standard with lower limits than most chemicals. What workers should know.",
      date: "2026-10-25",
      courses: [1056, 587],
      body: `Benzene is in crude oil, gasoline and many chemical process streams. It's a known human carcinogen, and OSHA regulates it with its own standard, **29 CFR 1910.1028**.

## The limits

| Limit | Value |
|---|---|
| Permissible exposure limit (8-hour TWA) | 1 ppm |
| Short-term exposure limit (15 minutes) | 5 ppm |
| Action level (8-hour TWA) | 0.5 ppm |

At or above the action level, the standard requires exposure monitoring and medical surveillance for affected workers.

## Where exposure happens

- Opening process equipment: line breaks, vessel entry, pump and valve work
- Sampling
- Tank gauging and cleaning
- Wastewater systems and sumps
- Turnaround cleaning

## Detection

A PID gives a quick total-VOC reading, which is useful for screening. It can't tell benzene from other hydrocarbons. Benzene-specific tubes, specialized PIDs or badges confirm the actual benzene level.

## Controls

- Engineering first: closed sampling, purging and flushing equipment before opening
- Regulated areas where exposure can exceed the PEL
- Respirators where needed, under a full respiratory protection program
- Training on benzene hazards, required by the standard

{{buy:1056}}`,
    },
    {
      slug: "plant-emergency-response-gulf-coast",
      title: "Plant emergency response: ERTs, mutual aid and HAZWOPER (q)",
      description: "How Gulf Coast plants staff emergency response, and the training each role needs.",
      date: "2026-10-25",
      courses: [702, 593],
      body: `Most large Gulf Coast plants don't wait for a public fire department. They run their own emergency response teams, and many join regional mutual aid groups that share equipment and responders.

## How it's usually organized

| Role | Typical training |
|---|---|
| All plant personnel | Awareness: recognize, alarm, evacuate |
| ERT members | Operations or technician level under 1910.120(q) |
| Shift supervisors | Incident command |
| Emergency coordinator | Plan, drills and mutual aid coordination |

## Under HAZWOPER (q)

The plant's emergency response plan must cover roles and lines of authority, training, safe distances, site security, evacuation, decon, medical treatment, alerting and critique. Responders must be trained to their level and get annual refresher training or demonstrate competency.

## Fire brigades

Plant fire brigades also fall under 29 CFR 1910.156 for firefighting. A team that fights fires and handles chemical releases needs to meet both.

## Mutual aid

When plants share responders, agree in advance on training levels, PPE compatibility, communications and who commands. Joint drills make the agreement real.

{{buy:702}}`,
    },
  ],
};
