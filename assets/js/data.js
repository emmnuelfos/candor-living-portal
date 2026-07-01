/* ============================================================
   CANDOR LIVING HOME CARE — Content & SEO model
   Built by TaskFloVA. Competitors + keyword targets = ValueSERP live Google SERP
   (Houston, TX). Jun 2026. Scoring + keyword highlighting run
   client-side against these sets.
   ============================================================ */
window.CANDOR = {
  meta: {
    client: "Candor Living Home Care Service",
    tagline: "Care That Feels Like Home",
    city: "Houston, TX",
    phone: "(713) 730-5017",
    phoneHref: "tel:+17137305017",
    email: "info@candorlivinghcs.com",
    address: "1919 Taylor Street, STE F, Houston, TX 77007",
    serviceArea: "Houston and surrounding areas",
    builtBy: "TaskFloVA",
    researchNote: "Competitors and keyword targets from ValueSERP (live Google SERP, Houston, TX). June 2026."
  },

  /* ---- Brand system (drives the Branding nav pages) ---- */
  brand: {
    palette: [
      { name: "Candor Teal", hex: "#4F8A8B", role: "Primary — headers, primary buttons, brand marks" },
      { name: "Warm Cream", hex: "#F7F2EA", role: "Secondary — page backgrounds, light sections" },
      { name: "Soft Gold", hex: "#CBB38A", role: "Accent + trim/outline — highlights, dividers, hover" },
      { name: "Warm Taupe", hex: "#A8917D", role: "Support — secondary text, muted UI" },
      { name: "Charcoal", hex: "#333333", role: "Body text, footers, high-contrast type" },
      { name: "Sand Beige", hex: "#D8C9BB", role: "Support — cards, borders, subtle fills" }
    ],
    type: {
      display: { name: "Fraunces", note: "Warm, high-contrast serif for headlines. Carries the 'modern luxurious' feel without looking clinical." },
      body: { name: "Instrument Sans", note: "Clean, friendly sans for body copy and UI. Highly legible for an older-skewing audience." },
      pairing: "Fraunces (display) + Instrument Sans (body). Fallback stack: Georgia / system-ui."
    },
    logoNote: "Combination mark (icon + wordmark) supplied by the client. Use the teal mark on cream or white; reverse to cream on teal for dark bands. Keep clear space equal to the height of the 'C' on all sides."
  },

  pages: {}
};

/* helper so we can append page groups in chunks */
window.CANDOR.addPages = function (obj) { Object.assign(window.CANDOR.pages, obj); };

/* ============================================================
   GROUP 1 — Home, About, Services hub
   ============================================================ */
