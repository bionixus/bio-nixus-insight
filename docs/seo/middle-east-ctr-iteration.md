# CTR and Conversion Iteration Loop

Target URL:
- `https://www.bionixus.com/bionixus-market-research-middle-east`

## SERP Snippet Test Queue

Run one title/meta variant every 14 days and compare in GSC:

1. Title A:
   - `Middle East Pharmaceutical Market Research | GCC Evidence Programs | BioNixus`
2. Title B:
   - `Middle East Pharmaceutical Market Research for GCC Launch & Access | BioNixus`
3. Title C:
   - `GCC Pharmaceutical Market Research | Middle East Launch Strategy | BioNixus`

Meta baseline:
- Keep explicit GCC country references and decision intent (launch/access/growth).

## Measurement Cadence

- Weekly:
  - impressions
  - CTR
  - avg position
  - query deltas for this URL
- Biweekly:
  - adjust intro copy and section headings based on low-CTR high-impression terms
- Monthly:
  - update `last updated` stamp and add one fresh proof datapoint

## CTA Tracking Map

Event: `middle_east_cta_click`

Placements:
- `hero_primary`
- `mid_scroll`
- `final_cta`
- `sticky_mobile`
- `post_faq` (download brief)

## Conversion Attribution Setup

- Contact CTAs now use URL parameters:
  - `utm_source=middle-east-page`
  - `utm_medium=organic`
  - `utm_campaign=middle-east-pharma-research`
  - `utm_content=<placement>`

This enables clear placement-level conversion analysis in GA4.

