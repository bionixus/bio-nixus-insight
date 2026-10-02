# Website SEO audit — 2026-10-02

**GSC week (current export):** 4,448 impressions/day · **0.75% CTR** · avg position **25.8** (vs 4,785 / 0.77% / 28.4 prior week).  
**Targets:** 15,000 impr/day · 3% CTR · position 5.

## Headline diagnostics

| Slice | CTR | Notes |
|--------|-----|--------|
| United States | **0.09%** (33% of impressions) | Largest CTR drag — title/meta tests on page-1 US queries |
| Excl. US | 1.08% | Rest of world mix healthier |
| Mobile | 2.23% | Desktop 0.50% — desktop title/snippet tests |
| `/pharmaceutical-companies-*` | **1.60%** | Winning directory cluster |
| Deep rank (pos >40, ≥200 impr) | 0.10% | Japan/GCC device reports dilute headline CTR |

## Crawl (production)

`node scripts/audit-thin-pages-bio448.mjs` @ 2026-10-02T04:02Z

| Check | Result |
|--------|--------|
| Service/landing URLs audited | 939 |
| Thin (&lt;2,000 words) | **507** |
| 404 | **0** |
| Errors | **0** |
| Near threshold (1,900–1,999 w) | **28** |

`sitewide-audit-runbook-phase2.mjs`: 1,274 URLs · **8 MAJOR** (locale blog missing H1 in HTML; video watch pages empty shell).

## Actions shipped (this run)

1. **SSR — locale blogs:** `fetchRouteData` now loads `/de|fr|es|pt|ru|zh/blog/:slug` via `fetchBlogPostRouteData` so H1 and body render in initial HTML.
2. **SSR — video pages:** `VideoWatchPage` added to `lazyReportPages` SSR barrel + preload map; expanded transcripts and related links in `videos-catalog.json` for crawlers and LLM citation.
3. **Thin / GSC priority copy:** Expanded `/pricing`, `/account-level-market-research`, `/brazil-healthcare-market-report`, `/pharmaceutical-companies-iran`, `/pharmaceutical-companies-iraq` (dateModified updated where applicable).
4. **Weekly report:** `reports/weekly-report-2026-10-02.md` regenerated from `data/gsc/current-week/`.

## Backlog (next cron)

- Remaining **507** thin URLs — batch via `docs/seo/bio-448-thin-page-inventory.csv`; prioritize GSC impressions × gap_words.
- US CTR body tests (0.09% US CTR).
- Page-1 queries under 1.5% CTR in weekly report — assign landing URLs and title/meta variants (e.g. `iqvia competitors`, Dubai pharma company queries).
- After deploy: `npm run indexnow:priority` and re-crawl thin inventory.

## DEPLOY CHECKLIST

- `src/data/fetchRouteData.ts`
- `src/routes/lazyReportPages.ts`, `lazyReportPages.ssr.ts`, `routes.tsx`
- `src/lib/preloadRouteChunk.ts`
- `src/pages/Pricing.tsx`, `AccountLevelMarketResearch.tsx`, `BrazilHealthcareMarketReport.tsx`, `IranPharmaCompanies.tsx`, `IraqPharmaCompanies.tsx`
- `src/data/videos-catalog.json`
- `docs/seo/bio-448-thin-page-inventory.{json,csv}`, `docs/seo/sitewide-audit-phase2.md`
- `reports/weekly-report-2026-10-02.md`
