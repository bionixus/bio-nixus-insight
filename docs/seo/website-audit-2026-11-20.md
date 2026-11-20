# BioNixus website SEO audit — 2026-11-20

## GSC snapshot (`data/gsc/current-week/`)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 |
| Clicks/day | **52** | 450 | −398 |
| CTR | **1.13%** | 3.0% | −1.87 pp |
| Avg. position | **19.5** | 5.0 | +14.5 |

**Week-over-week:** impressions +137/day, clicks +19/day, CTR +0.38 pp, position +6.3 (closer to #1).

### CTR diagnostics

- **United States:** 34.9% of impressions at **0.12% CTR** — still the largest single-country drag.
- **Desktop:** 0.74% CTR on ~80% of device impressions; **mobile 2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR**, 619 clicks.
- **Page-1 opportunity:** `companies like iqvia` (pos 3.1, 64 impr, 0% CTR), `iqvia alternatives` (pos 4.0, 48 impr), FMCG hub queries at pos 4–6 with &lt;1.5% CTR.
- **Device-report drag:** Japan + GCC device reports still dilute blended CTR when included in deep-rank buckets.

Full narrative: `reports/weekly-report-2026-11-20.md`.

## Production crawl (BIO-450, 2026-11-20)

| Check | Result |
|---|---|
| URLs audited | **678** |
| Thin pages (&lt;2,000 visible words) | **305** |
| HTTP 404 in sitemap | **0** |
| Fetch errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv` · JSON: `scripts/data/bio-450-thin-page-audit.json`.

### High-impression thin pages (priority queue)

| Path | Words | Gap | 7d impr (approx) |
|---|---|---|---|
| `/brazil-healthcare-market-report` | 1,970 | 30 | 1,554 |
| `/india-medical-devices-market-report` | 1,696 | 304 | 1,143 |
| `/singapore-medical-devices-market-report` | 1,702 | 298 | 614 |
| `/ar/pharmaceutical-companies-egypt` | 690 | 1,310 | 547 |

Near-threshold country reports (Brazil, Turkey) are fastest wins; India and Singapore device reports are next after this sprint’s market-intelligence expansion.

## Errors

- **404:** none in sitemap crawl.
- **Technical:** no new server errors in thin-page audit; run `npm run audit:sitewide:phase2` post-deploy for title/meta/schema spot checks.

## LLM / chat appearance

- Competitor pages: keep **GeoLLMAnswerBlock** + FAQ schema on `/iqvia-alternative-saudi-arabia` and syndicated competitor templates.
- Static `/iqvia-alternative` conf HTML: ensure CTR title mirrors query language (`companies like IQVIA`) via `ctr-seo-overrides`.
- Depth: hospital lists + registration HowTo content in `MarketIntelligenceSections` improves extractable facts for AI citations.

## Changes shipped this sprint (2026-11-20)

1. **Market intelligence depth** — India, Singapore (devices), Brazil, Turkey: `deviceRegistrationSteps`, `majorHospitals`, `bionixusCapabilities`, extra epidemiology where applicable (`src/data/marketIntelligence/*`).
2. **CTR iteration** — `/iqvia-alternative` title/meta for “companies like IQVIA” / “iqvia alternatives” (`lib/ctr-seo-overrides.mjs`, `src/server/ctr-seo-overrides.js`).
3. **`dateModified`** — India devices, Brazil healthcare, Turkey healthcare reports → 2026-11-20.
4. **Reports** — `reports/weekly-report-2026-11-20.md`, this audit doc, refreshed crawl JSON/CSV.

## Recommended next actions

1. Deploy; `npm run indexnow:priority` on touched URLs.
2. Re-run `node scripts/audit-thin-pages-bio450.mjs` after deploy — expect Brazil/Turkey/India/Singapore device pages above 2,000 words locally.
3. Thin backlog **~300** — Arabic pharma directory spokes, `/market-research/energy`, video landing pages.
4. US CTR: body copy on top US listicles, not meta-only.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/marketIntelligence/asiaPacific.ts`
- `src/data/marketIntelligence/americas.ts`
- `src/data/marketIntelligence/mena.ts`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `src/pages/IndiaMedicalDevicesMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `docs/seo/website-audit-2026-11-20.md`
- `reports/weekly-report-2026-11-20.md`
- `scripts/data/bio-450-thin-page-audit.json`
- `docs/seo/bio-450-thin-page-inventory.csv`