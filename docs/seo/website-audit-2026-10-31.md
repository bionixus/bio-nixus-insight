# BioNixus website audit — 2026-10-31

## Google Search Console snapshot (weekly export)

| Metric | This week | Target | Gap |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 |
| Clicks/day | 52 | 450 | −398 |
| CTR | 1.13% | 3.0% | −1.87 pp |
| Avg. position | 19.5 | 5.0 | +14.5 vs target |

**Week-on-week:** impressions +137/day, clicks +19/day, CTR +0.38 pp, position improved ~6.3 places vs prior week.

Full narrative: `reports/weekly-report-2026-10-31.md`.

### CTR structural diagnosis

| Slice | CTR | Action |
|---|---|---|
| United States only | 0.12% (34.9% of impressions) | Depth + SERP snippet tests on US BOFU pages; respect title freeze on IQVIA cluster until 2026-12-12 |
| Mobile | 2.63% | Protect mobile LCP/INP; expand winning clusters |
| Desktop | 0.74% | Desktop CWV audit (`npm run audit:desktop`) |
| `/pharmaceutical-companies-*` | 2.21% | Continue directory matrix; internal links from thin spokes |
| Page-1 queries &lt;1.5% CTR | 80+ queries | See weekly report table — prioritize IQVIA, Dubai pharma, Japan disposables, Italy POCT, GCC medication management |

### Page-1 zero-CTR queries addressed this sprint

| Query (pos) | Landing page | Change |
|---|---|---|
| japan medical disposables market (8.7) | `/japan-medical-disposables-market` | Geo answer block + ~2k-word expanded module |
| italy portable diagnostic devices market (6.3) | `/italy-portable-diagnostic-devices-market` | Geo answer block + expanded module |
| gcc medication management market (5.0) | `/gcc-medication-management-market` | Geo answer block + expanded module |
| companies like iqvia (3.1) | `/iqvia-alternative` | Existing static BOFU page — title freeze; monitor CTR |

## Production crawl (thin / 404)

**Note:** Cloud agent egress to `www.bionixus.com` returned HTTP **402 Deployment Paused** on 2026-10-31; live word counts were **not** refreshed in `bio-449-thin-page-audit.json`. Last trusted production crawl in repo: **2026-06-18** (271 URLs, **183 thin**, **9×404**).

**404 fixes already in codebase (routes present):** e.g. `/brand-tracking-pharma-gcc`, `/commercial-effectiveness-pharma-middle-east`, `/healthcare-fieldwork-gcc` — verify on deploy with `node scripts/bio-449-thin-page-audit.mjs`.

**Local SSR verification (post-build):** run `node scripts/verify-specialty-ssr-word-count.mjs` after `npm run build`.

## LLM / chat visibility

- Added `GeoLLMAnswerBlock` + `data-geo-answer="true"` on three GSC priority specialty pages.
- Updated `public/llms.txt` with links to Japan disposables, Italy portable diagnostics, and GCC medication management.
- IQVIA intent continues to route to `/iqvia-alternative` (Express static SSR).

## Recommended next actions

1. **Deploy** this branch; run `npm run indexnow:priority` for the three specialty URLs.
2. **Re-crawl production** when site is reachable (not 402) — target &lt;300 thin service URLs.
3. **US CTR** — expand account-level BOFU copy; no IQVIA title changes before 2026-12-12.
4. **Directory matrix** — continue pharmaceutical-companies cluster cross-links (`npm run report:directory-gates`).

## DEPLOY CHECKLIST (this change)

- `src/data/specialtyMarketDemandContent.ts`
- `src/data/specialtyMarketDemandExpanded.ts` (new)
- `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- `src/components/seo/GeoLLMAnswerBlock.tsx`
- `public/llms.txt`
- `docs/seo/website-audit-2026-10-31.md`
- `reports/weekly-report-2026-10-31.md` (generated)
