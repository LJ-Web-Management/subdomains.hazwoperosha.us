// clean-agent.hazwoperosha.us: clean agent fire suppression safety (NFPA 2001). Fire-red cylinders, white room.
export default {
  title: "Clean Agent Fire Suppression Safety Training for Data Centers (NFPA 2001) | Industrial Certified Training",
  description: "Training on data center clean agent fire suppression: FM-200, Novec 1230 and inert gas systems, discharge safety, abort switches, lockouts and EPO, built around NFPA 2001.",
  theme: "#c1121f",
  fonts: "family=Red+Hat+Display:wght@500;700;900",
  hero: {
    title: "Know the system <span>before it discharges.</span>",
    lede: "Clean agent systems protect data halls without water, but they come with pressurized cylinders, loud discharges and, with inert gases, low-oxygen atmospheres. Safety training for everyone who works in protected rooms.",
    cta: [854, "Clean Agent Safety · $99.99"],
    alt: ["/guides/when-the-pre-discharge-alarm-sounds", "Pre-discharge alarm"],
  },
  heroArt: `<div class="cg-row" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>`,
  coursesTagline: "Suppression, EPO and emergency training.",
  guidesTagline: "Alarms, agents and impairments.",

  courses: [
    { id: 854, short: "Clean Agent Fire Suppression Safety" },
    { id: 853, short: "Emergency Power Off (EPO)" },
    { id: 837, short: "Incident Response & Troubleshooting" },
    { id: 1099, short: "First Responder Awareness", summary: "Recognize a hazardous release and get clear safely.", body: `Four hours on recognizing hazardous releases, including agent discharges and battery off-gassing, isolating the area and notifying the right people.`, topics: ["Recognizing releases", "Isolating the area", "Notification", "Staying out of harm"], who: "Data center staff who may be first on scene." },
  ],

  guides: [
    {
      slug: "when-the-pre-discharge-alarm-sounds",
      title: "When the pre-discharge alarm sounds",
      description: "You have seconds. Here's what to do and what not to do.",
      date: "2026-10-25",
      courses: [854],
      body: `Most clean agent systems use a two-stage alarm: an alert on the first detector, then a **pre-discharge** alarm with a countdown (often 30 seconds) when a second detector confirms.

## Do

- **Leave the room immediately** by the nearest exit
- **Close doors behind you**: the agent only works if it stays in the room
- **Report** to your supervisor and the assembly point
- **Call** emergency services if there's a fire

## Abort switch

The abort (hold) switch pauses the countdown while held. Only trained, authorized people should use it, and only when they've confirmed there's no fire. Know how your system behaves: some restart the countdown when released.

## Don't

- Stay to "see what's happening"
- Re-enter after discharge until the room is ventilated and declared safe
- Prop doors open

{{buy:854}}`,
    },
    {
      slug: "clean-agent-types",
      title: "Clean agent types: halocarbon vs inert gas",
      description: "How they work and the hazards of each.",
      date: "2026-10-25",
      courses: [854, 853],
      body: `| | Halocarbon agents | Inert gas agents |
|---|---|---|
| Examples | HFC-227ea (FM-200), FK-5-1-12 (Novec 1230) | IG-541 (Inergen), IG-55, IG-100 (nitrogen) |
| How they work | Mostly absorb heat from the fire | Lower oxygen to a level that won't support combustion |
| Storage | Liquefied in cylinders | High-pressure gas, many cylinders |
| People hazards | Decomposition products in a fire, cold discharge, noise | Reduced oxygen, noise, pressure |

## Common to both

- Pressurized cylinders that must be secured
- Room integrity: the room must hold the agent concentration
- **Impairments**: when the system is disabled for work, the space needs a fire watch or alternate protection and the right people must be notified

## Working in protected rooms

Before work near detectors or that creates dust or heat, follow the site's procedure to place the system in a safe mode, and return it to service afterwards. See [[853]] for how suppression ties into EPO.`,
    },
  ],
};
