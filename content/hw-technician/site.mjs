// hw-technician.hazwoperosha.us: hazardous waste management technicians (field chemists, lab packers, waste techs). Lab-pack drum lids, cobalt.
export default {
  brand: "Waste Tech",
  logo: `<span class="wt-lid"></span>Waste Tech`,
  title: "Hazardous Waste Technician Training: HAZWOPER, RCRA & DOT | Waste Tech",
  description: "Training for hazardous waste technicians, field chemists and lab packers: the HAZWOPER and RCRA technician course, generator rules and the manifest.",
  theme: "#3b5bdb",
  fonts: "family=Red+Hat+Text:wght@400;500;700&family=Red+Hat+Display:wght@700;900",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><ellipse cx="16" cy="9" rx="11" ry="4" fill="#3b5bdb"/><path d="M5 9v15c0 2 5 4 11 4s11-2 11-4V9" fill="#4c6ef5"/><path d="M5 15c0 2 5 4 11 4s11-2 11-4" stroke="#bac8ff" stroke-width="1.5" fill="none"/></svg>`,
  hero: {
    title: "The people who <span>make waste go away.</span>",
    lede: "Hazardous waste technicians identify, package, label and ship the waste that everyone else wants gone. Training that covers both the safety and the compliance sides of the job.",
    cta: [599, "HAZWOPER & RCRA Technician · $349.99"],
    alt: ["/guides/lab-pack-basics", "Lab pack basics"],
  },
  coursesTagline: "HAZWOPER, RCRA and DOT training for waste technicians.",
  guidesTagline: "Lab packs and compatibility.",

  courses: [
    { id: 599, short: "HAZWOPER & RCRA Technician", summary: "Safety and compliance for hazardous waste technicians.", body: "Twenty-four hours combining HAZWOPER safety and RCRA hazardous waste management for technicians who handle, package and ship waste.", topics: ["HAZWOPER safety", "Waste identification", "Packaging and lab packs", "Labeling and shipping"] },
    { id: 580, short: "Hazardous Waste Manifest", summary: "Getting the manifest right.", body: "Two hours on the hazardous waste manifest.", topics: ["Manifest boxes", "Signatures", "e-Manifest"] },
    { id: 601, short: "RCRA Generator Training", summary: "The generator rules your customers follow.", body: "Eight hours on hazardous waste generator rules.", topics: ["Generator categories", "Accumulation", "Manifests"] },
  ],

  guides: [
    {
      slug: "lab-pack-basics",
      title: "Lab pack basics",
      description: "Packing small containers of chemicals for shipment, safely and legally.",
      date: "2026-10-25",
      courses: [599],
      body: `A **lab pack** is an outer container (usually a drum) holding many small containers of compatible chemicals, cushioned with absorbent.

## Steps

1. **Inventory** every container: name, amount, condition
2. **Identify** unknowns or poorly labeled containers before packing
3. **Segregate by compatibility**: acids, bases, oxidizers, flammables, water-reactives, poisons and so on
4. **Pack** each group in its own outer container with enough absorbent, inner containers upright and closed
5. **Record** a packing list for each drum
6. **Mark and label** the outer container, and prepare the manifest

## Watch for

- Peroxide formers (old ethers), picric acid and other shock-sensitive materials: don't move them, call a specialist
- Leaking or bulging containers
- Reactive or air-sensitive materials

{{buy:599}}`,
    },
    {
      slug: "compatibility-before-bulking",
      title: "Compatibility testing before bulking",
      description: "Why you test before you pour drums together.",
      date: "2026-10-25",
      courses: [599],
      body: `Bulking (combining compatible waste from many containers into one) saves money but can cause fires, toxic gases or explosions if wastes react.

## Before you bulk

- Check profiles, labels and SDSs
- Run field compatibility tests on small samples: pH, water reactivity, oxidizer, flammability and others
- Mix small amounts first and watch for heat, gas, bubbling or color change

## When bulking

- Ground and bond containers for flammable liquids
- Use proper PPE and respiratory protection
- Work with air monitoring and ventilation
- Have spill and fire equipment ready

## Never

Bulk unknowns, or mix incompatible waste streams to "make them disappear." Decon your equipment after each job.`,
    },
  ],
};
