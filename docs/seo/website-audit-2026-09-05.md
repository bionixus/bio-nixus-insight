# Website SEO Audit — 2026-09-05

## GSC snapshot (week ending 2026-09-05)

| Metric | This week | Target | vs last week |
|---|---:|---:|---:|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | 0.75% | 3.0% | −0.02pp |
| Avg. position | 25.8 | 5.0 | +2.6 (improved) |

### CTR structural drag

- **United States:** 33.3% of impressions @ **0.09% CTR** — largest single-country drag
- **Excl. US:** 1.08% CTR on remaining traffic
- **Desktop:** 86% of impressions @ 0.50% CTR vs mobile 2.23%
- **Deep SERP (pos >40, ≥200 impr):** 0.10% CTR — `/japan-medical-devices-market-report` (2,511 impr @ pos 44) remains dilution bucket
- **Winning cluster:** `/pharmaceutical-companies-*` @ **1.60% CTR**

## Production crawl (thin pages)

| Check | Count |
|---|---:|
| URLs audited (service/landing) | 698 |
| Thin pages (<2,000 words) | **380** (↑ from 356 on 2026-09-04) |
| 404 pages | **0** |
| Fetch errors | **0** |

### Sitewide SEO audit (phase 2)

| Severity | Count |
|---|---:|
| PASS | 1,246 |
| MINOR | 24 |
| MAJOR | 9 |

Major issues: 9 missing H1 (mostly `/de` localized pages, `/videos`), 2 pages with zero internal links.

## Actions taken this sprint

### Content expansion (priority GSC pages → ≥2,000 words SSR)

Local SSR verification post-fix:

| URL | Before (prod) | After (local SSR) |
|---|---:|---:|
| `/brazil-healthcare-market-report` | 1,926 | **2,157** |
| `/pharmaceutical-companies-iran` | 1,963 | **2,169** |
| `/pharmaceutical-companies-iraq` | 1,938 | **2,148** |
| `/services/competitive-intelligence` | 966 | **2,002** |
| `/gcc-medication-management-market` | 613 | **2,026** |
| `/italy-portable-diagnostic-devices-market` | 577 | **2,000** |
| `/japan-general-surgical-devices-market` | 855 | **2,013** |
| `/gcc-pharmaceutical-market-research` | n/a | **2,020** |

### CTR wave 12 (page-1, 0% CTR queries)

| Path | Change |
|---|---|
| `/iqvia-alternative` | Title leads with **"IQVIA Competitors"** query phrase |
| `/gcc-pharmaceutical-market-research` | Title → **GCC Biologics Market 2026: Size, Companies & Outlook** |
| `/japan-general-surgical-devices-market` | New CTR override for head query |
| `/insights/top-healthcare-market-research-companies-usa-2026` | Title → **Top 10 … USA (2026 List)** for USA CTR drag (527 impr @ 0.57%) |

### LLM / chat appearance

- Added `GeoLLMAnswerBlock` to specialty pages (GCC medication management, Italy POCT, Japan general surgical)
- Added `GeoLLMAnswerBlock` + expanded FAQs to `/services/competitive-intelligence`
- Added `methodologySection` optional block to `SpecialtyMarketDemandPage` template

## Next sprint priorities

1. **Deploy** — re-crawl production; target thin count **<350** (from 380)
2. **USA CTR** — expand `/insights/top-healthcare-market-research-companies-usa-2026` body content (527 impr @ 0.57%, pos 28.6)
3. **Batch services/** remaining thin URLs (~210 standalone-landing pages)
4. **IndexNow** ping expanded priority URLs post-deploy
5. **Fresh GSC export** week ending 2026-09-12 — measure CTR wave 12

## DEPLOY CHECKLIST

- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/IranPharmaCompanies.tsx`
- `src/pages/IraqPharmaCompanies.tsx`
- `src/pages/ServiceDetail.tsx`
- `src/data/seo/serviceExpandedPageContent.ts`
- `src/data/specialtyMarketDemandContent.ts`
- `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-09-05.md`
- `docs/seo/bio-449-thin-page-inventory.csv`
- `docs/seo/sitewide-audit-phase2.md`
- `reports/weekly-report-2026-09-05.md`
