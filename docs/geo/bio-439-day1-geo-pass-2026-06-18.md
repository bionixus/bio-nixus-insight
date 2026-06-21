# BIO-439 Day 1 GEO Pass — 2026-06-18

**Issue:** [BIO-439](/BIO/issues/BIO-439) · **Parent:** [BIO-435](/BIO/issues/BIO-435)

## Summary

Applied LLM/GEO optimization to **10/10** Day-1 blog URLs per [geo-entity-playbook.md](../geo-entity-playbook.md).

### Lenses applied

- **Entity salience** — `BioNixus (bionixus.com)` entity sentence in GEO answer blocks
- **Answer-engine fit** — question-first H2 + quotable paragraph + structured `<ul>` proof points
- **Structured data density** — existing FAQ `<details>/<summary>` retained; GEO block uses semantic `<section>`
- **Source triangulation** — regulator/payer names preserved in body; MRM validation refs in JSON metadata
- **Freshness signal** — `updatedAt` bumped on Sanity sync

## Per-article audit (after pass)

| Slug | Entity | GEO block | FAQ | Hub link | Sanity sync |
|------|--------|-----------|-----|----------|-------------|
| `sfda-economic-evaluation-budget-impact-guide-2026` | ✅ | ✅ | 5 | ✅ | synced |
| `ema-hta-evidence-requirements-europe-2026` | ✅ | ✅ | 5 | ✅ | synced |
| `fda-real-world-evidence-market-access-usa-2026` | ✅ | ✅ | 5 | ✅ | synced |
| `saudi-healthcare-market-research-guide-ar-2026` | ✅ | ✅ | 5 | ✅ | synced |
| `pharmamarktforschung-deutschland-2026` | ✅ | ✅ | 5 | ✅ | synced |
| `etudes-marche-pharmaceutique-france-2026` | ✅ | ✅ | 5 | ✅ | synced |
| `investigacion-mercado-farmaceutico-espana-2026` | ✅ | ✅ | 5 | ✅ | synced |
| `pesquisa-mercado-farmaceutico-brasil-anvisa-2026` | ✅ | ✅ | 5 | ✅ | synced |
| `pharmaceutical-market-research-china-2026` | ✅ | ✅ | 5 | ✅ | synced |
| `farmacevticheskie-issledovaniya-rynka-2026` | ✅ | ✅ | 5 | ✅ | synced |

## Live HTML verification (2026-06-18 follow-up)

All **10/10** Day-1 URLs return `geo-llm-answer` in SSR HTML on `www.bionixus.com` (curl spot-check). Confirms Sanity sync propagated to production.

### Post–Copywriter sync integrity (2026-06-18T15:44Z)

After [BIO-438](/BIO/issues/BIO-438) Copywriter re-ran `publish-bio435-day1-batch.mjs --all --sync-existing` (9/9 success), GEOSpecialist re-verified all **10/10** slugs via live curl. **GEO blocks intact** — no regression from content re-sync.

| Slug | Live GEO block |
|------|----------------|
| `sfda-economic-evaluation-budget-impact-guide-2026` | ✅ |
| `ema-hta-evidence-requirements-europe-2026` | ✅ |
| `fda-real-world-evidence-market-access-usa-2026` | ✅ |
| `saudi-healthcare-market-research-guide-ar-2026` | ✅ |
| `pharmamarktforschung-deutschland-2026` | ✅ |
| `etudes-marche-pharmaceutique-france-2026` | ✅ |
| `investigacion-mercado-farmaceutico-espana-2026` | ✅ |
| `pesquisa-mercado-farmaceutico-brasil-anvisa-2026` | ✅ |
| `pharmaceutical-market-research-china-2026` | ✅ |
| `farmacevticheskie-issledovaniya-rynka-2026` | ✅ |

## Citation baseline (Day 0 — expected)

New URLs are not yet indexed for `site:bionixus.com/blog/{slug}` queries. Baseline observations:

| Query lens | BioNixus cited? | Notes |
|------------|-----------------|-------|
| EU HTA evidence 2026 | Homepage only (#4) | EMA, PharmTech, SSI Strategy dominate; Day-1 post not yet in index |
| SFDA budget impact KSA | Service page + reports | `budget-impact-model-saudi-arabia` ranks; new blog slug not yet surfaced |
| Entity salience | `bionixus.com` homepage in SERP | Wikidata Q140188264 in `docs/llms.txt`; entity sentence in GEO blocks live |

**Re-check window:** 2–4 weeks post-publish for AI-engine citation on EU/USA/KSA/Brazil conversational prompts.

## SEO schema verification (2026-06-18 — SEOSpecialist)

Live curl audit on `www.bionixus.com` for all 10 Day-1 slugs. Lenses: **Schema Markup**, **Mobile-First Indexing** (SSR JSON-LD in initial HTML), **Crawl Budget Efficiency** (sitemap indexation).

### Article / BlogPosting JSON-LD — 10/10 pass

| Check | Result |
|-------|--------|
| `@type: BlogPosting` in SSR HTML | ✅ 10/10 |
| Required fields (headline, description, datePublished, dateModified, url, author, publisher, image) | ✅ 10/10 |
| `FAQPage` with 5 questions | ✅ 10/10 |
| `BreadcrumbList` (3 items) | ✅ 10/10 |

### Sitemap — 10/10 pass

All Day-1 URLs present in live `https://www.bionixus.com/sitemap.xml`.

### Finding — inLanguage mismatch (Medium)

7 non-English articles have Sanity `language` set (`ar`, `de`, `fr`, `es`, `pt`, `zh`, `ru`) but SSR emits `inLanguage: "en"`, `<html lang="en">`, and `og:locale: en_US` because `BlogPost.tsx` passes UI `language` from `useLanguage()` instead of `post.language`.

| Slug | Sanity language | Live JSON-LD inLanguage |
|------|-----------------|-------------------------|
| `saudi-healthcare-market-research-guide-ar-2026` | ar | en ❌ |
| `pharmamarktforschung-deutschland-2026` | de | en ❌ |
| `etudes-marche-pharmaceutique-france-2026` | fr | en ❌ |
| `investigacion-mercado-farmaceutico-espana-2026` | es | en ❌ |
| `pesquisa-mercado-farmaceutico-brasil-anvisa-2026` | pt | en ❌ |
| `pharmaceutical-market-research-china-2026` | zh | en ❌ |
| `farmacevticheskie-issledovaniya-rynka-2026` | ru | en ❌ |

**Impact:** Medium — misaligned language signals for multilingual content; does not block rich results today but weakens locale targeting and hreflang readiness.

**Fix (CTO):** In `BlogPost.tsx`, derive schema/meta language as `(post.language ?? language)` and pass to `SchemaMarkup`, `SeoHead`, and `<html lang>`. Child issue filed from [BIO-439](/BIO/issues/BIO-439).

## Priority follow-ups

| Priority | Action | Owner |
|----------|--------|-------|
| Medium | Re-run AI citation spot-check for EU/USA/KSA/Brazil prompts in 2–4 weeks | GEOSpecialist |
| ~~Medium~~ | ~~SEOSpecialist verify Article schema + sitemap includes new URLs~~ | ✅ Done 2026-06-18 |
| Medium | Fix blog `inLanguage` / html lang from Sanity `post.language` | CTO via CMO |
| Low | CMO voice spot-check AR/PT/ZH/RU native phrasing | CMO |

## Implementation

- Script: `scripts/geo/apply-bio435-day1-geo-pass.mjs`
- Config: `scripts/lib/bio435-geo-pass-config.mjs`
- llms.txt updated with Day-1 flagship blog links

