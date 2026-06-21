# BIO-390 Daily Keyword & Technical SEO Report — 2026-06-17

**Site:** https://www.bionixus.com  
**Baseline:** [GSC action plan (2026-06-02)](/docs/seo/gsc-2026-06-02-keyword-action-plan.md) · [GCC keyword gap scored CSV](/docs/seo/gcc-keyword-gap-scored.csv)  
**Lenses applied:** Search Intent Alignment · Crawl Budget Efficiency · Topic Authority · Cannibalization Detection · Schema Markup · Mobile-First Indexing

---

## Executive summary

| Area | Status | Priority action |
|------|--------|-----------------|
| Quick-win BOFU pages (Kuwait pharma cos, IQVIA alt) | Live 200, title tags aligned | Monitor GSC CTR after next 7-day window |
| P1 gap page `/diabetes-market-research-uae` | **404 — component exists, route missing** | CTO: register route + sitemap (high impact) |
| P1 gaps `/specialist-physician-panel-uae`, `/msl-insight-research-middle-east` | 404 | Engineering backlog or redirect to nearest live page |
| Locale paths `/de/`, `/es/` | 301 → `/de`, `/es` (no trailing slash) | Low — update `seo-hard-check.mjs` expectation or add canonical |
| robots.txt / sitemap.xml | 200, AI crawlers allowed | No action |
| Today's blog opportunity | SFDA EES / budget impact guide (informational → commercial) | Content brief filed; Sanity publish blocked on credentials |

---

## 1) Keyword ranking snapshot (directional)

> **Data caveat:** No live GSC API in this heartbeat. Positions below are from the **2026-06-02 GSC 7-day export** ([action plan](/docs/seo/gsc-2026-06-02-keyword-action-plan.md)). Re-pull GSC **Last 7 days** on next heartbeat for delta tracking.

### Quick wins (positions ~5–10, highest click share)

| Query | ~Pos | Target URL | Live status | Today's note |
|-------|------|------------|-------------|--------------|
| pharmaceutical companies in kuwait | 6.3 | `/pharmaceutical-companies-kuwait` | 200 | Title: `Pharmaceutical Companies in Kuwait \| Top Medical \| BioNixus` — intent match OK |
| pharmaceutical companies oman–iran (cluster) | 6–9 | `/pharmaceutical-companies-{country}` | 200 | Cluster live; maintain internal links to hub |
| iqvia competitors | ~10 | `/iqvia-alternative` | 200 | Monitor cannibalization vs `/bionixus-vs-iqvia-mena` |
| cairo hospitals healthcare 2023-2026 | 6.6 | `/blog/healthcare-overview-egypt-market-2026` | 200 | Prior SEO sync script exists |
| april healthcare kuwait | 6–9 | `/blog/healthcare-overview-kuwait-market-2026` | 200 | CTR fix candidate if still ~0% |

### Big pool (positions ~30–70, high impressions)

| Query cluster | ~Pos | Target URL | Live status |
|---------------|------|------------|-------------|
| gcc pharma / biologics / generic injectables | 30–70 | `/gcc-pharma-market-report-2026`, `/gcc-pharmaceutical-market-research` | 200 |
| healthcare market research saudi arabia | ~47 | `/healthcare-market-research/saudi-arabia` | 200 |
| healthcare market research companies | ~73 | `/healthcare-market-research-agency-gcc` | 200 |
| budget impact model saudi arabia | unmeasured | `/budget-impact-model-saudi-arabia` | 200 — Service schema present; blog gap vs competitors |

### P1 backlog gaps (from scored CSV) — live crawl 2026-06-17

| Keyword | Priority | Expected URL | HTTP | Finding |
|---------|----------|--------------|------|---------|
| diabetes market research uae | P1 | `/diabetes-market-research-uae` | **404** | `DiabetesMarketResearchUae.tsx` built but **not in `routes.tsx`** |
| specialist physician panel uae | P1 | `/specialist-physician-panel-uae` | 404 | No page component found |
| msl insight research middle east | P2 | `/msl-insight-research-middle-east` | 404 | Related: `/medical-affairs-insight-research-gcc` may exist — verify alias/redirect |
| healthcare market research agency gcc | P1 | `/healthcare-market-research-agency-gcc` | 200 | Shipped |
| real world evidence gcc | P1 | `/real-world-evidence-gcc` | 200 | Shipped |

