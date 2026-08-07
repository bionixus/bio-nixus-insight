# Website SEO Audit — 2026-08-07

**Branch:** `cursor/website-content-and-ranking-0b2d`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` (2026-08-07T04:18Z)

## Executive summary

| Metric | Production (pre-deploy) | Post-fix (local SSR) |
|--------|-------------------------|----------------------|
| URLs audited | 494 | — |
| Thin pages (<2,000 words) | **274** | Pharma cluster fixed locally |
| 404 errors | **0** | 0 |
| Fetch/SSR errors | **0** | 0 |

**Priority zero:** Nine `/pharmaceutical-companies-*` pages ranked in GSC (pos 6–12 cluster) but shipped only **16–20 words** in raw HTML because `React.lazy()` + `Suspense` rendered the loading fallback during `renderToString`. Full page content existed in components but was invisible to Googlebot, GPTBot, and PerplexityBot.

## GSC / CTR context (baseline Jul 2026)

| Query / page | Signal |
|--------------|--------|
| `iqvia competitors` | pos ~7.2, underperforming CTR |
| `companies like iqvia` | pos ~8.7 |
| `healthcare market research companies` | pos ~41 |
| `/gcc-medical-devices-market-report` | high impressions, pos ~54 |
| `/gcc-pharmaceutical-market-research` | ~3,592 impr, 0% CTR |
| Pharmaceutical-companies cluster | Winning positions 6–12 but thin HTML |

**Targets:** 15,000 impr/day, 3% CTR, avg position 5, 5–7 qualified leads/day.

## Critical fixes (this deploy)

1. **SSR — pharmaceutical company directories (9 URLs)**  
   Eager imports in `lazyReportPages.ts` for all `PharmaCompanies` pages. Local SSR verification: `/pharmaceutical-companies-saudi-arabia` → **~9,500 words** in `<main>`.

2. **Content — `/qualitative-market-research`**  
   Refactored to `StrategicServicePage` with `qualitative-market-research` expanded content in `serviceLandingContent.ts`. Local SSR: **~7,100 words**.

3. **Redirects — IQVIA competitor queries**  
   - `/iqvia-competitors` → `/iqvia-alternative` (301)  
   - `/companies-like-iqvia` → `/iqvia-alternative` (301)

4. **LLM / GEO — `public/llms.txt`**  
   Added IQVIA alternative intelligence links; refreshed date to 2026-08-07.

## Remaining thin pages (post-pharma SSR fix)

After deploy, re-run production audit. Expected reduction: **~265 thin** (274 − 9 pharma pages passing 2,000w).

**Next P0 clusters** (largest word gaps after pharma fix):

| Path | Pre-fix words | Gap |
|------|---------------|-----|
| `/bionixus-industries/insights/financial-services-market-research-egypt-2026` | 16 | CMS/blog SSR |
| `/ar/strategic-portfolio` | 85 | Static HTML deck (no `<main>`) |
| `/media`, `/news` | ~130 | Hub pages — expand or noindex |
| Locale `/market-research-healthcare` | 300–400 | Expand or hub consolidation |
| `/qualitative-market-research` | 408 | **Fixed in this PR** |
| Specialty demand pages (`/febrile-neutropenia-market`, etc.) | 500–1,500 | Batch content expansion |

## Pages already healthy (GSC money URLs)

| URL | Production words |
|-----|------------------|
| `/gcc-medical-devices-market-report` | 2,334 |
| `/japan-medical-devices-market-report` | 3,100 |
| `/heor-consulting` | 2,648 |
| `/iqvia-alternative` | Static conf HTML (full content) |

## Post-deploy checklist

- [ ] Merge and deploy PR
- [ ] `npm run indexnow:priority` (pharma URLs added to priority list)
- [ ] Re-run `node scripts/audit-thin-pages-bio450.mjs` on production
- [ ] GSC URL Inspection: pharmaceutical-companies-saudi-arabia, uae, egypt
- [ ] Request indexing for `/qualitative-market-research`
- [ ] Fresh GSC export week ending 2026-08-14

## DEPLOY CHECKLIST — files changed

- `src/routes/lazyReportPages.ts`
- `src/data/serviceLandingContent.ts`
- `src/pages/QualitativeMarketResearch.tsx`
- `config/legacy-redirects.json`
- `public/llms.txt`
- `docs/seo/website-audit-2026-08-07.md`
- `scripts/gsc-priority-recrawl.txt` (pharma URLs)
