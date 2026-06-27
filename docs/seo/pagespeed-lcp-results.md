# PageSpeed LCP — baseline and post-change metrics

## CSV baseline (mobile lab, pre-change)

Sample from `Pagespeed report for www.bionixus.com (2).csv`:

| URL | Score | LCP (ms) |
|-----|-------|----------|
| `/ar/blog/...` (worst) | 46–55 | 6350–8250 |
| `/bahrain-healthcare-market-report` | 50 | 6401 |
| `/` | 57 | 6391 |
| `/about` | 82 | 2852 |
| `/ar/strategic-portfolio` (static HTML) | 76 | 4208 |

Most SSR routes clustered near **6.3s LCP** — consistent with a shared JS boot bottleneck.

## Build metrics (after code-splitting)

| Asset | Before (approx.) | After |
|-------|------------------|-------|
| `dist/client/assets/index.js` (gzip) | ~745 KB | **~559 KB** |

Lazy chunks now include `BlogPost`, `HealthcareReportPage`, per-country report pages, and `charts` (deferred via `ReportTherapySpendChartLazy`).

## Changes shipped in this pass

1. **`hydrateRoot`** — preserve SSR markup; no `innerHTML` wipe before paint.
2. **Blog LCP preload** — `lcpPreloadImageUrl` in `fetchRouteData` + `<link rel="preload" as="image">` in SSR head.
3. **Route code-splitting** — [`src/routes/lazyReportPages.ts`](../../src/routes/lazyReportPages.ts) and [`src/routes/lazyMarketingPages.ts`](../../src/routes/lazyMarketingPages.ts).
4. **Deferred Recharts** — [`ReportTherapySpendChartLazy`](../../src/components/report-premium/ReportTherapySpendChartLazy.tsx).
5. **SEO share image** — smaller, `fetchpriority="low"`, inserted after first hero `<h1>` section.
6. **`modulepreload` + CSS preload** — [`lib/ssr-client-asset-hints.mjs`](../../lib/ssr-client-asset-hints.mjs), production [`server.js`](../../server.js), and [`api/indexnow-key.ts`](../../api/indexnow-key.ts).
7. **Critical LCP CSS** — inline `<style id="critical-lcp">` in [`index.html`](../../index.html) plus `.sr-lcp` / `[data-hero-lcp]` rules in [`src/index.css`](../../src/index.css) so hero headings paint before scroll-reveal JS.
8. **Deferred analytics** — GTM, GA4, Statsig, and Vercel Analytics load after 3s idle (`DeferredAnalytics` in [`src/App.tsx`](../../src/App.tsx)).
9. **Scroll-reveal LCP fix** — report/home heroes use `.sr-lcp`; in-viewport `.sr` elements reveal immediately in [`useScrollReveal`](../../src/hooks/useScrollReveal.ts).

## Re-test after deploy (mobile)

```bash
npx lighthouse "https://www.bionixus.com/" \
  --only-categories=performance --form-factor=mobile \
  --output=json --output-path=./lighthouse-home.json

npx lighthouse "https://www.bionixus.com/bahrain-healthcare-market-report" \
  --only-categories=performance --form-factor=mobile \
  --output=json --output-path=./lighthouse-bahrain.json

npx lighthouse "https://www.bionixus.com/about" \
  --only-categories=performance --form-factor=mobile \
  --output=json --output-path=./lighthouse-about.json
```

**Targets:** typical SSR routes LCP &lt; 4.0s; maintain `/about` ~2.8s or better.

Compare JSON `categories.performance.score` and `audits['largest-contentful-paint'].numericValue` against the CSV baseline above.
