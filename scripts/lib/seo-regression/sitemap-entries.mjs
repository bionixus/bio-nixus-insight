import { XMLParser } from 'fast-xml-parser';

/** Richer sitemap parse for S02 hygiene checks: {loc, lastmod} per entry, in document order (dup detection needs this). */
export function parseSitemapEntries(xml) {
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
  const doc = parser.parse(xml);
  if (!doc.urlset) return [];
  const entries = Array.isArray(doc.urlset.url) ? doc.urlset.url : [doc.urlset.url];
  return entries.filter(Boolean).map((e) => ({ loc: e.loc, lastmod: e.lastmod ?? null }));
}
