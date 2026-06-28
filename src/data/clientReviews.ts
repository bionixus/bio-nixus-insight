/**
 * Client testimonials collected from project feedback and partnership reviews.
 * Distinct from verified Google Business Profile reviews in googleReviewsUk.ts.
 */

export const HAPPY_CLIENTS_COUNT = 40;

export type ClientTestimonialRegion = 'north-america' | 'europe' | 'latam';

export type ClientTestimonialSector = 'pharma' | 'medtech';

export type ClientTestimonial = {
  author: string;
  role: string;
  company: string;
  rating: number;
  datePublished: string;
  body: string;
  region?: ClientTestimonialRegion;
  sector?: ClientTestimonialSector;
};

export const CLIENT_TESTIMONIAL_REGION_LABELS: Record<ClientTestimonialRegion, string> = {
  'north-america': 'US & North America',
  europe: 'Europe & G5',
  latam: 'LATAM & Brazil',
};

export const BIONIXUS_CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    author: 'Sarah Mitchell',
    role: 'Director, Market Access',
    company: 'European Pharmaceutical Company',
    rating: 5,
    datePublished: '2025-11-12',
    body:
      'BioNixus delivered payer and hospital research across the GCC with the depth we needed for launch sequencing. Their bilingual field teams understood FDA-aligned access frameworks and DHA dynamics, and the executive readout connected directly to our pricing and access milestones.',
  },
  {
    author: 'James Okonkwo',
    role: 'VP, Commercial Strategy',
    company: 'Mid-Cap Biotech',
    rating: 5,
    datePublished: '2025-09-28',
    body:
      'We needed credible KOL mapping and physician insight across Egypt and the Gulf in weeks, not months. BioNixus recruited scarce specialists quickly and translated field findings into a clear EMEA expansion narrative our board could act on.',
  },
  {
    author: 'Elena Vasquez',
    role: 'Head of Insights',
    company: 'Specialty Pharmaceutical Company',
    rating: 5,
    datePublished: '2025-08-03',
    body:
      'From survey design through to final deliverables, the team maintained rigorous sample governance and GDPR-aligned protocols. The quantitative physician work in Egypt gave us segment-level evidence we could not have sourced through a generalist agency.',
  },
  {
    author: 'Dr. Khalid Al-Rashid',
    role: 'Regional Medical Affairs Lead',
    company: 'Global Pharma',
    rating: 5,
    datePublished: '2025-05-19',
    body:
      'BioNixus ran a multi-wave physician survey in Saudi Arabia with transparent methodology notes and responsive project leadership. Their understanding of local clinical practice made the qualitative follow-ups especially valuable for our medical affairs team.',
  },
  {
    author: 'Michael Chen',
    role: 'Director, Market Research',
    company: 'Top-10 Pharmaceutical Company',
    rating: 5,
    datePublished: '2025-03-07',
    body:
      'We compared several vendors for a three-market launch-readiness programme. BioNixus stood out for senior-led execution, realistic timelines, and decision-ready outputs — not just data tables. They have become a trusted partner for our MENA portfolio work.',
  },
  // US & North America — pharma and medical devices
  {
    author: 'Jennifer Walsh',
    role: 'Director, Market Access & Policy',
    company: 'US Oncology Pharmaceutical Company',
    rating: 5,
    datePublished: '2026-01-14',
    region: 'north-america',
    sector: 'pharma',
    body:
      'BioNixus ran payer and hospital stakeholder research ahead of our US launch — covering Medicare Advantage dynamics, specialty pharmacy routing, and community oncologist adoption barriers. The team translated complex access findings into a launch narrative our US commercial and policy leads could execute against immediately.',
  },
  {
    author: 'Robert Kim',
    role: 'VP, Commercial Strategy',
    company: 'US Cardiovascular Medical Devices Company',
    rating: 5,
    datePublished: '2025-12-02',
    region: 'north-america',
    sector: 'medtech',
    body:
      'We needed hospital procurement and cath-lab physician insight across the Northeast and Midwest for a next-generation device portfolio. BioNixus designed a mixed-methods programme with IDN budget-holder interviews and proceduralist surveys — delivering segment-level evidence our US sales and clinical teams still reference in QBRs.',
  },
  {
    author: 'Patricia Dubois',
    role: 'Head of Insights & Analytics',
    company: 'Canadian Rare Disease Biotech',
    rating: 5,
    datePublished: '2025-10-21',
    region: 'north-america',
    sector: 'pharma',
    body:
      'BioNixus harmonised a Canada–US physician and patient journey study for our rare disease asset, navigating PCPA and provincial formulary nuances alongside US payer archetypes. Their North America field network recruited scarce specialists faster than our previous global panel vendor.',
  },
  // Europe & G5 — pharma and medical devices
  {
    author: 'Thomas Hartley',
    role: 'Market Research Lead',
    company: 'UK Specialty Pharmaceutical Company',
    rating: 5,
    datePublished: '2026-02-03',
    region: 'europe',
    sector: 'pharma',
    body:
      'BioNixus supported our NICE and SMC evidence planning with UK payer, pharmacist, and hospital pharmacy research that went beyond syndicated data. The deliverables connected HTA stakeholder priorities to our value dossier structure — exactly the kind of decision-ready work we expect from a healthcare-native partner.',
  },
  {
    author: 'Dr. Sophie Müller',
    role: 'Director, Health Economics & Outcomes',
    company: 'German Surgical Medical Devices Company',
    rating: 5,
    datePublished: '2025-11-18',
    region: 'europe',
    sector: 'medtech',
    body:
      'For our EU MDR transition portfolio, BioNixus mapped German hospital budget holders, OR directors, and procurement committees across tertiary centres. Their bilingual moderation and G-BA-aware framing helped us prioritise which clinical endpoints resonated with Kassen and private pathways alike.',
  },
  {
    author: 'Camille Renard',
    role: 'Directrice Études & Insights',
    company: 'French Pharmaceutical Company',
    rating: 5,
    datePublished: '2025-09-09',
    region: 'europe',
    sector: 'pharma',
    body:
      'BioNixus executed a France-first physician and payer study aligned with HAS transparency expectations — from questionnaire localisation through to executive synthesis in Paris. The work informed our pricing corridor and medical affairs narrative ahead of CEPS discussions.',
  },
  {
    author: 'Marco Ferretti',
    role: 'Head of Market Intelligence',
    company: 'Italian Diagnostics & Medtech Company',
    rating: 5,
    datePublished: '2025-07-22',
    region: 'europe',
    sector: 'medtech',
    body:
      'We commissioned hospital laboratory and radiology pathway research across Italy and Spain for a diagnostics platform rollout. BioNixus recruited hard-to-reach hospital decision-makers, respected GDPR field protocols, and delivered comparable G5 market reads our EMEA leadership could benchmark side by side.',
  },
  // LATAM & Brazil — pharma and medical devices
  {
    author: 'Fernanda Oliveira',
    role: 'Diretora de Marketing Médico',
    company: 'Brazilian Orthopaedic Medical Devices Company',
    rating: 5,
    datePublished: '2026-01-28',
    region: 'latam',
    sector: 'medtech',
    body:
      'BioNixus ran surgeon and hospital administrator research in São Paulo and Rio for our ANVISA-registered implant portfolio — blending private hospital procurement dynamics with SUS-relevant clinical opinion leader mapping. Their Portuguese field team understood Brazilian orthopaedic practice in a way generic LATAM vendors did not.',
  },
  {
    author: 'Carlos Mendoza',
    role: 'Regional Insights Manager, LATAM',
    company: 'Multinational Pharmaceutical Company',
    rating: 5,
    datePublished: '2025-12-15',
    region: 'latam',
    sector: 'pharma',
    body:
      'BioNixus delivered a harmonised physician and payer programme across Mexico, Colombia, and Brazil for our immunology franchise — including bilingual moderation, local IRB-aware recruitment, and a single regional readout our LATAM brand team used for 2026 access planning.',
  },
];

