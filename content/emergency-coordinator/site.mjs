// emergency-coordinator.hazwoperosha.us: LQG contingency plan quick reference guide builder. Red binder tab, emergency card.
export default {
  brand: "Quick Reference",
  logo: `<span class="qr-plus">+</span>Quick Reference`,
  title: "RCRA Quick Reference Guide Builder & Emergency Coordinator | Quick Reference",
  description: "Build a printable quick reference guide for your hazardous waste contingency plan, and train your emergency coordinators on their duties under the RCRA generator rules.",
  theme: "#c92a2a",
  fonts: "family=Schibsted+Grotesk:wght@400;600;800",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="4" y="3" width="22" height="26" rx="3" fill="#fff" stroke="#c92a2a" stroke-width="2"/><rect x="24" y="8" width="5" height="8" rx="1" fill="#c92a2a"/><path d="M15 10v10M10 15h10" stroke="#c92a2a" stroke-width="3"/></svg>`,
  hero: {
    title: "When it goes wrong, <span>one page</span> they can use.",
    lede: "Large quantity generators must give local responders a quick reference guide to their contingency plan. Fill in the blanks below and print it, then train your emergency coordinators.",
    cta: [412, "Emergency Coordinator · $99.99"],
    alt: ["#builder", "Build the guide"],
  },
  coursesTagline: "Contingency plan and generator training.",
  guidesTagline: "The emergency coordinator's job, step by step.",

  courses: [
    { id: 412, short: "Contingency Plan & Emergency Coordinator", summary: "The emergency coordinator's duties and the contingency plan.", body: "Four hours on hazardous waste contingency plans and emergency coordinators: plan contents, the quick reference guide, arrangements with local responders, and what the coordinator must do during and after an emergency.", topics: ["Contingency plan contents", "Quick reference guide", "Coordinator duties", "Notifications and follow-up"] },
    { id: 601, short: "RCRA Generator Training", summary: "The full generator course.", body: "Eight hours on hazardous waste generator rules, including emergency preparedness.", topics: ["Generator categories", "Accumulation", "Preparedness and prevention", "Manifests"] },
    { id: 600, short: "RCRA Generator Refresher", summary: "The annual refresher for LQG staff.", body: "Four hours of annual refresher training for hazardous waste personnel.", topics: ["Generator rules", "Emergency procedures", "Recent changes"] },
    { id: 1099, short: "First Responder Awareness", summary: "Recognize, isolate, notify.", body: "Four hours of first responder awareness training for employees who may witness a release.", topics: ["Recognizing releases", "Isolating the area", "Notification"] },
  ],

  feature: () => `<section class="sec qr-sec" id="builder"><div class="wrap qr-in">
<form class="qr-form" method="post"><h2>Fill in your site</h2>
<label>Facility name and address<input data-o="qrF" value="Acme Coatings, 100 Industrial Way, Springfield"></label>
<label>Emergency coordinator (primary), 24-hour phone<input data-o="qrE1" value="J. Rivera · (555) 010-0101"></label>
<label>Emergency coordinator (alternate), 24-hour phone<input data-o="qrE2" value="K. Chen · (555) 010-0102"></label>
<label>Wastes and their hazards<textarea data-o="qrW" rows="3">Spent solvents (ignitable), paint waste (ignitable, toxic), corrosive rinse water (corrosive)</textarea></label>
<label>Estimated maximum amounts on site<input data-o="qrA" value="About 2,000 gal in drums and totes"></label>
<label>Wastes needing special treatment or response<input data-o="qrS" value="Water-reactive sludge in Building C: do not use water"></label>
<label>Where waste is accumulated (with map reference)<input data-o="qrL" value="Building B dock (map 1), paint line SAAs (map 2)"></label>
<label>Water supply and hydrants<input data-o="qrH" value="Hydrants at north gate and Building B corner"></label>
<label>On-site alarms and notification<input data-o="qrN" value="Pull stations, PA system, air horn: three long blasts = evacuate"></label>
<button type="button" class="btn" data-print>Print the guide</button>
</form>
<article class="qr-card" id="qrCard"><header><p>Contingency plan</p><h3>Quick reference guide</h3><p id="qrF"></p></header>
<dl><dt>Emergency coordinator</dt><dd id="qrE1"></dd><dt>Alternate</dt><dd id="qrE2"></dd><dt>Wastes and hazards</dt><dd id="qrW"></dd><dt>Maximum amounts</dt><dd id="qrA"></dd><dt>Special treatment</dt><dd id="qrS"></dd><dt>Accumulation areas</dt><dd id="qrL"></dd><dt>Water supply</dt><dd id="qrH"></dd><dt>Alarms</dt><dd id="qrN"></dd></dl>
<p class="qr-foot">Attach site maps showing waste areas, evacuation routes and surroundings.</p></article>
</div></section>
<script>
(function () {
  document.querySelector(".qr-form").addEventListener("submit", function (e) { e.preventDefault(); });
  document.querySelector("[data-print]").addEventListener("click", function () { window.print(); });
  function u() { document.querySelectorAll(".qr-form [data-o]").forEach(function (i) { document.getElementById(i.getAttribute("data-o")).textContent = i.value || "—"; }); }
  document.querySelectorAll(".qr-form [data-o]").forEach(function (i) { i.addEventListener("input", u); });
  u();
})();
</script>`,

  guides: [
    {
      slug: "emergency-coordinator-duties",
      title: "The emergency coordinator's duties, step by step",
      description: "What the rules expect the coordinator to do from the first alarm to the follow-up report.",
      date: "2026-10-25",
      courses: [412],
      body: `Every large quantity generator must have an **emergency coordinator** on site or on call at all times, with authority to commit the resources needed to carry out the contingency plan.

## During an emergency

1. **Activate alarms** and communication systems to notify personnel
2. **Notify** state or local agencies with designated response roles, if their help may be needed
3. **Identify** the character, source, amount and extent of any released materials
4. **Assess** possible hazards to human health and the environment, direct and indirect
5. **Report** to the local authorities and the National Response Center if evacuation of local areas may be advisable
6. **Take all reasonable measures** to keep the incident from spreading

## After

- Arrange treatment, storage or disposal of recovered waste and contaminated material
- Make sure no incompatible waste is handled in the affected area until cleanup is done
- Make sure emergency equipment is cleaned and ready again
- Note the time, date and details in the operating record, and submit a written report as required

{{buy:412}}`,
    },
    {
      slug: "contingency-plan-checklist",
      title: "Contingency plan checklist for LQGs",
      description: "What the plan must contain, and when to update it.",
      date: "2026-10-25",
      courses: [412, 601],
      body: `## Contents

- Actions personnel must take in response to fires, explosions or releases
- Arrangements agreed with police, fire departments, hospitals, contractors and emergency response teams
- Names and 24-hour phone numbers of all emergency coordinators
- List of emergency equipment, with location, description and capabilities
- Evacuation plan, with signals and primary and alternate routes
- **Quick reference guide** for local responders

## Keep copies

At the facility, and submitted to local police, fire departments, hospitals and emergency response teams.

## Update when

- Regulations change
- The plan fails in an emergency
- The facility changes in a way that affects emergencies
- Emergency coordinators or equipment change

See [[601]] for the rest of the LQG requirements.`,
    },
  ],
};
