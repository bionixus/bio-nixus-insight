import type { RouteObject } from 'react-router-dom';
import CompetitorAlternativePage from '@/pages/templates/CompetitorAlternativePage';
import { COMPETITOR_ALTERNATIVES } from '@/data/competitorAlternatives';

/** Route objects for Kantar / Nielsen / GfK / IMS Health / IQVIA-KSA comparison pages. */
export function buildCompetitorAlternativeRoutes(): RouteObject[] {
  return COMPETITOR_ALTERNATIVES.map((config) => ({
    path: config.path,
    element: <CompetitorAlternativePage config={config} />,
  }));
}
