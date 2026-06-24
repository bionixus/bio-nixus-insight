# BioNixus media asset spec sheet

Use this sheet when producing or uploading images and video for site pages.

## Image formats and delivery

| Use case | Primary format | Fallback | Max file size |
|----------|----------------|----------|---------------|
| Hero (above fold) | AVIF | WebP, then JPEG | 180 KB |
| In-content figures | WebP | JPEG | 120 KB |
| Trust logos / icons | SVG or WebP | PNG | 40 KB |
| OG / social cards | PNG or JPEG | — | 300 KB |

## Target dimensions

| Placement | Render size | Source dimensions | Aspect ratio |
|-----------|-------------|-------------------|--------------|
| Homepage hero visual | 560×420 (desktop) | 1120×840 | 4:3 |
| Service hero photo | 640×480 | 1280×960 | 4:3 |
| Visual briefing figure | full column × 224px height | 800×448 | 16:9 |
| Contact trust photo | 480×360 | 960×720 | 4:3 |
| Coverage map graphic | 640×360 | 1280×720 | 16:9 |
| Case study card thumb | 400×240 | 800×480 | 5:3 |
| Video poster | 1280×720 | 1280×720 | 16:9 |

## Alt text rules

- Describe what the image shows and why it matters to the page topic.
- Include geography or service context when relevant (e.g. "GCC pharmaceutical market research workshop").
- Do not keyword-stuff; one primary phrase is enough.
- Decorative-only images: use `alt=""` and `aria-hidden` on wrapper if redundant.

## Video rules

| Type | Length | Format | Notes |
|------|--------|--------|-------|
| Homepage explainer | 30–90s | MP4 (H.264), poster WebP | No autoplay with sound; `preload="none"` |
| Service proof clip | 15–45s | MP4 + poster | Place near mid-page CTA |
| Testimonial clip | 30–60s | MP4 + poster + transcript | Caption file or on-page transcript required |

Store files under `/public/media/` with descriptive hyphenated names, e.g. `healthcare-market-research-overview.mp4`.

## Performance guardrails

- Lazy-load all media below the fold (`loading="lazy"`).
- Preload only one LCP hero image per page.
- Always set explicit `width` and `height` (or aspect-ratio container) to prevent CLS.
- Use `OptimizedImage` (`src/components/media/OptimizedImage.tsx`) for static assets.
- Sanity CDN images: use `optimizeSanityImage()` from `src/lib/image-utils.ts`.

## File naming

- Lowercase, hyphenated, keyword-rich: `quant-hcp-survey-executive.webp`
- No spaces, underscores, or camelCase in public URLs.

## QA before publish

- [ ] Alt text / transcript present
- [ ] File size within limits
- [ ] No layout shift on load
- [ ] CTA remains visible and unobstructed
- [ ] Page LCP unchanged or improved (PageSpeed / GSC CWV)
