// careers.hazwoperosha.us: starting a career in hazardous waste and environmental services. Optimistic job board.
export default {
  title: "Start a Career in Hazardous Waste & Environmental Cleanup | Industrial Certified Training",
  description: "Get the training employers look for in hazardous waste, remediation and environmental services jobs: 40-hour and 24-hour HAZWOPER, RCRA/DOT, waste technician, refresher and awareness courses.",
  theme: "#6d28d9",
  fonts: "family=Lexend:wght@400;500;600;700;800",
  hero: {
    title: "Your first step into <span>environmental work.</span>",
    lede: "Remediation, waste services and emergency response companies hire people with HAZWOPER training. Get certified online and walk into interviews ready.",
    cta: [587, "Get the 40-hour · $249.99"],
    alt: ["/guides/start-a-career-in-hazardous-waste", "How to get started"],
  },
  coursesTitle: "Certifications employers ask for",
  coursesTagline: "The training that shows up most in environmental job postings.",
  guidesTagline: "Breaking in, what the work is like and which certificates matter.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER",
      summary: "The certification most environmental field jobs list first.",
      body: `The OSHA 40-hour HAZWOPER is the standard entry requirement for hazardous waste site work. Employers still provide the supervised field days after hire.`,
      topics: ["Hazard recognition", "Site safety plans", "PPE and respirators", "Monitoring", "Decon", "Emergencies"],
      who: "Anyone starting out in remediation, waste services or spill response." },
    { id: 581, short: "24-Hour HAZWOPER",
      summary: "For roles with limited site exposure.",
      body: `For roles like surveying, inspection and field support with limited exposure.`,
      topics: ["Who qualifies", "Hazard recognition", "PPE basics"],
      who: "Field support and inspection roles." },
    { id: 403, short: "RCRA/DOT Combined",
      summary: "Waste and hazmat shipping knowledge that sets applicants apart.",
      body: `Waste technicians package, label and ship hazmat. This eight-hour course covers RCRA and DOT basics.`,
      topics: ["Hazardous waste rules", "DOT hazmat basics", "Manifests", "Marking and labeling"],
      who: "Aspiring waste technicians and drivers." },
    { id: 599, short: "Waste Technician",
      summary: "Technician skills for environmental services companies.",
      body: `24 hours of combined HAZWOPER and RCRA technician training.`,
      topics: ["Lab packing", "Consolidation", "Waste codes", "Spill response"],
      who: "Aspiring field waste technicians." },
    { id: 595, short: "8-Hour Refresher",
      summary: "Keep your certification current between jobs.",
      body: `Your 40-hour stays current only with an 8-hour refresher every 12 months.`,
      topics: ["Hazard review", "PPE and monitoring", "Case studies"],
      who: "Anyone with an initial certificate." },
    { id: 1099, short: "Awareness",
      summary: "A short, affordable first certificate.",
      body: `Four hours on recognizing and reporting hazardous releases.`,
      topics: ["Recognize", "Isolate", "Notify"],
      who: "Security, warehouse and facility job seekers." },
  ],

  guides: [
    {
      slug: "start-a-career-in-hazardous-waste",
      title: "How to start a career in hazardous waste and environmental cleanup",
      description: "The jobs, the training and the first steps for people new to the field.",
      date: "2026-10-25",
      courses: [587, 403],
      body: `Environmental services is a field where training matters more than a degree for many entry-level jobs.

## Where the jobs are

| Employer type | Entry-level roles |
|---|---|
| Remediation contractors | Field technician, laborer, equipment operator |
| Environmental services / waste companies | Waste technician, driver, facility operator |
| Industrial cleaning companies | Vac truck operator, technician |
| Emergency response contractors | Response technician |
| Consulting firms | Field technician, sampler |

## Training that helps you get hired

1. **[[587]]**: the certificate most postings ask for
2. **A driver's license**, and for some roles a CDL with hazmat endorsement
3. **[[403]]** for waste technician and driver roles
4. **Basic first aid/CPR**

## Your first months

Employers provide site orientation, the supervised field days required after the 40-hour, respirator fit testing and medical clearance. Show up on time, ask questions and follow the site safety plan.

## Keep it current

Take the 8-hour refresher every year to stay employable between jobs.`,
    },
    {
      slug: "what-hazwoper-technicians-do",
      title: "What does a HAZWOPER technician do all day?",
      description: "A realistic look at field work in remediation and waste services.",
      date: "2026-10-25",
      courses: [599, 587],
      body: `"HAZWOPER technician" covers many jobs. Here's what a typical day can look like in a few of them.

## Remediation field technician

- Morning tailgate safety briefing
- Suiting up in the PPE for the day's tasks
- Collecting soil and groundwater samples
- Running air monitoring
- Helping operate equipment and treatment systems
- Going through decon before breaks and at the end of the day
- Filling out field logs

## Waste technician

- Visiting customer sites such as labs, schools and plants
- Inventorying and classifying chemicals
- Packing lab packs and consolidating drums
- Labeling and preparing manifests
- Loading the truck for shipment

## Emergency response technician

- On-call shifts
- Responding to spills on highways, at plants or at waterways
- Containing and cleaning up, often for long hours

## What it takes

Physical stamina, comfort working in PPE in heat and cold, attention to detail and following procedures exactly. Many people start as technicians and move into supervision, project management or EHS.`,
    },
    {
      slug: "certifications-that-get-you-hired",
      title: "Certifications that get you hired in environmental services",
      description: "Which certificates matter, in what order, and how to keep them current.",
      date: "2026-10-25",
      courses: [587, 595, 403, 599],
      body: `## Start here

| Certificate | Why |
|---|---|
| [[587]] | Required for most hazardous waste site work |
| [[595]] (yearly) | Keeps your 40-hour current |

## Add for waste and transport roles

| Certificate | Why |
|---|---|
| [[403]] | DOT hazmat and RCRA basics |
| [[599]] | Technician skills employers look for |
| CDL with hazmat endorsement | Required to drive placarded loads |

## Later in your career

- 8-hour HAZWOPER supervisor
- Confined space entry
- Incident command
- Specialized training for asbestos, lead or radiological work, depending on the job

## Keep your records

Save every certificate as a PDF on your phone and in email. Note your refresher due date. When you apply, list each certificate with the date completed.

## A word of caution

Training gets you in the door. Employers still require their own site orientation, the supervised field days after the 40-hour, medical clearance and respirator fit testing before you work in the field.`,
    },
  ],
};
