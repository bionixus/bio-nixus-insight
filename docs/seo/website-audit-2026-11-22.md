# BioNixus sitewide SEO / GEO audit — 2026-11-22

## GSC scorecard (export in `data/gsc/current-week/`)

| Metric | This week | Target | Δ vs last week |
|--------|-----------|--------|----------------|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +18 |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg. position | 19.5 | 5.0 | improved ~6.3 |

Full slice tables: `reports/weekly-report-2026-11-22.md`.

### CTR diagnostics

- **US drag:** 34.9% of impressions, **0.12% CTR** — desktop title/body tests remain priority.
- **Winning cluster:** `/pharmaceutical-companies-*` **2.21% CTR** @ ~28k impr/week.
- **Money query gap:** `companies like iqvia` pos **3.1**, 64 impr, **0% CTR** → title/meta iteration on `/iqvia-alternative` (shipped this run).
- **Page-1 FMCG:** `fmcg` / `fmcg companies` strong positions, sub-1.5% CTR — monitor hub `/fmcg-companies-*` overrides.

### LLM / chat appearance (GEO)

- Arabic pharma directories lacked extractable long answers; added `deepSections` + `geo-llm-answer` block on Egypt & Kuwait AR pharma pages.
- IQVIA comparison page already **4.4k+ words**; snippet now matches competitor-intent queries.

## Production crawl (`scripts/audit-thin-pages-bio450.mjs`)

| Check | Count |
|-------|------:|
| URLs audited | 678 |
| HTTP errors | 0 |
| **404** | **0** |
| Thin (&lt;2,000 SSR words) | **305** |

Top near-threshold fixes this run: Turkey/Brazil healthcare reports (+copy), Kuwait AR listicle (+paragraph), AR pharma Egypt/Kuwait (+deep sections).

## Shipped fixes (2026-11-22)

1. **`/iqvia-alternative`** — CTR title: "IQVIA Competitors & Companies Like IQVIA (2026)" (+ meta). `lib/ctr-seo-overrides.mjs`, `src/server/ctr-seo-overrides.js`, `data/seo/title-freeze.json`.
2. **`/ar/pharmaceutical-companies-egypt`** & **`/ar/pharmaceutical-companies-kuwait`** — long-form Arabic market guide sections (`src/data/arPharmaDeepSections.ts`), template wiring.
3. **`/turkey-healthcare-market-report`**, **`/brazil-healthcare-market-report`** — executive summary depth, `dateModified` 2026-11-22.
4. **`/ar/insights/top-market-research-companies-kuwait-2026`** — landscape paragraph + `dateModified`.

## Backlog (next cron)

1. Remaining **~300 thin** service/landing URLs — priority: `retail-companies*`, `medical-device-companies-{india,singapore,...}`, AR pharma UAE/KSA/OM/QA (~640w each).
2. IndexNow batch for touched URLs post-deploy.
3. Upload fresh GSC export weekly; US desktop CTR experiments.
4. `companies like iqvia` / `looking for something better than iqvia` — monitor CTR 7d after title ship.

## DEPLOY CHECKLIST

- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `data/seo/title-freeze.json`
- `src/data/arPharmaDeepSections.ts` (new)
- `src/data/arPharmaDirectories.ts`
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- `src/data/topCompanies/gcc/kuwait.general.ar.ts`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `docs/seo/website-audit-2026-11-22.md`
- `scripts/data/bio-450-thin-page-audit.json` (regenerated locally)
- `reports/weekly-report-2026-11-22.md` (regenerated)