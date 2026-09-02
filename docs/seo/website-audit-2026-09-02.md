# BioNixus Website SEO Audit — 2026-09-02

**Branch:** `cursor/website-content-and-ranking-9cb8`  
**Production crawl:** 622 pages audited, **323 thin**, **0 errors**, **0 404s**  
**Local SSR post-fix:** 8/8 priority pages ≥2,000 words

## GSC snapshot (week ending 2026-08-16 export)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −10,552 |
| Clicks/day | 33 | 450 | −417 |
| CTR | 0.75% | 3.0% | −2.25 pp |
| Avg. position | 25.8 | 5.0 | +20.8 |

### CTR mix diagnostics

| Slice | Impressions | CTR | Notes |
|---|---|---|---|
| Excl. United States | 20,757 | 1.08% | US = 33% impr @ 0.09% CTR |
| Mobile | 4,400 | 2.23% | 14% of device impr |
| Desktop | 26,674 | 0.50% | 86% of device impr |
| Pages pos >40 (≥200 impr) | 11,559 | 0.10% | Deep-SERP dilution |
| `/pharmaceutical-companies-*` cluster | 8,756 | 1.60% | Winning directory cluster |
| `/japan-medical-devices-market-report` | 2,511 | 0.08% @ pos 44.3 | Device-report drag |

## Issues found

| Issue | Count | Action this run |
|---|---|---|
| Thin pages (<2,000 SSR words) | 323 production | Expanded 8 high-impression priority URLs locally |
| 404 errors | 0 | None |
| SSR/render errors | 0 | Build + verify-ssr-bundle passed |

## Content expanded (≥2,000 words verified locally)

| Page | Production wc | Local SSR wc | GSC impr (week) |
|---|---|---|---|
| `/india-medical-devices-market-report` | 1,653 | 2,541 | 345 |
| `/gcc-market-access-guide` | 1,935 | 2,394 | 1,337 |
| `/brazil-healthcare-market-report` | 1,926 | 2,148 | 1,070 |
| `/services/quantitative-research` | 953 | 2,001 | 112 |
| `/japan-general-surgical-devices-market` | 850 | 2,007 | 94 |
| `/pharmaceutical-companies-iran` | 1,951 | 2,139 | 882 |
| `/pharmaceutical-companies-iraq` | 1,924 | 2,114 | 869 |
| `/brazil-medtech-market-research` | 1,999 | 2,163 | — |

## CTR overrides updated (wave 9 — 2026-09-02)

| Path | Target query cluster |
|---|---|
| `/iqvia-alternative` | "iqvia competitors" (pos 6.3, 0% CTR) |
| `/gcc-market-access-guide` | GCC biologics / biosimilar access |
| `/india-medical-devices-market-report` | India medtech market report |
| `/japan-general-surgical-devices-market` | Japan general surgical devices market |
| `/services/quantitative-research` | Quantitative healthcare research |

## LLM / chat visibility

- Added `GeoLLMAnswerBlock` to `/services/quantitative-research` (matches market-access pattern)
- Expanded FAQ blocks on GCC access guide (biologics launch sequencing, NUPCO timing)
- India devices page: full `MarketIntelligenceSections` device data (CDSCO steps, hospitals, epidemiology)

## Next sprint

1. **Deploy** — post-deploy thin audit (target <315 from 323)
2. **USA CTR** — `/insights/top-healthcare-market-research-companies-usa-2026` (527 impr @ 0.57%)
3. **Batch services/** — ~210 remaining thin service URLs
4. **Fresh GSC export** — week ending 2026-09-08
5. **IndexNow** — ping expanded priority URLs after deploy

## DEPLOY CHECKLIST

- [ ] `src/data/marketIntelligence/asiaPacific.ts`
- [ ] `src/pages/IndiaMedicalDevicesMarketReport.tsx`
- [ ] `src/pages/GccMarketAccessGuide.tsx`
- [ ] `src/pages/BrazilHealthcareMarketReport.tsx`
- [ ] `src/pages/ServiceDetail.tsx`
- [ ] `src/data/specialtyMarketDemandContent.ts`
- [ ] `src/data/seo/serviceMarketReferenceContent.ts`
- [ ] `src/data/developedMarketMedtechPages.ts`
- [ ] `src/pages/IranPharmaCompanies.tsx`
- [ ] `src/pages/IraqPharmaCompanies.tsx`
- [ ] `lib/ctr-seo-overrides.mjs`
- [ ] `src/server/ctr-seo-overrides.js`
- [ ] `docs/seo/website-audit-2026-09-02.md`
- [ ] `reports/weekly-report-2026-09-02.md`
