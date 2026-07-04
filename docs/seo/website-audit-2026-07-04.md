# BioNixus Website SEO Audit — 2026-07-04

**Automation:** Daily cron (`cursor/website-content-and-ranking-cf29`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl (pre-fix):** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-04T04:04Z

---

## Executive summary

| Metric | Pre-fix prod | Root cause | Action this run |
|--------|-------------:|------------|-----------------|
| Pages showing ~16 words | **382** | Vercel SSR handler did not `await render()` — shipped `<div id="root">undefined</div>` | **Fixed** `api/indexnow-key.ts` |
| 404 in sitemap scope | **0** | — | No new 404 content required |
| Fetch errors | **1** | Transient `/quantitative-healthcare-market-research` | Monitor post-deploy |
| Thin Saudi BOFU (`conf/*.html`) | **4 pages** &lt;2,000w | Static HTML never expanded | **Expanded to 2,000+** each |
| Italy country MR | **1,942w** SSR | Near threshold | **2,022w** + regional SSR FAQ |

**Critical finding:** Production HTML for `/gcc-medical-devices-market-report` returned generic title, no `<main>`, and `undefined` in `#root` because `serverEntry.render()` is async but the Vercel handler destructured a Promise. Local SSR after fix: **~2,329 words** on GCC medtech report.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### Site totals (3-month)

| Metric | Value |
|--------|------:|
| Top page clicks | Kuwait pharma cos **93** (6,190 impr, 1.5% CTR) |
| Egypt blog | **86** clicks (25,073 impr, 0.34% CTR) |
| Oman pharma cos | **85** clicks (5,410 impr, 1.57% CTR) |

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action |
|--------|------------:|----:|---------:|-------|--------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet mismatch | Monitor Egypt blog post-deploy |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | **SSR broken in prod** | Await fix + IndexNow |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Thin + SSR | Content expanded; SSR fix |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | CTR iteration | Prior sprint content live |
| `/bionixus-market-research-middle-east` | 2,269 | 0.18% | 34.4 | SSR shell | Eager import + SSR fix |
| `/bionixus-vs-iqvia-mena` | 600+ | ~1% | 8.2 | Near threshold | **2,145w** + FAQ block |

### MENA money geos (3-month)

| Country | Clicks | Impressions | CTR |
|---------|-------:|------------:|----:|
| Egypt | 144 | 3,464 | **4.16%** |
| UAE | 113 | 6,646 | 1.70% |
| Saudi Arabia | 47 | 8,639 | **0.54%** |
| Kuwait | 55 | 2,671 | 2.06% |

---

## Errors & thin pages

### 404 inventory

**0 URLs** in sitemap scope (unchanged).

### SSR regression (fixed)

| Symptom | Cause | Fix |
|---------|-------|-----|
| `<div id="root">undefined</div>` | Missing `await` on async `render()` in `api/indexnow-key.ts` | Added `await serverEntry.render()` |
| Market reports wrapped in `Suspense` | Belt-and-suspenders with eager imports | Removed `suspensePage()` from 44 `*MarketReport` routes |

### Thin pages expanded this run (2,000+ words)

| Path | Words (before) | Words (after) |
|------|---------------:|--------------:|
| `/physician-survey-saudi-arabia` | 958 | **2,004** |
| `/sfda-market-access-strategy-saudi-arabia` | 1,062 | **2,002** |
| `/kol-mapping-saudi-arabia-oncology` | 1,081 | **2,000** |
| `/biosimilar-market-entry-saudi-arabia` | 1,369 | **2,000** |
| `/bionixus-vs-iqvia-mena` | 1,904 | **2,145** |
| `/healthcare-market-research-italy` | 1,942 | **2,022** (SSR) |

### Remaining thin backlog

Pre-fix crawl reported **382** thin service/landing URLs — overwhelmingly the SSR `undefined` shell artefact. **Re-run audit 24–48h post-deploy**; expect majority to clear without copy changes.

---

## LLM / chat appearance (GEO)

- Added **answer-first summary blocks** on Saudi BOFU static pages (voice-search / retrieval friendly)
- Added **`<details>`/`<summary>` FAQ** sections on IQVIA comparison and Saudi service pages
- `GeoLLMAnswerBlock` retained on React country/service pages (Italy FAQ expanded)
- Post-SSR fix, market report pages expose full executive summary + FAQ in initial HTML

---

## Post-deploy checklist

1. Deploy to Vercel — verify `/api/indexnow-key?__ssr=1&url=/gcc-medical-devices-market-report` returns `<main>` with 1,500+ words
2. `npm run indexnow:priority`
3. Re-run `node scripts/audit-thin-pages-bio450.mjs`
4. GSC URL Inspection on GCC medtech, GCC pharma, Middle East pillar
5. Monitor Cairo query CTR on Egypt blog (7-day window)

---

## Files changed

- `api/indexnow-key.ts` — await async SSR render (**P0**)
- `src/routes.tsx` — remove Suspense from market report routes
- `src/pages/HealthcareMarketResearchItaly.tsx` — regional SSR FAQ
- `public/conf/physician-survey-saudi-arabia.html` — 2,004w + answer block
- `public/conf/sfda-market-access-strategy-saudi-arabia.html` — 2,002w + answer block
- `public/conf/kol-mapping-saudi-arabia-oncology.html` — 2,000w + answer block
- `public/conf/biosimilar-market-entry-saudi-arabia.html` — 2,000w + answer block
- `public/conf/bionixus-vs-iqvia-mena.html` — FAQ section
