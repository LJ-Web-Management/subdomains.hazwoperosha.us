// water-utilities.hazwoperosha.us: hazmat response for water and wastewater utilities. Water ripples.
export default {
  title: "Hazmat & HAZWOPER Training for Water and Wastewater Utilities | Industrial Certified Training",
  description: "Training for water and wastewater utility staff: first responder awareness, gas detection, incident command, responder refresher, spill response and plant ERT, with chlorine and H2S guides.",
  theme: "#0d6efd",
  fonts: "family=Quicksand:wght@500;600;700&family=Inter:wght@400;500",
  hero: {
    title: "Clean water, <span>safe operators.</span>",
    lede: "Chlorine, ammonia, H2S and confined spaces are part of the job at water and wastewater utilities. Response training for operators and crews.",
    cta: [1099, "Awareness · $61.99"],
    alt: ["/guides/chlorine-at-water-plants", "Chlorine guide"],
  },
  heroArt: `<div class="ripples" aria-hidden="true"></div>`,
  coursesTagline: "Response and monitoring courses for utility operators and crews.",
  guidesTagline: "Chlorine, H2S in collection systems and public employee coverage.",

  courses: [
    { id: 1099, short: "Awareness",
      summary: "Recognize a chemical release at the plant, get clear and call it in.",
      body: `Every operator should know what a chlorine or ammonia alarm means and what to do. Four hours on recognize, isolate, notify.`,
      topics: ["Recognizing releases", "Alarms and evacuation", "Going upwind", "Notifying"],
      who: "Operators, lab staff and maintenance crews." },
    { id: 1056, short: "Gas Detection",
      summary: "Monitoring for H2S, low oxygen, methane and chlorine.",
      body: `Collection systems, wet wells and digesters are full of gas hazards. Two hours on monitors and readings.`,
      topics: ["H2S and methane", "Oxygen deficiency", "Chlorine sensors", "Calibration", "Confined spaces"],
      who: "Collection crews and plant operators." },
    { id: 593, short: "Incident Command",
      summary: "Incident command for plant supervisors.",
      body: `Eight hours on taking command of a chemical release until the fire department arrives, and working in unified command after.`,
      topics: ["ICS", "Size-up", "Isolation", "Unified command"],
      who: "Plant supervisors and managers." },
    { id: 702, short: "Plant ERT",
      summary: "Training for in-plant response teams.",
      body: `Some utilities keep a team trained to respond to chlorine and chemical releases. Eight hours on the team's role.`,
      topics: ["Emergency response plan", "ERT roles", "PPE", "Defensive actions"],
      who: "Utility response team members." },
    { id: 574, short: "Responder Refresher",
      summary: "Annual refresher for responders and commanders.",
      body: `Annual refresher with incident command review.`,
      topics: ["ICS review", "PPE review", "Lessons learned"],
      who: "Utility responders." },
    { id: 416, short: "Spill Response",
      summary: "Chemical and fuel spill prevention and response.",
      body: `Chemical deliveries and fuel storage are common spill points. Two hours on prevention and response.`,
      topics: ["Chemical deliveries", "Containment", "Reporting"],
      who: "Operators and maintenance staff." },
  ],

  guides: [
    {
      slug: "chlorine-at-water-plants",
      title: "Chlorine at water plants: hazards and response",
      description: "Gaseous chlorine is one of the most hazardous chemicals at many utilities. What operators need to know.",
      date: "2026-10-25",
      courses: [1099, 702],
      body: `Many water and wastewater plants still use gaseous chlorine in 150-pound cylinders or one-ton containers. Others have switched to sodium hypochlorite, which is safer but still corrosive.

## The numbers

| Measure | Value |
|---|---|
| OSHA PEL | 1 ppm (ceiling) |
| IDLH | 10 ppm |
| Odor | Noticeable well below the PEL |

## How it behaves

Chlorine gas is about 2.5 times heavier than air. It stays low, flows downhill and collects in basements, pits and low areas. It's a strong respiratory irritant, and high concentrations can cause fatal lung damage.

## Regulatory thresholds

Facilities above certain quantities fall under OSHA Process Safety Management (1,500 lb of chlorine) and EPA's Risk Management Program (2,500 lb). Many larger plants hit one or both.

## Response basics

1. Detector alarm or odor: evacuate **upwind and uphill**
2. Activate emergency shutdown or scrubber systems if they can be reached safely
3. Call 911 and your emergency contacts
4. Only trained, equipped responders approach. Leak repair uses Chlorine Institute emergency kits (Kit A for cylinders, Kit B for ton containers) with SCBA and chemical protective clothing.

{{buy:1099}}`,
    },
    {
      slug: "h2s-in-wastewater-collection",
      title: "H2S and confined spaces in wastewater collection",
      description: "Sewers, lift stations and wet wells kill workers every year. The hazards and the controls.",
      date: "2026-10-25",
      courses: [1056],
      body: `Wastewater collection systems generate hydrogen sulfide and methane, and consume oxygen. Manholes, lift stations and wet wells are classic permit-required confined spaces.

## The hazards

- **Hydrogen sulfide**: toxic, deadens your sense of smell, can be fatal at high levels
- **Methane**: flammable
- **Low oxygen**: from decomposition and displacement
- **Engulfment and drowning** from flow surges

## Before entry

1. Treat the space as permit-required unless it's been evaluated and classified otherwise
2. Test from outside, top to bottom: **oxygen first, then LEL, then H2S and CO**
3. Ventilate with forced air
4. Attendant outside, rescue plan and retrieval equipment ready
5. Monitor continuously during entry

## Personal monitors

Collection crews should wear a 4-gas monitor whenever they work near openings, not just when entering.

## Never

Never enter to rescue a collapsed coworker without SCBA. Would-be rescuers are a large share of confined space deaths.

{{buy:1056}}`,
    },
    {
      slug: "public-utility-employees-and-hazwoper",
      title: "Public utility employees and HAZWOPER",
      description: "Most water utilities are public agencies. Here's how HAZWOPER reaches their employees.",
      date: "2026-10-25",
      courses: [1099, 593, 574],
      body: `Most water and wastewater utilities are run by cities, counties or special districts. Federal OSHA doesn't cover public employees, but that doesn't leave them unprotected.

## In state-plan states

State plans cover public employees, so the state's HAZWOPER rule applies to utility responders.

## In federal OSHA states

EPA's **40 CFR Part 311** applies the HAZWOPER standard to state and local government employees doing hazardous waste operations or emergency response.

## Private utilities

Investor-owned and private contract operators are covered by OSHA directly.

## Matching training to roles

| Role | Training |
|---|---|
| All operators | [[1099]] |
| Response team | [[702]] or technician-level training |
| Supervisors | [[593]] |
| Annual | [[574]] for responders |

Many utilities rely on the fire department for chlorine leaks. If so, operators still need awareness training, and the plant needs an emergency action plan and a relationship with the responding hazmat team.`,
    },
  ],
};
