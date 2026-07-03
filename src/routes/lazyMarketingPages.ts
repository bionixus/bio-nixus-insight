import { lazy } from 'react';

/** Code-split marketing landings that were bloating the main entry bundle. */
export const ArMarketResearchUae = lazy(() => import('@/pages/ArMarketResearchUae'));
export const ArMarketResearchKsa = lazy(() => import('@/pages/ArMarketResearchKsa'));
export const ArMarketResearchSaudi = lazy(() => import('@/pages/ArMarketResearchSaudi'));
export const ArMarketResearchKuwait = lazy(() => import('@/pages/ArMarketResearchKuwait'));
export const ArMarketResearchEgypt = lazy(() => import('@/pages/ArMarketResearchEgypt'));
export const AiChatbotsLeadGeneration = lazy(() => import('@/pages/AiChatbotsLeadGeneration'));
export const ArTopMarketResearchCompaniesEgypt2026 = lazy(
  () => import('@/pages/ArTopMarketResearchCompaniesEgypt2026'),
);
/** Eager import — SEO pillar; lazy()+Suspense breaks renderToString SSR. */
export { default as BionixusMarketResearchMiddleEast } from '@/pages/BionixusMarketResearchMiddleEast';
