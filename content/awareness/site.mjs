// awareness.hazwoperosha.us: first responder awareness for front-line staff. Comic pop art.
export default {
  brand: "Spot·It·Safe",
  title: "First Responder Awareness Training Online | Security & Warehouse Staff | Spot·It·Safe",
  description: "HAZWOPER first responder awareness level training for security, warehouse, drivers and front-line staff: recognize a release, isolate the area and notify. Plus spill kit and PPE modules.",
  theme: "#ff3b30",
  fonts: "family=Bangers&family=Comic+Neue:wght@400;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#ffe600"/><path d="M16 2l3 9 9-3-6 8 8 4-9 2 2 9-7-6-7 6 2-9-9-2 8-4-6-8 9 3z" fill="#ff3b30" stroke="#111" stroke-width="1.2"/><text x="16" y="20" font-size="10" font-family="Arial" font-weight="900" text-anchor="middle" fill="#fff">!</text></svg>`,
  coursesTagline: "Short, practical training for the people most likely to spot a release first.",
  guidesTagline: "What front-line staff should do, and not do, when something spills.",

  courses: [
    {
      id: 1099, short: "First Responder Awareness",
      summary: "Awareness level training: recognize a hazardous release, isolate the area and notify.",
      body: `Under 29 CFR 1910.120(q)(6)(i), first responders at the awareness level are people likely to witness or discover a hazardous substance release. Their job is to start the response by notifying the right people, and then **take no further action**. This four-hour course teaches exactly that.`,
      topics: ["What hazardous substances are", "Recognizing a release", "Identifying materials with placards, labels and the ERG", "Your role in the emergency response plan", "Isolating the area", "Notifying the right people"],
      who: "Security officers, warehouse staff, drivers, receptionists and anyone who may discover a release.",
    },
    {
      id: 479, short: "Spill Kit Use",
      summary: "One hour on using a spill kit for small, incidental spills.",
      body: `Some small spills are incidental: known material, small amount, no real hazard. Staff can clean those up with a spill kit if they're trained. This course shows how, and when not to.`,
      topics: ["Incidental vs emergency spills", "Kit types", "Using socks, pads and drain covers", "Disposal"],
      who: "Warehouse and facility staff.",
    },
    {
      id: 585, short: "PPE Levels A–D",
      summary: "A 15-minute module on what responders wear and why.",
      body: `Helps front-line staff understand what responders are wearing, and why they shouldn't go in without it.`,
      topics: ["Levels A, B, C and D", "Why PPE matters"],
      who: "Anyone curious about responder PPE.",
    },
    {
      id: 416, short: "Spill Prevention",
      summary: "Two hours on preventing spills in the first place.",
      body: `The best spill is the one that doesn't happen. Two hours on common causes and simple prevention.`,
      topics: ["Common causes", "Secondary containment", "Safe transfer", "Reporting"],
      who: "Warehouse, fleet and facility staff.",
    },
  ],

  guides: [
    {
      slug: "what-awareness-level-means",
      title: "What 'awareness level' actually means",
      description: "Awareness responders have one job, and it isn't cleaning up. A plain explanation.",
      date: "2026-10-25",
      courses: [1099],
      body: `OSHA's HAZWOPER standard sorts emergency responders into levels. **Awareness** is the first, and it has the most people.

## The job in three words

**Recognize. Isolate. Notify.**

That's it. Awareness-level responders:

1. **Recognize** that something hazardous has been released
2. **Isolate** the area by keeping people away and getting clear themselves
3. **Notify** the right people, such as supervisors, the emergency coordinator or 911

And then they **take no further action** to control the release.

## What awareness responders must understand

Under 29 CFR 1910.120(q)(6)(i), they must show they understand:

- What hazardous substances are, and the risks
- The potential outcomes of an emergency involving them
- How to recognize that hazardous substances are present
- How to identify them, if possible
- Their role in the employer's emergency response plan, including site security and control
- When and how to notify, and the need for more resources

## Who should be trained

Anyone likely to discover a release: security officers, warehouse staff, truck drivers, maintenance staff, front desk staff and custodians.

## What they don't do

No absorbing, no plugging, no moving drums, no going back in to "check." Those are jobs for operations-level and technician-level responders with more training and the right PPE.

{{buy:1099}}`,
    },
    {
      slug: "see-a-spill-what-to-do",
      title: "See a spill? What to do, and what not to do",
      description: "A one-page guide for security, warehouse and front-line staff.",
      date: "2026-10-25",
      courses: [1099, 479],
      body: `You're walking the warehouse and there's a puddle under a pallet of drums. Or a strange smell near the loading dock. Here's what to do.

## Do

1. **Stop.** Don't walk into it or touch it.
2. **Look from a distance.** Labels, placards or markings on the containers? Note what you see.
3. **Get away.** Move back, upwind and uphill if you can.
4. **Warn others.** Keep people from walking in.
5. **Call it in.** Use your site's emergency number or 911. Say what, where, how much and whether anyone is hurt.
6. **Stay at a safe distance** to meet responders and tell them what you saw.

## Don't

- Don't be a hero. Don't try to stop the leak.
- Don't touch, smell or taste anything to identify it.
- Don't walk through it, drive through it or let anyone else.
- Don't use your phone or radio right next to a flammable vapor release.
- Don't assume it's "just water."

## Small and known?

Some spills are incidental: a known material, a small amount and no real hazard, like a little motor oil. If you've been trained and your site allows it, you can clean those up with a spill kit. See [[479]]. If you're not sure, it's not incidental.

{{buy:1099}}`,
    },
    {
      slug: "reading-placards-and-the-erg",
      title: "Reading placards and using the Emergency Response Guidebook",
      description: "The diamond on the truck tells you more than you'd think. How to read it from a safe distance.",
      date: "2026-10-25",
      courses: [1099],
      body: `Trucks, rail cars and many containers carry DOT hazard placards. Awareness responders learn to read them, from a distance.

## The nine hazard classes

| Class | Hazard | Placard |
|---|---|---|
| 1 | Explosives | Orange |
| 2 | Gases | Red (flammable), green (non-flammable), white (poison gas) |
| 3 | Flammable liquids | Red |
| 4 | Flammable solids, spontaneously combustible, dangerous when wet | Red/white stripes, red/white, blue |
| 5 | Oxidizers and organic peroxides | Yellow |
| 6 | Toxic and infectious substances | White |
| 7 | Radioactive | Yellow and white |
| 8 | Corrosives | Black and white |
| 9 | Miscellaneous | Black and white stripes |

## The four-digit number

Many placards or orange panels show a **UN/NA number**, such as 1203 for gasoline. That number is the key to the Emergency Response Guidebook.

## Using the ERG

The ERG is a free DOT book, also available as an app.

1. **Yellow pages:** look up the four-digit number to find a guide number.
2. **Blue pages:** look up the material by name if you don't have the number.
3. **Orange pages:** the guide tells you the hazards, public safety advice and initial isolation distance.
4. **Green pages:** for some materials, protective action distances for large spills.

## Use binoculars, not your feet

If you can't read it from a safe distance, back off and report what you can see. Responders will take it from there.`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(1099)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">SPOT·IT·SAFE!</a><p>First responder awareness training from HAZWOPER OSHA Training LLC, delivered on hazwoper-osha.com.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="dots" aria-hidden="true"></div><div class="wrap hero-in">
<div class="burst">
<h1>See a spill? <span>Don't be a hero!</span></h1>
<p class="hero-lede">Awareness training for security, warehouse and front-line staff: recognize it, back away, call it in.</p>
<div class="hero-cta">${h.buy(1099, "Get trained! · $61.99")}<a class="btn btn-alt" href="/guides/see-a-spill-what-to-do">What to do</a></div>
</div>
<div class="panels">
<div class="panel p1"><span class="pn">1</span><b>RECOGNIZE!</b><p>Puddle, smell, hiss or cloud? Stop right there.</p></div>
<div class="panel p2"><span class="pn">2</span><b>ISOLATE!</b><p>Back off, go upwind and keep people out.</p></div>
<div class="panel p3"><span class="pn">3</span><b>NOTIFY!</b><p>Call it in: what, where, how much.</p></div>
</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Courses</h2>
<div class="cgrid">${courses.map((c) => `<article class="cc"><p class="meta">${esc(c.duration)}${c.lmsId ? ` · #${c.lmsId}` : ""}</p><h3><a href="${c.url}">${esc(c.short)}</a></h3><p>${esc(c.summary)}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll!", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec sec-red"><div class="wrap">
<h2 class="title">Guides</h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
