import type { RouteObject } from 'react-router-dom';
import IndustryCompaniesDirectoryPage from '@/pages/templates/IndustryCompaniesDirectoryPage';
import { INDUSTRY_COMPANY_DIRECTORIES } from '@/data/industryCompanyDirectories';

/** Route objects for FMCG, retail, and real-estate company directories (18 pages). */
export function buildIndustryDirectoryRoutes(): RouteObject[] {
  return INDUSTRY_COMPANY_DIRECTORIES.map((dir) => ({
    path: dir.path,
    element: <IndustryCompaniesDirectoryPage industry={dir.industry} countrySlug={dir.countrySlug} />,
  }));
}

/** Sitemap entries for later generate-sitemap.js wiring — do not import from routes.tsx yet. */
export function getIndustryDirectorySitemapPages(): Array<{
  path: string;
  lastmod: string;
  priority: string;
  changefreq: string;
}> {
  return INDUSTRY_COMPANY_DIRECTORIES.map((dir) => ({
    path: dir.path,
    lastmod: dir.modifiedDate,
    priority: '0.8',
    changefreq: 'monthly',
  }));
}
