// train-the-trainer.hazwoperosha.us: HAZWOPER train-the-trainer certification. Lecture hall chalkboard green.
export default {
  title: "HAZWOPER Train-the-Trainer Certification | Industrial Certified Training",
  description: "Become a HAZWOPER instructor: train-the-trainer certification for safety professionals who teach the 40-hour, 24-hour, refresher and supervisor courses in-house.",
  theme: "#2b5d3a",
  fonts: "family=Caveat:wght@600;700&family=Source+Sans+3:wght@400;600;700",
  hero: {
    title: "Stop sending crews out. <span>Teach them yourself.</span>",
    lede: "Companies with steady HAZWOPER training needs often bring it in-house. The train-the-trainer course prepares experienced safety staff to teach HAZWOPER courses well.",
    cta: [1016, "Train-the-Trainer · $399.99"],
    alt: ["/guides/what-makes-a-qualified-hazwoper-trainer", "Who's qualified?"],
  },
  coursesTagline: "The trainer course, and the courses trainers teach.",
  guidesTagline: "Instructor qualifications and running a good class.",

  courses: [
    { id: 1016, short: "HAZWOPER Train-the-Trainer", summary: "Certification for HAZWOPER instructors.", body: "Twenty-four hours for experienced safety professionals preparing to teach HAZWOPER: adult learning, course design, hands-on exercises, evaluation and recordkeeping, on top of the technical content.", topics: ["Instructor qualifications", "Adult learning", "Hands-on exercises", "Testing and records"] },
    { id: 587, short: "40-Hour HAZWOPER", summary: "The course most trainers teach.", body: "The 40-hour initial course: a model for in-house programs.", topics: ["Site safety", "PPE", "Decon", "Monitoring"] },
    { id: 597, short: "HAZWOPER Supervisor", summary: "Supervisors often become trainers.", body: "Eight hours for HAZWOPER supervisors.", topics: ["Safety program", "PPE decisions", "Briefings"] },
    { id: 595, short: "8-Hour Refresher", summary: "Keep your own certification current.", body: "The annual refresher every trainer needs too.", topics: ["Review", "Updates"] },
  ],

  guides: [
    {
      slug: "what-makes-a-qualified-hazwoper-trainer",
      title: "What makes a qualified HAZWOPER trainer?",
      description: "OSHA's expectations for people who teach HAZWOPER.",
      date: "2026-10-25",
      courses: [1016],
      body: `OSHA's HAZWOPER standard says trainers must be **qualified to instruct** employees on the subject matter, shown by:

- Completing a train-the-trainer program for the subjects they teach, **or**
- Academic credentials and instructional experience

Trainers must also show competent instructional skills and knowledge of the applicable subject matter.

## In practice, employers look for

- Field experience on hazardous waste sites or in emergency response
- Their own current HAZWOPER certification and refreshers
- Train-the-trainer completion
- The ability to run hands-on exercises: donning and doffing, decon, air monitoring

## Keep records

Document each trainer's qualifications, and keep class rosters, tests and certificates for every course taught.

{{buy:1016}}`,
    },
    {
      slug: "running-a-hands-on-hazwoper-class",
      title: "Running a hands-on HAZWOPER class",
      description: "The exercises that make a course stick.",
      date: "2026-10-25",
      courses: [1016, 587],
      body: `People remember what they practice. Build these into your classes:

1. **Donning and doffing** each PPE level, with a buddy checking
2. **Decon line**: set up stations and run a full decon
3. **Air monitoring**: bump test, then read real or simulated sources
4. **Drum handling**: inspect, overpack and stage
5. **Spill response**: contain a water "spill" with booms and absorbents
6. **Tabletop**: an incident scenario with roles and radio calls

## Tips

- Keep groups small enough that everyone does every exercise
- Debrief each one: what went well, what to fix
- Use your own site's equipment and procedures where possible

Online courses ([[587]]) can cover the classroom content, freeing your in-person time for the hands-on parts.`,
    },
  ],
};
