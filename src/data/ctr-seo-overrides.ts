/**
 * CTR-optimized exact title + meta description overrides.
 * Source of truth: lib/ctr-seo-overrides.mjs (also mirrored in src/server for Vite).
 */
export {
  CTR_SEO_BY_PATH,
  getCtrSeo,
  isCtrSeoPath,
} from '../server/ctr-seo-overrides.js';

export type CtrSeoOverride = {
  title: string;
  description: string;
};
