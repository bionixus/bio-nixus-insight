import { COUNTRY_CONFIGS } from '@/lib/constants/countries';
import { sanityServer } from '@/lib/sanity-server';

const THERAPY_AREAS = ['oncology', 'diabetes', 'respiratory', 'immunology', 'biologics', 'vaccines'];
const SERVICES = [
  'market-access',
  'physician-insights',
  'kol-mapping',
  'quantitative-research',
  'qualitative-research',
];

const HUB_QUERY = `*[_type == "hubResearchPage"][0]{
  _id,
  title,
  metaTitle,
  metaDescription,
  heroSection,
  trustSignals,
  servicesOverview,
  regionCards,
  therapyAreas,
  methodology,
  caseStudies,
  faq
}`;

const COUNTRY_QUERY = `*[_type == "countryResearchPage" && slug.current == $slug][0]{
  _id,
  title,
  country,
  metaTitle,
  metaDescription,
  heroSection,
  marketOverview,
  capabilities,
  therapyFocus,
  methodology,
  regulatoryContext,
  caseStudies,
  faq,
  relatedCountries,
  relatedTherapies
}`;

export async function fetchRouteData(url: string): Promise<Record<string, unknown>> {
  const path = url.split('?')[0];

  if (path === '/healthcare-market-research' || path === '/healthcare-market-research/') {
    let hubContent: Record<string, unknown> | null = null;
    try {
      hubContent = await sanityServer.fetch(HUB_QUERY);
    } catch {
      hubContent = null;
    }

    return {
      pageType: 'hub',
      countries: COUNTRY_CONFIGS,
      therapyAreas: THERAPY_AREAS,
      services: SERVICES,
      hubContent,
    };
  }

  const countryMatch = path.match(/^\/healthcare-market-research\/([a-z-]+)$/);
  if (countryMatch) {
    const slug = countryMatch[1];
    const config = COUNTRY_CONFIGS[slug];
    if (config) {
      let countryContent: Record<string, unknown> | null = null;
      try {
        countryContent = await sanityServer.fetch(COUNTRY_QUERY, { slug });
      } catch {
        countryContent = null;
      }

      return {
        pageType: 'country',
        slug,
        config,
        countryContent,
      };
    }
  }

  const therapyMatch = path.match(/^\/healthcare-market-research\/therapy\/([a-z-]+)$/);
  if (therapyMatch && THERAPY_AREAS.includes(therapyMatch[1])) {
    return {
      pageType: 'therapy',
      area: therapyMatch[1],
    };
  }

  const serviceMatch = path.match(/^\/healthcare-market-research\/services\/([a-z-]+)$/);
  if (serviceMatch && SERVICES.includes(serviceMatch[1])) {
    return {
      pageType: 'service',
      service: serviceMatch[1],
    };
  }

  return { pageType: 'generic' };
}

