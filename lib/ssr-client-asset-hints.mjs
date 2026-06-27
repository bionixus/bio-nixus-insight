import fs from 'node:fs';
import path from 'node:path';

/**
 * Injected into SSR HTML before paint: stylesheet + early modulepreload hints.
 * Shared by server.js and api/indexnow-key.ts.
 */
export function getClientAssetHints(assetsDir = path.join(process.cwd(), 'dist', 'client', 'assets')) {
  if (!fs.existsSync(assetsDir)) {
    return [
      '<link rel="modulepreload" href="/assets/index.js" crossorigin>',
    ].join('\n');
  }

  const files = fs.readdirSync(assetsDir);
  const cssFile = files.find((f) => /^index-.*\.css$/.test(f));
  const reactVendor = files.find((f) => /^react-vendor-.*\.js$/.test(f));

  const hints = [];
  if (cssFile) {
    hints.push(`<link rel="preload" as="style" href="/assets/${cssFile}">`);
    hints.push(`<link rel="stylesheet" href="/assets/${cssFile}">`);
  }
  hints.push('<link rel="modulepreload" href="/assets/index.js" crossorigin>');
  if (reactVendor) {
    hints.push(`<link rel="modulepreload" href="/assets/${reactVendor}" crossorigin>`);
  }
  return hints.join('\n');
}

export function buildLcpPreloadTag(initialData) {
  const url = initialData?.lcpPreloadImageUrl;
  if (typeof url !== 'string' || !url.trim()) return '';
  const safe = String(url).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  return `<link rel="preload" as="image" href="${safe}" fetchpriority="high">`;
}

/** Inline in index.html — keeps LCP heroes visible before JS + full CSS load. */
export const CRITICAL_LCP_STYLE = `<style id="critical-lcp">
[data-report-hero] h1,[data-report-hero] img,[data-report-hero] figure,[data-hero-lcp] h1,[data-hero-lcp] .premium-fade-up,[data-hero-lcp] .premium-scale-in,.sr-lcp{opacity:1!important;transform:none!important;animation:none!important}
</style>`;