window.CANDOR.addPages({

  home: {
    nav: "Home", group: "pages", kind: "content", url: "/",
    seoTitle: "Home Care in Houston, TX | Candor Living Home Care Service",
    metaDescription: "Compassionate non-medical home care in Houston. Trained caregivers for 24-hour care, respite, personal care and companionship. Call (713) 730-5017.",
    h1: "Compassionate Home Care in Houston, Built Around Your Family",
    targetWords: 780,
    competitors: [
      { name: "Houston Home Care", domain: "houston-homecare.com", url: "https://www.houston-homecare.com/", note: "Houston organic #1 (ValueSERP)" },
      { name: "Homewatch CareGivers", domain: "homewatchcaregivers.com", url: "https://www.homewatchcaregivers.com/houston-galleria/", note: "Houston organic #2" },
      { name: "Home Care Team TX", domain: "homecareteamtx.com", url: "https://www.homecareteamtx.com/", note: "Houston organic #4" }
    ],
    keywords: {
      basic: [
        { term: "home care houston", min: 4, max: 9 },
        { term: "home care services houston", min: 2, max: 5 },
        { term: "home care agency houston", min: 1, max: 4 },
        { term: "in-home care houston", min: 1, max: 4 },
        { term: "senior home care houston", min: 1, max: 3 },
        { term: "home care in houston tx", min: 1, max: 3 },
        { term: "houston texas home care", min: 1, max: 2 },
        { term: "home care", min: 6, max: 12 },
        { term: "caregivers", min: 3, max: 7 },
        { term: "senior care", min: 2, max: 5 },
        { term: "non-medical home care", min: 1, max: 3 },
        { term: "houston", min: 5, max: 10 }
      ],
      extended: [
        { term: "in-home senior care", min: 1, max: 3 },
        { term: "elderly care houston", min: 1, max: 2 },
        { term: "home care for seniors", min: 1, max: 3 },
        { term: "senior care at home", min: 1, max: 2 },
        { term: "in-home caregivers", min: 1, max: 2 },
        { term: "home caregivers houston", min: 1, max: 2 },
        { term: "houston in-home care", min: 1, max: 2 },
        { term: "home care assistance", min: 1, max: 2 },
        { term: "24-hour home care", min: 1, max: 3 },
        { term: "live-in care", min: 1, max: 2 },
        { term: "hourly home care", min: 1, max: 2 },
        { term: "respite care", min: 1, max: 2 },
        { term: "personal care", min: 1, max: 3 },
        { term: "companion care", min: 1, max: 2 },
        { term: "companionship", min: 1, max: 3 },
        { term: "dementia care", min: 1, max: 2 },
        { term: "aging in place", min: 1, max: 3 },
        { term: "loved one", min: 2, max: 5 },
        { term: "families", min: 2, max: 5 },
        { term: "in-home", min: 3, max: 7 },
        { term: "seniors", min: 3, max: 7 },
        { term: "elderly", min: 1, max: 3 },
        { term: "dignity", min: 1, max: 2 },
        { term: "independence", min: 1, max: 2 },
        { term: "compassionate", min: 1, max: 2 },
        { term: "insured", min: 1, max: 2 },
        { term: "background-checked", min: 1, max: 2 }
      ]
    },
    blocks: [
      { id: "home-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Non-medical home care in Houston, TX</p>" +
        "<h1>Compassionate Home Care in Houston, Built Around Your Family</h1>" +
        "<p class='lead'>When staying home is what your loved one wants, Candor Living helps make it possible. We match Houston families with trained, non-medical caregivers who step in with daily life, and we can often start care within 24 hours of your first call.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Start care today</a> <a class='btn btn-ghost'>Call (713) 730-5017</a></p>" },

      { id: "home-intro", type: "Intro", label: "Welcome / Intro", html:
        "<h2>Care that actually feels like home</h2>" +
        "<p>Choosing help for a parent or spouse is a big decision, and most families come to us worried about the same things: safety, dignity, and whether the person in their home will be someone they can trust. That is the standard we hire and train for.</p>" +
        "<p>Candor Living is a home care agency serving Houston, providing in-home care for seniors and older adults who need a hand with daily life. Our caregivers handle the everyday tasks that have gotten harder, from bathing and meals to errands and simple company through the day, so your loved one stays comfortable in the home they know. It is the kind of support that makes aging in place realistic.</p>" },

      { id: "home-services", type: "Services Grid", label: "Services Overview", html:
        "<h2>Home care services in Houston</h2>" +
        "<p>Every family starts in a different place. We build a plan around what your loved one needs now, and adjust it as things change.</p>" +
        "<ul class='svc-grid'>" +
        "<li><strong>24-Hour Home Care</strong><span>Around-the-clock support and overnight care for full peace of mind.</span></li>" +
        "<li><strong>Respite Care</strong><span>Short-term relief so family caregivers can rest, work, or travel.</span></li>" +
        "<li><strong>Personal Care</strong><span>Hands-on help with bathing, dressing, grooming and mobility.</span></li>" +
        "<li><strong>Companionship</strong><span>Conversation, activities and a friendly presence through the day.</span></li>" +
        "<li><strong>Home Support</strong><span>Light housekeeping, laundry, meal prep and errands at home.</span></li>" +
        "</ul>" },

      { id: "home-why", type: "Why Us", label: "Why Candor Living", html:
        "<h2>Why Houston families choose Candor Living</h2>" +
        "<p>There are a lot of home care agencies in Houston. Here is what tends to make families stay with us.</p>" +
        "<ul class='check'>" +
        "<li><strong>We can start fast.</strong> When a hospital discharge or a fall changes everything overnight, we can often have a caregiver in place within 24 hours.</li>" +
        "<li><strong>Trained, screened caregivers.</strong> Every caregiver is background-checked and trained for non-medical senior care before they ever enter your home.</li>" +
        "<li><strong>One point of contact.</strong> You get a real person who knows your family, not a call center.</li>" +
        "<li><strong>Clear, honest pricing.</strong> No surprise fees. You know what care costs before it starts.</li>" +
        "</ul>" },

      { id: "home-how", type: "Process", label: "How It Works", html:
        "<h2>Getting started is simple</h2>" +
        "<ol class='steps'>" +
        "<li><strong>Call us.</strong> Tell us what is going on. We listen, answer questions, and there is no pressure.</li>" +
        "<li><strong>We build a care plan.</strong> We visit, learn your loved one's routine, and match a caregiver to their needs and personality.</li>" +
        "<li><strong>Care begins.</strong> Your caregiver arrives, and you stay in the loop the whole way through.</li>" +
        "</ol>" },

      { id: "home-area", type: "Service Area", label: "Service Area", html:
        "<h2>Serving Houston and the surrounding area</h2>" +
        "<p>We provide senior home care across Houston and nearby communities, including the Heights, Montrose, the Galleria, Bellaire, West University, Katy, Sugar Land, Pearland, Cypress and The Woodlands. Not sure if we reach your neighborhood? Call and ask.</p>" },

      { id: "home-trust", type: "Trust Band", label: "Trust / Credentials", html:
        "<h2>Care you can feel good about</h2>" +
        "<ul class='trust'>" +
        "<li>Background-checked caregivers</li><li>Non-medical, in-home focus</li><li>Insured and dependable</li><li>Serving Houston families</li>" +
        "</ul>" +
        "<p class='muted'>Client testimonials will appear here as reviews come in. We would rather leave this space honest than fill it with anything invented.</p>" },

      { id: "home-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Let's talk about your family's care</h2>" +
        "<p>Whether care is needed this week or you are just starting to plan, we are glad to help you think it through. Reach us at <a href='tel:+17137305017'>(713) 730-5017</a> or send a message and we will call you back.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Request a free consultation</a></p>" }
    ]
  },

  about: {
    nav: "About Us", group: "pages", kind: "content", url: "/about-us/",
    seoTitle: "About Candor Living | Non-Medical Home Care in Houston, TX",
    metaDescription: "Learn about Candor Living, a Houston home care agency helping seniors and disabled adults live safely at home with trusted non-medical caregivers.",
    h1: "About Candor Living Home Care",
    targetWords: 560,
    competitors: [
      { name: "Houston Home Care", domain: "houston-homecare.com", url: "https://www.houston-homecare.com/", note: "Houston organic #1 (ValueSERP)" },
      { name: "Home Matters Caregiving", domain: "homematters.com", url: "https://homematters.com/southwest-houston-tx/", note: "Houston organic (ValueSERP)" },
      { name: "Homecare Houston", domain: "homecare-houston.com", url: "https://homecare-houston.com/", note: "Houston organic #7" }
    ],
    keywords: {
      basic: [
        { term: "home care houston", min: 2, max: 5 },
        { term: "home care agency houston", min: 1, max: 3 },
        { term: "senior care houston", min: 1, max: 3 },
        { term: "non-medical home care", min: 1, max: 3 },
        { term: "home care", min: 4, max: 8 },
        { term: "caregivers", min: 3, max: 6 },
        { term: "houston", min: 3, max: 7 },
        { term: "in-home care", min: 1, max: 3 }
      ],
      extended: [
        { term: "elderly care", min: 1, max: 2 },
        { term: "senior care", min: 1, max: 3 },
        { term: "aging in place", min: 1, max: 3 },
        { term: "loved one", min: 2, max: 4 },
        { term: "families", min: 2, max: 5 },
        { term: "seniors", min: 2, max: 5 },
        { term: "disabled adults", min: 1, max: 2 },
        { term: "compassionate", min: 1, max: 2 },
        { term: "dignity", min: 1, max: 3 },
        { term: "trusted", min: 1, max: 3 },
        { term: "independence", min: 1, max: 2 },
        { term: "home care provider", min: 1, max: 2 },
        { term: "in-home", min: 1, max: 3 },
        { term: "respite care", min: 1, max: 2 },
        { term: "personal care", min: 1, max: 2 },
        { term: "companionship", min: 1, max: 2 },
        { term: "care plan", min: 1, max: 2 }
      ]
    },
    blocks: [
      { id: "about-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>About us</p>" +
        "<h1>About Candor Living Home Care</h1>" +
        "<p class='lead'>We started Candor Living for a simple reason: families in Houston needed home care they could actually trust, delivered by people who treat your parent the way they would treat their own.</p>" },

      { id: "about-story", type: "Story", label: "Our Story", html:
        "<h2>Who we are</h2>" +
        "<p>Candor Living Home Care is a Houston-based, non-medical home care provider. We help seniors and disabled adults stay in their own homes with support for the daily tasks that have become difficult to manage alone.</p>" +
        "<p>The name says a lot about how we work. Candor means being honest with you, about what your loved one needs, what care will cost, and what we can and cannot do. Families remember that kind of straight talk, especially during a stressful time.</p>" },

      { id: "about-mission", type: "Mission", label: "Mission", html:
        "<h2>What we believe</h2>" +
        "<p>Everyone deserves to grow older with dignity, in a place that feels like theirs. Home is where most people are happiest, and with the right help, staying there is realistic far longer than families expect.</p>" +
        "<p>Our job is to make home the safe, comfortable choice, so the people you love are not forced to give up their independence before they have to.</p>" },

      { id: "about-values", type: "Values", label: "Our Values", html:
        "<h2>How we care</h2>" +
        "<ul class='check'>" +
        "<li><strong>Respect first.</strong> Your loved one leads their own day. We support, we do not take over.</li>" +
        "<li><strong>The right caregiver.</strong> We match on needs and personality, because trust is built between two specific people.</li>" +
        "<li><strong>Honest communication.</strong> You always know how things are going and who to call.</li>" +
        "<li><strong>Reliable.</strong> When we say a caregiver will be there, they are there.</li>" +
        "</ul>" },

      { id: "about-who", type: "Audience", label: "Who We Help", html:
        "<h2>Who we help</h2>" +
        "<p>We work with older adults, people recovering after a hospital stay, and adults living with disabilities or memory loss. Just as often, we work with the adult children coordinating it all, frequently from another city, who need to know someone dependable is showing up.</p>" },

      { id: "about-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Come see the difference candor makes</h2>" +
        "<p>Call <a href='tel:+17137305017'>(713) 730-5017</a> for a free, no-pressure conversation about your family's needs.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Talk to our team</a></p>" }
    ]
  },

  services: {
    nav: "Services", group: "pages", kind: "content", url: "/services/", isParent: true,
    seoTitle: "Home Care Services in Houston | Candor Living Home Care",
    metaDescription: "Explore Candor Living's Houston home care services: 24-hour care, respite, personal care, companionship and home support. Call (713) 730-5017.",
    h1: "Home Care Services in Houston",
    targetWords: 620,
    competitors: [
      { name: "Houston Home Care", domain: "houston-homecare.com", url: "https://www.houston-homecare.com/", note: "Houston organic #1 (ValueSERP)" },
      { name: "Homewatch CareGivers", domain: "homewatchcaregivers.com", url: "https://www.homewatchcaregivers.com/houston-galleria/", note: "Houston organic #2" },
      { name: "Home Care Team TX", domain: "homecareteamtx.com", url: "https://www.homecareteamtx.com/", note: "Houston organic #4" }
    ],
    keywords: {
      basic: [
        { term: "home care services houston", min: 3, max: 6 },
        { term: "home care houston", min: 2, max: 5 },
        { term: "in-home care", min: 2, max: 4 },
        { term: "senior care houston", min: 1, max: 3 },
        { term: "home care services", min: 3, max: 7 },
        { term: "home care", min: 4, max: 9 },
        { term: "caregivers", min: 2, max: 5 },
        { term: "houston", min: 3, max: 7 }
      ],
      extended: [
        { term: "24-hour home care", min: 1, max: 3 },
        { term: "respite care", min: 1, max: 3 },
        { term: "personal care", min: 1, max: 3 },
        { term: "companionship", min: 1, max: 3 },
        { term: "companion care", min: 1, max: 2 },
        { term: "homemaking services", min: 1, max: 2 },
        { term: "home support", min: 1, max: 2 },
        { term: "non-medical home care", min: 1, max: 2 },
        { term: "elderly care", min: 1, max: 2 },
        { term: "senior care", min: 1, max: 3 },
        { term: "in-home senior care", min: 1, max: 2 },
        { term: "hourly care", min: 1, max: 2 },
        { term: "live-in care", min: 1, max: 2 },
        { term: "loved one", min: 1, max: 4 },
        { term: "seniors", min: 2, max: 5 },
        { term: "care plan", min: 1, max: 2 },
        { term: "aging in place", min: 1, max: 2 },
        { term: "dementia care", min: 1, max: 2 }
      ]
    },
    blocks: [
      { id: "svc-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Our services</p>" +
        "<h1>Home Care Services in Houston</h1>" +
        "<p class='lead'>Candor Living offers a full range of non-medical home care services in Houston. Whether your loved one needs a few hours of help a week or around-the-clock support, we build the right plan and adjust it as needs change.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Request a consultation</a> <a class='btn btn-ghost'>Call (713) 730-5017</a></p>" },

      { id: "svc-intro", type: "Intro", label: "Intro", html:
        "<h2>One provider for the care your family needs</h2>" +
        "<p>Families often start with a single need, like a ride to appointments or help after surgery, and grow from there. Keeping everything with one trusted provider means less to coordinate and a caregiver who already knows your loved one.</p>" },

      { id: "svc-grid", type: "Services Grid", label: "Service Cards", html:
        "<div class='svc-cards'>" +
        "<article><h3>24-Hour Home Care</h3><p>Continuous day-and-night support for seniors who should not be alone, including overnight care and live-in options.</p><a class='link'>Learn about 24-hour care</a></article>" +
        "<article><h3>Respite Care</h3><p>Short-term, flexible relief for family caregivers who need to rest, work or travel with confidence.</p><a class='link'>Learn about respite care</a></article>" +
        "<article><h3>Personal Care</h3><p>Dignified, hands-on help with bathing, dressing, grooming, toileting and safe mobility.</p><a class='link'>Learn about personal care</a></article>" +
        "<article><h3>Companionship</h3><p>Conversation, hobbies, walks and a caring presence that keeps loneliness at bay.</p><a class='link'>Learn about companionship</a></article>" +
        "<article><h3>Home Support</h3><p>Light housekeeping, laundry, meal preparation and errands that keep a home running.</p><a class='link'>Learn about home support</a></article>" +
        "</div>" },

      { id: "svc-choose", type: "Guidance", label: "Not Sure Where to Start", html:
        "<h2>Not sure which service you need?</h2>" +
        "<p>Most families do not know exactly what to ask for, and that is fine. Tell us what a hard day looks like for your loved one and we will translate it into a practical plan. Sometimes that is two mornings a week. Sometimes it is full-time care. We will be honest about which one fits.</p>" },

      { id: "svc-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Let's find the right fit</h2>" +
        "<p>Call <a href='tel:+17137305017'>(713) 730-5017</a> or request a consultation and we will walk you through your options.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Request a consultation</a></p>" }
    ]
  }

});

