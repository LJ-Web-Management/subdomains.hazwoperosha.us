// trucking.hazwoperosha.us: hazmat and hazardous waste training for carriers and drivers. Truck-stop neon.
export default {
  title: "Hazmat Training for Truck Drivers & Carriers | DOT, Spills, Waste Hauling | Industrial Certified Training",
  description: "Training for hazmat carriers and drivers: RCRA/DOT combined, first responder awareness, spill prevention, spill kit use and hazardous waste manifests, with guides for drivers and waste transporters.",
  theme: "#1a0b2e",
  fonts: "family=Monoton&family=Inter:wght@400;500;600;700",
  hero: {
    title: "Haul it <span>right.</span>",
    lede: "DOT hazmat, spill response and hazardous waste transport training for drivers, dispatchers and carrier safety managers.",
    cta: [403, "RCRA/DOT Combined · $149.99"],
    alt: ["/guides/hazmat-driver-training-requirements", "Driver training rules"],
  },
  coursesTagline: "Training for hazmat drivers, dispatchers and waste haulers.",
  guidesTagline: "Driver training rules, roadside spills and hauling hazardous waste.",

  courses: [
    { id: 403, short: "RCRA/DOT Combined",
      summary: "DOT hazmat employee training combined with RCRA hazardous waste rules.",
      body: `Drivers who haul hazmat are hazmat employees under 49 CFR 172.704. Waste haulers also need to know RCRA transporter duties. This eight-hour course covers both.`,
      topics: ["Hazmat classes and placards", "Shipping papers", "Packaging and securement basics", "Hazardous waste and the manifest", "Security awareness"],
      who: "Hazmat drivers, dispatchers and waste haulers." },
    { id: 1099, short: "Awareness",
      summary: "What a driver does in the first minutes of a release.",
      body: `When a load leaks on the road, the driver is first on scene. Four hours on recognizing, isolating and notifying.`,
      topics: ["Recognizing a release", "Using the ERG", "Isolating the scene", "Notifying"],
      who: "Hazmat drivers." },
    { id: 416, short: "Spill Prevention",
      summary: "Preventing and responding to spills during loading, unloading and on the road.",
      body: `Most spills happen at the dock and the fill connection, not on the highway. Two hours on prevention and first response.`,
      topics: ["Loading and unloading spills", "Hoses and connections", "First response", "Reporting"],
      who: "Drivers and dock staff." },
    { id: 479, short: "Spill Kit Use",
      summary: "Using the spill kit on your truck.",
      body: `One hour on choosing and using a truck spill kit.`,
      topics: ["Kit contents", "Drain covers", "Disposal"],
      who: "Drivers." },
    { id: 580, short: "Manifest",
      summary: "The hazardous waste manifest from the transporter's side.",
      body: `Two hours on signing, carrying and delivering the manifest, and e-Manifest.`,
      topics: ["Transporter signature", "Carrying the manifest", "Delivery and copies", "e-Manifest"],
      who: "Hazardous waste haulers." },
  ],

  guides: [
    {
      slug: "hazmat-driver-training-requirements",
      title: "Hazmat driver training: what you actually need",
      description: "The CDL endorsement, DOT hazmat employee training and driver training are three different things.",
      date: "2026-10-25",
      courses: [403],
      body: `Hazmat drivers often hear "you need training" without hearing which training. There are three separate pieces.

## 1. The hazmat endorsement (H)

To drive a placarded load in a commercial vehicle, a driver needs the **H endorsement** on their CDL. That means a knowledge test and a TSA security threat assessment. It's a licensing requirement, not employer training.

## 2. DOT hazmat employee training (49 CFR 172.704)

Every hazmat employee, drivers included, needs training from their employer:

- General awareness and familiarization
- Function-specific training for their tasks
- Safety training: emergency response information and protective measures
- Security awareness, plus in-depth security training if the company has a security plan

**Within 90 days** of starting, and **at least every three years**.

## 3. Hazmat driver training (49 CFR 177.816)

Drivers also need training on operating a vehicle carrying hazmat, covering:

- Pre-trip safety inspections
- Use of vehicle controls and equipment, including emergency equipment
- Operation, including turning, backing, braking, parking and handling
- Procedures for tunnels, bridges and railroad crossings
- Attending vehicles, parking, smoking and route restrictions
- Loading and unloading

## Keep records

Carriers keep a training record for each hazmat employee for as long as they're employed and 90 days after.

{{buy:403}}`,
    },
    {
      slug: "roadside-hazmat-spill-driver",
      title: "A leak on the road: what the driver does",
      description: "The driver is the first responder for their own load. A step-by-step plan.",
      date: "2026-10-25",
      courses: [1099, 479],
      body: `You notice a leak at a fuel stop, or after a minor crash. Here's what to do.

## 1. Protect yourself

Get out of the vapor and liquid. Move upwind and uphill. Don't touch or walk through the material.

## 2. Keep people back

Stop bystanders and other drivers from approaching. Use warning devices as you would for any stopped vehicle, if safe to do so.

## 3. Call it in

Call 911, then your dispatcher. Have ready:

- The **shipping papers**, which list the material, hazard class, UN number and an emergency response phone number. They must be within reach while you're at the controls, and on the driver's seat or in the door pocket when you leave the cab.
- Your location
- What's leaking and how much

## 4. Use the ERG

Look up the UN number for initial isolation distances and hazards.

## 5. Contain only if it's safe

A small, known leak may be stopped or contained with your spill kit if you're trained and it's safe. See [[479]]. Otherwise, wait for responders.

## 6. Report

Serious incidents must be reported under 49 CFR 171.15 and 171.16. Your carrier's safety department handles this, but your notes matter.

{{buy:1099}}`,
    },
    {
      slug: "hauling-hazardous-waste-transporter-rules",
      title: "Hauling hazardous waste: the transporter's rules",
      description: "Waste transporters have EPA duties on top of DOT's. The essentials for drivers and carriers.",
      date: "2026-10-25",
      courses: [580, 403],
      body: `Hazardous waste transporters follow DOT hazmat rules **and** EPA's transporter rules at 40 CFR Part 263.

## Key EPA requirements

- **EPA ID number.** A transporter can't move hazardous waste without one.
- **Manifest.** Accept waste only with a properly completed manifest. Sign and date it, give the generator a copy, carry it with the load and get the next handler's signature.
- **Deliver as directed.** Deliver the entire quantity to the designated facility, or the alternate listed.
- **Records.** Keep a copy of the manifest for three years.
- **e-Manifest.** Many shipments now use electronic manifests.

## Spills during transport

Under 40 CFR 263.30 and 263.31, if hazardous waste is discharged during transport the transporter must:

1. Take appropriate immediate action to protect health and the environment, such as notifying authorities and diking the discharge
2. Make the required federal notifications and reports
3. Clean up the discharge, or take action so it no longer presents a hazard

## Training

Drivers hauling waste need DOT hazmat training and should understand the manifest. [[403]] and [[580]] cover both.`,
    },
  ],
};
