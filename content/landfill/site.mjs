// landfill.hazwoperosha.us: training for landfill and transfer station staff. Topographic contour map.
export default {
  brand: "Landfill Safe",
  logo: `<span class="pin">◉</span> Landfill Safe`,
  title: "Hazardous Waste & HAZWOPER Training for Landfills | Landfill Safe",
  description: "Training for landfill and transfer station staff: load checking for hazardous waste, gas detection, awareness, 24-hour and 40-hour HAZWOPER, spill response and decon, with landfill gas and load-check guides.",
  theme: "#5c4a2e",
  fonts: "family=Chivo:wght@400;600;700;900&family=Chivo+Mono:wght@400;500",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#efe6d2"/><g fill="none" stroke="#5c4a2e" stroke-width="1.6"><ellipse cx="16" cy="17" rx="12" ry="9"/><ellipse cx="16" cy="17" rx="8" ry="6"/><ellipse cx="16" cy="17" rx="4" ry="3"/></g></svg>`,
  hero: {
    title: "Know what's in <span>the load.</span>",
    lede: "Landfill staff are the last line of defense against hazardous waste in the trash. Training for spotters, equipment operators and gas techs.",
    cta: [1099, "Awareness training · $61.99"],
    alt: ["/guides/landfill-load-checking", "Load-checking guide"],
  },
  coursesTagline: "Courses for landfill operators, spotters and gas technicians.",
  guidesTagline: "Load checking, landfill gas and when HAZWOPER applies.",

  courses: [
    { id: 1099, short: "Awareness",
      summary: "Recognize hazardous materials in incoming loads and know what to do.",
      body: `Spotters and equipment operators see everything that comes through the gate. Four hours on recognizing hazardous materials, isolating them and reporting.`,
      topics: ["Recognizing hazardous materials", "Labels and placards", "Isolating a load", "Notifying"],
      who: "Spotters, scale house staff and equipment operators." },
    { id: 1056, short: "Gas Detection",
      summary: "Detecting methane, H2S and low oxygen around landfill gas systems.",
      body: `Landfill gas is mostly methane and carbon dioxide, with H2S and other gases. Two hours on monitors and readings.`,
      topics: ["Methane and LEL", "H2S", "Oxygen deficiency", "Calibration", "Confined spaces"],
      who: "Gas system techs and maintenance staff." },
    { id: 581, short: "24-Hour HAZWOPER",
      summary: "The 24-hour HAZWOPER for staff who handle hazardous waste found in loads occasionally.",
      body: `For staff who segregate hazardous waste found in loads or support household hazardous waste events.`,
      topics: ["Hazard recognition", "PPE", "Site zones", "Decon"],
      who: "Load check staff and HHW event workers." },
    { id: 587, short: "40-Hour HAZWOPER",
      summary: "The 40-hour HAZWOPER for cleanup work at closed or Superfund landfills.",
      body: `Cleanups at closed and Superfund landfills are hazardous waste operations. This is the 40-hour initial course.`,
      topics: ["Hazard recognition", "Site safety plans", "PPE", "Monitoring", "Decon"],
      who: "Remediation crews at closed landfills." },
    { id: 416, short: "Spill Response",
      summary: "Fuel and leachate spill prevention and response.",
      body: `Fuel tanks, equipment and leachate systems can spill. Two hours on prevention and first response.`,
      topics: ["Fuel spills", "Containment", "Reporting"],
      who: "Operators and maintenance staff." },
  ],

  guides: [
    {
      slug: "landfill-load-checking",
      title: "Load checking: keeping hazardous waste out of the landfill",
      description: "Municipal landfills must have a program to exclude hazardous waste, including trained staff. Here's what it involves.",
      date: "2026-10-25",
      courses: [1099, 581],
      body: `Municipal solid waste landfills are regulated under **40 CFR Part 258** (RCRA Subtitle D). Section 258.20 requires owners and operators to have a program to detect and prevent the disposal of regulated hazardous waste and PCB wastes.

## What the program must include

- **Random inspections** of incoming loads, unless other steps make sure loads don't contain regulated hazardous waste or PCBs
- **Records** of the inspections
- **Training of facility personnel** to recognize regulated hazardous waste and PCB wastes
- **Notification** of the state if regulated hazardous waste or PCBs are found

## What spotters look for

- Drums, pails and containers with hazard labels or no labels
- Liquids, sludges and powders
- Batteries, lamps and electronics where those are banned
- Medical waste
- Strong odors, fumes or smoke
- Commercial loads from shops, labs and plants

## When something's found

1. Stop the load from being tipped further
2. Isolate the material and keep people back
3. Identify the hauler and source
4. Notify your supervisor and follow the site's procedure
5. Record everything

## Training

Spotters need to recognize hazardous materials and know when to back off. [[1099]] covers that. Staff who handle and segregate what's found need more: [[581]].`,
    },
    {
      slug: "landfill-gas-hazards",
      title: "Landfill gas: methane, H2S and oxygen",
      description: "Decomposing waste makes gas that can explode, suffocate or poison. What landfill staff need to know.",
      date: "2026-10-25",
      courses: [1056],
      body: `Decomposing waste produces landfill gas, mostly **methane** and **carbon dioxide**, with smaller amounts of hydrogen sulfide and other compounds.

## The hazards

| Gas | Hazard |
|---|---|
| Methane | Flammable between about 5% and 15% in air. Can collect in structures, vaults and manholes |
| Carbon dioxide | Heavier than air, displaces oxygen in low areas |
| Hydrogen sulfide | Toxic, deadens sense of smell |
| Low oxygen | Any confined space connected to the gas system |

## Where it collects

- Gas collection wells, headers and condensate sumps
- Leachate manholes and pump stations
- Buildings on or near the waste footprint, especially basements
- Utility trenches crossing the landfill

## Working safely

- Monitor before entering any vault, manhole or trench: oxygen first, then LEL, then toxics.
- Treat gas system structures as potential permit-required confined spaces.
- No ignition sources near wellheads and flares.
- Ventilate and keep monitoring during work.

{{buy:1056}}`,
    },
    {
      slug: "does-hazwoper-apply-at-a-landfill",
      title: "Does HAZWOPER apply at a landfill?",
      description: "Everyday landfill work usually isn't HAZWOPER. Some landfill work definitely is.",
      date: "2026-10-25",
      courses: [587, 581],
      body: `## Usually not HAZWOPER

Normal operations at a municipal solid waste landfill, such as accepting, placing and covering trash, aren't hazardous waste operations. Other OSHA standards apply.

## Often HAZWOPER

- **Cleanup at closed or Superfund landfills**: investigation and remediation of old landfills with hazardous waste
- **Hazardous waste landfills**: permitted hazardous waste disposal facilities are TSDFs, covered by 1910.120(p)
- **Emergency response** to releases, fires or hazardous material discoveries beyond incidental handling
- **Household hazardous waste collection** may fall under HAZWOPER, depending on how it's run and regulated in your state

## A practical setup

| Role | Training |
|---|---|
| Spotters and operators | [[1099]] |
| Load check and HHW staff | [[581]] |
| Closed-landfill cleanup crews | [[587]] |
| Gas techs | [[1056]] |`,
    },
  ],
};
