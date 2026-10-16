# BioNixus website SEO audit — 2026-10-07

## GSC snapshot (week in `data/gsc/current-week/`)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 |
| Clicks/day | 52 | 450 | −398 |
| CTR | **1.13%** | 3.0% | −1.87 pp |
| Avg. position | **19.5** | 5.0 | +14.5 |

Week-over-week: impressions +137/day, clicks +18/day, CTR +0.37 pp, position improved ~6.3 places vs prior week (25.8 → 19.5).

### CTR diagnostics

- **United States:** ~35% of impressions at **0.12% CTR** — largest single-country drag.
- **Excl. US:** **1.66% CTR** on non-US impressions.
- **Desktop:** 0.74% CTR (~80% of device impressions); **mobile 2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (27,999 impr).
- **Insights listicles:** 0.84% CTR (12,011 impr).
- **Deep SERP bucket:** pages with position &gt;40 and ≥200 impr — 0.16% CTR (27,726 impr).
- **Money queries (page-1, low CTR):** `companies like iqvia` (pos 3.1, 64 impr, 0% CTR), `best services for pharmaceutical market access besides iqvia` (pos 4.1), `which firms specialize in healthcare technology market research?` (pos 3.8).

Full tables: `reports/weekly-report-2026-10-07.md`.

## Production crawl (BIO-448, 2026-10-07)

| Check | Result |
|---|---|
| URLs audited | 937 |
| Thin pages (&lt;2,000 visible words in `<main>`) | **479** |
| HTTP 404 | **0** |
| Fetch errors | **0** |
| Pass (≥2,000 words) | **458** |

Inventory: `docs/seo/bio-448-thin-page-inventory.csv` / `.json`.

### Notable thin patterns

- **Arabic blog stubs** (`/ar/blog/*`) — ~13–24 words (SSR shell without body; Sanity/content pipeline).
- **Utility routes** (`/media`, `/videos`, `/templates/*`) — excluded from BIO-448 service scope but thin if indexed.
- **P0 BOFU gap:** `/real-world-evidence` at **~1,057 words** on production (hub below 2,000-word standard).

Near-threshold English pages (quick wins): `/pharmaceutical-companies-brazil` (1996w), `/insights/top-market-research-companies-denmark-2026` (1998w).

## Errors

- **404:** none in sitemap crawl.
- **Previously flagged ROUTE_MISSING URLs** (brand tracking, patient journey GCC, etc.) now return **200** on production.

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-3eeb`)

1. **`/real-world-evidence`** — migrated to `StrategicServicePage` + `serviceLandingContent` expansion (HTA/EU/UK/MENA RWE modules, LLM answer block, country spokes).
2. **CTR iteration** — `/iqvia-alternative` static conf HTML + CTR overrides aligned to “companies like IQVIA” / “IQVIA competitors” queries; `/real-world-evidence` SSR meta override.
3. **Near-threshold content** — Brazil pharma directory methodology paragraph; Denmark 2026 listicle ranking methodology section.
4. **Regenerated** — `reports/weekly-report-2026-10-07.md`, BIO-448 production inventory.

## LLM / chat appearance

- RWE hub now includes `GeoLLMAnswerBlock`-style answer-first copy via `StrategicServicePage` `answerBlock`.
- Continue IndexNow on priority URLs after deploy; refresh `npm run aeo:track` baseline post-deploy.

## Recommended next actions

1. **Deploy** and run `npm run indexnow:priority`.
2. Re-crawl: `node scripts/audit-thin-pages-bio448.mjs` — confirm `/real-world-evidence` ≥2,000w.
3. **US CTR:** body copy tests on USA listicles and IQVIA comparison pages (meta-only insufficient for 0.12% US CTR).
4. **Arabic blog stubs:** fix Sanity SSR body injection or noindex until content ships.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/serviceLandingContent.ts`
- `src/pages/RealWorldEvidence.tsx`
- `src/pages/BrazilPharmaCompanies.tsx`
- `src/pages/TopMarketResearchCompaniesDenmark2026.tsx`
- `src/server/ctr-seo-overrides.js`
- `lib/ctr-seo-overrides.mjs`
- `public/conf/iqvia-alternative.html`
- `server.js`
- `scripts/verify-ssr-bundle.mjs`
- `docs/seo/bio-448-thin-page-inventory.csv`
- `docs/seo/bio-448-thin-page-inventory.json`
- `docs/seo/website-audit-2026-10-07.md`
- `reports/weekly-report-2026-10-07.md`
