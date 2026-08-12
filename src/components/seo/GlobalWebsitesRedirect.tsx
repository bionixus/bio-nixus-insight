import { Navigate, useParams } from 'react-router-dom';

const SLUG_ALIASES: Record<string, string> = {
  'united-arab-emirates': 'uae',
  'united-kingdom': 'uk',
};

/** Client-side mirror of Express/Vercel `/global-websites` → healthcare hub 301s. */
export function GlobalWebsitesRedirect() {
  return <Navigate to="/healthcare-market-research" replace />;
}

export function GlobalWebsitesCountryRedirect() {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const slug = countrySlug ? (SLUG_ALIASES[countrySlug] ?? countrySlug) : '';
  if (!slug) return <Navigate to="/healthcare-market-research" replace />;
  return <Navigate to={`/healthcare-market-research/${slug}`} replace />;
}
