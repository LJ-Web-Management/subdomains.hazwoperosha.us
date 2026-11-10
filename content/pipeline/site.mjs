// pipeline.hazwoperosha.us: HAZWOPER for utility and pipeline emergency response. Right-of-way marker posts, yellow and black.
export default {
  brand: "Right of Way",
  logo: `<span class="rw-post"></span>Right of Way`,
  title: "HAZWOPER for Pipeline & Utility Emergency Response | Right of Way",
  description: "HAZWOPER training for pipeline and utility emergency responders: the 40-hour utility/pipeline course, incident command, refresher training and spill response.",
  theme: "#fab005",
  fonts: "family=Saira+Extra+Condensed:wght@700;800&family=Roboto:wght@400;500",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#1a1a1a"/><rect x="11" y="3" width="10" height="26" fill="#fab005"/><path d="M11 9h10M11 13h10" stroke="#1a1a1a" stroke-width="2"/></svg>`,
  hero: {
    title: "First on scene <span>at the line.</span>",
    lede: "When a pipeline or utility line fails, company responders are often there before anyone else. HAZWOPER training built for the people who make the scene safe and stop the release.",
    cta: [593, "Incident Command (q) · $199.99"],
    alt: ["/guides/pipeline-release-first-actions", "First actions"],
  },
  coursesTagline: "HAZWOPER and response training for pipeline and utility crews.",
  guidesTagline: "First actions at a release, and working with the fire department.",

  courses: [
    { id: 593, short: "Incident Command (q)", summary: "Command for HAZWOPER emergency response.", body: "Eight hours of incident command training under 1910.120(q).", topics: ["ICS structure", "Unified command", "Resource management"] },
    { id: 574, short: "Refresher with Incident Command", summary: "The annual refresher with ICS.", body: "The 8-hour annual refresher with incident command content.", topics: ["Review", "ICS", "Lessons learned"] },
    { id: 1056, short: "Gas Detection", summary: "Monitoring at gas releases.", body: "Two hours on air monitoring and gas detection.", topics: ["LEL and O₂", "Bump tests", "Readings"] },
  ],

  guides: [
    {
      slug: "pipeline-release-first-actions",
      title: "First actions at a pipeline release",
      description: "Life safety, ignition sources and isolation, in that order.",
      date: "2026-10-25",
      courses: [1056],
      body: `## 1. Approach safely

From upwind and uphill. Look for dead vegetation, frost on the ground, hissing, bubbling water, a sheen or a vapor cloud.

## 2. Protect people

Call 911. Keep people out, and evacuate or shelter as needed. Treat any gas release as flammable until monitoring says otherwise.

## 3. Control ignition sources

No vehicles, phones, tools or switches near the release. Don't operate electrical equipment in the area.

## 4. Monitor

Measure oxygen, %LEL and toxics (such as H₂S) from the edge inward. See [[1056]].

## 5. Isolate

Close valves only if you're trained and authorized and it's safe. Coordinate with the control room.

## 6. Hand over

Share what you know with the fire department and unified command: product, pressure, valve locations, and actions taken.
`,
    },
    {
      slug: "working-with-the-fire-department",
      title: "Working with the fire department at a utility incident",
      description: "Unified command makes the operator and responders one team.",
      date: "2026-10-25",
      courses: [593, 574],
      body: `Pipeline and utility incidents work best under **unified command**: the fire department and the operator share objectives and one plan.

## The operator brings

- Product, pressure and line details
- Valve locations and shut-off times
- Specialized repair crews and equipment
- Knowledge of the right-of-way

## The fire department brings

- Scene control, rescue and fire suppression
- Evacuation and public protection
- Command of mutual aid resources

## Before the incident

Meet local departments, share maps and emergency contacts, and run joint exercises. Incident command training ([[593]]) helps your supervisors fit into the command structure.`,
    },
  ],
};
