/**
 * Central registry of all data-driven country listicle pages.
 *
 * Every config added here automatically gets a route in src/routes.tsx
 * (via the allListicleConfigs spread) and a sitemap entry.
 *
 * Keep this file free of JSX/React imports.
 */
import type { CountryListicleConfig, ListicleHreflang } from './types';
import { directoryForListiclePath } from '../pharmaDirectoryListicles';

// GCC (general)
import { uaeGeneralEn } from './gcc/uae.general.en';
import { dubaiGeneralEn } from './gcc/dubai.general.en';
import { abuDhabiGeneralEn } from './gcc/abu-dhabi.general.en';
import { ksaHealthcareEn } from './gcc/ksa.healthcare.en';
import { riyadhGeneralEn } from './gcc/riyadh.general.en';
import { qatarGeneralEn } from './gcc/qatar.general.en';
import { qatarGeneralAr } from './gcc/qatar.general.ar';
import { qatarHealthcareEn } from './gcc/qatar.healthcare.en';
import { omanGeneralEn } from './gcc/oman.general.en';
import { omanHealthcareEn } from './gcc/oman.healthcare.en';
import { bahrainGeneralEn } from './gcc/bahrain.general.en';
import { bahrainHealthcareEn } from './gcc/bahrain.healthcare.en';
import { kuwaitGeneralEn } from './gcc/kuwait.general.en';
import { kuwaitGeneralAr } from './gcc/kuwait.general.ar';
import { kuwaitHealthcareEn } from './gcc/kuwait.healthcare.en';
import { abuDhabiHealthcareEn } from './gcc/abu-dhabi.healthcare.en';
import { dubaiHealthcareEn } from './gcc/dubai.healthcare.en';

// GCC (pharmaceutical)
import { ksaPharmaEn } from './gcc/ksa.pharma.en';
import { uaePharmaEn } from './gcc/uae.pharma.en';
import { qatarPharmaEn } from './gcc/qatar.pharma.en';
import { kuwaitPharmaEn } from './gcc/kuwait.pharma.en';
import { omanPharmaEn } from './gcc/oman.pharma.en';
import { bahrainPharmaEn } from './gcc/bahrain.pharma.en';

// MENA / Levant / North Africa
import { jordanGeneralEn } from './mena/jordan.general.en';
import { jordanHealthcareEn } from './mena/jordan.healthcare.en';
import { lebanonGeneralEn } from './mena/lebanon.general.en';
import { lebanonHealthcareEn } from './mena/lebanon.healthcare.en';
import { iraqGeneralEn } from './mena/iraq.general.en';
import { iranGeneralEn } from './mena/iran.general.en';
import { moroccoGeneralEn } from './mena/morocco.general.en';
import { algeriaGeneralEn } from './mena/algeria.general.en';
import { tunisiaGeneralEn } from './mena/tunisia.general.en';
import { egyptHealthcareEn } from './mena/egypt.healthcare.en';
import { egyptPharmaEn } from './mena/egypt.pharma.en';

// Africa
import { southAfricaGeneralEn } from './africa/south-africa.general.en';
import { nigeriaGeneralEn } from './africa/nigeria.general.en';
import { ghanaGeneralEn } from './africa/ghana.general.en';
import { kenyaGeneralEn } from './africa/kenya.general.en';
import { ethiopiaGeneralEn } from './africa/ethiopia.general.en';
import { tanzaniaGeneralEn } from './africa/tanzania.general.en';
import { ugandaGeneralEn } from './africa/uganda.general.en';
import { coteDivoireGeneralEn } from './africa/cote-divoire.general.en';
import { senegalGeneralEn } from './africa/senegal.general.en';
import { angolaGeneralEn } from './africa/angola.general.en';

