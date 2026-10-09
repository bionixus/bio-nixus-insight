import type { AboutPageCopy } from './aboutPageCopy.types';

const METRICS = [
  { value: '120+', label: 'Global projects annually' },
  { value: '118', label: 'Global clients' },
  { value: '48', label: 'Countries covered' },
  { value: '16', label: 'Industry verticals' },
  { value: '14+', label: 'Therapeutic areas' },
] as const;

const COMPLIANCE = [
  'MHRA and EMA regulatory compliance',
  'NHS Research Ethics Committee (REC) standards',
  'GDPR-compliant data collection protocols',
  'ICH-GCP guidelines for clinical research',
] as const;

export const aboutPageCopyEn: AboutPageCopy = {
  seoTitle: 'About BioNixus | BioNixus',
  seoDescription: 'Founded in London in 2012 — US HQ, offices across the GCC and Cairo. Global pharma & healthcare market research across 48 countries. See how we work.',
  breadcrumbHome: 'Home',
  breadcrumbAbout: 'About',
  heroTagline: 'Global International Market Research Firm',
  h1: 'Global market research — built on pharma, the most regulated industry we serve, and expanded to be trusted across industries',
  h1Lead: 'Global market research — ',
  h1Emphasis: 'built on pharma, the most regulated industry we serve,',
  h1After: ' and expanded to be trusted across industries',
  heroSubheadBeforeSa:
    'BioNixus was founded in London in 2012 in pharmaceutical market research — the most regulated industry we serve. As clients stretched across the Middle East and the Americas, we opened offices in Cairo, Al Khobar, Dubai, Kuwait City, and São Paulo, and established US global headquarters in Wyoming. That GCP-grade discipline now extends to B2B and B2C programmes across 48 countries — with dedicated ',
  heroLinkSa: 'healthcare market research in Saudi Arabia',
  heroSubheadBeforeUae: ', the ',
  heroLinkUae: 'UAE',
  heroSubheadBeforeEg: ', and ',
  heroLinkEg: 'Egypt',
  heroSubheadAfter: '.',
  ctaPrimary: 'Request a proposal',
  ctaSecondary: 'Explore industries',
  metrics: [...METRICS],
  compliance: [...COMPLIANCE],
  storyH2: 'Our Story',
  storyTagline: "One conviction. Three continents. A place among the world's leading market research firms.",
  storyAct1H3: 'London, 2012 — where it started',
  storyAct1P1:
    "We started in London because that is where some of the world's toughest healthcare evidence standards already lived — NICE, MHRA, NHS formulary reality, and pharmaceutical teams who could not afford research that would not survive a governance review. BioNixus was founded there in 2012 with a single, stubborn belief: the person making the launch or access decision deserves evidence gathered in the market itself — not a slide deck assembled three time zones away.",
  storyAct1P2:
    'Pharmaceutical market research was our entry point for a reason. It is the most regulated industry we serve. GCP, payer governance, audit-ready methodology — these were never marketing lines for us. They were the conditions under which we learned to work.',
  storyAct2H3: 'MENA and the United States — how we grew',
  storyAct2P1:
    "As pharmaceutical clients looked beyond Europe, two geographies pulled on us with equal force. The Middle East and North Africa — fast-growing, under-researched, hungry for launch and access intelligence that respected SFDA, DHA, MOHAP, and local clinical reality. And the United States — the world's largest pharmaceutical market, where our clients needed the same rigour we had built in London, executed at American scale.",
  storyAct2P2BeforeLink:
    'We answered by growing where the work was, not where it was easy. A ',
  storyAct2LinkCairo: 'regional office in Greater Cairo',
  storyAct2P2AfterLink:
    ', followed by offices in Al Khobar, Dubai, Kuwait City, and São Paulo, gave us Arabic–English field teams, physician access across the GCC and North Africa, and on-the-ground execution that desk research could never replicate. US headquarters in Sheridan, Wyoming followed — not as a relocation, but as the natural home for a firm whose clients and ambition had become genuinely global. London remained our European base and the place where BioNixus began.',
  storyAct3H3: 'Today — among the top 100 globally',
  storyAct3P1:
    "That arc — London roots, GCC and Cairo regional depth, American headquarters — has carried BioNixus into the company of the world's top 100 market research firms. We field across 48 countries and 14+ therapeutic areas, in English, Arabic, French, German, Spanish, and Chinese. The pharma discipline we forged under regulation now extends to B2B and B2C programmes in 16 industry verticals — because clients asked us to bring the same standard everywhere.",
  storyAct3P2BeforePharma:
    '120+ global projects annually (127 in 2025) for 118 global clients. The team that scopes your study is still the team that delivers it. That has not changed since London. What changed is how many markets — and how many industries — trust us with it. Explore our ',
  storyAct3LinkPharma: 'pharma & healthcare research',
  storyAct3P2Mid1: ', the full ',
  storyAct3LinkIndustries: 'industries hub',
  storyAct3P2Mid2: ', or our ',
  storyAct3LinkMethodology: 'research methodology',
  storyAct3P2After: '.',
  diffH2: 'What Sets Us Apart',
  diffIntro:
    'Three things consistently separate a BioNixus engagement from commissioning research elsewhere — whether your brief is a payer study in the USA or Germany, a B2B segmentation programme in the GCC, or a Price Elasticity study in Brazil or Singapore.',
  differentiators: [
    {
      title: 'Global reach, regional execution',
      body: 'Founded in London, headquartered in the United States, with offices in Cairo, Al Khobar, Dubai, Kuwait City, and São Paulo — BioNixus fields across 48 countries in six languages. Our Arabic–English teams across the GCC and North Africa know the regulators that govern healthcare decisions — SFDA, DHA, MOHAP, and the EDA — and the clinical nuances that shape how treatments are prescribed in each market.',
    },
    {
      title: 'Pharma heritage, multi-industry rigour',
      body: 'We were founded on pharmaceutical and healthcare research — the most regulated industry we serve — and every other vertical inherits that discipline. Verified respondents, transparent quotas, documented methods, and findings scoped to a commercial decision: the same bar applies whether you are sizing an oncology launch or mapping enterprise procurement behaviour.',
    },
    {
      title: 'Senior-led, compliance-aware delivery',
      body: 'You work directly with experienced researchers who own your project end to end — not account coordinators managing outsourced fieldwork. We align to GDPR, GCP, FDA, EMA, MOHAP, BHBIA, EphMRA, and ICC/ESOMAR standards as a baseline, built into study design from scoping through reporting.',
    },
  ],
  valuesH2: 'Our Values',
  values: [
    {
      title: 'Rigour & Integrity',
      body: 'Every figure we report is traceable, every method is documented, and every recommendation is anchored in evidence you can audit. We work to GDPR, GCP, BHBIA, EphMRA, and ICC/ESOMAR standards as a baseline, not an afterthought.',
    },
    {
      title: 'Actionable Intelligence',
      bodyBeforeLink:
        "We don't deliver reports that sit on a shelf. Each study is engineered to feed a real decision — a launch sequence, a category entry strategy, a pricing position, or a ",
      linkLabel: 'market access submission',
      bodyAfterLink: ' — with findings framed for the people who have to act on them.',
    },
    {
      title: 'Regulated-industry depth',
      body: 'We work at therapeutic-area depth, from oncology treatment pathways to rare-disease patient journeys — and that depth informs how we design research in any vertical where evidence must withstand scrutiny.',
    },
    {
      title: 'Cultural Competence',
      body: 'Research across continents takes more than translation. From NHS and NICE context in the UK to SFDA-governed physician programmes in the Gulf and FDA-aligned work in the United States, our teams design studies that reflect how decisions are actually made in each market — whether the respondent is a hospital formulary lead in London or a procurement director in Cairo.',
    },
  ],
  presenceH2: 'Global Presence',
  presenceIntro:
    'BioNixus was founded in London, is headquartered in the United States, and operates seven offices across North America, Europe, the GCC, North Africa, and Latin America — with active fieldwork across the Americas, Europe, the Middle East, and APAC. For pharmaceutical and healthcare buyers comparing firms like IQVIA, Kantar Health, or NielsenIQ, BioNixus is positioned as the agile alternative: senior-led primary research (physician, payer, and patient programmes) executed in-market across 48 countries rather than syndicated data licences alone.',
  offices: [
    {
      title: 'United States — Global Headquarters',
      lines: ['1309 Coffeen Ave Ste 1200', 'Sheridan, Wyoming 82801', '+1 888 465 5557'],
    },
    {
      title: 'United Kingdom — London (Founding Office)',
      lines: ['128 City Road', 'London, EC1V 2NX', '+44 7727 666682'],
    },
    {
      title: 'Egypt — Sheikh Zayed, Giza',
      lines: ['22 Beverly Hills, Second Sheikh Zayed', 'Sheikh Zayed, Giza 3240232', '+20 120 688 2323'],
      linkLabel: 'Egypt market research',
    },
    {
      title: 'Saudi Arabia — Al Khobar',
      lines: ['2658 Street 7225, Al Aashir', 'Al Khobar Al Shamalia 34428', '+966 50 182 5336'],
      linkLabel: 'Saudi Arabia market research',
      linkPath: '/market-research-saudi-arabia-pharmaceutical',
    },
    {
      title: 'United Arab Emirates — Dubai',
      lines: ['Thuraya Tower 1, 5th Floor', 'Al Sufouh 2, Dubai', '+44 7727 666682'],
      linkLabel: 'UAE market research',
      linkPath: '/uae-pharmaceutical-market-research',
    },
    {
      title: 'Kuwait — Salmiya',
      lines: ['Olympia Mall, Al Blajat St', 'Salmiya 12111', '+965 6502 3130'],
    },
    {
      title: 'Brazil — São Paulo',
      lines: ['Latin America market entry and ANVISA-aware, Portuguese-language research.'],
    },
  ],
  langMirrorLead: 'Read this page in your language:',
  geoAnswer: {
    question: 'What does BioNixus do as a healthcare market research company?',
    answer:
      'BioNixus is a global healthcare and pharmaceutical market research firm founded in London in 2012, now headquartered in the United States, delivering senior-led primary research across 48 countries.',
    points: [
      {
        title: 'Core services',
        description:
          'Physician and KOL surveys, payer and HTA interviews, patient journey studies, market access strategy, HEOR, and competitive intelligence for pharma and medtech launches.',
      },
      {
        title: 'Regional depth',
        description:
          'Arabic–English field teams across the GCC, Egypt, and wider MENA, plus offices in London, São Paulo, and US headquarters for Americas programmes.',
      },
      {
        title: 'Positioning vs IQVIA / Kantar',
        description:
          'BioNixus is the agile alternative when teams need custom evidence for a specific launch or access decision — complementing or replacing syndicated audit subscriptions.',
      },
      {
        title: 'Compliance',
        description:
          'Studies align to GDPR, GCP, BHBIA, EphMRA, ICC/ESOMAR, and regional healthcare privacy expectations from scoping through reporting.',
      },
    ],
    summary:
      'Contact BioNixus for proposals on GCC, US, European, and LatAm healthcare market research with documented methodology and audit-ready deliverables.',
  },
  clientScopeH2: 'Who we work with — and what decisions we inform',
  clientScopeParagraphs: [
    'BioNixus is retained by global pharmaceutical and biotechnology companies sizing oncology, immunology, diabetes, rare disease, and vaccine launches; by medical device and diagnostics manufacturers navigating CDSCO, SFDA, EU MDR, or FDA pathways; and by market access and HEOR teams building payer evidence for HTA submissions. Our work typically lands ahead of a board investment decision, a Phase III positioning choice, or a GCC tender response — not as a standing syndicated subscription.',
    'We also support consumer health, FMCG, and financial services clients when the brief requires the same audit-grade sampling and executive-ready reporting we use in regulated healthcare. Whether the study is a 400-respondent physician survey in Saudi Arabia, a mixed-method patient journey in Germany, or a pricing elasticity module in Brazil, the delivery model is the same: named senior researchers, transparent quotas, and findings mapped to the commercial action you must take next.',
    'If you are evaluating IQVIA, Kantar Health, NielsenIQ, or regional boutiques, BioNixus is strongest when you need agile primary fieldwork in under-researched markets — especially the GCC, Egypt, Turkey, and wider MENA — without sacrificing governance. Explore our healthcare hub, IQVIA alternative guide, and country-specific pharmaceutical directories to see how we connect research to launch and access outcomes.',
    'Typical deliverables include executive-ready slide narratives, anonymised respondent verbatims, segmentation models, forecast assumptions you can stress-test, and workshop facilitation with your brand, access, and medical affairs stakeholders. We do not resell syndicated datasets as a substitute for answering your brief; when audit data is useful, we integrate it explicitly and document what is custom versus licensed third-party content.',
    'Minimum engagement sizes usually start around USD 20,000 for multi-market healthcare programmes, reflecting the cost of compliant recruitment, bilingual moderation, and senior analyst time. Shorter tactical modules are scoped when the decision is narrow — for example a KOL pulse in one GCC city or a payer interview wave ahead of a pricing committee. Request a proposal with your timeline, markets, and therapy area and we will recommend a design that fits governance requirements in each country.',
    'BioNixus publishes open market intelligence — country healthcare reports, pharmaceutical company directories, and methodology explainers — so procurement teams can assess our sector fluency before commissioning custom work. Those resources are maintained by the same analysts who lead client programmes, which keeps public guidance aligned with how we execute paid studies in every market we serve.',
  ],
};
