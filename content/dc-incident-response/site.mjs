// dc-incident-response.hazwoperosha.us: data center incident response, EPO, Li-ion fires, clean agent. Red alert bar.
export default {
  title: "Data Center Incident & Emergency Response Training | Industrial Certified Training",
  description: "Emergency and incident response training for data center teams: incident troubleshooting, emergency power off procedures, lithium-ion battery fires and clean agent fire suppression.",
  theme: "#d00000",
  fonts: "family=Saira+Condensed:wght@600;800&family=Saira:wght@400;500;600",
  hero: {
    title: "When it breaks <span>at 3 a.m.</span>",
    lede: "Alarms, smoke, an EPO button pressed by mistake. Training for the people on shift when something goes badly wrong, so they act fast without making it worse.",
    cta: [837, "Incident Response · $99.99"],
    alt: ["/guides/first-ten-minutes", "The first 10 minutes"],
  },
  heroArt: `<div class="s1-stripe" aria-hidden="true"></div>`,
  coursesTagline: "Incident, EPO, battery fire and suppression training.",
  guidesTagline: "The first minutes of an incident, and what happens after.",

  courses: [
    { id: 837, short: "Incident Response & Troubleshooting" },
    { id: 853, short: "Emergency Power Off (EPO)" },
    { id: 1021, short: "Li-ion Thermal Runaway Response" },
    { id: 854, short: "Clean Agent Fire Suppression" },
    { id: 1099, short: "First Responder Awareness", summary: "Recognize a hazardous release and get clear safely.", body: `Four hours on recognizing hazardous releases, from fuel leaks to battery off-gassing, isolating the area and calling for help.`, topics: ["Recognizing releases", "Isolating the area", "Notification"], who: "Shift staff who may be first on scene." },
  ],

  guides: [
    {
      slug: "first-ten-minutes",
      title: "The first ten minutes of a data center incident",
      description: "Life safety first, then stabilize, then communicate.",
      date: "2026-10-25",
      courses: [837, 853],
      body: `## 1. Life safety

If there's fire, smoke, an injury or a suppression discharge, evacuate and call emergency services. Equipment comes second.

## 2. Assess

- What alarms are active? What changed?
- What has the load lost: a path, a UPS, cooling?
- Is it spreading or stable?

## 3. Stabilize

Follow the EOP for the situation. Don't improvise switching on live systems. If you're unsure, stop and escalate.

## 4. Escalate and communicate

Call the on-call manager and the right vendors. Start an incident log with times. Tell customers or IT what's affected, what you're doing and when the next update is.

## 5. Preserve evidence

Don't reset alarms or clear event logs until they're recorded. They're needed for root cause.

## After

Hold a blameless post-incident review, find the root cause, and fix procedures, training or design.

{{buy:837}}`,
    },
    {
      slug: "epo-accidents",
      title: "Preventing accidental EPO activation",
      description: "One button can drop a whole room. Protect it.",
      date: "2026-10-25",
      courses: [853],
      body: `An **emergency power off (EPO)** button removes power from IT equipment in a room so firefighters and responders can work safely. Accidental presses have caused major outages.

## Common causes

- Mistaken for a door release or light switch
- Bumped by carts or ladders
- Pressed by visitors or contractors who don't know what it is

## Prevention

- **Protective covers** that must be lifted before pressing
- **Clear labels** in plain language
- **Location**: near exits but away from door releases
- **Training** for everyone who enters the room, including contractors
- **Alarms** that sound when the cover is lifted

## If it happens

Follow the restore procedure: confirm why it was pressed, verify it's safe, and restore power in a planned sequence, not all at once. See [[853]].`,
    },
  ],
};
