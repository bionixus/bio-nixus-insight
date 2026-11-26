# BioNixus website SEO audit — 2026-11-25

**Automation:** Daily cron (impression / CTR / thin-page pass)

## GSC snapshot (`data/gsc/current-week/`)

| Metric | This week | Target | vs target | vs last week (2026-09-28) |
|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | +137 (4,448) |
| Clicks/day | **52** | 450 | −398 | +19 (33) |
| CTR | **1.13%** | 3.0% | −1.87 pp | +0.38 pp (0.75%) |
| Avg. position | **19.5** | 5.0 | +14.5 | ▲ +6.3 (was 25.8) |

Full scorecard: `reports/weekly-report-2026-11-25.md`.

### CTR diagnostics (structural)

- **United States:** 34.9% of impressions at **0.12% CTR** — largest single-country drag.
- **Ex-US:** 1.66% CTR; **mobile 2.63%** vs **desktop 0.74%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR**.
- **Page-1 gaps:** `fmcg` / `fmcg companies`, `companies like iqvia`, Dubai pharma variants — title/meta tests queued below.

## Production crawl (BIO-450, 2026-11-25)

| Check | Result |
|---|---|
| URLs audited | 678 |
| Thin pages (&lt;2,000 SSR words) | **305** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv`, `scripts/data/bio-450-thin-page-audit.json`.

**Priority thin cluster (legacy retail GCC):** `/retail-companies-{uae,saudi-arabia,egypt,kuwait,oman,qatar}` at ~690–860 words pre-fix.

**Near-threshold (quick +30w backlog):** `/turkey-healthcare-market-report`, `/brazil-healthcare-market-report`.

## Errors

- **404:** none in sitemap crawl.
- **SSR:** no new HTTP errors on audited URLs.

## Changes shipped this sprint (branch `cursor/bc-970c7289-410e-48f2-948d-d3a048335909-42c9`)

1. **GCC legacy retail directories** — `src/data/seo/retailLegacyDeepContent.ts` + merge in `adaptIndustryDirectory.ts`: four market-structure sections, fieldwork notes, regulator sources, and expanded FAQs per country (target ≥2,000 visible words post-deploy).
2. **CTR tests (GSC 2026-11-25)** — `/iqvia-alternative` title for “companies like iqvia”; `/fmcg-companies-uae` description for head `fmcg` queries (`lib/ctr-seo-overrides.mjs` + mirror).
3. **Weekly report** — `reports/weekly-report-2026-11-25.md` regenerated from current GSC export.

## Recommended next actions

1. Deploy → re-run `node scripts/audit-thin-pages-bio450.mjs` → confirm retail GCC pages ≥2,000 words.
2. `npm run indexnow:priority` for updated retail paths + `/iqvia-alternative`.
3. Near-threshold healthcare reports (+30w) and ~300 remaining thin service/therapy spokes.
4. Upload fresh GSC export weekly to `data/gsc/current-week/`.
5. US CTR drag: body copy on high-impression USA listicles, not meta-only.

## DEPLOY CHECKLIST

- `src/data/seo/retailLegacyDeepContent.ts`
- `src/data/companyDirectories/adaptIndustryDirectory.ts`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-11-25.md`
- `reports/weekly-report-2026-11-25.md`
- `scripts/data/bio-450-thin-page-audit.json` (regenerated crawl)
- `docs/seo/bio-450-thin-page-inventory.csv` (regenerated)