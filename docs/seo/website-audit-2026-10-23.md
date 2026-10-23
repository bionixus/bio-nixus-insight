# Website SEO audit — 2026-10-23

## Google Search Console (weekly export)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 |
| Clicks/day | 52 | 450 | −398 |
| CTR | 1.13% | 3.0% | −1.87 pp |
| Avg. position | 19.5 | 5.0 | +14.5 |

Source: `reports/weekly-report-2026-10-23.md` (same GSC window as prior week; impressions +137/day vs last week, CTR +0.37 pp).

### CTR diagnostics

- **US drag:** 34.9% of impressions at **0.12% CTR** (ex-US CTR 1.66%).
- **Desktop drag:** 80% of device impressions at **0.74% CTR** (mobile 2.63%).
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (pos 6–12 historically).
- **Money queries (page 1, low CTR):** `companies like iqvia` (pos ~3.1), `best services for pharmaceutical market access besides iqvia`, `which firms specialize in healthcare technology market research?` — title/meta tests tracked in weekly report.

## Production crawl (BIO-450)

| Check | Result |
|---|---|
| URLs audited | 674 |
| Thin (&lt;2,000 SSR words) | **306** |
| 404 | **0** |
| Fetch errors | **0** |

Inventory: `scripts/data/bio-450-thin-page-audit.json`, `docs/seo/bio-450-thin-page-inventory.csv`.

### Near-threshold fixes shipped (this run)

Content expansions targeting pages within ~50 words of 2,000w plus high-intent landers:

- `/turkey-healthcare-market-report`, `/brazil-healthcare-market-report` — hospital + therapy intelligence data, executive copy
- `/egypt-healthcare-market-report` — therapy segment blocks (market intelligence)
- `/healthcare-market-research-usa` — employer / MA / Medicaid research section (+ IQVIA cross-links)
- `/market-research-gcc` — FAQ + regulatory depth
- `/healthcare-market-research-italy`, `/pharmaceutical-companies-singapore` — FAQ / overview copy
- `/clinical-diagnostics-market-research` — FAQ for procurement + LLM-citable methodology

## LLM / AEO

- Existing `GeoLLMAnswerBlock` and FAQ `<details>` patterns retained on expanded pages.
- `/iqvia-alternative` title override updated for “companies like IQVIA” query intent (`src/server/ctr-seo-overrides.js`).

## Recommended next actions

1. **Deploy** and run `npm run indexnow:priority` for expanded URLs.
2. **Re-crawl** production with `node scripts/audit-thin-pages-bio450.mjs` — target &lt;280 thin pages post-deploy.
3. **US CTR:** continue desktop title tests on FMCG/pharma directory landers (see weekly report table).
4. **Directory matrix:** address wave-5 early-warning spokes (&lt;10 impr/day) per `report:directory-gates` output.

## DEPLOY CHECKLIST (this change set)

- `src/data/marketIntelligence/mena.ts`
- `src/data/marketIntelligence/americas.ts`
- `src/data/marketResearchCountryContent.ts`
- `src/data/clinicalDiagnosticsOffering.ts`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/EgyptHealthcareMarketReport.tsx`
- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/pages/HealthcareMarketResearchItaly.tsx`
- `src/pages/SingaporePharmaCompanies.tsx`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-10-23.md`
- `scripts/data/bio-450-thin-page-audit.json` (production crawl snapshot)
- `reports/weekly-report-2026-10-23.md`
