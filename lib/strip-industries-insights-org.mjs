/**
 * The site template carries a pharmaceutical-first Organization node.
 * On the non-pharma insights hub the page emits its own global Organization,
 * so the template copy is removed for that URL only.
 */
export function stripDefaultOrganizationJsonLd(html, pathname) {
  const clean = String(pathname || '/').split('?')[0].split('#')[0] || '/';
  const path = clean === '/' ? '/' : clean.replace(/\/+$/, '');
  if (path !== '/bionixus-industries/insights') return html;
  return String(html).replace(
    /<!-- org-schema:start[\s\S]*?<!-- org-schema:end -->/,
    '<!-- org-schema:start --><!-- org-schema:end -->',
  );
}
