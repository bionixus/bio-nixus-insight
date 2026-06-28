import type { RouteObject } from 'react-router-dom';
import DevelopedMarketMedtechPage from '@/pages/templates/DevelopedMarketMedtechPage';
import DevelopedMarketMedtechListiclePage from '@/pages/templates/DevelopedMarketMedtechListiclePage';
import {
  DEVELOPED_MARKET_MEDTECH_SLUGS,
  getDevelopedMarketMedtechListiclePath,
  getDevelopedMarketMedtechPath,
} from '@/data/developedMarketMedtechPages';

/** Route objects for developed-market MedTech BOFU pages (Americas, Europe, APAC). */
export function buildDevelopedMarketMedtechRoutes(): RouteObject[] {
  const routes: RouteObject[] = [];
  for (const slug of DEVELOPED_MARKET_MEDTECH_SLUGS) {
    routes.push({
      path: getDevelopedMarketMedtechPath(slug),
      element: <DevelopedMarketMedtechPage countrySlug={slug} />,
    });
    routes.push({
      path: getDevelopedMarketMedtechListiclePath(slug),
      element: <DevelopedMarketMedtechListiclePage countrySlug={slug} />,
    });
  }
  return routes;
}