/* ============================================================
   GROUP 2 — Service sub-pages
   ============================================================ */
window.CANDOR.addPages({

  "service-24hour": {
    nav: "24-Hour Home Care", group: "pages", kind: "content", parent: "services", url: "/services/24-hour-home-care/",
    seoTitle: "24-Hour Home Care in Houston, TX | Candor Living",
    metaDescription: "Around-the-clock 24-hour home care in Houston. Overnight and live-in caregivers keep your loved one safe at home, day and night. Call (713) 730-5017.",
    h1: "24-Hour Home Care in Houston",
    targetWords: 560,
    competitors: [
      { name: "24 Hour Home Care", domain: "24hrcares.com", url: "https://www.24hrcares.com/", note: "Houston #1 for '24 hour home care' (ValueSERP)" },
      { name: "Encore Caregivers", domain: "encorecaregivers.com", url: "https://encorecaregivers.com/24-hour-home-care/", note: "Houston organic #2" },
      { name: "Homewatch CareGivers", domain: "homewatchcaregivers.com", url: "https://www.homewatchcaregivers.com/houston-galleria/", note: "Houston organic #3" }
    ],
    keywords: {
      basic: [
        { term: "24-hour home care", min: 4, max: 8 },
        { term: "24 hour home care houston", min: 2, max: 4 },
        { term: "around the clock care", min: 1, max: 3 },
        { term: "live-in care", min: 2, max: 4 },
        { term: "24-hour care", min: 2, max: 5 },
        { term: "home care", min: 3, max: 7 },
        { term: "caregivers", min: 2, max: 5 },
        { term: "houston", min: 2, max: 5 }
      ],
      extended: [
        { term: "overnight care", min: 1, max: 3 },
        { term: "live-in caregiver", min: 1, max: 2 },
        { term: "home care houston", min: 1, max: 3 },
        { term: "senior care", min: 1, max: 3 },
        { term: "in-home care", min: 1, max: 3 },
        { term: "dementia care", min: 1, max: 2 },
        { term: "alzheimer's care", min: 1, max: 2 },
        { term: "fall risk", min: 1, max: 2 },
        { term: "hospital discharge", min: 1, max: 2 },
        { term: "continuous care", min: 1, max: 2 },
        { term: "night care", min: 1, max: 2 },
        { term: "loved one", min: 2, max: 4 },
        { term: "seniors", min: 2, max: 4 },
        { term: "elderly", min: 1, max: 2 },
        { term: "safety", min: 1, max: 3 },
        { term: "nursing home alternative", min: 1, max: 2 },
        { term: "aging in place", min: 1, max: 2 },
        { term: "personal care", min: 1, max: 2 }
      ]
    },
    blocks: [
      { id: "h24-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Services / 24-Hour Home Care</p>" +
        "<h1>24-Hour Home Care in Houston</h1>" +
        "<p class='lead'>Some situations call for someone there at all hours. Our 24-hour home care keeps a trained caregiver with your loved one day and night, so a fall at 3 a.m. or confusion after dark is never faced alone.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Arrange 24-hour care</a> <a class='btn btn-ghost'>Call (713) 730-5017</a></p>" },
      { id: "h24-what", type: "What It Is", label: "What It Is", html:
        "<h2>What 24-hour home care covers</h2>" +
        "<p>24-hour home care means continuous, around-the-clock support in your loved one's own home. Caregivers work in shifts so someone is always awake and alert, or on a live-in arrangement where a caregiver stays overnight and is available as needed.</p>" +
        "<p>It is a practical alternative to a nursing home for families who want their parent to stay where they are comfortable, with one-on-one attention instead of shared staff.</p>" },
      { id: "h24-who", type: "Who It's For", label: "Who It's For", html:
        "<h2>When families choose around-the-clock care</h2>" +
        "<ul class='check'>" +
        "<li>A senior with advanced dementia who wanders or gets disoriented at night</li>" +
        "<li>Recovery after surgery or a hospital stay when being alone is not safe</li>" +
        "<li>High fall risk or trouble getting to the bathroom without help</li>" +
        "<li>Families who tried part-time care and realized the nights are the hard part</li>" +
        "</ul>" },
      { id: "h24-included", type: "What's Included", label: "What's Included", html:
        "<h2>What your caregiver handles</h2>" +
        "<p>Overnight monitoring and safety checks, help to and from the bathroom, medication reminders, repositioning, morning and evening routines, meals, and steady companionship. Everything in our personal care and home support services carries over into the 24-hour plan.</p>" },
      { id: "h24-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Peace of mind, every hour of the day</h2>" +
        "<p>Call <a href='tel:+17137305017'>(713) 730-5017</a> to set up 24-hour home care in Houston, often within a day.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Arrange 24-hour care</a></p>" }
    ]
  },

  "service-respite": {
    nav: "Respite Care", group: "pages", kind: "content", parent: "services", url: "/services/respite-care/",
    seoTitle: "Respite Care in Houston, TX | Short-Term Relief | Candor Living",
    metaDescription: "Respite care in Houston gives family caregivers a break. Trained caregivers cover a few hours, a weekend or longer so you can rest. Call (713) 730-5017.",
    h1: "Respite Care in Houston",
    targetWords: 560,
    competitors: [
      { name: "Visiting Angels", domain: "visitingangels.com", url: "https://www.visitingangels.com/northwesthouston/respite-care", note: "Houston organic for 'respite care' (ValueSERP)" },
      { name: "Home Instead", domain: "homeinstead.com", url: "https://www.homeinstead.com/home-care/usa/tx/houston/252/", note: "Houston organic" },
      { name: "Buckner Parkway Place", domain: "bucknerparkwayplace.org", url: "https://bucknerparkwayplace.org/care-options/respite-care/", note: "Houston organic (local respite)" }
    ],
    keywords: {
      basic: [
        { term: "respite care", min: 4, max: 8 },
        { term: "respite care houston", min: 2, max: 5 },
        { term: "respite care near me", min: 1, max: 3 },
        { term: "respite", min: 4, max: 8 },
        { term: "family caregiver", min: 2, max: 5 },
        { term: "caregivers", min: 2, max: 5 },
        { term: "home care", min: 2, max: 5 },
        { term: "houston", min: 2, max: 5 }
      ],
      extended: [
        { term: "short-term care", min: 1, max: 3 },
        { term: "caregiver relief", min: 1, max: 2 },
        { term: "caregiver burnout", min: 1, max: 2 },
        { term: "in-home respite", min: 1, max: 2 },
        { term: "home care houston", min: 1, max: 2 },
        { term: "senior care", min: 1, max: 2 },
        { term: "temporary care", min: 1, max: 2 },
        { term: "break", min: 1, max: 3 },
        { term: "loved one", min: 2, max: 4 },
        { term: "personal care", min: 1, max: 2 },
        { term: "companionship", min: 1, max: 2 },
        { term: "elderly", min: 1, max: 2 },
        { term: "seniors", min: 1, max: 3 },
        { term: "hourly care", min: 1, max: 2 },
        { term: "overnight care", min: 1, max: 2 },
        { term: "weekend care", min: 1, max: 2 },
        { term: "family caregivers", min: 1, max: 3 }
      ]
    },
    blocks: [
      { id: "resp-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Services / Respite Care</p>" +
        "<h1>Respite Care in Houston</h1>" +
        "<p class='lead'>Caring for a family member is a labor of love, and it is also exhausting. Respite care puts a trained caregiver in your place for a few hours, a weekend, or longer, so you can rest without worrying.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Schedule respite care</a> <a class='btn btn-ghost'>Call (713) 730-5017</a></p>" },
      { id: "resp-what", type: "What It Is", label: "What It Is", html:
        "<h2>What respite care means</h2>" +
        "<p>Respite care is short-term, flexible home care that covers a family caregiver's break. We take over the daily routine, personal care, meals and company, and keep everything running the way your loved one is used to while you step away.</p>" +
        "<p>You might book it for a standing weekly break, a work trip, a medical appointment of your own, or simply a full night's sleep.</p>" },
      { id: "resp-why", type: "Why It Matters", label: "Why It Matters", html:
        "<h2>Rest is not a luxury</h2>" +
        "<p>Burnout is real, and a caregiver who is running on empty cannot give their best. Taking regular breaks helps you stay healthy, patient and present for the long haul. Using respite care is not stepping back from your role. It is protecting your ability to keep doing it.</p>" },
      { id: "resp-included", type: "What's Included", label: "What's Included", html:
        "<h2>What we handle while you are away</h2>" +
        "<p>Personal care and hygiene, medication reminders, meal preparation, light housekeeping, mobility support, and genuine companionship. You leave a clear routine, and we follow it.</p>" },
      { id: "resp-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Take the break you have earned</h2>" +
        "<p>Call <a href='tel:+17137305017'>(713) 730-5017</a> to arrange respite care in Houston on your schedule.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Schedule respite care</a></p>" }
    ]
  },

  "service-personal": {
    nav: "Personal Care", group: "pages", kind: "content", parent: "services", url: "/services/personal-care/",
    seoTitle: "Personal Care Services in Houston, TX | Candor Living Home Care",
    metaDescription: "Dignified personal care in Houston: help with bathing, dressing, grooming and mobility from trained non-medical caregivers. Call (713) 730-5017.",
    h1: "Personal Care Services in Houston",
    targetWords: 560,
    competitors: [
      { name: "Visiting Angels", domain: "visitingangels.com", url: "https://www.visitingangels.com/houstonmetro/home", note: "Houston organic for 'personal care' (ValueSERP)" },
      { name: "Touching Hearts at Home", domain: "touchinghearts.com", url: "https://touchinghearts.com/northhouston/", note: "Houston organic" },
      { name: "Home Matters Caregiving", domain: "homematters.com", url: "https://homematters.com/southwest-houston-tx/", note: "Houston organic" }
    ],
    keywords: {
      basic: [
        { term: "personal care services", min: 4, max: 8 },
        { term: "personal care", min: 4, max: 8 },
        { term: "personal care services houston", min: 1, max: 3 },
        { term: "home care", min: 2, max: 5 },
        { term: "caregivers", min: 2, max: 5 },
        { term: "houston", min: 2, max: 4 },
        { term: "in-home care", min: 1, max: 3 },
        { term: "activities of daily living", min: 1, max: 3 }
      ],
      extended: [
        { term: "bathing", min: 2, max: 4 },
        { term: "dressing", min: 2, max: 4 },
        { term: "grooming", min: 2, max: 4 },
        { term: "toileting", min: 1, max: 3 },
        { term: "hygiene", min: 1, max: 3 },
        { term: "mobility assistance", min: 1, max: 3 },
        { term: "incontinence", min: 1, max: 2 },
        { term: "transfers", min: 1, max: 2 },
        { term: "bathing and dressing", min: 1, max: 2 },
        { term: "senior care", min: 1, max: 2 },
        { term: "home care houston", min: 1, max: 2 },
        { term: "dignity", min: 1, max: 3 },
        { term: "loved one", min: 1, max: 3 },
        { term: "seniors", min: 1, max: 3 },
        { term: "elderly", min: 1, max: 2 },
        { term: "non-medical", min: 1, max: 2 },
        { term: "caregiver", min: 2, max: 5 },
        { term: "aging in place", min: 1, max: 2 }
      ]
    },
    blocks: [
      { id: "pers-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Services / Personal Care</p>" +
        "<h1>Personal Care Services in Houston</h1>" +
        "<p class='lead'>The most personal tasks are often the hardest to ask for help with. Our caregivers assist with bathing, dressing and grooming in a way that protects your loved one's dignity and privacy.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Request personal care</a> <a class='btn btn-ghost'>Call (713) 730-5017</a></p>" },
      { id: "pers-what", type: "What It Is", label: "What It Is", html:
        "<h2>What personal care includes</h2>" +
        "<p>Personal care covers hands-on help with the activities of daily living: bathing and showering, dressing, grooming, hair and oral care, toileting and incontinence support, and safe transfers in and out of bed or a chair. It is non-medical, but it takes patience, training and real respect.</p>" },
      { id: "pers-dignity", type: "Dignity", label: "Dignity & Approach", html:
        "<h2>Handled with dignity</h2>" +
        "<p>We know how vulnerable it can feel to accept help with these routines. Our caregivers move at your loved one's pace, explain what they are doing, and keep the same caregiver assigned whenever possible so a trusting relationship can grow.</p>" },
      { id: "pers-who", type: "Who It's For", label: "Who It's For", html:
        "<h2>Who benefits</h2>" +
        "<ul class='check'>" +
        "<li>Seniors who are unsteady in the shower or bath</li>" +
        "<li>Adults recovering from surgery, a stroke or a fall</li>" +
        "<li>People living with arthritis, Parkinson's or limited mobility</li>" +
        "<li>Anyone whose safety and hygiene have started to slip at home</li>" +
        "</ul>" },
      { id: "pers-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Care that respects the person</h2>" +
        "<p>Call <a href='tel:+17137305017'>(713) 730-5017</a> to arrange personal care services in Houston.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Request personal care</a></p>" }
    ]
  },

  "service-companionship": {
    nav: "Companionship", group: "pages", kind: "content", parent: "services", url: "/services/companionship/",
    seoTitle: "Companion Care for Seniors in Houston, TX | Candor Living",
    metaDescription: "Companion care in Houston eases loneliness for seniors with conversation, hobbies and a friendly presence. Non-medical care. Call (713) 730-5017.",
    h1: "Companionship for Seniors in Houston",
    targetWords: 540,
    competitors: [
      { name: "Visiting Angels", domain: "visitingangels.com", url: "https://www.visitingangels.com/houstonmetro/home", note: "Houston #1 for 'companion care' (ValueSERP)" },
      { name: "Comfort Keepers", domain: "comfortkeepers.com", url: "https://www.comfortkeepers.com/offices/texas/west-central-houston/", note: "Houston organic #2" },
      { name: "At Your Side Home Care", domain: "atyoursidehomecare.com", url: "https://atyoursidehomecare.com/", note: "Houston organic #3 (local)" }
    ],
    keywords: {
      basic: [
        { term: "companion care", min: 4, max: 8 },
        { term: "companionship", min: 3, max: 7 },
        { term: "companionship for seniors", min: 2, max: 4 },
        { term: "companion care houston", min: 1, max: 3 },
        { term: "elderly companionship", min: 1, max: 3 },
        { term: "senior companionship", min: 1, max: 3 },
        { term: "home care", min: 2, max: 5 },
        { term: "caregivers", min: 2, max: 4 }
      ],
      extended: [
        { term: "loneliness", min: 2, max: 4 },
        { term: "social interaction", min: 1, max: 3 },
        { term: "isolation", min: 1, max: 3 },
        { term: "in-home companion", min: 1, max: 2 },
        { term: "companion", min: 3, max: 6 },
        { term: "senior care", min: 1, max: 2 },
        { term: "home care houston", min: 1, max: 2 },
        { term: "conversation", min: 1, max: 3 },
        { term: "activities", min: 1, max: 3 },
        { term: "errands", min: 1, max: 2 },
        { term: "loved one", min: 2, max: 4 },
        { term: "seniors", min: 2, max: 5 },
        { term: "elderly", min: 1, max: 3 },
        { term: "aging in place", min: 1, max: 2 },
        { term: "emotional support", min: 1, max: 2 },
        { term: "houston", min: 1, max: 3 },
        { term: "hobbies", min: 1, max: 2 }
      ]
    },
    blocks: [
      { id: "comp-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Services / Companionship</p>" +
        "<h1>Companionship for Seniors in Houston</h1>" +
        "<p class='lead'>Not all care is physical. For many seniors, the hardest part of the day is the quiet. Our companion care brings conversation, activity and a friendly face to look forward to.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Request companionship</a> <a class='btn btn-ghost'>Call (713) 730-5017</a></p>" },
      { id: "comp-what", type: "What It Is", label: "What It Is", html:
        "<h2>What companion care looks like</h2>" +
        "<p>A companion caregiver spends time with your loved one doing the things that make a day feel full: talking over coffee, playing cards, working in the garden, taking a walk, sorting old photos, or heading out to an appointment or the store. It is company with a purpose.</p>" },
      { id: "comp-why", type: "Why It Matters", label: "Why It Matters", html:
        "<h2>Loneliness affects health</h2>" +
        "<p>Isolation is hard on older adults, and it shows up in mood, appetite, memory and sleep. Regular companionship gives your loved one someone to share the day with, and gives you the reassurance that a caring person is checking in and paying attention.</p>" },
      { id: "comp-who", type: "Who It's For", label: "Who It's For", html:
        "<h2>A good fit when</h2>" +
        "<ul class='check'>" +
        "<li>A parent lives alone and you cannot visit as often as you would like</li>" +
        "<li>A spouse has passed and the house feels empty</li>" +
        "<li>Driving has stopped, and with it a lot of social contact</li>" +
        "<li>You just want another set of eyes on how mom or dad is really doing</li>" +
        "</ul>" },
      { id: "comp-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Give your loved one something to look forward to</h2>" +
        "<p>Call <a href='tel:+17137305017'>(713) 730-5017</a> to arrange companion care in Houston.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Request companionship</a></p>" }
    ]
  },

  "service-homesupport": {
    nav: "Home Support (Homemaking)", group: "pages", kind: "content", parent: "services", url: "/services/home-support/",
    seoTitle: "Homemaking & Home Support Services in Houston, TX | Candor Living",
    metaDescription: "Home support and homemaking in Houston: light housekeeping, laundry, meal prep and errands that keep seniors safe at home. Call (713) 730-5017.",
    h1: "Home Support & Homemaking Services in Houston",
    targetWords: 540,
    competitors: [
      { name: "Encore Caregivers", domain: "encorecaregivers.com", url: "https://encorecaregivers.com/", note: "Houston #1 for 'homemaker services' (ValueSERP)" },
      { name: "Home Helpers Home Care", domain: "homehelpershomecare.com", url: "https://www.homehelpershomecare.com/", note: "Houston organic #2" },
      { name: "Homewatch CareGivers", domain: "homewatchcaregivers.com", url: "https://www.homewatchcaregivers.com/houston-galleria/", note: "Houston organic #5" }
    ],
    keywords: {
      basic: [
        { term: "homemaking services", min: 3, max: 6 },
        { term: "home support services", min: 2, max: 5 },
        { term: "light housekeeping for seniors", min: 1, max: 3 },
        { term: "homemaker services houston", min: 1, max: 3 },
        { term: "homemaking", min: 3, max: 6 },
        { term: "home support", min: 2, max: 5 },
        { term: "home care", min: 2, max: 4 },
        { term: "houston", min: 1, max: 4 }
      ],
      extended: [
        { term: "light housekeeping", min: 2, max: 4 },
        { term: "housekeeping", min: 2, max: 4 },
        { term: "meal preparation", min: 2, max: 4 },
        { term: "laundry", min: 2, max: 4 },
        { term: "errands", min: 2, max: 4 },
        { term: "grocery shopping", min: 1, max: 2 },
        { term: "meal prep", min: 1, max: 2 },
        { term: "home care houston", min: 1, max: 2 },
        { term: "senior care", min: 1, max: 2 },
        { term: "caregivers", min: 1, max: 3 },
        { term: "seniors", min: 2, max: 4 },
        { term: "elderly", min: 1, max: 3 },
        { term: "loved one", min: 1, max: 3 },
        { term: "aging in place", min: 1, max: 2 },
        { term: "non-medical", min: 1, max: 2 },
        { term: "personal care", min: 1, max: 2 },
        { term: "companion care", min: 1, max: 2 }
      ]
    },
    blocks: [
      { id: "hs-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Services / Home Support</p>" +
        "<h1>Home Support & Homemaking Services in Houston</h1>" +
        "<p class='lead'>A safe home is a clean, stocked, manageable home. Our homemaking services handle the housework, laundry, cooking and errands that get harder with age, so your loved one's home stays comfortable and hazard-free.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Request home support</a> <a class='btn btn-ghost'>Call (713) 730-5017</a></p>" },
      { id: "hs-what", type: "What It Is", label: "What It Is", html:
        "<h2>What home support covers</h2>" +
        "<p>Home support, sometimes called homemaking services, is non-medical help around the house: light housekeeping, dishes, laundry and linens, meal preparation, grocery shopping, picking up prescriptions, and other errands. The goal is a tidy, safe space where daily life is easy to manage.</p>" },
      { id: "hs-safety", type: "Safety", label: "Safety Angle", html:
        "<h2>Cleaner homes are safer homes</h2>" +
        "<p>Clutter on the floor, a pile of laundry on the stairs, or an empty fridge are small things that lead to big problems for an older adult. Keeping the home in order removes fall hazards and makes sure your loved one is eating well and taking medications on time.</p>" },
      { id: "hs-who", type: "Who It's For", label: "Who It's For", html:
        "<h2>Often paired with other care</h2>" +
        "<p>Many families add home support to personal care or companionship so one caregiver covers both the person and the household. It is also a gentle first step for seniors who are still largely independent but could use a hand keeping up with the house.</p>" },
      { id: "hs-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Keep home comfortable and safe</h2>" +
        "<p>Call <a href='tel:+17137305017'>(713) 730-5017</a> to arrange home support and homemaking services in Houston.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Request home support</a></p>" }
    ]
  }

});

