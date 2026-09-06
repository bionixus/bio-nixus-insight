import type { QUALIFICATION_FORM_NEEDS } from '@/data/qualificationFormOptions';

export type PharmaStudyTypeConfig = {
  path: string;
  title: string;
  description: string;
  h1: string;
  kicker: string;
  definition: string;
  whenSyndicated: string;
  whenBrief: string;
  ctaId: string;
  ctaHeadline: string;
  ctaButton: string;
  defaultNeed: (typeof QUALIFICATION_FORM_NEEDS)[number];
  countryH2: { country: string; heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  related: { to: string; label: string; desc: string }[];
};

const SHARED_RELATED = [
  { to: '/healthcare-market-research', label: 'Healthcare market research companies', desc: 'Who to brief for primary vs syndicated work.' },
  { to: '/pharmaceutical-market-research-provider', label: 'Pharmaceutical market research company', desc: 'Custom primary provider vs IQVIA data platform.' },
  { to: '/iqvia-alternative', label: 'IQVIA alternative', desc: 'Keep the audit. Brief fieldwork when the cut stops at national.' },
  { to: '/account-level-market-research', label: 'Account-level data', desc: 'Named hospital, retailer, or distributor — not a country total.' },
  { to: '/insights/top-healthcare-market-research-companies-uae-2026', label: 'Healthcare MR companies UAE', desc: 'Custom primary firm for Dubai and Abu Dhabi affiliates.' },
  { to: '/insights/top-healthcare-market-research-companies-saudi-arabia-2026', label: 'Healthcare MR companies KSA', desc: 'SFDA-aware primary research vs syndicated audits.' },
  { to: '/insights/top-market-research-companies-egypt-2026', label: 'Market research companies Egypt', desc: 'Cairo, Alexandria, and Upper Egypt fieldwork.' },
  { to: '/pricing', label: 'Pricing bands', desc: 'Project- and country-based 2026 ranges.' },
] as const;

export const HCP_ATU_STUDY: PharmaStudyTypeConfig = {
  path: '/hcp-atu-study',
  title: 'HCP ATU Study | Pharma Brand Tracking | BioNixus',
  description:
    'HCP ATU and physician ATU studies for pharmaceutical brand tracking and launch tracking. Primary fieldwork in 48 countries. Proposal in 48 hours.',
  h1: 'HCP ATU study — pharmaceutical brand tracking and launch tracking',
  kicker: 'Physician ATU · Brand tracker · Launch tracker',
  definition:
    'An HCP ATU (awareness, trial, usage) study is a quantitative physician tracker that measures how healthcare professionals recognise, try, and prescribe a brand over time. BioNixus fields HCP ATU, physician ATU, pharmaceutical brand tracking, and launch tracking as one primary programme — not a syndicated dashboard bolt-on. A proposal is ready within 48 hours of a brief.',
  whenSyndicated:
    'Keep IQVIA when you need national prescription volume, share of market, or a real-world evidence feed. Those products report what was dispensed. They do not explain why a specialist has not trialled your brand, or whether the message landed.',
  whenBrief:
    'Brief an HCP ATU when you are launching, defending share, or the affiliate cannot see trial and usage among named specialties in a named country. That is the study type a Head of Insights puts on the RFP.',
  ctaId: 'hcp_atu_study',
  ctaHeadline: 'Request an HCP ATU proposal',
  ctaButton: 'Request an HCP ATU proposal',
  defaultNeed: 'HCP ATU / brand tracking',
  countryH2: [
    {
      country: 'Egypt',
      heading: 'HCP ATU studies in Egypt',
      body: 'Physician ATU and brand tracking across Cairo, Alexandria, and Upper Egypt — Arabic-English instruments, EDA-aware design. Not a second Egypt ranking URL.',
    },
    {
      country: 'United Arab Emirates',
      heading: 'HCP ATU studies in the UAE',
      body: 'Launch tracking and physician ATU across Dubai, Abu Dhabi, and the northern emirates, designed for MOHAP, DHA, and DOH — not a Dubai convenience panel.',
    },
    {
      country: 'Saudi Arabia',
      heading: 'HCP ATU studies in Saudi Arabia',
      body: 'Brand tracking and HCP ATU in Riyadh, Jeddah, and the Eastern Province, written around SFDA and NUPCO context. Country-priced; keep IQVIA for the national audit.',
    },
  ],
  faqs: [
    {
      question: 'What is an HCP ATU study?',
      answer:
        'HCP ATU stands for awareness, trial, and usage among healthcare professionals. It is the default quantitative brand tracker in pharma. BioNixus fields it as custom primary research — the same programme also covers physician ATU, pharmaceutical brand tracking, and launch tracking.',
    },
    {
      question: 'Is an HCP ATU the same as an IQVIA brand audit?',
      answer:
        'No. IQVIA audits report dispensed volume. An HCP ATU asks physicians whether they are aware of, have tried, and currently use the brand — and why. Most affiliates run both.',
    },
    {
      question: 'Can you start tracking before launch?',
      answer:
        'Yes. Pre-launch waves establish baseline awareness and message cut-through. Post-launch waves track trial and usage. The same instrument should run across waves so the affiliate can compare.',
    },
    {
      question: 'How fast is a proposal?',
      answer:
        'Within 48 hours of a brief. Typical 2026 planning bands are on the pricing page. Scope moves with specialty, sample, and number of countries.',
    },
  ],
  related: [
    ...SHARED_RELATED,
    { to: '/brand-tracking-pharma-gcc', label: 'Pharma brand tracking GCC', desc: 'Related GCC brand-tracking programmes.' },
  ],
};

export const PHARMACY_MYSTERY_SHOPPER: PharmaStudyTypeConfig = {
  path: '/pharmacy-mystery-shopper',
  title: 'Pharmacy Mystery Shopper | Availability Studies | BioNixus',
  description:
    'Pharmacy mystery shopping and pharmacy availability studies — stock, facing, price, and substitution in named accounts. Fielded in 48 countries. 48-hour proposal.',
  h1: 'Pharmacy mystery shopper — availability, facing, and price in trade',
  kicker: 'Mystery shopping pharmacies · Availability study · Detailing check',
  definition:
    'A pharmacy mystery shopper study sends trained auditors into named pharmacies to record whether a SKU is in stock, how it is faced, the shelf price, and what staff recommend or substitute. BioNixus fields pharmacy mystery shopping and pharmacy availability studies as primary trade work — the cut syndicated audits miss at account level. Proposal within 48 hours of a brief.',
  whenSyndicated:
    'IQVIA and NielsenIQ tell you listed distribution at a national or modern-trade grain. They do not walk the store. If the dashboard says listed and the chain is out of stock, you need a mystery shop.',
  whenBrief:
    'Brief a pharmacy mystery shopper when commercial excellence needs availability, facing, price, or substitution in named accounts — especially traditional trade and subregions the panel does not cover.',
  ctaId: 'pharmacy_mystery_shopper',
  ctaHeadline: 'Request a pharmacy mystery-shop proposal',
  ctaButton: 'Request a pharmacy mystery-shop proposal',
  defaultNeed: 'Pharmacy mystery shop / availability',
  countryH2: [
    {
      country: 'Egypt',
      heading: 'Mystery shopping pharmacies in Egypt',
      body: 'Availability and substitution audits across Cairo, Alexandria, and Upper Egypt pharmacy chains and independent trade — SKU-level, not a national listing number.',
    },
    {
      country: 'United Arab Emirates',
      heading: 'Pharmacy mystery shopping in the UAE',
      body: 'Dubai, Abu Dhabi, and northern-emirate pharmacies: stock, facing, price, and staff recommendation for named SKUs. Complements, does not replace, the IQVIA listing.',
    },
    {
      country: 'Saudi Arabia',
      heading: 'Pharmacy mystery shopping in Saudi Arabia',
      body: 'Nahdi, Al-Dawaa, and independent pharmacies in Riyadh, Jeddah, and the Eastern Province. Account-level availability when the syndicated cut stops at Kingdom total.',
    },
  ],
  faqs: [
    {
      question: 'What does a pharmacy mystery shopper record?',
      answer:
        'Typically: on-shelf availability, facings, price, promo compliance, and whether staff recommend or substitute the SKU. The brief names the accounts, cities, and SKUs.',
    },
    {
      question: 'Is this the same as the GCC retail mystery-shop brief?',
      answer:
        'No. The retail brief covers grocery and traditional trade. This page is pharmacy and pharmaceutical availability. Use the retail template when the channel is FMCG.',
    },
    {
      question: 'Can mystery shopping run with an HCP ATU?',
      answer:
        'Yes. Affiliates often pair physician usage with in-pharmacy availability so the QBR slide is not “the doctor would prescribe it if it were there.”',
    },
    {
      question: 'How is it priced?',
      answer:
        'By country, number of outlets, and SKU list. See pricing bands. A scoped proposal is ready within 48 hours.',
    },
  ],
  related: [
    ...SHARED_RELATED,
    { to: '/templates/mystery-shop-retail-brief', label: 'Retail mystery-shop brief', desc: 'Grocery and traditional trade — not pharmacy.' },
  ],
};

export const PHARMA_COMPETITOR_INTEL: PharmaStudyTypeConfig = {
  path: '/pharmaceutical-competitor-intelligence',
  title: 'Pharmaceutical Competitor Intelligence | Brand vs Competitors | BioNixus',
  description:
    'Pharmaceutical competitor intelligence and brand-versus-competitor studies at account and SKU level in a named country. Primary fieldwork. 48-hour proposal.',
  h1: 'Pharmaceutical competitor intelligence — brand vs competitors in-market',
  kicker: 'Account-level · SKU-level · Traditional trade',
  definition:
    'Pharmaceutical competitor intelligence is primary evidence of how a named brand stacks up against named competitors in a named country — at account level and SKU level, including traditional trade the syndicated feed does not cut. BioNixus fields that study so a local affiliate can fill the competitive slide IQVIA cannot populate. Proposal within 48 hours of a brief.',
  whenSyndicated:
    'Keep IQVIA for national share of market. Keep Kantar when the question is brand equity on a global tracker. Those products are not account-level competitor intelligence.',
  whenBrief:
    'Brief this study when the Head of Marketing and Commercial Director need brand versus competitors in specific hospitals, pharmacies, or distributors — or when a launch, a competitor entry, or a lost QBR created the gap.',
  ctaId: 'pharma_competitor_intelligence',
  ctaHeadline: 'Request a competitor study',
  ctaButton: 'Request a competitor study',
  defaultNeed: 'Brand and competitor data (account- or SKU-level)',
  countryH2: [
    {
      country: 'Egypt',
      heading: 'Pharmaceutical competitor intelligence in Egypt',
      body: 'Brand versus competitors across Cairo, Alexandria, and Upper Egypt accounts — EDA context, bilingual fieldwork. The Egypt listicle is the vendor shortlist; this page is the study.',
    },
    {
      country: 'United Arab Emirates',
      heading: 'Competitor intelligence in the UAE',
      body: 'Account- and SKU-level brand versus competitor work across emirates. Keep IQVIA for the audit; brief BioNixus when the affiliate needs named accounts.',
    },
    {
      country: 'Saudi Arabia',
      heading: 'Competitor intelligence in Saudi Arabia',
      body: 'How this brand stacks up in named KSA accounts — hospitals, chains, traditional trade — with SFDA and NUPCO context. GCC hospital and payer depth is a BioNixus proof point.',
    },
  ],
  faqs: [
    {
      question: 'What is pharmaceutical competitor intelligence at account level?',
      answer:
        'It is brand-versus-competitor evidence cut by named customer account and SKU in a named country — not a national average. That is the language affiliates use in the brief.',
    },
    {
      question: 'Do we still need IQVIA?',
      answer:
        'Usually yes. IQVIA sizes the category. This study explains the accounts and SKUs the feed cannot cut. BioNixus is the complement, not a replacement.',
    },
    {
      question: 'What methods do you use?',
      answer:
        'HCP interviews and surveys, pharmacy and hospital pulls, mystery shopping where availability is the question, and desk synthesis only as support — never as the account-level source.',
    },
    {
      question: 'Can KOL mapping or message testing sit on the same brief?',
      answer:
        'Yes as modules on this study, until those queries earn their own URLs. Say so in the brief; do not expect a separate ranking page.',
    },
  ],
  related: [...SHARED_RELATED],
};

export const PHARMA_STUDY_TYPE_PAGES = [HCP_ATU_STUDY, PHARMACY_MYSTERY_SHOPPER, PHARMA_COMPETITOR_INTEL] as const;
