# Website SEO audit — 2026-09-15

**Branch:** `cursor/website-content-and-ranking-521f`  
**Production crawl:** `node scripts/audit-thin-pages-bio450.mjs` → https://www.bionixus.com  
**GSC data:** `data/gsc/current-week/` (report: `reports/weekly-report-2026-09-15.md`)

## Executive summary

| Metric | Value | vs 2026-09-14 |
|--------|-------|----------------|
| URLs audited | 657 | same methodology |
| Live pages | 657 | — |
| Thin pages (<2,000 words) | **347** | pre-deploy baseline |
| 404 errors | **0** | — |
| Fetch errors | **0** | — |

**SSR health:** No sitemap 404s. Indexable service/landing content is server-rendered in `<main>` (verified locally post-build for priority URLs below).

## GSC snapshot (current-week CSVs)

| Metric | This week | Target | vs last week |
|--------|-----------|--------|--------------|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02pp |
| Avg position | **25.8** | 5.0 | +2.6 (improved) |

**Structural CTR drags (unchanged themes):**

- United States: 33% of impressions @ **0.09% CTR**
- Desktop: 86% of impressions @ **0.50% CTR**
- Deep SERP: `/japan-medical-devices-market-report` — 2,511 impr, pos 44.3, 0.08% CTR
- **Winning cluster:** `/pharmaceutical-companies-*` — 1.60% CTR

**Page-1 queries with 0% CTR (snippet tests):** `iqvia competitors`, `febrile neutropenia market`, `gcc functional service providers market`, `gcc biologics market`, `heor consulting` (see weekly report table).

## Fixes applied this run

### P1 — Thin GSC priority landings (pre-deploy production: 549–918 words)

| URL | Prod words (2026-09-15 crawl) | Local SSR post-fix |
|-----|-------------------------------|-------------------|
| `/febrile-neutropenia-market` | 549 | **≥2,004** |
| `/gcc-functional-service-providers-market` | 719 | **≥2,001** |
| `/gcc-generic-pharmaceuticals-market` | 918 | **≥2,008** |

Content: expanded `src/data/specialtyMarketDemandContent.ts` and `src/data/gccSegmentMarketContent.ts` (research modules, structure narrative, country/signal grids, calendars, FAQs).

### P2 — CTR / LLM snippet alignment

- `/iqvia-alternative` static HTML meta aligned with `CTR_SEO_BY_PATH` — leads with “IQVIA competitors & companies like IQVIA”.
- New CTR override: `/gcc-generic-pharmaceuticals-market`
- Refined `/febrile-neutropenia-market` title/description in `src/server/ctr-seo-overrides.js`

## Remaining backlog

1. **~344** thin service/landing URLs still below 2,000 words on production (re-crawl after deploy).
2. **Near-threshold** (gap ≤150): batch from `scripts/data/bio-450-thin-page-audit.json` tail.
3. **USA CTR** — title/meta tests on high-impression US-facing pages; desktop snippet tests.
4. **Japan/GCC device reports** — depth OK on several URLs; position/CTR still diluted (content + internal links + recrawl).
5. Refresh GSC CSVs weekly into `data/gsc/current-week/`.

## Post-deploy

- `npm run indexnow:priority` — add this week’s URLs to `scripts/gsc-priority-recrawl.txt` Tier 1
- GSC URL Inspection on the three expanded landings + `/iqvia-alternative`

## DEPLOY CHECKLIST (files changed)

- `src/data/gccSegmentMarketContent.ts`
- `src/data/specialtyMarketDemandContent.ts`
- `src/server/ctr-seo-overrides.js`
- `public/conf/iqvia-alternative.html`
- `docs/seo/website-audit-2026-09-15.md`
- `reports/weekly-report-2026-09-15.md` (generated)
- `scripts/data/bio-450-thin-page-audit.json` (production crawl refresh)
