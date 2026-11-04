// dcim.hazwoperosha.us: DCIM platforms and data center operations software. SaaS dashboard, soft cards, blue-violet.
export default {
  title: "DCIM Training: Platforms, Monitoring & Capacity | Industrial Certified Training",
  description: "DCIM training for data center teams: DCIM platform fundamentals, monitoring and BMS integration, operations management and capacity planning.",
  theme: "#4361ee",
  fonts: "family=Figtree:wght@400;600;800",
  hero: {
    title: "One view of <span>the whole floor.</span>",
    lede: "DCIM brings assets, power, cooling and capacity together. Training to choose, roll out and actually use a DCIM platform.",
    cta: [830, "DCIM Fundamentals · $99.99"],
    alt: ["/guides/dcim-rollout", "Roll out DCIM"],
  },
  coursesTagline: "DCIM, monitoring and capacity training.",
  guidesTagline: "Rolling out DCIM and keeping its data right.",

  courses: [
    { id: 830, short: "DCIM Platform Fundamentals" },
    { id: 846, short: "Monitoring, Automation & BMS" },
    { id: 843, short: "Operations Management" },
    { id: 829, short: "Capacity Planning" },
  ],

  guides: [
    {
      slug: "dcim-rollout",
      title: "Rolling out DCIM without the shelfware",
      description: "Why DCIM projects stall and how to get value in the first 90 days.",
      date: "2026-10-25",
      courses: [830, 829],
      body: `## Why DCIM projects stall

- Trying to model everything at once
- No owner for keeping data current
- No clear question the tool is meant to answer

## Start with a question

Pick one or two: "Where can we put the next 20 racks?" "Which circuits are near their limit?" "What's our real PUE?"

## Phase it

1. **Assets and space**: racks, devices, U positions
2. **Power chain**: from UPS to PDU to rack PDU to device
3. **Monitoring**: live power and environmental data
4. **Capacity and change workflows**

## Make data quality part of the job

Every install, move and removal updates DCIM before the work order closes. Audit a sample of racks every month.

## Measure value

Track time to find space, stranded capacity recovered and incidents avoided.

{{buy:830}}`,
    },
    {
      slug: "dcim-data-audit",
      title: "The monthly DCIM data audit",
      description: "Twenty minutes a month that keeps your DCIM trustworthy.",
      date: "2026-10-25",
      courses: [830, 843],
      body: `A DCIM is only as good as its data. If people stop trusting it, they stop using it.

## Each month

1. Pick 5–10 racks at random
2. Compare each device's location, U position and power connections with the DCIM record
3. Check that live power readings match the PDU displays
4. Look for devices in DCIM that are no longer there, and devices on the floor missing from DCIM
5. Record the accuracy rate

## Fix the cause

If errors come from one team or process, fix the process: add a DCIM step to the work order, or require a photo at close-out.

## Report it

Share the accuracy rate with operations leadership ([[843]]). Aim for 98% or better.`,
    },
  ],
};
