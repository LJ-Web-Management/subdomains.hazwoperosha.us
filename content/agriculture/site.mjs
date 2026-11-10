// agriculture.hazwoperosha.us: spill, ammonia and chemical safety training for farms and ag retailers. Barn red and wheat.
export default {
  brand: "FarmSafe Hazmat",
  logo: `<span class="barn">⌂</span> FarmSafe Hazmat`,
  title: "Hazmat & Spill Training for Farms and Ag Retailers | FarmSafe Hazmat",
  description: "Training for farms, co-ops and ag retailers: first responder awareness, spill prevention, ammonia handling refresher, gas detection, spill kits and universal waste, with anhydrous ammonia, pesticide spill and fuel storage guides.",
  theme: "#9c2b23",
  fonts: "family=Bitter:wght@500;700;800&family=Open+Sans:wght@400;600;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#f3e3b5"/><path d="M5 28V14l11-8 11 8v14z" fill="#9c2b23"/><path d="M12 28v-8h8v8M12 20l8 8M20 20l-8 8" stroke="#f3e3b5" stroke-width="1.5" fill="none"/></svg>`,
  hero: {
    title: "Safe from <span>field to bin.</span>",
    lede: "Anhydrous ammonia, pesticides and fuel are everyday risks in agriculture. Spill and response training for farm crews and ag retail staff.",
    cta: [1099, "Awareness · $61.99"],
    alt: ["/guides/anhydrous-ammonia-on-the-farm", "Ammonia safety"],
  },
  coursesTagline: "Spill, ammonia and response courses for agriculture.",
  guidesTagline: "Anhydrous ammonia, pesticide spills and farm fuel storage.",

  courses: [
    { id: 1099, short: "Awareness",
      summary: "Recognize a chemical release, get clear and call for help.",
      body: `An ammonia leak or a pesticide spill needs the right first move: get upwind and call. Four hours on recognize, isolate, notify.`,
      topics: ["Recognizing releases", "Labels and placards", "Going upwind", "Notifying"],
      who: "Farm workers, applicators and ag retail staff." },
    { id: 416, short: "Spill Prevention",
      summary: "Preventing and responding to fuel, fertilizer and chemical spills.",
      body: `Two hours on spill prevention and first response at farms and ag retail sites.`,
      topics: ["Fuel storage", "Loading and mixing areas", "Containment", "Reporting"],
      who: "Farm crews and ag retail staff." },
    { id: 598, short: "Ammonia Refresher",
      summary: "HAZWOPER refresher focused on anhydrous ammonia.",
      body: `For ag retail and co-op staff on response teams for anhydrous ammonia. Eight hours focused on ammonia.`,
      topics: ["Ammonia properties and health effects", "1910.111 storage and handling", "PPE", "Release response"],
      who: "Ag retail ammonia handlers and responders." },
    { id: 1056, short: "Gas Detection",
      summary: "Gas detection for bins, pits and manure storage.",
      body: `Grain bins, manure pits and silos can hold toxic gases and low oxygen. Two hours on monitoring.`,
      topics: ["Oxygen, H2S, CO and NO2 risks", "Monitors", "Confined spaces"],
      who: "Farm crews and grain handlers." },
    { id: 602, short: "Universal Waste",
      summary: "Batteries, lamps and pesticides as universal waste.",
      body: `Recalled and unused pesticides can be managed as universal waste. Two hours on the rules.`,
      topics: ["Universal waste pesticides", "Batteries and lamps", "Labels and time limits"],
      who: "Farm managers and ag retail staff." },
  ],

  guides: [
    {
      slug: "anhydrous-ammonia-on-the-farm",
      title: "Anhydrous ammonia on the farm: nurse tanks and hoses",
      description: "Most farm ammonia injuries happen at connections and transfers. The essentials of handling it safely.",
      date: "2026-10-25",
      courses: [1099, 598],
      body: `Anhydrous ammonia is one of the most widely used fertilizers, and one of the most dangerous chemicals on the farm. It's stored and transported under pressure, and it seeks moisture: eyes, lungs and skin.

## Where injuries happen

- **Connecting and disconnecting** hoses between nurse tanks and toolbars
- **Hose failures** from worn, cracked or out-of-date hoses
- **Bleeding lines** before disconnecting
- **Towing**: tanks breaking loose or valves damaged in road accidents

## Before every use

- Check hoses for cracks, soft spots and the replacement date
- Check valves, gauges and the breakaway coupler
- Make sure the tank has at least **5 gallons of clean water** for flushing
- Wear **chemical splash goggles** (not just safety glasses) and ammonia-resistant gloves

## If you're exposed

Flush with lots of water immediately, for at least 15 minutes, and get medical help. Remove contaminated clothing.

## If a tank leaks

Get upwind and uphill, keep people away and call 911. Don't try to stop a large leak without SCBA and training.

{{buy:1099}}`,
    },
    {
      slug: "pesticide-spill-first-response",
      title: "Pesticide spills: the first 15 minutes",
      description: "Control, contain, clean up. What to do when pesticide spills in the shed, the field or on the road.",
      date: "2026-10-25",
      courses: [416],
      body: `Pesticide spills range from a cracked jug in the shed to a tank rollover on the road. The basic sequence is the same.

## 1. Protect yourself and others

Read the label for hazards and PPE. Keep people and animals away. Get upwind.

## 2. Control

Stop the source if it's safe: upright the container, close the valve, plug the leak.

## 3. Contain

Keep the spill from spreading, especially toward wells, ditches, streams and drains. Use absorbent socks, soil berms or spill pillows.

## 4. Clean up

Absorb liquids with absorbent material, sweep up dry spills carefully and put everything in labeled containers. Follow the label's spill instructions.

## 5. Report

Many states require reporting pesticide spills above certain amounts to the state agriculture or environmental agency. Large spills or spills reaching water may also need federal reporting. Know your state's numbers.

## Be ready

Keep a spill kit where pesticides are stored and mixed, with absorbent, a shovel, bags, PPE and the emergency numbers. See [[416]].

{{buy:416}}`,
    },
    {
      slug: "farm-fuel-storage-spcc",
      title: "Fuel storage on farms: SPCC basics",
      description: "Farms with enough aboveground fuel storage need a spill prevention plan. Here's when, and what it involves.",
      date: "2026-10-25",
      courses: [416],
      body: `EPA's Spill Prevention, Control and Countermeasure (SPCC) rule applies to farms that store oil, including diesel, gasoline and hydraulic oil, above certain amounts and could discharge to waters.

## Does it apply to your farm?

Under the current rule, farms with more than **2,500 gallons** of total aboveground oil storage capacity (counting containers of 55 gallons or more) may need an SPCC plan. Smaller farms are exempt. Many farms with moderate storage can self-certify their plan.

## What a plan covers

- Where oil is stored and how much
- **Secondary containment** such as dikes, double-walled tanks or berms
- Inspections of tanks and piping
- Procedures for fueling and transfers
- Spill response steps and contacts
- **Training** for people who handle oil

## Good practice for every farm

- Keep tanks away from wells, ditches and streams
- Use double-walled tanks or containment
- Never leave fueling unattended
- Keep a spill kit at the fuel station
- Inspect tanks and hoses regularly

{{buy:416}}`,
    },
  ],
};
