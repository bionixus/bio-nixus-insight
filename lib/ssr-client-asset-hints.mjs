import fs from 'node:fs';
import path from 'node:path';

/**
 * Browser always revalidates HTML. Vercel CDN keeps a 1h fresh copy and
 * serves stale for 24h while revalidating. The previous 60s s-maxage expired
 * before CrUX users revisited a URL, so 142 desktop pages sat at LCP > 2.5s.
 */
export const SSR_HTML_CACHE_CONTROL = 'public, max-age=0, must-revalidate';
export const SSR_HTML_CDN_CACHE_CONTROL = 'public, s-maxage=3600, stale-while-revalidate=86400';
export const SSR_HTML_NOT_FOUND_CDN_CACHE_CONTROL = 'public, s-maxage=60, stale-while-revalidate=300';

/**
 * Injected into SSR HTML before paint: stylesheet only.
 * Do not modulepreload index.js here — that steals bandwidth from LCP text/CSS.
 * The footer module script still loads hydration JS after first paint.
 * Shared by server.js and api/indexnow-key.ts.
 */
export function getClientAssetHints(assetsDir = path.join(process.cwd(), 'dist', 'client', 'assets')) {
  if (!fs.existsSync(assetsDir)) {
    return '';
  }

  const files = fs.readdirSync(assetsDir);
  const cssFile = files.find((f) => /^index-.*\.css$/.test(f));
  if (!cssFile) return '';

  return [
    `<link rel="preload" as="style" href="/assets/${cssFile}">`,
    `<link rel="stylesheet" href="/assets/${cssFile}">`,
  ].join('\n');
}

export function buildLcpPreloadTag(initialData) {
  const url = initialData?.lcpPreloadImageUrl;
  if (typeof url !== 'string' || !url.trim()) return '';
  const safe = String(url).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  return `<link rel="preload" as="image" href="${safe}" fetchpriority="high">`;
}

/** Inline in index.html — keeps LCP heroes visible before JS + full CSS load. */
export const CRITICAL_LCP_STYLE = `<style id="critical-lcp">
:root{--background:0 0% 100%;--foreground:220 30% 15%;--primary:220 47% 15%;--primary-foreground:0 0% 100%;--muted:220 15% 96%;--muted-foreground:220 10% 45%;--border:220 15% 90%;--card:40 20% 98%;--accent:38 92% 50%}
html,body,#root{margin:0;background:#fff;color:#1a2744;font-family:system-ui,-apple-system,sans-serif}
body{min-height:100vh}
a{color:inherit;text-decoration:none}
header,nav{background:#fff}
.premium-hero-lcp-wash{background:#06101F}
[data-report-hero] h1,[data-report-hero] img,[data-report-hero] figure,[data-hero-lcp] h1,[data-hero-lcp] .premium-fade-up,[data-hero-lcp] .premium-scale-in,.sr-lcp,main h1{opacity:1!important;transform:none!important;animation:none!important;visibility:visible}
[data-report-hero] .report-chart-line,[data-report-hero] .report-bar-grow,[data-report-hero] .float-gentle,[data-report-hero] .float-gentle-delayed{animation:none!important;stroke-dashoffset:0!important;transform:none!important}
[data-hero-lcp]{background:#06101F}
main h1{font-family:Georgia,'Times New Roman',serif;font-weight:600;line-height:1.2;color:#1a2744}
[data-hero-lcp] h1,[data-hero-lcp] .sr-lcp{color:#FFFEFB!important;font-weight:300}
[data-hero-lcp] h1 em{color:#C9A84C!important}
</style>`;
