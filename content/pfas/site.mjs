// pfas.hazwoperosha.us: PFAS and AFFF remediation crews. Molecular C–F chain, aqua and slate.
export default {
  title: "HAZWOPER Training for PFAS & AFFF Remediation | Industrial Certified Training",
  description: "HAZWOPER training for PFAS investigation and remediation crews: firefighting foam (AFFF) sites, groundwater treatment, sampling precautions and decontamination.",
  theme: "#0c8599",
  fonts: "family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700",
  hero: {
    title: "Built to last. <span>Cleaned up carefully.</span>",
    lede: "PFAS from firefighting foam and industrial sources are now a major cleanup focus. Remediation and sampling crews need HAZWOPER training and PFAS-specific precautions.",
    cta: [590, "40-Hr Environmental Remediation · $249.99"],
    alt: ["/guides/pfas-sampling-precautions", "Sampling precautions"],
  },
  heroArt: `<svg class="pf-mol" viewBox="0 0 600 200" aria-hidden="true"><path d="M20 100 L100 60 L180 100 L260 60 L340 100 L420 60 L500 100 L580 60" stroke="#0c8599" stroke-width="4" fill="none"/><g fill="#66d9e8"><circle cx="20" cy="100" r="9"/><circle cx="100" cy="60" r="9"/><circle cx="180" cy="100" r="9"/><circle cx="260" cy="60" r="9"/><circle cx="340" cy="100" r="9"/><circle cx="420" cy="60" r="9"/><circle cx="500" cy="100" r="9"/><circle cx="580" cy="60" r="9"/></g></svg>`,
  coursesTagline: "HAZWOPER training for PFAS investigation and cleanup.",
  guidesTagline: "Sampling without contaminating samples, and AFFF site hazards.",

  courses: [
    { id: 590, short: "40-Hour Environmental Remediation", summary: "Full HAZWOPER for remediation crews.", body: "The 40-hour HAZWOPER course built for environmental remediation work, including investigation, groundwater and soil cleanup.", topics: ["Remediation site hazards", "Drilling and sampling safety", "PPE and decon", "Site control"] },
    { id: 587, short: "40-Hour HAZWOPER", summary: "The general 40-hour course.", body: "The 40-hour initial HAZWOPER course.", topics: ["Site safety", "PPE", "Decon"] },
    { id: 586, short: "Site Characterization", summary: "Before you sample.", body: "Twenty minutes on site characterization and hazard assessment.", topics: ["Preliminary evaluation", "Monitoring"] },
    { id: 584, short: "Decontamination", summary: "Decon at PFAS sites.", body: "Twenty minutes on decontamination procedures.", topics: ["Decon stations", "Doffing"] },
    { id: 595, short: "8-Hour Refresher", summary: "Stay current each year.", body: "The annual 8-hour refresher.", topics: ["Review", "Updates"] },
  ],

  guides: [
    {
      slug: "pfas-sampling-precautions",
      title: "PFAS sampling precautions",
      description: "PFAS are everywhere, including in your gear. Keep them out of the samples.",
      date: "2026-10-25",
      courses: [590, 586],
      body: `PFAS are measured at parts-per-trillion levels, and many everyday products contain them. Sampling crews follow strict precautions so their own gear doesn't contaminate samples.

## Commonly avoided on sampling days

- Waterproof or stain-resistant clothing and boots (unless verified PFAS-free)
- Tyvek-type suits not verified as PFAS-free
- PTFE (Teflon) tubing, tape and sampling equipment
- Waterproof field books and some sticky notes
- Some sunscreens, insect repellents and cosmetics
- Fast food wrappers and pre-packaged food in the sampling area

## Instead

- Laboratory-approved materials (HDPE, polypropylene, silicone)
- Nitrile gloves, changed often
- PFAS-free water for decon and blanks
- Field blanks and equipment blanks to catch contamination

Follow your project's sampling plan and the lab's guidance. Safety still comes first: if PPE is needed for hazards, wear it and document it.

{{buy:590}}`,
    },
    {
      slug: "afff-site-hazards",
      title: "Hazards at AFFF release sites",
      description: "Firefighting foam sites bring more than PFAS.",
      date: "2026-10-25",
      courses: [590, 584],
      body: `Sites where aqueous film-forming foam (AFFF) was used, such as airports, military bases, fire training areas and refineries, often have other hazards too.

## What crews may find

- **Fuels and solvents** from fire training pits
- **Heavy metals** and combustion residues
- **Utilities**: buried fuel lines and electrical lines at airfields and bases
- **Unexploded ordnance** on some military sites (requires specialist clearance)
- **Active operations**: aircraft and vehicle traffic

## Regulatory context

EPA designated PFOA and PFOS as CERCLA hazardous substances in 2024, and many states have their own PFAS standards. Expect more PFAS investigation and cleanup work, and site-specific health and safety plans that address PFAS along with other contaminants.

## Protect crews

HAZWOPER training, site-specific briefings, PPE based on the hazards, and thorough decon ([[584]]).`,
    },
  ],
};
