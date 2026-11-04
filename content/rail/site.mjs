// rail.hazwoperosha.us: hazmat response for rail incidents. Vintage railroad timetable.
export default {
  title: "Rail Hazmat Response Training | Awareness, Incident Command, Spills | Industrial Certified Training",
  description: "Hazmat training for rail incidents: first responder awareness, fire/hazmat 40-hour, incident command, spill response, booms and responder refresher, with guides to tank cars and rail emergency response.",
  theme: "#9b1c1c",
  fonts: "family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600",
  hero: {
    title: "When a tank car <em>leaks.</em>",
    lede: "Training for railroad employees, shippers and local responders who may be first to a rail hazmat incident.",
    cta: [1099, "Awareness · $61.99"],
    alt: ["/guides/rail-hazmat-incident-first-responder", "First on scene"],
  },
  coursesTitle: "Schedule of courses",
  coursesTagline: "Response training for rail incidents, from awareness to command.",
  guidesTagline: "Tank cars, train consists and the first hour of a rail incident.",

  courses: [
    { id: 1099, short: "First Responder Awareness",
      summary: "Recognize a rail hazmat release, isolate the area and notify.",
      body: `Train crews, yard workers and local officers are often first on scene. Four hours on recognizing, isolating and reporting.`,
      topics: ["Recognizing a release", "Placards, tank car markings and the ERG", "Isolation distances", "Notifying the railroad and 911"],
      who: "Train crews, yard workers, police and first-arriving responders." },
    { id: 589, short: "40 Hr Fire / Hazmat",
      summary: "The 40-hour HAZWOPER for fire and hazmat teams who also do post-incident cleanup.",
      body: `Rail incidents often move from emergency response into days of cleanup. This 40-hour course covers both sides.`,
      topics: ["Emergency response vs cleanup", "Hazmat branch operations", "Chemical protective clothing", "Monitoring", "Decon"],
      who: "Fire and hazmat teams, railroad hazmat contractors." },
    { id: 593, short: "Incident Command",
      summary: "Incident command for rail emergencies.",
      body: `Rail incidents bring many agencies and the railroad into one command structure. Eight hours on ICS and the incident commander's role.`,
      topics: ["ICS and unified command", "Size-up", "Isolation and evacuation decisions", "Working with railroad representatives"],
      who: "Fire officers, railroad supervisors and emergency managers." },
    { id: 416, short: "Spill Response",
      summary: "Spill prevention and response at rail yards and transload facilities.",
      body: `Fueling, transloading and car repair create spill risks. Two hours on prevention and first response.`,
      topics: ["Fueling and transfer spills", "Containment", "Reporting"],
      who: "Yard, fueling and transload staff." },
    { id: 478, short: "Booms",
      summary: "Booms for spills near creeks, rivers and ditches along the right-of-way.",
      body: `Many rail lines follow rivers. One hour on deploying booms ahead of a spill.`,
      topics: ["Boom types", "Placement in current", "Anchoring"],
      who: "Response crews and contractors." },
    { id: 574, short: "Responder Refresher",
      summary: "Annual refresher for responders and incident commanders.",
      body: `Annual refresher with incident command review.`,
      topics: ["ICS review", "Responder levels", "Lessons learned"],
      who: "Responders and incident commanders." },
  ],

  guides: [
    {
      slug: "rail-hazmat-incident-first-responder",
      title: "First on scene at a rail hazmat incident",
      description: "A derailment or leaking car is a high-stakes scene. What the first responder does in the first minutes.",
      date: "2026-10-25",
      courses: [1099, 593],
      body: `Rail incidents can involve large volumes of hazardous materials, multiple cars and fire. The first person on scene sets the tone.

## Approach

- **Upwind, uphill and upstream.** Stop well back.
- **Use binoculars.** Read placards, tank car stenciling and UN numbers from a distance.
- **Don't walk into vapor clouds, pools or smoke.**

## Identify

- Placards and four-digit UN numbers on cars
- Tank car stenciling, which names some commodities
- The **train consist**, which lists every car and its contents. The crew carries it, and the railroad can provide it. Many railroads share consist information with emergency responders through the AskRail app.

## Isolate and notify

1. Use the ERG for initial isolation and protective action distances.
2. Keep people out of the area.
3. Call 911 and the railroad's emergency number, which is posted at crossings on the blue Emergency Notification System sign along with the crossing's ID number.
4. Stop rail traffic on adjacent tracks through the railroad.

## Then

Hand off to the incident commander when command is established. Unified command with the railroad is standard.

{{buy:1099}}`,
    },
    {
      slug: "tank-cars-for-responders",
      title: "Tank cars 101 for responders",
      description: "What you can learn from a tank car before you get close to it.",
      date: "2026-10-25",
      courses: [1099, 589],
      body: `Tank cars carry most of the hazardous materials moved by rail. Responders learn to read them from a distance.

## General types

| Type | Carries |
|---|---|
| Non-pressure (general service) tank cars | Liquids such as crude oil, ethanol, acids and many chemicals |
| Pressure tank cars | Gases liquefied under pressure, such as LPG, chlorine and anhydrous ammonia |
| Cryogenic tank cars | Very cold liquefied gases |

Pressure cars usually have a protective housing on top covering the valves, and a smoother look with fewer visible fittings.

## Markings to read

- **Placards and UN numbers** on each side and end
- **Reporting marks and car number** (letters and numbers), which identify the car in the consist
- **Commodity stenciling** for some materials
- **Capacity and specification** stenciled on the car

## Why it matters

A pressurized car exposed to fire can fail violently. That's why fire involving a pressure car often means large evacuation distances. Check the ERG guide for the material.

## Leave the valves alone

Valve and fitting work on tank cars is for trained hazmat technicians and railroad specialists with the right equipment.`,
    },
    {
      slug: "railroad-employees-and-hazwoper",
      title: "Railroad employees and HAZWOPER",
      description: "Which rail workers need which level of hazmat training.",
      date: "2026-10-25",
      courses: [1099, 589, 593],
      body: `Railroads move hazmat every day, and their employees are often first to an incident. Their HAZWOPER training depends on their role in the railroad's emergency response plan.

## Typical roles

| Role | Expected action | Training |
|---|---|---|
| Train and engine crews | Recognize, protect themselves, notify, provide the consist | Awareness level: [[1099]] |
| Yard and car department staff | Recognize and notify, incidental cleanup at most | Awareness |
| Railroad hazmat managers | Respond, advise incident command, coordinate contractors | Technician-level training and incident command: [[593]] |
| Response contractors | Contain, transfer and clean up | [[589]] or similar 40-hour plus specialized training |

## DOT hazmat training too

Railroad employees who handle hazmat shipments also need DOT hazmat employee training under 49 CFR 172.704. That's separate from HAZWOPER.

## Annual refreshers

Responders need annual refresher training or demonstrated competency under 1910.120(q)(8). See [[574]].`,
    },
  ],
};
