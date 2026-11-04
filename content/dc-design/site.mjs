// dc-design.hazwoperosha.us: data center design and planning. Blueprint sheet.
export default {
  title: "Data Center Design & Planning Training | Industrial Certified Training",
  description: "Data center design training for facility engineers and project leads: ANSI/TIA-942, site selection, redundancy models, commissioning, capacity planning and cabling infrastructure.",
  theme: "#0b3d91",
  fonts: "family=IBM+Plex+Sans:wght@400;500;700&family=IBM+Plex+Mono:wght@500",
  hero: {
    title: "Get it right <span>before the concrete.</span>",
    lede: "Design decisions are the most expensive ones to undo. Training on standards, site selection, redundancy, commissioning and capacity for the people planning new builds and expansions.",
    cta: [842, "Design Fundamentals · $312.99"],
    alt: ["/guides/redundancy-n-n1-2n", "N, N+1 or 2N?"],
  },
  heroArt: `<div class="dl-grid" aria-hidden="true"></div>`,
  coursesTitle: "Design courses",
  guidesTitle: "Design notes",
  coursesTagline: "Design, planning and commissioning training for data center projects.",
  guidesTagline: "Redundancy trade-offs and site selection, explained for project teams.",

  courses: [
    { id: 842, short: "Design Fundamentals" },
    { id: 849, short: "Tier Infrastructure" },
    { id: 845, short: "Commissioning & Startup" },
    { id: 829, short: "Capacity Planning" },
    { id: 834, short: "Fiber & Network Cabling" },
  ],

  guides: [
    {
      slug: "redundancy-n-n1-2n",
      title: "N, N+1, N+2 or 2N? Choosing a redundancy model",
      description: "What each redundancy model buys you, what it costs, and how to pick one.",
      date: "2026-10-25",
      courses: [842, 849],
      body: `Redundancy is described relative to **N**, the capacity needed to carry the full IT load.

| Model | What it means | Example (load needs 4 units) |
|---|---|---|
| N | Exactly enough, no spare | 4 units |
| N+1 | One spare component | 5 units |
| N+2 | Two spare components | 6 units |
| 2N | A complete second system | 2 × 4 units, on separate paths |
| 2N+1 | Two systems plus a spare | 2 × 4 units + 1 |

## Components vs paths

N+1 adds spare **components** (a fifth chiller, a fifth UPS module). 2N adds a whole second **distribution path**, so a failure or maintenance on one path doesn't touch the load. That difference matters more than the unit count.

## How to choose

- **What does downtime cost** per hour for the workloads in the room?
- **Must you maintain without shutdowns?** If yes, you need concurrently maintainable paths, not just spare units.
- **What does the next increment cost** in capital, space, and efficiency (lightly loaded equipment runs less efficiently)?

Many facilities mix models: 2N power to the rack, N+1 cooling, N+1 generators.

{{buy:842}}`,
    },
    {
      slug: "data-center-site-selection",
      title: "Data center site selection: the checklist",
      description: "Power, fiber, water, risk and people: what to check before you buy the land.",
      date: "2026-10-25",
      courses: [842, 829],
      body: `## Power

- Utility capacity available now, and the timeline for more
- Number of independent feeds and substations
- Cost per kWh and renewable options

## Connectivity

- Diverse fiber routes from more than one carrier
- Distance to internet exchanges and cloud on-ramps

## Natural and man-made risk

- Flood zones, seismic activity, hurricanes and tornadoes
- Proximity to airports, rail lines, chemical plants and pipelines

## Climate and water

- Hours per year suitable for economizer (free) cooling
- Water availability and cost if you plan evaporative cooling

## Land, permits and people

- Room to expand, zoning, permitting time, tax incentives
- A local workforce for operations and trades

Score each site against the same weighted list, and revisit capacity forecasts ([[829]]) before you commit.`,
    },
  ],
};
