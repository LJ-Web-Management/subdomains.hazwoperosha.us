// texas.hazwoperosha.us: HAZWOPER and hazardous waste training for Texas. Western poster.
export default {
  title: "HAZWOPER Training in Texas | OSHA, TCEQ & Oilfield | Industrial Certified Training",
  description: "HAZWOPER and hazardous waste training for Texas workers: OSHA 40-hour, 24-hour, refresher, oil & gas spill response and RCRA generator training, with guides to TCEQ and Railroad Commission rules.",
  theme: "#8a3b1e",
  fonts: "family=Rye&family=Source+Sans+3:wght@400;600;700",
  hero: {
    title: "Trained in <span>Texas.</span>",
    lede: "OSHA HAZWOPER and hazardous waste training for Texas crews, from Permian well pads to Houston Ship Channel plants. Online, self-paced, certificate the day you finish.",
    cta: [587, "Start the 40-hour · $249.99"],
    alt: ["/guides/hazwoper-in-texas-who-regulates-what", "Who regulates what"],
  },
  coursesTagline: "HAZWOPER and waste courses for work across Texas.",
  guidesTagline: "OSHA, TCEQ and the Railroad Commission: how Texas rules fit together.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER",
      summary: "The OSHA 40-hour initial HAZWOPER for Texas hazardous waste site workers.",
      body: `Texas private employers are under federal OSHA, so 29 CFR 1910.120 applies as written. This is the 40-hour initial course for general site workers.`,
      topics: ["Hazard recognition and toxicology", "Site safety and health plans", "PPE and respirators", "Air monitoring", "Decontamination", "Emergency procedures"],
      who: "Remediation, refinery turnaround, waste and spill response workers across Texas." },
    { id: 581, short: "24-Hour HAZWOPER",
      summary: "The 24-hour HAZWOPER for occasional and low-exposure site workers.",
      body: `For Texas workers who visit hazardous waste sites occasionally or work only in monitored low-exposure areas.`,
      topics: ["Who qualifies", "Hazard recognition", "PPE basics", "Site zones"],
      who: "Surveyors, inspectors, drivers and support staff." },
    { id: 595, short: "8-Hour Refresher",
      summary: "The annual 8-hour HAZWOPER refresher.",
      body: `Keep a Texas crew current with eight hours of refresher training a year.`,
      topics: ["Hazard review", "PPE and monitoring", "Case studies"],
      who: "Anyone with a current 40- or 24-hour certificate." },
    { id: 591, short: "40 Hr Oil & Gas Spill",
      summary: "The 40-hour HAZWOPER for oilfield spill response crews.",
      body: `Built for the oil patch: crude, condensate, produced water, H2S and benzene.`,
      topics: ["Crude and produced water hazards", "H2S and benzene", "Land spill recovery", "Heat stress"],
      who: "Permian, Eagle Ford and Gulf Coast spill response crews." },
    { id: 601, short: "RCRA Generator",
      summary: "Hazardous waste generator training for Texas facilities.",
      body: `Texas runs its own authorized hazardous waste program through TCEQ. This course covers the federal generator rules Texas builds on.`,
      topics: ["Waste determination", "Generator categories", "Containers and labels", "Manifests"],
      who: "Waste handlers and EHS staff at Texas plants." },
  ],

  feature: (h) => `<section class="sec band"><div class="wrap band-in">
<div><b>OSHA</b><span>Worker safety, including HAZWOPER, for private employers</span></div>
<div><b>TCEQ</b><span>Industrial and hazardous waste, and cleanups under TRRP</span></div>
<div><b>RRC</b><span>Oil and gas waste and spills under the Railroad Commission</span></div>
</div></section>`,

  guides: [
    {
      slug: "hazwoper-in-texas-who-regulates-what",
      title: "HAZWOPER in Texas: who regulates what",
      description: "OSHA, TCEQ and the Railroad Commission each cover a piece. A quick map for Texas employers.",
      date: "2026-10-25",
      courses: [587, 601],
      body: `Texas doesn't run its own OSHA state plan, so worker safety for private employers is federal OSHA. Environmental rules are mostly state-run.

## The map

| Agency | Covers | What it means for training |
|---|---|---|
| Federal OSHA | Worker safety for private employers | HAZWOPER (29 CFR 1910.120) applies as written |
| TCEQ | Industrial and hazardous waste, most cleanups | RCRA generator training, Texas waste classification |
| Railroad Commission (RRC) | Oil and gas exploration and production waste and spills | Spill response and waste handling on leases |
| EPA | Oversees TCEQ's authorized program; applies HAZWOPER to some public employees | See the public employee section below |

## Cleanups

Most Texas cleanups follow the **Texas Risk Reduction Program (TRRP)** under TCEQ, or the Railroad Commission's rules for oilfield sites. Either way, the workers on site need HAZWOPER when the work is a hazardous waste operation.

## Public employees

Federal OSHA doesn't cover state and local government employees, and Texas has no state plan. EPA's rule at 40 CFR Part 311 applies HAZWOPER to public employees in states like Texas who do hazardous waste operations or emergency response, such as municipal hazmat teams.

{{buy:587}}`,
    },
    {
      slug: "texas-industrial-waste-classes",
      title: "Texas industrial waste classes: Class 1, 2 and 3",
      description: "Texas sorts non-hazardous industrial waste into classes. Staff who handle waste need to know them.",
      date: "2026-10-25",
      courses: [601],
      body: `Federal RCRA divides waste into hazardous and non-hazardous. Texas goes further for industrial waste: TCEQ sorts **non-hazardous industrial waste** into classes.

## The classes

| Class | What it is |
|---|---|
| Hazardous | Meets the federal or state definition of hazardous waste |
| Class 1 | Non-hazardous industrial waste that's still potentially harmful, such as some wastes with certain constituents above limits, or regulated asbestos |
| Class 2 | Industrial waste that isn't hazardous, Class 1 or Class 3 |
| Class 3 | Inert, essentially insoluble wastes like rock, brick and some construction debris |

TCEQ's rules (30 TAC Chapter 335) set the exact definitions and tests. Your waste profile should state the class.

## Why it matters on the floor

- Class 1 waste has its own handling, shipping and disposal requirements, including manifesting in Texas.
- Industrial generators register with TCEQ and get waste codes for each stream.
- Mixing a hazardous waste into a Class 2 container makes the whole container hazardous.

## Training

Staff who sort, label and ship industrial waste should know both the federal hazardous waste rules and the Texas classes. Start with [[601]], and add your facility's own waste stream list.

{{buy:601}}`,
    },
    {
      slug: "texas-heat-and-hazwoper-ppe",
      title: "Texas heat and HAZWOPER PPE",
      description: "Chemical protective clothing plus a Texas summer is a medical emergency waiting to happen. How crews manage it.",
      date: "2026-10-25",
      courses: [587, 591],
      body: `Chemical protective clothing traps body heat. In a Texas summer, heat stress can hurt a crew faster than the chemicals they're protecting against.

## Why PPE makes it worse

Coveralls, chemical suits and respirators stop sweat from evaporating, which is how the body cools itself. A worker in Level C or B in July can overheat in under an hour.

## Warning signs

| Heat exhaustion | Heat stroke (emergency) |
|---|---|
| Heavy sweating, cool clammy skin | Hot skin, confusion, may stop sweating |
| Headache, dizziness, nausea | Slurred speech, seizures, collapse |
| Weakness, thirst | Call 911 and cool them immediately |

## What crews do

- **Schedule hard work early.** Start before dawn and stop the heaviest PPE work by early afternoon.
- **Work-rest cycles.** Shorter entries, longer rests in shade as the heat index rises.
- **Water before thirst.** Hydrate on the support side of the line, often every 15 to 20 minutes.
- **Acclimatize new workers.** Ramp up exposure over the first week or two. Most heat deaths happen in a worker's first days.
- **Cooling vests** under suits for Level B and A work.
- **Buddy checks.** Watch each other for the warning signs.

## Put it in the plan

HAZWOPER site safety plans should address heat stress. Make the work-rest schedule, water and shade part of the written plan, not just good intentions.

{{buy:591}}`,
    },
  ],
};
