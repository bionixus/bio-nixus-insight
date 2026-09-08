# Website SEO audit — 2026-09-08

**Branch:** `cursor/website-content-and-ranking-9586`  
**Production crawl:** `SITE_AUDIT_BASE_URL=https://www.bionixus.com node scripts/audit-thin-pages-bio450.mjs`  
**Recorded:** 2026-09-08 (cron automation)

## Executive summary

| Metric | Value | vs 2026-09-07 |
|--------|-------|----------------|
| URLs audited | 658 | — |
| Live pages | 658 | — |
| Thin pages (<2,000 words) | **349** | −29 |
| 404 errors | **0** | — |
| Fetch errors | **0** | — |
| HMR therapy/country thin | 29 | — |

**SSR health:** No 404s or fetch failures on production. All 658 sitemap URLs return HTTP 200.

## GSC baseline (week ending 2026-09-08)

| Signal | Value | vs Target | vs Last Week |
|--------|-------|-----------|--------------|
| Impressions/day | 4,448 | −10,552 | −337 |
| Clicks/day | 33 | −417 | −4 |
| CTR | 0.75% | −2.25pp | −0.02pp |
| Avg position | 25.8 | +20.8 | **+2.6 (improved)** |

### CTR diagnostics

| Slice | CTR | Notes |
|-------|-----|-------|
| USA only | 0.09% | 33% of impressions — biggest CTR drag |
| Excl. USA | 1.08% | Rest of world performs 12× better |
| Mobile | 2.23% | 14% of device impressions |
| Desktop | 0.50% | 86% of device impressions |
| `/pharmaceutical-companies-*` cluster | 1.60% | Winning directory cluster |
| `/japan-medical-devices-market-report` | 0.08% @ pos 44 | Deep-SERP dilution |

### Query clusters that dropped >20 positions (priority recovery)

| Query | Last week | This week | Δ |
|-------|-----------|-----------|---|
| saudi arabia medical devices market | 37.5 | 82.0 | −44.5 |
| gcc in vitro diagnostic market | 16.1 | 54.9 | −38.8 |
| italy microservices healthcare market | 2.0 | 39.9 | −38.0 |
| gcc generic injectables market | 7.3 | 43.7 | −36.4 |
| gcc clinical trials market | 10.5 | 46.7 | −36.2 |

## Fixes applied (this run)

### P1 — Specialty page expansion + LLM blocks (from 5e17 + new)

| URL | Before (prod) | Fix |
|-----|---------------|-----|
| `/japan-general-surgical-devices-market` | 900w | GeoLLM + reference guide + expanded FAQs |
| `/singapore-pharmaceutical-market` | 982w | GeoLLM + reference guide |
| `/febrile-neutropenia-market` | thin | GeoLLM + reference guide |
| `/gcc-functional-service-providers-market` | 719w | GeoLLM + reference guide |
| `/gcc-medication-management-market` | 655w | GeoLLM + reference guide |
| `/italy-portable-diagnostic-devices-market` | 618w | GeoLLM + reference guide |
| `/italy-medical-device-connectivity-market` | thin | GeoLLM + reference guide (new) |
| `/doxorubicin-market` | 579w | GeoLLM + reference guide (new) |
| `/italy-oncology-antiinfective-market-access` | thin | Expanded access copy + FAQs |

**Local SSR verified ≥2,000w:** italy-connectivity (2,144), doxorubicin (2,090), gcc-generic-pharmaceuticals (2,942).

### P1 — GCC segment page LLM template

- Added optional `geoAnswer` + `referenceContext` to `GccSegmentMarketPage`
- Expanded `/gcc-generic-pharmaceuticals-market` with full reference guide (GSC: 92 impr, dropped generic injectables cluster)

### P2 — Near-threshold MedTech pages

Added market/regulatory paragraphs to push toward 2,000w:

- `/brazil-medtech-market-research` (1,996 → target 2,000+)
- `/switzerland-medtech-market-research` (1,995)
- `/spain-medtech-market-research` (1,993)
- `/denmark-medtech-market-research` (1,991)

### P2 — CTR wave 15

New overrides in `lib/ctr-seo-overrides.mjs` + `src/server/ctr-seo-overrides.js`:

- `/italy-medical-device-connectivity-market`
- `/gcc-generic-pharmaceuticals-market`
- `/gcc-generic-injectables-market`
- `/gcc-clinical-trials-market`
- `/doxorubicin-market`
- `/biosimilar-market-entry-saudi-arabia`

### P2 — Brazil healthcare report

- Added ANVISA device + GCC comparison FAQs
- Updated `dateModified` to 2026-09-08
- Expanded executive summary dual-channel paragraph

## Remaining backlog

1. **~340 pages** still below 2,000 words — continue batch via near-threshold queue (gap ≤100) then GSC-impression priority
2. **USA CTR** — 0.09% CTR on 33% of impressions; expand USA listicle body + title tests
3. **Italy/GCC ranking recovery** — monitor query clusters that dropped >20 positions post-deploy
4. **Service pages** (`/services/competitive-intelligence` 966w, `/services/market-access` 1,626w) — need ServiceMarketReferenceGuide
5. Post-deploy: `npm run indexnow:priority` for changed URLs

## DEPLOY CHECKLIST

- [ ] `src/data/specialtyMarketDemandContent.ts`
- [ ] `src/data/gccSegmentMarketContent.ts`
- [ ] `src/data/developedMarketMedtechPages.ts`
- [ ] `src/pages/market-research-gcc/GccSegmentMarketPage.tsx`
- [ ] `src/pages/BrazilHealthcareMarketReport.tsx`
- [ ] `src/components/seo/SpecialtyMarketReferenceGuide.tsx` (new)
- [ ] `src/data/seo/specialtyMarketReferenceContent.ts` (new)
- [ ] `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- [ ] `lib/ctr-seo-overrides.mjs`
- [ ] `src/server/ctr-seo-overrides.js`
- [ ] `docs/seo/website-audit-2026-09-08.md`
- [ ] `reports/weekly-report-2026-09-08.md`
