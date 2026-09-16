# Website SEO audit — 2026-09-16 (cron)

## GSC performance (week ending 2026-09-16)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02 pp |
| Avg position | **25.8** | 5.0 | +2.6 (improved) |

Full narrative: `reports/weekly-report-2026-09-16.md`.

### CTR structural drag

- **United States:** 33% of impressions, **0.09% CTR** — largest single-country drag.
- **Desktop:** 86% of device impressions, **0.50% CTR** vs mobile **2.23%**.
- **Deep SERP:** pages with position >40 and ≥200 impressions: **0.10% CTR** on 11,559 impressions.
- **Japan medical devices report:** 2,511 impressions, position ~44, **0.08% CTR**.
- **Winning cluster:** `/pharmaceutical-companies-*` — **1.60% CTR** (140 clicks / 8,756 impr).

### Page-1 queries with 0% CTR (priority snippet tests)

Includes: `iqvia competitors`, `febrile neutropenia market`, `gcc functional service providers market`, `gcc biologics market`, Dubai pharma company intents, Egypt company queries.

## Production crawl (2026-09-16)

| Check | Result |
|---|---|
| URLs audited (service landings) | 697 |
| Thin pages (&lt;2,000 words in `<main>`) | **376** |
| 404s in sitemap crawl | **0** |
| Sitewide phase-2 audit | 1,278 URLs — **8 MAJOR**, 26 MINOR |

Inventory: `docs/seo/bio-449-thin-page-inventory.csv`  
Sitewide: `docs/seo/sitewide-audit-phase2.md`

### MAJOR technical issues (sample)

- DE/FR blog posts: **missing H1** in rendered HTML (6 URLs).
- `/videos/*`: **missing H1** and ~7 visible words in crawl — SSR/route gap; `VideoWatchPage` has H1 in React but production HTML is thin (follow-up).

## Content shipped this run (≥2,000 SSR words verified locally)

| URL | Production words (before) | Local SSR `<main>` (after) |
|---|---|---|
| `/febrile-neutropenia-market` | 549 | 2,003 |
| `/gcc-functional-service-providers-market` | 719 | 2,014 |
| `/gcc-generic-pharmaceuticals-market` | 918 | 2,000 |

CTR meta (server overrides): research-led titles for febrile neutropenia and GCC FSP (less fabricated “market size” framing).

## LLM / chat appearance (AEO)

- Org + Service + FAQ JSON-LD on expanded landings via existing templates.
- `llm-access: allow` present on crawled pages.
- Continue `npm run aeo:track` / `npm run aeo:report` for citation monitoring.

## Recommended next actions

1. **Deploy** this branch; re-crawl production — expect thin count **−3** on priority GSC URLs.
2. **`npm run indexnow:priority`** after deploy for the three URLs above.
3. **USA desktop CTR:** title/meta tests on `/iqvia-alternative` and top US landing pages (already 4,122 words; fix snippet intent vs “competitors” query).
4. **Thin backlog:** 373 remaining service landings — batch near-threshold (1,850–1,999w) and GSC page-1 zero-CTR URLs.
5. **Video SSR:** ensure `/videos/:slug` renders full `<main>` on server (SEO + thin fix).
6. Refresh `data/gsc/current-week/*.csv` before next weekly cron.

## DEPLOY CHECKLIST (files changed)

- `src/data/specialtyMarketDemandContent.ts`
- `src/data/gccSegmentMarketContent.ts`
- `src/server/ctr-seo-overrides.js`
- `docs/seo/website-audit-2026-09-16.md`
- `reports/weekly-report-2026-09-16.md` (+ `.data.json`)
- `docs/seo/bio-449-thin-page-inventory.csv` (crawl output)
- `docs/seo/sitewide-audit-phase2.md` (+ `scripts/data/*.json`)
