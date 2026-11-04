// meth-lab-cleanup.hazwoperosha.us: clandestine drug lab remediation crews. Crime-scene tape yellow on concrete gray.
export default {
  brand: "Clandestine Lab Cleanup",
  logo: `<span class="cl-tape"></span>CLAN LAB CLEANUP`,
  title: "HAZWOPER Training for Meth Lab & Drug Lab Cleanup Crews | Clandestine Lab Cleanup",
  description: "HAZWOPER, PPE, air monitoring and decontamination training for contractors who remediate former meth labs and other clandestine drug labs.",
  theme: "#ffd43b",
  fonts: "family=Oswald:wght@500;700&family=Inter:wght@400;500",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#495057"/><path d="M-4 22L36 6v8L-4 30z" fill="#ffd43b"/><path d="M2 21l4-1.6M10 18l4-1.6M18 15l4-1.6M26 12l4-1.6" stroke="#000" stroke-width="3"/></svg>`,
  hero: {
    title: "The chemicals <span>stay behind.</span>",
    lede: "Clandestine drug labs leave toxic residues in walls, carpets, HVAC systems and plumbing. Cleanup crews need hazardous materials training, the right PPE and careful decon.",
    cta: [587, "40-Hour HAZWOPER · $249.99"],
    alt: ["/guides/what-meth-labs-leave-behind", "What labs leave behind"],
  },
  heroArt: `<div class="cl-band" aria-hidden="true"><span>CAUTION · DO NOT ENTER · CAUTION · DO NOT ENTER · CAUTION · DO NOT ENTER · CAUTION · DO NOT ENTER ·</span></div>`,
  coursesTagline: "HAZWOPER, PPE and monitoring training for lab remediation crews.",
  guidesTagline: "Residues, cleanup steps and protecting your crew.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "The baseline for remediation crews.", body: "The 40-hour initial HAZWOPER course for workers remediating contaminated properties.", topics: ["Hazard recognition", "PPE", "Decon", "Air monitoring"] },
    { id: 585, short: "PPE Levels A–D", summary: "Choosing PPE for lab cleanups.", body: "Fifteen minutes on PPE levels A through D.", topics: ["Levels A–D", "Respirators"] },
    { id: 583, short: "Air Monitoring", summary: "Checking the air before entry.", body: "Twenty minutes on direct-reading instruments.", topics: ["O₂ and LEL", "PIDs", "Action levels"] },
    { id: 584, short: "Decontamination", summary: "Keeping residue off you.", body: "Twenty minutes on decontamination procedures.", topics: ["Decon stations", "Doffing"] },
    { id: 595, short: "8-Hour Refresher", summary: "Stay current each year.", body: "The annual 8-hour HAZWOPER refresher.", topics: ["Review", "Updates"] },
  ],

  guides: [
    {
      slug: "what-meth-labs-leave-behind",
      title: "What meth labs leave behind",
      description: "The residues and hazards remediation crews find.",
      date: "2026-10-25",
      courses: [587, 583],
      body: `## Common hazards

- **Methamphetamine residue** on walls, ceilings, floors, furniture and inside ductwork
- **Solvents** and flammable liquids
- **Corrosives**: acids and bases
- **Toxic gases** from leftover reactions, such as phosphine and hydrogen chloride
- **Lithium, red phosphorus and iodine** depending on the production method
- **Sharps** and drug paraphernalia
- **Booby traps** at active or recently seized labs (law enforcement clears these first)

## Before your crew enters

- Make sure law enforcement has released the site and bulk chemicals have been removed
- Review any assessment or sampling reports
- Monitor the air (see [[583]])
- Set up zones and a decon area

## State rules

Many states have their own cleanup standards, contractor certification and sampling requirements for former drug labs. Check your state's program.

{{buy:587}}`,
    },
    {
      slug: "drug-lab-remediation-steps",
      title: "Drug lab remediation, step by step",
      description: "From the preliminary assessment to the final sampling.",
      date: "2026-10-25",
      courses: [587, 584, 585],
      body: `1. **Preliminary assessment**: history, visible contamination, sampling plan
2. **Ventilate** with fresh air and negative air machines where appropriate
3. **Remove contaminated materials**: carpets, furniture, drywall and ductwork that can't be cleaned
4. **Clean** remaining surfaces, often with detergent washes and rinses, repeated as needed
5. **Clean or replace HVAC** and plumbing traps
6. **Encapsulate** surfaces that pass cleanup but may still hold residue, if allowed
7. **Final sampling** against your state's cleanup standards
8. **Documentation** for the property owner and the state

## Protect the crew

PPE based on the assessment and monitoring ([[585]]), and decon every time workers leave the work area ([[584]]).`,
    },
  ],
};
