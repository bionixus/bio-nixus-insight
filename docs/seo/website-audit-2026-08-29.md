# Website SEO Audit — 2026-08-29

## GSC performance (week ending 2026-08-16 export)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02pp |
| Avg position | **25.8** | 5.0 | +2.6 (improved) |

### CTR diagnostics

- **USA**: 33% of impressions @ **0.09% CTR** — largest structural drag
- **Excl. US**: 1.08% CTR
- **Mobile**: 2.23% CTR vs desktop 0.50%
- **Winning cluster**: `/pharmaceutical-companies-*` @ **1.60% CTR**
- **Deep-SERP dilution**: pages pos >40 with ≥200 impr @ 0.10% CTR

### Page-1 queries with 0% CTR (priority CTR tests)

`iqvia competitors`, `febrile neutropenia market`, `pharmaceutical companies in dubai`, `gcc biologics market`, `japan neurology devices market`, `japan medical disposables market`, `nupco tender`, `turkey diabetes market`

## Production crawl (2026-08-29)

| Check | Result |
|---|---|
| URLs audited | 618 |
| Thin pages (<2000 words) | **319** (was 349 on 2026-08-28) |
| 404 errors | **0** |
| HTTP errors | **0** |
| Sitewide MAJOR issues | **8** (localized blog missing H1 — fixed in this sprint) |

## Fixes delivered (this sprint)

### P0 — SSR / crawlability

- `fetchRouteData.ts` + `preloadRouteChunk.ts`: localized blog post SSR for `/de|fr|zh|es|pt|ru/blog/:slug` (fixes 6 MAJOR missing-H1 URLs)

### Content depth (thin-page remediation)

- **MedTech near-threshold**: Brazil, Switzerland, Spain, Denmark, Malaysia — `marketParagraphs` expansion
- **GCC market access guide**: biologics/biosimilars section (+1337 impr URL)
- **Specialty pages**: febrile neutropenia, Japan neurology devices, Japan medical disposables — structure + signal grids + FAQs
- **Pharma BOFU depth**: Egypt, UAE, Saudi, Iran, Iraq, Kuwait — `PharmaCompaniesDepthSection`
- **Services**: hub depth block + quantitative / competitive-intelligence / market-access detail pages

### CTR wave 5

- `/pharmaceutical-companies-uae` — Dubai query targeting
- `/febrile-neutropenia-market`, `/japan-neurology-devices-market`, `/japan-medical-disposables-market`
- `/healthcare-market-research/saudi-arabia` — title iteration (667 impr @ 0% CTR)

## LLM / chat appearance

- Expanded `GeoLLMAnswerBlock`-ready factual sections on GCC access, specialty markets, and service pages
- FAQ `<details>` preserved on access guide; structured service schema unchanged

## Next sprint priorities

1. Deploy + post-deploy thin audit (target <300 from 319)
2. USA title/meta iteration for 0.09% CTR slice
3. Batch `services/*` and `segment-market/*` thin URLs (~210 remaining)
4. Fresh GSC export (week ending 2026-09-05)
5. `npm run indexnow:priority` after deploy

## DEPLOY CHECKLIST

- `src/data/fetchRouteData.ts`
- `src/lib/preloadRouteChunk.ts`
- `src/data/developedMarketMedtechPages.ts`
- `src/data/specialtyMarketDemandContent.ts`
- `src/pages/GccMarketAccessGuide.tsx`
- `src/data/pharmaCompaniesDepthContent.ts`
- `src/components/seo/PharmaCompaniesDepthSection.tsx`
- `src/components/seo/PharmaCompaniesGccHubLinks.tsx`
- `src/components/seo/pharmaCompaniesCountryLabels.ts`
- `src/pages/{Egypt,Uae,Saudi,Iran,Iraq,Kuwait}PharmaCompanies.tsx`
- `src/data/serviceDetailDepthContent.ts`
- `src/pages/ServiceDetail.tsx`
- `src/data/servicesHubContent.ts`
- `src/pages/Services.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-08-29.md`
