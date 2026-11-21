# BioNixus website SEO audit — 2026-11-21

## GSC snapshot (week in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | WoW |
|---|---|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | 52 | 450 | −398 | 33 | +19 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.37 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | ▲ +6.3 |

Full narrative: `reports/weekly-report-2026-11-21.md`.

### CTR / ranking highlights

- **US drag:** 34.9% of impressions, **0.12% CTR** — largest country-level snippet problem.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (619 clicks).
- **Page-1, 0% CTR queries:** `companies like iqvia` (pos 3.1, 64 impr), `iqvia alternatives` (pos 4.0), `looking for something better than iqvia` (pos 4.3) — all land on `/iqvia-alternative`.
- **Thin Arabic pharma spokes:** `/ar/pharmaceutical-companies-egypt` (690w, 31 impr), `/ar/pharmaceutical-companies-kuwait` (629w, 19 impr) — highest thin + impression combo.

## Production crawl (BIO-450, 2026-11-21T04:02Z)

| Check | Result |
|---|---|
| URLs audited | 678 |
| Thin pages (<2,000 SSR words) | **305** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv`, JSON: `scripts/data/bio-450-thin-page-audit.json`.

## Errors

- **404:** none in sitemap crawl.
- **Thin backlog:** ~300 URLs remain; prioritize GSC-impression × word-gap (Arabic pharma directories, near-2k country reports, India/Singapore devices).

## Changes shipped this run

1. **`/ar/pharmaceutical-companies-egypt` & `/ar/pharmaceutical-companies-kuwait`** — deep Arabic market sections, expanded company rows (Egypt), extra FAQs, `dateModified` 2026-11-21, CTR meta refresh (Egypt). Local SSR post-build: Egypt ~1,996 words, Kuwait ~1,853 (up from 690 / 629 on production).
2. **`/turkey-healthcare-market-report` & `/brazil-healthcare-market-report`** — executive summary + FAQ depth to cross 2,000-word threshold; schema `dateModified` updated.
3. **`/iqvia-alternative`** — title/meta iteration for “companies like IQVIA” / “IQVIA competitors” (title-freeze updated 2026-11-21).
4. **Sitemap** — `lastmod` on touched URLs.

## LLM / chat appearance

- Arabic directories now include structured long-form Arabic copy + FAQ for citation-friendly answers (EDA, MOH Kuwait, distributors, IQVIA complement positioning).
- IQVIA landing snippet names comparison intent explicitly for SERP and AI overview eligibility.

## Recommended next actions

1. Deploy + IndexNow touched URLs (`/iqvia-alternative`, AR Egypt/Kuwait pharma, TR/BR healthcare reports).
2. Re-crawl post-deploy; target next: `/ar/pharmaceutical-companies-saudi-arabia`, retail-companies spokes, India/Singapore devices.
3. US desktop CTR: body tests on FMCG/listicle pages (not meta-only).
4. Upload fresh GSC weekly export to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/arPharmaDirectories.ts`
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `data/seo/title-freeze.json`
- `scripts/generate-sitemap.mjs`
- `docs/seo/website-audit-2026-11-21.md`
- `reports/weekly-report-2026-11-21.md`
- `scripts/data/bio-450-thin-page-audit.json` (regenerated pre-fix baseline)