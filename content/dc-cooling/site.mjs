// dc-cooling.hazwoperosha.us: data center cooling design and optimization. Hot aisle / cold aisle gradient.
export default {
  brand: "Cold Aisle",
  logo: `<span class="ca-flake">❄</span>Cold Aisle`,
  title: "Data Center Cooling Training: HVAC, Refrigerant & PUE | Cold Aisle",
  description: "Cooling training for data center facility teams: cooling system design and optimization, HVAC troubleshooting, refrigerant safety, mechanical maintenance and PUE.",
  theme: "#0077b6",
  fonts: "family=Sora:wght@400;600;800",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#48cae4"/><stop offset="1" stop-color="#ef476f"/></linearGradient></defs><rect width="32" height="32" rx="8" fill="url(#g)"/><path d="M16 6v20M7 11l18 10M25 11L7 21" stroke="#fff" stroke-width="2.5"/></svg>`,
  hero: {
    title: "Keep the <span>cold air</span> where it counts.",
    lede: "Cooling is the biggest energy load after IT itself. Training on cooling design, airflow, HVAC troubleshooting, refrigerant safety and efficiency for facility teams.",
    cta: [841, "Cooling Systems · $298.99"],
    alt: ["/guides/hot-aisle-cold-aisle", "Hot aisle, cold aisle"],
  },
  heroArt: `<div class="ca-air" aria-hidden="true"></div>`,
  coursesTagline: "Cooling design, operation, maintenance and safety.",
  guidesTagline: "Airflow management and the temperature numbers that matter.",

  courses: [
    { id: 841, short: "Cooling Systems Design & Optimization" },
    { id: 836, short: "HVAC Troubleshooting" },
    { id: 851, short: "Cooling & Refrigerant Safety" },
    { id: 832, short: "Energy Efficiency & PUE" },
    { id: 838, short: "Mechanical Systems Maintenance" },
  ],

  guides: [
    {
      slug: "hot-aisle-cold-aisle",
      title: "Hot aisle, cold aisle: airflow management basics",
      description: "Why rack layout and blanking panels matter as much as the chillers.",
      date: "2026-10-25",
      courses: [841, 832],
      body: `Servers pull cool air in the front and push hot air out the back. Airflow management keeps those two streams from mixing.

## The layout

Racks face each other across a **cold aisle** (fronts, supply air) and back onto a **hot aisle** (exhausts). Cooling units take return air from the hot side.

## Common leaks

- **Missing blanking panels** in empty rack spaces let hot exhaust recirculate to the front
- **Open cable cutouts** in raised floors waste supply air
- **Gaps between racks** and at row ends
- **Perforated tiles in the wrong place**, such as in hot aisles

## Containment

Cold aisle containment encloses the cold aisle; hot aisle containment encloses the hot aisle and ducts it back. Either one lets you raise supply temperatures and save energy.

## Measure it

Check rack inlet temperatures at the top, middle and bottom. ASHRAE's recommended inlet range for most IT equipment is 18–27 °C (64.4–80.6 °F).

{{buy:841}}`,
    },
    {
      slug: "raising-supply-temperatures",
      title: "Raising supply temperatures safely",
      description: "Warmer supply air saves energy. Here's how to do it without hot spots.",
      date: "2026-10-25",
      courses: [841, 836],
      body: `Many sites still run supply air far colder than IT equipment needs. Every degree warmer means more economizer hours and less chiller energy.

## Before you change anything

1. Finish airflow management first: blanking panels, sealing, containment
2. Map rack inlet temperatures across the room
3. Check equipment specs for anything unusually sensitive

## Make the change

- Raise setpoints in small steps, about 1 °C at a time
- Wait and watch inlet temperatures, fan speeds and alarms after each step
- Stop when the hottest inlets approach the top of the recommended range

## Watch for

- **Server fans speeding up**, which can eat into the savings
- **Hot spots** at the tops of racks and row ends
- **Humidity**: check dew point limits as well as temperature

Document each step so you can roll back if needed. Troubleshooting skills help when the room doesn't respond as expected ([[836]]).`,
    },
  ],
};