// Europe (healthcare)
import { ukHealthcareEn } from './europe/uk.healthcare.en';
import { germanyHealthcareEn } from './europe/germany.healthcare.en';
import { franceHealthcareEn } from './europe/france.healthcare.en';
import { spainHealthcareEn } from './europe/spain.healthcare.en';
import { italyHealthcareEn } from './europe/italy.healthcare.en';
import { netherlandsHealthcareEn } from './europe/netherlands.healthcare.en';
import { turkeyHealthcareEn } from './europe/turkey.healthcare.en';
import { polandHealthcareEn } from './europe/poland.healthcare.en';
import { belgiumHealthcareEn } from './europe/belgium.healthcare.en';

// Europe (pharmaceutical)
import { ukPharmaEn } from './europe/uk.pharma.en';
import { germanyPharmaEn } from './europe/germany.pharma.en';
import { francePharmaEn } from './europe/france.pharma.en';
import { italyPharmaEn } from './europe/italy.pharma.en';
import { spainPharmaEn } from './europe/spain.pharma.en';
import { turkeyPharmaEn } from './europe/turkey.pharma.en';

// North America (pharmaceutical)
import { usaPharmaEn } from './northamerica/usa.pharma.en';
import { canadaPharmaEn } from './northamerica/canada.pharma.en';

// LATAM (healthcare)
import { mexicoHealthcareEn } from './latam/mexico.healthcare.en';
import { colombiaHealthcareEn } from './latam/colombia.healthcare.en';
import { chileHealthcareEn } from './latam/chile.healthcare.en';
import { peruHealthcareEn } from './latam/peru.healthcare.en';

// LATAM (pharmaceutical)
import { brazilPharmaEn } from './latam/brazil.pharma.en';
import { brazilPharmaPt } from './latam/brazil.pharma.pt';

// APAC (pharmaceutical)
import { australiaPharmaEn } from './apac/australia.pharma.en';

// Therapy area listicles (global)
import { consumerHealthcareGlobalEn } from './therapy/consumer-healthcare.en';
import { biologicsBiosimilarsGlobalEn } from './therapy/biologics-biosimilars.en';
import { obesityWeightGlobalEn } from './therapy/obesity-weight.en';
import { oncologyGlobalEn } from './therapy/oncology.en';
import { rareDiseaseGlobalEn } from './therapy/rare-disease.en';

export const allListicleConfigs: CountryListicleConfig[] = [
  // GCC general
  uaeGeneralEn,
  dubaiGeneralEn,
  abuDhabiGeneralEn,
  ksaHealthcareEn,
  riyadhGeneralEn,
  qatarGeneralEn,
  qatarGeneralAr,
  qatarHealthcareEn,
  omanGeneralEn,
  omanHealthcareEn,
  bahrainGeneralEn,
  bahrainHealthcareEn,
  kuwaitGeneralEn,
  kuwaitGeneralAr,
  kuwaitHealthcareEn,
  abuDhabiHealthcareEn,
  dubaiHealthcareEn,
  // GCC pharmaceutical
  ksaPharmaEn,
  uaePharmaEn,
  qatarPharmaEn,
  kuwaitPharmaEn,
  omanPharmaEn,
  bahrainPharmaEn,
  // MENA
  jordanGeneralEn,
  jordanHealthcareEn,
  lebanonGeneralEn,
  lebanonHealthcareEn,
  iraqGeneralEn,
  iranGeneralEn,
  moroccoGeneralEn,
  algeriaGeneralEn,
  tunisiaGeneralEn,
  egyptHealthcareEn,
  egyptPharmaEn,
  // Africa
  southAfricaGeneralEn,
  nigeriaGeneralEn,
  ghanaGeneralEn,
  kenyaGeneralEn,
  ethiopiaGeneralEn,
  tanzaniaGeneralEn,
  ugandaGeneralEn,
  coteDivoireGeneralEn,
  senegalGeneralEn,
  angolaGeneralEn,
  // Europe healthcare
  ukHealthcareEn,
  germanyHealthcareEn,
  franceHealthcareEn,
  spainHealthcareEn,
  italyHealthcareEn,
  netherlandsHealthcareEn,
  turkeyHealthcareEn,
  polandHealthcareEn,
  belgiumHealthcareEn,
  // Europe pharmaceutical
  ukPharmaEn,
  germanyPharmaEn,
  francePharmaEn,
  italyPharmaEn,
  spainPharmaEn,
  turkeyPharmaEn,
  // North America pharmaceutical
  usaPharmaEn,
  canadaPharmaEn,
  // LATAM healthcare
  mexicoHealthcareEn,
  colombiaHealthcareEn,
  chileHealthcareEn,
  peruHealthcareEn,
  // LATAM pharmaceutical
  brazilPharmaEn,
  brazilPharmaPt,
  // APAC pharmaceutical
  australiaPharmaEn,
  // Therapy area listicles (global)
  consumerHealthcareGlobalEn,
  biologicsBiosimilarsGlobalEn,
  obesityWeightGlobalEn,
  oncologyGlobalEn,
  rareDiseaseGlobalEn,
];

