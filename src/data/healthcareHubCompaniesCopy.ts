/**
 * Day 0 paste kit for KSA/UAE healthcare hub head-term alignment.
 * Plural “companies” titles, H1s, leads, and FAQ copy for:
 * /healthcare-market-research/saudi-arabia
 * /healthcare-market-research/uae
 *
 * Titles are long on purpose — ship via CTR SEO overrides so Helmet/SSR
 * do not clamp them to 60 characters.
 */

export type HealthcareHubCompaniesCopy = {
  path: '/healthcare-market-research/saudi-arabia' | '/healthcare-market-research/uae';
  title: string;
  description: string;
  h1: string;
  opening: string;
  faqQuestion: string;
  faqAnswer: string;
};

export const KSA_HUB_COMPANIES_COPY: HealthcareHubCompaniesCopy = {
  path: '/healthcare-market-research/saudi-arabia',
  title: 'Healthcare Market Research Companies in Saudi Arabia | SFDA & NUPCO | BioNixus',
  description:
    'Healthcare market research companies in Saudi Arabia: SFDA-aware HCP surveys, NUPCO tenders, Arabic fieldwork in Riyadh, Jeddah & Dammam. Request a proposal.',
  h1: 'Healthcare market research companies in Saudi Arabia',
  opening:
    'BioNixus is a primary healthcare market research company in Saudi Arabia for manufacturer affiliates. Fieldwork runs in Arabic and English across Riyadh, Jeddah, and the Eastern Province, designed around SFDA registration and NUPCO procurement — not a translated regional template. IQVIA remains the syndicated audit. BioNixus is the account-level complement.',
  faqQuestion: 'What are the top healthcare market research companies in Saudi Arabia?',
  faqAnswer:
    'Syndicated Rx audits in the Kingdom are typically IQVIA. For primary HCP, KOL, and payer fieldwork designed around SFDA registration and NUPCO, affiliates brief a custom primary firm. BioNixus runs Arabic and English studies in Riyadh, Jeddah, and the Eastern Province as that complement — not a replacement for the national audit. Local field agencies remain useful for single-city quotas.',
};

export const UAE_HUB_COMPANIES_COPY: HealthcareHubCompaniesCopy = {
  path: '/healthcare-market-research/uae',
  title: 'Healthcare Market Research UAE: DHA, DOH & MOHAP | BioNixus',
  description:
    'UAE healthcare market research hub: DHA, DOH, MOHAP and EDE context, therapy priorities and reports from BioNixus Dubai. Hiring? See our company page.',
  h1: 'Healthcare Market Research in the UAE: Dubai, Abu Dhabi & Federal Hub',
  opening:
    'This is BioNixus\'s UAE healthcare market research hub, run from our Dubai office at Thuraya Tower 1, 5th Floor, Al Sufouh 2. If you are choosing a healthcare market research company in UAE, start with our company page.',
  faqQuestion: 'What are the top healthcare market research companies in the UAE?',
  faqAnswer:
    'BioNixus (Dubai office, Al Sufouh 2) for DHA-, DOH- and MOHAP-aligned primary research; IQVIA for syndicated audits; local agencies such as Sapience, Curis Health and IDS for in-emirate fieldwork. See the 2026 ranking.',
};

export const HEALTHCARE_HUB_COMPANIES_COPY: Record<'saudi-arabia' | 'uae', HealthcareHubCompaniesCopy> = {
  'saudi-arabia': KSA_HUB_COMPANIES_COPY,
  uae: UAE_HUB_COMPANIES_COPY,
};

export function getHealthcareHubCompaniesCopy(slug: string): HealthcareHubCompaniesCopy | null {
  if (slug === 'saudi-arabia' || slug === 'uae') {
    return HEALTHCARE_HUB_COMPANIES_COPY[slug];
  }
  return null;
}
