# Website SEO audit — 2026-11-10

## GSC snapshot (7-day, `data/gsc/current-week/`)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +19 |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg. position | 19.5 | 5.0 | +6.3 (closer to #1) |

Full report: `reports/weekly-report-2026-11-10.md`.

### Structural CTR diagnostics

- **United States**: 51,231 impr, 0.12% CTR — largest single-country drag (34.9% of impressions).
- **Mobile**: 2.63% CTR vs **desktop** 0.74% — title/meta iteration should be validated on desktop SERPs.
- **Winning cluster**: `/pharmaceutical-companies-*` at 2.21% CTR, pos ~6–12.
- **Money queries at page 1 with ~0% CTR**: `companies like iqvia` (pos 3.1), `pharmaceutical companies in dubai` (pos 6.7), `iqvia alternatives` (pos 4.0), `healthcare market research companies` (USA drag).

## Production crawl (`npm run audit:sitewide:phase2`)

| Check | Result |
|---|---|
| URLs audited | 1,325 |
| PASS | 1,290 |
| MINOR | 30 |
| MAJOR | 5 (all **Missing H1** on `/de/blog/*` and `/fr/blog/*` article routes — SSR skeleton only) |
| 404 | 0 |

Prior thin-page inventory (`docs/seo/bio-450-thin-page-inventory.csv`, 2026-11-09 production crawl): **305** URLs &lt; 2,000 words, **0** 404.

## Shipped in this run (branch `cursor/website-ranking-content-audit-d996`)

### P0 — LLM / Google crawlability

- **`fetchRouteData`**: `/de/blog/:slug`, `/fr/blog/:slug`, and `/zh/blog/:slug` now prefetch Sanity post data for SSR (same path as `/blog/:slug` and `/ar/blog/:slug`). Fixes empty skeleton HTML without H1 on localized blog URLs.

### CTR + chat appearance (high-impression queries)

- **`/iqvia-alternative`**: title → “Companies Like IQVIA & Alternatives 2026” (+ static `public/conf/iqvia-alternative.html`, `title-freeze.json`).
- **`/pharmaceutical-companies-dubai`**: ranked-list title for Dubai pharma zero-CTR cluster.
- **`/healthcare-market-research-usa`**: “Healthcare Market Research Companies USA 2026” for US CTR drag.

### Thin-page depth (MedTech landings near 2,000-word floor)

- Expanded `marketParagraphs` in `src/data/developedMarketMedtechPages.ts` for **Brazil, Switzerland, Spain, Denmark, Malaysia** (top of bio-450 thin list by `gap_words`).

## Post-deploy checklist

- [ ] `npm run indexnow:priority` (include `/iqvia-alternative`, `/pharmaceutical-companies-dubai`, `/healthcare-market-research-usa`, medtech paths above)
- [ ] Re-crawl: confirm `/de/blog/gesundheitsmarkt-deutschland-2026` has exactly one SSR `<h1>`
- [ ] Re-run thin inventory on medtech URLs; continue batch for ~300 remaining thin pages (service landings &lt;1,200w)
- [ ] Upload fresh GSC export to `data/gsc/current-week/` next Monday

## Next sprint priorities

1. US CTR: desktop title tests on `/healthcare-market-research/united-states` and homepage for “healthcare market research companies”.
2. FMCG page-1 queries (`fmcg`, `fmcg companies`) — map landing URLs in weekly CTR table.
3. Turkey/Brazil healthcare market reports still below 2,000w — add `MarketIntelligenceSections` body modules.
4. Directory matrix waves 1–5 indexation gates (`npm run report:directory-gates`).
