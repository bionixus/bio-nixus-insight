# BioNixus Website Audit — 2026-09-06

Daily cron audit: impressions/CTR, errors, thin pages, LLM/CTR fixes.

## GSC snapshot (week ending 2026-09-06)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02pp |
| Avg position | **25.8** | 5.0 | +2.6 (improved) |

### CTR diagnostics

- **USA drag:** 33% of impressions @ **0.09% CTR**
- **Winning cluster:** `/pharmaceutical-companies-*` @ **1.60% CTR**
- **Deep-SERP drag:** `/japan-medical-devices-market-report` — 2,511 impr @ 0.08% CTR, pos 44
- **Page-1 zero-click queries:** `iqvia competitors`, `gcc biologics market`, `japan general surgical devices market`, `gcc functional service providers market`, `febrile neutropenia market`

## Production crawl (2026-09-06)

| Check | Result |
|---|---|
| URLs audited | 948 |
| Thin (&lt;2,000 words) | **521** |
| HTTP 404 | **0** |
| Server errors | **0** |
| Sitemap 404 | **0** |

## Local SSR verification (post-fix, priority batch)

| URL | Before (prod) | After (local SSR) | ≥2,000 |
|---|---|---|---|
| `/pharmaceutical-companies-iran` | 1,944w | **2,037w** | ✅ |
| `/pharmaceutical-companies-iraq` | 1,920w | **2,026w** | ✅ |
| `/brazil-healthcare-market-report` | 1,923w | **2,006w** | ✅ |
| `/japan-general-surgical-devices-market` | 891w | **1,868w** | ⏳ |
| `/singapore-pharmaceutical-market` | 978w | **1,785w** | ⏳ |
| `/services/competitive-intelligence` | 966w | **1,741w** | ⏳ |
| `/gcc-medication-management-market` | 653w | **1,285w** | ⏳ |

## Changes shipped this run

1. **SpecialtyMarketDemandPage template:** `geoAnswerBlock`, `methodologySection`, `referenceSections` for LLM/SEO grounding
2. **GSC-priority specialty pages expanded:** Japan general surgical, Singapore pharma, GCC medication management, Italy POCT, GCC FSP, febrile neutropenia
3. **`/services/competitive-intelligence`:** GeoLLMAnswerBlock, visible FAQ section, long-form prose, expanded reference handbook
4. **Pharma directories:** Iran + Iraq FAQs; Brazil healthcare FAQ + `dateModified` 2026-09-06
5. **CTR wave 13:** `/japan-general-surgical-devices-market` title/meta override (lib + server sync)

## Next sprint

1. Push Japan general surgical + Singapore pharma over 2,000w (one more reference block each)
2. Batch remaining GSC thin URLs: `/gcc-medication-management-market`, `/italy-portable-diagnostic-devices-market`, `/gcc-functional-service-providers-market`, `/febrile-neutropenia-market`
3. USA CTR: expand `/insights/top-healthcare-market-research-companies-usa-2026` body
4. Post-deploy production re-crawl; IndexNow ping expanded URLs
5. Fresh GSC export week ending 2026-09-13 — measure CTR wave 13

## DEPLOY CHECKLIST

- `src/data/specialtyMarketDemandContent.ts`
- `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- `src/data/seo/serviceExpandedPageContent.ts`
- `src/data/seo/serviceMarketReferenceContent.ts`
- `src/pages/ServiceDetail.tsx`
- `src/pages/IranPharmaCompanies.tsx`
- `src/pages/IraqPharmaCompanies.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-09-06.md`
- `reports/weekly-report-2026-09-06.md`
