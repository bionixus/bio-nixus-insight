/**
 * Client-side code-split marketing landings (React.lazy).
 * SSR uses lazyMarketingPages.ssr.ts (eager) via the Vite `ssr-route-split` plugin.
 */
import { lazy } from 'react';

export const ArMarketResearchUae = lazy(() => import('@/pages/ArMarketResearchUae'));
export const ArMarketResearchKsa = lazy(() => import('@/pages/ArMarketResearchKsa'));
export const ArMarketResearchSaudi = lazy(() => import('@/pages/ArMarketResearchSaudi'));
export const ArMarketResearchKuwait = lazy(() => import('@/pages/ArMarketResearchKuwait'));
export const ArMarketResearchEgypt = lazy(() => import('@/pages/ArMarketResearchEgypt'));
export const AiChatbotsLeadGeneration = lazy(() => import('@/pages/AiChatbotsLeadGeneration'));
export const ArTopMarketResearchCompaniesEgypt2026 = lazy(
  () => import('@/pages/ArTopMarketResearchCompaniesEgypt2026'),
);
export const BionixusMarketResearchMiddleEast = lazy(
  () => import('@/pages/BionixusMarketResearchMiddleEast'),
);
export const Index = lazy(() => import('@/pages/Index'));
