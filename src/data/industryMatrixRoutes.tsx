import type { RouteObject } from 'react-router-dom';
import IndustryCountryBofuPage from '@/pages/templates/IndustryCountryBofuPage';
import TopIndustryMarketResearchListicle from '@/pages/templates/TopIndustryMarketResearchListicle';
import {
  getAllPublishedMatrixPairs,
  getIndustryBofuPath,
  getIndustryListiclePath,
} from '@/data/industryMarketResearchMatrix';

/** Route objects for all published country × industry matrix pages. */
export function buildIndustryMatrixRoutes(): RouteObject[] {
  const routes: RouteObject[] = [];
  for (const { countrySlug, industrySlug } of getAllPublishedMatrixPairs()) {
    routes.push({
      path: getIndustryBofuPath(countrySlug, industrySlug),
      element: <IndustryCountryBofuPage countrySlug={countrySlug} industrySlug={industrySlug} />,
    });
    routes.push({
      path: getIndustryListiclePath(countrySlug, industrySlug),
      element: <TopIndustryMarketResearchListicle countrySlug={countrySlug} industrySlug={industrySlug} />,
    });
  }
  return routes;
}
