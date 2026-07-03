# BioNixus Website SEO Audit — 2026-07-03

**Automation:** Daily cron (`cursor/website-content-and-ranking-d8a8`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-03T04:01Z

---

## Executive summary

| Metric | Value | Δ vs 2026-06-28 |
|--------|------:|-----------------|
| Live pages audited | **370** | −45 |
| Thin pages (<2,000 words) | **213** | −82 |
| 404 errors | **0** | unchanged |
| Fetch errors | **1** | transient (`/quantitative-healthcare-market-research`) |
| Lazy SSR shells (~17 words) | **24** country/medtech reports | **fixed in code** (deploy pending) |

**Root cause:** `React.lazy()` + `Suspense` + `renderToString` shipped loading fallbacks to Google (~17 visible words, missing H1).  
**Fix:** Eager imports for all standalone `*MarketReport` pages, Middle East pillar, Skyrizi blog; SSR preload guard retained for remaining lazy routes.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action this run |
|--------|------------:|----:|---------:|-------|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet mismatch | Egypt blog Cairo block live — monitor post-deploy |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | **SSR shell (17w)** | Eager import + full HTML SSR (~1,930w) |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Thin (1,656w) | +biosimilar/tender section → ~2,094w SSR |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Thin (1,728w) | +biosimilars/HTA section |
| `/healthcare-market-research-agency-gcc` | 1,001 | 0.20% | 63.8 | Was thin | **Already 3,309w** — no copy change |
| `/pharmaceutical-market-research-dubai` | 103+ | low | 34.4 | Thin static HTML | +agency selection section in `conf/*.html` |
| `/kantar-health-alternative-gcc` | 71 | 0% | 11.1 | Near threshold | +procurement QA paragraph (static HTML) |

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

**0 URLs** in sitemap scope.

### Critical SSR regression (fixed)

24 country healthcare/medtech report URLs showed **17 words** and **missing H1** in production crawl because lazy routes suspended during `renderToString`. Post-fix local SSR verification:

| Path | Pre (prod) | Post (SSR verify) |
|------|----------:|------------------:|
| `/gcc-medical-devices-market-report` | 17 | **~1,930** |
| `/bionixus-market-research-middle-east` | thin | **~2,227** |
| `/gcc-pharmaceutical-market-research` | 1,656 | **~2,094** |
| `/saudi-arabia-medical-devices-market-report` | 17 | **~1,594** |

### Near-threshold / GSC thin pages expanded

| Path | Words (pre) | Action |
|------|------------:|--------|
| `/gcc-pharmaceutical-market-research` | 1,656 | Biosimilar/NUPCO tender research section |
| `/gcc-market-access-guide` | 1,728 | Biosimilars + SFDA EES / HTA section |
| `/kantar-health-alternative-gcc` | 1,987 | Agency evaluation paragraph (static HTML) |
| `/pharmaceutical-market-research-dubai` | 1,858 | Dubai agency selection section (static HTML) |

### Remaining thin backlog

**213** service/landing URLs still below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize global country MR pages and near-threshold gaps (<100 words).

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` retained on GCC pharma, medtech, and market access pages
- Static `conf/*.html` pages (Kantar, Dubai MR) include FAQ schema + answer-first copy for retrieval
- Post-SSR fix, medtech report pages now expose full executive summary + FAQ in initial HTML

---

## Post-deploy checklist

1. `npm run indexnow:priority` — ping GSC priority URLs
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
3. GSC URL Inspection on `/gcc-medical-devices-market-report`, `/gcc-pharmaceutical-market-research`, `/bionixus-market-research-middle-east`
4. Monitor Cairo query CTR on `/blog/healthcare-overview-egypt-market-2026` (7-day window)

---

## Files changed (this run)

- `src/routes/lazyReportPages.ts` — eager imports for standalone market reports
- `src/routes/lazyMarketingPages.ts` — eager Middle East pillar
- `src/routes.tsx` — remove Suspense on SEO-critical routes; eager Skyrizi BlogPost
- `src/entry-server.tsx` + `server.js` — async SSR preload
- `src/pages/BlogPost.tsx` — skip loading skeleton when hardcoded post exists
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — biosimilar/tender section
- `src/pages/GccMarketAccessGuide.tsx` — biosimilars/HTA section
- `public/conf/kantar-health-alternative-gcc.html` — threshold copy
- `public/conf/pharmaceutical-market-research-dubai.html` — agency section
- `scripts/verify-ssr-bundle.mjs` — word-count guards + GSC priority paths
