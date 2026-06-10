/**
 * Blog article HTML from CMS often starts with <h1> that duplicates the page hero <h1>.
 * Demotes all body <h1> to <h2> for semantic single-h1-per-page SEO.
 */

export function demoteH1TagsToH2(html) {
  if (typeof html !== 'string') return '';
  if (!/<h1\b/i.test(html)) return html;
  let out = html.replace(/<h1(\s[^>]*)?>/gi, '<h2$1>');
  out = out.replace(/<\/h1>/gi, '</h2>');
  return out;
}

/** Removes accidental full HTML documents pasted into CMS bodyHtml (duplicate <title> audit). */
export function stripEmbeddedDocumentMarkupFromBlogHtml(html) {
  if (typeof html !== 'string') return '';
  return html
    .replace(/<!DOCTYPE[^>]*>/gi, '')
    .replace(/<head\b[\s\S]*?<\/head>/gi, '')
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<\/?html[^>]*>/gi, '')
    .replace(/<\/?body[^>]*>/gi, '')
    .trim();
}

export function prepareBlogBodyHtml(html) {
  return demoteH1TagsToH2(stripEmbeddedDocumentMarkupFromBlogHtml(html));
}
