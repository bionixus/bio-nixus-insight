# BioNixus website SEO audit — 2026-10-14

## GSC snapshot (week in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | Δ |
|---|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | **52** | 450 | −398 | 33 | +19 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | improved +6.3 |

**Excl. bot query** `cairo hospitals healthcare 2023-2026`: 4,377 impr/day, 51.6 clicks/day, CTR 1.18%.

Full narrative: `reports/weekly-report-2026-10-14.md`.

### CTR / ranking diagnostics

- **United States:** 34.9% of impressions at **0.12% CTR** — still the largest drag; prioritize US listicle body copy and internal links (titles frozen where GSC position ≤20).
- **Mobile vs desktop:** 2.63% vs 0.74% CTR — mobile-first snippets winning; desktop meta/body tests still underperforming.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (619 clicks / 27,999 impr).
- **Page-1 low CTR:** `companies like iqvia` @ pos 3.1 (64 impr, 0% CTR), `febrile neutropenia market` @ pos 8.9, FMCG head terms @ pos 4–6 with &lt;1.5% CTR.
- **Deep-SERP dilution:** pages pos &gt;40 with ≥200 impr = 0.16% CTR (27,726 impr).

### LLM / chat appearance

- `public/llms.txt` refreshed **2026-10-14** with statistics hub + Arabic pharma directory URLs.
- Thin Arabic pharma directories hurt Arabic SERP and citation depth; expanded `/ar/pharmaceutical-companies-egypt` and `/ar/pharmaceutical-companies-kuwait` with SSR editorial sections.
- IQVIA-complement positioning: ensure `/iqvia-alternative` and account-level pages stay linked from high-impression FMCG/pharma queries.

## Production crawl (BIO-448, 2026-10-14)

| Check | Result |
|---|---|
| Service/landing URLs audited | **937** |
| Thin pages (&lt;2,000 words in `<main>`) | **478** |
| HTTP 404 | **0** |
| Pass (≥2,000 words) | **459** |

Inventory: `docs/seo/bio-448-thin-page-inventory.json`.

### Highest-impression thin pages (fix priority)

| Impressions (7d) | Words | Path |
|---:|---:|---|
| 1,554 | 1,967 | `/brazil-healthcare-market-report` |
| 1,143 | 1,694 | `/india-medical-devices-market-report` |
| 956 | 1,647 | `/healthcare-market-statistics` |
| 614 | 1,681 | `/singapore-medical-devices-market-report` |
| 547 | 688 | `/ar/pharmaceutical-companies-egypt` |
| 276 | 627 | `/ar/pharmaceutical-companies-kuwait` |

## Errors

- **404:** none in sitemap crawl.
- **Server errors:** none observed in BIO-448 crawl.

## Changes shipped this run (branch `cursor/website-content-and-ranking-779f`)

1. **`/ar/pharmaceutical-companies-egypt` & `/ar/pharmaceutical-companies-kuwait`** — `bodySections` editorial blocks (Arabic), template support, `dateModified` 2026-10-14.
2. **`/healthcare-market-statistics`** — usage + regional report sections; 6 new sourced stats; `dateModified` 2026-10-14.
3. **`/brazil-healthcare-market-report`** — executive summary depth; schema `dateModified` 2026-10-14.
4. **`/india-medical-devices-market-report`** — executive summary depth; schema `dateModified` 2026-10-14.
5. **`public/llms.txt`** — GEO refresh + new priority URLs.
6. **Sitemap** — `lastmod` 2026-10-14 for `/healthcare-market-statistics`.

## Recommended next actions

1. Deploy; `npm run indexnow:priority`; re-run `node scripts/audit-thin-pages-bio448.mjs` (expect −4 to −6 thin on fixed URLs).
2. Thin backlog **~472** — remaining `/ar/pharmaceutical-companies-*`, `/zh/insights`, utility pages &lt;1,000w.
3. US CTR sprint: body/internal links on IQVIA/FMCG/Dubai pharma landings.
4. Upload fresh GSC CSVs every Monday to `data/gsc/current-week/`.
5. `singapore-medical-devices-market-report`, `retail-companies-saudi-arabia`, `about` — next high-impression thin fixes.

## DEPLOY CHECKLIST

- `src/data/arPharmaDirectories.ts`
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- `src/data/healthcareMarketStatistics.ts`
- `src/pages/HealthcareMarketStatistics.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/IndiaMedicalDevicesMarketReport.tsx`
- `public/llms.txt`
- `scripts/generate-sitemap.mjs`
- `docs/seo/website-audit-2026-10-14.md`
- `reports/weekly-report-2026-10-14.md`
- `docs/seo/bio-448-thin-page-inventory.{json,csv}` (baseline pre-deploy)
