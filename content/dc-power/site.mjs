// dc-power.hazwoperosha.us: data center power systems. One-line diagram, high-voltage yellow on black.
export default {
  title: "Data Center Power Systems Training: Electrical, UPS, Distribution & Standby | Industrial Certified Training",
  description: "Power training for data center electrical teams: power systems fundamentals, power distribution, emergency and standby power, UPS operations and electrical safety.",
  theme: "#ffd60a",
  fonts: "family=Barlow+Condensed:wght@600;800&family=Barlow:wght@400;500;600",
  hero: {
    title: "Follow the power <span>to the rack.</span>",
    lede: "Every outage story has a one-line diagram behind it. Training on how data center power is built, switched, protected and maintained, from the utility service to the rack PDU.",
    cta: [847, "Power Systems · $303.99"],
    alt: ["/guides/reading-a-one-line-diagram", "Read a one-line"],
  },
  heroArt: `<svg class="ol-art" viewBox="0 0 600 200" aria-hidden="true"><path d="M0 100h120m40 0h120m40 0h120m40 0h120" stroke="#ffd60a" stroke-width="3" fill="none"/><rect x="120" y="70" width="40" height="60" fill="none" stroke="#ffd60a" stroke-width="3"/><rect x="280" y="70" width="40" height="60" fill="none" stroke="#ffd60a" stroke-width="3"/><rect x="440" y="70" width="40" height="60" fill="none" stroke="#ffd60a" stroke-width="3"/><circle cx="140" cy="40" r="20" fill="none" stroke="#ffd60a" stroke-width="3"/><path d="M140 60v10" stroke="#ffd60a" stroke-width="3"/></svg>`,
  coursesTitle: "Power courses",
  coursesTagline: "Electrical, distribution, UPS and standby power training.",
  guidesTagline: "One-line diagrams and the path power takes through the building.",

  courses: [
    { id: 847, short: "Power Systems & Electrical" },
    { id: 1092, short: "Power Distribution Systems" },
    { id: 1098, short: "Emergency/Standby Power Systems" },
    { id: 840, short: "UPS Operations & Load Testing" },
    { id: 1102, short: "UPS Systems Fundamentals" },
    { id: 831, short: "Electrical Safety & Best Practices" },
  ],

  guides: [
    {
      slug: "reading-a-one-line-diagram",
      title: "How to read a data center one-line diagram",
      description: "The symbols and the path, from the utility to the rack.",
      date: "2026-10-25",
      courses: [847, 1092],
      body: `A **one-line** (single-line) diagram shows how power flows through a facility using one line for each three-phase circuit.

## Follow the path

1. **Utility service** and the main transformer
2. **Main switchgear**: the main breaker and feeder breakers
3. **Generators** and the **automatic transfer switch (ATS)** or paralleling switchgear
4. **UPS** systems, with their batteries and bypass
5. **PDUs** that step voltage down and distribute to the floor
6. **Remote power panels** and **rack PDUs**

## Symbols to know

| Symbol | Meaning |
|---|---|
| Square with a diagonal or "CB" | Circuit breaker |
| Two interlocking circles | Transformer |
| Circle with "G" | Generator |
| Box labeled "ATS" | Automatic transfer switch |

## Why it matters

Before any switching, the operator should trace the path on the one-line, identify which loads lose redundancy, and confirm with the MOP.

{{buy:1092}}`,
    },
    {
      slug: "what-happens-when-the-utility-fails",
      title: "What happens in the first 30 seconds of a utility failure",
      description: "UPS, generators and transfer switches, second by second.",
      date: "2026-10-25",
      courses: [1098, 840],
      body: `## 0 seconds: utility lost

The UPS senses the loss and carries the load from its batteries (or flywheel) with no interruption to IT equipment.

## About 1–3 seconds: generators start

The generators get a start signal. Many sites use a short delay to ride out brief utility blips.

## About 10 seconds: generators ready

Generators reach rated voltage and frequency. NFPA 110 Type 10 systems must restore power within 10 seconds.

## Next: transfer

The ATS or paralleling gear transfers the load to the generators. Mechanical cooling restarts in stages.

## Steady state

The UPS recharges its batteries from generator power. Operations teams watch fuel, temperatures and alarms until the utility returns and is stable.

## What goes wrong

Batteries that can't carry the load long enough, generators that fail to start, transfer switches that fail to transfer, and cooling that restarts too slowly. Load testing finds these before an outage does ([[840]]).`,
    },
  ],
};
