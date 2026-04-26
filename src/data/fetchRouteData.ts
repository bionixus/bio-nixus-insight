import { COUNTRY_CONFIGS } from '@/lib/constants/countries';
import { sanityServer } from '@/lib/sanity-server';
import { fetchCaseStudies, fetchCaseStudyBySlug } from '@/lib/sanity-case-studies';
import type { CaseStudy } from '@/types/caseStudy';
import {
  fetchSanityPostBySlugWithClient,
  fetchSanityPostsWithClient,
  fetchSanityLatestInsightsWithClient,
  fetchRelatedPostsWithClient,
  type RelatedPostsData,
} from '@/lib/sanity-blog';
import type { BlogPost } from '@/types/blog';
import type { Language } from '@/lib/i18n';

const THERAPY_AREAS = [
  'aesthetic-medicine',
  'biologics',
  'cardiology',
  'diabetes',
  'immunology',
  'oncology',
  'rare-diseases',
  'respiratory',
  'vaccines',
];
const SERVICES = [
  'market-access',
  'physician-insights',
  'kol-mapping',
  'quantitative-research',
  'qualitative-research',
];

function marketingHomeLanguage(path: string): Language | null {
  const n = path.split('?')[0].replace(/\/$/, '') || '/';
  if (n === '/') return 'en';
  if (n === '/de') return 'de';
  if (n === '/fr') return 'fr';
  if (n === '/es') return 'es';
  if (n === '/zh') return 'zh';
  if (n === '/ar') return 'ar';
  return null;
}

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
  const aliasCountryPath = path.match(/^\/(saudi-arabia|uae|kuwait|uk|europe|egypt)$/);
  const normalizedPath = aliasCountryPath ? `/healthcare-market-research/${aliasCountryPath[1]}` : path;

  if (normalizedPath === '/healthcare-market-research' || normalizedPath === '/healthcare-market-research/') {
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

  const countryMatch = normalizedPath.match(/^\/healthcare-market-research\/([a-z-]+)$/);
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

  const therapyMatch = normalizedPath.match(/^\/healthcare-market-research\/therapy\/([a-z-]+)$/);
  if (therapyMatch && THERAPY_AREAS.includes(therapyMatch[1])) {
    return {
      pageType: 'therapy',
      area: therapyMatch[1],
    };
  }

  const serviceMatch = normalizedPath.match(/^\/healthcare-market-research\/services\/([a-z-]+)$/);
  if (serviceMatch && SERVICES.includes(serviceMatch[1])) {
    return {
      pageType: 'service',
      service: serviceMatch[1],
    };
  }

  if (normalizedPath === '/case-studies' || normalizedPath === '/case-studies/') {
    let caseStudies: Awaited<ReturnType<typeof fetchCaseStudies>> = [];
    try {
      caseStudies = await fetchCaseStudies();
    } catch {
      caseStudies = [];
    }
    return {
      pageType: 'case-studies',
      caseStudies,
    };
  }

  const caseStudyDetailMatch = normalizedPath.match(/^\/case-studies\/([^/]+)\/?$/);
  if (caseStudyDetailMatch) {
    const slug = decodeURIComponent(caseStudyDetailMatch[1]);
    let caseStudy: CaseStudy | null = null;
    try {
      caseStudy = await fetchCaseStudyBySlug(slug);
    } catch {
      caseStudy = null;
    }
    return {
      pageType: 'case-study',
      caseStudySlug: slug,
      caseStudy,
    };
  }

  const blogIndexPaths = new Set([
    '/blog',
    '/blog/',
    '/de/blog',
    '/de/blog/',
    '/fr/blog',
    '/fr/blog/',
    '/ar/blog',
    '/ar/blog/',
  ]);
  if (blogIndexPaths.has(path)) {
    let blogPosts: BlogPost[] = [];
    try {
      blogPosts = await fetchSanityPostsWithClient(sanityServer);
    } catch {
      blogPosts = [];
    }
    if (path.startsWith('/ar/blog')) {
      blogPosts = blogPosts.filter((p) => !p.language || p.language === 'ar');
    }
    return {
      pageType: 'blog-index',
      blogPosts,
    };
  }

  const blogPostMatchAr = path.match(/^\/ar\/blog\/([^/]+)\/?$/);
  if (blogPostMatchAr) {
    const slug = decodeURIComponent(blogPostMatchAr[1]);
    let blogPost: BlogPost | null = null;
    let relatedPosts: RelatedPostsData = { related: [], prev: null, next: null };
    try {
      blogPost = await fetchSanityPostBySlugWithClient(slug, sanityServer);
      if (blogPost) {
        relatedPosts = await fetchRelatedPostsWithClient(
          slug,
          blogPost.category,
          blogPost.publishedAtIso || blogPost.date,
          blogPost.country,
          blogPost.tags ?? [],
          sanityServer,
        );
      }
    } catch {
      blogPost = null;
    }
    return {
      pageType: 'blog-post',
      blogSlug: slug,
      blogPost,
      relatedPosts,
    };
  }

  const blogPostMatch = path.match(/^\/blog\/([^/]+)\/?$/);
  if (blogPostMatch) {
    const slug = decodeURIComponent(blogPostMatch[1]);
    let blogPost: BlogPost | null = null;
    let relatedPosts: RelatedPostsData = { related: [], prev: null, next: null };
    try {
      blogPost = await fetchSanityPostBySlugWithClient(slug, sanityServer);
      if (blogPost) {
        relatedPosts = await fetchRelatedPostsWithClient(
          slug,
          blogPost.category,
          blogPost.publishedAtIso || blogPost.date,
          blogPost.country,
          blogPost.tags ?? [],
          sanityServer,
        );
      }
    } catch {
      blogPost = null;
    }
    return {
      pageType: 'blog-post',
      blogSlug: slug,
      blogPost,
      relatedPosts,
    };
  }

  const homeLang = marketingHomeLanguage(normalizedPath);
  if (homeLang) {
    let homeLatestInsights: BlogPost[] = [];
    try {
      homeLatestInsights = await fetchSanityLatestInsightsWithClient(sanityServer, homeLang, 3);
    } catch {
      homeLatestInsights = [];
    }
    return {
      pageType: 'home',
      homeLatestInsights,
    };
  }

  return { pageType: 'generic' };
}

