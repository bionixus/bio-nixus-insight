/** Google Discover large image previews. Never introduces noindex. */
export const MAX_IMAGE_PREVIEW = 'max-image-preview:large';

const ROBOTS_META_RE = /<meta\b[^>]*\bname\s*=\s*(["'])robots\1[^>]*>/gi;

export function withMaxImagePreview(content) {
  const parts = String(content || '')
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length === 0) return MAX_IMAGE_PREVIEW;
  if (parts.some((part) => part.toLowerCase() === MAX_IMAGE_PREVIEW)) {
    return parts.join(', ');
  }
  return [...parts, MAX_IMAGE_PREVIEW].join(', ');
}

function readContent(tag) {
  const match = tag.match(/\bcontent\s*=\s*(["'])([\s\S]*?)\1/i);
  return match ? match[2] : '';
}

function writeContent(tag, content) {
  if (/\bcontent\s*=\s*(["'])[\s\S]*?\1/i.test(tag)) {
    return tag.replace(/\bcontent\s*=\s*(["'])[\s\S]*?\1/i, `content="${content}"`);
  }
  return tag.replace(/<meta\b/i, `<meta content="${content}"`);
}

function mergedContent(tags) {
  const seen = new Set();
  const ordered = [];
  for (const tag of tags) {
    for (const part of readContent(tag).split(',')) {
      const directive = part.trim();
      if (!directive) continue;
      const key = directive.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      ordered.push(directive);
    }
  }
  if (!seen.has(MAX_IMAGE_PREVIEW)) {
    ordered.push(MAX_IMAGE_PREVIEW);
    seen.add(MAX_IMAGE_PREVIEW);
  }
  const hasNoindex = seen.has('noindex');
  const hasNofollow = seen.has('nofollow');
  return ordered
    .filter((directive) => {
      const key = directive.toLowerCase();
      if (hasNoindex && key === 'index') return false;
      if (hasNofollow && key === 'follow') return false;
      return true;
    })
    .join(', ');
}

/**
 * One robots meta on the page, with max-image-preview:large merged in.
 * Leaves a tag that already has the directive untouched so Helmet's data-rh attribute stays.
 */
export function ensureRobotsMeta(html) {
  if (!html || typeof html !== 'string') return html;
  const tags = html.match(ROBOTS_META_RE) || [];
  if (tags.length === 0) {
    if (!/<\/head>/i.test(html)) return html;
    return html.replace(/<\/head>/i, `<meta name="robots" content="${MAX_IMAGE_PREVIEW}">\n</head>`);
  }
  if (tags.length === 1 && readContent(tags[0]).toLowerCase().includes(MAX_IMAGE_PREVIEW)) {
    return html;
  }
  const content = mergedContent(tags);
  let used = false;
  return html.replace(ROBOTS_META_RE, (tag) => {
    if (used) return '';
    used = true;
    return writeContent(tag, content);
  });
}
