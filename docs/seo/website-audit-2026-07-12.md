# BioNixus Website SEO Audit — 2026-07-12

**Automation:** Daily cron (`cursor/website-content-and-ranking-cd9d`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-12T04:01Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **383** | +13 |
| Thin pages (<2,000 words) | **183** | −30 |
| 404 errors | **0** | unchanged |
| Fetch errors | **1** | redirect loop on `/quantitative-healthcare-market-research` — **fixed in code** |

**Critical fix:** Legacy BOFU resolver treated `/quantitative-healthcare-market-research` as `{country}-{industry}-market-research` and redirected to `/healthcare-market-research/quantitative`, which `vercel.json` redirected back — infinite loop. Added `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs`.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Action this run |
|--------|------------:|----:|---------:|-----------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Cairo hospital cluster section + FAQ on `/egypt-healthcare-market-report` |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Title/meta CTR refresh (“Market Report” lead) |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Title aligned to query intent + NUPCO FAQ + copy expansion |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | SFDA EES paragraph + FAQ for GEO/CTR |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | Redirect loop fix (page unreachable) |

### Near-threshold pages expanded (pre-deploy prod counts)

| Path | Words (prod) | Gap | Action |
|------|-------------:|----:|--------|
| `/egypt-healthcare-market-report` | 1,995 | 5 | Cairo clusters + GeoLLMAnswerBlock + Cairo FAQ |
| `/gcc-pharmaceutical-market-research` | 1,970 | 30 | NUPCO FAQ + tender/quant cross-link paragraph |
| `/gcc-market-access-guide` | 1,908 | 92 | SFDA EES evidence paragraph + FAQ |

---

## Production crawl — thin pages & errors

### 404 inventory

**0 URLs** in sitemap scope.

### Fetch error (fixed)

| Path | Error | Root cause | Fix |
|------|-------|------------|-----|
| `/quantitative-healthcare-market-research` | fetch failed (redirect loop) | Legacy resolver + vercel.json bidirectional 301 | `STANDALONE_LEGACY_EXCLUSIONS` |

### Remaining thin backlog

**183** service/landing URLs below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — next near-threshold: `/healthcare-market-research-italy` (1,947w), `/healthcare-market-research-new-zealand` (1,930w).

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` added on `/egypt-healthcare-market-report`
- Cairo hospital FAQ synced from `egyptHealthcare2026CairoSeo.ts` (matches blog GSC block)
- SFDA EES FAQ on `/gcc-market-access-guide` for payer/HEOR retrieval queries
- NUPCO tender FAQ on `/gcc-pharmaceutical-market-research`

---

## Post-deploy checklist

1. `npm run seo:check` — confirm `/quantitative-healthcare-market-research` returns HTTP 200
2. `npm run indexnow:priority` — ping GSC priority URLs
3. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
4. GSC URL Inspection on quantitative guide + GCC pharma + Egypt report
5. Monitor Cairo query CTR on Egypt report and blog (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — standalone path exclusion
- `scripts/seo-hard-check.mjs` — quantitative URL + resolver guard
- `src/pages/EgyptHealthcareMarketReport.tsx` — Cairo section, GEO block, FAQ
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — CTR title, NUPCO FAQ, copy
- `src/pages/GccMarketAccessGuide.tsx` — SFDA EES copy + FAQ
- `src/pages/GccMedicalDevicesMarketReport.tsx` — CTR title/description
