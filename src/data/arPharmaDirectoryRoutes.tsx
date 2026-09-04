import type { RouteObject } from 'react-router-dom';
import { ArPharmaCompaniesDirectoryPage } from '@/routes/lazySeoPages';
import { AR_PHARMA_DIRECTORIES } from '@/data/arPharmaDirectories';

/** Route objects for Arabic pharmaceutical company directories (6 GCC/MENA pages). */
export function buildArPharmaDirectoryRoutes(): RouteObject[] {
  return AR_PHARMA_DIRECTORIES.map((dir) => ({
    path: dir.path,
    element: <ArPharmaCompaniesDirectoryPage countrySlug={dir.countrySlug} />,
  }));
}
