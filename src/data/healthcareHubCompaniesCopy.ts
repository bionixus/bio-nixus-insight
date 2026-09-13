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
  title: 'Healthcare Market Research Companies in the UAE | DHA, DOH, MOHAP | BioNixus',
  description:
    'Healthcare market research companies in the UAE: DHA- and DOH-aligned HCP surveys, Dubai and Abu Dhabi hospital fieldwork, MOHAP evidence. Request a proposal.',
  h1: 'Healthcare market research companies in the UAE',
  opening:
    'BioNixus is a primary healthcare market research company in the UAE for Dubai and Abu Dhabi affiliates. Studies are DHA- and DOH-aligned, with MOHAP-aware payer evidence and account-level cuts national IQVIA feeds miss. Keep the dashboard for emirate sizing; brief BioNixus for named hospitals and SKUs.',
  faqQuestion: 'What are the top healthcare market research companies in the UAE?',
  faqAnswer:
    'IDS and Dubai field agencies cover in-emirate healthcare fieldwork. IQVIA covers syndicated audits. BioNixus is the primary-research complement for multi-country programmes that include Dubai and Abu Dhabi — DHA- and DOH-aligned HCP, hospital, and payer studies at account and SKU level. Keep the dashboard for emirate sizing; brief a primary firm for named hospitals and SKUs.',
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
