# BioNixus Website SEO Audit — 2026-07-17

**Automation:** Daily cron (`cursor/website-content-and-ranking-c0b3`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` @ 2026-07-17T04:01Z

---

## Executive summary

| Metric | Value | Δ vs 2026-07-03 |
|--------|------:|-----------------|
| Live pages audited | **386** | +16 |
| Thin pages (<2,000 words) | **186** | −27 |
| 404 errors (sitemap) | **0** | unchanged |
| Fetch errors | **1** | redirect loop on `/quantitative-healthcare-market-research` — **fixed in code** |

**Root cause (fetch error):** Legacy BOFU resolver matched `/quantitative-healthcare-market-research` as `{country}-{industry}-market-research` → `/healthcare-market-research/quantitative`, while `vercel.json` redirects that path back to the canonical URL → infinite 301 loop.

**Fix:** `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs`.

---

## Google Search Console — impressions & CTR (Jun 22 export)

### Site totals (3 months)

Directional: strong CTR on country pharma BOFU pages (Kuwait 1.5%, Oman 1.57%); blog/overview pages earn impressions at pos ~5–6 but underperform on CTR.

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action this run |
|--------|------------:|----:|---------:|-------|-----------------|
| `cairo hospitals healthcare` (query cluster) | 16,826+ | **~0%** | ~4.9 | Snippet mismatch | Cairo hospitals + GeoLLMAnswerBlock on `/egypt-healthcare-market-report` |
| `/blog/healthcare-overview-egypt-market-2026` | 25,073 | 0.34% | 5.54 | CTR vs position | Monitor; Egypt report cross-links added |
| `/gcc-medical-devices-market-report` | 6,126 | **0.10%** | 53.2 | Deep in SERP | Prior sprint SSR fix — re-index via `indexnow:priority` |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Thin (1,970w) | +NUPCO tender FAQ → threshold |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Thin (1,908w) | +SFDA EES FAQ |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | **Redirect loop** | Exclusion fix — restore 200 SSR |
| `/healthcare-market-research-agency-gcc` | 1,001 | 0.20% | 63.8 | Position | Already >3,000w — indexnow only |

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

### Fetch error (fixed)

| Path | Error | Fix |
|------|-------|-----|
| `/quantitative-healthcare-market-research` | Redirect loop (301 ↔) | `STANDALONE_LEGACY_EXCLUSIONS` |

### Near-threshold pages expanded this run

| Path | Words (pre) | Action |
|------|------------:|--------|
| `/egypt-healthcare-market-report` | 1,995 | Cairo hospitals section + GeoLLMAnswerBlock (GSC Cairo query) |
| `/gcc-pharmaceutical-market-research` | 1,970 | NUPCO tender FAQ |
| `/gcc-market-access-guide` | 1,908 | SFDA EES FAQ |
| `/healthcare-market-research-uk` | 1,661 | ICB formulary adoption section |
| `/healthcare-market-research-australia` | 1,656 | PBAC/PBS listing pathway section |
| `/healthcare-market-research-japan` | 1,798 | DPC hospital economics section |

### Remaining thin backlog

**186** service/landing URLs still below 2,000 words. Continue batch expansion via `docs/seo/bio-450-thin-page-research-briefs.md` — prioritize near-threshold gaps (<100 words) and GSC impression leaders.

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` added on Egypt healthcare report for Cairo hospitals query cluster
- Existing blocks retained on GCC pharma, medtech, and market access pages
- FAQ sections use `<details>/<summary>` for accessibility and LLM extractability
- Post-deploy: verify `/quantitative-healthcare-market-research` returns full SSR HTML (not redirect)

---

## Post-deploy checklist

1. `npm run indexnow:priority` — ping GSC priority URLs including quantitative guide
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy propagates
3. GSC URL Inspection on `/quantitative-healthcare-market-research`, `/egypt-healthcare-market-report`, `/gcc-pharmaceutical-market-research`
4. Monitor Cairo query CTR on Egypt report + blog (7-day window)

---

## Files changed (this run)

- `lib/country-industry-redirects.mjs` — `STANDALONE_LEGACY_EXCLUSIONS`
- `src/pages/EgyptHealthcareMarketReport.tsx` — Cairo hospitals + GeoLLMAnswerBlock
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — NUPCO FAQ
- `src/pages/GccMarketAccessGuide.tsx` — SFDA EES FAQ
- `src/pages/HealthcareMarketResearchUk.tsx` — ICB section
- `src/pages/HealthcareMarketResearchAustralia.tsx` — PBAC/PBS section
- `src/pages/HealthcareMarketResearchJapan.tsx` — DPC section
- `scripts/gsc-priority-recrawl.txt` — quantitative URL
- `docs/seo/website-audit-2026-07-17.md` — this report
