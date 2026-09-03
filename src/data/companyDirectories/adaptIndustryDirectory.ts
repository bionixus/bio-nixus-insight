import type { IndustryDirectoryConfig } from '@/data/industryCompanyDirectories';
import { DIRECTORY_COUNTRIES } from './countries';
import { DIRECTORY_ENTITIES } from './entities';
import { DIRECTORY_MASTER_HUB_PATH, countryHubPath, hasCountryHub, hasEntityHub } from './build';
import type { DirectoryCountrySlug, DirectoryEntitySlug, DirectoryPageConfig } from './types';

const INDUSTRY_TO_ENTITY: Record<IndustryDirectoryConfig['industry'], DirectoryEntitySlug> = {
  fmcg: 'fmcg-companies',
  retail: 'retail-companies',
  'real-estate': 'real-estate-companies',
};

/**
 * Adapt one of the 18 pre-matrix FMCG / retail / real-estate configs so the shared
 * `CompanyDirectoryPage` template can render it. Title, H1, path and related links
 * are preserved exactly (these URLs are indexed).
 */
export function adaptIndustryDirectory(cfg: IndustryDirectoryConfig): DirectoryPageConfig {
  const entity = INDUSTRY_TO_ENTITY[cfg.industry];
  const countrySlug = cfg.countrySlug as DirectoryCountrySlug;
  return {
    entity,
    countrySlug,
    path: cfg.path,
    title: cfg.title,
    h1: cfg.h1,
    metaDescription: cfg.metaDescription,
    introLead: cfg.introLead,
    introRest: cfg.introRest,
    stats: cfg.stats,
    channelHeading: cfg.channelHeading,
    channelBody: cfg.channelBody,
    companies: cfg.companies,
    categoryBlurbs: cfg.categoryBlurbs,
    growthDrivers: cfg.growthDrivers,
    faq: cfg.faq,
    regulatorSource: cfg.regulatorSource,
    sources: cfg.sources ?? [],
    fieldNotes: cfg.fieldNotes ?? [],
    entityMeta: DIRECTORY_ENTITIES[entity],
    country: DIRECTORY_COUNTRIES[countrySlug],
    listicleTo: cfg.listicleTo,
    listicleLabel: cfg.listicleLabel,
    bofuTo: cfg.bofuTo,
    bofuLabel: `${cfg.industryLabel} market research in ${cfg.countryDisplay}`,
    relatedLinks: cfg.relatedLinks,
    hubs: {
      master: DIRECTORY_MASTER_HUB_PATH,
      country: hasCountryHub(countrySlug) ? countryHubPath(countrySlug) : undefined,
      entity: hasEntityHub(entity) ? DIRECTORY_ENTITIES[entity].hubPath : undefined,
    },
    publishedDate: cfg.publishedDate,
    modifiedDate: cfg.modifiedDate,
    legacyIndustryConfig: true,
  };
}
