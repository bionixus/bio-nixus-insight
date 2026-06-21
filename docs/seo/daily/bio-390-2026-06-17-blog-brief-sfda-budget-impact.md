# Blog Content Brief — SFDA Economic Evaluation & Budget Impact (2026)

**Parent routine:** [BIO-390](/BIO/issues/BIO-390)  
**Target publish date:** 2026-06-18  
**Author:** Content team (CMO) · **SEO owner:** SEO Specialist

---

## Target keywords

| Role | Keyword |
|------|---------|
| Focus keyword | budget impact model saudi arabia |
| Primary secondary | SFDA economic evaluation studies |
| Additional | pharmacoeconomics Saudi Arabia, HTA Saudi Arabia, NUPCO budget impact, cost effectiveness analysis KSA |

**Search intent:** Informational (regulatory guide) with commercial CTA to HEOR/market access services.  
**Lens:** E-E-A-T — cite SFDA July 2024 EES guidelines, NUPCO payer context, BioNixus field experience since 2012.

---

## Proposed slug & title

- **Slug:** `sfda-economic-evaluation-budget-impact-guide-2026`
- **URL:** `https://www.bionixus.com/blog/sfda-economic-evaluation-budget-impact-guide-2026`
- **Title tag (≤60 chars):** `SFDA Budget Impact Model Guide 2026 | BioNixus`
- **Meta description (~155 chars):** `How to build a Saudi budget impact model for SFDA economic evaluation: payer perspective, 3–5 year horizon, local epidemiology, and NUPCO-ready scenarios.`

---

## H1 & outline

**H1:** SFDA Economic Evaluation Studies: Building a Budget Impact Model for Saudi Arabia (2026)

1. **Why budget impact analysis is now central to Saudi market access** — SFDA EES guidelines, MOH/NUPCO formulary expectations, Vision 2030 localization
2. **What SFDA requires in a budget impact model** — payer perspective, time horizon (2–5 years), comparator choice, SAR costing, sensitivity analysis
3. **Data inputs that make models credible in KSA** — epidemiology, market share forecasts, treatment pathways, hospital consumption (not EU-transposed assumptions)
4. **Budget impact vs full pharmacoeconomic evaluation** — when BIA alone suffices vs CEA/CUA modules
5. **NUPCO and formulary committee review** — how BIM supports tender and listing decisions
6. **Common failure modes** — generic global models, wrong comparator, missing Arabic stakeholder summaries
7. **How BioNixus supports BIM and HEOR in Saudi Arabia** — panels, consumption data, dossier rehearsal (soft CTA)
8. **FAQ** (5–6 questions, `<details>`/`<summary>` in Sanity HTML or portable text equivalent)

---

## Internal links (minimum 6)

| Anchor text | Target |
|-------------|--------|
| budget impact model Saudi Arabia | `/budget-impact-model-saudi-arabia` |
| HEOR consulting Saudi Arabia | `/heor-consulting-saudi-arabia` |
| SFDA market access strategy | `/sfda-market-access-strategy-saudi-arabia` |
| NUPCO tendering guide | `/blog/nupco-saudi-arabia-tendering-guide` |
| Saudi Arabia healthcare market 2026 | `/blog/saudi-arabia-healthcare-market-2026` |
| healthcare market research Saudi Arabia | `/healthcare-market-research/saudi-arabia` |
| GCC market access guide | `/gcc-market-access-guide` |

---

## Schema requirements (full elements)

Inject via blog template / Sanity `seo` fields:

1. **Article** — `headline`, `datePublished`, `dateModified`, `author` (Organization: BioNixus), `image`, `mainEntityOfPage`
2. **FAQPage** — mirror FAQ section (min 5 Q&A)
3. **BreadcrumbList** — Home → Blog → Article title
4. **Organization** — site-wide (already on template; verify present)

**Cover image:** Generate via existing `generate-blog-cover.mjs` pattern — Saudi healthcare / data visualization motif; alt text: `SFDA budget impact model planning for Saudi pharmaceutical market access 2026`

---

## Sanity fields checklist

```
title, slug, publishedAt, excerpt, body (HTML or portable text),
seo.title, seo.description, seo.focusKeyword, seo.keywords[],
seo.noIndex: false,
coverImage (with alt),
category: "Market Access" or "Saudi Arabia",
relatedPosts[] (NUPCO guide, Saudi healthcare 2026)
```

---

## Word count & quality bar

- **Length:** 1,400–1,800 words
- **Tone:** Expert, regulatory-accurate, no keyword stuffing
- **Avoid:** Duplicating `/budget-impact-model-saudi-arabia` service copy verbatim — blog is educational; service page is conversion

---

## Publish verification

- [ ] `curl -I` returns 200 on blog URL
- [ ] Canonical self-referencing
- [ ] JSON-LD validates (Rich Results Test)
- [ ] Listed in `/sitemap.xml` after build
- [ ] Request indexing in GSC for new URL
