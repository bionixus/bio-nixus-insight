import { readFileSync } from 'node:fs';
import { XMLParser } from 'fast-xml-parser';

/**
 * Parse a sitemap.xml file (or sitemap-index, followed one level deep) into
 * a flat list of absolute URLs. Only <loc> is used for the crawl set — the
 * per-page hreflang tags found in <xhtml:link> entries are NOT trusted here;
 * they're validated against the actual rendered page (R09/R10) instead.
 */
export function parseSitemapUrls(xml) {
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
  const doc = parser.parse(xml);

  if (doc.sitemapindex) {
    const entries = toArray(doc.sitemapindex.sitemap);
    return entries.map((e) => e.loc).filter(Boolean);
  }

  if (doc.urlset) {
    const entries = toArray(doc.urlset.url);
    return entries.map((e) => e.loc).filter(Boolean);
  }

  return [];
}

function toArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

/**
 * Load a sitemap from a local file path or fetch it from a base URL.
 * Resolves one level of sitemap-index nesting by fetching each child sitemap.
 */
export async function loadSitemapUrls({ file, base, fetchImpl = fetch }) {
  let xml;
  if (file) {
    xml = readFileSync(file, 'utf-8');
  } else {
    const res = await fetchImpl(`${base.replace(/\/$/, '')}/sitemap.xml`);
    xml = await res.text();
  }

  const urls = parseSitemapUrls(xml);
  const isIndex = /<sitemapindex/i.test(xml);
  if (!isIndex) return urls;

  // urls here are actually child sitemap URLs — fetch and flatten one level.
  const all = [];
  for (const childUrl of urls) {
    try {
      const res = await fetchImpl(childUrl);
      const childXml = await res.text();
      all.push(...parseSitemapUrls(childXml));
    } catch {
      // ignore unreachable child sitemap; the crawl will simply be incomplete for it
    }
  }
  return all;
}
