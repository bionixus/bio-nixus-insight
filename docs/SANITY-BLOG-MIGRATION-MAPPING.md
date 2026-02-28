# Sanity Blog Migration Mapping (9 Hardcoded Articles)

This mapping converts hardcoded article objects in `src/data/blog-*.ts` into Sanity `blogPost` documents from `day-one/apps/studio/schemaTypes/blogPost.ts`.

## 1) Field mapping (source -> Sanity schema path)

- `id` -> `_id` (recommended: `blogPost.<slug>`)
- `slug` -> `slug.current`
- `title` -> `title`
- `excerpt` -> `excerpt`
- `publishedAtIso` -> `publishedAt`
- `date` -> not stored (display-only; derive from `publishedAt`)
- `category` -> `category` (string dropdown)
- `country` -> `country` (string dropdown)
- `tags` -> `tags[]`
- `authorName` -> `author` (reference; map to selected author `_id`)
- `seoMetaTitle` -> `seo.metaTitle`
- `seoMetaDescription` -> `seo.metaDescription`
- `tableOfContents[]` -> `tableOfContents[]` (`heading`, `anchor`)
- `executiveSummary` (string) -> `executiveSummary[]` Portable Text block
- `faq[]` -> `faq[]`
- `ctaSection` -> `ctaSection`
- `bodyHtml` -> `bodyHtml`

## 2) Missing schema fields to fill for SEO completeness

For each imported post, additionally fill:

- `updatedAt`: set equal to `publishedAt` initially
- `language`: `en`
- `readingTime`: estimated from body word count
- `seo.focusKeyword`: main keyword
- `seo.keywords`: 3-8 related terms
- `seo.canonicalUrl`: `https://www.bionixus.com/blog/<slug>`
- `seo.noIndex`: `false`
- `openGraph.ogTitle`: use `seoMetaTitle` (or social-optimized variant)
- `openGraph.ogDescription`: use `seoMetaDescription`
- `openGraph.ogImage`: required for best social SEO (asset + alt)
- `mainImage`: recommended for cards + visual SEO (asset + alt)
- `categories`: optional taxonomy references (if category docs exist)

## 3) Per-article country/category mapping

| Slug | Title | Category | Country (stored) |
|---|---|---|---|
| `sfda-drug-registration-guide` | Complete Guide to SFDA Drug Registration in Saudi Arabia (2026) | Regulatory & Policy | Saudi Arabia |
| `healthcare-market-research-methodologies-gcc` | Healthcare Market Research Methodologies: CATI vs CAPI vs Online in GCC | Quantitative Research | GCC |
| `kol-mapping-pharma-middle-east` | KOL Mapping for Pharma Companies in the Middle East: Complete Guide | Qualitative Research | Middle East |
| `market-access-strategy-uae` | Market Access Strategy for Pharma in the UAE: DOH vs MOHAP Pathways | Market Access | UAE |
| `top-therapy-areas-pharma-growth-saudi-arabia` | Top 10 Therapy Areas Driving Pharma Growth in Saudi Arabia | Market Intelligence | Saudi Arabia |
| `pharma-market-entry-saudi-arabia-playbook` | Pharma Market Entry in Saudi Arabia: The Complete Playbook | Market Intelligence | Saudi Arabia |
| `competitive-intelligence-pharma-gcc` | Competitive Intelligence in Pharma: Monitoring the GCC Formulary Landscape | Market Intelligence | GCC |
| `nice-hta-evidence-requirements-guide` | NICE HTA Evidence Requirements: A Guide for Pharma Entering the UK | Market Access | United Kingdom |
| `patient-journey-mapping-saudi-arabia` | Patient Journey Mapping in Saudi Arabia: Methodology and Best Practices | Qualitative Research | Saudi Arabia |

## 4) Executive summary conversion rule

`executiveSummary` in hardcoded posts is currently plain string.
Convert to Portable Text array:

```json
[
  {
    "_type": "block",
    "style": "normal",
    "children": [
      { "_type": "span", "text": "<executive summary text>" }
    ]
  }
]
```

## 5) Author + image decisions required before import

Need final values for:

1. `author` reference `_id` for all 9 posts (single author or per-post mapping)
2. `mainImage` asset for each post (+ alt text)
3. `openGraph.ogImage` asset for each post (+ alt text)

Without these, import can still run but social/image SEO will be incomplete.
