# Website SEO audit — 2026-10-13

## GSC performance (week ending 2026-10-13)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +19 |
| CTR | 1.13% | 3.0% | +0.38 pp |
| Avg. position | 19.5 | 5.0 | improved (+6.3 vs LW) |

Full report: `reports/weekly-report-2026-10-13.md`

### CTR diagnostics

- **US drag:** 51k impr @ 0.12% CTR — desktop FMCG/pharma head terms need body/internal-link tests (titles frozen on several money URLs).
- **Winning cluster:** `/pharmaceutical-companies-*` at 2.21% CTR, pos ~8–12.
- **Page-1 zero-CTR:** `companies like iqvia` (pos 3.1), `iqvia alternatives` (pos 4.0) — landing `/iqvia-alternative` (deep static page); monitor after deploy.
- **New top-10 pages:** `/health-insurers-saudi-arabia`, `/fmcg-companies-kenya`, `/pharmaceutical-companies-indonesia`, `/biotech-companies-india`.

## Crawl health (BIO-448, production)

| Check | Result |
|---|---|
| URLs audited | 937 service/landing |
| Thin (&lt;2,000 words) | 478 |
| 404 | **0** |
| Errors | 0 |

Inventory: `docs/seo/bio-448-thin-page-inventory.json`

## Changes shipped this run

1. **Saudi static guides** (pre-deploy thin ~964–1,106 words → **≥2,000** in `<main>`):
   - `/physician-survey-saudi-arabia`
   - `/sfda-market-access-strategy-saudi-arabia`
   - `/kol-mapping-saudi-arabia-oncology`
   - Added: direct-answer blocks, FAQ (`<details>`), FAQPage JSON-LD, `llm-access` meta, `dateModified` 2026-10-13.

2. **GSC demand page:** `/febrile-neutropenia-market` — expanded intro, structure, signal grid, FAQs (SSR template).

## LLM / chat appearance

- Static Saudi guides now expose concise **direct answers** and FAQ schema for citation-friendly snippets.
- React pages: `llm-access` already on indexable templates via `DocumentHead`.

## Post-deploy

1. `npm run indexnow:priority` (or batch URLs for the four paths above).
2. Re-run `node scripts/audit-thin-pages-bio448.mjs` — expect −3 thin URLs.
3. Continue backlog: AR insights stubs, `/zh/insights`, utility pages &lt;500 words.

## DEPLOY CHECKLIST

- `public/conf/physician-survey-saudi-arabia.html`
- `public/conf/sfda-market-access-strategy-saudi-arabia.html`
- `public/conf/kol-mapping-saudi-arabia-oncology.html`
- `src/data/specialtyMarketDemandContent.ts`
- `docs/seo/bio-448-thin-page-inventory.json` (refreshed)
- `docs/seo/bio-448-thin-page-inventory.csv` (refreshed)
- `reports/weekly-report-2026-10-13.md`
- `reports/weekly-report-2026-10-13.data.json`
- `docs/seo/website-audit-2026-10-13.md`
