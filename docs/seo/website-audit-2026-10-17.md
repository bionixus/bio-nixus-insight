# BioNixus website SEO audit — 2026-10-17

## GSC snapshot (week ending import in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | vs last week |
|---|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 | +137 |
| Clicks/day | 52 | 450 | −398 | +19 |
| CTR | **1.13%** | 3.0% | −1.87 pp | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | ▲ +6.3 (improved) |

### CTR diagnostics

- **United States:** 34.9% of impressions at **0.12% CTR** — largest single-country drag.
- **Excl. US:** **1.66% CTR** on non-US traffic.
- **Desktop:** 0.74% CTR (80% of device impressions); **mobile 2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (27,999 impr).
- **Page-1 zero-CTR:** `companies like iqvia` (pos 3.1), `looking for something better than iqvia`, FMCG head terms, Dubai pharma variants — needs answer-first body copy on landing pages (title freeze applies to many URLs).

Full narrative: `reports/weekly-report-2026-10-17.md`.

## Production crawl (BIO-450, 2026-10-17)

| Check | Result |
|---|---|
| URLs audited | 664 |
| Thin pages (&lt;2,000 visible words) | **307** (was 347 on 2026-09-28) |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv`.

**Pre-deploy gap (production crawl today):** Arabic pharma directories were ~600–690 words live. **Local SSR post-build:** KSA/UAE/Kuwait/Egypt all **≥2,000 words** (see `ssr-wordcount-2026-10-17.txt` artifact).

## LLM / chat visibility

- Arabic pharma directories: **GeoLLMAnswerBlock** + regulatory/channel narrative + fieldwork notes (per country).
- `/healthcare-market-statistics`: regulatory region + expanded FAQ (from prior sprint, `dateModified` 2026-10-17).
- Brazil healthcare report: GeoLLM citation block (prior sprint).

## Changes shipped this sprint (branch `cursor/website-content-and-ranking-6fb9`)

1. **Cherry-pick / complete 2026-10-16 batch** — `arPharmaDirectoryExpansion.ts`, enriched `ArPharmaCompaniesDirectoryPage`, stats hub, Brazil report GeoLLM, Italy touch-up.
2. **`AR_PHARMA_CONTENT_MODIFIED`** → 2026-10-17 for schema/sitemap freshness.
3. **PT Brazil listicle** — one sentence over 2,000-word SSR threshold (`/pt/insights/top-market-research-companies-brasil-2026`).
4. **Weekly report** — `reports/weekly-report-2026-10-17.md`.

## Recommended next actions

1. Deploy; `npm run indexnow:priority`; re-crawl BIO-450 and confirm AR pharma dirs ≥2,000w.
2. Thin backlog ~300 — near-threshold country MR pages (1,800–1,999w) and `/services` scope pages.
3. US CTR: body copy on USA listicle and homepage value prop (not meta-only).
4. IQVIA cluster: strengthen visible answer copy on `/iqvia-alternative` static page + `/iqvia-alternative-saudi-arabia` for zero-CTR page-1 queries.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `src/data/arPharmaDirectories.ts`
- `src/data/arPharmaDirectoryExpansion.ts`
- `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- `src/data/healthcareMarketStatistics.ts`
- `src/pages/HealthcareMarketStatistics.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/HealthcareMarketResearchItaly.tsx`
- `src/pages/PtTopMarketResearchCompaniesBrazil2026.tsx`
- `scripts/gsc-priority-recrawl.txt`
- `docs/seo/website-audit-2026-10-17.md`
- `reports/weekly-report-2026-10-17.md`
- `scripts/data/bio-450-thin-page-audit.json` (regenerated crawl baseline)
