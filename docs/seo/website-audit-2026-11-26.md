# BioNixus website SEO audit — 2026-11-26

**Automation:** Daily cron (impression / CTR / thin-page pass)

## GSC snapshot (`data/gsc/current-week/`)

| Metric | This week | Target | vs target | vs last week (2026-11-25) |
|---|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 | +137 |
| Clicks/day | **52** | 450 | −398 | +19 |
| CTR | **1.13%** | 3.0% | −1.87 pp | flat |
| Avg. position | **19.5** | 5.0 | +14.5 | flat |

Full scorecard: `reports/weekly-report-2026-11-26.md`.

### CTR diagnostics (structural)

- **United States:** 34.9% of impressions at **0.12% CTR** — largest single-country drag.
- **Ex-US:** 1.66% CTR; **mobile 2.63%** vs **desktop 0.74%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR**.
- **Page-1 gaps:** `fmcg` / `fmcg companies` (pos 4–7, CTR under 1.5%), `companies like iqvia`, Dubai pharma variants.

### LLM / chat appearance

- Answer-first blocks on `/iqvia-alternative` and deep GCC **retail + FMCG** directories (≥2,000 SSR words) improve citation of named banners and manufacturers.
- `public/llms-full.txt` unchanged this run; quarterly refresh per `docs/seo/quarterly-geo-content-refresh-checklist.md`.

## Production crawl (BIO-450, 2026-11-26)

| Check | Result |
|---|---|
| URLs audited | 678 |
| Thin pages (&lt;2,000 SSR words) | **305** (pre-code crawl) |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv`, `scripts/data/bio-450-thin-page-audit.json`.

**Priority thin cluster (legacy FMCG GCC):** `/fmcg-companies-{egypt,uae,saudi-arabia,kuwait,oman,qatar}` at ~1,300–1,500 words pre-fix.

**Near-threshold:** `/turkey-healthcare-market-report`, `/brazil-healthcare-market-report` (+30w executive copy).

## Errors

- **404:** none in sitemap crawl.
- **SSR:** no new HTTP errors on audited URLs.

## Changes shipped this sprint

1. **Cherry-picked 2026-11-25 retail pass** — `retailLegacyDeepContent.ts` (GCC retail directories ≥2,000w target).
2. **GCC legacy FMCG directories** — `src/data/seo/fmcgLegacyDeepContent.ts` + merge in `adaptIndustryDirectory.ts`.
3. **Near-threshold healthcare reports** — Turkey & Brazil executive-summary paragraphs.
4. **CTR tests** — FMCG Egypt/KSA/UAE meta titles; `/iqvia-alternative` title for “companies like iqvia”.
5. **Weekly report** — `reports/weekly-report-2026-11-26.md`.

## Recommended next actions

1. Deploy → re-run `node scripts/audit-thin-pages-bio450.mjs` → confirm retail + FMCG GCC pages ≥2,000 words.
2. IndexNow: FMCG GCC paths + retail GCC + `/iqvia-alternative`.
3. ~300 remaining thin therapy hubs, `/ru/services`, locale insights listicles.
4. US CTR drag: body copy on high-impression USA listicles.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/seo/fmcgLegacyDeepContent.ts`
- `src/data/seo/retailLegacyDeepContent.ts`
- `src/data/companyDirectories/adaptIndustryDirectory.ts`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-11-26.md`
- `reports/weekly-report-2026-11-26.md`