/**
 * Blog SSR mixes static <meta> tags (no data-rh) with react-helmet-async tags
 * (data-rh="true"). Crawlers then see two og:title / og:description / og:image
 * values, and the client Helmet inserts a second data-rh tag beside each static one.
 * Keep one of each, marked data-rh so Helmet reuses it on hydrate.
 */

const DEDUPED_PROPERTIES = ['og:title', 'og:description', 'og:image'];

export function isBlogOpenGraphPath(pathname) {
  const path = String(pathname || '/')
    .split('?')[0]
    .split('#')[0]
    .replace(/\/+$/, '') || '/';
  if (path === '/blog' || path === '/ar/blog') return true;
  if (/^\/(?:ar\/)?blog\/[^/]+$/.test(path)) return true;
  if (/^\/bionixus-industries\/insights\/[^/]+$/.test(path)) return true;
  return false;
}

function propertyOf(tag) {
  const match = tag.match(/\bproperty\s*=\s*(["'])([^"']+)\1/i);
  return match ? match[2].toLowerCase() : '';
}

function contentOf(tag) {
  const match = tag.match(/\bcontent\s*=\s*(["'])([^"']*)\1/i);
  return match ? match[2] : '';
}

function hasDataRh(tag) {
  return /\bdata-rh\s*=/i.test(tag);
}

function withDataRh(tag) {
  if (hasDataRh(tag)) return tag;
  return tag.replace(/<meta\b/i, '<meta data-rh="true"');
}

function isFallbackOgImage(tag) {
  return /\/og-image\.png(?:["'?&\s]|$)/i.test(contentOf(tag));
}

function pickTag(property, tags) {
  let pool = tags;
  if (property === 'og:image') {
    const real = tags.filter((tag) => !isFallbackOgImage(tag));
    if (real.length > 0) pool = real;
  }
  return pool.find(hasDataRh) || pool[pool.length - 1];
}

function dedupeHead(head) {
  const tags = [];
  const re = /<meta\b[^>]*>/gi;
  let match;
  while ((match = re.exec(head))) {
    const property = propertyOf(match[0]);
    if (!DEDUPED_PROPERTIES.includes(property)) continue;
    tags.push({ property, tag: match[0], index: match.index, length: match[0].length });
  }
  if (tags.length === 0) return head;

  const byProperty = new Map();
  for (const entry of tags) {
    const list = byProperty.get(entry.property) || [];
    list.push(entry);
    byProperty.set(entry.property, list);
  }

  const removals = [];
  for (const [property, entries] of byProperty) {
    const chosen = pickTag(property, entries.map((entry) => entry.tag));
    const chosenEntry = entries.find((entry) => entry.tag === chosen) || entries[entries.length - 1];
    const stamped = withDataRh(chosenEntry.tag);
    if (stamped !== chosenEntry.tag) {
      removals.push({ index: chosenEntry.index, length: chosenEntry.length, replacement: stamped });
    }
    for (const entry of entries) {
      if (entry === chosenEntry) continue;
      removals.push({ index: entry.index, length: entry.length, replacement: '' });
    }
  }

  removals.sort((a, b) => b.index - a.index);
  let next = head;
  for (const removal of removals) {
    next = `${next.slice(0, removal.index)}${removal.replacement}${next.slice(removal.index + removal.length)}`;
  }
  return next;
}

export function dedupeBlogOpenGraphTags(html, pathname) {
  if (!isBlogOpenGraphPath(pathname)) return html;
  const match = html.match(/<head\b[^>]*>[\s\S]*?<\/head>/i);
  if (!match) return html;
  const deduped = dedupeHead(match[0]);
  if (deduped === match[0]) return html;
  return `${html.slice(0, match.index)}${deduped}${html.slice(match.index + match[0].length)}`;
}
