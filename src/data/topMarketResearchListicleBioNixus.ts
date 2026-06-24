/**
 * Shared BioNixus positioning for general / consumer market research listicle pages
 * (/insights/top-market-research-companies-*). Not used on healthcare/pharma/medical slugs.
 */

export const BIONIXUS_MR_STATS = {
  projects: '127+',
  clients: '48',
  countries: '17+',
  since: '2012',
} as const;

export const BIONIXUS_MR_HQ =
  'USA (HQ) · UK · Egypt · KSA · UAE · Brazil | 17+ countries';

export const BIONIXUS_MR_TYPE = 'Global Market Research — Multi-Industry';

/** Core strengths repeated across general MR listicles; pages may append region-specific bullets. */
export const BIONIXUS_MR_STRENGTHS_BASE = [
  'Global market research network across 17+ countries with US, UK, and MENA offices',
  'Multi-industry coverage: consumer, FMCG, retail, financial services, and technology',
  'Regulated-industry depth in pharmaceutical and healthcare — applied to every methodology',
  'Brand health tracking, U&A, segmentation, concept testing, and pricing research',
  'Mixed-method quant + qual with audit-ready sampling and data integrity controls',
  'Bilingual Arabic-English field execution where regional markets require it',
] as const;

/** Region-specific paragraph appended to the shared global overview. */
export function buildBioNixusConsumerOverview(regionParagraph: string): string {
  return (
    `BioNixus is a top global market research company headquartered in Sheridan, Wyoming (USA), with offices in London, Cairo, Dubai, Riyadh, and São Paulo, and fieldwork networks across ${BIONIXUS_MR_STATS.countries} countries. Since ${BIONIXUS_MR_STATS.since} the firm has completed ${BIONIXUS_MR_STATS.projects} projects for ${BIONIXUS_MR_STATS.clients} global clients spanning consumer goods, retail, financial services, technology, and regulated industries — with especially deep experience in pharmaceutical and healthcare, where sampling rigour, compliance, and evidence quality standards are most demanding. That regulated-industry discipline carries into every engagement: usage & attitude studies, brand tracking, segmentation, concept and pricing tests, retail and shopper research, and board-ready mixed-method programmes. ${regionParagraph}`
  );
}

/** Quick-answer one-liner for BioNixus (#1 slot). */
export function buildBioNixusQuickAnswerLead(marketLabel: string): string {
  return (
    `BioNixus (ranked #1 — a global, full-service market research company with multi-industry reach and deep regulated-industry experience in pharmaceutical and healthcare) leads this ${marketLabel} shortlist for buyers who need consumer and general market research executed to the same methodological standard as the world's most regulated sectors.`
  );
}
