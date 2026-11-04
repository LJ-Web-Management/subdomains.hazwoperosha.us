// industrial-cleaning.hazwoperosha.us: HAZWOPER for industrial cleaning crews (vac trucks, hydroblasting, tank cleaning). Hydroblast.
export default {
  title: "HAZWOPER for Industrial Cleaning Crews | Vac Trucks, Hydroblasting, Tanks | Industrial Certified Training",
  description: "Training for industrial cleaning crews: 40-hour HAZWOPER, gas detection, decontamination, PPE, spill response and the annual refresher, with guides to vacuum trucks and tank cleaning.",
  theme: "#0fb5d6",
  fonts: "family=Exo+2:wght@500;600;700;800;900&family=Inter:wght@400;500;600",
  hero: {
    title: "Clean the <span>dirty jobs.</span>",
    lede: "Industrial cleaning crews handle sludge, residues and hazardous waste in tanks, pits and process units. HAZWOPER and monitoring training built for that work.",
    cta: [587, "40-hour HAZWOPER · $249.99"],
    alt: ["/guides/when-is-industrial-cleaning-hazwoper", "Is it HAZWOPER?"],
  },
  heroArt: `<div class="spray" aria-hidden="true"></div>`,
  coursesTagline: "Training for vac truck operators, hydroblasters and tank cleaners.",
  guidesTagline: "Vacuum trucks, tank cleaning and when HAZWOPER applies.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER",
      summary: "The 40-hour HAZWOPER for crews removing hazardous waste and residues.",
      body: `When cleaning removes hazardous waste or works on contaminated equipment and sites, HAZWOPER applies. This is the 40-hour initial course.`,
      topics: ["Hazard recognition", "Site safety plans", "PPE and respirators", "Monitoring", "Decon", "Emergencies"],
      who: "Industrial cleaning technicians and operators." },
    { id: 1056, short: "Gas Detection",
      summary: "Monitoring tanks, pits and vac truck discharge points.",
      body: `Cleaning stirs up vapors. Two hours on multi-gas meters, PIDs and what the readings mean.`,
      topics: ["O2, LEL, H2S, CO", "PIDs", "Calibration", "Confined spaces"],
      who: "Tank entrants, attendants and vac truck operators." },
    { id: 584, short: "Decontamination",
      summary: "A 20-minute decon module.",
      body: `Sludge and residue get everywhere. Decon stations and doffing in 20 minutes.`,
      topics: ["Decon stations", "Doffing", "Equipment decon"],
      who: "All cleaning crews." },
    { id: 585, short: "PPE Levels A–D",
      summary: "A 15-minute module on PPE levels.",
      body: `What each level of protection includes, in 15 minutes.`,
      topics: ["Levels A, B, C and D"],
      who: "New crew members." },
    { id: 416, short: "Spill Response",
      summary: "Preventing and responding to spills from hoses, trucks and tanks.",
      body: `Two hours on spill prevention and response for cleaning operations.`,
      topics: ["Hose and connection failures", "Containment", "Reporting"],
      who: "Vac truck operators and crews." },
    { id: 595, short: "8-Hour Refresher",
      summary: "The annual 8-hour refresher.",
      body: `Eight hours of annual refresher training.`,
      topics: ["Hazard review", "PPE and monitoring", "Case studies"],
      who: "Certified HAZWOPER workers." },
  ],

  guides: [
    {
      slug: "when-is-industrial-cleaning-hazwoper",
      title: "When is industrial cleaning a HAZWOPER job?",
      description: "Not every cleaning job is a hazardous waste operation. The ones that are, and why clients often require the 40-hour anyway.",
      date: "2026-10-25",
      courses: [587],
      body: `## Often HAZWOPER

- Removing **hazardous waste** such as sludges, residues and tank bottoms that are hazardous waste
- Cleaning at a **TSDF** (paragraph (p)) or on a **cleanup site**
- **Emergency response** to spills and releases
- Post-emergency **cleanup** after a release

## Usually not HAZWOPER

- Routine cleaning of non-hazardous materials
- Production cleaning where the material is product, not waste. Other OSHA standards still apply, especially confined spaces, respiratory protection and hazard communication.

## Why clients require it anyway

Refineries, chemical plants and utilities often require 40-hour HAZWOPER for all cleaning contractors, because:

- Cleaning scopes change mid-job
- Waste determinations happen after material is removed
- One training standard is easier for site access

## Training stack for cleaning crews

| Training | Why |
|---|---|
| [[587]] and annual [[595]] | Client requirement and HAZWOPER scopes |
| [[1056]] | Tanks, pits and confined spaces |
| Confined space entry training | Required for permit spaces (1910.146) |
| Respiratory protection | Fit test and medical clearance |`,
    },
    {
      slug: "vacuum-trucks-and-hazardous-materials",
      title: "Vacuum trucks and hazardous materials",
      description: "Vac trucks pull vapors as well as liquids. The hazards and controls operators need to know.",
      date: "2026-10-25",
      courses: [1056, 416],
      body: `A vacuum truck pulls air along with liquid and sludge, and that air has to go somewhere. The exhaust can carry flammable or toxic vapors to wherever the truck is parked.

## The main hazards

- **Flammable vapors** at the exhaust and around the hose connection
- **Toxic vapors** such as H2S and benzene from the material being collected
- **Static electricity** from flowing liquids and hoses
- **Hose failures** and spills
- **Incompatible materials** mixing in the tank

## Controls

1. **Know what you're collecting.** Get the SDS or profile before you start, and don't mix incompatible loads.
2. **Bond and ground** the truck, the hose and the source container for flammable liquids.
3. **Vent exhaust safely**, away from ignition sources and people. Use a vent hose or carbon filtration where required.
4. **Monitor** at the exhaust and the work area with a multi-gas meter and PID.
5. **Inspect hoses and fittings** before each job.
6. **Position the truck upwind** where possible, and out of low spots.

## Spills

Keep a spill kit on the truck and know how to stop a hose leak. See [[416]].

{{buy:1056}}`,
    },
    {
      slug: "tank-cleaning-confined-spaces",
      title: "Tank cleaning and confined spaces",
      description: "Tank entry kills more cleaning workers than any chemical. The essentials of entering safely.",
      date: "2026-10-25",
      courses: [1056, 587],
      body: `Tanks, vessels, pits and sumps are confined spaces, and most that need cleaning are **permit-required confined spaces** under 29 CFR 1910.146.

## Why tanks are deadly

- Oxygen can be displaced by nitrogen purges or consumed by rust
- Residues give off flammable or toxic vapors, and more when disturbed
- Engulfment in sludge or product
- Mechanical and electrical hazards from mixers and pumps

## Before entry

1. **Permit** completed and signed by the entry supervisor
2. **Isolation**: blind or disconnect lines, lock out mixers and pumps
3. **Clean and ventilate** from outside as much as possible
4. **Test the atmosphere**: oxygen first, then LEL, then toxics, from the top to the bottom of the space
5. **Attendant** stationed outside, with a means of communication
6. **Rescue plan** ready, with retrieval equipment where practical

## During entry

Monitor continuously. Cleaning stirs up residues, and readings can change fast. If an alarm sounds, everyone gets out.

## Never

- Enter to rescue without SCBA and a plan. Many confined space deaths are would-be rescuers.

{{buy:1056}}`,
    },
  ],
};
