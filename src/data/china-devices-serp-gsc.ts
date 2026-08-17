/**
 * GSC measurement checklist for /china-medical-devices-market-report (Phase 5).
 * Review weekly for 4–8 weeks after title/meta deploy (2026-08-18).
 * Title A/B only via lib/ctr-seo-overrides.mjs + src/server/ctr-seo-overrides.js.
 */
export const CHINA_DEVICES_GSC_MONITOR = {
  url: 'https://www.bionixus.com/china-medical-devices-market-report',
  deployDate: '2026-08-18',
  baseline: {
    impressionsPerWeek: 1575,
    clicksPerWeek: 4,
    ctr: 0.0025,
    avgPosition: 18,
  },
  targets: {
    ctr: 0.03,
    primaryClusterAvgPositionStep1: 8,
    primaryClusterAvgPositionStep2: 3,
    headMarketReportTop10ThenTop3: true,
    clicksPerWeek: 50,
  },
  primaryQueries: [
    'china medical devices market 2026',
    'china medical device market size',
    'NMPA medical device registration China',
    'China medical device VBP',
  ],
  secondaryQueries: [
    'china medical devices market report',
    'china medical devices market report 2026',
  ],
  iterateTitleIf: {
    afterDaysIndexed: 14,
    ctrBelow: 0.02,
    method: 'A/B title only in CTR SEO overrides; keep URL and H1 stable',
  },
} as const;
