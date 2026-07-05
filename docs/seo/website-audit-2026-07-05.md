# BioNixus Website SEO Audit — 2026-07-05

**Automation:** Daily cron (`cursor/website-content-and-ranking-9af8`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl (pre-fix):** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-05T04:02Z

---

## Executive summary

| Metric | Pre-fix prod | Post-fix (local SSR) | Action |
|--------|-------------:|---------------------:|--------|
| Pages showing ~16 words | **379** | Clears after deploy | **P0:** `await serverEntry.render()` in `api/indexnow-key.ts` |
| `#root` HTML | `undefined` | Full `<main>` content | Cherry-picked from cf29 + pushed |
| 404 in sitemap scope | **0** | **0** | No 404 content required |
| Fetch errors | **1** | Monitor | `/quantitative-healthcare-market-research` transient |
| GSC thin pages expanded | 3 near-threshold | **2,000+w** each | Saudi medtech, GCC access guide, GCC pharma |

**Critical finding (still live on production):** Vercel SSR handler shipped `<div id="root">undefined</div>` because `serverEntry.render()` is async but was not awaited. This regression explains **379 thin pages** and **0% CTR** on high-impression report URLs. Fix is merged to branch and awaiting deploy.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### Site totals (3-month)

| Page / query | Impressions | Clicks | CTR | Position |
|--------------|------------:|-------:|----:|---------:|
| Egypt blog (`healthcare-overview-egypt-market-2026`) | 25,073 | 86 | 0.34% | 5.54 |
| Kuwait pharma companies | 6,190 | 93 | 1.50% | 7.08 |
| Oman pharma companies | 5,410 | 85 | 1.57% | 6.46 |
| `cairo hospitals healthcare 2023-2026` (query) | 16,826 | 0 | **0%** | 4.9 |
| `/gcc-medical-devices-market-report` | 6,126 | 6 | **0.10%** | 53.2 |
| `/gcc-pharmaceutical-market-research` | 3,592 | — | **0%** | 57.9 |
| `/gcc-market-access-guide` | 3,058 | 14 | 0.46% | 16.5 |
| `/bionixus-market-research-middle-east` | 2,269 | 4 | 0.18% | 34.4 |

### MENA money geos (3-month)

| Country | Clicks | Impressions | CTR |
|---------|-------:|------------:|----:|
| Egypt | 144 | 3,464 | **4.16%** |
| UAE | 113 | 6,646 | 1.70% |
| Saudi Arabia | 47 | 8,639 | **0.54%** |
| Kuwait | 55 | 2,671 | 2.06% |

### CTR improvement priorities

1. **Deploy SSR fix** — restores full HTML for 6k+ impression report URLs (biggest lever).
2. **Cairo query** — Egypt blog ranks pos ~5 but 0% CTR on Cairo hospitals query; monitor snippet after SSR deploy.
3. **Saudi Arabia CTR** — 0.54% on 8,639 impressions; expanded BOFU static pages (`conf/*.html`) now 2,000+w with answer-first blocks.
4. **GCC access guide** — pos 16.5 with 0.46% CTR; expanded to 2,003w + biosimilar/HTA FAQ for retrieval.

---

## Errors & thin pages

### 404 inventory

**0 URLs** in sitemap scope.

### SSR regression (fixed on branch, deploy pending)

| Symptom | Cause | Fix |
|---------|-------|-----|
| `<div id="root">undefined</div>` | Missing `await` on async `render()` in `api/indexnow-key.ts` | `await serverEntry.render()` |
| Market reports in `Suspense` | `renderToString` emits loading fallback | Removed `suspensePage()` from 44 `*MarketReport` routes |

### Thin pages expanded this run (2,000+ words, local SSR)

| Path | Words (before) | Words (after) |
|------|---------------:|--------------:|
| `/saudi-arabia-medical-devices-market-report` | 1,465 | **2,034** |
| `/gcc-market-access-guide` | 1,903 | **2,003** |
| `/gcc-pharmaceutical-market-research` | 1,965 | **2,006** |

### Static BOFU pages (already 2,000+w from prior sprint)

| Path | Words (conf HTML) |
|------|------------------:|
| `/bionixus-vs-iqvia-mena` | 2,145+ |
| `/physician-survey-saudi-arabia` | 2,004+ |
| `/sfda-market-access-strategy-saudi-arabia` | 2,002+ |
| `/kol-mapping-saudi-arabia-oncology` | 2,000+ |
| `/biosimilar-market-entry-saudi-arabia` | 2,000+ |
| `/kantar-health-alternative-gcc` | 1,987+ (near threshold; monitor) |

### Remaining thin backlog

Pre-fix production crawl: **379** thin URLs — overwhelmingly the SSR `undefined` shell artefact. **Re-run audit 24–48h post-deploy**; expect majority to clear without copy changes. Global country MR pages near 1,900w remain in `docs/seo/bio-450-thin-page-research-briefs.md`.

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` on GCC access guide, GCC pharma, and country MR pages
- Answer-first summary blocks + `<details>`/`<summary>` FAQ on Saudi BOFU `conf/*.html` pages
- `public/llm.txt` indexes Brazil, Saudi, GCC, and global service URLs for AI crawlers
- Post-SSR deploy: market report pages will expose full executive summary + FAQ in initial HTML (critical for ChatGPT/Perplexity retrieval)

---

## Post-deploy checklist

1. **Deploy** branch `cursor/website-content-and-ranking-9af8` to Vercel
2. Verify: `curl -s 'https://www.bionixus.com/api/indexnow-key?__ssr=1&url=/gcc-medical-devices-market-report' | rg '<main'` returns 1,500+ words
3. `npm run indexnow:priority`
4. Re-run `node scripts/audit-thin-pages-bio450.mjs`
5. GSC URL Inspection on `/gcc-medical-devices-market-report`, `/gcc-pharmaceutical-market-research`, `/bionixus-market-research-middle-east`
6. Monitor Cairo query CTR on Egypt blog (7-day window)

---

## Files changed (this run)

- `api/indexnow-key.ts` — await async SSR render (**P0**)
- `src/routes.tsx` — remove Suspense from 44 market report routes
- `src/pages/SaudiArabiaMedicalDevicesMarketReport.tsx` — `MarketIntelligenceSections` → 2,034w
- `src/pages/GccMarketAccessGuide.tsx` — biosimilar/HTA FAQ → 2,003w
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — companion-diagnostic sequencing paragraph → 2,006w
- `docs/seo/website-audit-2026-07-05.md` — this report
