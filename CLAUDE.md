# BioNixus site — operational notes for Claude Code

## Top 10 highest-impression pages (Lighthouse / Core Web Vitals watch list)

**Note on sourcing:** the Google Search Console MCP connector configured for this
project (Ahrefs-bundled `gsc-pages` tool) returned `Insufficient plan` when queried,
so this list is **not** derived from real GSC impression data. It's a defensible
proxy based on site architecture — the pages with the most inbound internal links,
top commercial priority (per explicit country prioritization: USA, Saudi Arabia,
UAE, Turkey, Egypt), and highest keyword-intent value. Replace this list with a
real GSC impressions export (Search Console → Performance → Pages, sort by
Impressions) as soon as GSC access is available, and re-run the Lighthouse audit
against the real list.

1. `/` — homepage
2. `/healthcare-market-research` — global hub page
3. `/iqvia-alternative` — vendor-comparison / bottom-funnel page
4. `/saudi-arabia-healthcare-market-report`
5. `/uae-healthcare-market-report`
6. `/gcc-pharma-market-report-2026`
7. `/gcc-medical-devices-market-report`
8. `/healthcare-market-research/saudi-arabia`
9. `/pharmaceutical-companies-saudi-arabia`
10. `/pharmaceutical-companies-uae`

## Internal-link crawl report

Run `node scripts/internal-link-crawler.mjs` after building both the client and
SSR bundles (`npx vite build --outDir dist/client && npx vite build --ssr
src/server-entry.ts --outDir dist/server`) to regenerate
`scripts/data/internal-link-crawl-report.{json,md}` — an orphan-page / low-inbound-link
/ possibly-broken-link report crawled directly from the built site's SSR output.

Known limitation: pages under `/blog/`, `/case-studies/`, `/news/`, and the
`/bionixus-industries/insights/` and locale blog silos are Sanity-CMS-driven. The
crawler calls `render()` without the `initialData` that production's
`fetchRouteData()` (see `server.js`) supplies, so genuinely CMS-only posts render a
generic fallback state rather than their real body — undercounting their real
outbound links. Run the crawler in an environment with live Sanity access (or wire
in real `initialData`) for full accuracy on those silos.
