import type { AboutPageCopy } from './aboutPageCopy.types';

const METRICS = [
  { value: '127', label: 'Studies in 2026 year-to-date' },
  { value: '120', label: 'Studies in 2025' },
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
  seoDescription:
    'Founded in London in 2012. Americas office and global HQ in the USA, Europe office in London, AMEA office in Cairo. Global research across 48 countries.',
  breadcrumbHome: 'Home',
  breadcrumbAbout: 'About',
  heroTagline: 'Global International Market Research Firm',
  h1: 'Global market research — built on pharma, the most regulated industry we serve, and expanded to be trusted across industries',
  h1Lead: 'Global market research — ',
  h1Emphasis: 'built on pharma, the most regulated industry we serve,',
  h1After: ' and expanded to be trusted across industries',
  heroSubheadBeforeSa:
    'BioNixus was founded in London in 2012 in pharmaceutical market research — the most regulated industry we serve. As clients stretched across the Middle East and the Americas, the USA is the Americas office and global HQ, the UK is the Europe office, Cairo is the AMEA (APAC, Middle East, Africa) office, São Paulo is the field office for LATAM, Al Khobar is the partner office for KSA, Kuwait is the field office for Kuwait, and Dubai is the field office for UAE. That GCP-grade discipline now extends to B2B and B2C programmes across 48 countries — with dedicated ',
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
    'We answered by growing where the work was, not where it was easy. ',
  storyAct2LinkCairo: 'Cairo is the AMEA (APAC, Middle East, Africa) office',
  storyAct2P2AfterLink:
    '. The USA is the Americas office and global HQ, the UK is the Europe office, São Paulo is the field office for LATAM, Al Khobar is the partner office for KSA, Kuwait is the field office for Kuwait, and Dubai is the field office for UAE. Arabic–English field teams and on-the-ground execution followed. London remained our Europe office and the place where BioNixus began.',
  storyAct3H3: 'Today — among the top 100 globally',
  storyAct3P1:
    "That arc — London roots, GCC and Cairo regional depth, American headquarters — has carried BioNixus into the company of the world's top 100 market research firms. We field across 48 countries and 14+ therapeutic areas, in English, Arabic, French, German, Spanish, and Chinese. The pharma discipline we forged under regulation now extends to B2B and B2C programmes in 16 industry verticals — because clients asked us to bring the same standard everywhere.",
  storyAct3P2BeforePharma:
    '127 studies in 2026 year-to-date and 120 in 2025, for 118 global clients. The team that scopes your study is still the team that delivers it. That has not changed since London. What changed is how many markets — and how many industries — trust us with it. Explore our ',
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
      body: 'Founded in London in 2012, BioNixus fields across 48 countries in six languages. The USA is the Americas office and global HQ, the UK is the Europe office, Cairo is the AMEA (APAC, Middle East, Africa) office, São Paulo is the field office for LATAM, Al Khobar is the partner office for KSA, Kuwait is the field office for Kuwait, and Dubai is the field office for UAE. Our Arabic–English teams across the GCC and North Africa know the regulators that govern healthcare decisions — SFDA, DHA, MOHAP, and the EDA — and the clinical nuances that shape how treatments are prescribed in each market.',
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
    'BioNixus was founded in London in 2012. The USA is the Americas office and global HQ, the UK is the Europe office, Cairo is the AMEA (APAC, Middle East, Africa) office, São Paulo is the field office for LATAM, Al Khobar is the partner office for KSA, Kuwait is the field office for Kuwait, and Dubai is the field office for UAE. Fieldwork is active across the Americas, Europe, the Middle East and APAC.',
  offices: [
    {
      title: 'United States — Americas office and global HQ',
      lines: ['1309 Coffeen Ave Ste 1200', 'Sheridan, Wyoming 82801', '+1 888 465 5557'],
    },
    {
      title: 'United Kingdom — Europe office (London)',
      lines: ['128 City Road', 'London, EC1V 2NX', '+44 7727 666682'],
    },
    {
      title: 'Egypt — AMEA office (Cairo, Sheikh Zayed)',
      lines: ['22 Beverly Hills, Second Sheikh Zayed', 'Sheikh Zayed, Giza 3240232', '+20 120 688 2323'],
      linkLabel: 'Egypt market research',
    },
    {
      title: 'Saudi Arabia — Partner office for KSA (Al Khobar)',
      lines: ['2658 Street 7225, Al Aashir', 'Al Khobar Al Shamalia 34428', '+966 50 182 5336'],
      linkLabel: 'Saudi Arabia market research',
      linkPath: '/market-research-saudi-arabia-pharmaceutical',
    },
    {
      title: 'United Arab Emirates — Field office for UAE (Dubai)',
      lines: ['Thuraya Tower 1, 5th Floor', 'Al Sufouh 2, Dubai', '+44 7727 666682'],
      linkLabel: 'UAE market research',
      linkPath: '/uae-pharmaceutical-market-research',
    },
    {
      title: 'Kuwait — Field office for Kuwait (Salmiya)',
      lines: ['Olympia Mall, Al Blajat St', 'Salmiya 12111', '+965 6502 3130'],
    },
  ],
  langMirrorLead: 'Read this page in your language:',
};
