// wildfire-cleanup.hazwoperosha.us: HAZWOPER for wildfire debris and hazardous materials cleanup. Ash gray and ember orange.
export default {
  brand: "Ash & Ember",
  logo: `<span class="ae-ember"></span>Ash &amp; Ember`,
  title: "HAZWOPER Training for Wildfire Debris & Hazmat Cleanup | Ash & Ember",
  description: "Training for crews cleaning up after wildfires: household hazardous waste removal, ash and debris hazards, PPE and HAZWOPER courses for disaster cleanup contractors.",
  theme: "#e8590c",
  fonts: "family=Big+Shoulders+Text:wght@700;800&family=Inter:wght@400;500",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#343a40"/><path d="M16 4c3 6 9 8 9 15a9 9 0 01-18 0c0-4 2-6 4-8 0 3 2 5 3 5 0-5 0-9 2-12z" fill="#e8590c"/><path d="M16 16c2 3 4 4 4 7a4 4 0 01-8 0c0-2 2-4 4-7z" fill="#ffd43b"/></svg>`,
  hero: {
    title: "After the fire, <span>the hazards stay.</span>",
    lede: "Burned homes and businesses leave behind ash with heavy metals, asbestos, damaged batteries, propane tanks and pool chemicals. Training for the crews who clean it up.",
    cta: [587, "40-Hour HAZWOPER · $249.99"],
    alt: ["/guides/hazards-in-wildfire-ash", "What's in the ash"],
  },
  heroArt: `<div class="ae-ash" aria-hidden="true"></div>`,
  coursesTagline: "HAZWOPER and PPE training for disaster cleanup crews.",
  guidesTagline: "Ash hazards and household hazardous waste removal.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "For crews removing hazardous materials.", body: "The 40-hour initial HAZWOPER course for workers removing hazardous materials after disasters.", topics: ["Hazard recognition", "PPE", "Decon", "Site control"] },
    { id: 581, short: "24-Hour HAZWOPER", summary: "For limited-exposure cleanup roles.", body: "The 24-hour initial course for occasional or low-exposure cleanup work.", topics: ["Who qualifies", "PPE basics"] },
    { id: 1099, short: "First Responder Awareness", summary: "Recognize hazardous materials in debris.", body: "Four hours on recognizing hazardous materials and getting help.", topics: ["Recognize", "Isolate", "Notify"] },
    { id: 585, short: "PPE Levels A–D", summary: "Choosing PPE for ash and debris.", body: "Fifteen minutes on PPE levels A through D.", topics: ["Levels A–D", "Respirators"] },
    { id: 584, short: "Decontamination", summary: "Keeping ash off you and out of your truck.", body: "Twenty minutes on decontamination procedures.", topics: ["Decon stations", "Doffing"] },
  ],

  guides: [
    {
      slug: "hazards-in-wildfire-ash",
      title: "What's in wildfire ash and debris",
      description: "Why burned structures are a hazardous waste problem.",
      date: "2026-10-25",
      courses: [587, 585],
      body: `Ash from burned buildings isn't just wood ash. It can contain:

- **Heavy metals**: lead, arsenic, cadmium and others from paint, treated wood and electronics
- **Asbestos** from older building materials
- **Caustic ash** that can burn skin and eyes when wet
- **Household chemicals**: pesticides, pool chemicals, solvents, paints
- **Damaged lithium batteries** from vehicles, tools and home energy storage, which can reignite
- **Propane and compressed gas cylinders**

## Protect workers

- Respiratory protection: at minimum a properly fitted N95 for ash, and higher protection where asbestos or chemicals are present
- Long sleeves, gloves, goggles and boots
- Wet methods to keep dust down
- Decon before breaks and leaving the site

{{buy:587}}`,
    },
    {
      slug: "household-hazardous-waste-removal",
      title: "Removing household hazardous waste after a wildfire",
      description: "The first phase of cleanup, before debris removal.",
      date: "2026-10-25",
      courses: [587, 1099],
      body: `After large wildfires, a first phase of cleanup often removes **household hazardous waste** from each property before general debris removal begins. It's usually run by government agencies and their contractors.

## Typical items

- Paints, solvents, cleaners and pool chemicals
- Pesticides and fertilizers
- Propane tanks and compressed gas cylinders
- Batteries, including lithium-ion
- Ammunition and fuel

## How crews work

1. Assess the property and look for hazards: unstable structures, sinkholes, hot spots
2. Identify and segregate materials
3. Package and label for transport
4. Document what was removed

## Training

Crews generally need HAZWOPER training appropriate to their tasks, plus site-specific training. See [[1099]] for awareness-level training for others working nearby.`,
    },
  ],
};
