/**
 * Central registry of all data-driven country listicle pages.
 *
 * Every config added here automatically gets:
 *  - a route in src/routes.tsx (via buildTopCompaniesRoutes)
 *  - a sitemap entry + hreflang group (via scripts/emit-topcompanies-manifest.mjs
 *    → scripts/data/topcompanies-manifest.json → scripts/generate-sitemap.mjs)
 *
 * Keep this file free of JSX/React imports — the manifest emitter bundles it
 * with esbuild for Node.
 */
import type { CountryListicleConfig } from './types';

import { qatarGeneralEn } from './mena/qatar.general.en';

export const allListicleConfigs: CountryListicleConfig[] = [
  qatarGeneralEn,
];
