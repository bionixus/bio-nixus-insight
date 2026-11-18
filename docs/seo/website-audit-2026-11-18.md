# BioNixus website SEO audit — 2026-11-18

## GSC snapshot (week ending import in `data/gsc/current-week/`)

| Metric | This week | Target | vs target | Last week | vs last week |
|---|---|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 | 4,448 | +137 |
| Clicks/day | 52 | 450 | −398 | 33 | +19 |
| CTR | **1.13%** | 3.0% | −1.87 pp | 0.75% | +0.38 pp |
| Avg. position | **19.5** | 5.0 | +14.5 | 25.8 | +6.3 (improved) |

Full narrative: `reports/weekly-report-2026-11-18.md`.

### CTR diagnostics (actionable)

- **United States:** 34.9% of impressions at **0.12% CTR** — still the largest drag; non-US CTR **1.66%**.
- **Mobile vs desktop:** 2.63% vs 0.74% CTR — snippet/title tests matter more on desktop.
- **Winning cluster:** `/pharmaceutical-companies-*` at **2.21% CTR** (619 clicks).
- **IQVIA cluster:** `companies like iqvia` pos **3.1**, 64 impr, **0% CTR** — title/meta iteration shipped this sprint.
- **FMCG cluster:** `fmcg` pos **6.4**, 549 impr, **0.91% CTR** — next CTR experiment (title only, frozen URLs check first).

## Production crawl (BIO-450, 2026-11-18)

| Check | Result |
|---|---|
| URLs audited | 678 |
| Thin pages (<2,000 visible words) | **305** |
| HTTP 404 | **0** |
| Server errors | **0** |

Inventory: `docs/seo/bio-450-thin-page-inventory.csv`, raw: `scripts/data/bio-450-thin-page-audit.json`.

Near-threshold fixes this sprint: Turkey and Brazil healthcare reports (+1 FAQ each). Developed-market MedTech reports: Germany, Singapore, UK, India device landings (+2 FAQs each). GCC hub: +2 LLM-disambiguation FAQs.

## Errors

- **404:** none in sitemap crawl.
- **SSR / technical:** no new crawl errors; re-run `node scripts/sitewide-audit-runbook-phase2.mjs` post-deploy for title/meta/schema spot checks.

## Changes shipped this sprint (branch `cursor/website-ranking-and-content-2969`)

1. **Weekly GSC report** — `reports/weekly-report-2026-11-18.md` (CTR improving WoW; position +6.3).
2. **`/iqvia-alternative`** — CTR title/meta for `companies like iqvia` / `iqvia alternatives`; H1 and answer-block LLM cues; `llms.txt` link text updated.
3. **Thin-page depth** — Turkey, Brazil healthcare; Germany, Singapore, UK, India medical device reports; `/market-research-gcc` FAQs for AI disambiguation.

## Recommended next actions

1. Deploy and `npm run indexnow:priority` (include iqvia + expanded report URLs).
2. Thin backlog **~300** — therapy hubs, pharma MR country pages, locale `/services` pages.
3. FMCG page-1 CTR test on hub/listicle serving `fmcg` queries (after title-freeze check).
4. US desktop CTR: body copy on USA listicle and pharmaceutical-companies-usa cross-links.
5. Upload fresh GSC export weekly to `data/gsc/current-week/`.

## DEPLOY CHECKLIST

- `lib/ctr-seo-overrides.mjs`
- `src/server/ctr-seo-overrides.js`
- `data/seo/title-freeze.json`
- `public/conf/iqvia-alternative.html`
- `public/llms.txt`
- `src/data/marketResearchCountryContent.ts`
- `src/pages/TurkeyHealthcareMarketReport.tsx`
- `src/pages/BrazilHealthcareMarketReport.tsx`
- `src/pages/GermanyMedicalDevicesMarketReport.tsx`
- `src/pages/SingaporeMedicalDevicesMarketReport.tsx`
- `src/pages/UkMedicalDevicesMarketReport.tsx`
- `src/pages/IndiaMedicalDevicesMarketReport.tsx`
- `src/lib/seo/__tests__/gsc-oct-2026-buyer-ctr.test.ts`
- `src/lib/seo/__tests__/japan-iqvia-china-snippets-nov-2026.test.ts`
- `docs/seo/website-audit-2026-11-18.md`
- `reports/weekly-report-2026-11-18.md`
- `scripts/data/bio-450-thin-page-audit.json` (regenerated crawl)