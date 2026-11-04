// universities.hazwoperosha.us: campus-wide hazardous waste and spill training for colleges. Collegiate varsity.
export default {
  title: "Hazardous Waste Training for Colleges & Universities | Industrial Certified Training",
  description: "Campus-wide hazardous waste and spill training for colleges and universities: satellite accumulation, RCRA generator and refresher, universal waste, awareness and contingency planning.",
  theme: "#7a1f2b",
  fonts: "family=Graduate&family=Libre+Franklin:wght@400;500;600;700",
  hero: {
    title: "The whole campus <span>makes waste.</span>",
    lede: "Hazardous waste on campus isn't only in the chemistry building. Training for labs, facilities, art studios, motor pools and everyone who might find a spill.",
    cta: [415, "Satellite areas · $59.99"],
    alt: ["/guides/who-needs-hazardous-waste-training-on-campus", "Who needs training?"],
  },
  coursesTitle: "Course catalog",
  coursesTagline: "Hazardous waste and spill training for every department.",
  guidesTagline: "Campus-wide waste, art studios and spill response roles.",

  courses: [
    { id: 415, short: "Satellite Accumulation",
      summary: "Satellite accumulation rules for labs, studios and shops across campus.",
      body: `Every lab, studio and shop that collects waste at the point of generation runs a satellite accumulation area. Two hours on the rules.`,
      topics: ["Point of generation", "Volume limits", "Labels and hazard indication", "Closed containers"],
      who: "Researchers, lab staff, studio technicians and shop staff." },
    { id: 601, short: "RCRA Generator",
      summary: "Generator training for campus EHS and waste staff.",
      body: `Eight hours on generator rules for the staff who run the campus waste program.`,
      topics: ["Waste determination", "Generator categories", "Central accumulation", "Inspections and records"],
      who: "EHS staff and hazardous waste technicians." },
    { id: 600, short: "Generator Refresher",
      summary: "The annual RCRA refresher.",
      body: `Four hours of annual review.`,
      topics: ["Rules review", "Common campus violations", "Updates"],
      who: "Staff who completed generator training." },
    { id: 602, short: "Universal Waste",
      summary: "Batteries, lamps and mercury devices from across campus.",
      body: `Facilities and IT departments collect large volumes of universal waste. Two hours on the rules.`,
      topics: ["Categories", "Labels and time limits", "Broken lamps", "Shipping"],
      who: "Facilities, IT and custodial staff." },
    { id: 1099, short: "Awareness",
      summary: "Recognize a spill, get clear and call it in.",
      body: `Custodians, police and facilities staff often find spills first. Four hours on what to do.`,
      topics: ["Recognize", "Isolate", "Notify"],
      who: "Custodians, campus police and facilities staff." },
    { id: 412, short: "Contingency Plan",
      summary: "Contingency planning for large quantity generator campuses.",
      body: `Contingency plan contents and the emergency coordinator's role.`,
      topics: ["Plan contents", "Quick reference guide", "Coordinator duties"],
      who: "EHS managers and emergency coordinators." },
  ],

  guides: [
    {
      slug: "who-needs-hazardous-waste-training-on-campus",
      title: "Who needs hazardous waste training on a college campus?",
      description: "A department-by-department guide for campus EHS.",
      date: "2026-10-25",
      courses: [415, 601, 1099],
      body: `A university can be a large quantity generator, with waste coming from dozens of buildings. Training has to reach well beyond the science departments.

## Where campus hazardous waste comes from

| Department | Typical waste |
|---|---|
| Chemistry, biology, engineering labs | Solvents, reagents, acids, metals |
| Art and theater | Paints, solvents, photo chemicals, glazes |
| Facilities and maintenance | Paints, adhesives, oils, lamps, batteries |
| Motor pool | Used oil, antifreeze, solvents, batteries |
| Athletics and pools | Pool chemicals |
| Grounds | Pesticides, fuel |
| IT | Electronics and batteries |
| Medical center | Pharmaceuticals and lab waste |

## Suggested training

| Role | Course |
|---|---|
| Anyone who fills a waste container | [[415]] |
| EHS and waste technicians | [[601]], then [[600]] yearly |
| Facilities and IT | [[602]] |
| Custodians and campus police | [[1099]] |
| Emergency coordinators | [[412]] |

## Students

Students in labs and studios generate waste too. Most campuses cover the basics in lab safety orientation and post simple rules at every satellite area.`,
    },
    {
      slug: "art-studios-hazardous-waste",
      title: "Art studios and theater shops: the forgotten generators",
      description: "Paints, solvents and photo chemicals make art departments hazardous waste generators. How to bring them into the program.",
      date: "2026-10-25",
      courses: [415],
      body: `EHS programs often focus on research labs and miss the art building. Yet studios and scene shops generate plenty of hazardous waste.

## Common art and theater wastes

- **Solvents**: mineral spirits, turpentine and lacquer thinners from painting and printmaking
- **Oil-based paints** and stains
- **Photo chemicals**: fixers containing silver
- **Ceramics**: glazes with metals such as lead, barium and chromium
- **Aerosol paints and fixatives**
- **Rags** soaked with solvents and oils, which can also be a spontaneous combustion fire hazard

## Making it work

1. **Set up satellite accumulation areas** in each studio, with labeled containers and a pickup schedule
2. **Provide self-closing safety cans** for solvent waste and oily rags
3. **Train studio technicians**, who are the people actually running the areas. See [[415]].
4. **Post simple instructions** for students: what goes where
5. **Recycle where possible**: solvent recovery, silver recovery from fixer

## Inspection tip

Inspectors find the same problems in studios as in labs: open containers, missing "Hazardous Waste" labels and waste stored far from where it's generated.

{{buy:415}}`,
    },
    {
      slug: "campus-chemical-spill-response",
      title: "Chemical spill response on campus: who does what",
      description: "Lab staff, custodians, campus police and EHS each have a role. Define them before the spill.",
      date: "2026-10-25",
      courses: [1099, 412],
      body: `A spill in a teaching lab at 9 p.m. tests whether everyone knows their role.

## Typical roles

| Who | Role |
|---|---|
| Lab personnel | Clean up small spills of known materials they're trained for, with the lab's spill kit. Otherwise evacuate and call |
| Custodians and building staff | Recognize, keep people away, call. Don't clean up chemical spills |
| Campus police | Secure the area, help evacuate, call EHS and the fire department |
| EHS | Assess, decide on cleanup or outside help, document |
| Fire department / hazmat contractor | Larger or unknown releases |

## Incidental vs emergency

Small, known spills that the people in the area can safely handle are incidental. Anything bigger, unknown or dangerous is an emergency: evacuate and call.

## Training

- Custodians and police: [[1099]]
- Lab staff: lab-specific spill training plus the spill kit
- EHS and emergency coordinators: [[412]] if you're an LQG

## After the spill

Spill cleanup materials are often hazardous waste. Bag, label and send them to the waste program.`,
    },
  ],
};
