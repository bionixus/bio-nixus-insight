/**
 * The site template carries a pharmaceutical-first Organization node that lists every Google
 * Business Profile office. Pages that emit their own Organization node drop the template copy:
 * the non-pharma insights hub (a global Organization) and the Saudi obesity shortlist (current
 * offices only).
 */
const OWN_ORGANIZATION_PATHS = new Set([
  '/bionixus-industries/insights',
  '/blog/who-does-obesity-market-research-saudi-arabia',
  '/blog/glp-1-physician-survey-saudi-arabia',
  '/bionixus-industries/insights/customer-satisfaction-surveys-uae-csat-nps-ces',
  '/blog/obesity-market-research-kuwait',
]);

export function stripDefaultOrganizationJsonLd(html, pathname) {
  const clean = String(pathname || '/').split('?')[0].split('#')[0] || '/';
  const path = clean === '/' ? '/' : clean.replace(/\/+$/, '');
  if (!OWN_ORGANIZATION_PATHS.has(path)) return html;
  return String(html).replace(
    /<!-- org-schema:start[\s\S]*?<!-- org-schema:end -->/,
    '<!-- org-schema:start --><!-- org-schema:end -->',
  );
}
