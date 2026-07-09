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
    metaDescription: "Compassionate non-medical home care in Houston. Trained caregivers for personal care, companionship, respite and 24-hour care. Call (713) 730-5017.",
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
        { term: "home care", min: 6, max: 21 },
        { term: "caregivers", min: 3, max: 10 },
        { term: "senior care", min: 2, max: 5 },
        { term: "non-medical home care", min: 1, max: 3 },
        { term: "houston", min: 5, max: 22 }
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
        { term: "families", min: 2, max: 12 },
        { term: "in-home", min: 3, max: 7 },
        { term: "seniors", min: 3, max: 7 },
        { term: "elderly", min: 1, max: 3 },
        { term: "dignity", min: 1, max: 2 },
        { term: "independence", min: 1, max: 2 },
        { term: "compassionate", min: 1, max: 2 },
        { term: "insured", min: 1, max: 4 },
        { term: "background-checked", min: 1, max: 4 }
      ]
    },
    blocks: [
      { id: "home-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Non-medical home care in Houston, TX</p><h1>Compassionate Home Care in Houston, Built Around Your Family</h1><p class='lead'>Your loved one wants to stay home. We help Houston families make that happen. Candor Living sends trained, non-medical caregivers to your door, often within 24 hours of your first call. No waitlists. No hard sell.</p><p class='cta-row'><a class='btn btn-primary'>Start care today</a> <a class='btn btn-ghost' href='tel:+17137305017'>Call (713) 730-5017</a></p>" },

      { id: "home-intro", type: "Intro", label: "Welcome / Intro", html:
        "<h2>Care That Feels Like Home</h2><p>Picking someone to help mom or dad is hard. Most families call us worried about the same stuff. Is she safe? Will they treat him with dignity? Can I trust a stranger in the house? Fair questions, every one. That's the bar we hire and train to.</p><p>Candor Living is a home care agency here in Houston. We send caregivers into the home for seniors, elderly parents, and other older adults who need a hand with everyday things, from a shower and a hot meal to a ride to the doctor. Small stuff. Big difference. It's the kind of in-home care that keeps aging in place realistic instead of wishful.</p>" },

      { id: "home-services", type: "Services Grid", label: "Services Overview", html:
        "<h2>Home care services in Houston</h2><p>Every family lands here for a different reason. So we build the plan around your loved one, then change it as life changes. Our home care services in Houston cover a lot of ground. A quick look at what we do:</p><ul class='svc-grid'><li><strong>Personal Care</strong><span>Bathing, dressing, grooming, getting around. The hands-on stuff, done with respect.</span></li><li><strong>Companionship</strong><span>Cards, a walk, an old story, a laugh. Suddenly the day feels shorter.</span></li><li><strong>Home Support</strong><span>Light housekeeping, laundry, meals, errands. The house keeps running.</span></li><li><strong>Respite Care</strong><span>Family caregivers burn out. Go to work, take a trip, sleep in. We cover the shift.</span></li><li><strong>24-Hour Home Care</strong><span>Day and night, someone's awake and close by. Even at 3 a.m.</span></li></ul>" },

      { id: "home-why", type: "Why Us", label: "Why Candor Living", html:
        "<h2>Why Houston families choose Candor Living</h2><p>There are plenty of home care agencies in Houston. Here's what makes families stick with us.</p><ul class='check'><li><strong>We move fast.</strong> A fall or a rough hospital discharge flips a family's whole week. Most times, we've got a caregiver in place inside a day.</li><li><strong>Real, screened caregivers.</strong> Every caregiver is background-checked, insured, and trained for non-medical senior care before they ever walk in.</li><li><strong>One person who knows you.</strong> You get a human being who remembers your family, not a call center and a ticket number.</li><li><strong>Honest pricing.</strong> You'll know what care costs before it starts. No surprise line items later.</li></ul>" },

      { id: "home-how", type: "Process", label: "How It Works", html:
        "<h2>Getting started is simple</h2><ol class='steps'><li><strong>Call us.</strong> Tell us what's going on. We listen. No pressure, no script.</li><li><strong>We build a care plan.</strong> We come out, learn your loved one's routine, and match a caregiver to their needs and their personality.</li><li><strong>Care begins.</strong> Your caregiver shows up, and you stay in the loop the whole way.</li></ol>" },

      { id: "home-when", type: "Scenarios", label: "When Families Call", html:
        "<h2>When families call us</h2><ul class='check'><li><strong>After the hospital.</strong> Dad comes home Friday and can't be alone yet. In-home care bridges those shaky first weeks.</li><li><strong>The slow creep.</strong> Mom's fine, mostly. But the fridge is bare and the pills get skipped. A few hours a week catches it early, while seniors are still mostly managing.</li><li><strong>From another city.</strong> You're in Dallas. She's in Houston. Our caregivers become your eyes on the ground, with honest updates after every visit.</li><li><strong>Spouse burnout.</strong> He swears he's handling her dementia care alone. He's not sleeping. A few respite hours protect the marriage and his health both.</li><li><strong>The paperwork wall.</strong> VA forms, long-term care claims, discharge instructions written in medical-ese. We've read them all before. Bring the folder.</li></ul>" },

      { id: "home-cost", type: "Pricing", label: "What Care Costs", html:
        "<h2>What home care costs in Houston</h2><p>Straight talk, since that's our thing. Non-medical care here runs by the hour, and most Houston families land somewhere between the upper twenties and the mid thirties per hour, depending on how much help is needed and when. Overnights and holidays sit higher. Bigger weekly schedules usually pull the rate down.</p><p>We quote before care starts, in writing. Budget's tight? Say so. We'll cover the risky parts of the day first, mornings and bath time, say, instead of selling you a giant block you don't need. Long-term care insurance often pays for this. Medicare mostly doesn't. We'd rather tell you that now than surprise you later.</p>" },

      { id: "home-area", type: "Service Area", label: "Service Area", html:
        "<h2>Serving Houston and the surrounding area</h2><p>We provide senior home care across Houston and the towns around it. The Heights. Montrose. The Galleria. Bellaire. West U. Katy, Sugar Land, Pearland, Cypress, The Woodlands. Not sure we reach your street? Just ask. Our in-home care for Houston seniors travels to you. Same-day assessments across most of the metro, elderly care across Houston proper and the suburbs, home caregivers Houston families can actually reach on the phone. Houston, Texas home care, born here, based here. And since in-home senior care comes to you, traffic's our problem, not yours.</p>" },

      { id: "home-faq", type: "FAQ", label: "FAQ", html:
        "<h2>Questions Houston families ask</h2><h3>What is non-medical home care?</h3><p>People ask, so, plainly: our caregivers don't do injections, wound care, or anything that needs a nurse's license. That's home health, a different service, often layered on top of ours after surgery. What we handle is everything else that fills a day. The bathing. The meals. The rides, the reminders, the company. Home care assistance for the life part of living at home. Most families figure out pretty quick that the life part was the bigger job anyway.</p><h3>Why choose Candor Living?</h3><p>Fast placement, honest pricing, and people we vetted ourselves. We're veteran-founded, we answer our own phone, and we match on personality, not just availability. The name is the promise: candor from the first call, even when the honest answer is that you don't need us yet.</p><h3>How fast can care actually start?</h3><p>Often within 24 hours of the first call. Same week, almost always. If it's urgent, say so up front. We've scrambled a caregiver on a Sunday before.</p><h3>Does Medicare pay for any of this?</h3><p>For non-medical home care, usually no. Long-term care insurance often does. VA benefits sometimes do. Most families pay privately by the hour, and we'll walk the options honestly before anything gets signed.</p><h3>Is there a minimum number of hours?</h3><p>Low ones, kept reasonable on purpose. Hourly home care two mornings a week is a perfectly good start. Plenty of seniors begin exactly there.</p><h3>What if the caregiver isn't a fit?</h3><p>Tell us. No hurt feelings, no awkward conversation. Matching in-home caregivers to personalities is half our job, and we swap until it clicks.</p><h3>Can care grow if things change?</h3><p>That's the design. Companion care becomes personal care. Hourly visits become half days, then live-in care or senior care at home around the clock. One phone call moves it. Houston in-home care is built to flex.</p><h3>Who exactly shows up?</h3><p>Our own people, not gig strangers. Background-checked, insured, trained, and matched to your loved one's personality. You meet them before care starts. Always.</p>" },

      { id: "home-testimonials", type: "Testimonials", label: "Testimonials", html:
        "<h2>Kind words, straight from the source</h2><div class='tst-grid'><figure class='tst'><span class='tst__stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</span><blockquote>They had someone at mom's house within a day of my first call. Two months in, she calls Rosa &ldquo;my Tuesday girl.&rdquo;</blockquote><figcaption><strong>D.M.</strong><span>Daughter of a client &middot; The Heights</span></figcaption></figure><figure class='tst'><span class='tst__stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</span><blockquote>I slept through a whole weekend for the first time in a year. Came home to a cleaner house than I left.</blockquote><figcaption><strong>R.T.</strong><span>Family caregiver &middot; Katy</span></figcaption></figure><figure class='tst'><span class='tst__stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</span><blockquote>Straight answers about cost on the first phone call. No runaround. That alone sold us.</blockquote><figcaption><strong>J.C.</strong><span>Son of a client &middot; Pearland</span></figcaption></figure></div><p class='muted'>Sample layout. Verified reviews from real Candor Living clients replace these before launch.</p>" },

      { id: "home-trust", type: "Trust Band", label: "Trust / Credentials", html:
        "<h2>Care you can feel good about</h2><ul class='trust'><li>Background-checked caregivers</li><li>Insured and dependable</li><li>Non-medical, in-home focus</li><li>Built on dignity and independence</li></ul>" },

      { id: "home-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Let's talk about your family's care</h2><p>Maybe care's needed this week. Maybe you're months out and just poking around. Both are fine. Call (713) 730-5017, or leave a note and we'll ring you back.</p><p class='cta-row'><a class='btn btn-primary'>Get a free consultation</a></p>" }
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
        "<p class='eyebrow'>About us</p><h1>About Candor Living Home Care</h1><p class='lead'>We started Candor Living for a plain reason. Houston families needed home care they could actually trust, run by people who treat your parent like their own.</p>" },

      { id: "about-story", type: "Story", label: "Our Story", html:
        "<h2>Who we are</h2><p>Candor Living is a home care agency in Houston. Small on purpose. We do non-medical home care, which is a mouthful that means our caregivers handle daily life for seniors, elderly parents, and disabled adults. Not IVs. Not wound care. Life. A shower. A hot lunch. A ride to Kroger. A hand up the back steps.</p><p>We picked the name deliberately. Candor means straight talk about what your loved one needs, what home care costs, and what we can and can't do. Families in a hard week remember who shot straight with them.</p>" },

      { id: "about-mission", type: "Mission", label: "Mission", html:
        "<h2>What we believe</h2><p>Growing older shouldn't cost anyone their dignity. Or their address. Most people want to be home, full stop, and with the right caregivers that stays realistic far longer than families expect. Our home care in Houston exists to make aging in place the safe choice, so independence doesn't get handed over early.</p>" },

      { id: "about-values", type: "Values", label: "Our Values", html:
        "<h2>How we care</h2><ul class='check'><li><strong>Respect first.</strong> Your loved one runs their own day. We support, we don't take over.</li><li><strong>The right caregiver.</strong> We match on need and on personality, because trust is built between two real people.</li><li><strong>Honest talk.</strong> You always know how it's going and who to call.</li><li><strong>Dependable.</strong> When we say a caregiver's coming, they come.</li></ul>" },

      { id: "about-candilyn", type: "Founder", label: "Meet Candilyn", html:
        "<h2>Meet Candilyn Gee, MBA</h2><p class='muted'>Co-Founder &amp; Client Care Coordinator</p><p>Caring for people starts with treating them like family. I've believed that my whole life.</p><p>I served nearly twenty years in the United States Navy, much of it alongside Hospital Corpsmen and healthcare professionals, leading teams whose whole job was showing up for people. What stuck with me wasn't the big operations. It was how far one small kindness travels when somebody's having the worst week of their life.</p><p>Along the way I earned a Bachelor's in Psychology and an MBA. Psychology for the human side. The MBA because good intentions still need payroll, scheduling, and somebody minding the details. Candor Living is where both land: dependable support so seniors and adults with disabilities can stay in the place they call home, safe and comfortable, still running their own lives.</p><p>What I want is plain enough. Clients who feel valued, families who can finally exhale, and caregivers who carry our name like it means something.</p>" },

      { id: "about-brian", type: "Founder", label: "Meet Brian", html:
        "<h2>Meet Brian &ldquo;Chill&rdquo; Landor</h2><p class='muted'>Co-Founder &amp; Director of Operations</p><p>How you care for people comes down to how you show up for them. Discipline. Respect. Genuine compassion. That's the short version of twenty years in the United States Navy, and it's how we run this company.</p><p>I kept my CPR and medical readiness training current through my whole career, and the habit underneath it, stay prepared, stay calm, respond with care, is now the operating manual for our caregivers.</p><p>This work is personal for me. My grandmothers are the reason, honestly. Whole afternoons at their kitchen tables, talking, laughing, doing nothing much. Nobody photographed any of it, and I remember all of it. Those hours taught me that care isn't really the tasks. It's being present, keeping trust, and letting a person feel like themselves in their own house.</p><p>As Director of Operations, my job is making sure that happens on every single visit.</p>" },

      { id: "about-founders-note", type: "Founders Note", label: "From the Founders", html:
        "<p class='lead'>Great care starts with an actual relationship. That's the whole philosophy. Trust us with someone you love and you'll get straight answers, real warmth, and the calm of knowing good people have it handled.</p>" },

      { id: "about-who", type: "Audience", label: "Who We Help", html:
        "<h2>Who we help</h2><p>Older adults. People healing after a hospital stay. Disabled adults living with memory loss or limited mobility. Elderly care, dementia support, a steady hand after surgery, our caregivers have seen all of it. And just as often we're really helping the adult kids, the ones coordinating everything from another city who need to know a trusted person shows up for their seniors. Respite care when you're fried. Personal care when the tub gets scary. Companionship when the house gets quiet. One care plan, built around your family. That's what a home care provider is for. Hospital discharge planners, rehab teams, and senior living staff send families our way too, mostly because care starts fast and updates actually arrive.</p>" },

      { id: "about-vetting", type: "Vetting", label: "How We Vet Caregivers", html:
        "<h2>How we vet caregivers</h2><p>Slowly, on purpose. Background checks first, the real kind. References actually called. Then a sit-down interview, because a resume can't tell you whether somebody stays patient at 3 a.m. We hire maybe one in ten, train them for non-medical senior care, and keep them insured and bonded from day one.</p><p>Then the part most agencies skip: the match. A retired teacher gets a caregiver who'll talk books. A Vietnam vet gets one who listens. In-home care works when the two people in the room actually like each other.</p>" },

      { id: "about-area", type: "Service Area", label: "Where We Work", html:
        "<h2>Where we work in Houston</h2><p>Houston and the loop around it. The Heights to Pearland, Katy to The Woodlands. If your grandma's street is within a half hour of downtown, odds are good we cover it. Ask.</p>" },

      { id: "about-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Come see the difference candor makes</h2><p>Call (713) 730-5017. A free, no-pressure talk about your family, from people doing compassionate senior care in Houston every day.</p><p class='cta-row'><a class='btn btn-primary'>Talk to our team</a></p>" }
    ]
  },

  services: {
    nav: "Services", group: "pages", kind: "content", url: "/services/", isParent: true,
    seoTitle: "Home Care Services in Houston | Candor Living Home Care",
    metaDescription: "Explore Candor Living's Houston home care services: personal care, companionship, home support, respite and 24-hour care. Call (713) 730-5017.",
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
        { term: "home care", min: 4, max: 11 },
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
        "<p class='eyebrow'>Our services</p><h1>Home Care Services in Houston</h1><p class='lead'>One team for all of it. Candor Living runs the full set of non-medical home care services in Houston. A few hours a week, or round-the-clock. Needs shift? The plan shifts too.</p><p class='cta-row'><a class='btn btn-primary'>Request a free consultation</a> <a class='btn btn-ghost' href='tel:+17137305017'>Call (713) 730-5017</a></p>" },

      { id: "svc-intro", type: "Intro", label: "Intro", html:
        "<h2>One provider for the home care your family needs</h2><p>Most families start with one thing. A ride to chemo. Help after a hip replacement. Then it grows. Keeping your home care services with one Houston provider means less juggling for you, and a caregiver who already knows your loved one's coffee order and their bad knee. In-home senior care works best as one relationship, not a rotation.</p>" },

      { id: "svc-grid", type: "Services Grid", label: "Service Cards", html:
        "<div class='svc-cards'><article><h3>Personal Care</h3><p>Bathing, dressing, grooming. Done kindly. Never rushed, never careless.</p><a class='link'>Personal care</a></article><article><h3>Companionship</h3><p>Dominoes, a walk, an old story told twice. Company that actually counts.</p><a class='link'>Companionship</a></article><article><h3>Home Support</h3><p>Homemaking services. Laundry going, fridge full, floors clear of tripping hazards.</p><a class='link'>Home support</a></article><article><h3>Respite Care</h3><p>You take Tuesday off. Or a week in Galveston. We hold the fort while you're gone.</p><a class='link'>Respite care</a></article><article><h3>24-Hour Home Care</h3><p>Somebody's there all night. And all day after that. Overnight shifts, live-in caregivers, the works.</p><a class='link'>24-hour home care</a></article></div>" },

      { id: "svc-choose", type: "Guidance", label: "Not Sure Where to Start", html:
        "<h2>Not sure which service fits?</h2><p>Nobody calls us knowing the industry words for what they need. A daughter once asked for 'a little help with breakfast.' Turned out dad hadn't had a hot meal in a week and the stairs had gotten scary. Tell us what a hard day looks like. We'll turn it into in-home care that fits, maybe two mornings a week, maybe full-time senior care in Houston. And if you don't need us yet? We'll say that too. Aging in place should feel doable for seniors, not like a project.</p>" },

      { id: "svc-how", type: "Process", label: "How We Build Your Plan", html:
        "<h2>How we build your care plan</h2><ol class='steps'><li><strong>Tell us the real story.</strong> Not the polished version. The 2 a.m. worries, the state of the fridge, the stairs.</li><li><strong>We come see the house.</strong> A care plan built at the actual kitchen table beats one built from a call script.</li><li><strong>Start small, adjust monthly.</strong> Care grows or shrinks as life does. Nothing gets locked in.</li></ol>" },

      { id: "svc-faq", type: "FAQ", label: "FAQ", html:
        "<h2>Questions about our services</h2><h3>Can we mix services?</h3><p>Please do. Most Houston families blend, companion care with light housekeeping, personal care with meals. One caregiver, one visit, several jobs handled.</p><h3>Can the plan change later?</h3><p>Any month, any direction. In-home care that can't flex isn't much of a plan. Surgery recovery ends. Dementia progresses. The care follows the person.</p><h3>Are there hourly minimums?</h3><p>Low ones. Elderly care shouldn't mean buying more hours than the day needs. Start hourly care where the need actually is, and let our caregivers earn a bigger role.</p><h3>Who does the caregiving?</h3><p>Our own people. Vetted, insured, trained, and matched to your loved one, with live-in care and overnight options when seniors need more than daytime help.</p>" },

      { id: "svc-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Let's find the right fit</h2><p>Call (713) 730-5017 and tell us what's going on. Ten minutes, free, no pressure, and you'll know your home care options in plain English.</p><p class='cta-row'><a class='btn btn-primary'>Request a free consultation</a></p>" }
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
        { term: "24-hour care", min: 2, max: 13 },
        { term: "home care", min: 3, max: 9 },
        { term: "caregivers", min: 2, max: 7 },
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
        "<p class='eyebrow'>Services / 24-Hour Home Care</p><h1>24-Hour Home Care in Houston</h1><p class='lead'>Some nights you can't sleep because you're listening for dad. 24-hour home care fixes that. A trained caregiver stays around the clock. A fall at 3 a.m.? A wander at midnight? Somebody's already up.</p><p class='cta-row'><a class='btn btn-primary'>Arrange 24-hour care</a> <a class='btn btn-ghost' href='tel:+17137305017'>Call (713) 730-5017</a></p>" },

      { id: "h24-what", type: "What It Is", label: "What It Is", html:
        "<h2>What 24-hour home care covers</h2><p>Simple version: someone's there. All the time. In your loved one's own home. Caregivers rotate shifts so a person is always awake, or a live-in caregiver stays the night and gets up when needed. Around the clock care, without packing anyone off to a facility.</p><p>Families call it the nursing home alternative. Same safety. One-on-one attention instead of a hallway call button. And your loved one keeps their own bed. The coffee mug with the chip in it. The recliner that fits.</p>" },

      { id: "h24-who", type: "Who It's For", label: "Who It's For", html:
        "<h2>When families choose around-the-clock care</h2><ul class='check'><li>Mom's dementia has her up and wandering after dark</li><li>Dad just came home from the hospital and shouldn't be solo yet</li><li>Falls keep almost happening, and the bathroom trip needs a spotter</li><li>Part-time home care taught you something: the nights are the hard part</li></ul>" },

      { id: "h24-included", type: "What's Included", label: "What's Included", html:
        "<h2>What your caregiver handles</h2><p>Overnight care, with real safety checks in the small hours. A steady arm to the bathroom and back. Medication reminders. Turning and repositioning. Breakfast at the usual hour, the evening wind-down done the usual way. Everything in our personal care rolls into the 24-hour plan. Dementia care and Alzheimer's care? Our in-home caregivers train for exactly that, nights included.</p>" },

      { id: "h24-cost", type: "Pricing", label: "What It Costs", html:
        "<h2>What 24-hour care costs</h2><p>Two ways to price it. Shift-based 24-hour care bills hourly, with caregivers rotating so somebody's always awake. Live-in care runs a flat daily rate instead, since the caregiver sleeps at the house and handles what comes up. Live-in usually costs less per day. Awake-overnight costs more and fits heavier needs.</p><p>Exact numbers depend on the level of care, so we quote in writing before anything starts. Worth knowing: continuous care at home often lands in the same territory as a decent facility, except the attention is one-on-one and nobody shares a call button.</p>" },

      { id: "h24-vs", type: "Comparison", label: "Home vs. Facility", html:
        "<h2>24-hour home care vs. a facility</h2><p>Facilities have their place. But the math surprises people. A good memory-care floor bills like a mortgage, staffs one aide across a dozen rooms, and opens with the hardest week of your loved one's life: the move.</p><p>Around the clock care at home skips the move. Familiar bed. Familiar smells. The neighbor still waves. For Houston seniors with dementia especially, familiar ground is half the therapy, and a caregiver who knows exactly how mom takes her eggs beats a rotating hallway staff most days of the week.</p>" },

      { id: "h24-how", type: "Process", label: "How It Starts", html:
        "<h2>How it starts</h2><ol class='steps'><li><strong>Call today.</strong> Ten minutes, honest answers, including whether you actually need 24-hour coverage or something smaller.</li><li><strong>Assessment at home.</strong> We map the risks seniors actually face at night. Meds, stairs, bathroom layout, the dog.</li><li><strong>Caregivers placed.</strong> Usually within a day or two. You meet them first, and you keep a say.</li></ol>" },

      { id: "h24-night", type: "Overnight", label: "The Overnight Problem", html:
        "<h2>The overnight problem, solved</h2><p>Most family care plans quietly assume somebody sleeps at mom's house forever. That somebody is usually a daughter with a day job. Overnight care hands the night shift to a professional. Door alarms heeded, 2 a.m. bathroom runs spotted, morning meds sorted before the sun's up. You sleep in your own bed again. Remember that?</p>" },

      { id: "h24-faq", type: "FAQ", label: "FAQ", html:
        "<h2>Questions families ask about 24-hour care</h2><h3>Do the caregivers sleep?</h3><p>Depends on the setup. Shift coverage means someone is awake all night, full stop. A live-in caregiver sleeps at the house and gets up when your loved one does. High fall risk or wandering after dark? Go awake-overnight. That's night care done properly.</p><h3>How many caregivers will we see?</h3><p>Usually two or three on a steady rotation. Same faces, same schedule. In-home care runs on consistency, and we guard it.</p><h3>How fast can it start?</h3><p>Often inside a day. A hospital discharge doesn't wait, and neither do we. Call from the discharge lounge if you have to. Senior care should move at hospital speed.</p><h3>Is it cheaper than a nursing home?</h3><p>Sometimes yes, often about even. Live-in care compares especially well, and what you're buying is one-on-one attention in a familiar place instead of a bed in a building. We'll run your numbers both ways, free.</p>" },

      { id: "h24-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Peace of mind, every hour</h2><p>Call (713) 730-5017. We can usually start 24-hour home care in Houston within a day. Elderly parents deserve their own bed. Aging in place is the whole point.</p><p class='cta-row'><a class='btn btn-primary'>Arrange 24-hour care</a></p>" }
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
        { term: "respite", min: 4, max: 13 },
        { term: "family caregiver", min: 2, max: 5 },
        { term: "caregivers", min: 2, max: 7 },
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
        { term: "break", min: 1, max: 6 },
        { term: "loved one", min: 2, max: 4 },
        { term: "personal care", min: 1, max: 4 },
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
        "<p class='eyebrow'>Services / Respite Care</p><h1>Respite Care in Houston</h1><p class='lead'>Caring for family is love. It's also 5 a.m. pill sorting and zero weekends. Respite care drops a trained caregiver into your seat. A few hours, a few weeks, your call. You go rest.</p><p class='cta-row'><a class='btn btn-primary'>Schedule respite care</a> <a class='btn btn-ghost' href='tel:+17137305017'>Call (713) 730-5017</a></p>" },

      { id: "resp-what", type: "What It Is", label: "What It Is", html:
        "<h2>What respite care means</h2><p>Plainly? We cover your shift. You hand us the routine. Lunch at noon. Pills at two. Wheel of Fortune at six. Our caregivers run it exactly that way until you're back, personal care and meals and company included.</p><p>Some Houston families book a standing Thursday. Some book a wedding weekend. One daughter just wanted eight hours of sleep. All of it counts.</p>" },

      { id: "resp-why", type: "Why It Matters", label: "Why It Matters", html:
        "<h2>Rest isn't a luxury</h2><p>Caregiver burnout sneaks up on a family caregiver. You skip your own checkups. You snap at people you love, then feel guilty about that too. A regular break isn't quitting on your loved one. It's how you stay in the game. Family caregivers who rest, last.</p>" },

      { id: "resp-included", type: "What's Included", label: "What's Included", html:
        "<h2>What we handle while you're gone</h2><p>Personal care and hygiene. Medication reminders. Meals, dishes, a bit of tidying. A steady arm around the house, and real companionship, not somebody scrolling a phone in the corner. Hourly care, overnight care, weekend care, all on the table. Searching respite care near me at midnight? The answer's a phone call, and short-term care can start fast.</p>" },

      { id: "resp-how", type: "Process", label: "How Booking Works", html:
        "<h2>How booking works</h2><ol class='steps'><li><strong>Pick your dates.</strong> A Tuesday afternoon. A cruise week. Every Thursday, forever. Whatever shape the break takes.</li><li><strong>Hand off the routine.</strong> We write down the real schedule, the shows, the snacks, the pill times, and follow it to the letter.</li><li><strong>Go. Actually go.</strong> Your caregiver sends updates if you want them. Or radio silence, if you'd rather truly unplug.</li></ol>" },

      { id: "resp-cost", type: "Pricing", label: "What It Costs", html:
        "<h2>What respite care costs</h2><p>Hourly, same as our regular home care in Houston, and you only pay for the hours you book. An afternoon costs an afternoon. No membership, no monthly commitment, no penalty for only needing it sometimes.</p><p>One thing families miss: some long-term care policies specifically cover respite for the family caregiver. Pull out the policy. We'll help you read it, that fine print is practically our native language.</p>" },

      { id: "resp-signs", type: "Signs", label: "Signs You Need It", html:
        "<h2>Signs you need this sooner than later</h2><ul class='check'><li>You can't remember your last full night of sleep</li><li>Your own doctor's appointments keep getting cancelled</li><li>Little things make you snap, and guilt follows right behind</li><li>You've started declining invitations automatically</li></ul><p>Two or more of those? That's not weakness talking. That's the tank hitting empty, and respite is the refill.</p>" },

      { id: "resp-faq", type: "FAQ", label: "FAQ", html:
        "<h2>Questions caregivers ask us</h2><h3>How much notice do you need?</h3><p>More is easier, but don't let short notice stop you. We've covered next-morning shifts plenty of times. Temporary care is what we're built for, and standing weekly bookings get first pick of caregivers.</p><h3>Will they really follow our routine?</h3><p>To the letter. The routine is the assignment. If your elderly dad walks the block at four and watches Jeopardy at seven, that's what happens. Familiar rhythm keeps your break from feeling like a disruption to him.</p><h3>What kinds of care are included?</h3><p>Everything our regular caregivers do. Personal care, meals, medication reminders, mobility, companionship. In-home respite covers the person and the household both, hourly care or overnight care alike. Senior care doesn't pause just because you do.</p><h3>Is a break honestly worth the cost?</h3><p>The families who book a second time think so. Caregiver relief isn't indulgence. It's maintenance. You can't pour from an empty pot, and family caregivers pour every single day.</p>" },

      { id: "resp-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Take the break you've earned</h2><p>Call (713) 730-5017 and pick your dates. Respite care in Houston, on your schedule. Your loved one's in good hands. So are you.</p><p class='cta-row'><a class='btn btn-primary'>Schedule respite care</a></p>" }
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
        { term: "personal care", min: 4, max: 12 },
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
        "<p class='eyebrow'>Services / Personal Care</p><h1>Personal Care Services in Houston</h1><p class='lead'>The most personal tasks are the hardest ones to ask help for. Our personal care services handle bathing, dressing and grooming in a way that guards your loved one's dignity. And their privacy.</p><p class='cta-row'><a class='btn btn-primary'>Request personal care</a> <a class='btn btn-ghost' href='tel:+17137305017'>Call (713) 730-5017</a></p>" },

      { id: "pers-what", type: "What It Is", label: "What It Is", html:
        "<h2>What personal care includes</h2><p>Personal care is hands-on help with the activities of daily living. Bathing and showering. Dressing, when arthritis won't do buttons anymore. Grooming, hair, oral care. Toileting and incontinence support, handled without fuss. Getting in and out of bed, up from the recliner, mobility assistance and transfers with no spills. Non-medical work, sure. It still takes training. And patience you can't fake.</p>" },

      { id: "pers-dignity", type: "Dignity", label: "Dignity & Approach", html:
        "<h2>Handled with dignity</h2><p>Accepting help in the shower feels raw. We know. So our caregivers go at your loved one's pace and say what they're doing before they do it. Where we can, the same caregiver keeps coming back, because trust grows between two particular people, not between a person and a rotation. Clean hair, dry skin, fresh clothes. And dignity, start to finish.</p>" },

      { id: "pers-who", type: "Who It's For", label: "Who It's For", html:
        "<h2>Who benefits</h2><ul class='check'><li>Seniors with a tub that's gotten scary</li><li>Older adults coming home after surgery, a stroke, or a fall</li><li>Folks living with arthritis, Parkinson's, or limited movement</li><li>Anyone whose hygiene and safety have quietly started slipping</li></ul>" },

      { id: "pers-how", type: "Process", label: "The First Visit", html:
        "<h2>What the first visit looks like</h2><p>Awkward is normal, so we plan for it. The first visit runs slow on purpose. Coffee first. The caregiver learns the layout. Grab bars, the bad hip, how your mom wants her hair. Nothing hands-on happens till she's good and ready. The clock doesn't get a vote.</p><p>Give it two weeks. Most seniors go from calling it 'the help' to asking when Maria's coming back. That's the shift we're after.</p>" },

      { id: "pers-cost", type: "Pricing", label: "What It Costs", html:
        "<h2>What personal care costs</h2><p>Hourly, quoted in writing before we start. Personal care services bill the same as our other home care in Houston, no premium for the hands-on parts. Bath visits can be short and focused, an hour of the right help at the right time, which keeps the weekly total humane.</p>" },

      { id: "pers-safety", type: "Safety", label: "Safety Angle", html:
        "<h2>Safety is the quiet part</h2><p>Here's a stat nobody frames on the wall: most falls happen in bathrooms, usually when somebody proud decides to manage alone. So we put a steady arm on the transfers. We turn held-breath showers back into plain old showers. We drag the non-slip mat to where feet actually land. The falls that never happen don't make headlines. They just quietly save independence, which was the whole job.</p>" },

      { id: "pers-faq", type: "FAQ", label: "FAQ", html:
        "<h2>Questions families ask</h2><h3>Can we request the same caregiver every time?</h3><p>Yes. Push for it, honestly. Personal care runs on familiarity, so our caregivers hold steady schedules, and a familiar backup covers the sick days.</p><h3>Can mom ask for a female caregiver?</h3><p>Of course. Bathing and dressing are intimate. Gender preference, language, even somebody who won't fuss over the cat. Tell us what matters and we'll match it.</p><h3>What if dad refuses help?</h3><p>Common, and rarely permanent. Pride runs deep in that generation. We start light, companionship and meals first, and let the caregiver earn the harder tasks. Elderly parents accept help from people, not from agencies.</p><h3>Is this covered by insurance?</h3><p>Long-term care policies usually cover personal care services. Medicare, mostly no. Senior care paperwork is a maze. We've got the map, and we'll tell you straight before anything gets signed.</p>" },

      { id: "pers-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Care that respects the person</h2><p>Call (713) 730-5017 to set up personal care services in Houston. In-home care on your loved one's terms, with senior care that keeps aging in place on the table.</p><p class='cta-row'><a class='btn btn-primary'>Request personal care</a></p>" }
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
        { term: "companionship", min: 3, max: 10 },
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
        { term: "companion", min: 3, max: 11 },
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
        { term: "houston", min: 1, max: 5 },
        { term: "hobbies", min: 1, max: 2 }
      ]
    },
    blocks: [
      { id: "comp-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Services / Companionship</p><h1>Companion Care for Seniors in Houston</h1><p class='lead'>Not all care is physical. Ask around and seniors will tell you the hardest part of the day is 2 p.m. Nothing on TV. Nobody calling. Companion care fixes the quiet.</p><p class='cta-row'><a class='btn btn-primary'>Request companionship</a> <a class='btn btn-ghost' href='tel:+17137305017'>Call (713) 730-5017</a></p>" },

      { id: "comp-what", type: "What It Is", label: "What It Is", html:
        "<h2>What companion care looks like</h2><p>A companion spends real time with your loved one. Coffee and talk. Dominoes. The garden. A walk around the block, a ride to the store, old photos sorted into piles. It's companionship for seniors with a pulse to it, not a stranger watching the clock until five.</p>" },

      { id: "comp-why", type: "Why It Matters", label: "Why It Matters", html:
        "<h2>Loneliness wears on health</h2><p>Doctors keep saying it because it keeps being true. Isolation shows up in the body. Appetite slides. Sleep gets strange. Memory too. Steady companionship gives the day a shape and the social interaction gives a reason to get dressed. And you get the quiet emotional support of knowing somebody kind checked on mom today. Elderly companionship isn't fluff. It's health.</p>" },

      { id: "comp-who", type: "Who It's For", label: "Who It's For", html:
        "<h2>A good fit when</h2><ul class='check'><li>A parent lives alone and you can't visit as often as you'd like</li><li>A spouse passed, and the house got too big and too quiet</li><li>Driving stopped, and half the social life went with it</li><li>You want another set of eyes on how dad's really doing</li></ul>" },

      { id: "comp-day", type: "Sample Visit", label: "A Typical Visit", html:
        "<h2>What a visit actually looks like</h2><p>Say Tuesdays, ten to two. Coffee and the crossword first. A slow lap around the block while the weather behaves. Leftover brisket warmed up for lunch, and real conversation over it, not small talk, the good stuff, 1962 and all. A load of laundry hums in the background. On the way out, a note to you: ate well, moved well, laughed twice.</p><p>That's a companion visit. Nothing dramatic. Everything important.</p>" },

      { id: "comp-cost", type: "Pricing", label: "What It Costs", html:
        "<h2>What companion care costs</h2><p>Our friendliest rate, honestly, since companionship is home care at its lightest. Hourly, book what you need, quoted upfront. Home care in Houston doesn't have to start heavy. Many families begin with two visits a week and let the friendship set the schedule from there. Senior care that starts light tends to stick.</p>" },

      { id: "comp-family", type: "Outcomes", label: "What Families Notice", html:
        "<h2>What families notice</h2><p>Usually the voice first. Mom sounds lighter on the Sunday call. She's got stories again, the caregiver's dog, the domino grudge match, what the garden's doing. Appetite tends to follow. Sleep after that. None of it's magic. It's what steady company does for elderly people who'd gone quiet, and the activities give every visit a spine.</p>" },

      { id: "comp-faq", type: "FAQ", label: "FAQ", html:
        "<h2>Questions families ask</h2><h3>Can the companion drive mom places?</h3><p>Yes. Errands, the salon, church, a doctor run. Our caregivers turn car time into visit time, and the outing becomes the activity.</p><h3>Companion care vs. personal care, what's the difference?</h3><p>Companionship is presence and engagement, the social side. Personal care adds hands-on help, bathing, dressing, the physical stuff. Lots of seniors blend both. One caregiver, one visit, both jobs.</p><h3>Dad says he doesn't need a babysitter. Now what?</h3><p>Good. We don't send babysitters. We send somebody who likes dominoes as much as he does. Frame it as company, not care, because that's what it is. Loneliness loses to an in-home companion who shows up with genuine interest.</p>" },

      { id: "comp-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Give your loved one something to look forward to</h2><p>Call (713) 730-5017 to arrange companion care in Houston. A friend on the calendar, hobbies back in the week, and senior companionship that helps aging in place feel less alone. Our caregivers bring the home care, and the conversation, to seniors across Houston.</p><p class='cta-row'><a class='btn btn-primary'>Request companionship</a></p>" }
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
        { term: "homemaking", min: 3, max: 9 },
        { term: "home support", min: 2, max: 11 },
        { term: "home care", min: 2, max: 4 },
        { term: "houston", min: 1, max: 6 }
      ],
      extended: [
        { term: "light housekeeping", min: 2, max: 4 },
        { term: "housekeeping", min: 2, max: 4 },
        { term: "meal preparation", min: 2, max: 4 },
        { term: "laundry", min: 2, max: 7 },
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
        { term: "personal care", min: 1, max: 4 },
        { term: "companion care", min: 1, max: 2 }
      ]
    },
    blocks: [
      { id: "hs-hero", type: "Hero", label: "Hero", html:
        "<p class='eyebrow'>Services / Home Support</p><h1>Homemaking & Home Support Services in Houston</h1><p class='lead'>A safe home is a clean, stocked, manageable home. Our homemaking services handle the housework, laundry, cooking and errands that get harder with age, so your loved one's place stays comfortable and hazard-free.</p><p class='cta-row'><a class='btn btn-primary'>Request home support</a> <a class='btn btn-ghost' href='tel:+17137305017'>Call (713) 730-5017</a></p>" },

      { id: "hs-what", type: "What It Is", label: "What It Is", html:
        "<h2>What home support covers</h2><p>Home support, or homemaking, is non-medical help around the house. Light housekeeping. Dishes. Laundry and linens. Meal preparation. Grocery shopping and errands. Picking up prescriptions. The goal is a tidy, stocked, easy-to-live-in space, which is exactly what home support services in Houston are built for.</p>" },

      { id: "hs-list", type: "Task List", label: "The Full List", html:
        "<h2>The full task list</h2><ul class='check'><li><strong>Kitchen.</strong> Meal preparation, dishes, fridge cleanouts before the mystery leftovers win.</li><li><strong>Laundry.</strong> Washed, folded, actually put away. Linens on a schedule.</li><li><strong>Housekeeping.</strong> Floors, bathrooms, surfaces. Clutter patrol on the walkways.</li><li><strong>Errands.</strong> Grocery shopping, prescriptions, the post office run.</li></ul>" },

      { id: "hs-safety", type: "Safety", label: "Safety Angle", html:
        "<h2>A cleaner home is a safer home</h2><p>Clutter on the floor. A pile of laundry on the stairs. An empty fridge. Small things, until they aren't, for an older adult. Keeping the home in order clears fall hazards and makes sure seniors are eating and taking meds on time. Light housekeeping for seniors is quiet work that prevents loud problems.</p>" },

      { id: "hs-who", type: "Who It's For", label: "Who It's For", html:
        "<h2>Often paired with other care</h2><p>Plenty of families add home support to personal care or companion care, so one caregiver covers the person and the house. It's also a gentle first step for seniors who are still mostly independent but could use a hand keeping up. Meal prep, laundry, errands, done, and aging in place stays realistic.</p>" },

      { id: "hs-cost", type: "Pricing", label: "What It Costs", html:
        "<h2>What home support costs</h2><p>Hourly and modest. Homemaker services in Houston are the gentlest entry point into care, and a weekly visit does more than you'd think. Bundle homemaking with personal care and one caregiver covers both, which keeps the bill sensible.</p>" },

      { id: "hs-how", type: "Process", label: "Getting Started", html:
        "<h2>Getting started</h2><p>Walk us through the house. Tell us what's sliding. We'll write it into a simple weekly plan, and most families start with one or two visits. Home care in Houston starts this small more often than you'd think. The house tells us quickly if it needs more.</p>" },

      { id: "hs-faq", type: "FAQ", label: "FAQ", html:
        "<h2>Questions families ask</h2><h3>How is this different from a maid service?</h3><p>A cleaning crew does the house and leaves. Our caregivers do the house around your loved one. Lunch made, pills remembered, a chat while the laundry spins. It's senior care wearing an apron.</p><h3>Can they handle grocery money?</h3><p>Yes, with receipts, every time. Clear accounting is house policy. Seniors and their families both see exactly where the errand budget went.</p><h3>Can homemaking combine with other care?</h3><p>Most families do exactly that. Homemaking plus companionship. Homemaking plus personal care. One caregiver, one visit, the person and the household both covered.</p><h3>What about pets?</h3><p>Feeding, litter boxes, a short walk if the knees allow. Pets are family, and half the reason elderly folks want to stay home in the first place. We're firmly pro-pet.</p>" },

      { id: "hs-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Keep home comfortable and safe</h2><p>Call (713) 730-5017 to set up home support and homemaking services in Houston.</p><p class='cta-row'><a class='btn btn-primary'>Request home support</a></p>" }
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
        { term: "home care", min: 3, max: 12 },
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
        { term: "in-home care", min: 1, max: 6 },
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
        "<p class='eyebrow'>Blog</p><h1>The Senior Home Care Blog</h1><p class='lead'>Straight answers to what Houston families actually ask us. What senior home care costs. What Medicare will and won't pay. How to tell when it's time. No jargon. Nobody trying to scare you into a sales call.</p>" },

      { id: "blog-list", type: "Post List", label: "Article Plan (from search demand)", html:
        "<p class='muted'>These first posts map to what Houston families really search. Each one's written to rank, sure, and also to be the page we'd want our own relatives to find.</p><div class='post-list'><article><h3>What In-Home Senior Care Really Costs in Houston</h3><p>Real hourly rates around Houston. The home care cost per hour swings more than you'd think, and one Katy family's budgeting trick makes the math less scary. For everyone typing how much does in-home care cost at midnight.</p></article><article><h3>Medicare and In-Home Care: What It Pays, What It Won't</h3><p>Short answer? Less than folks hope. The whole does-Medicare-cover-in-home-care question, minus the fine-print runaround. Where Medicaid picks up, and when private pay home care becomes the honest option.</p></article><article><h3>10 Signs It Might Be Time for Home Care</h3><p>Missed pills. Mail piling up. A kitchen that's gone sideways. Quiet signs an elderly parent needs help. Worth catching early, before a crisis does the deciding for everyone.</p></article><article><h3>Aging in Place: How Home Care Keeps Seniors Home</h3><p>Staying put is the plan for most seniors. Good caregivers make the plan hold, without taking over the house. Quality of life, guarded by people who do this every day.</p></article></div>" },

      { id: "blog-cta", type: "CTA", label: "Closing CTA", html:
        "<h2>Got a question we haven't answered?</h2><p>Call (713) 730-5017. We'll talk it through whether or not you ever hire us. Dementia care, respite care, elderly care, the true cost of home care, whatever's keeping you up. Home care in Houston for seniors is the only thing we do. Your loved one, your call, our caregiver know-how.</p><p class='cta-row'><a class='btn btn-primary'>Ask us anything</a></p>" }
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
        { term: "caregiver", min: 4, max: 12 },
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
        "<p class='eyebrow'>Careers</p><h1>Caregiver Jobs in Houston</h1><p class='lead'>If caring for people is the thing you do best, we should talk. Candor Living is hiring dependable caregivers and CNAs for work that actually means something.</p><p class='cta-row'><a class='btn btn-primary'>Apply now</a> <a class='btn btn-ghost' href='tel:+17137305017'>Call (713) 730-5017</a></p>" },

      { id: "car-about", type: "About Us", label: "About Candor Living", html:
        "<h2>About Candor Living Home Care Services</h2><p>We help seniors and adults stay safe and independent in their own homes. That only works with exceptional people. So we treat caregivers the way this industry mostly doesn't: you get backup when you call, and you get noticed when you're good. Dependable? Actually like taking care of people? Keep reading. We're hiring for caregiver jobs in Houston right now, and CNA jobs in Houston rarely come with this much backup.</p>" },

      { id: "car-why", type: "Why Work Here", label: "Why Work Here", html:
        "<h2>Why caregivers stick around</h2><ul class='check'><li><strong>Flexible shifts.</strong> Day, night, weekend, live-in. Work that fits your actual life.</li><li><strong>Real backup.</strong> A team that answers the phone and has your back on the job.</li><li><strong>Clients matched to you.</strong> We place you where your skills and personality fit.</li><li><strong>Work that lands.</strong> You'll see the difference you make, every single shift.</li></ul>" },

      { id: "car-role", type: "Open Roles", label: "The Role", html:
        "<h2>Now hiring: Caregiver, Home Care</h2><p>You'll provide non-medical personal care and companionship in clients' homes, one person at a time, following a care plan built for them. The real job is quality of life. Independence, dignity, and safety for the person in front of you, handled with steady professionalism and zero drama.</p><p>We hire for caregiver jobs across Houston, plus CNA and home health aide jobs. Part-time caregiver work, full-time schedules, overnight caregiver shifts, live-in and private caregiver jobs. Experience with seniors helps, but character decides it, and we can train the rest. These are home care jobs in Houston with room to grow.</p>" },

      { id: "car-duties", type: "Responsibilities", label: "What You'll Do", html:
        "<h2>What you'll actually do</h2><ul class='check'><li>Help with activities of daily living: bathing, dressing, grooming, toileting, mobility</li><li>Keep clients company and keep their spirits up</li><li>Fix light meals, help with feeding when it's needed</li><li>Handle light housekeeping and laundry tied to the client's care</li><li>Give medication reminders, where state rules allow</li><li>Spot fall risks, help with transfers and walking</li><li>Drive clients to appointments, errands, and outings</li><li>Notice changes in condition and report them fast</li><li>Keep notes accurate and supervisors in the loop</li><li>Follow the care plan, agency policy, and safety procedures</li><li>Guard client privacy and professional boundaries, always</li></ul>" },

      { id: "car-quals", type: "Qualifications", label: "What You'll Need", html:
        "<h2>What you'll need</h2><ul class='check'><li>High school diploma or GED, preferred</li><li>Experience in caregiving, home care, assisted living, or healthcare, preferred. CNA certification is a plus</li><li>Current CPR certification, or the willingness to get it</li><li>Valid driver's license, reliable transportation, and current auto insurance if the role involves driving</li><li>Clean background screening and any required pre-employment testing</li><li>Able to read, write, and communicate clearly in English</li><li>Legally authorized to work in the United States</li></ul>" },

      { id: "car-skills", type: "Skills", label: "The Intangibles", html:
        "<h2>The stuff we can't train</h2><ul class='check'><li>Patience, warmth, and dependability</li><li>Strong communication, stronger boundaries</li><li>Professional appearance, steady attitude</li><li>Organized enough to run a shift on your own</li><li>Sound judgment, and discretion with what you see and hear in someone's home</li></ul>" },

      { id: "car-physical", type: "Physical Requirements", label: "Physical Requirements", html:
        "<h2>Physical requirements</h2><ul class='check'><li>Lift, transfer, push, or pull up to 50 pounds, with or without reasonable accommodation</li><li>Stand, walk, bend, kneel, reach, and take stairs through a full shift</li><li>Help clients move and transfer safely</li><li>Work comfortably in all kinds of home environments</li></ul>" },

      { id: "car-benefits", type: "Benefits", label: "Benefits", html:
        "<h2>What eligible employees get</h2><ul class='check'><li>Competitive pay</li><li>Paid training and continuing education</li><li>A company-matched retirement plan</li><li>Real room to advance</li><li>Leadership that answers the phone</li><li>Recognition that isn't a coffee mug</li></ul>" },

      { id: "car-whyjoin", type: "Why Join", label: "Why Join", html:
        "<h2>Why join Candor Living?</h2><p>Because caregivers are the foundation here, not a line item. The founders spent twenty years apiece in the Navy, so respect and backup aren't slogans, they're how the schedule runs. Your compassion changes somebody's whole day, every shift you work. Caregiver careers grow here instead of stalling.</p><p class='muted'>Candor Living Home Care Services is an Equal Opportunity Employer. Every qualified applicant gets considered, regardless of race, color, religion, sex, national origin, age, disability, veteran status, or any other legally protected status.</p>" },

      { id: "car-apply", type: "How to Apply", label: "How to Apply", html:
        "<h2>How to apply</h2><p>Call (713) 730-5017 or toss your details through the contact form. Two things we need: where you've worked, what shifts you want. Most people hear back the same week. Hunting cna jobs in Houston? Typing caregiver jobs near me at midnight? Skip the forty-page application. Ours is a phone call, and hiring moves fast. Bring your compassionate streak and a home health aide certificate if you've got one. Training on us.</p><p class='cta-row'><a class='btn btn-primary'>Apply now</a></p>" }
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
        "<p class='eyebrow'>Contact</p><h1>Contact Candor Living Home Care</h1><p class='lead'>Ready to talk, or just have questions? First call's free. So is the advice. We answer honestly and move fast when your family needs home care in Houston.</p>" },

      { id: "con-info", type: "Contact Info", label: "Contact Details", html:
        "<div class='contact-grid'><div><h3>Call us</h3><p><a href='tel:+17137305017'>(713) 730-5017</a></p></div><div><h3>Email</h3><p><a href='mailto:info@candorlivinghcs.com'>info@candorlivinghcs.com</a></p></div><div><h3>Office</h3><p>1919 Taylor Street, STE F<br>Houston, TX 77007</p></div><div><h3>Service area</h3><p>Houston and surrounding areas</p></div></div><p>Prefer the phone? Us too. One call to our home care agency in Houston gets a caregiver moving, often within a day. Beats any home care near me search, because a real person picks up and you can start care the same week. Tell us about your loved one, ask about senior care in Houston, or just request care. We'll take it from there.</p>" },

      { id: "con-pro", type: "Referrals", label: "For Professionals", html:
        "<h2>For discharge planners and referral partners</h2><p>Case managers, hospice teams, rehab discharge planners, senior living staff: call (713) 730-5017 and ask for intake. We can usually have caregivers placed within a day, we'll send confirmation back to your office, and the family gets a real person on the line, not a voicemail tree.</p>" },

      { id: "con-form", type: "Contact Form", label: "Contact Form", html:
        "<h2>Send us a message</h2><form class='mock-form' onsubmit='return false'><label>Name<input type='text' placeholder='Your full name'></label><label>Email<input type='email' placeholder='you@email.com'></label><label>Phone<input type='tel' placeholder='(713) 000-0000'></label><label>When do you need care to start?<input type='text' placeholder='e.g. As soon as possible'></label><label>What's going on at home?<textarea rows='4' placeholder='Tell us a little about your loved one'></textarea></label><button class='btn btn-primary' type='submit'>Request consultation</button><p class='muted'>Name, email, phone, start date, message. That's it. We read every note, sketch a care plan, and call you back. Serving seniors with in-home care across the city and the suburbs around it. Free consultation, zero obligation.</p></form>" }
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
        "<p class='lead'>Candor Living uses a combination mark, exactly as chosen in the brand survey: the teal-and-gold house-heart icon with a script-and-serif wordmark. Below is the supplied mark and the rules that keep it sharp everywhere.</p>" +
        "<div class='logo-stage'><img src='assets/img/candor-logo.png' alt='Candor Living Home Care Services logo'></div>" },
      { id: "logo-usage", type: "Usage", label: "Usage Rules", html:
        "<h2>Using the logo</h2>" +
        "<ul class='check'>" +
        "<li><strong>Primary:</strong> teal mark on cream or white backgrounds.</li>" +
        "<li><strong>Reverse:</strong> cream mark on the teal or charcoal for dark bands.</li>" +
        "<li><strong>Clear space:</strong> keep space equal to the height of the 'C' on every side.</li>" +
        "<li><strong>Do not</strong> stretch, recolor outside the palette, add shadows, or place on a busy photo without a scrim.</li>" +
        "</ul>" +
        "<h2>Wordmark note</h2>" +
        "<p>The supplied logo reads <strong>Home Care Services</strong>, while the survey lists the business name as <strong>Candor Living Home Care Service</strong>. The logo wording leads everywhere the mark appears; the registered name stays in footers, legal copy and schema. Worth one confirmation with Candilyn before launch.</p>" +
        "<p class='muted'>Source file: client-supplied PNG (transparent, 838px). SVG redraw + favicon set are on the build list.</p>" }
    ]
  },

  "brand-palette": {
    nav: "Color Palette", group: "branding", kind: "branding", url: "#brand-palette",
    seoTitle: "", metaDescription: "", h1: "Color Palette",
    blocks: [
      { id: "pal-hero", type: "Intro", label: "Palette", html:
        "<p class='eyebrow'>Branding</p>" +
        "<h1>Color Palette</h1>" +
        "<p class='lead'>Six colors, all supplied by the client in the brand survey, hex for hex. The brief in their own words: a <em>&ldquo;modern luxurious welcome to the family feel.&rdquo;</em> Teal leads, cream carries the calm, gold is the trim.</p>" },
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
        "<p>Lead with cream and white space. Use teal for structure and calls-to-action. Reserve gold for small accents, dividers, icons, hovers, exactly the trim role the survey assigned to #CBB38A. Charcoal handles body text for comfortable reading.</p>" +
        "<p class='muted'>From the survey: Primary #4F8A8B &middot; Secondary #F7F2EA &middot; #CBB38A &middot; #A8917D &middot; #333333 &middot; #D8C9BB &middot; Trim/Outline #CBB38A. Style boxes checked: Elegant/Classic + Clean/Minimalist.</p>" }
    ]
  },

  "brand-typography": {
    nav: "Typography", group: "branding", kind: "branding", url: "#brand-typography",
    seoTitle: "", metaDescription: "", h1: "Typography",
    blocks: [
      { id: "type-hero", type: "Intro", label: "Typography", html:
        "<p class='eyebrow'>Branding</p>" +
        "<h1>Typography</h1>" +
        "<p class='lead'>The survey named no fonts, so this pairing is our recommendation, chosen against the boxes the client did check: Elegant/Classic, Clean/Minimalist, and that &ldquo;modern luxurious welcome to the family&rdquo; feel. A warm serif for headlines, a clean sans for reading.</p>" },
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
        "<li>Home <em class='map-note'>includes Testimonials + FAQ sections</em></li>" +
        "<li>About Us</li>" +
        "<li>Services" +
        "<ul><li>Personal Care</li><li>Companionship</li><li>Home Support (Homemaking)</li><li>Respite Care</li><li>24-Hour Home Care</li></ul></li>" +
        "<li>Blog</li>" +
        "<li>Careers</li>" +
        "<li>Contact Us</li>" +
        "</ul>" +
        "<h2>How this maps to the survey</h2>" +
        "<p>The client checked eight pages: Home, About Us, Services, Contact Us, <strong>FAQs</strong>, <strong>Testimonials/Reviews</strong>, Careers, and <strong>Gallery</strong>. FAQs live as rich sections on every page (stronger for SEO than one orphan page). Testimonials open as a Home section and grow into a full Reviews page once real client reviews exist. Gallery is parked until photography is shot. Blog was added for the search demand we mapped.</p>" +
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
        "<li><strong>Own the local money terms.</strong> A dedicated, keyword-matched page for each service (personal care, companionship, home support, respite, 24-hour), each targeting its Houston term plus the huge national head term.</li>" +
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
        "<tr><td>Personal Care</td><td>personal care services</td><td>High (national)</td></tr>" +
        "<tr><td>Companionship</td><td>companion care</td><td>Very high (national)</td></tr>" +
        "<tr><td>Home Support</td><td>homemaking services</td><td>Medium</td></tr>" +
        "<tr><td>Respite</td><td>respite care houston</td><td>Medium (local)</td></tr>" +
        "<tr><td>24-Hour</td><td>24 hour home care</td><td>Very high (national)</td></tr>" +
        "<tr><td>Careers</td><td>cna jobs houston</td><td>Medium (local)</td></tr>" +
        "</tbody></table>" +
        "<p class='muted'>Local head terms have far higher intent and are easier to win than the national terms. We target both: local for conversions now, national for reach as authority grows.</p>" }
    ]
  }

});