/**
 * Registry slugs that routes.tsx shadows with a <Navigate>, so the URL 301s.
 * They must not be advertised as canonical, hreflang, or related targets.
 */
const REDIRECTED_LISTICLE_SLUGS: Record<string, string> = {
  '/insights/top-market-research-companies-ksa-2026':
    '/insights/top-market-research-companies-saudi-arabia-2026',
  '/insights/market-research-firms-ksa':
    '/insights/top-market-research-companies-saudi-arabia-2026',
  '/insights/market-research-firms-uae':
    '/insights/top-market-research-companies-uae-2026',
};

const publishedListicleSlugs = new Set(
  allListicleConfigs
    .map((config) => config.slug)
    .filter((slug) => !(slug in REDIRECTED_LISTICLE_SLUGS)),
);

/** Matches `/insights/...` and `/{lang}/insights/...` hreflang targets. */
const LISTICLE_PATH = /^\/(?:[a-z]{2}\/)?insights\//;

/**
 * Drops hreflang alternates that point at localized listicles which were never built.
 *
 * 24 configs declared `/{lang}/insights/...` alternates for pages that do not exist,
 * which sent crawlers into 404s and left every affected page without a reciprocal
 * hreflang. Targets outside the listicle namespace are passed through untouched.
 */
export function resolvePublishedHreflang(config: CountryListicleConfig): ListicleHreflang[] {
  return config.hreflang.filter((alternate) => {
    const path = alternate.href.replace('https://www.bionixus.com', '');
    if (!LISTICLE_PATH.test(path)) return true;
    return publishedListicleSlugs.has(path);
  });
}

/**
 * Related-link targets that never existed, mapped to the page they meant.
 * Targets with no equivalent are dropped by resolvePublishedRelated.
 */
const RELATED_LINK_CORRECTIONS: Record<string, string> = {
  ...REDIRECTED_LISTICLE_SLUGS,
  '/insights/top-healthcare-market-research-companies-ksa-2026':
    '/insights/top-healthcare-market-research-companies-saudi-arabia-2026',
  '/insights/gcc-market-access-guide': '/gcc-market-access-guide',
  '/pharmaceutical-market-research': '/healthcare-market-research',
};

/**
 * Rewrites related links to live pages and drops the ones with no destination.
 *
 * The registry accumulated 31 links to pages that were never built (localized
 * listicles, a LATAM roundup, a Morocco page), each a crawlable 404.
 */
export function resolvePublishedRelated(
  config: CountryListicleConfig,
): CountryListicleConfig['related'] {
  const seen = new Set<string>();
  const directory = directoryForListiclePath(config.slug);
  const seeded = directory
    ? [{ to: directory.to, label: directory.label }, ...config.related]
    : config.related;
  return seeded.flatMap((link) => {
    const corrected = RELATED_LINK_CORRECTIONS[link.to];
    const path = corrected ?? link.to;
    if (!path.startsWith('/') || path === config.slug || seen.has(path)) return [];
    // Corrections are curated to live pages, some of which are standalone
    // routes rather than registry entries, so they skip the namespace check.
    if (!corrected && LISTICLE_PATH.test(path) && !publishedListicleSlugs.has(path)) return [];
    seen.add(path);
    return [{ ...link, to: path }];
  });
}
