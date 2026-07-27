# BioNixus Website SEO Audit — 2026-07-27

**Automation:** Daily cron (`cursor/website-content-and-ranking-30cf`)  
**GSC baseline:** `docs/seo/exports/bionixus.com-Performance-on-Search-2026-06-22/` (last 3 months)  
**Production spot-check:** 2026-07-27T04:00Z (curl + `audit-thin-pages-bio450.mjs` post-deploy)

---

## Executive summary

| Metric | Value | Notes |
|--------|------:|-------|
| Sitemap 404s | **0** | No broken URLs in crawl scope |
| Critical error | **Redirect loop** | `/quantitative-healthcare-market-research` ↔ `/healthcare-market-research/quantitative` — **fixed** via `STANDALONE_LEGACY_EXCLUSIONS` |
| GCC medtech SSR | **2,334 words** | H1 present; lazy SSR shell issue resolved on production |
| Near-threshold GSC pages | **2** | `/gcc-pharmaceutical-market-research` (~1,970w prod), `/gcc-market-access-guide` (~1,908w prod) — expanded this run (deploy pending) |
| Thin pages (BIO-450 crawl) | **207** | 408 audited, **0** sitemap 404s, **1** fetch error (quantitative loop until deploy) |

---

## Google Search Console — impressions & CTR (Jun 22 export)

### Site totals (3 months)

High traffic remains on **pharma company list pages** (Kuwait, Oman, UAE) and the **Egypt healthcare blog** (~25k impressions). MENA CTR leaders: Egypt (4.16%), Kuwait (2.06%); Saudi (0.54% on 8.6k impressions) still under-monetised.

### High-impression / low-CTR priority queue

| Target | Impressions | CTR | Position | Issue | Action 2026-07-27 |
|--------|------------:|----:|---------:|-------|-------------------|
| `cairo hospitals healthcare 2023-2026` | 16,826 | **0%** | 4.9 | Snippet / intent | Cairo block on Egypt blog — monitor CTR |
| `/gcc-medical-devices-market-report` | 6,126 | 0.10% | 53.2 | Was SSR shell | **2,334w** on production — re-inspect in GSC |
| `/gcc-pharmaceutical-market-research` | 3,592 | **0%** | 57.9 | Thin + ranking | +NUPCO tender FAQ → target ≥2,000w |
| `/gcc-market-access-guide` | 3,058 | 0.46% | 16.5 | Near threshold | +SFDA EES FAQ → target ≥2,000w |
| `/healthcare-market-research` | 4,045 | 0.27% | 31.6 | Generic meta | Hub meta leads with “healthcare market research company” |
| `/quantitative-healthcare-market-research` | 1,665 | 0.18% | 30.3 | **Redirect loop** | Legacy BOFU exclusion — deploy + IndexNow |
| `/bionixus-market-research-middle-east` | 2,269 | 0.18% | 34.4 | — | **2,093w** on production |
| `/kantar-health-alternative-gcc` | 71 | 0% | 11.1 | Near threshold | Procurement QA copy in static HTML |

---

## Errors fixed this run

### Redirect loop (fetch failure)

Legacy regex treated `quantitative-healthcare-market-research` as `/quantitative` + `healthcare` BOFU and 301’d to `/healthcare-market-research/quantitative`, while `vercel.json` 301’d back to the canonical URL.

**Fix:** `STANDALONE_LEGACY_EXCLUSIONS` in `lib/country-industry-redirects.mjs` + `scripts/test-country-industry-redirects.mjs`.

---

## Thin pages & content

- **No sitemap 404s** in BIO-450 scope (last full crawl Jul 3: 213 thin URLs remaining).
- **This run:** expanded GSC priority BOFU pages under 2,000 words (GCC pharma, GCC access guide).
- **Backlog:** continue `docs/seo/bio-450-thin-page-research-briefs.md` — batch country MR pages and &lt;100-word gaps.

---

## LLM / chat appearance (GEO)

- `GeoLLMAnswerBlock` on GCC pharma, medtech, and access pages
- FAQ `details`/`summary` + JSON-LD on BOFU and static `conf/*.html` agency pages
- Answer-first Cairo block on `/blog/healthcare-overview-egypt-market-2026` for retrieval queries

---

## Post-deploy checklist

1. `node scripts/test-country-industry-redirects.mjs`
2. `npm run indexnow:priority` (includes quantitative + GCC cluster URLs)
3. Re-run `node scripts/audit-thin-pages-bio450.mjs`
4. GSC URL Inspection: quantitative URL, GCC medtech, GCC pharma, GCC access guide
5. Monitor Cairo query CTR (7-day window)

---

## Files changed

- `lib/country-industry-redirects.mjs` — standalone BOFU exclusion
- `scripts/test-country-industry-redirects.mjs` — regression guard
- `src/pages/GccPharmaceuticalMarketResearch.tsx` — NUPCO tender FAQ
- `src/pages/GccMarketAccessGuide.tsx` — SFDA EES FAQ + schema
- `src/pages/healthcare-research/HubPage.tsx` — CTR-oriented meta description
- `public/conf/kantar-health-alternative-gcc.html` — procurement QA copy
- `scripts/gsc-priority-recrawl.txt` — priority recrawl URLs
