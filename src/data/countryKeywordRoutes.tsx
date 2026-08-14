import type { RouteObject } from 'react-router-dom';
import CountryKeywordPage from '@/pages/templates/CountryKeywordPage';
import { COUNTRY_KEYWORD_PAGES } from '@/data/countryKeywordPages';

/** Route objects for country Pharma Insights and RWE SEO pages. */
export function buildCountryKeywordRoutes(): RouteObject[] {
  return COUNTRY_KEYWORD_PAGES.map((content) => ({
    path: `/${content.slug}`,
    element: <CountryKeywordPage content={content} />,
  }));
}
