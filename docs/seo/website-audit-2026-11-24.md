# Website SEO audit — 2026-11-24 (cron)

## GSC snapshot (export in `data/gsc/current-week/`)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | +137/day |
| Clicks/day | 52 | 450 | +18/day |
| CTR | **1.13%** | 3.0% | +0.37 pp |
| Avg position | 19.5 | 5.0 | improved (was 25.8) |

Full narrative: `reports/weekly-report-2026-11-24.md`

### CTR / ranking diagnostics

- **US drag:** ~35% impressions @ **0.12% CTR** — ex-US CTR **1.66%**.
- **Desktop drag:** 80% impressions @ **0.74% CTR**; mobile **2.63%**.
- **Winning cluster:** `/pharmaceutical-companies-*` @ **2.21% CTR**, 619 clicks.
- **Page-1 zero-click:** IQVIA competitor queries (~pos 3–4, 0% CTR), Dubai pharma, FMCG hub titles — meta/title tests queued in weekly report.

### LLM / AI discoverability

- Indexable pages use SSR HTML, `FAQ` via `<details>`, Article + FAQ JSON-LD on directories.
- Arabic pharma directories were **thin (~600–690w SSR)** — expanded this run (see below).

## Production crawl (`scripts/audit-thin-pages-bio450.mjs`)

| Check | Result |
|---|---|
| URLs audited | 678 |
| HTTP errors | **0** |
| 404 (sitemap paths) | **0** |
| Thin (&lt;2,000w in `<main>`) | **305** |

Top thin clusters (pre-deploy): AR pharma GCC (~1.0–1.4k gap), retail-companies GCC (~1.1–1.3k), country reports 30–330w under threshold.

## Actions shipped this run

1. **Arabic pharma deep content** — `arPharmaDeepContent.ts` + template sections (channels, market prose, growth drivers, fieldwork) for EG, AE, SA, KW, QA, OM.
2. **`dateModified` 2026-11-24** on AR pharma sitemap entries via merged directory config.
3. **CTR test** — `/iqvia-alternative` title/description aligned to “companies like IQVIA” query (GSC pos ~3.1).

## Post-deploy verification

```bash
node scripts/audit-thin-pages-bio450.mjs
# Expect /ar/pharmaceutical-companies-* >= 2000w each
```

IndexNow: touch changed AR pharma + `/iqvia-alternative` after deploy.

## DEPLOY CHECKLIST

- [ ] `src/data/arPharmaDeepContent.ts` (new)
- [ ] `src/data/arPharmaTypes.ts` (new)
- [ ] `src/data/arPharmaDirectories.ts`
- [ ] `src/pages/templates/ArPharmaCompaniesDirectoryPage.tsx`
- [ ] `src/server/ctr-seo-overrides.js`
- [ ] `lib/ctr-seo-overrides.mjs`
- [ ] `reports/weekly-report-2026-11-24.md` (+ `.data.json`)
- [ ] `docs/seo/website-audit-2026-11-24.md`
- [ ] `scripts/data/bio-450-thin-page-audit.json` (generated)

## Next sprint (unchanged priority)

1. Retail-companies GCC thin pages
2. Near-threshold country reports (TR/BR +30w, etc.)
3. FMCG / Dubai pharma CTR tests from weekly report table
4. Fresh GSC export weekly into `data/gsc/current-week/`