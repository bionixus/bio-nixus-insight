import type { RouteObject } from 'react-router-dom';
import SpecialtyMarketDemandPage from '@/pages/templates/SpecialtyMarketDemandPage';
import {
  SPECIALTY_MARKET_DEMAND_CONTENT,
} from '@/data/specialtyMarketDemandContent';

/** Route objects for GSC demand-driven specialty market pages. */
export function buildSpecialtyMarketDemandRoutes(): RouteObject[] {
  return SPECIALTY_MARKET_DEMAND_CONTENT.map((content) => ({
    path: `/${content.slug}`,
    element: <SpecialtyMarketDemandPage content={content} />,
  }));
}
