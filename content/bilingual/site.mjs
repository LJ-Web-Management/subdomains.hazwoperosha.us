// bilingual.hazwoperosha.us: HAZWOPER for employers with English- and Spanish-speaking crews. EN/ES split.
export default {
  title: "HAZWOPER for Bilingual Crews | English & Spanish Training | Industrial Certified Training",
  description: "HAZWOPER training for employers with English- and Spanish-speaking crews: 40-hour in Spanish, 40-hour in English, refresher, supervisor and awareness, with guides and an English-Spanish glossary.",
  theme: "#0f8b8d",
  fonts: "family=Figtree:wght@400;500;600;700;800;900",
  hero: {
    title: "One crew. <span>Two languages.</span>",
    lede: "Train every worker in the language they understand best: the full 40-hour HAZWOPER in English or in Spanish, plus supervisor and refresher courses.",
    cta: [1100, "40-hour in Spanish · $249.99"],
    alt: ["/guides/training-spanish-speaking-crews", "What OSHA expects"],
  },
  coursesTagline: "HAZWOPER courses in English and Spanish for mixed-language crews.",
  guidesTagline: "Training multilingual crews, bilingual tailgates and an English-Spanish glossary.",

  courses: [
    { id: 1100, short: "40-Hour · Español",
      summary: "The full 40-hour HAZWOPER in Spanish. El curso completo de 40 horas, en español.",
      body: `The OSHA 40-hour initial HAZWOPER, taught entirely in Spanish: lessons, examples and exams. El curso inicial de 40 horas completamente en español.`,
      topics: ["Reconocimiento de peligros", "Plan de seguridad del sitio", "Equipo de protección personal", "Monitoreo del aire", "Descontaminación", "Emergencias"],
      who: "Spanish-speaking hazardous waste site workers. Trabajadores de habla hispana." },
    { id: 587, short: "40-Hour · English",
      summary: "The full 40-hour HAZWOPER in English.",
      body: `The standard OSHA 40-hour initial HAZWOPER, in English.`,
      topics: ["Hazard recognition", "Site safety plans", "PPE", "Monitoring", "Decon", "Emergencies"],
      who: "English-speaking site workers." },
    { id: 597, short: "Supervisor",
      summary: "The 8-hour supervisor course, for leads running bilingual crews.",
      body: `Eight more hours for supervisors, including how to run briefings that everyone understands.`,
      topics: ["Safety program", "Briefings", "PPE decisions", "Monitoring"],
      who: "Foremen and site leads." },
    { id: 595, short: "8-Hour Refresher",
      summary: "The annual 8-hour refresher (in English).",
      body: `The annual refresher under 1910.120(e)(8). Taught in English. For a Spanish refresher, call +1-866-429-6742.`,
      topics: ["Hazard review", "PPE and monitoring", "Case studies"],
      who: "Certified workers comfortable in English." },
    { id: 1099, short: "Awareness",
      summary: "First responder awareness (in English).",
      body: `Four hours on recognizing, isolating and reporting a release. Taught in English.`,
      topics: ["Recognize", "Isolate", "Notify"],
      who: "Support staff comfortable in English." },
  ],

  feature: (h) => `<section class="sec duo"><div class="wrap duo-in">
<div class="col en"><span>EN</span><h2>Training they understand is training that works.</h2><p>OSHA expects training to be given in a language and vocabulary workers can understand.</p></div>
<div class="col es"><span>ES</span><h2>La capacitación que se entiende es la que protege.</h2><p>OSHA espera que la capacitación se dé en un idioma y vocabulario que el trabajador entienda.</p></div>
</div></section>`,

  guides: [
    {
      slug: "training-spanish-speaking-crews",
      title: "Training Spanish-speaking crews: what OSHA expects",
      description: "OSHA's policy on training language, and how employers with mixed crews put it into practice.",
      date: "2026-10-25",
      courses: [1100, 587],
      body: `In 2010, OSHA issued a policy stating that when its standards require training, employers must present the information **in a manner employees can understand**. That includes language and vocabulary. If a worker understands Spanish better than English, the training must work for them.

## What that means for HAZWOPER

- A 40-hour certificate isn't enough on its own if the worker didn't understand the course.
- Site safety plans, pre-entry briefings and emergency procedures also need to be understood by everyone.
- Signs, labels and alarms should be understood by the whole crew.

## Practical steps

1. **Ask workers their preferred language** for training, privately and without assumptions.
2. **Use courses in that language** where available: [[1100]] for the 40-hour in Spanish.
3. **Check understanding.** Ask workers to explain or demonstrate, not just sign a sheet.
4. **Use bilingual leads** for daily briefings, or interpret consistently.
5. **Translate the essentials** of the site safety plan: hazards, PPE by task, action levels, emergency signals and muster points.

## Literacy matters too

Some workers read less well in any language. Pictures, demonstrations and hands-on practice help everyone.

{{buy:1100}}`,
    },
    {
      slug: "bilingual-tailgate-meetings",
      title: "Running tailgate meetings in two languages",
      description: "A daily briefing only protects the workers who understood it. Tips for bilingual supervisors.",
      date: "2026-10-25",
      courses: [597],
      body: `The morning tailgate is where the site safety plan meets the day's work. On a mixed-language crew, it has to work in both languages.

## Keep it short and visual

- Use the site map and point to the zones
- Hold up the actual PPE for today's tasks
- Show the monitor and say the action level out loud

## Say it twice, not half

Give each point fully in both languages, rather than switching mid-sentence. If you're not fluent, pair with a bilingual lead and agree on key terms in advance.

## Check understanding

End with two or three questions to different workers, in their language:

- What's our PPE today? / ¿Qué equipo usamos hoy?
- What reading makes us stop? / ¿Qué lectura nos hace parar?
- Where do we go if the horn sounds? / ¿A dónde vamos si suena la alarma?

## Write down the key words

Post the day's hazards and the emergency signal in both languages at the support zone.

## Supervisors

Supervisors on bilingual crews carry extra responsibility for communication. The 8-hour supervisor course ([[597]]) covers briefings and enforcement.`,
    },
    {
      slug: "hazwoper-glossary-english-spanish",
      title: "HAZWOPER terms in English and Spanish",
      description: "A quick glossary of common site terms for bilingual crews and supervisors.",
      date: "2026-10-25",
      courses: [1100, 587],
      body: `A shared vocabulary makes briefings faster and safer. Here are common HAZWOPER terms in English and Spanish. Crews may use regional variations, so agree on your own list.

| English | Español |
|---|---|
| Hazardous waste | Residuos peligrosos |
| Site safety and health plan | Plan de seguridad y salud del sitio |
| Exclusion zone (hot zone) | Zona de exclusión (zona caliente) |
| Contamination reduction zone | Zona de reducción de contaminación |
| Support zone (cold zone) | Zona de apoyo (zona fría) |
| Decontamination | Descontaminación |
| Personal protective equipment (PPE) | Equipo de protección personal (EPP) |
| Respirator | Respirador |
| Self-contained breathing apparatus | Equipo de respiración autónomo |
| Air monitoring | Monitoreo del aire |
| Action level | Nivel de acción |
| Exposure limit | Límite de exposición |
| Spill | Derrame |
| Leak | Fuga |
| Evacuate | Evacuar |
| Muster point | Punto de reunión |
| Upwind | Contra el viento |
| Buddy system | Sistema de compañeros |
| Stop work | Detener el trabajo |
| Emergency | Emergencia |

## Use it

Print it, post it in the support zone and use the same terms every day. Consistency matters more than perfect translation.

{{buy:1100}}`,
    },
  ],
};
