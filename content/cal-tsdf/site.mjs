// cal-tsdf.hazwoperosha.us: Cal/OSHA HAZWOPER and RCRA training for California TSDFs. Golden State poppy and Pacific blue.
export default {
  brand: "Cal TSDF Training",
  logo: `<span class="ct-poppy"></span>Cal TSDF Training`,
  title: "Cal/OSHA HAZWOPER Training for California TSDFs | Cal TSDF Training",
  description: "Training for California treatment, storage and disposal facility workers: Cal/OSHA 40-hour HAZWOPER and 8-hour refresher, with guides to TSDF rules.",
  theme: "#f76707",
  fonts: "family=Libre+Franklin:wght@400;600;800;900",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#1864ab"/><g fill="#ff922b"><ellipse cx="16" cy="10" rx="5" ry="6"/><ellipse cx="10" cy="17" rx="6" ry="5"/><ellipse cx="22" cy="17" rx="6" ry="5"/></g><circle cx="16" cy="15" r="3" fill="#fcc419"/></svg>`,
  hero: {
    title: "California TSDF? <span>Train to Cal/OSHA.</span>",
    lede: "California runs its own HAZWOPER rule (Title 8, §5192) and its own hazardous waste program. Courses written for Cal/OSHA, for workers at treatment, storage and disposal facilities.",
    cta: [577, "Cal/OSHA 40-Hour HAZWOPER · $229.99"],
    alt: ["/guides/california-tsdf-training-requirements", "What's required"],
  },
  coursesTagline: "Cal/OSHA TSDF, RCRA and HAZWOPER training.",
  guidesTagline: "California-specific requirements for facility workers.",

  courses: [
    { id: 577, short: "Cal/OSHA 40-Hour HAZWOPER", summary: "The 40-hour course for California sites.", body: "The 40-hour HAZWOPER course written for Cal/OSHA Title 8 §5192.", topics: ["Title 8 §5192", "PPE", "Decon", "Site safety"] },
    { id: 578, short: "Cal/OSHA 8-Hour Refresher", summary: "The annual Cal/OSHA HAZWOPER refresher.", body: "The 8-hour Cal/OSHA HAZWOPER refresher.", topics: ["Review", "California updates"] },
  ],

  guides: [
    {
      slug: "california-tsdf-training-requirements",
      title: "Training requirements for California TSDF workers",
      description: "Cal/OSHA and DTSC both have something to say about training.",
      date: "2026-10-25",
      courses: [],
      body: `California TSDF workers fall under two sets of rules.

## Cal/OSHA (worker safety)

Title 8 §5192(p) covers workers at permitted treatment, storage and disposal facilities. It mirrors the federal 1910.120(p):

- **24 hours** of initial training (or equivalent experience and training)
- **8 hours** of refresher training every year
- A safety and health program, hazard communication, medical surveillance, decontamination and an emergency response program

## DTSC (hazardous waste)

California's Department of Toxic Substances Control, under Title 22, requires facility personnel to be trained in hazardous waste management procedures for their jobs, with annual review and training records.

## Don't confuse them

The 24-hour TSDF course is not the same as the 24-hour HAZWOPER for occasional site workers. Make sure the course is written for §5192(p).
`,
    },
    {
      slug: "california-vs-federal-hazwoper",
      title: "California vs federal HAZWOPER: what's different?",
      description: "Why Cal/OSHA courses exist.",
      date: "2026-10-25",
      courses: [577, 578],
      body: `California is a state-plan state. Cal/OSHA's HAZWOPER rule is **Title 8 §5192**, and it must be at least as effective as the federal rule.

## In practice

- The training hours are the same: 40, 24 and 8-hour refreshers
- California's hazardous waste definitions are broader than federal RCRA, so more materials count as hazardous waste
- California has its own references, agencies and reporting (Cal/OSHA, DTSC, CUPAs)

## Which course?

Employers in California often prefer training that cites Title 8 and California rules. See [[577]] and [[578]].`,
    },
  ],
};
