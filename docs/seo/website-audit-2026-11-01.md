# Website SEO & content audit — 2026-11-01

**Automation:** cron SEO audit · **Branch:** `cursor/website-ranking-and-content-312a`

## GSC snapshot (export in `data/gsc/current-week/`)

| Metric | This week | Target | vs target |
|---|---|---|---|
| Impressions/day | 4,585 | 15,000 | −10,415 |
| Clicks/day | 52 | 450 | −398 |
| CTR | 1.13% | 3.0% | −1.87 pp |
| Avg. position | 19.5 | 5.0 | +14.5 vs target |

**Structural CTR notes:** United States = 34.9% of impressions at **0.12% CTR**; mobile CTR **2.63%** vs desktop **0.74%**. Winning cluster: `/pharmaceutical-companies-*` at **2.21% CTR**. Device-report drag persists on `/japan-medical-devices-market-report` (pos ~18.6, low CTR).

Full weekly narrative: `reports/weekly-report-2026-11-01.md`.

## Production crawl (BIO-449)

- **711** service/landing URLs audited on `https://www.bionixus.com`
- **332** thin pages (&lt;2,000 visible main words)
- **0** sitemap 404s on audited set
- Inventory: `docs/seo/bio-449-thin-page-inventory.csv`

## Errors

- No production 404s on sitemap service/landing scope.
- Arabic blog routes in sitemap show very low SSR word counts (13–19 words) — likely CMS/hydration gap; **flag for separate SSR blog fix** (not in this change set).

## Shipped in this run (awaiting deploy)

Expanded four **page-1 / high-impression GSC** specialty demand pages to ≥2,000 SSR words + LLM/GEO links:

| URL | GSC signal | Change |
|---|---|---|
| `/japan-medical-disposables-market` | Query pos ~8.7, 0% CTR; page impr 153 | Long-form sections, FAQs, signals, `dateModified` 2026-11-01 |
| `/italy-portable-diagnostic-devices-market` | Query pos ~6.3, 0% CTR | Same |
| `/gcc-medication-management-market` | Query pos ~5.0, 65 impr | Same |
| `/singapore-ivd-market-access` | Query pos **1.7**, 44 impr, 0% CTR | Same |

Implementation: `src/data/specialtyMarketDemandLongForm.ts` + template `#deep-dive` in `SpecialtyMarketDemandPage.tsx`.

Verification: `vitest run src/lib/seo/__tests__/specialty-demand-ssr-word-count.test.ts` (post-build).

## LLM / chat appearance

- Updated `public/llms.txt` buyer section with the four URLs above.
- GEO stamp → 2026-11-01.

## CTR / ranking recommendations (no title freeze violations)

1. **Deploy** this branch, then `npm run indexnow:priority` for the four URLs (+ existing GSC priority list).
2. **US CTR drag:** keep IQVIA/competitor pages on title freeze until 2026-12-12; improve **meta/description and above-fold answer blocks** on pages not frozen.
3. **“gcc biologics market”** (pos ~6.2): `/middle-east-biologics-market` already ≥2k words — add internal links from GCC hub/report pages (follow-up).
4. **IQVIA alternatives** (pos ~3–4, 0% CTR): enrich `/iqvia-alternative` FAQ/quick-answer SSR (follow-up; title frozen where applicable).

## DEPLOY CHECKLIST

- [ ] `src/data/specialtyMarketDemandContent.ts`
- [ ] `src/data/specialtyMarketDemandLongForm.ts`
- [ ] `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- [ ] `src/lib/seo/__tests__/specialty-demand-ssr-word-count.test.ts`
- [ ] `scripts/verify-specialty-ssr-word-count.mjs`
- [ ] `scripts/data/specialty-market-demand-sitemap.mjs`
- [ ] `public/llms.txt`
- [ ] `docs/seo/website-audit-2026-11-01.md`
- [ ] Regenerate `public/sitemap.xml` on deploy (prebuild)
