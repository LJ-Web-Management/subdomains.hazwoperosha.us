// data-centers.hazwoperosha.us: spill, battery and chemical safety for data center facilities teams. Server rack LEDs.
export default {
  brand: "RackRoom Safety",
  logo: `<span class="leds"><i></i><i></i><i></i></span>RACKROOM SAFETY`,
  title: "Battery, Fuel & Spill Training for Data Center Teams | RackRoom Safety",
  description: "Training for data center facilities teams: spill prevention for generator fuel, spill kits, universal waste batteries, awareness, gas detection and RCRA generator training, with battery room and SPCC guides.",
  theme: "#0a0f1a",
  fonts: "family=Share+Tech+Mono&family=Inter:wght@400;500;600;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#0a0f1a"/><rect x="6" y="5" width="20" height="5" rx="1" fill="#16213a"/><rect x="6" y="13" width="20" height="5" rx="1" fill="#16213a"/><rect x="6" y="21" width="20" height="5" rx="1" fill="#16213a"/><circle cx="22" cy="7.5" r="1.3" fill="#38bdf8"/><circle cx="22" cy="15.5" r="1.3" fill="#4ade80"/><circle cx="22" cy="23.5" r="1.3" fill="#38bdf8"/></svg>`,
  hero: {
    title: "Uptime starts with <span>safe facilities.</span>",
    lede: "UPS batteries, diesel generators and cooling chemicals bring real hazmat risks into the data center. Training for critical facilities teams.",
    cta: [416, "Spill prevention · $49.99"],
    alt: ["/guides/data-center-battery-room-hazards", "Battery room hazards"],
  },
  heroArt: `<div class="rack" aria-hidden="true"></div>`,
  coursesTagline: "Spill, battery and response training for critical facilities teams.",
  guidesTagline: "Battery rooms, generator fuel and the other chemicals in the building.",

  courses: [
    { id: 416, short: "Spill Prevention",
      summary: "Preventing and responding to fuel and electrolyte spills.",
      body: `Generator fuel deliveries, day tanks and battery rooms are the main spill risks. Two hours on prevention and first response.`,
      topics: ["Fuel deliveries and day tanks", "Secondary containment", "Battery electrolyte", "Reporting"],
      who: "Critical facilities technicians and engineers." },
    { id: 479, short: "Spill Kit Use",
      summary: "Choosing and using spill kits, including acid kits for battery rooms.",
      body: `One hour on spill kits: oil-only for fuel, acid-neutralizing for battery rooms.`,
      topics: ["Kit types", "Acid neutralizers", "Disposal"],
      who: "Facilities technicians." },
    { id: 602, short: "Universal Waste",
      summary: "Managing spent UPS batteries and lamps as universal waste.",
      body: `Battery replacements generate large volumes of spent batteries. Two hours on universal waste rules.`,
      topics: ["Battery categories", "Labeling and time limits", "Damaged batteries", "Shipping"],
      who: "Facilities and battery service staff." },
    { id: 1099, short: "Awareness",
      summary: "Recognize a hazardous release and get clear.",
      body: `Four hours on recognizing releases, from battery off-gassing to fuel leaks, and what to do.`,
      topics: ["Recognize", "Isolate", "Notify"],
      who: "Facilities, security and operations staff." },
    { id: 1056, short: "Gas Detection",
      summary: "Hydrogen, refrigerant and oxygen monitoring.",
      body: `Two hours on gas detection, including hydrogen from battery charging and low oxygen after clean agent discharge.`,
      topics: ["Hydrogen and LEL", "Oxygen deficiency", "Fixed and portable detectors", "Calibration"],
      who: "Facilities engineers and technicians." },
    { id: 601, short: "RCRA Generator",
      summary: "Hazardous waste generator training for campus facilities.",
      body: `Coolants, fuel tank residues and some battery wastes can be hazardous waste. Eight hours on generator rules.`,
      topics: ["Waste determination", "Containers and labels", "Accumulation", "Manifests"],
      who: "EHS and facilities managers." },
  ],

  guides: [
    {
      slug: "data-center-battery-room-hazards",
      title: "Battery room hazards in data centers",
      description: "Lead-acid and lithium-ion UPS batteries carry different risks. What facilities teams need to know.",
      date: "2026-10-25",
      courses: [1056, 479, 1099],
      body: `UPS battery rooms keep the data center running during power interruptions. They also store a lot of energy and chemicals.

## Lead-acid batteries (VRLA and flooded)

- **Hydrogen gas** is produced during charging, especially overcharging. Hydrogen is flammable above about 4% in air. Battery rooms need ventilation, and many have hydrogen detection.
- **Sulfuric acid electrolyte** can leak from damaged or flooded cells. Keep acid-neutralizing spill kits and eyewash stations nearby.
- **Thermal runaway** is possible with VRLA batteries in high temperatures.

## Lithium-ion batteries

- **Thermal runaway** can spread cell to cell, releasing flammable and toxic gases and causing fires that are hard to put out.
- Battery management systems, off-gas detection and specific fire protection are common.

## Everyday controls

- PPE for battery work: face shield, acid-resistant gloves and apron
- Insulated tools
- No ignition sources in the room
- Eyewash and spill kits within reach. OSHA requires suitable facilities for flushing eyes where corrosives are present.
- Follow the battery manufacturer's procedures

## If something goes wrong

Smoke, a sweet chemical smell, swelling or heat from a battery cabinet: get out, alert others and call the emergency number. See [[1099]].`,
    },
    {
      slug: "data-center-generator-fuel-spcc",
      title: "Generator fuel and SPCC at data centers",
      description: "Backup generator fuel storage often triggers EPA's spill prevention rule. What that means.",
      date: "2026-10-25",
      courses: [416, 479],
      body: `Most data centers keep diesel on site for backup generators, often tens of thousands of gallons across belly tanks, day tanks and bulk tanks.

## Does SPCC apply?

EPA's Spill Prevention, Control and Countermeasure rule (40 CFR Part 112) applies when a facility has more than **1,320 gallons** of aboveground oil storage (counting containers of 55 gallons or more) and could discharge to navigable waters or shorelines. Many data centers exceed that easily.

## What's required

- A written **SPCC plan**, certified by a professional engineer unless you qualify to self-certify
- **Secondary containment** for tanks and transfer areas
- **Inspections and testing** of tanks
- **Training** for oil-handling personnel and an **annual discharge prevention briefing**

## The riskiest moments

- **Fuel deliveries**: overfills, hose failures and drivers walking away
- **Generator testing**: leaks at fittings and day tanks
- **Fuel polishing and maintenance**

## Good practice

- Attend every delivery
- Keep oil spill kits at fill points and the generator yard
- Protect storm drains near fuel areas
- Train staff on the SPCC plan. See [[416]].`,
    },
    {
      slug: "other-chemicals-in-the-data-center", seoTitle: "Refrigerants, glycol and clean agents in data centers",
      title: "Refrigerants, glycol and clean agents: other chemicals in the data center",
      description: "Cooling and fire suppression systems bring their own hazards. A quick overview.",
      date: "2026-10-25",
      courses: [1056, 601],
      body: `## Refrigerants

Chillers and CRAC units use refrigerants. A large leak in an enclosed space can displace oxygen. Some newer refrigerants are mildly flammable. Machine rooms often have refrigerant detectors and ventilation.

## Glycol cooling loops

Propylene or ethylene glycol mixtures circulate in cooling systems. Leaks are slippery and messy, and ethylene glycol is toxic if swallowed. Spent glycol must be managed properly, as it can't go down storm drains.

## Clean agent fire suppression

Systems using agents such as HFC-227ea or FK-5-1-12 flood the space when they discharge. They're designed to be safe for occupied spaces at design concentrations, but staff should still leave the area on alarm. After a discharge, ventilate and confirm normal oxygen before re-entry.

## Inert gas systems

Inergen and similar systems lower the oxygen level to stop a fire. Evacuate on alarm, and don't re-enter until the space has been ventilated and checked. See [[1056]].

## Waste

Spent coolant, filters and some cleaning chemicals can be hazardous waste. See [[601]].`,
    },
  ],
};
