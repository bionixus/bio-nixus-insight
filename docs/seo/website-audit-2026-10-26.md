# BioNixus website SEO audit — 2026-10-26

## GSC snapshot (week ending import in `data/gsc/current-week/`)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | **4,585** | 15,000 | −10,415 |
| Clicks/day | **52** | 450 | −398 |
| CTR | **1.13%** | 3.0% | −1.87 pp |
| Avg. position | **19.5** | 5.0 | +14.5 |

**Week-on-week:** impressions +137/day, clicks +19/day, CTR +0.37 pp, position improved ~6.3 places vs prior week.

### CTR diagnostics

- **United States:** ~35% of impressions at **0.12% CTR** — largest single-country drag; fix body copy and landing relevance (not title-only on frozen URLs).
- **Desktop:** 0.74% CTR on ~80% of device impressions; **mobile 2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR**.
- **Page-1 CTR gaps:** `companies like iqvia` (pos ~3.1, 0% CTR), `looking for something better than iqvia`, `gcc biologics market`, UAE/Dubai pharma company queries — improve body + internal links; `/iqvia-alternative` title frozen until 2026-12-12.
- Full narrative: `reports/weekly-report-2026-10-26.md`.

## Production crawl (BIO-449 runbook, 2026-10-26)

| Check | Result |
|---|---|
| Service/landing URLs audited | **713** |
| Thin pages (&lt;2,000 visible words) | **333** (was 347 on 2026-09-28) |
| HTTP 404 in sitemap scope | **0** |
| Sitewide phase-2 audit | **1,317** URLs — PASS 1,286 / MINOR 26 / **MAJOR 5** |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv`, JSON `scripts/data/bio-449-thin-page-audit.json`.

**MAJOR issues (5):** missing H1 on `/de/blog/*` (4) and `/fr/blog/etudes-marche-pharmaceutique-france-2026` — root cause: locale blog posts were not hydrated in SSR (`fetchRouteData`); fixed this sprint.

## Errors

- **404:** none in production thin-page crawl.
- **SSR:** locale-prefixed blog posts (`/de/blog/:slug`, `/fr/blog/:slug`, `/zh/blog/:slug`) previously rendered thin generic HTML without H1; patched in `fetchRouteData.ts`.

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-2e7c`)

1. **SSR blog fix** — locale blog slugs fetch Sanity/hardcoded post data like `/blog/:slug`.
2. **Developed-market healthcare depth** — reusable `CountryHealthcareMarketDepthSection` for Netherlands, Spain, Canada, Sweden, Turkey, Poland (payer sequencing, LLM-visible methodology).
3. **Therapy hubs** — premium depth sections for cardiovascular, neurology-CNS, digital health, dermatology (2,000-word threshold + AI citation).
4. **Reports** — `reports/weekly-report-2026-10-26.md`; refreshed `docs/seo/sitewide-audit-phase2.md`.

## Recommended next actions

1. Deploy; `npm run indexnow:priority`; re-crawl thin inventory (target &lt;280 thin).
2. Continue developed-market healthcare backlog (Ireland, Australia, USA, Japan, Italy, China, NZ, Bahrain).
3. US CTR: deepen USA listicle body modules; reduce US impression share drag.
4. Remaining thin locale hubs (`/ar/strategic-portfolio`, `/zh/methodology`, etc.) — separate locale sprint.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/fetchRouteData.ts`
- `src/data/seo/countryHealthcareMarketDepth.ts`
- `src/components/seo/CountryHealthcareMarketDepthSection.tsx`
- `src/pages/HealthcareMarketResearchNetherlands.tsx`
- `src/pages/HealthcareMarketResearchSpain.tsx`
- `src/pages/HealthcareMarketResearchCanada.tsx`
- `src/pages/HealthcareMarketResearchSweden.tsx`
- `src/pages/HealthcareMarketResearchTurkey.tsx`
- `src/pages/HealthcareMarketResearchPoland.tsx`
- `src/pages/healthcare-research/TherapyPage.tsx`
- `docs/seo/website-audit-2026-10-26.md`
- `reports/weekly-report-2026-10-26.md`
- `docs/seo/bio-449-thin-page-inventory.csv`
- `scripts/data/bio-449-thin-page-audit.json`
