// dc-bms.hazwoperosha.us: monitoring, BMS/BAS and DCIM. Trend-graph UI, violet and teal.
export default {
  title: "Data Center Monitoring, BMS & BAS Training | Industrial Certified Training",
  description: "Monitoring and automation training for data center teams: BMS and DCIM systems, building automation (BAS) fundamentals, DCIM platforms and energy efficiency.",
  theme: "#5a189a",
  fonts: "family=Plus+Jakarta+Sans:wght@400;600;800&family=Fira+Code:wght@500",
  hero: {
    title: "Every point <span>tells a story.</span>",
    lede: "Thousands of sensors, setpoints and alarms run a modern data center. Training on building management, automation and DCIM so your team can read the trends and act on them.",
    cta: [846, "Monitoring & BMS · $276.99"],
    alt: ["/guides/alarm-fatigue", "Fix alarm fatigue"],
  },
  heroArt: `<svg class="pt-trend" viewBox="0 0 800 200" preserveAspectRatio="none" aria-hidden="true"><path d="M0 140 L60 120 L120 130 L180 90 L240 100 L300 60 L360 80 L420 70 L480 110 L540 95 L600 50 L660 70 L720 40 L800 60" stroke="#2ec4b6" stroke-width="3" fill="none"/><path d="M0 160 L80 150 L160 165 L240 140 L320 150 L400 130 L480 145 L560 120 L640 135 L720 115 L800 125" stroke="#c77dff" stroke-width="2" fill="none" stroke-dasharray="6 6"/></svg>`,
  coursesTagline: "BMS, BAS and DCIM training.",
  guidesTagline: "Alarms, trends and points lists.",

  courses: [
    { id: 846, short: "Monitoring, Automation & BMS" },
    { id: 1104, short: "Building Automation (BAS) Fundamentals" },
    { id: 830, short: "DCIM Platform Fundamentals" },
    { id: 832, short: "Energy Efficiency & PUE" },
  ],

  guides: [
    {
      slug: "alarm-fatigue",
      title: "Fixing alarm fatigue in the control room",
      description: "When everything alarms, nothing does. How to clean up a noisy BMS.",
      date: "2026-10-25",
      courses: [846, 1104],
      body: `Operators who see hundreds of alarms a shift learn to acknowledge without reading. That's how real problems get missed.

## Measure first

Pull a month of alarm history. Rank by count. Usually a few points cause most of the noise.

## Common causes

- **Setpoints too tight**, so normal swings alarm
- **No delay**, so a two-second blip alarms
- **Chattering**: values hovering at the limit without a deadband
- **Duplicates**: the same event alarming at several levels
- **Stale points** from removed equipment

## Fix them

1. Add sensible deadbands and time delays
2. Set priorities: critical, warning, information
3. Group related alarms so one event creates one notification
4. Remove or disable points for equipment that's gone
5. Document every change

## Keep it clean

Review the top-10 noisiest alarms every month. Aim for alarms that each require an action.

{{buy:846}}`,
    },
    {
      slug: "bms-vs-dcim",
      title: "BMS, BAS, EPMS and DCIM: who does what?",
      description: "Four acronyms, overlapping jobs. A quick map.",
      date: "2026-10-25",
      courses: [830, 1104, 846],
      body: `| System | Watches and controls | Main users |
|---|---|---|
| **BMS / BAS** (building management or automation system) | HVAC, chillers, air handlers, sometimes lighting and fire interfaces | Facilities, mechanical |
| **EPMS** (electrical power monitoring system) | Switchgear, UPS, generators, PDUs, power quality | Electrical, critical facilities |
| **DCIM** (data center infrastructure management) | Assets, rack space, power and cooling capacity, connectivity, sometimes pulling BMS and EPMS data | Capacity planning, operations, IT |

## How they fit

The BMS and EPMS run and protect equipment in real time. DCIM sits above them, combining their data with asset and capacity information for planning.

## Integration tips

- Agree on point naming before integration
- Decide which system is the source of truth for each data point
- Secure the networks: building systems are a cyber target too

See [[1104]] for BAS fundamentals and [[830]] for DCIM.`,
    },
  ],
};
