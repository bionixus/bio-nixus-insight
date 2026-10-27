# Website SEO audit — 2026-10-27

## GSC snapshot (7-day, `data/gsc/current-week/`)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +18 |
| CTR | 1.13% | 3.0% | +0.37pp |
| Avg. position | 19.5 | 5.0 | improved +6.3 |

Full report: `reports/weekly-report-2026-10-27.md`.

### CTR priorities (no IQVIA title changes — frozen until 2026-12-12)

- **US drag:** 51k impr @ 0.12% CTR — body/LLM depth and internal links, not title tests on IQVIA URLs.
- **Mobile vs desktop:** 2.63% vs 0.74% CTR — desktop template/LCP pass remains on backlog.
- **Winning cluster:** `/pharmaceutical-companies-*` at 2.21% CTR — continue directory matrix depth, not slug changes.
- **Page-1 low CTR queries:** `fmcg`, `pharmaceutical companies in dubai`, IQVIA-alternative intents — meta/body tests on landing pages (see weekly report table).

## Production crawl (`scripts/bio-449-thin-page-audit.mjs`)

| Check | Result |
|---|---|
| URLs audited | 713 |
| Thin (&lt;2,000 words) | 334 |
| 404 | **0** |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv`.

## Shipped this run (pre-deploy)

1. **Locale blog SSR:** `/de|fr|zh/blog/:slug` routed through `fetchRouteData` for full post HTML and H1 (from 2026-10-26 batch).
2. **Developed-market healthcare depth:** `CountryHealthcareMarketDepthSection` on NL, ES, CA, SE, TR, PL plus **IE, AU, USA, JP, IT, CN** money pages.
3. **Therapy depth:** expanded SSR sections on cardiovascular, neurology-cns, digital-health, dermatology (`TherapyPage.tsx`).
4. **Weekly report:** `reports/weekly-report-2026-10-27.md`.

## Post-deploy checklist

- [ ] `npm run indexnow:priority`
- [ ] Re-crawl: `node scripts/bio-449-thin-page-audit.mjs` (target &lt;300 thin service landers)
- [ ] `npm run audit:sitewide:phase2` for title/meta/schema MAJORs
- [ ] Monitor US CTR slice and `/healthcare-market-research-italy` impressions (GSC pos ~50)

## DEPLOY CHECKLIST (files touched)

- `src/data/seo/countryHealthcareMarketDepth.ts`
- `src/components/seo/CountryHealthcareMarketDepthSection.tsx`
- `src/pages/HealthcareMarketResearch{Netherlands,Spain,Canada,Sweden,Turkey,Poland,Ireland,Australia,Usa,Japan,Italy,China}.tsx`
- `src/pages/healthcare-research/TherapyPage.tsx`
- `src/data/fetchRouteData.ts`
- `reports/weekly-report-2026-10-27.md`
- `docs/seo/website-audit-2026-10-27.md`
