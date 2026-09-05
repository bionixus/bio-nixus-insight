import type { RouteObject } from 'react-router-dom';
import { CompanyDirectoryPage, DirectoryHubPage } from '@/routes/lazySeoPages';
import { COMPANY_DIRECTORY_HUBS, TEMPLATE_DIRECTORIES } from '@/data/companyDirectories';

/**
 * Routes for every data-driven company directory (the 18 pre-matrix FMCG /
 * retail / real-estate pages plus all registry spokes) and for the master /
 * country / entity hubs. Spread into src/routes.tsx.
 */
export function buildCompanyDirectoryRoutes(): RouteObject[] {
  return [
    ...TEMPLATE_DIRECTORIES.map((dir) => ({
      path: dir.path,
      element: <CompanyDirectoryPage path={dir.path} />,
    })),
    ...COMPANY_DIRECTORY_HUBS.map((hub) => ({
      path: hub.path,
      element: <DirectoryHubPage path={hub.path} />,
    })),
  ];
}