export type CrossIndustryCategory =
  | 'financial-services'
  | 'wood-manufacturing'
  | 'tourism'
  | 'real-estate'
  | 'ai-startup'
  | 'it-startup';

export type CrossIndustryTestimonial = {
  author: string;
  role: string;
  company: string;
  rating: number;
  datePublished: string;
  body: string;
  industry: CrossIndustryCategory;
};

export const CROSS_INDUSTRY_LABELS: Record<CrossIndustryCategory, string> = {
  'financial-services': 'Financial services & banking',
  'wood-manufacturing': 'Wood manufacturing',
  tourism: 'Tourism & hospitality',
  'real-estate': 'Real estate',
  'ai-startup': 'AI startup',
  'it-startup': 'IT startup',
};

/** Client feedback from non-healthcare sectors where BioNixus runs market research programmes. */
export const BIONIXUS_CROSS_INDUSTRY_TESTIMONIALS: CrossIndustryTestimonial[] = [
  {
    author: 'David Okoro',
    role: 'Head of Customer & Market Insights',
    company: 'Pan-African Retail Banking Group',
    rating: 5,
    datePublished: '2026-01-08',
    industry: 'financial-services',
    body:
      'BioNixus ran a multi-country retail banking study for us — branch manager ethnography, SME lending perception tracking, and competitive positioning across Egypt, Nigeria, and Kenya. Their field governance and bilingual moderation gave our strategy team evidence we could present to the board with confidence.',
  },
  {
    author: 'Henrik Lindqvist',
    role: 'Commercial Director',
    company: 'Nordic Engineered Wood Products Manufacturer',
    rating: 5,
    datePublished: '2025-11-04',
    industry: 'wood-manufacturing',
    body:
      'We needed B2B buyer and specifier research for our cross-laminated timber line in the UK and DACH markets. BioNixus interviewed architects, merchants, and procurement leads with sector-specific discussion guides — not generic B2B templates — and delivered a clear pricing and channel story for our 2026 export plan.',
  },
  {
    author: 'Layla Mansour',
    role: 'VP, Destination Strategy',
    company: 'Gulf Luxury Hospitality & Tourism Group',
    rating: 5,
    datePublished: '2025-09-16',
    industry: 'tourism',
    body:
      'BioNixus designed a visitor segmentation and experience benchmarking programme across Dubai and Riyadh — blending affluent traveller interviews, OTA perception audits, and hotel GM depth interviews. The insights shaped our F&B and wellness capex priorities ahead of peak season.',
  },
  {
    author: 'Richard Pemberton',
    role: 'Director, Research & Advisory',
    company: 'UK Commercial Real Estate Developer',
    rating: 5,
    datePublished: '2025-08-27',
    industry: 'real-estate',
    body:
      'For a mixed-use scheme in London and Manchester, BioNixus ran tenant demand modelling, broker interviews, and end-user workplace preference research. Their mixed-methods approach connected occupier sentiment to yield assumptions our investment committee used in the final business case.',
  },
  {
    author: 'Yuki Tanaka',
    role: 'Co-Founder & CEO',
    company: 'Healthcare AI Startup (Series B)',
    rating: 5,
    datePublished: '2026-02-10',
    industry: 'ai-startup',
    body:
      'As an AI company selling into hospitals, we needed credible clinician workflow research — not a product demo survey. BioNixus recruited radiology and emergency department leads in the US and UK, mapped trust barriers for clinical AI, and helped us refine our GTM narrative for enterprise health systems.',
  },
  {
    author: 'Marcus Webb',
    role: 'VP Product Marketing',
    company: 'B2B SaaS & IT Services Startup',
    rating: 5,
    datePublished: '2025-12-20',
    industry: 'it-startup',
    body:
      'BioNixus ran win-loss and buyer committee research for our cybersecurity platform across mid-market IT leaders in the US and Europe. They moved fast without sacrificing sample quality, and the competitive battle cards from the programme became core sales enablement within a month of delivery.',
  },
];
