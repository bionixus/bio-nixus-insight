/**
 * GCC pharmaceutical market-segment landing page content.
 *
 * These pages target proven, high-impression GSC queries that currently rank on
 * pages 3–6 with zero clicks (e.g. "gcc generic injectables market" 470 impr/pos 56,
 * "gcc pharmacy market" 337/pos 26, "gcc clinical trials market" 317/pos 43,
 * "gcc personalized medicine market" 304/pos 48, "gcc biopharmaceuticals market"
 * 236/pos 23). A dedicated, commercially-intented landing page per segment captures
 * demand that thin blog mentions cannot rank for on page one.
 *
 * DATA DISCIPLINE: content is qualitative market intelligence anchored to real,
 * verifiable structures (SFDA, NUPCO, Rafed, Wasfaty, Lifera, the GCC genome
 * programmes, the Gulf Health Council group-purchasing programme, etc.). We do not
 * publish fabricated dollar market sizes — quantitative specifics are presented as
 * directional and attributed to BioNixus primary research, with a "request the
 * dataset" conversion path, which is how a research firm legitimately monetises
 * these queries.
 */

export type GccSegmentContent = {
  slug: string;
  segmentLabel: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
  /** Two intro paragraphs rendered under the H1. */
  intro: string[];
  /** "What we research" cards — segment-specific research lines. */
  researchTopics: Array<{ name: string; detail: string }>;
  /** Demand-driver grid. */
  demandDrivers: { heading: string; drivers: Array<{ title: string; detail: string }> };
  /** Market-structure narrative paragraphs. */
  marketStructure: { heading: string; paragraphs: string[] };
  /** Country-level signals across the six GCC markets. */
  countrySignals: Array<{ country: string; signal: string }>;
  /** Audiences BioNixus reaches for this segment. */
  audiences: Array<{ audience: string; description: string }>;
  /** Proof / why-BioNixus checklist. */
  whyBionixus: string[];
  /** Internal cross-links (topic cluster + commercial pages). */
  relatedLinks: Array<{ to: string; label: string }>;
  /** FAQ (also drives FAQPage schema). */
  faqs: Array<{ question: string; answer: string }>;
};

const BASE = 'https://www.bionixus.com';

