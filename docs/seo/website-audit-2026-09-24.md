# BioNixus sitewide SEO audit — 2026-09-24

## GSC performance (week ending 2026-09-24)

| Metric | This week | Target | vs last week |
|---|---|---|---|
| Impressions/day | 4,448 | 15,000 | −337 |
| Clicks/day | 33 | 450 | −4 |
| CTR | **0.75%** | 3.0% | −0.02 pp |
| Avg. position | **25.8** | 5.0 | +2.6 (improved) |

### CTR diagnostics

- **US drag:** 33.3% of impressions, **0.09% CTR** (ex-US CTR **1.08%**).
- **Desktop drag:** 86% of device impressions @ **0.50% CTR**; mobile **2.23%**.
- **Winning cluster:** `/pharmaceutical-companies-*` @ **1.60% CTR** (140 clicks / 8,756 impr).
- **Deep-SERP dilution:** pages with position >40 and ≥200 impr → **0.10% CTR** on 11,559 impressions.
- **Device reports:** `/japan-medical-devices-market-report` — 2,511 impr, **0.08% CTR**, pos 44.3.

Full scorecard: `reports/weekly-report-2026-09-24.md`.

### Page-1 queries with 0% CTR (priority title/meta + depth)

| Query | Pos | Impr | Likely landing page |
|---|---|---|---|
| iqvia competitors | 6.3 | 36 | `/iqvia-alternative` |
| pharmaceutical companies in dubai | 8.9 | 35 | `/pharmaceutical-companies-dubai` |
| febrile neutropenia market | 8.5 | 38 | `/febrile-neutropenia-market` |
| gcc functional service providers market | 4.6 | 28 | `/gcc-functional-service-providers-market` |
| saudi arabia biosimilar market | 4.3 | 15 | `/biosimilar-market-entry-saudi-arabia` |
| cairo hospitals healthcare 2023-2026 | 1.9 | 152 | Egypt hospital blog (CTR override shipped) |

## Technical crawl (production, 2026-09-24)

| Check | Result |
|---|---|
| Service/landing URLs audited (BIO-448) | **942** |
| Thin (&lt;2,000 SSR words) | **515** |
| Pass (≥2,000 words) | **427** |
| HTTP 404 in sitemap scope | **0** |
| Crawl errors | **0** |

Inventory: `docs/seo/bio-448-thin-page-inventory.csv`.

**Notable thin URLs (pre-deploy):** `/gcc-functional-service-providers-market` (~717w), `/febrile-neutropenia-market` (~548w), `/services` (~1,861w), `/iqvia-alternative-saudi-arabia` (~877w), `/videos/*` (~7w visible — missing long-form guide on production).

## Shipped this run (branch `cursor/website-content-and-ranking-fe24`)

1. **Merged 2026-09-23 audit** — febrile neutropenia + GCC FSP `guideSections`, `/services` FAQs, biosimilars therapy depth, Dubai/Saudi CTR overrides, `llms.txt` refresh (`751fbe41`).
2. **KSA IQVIA complement** — `/iqvia-alternative-saudi-arabia` deep sections + FAQs for account-level / NUPCO / SFDA intent.
3. **Video watch pages** — long-form SSR guides on `/videos/*` (**≥2,010w** main SSR each after deploy).
4. **Reporting** — `reports/weekly-report-2026-09-24.md` + this audit note.

## LLM / chat appearance

- `public/llms.txt` lists IQVIA alternative, GCC hubs, FN, FSP, biosimilars — refresh after deploy.
- Video pages now expose transcript + guide prose in initial HTML (not JS-only).
- Competitor and specialty templates include FAQ + Service/FAQPage JSON-LD.

## Next-week priorities

1. Deploy + `npm run indexnow:priority` on FN, FSP, services, KSA IQVIA, video guides.
2. US desktop CTR tests on `/iqvia-alternative` and `/healthcare-market-research-companies` (0.09% US CTR).
3. Thin backlog (~510): pharma directory spokes 1,850–1,980w; localized `/ar/services`, `/ru/services`; `/insights/*` listicles.
4. Japan/GCC device reports — content depth for queries with large position declines (Italy/GCC specialty cluster).
5. Directory matrix — continue indexation push for waves with 0% GSC Pages.csv presence.

## DEPLOY CHECKLIST

- `src/data/specialtyMarketDemandContent.ts`
- `src/pages/templates/SpecialtyMarketDemandPage.tsx`
- `src/data/servicesHubContent.ts`
- `src/data/competitorAlternatives.ts`
- `src/pages/templates/CompetitorAlternativePage.tsx`
- `src/data/videoWatchArticleContent.ts`
- `src/pages/VideoWatchPage.tsx`
- `lib/ctr-seo-overrides.mjs` + `src/server/ctr-seo-overrides.js`
- `public/llms.txt`
- `docs/seo/website-audit-2026-09-24.md`
- `reports/weekly-report-2026-09-24.md`
