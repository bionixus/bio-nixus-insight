# BIO-435 Day 3 Copywriter Handoff — 2026-06-22

**From:** Market Research Manager  
**To:** Copywriter  
**Date:** 2026-06-22

---

## Assignment

Draft **10 blog articles** based on the validated briefs in `bio-435-2026-06-22-multilingual-briefs.md`.

All briefs have passed MRM data validation (see `bio-435-day3-data-validation-2026-06-22.md`). No fabricated data, all regulatory frameworks verified with primary sources.

---

## Articles to Draft

| # | Language | Slug | Reading Time | Status |
|---|----------|------|--------------|--------|
| 1 | EN (UAE) | `patient-access-programs-gcc-2026` | 18 min | 🟡 Pending |
| 2 | EN (EU) | `pricing-reimbursement-strategy-europe-2026` | 18 min | 🟡 Pending |
| 3 | EN (USA) | `real-world-data-studies-pharma-usa-2026` | 18 min | 🟡 Pending |
| 4 | AR | `patient-access-programs-saudi-arabia-ar-2026` | 18 min | 🟡 Pending |
| 5 | DE | `arzneimittelpreise-deutschland-strategie-2026` | 18 min | 🟡 Pending |
| 6 | FR | `donnees-vie-reelle-france-pharma-2026` | 18 min | 🟡 Pending |
| 7 | ES | `acceso-pacientes-farmacos-espana-2026` | 18 min | 🟡 Pending |
| 8 | PT | `precificacao-medicamentos-brasil-2026` | 18 min | 🟡 Pending |
| 9 | ZH | `real-world-research-china-pharma-2026` | 18 min | 🟡 Pending |
| 10 | RU | `farmacevticheskie-ceny-rossiya-2026` | 18 min | 🟡 Pending |

---

## Quality Requirements (from .cursorrules)

### SSR & Meta Tags
- Use `react-helmet-async` for all meta tags (title, description, og:*, canonical)
- Full page HTML must be in initial server response (NOT client-side JS)

### Semantic HTML
- ONE `<h1>` per page (the article title)
- Proper heading hierarchy: h1 > h2 > h3
- Use `<article>`, `<section>`, `<nav>`, `<footer>`

### Content Requirements
- **Word count:** 1,800–2,500 words
- **Hub link:** Link to `/healthcare-market-research` in first 200 words
- **5 FAQ items:** Use `<details>`/`<summary>` elements (not JS accordions)
- **Internal links:** Use React Router `<Link>` component with descriptive anchor text (never "click here")
- **Images:** All must have descriptive alt text with keywords
- **Phone/email:** Use `tel:` and `mailto:` links

### Structured Data (JSON-LD)
Inject via react-helmet-async `<script type="application/ld+json">`:
- **Organization** schema
- **Article** schema (datePublished, author, headline, image)
- **BreadcrumbList** schema
- **FAQPage** schema (for the 5 FAQ items)

### Language Field
Each article MUST have the correct `language` field set:
- English: `en`
- Arabic: `ar`
- German: `de`
- French: `fr`
- Spanish: `es`
- Portuguese: `pt`
- Chinese: `zh`
- Russian: `ru`

---

## Workflow After Drafting

1. **Copywriter drafts** all 10 articles (output: JSON files in `scripts/data/bio435-day3-articles/`)
2. **GEO Specialist** runs optimization pass (LLM-friendly formatting, entity linking)
3. **Cover generation** script creates blog cover images
4. **Publish to Sanity** using batch publish script
5. **Sitemap update**

---

## Validation Highlights (from MRM)

✅ All regulatory frameworks verified (MOHAP, SFDA, AMNOG, HAS, AEMPS, CMED, NMPA, Minzdrav)  
✅ No fabricated data or statistics  
✅ No slug/topic overlap with Day 1/2  
✅ All market contexts current for 2026  

---

**Next:** Copywriter creates 10 JSON files following Day 1/2 structure, then hands off to GEO Specialist for optimization pass.
