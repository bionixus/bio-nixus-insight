# BioNixus website audit — 2026-10-18

## GSC performance (week ending 2026-10-18)

| Metric | This week | Target | vs last week |
|--------|-----------|--------|--------------|
| Impressions/day | 4,585 | 15,000 | +137 |
| Clicks/day | 52 | 450 | +18 |
| CTR | 1.13% | 3.0% | +0.37 pp |
| Avg. position | 19.5 | 5.0 | +6.3 (improved) |

Source: `data/gsc/current-week/*.csv` via `node scripts/gsc-weekly-report.mjs` → `reports/weekly-report-2026-10-18.md`.

### CTR diagnostics

- **US drag:** 34.9% of impressions, **0.12% CTR** (ex-US CTR 1.66%).
- **Desktop drag:** 80% of device impressions at **0.74% CTR** (mobile 2.63%).
- **Winning cluster:** `/pharmaceutical-companies-*` — 2.21% CTR, 28k impressions/week.
- **Money page:** `/iqvia-alternative` — 50 clicks/week, pos ~5.5; page-1 queries `companies like iqvia`, `iqvia alternatives` still **0% CTR** → meta + answer-block refresh shipped 2026-10-18.
- **Deep SERP dilution:** Pages pos >40 with ≥200 impr — 0.16% CTR (27.7k impr).

## Production crawl (BIO-450)

| Check | Result |
|-------|--------|
| URLs audited | 668 |
| HTTP 404 | **0** |
| Fetch errors | **0** |
| Thin (&lt;2,000 SSR words) | **306** |

Artifact: `scripts/data/bio-450-thin-page-audit.json`, `docs/seo/bio-450-thin-page-inventory.csv`.

## Shipped this run (2026-10-18)

| URL / area | Action |
|------------|--------|
| `/turkey-healthcare-market-report`, `/brazil-healthcare-market-report` | Major-hospital intelligence blocks + executive copy; `dateModified` 2026-10-18 |
| `/healthcare-market-research-italy` | +FAQ (budgeting / scope) |
| `/pharmaceutical-companies-singapore` | +2 market-overview paragraphs (ALPS, ASEAN springboard) |
| `/singapore-medtech-manufacturing-market` | Expanded intro, topics, structure, FAQs (~870w gap closed in code) |
| `/healthcare-market-research-usa` | +US market context section (Medicare Advantage, PBM/IDN) |
| `/iqvia-alternative` | Meta description + LLM answer block + `ItemList` JSON-LD; title frozen per `title-freeze.json` |

## LLM / chat visibility

- FAQ and `GeoLLMAnswerBlock` patterns already on country service pages; IQVIA static page now leads with explicit **Short answer** for “companies like IQVIA”.
- Organization schema on IQVIA page already lists `knowsAbout` and global offices — no change required.

## Next sprint (priority order)

1. **Deploy** + `npm run indexnow:priority` for URLs above.
2. **Thin backlog:** 306 URLs — focus next on `/healthcare-market-research-usa`, therapy spokes 1,800–1,900w, and device reports with GSC impressions.
3. **US CTR:** Title/meta tests on high-impression US landing pages; desktop CWV audit (`npm run audit:desktop`).
4. **Re-crawl BIO-450** post-deploy to verify word-count PASS on touched URLs.

## DEPLOY CHECKLIST

- `src/data/marketIntelligence/americas.ts`
- `src/data/marketIntelligence/mena.ts`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/HealthcareMarketResearchItaly.tsx`
- `src/pages/HealthcareMarketResearchUsa.tsx`
- `src/pages/SingaporePharmaCompanies.tsx`
- `src/data/specialtyMarketDemandContent.ts`
- `public/conf/iqvia-alternative.html`
- `src/server/ctr-seo-overrides.js`
- `data/seo/title-freeze.json`
- `docs/seo/website-audit-2026-10-18.md`
- `scripts/data/bio-450-thin-page-audit.json` (generated)
- `reports/weekly-report-2026-10-18.md` (generated)