/* ============================================================
   GROUP 3 — Blog, Careers, Contact
   ============================================================ */
window.CANDOR.addPages({

  blog: {
    nav: "Blog", group: "pages", kind: "content", url: "/blog/",
    seoTitle: "Home Care Blog | Advice for Houston Families | Candor Living",
    metaDescription: "Practical advice for Houston families on senior home care: costs, Medicare, aging in place and knowing when it is time for help. From Candor Living.",
    h1: "The Candor Living Blog",
    targetWords: 480,
    competitors: [
      { name: "A Place for Mom", domain: "aplaceformom.com", url: "https://www.aplaceformom.com/", note: "Ranks for 'home care cost' (ValueSERP)" },
      { name: "Visiting Angels", domain: "visitingangels.com", url: "https://www.visitingangels.com/", note: "Ranks for cost content" },
      { name: "Homecare Houston", domain: "homecare-houston.com", url: "https://homecare-houston.com/", note: "Houston organic content" }
    ],
    keywords: {
      basic: [
        { term: "senior home care", min: 2, max: 5 },
        { term: "home care for seniors", min: 1, max: 3 },
        { term: "in-home senior care", min: 1, max: 3 },
        { term: "home care", min: 3, max: 7 },
        { term: "home care cost", min: 1, max: 3 },
        { term: "home care houston", min: 1, max: 3 },
        { term: "caregivers", min: 1, max: 4 },
        { term: "seniors", min: 2, max: 5 }
      ],
      extended: [
        { term: "how much does in-home care cost", min: 1, max: 2 },
        { term: "does medicare cover in-home care", min: 1, max: 2 },
        { term: "private pay home care", min: 1, max: 2 },
        { term: "home care cost per hour", min: 1, max: 2 },
        { term: "aging in place", min: 1, max: 3 },
        { term: "signs elderly parent needs help", min: 1, max: 2 },
        { term: "cost of home care", min: 1, max: 2 },
        { term: "medicare", min: 1, max: 3 },
        { term: "in-home care", min: 1, max: 3 },
        { term: "elderly care", min: 1, max: 2 },
        { term: "dementia care", min: 1, max: 2 },
        { term: "respite care", min: 1, max: 2 },
        { term: "quality of life", min: 1, max: 2 },
        { term: "loved one", min: 1, max: 3 },
        { term: "families", min: 1, max: 3 },
        { term: "caregiver", min: 1, max: 3 }
      ]
    },
    blocks: [
      { id: "blog-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Blog</p>" +
        "<h1>The Candor Living Blog</h1>" +
        "<p class='lead'>Straight answers to the questions Houston families actually ask us, from what home care costs to how to know when it is time. No jargon, no scare tactics.</p>" },
      { id: "blog-list", type: "Post List", label: "Article Plan (from search demand)", html:
        "<p class='muted'>These first posts are mapped to real Houston search demand from our keyword research. Each is drafted to rank and to genuinely help.</p>" +
        "<div class='post-list'>" +
        "<article><h3>How Much Does In-Home Senior Care Cost in Houston?</h3><p>A plain-English breakdown of hourly rates, what drives the price, and how to budget for care. <em>Targets: 'how much does in home senior care cost'.</em></p></article>" +
        "<article><h3>Does Medicare Cover In-Home Care for Seniors?</h3><p>What Medicare, Medicaid and private pay actually cover for non-medical home care, and where families get surprised. <em>Targets: 'does medicare cover in home care for seniors'.</em></p></article>" +
        "<article><h3>10 Signs It Might Be Time for Home Care</h3><p>The everyday changes, from missed medications to a messy kitchen, that tell you a parent could use help at home. <em>Targets: 'signs elderly parent needs help'.</em></p></article>" +
        "<article><h3>How In-Home Care Helps Seniors Age in Place</h3><p>Why most seniors want to stay home, and how the right support makes it safe and realistic. <em>Targets: 'aging in place', 'home care for seniors'.</em></p></article>" +
        "</div>" },
      { id: "blog-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Have a question we have not answered?</h2>" +
        "<p>Call <a href='tel:+17137305017'>(713) 730-5017</a>. We are happy to talk it through, whether or not you become a client.</p>" }
    ]
  },

  careers: {
    nav: "Careers", group: "pages", kind: "content", url: "/careers/",
    seoTitle: "Caregiver Jobs in Houston, TX | Careers at Candor Living",
    metaDescription: "Now hiring compassionate caregivers and CNAs in Houston. Flexible shifts, real support and work that matters. Apply to join the Candor Living team today.",
    h1: "Caregiver Careers in Houston",
    targetWords: 500,
    competitors: [
      { name: "Indeed", domain: "indeed.com", url: "https://www.indeed.com/q-caregiver-l-houston,-tx-jobs.html", note: "Top job board for 'caregiver jobs' (ValueSERP)" },
      { name: "Home Instead", domain: "homeinstead.com", url: "https://www.homeinstead.com/home-care/usa/tx/houston/252/", note: "Competing Houston employer" },
      { name: "Caring Senior Service", domain: "caringseniorservice.com", url: "https://www.caringseniorservice.com/", note: "Houston organic employer" }
    ],
    keywords: {
      basic: [
        { term: "caregiver jobs houston", min: 3, max: 6 },
        { term: "cna jobs houston", min: 2, max: 5 },
        { term: "home care jobs houston", min: 1, max: 3 },
        { term: "caregiver jobs", min: 3, max: 6 },
        { term: "caregiver", min: 4, max: 8 },
        { term: "houston", min: 3, max: 6 },
        { term: "hiring caregivers", min: 1, max: 3 },
        { term: "home health aide", min: 1, max: 3 }
      ],
      extended: [
        { term: "caregiver jobs near me", min: 1, max: 2 },
        { term: "cna", min: 2, max: 4 },
        { term: "home care jobs", min: 1, max: 3 },
        { term: "private caregiver jobs", min: 1, max: 2 },
        { term: "live-in caregiver jobs", min: 1, max: 2 },
        { term: "flexible shifts", min: 1, max: 3 },
        { term: "home health aide jobs", min: 1, max: 2 },
        { term: "caregiver careers", min: 1, max: 2 },
        { term: "part-time caregiver", min: 1, max: 2 },
        { term: "full-time", min: 1, max: 2 },
        { term: "overnight caregiver", min: 1, max: 2 },
        { term: "apply", min: 2, max: 4 },
        { term: "hiring", min: 2, max: 4 },
        { term: "seniors", min: 1, max: 3 },
        { term: "compassionate", min: 1, max: 2 },
        { term: "experience", min: 1, max: 3 },
        { term: "training", min: 1, max: 2 }
      ]
    },
    blocks: [
      { id: "car-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Careers</p>" +
        "<h1>Caregiver Careers in Houston</h1>" +
        "<p class='lead'>If caring for people is what you do best, we want to meet you. Candor Living is hiring dependable caregivers and CNAs across Houston who want work that actually means something.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Apply now</a> <a class='btn btn-ghost'>Call (713) 730-5017</a></p>" },
      { id: "car-why", type: "Why Work Here", label: "Why Work Here", html:
        "<h2>Why caregivers stay with us</h2>" +
        "<ul class='check'>" +
        "<li><strong>Flexible shifts.</strong> Day, night, weekend and live-in options that fit your life.</li>" +
        "<li><strong>Real support.</strong> A team that answers the phone and has your back on the job.</li>" +
        "<li><strong>Clients matched to you.</strong> We place you where your skills and personality fit.</li>" +
        "<li><strong>Work that matters.</strong> You will see the difference you make every single shift.</li>" +
        "</ul>" },
      { id: "car-roles", type: "Open Roles", label: "Open Roles", html:
        "<h2>Who we are hiring</h2>" +
        "<p>We are looking for caregivers, home health aides and CNAs in the Houston area. Experience with seniors is a plus, but character comes first. If you are reliable, patient and kind, we can train the rest.</p>" +
        "<ul class='trust'><li>Personal care aides</li><li>Companion caregivers</li><li>CNAs</li><li>Overnight & live-in caregivers</li></ul>" },
      { id: "car-apply", type: "How to Apply", label: "How to Apply", html:
        "<h2>How to apply</h2>" +
        "<p>Call <a href='tel:+17137305017'>(713) 730-5017</a> or send us your details through the contact form. Tell us about your experience and the shifts you are looking for, and we will take it from there.</p>" +
        "<p class='cta-row'><a class='btn btn-primary'>Apply now</a></p>" }
    ]
  },

  contact: {
    nav: "Contact Us", group: "pages", kind: "content", url: "/contact/",
    seoTitle: "Contact Candor Living Home Care | Houston, TX | (713) 730-5017",
    metaDescription: "Contact Candor Living Home Care in Houston for a free consultation. Call (713) 730-5017 or send a message and we will get back to you quickly.",
    h1: "Contact Candor Living Home Care",
    targetWords: 360,
    competitors: [
      { name: "Houston Home Care", domain: "houston-homecare.com", url: "https://www.houston-homecare.com/", note: "Houston organic #1 (ValueSERP)" },
      { name: "Home Care Team TX", domain: "homecareteamtx.com", url: "https://www.homecareteamtx.com/", note: "Houston organic #4" },
      { name: "Homecare Houston", domain: "homecare-houston.com", url: "https://homecare-houston.com/contact/", note: "Houston organic #7" }
    ],
    keywords: {
      basic: [
        { term: "home care houston", min: 2, max: 4 },
        { term: "home care near me", min: 1, max: 3 },
        { term: "home care agency houston", min: 1, max: 3 },
        { term: "home care", min: 2, max: 5 },
        { term: "caregivers", min: 1, max: 3 },
        { term: "houston", min: 2, max: 5 },
        { term: "free consultation", min: 1, max: 3 },
        { term: "contact", min: 2, max: 4 }
      ],
      extended: [
        { term: "senior care houston", min: 1, max: 2 },
        { term: "in-home care", min: 1, max: 3 },
        { term: "houston and surrounding areas", min: 1, max: 2 },
        { term: "request care", min: 1, max: 2 },
        { term: "start care", min: 1, max: 2 },
        { term: "phone", min: 1, max: 3 },
        { term: "service area", min: 1, max: 2 },
        { term: "care plan", min: 1, max: 2 },
        { term: "loved one", min: 1, max: 3 },
        { term: "seniors", min: 1, max: 3 },
        { term: "consultation", min: 1, max: 3 }
      ]
    },
    blocks: [
      { id: "con-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Contact</p>" +
        "<h1>Contact Candor Living Home Care</h1>" +
        "<p class='lead'>Ready to talk, or just have questions? Reach out for a free, no-pressure consultation. We answer honestly and move quickly when your family needs care.</p>" },
      { id: "con-info", type: "Contact Info", label: "Contact Details", html:
        "<div class='contact-grid'>" +
        "<div><h3>Call us</h3><p><a href='tel:+17137305017'>(713) 730-5017</a></p></div>" +
        "<div><h3>Email</h3><p><a href='mailto:info@candorlivinghcs.com'>info@candorlivinghcs.com</a></p></div>" +
        "<div><h3>Office</h3><p>1919 Taylor Street, STE F<br>Houston, TX 77007</p></div>" +
        "<div><h3>Service area</h3><p>Houston and surrounding areas</p></div>" +
        "</div>" },
      { id: "con-form", type: "Contact Form", label: "Contact Form", html:
        "<h2>Send us a message</h2>" +
        "<form class='mock-form' onsubmit='return false'>" +
        "<label>Name<input type='text' placeholder='Your full name'></label>" +
        "<label>Email<input type='email' placeholder='you@email.com'></label>" +
        "<label>Phone<input type='tel' placeholder='(713) 000-0000'></label>" +
        "<label>When do you need care to start?<input type='text' placeholder='e.g. As soon as possible'></label>" +
        "<label>How can we help?<textarea rows='4' placeholder='Tell us a little about your situation'></textarea></label>" +
        "<button class='btn btn-primary' type='submit'>Request consultation</button>" +
        "<p class='muted'>Form fields per the client brief: name, email, phone, start date, message. Wire to the live site form on build.</p>" +
        "</form>" }
    ]
  }

});

