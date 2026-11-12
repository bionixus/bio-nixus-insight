# BioNixus website audit — 2026-11-12 (cron)

## GSC snapshot (repo `data/gsc/current-week/` — upload fresh export when available)

| Metric | Value | Target | Notes |
|--------|-------|--------|-------|
| Impressions/day | 4,585 | 15,000 | Flat vs prior window (+137/day) |
| Clicks/day | 52 | 450 | +19/day vs prior |
| CTR | 1.13% | 3.0% | Excl. bot line 1.18% |
| Avg position | 19.5 | 5.0 | Improved ~6.3 pts vs prior week |

Full narrative: `reports/weekly-report-2026-11-12.md`.

### CTR diagnostics (structural)

- **United States:** 34.9% of impressions at **0.12% CTR** — largest drag.
- **Desktop:** 0.74% CTR vs **mobile 2.63%** — title/meta and body mismatch on desktop SERPs.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR**.
- **Money queries (page 1, &lt;1.5% CTR):** `fmcg`, `companies like iqvia`, `pharmaceutical companies in dubai`, `medical companies in uae`, etc. — see weekly report table.

### LLM / GEO

- Run `npm run aeo:track` when API keys are set; baseline answers should cite `/iqvia-alternative`, `/pharmaceutical-companies-*`, and hub `/healthcare-market-research`.
- This sprint: expanded `/healthcare-market-statistics` with FAQ + Dataset citation guidance for AI engines.

## Production crawl (`node scripts/bio-449-thin-page-audit.mjs`)

| Check | Result |
|-------|--------|
| URLs audited (service/landing) | 715 |
| Thin (&lt;2,000 words in `<main>`) | **331** (+26 vs 2026-11-11 memory) |
| HTTP 404 in sitemap scope | **0** |
| Thin clusters | standalone 281, healthcare-hub 27, ar-localized 23 |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv` · JSON: `scripts/data/bio-449-thin-page-audit.json`.

### Priority thin URLs (GSC impressions × thin)

1. `/brazil-healthcare-market-report` — 1,970w, 1,554 impr
2. `/india-medical-devices-market-report` — 1,696w, 1,143 impr
3. `/healthcare-market-statistics` — 1,652w, 956 impr
4. `/ar/pharmaceutical-companies-egypt` — **690w**, 547 impr, **31 clicks** (P0)
5. `/ar/pharmaceutical-companies-kuwait` — **629w**, 276 impr, 19 clicks

## Technical / SEO errors

| Issue | Severity | Action this run |
|-------|----------|-----------------|
| `/de/`, `/es/` trailing slash → 301 to `/de`, `/es` | Minor | Fixed `npm run seo:check` to probe canonical paths (not a prod bug) |
| 331 thin service/landing pages | Major backlog | Expanded AR Egypt + Kuwait directories; Brazil healthcare report; statistics hub |
| GSC `current-week` dated Aug–Sep 2026 in repo | Ops | **Upload fresh 7-day GSC export** to `data/gsc/current-week/` |
| No `data/leads/leads.csv` | Reporting | Weekly report missing leads section |

## Shipped in this audit branch

- `src/data/arPharmaDirectories.ts` — long-form Arabic `editorialSections` for Egypt & Kuwait; `dateModified` 2026-11-12.
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx` — render editorial sections + jump nav.
- `src/pages/BrazilHealthcareMarketReport.tsx` — depth + schema `dateModified`.
- `src/pages/HealthcareMarketStatistics.tsx` — usage guide, FAQ (`<details>`), FAQPage schema, dateModified.
- `scripts/seo-hard-check.mjs` — locale root URLs without trailing slash.
- `reports/weekly-report-2026-11-12.md` (generated).

## Deploy checklist

- [ ] Merge & deploy branch
- [ ] `npm run indexnow:priority` for changed URLs
- [ ] Re-crawl thin count post-deploy (expect Egypt/Kuwait AR + Brazil + statistics ≥2,000w)
- [ ] Upload fresh GSC CSVs; re-run `npm run report:weekly`
- [ ] Next cron batch: India/Singapore device reports + `retail-companies-saudi-arabia` (GSC thin + impr)

## DEPLOY CHECKLIST (files changed)

- `src/data/arPharmaDirectories.ts`
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/data/healthcareMarketStatistics.ts`
- `src/pages/HealthcareMarketStatistics.tsx`
- `scripts/seo-hard-check.mjs`
- `docs/seo/website-audit-2026-11-12.md`
- `docs/seo/bio-449-thin-page-inventory.csv`
- `scripts/data/bio-449-thin-page-audit.json`
- `reports/weekly-report-2026-11-12.md`
- `reports/weekly-report-2026-11-12.data.json`