/* ------------------------------------------------------------------ */
/* 1. GCC Generic Injectables Market                                   */
/* ------------------------------------------------------------------ */
const genericInjectables: GccSegmentContent = {
  slug: 'gcc-generic-injectables-market',
  segmentLabel: 'Generic Injectables',
  title: 'GCC Generic Injectables Market Research & Intelligence | BioNixus',
  description:
    'GCC generic injectables market intelligence — hospital tender dynamics, NUPCO and Rafed procurement, localization mandates, and biosimilar injectable adoption across Saudi Arabia, UAE, and the Gulf. BioNixus market research.',
  canonical: `${BASE}/gcc-generic-injectables-market`,
  h1: 'GCC Generic Injectables Market: Research & Commercial Intelligence',
  intro: [
    'The GCC generic injectables market is shaped less by pharmacy-counter dynamics than by hospital tenders, central procurement agencies, and localization policy. Demand concentrates in oncology supportive care, anti-infectives, anaesthesia, anticoagulation, and emergency medicine — categories purchased through national tenders rather than retail prescribing. BioNixus provides the primary research that turns that tender-driven, hospital-administered reality into commercial decisions: pricing strategy, supply-security positioning, and biosimilar substitution forecasts.',
    'Generic injectables sit at the intersection of three forces reshaping Gulf pharmaceutical procurement: aggressive localization mandates (Saudi Arabia and the UAE both prioritising domestically manufactured supply), the maturing of biosimilar injectables, and centralized group purchasing that compresses net pricing. Companies competing in this segment need field intelligence on award cycles, formulary committee behaviour, and shortage-risk perception — not generic market reports.',
  ],
  researchTopics: [
    {
      name: 'Tender win/loss analysis',
      detail:
        'Why awards are won or lost across NUPCO (Saudi Arabia), Rafed and SEHA (Abu Dhabi), and MOH tenders in Kuwait, Qatar, Oman, and Bahrain — price, quality scoring, supply reliability, and local content weighting.',
    },
    {
      name: 'Hospital pharmacy formulary research',
      detail:
        'How hospital pharmacy and therapeutics committees evaluate generic and biosimilar injectables, substitution thresholds, and the clinical evidence required to switch from originator products.',
    },
    {
      name: 'Supply security & shortage perception',
      detail:
        'Procurement and clinical-pharmacy attitudes to supply continuity, dual-sourcing, and the premium decision-makers place on shortage-proof partners after recent global injectable shortages.',
    },
    {
      name: 'Localization & "Made in Saudi / UAE" positioning',
      detail:
        'How local-manufacturing status changes tender competitiveness, and the commercial value buyers assign to domestically produced injectables under Vision 2030 and UAE industrial strategy.',
    },
    {
      name: 'Biosimilar injectable substitution',
      detail:
        'Oncologist, haematologist, and pharmacist confidence in biosimilar injectables (supportive care, anti-inflammatory, and oncology biosimilars) and the policy levers accelerating uptake.',
    },
    {
      name: 'Net-price & gross-to-net modelling',
      detail:
        'Realised tender pricing, rebate structures, and gross-to-net erosion across GCC central procurement — the inputs commercial teams need for credible regional forecasts.',
    },
  ],
  demandDrivers: {
    heading: 'What is driving the GCC generic injectables market',
    drivers: [
      {
        title: 'Centralized procurement',
        detail:
          'NUPCO in Saudi Arabia, Rafed in Abu Dhabi, and MOH tenders elsewhere concentrate buying power, making award strategy and pricing intelligence the decisive commercial capability.',
      },
      {
        title: 'Localization mandates',
        detail:
          'Vision 2030 and Gulf industrial strategies reward domestic manufacturing with tender preference, reshaping where injectables are sourced and which partners win.',
      },
      {
        title: 'Biosimilar maturation',
        detail:
          'Injectable biosimilars in supportive care and immunology are expanding the addressable generic-equivalent pool and pressuring originator pricing.',
      },
      {
        title: 'Hospital expansion',
        detail:
          'New tertiary capacity across the Gulf — cancer centres, megaproject hospitals, and specialist networks — lifts hospital-administered injectable volumes.',
      },
      {
        title: 'Supply-chain resilience',
        detail:
          'Post-shortage, buyers increasingly weight supply security and dual-sourcing alongside price, changing how generic suppliers must position.',
      },
      {
        title: 'Cold-chain & sterile capacity',
        detail:
          'Sterile-fill and cold-chain requirements raise barriers to entry and concentrate supply among capable manufacturers — a structural advantage worth quantifying.',
      },
    ],
  },
  marketStructure: {
    heading: 'How the GCC generic injectables market is structured',
    paragraphs: [
      'Unlike retail generics, injectables are overwhelmingly hospital-administered, which means the buyer is a procurement agency or hospital pharmacy committee, not a prescribing physician at a counter. In Saudi Arabia, NUPCO consolidates public-sector purchasing; in Abu Dhabi, Rafed performs a similar group-purchasing role; Kuwait, Qatar, Oman, and Bahrain run MOH-led tenders, with the Gulf Health Council operating a joint procurement programme across member states. Commercial success therefore depends on tender mechanics — registration timing, quality scoring, local-content weighting, and supply guarantees — far more than on detailing.',
      'Localization is the single biggest structural shift. Saudi Arabia\'s Vision 2030 explicitly targets domestic pharmaceutical manufacturing, and tender frameworks increasingly reward local production. The UAE\'s industrial strategy and free-zone biomanufacturing investments pursue the same goal. For generic injectable suppliers, manufacturing footprint and local-content status now materially change win probability — a dynamic BioNixus quantifies through procurement-decision research.',
      'Biosimilar injectables are the fastest-evolving sub-segment. As supportive-care, immunology, and oncology biosimilars secure SFDA and other GCC approvals, the line between "generic injectable" and "biosimilar" blurs commercially. Substitution depends on clinician confidence, pharmacist authority, and payer policy — exactly the perceptual data primary research provides and desk research cannot.',
    ],
  },
  countrySignals: [
    {
      country: 'Saudi Arabia',
      signal:
        'NUPCO central procurement plus the strongest localization push in the Gulf — local-content weighting and Lifera-led domestic manufacturing reshape injectable award strategy.',
    },
    {
      country: 'United Arab Emirates',
      signal:
        'Rafed (Abu Dhabi group purchasing) and emirate-level tenders, with DHA/DoH/MOHAP registration and growing free-zone sterile manufacturing capacity.',
    },
    {
      country: 'Kuwait',
      signal:
        'MOH central tenders with importer/distributor partners; supply continuity and registration timing are decisive in award outcomes.',
    },
    {
      country: 'Qatar',
      signal:
        'Hamad Medical Corporation demand concentration and MOPH tendering; specialist and oncology injectable volumes track tertiary expansion.',
    },
    {
      country: 'Oman',
      signal:
        'MOH tenders with interior logistics and cold-chain SLA variance that buyers factor into supplier scoring.',
    },
    {
      country: 'Bahrain',
      signal:
        'NHRA registration with Salmaniya-centred demand; cross-causeway referral flows complicate volume attribution.',
    },
  ],
  audiences: [
    {
      audience: 'Hospital pharmacy & procurement committees',
      description:
        'Chief pharmacists, formulary committee members, and procurement leads who score tenders on price, quality, and supply reliability.',
    },
    {
      audience: 'Oncologists, haematologists & intensivists',
      description:
        'Specialists administering injectable oncology supportive care, anti-infectives, and critical-care agents whose substitution confidence governs biosimilar uptake.',
    },
    {
      audience: 'Central procurement agencies',
      description:
        'NUPCO, Rafed, and MOH tender bodies whose frameworks and local-content rules define competitive structure.',
    },
    {
      audience: 'Distributors & local manufacturers',
      description:
        'In-market partners and domestic producers whose footprint and registration status determine tender eligibility and win probability.',
    },
  ],
  whyBionixus: [
    'Specialist healthcare and pharmaceutical research firm — not a generalist panel running pharma as a sideline',
    'Hospital pharmacy, oncology, and procurement panels across Saudi Arabia, the UAE, and the wider GCC',
    'Tender-decision and formulary-committee research methodologies built for hospital-administered products',
    'Deep working knowledge of NUPCO, Rafed, and GCC group-purchasing mechanics',
    'Bilingual Arabic–English fieldwork with clinically validated instruments',
    '15+ years of healthcare research experience across 38 countries',
  ],
  relatedLinks: [
    { to: '/gcc-biopharmaceuticals-market', label: 'GCC Biopharmaceuticals Market' },
    { to: '/gcc-pharmacy-market', label: 'GCC Pharmacy Market' },
    { to: '/gcc-pharma-market-report-2026', label: 'GCC Pharmaceutical Market Report 2026' },
    { to: '/gcc-market-access-guide', label: 'GCC Pharmaceutical Market Access Guide' },
    { to: '/healthcare-market-research', label: 'Healthcare market research services' },
    { to: '/pharmaceutical-companies-saudi-arabia', label: 'Pharmaceutical companies in Saudi Arabia' },
  ],
  faqs: [
    {
      question: 'How big is the GCC generic injectables market?',
      answer:
        'The GCC generic injectables segment is one of the fastest-growing parts of regional hospital pharmaceutical spend, driven by oncology supportive care, anti-infectives, and biosimilar injectables. Because most volume moves through central tenders (NUPCO, Rafed, MOH), credible sizing requires tender-level data — BioNixus builds bottom-up estimates from primary procurement research rather than republishing top-line figures.',
    },
    {
      question: 'How does localization affect generic injectable tenders in the Gulf?',
      answer:
        'Saudi Arabia and the UAE both reward domestic manufacturing with tender preference under Vision 2030 and UAE industrial strategy. Local-content status can materially change win probability, so manufacturing footprint is now a core commercial variable. BioNixus measures the value procurement decision-makers place on local production.',
    },
    {
      question: 'Who buys generic injectables in the GCC?',
      answer:
        'The buyer is typically a central procurement agency or hospital pharmacy and therapeutics committee — NUPCO in Saudi Arabia, Rafed in Abu Dhabi, and MOH tender bodies elsewhere — not an individual prescriber. Award strategy, supply guarantees, and quality scoring drive outcomes.',
    },
    {
      question: 'Does BioNixus research biosimilar injectables specifically?',
      answer:
        'Yes. We run clinician confidence, pharmacist authority, and payer-policy studies covering oncology supportive-care, immunology, and other biosimilar injectables, mapping the substitution thresholds that govern uptake across GCC hospitals.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 2. GCC Pharmacy Market                                              */
/* ------------------------------------------------------------------ */
const pharmacy: GccSegmentContent = {
  slug: 'gcc-pharmacy-market',
  segmentLabel: 'Pharmacy',
  title: 'GCC Pharmacy Market Research — Retail, E-Pharmacy & Community | BioNixus',
  description:
    'GCC pharmacy market intelligence — retail chains (Nahdi, Al-Dawaa, Life, Aster), e-pharmacy growth, Wasfaty dispensing, pharmacist scope, and OTC category dynamics across Saudi Arabia, UAE, and the Gulf. BioNixus market research.',
  canonical: `${BASE}/gcc-pharmacy-market`,
  h1: 'GCC Pharmacy Market: Retail, E-Pharmacy & Community Intelligence',
  intro: [
    'The GCC pharmacy market is one of the most consolidated and digitally advanced in the emerging world. Large retail chains — Nahdi and Al-Dawaa in Saudi Arabia; Life, Aster, and BinSina in the UAE — dominate footfall, while national e-prescription and dispensing programmes such as Wasfaty are reshaping where and how medicines reach patients. BioNixus delivers the pharmacist, shopper, and category research that pharmaceutical and consumer-health companies need to win at the GCC pharmacy counter.',
    'Pharmacy in the Gulf is no longer just a dispensing channel; it is a primary care touchpoint, a chronic-disease management hub, and a fast-growing e-commerce category. Pharmacist scope is expanding, OTC and wellness categories are growing, and digital pharmacy is taking share. Commercial teams need primary research on dispensing behaviour, recommendation drivers, and shopper decisions across both physical and digital pharmacy.',
  ],
  researchTopics: [
    {
      name: 'Pharmacist recommendation drivers',
      detail:
        'What drives community and chain-pharmacist recommendations across OTC, switch, and behind-the-counter categories — and how detailing and trade terms shift them.',
    },
    {
      name: 'Shopper & patient journey research',
      detail:
        'How GCC shoppers choose pharmacies and products, the role of price, brand, and pharmacist advice, and the journey from symptom to purchase across chronic and acute needs.',
    },
    {
      name: 'E-pharmacy adoption',
      detail:
        'Uptake of online pharmacy and delivery (chain apps, marketplaces) and how digital dispensing changes brand visibility, basket composition, and adherence.',
    },
    {
      name: 'Wasfaty & e-prescription impact',
      detail:
        "Saudi Arabia's Wasfaty electronic prescription and dispensing programme and its effect on retail flow, formulary access, and brand-vs-generic dynamics.",
    },
    {
      name: 'OTC & consumer-health category research',
      detail:
        'Category sizing, claim testing, and pack/price research for vitamins, supplements, dermo-cosmetics, and self-care categories growing across Gulf pharmacy.',
    },
    {
      name: 'Chain vs independent dynamics',
      detail:
        'Trade strategy across consolidated chains versus independent pharmacies, including listing, planogram, and trade-investment effectiveness.',
    },
  ],
  demandDrivers: {
    heading: 'What is driving the GCC pharmacy market',
    drivers: [
      {
        title: 'Chain consolidation',
        detail:
          'Large, listed pharmacy chains dominate the Gulf, concentrating buying power and making chain trade strategy decisive for brand availability.',
      },
      {
        title: 'E-pharmacy growth',
        detail:
          'Online pharmacy and same-day delivery are taking share, shifting brand discovery and adherence into digital channels.',
      },
      {
        title: 'Pharmacist scope expansion',
        detail:
          'Pharmacists are increasingly trusted for chronic-care support, vaccination, and minor-ailment advice, raising the value of pharmacist research.',
      },
      {
        title: 'National dispensing programmes',
        detail:
          "Wasfaty and similar programmes route public prescriptions through retail pharmacy, changing access and substitution dynamics.",
      },
      {
        title: 'Self-care & wellness',
        detail:
          'Rising disposable income and health awareness expand OTC, supplement, and dermo-cosmetic categories at the pharmacy.',
      },
      {
        title: 'Insurance & chronic care',
        detail:
          'Mandatory insurance in the UAE and expanding coverage in Saudi Arabia channel chronic prescriptions through pharmacy with structured reimbursement.',
      },
    ],
  },
  marketStructure: {
    heading: 'How the GCC pharmacy market is structured',
    paragraphs: [
      'The Gulf pharmacy landscape is unusually consolidated. In Saudi Arabia, Nahdi and Al-Dawaa operate at national scale; in the UAE, Life Pharmacy, Aster, and BinSina lead a still-fragmenting-but-consolidating market. This concentration means chain trade strategy — listing, planogram, trade investment, and own-label competition — often matters as much as consumer demand. BioNixus segments research by chain versus independent because the commercial levers differ sharply.',
      'Digital pharmacy is the defining growth story. Chain apps, delivery platforms, and marketplaces are moving a meaningful share of dispensing online, particularly for chronic refills and self-care. This reshapes brand discovery, basket size, and adherence, and creates new data needs around online shelf, search visibility, and digital recommendation. National e-prescription programmes such as Saudi Arabia\'s Wasfaty add another layer, routing public prescriptions through retail pharmacy and changing brand-versus-generic flow.',
      'The pharmacist remains the pivotal influencer. Across OTC, switch categories, and chronic-care support, pharmacist recommendation drives a large share of purchase decisions — and pharmacist scope is widening into vaccination, screening, and minor-ailment management. Understanding what shifts pharmacist recommendation, and how shoppers weigh price, brand, and advice, is the core of effective GCC pharmacy strategy.',
    ],
  },
  countrySignals: [
    {
      country: 'Saudi Arabia',
      signal:
        'Nahdi and Al-Dawaa dominate national retail; Wasfaty e-prescription routes public scripts through pharmacy; strong OTC and self-care growth.',
    },
    {
      country: 'United Arab Emirates',
      signal:
        'Life, Aster, and BinSina lead a consolidating market; high mandatory-insurance penetration; advanced e-pharmacy and delivery adoption.',
    },
    {
      country: 'Kuwait',
      signal:
        'Mixed chain and independent landscape with growing private-pharmacy chains and rising self-care demand.',
    },
    {
      country: 'Qatar',
      signal:
        'Hospital and private-pharmacy mix with high per-capita spend and premium consumer-health appetite.',
    },
    {
      country: 'Oman',
      signal:
        'Expanding private-pharmacy footprint outside Muscat; geography shapes delivery and access patterns.',
    },
    {
      country: 'Bahrain',
      signal:
        'Compact, competitive retail market with cross-causeway shopper flows influencing category demand.',
    },
  ],
  audiences: [
    {
      audience: 'Community & chain pharmacists',
      description:
        'Front-line pharmacists whose recommendations drive OTC, switch, and chronic-care purchases across Gulf retail.',
    },
    {
      audience: 'Pharmacy shoppers & patients',
      description:
        'Consumers and patients making self-care and prescription decisions across physical and digital pharmacy.',
    },
    {
      audience: 'Chain category & trade buyers',
      description:
        'Category managers and buyers at the major chains who control listing, planogram, and trade terms.',
    },
    {
      audience: 'Brand & consumer-health teams',
      description:
        'OTC, Rx, and consumer-health commercial teams needing category, claim, and shopper evidence for the Gulf.',
    },
  ],
  whyBionixus: [
    'Combined healthcare and consumer/shopper research capability under one roof',
    'Pharmacist panels across Saudi Arabia, the UAE, and the wider GCC',
    'Shopper, category, and claim-testing methodologies for OTC and self-care',
    'E-pharmacy and digital-shelf research for the Gulf\'s fast-growing online channel',
    'Bilingual Arabic–English fieldwork with culturally validated instruments',
    '15+ years of healthcare and consumer research across 38 countries',
  ],
  relatedLinks: [
    { to: '/gcc-generic-injectables-market', label: 'GCC Generic Injectables Market' },
    { to: '/gcc-biopharmaceuticals-market', label: 'GCC Biopharmaceuticals Market' },
    { to: '/gcc-pharma-market-report-2026', label: 'GCC Pharmaceutical Market Report 2026' },
    { to: '/healthcare-market-research', label: 'Healthcare market research services' },
    { to: '/market-research-in-saudi-arabia', label: 'Market research in Saudi Arabia' },
    { to: '/market-research-in-uae', label: 'Market research in the UAE' },
  ],
  faqs: [
    {
      question: 'How big is the GCC pharmacy market?',
      answer:
        'The Gulf pharmacy market is large, consolidated, and growing across both prescription and self-care, with Saudi Arabia and the UAE accounting for most of the volume. Because growth is split between physical chains and fast-rising e-pharmacy, BioNixus sizes the channel from primary chain, pharmacist, and shopper research rather than a single headline figure.',
    },
    {
      question: 'Which pharmacy chains dominate the GCC?',
      answer:
        'In Saudi Arabia, Nahdi and Al-Dawaa lead at national scale; in the UAE, Life Pharmacy, Aster, and BinSina are the largest networks. Consolidation makes chain trade strategy — listing, planogram, and trade investment — a central commercial lever.',
    },
    {
      question: 'How is e-pharmacy changing the Gulf market?',
      answer:
        'Online pharmacy and delivery are taking share, especially for chronic refills and self-care. This shifts brand discovery and adherence into digital channels and creates new research needs around online shelf visibility and digital pharmacist recommendation.',
    },
    {
      question: 'What is Wasfaty and why does it matter?',
      answer:
        "Wasfaty is Saudi Arabia's electronic prescription and dispensing programme, which routes public-sector prescriptions through retail pharmacy. It changes where patients collect medicines and influences brand-versus-generic flow — an important factor in GCC pharmacy strategy.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 3. GCC Clinical Trials Market                                       */
/* ------------------------------------------------------------------ */
const clinicalTrials: GccSegmentContent = {
  slug: 'gcc-clinical-trials-market',
  segmentLabel: 'Clinical Trials',
  title: 'GCC Clinical Trials Market — Site Feasibility & Landscape Research | BioNixus',
  description:
    'GCC clinical trials market intelligence — SFDA regulation, site feasibility, investigator and KOL mapping, patient recruitment, and the Gulf genome programmes across Saudi Arabia, UAE, and Qatar. BioNixus research.',
  canonical: `${BASE}/gcc-clinical-trials-market`,
  h1: 'GCC Clinical Trials Market: Feasibility & Landscape Intelligence',
  intro: [
    "The GCC is investing heavily to become a credible clinical research destination. Saudi Arabia's Vision 2030 explicitly targets growth in clinical trials, the SFDA has modernised trial regulation, and institutions such as KAIMRC anchor a maturing research infrastructure. The Gulf genome programmes are building some of the world's largest national cohorts. BioNixus provides the site-feasibility, investigator-mapping, and competitive-landscape research that sponsors and CROs need before committing the region to a protocol.",
    'Running trials in the Gulf is now viable, but success depends on local intelligence: which sites have genuine enrolment capacity, who the credible investigators are, how ethics and regulatory timelines actually run, and where competing trials will fight for the same patients. That is feasibility and landscape research — not a published market report — and it is what determines whether a GCC site delivers.',
  ],
  researchTopics: [
    {
      name: 'Site feasibility assessment',
      detail:
        'Real enrolment capacity, infrastructure, and operational readiness across Gulf tertiary centres — beyond the optimistic self-reporting in standard feasibility questionnaires.',
    },
    {
      name: 'Investigator & KOL mapping',
      detail:
        'Identifying credible principal investigators and research-active KOLs by therapy area, and mapping their networks, publication record, and trial experience.',
    },
    {
      name: 'Patient recruitment feasibility',
      detail:
        'Realistic patient-pool sizing, referral pathways, and recruitment-barrier assessment for the indication, factoring in epidemiology and access patterns.',
    },
    {
      name: 'Competitive trial landscape',
      detail:
        'Which sponsors and protocols are already active or planned at target sites, and where patient competition will constrain enrolment.',
    },
    {
      name: 'Regulatory & ethics timeline mapping',
      detail:
        'How SFDA, NCBE, and institutional ethics committee timelines actually run in practice, and the documentation that accelerates or stalls approvals.',
    },
    {
      name: 'Genome-programme & cohort adjacency',
      detail:
        'How the Saudi, Emirati, and Qatar genome programmes and biobanks create opportunities for biomarker-driven and precision trials.',
    },
  ],
  demandDrivers: {
    heading: 'What is driving the GCC clinical trials market',
    drivers: [
      {
        title: 'Vision 2030 research ambitions',
        detail:
          'Saudi Arabia has set explicit national targets to grow clinical research, backed by infrastructure and funding.',
      },
      {
        title: 'Regulatory modernisation',
        detail:
          'The SFDA and regional regulators have streamlined trial frameworks, making the Gulf a more predictable destination.',
      },
      {
        title: 'Genome & biobank cohorts',
        detail:
          'The Saudi, Emirati, and Qatar genome programmes build large, well-characterised cohorts that enable precision and biomarker trials.',
      },
      {
        title: 'Tertiary infrastructure',
        detail:
          'KAIMRC, KFSH&RC, and megaproject hospitals provide research-capable sites with growing experience.',
      },
      {
        title: 'Treatment-naïve populations',
        detail:
          'Certain indications offer relatively treatment-naïve patient pools attractive for enrolment.',
      },
      {
        title: 'Sponsor regionalisation',
        detail:
          'Global sponsors increasingly include the Gulf in regional and global programmes, lifting demand for local feasibility.',
      },
    ],
  },
  marketStructure: {
    heading: 'How the GCC clinical trials landscape is structured',
    paragraphs: [
      "Clinical research in the Gulf is concentrated in a relatively small number of capable tertiary centres and academic medical institutions. In Saudi Arabia, KAIMRC and King Faisal Specialist Hospital & Research Centre anchor research capacity, with the SFDA regulating trials and the National Committee of BioEthics (NCBE) overseeing ethics. The UAE and Qatar have built parallel capability through academic hospitals, research institutes, and the genome programmes. Sponsors and CROs must therefore concentrate feasibility on the genuinely research-active sites rather than assuming uniform capability.",
      "The Gulf genome programmes are a distinctive structural asset. The Saudi Genome Program, the Emirati Genome Programme, and the Qatar Genome Programme are building national-scale, well-characterised cohorts. For sponsors, this creates real opportunities in biomarker-stratified and precision trials, and connects clinical-trial strategy to the region's personalized-medicine push. BioNixus maps how these cohorts and their governance translate into practical trial opportunities.",
      'The decisive variable remains realistic feasibility. Self-reported site capacity routinely overstates true enrolment ability; regulatory and ethics timelines vary in practice; and competing trials quietly absorb the same patient pools. Rigorous, independent feasibility and investigator research — triangulating site claims against on-the-ground reality — is what separates a Gulf site that delivers from one that underperforms.',
    ],
  },
  countrySignals: [
    {
      country: 'Saudi Arabia',
      signal:
        'The Gulf\'s most ambitious research agenda — KAIMRC, KFSH&RC, SFDA regulation, NCBE ethics oversight, and the Saudi Genome Program cohort.',
    },
    {
      country: 'United Arab Emirates',
      signal:
        'Academic hospitals, the Emirati Genome Programme, and Abu Dhabi/Dubai research institutes building trial capability.',
    },
    {
      country: 'Qatar',
      signal:
        'Hamad Medical Corporation, Sidra Medicine, and the Qatar Genome Programme anchor a focused, well-funded research base.',
    },
    {
      country: 'Kuwait',
      signal:
        'Selective tertiary research capacity with growing interest in oncology and metabolic trials.',
    },
    {
      country: 'Oman',
      signal:
        'Emerging research activity centred on Sultan Qaboos University and national tertiary centres.',
    },
    {
      country: 'Bahrain',
      signal:
        'Compact research footprint with academic-hospital partnerships and regional collaboration.',
    },
  ],
  audiences: [
    {
      audience: 'Principal investigators & research KOLs',
      description:
        'Trial-experienced clinicians whose capacity, networks, and credibility determine site selection.',
    },
    {
      audience: 'Research coordinators & site staff',
      description:
        'The operational layer whose true capacity and workload shape realistic enrolment timelines.',
    },
    {
      audience: 'Sponsors & CRO feasibility teams',
      description:
        'Global and regional teams deciding whether and where to place trials in the Gulf.',
    },
    {
      audience: 'Ethics & regulatory stakeholders',
      description:
        'SFDA, NCBE, and institutional ethics committees whose timelines and requirements govern start-up.',
    },
  ],
  whyBionixus: [
    'Independent feasibility research that triangulates site claims against on-the-ground reality',
    'Investigator and KOL panels across Gulf tertiary and academic centres',
    'Therapy-area expertise spanning oncology, rare disease, metabolic, and immunology',
    'Working knowledge of SFDA, NCBE, and Gulf ethics-committee practice',
    'Bilingual Arabic–English fieldwork with clinically literate researchers',
    '15+ years of healthcare research experience across 38 countries',
  ],
  relatedLinks: [
    { to: '/gcc-personalized-medicine-market', label: 'GCC Personalized Medicine Market' },
    { to: '/gcc-biopharmaceuticals-market', label: 'GCC Biopharmaceuticals Market' },
    { to: '/real-world-evidence', label: 'Real-world evidence research' },
    { to: '/kol-mapping-saudi-arabia-oncology', label: 'KOL mapping — Saudi Arabia oncology' },
    { to: '/healthcare-market-research', label: 'Healthcare market research services' },
    { to: '/healthcare-market-research-in-saudi-arabia', label: 'Healthcare market research in Saudi Arabia' },
  ],
  faqs: [
    {
      question: 'Is the GCC a viable region for clinical trials?',
      answer:
        "Increasingly yes. Saudi Arabia's Vision 2030 targets clinical-research growth, the SFDA has modernised trial regulation, and institutions such as KAIMRC and KFSH&RC provide research-capable sites. Success depends on selecting genuinely research-active sites and credible investigators — which is what feasibility research establishes.",
    },
    {
      question: 'What does GCC clinical trial feasibility research involve?',
      answer:
        'It assesses real site enrolment capacity, investigator credibility and networks, realistic patient pools, competing trials, and regulatory/ethics timelines. The goal is to separate optimistic self-reporting from on-the-ground reality before a sponsor commits a protocol to the region.',
    },
    {
      question: 'How do the Gulf genome programmes affect trials?',
      answer:
        'The Saudi, Emirati, and Qatar genome programmes build large, well-characterised national cohorts, creating opportunities for biomarker-stratified and precision trials and linking clinical-trial strategy to the region\'s personalized-medicine agenda.',
    },
    {
      question: 'Who regulates clinical trials in Saudi Arabia?',
      answer:
        'The SFDA regulates clinical trials, with the National Committee of BioEthics (NCBE) and institutional ethics committees overseeing ethics approval. BioNixus maps how these timelines and requirements run in practice.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4. GCC Personalized Medicine Market                                 */
/* ------------------------------------------------------------------ */
const personalizedMedicine: GccSegmentContent = {
  slug: 'gcc-personalized-medicine-market',
  segmentLabel: 'Personalized Medicine',
  title: 'GCC Personalized Medicine Market — Genomics & Precision Research | BioNixus',
  description:
    'GCC personalized medicine market intelligence — the Saudi, Emirati, and Qatar genome programmes, precision oncology, companion diagnostics, biomarker testing, and pharmacogenomics. BioNixus market research.',
  canonical: `${BASE}/gcc-personalized-medicine-market`,
  h1: 'GCC Personalized Medicine Market: Genomics & Precision Intelligence',
  intro: [
    'The Gulf is making one of the world\'s largest national bets on personalized medicine. The Saudi Genome Program, the Emirati Genome Programme, and the Qatar Genome Programme are sequencing populations at national scale, while precision oncology, companion diagnostics, and pharmacogenomics advance across tertiary centres. BioNixus provides the adoption, access, and clinician-behaviour research that pharmaceutical and diagnostics companies need to commercialise precision medicine in the region.',
    'Personalized medicine in the GCC is no longer aspirational — genome programmes, biomarker testing, and targeted therapies are live. But commercial success depends on real-world adoption: whether oncologists order the test, whether labs can deliver results in time, whether payers reimburse companion diagnostics, and whether the infrastructure connects testing to targeted treatment. That is the perceptual and behavioural data primary research provides.',
  ],
  researchTopics: [
    {
      name: 'Biomarker testing adoption',
      detail:
        'Whether and when oncologists and specialists order biomarker and genomic tests, the barriers to testing, and the turnaround that makes results actionable.',
    },
    {
      name: 'Companion diagnostic access',
      detail:
        'How companion diagnostics are funded, ordered, and reimbursed, and the link between test availability and targeted-therapy uptake.',
    },
    {
      name: 'Precision oncology readiness',
      detail:
        'Tumour-board adoption of genomic profiling, molecular-testing infrastructure, and the gap between guideline-recommended and real-world testing.',
    },
    {
      name: 'Pharmacogenomics in practice',
      detail:
        'Clinical use of pharmacogenomic testing to guide dosing and drug selection, and the readiness of Gulf health systems to operationalise it.',
    },
    {
      name: 'Genome-programme commercial impact',
      detail:
        'How the Saudi, Emirati, and Qatar genome programmes translate into clinical practice, screening, and commercial opportunity for targeted therapies.',
    },
    {
      name: 'Payer & access modelling',
      detail:
        'Reimbursement pathways for genomic testing and targeted therapies across SFDA, NUPCO, and Gulf insurance structures.',
    },
  ],
  demandDrivers: {
    heading: 'What is driving GCC personalized medicine',
    drivers: [
      {
        title: 'National genome programmes',
        detail:
          'The Saudi, Emirati, and Qatar genome programmes build population-scale genomic infrastructure and awareness.',
      },
      {
        title: 'Precision oncology growth',
        detail:
          'Targeted therapies and immuno-oncology make biomarker testing central to cancer care across Gulf centres.',
      },
      {
        title: 'Consanguinity & rare disease',
        detail:
          'Higher rates of inherited and rare disease in parts of the region strengthen the case for genomic screening and diagnosis.',
      },
      {
        title: 'Vision 2030 & health transformation',
        detail:
          'National strategies prioritise genomics, prevention, and advanced therapies as pillars of health-system modernisation.',
      },
      {
        title: 'Companion diagnostics',
        detail:
          'New targeted therapies arrive paired with companion diagnostics, tying test access to treatment access.',
      },
      {
        title: 'Tertiary investment',
        detail:
          'Investment in molecular labs and specialist centres builds the infrastructure precision medicine requires.',
      },
    ],
  },
  marketStructure: {
    heading: 'How the GCC personalized-medicine market is structured',
    paragraphs: [
      'The Gulf\'s personalized-medicine push is anchored by national genome programmes that are unusual in their scale and government backing. The Saudi Genome Program, the Emirati Genome Programme, and the Qatar Genome Programme are sequencing populations to inform screening, rare-disease diagnosis, and precision care. This top-down investment creates infrastructure and awareness, but commercial value depends on whether that infrastructure connects to day-to-day prescribing.',
      'Precision oncology is the most commercially mature application. Targeted therapies and immuno-oncology have made biomarker testing — EGFR, ALK, HER2, PD-L1, and broader genomic profiling — central to cancer care at Gulf tertiary centres. The decisive questions are behavioural and operational: do oncologists order the test, can molecular labs return results within the clinical window, and do payers reimburse both the diagnostic and the targeted therapy it unlocks? Gaps at any step break the precision-medicine chain.',
      'Access and reimbursement remain the binding constraints. Companion diagnostics and targeted therapies must navigate SFDA approval, NUPCO and Gulf procurement, and insurance reimbursement, often with the diagnostic and the drug funded through different mechanisms. BioNixus maps the full pathway — from testing behaviour to reimbursement — so companies can identify and remove the specific barrier limiting uptake in each market.',
    ],
  },
  countrySignals: [
    {
      country: 'Saudi Arabia',
      signal:
        'The Saudi Genome Program plus Vision 2030 health transformation make KSA the region\'s precision-medicine anchor; precision oncology advancing at KFSH&RC and tertiary centres.',
    },
    {
      country: 'United Arab Emirates',
      signal:
        'The Emirati Genome Programme and advanced private oncology centres drive biomarker testing and companion-diagnostic adoption.',
    },
    {
      country: 'Qatar',
      signal:
        'The Qatar Genome Programme and Sidra Medicine concentrate genomic research and precision-care capability.',
    },
    {
      country: 'Kuwait',
      signal:
        'Growing molecular-testing capacity in oncology with selective precision-medicine adoption.',
    },
    {
      country: 'Oman',
      signal:
        'Emerging genomic and rare-disease focus through national tertiary centres.',
    },
    {
      country: 'Bahrain',
      signal:
        'Selective precision-oncology and molecular-diagnostic capability with regional collaboration.',
    },
  ],
  audiences: [
    {
      audience: 'Oncologists & molecular tumour boards',
      description:
        'The specialists whose testing and prescribing behaviour determines whether precision medicine reaches patients.',
    },
    {
      audience: 'Pathologists & molecular lab directors',
      description:
        'Those running the molecular-testing infrastructure whose capacity and turnaround govern actionability.',
    },
    {
      audience: 'Geneticists & genome-programme stakeholders',
      description:
        'Clinical geneticists and programme leaders connecting population genomics to clinical practice.',
    },
    {
      audience: 'Payers & access decision-makers',
      description:
        'Reimbursement and procurement stakeholders who fund (or gate) companion diagnostics and targeted therapies.',
    },
  ],
  whyBionixus: [
    'Precision-medicine and oncology research expertise, not a generalist panel',
    'Oncologist, pathologist, and molecular-lab panels across the Gulf',
    'Companion-diagnostic and biomarker-access research methodologies',
    'Working knowledge of SFDA, NUPCO, and Gulf reimbursement for diagnostics and targeted therapies',
    'Bilingual Arabic–English fieldwork with clinically literate researchers',
    '15+ years of healthcare research experience across 38 countries',
  ],
  relatedLinks: [
    { to: '/gcc-clinical-trials-market', label: 'GCC Clinical Trials Market' },
    { to: '/gcc-biopharmaceuticals-market', label: 'GCC Biopharmaceuticals Market' },
    { to: '/gcc-pharma-market-report-2026', label: 'GCC Pharmaceutical Market Report 2026' },
    { to: '/healthcare-market-research/therapy/oncology', label: 'Oncology market research' },
    { to: '/healthcare-market-research', label: 'Healthcare market research services' },
    { to: '/healthcare-market-research-in-saudi-arabia', label: 'Healthcare market research in Saudi Arabia' },
  ],
  faqs: [
    {
      question: 'How developed is personalized medicine in the GCC?',
      answer:
        'The Gulf is among the most ambitious emerging regions in personalized medicine, anchored by the Saudi, Emirati, and Qatar genome programmes and growing precision oncology. The infrastructure is advancing quickly; the commercial question is real-world adoption — testing behaviour, lab turnaround, and reimbursement.',
    },
    {
      question: 'What are the Gulf genome programmes?',
      answer:
        'The Saudi Genome Program, the Emirati Genome Programme, and the Qatar Genome Programme are government-backed initiatives sequencing national populations to support screening, rare-disease diagnosis, and precision care — building population-scale genomic infrastructure unusual for its scale.',
    },
    {
      question: 'What limits precision-medicine uptake in the Gulf?',
      answer:
        'The binding constraints are behavioural and operational: whether clinicians order biomarker tests, whether molecular labs return results within the clinical window, and whether payers reimburse both the companion diagnostic and the targeted therapy. BioNixus maps where the chain breaks in each market.',
    },
    {
      question: 'Does BioNixus research companion diagnostics?',
      answer:
        'Yes. We study companion-diagnostic ordering, funding, and reimbursement, and the link between test access and targeted-therapy uptake across Gulf oncology and specialist care.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 5. GCC Biopharmaceuticals Market                                    */
/* ------------------------------------------------------------------ */
const biopharmaceuticals: GccSegmentContent = {
  slug: 'gcc-biopharmaceuticals-market',
  segmentLabel: 'Biopharmaceuticals',
  title: 'GCC Biopharmaceuticals Market — Biologics & Localization Research | BioNixus',
  description:
    'GCC biopharmaceuticals market intelligence — biologics access, biosimilar substitution, local biomanufacturing (Lifera, NUPCO localization), and specialty-therapy uptake across Saudi Arabia, UAE, and the Gulf. BioNixus research.',
  canonical: `${BASE}/gcc-biopharmaceuticals-market`,
  h1: 'GCC Biopharmaceuticals Market: Biologics & Localization Intelligence',
  intro: [
    'Biopharmaceuticals are the fastest-growing, highest-value part of the Gulf pharmaceutical market — and the focus of an aggressive localization agenda. Biologics dominate spend in oncology, immunology, and metabolic disease; biosimilars are reshaping access; and Saudi Arabia and the UAE are investing to manufacture biologics domestically. BioNixus provides the market-access, substitution, and localization-landscape research that biopharma companies need to compete in the region.',
    'The commercial story in GCC biopharmaceuticals is the collision of three trends: rising biologic demand, accelerating biosimilar substitution, and government-driven local manufacturing (anchored in Saudi Arabia by Lifera and NUPCO localization, and in the UAE by free-zone biomanufacturing). Each reshapes pricing, access, and competitive structure — and each requires primary research to navigate, not generic market reports.',
  ],
  researchTopics: [
    {
      name: 'Biologic market access',
      detail:
        'Formulary positioning, reimbursement pathways, and access barriers for specialty biologics across SFDA, NUPCO, and Gulf insurance structures.',
    },
    {
      name: 'Biosimilar substitution',
      detail:
        'Clinician confidence, pharmacist authority, and payer policy governing biosimilar uptake in oncology, immunology, and supportive care.',
    },
    {
      name: 'Localization landscape',
      detail:
        'How domestic biomanufacturing (Lifera and partners in Saudi Arabia; UAE free-zone capacity) and local-content tender rules reshape competitive structure.',
    },
    {
      name: 'Specialty-therapy uptake',
      detail:
        'Adoption drivers for novel biologics in oncology, immunology, rare disease, and metabolic disease across Gulf tertiary centres.',
    },
    {
      name: 'Tender & procurement dynamics',
      detail:
        'How NUPCO, Rafed, and MOH tenders evaluate biologics and biosimilars, including local-content weighting and supply-security requirements.',
    },
    {
      name: 'Pricing & gross-to-net modelling',
      detail:
        'Realised biologic and biosimilar pricing across Gulf procurement, and the gross-to-net inputs commercial teams need for regional forecasts.',
    },
  ],
  demandDrivers: {
    heading: 'What is driving the GCC biopharmaceuticals market',
    drivers: [
      {
        title: 'Biologic-led growth',
        detail:
          'Specialty biologics dominate value growth in oncology, immunology, and metabolic disease across the Gulf.',
      },
      {
        title: 'Biosimilar maturation',
        detail:
          'SFDA and GCC biosimilar approvals expand the addressable pool and pressure originator pricing.',
      },
      {
        title: 'Manufacturing localization',
        detail:
          'Saudi Arabia (Lifera, NUPCO localization) and the UAE invest to produce biologics domestically, reshaping sourcing.',
      },
      {
        title: 'Vision 2030 health transformation',
        detail:
          'National strategies prioritise advanced therapies and biopharma manufacturing as pillars of economic diversification.',
      },
      {
        title: 'Tertiary & specialty expansion',
        detail:
          'New cancer centres and specialist networks lift demand for biologics and complex therapies.',
      },
      {
        title: 'Access & insurance growth',
        detail:
          'Expanding insurance and structured reimbursement broaden access to high-cost biologics.',
      },
    ],
  },
  marketStructure: {
    heading: 'How the GCC biopharmaceuticals market is structured',
    paragraphs: [
      'Biopharmaceuticals concentrate value in a relatively small number of high-cost therapies purchased through structured access pathways. In Saudi Arabia, NUPCO procurement and SFDA approval govern biologic access; in the UAE, DHA/DoH/MOHAP registration and Rafed/emirate tenders apply; other GCC states run MOH-led processes, with the Gulf Health Council coordinating joint procurement. Because biologics are high-value and clinically complex, formulary positioning and reimbursement strategy matter more than retail dynamics.',
      'Localization is reshaping the competitive map. Saudi Arabia\'s Lifera (a sovereign-backed biopharma manufacturer) and NUPCO\'s local-content rules aim to build domestic biologics and biosimilar capacity, and the UAE pursues parallel free-zone biomanufacturing. For biopharma companies, this means manufacturing footprint and local partnerships increasingly affect tender competitiveness and market access — a structural shift BioNixus tracks through localization-landscape research.',
      'Biosimilars are the most dynamic sub-segment. As biosimilars in oncology, immunology, and supportive care secure approvals, substitution depends on clinician confidence, pharmacist authority, and payer policy rather than price alone. Mapping these perceptual and policy levers is essential to forecasting biologic erosion and biosimilar uptake — and is precisely what primary research delivers where desk research cannot.',
    ],
  },
  countrySignals: [
    {
      country: 'Saudi Arabia',
      signal:
        'NUPCO procurement, SFDA approval, and the strongest localization agenda — Lifera and local-content rules reshape biologic and biosimilar sourcing.',
    },
    {
      country: 'United Arab Emirates',
      signal:
        'DHA/DoH/MOHAP registration, Rafed procurement, and free-zone biomanufacturing investment driving biologic access.',
    },
    {
      country: 'Kuwait',
      signal:
        'MOH tenders with growing biologic and biosimilar adoption in oncology and immunology.',
    },
    {
      country: 'Qatar',
      signal:
        'Hamad Medical Corporation demand concentration with high per-capita capacity for specialty biologics.',
    },
    {
      country: 'Oman',
      signal:
        'MOH procurement with expanding access to biologics through tertiary centres.',
    },
    {
      country: 'Bahrain',
      signal:
        'NHRA registration with Salmaniya-centred specialty demand and regional collaboration.',
    },
  ],
  audiences: [
    {
      audience: 'Specialists prescribing biologics',
      description:
        'Oncologists, rheumatologists, gastroenterologists, and other specialists whose confidence drives biologic and biosimilar choice.',
    },
    {
      audience: 'Hospital pharmacy & formulary committees',
      description:
        'The committees that position biologics and set biosimilar substitution policy.',
    },
    {
      audience: 'Payers & procurement agencies',
      description:
        'NUPCO, Rafed, MOH, and insurers who fund and gate high-cost biologics.',
    },
    {
      audience: 'Local manufacturers & partners',
      description:
        'Domestic producers and partners (including Lifera-linked initiatives) whose footprint shapes localization and tender competitiveness.',
    },
  ],
  whyBionixus: [
    'Specialty biologics and market-access research expertise, not a generalist panel',
    'Specialist and hospital-pharmacy panels across Saudi Arabia, the UAE, and the GCC',
    'Biosimilar substitution and localization-landscape methodologies',
    'Working knowledge of SFDA, NUPCO, Rafed, and Gulf reimbursement for biologics',
    'Bilingual Arabic–English fieldwork with clinically validated instruments',
    '15+ years of healthcare research experience across 38 countries',
  ],
  relatedLinks: [
    { to: '/gcc-generic-injectables-market', label: 'GCC Generic Injectables Market' },
    { to: '/gcc-personalized-medicine-market', label: 'GCC Personalized Medicine Market' },
    { to: '/market-reports/gcc-biosimilars-market-report', label: 'GCC Biosimilars Market Report' },
    { to: '/gcc-pharma-market-report-2026', label: 'GCC Pharmaceutical Market Report 2026' },
    { to: '/healthcare-market-research', label: 'Healthcare market research services' },
    { to: '/healthcare-market-research-in-saudi-arabia', label: 'Healthcare market research in Saudi Arabia' },
  ],
  faqs: [
    {
      question: 'How big is the GCC biopharmaceuticals market?',
      answer:
        'Biopharmaceuticals are the fastest-growing, highest-value part of the Gulf pharmaceutical market, led by oncology, immunology, and metabolic biologics. Because value concentrates in high-cost therapies bought through structured tenders and reimbursement, BioNixus sizes the segment from primary access and procurement research rather than a single headline figure.',
    },
    {
      question: 'What is Lifera and why does it matter?',
      answer:
        'Lifera is a Saudi sovereign-backed biopharmaceutical manufacturer established to localise production of biologics and other essential medicines. Together with NUPCO local-content rules, it is reshaping how biologics and biosimilars are sourced and which partners win tenders in Saudi Arabia.',
    },
    {
      question: 'How is biosimilar substitution decided in the Gulf?',
      answer:
        'Substitution depends on clinician confidence, pharmacist authority, and payer policy more than price alone. BioNixus maps these perceptual and policy levers across oncology, immunology, and supportive care to forecast biologic erosion and biosimilar uptake.',
    },
    {
      question: 'Does localization affect biologic market access?',
      answer:
        'Yes. Saudi Arabia and the UAE increasingly reward domestic manufacturing, so footprint and local partnerships affect tender competitiveness and access. BioNixus tracks this localization landscape and its commercial implications.',
    },
  ],
};

export const GCC_SEGMENT_CONTENT: Record<string, GccSegmentContent> = {
  [genericInjectables.slug]: genericInjectables,
  [pharmacy.slug]: pharmacy,
  [clinicalTrials.slug]: clinicalTrials,
  [personalizedMedicine.slug]: personalizedMedicine,
  [biopharmaceuticals.slug]: biopharmaceuticals,
};

export const GCC_SEGMENT_SLUGS = Object.keys(GCC_SEGMENT_CONTENT);