/* ============================================================
   GROUP 4 — Branding pages
   ============================================================ */
window.CANDOR.addPages({

  "brand-logo": {
    nav: "Logo", group: "branding", kind: "branding", url: "#brand-logo",
    seoTitle: "", metaDescription: "", h1: "Logo & Brand Mark",
    blocks: [
      { id: "logo-hero", type: "Intro", label: "Logo", html:
        "<p class='eyebrow'>Branding</p>" +
        "<h1>Logo &amp; Brand Mark</h1>" +
        "<p class='lead'>Candor Living uses a combination mark (icon plus wordmark). These are the rules that keep it looking sharp and consistent across the website and print.</p>" },
      { id: "logo-usage", type: "Usage", label: "Usage Rules", html:
        "<h2>Using the logo</h2>" +
        "<ul class='check'>" +
        "<li><strong>Primary:</strong> teal mark on cream or white backgrounds.</li>" +
        "<li><strong>Reverse:</strong> cream mark on the teal or charcoal for dark bands.</li>" +
        "<li><strong>Clear space:</strong> keep space equal to the height of the 'C' on every side.</li>" +
        "<li><strong>Do not</strong> stretch, recolor outside the palette, add shadows, or place on a busy photo without a scrim.</li>" +
        "</ul>" +
        "<p class='muted'>Client's supplied logo file drops in here once received. This page becomes the single source of truth for logo assets (SVG, PNG, favicon).</p>" }
    ]
  },

  "brand-palette": {
    nav: "Color Palette", group: "branding", kind: "branding", url: "#brand-palette",
    seoTitle: "", metaDescription: "", h1: "Color Palette",
    blocks: [
      { id: "pal-hero", type: "Intro", label: "Palette", html:
        "<p class='eyebrow'>Branding</p>" +
        "<h1>Color Palette</h1>" +
        "<p class='lead'>A warm, modern-luxurious scheme drawn from the client brief. Teal leads, cream and beige carry the calm, and soft gold adds the touch of premium.</p>" },
      { id: "pal-swatches", type: "Swatches", label: "Brand Colors", html:
        "<div class='swatches'>" +
        "<figure><span class='sw' style='background:#4F8A8B'></span><figcaption><strong>Candor Teal</strong><code>#4F8A8B</code><em>Primary — headers, buttons, marks</em></figcaption></figure>" +
        "<figure><span class='sw' style='background:#F7F2EA'></span><figcaption><strong>Warm Cream</strong><code>#F7F2EA</code><em>Secondary — backgrounds</em></figcaption></figure>" +
        "<figure><span class='sw' style='background:#CBB38A'></span><figcaption><strong>Soft Gold</strong><code>#CBB38A</code><em>Accent + trim</em></figcaption></figure>" +
        "<figure><span class='sw' style='background:#A8917D'></span><figcaption><strong>Warm Taupe</strong><code>#A8917D</code><em>Support text / muted</em></figcaption></figure>" +
        "<figure><span class='sw' style='background:#333333'></span><figcaption><strong>Charcoal</strong><code>#333333</code><em>Body text</em></figcaption></figure>" +
        "<figure><span class='sw' style='background:#D8C9BB'></span><figcaption><strong>Sand Beige</strong><code>#D8C9BB</code><em>Cards / borders</em></figcaption></figure>" +
        "</div>" },
      { id: "pal-use", type: "Usage", label: "How to Use", html:
        "<h2>Balance</h2>" +
        "<p>Lead with cream and white space. Use teal for structure and calls-to-action. Reserve gold for small accents like dividers, icons and hovers, so it stays special. Charcoal handles body text for comfortable reading.</p>" }
    ]
  },

  "brand-typography": {
    nav: "Typography", group: "branding", kind: "branding", url: "#brand-typography",
    seoTitle: "", metaDescription: "", h1: "Typography",
    blocks: [
      { id: "type-hero", type: "Intro", label: "Typography", html:
        "<p class='eyebrow'>Branding</p>" +
        "<h1>Typography</h1>" +
        "<p class='lead'>A warm serif for headlines and a clean sans for reading. The pairing feels premium and welcoming without ever looking clinical, which matches the brief exactly.</p>" },
      { id: "type-specimen", type: "Specimen", label: "Type Specimen", html:
        "<div class='specimen'>" +
        "<div class='spec-display'><span class='spec-label'>Display — Fraunces</span><p style=\"font-family:Georgia,serif;font-size:2rem;line-height:1.15;font-weight:600\">Care That Feels Like Home</p></div>" +
        "<div class='spec-body'><span class='spec-label'>Body — Instrument Sans</span><p>Compassionate, non-medical home care for Houston seniors and their families. Legible at any age, friendly on every screen.</p></div>" +
        "</div>" },
      { id: "type-scale", type: "Scale", label: "Guidance", html:
        "<h2>Guidance</h2>" +
        "<ul class='check'>" +
        "<li><strong>Headlines:</strong> Fraunces, 600 weight. Keep line length short for impact.</li>" +
        "<li><strong>Body:</strong> Instrument Sans, 400. Base size 17-18px for an older-skewing audience.</li>" +
        "<li><strong>Fallbacks:</strong> Georgia (display) and system-ui (body) so nothing breaks if a font fails to load.</li>" +
        "</ul>" }
    ]
  },

  "brand-sitemap": {
    nav: "Sitemap", group: "branding", kind: "branding", url: "#brand-sitemap",
    seoTitle: "", metaDescription: "", h1: "Sitemap",
    blocks: [
      { id: "site-hero", type: "Intro", label: "Sitemap", html:
        "<p class='eyebrow'>Branding</p>" +
        "<h1>Sitemap</h1>" +
        "<p class='lead'>The full page structure for the Candor Living website. Flat and shallow on purpose, so families and search engines can reach any page in one or two clicks.</p>" },
      { id: "site-tree", type: "Tree", label: "Page Structure", html:
        "<ul class='sitemap'>" +
        "<li>Home</li>" +
        "<li>About Us</li>" +
        "<li>Services" +
        "<ul><li>24-Hour Home Care</li><li>Respite Care</li><li>Personal Care</li><li>Companionship</li><li>Home Support (Homemaking)</li></ul></li>" +
        "<li>Blog</li>" +
        "<li>Careers</li>" +
        "<li>Contact Us</li>" +
        "</ul>" +
        "<p class='muted'>Plus system pages: Privacy Policy, Accessibility Statement, 404. Each service page targets a distinct high-intent Houston keyword.</p>" }
    ]
  },

  "brand-seo": {
    nav: "SEO Strategy", group: "branding", kind: "strategy", url: "#brand-seo",
    seoTitle: "", metaDescription: "", h1: "SEO Strategy",
    competitors: [
      { name: "Houston Home Care", domain: "houston-homecare.com", url: "https://www.houston-homecare.com/", note: "#1 organic for 'home care' in Houston (ValueSERP)" },
      { name: "Homewatch CareGivers", domain: "homewatchcaregivers.com", url: "https://www.homewatchcaregivers.com/houston-galleria/", note: "#2 Houston organic" },
      { name: "Home Care Team TX", domain: "homecareteamtx.com", url: "https://www.homecareteamtx.com/", note: "#4 Houston organic" }
    ],
    keywords: {
      basic: [
        { term: "home care houston", min: 0, max: 0 },
        { term: "home care services houston", min: 0, max: 0 },
        { term: "home care agency houston", min: 0, max: 0 },
        { term: "senior care houston", min: 0, max: 0 },
        { term: "respite care houston", min: 0, max: 0 }
      ],
      extended: [
        { term: "24 hour home care", min: 0, max: 0 },
        { term: "respite care", min: 0, max: 0 },
        { term: "companion care", min: 0, max: 0 },
        { term: "personal care services", min: 0, max: 0 },
        { term: "cna jobs houston", min: 0, max: 0 },
        { term: "caregiver jobs houston", min: 0, max: 0 }
      ]
    },
    blocks: [
      { id: "seo-hero", type: "Intro", label: "SEO Strategy", html:
        "<p class='eyebrow'>Branding / Strategy</p>" +
        "<h1>SEO Strategy</h1>" +
        "<p class='lead'>How Candor Living wins search in Houston. Competitor rankings and keyword targets come from live ValueSERP results (Houston Google SERP). June 2026, not guesswork.</p>" },
      { id: "seo-landscape", type: "Landscape", label: "The Landscape", html:
        "<h2>The competitive landscape</h2>" +
        "<p>The money term is <strong>home care houston</strong>. In Houston's live ValueSERP results, the front page is led by local independents (houston-homecare.com, Home Care Team TX, homecare-houston.com) alongside national franchises with Houston pages (Homewatch CareGivers, Visiting Angels, TheKey). Directories like Care.com and Yelp also rank, which is an opening: a focused local brand with real service pages can outrank a directory listing.</p>" },
      { id: "seo-approach", type: "Approach", label: "Our Approach", html:
        "<h2>The plan, in five moves</h2>" +
        "<ol class='steps'>" +
        "<li><strong>Own the local money terms.</strong> A dedicated, keyword-matched page for each service (24-hour, respite, personal care, companionship, home support), each targeting its Houston term plus the huge national head term.</li>" +
        "<li><strong>Win the map.</strong> Google Business Profile fully optimized, consistent name/address/phone everywhere, and a steady flow of reviews. Most home-care buyers convert from the local pack.</li>" +
        "<li><strong>Answer the questions.</strong> Blog posts targeting real demand: cost of in-home care, Medicare coverage, and signs it is time for help. These earn trust and catch families early.</li>" +
        "<li><strong>Prove trust (E-E-A-T).</strong> Real caregivers, credentials, service-area clarity, and structured data (LocalBusiness + FAQ schema) so Google understands the site.</li>" +
        "<li><strong>Go after talent traffic too.</strong> The Careers page targets 'cna jobs houston' (880) and 'caregiver jobs houston' (720), turning SEO into a recruiting channel.</li>" +
        "</ol>" },
      { id: "seo-targets", type: "Targets", label: "Priority Keywords", html:
        "<h2>Priority keyword map</h2>" +
        "<table class='kw-table'><thead><tr><th>Page</th><th>Primary keyword</th><th>Search demand</th></tr></thead><tbody>" +
        "<tr><td>Home</td><td>home care houston</td><td>High (local)</td></tr>" +
        "<tr><td>Services</td><td>home care services houston</td><td>High (local)</td></tr>" +
        "<tr><td>24-Hour</td><td>24 hour home care</td><td>Very high (national)</td></tr>" +
        "<tr><td>Respite</td><td>respite care houston</td><td>Medium (local)</td></tr>" +
        "<tr><td>Personal Care</td><td>personal care services</td><td>High (national)</td></tr>" +
        "<tr><td>Companionship</td><td>companion care</td><td>Very high (national)</td></tr>" +
        "<tr><td>Home Support</td><td>homemaking services</td><td>Medium</td></tr>" +
        "<tr><td>Careers</td><td>cna jobs houston</td><td>Medium (local)</td></tr>" +
        "</tbody></table>" +
        "<p class='muted'>Local head terms have far higher intent and are easier to win than the national terms. We target both: local for conversions now, national for reach as authority grows.</p>" }
    ]
  }

});
