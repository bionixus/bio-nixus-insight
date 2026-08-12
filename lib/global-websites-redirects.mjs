/**
 * 301 /global-websites → /healthcare-market-research (AGENTS.md / .cursorrules).
 * Keep slug aliases in sync with healthcare hub canonicals (uae, uk).
 */

const GLOBAL_WEBSITES_SLUG_ALIASES = {
  'united-arab-emirates': 'uae',
  'united-kingdom': 'uk',
};

/**
 * @param {string} pathname
 * @returns {string | null}
 */
export function resolveGlobalWebsitesRedirect(pathname) {
  const raw = typeof pathname === 'string' ? pathname.split('?')[0] : '';
  const path = raw.length > 1 && raw.endsWith('/') ? raw.replace(/\/+$/, '') : raw;
  if (path === '/global-websites') return '/healthcare-market-research';
  if (!path.startsWith('/global-websites/')) return null;
  const slug = path.slice('/global-websites/'.length).replace(/\/+$/, '');
  if (!slug || slug.includes('/')) return null;
  const hubSlug = GLOBAL_WEBSITES_SLUG_ALIASES[slug] ?? slug;
  return `/healthcare-market-research/${hubSlug}`;
}
