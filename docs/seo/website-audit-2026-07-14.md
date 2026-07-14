# BioNixus Website SEO Audit — 2026-07-14

**Automation:** Daily cron (`cursor/website-content-and-ranking-5586`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-14T04:02Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **386** | +16 |
| Thin pages (<2,000 words) | **185** | −28 |
| 404 errors | **0** | unchanged |
| Fetch errors | **1** | `/quantitative-healthcare-market-research` redirect loop |
| Healthcare MR thin cluster | **29** | +8 |

**Root cause (fetch error):** `resolveLegacyCountryIndustryMarketResearchRedirect` treated `/quantitative-healthcare-market-research` as `{country}-healthcare-market-research` and redirected to `/healthcare-market-research/quantitative`, which `vercel.json` aliases back — infinite 301 loop.

**Fix:** `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs`.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action this run |
|--------|------------:|----:|---------:|-------|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet mismatch | Cairo hospital clusters on `/egypt-healthcare-market-report` |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Position drag | Monitor post prior SSR fix |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Thin (1,970w) | +NUPCO biosimilar tender FAQ |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Thin (1,908w) | +SFDA EES + biosimilar FAQ |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | **Redirect loop** | STANDALONE_LEGACY_EXCLUSIONS fix |
| `/healthcare-market-research/saudi-arabia` | 1,851 | 0.11% | 45.6 | Thin cluster | Next sprint |
| `/healthcare-market-research-agency-gcc` | 1,001 | 0.20% | 63.8 | Position | No copy change |

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

### Fetch error (fixed in code — deploy pending)

| Path | Status | Cause |
|------|--------|-------|
| `/quantitative-healthcare-market-research` | fetch failed (301 loop) | Legacy BOFU resolver + vercel.json alias |

### Near-threshold pages expanded this run

| Path | Words (pre) | Gap | Action |
|------|------------:|----:|--------|
| `/egypt-healthcare-market-report` | 1,995 | 5 | Cairo hospitals 2023–2026 cluster section |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | NUPCO biosimilar tender FAQ |
| `/gcc-market-access-guide` | 1,908 | 92 | SFDA EES + biosimilar interchangeability FAQ |
| `/brazil-pharmaceutical-market-research` | 1,929 | 71 | Local manufacturing / generics section |
| `/china-healthcare-market-report` | 1,907 | 93 | NHSA/NRDL/VBP market structure section |
| `/bionixus-vs-iqvia-mena` | 1,914 | 86 | GeoLLM answer block + FAQ (`<details>`) |

### Remaining thin backlog

**185** service/landing URLs still below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize global country MR pages and gaps <100 words.

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` on GCC pharma and market access pages (retained)
- Cairo hospital clusters on Egypt report for high-impression zero-CTR query
- `/bionixus-vs-iqvia-mena` static HTML: answer-first block + accessible FAQ for retrieval
- FAQ sections use `<details>`/`<summary>` on static and React pages

---

## Post-deploy checklist

1. Verify `/quantitative-healthcare-market-research` returns **200** (no redirect loop)
2. `npm run indexnow:priority` — includes quantitative URL
3. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
4. GSC URL Inspection on expanded GCC and Egypt pages
5. Monitor Cairo query CTR on Egypt report + blog (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — STANDALONE_LEGACY_EXCLUSIONS
- `src/pages/EgyptHealthcareMarketReport.tsx` — Cairo hospitals section
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — NUPCO biosimilar FAQ
- `src/pages/GccMarketAccessGuide.tsx` — SFDA EES + biosimilar FAQ
- `src/pages/BrazilPharmaceuticalMarketResearch.tsx` — local manufacturing section
- `src/pages/ChinaHealthcareMarketReport.tsx` — market structure section
- `public/conf/bionixus-vs-iqvia-mena.html` — GeoLLM block + FAQ
- `scripts/gsc-priority-recrawl.txt` — quantitative URL priority
