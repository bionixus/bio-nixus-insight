# BioNixus Website SEO Audit — 2026-08-08

**Automation:** Daily cron (`cursor/website-content-and-ranking-cabc`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-08-08T04:05Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **494** | +124 (sitemap expansion) |
| Thin pages (<2,000 words) | **275** | +62 |
| 404 errors | **0** | unchanged |
| Fetch errors | **0** | −1 (transient resolved) |
| Pharma BOFU SSR shells (~20 words) | **9 pages** | **fixed in code** (deploy pending) |

**P0 regression:** All 9 `/pharmaceutical-companies-*` pages shipped only ~20 SSR words because `React.lazy()` + `Suspense` rendered loading fallbacks to Google — despite ranking pos 6–12 in GSC.  
**Fix:** Eager imports in `lazyReportPages.ts`; removed `suspensePage()` wrapper on pharma BOFU routes; SSR verify guards added.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### Site baseline (3-month)

| Metric | Value | Target |
|--------|------:|-------:|
| Impressions/day | ~3,700 | 15,000 |
| Clicks/day | ~30 | 450+ (3% CTR) |
| CTR | 0.82% | 3% |
| Avg position | ~30 | 5 |
| Mobile CTR | 2.08% | — |
| Desktop CTR | 0.64% | — |

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action this run |
|--------|------------:|----:|---------:|-------|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet mismatch | Cairo hospitals FAQ on Egypt report + pharma BOFU SSR fix |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Was SSR shell | **2,334w OK** in prod — monitor CTR post-index |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Thin (1,970w) | +GLP-1/obesity FAQ → crosses 2,000w |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Thin (1,908w) | +biosimilars/HTA FAQ |
| `/iqvia-alternative` | money query | pos 7.2 | — | Near page 1 | **2,099w OK** — title/meta iteration next sprint |
| `/pharmaceutical-companies-egypt` | winning cluster | pos 6–12 | — | **SSR shell (20w)** | Eager import fix |
| `/pharmaceutical-companies-saudi-arabia` | winning cluster | pos 6–12 | — | **SSR shell (20w)** | Eager import fix |

### MENA money geos (3-month)

| Country | Clicks | Impressions | CTR |
|---------|-------:|------------:|----:|
| Egypt | 144 | 3,464 | **4.16%** |
| UAE | 113 | 6,646 | 1.70% |
| Saudi Arabia | 47 | 8,639 | **0.54%** |
| Kuwait | 55 | 2,671 | 2.06% |

---

## Production crawl — thin pages & errors

### 404 inventory

**0 URLs** in sitemap scope. Previously flagged 404 paths (`/brand-tracking-pharma-gcc`, `/specialist-physician-panel-uae`, etc.) now resolve HTTP 200.

### Critical SSR regression (fixed)

| Path | Pre (prod) | Post-fix (expected SSR) |
|------|----------:|------------------------:|
| `/pharmaceutical-companies-egypt` | **20** | ~2,000+ |
| `/pharmaceutical-companies-saudi-arabia` | **20** | ~2,000+ |
| `/pharmaceutical-companies-uae` | thin shell | ~2,000+ |
| All 9 pharma BOFU pages | ~20 | ~2,000+ each |

### Near-threshold pages expanded (gap <100w)

| Path | Words (pre) | Action |
|------|------------:|--------|
| `/gcc-pharmaceutical-market-research` | 1,970 | GLP-1/obesity FAQ |
| `/gcc-market-access-guide` | 1,908 | Biosimilars/HTA FAQ |
| `/egypt-healthcare-market-report` | 1,995 | Cairo hospitals FAQ |
| `/china-medtech-market-research` | 1,997 | +7th medtech FAQ (all 18 medtech pages) |
| 14 other medtech pages | 1,916–1,997 | Shared FAQ expansion |

### Remaining thin backlog

**275** service/landing URLs still below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize locale hubs, specialty demand pages, and healthcare-market-research country pages (34 thin in cluster).

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` on GCC pharma, medtech, market access, and country BOFU pages
- FAQ schema via `<details>/<summary>` on market access guide; `FAQPage` JSON-LD on service pages
- Post-SSR fix, pharma company pages expose full company tables + FAQ in initial HTML for GPTBot/ClaudeBot/PerplexityBot
- `public/robots.txt` allows AI crawlers; references `llms.txt`

---

## Post-deploy checklist

1. `npm run indexnow:priority` — ping GSC priority URLs (pharma BOFU + GCC pages)
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
3. GSC URL Inspection on `/pharmaceutical-companies-egypt`, `/pharmaceutical-companies-saudi-arabia`, `/gcc-pharmaceutical-market-research`
4. Monitor Cairo query CTR on `/egypt-healthcare-market-report` and `/blog/healthcare-overview-egypt-market-2026` (7-day window)
5. Fresh GSC export week ending 2026-08-15

---

## Files changed (this run)

- `src/routes/lazyReportPages.ts` — eager imports for 9 pharmaceutical-companies pages
- `src/routes.tsx` — remove Suspense wrapper on pharma BOFU routes
- `src/lib/preloadRouteChunk.ts` — pharma BOFU preload map
- `scripts/verify-ssr-bundle.mjs` — pharma BOFU paths in critical SSR guard
- `src/data/developedMarketMedtechPages.ts` — 7th FAQ on all medtech BOFU pages
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — GLP-1 FAQ; dateModified
- `src/pages/GccMarketAccessGuide.tsx` — biosimilars/HTA FAQ
- `src/pages/EgyptHealthcareMarketReport.tsx` — Cairo hospitals FAQ; dateModified
- `docs/seo/website-audit-2026-08-08.md` — this audit
