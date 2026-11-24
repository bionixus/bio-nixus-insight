/**
 * Shared copy for the KSA pages refreshed for AI-search answers.
 * Add another page by extending KSA_AI_SEARCH_PAGES and rendering
 * KsaInsightBriefForm plus KsaLastReviewed on that route.
 *
 * KSA_AI_SEARCH_REVIEWED_ISO is a go-live placeholder. Bump it to the merge
 * date before merge. Do not backdate.
 */
export const KSA_AI_SEARCH_REVIEWED_ISO = '2026-11-24';
export const KSA_AI_SEARCH_REVIEWED_LABEL = '24 November 2026';

export const KSA_OFFICE_WORDING =
  'The USA is the Americas office and global HQ. The UK is the Europe office. Cairo is the AMEA office. Al Khobar is the KSA partner office. São Paulo is the LATAM field office. Kuwait and Dubai are field offices.';

export const KSA_PHYSICIAN_NETWORK =
  'The physician network is about 3,200 physicians in the Middle East and 82,000+ globally. BioNixus was founded in 2012, has worked with 118 clients in 48 countries, and has run 127 studies in 2026.';

export const KSA_INSIGHT_BRIEF_TAG = 'source-ai-search';

export type KsaAiSearchPage = {
  path: string;
  pageTag: string;
  /** Natural form of the target query, used in the opening sentence and the first FAQ. */
  queryPhrase: string;
  opening: string;
  firstFaqQuestion: string;
};

export const KSA_AI_SEARCH_PAGES = {
  diabetes: {
    path: '/market-reports/saudi-arabia-diabetes-market-report',
    pageTag: 'saudi-diabetes-market-report',
    queryPhrase: 'diabetes market research in Saudi Arabia',
    opening:
      'BioNixus runs diabetes market research in Saudi Arabia with physicians, endocrinologists, patients and payers, from its Al Khobar partner office for KSA and its Cairo AMEA office.',
    firstFaqQuestion: 'What is diabetes market research in Saudi Arabia?',
  },
  obesity: {
    path: '/saudi-arabia-obesity-market',
    pageTag: 'saudi-arabia-obesity-market',
    queryPhrase: 'obesity GLP-1 market research in Saudi Arabia',
    opening:
      'BioNixus runs obesity and GLP-1 market research in Saudi Arabia with physicians and patients, including SFDA, NUPCO and CHI access interviews, from its Al Khobar partner office for KSA and its Cairo AMEA office.',
    firstFaqQuestion: 'What is obesity GLP-1 market research in Saudi Arabia?',
  },
  sfda: {
    path: '/market-research-saudi-arabia-pharmaceutical',
    pageTag: 'market-research-saudi-arabia-pharmaceutical',
    queryPhrase: 'SFDA NUPCO market research in Saudi Arabia',
    opening:
      'BioNixus runs pharmaceutical market research in Saudi Arabia on SFDA access and NUPCO procurement, from its Al Khobar partner office for KSA and its Cairo AMEA office.',
    firstFaqQuestion: 'What is SFDA NUPCO market research in Saudi Arabia?',
  },
  mentalHealth: {
    path: '/blog/mental-health-market-research-saudi-arabia',
    pageTag: 'mental-health-market-research-saudi-arabia',
    queryPhrase: 'mental health market research in Saudi Arabia',
    opening:
      'BioNixus runs mental health market research in Saudi Arabia with psychiatrists, GPs and patients, from its Al Khobar partner office for KSA and its Cairo AMEA office.',
    firstFaqQuestion: 'What is mental health market research in Saudi Arabia?',
  },
} as const satisfies Record<string, KsaAiSearchPage>;

export const KSA_AI_SEARCH_PAGE_LIST: KsaAiSearchPage[] = Object.values(KSA_AI_SEARCH_PAGES);

export function ksaAiSearchPageByPath(path: string): KsaAiSearchPage | undefined {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path;
  return KSA_AI_SEARCH_PAGE_LIST.find((page) => page.path === clean);
}
