import { canonicalRedirectTarget } from './seo-noise-query.mjs';

/**
 * Edge middleware. Campaign query strings (utm_*, gclid, fbclid) are not
 * redirected. A leaked `path` or `splat` capture, an internal `__ssr`/`trk`
 * flag, or a trailing slash still 301s, with attribution params kept.
 */
export const config = {
  matcher: '/((?!api/|assets/).*)',
};

export default function middleware(request) {
  const url = new URL(request.url);
  const target = canonicalRedirectTarget(`${url.pathname}${url.search}`);
  if (!target.changed || target.full === `${url.pathname}${url.search}`) return;

  const next = new URL(url.origin);
  const qIndex = target.full.indexOf('?');
  next.pathname = qIndex >= 0 ? target.full.slice(0, qIndex) : target.full;
  next.search = qIndex >= 0 ? target.full.slice(qIndex) : '';
  return Response.redirect(next.toString(), 301);
}
