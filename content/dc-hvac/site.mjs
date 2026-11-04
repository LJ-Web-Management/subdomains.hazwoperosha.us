// dc-hvac.hazwoperosha.us: HVAC and mechanical for data center techs. Copper pipe and gauge.
export default {
  title: "Data Center HVAC & Mechanical Technician Training | Industrial Certified Training",
  description: "Training for data center HVAC and mechanical technicians: HVAC troubleshooting, mechanical maintenance, refrigerant safety and building envelope fundamentals.",
  theme: "#b5651d",
  fonts: "family=Oswald:wght@500;700&family=Work+Sans:wght@400;500;600",
  hero: {
    title: "The techs who <span>keep it cold.</span>",
    lede: "Data center mechanical work is unforgiving: no unplanned downtime, tight tolerances and refrigerants under pressure. Training for HVAC and mechanical technicians.",
    cta: [836, "HVAC Troubleshooting · $99.99"],
    alt: ["/guides/crah-vs-crac", "CRAH vs CRAC"],
  },
  coursesTitle: "Technician courses",
  coursesTagline: "HVAC, mechanical and refrigerant training for data center technicians.",
  guidesTagline: "Equipment basics and troubleshooting habits.",

  courses: [
    { id: 836, short: "HVAC Troubleshooting" },
    { id: 838, short: "Mechanical Systems Maintenance" },
    { id: 851, short: "Cooling & Refrigerant Safety" },
    { id: 1096, short: "Building Envelope Fundamentals" },
  ],

  guides: [
    {
      slug: "crah-vs-crac",
      title: "CRAH vs CRAC: what's the difference?",
      description: "Two units that look alike on the floor and work very differently.",
      date: "2026-10-25",
      courses: [836, 838],
      body: `| | CRAC | CRAH |
|---|---|---|
| Name | Computer room air conditioner | Computer room air handler |
| Cooling source | Its own refrigeration compressor (DX) | Chilled water from a central plant |
| Heat rejection | Condenser (air-cooled, water or glycol) | The chiller plant |
| Typical site | Smaller rooms and older sites | Larger facilities |
| Main hazards | Refrigerant pressure, compressor electrical | Water leaks, valves, pumps |

## Troubleshooting differences

**CRAC:** check refrigerant pressures, superheat and subcooling, compressor amps, condenser airflow and coil condition.

**CRAH:** check chilled water supply and return temperatures, valve position and actuator, flow, and coil condition.

## Both

Filters, belts or EC fan motors, humidifiers, condensate drains and controls.

{{buy:836}}`,
    },
    {
      slug: "troubleshooting-habits",
      title: "Five troubleshooting habits of good data center techs",
      description: "How experienced mechanics find the fault without making it worse.",
      date: "2026-10-25",
      courses: [836, 851],
      body: `## 1. Know what normal looks like

Write down normal pressures, temperatures and amps for each unit on a good day. Faults are easier to see against a baseline.

## 2. Check redundancy before you touch anything

Confirm the backup unit is running and carrying load before you take a unit offline.

## 3. Start simple

Power, controls, filters, belts and valves before compressors and boards.

## 4. Change one thing at a time

Then measure again. Otherwise you'll never know what fixed it.

## 5. Respect the refrigerant

High pressure, frostbite and oxygen displacement in enclosed spaces. Technicians who handle refrigerants need EPA Section 608 certification. See [[851]] for refrigerant safety.

Write up what you found and what you did, for the next tech.`,
    },
  ],
};
