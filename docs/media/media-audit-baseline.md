# Media audit baseline — 2026-03-18

Baseline captured before Website Media Plan rollout.

## Summary

| Page | Images | Video | Gap |
|------|--------|-------|-----|
| Homepage (`Index.tsx`) | Blog cards only; logos in chrome | None | No hero visual, no explainer, text-only testimonials |
| `/market-research` | None | None | Largest service hub is text-only |
| `/healthcare-market-research-agency-gcc` | SVG hero via `ReportSectionVisual` | None | No photography in long-form body |
| `/real-world-evidence-gcc` | SVG hero only | None | No RWE-specific visuals |
| `/contact` | None | None | No team/office/coverage visuals |

## Existing reusable assets

- `/images/quant-hcp-survey-executive.png` — GCC workshop / HCP survey context
- `/images/quant-ai-validation-lab.png` — data validation workflow
- Sanity CDN — blog and case study covers

## Existing patterns to extend

- `BionixusMarketResearchMiddleEast.tsx` — two-column `<figure>` grid with figcaption
- `ReportPremiumHero` + `ReportSectionVisual` — programmatic SVG hero
- `optimizeSanityImage()` — Sanity CDN transforms

## Priority insertion points (implemented)

1. **Homepage** — hero visual column, explainer video block, testimonial thumbnails
2. **`/market-research`** — executive visual briefing after intro
3. **Strategic service template** — optional hero photo, visual briefing, proof video near CTA
4. **Contact** — split hero with trust image + GCC/EU coverage map in sidebar
