/**
 * HTML sanitization safe in Node (Vercel serverless) and the browser.
 * Replaces isomorphic-dompurify/jsdom, which can fail or bloat SSR bundles.
 */
import sanitizeHtml from 'sanitize-html';
import { demoteH1TagsToH2 } from '../../lib/demote-blog-body-h1.mjs';

const BODY_SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    /* h1 stripped after demotion: hero owns the sole page h1 */
    'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'br', 'hr',
    'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'a', 'blockquote',
    'table', 'thead', 'tbody', 'tr', 'th', 'td', 'sub', 'sup',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target', 'rel', 'class', 'style', 'id'],
    '*': ['class', 'style', 'id'],
  },
  allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  allowProtocolRelative: false,
};

export function sanitizeBodyHtml(html: string): string {
  const demoted = demoteH1TagsToH2(html);
  return sanitizeHtml(demoted, BODY_SANITIZE_OPTIONS);
}
