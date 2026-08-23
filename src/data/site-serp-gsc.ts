/**
 * Site-wide GSC measurement checklist — generalized from china-devices-serp-gsc.ts (BIO plan
 * "3x impressions, 5x clicks", Workstream 6). Review weekly after each GSC export refresh.
 *
 * Protocol:
 *  1. Export GSC Performance (last 7 days) into data/gsc/current-week/ (move the prior export
 *     to data/gsc/previous-week/). Filenames: Chart.csv, Queries.csv, Pages.csv, Devices.csv,
 *     Countries.csv.
 *  2. Run `npm run report:weekly` (scripts/gsc-weekly-report.mjs) for the topline scorecard.
 *  3. Run `npm run monitor:titles` (scripts/title-iteration-check.mjs) to flag pages eligible
 *     for a title/meta iteration under the rule below.
 *  4. Run `npm run audit:desktop` (scripts/desktop-cwv-audit.mjs) monthly, or after any
 *     template change, on the top-20 impression pages.
 *
 * Title A/B changes go ONLY through lib/ctr-seo-overrides.mjs + src/server/ctr-seo-overrides.js
 * (and the matching hardcoded <Helmet> title when one exists). Keep URL and H1 stable.
 */
export const SITE_SERP_GSC_MONITOR = {
  deployDate: '2026-08-22',
  baseline: {
    impressionsPerWeek: 31100,
    clicksPerWeek: 234,
    ctr: 0.0075,
    avgPosition: 25,
    desktop: { impressionsPerWeek: 26674, avgPosition: 28.6, ctr: 0.005 },
    mobile: { impressionsPerWeek: 4400, avgPosition: 9.3, ctr: 0.0223 },
  },
  targets90d: {
    impressionsPerWeek: 93000,
    clicksPerWeek: 1170,
    ctr: 0.025,
    leadsPerWeek: [3, 5],
  },
  /** Clusters under active watch, in priority order. */
  watchClusters: [
    {
      name: 'pharma-companies (winning cluster)',
      pathPrefix: '/pharmaceutical-companies-',
      goal: 'CTR 1.5% -> 4%+ at stable positions; new-country pages indexed and ranking by week 8',
    },
    {
      name: 'device-companies (new mirror cluster)',
      pathPrefix: '/medical-device-companies-',
      goal: 'Indexation within 4 weeks; first impressions by week 6',
    },
    {
      name: 'rescued reports',
      paths: [
        '/japan-medical-devices-market-report',
        '/gcc-market-access-guide',
        '/brazil-healthcare-market-report',
        '/china-medical-devices-market-report',
      ],
      goal: 'Position 40-70 -> 8-15; impressions 2-3x per page',
    },
    {
      name: 'money-query canonical',
      paths: ['/insights/top-global-healthcare-market-research-companies-2026'],
      goal: '"healthcare market research companies" pos 12.7 -> top 5 after de-cannibalization',
    },
    {
      name: 'agency intent (re-differentiated)',
      paths: ['/healthcare-market-research-companies'],
      goal: '"healthcare market research agency" pos 47.8 -> top 10',
    },
    {
      name: 'services intent',
      paths: ['/services/competitive-intelligence', '/heor-consulting', '/services/market-access'],
      goal: '"pharma competitive intelligence" pos 65 and "heor consulting" pos 50 -> top 20',
    },
    {
      name: 'USA push',
      paths: [
        '/pharmaceutical-companies-usa',
        '/medical-device-companies-usa',
        '/insights/top-healthcare-market-research-companies-usa-2026',
      ],
      goal: 'USA 8,683 impr/week @ pos 37 -> pos <20; listicle 527 impr @ 28.6 -> top 15',
    },
  ],
  /** Same iteration rule as the china-devices monitor, applied site-wide. */
  iterateTitleIf: {
    afterDaysIndexed: 14,
    ctrBelow: 0.02,
    minPosition: 15, // only iterate pages that already rank (pos <= 15); ranking fixes come first otherwise
    minImpressionsPerWeek: 50,
    method: 'A/B title only in CTR SEO overrides; keep URL and H1 stable',
  },
} as const;
