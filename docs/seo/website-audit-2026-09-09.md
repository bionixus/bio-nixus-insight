# Website SEO audit — 2026-09-09

**Branch:** `cursor/website-content-and-ranking-831f`  
**Production crawl:** `node scripts/bio-449-thin-page-audit.mjs` against https://www.bionixus.com  
**GSC week:** `npm run report:weekly` (data/gsc/current-week)  
**Recorded:** 2026-09-09 (cron automation)

## Executive summary

| Metric | Value | vs 2026-09-08 (memory) | Target |
|--------|-------|------------------------|--------|
| URLs audited | 698 | +0 | — |
| Thin pages (<2,000 words) | **378** | +29 (deploy lag) | <300 |
| 404 errors | **0** | — | 0 |
| Fetch errors | **0** | — | 0 |
| Impressions/day | **4,448** | −337 | 15,000 |
| Clicks/day | **33** | −4 | 450 |
| CTR | **0.75%** | −0.02pp | 3.0% |
| Avg position | **25.8** | +2.6 (improved) | 5 |

**SSR health:** No 404s or fetch failures on sitemap crawl. Priority zero clear.

**CTR structural drag:** United States = 33.3% impressions @ **0.09% CTR**. Excl-US CTR = **1.08%**. `/japan-medical-devices-market-report` = 2,511 impr @ 0.08% CTR, pos 44.

**Winning cluster:** `/pharmaceutical-companies-*` = **1.60% CTR** (140 clicks / 8,756 impr).

## GSC query alerts (position drops this week)

| Query cluster | Δ position | Priority URL |
|---------------|------------|--------------|
| italy microservices healthcare market | −38.0 | `/italy-medical-device-connectivity-market` (**606w**) |
| gcc generic injectables market | −36.4 | `/gcc-generic-injectables-market` (2,281w — CTR/meta) |
| gcc clinical trials market | −36.2 | `/gcc-clinical-trials-market` (2,264w — CTR/meta) |
| saudi arabia biosimilar market | page-1, 0% CTR | `/insights/saudi-arabia-biosimilar-market-size-methodology-2026` |
| iqvia competitors | pos 6.3, 0% CTR | `/iqvia-alternative` |

## Issues found & fixes applied (this run)

### P0 — Critical thin page (606 words)

| URL | Production | Local SSR (post-fix) | Fix |
|-----|------------|----------------------|-----|
| `/italy-medical-device-connectivity-market` | 606w | **1,658w** | Expanded intro, market structure, signal grid, methodology, 10 FAQs, `GeoLLMAnswerBlock`, CTR wave 16 |

### P1 — Thin service pages (7 URLs)

| URL | Production | Local SSR | Fix |
|-----|------------|-----------|-----|
| `/services/competitive-intelligence` | 966w | **1,721w** | `GeoLLMAnswerBlock` + 8 FAQs + execution section + reference guide |
| `/services/qualitative-research` | 930w | **1,521w** | `GeoLLMAnswerBlock` + merged FAQs + execution section |
| `/services/kol-stakeholder-mapping` | 895w | **1,122w** | `GeoLLMAnswerBlock` + merged FAQs + influence section |
| `/services/clinical-trial-support` | 1,004w | **1,611w** | `GeoLLMAnswerBlock` + 8 FAQs + feasibility section |
| `/services/market-access` | 1,626w | premium path | Execution section in `PremiumMarketAccess` + CTR override |

### P2 — Near-threshold batch (gap ≤150 words, 43 URLs)

| URL | Production | Local SSR | Fix |
|-----|------------|-----------|-----|
| `/brazil-healthcare-market-research` | 1,854w | **2,022w PASS** | +2 FAQs + wave-sequencing paragraph |
| `/pharmaceutical-companies-germany` | 1,855w | **2,003w PASS** | +2 FAQs + `PharmaCompaniesQuickAnswer` paragraph (all pharma dirs) |

### P2 — CTR / LLM visibility (wave 16)

New/updated overrides in `src/server/ctr-seo-overrides.js`:

- `/iqvia-alternative` — "IQVIA Competitors" title for zero-click page-1 queries
- `/italy-medical-device-connectivity-market`
- `/gcc-clinical-trials-market`
- `/gcc-generic-injectables-market`
- `/insights/top-market-research-companies-usa-2026` (USA CTR drag)
- `/insights/saudi-arabia-biosimilar-market-size-methodology-2026`
- `/services/competitive-intelligence`
- `/services/market-access`

## Remaining backlog

1. **378 thin pages** on production — prior branch content not yet deployed (−29 vs memory target 349)
2. **241 pages** under 1,200 words (non-Arabic) — industry/BOFU matrix batch via research briefs
3. **27 Arabic blog stubs** (~18–24 words) — Sanity body sync or noindex decision
4. **Video pages** (7 words) — add transcript blocks or noindex
5. Fresh GSC export — update `data/gsc/current-week/` every Monday
6. Post-deploy: `npm run indexnow:priority` for changed URLs below

## Post-deploy checklist

- [ ] Deploy branch to production
- [ ] Re-run `node scripts/bio-449-thin-page-audit.mjs` — confirm thin count drops on service + Italy URLs
- [ ] URL Inspection → Request indexing (priority 10 below)
- [ ] `npm run indexnow:priority`
- [ ] Monitor Italy/GCC query-cluster recovery in next weekly GSC export

### Priority re-index URLs

1. `/italy-medical-device-connectivity-market`
2. `/services/competitive-intelligence`
3. `/services/market-access`
4. `/services/qualitative-research`
5. `/services/kol-stakeholder-mapping`
6. `/services/clinical-trial-support`
7. `/iqvia-alternative`
8. `/insights/top-market-research-companies-usa-2026`
9. `/gcc-clinical-trials-market`
10. `/gcc-generic-injectables-market`

## DEPLOY CHECKLIST (files changed)

- `src/pages/ServiceDetail.tsx`
- `src/data/seo/serviceExpandedPageContent.ts`
- `src/data/specialtyMarketDemandContent.ts`
- `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- `src/components/seo/PharmaCompaniesQuickAnswer.tsx`
- `src/pages/BrazilHealthcareMarketResearch.tsx`
- `src/components/services/PremiumMarketAccess.tsx`
- `src/server/ctr-seo-overrides.js`
- `lib/ctr-seo-overrides.mjs`
- `docs/seo/website-audit-2026-09-09.md`
- `reports/weekly-report-2026-09-09.md` (generated)
- `scripts/data/bio-449-thin-page-audit.json` (generated)
- `docs/seo/bio-449-thin-page-inventory.csv` (generated)
