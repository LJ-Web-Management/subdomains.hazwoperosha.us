// dc-maintenance.hazwoperosha.us: preventive maintenance and building upkeep for data centers. Work-order tags, kraft and ochre.
export default {
  title: "Data Center Maintenance Training: Preventive, Mechanical, Building & Roofing | Industrial Certified Training",
  description: "Maintenance training for data center facility teams: preventive maintenance planning, mechanical systems, building maintenance, building envelope and roofing systems.",
  theme: "#c98f12",
  fonts: "family=Bitter:wght@500;700;800&family=Karla:wght@400;500;700",
  hero: {
    title: "Fix it <span>before it fails.</span>",
    lede: "Good maintenance programs are boring, and boring is exactly what you want in a data center. Training on preventive maintenance, mechanical systems and the building around them.",
    cta: [839, "PM Planning · $99.99"],
    alt: ["/guides/building-a-pm-program", "Build a PM program"],
  },
  coursesTagline: "Maintenance training for critical facilities.",
  guidesTagline: "PM programs and the building envelope.",

  courses: [
    { id: 839, short: "Preventive Maintenance Planning" },
    { id: 838, short: "Mechanical Systems Maintenance" },
    { id: 1097, short: "Building Maintenance Fundamentals" },
    { id: 1096, short: "Building Envelope Fundamentals" },
    { id: 1101, short: "Roofing Systems Maintenance" },
  ],

  guides: [
    {
      slug: "building-a-pm-program",
      title: "Building a preventive maintenance program",
      description: "From an asset list to a schedule people actually follow.",
      date: "2026-10-25",
      courses: [839, 838],
      body: `## 1. List every asset

Generators, UPS, batteries, switchgear, transfer switches, PDUs, chillers, CRAHs, pumps, cooling towers, fire systems, BMS controllers. Give each an ID and record make, model, serial and location.

## 2. Rank by criticality

What happens to the IT load if this fails? Critical assets get the most attention.

## 3. Set tasks and intervals

Start from manufacturer recommendations and standards (such as NFPA 70B for electrical, NFPA 110 for generators, NFPA 25 for water-based fire systems). Adjust with experience.

## 4. Load it into a CMMS

Work orders generate automatically. Every task has steps, tools, safety requirements and a MOP for anything that affects redundancy.

## 5. Measure

- PM completion rate (aim very high on critical assets)
- Corrective work found during PMs
- Repeat failures

## 6. Improve

Add predictive methods like infrared, vibration and oil analysis where they pay off.

{{buy:839}}`,
    },
    {
      slug: "roof-and-envelope-checks",
      title: "Roof and envelope checks for data centers",
      description: "Water is a data center's enemy. Start at the top.",
      date: "2026-10-25",
      courses: [1101, 1096],
      body: `## Roof (at least twice a year and after storms)

- Drains and scuppers clear
- No ponding water, blisters, splits or open seams
- Flashing intact around equipment curbs and penetrations
- Rooftop equipment supports sound, with no leaks at condensate lines

## Walls, doors and windows

- Sealant and joints intact
- Doors seal and close fully (also a security issue)
- No signs of water at the base of walls

## Inside

- Ceiling stains, especially above white space and electrical rooms
- Leak detection cable alarms tested

## Fall protection

Roof work needs fall protection: guardrails, warning lines or personal fall arrest near edges and skylights.

Learn more in [[1101]] and [[1096]].`,
    },
  ],
};