**Highest-impact fix today:** Wire `/diabetes-market-research-uae` — P1 keyword, full page already authored, currently invisible to Google (404 wastes crawl signals and blocks impressions for UAE diabetes BOFU intent).

---

## 2) New keyword opportunities (today)

### A. Blog — SFDA Economic Evaluation & Budget Impact (recommended today)

| Field | Value |
|-------|-------|
| **Primary keyword** | budget impact model saudi arabia |
| **Secondary** | SFDA economic evaluation studies, pharmacoeconomics Saudi Arabia, HTA Saudi Arabia 2026 |
| **Intent** | Informational → commercial (market access / HEOR buyers) |
| **Why now** | SFDA EES guidelines (July 2024) driving competitor content (PharmaBoardroom, Partners4Access); BioNixus has service pages but no **indexable long-form** explainer linking to `/budget-impact-model-saudi-arabia`, `/heor-consulting-saudi-arabia`, `/sfda-market-access-strategy-saudi-arabia` |
| **Cannibalization risk** | Low — complements existing service URLs |
| **Expected impact** | Medium impressions (niche B2B); High E-E-A-T / trust for payer-facing queries |
| **Effort** | Medium (1 blog + cover image + schema) |

See companion brief: `bio-390-2026-06-17-blog-brief-sfda-budget-impact.md`

### B. Net-new page — diabetes market research UAE (engineering, not blog)

Route registration unlocks existing 290+ line page targeting P1 keyword with FAQ schema already drafted in component.

### C. CTR iteration candidates (no new URLs)

- `/blog/healthcare-overview-kuwait-market-2026` — if GSC still shows `april healthcare kuwait` at pos 6–9 with ~0% CTR, test title: `Kuwait Healthcare Market 2026 \| Hospitals, Payers & Pharma \| BioNixus`
- `/healthcare-market-research-agency-gcc` — add “companies” variant in H2 for `healthcare market research companies` query at ~pos 73

---

## 3) Technical SEO audit

| Check | Result | Severity | Recommendation |
|-------|--------|----------|----------------|
| `seo-hard-check.mjs` | FAIL: `/de/`, `/es/` return 301 to slashless | Low | Accept 301 or add trailing-slash route; not indexation-critical |
| robots.txt | 200, allows Google/Bing/AI bots | Pass | — |
| sitemap.xml | 200 | Pass | Re-run `generate-sitemap.mjs` after new routes |
| Priority URLs sample | Kuwait pharma, IQVIA alt, agency GCC, RWE GCC → 200 | Pass | — |
| Missing route `/diabetes-market-research-uae` | 404 | **High** | Add to `routes.tsx` + sitemap |
| Schema on `/budget-impact-model-saudi-arabia` | Organization + Service + BreadcrumbList | Pass | Add FAQ block on page for rich results |
| Sanity blog publish | No `SANITY_*` token in heartbeat env | Blocker for blog automation | Board: provision write token or delegate to content agent with Studio access |

---

## 4) Internal linking actions (CTO/content — no code in this heartbeat)

1. From `/blog/nupco-saudi-arabia-tendering-guide` → `/budget-impact-model-saudi-arabia` (anchor: “budget impact model for NUPCO dossiers”)
2. From `/sfda-market-access-strategy-saudi-arabia` → today's blog (once live)
3. From `/uae-pharmaceutical-market-research` → `/diabetes-market-research-uae` (once route live)
4. Hub `/healthcare-market-research` → `/diabetes-market-research-uae` when live

---

## 5) Metrics baseline (record on next GSC pull)

| Metric | Baseline date | Value | Next check |
|--------|---------------|-------|------------|
| Site clicks (7d) | 2026-06-02 | ~65 | 2026-06-24 |
| Site impressions (7d) | 2026-06-02 | ~12k | 2026-06-24 |
| Kuwait pharma query pos | 2026-06-02 | 6.3 | 2026-06-24 |
| `/diabetes-market-research-uae` indexed | — | N/A (404) | After route fix |

---

## 6) Disposition & owners

| Action | Owner | Priority |
|--------|-------|----------|
| Register `/diabetes-market-research-uae` route + sitemap | CTO (via CMO) | **High** |
| Publish SFDA budget impact blog per brief | Content / CMO (Sanity) | Medium |
| Provision Sanity write token for SEO automation scripts | Board | Medium |
| GSC 7-day re-export for delta | SEO Specialist (next routine) | Medium |
