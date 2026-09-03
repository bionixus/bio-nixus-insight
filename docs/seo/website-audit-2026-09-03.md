# Website SEO audit — 2026-09-03

**Branch:** `cursor/website-content-and-ranking-a755`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` against https://www.bionixus.com  
**Recorded:** 2026-09-03 (cron automation)

## Executive summary

| Metric | Value | vs 2026-09-02 |
|--------|-------|----------------|
| URLs audited | 622 | +9 |
| Live pages | 622 | — |
| Thin pages (<2,000 words) | **323** | 0 (pre-deploy) |
| 404 errors | **0** | — |
| Fetch errors | **0** | — |

**SSR health:** No 404s or fetch failures on production. Post-fix local SSR verification: **8/8** priority pages ≥2,000 words.

## GSC baseline (week ending 2026-09-03)

| Signal | Value | Target | Action |
|--------|-------|--------|--------|
| Impressions/day | 4,448 | 15,000 | −7% vs prior week |
| CTR | 0.75% | 3.0% | Flat vs 0.77% |
| Avg position | 25.8 | 5.0 | Improved +2.6 vs 28.4 |
| USA share | 33% impr @ 0.09% CTR | — | Biggest CTR drag |
| pharma-companies-* cluster | 1.60% CTR | — | Winning cluster |
| Page-1 0% CTR | iqvia competitors, gcc biologics, japan general surgical, nupco tender | — | CTR wave 10 |

## Issues found & fixes applied (this run)

### P1 — Near-threshold high-impression pages expanded

| URL | Before (prod) | After (local SSR) | Fix |
|-----|---------------|-------------------|-----|
| `/gcc-market-access-guide` | 1,935w (1,337 impr) | 2,022w | MedTech registration FAQ |
| `/brazil-healthcare-market-report` | 1,926w (1,070 impr) | 2,045w | Brazil medtech/ANVISA FAQ |
| `/india-medical-devices-market-report` | 1,653w (345 impr) | 2,110w | CDSCO device steps, hospitals, companies in `asiaPacific.ts` |

### P1 — Thin service & specialty pages expanded

| URL | Before (prod) | After (local SSR) | Fix |
|-----|---------------|-------------------|-----|
| `/services/competitive-intelligence` | 966w (303 impr) | 2,000w | GeoLLMAnswerBlock + use-case prose + reference handbook |
| `/services/market-access` | 1,176w (297 impr) | 2,000w | GCC/EMEA access prose + reference handbook |
| `/japan-general-surgical-devices-market` | 850w (94 impr, pos 21) | 2,025w | calendarBlocks, expanded FAQs, custom whyBionixus |

### P2 — CTR / LLM visibility (wave 10)

| URL | Change |
|-----|--------|
| `/iqvia-alternative` | Title leads "IQVIA Competitors" (query: iqvia competitors @ pos 6.3, 0% CTR) |
| `/insights/top-healthcare-market-research-companies-usa-2026` | Title leads "Healthcare Market Research Companies USA" (527 impr @ 0.57%) |
| `/japan-general-surgical-devices-market` | New CTR override with PMDA/NHI keywords |
| `/india-medical-devices-market-report` | New CTR override with CDSCO MDR keywords |
| `/market-reports/gcc-immunology-biologics-market-report` | Title leads "GCC Biologics Market" (gcc biologics query @ pos 6, 0% CTR) |

## Remaining backlog (next cron)

1. **~315 thin pages** still below 2,000 words site-wide — batch via `scripts/generate-bio450-research-briefs.mjs`
2. Post-deploy thin audit — target <315 from 323
3. USA CTR — monitor `/insights/top-healthcare-market-research-companies-usa-2026` after title change
4. Fresh GSC export week ending 2026-09-10
5. `npm run indexnow:priority` for changed URLs

## Post-deploy checklist

- [ ] Deploy branch to production
- [ ] Re-run `node scripts/audit-thin-pages-bio450.mjs` — confirm thin count drops
- [ ] URL Inspection → Request indexing for changed URLs
- [ ] `npm run indexnow:priority`
- [ ] GSC export week ending 2026-09-10

### Priority re-index URLs

1. `/gcc-market-access-guide`
2. `/brazil-healthcare-market-report`
3. `/india-medical-devices-market-report`
4. `/services/competitive-intelligence`
5. `/services/market-access`
6. `/japan-general-surgical-devices-market`
7. `/insights/top-healthcare-market-research-companies-usa-2026`
8. `/iqvia-alternative`
