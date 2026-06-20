import type { RouteObject } from 'react-router-dom';
import IndustryCountryBofuPage from '@/pages/templates/IndustryCountryBofuPage';
import TopIndustryMarketResearchListicle from '@/pages/templates/TopIndustryMarketResearchListicle';
import {
  getAllPublishedMatrixPairs,
  getIndustryBofuPath,
  getIndustryListiclePath,
} from '@/data/industryMarketResearchMatrix';
import { DEDICATED_INDUSTRY_LISTICLE_PATHS } from '@/data/industry-listicle-clusters';

/** Route objects for all published country × industry matrix pages. */
export function buildIndustryMatrixRoutes(): RouteObject[] {
  const routes: RouteObject[] = [];
  for (const { countrySlug, industrySlug } of getAllPublishedMatrixPairs()) {
    routes.push({
      path: getIndustryBofuPath(countrySlug, industrySlug),
      element: <IndustryCountryBofuPage countrySlug={countrySlug} industrySlug={industrySlug} />,
    });
    const listiclePath = getIndustryListiclePath(countrySlug, industrySlug);
    if (DEDICATED_INDUSTRY_LISTICLE_PATHS.has(listiclePath)) {
      continue;
    }
    routes.push({
      path: listiclePath,
      element: <TopIndustryMarketResearchListicle countrySlug={countrySlug} industrySlug={industrySlug} />,
    });
  }
  return routes;
}
