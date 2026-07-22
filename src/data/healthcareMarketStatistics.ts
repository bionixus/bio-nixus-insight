/**
 * Sourced statistics for /healthcare-market-statistics.
 * Every entry must trace to a real source already documented elsewhere in this codebase
 * (market report pages, marketIntelligenceData.ts, legacyStatTuples.ts) — never invent a number.
 * `source` is a plain-text citation (not a hyperlink) unless `sourceHref` points to a real,
 * live internal BioNixus page that states the same figure.
 */

export interface MarketStat {
  stat: string;
  source: string;
  /** Internal BioNixus page that also states this figure, if one exists. */
  sourceHref?: string;
  /** True when the figure is BioNixus's own modeled estimate rather than a third-party dataset. */
  isBioNixusEstimate?: boolean;
}

export interface MarketStatRegion {
  region: string;
  intro: string;
  stats: MarketStat[];
}

export const MARKET_STATISTICS_LAST_UPDATED = '2026-07-22';

export const MARKET_STATISTICS: MarketStatRegion[] = [
  {
    region: 'MENA & GCC',
    intro:
      'Sizing, disease burden, and regulatory data for Saudi Arabia, the UAE, Egypt, Qatar, Kuwait, Bahrain, Oman, and the wider GCC.',
    stats: [
      { stat: "Saudi Arabia's population is estimated at 37.2 million in 2026.", source: 'World Bank' },
      { stat: "Saudi Arabia's GDP per capita is USD 26,800 (2025 estimate).", source: 'IMF, 2025' },
      { stat: 'Type 2 diabetes affects 18.4% of Saudi adults — the 4th-highest national prevalence globally.', source: 'IDF Diabetes Atlas, 2023' },
      { stat: 'Cardiovascular disease causes approximately 35% of all deaths in Saudi Arabia.', source: 'Saudi Ministry of Health, 2024' },
      {
        stat: "Saudi Arabia's healthcare market is estimated at USD 55–65 billion in 2026, projected to reach USD 90–110 billion by 2030 under Vision 2030's SAR 500 billion healthcare investment programme.",
        source: 'BioNixus market analysis',
        sourceHref: '/saudi-arabia-healthcare-market-report',
        isBioNixusEstimate: true,
      },
      {
        stat: "SFDA's Economic Evaluation System (EES) became mandatory for pharmaceutical registration and pricing approval in Saudi Arabia from 1 July 2025.",
        source: "SFDA Economic Evaluation Studies Guideline (10 July 2024) and Pharmacoeconomic Submission Portal Manual (January 2025)",
      },
      { stat: 'Type 2 diabetes affects 19.3% of UAE adults — the second-highest prevalence in the GCC.', source: 'IDF Diabetes Atlas, 2023' },
      { stat: '37% of UAE adults are classified as obese, a primary driver of GLP-1 receptor agonist demand.', source: 'UAE NCD Survey, 2022' },
      {
        stat: 'The UAE healthcare market is estimated at USD 30–33 billion in 2026, reaching approximately USD 60 billion by 2030 at a 7–8% CAGR.',
        source: 'BioNixus market analysis',
        sourceHref: '/uae-healthcare-market-report',
        isBioNixusEstimate: true,
      },
      { stat: 'Type 2 diabetes affects 23.1% of Kuwaiti adults — the highest prevalence in the GCC.', source: 'IDF Diabetes Atlas, 2023' },
      { stat: '47% of Kuwaiti adults are classified as obese, among the highest rates globally.', source: 'WHO Kuwait Country Profile, 2022' },
      { stat: "Qatar's GDP per capita of roughly USD 85,000–90,000 is the highest in the GCC.", source: 'BioNixus market analysis', isBioNixusEstimate: true },
      { stat: '42% of Qatari adults are classified as obese — the highest rate in the GCC.', source: 'Qatar STEPS Survey, 2022' },
      {
        stat: 'The GCC medical devices market is estimated at USD 9.0 billion in 2026, reaching USD 16.2 billion by 2035 at approximately 6.7% CAGR.',
        source: 'Market Research Future',
        sourceHref: '/gcc-medical-devices-market-report',
      },
      {
        stat: "Saudi Arabia leads the GCC medical devices market with roughly 51% regional share (USD 4.4–4.8 billion in 2026), forecast to reach USD 8.0–8.8 billion by 2035.",
        source: 'Market Research Future',
        sourceHref: '/gcc-medical-devices-market-report',
      },
      {
        stat: 'The UAE medical devices market is estimated at USD 2.2–2.5 billion in 2026 (approximately 26% of GCC share), forecast to reach USD 4.3–4.9 billion by 2035.',
        source: 'Market Research Future',
        sourceHref: '/gcc-medical-devices-market-report',
      },
      {
        stat: 'Saudi Arabia and the UAE together account for approximately 80% of total GCC medical device spend.',
        source: 'BioNixus market analysis',
        sourceHref: '/gcc-medical-devices-market-report',
        isBioNixusEstimate: true,
      },
      {
        stat: 'The combined GCC pharmaceutical market is estimated at USD 18–22 billion in 2026, with Saudi Arabia representing approximately 45% of regional pharma spend.',
        source: 'BioNixus market analysis',
        isBioNixusEstimate: true,
      },
      { stat: 'Cardiovascular disease is the leading cause of mortality across all six GCC member states, accounting for 28–38% of deaths.', source: 'GCC Ministry of Health national statistics, 2023–2024' },
      { stat: 'The GCC records approximately 35,000+ new cancer diagnoses per year combined; breast and colorectal cancers are the most prevalent.', source: 'National cancer registries, 2023' },
      { stat: 'Type 2 diabetes affects approximately 17.2% of Egyptian adults (an estimated 11.9 million people).', source: 'IDF Diabetes Atlas, 2023' },
      {
        stat: "Egypt's healthcare market is estimated at USD 25–30 billion in 2026, growing at 8–10% CAGR through 2030.",
        source: 'BioNixus market analysis',
        sourceHref: '/egypt-healthcare-market-report',
        isBioNixusEstimate: true,
      },
      {
        stat: "Egypt's 120+ local pharmaceutical manufacturers produce approximately 93% of the pharmaceutical volume consumed domestically.",
        source: 'BioNixus market analysis',
        sourceHref: '/egypt-healthcare-market-report',
        isBioNixusEstimate: true,
      },
      {
        stat: 'Turkey attracts approximately 1.5 million medical tourists per year, generating roughly USD 2.5 billion in revenue, and is a global leader in hair transplantation (500,000+ procedures per year).',
        source: 'T.C. Sağlık Bakanlığı (Turkish Ministry of Health), 2023',
      },
      { stat: 'Approximately 8.5 million Turkish adults have type 2 diabetes (roughly 14% adult prevalence).', source: 'IDF Diabetes Atlas, 2023' },
      { stat: 'Type 2 diabetes affects 18.9% of Bahraini adults.', source: 'IDF Diabetes Atlas, 2023' },
      { stat: 'Type 2 diabetes affects 14.6% of Omani adults.', source: 'IDF Diabetes Atlas, 2023' },
    ],
  },
  {
    region: 'Asia-Pacific',
    intro: 'Market sizing and disease-burden data for China, India, Japan, South Korea, Singapore, and Australia.',
    stats: [
      { stat: "China's population is estimated at 1.41 billion in 2026.", source: 'National Bureau of Statistics of China' },
      {
        stat: "China's pharmaceutical market is estimated at USD 175–200 billion in 2026 — the world's second-largest.",
        source: 'BioNixus market analysis',
        sourceHref: '/china-healthcare-market-report',
        isBioNixusEstimate: true,
      },
      { stat: 'China records approximately 4.8 million new cancer diagnoses per year — the largest absolute cancer burden globally.', source: 'IARC GLOBOCAN, 2022' },
      { stat: 'Approximately 140 million Chinese adults have diabetes (11.2% adult prevalence) — the largest absolute count globally.', source: 'IDF Diabetes Atlas, 2023' },
      {
        stat: "China's Volume-Based Procurement (VBP) tender system cut coronary stent prices by 93% and knee implant prices by 84% in 2021.",
        source: 'BioNixus market analysis',
        sourceHref: '/china-healthcare-market-report',
        isBioNixusEstimate: true,
      },
      { stat: "India's population is estimated at 1.43 billion in 2026.", source: 'Census of India, 2024 projection' },
      {
        stat: "India's pharmaceutical market is estimated at USD 48–55 billion in 2026; India is the largest generic-drug manufacturer and exporter globally.",
        source: 'BioNixus market analysis',
        sourceHref: '/india-healthcare-market-report',
        isBioNixusEstimate: true,
      },
      { stat: 'Approximately 101 million Indian adults have type 2 diabetes (11.4% prevalence) — the second-highest absolute count globally.', source: 'ICMR–Lancet Diabetes study, 2023' },
      { stat: "India records the world's highest tuberculosis burden, at approximately 2.8 million new cases per year (28% of the global burden).", source: 'WHO Global TB Report, 2023' },
      {
        stat: "India's Ayushman Bharat PM-JAY scheme covers 500 million+ beneficiaries with hospital coverage of up to INR 5 lakh (~USD 6,000) per family per year.",
        source: 'BioNixus market analysis',
        sourceHref: '/india-healthcare-market-report',
        isBioNixusEstimate: true,
      },
      {
        stat: "Japan's medical devices market is estimated at approximately USD 41 billion in 2026, forecast to reach approximately USD 64 billion by 2032 at a 6.5% CAGR.",
        source: 'Fortune Business Insights',
        sourceHref: '/japan-medical-devices-market-report',
      },
      { stat: "More than 28% of Japan's population is over 65 — the highest share of any major economy.", source: 'BioNixus market analysis', isBioNixusEstimate: true },
      { stat: 'Japan has approximately 1.5 million hospital beds (12.1 per 1,000 population) — the highest bed density in the OECD.', source: 'BioNixus market analysis', isBioNixusEstimate: true },
      { stat: 'An estimated 10.5 million people in Japan are on pharmacotherapy for diabetes (approximately 90% type 2), with a comparable number thought to be undiagnosed.', source: 'Japan Diabetes Society, 2023' },
      { stat: "South Korea's population is estimated at 51.7 million in 2026.", source: 'Statistics Korea' },
      { stat: 'Approximately 6.4 million South Korean adults have diabetes (16.7% of adults over 30).', source: 'Korean Diabetes Association, 2023' },
      { stat: 'South Korea records approximately 270,000 new cancer diagnoses per year; thyroid, colorectal, stomach, and lung cancers are most prevalent.', source: 'Korea Central Cancer Registry (KCCR), 2023' },
      { stat: "Singapore's population is estimated at 5.9 million in 2026.", source: 'Singapore Department of Statistics (SingStat)' },
      { stat: 'Cardiovascular disease is the leading cause of death in Singapore, accounting for approximately 23% of all deaths.', source: 'Singapore Ministry of Health, Principal Causes of Death, 2023' },
      { stat: 'Approximately 9% of Singaporean adults aged 18–69 have diabetes.', source: 'Singapore National Health Survey, 2022' },
      { stat: "44% of Australia's population holds private hospital insurance cover.", source: 'Australian Prudential Regulation Authority (APRA), 2024' },
      { stat: 'Approximately 1.3 million Australians have diagnosed diabetes, of which 85% is type 2.', source: 'Australian Institute of Health and Welfare, Diabetes Snapshot, 2024' },
    ],
  },
  {
    region: 'Global',
    intro: 'Benchmark data for the United States, United Kingdom, Germany, Brazil, and Canada.',
    stats: [
      { stat: "The United States' population is estimated at 336 million in 2026.", source: 'US Census Bureau' },
      { stat: 'US health expenditure per capita is USD 14,900 — the highest of any major economy.', source: 'CMS National Health Expenditure Accounts' },
      {
        stat: "The US medical devices market is estimated at USD 175–200 billion in 2026.",
        source: 'MDMA / AdvaMed industry data',
        sourceHref: '/usa-medical-devices-market-report',
      },
      { stat: 'The US records approximately 2.0 million new cancer diagnoses per year.', source: 'American Cancer Society, Cancer Facts & Figures, 2024' },
      { stat: '41.9% of US adults are classified as obese — a primary driver of GLP-1/GIP receptor agonist demand.', source: 'CDC NHANES, 2023' },
      { stat: "The UK's NHS operates on an annual budget of GBP 167 billion (2025/26).", source: 'HM Treasury' },
      { stat: 'The UK records approximately 375,000 new cancer diagnoses per year.', source: 'Cancer Research UK, 2024' },
      { stat: '4.4 million people are diagnosed with diabetes in the UK, of which approximately 90% is type 2.', source: 'Diabetes UK, 2024' },
      {
        stat: "Germany's medical devices market is estimated at EUR 30–33 billion in 2026 — the largest in Europe.",
        source: 'BVMed (German Medical Technology Association)',
        sourceHref: '/germany-medical-devices-market-report',
      },
      { stat: 'Germany has approximately 487,000 hospital beds (5.8 per 1,000 population) — the highest bed density in Europe.', source: 'BioNixus market analysis', isBioNixusEstimate: true },
      { stat: 'Germany records approximately 510,000 new cancer diagnoses per year.', source: 'Robert Koch Institut, Cancer Report, 2023' },
      { stat: 'Approximately 8.5 million people in Germany are diagnosed with diabetes (roughly 10.5% of adults).', source: 'Deutsches Zentrum für Diabetesforschung (DZD), 2024' },
      { stat: 'Brazil records approximately 625,000 new cancer diagnoses per year.', source: 'Instituto Nacional de Câncer (INCA), 2023' },
      { stat: 'Approximately 16.8 million Brazilian adults have diabetes (15.7% prevalence).', source: 'IDF Diabetes Atlas, 2023' },
      {
        stat: "Canada's pharmaceutical market is estimated at USD 35–40 billion in 2026.",
        source: 'Innovative Medicines Canada',
        sourceHref: '/canada-healthcare-market-report',
      },
      { stat: 'Approximately 5.3 million Spanish adults have diabetes (14.8% prevalence).', source: 'Sociedad Española de Diabetes (SED), 2023' },
    ],
  },
];
