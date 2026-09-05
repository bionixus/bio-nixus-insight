# BIONIXUS SEO PROJECT CONTEXT

## Business
- Bionixus: primary market research + market access consulting for pharma, medical
  devices, and healthcare.
- Minimum deal size: $20,000 USD. Ideal client: pharma/medtech companies needing
  PRIMARY market research.
- Priority markets (in order): GCC (Saudi, UAE, Qatar, Kuwait, Oman, Bahrain), USA,
  Turkey, Egypt & wider Middle East, G5 Europe (UK, Germany, France, Italy, Spain),
  Brazil, China, South Korea, Singapore, Malaysia.
- Positioning: the agile, region-specialist alternative to IQVIA and Kantar Health.

## KPI targets (from Google Search Console)
- Baseline (Jul 2026, last 7 days): 3,700 impressions/day, ~30 clicks/day,
  CTR 0.82%, avg position ~30. Contact form: 0-1 leads/month currently.
- Targets: 15,000 impressions/day, CTR 3%, avg position 5, 5-7 qualified
  form leads/day.

## Known data facts (do not re-derive; these are from real GSC exports)
- Two pages hold 26% of impressions at unusable positions:
  /gcc-medical-devices-market-report (3,833 impr, pos 54)
  /japan-medical-devices-market-report (2,987 impr, pos 51)
- Winning cluster: /pharmaceutical-companies-{country} pages rank pos 6-12.
- Money queries currently underperforming: "iqvia competitors" (pos 7.2),
  "companies like iqvia" (pos 8.7), "healthcare market research companies"
  (pos 41), "market research companies in egypt" (pos 14.8),
  "heor consulting" (pos 50).
- Desktop: pos 33.8, CTR 0.64%. Mobile: pos 8.9, CTR 2.08%.
- USA = 8,683 impr/week at pos 37 (biggest untapped market).

## Engineering rules
0. Stack note: this is a custom Node.js server (NOT Next.js). Confirm whether
   pages are server-rendered templates / static HTML (good) or a client-side
   SPA. If any indexable page's text content is NOT present in the raw HTML
   (view-source), flag it to me as PRIORITY ZERO before doing anything else —
   server-side rendering of content pages comes before every other task in
   this plan, because Google and AI crawlers (GPTBot, ClaudeBot,
   PerplexityBot) cannot read JS-only content.
1. Never change a URL/slug of an existing indexed page. If a URL must change,
   implement a 301 redirect and update the sitemap.
2. Every page must have: unique <title> (50-60 chars), unique meta description
   (150-160 chars), exactly one H1, canonical tag, OpenGraph + Twitter tags,
   JSON-LD schema appropriate to page type.
3. All new content pages must be server-rendered / statically generated HTML
   (no client-only rendering) so Googlebot and AI crawlers can read them
   without executing JS.
4. Every content change updates dateModified in schema and sitemap <lastmod>.
5. Performance budget: LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile.
6. After each task, output a DEPLOY CHECKLIST of files changed.

## Editorial authors
- USA, Canada, Europe: European or American names from the Sanity author roster (`src/data/editorialAuthors.ts`). Never Arab names on those pages.
- Middle East / GCC / MENA: keep Arab names (Mohammad Ashour, Dina Ibrahim).
- Never attribute Mohammad Alsaadany on “best / top market research companies” comparison pages.
- Blogs: retarget authors to this rule and republish unless GSC shows position ≤ 20 or clicks > 0.
