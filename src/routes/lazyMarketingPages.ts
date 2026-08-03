/**
 * Marketing landings that were code-split to shrink the main entry bundle.
 *
 * These are all indexable pages, and lazy() + Suspense renders only the fallback
 * during renderToString, so crawlers received ~20 words of HTML instead of the
 * page. Indexable routes must be imported eagerly; only truly non-indexable
 * components belong in a lazy() barrel.
 */
export { default as ArMarketResearchUae } from '@/pages/ArMarketResearchUae';
export { default as ArMarketResearchKsa } from '@/pages/ArMarketResearchKsa';
export { default as ArMarketResearchSaudi } from '@/pages/ArMarketResearchSaudi';
export { default as ArMarketResearchKuwait } from '@/pages/ArMarketResearchKuwait';
export { default as ArMarketResearchEgypt } from '@/pages/ArMarketResearchEgypt';
export { default as AiChatbotsLeadGeneration } from '@/pages/AiChatbotsLeadGeneration';
export { default as ArTopMarketResearchCompaniesEgypt2026 } from '@/pages/ArTopMarketResearchCompaniesEgypt2026';
export { default as BionixusMarketResearchMiddleEast } from '@/pages/BionixusMarketResearchMiddleEast';
