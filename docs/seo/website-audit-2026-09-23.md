# BioNixus sitewide SEO audit — 2026-09-23

## GSC performance (week ending 2026-09-23)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02 pp |
| Avg. position | **25.8** | 5.0 | +2.6 (improved) |

### CTR diagnostics

- **US drag:** 33% of impressions, **0.09% CTR** (ex-US CTR 1.08%).
- **Desktop drag:** 86% of device impressions @ 0.50% CTR; mobile 2.23%.
- **Winning cluster:** `/pharmaceutical-companies-*` @ **1.60% CTR**.
- **High-impression underperformers:** `/japan-medical-devices-market-report` (2,511 impr, 0.08% CTR, pos 44).

Full scorecard: `reports/weekly-report-2026-09-23.md`.

## Technical crawl (production, 2026-09-23)

| Check | Result |
|---|---|
| Sitemap URLs audited | 657 |
| HTTP 404 in sitemap | **0** |
| Crawl errors | **0** |
| Thin pages (&lt;2,000 SSR words, service/landing scope) | **347** |
| Healthcare-MR thin | 29 |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv`, `scripts/data/bio-450-thin-page-audit.json`.

## Shipped this run (branch `cursor/website-content-and-ranking-e56e`)

1. **CTR overrides** — Dubai pharma directory (“Top … Ranked”), Saudi biologics, Dubai MR BOFU (`lib/ctr-seo-overrides.mjs` + `src/server/ctr-seo-overrides.js`).
2. **Content depth** — `/services` hub (+3 FAQs, **2,057w** main SSR), all developed-market MedTech pages (+GCC bridge paragraph), febrile neutropenia + GCC FSP specialty pages (`guideSections` template, **≥2,008w** main SSR each), `/healthcare-market-research/therapy/biosimilars` (**2,340w** SSR).
3. **LLM / GEO** — `public/llms.txt` refresh (biosimilars hub, FN, FSP links).

## Next-week priorities

1. Deploy + `npm run indexnow:priority`.
2. US desktop title/meta tests on `/iqvia-alternative` and `/healthcare-market-research-companies` (0.09% US CTR).
3. Thin backlog: pharma directory spokes still 1,850–1,980w; localized `/ar/services`, `/ru/services`.
4. Directory matrix indexation: waves 1–5 still 0% URLs in GSC Pages.csv — internal links + Inspection.
5. Japan/GCC device reports: position recovery content (queries declined week-on-week) — avoid URL changes.

## DEPLOY CHECKLIST

- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `src/data/servicesHubContent.ts`
- `src/data/developedMarketMedtechPages.ts`
- `src/data/specialtyMarketDemandContent.ts`
- `src/pages/healthcare-research/TherapyPage.tsx`
- `public/llms.txt`
- `docs/seo/website-audit-2026-09-23.md`
- `reports/weekly-report-2026-09-23.md` (+ `.data.json`)
