# Website SEO audit — 2026-11-19

## GSC snapshot (7-day, export in `docs/seo/exports/`)

| Metric | This week | Target | vs last week |
|--------|-----------|--------|--------------|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +18 |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg position | 19.5 | 5.0 | +6.3 (improved) |

Full scorecard: `reports/weekly-report-2026-11-19.md`.

### CTR diagnostics

- **US desktop drag:** United States = 34.9% of impressions at **0.12% CTR**; desktop overall **0.74% CTR** vs mobile **2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (pos ~6–12).
- **Page-1 zero-CTR money queries:** `companies like iqvia` (pos 3.1), `iqvia alternatives` (pos 4.0), `best services for pharmaceutical market access besides iqvia` (pos 4.1), broad `fmcg` / `fmcg companies` (pos 4.7–6.4).

### LLM / chat discoverability

- `public/llms.txt` refreshed **2026-11-19**; IQVIA entry aligned to “companies like IQVIA” intent.
- Static `/iqvia-alternative` FAQ (13 Q&A) + Organization/Service JSON-LD unchanged in structure.

## Production crawl (`node scripts/audit-thin-pages-bio450.mjs`)

| Check | Result |
|-------|--------|
| URLs audited | 678 |
| HTTP errors | 0 |
| 404 | 0 |
| Thin (&lt;2,000 SSR words) | **305** |
| `healthcare-market-research` thin subpages | 27 |

Near-threshold examples (pre-deploy): Turkey healthcare report **1,973w**, Brazil **1,970w**, Germany med devices **1,935w**, US healthcare MR **1,800w**.

## Shipped in this run (pending deploy)

1. **CTR:** `/iqvia-alternative` title/meta → “Companies Like IQVIA: Alternatives (2026)” + static HTML + `title-freeze.json` + CTR mirrors.
2. **Thin-page expansion (5 URLs):** added FAQs and executive copy on Turkey/Brazil healthcare reports, Germany med devices report, `/healthcare-market-research-usa`.
3. **Sitemap:** `lastmod` for `/iqvia-alternative` → 2026-11-19.

## Recommended next sprint

1. Deploy; IndexNow `/iqvia-alternative` + expanded report URLs.
2. Re-crawl thin inventory — target **&lt;295** thin pages.
3. FMCG hub CTR test (page-1 queries with &lt;1.5% CTR).
4. Upload fresh GSC export weekly; track US desktop CTR after USA hub copy.
5. Continue P0 thin batch from `docs/seo/bio-450-thin-page-inventory.csv` (gap &gt;500 words first).

## DEPLOY CHECKLIST

- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `data/seo/title-freeze.json`
- `public/conf/iqvia-alternative.html`
- `public/llms.txt`
- `scripts/generate-sitemap.mjs`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/GermanyMedicalDevicesMarketReport.tsx`
- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/lib/seo/__tests__/gsc-oct-2026-buyer-ctr.test.ts`
- `docs/seo/website-audit-2026-11-19.md`
- `reports/weekly-report-2026-11-19.md` (generated, commit if not gitignored)