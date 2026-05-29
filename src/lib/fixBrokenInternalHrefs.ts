/**
 * Re-export shared Ahrefs internal-link fixer (canonical logic in lib/fix-broken-internal-hrefs.mjs).
 */
export {
  fixBrokenInternalHref,
  fixBrokenInternalHrefsInHtml,
  GCC_STANDALONE_REPORT_PATHS,
  HREF_REWRITES,
} from '../../lib/fix-broken-internal-hrefs.mjs';
