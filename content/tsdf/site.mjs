// tsdf.hazwoperosha.us: RCRA treatment, storage and disposal facility (TSDF) operations training. Terminal theme.
export default {
  brand: "tsdf_ops",
  title: "TSDF Operations Training Online | 1910.120(p) 24-Hour & 8-Hour Refresher | tsdf_ops",
  description: "HAZWOPER training for RCRA treatment, storage and disposal facilities: 24-hour TSD operations under 29 CFR 1910.120(p), annual refresher, waste technician and Cal/OSHA TSDF courses.",
  theme: "#050805",
  fonts: "family=JetBrains+Mono:wght@400;500;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#050805"/><path d="M7 10l6 6-6 6" stroke="#39ff7a" stroke-width="3" fill="none"/><rect x="15" y="20" width="10" height="3" fill="#39ff7a"/></svg>`,
  coursesTagline: "Initial and refresher training for the people who run permitted hazardous waste facilities.",
  guidesTagline: "Notes on OSHA (p), EPA personnel training and keeping one set of records for both.",

  courses: [
    {
      id: 582, short: "24-Hr TSD Operations",
      summary: "The 24-hour initial HAZWOPER for workers at RCRA treatment, storage and disposal facilities.",
      body: `Workers at TSD facilities aren't covered by the 40-hour cleanup-site rules. They fall under 29 CFR 1910.120(p), which requires **24 hours of initial training** for new employees. This course covers that training, built around how a permitted facility actually runs.`,
      topics: ["How paragraph (p) applies to TSD facilities", "The facility's safety and health program", "Hazard communication for waste streams", "Waste receipt, sampling and profiling safety", "Container, tank and drum handling", "PPE, monitoring and decon at a TSDF", "Emergency response at the facility"],
      who: "New operators, technicians, lab staff and material handlers at permitted hazardous waste facilities.",
    },
    {
      id: 594, short: "8-Hr TSD Refresher",
      summary: "The annual 8-hour refresher for TSD facility workers under 1910.120(p).",
      body: `Paragraph (p) requires eight hours of refresher training every year for TSD workers. This course reviews the core topics and focuses on what changes and what goes wrong at TSD facilities.`,
      topics: ["Review of (p) program elements", "Waste handling incidents and lessons learned", "PPE and monitoring review", "Emergency response plan review", "Regulatory updates"],
      who: "TSD facility workers who completed the 24-hour initial training.",
    },
    {
      id: 599, short: "Waste Technician",
      summary: "Combined HAZWOPER and RCRA training for hazardous waste management technicians.",
      body: `Waste technicians work on both sides of the line: OSHA worker safety and EPA waste management. This 24-hour course covers both, for technicians who pack lab packs, consolidate drums, profile waste and load out shipments.`,
      topics: ["HAZWOPER worker safety essentials", "RCRA waste identification and codes", "Lab packing and consolidation safety", "Compatibility and segregation", "Manifests and DOT basics", "Spill and emergency response"],
      who: "Field and facility waste technicians at environmental services companies.",
    },
    {
      id: 575, short: "Cal/OSHA 24-Hr TSDF",
      summary: "The 24-hour TSDF course written to California's Title 8 section 5192(p) and Title 22.",
      body: `For TSD facilities in California, Cal/OSHA's 8 CCR 5192(p) and DTSC's Title 22 rules apply. This course covers both, with California exposure limits and agencies.`,
      topics: ["8 CCR 5192(p) requirements", "DTSC permits and Title 22 operations", "Container and tank management", "Waste receipt and profiling", "Facility emergency response", "PPE, monitoring and decon"],
      who: "Workers at California hazardous waste TSD facilities.",
    },
    {
      id: 579, short: "Cal/OSHA 8-Hr TSDF Refresher",
      summary: "The annual 8-hour refresher for California TSDF workers.",
      body: `The annual refresher for California TSD workers, covering Cal/OSHA 5192(p) and Title 22 updates.`,
      topics: ["5192(p) refresher", "Title 22 updates", "Containment and tank review", "Emergency coordinator review", "Incident case studies"],
      who: "California TSD facility workers who completed the 24-hour TSDF training.",
    },
  ],

  guides: [
    {
      slug: "tsdf-training-1910-120-p",
      title: "TSDF training under 1910.120(p): 24 hours, then 8 every year",
      description: "Why TSD workers have their own paragraph in HAZWOPER, and what it requires.",
      date: "2026-10-25",
      courses: [582, 594],
      body: `HAZWOPER covers three kinds of work. Cleanup sites are in paragraphs (b) through (o). Emergency response is in (q). And **operations at RCRA-permitted treatment, storage and disposal facilities** are in paragraph (p).

TSD facilities are controlled workplaces with known waste streams, engineering controls and a permit. OSHA's training requirement reflects that.

## The requirements

| Requirement | Paragraph | Hours |
|---|---|---|
| Initial training for new employees | (p)(7)(i) | 24 hours |
| Annual refresher | (p)(7)(i) | 8 hours |
| Emergency response training for those who respond | (p)(8) | As needed for the role |

Under (p)(7)(i), employees who have equivalent previous work experience or training can be certified by the employer as having it, instead of repeating the initial training. Keep the paperwork that shows why.

## What (p) also requires

- A written **safety and health program** for the facility
- A **hazard communication** program
- **Medical surveillance** for covered employees
- A **decontamination** program
- **New technology** evaluation
- **Material handling** procedures for drums and containers
- An **emergency response program**

Training should cover all of these, as they apply to each worker's job.

## The EPA side

EPA requires its own personnel training at TSDFs: 40 CFR 264.16 for permitted facilities and 265.16 for interim status facilities. It's within six months of assignment, with annual review, and with written records. One well-designed program can satisfy both. See [our recordkeeping guide](/guides/tsdf-training-records-osha-and-epa).

{{buy:582}}`,
    },
    {
      slug: "tsdf-vs-cleanup-site-training", seoTitle: "TSDF vs cleanup site: why the 40-hour isn't the default",
      title: "TSDF or cleanup site? Why the 40-hour isn't the default at a TSDF",
      description: "Workers move between facilities and field jobs. Here's which HAZWOPER paragraph covers which work.",
      date: "2026-10-25",
      courses: [582, 599],
      body: `Environmental services companies often run a permitted facility and send crews to cleanup sites. The same person can be under different HAZWOPER paragraphs on different days.

## Which paragraph applies

| Work | Paragraph | Initial training |
|---|---|---|
| Cleanup at an uncontrolled hazardous waste site | (e) | 40 hours, or 24 for limited exposure |
| Operations at a RCRA-permitted or interim status TSDF | (p) | 24 hours |
| Emergency response to a release | (q) | Depends on responder level |

## Why TSD work needs fewer hours

A TSDF is a controlled environment. Waste is profiled before it arrives, processes are engineered and the hazards are known. An uncontrolled site has unknown contaminants, unknown concentrations and changing conditions. More unknowns mean more training.

## When a TSD worker goes to the field

If your facility technician is sent to a remediation site, or to pack a customer's lab waste on a contaminated property, they're doing (e) work. The 24-hour (p) training doesn't cover it. They need the 40-hour, or 24-hour if their exposure is limited, plus the field experience.

## A practical setup for mixed crews

- **Facility-only staff:** [[582]] and the annual [[594]]
- **Technicians who work in the facility and in the field:** [[599]] for the RCRA and technician side, plus the 40-hour HAZWOPER for field work
- **California facilities:** [[575]] and [[579]]

## Refreshers

Both paths need eight hours of refresher training a year. A worker covered by both (e) and (p) can usually meet both with one 8-hour refresher that covers the topics for both kinds of work. Document what the refresher covered.`,
    },
    {
      slug: "tsdf-training-records-osha-and-epa",
      title: "OSHA and EPA training records at a TSDF: one system for both",
      description: "TSDFs answer to two agencies for training. Here's how to keep one set of records that satisfies both.",
      date: "2026-10-25",
      courses: [582, 594, 599],
      body: `At a TSDF, an EPA RCRA inspector and an OSHA compliance officer can both ask for training records, and they're looking for different things.

## What EPA wants: 40 CFR 264.16(d)

- The **job title** for each position related to hazardous waste management, and the **name** of the employee in each
- A **written job description** for each position, including skills, education and duties
- A **written description of the type and amount of training**, both introductory and continuing, for each position
- **Records showing the training was completed** by facility personnel

Retention: current employees until closure, former employees for at least three years after they leave.

## What OSHA wants: 1910.120(p)

- Proof of the 24-hour initial training, or the employer's certification of equivalent experience
- Proof of the 8-hour annual refresher
- Emergency response training for employees who respond
- Medical surveillance records, kept under 29 CFR 1910.1020: duration of employment plus 30 years

## One system

Build one record per position and one record per person.

**Per position:** title, job description, and a training matrix listing OSHA (p) initial and refresher, EPA personnel training topics, emergency response role and any DOT hazmat function.

**Per person:** name and position, hire date and assignment date, certificates for each course with hours and dates, annual review sign-offs, and the employer's equivalency certification if one was used.

## The six-month and annual clocks

| Clock | Rule |
|---|---|
| EPA: train new hires within 6 months of assignment, supervised until then | 264.16(b) |
| EPA: annual review of training | 264.16(c) |
| OSHA: 24-hour initial before work | 1910.120(p)(7)(i) |
| OSHA: 8-hour refresher annually | 1910.120(p)(7)(i) |

The simplest approach is to give the OSHA 24-hour at hire, which also covers much of the EPA initial training, and use the 8-hour refresher as the EPA annual review.

{{buy:594}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(582)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">tsdf_ops<span>://</span></a><p># TSD facility training by HAZWOPER OSHA Training LLC<br># delivered on hazwoper-osha.com</p></div>
<div><h2>$ ls courses/</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>$ contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>TSD operations training<span class="cur" aria-hidden="true"></span></h1>
<pre class="req">&gt; 29 CFR 1910.120(p) + RCRA 40 CFR 264.16
&gt; for treatment, storage &amp; disposal facility crews
&gt; initial: 24 hours · refresher: 8 hours / year</pre>
<div class="hero-cta">${h.buy(582, "$ enroll --course 135")}<a class="btn btn-alt" href="/guides/tsdf-training-1910-120-p">$ man tsdf</a></div>
</div>
</div></section>

<section class="sec"><div class="wrap">
<p class="prompt">$ diff cleanup_site.txt tsdf.txt</p>
<div class="diff">
<div class="del">- paragraph (e): uncontrolled hazardous waste sites<br>- initial training: 40 hours + 3 days field<br>- unknown contaminants, changing conditions</div>
<div class="add">+ paragraph (p): RCRA-permitted TSD facilities<br>+ initial training: 24 hours<br>+ profiled waste, engineered controls, a permit</div>
</div>
<p><a class="link" href="/guides/tsdf-vs-cleanup-site-training">→ read: TSDF or cleanup site?</a></p>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="vh">TSD operations courses</h2>
<p class="prompt">$ cat ./courses/*/README</p>
<div class="cgrid">${courses.map((c) => `<article class="cc"><p class="cc-id">[${c.id}] ${esc(c.duration)} · ${esc(c.citation)}</p><h3><a href="${c.url}">${esc(c.name)}</a></h3><p>${esc(c.summary)}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "$ enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<p class="prompt">$ ls ./docs</p>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
