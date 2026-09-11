# BioNixus sitewide SEO audit — 2026-09-11

## Executive summary

| Signal | This week | Target | Notes |
|--------|-----------|--------|-------|
| Impressions/day | 4,448 | 15,000 | −337 vs prior week |
| Clicks/day | 33 | 450 | USA still 33% impr @ **0.09% CTR** |
| CTR | **0.75%** | 3.0% | Excl. US: **1.08%** |
| Avg. position | **25.8** | 5.0 | +2.6 vs prior week (improved) |
| Production crawl errors | **0** | 0 | 658/658 URLs return 200 |
| Production 404s | **0** | 0 | — |
| Thin service/landing (<2,000 SSR words) | **349** | 0 | Down from 378 (2026-09-10 memory); still backlog |

Full weekly metrics: `reports/weekly-report-2026-09-11.md`.

## Crawl health (production)

- **Base URL:** `https://www.bionixus.com`
- **Script:** `node scripts/audit-thin-pages-bio450.mjs`
- **Audited:** 658 service/landing URLs (sitemap + extras; blogs/insights excluded from threshold audit)
- **404 / HTTP errors:** none
- **Thin pages:** 349 (nearest gaps: medtech BOFU at 1,993–1,996 words; pharma directories 1,862–1,984 words)

## CTR & ranking priorities (GSC)

### Structural drag

1. **United States** — largest impression share, **0.09% CTR**; titles/meta and BOFU body depth remain the highest-leverage fix.
2. **Deep SERP bucket** — pages pos >40 with ≥200 impr: **0.10% CTR** (`/japan-medical-devices-market-report` still ~2,511 impr @ pos ~44).
3. **Winning cluster to protect** — `/pharmaceutical-companies-*` at **1.60% CTR**; continue hub links + quick-answer blocks.

### Query clusters that dropped sharply (position)

| Query cluster | Δ position | Likely URL theme |
|---------------|------------|------------------|
| Italy microservices / connectivity | ~−27 to −38 | `/italy-medical-device-connectivity-market` |
| GCC clinical trials / generic injectables | ~−36 | `/gcc-clinical-trials-market`, injectables segment |
| GCC Keytruda / Italy daptomycin | ~−21 to −30 | Italy oncology access, GCC IO |

### Page-1 queries with 0% CTR (sample)

`iqvia competitors`, `gcc functional service providers market`, `saudi arabia biosimilar market`, Dubai pharma variants — **CTR wave 17** overrides shipped in `lib/ctr-seo-overrides.mjs` (synced to `src/server/ctr-seo-overrides.js`).

## LLM / AI search (AEO)

- Content pages remain **SSR** via Express + `react-helmet-async` (JSON-LD, FAQ, canonical).
- **Italy connectivity** page expanded with calendar checkpoints + microservices FAQ for cite-ready answers.
- **Services hub** adds decision section + FAQ on governance / AI discoverability.
- Post-deploy: run `npm run aeo:track` and IndexNow wave for changed URLs.

## Changes in this branch (2026-09-11)

1. **MedTech BOFU** — two methodology paragraphs on all developed-market medtech pages (`developedMarketMedtechPages.ts`).
2. **Pharma directories** — decision guides via `pharmaCompaniesDecisionGuides.ts` + `pharmaCountryDecisionByPath.ts` (QuickAnswer + CountryCompaniesGuide).
3. **Iraq pharma guide** — KIMADIA/KRG procurement paragraph.
4. **Italy device connectivity** — structure, calendar, FAQs (`specialtyMarketDemandContent.ts`).
5. **Services hub** — depth section + FAQs (`servicesHubContent.ts`, `Services.tsx`).
6. **CTR wave 17** — IQVIA competitors, GCC FSP, Saudi biosimilars report, USA listicle meta.

## Recommended next week

1. **Deploy** and re-run `audit-thin-pages-bio450.mjs` — target medtech + pharma near-threshold first.
2. **USA CTR sprint** — expand `/insights/top-market-research-companies-usa-2026` body + `/pharmaceutical-companies-usa` (0.09% CTR drag).
3. **IndexNow** — ping wave 17 URLs after deploy (`scripts/submit-indexnow-batch.mjs`).
4. **Backlog** — 241 pages still <1,200 words (prior sprint note); prioritize GSC impressions × gap_words.
5. **Leads** — connect `data/leads/leads.csv` or Formspree webhook logging (weekly report still N/A).

## DEPLOY CHECKLIST (files changed)

- `src/data/developedMarketMedtechPages.ts`
- `src/data/pharmaCompaniesDecisionGuides.ts`
- `src/data/pharmaCountryDecisionByPath.ts`
- `src/components/seo/PharmaCompaniesQuickAnswer.tsx`
- `src/components/seo/CountryCompaniesGuide.tsx`
- `src/pages/IraqPharmaCompanies.tsx`
- `src/data/specialtyMarketDemandContent.ts`
- `src/data/servicesHubContent.ts`
- `src/pages/Services.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-09-11.md`
- `reports/weekly-report-2026-09-11.md`
- `reports/weekly-report-2026-09-11.data.json`
- `scripts/data/bio-450-thin-page-audit.json`
- `docs/seo/bio-450-thin-page-inventory.csv`
