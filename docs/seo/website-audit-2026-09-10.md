# BioNixus Website SEO Audit — 2026-09-10

## GSC snapshot (week ending 2026-09-10)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02pp |
| Avg. position | **25.8** | 5.0 | **+2.6 (improved)** |

### CTR diagnostics

- **USA drag:** 33.3% of impressions @ **0.09% CTR** — largest single-country CTR gap.
- **Excl. USA:** 1.08% CTR on 20,757 impressions.
- **Mobile:** 2.23% CTR (14% of device impressions) vs desktop 0.50%.
- **Winning cluster:** `/pharmaceutical-companies-*` @ **1.60% CTR**, avg pos ~6–12.
- **Deep-SERP drag:** `/japan-medical-devices-market-report` — 2,511 impr @ pos 44.3, 0.08% CTR.

### Biggest query position drops (recovery priority)

| Query | Last wk | This wk | Δ |
|---|---|---|---|
| italy microservices healthcare market | 2.0 | 39.9 | −38.0 |
| gcc generic injectables market | 7.3 | 43.7 | −36.4 |
| gcc clinical trials market | 10.5 | 46.7 | −36.2 |
| italy medical device connectivity market | 6.9 | 34.4 | −27.5 |

## Production crawl (2026-09-10)

| Check | Result |
|---|---|
| URLs audited | 698 service/landing |
| Thin (<2,000 words) | **378** |
| 404 errors | **0** |
| Fetch errors | **0** |

Thin by cluster: standalone-landing 315, healthcare-market-research 29, ar-localized 27, services 7.

## Actions shipped this sprint

### Content expansion (Italy/GCC query-cluster recovery)

Expanded `specialtyMarketDemandContent.ts` with intro depth, signal grids, calendar blocks, and FAQs:

- `/italy-portable-diagnostic-devices-market`
- `/italy-medical-device-connectivity-market` (microservices query)
- `/italy-clinical-trials-market`
- `/gcc-functional-service-providers-market`
- `/gcc-medication-management-market`

### Service page depth

- `/services/competitive-intelligence` — deep-dive sections, expanded FAQs, reference integration (303 GSC impr, thin at 966w on production).

### Near-threshold pharma directories

- `/pharmaceutical-companies-iran` — `PharmaCompaniesQuickAnswer` extra paragraph + `dateModified` 2026-09-10 (**2,017w** SSR).
- `/pharmaceutical-companies-iraq` — QuickAnswer, GccHubLinks, market overview depth + `dateModified` (**2,275w** SSR).

### Local SSR verification (post-expansion)

| URL | Words | Status |
|---|---|---|
| `/italy-medical-device-connectivity-market` | 2,063 | PASS |
| `/italy-portable-diagnostic-devices-market` | 2,005 | PASS |
| `/italy-clinical-trials-market` | 2,011 | PASS |
| `/gcc-functional-service-providers-market` | 2,014 | PASS |
| `/gcc-medication-management-market` | 2,011 | PASS |
| `/healthcare-market-research/services/competitive-intelligence` | 2,129 | PASS |
| `/pharmaceutical-companies-iran` | 2,017 | PASS |
| `/pharmaceutical-companies-iraq` | 2,275 | PASS |

### CTR wave 16

Added exact title/meta overrides in `lib/ctr-seo-overrides.mjs` (+ server sync) for:

- Italy connectivity / portable diagnostics / clinical trials
- GCC clinical trials / generic injectables / generic pharmaceuticals / FSP / medication management
- `/healthcare-market-research/services/market-access`
- `/biosimilar-market-entry-saudi-arabia` (saudi arabia biosimilar query @ pos 4.3, 0% CTR)

## LLM / chat appearance

- Expanded specialty pages include structured FAQ schema, GeoLLMAnswer-style directory sections, and explicit regulator/pathway vocabulary for Gemini/Perplexity citation.
- Service CI page now mirrors other deep service templates with reference handbook + FAQ depth.

## Next sprint backlog

1. Post-deploy re-crawl — target Italy/GCC specialty pages ≥2,000w on production.
2. USA CTR — expand `/insights/top-healthcare-market-research-companies-usa-2026` body (527 impr @ 0.57% CTR).
3. IndexNow ping wave 16 URLs after deploy.
4. Remaining thin backlog: 241 pages under 1,200w, 27 Arabic blog stubs, video index pages.
5. Monitor Italy/GCC query-cluster recovery over 14–28 days.

## DEPLOY CHECKLIST

- `src/data/specialtyMarketDemandContent.ts`
- `src/pages/healthcare-research/ServicePage.tsx`
- `src/data/seo/serviceExpandedPageContent.ts`
- `src/pages/IranPharmaCompanies.tsx`
- `src/pages/IraqPharmaCompanies.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-09-10.md`
- `reports/weekly-report-2026-09-10.md`
