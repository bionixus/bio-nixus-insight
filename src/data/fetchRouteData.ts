import { COUNTRY_CONFIGS, resolveCountryConfig } from '@/lib/constants/countries';
import { sanityServer } from '@/lib/sanity-server';
import { fetchCaseStudies, fetchCaseStudyBySlug } from '@/lib/sanity-case-studies';
import type { CaseStudy } from '@/types/caseStudy';
import {
  fetchSanityPostBySlugWithClient,
  fetchSanityPostsWithClient,
  fetchSanityLatestInsightsWithClient,
  fetchIndustriesInsightsWithClient,
  fetchRelatedPostsWithClient,
  type RelatedPostsData,
} from '@/lib/sanity-blog';
import { getIndustriesInsightPostPath, resolveContentSilo } from '@/lib/blog-content-silo';
import type { BlogPost } from '@/types/blog';
import type { PressRelease, PressReleaseListItem } from '@/types/pressRelease';
import {
  fetchSanityPressReleaseBySlugWithClient,
  fetchSanityPressReleasesWithClient,
} from '@/lib/sanity-press';
import { getPressHeroPreloadUrlForRelease } from '@/lib/pressReleaseHero';
import type { Language } from '@/lib/i18n';
import { resolveSanityBlogSlug } from '../../blog-legacy-redirects.mjs';
import { getHardcodedPostBySlug } from '@/data/blog-posts-index';
import { isHardcodedSeoBlogSlug } from '@/lib/blog-robots';
import { getBlogHeroPreloadUrl } from '@/lib/image-utils';
import { SKYRIZI_ROOT_SLUG } from '@/data/blog-skyrizi-omnichannel';
import { FR_FRANCE_CONTENT, FR_HUB_CONTENT } from '@/data/frHealthcareMarketResearchContent';

function resolveBlogPostForRoute(slug: string, sanityPost: BlogPost | null): BlogPost | null {
  const hardcoded = getHardcodedPostBySlug(slug);
  if (hardcoded && isHardcodedSeoBlogSlug(slug)) return hardcoded;
  return sanityPost ?? hardcoded ?? null;
}

async function fetchBlogPostRouteData(slug: string): Promise<Record<string, unknown>> {
  const sanitySlug = resolveSanityBlogSlug(slug);
  let blogPost: BlogPost | null = null;
  let relatedPosts: RelatedPostsData = { related: [], prev: null, next: null };
  try {
    blogPost = await fetchSanityPostBySlugWithClient(sanitySlug, sanityServer);
    if (blogPost) {
      relatedPosts = await fetchRelatedPostsWithClient(
        sanitySlug,
        blogPost.category,
        blogPost.publishedAtIso || blogPost.date,
        blogPost.country,
        blogPost.tags ?? [],
        sanityServer,
        resolveContentSilo(blogPost),
      );
    }
  } catch {
    blogPost = null;
  }
  blogPost = resolveBlogPostForRoute(slug, blogPost);
  return {
    pageType: 'blog-post',
    blogSlug: slug,
    blogPost,
    relatedPosts,
    lcpPreloadImageUrl: getBlogHeroPreloadUrl(blogPost?.coverImage),
  };
}

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

/** Decode a single path segment; never throw — malformed `%` escapes break SSR with 500. */
function decodePathSegment(encoded: string): string {
  try {
    return decodeURIComponent(encoded.replace(/\+/g, ' '));
  } catch {
    return encoded;
  }
}

export async function fetchRouteData(url: string): Promise<Record<string, unknown>> {
  const path = url.split('?')[0];
  const aliasCountryPath = path.match(/^\/(saudi-arabia|uae|kuwait|uk|europe|egypt)$/);
  const normalizedPath = aliasCountryPath ? `/healthcare-market-research/${aliasCountryPath[1]}` : path;

  if (path === '/fr/healthcare-market-research' || path === '/fr/healthcare-market-research/') {
    return {
      pageType: 'fr-hub',
      hubContent: FR_HUB_CONTENT,
    };
  }

  if (path === '/fr/healthcare-market-research/france' || path === '/fr/healthcare-market-research/france/') {
    return {
      pageType: 'fr-country',
      slug: 'france',
      countryContent: FR_FRANCE_CONTENT,
    };
  }

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
    if (slug !== 'therapy' && slug !== 'services') {
      const config = resolveCountryConfig(slug);
      let countryContent: Record<string, unknown> | null = null;
      if (COUNTRY_CONFIGS[slug]) {
        try {
          countryContent = await sanityServer.fetch(COUNTRY_QUERY, { slug });
        } catch {
          countryContent = null;
        }
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
    const slug = decodePathSegment(caseStudyDetailMatch[1]);
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
    '/ar/blog/',
    '/zh/blog',
    '/zh/blog/',
  ]);
  if (blogIndexPaths.has(path)) {
    let blogPosts: BlogPost[] = [];
    try {
      blogPosts = await fetchSanityPostsWithClient(sanityServer, undefined, { silo: 'healthcare' });
    } catch {
      blogPosts = [];
    }
    if (path.startsWith('/ar/blog')) {
      blogPosts = blogPosts.filter((p) => !p.language || p.language === 'ar');
    } else if (path.startsWith('/zh/blog')) {
      blogPosts = blogPosts.filter((p) => !p.language || p.language === 'zh');
    } else if (path.startsWith('/de/blog')) {
      blogPosts = blogPosts.filter((p) => !p.language || p.language === 'de');
    }
    return {
      pageType: 'blog-index',
      blogPosts,
    };
  }

  const blogPostMatchAr = path.match(/^\/ar\/blog\/([^/]+)\/?$/);
  if (blogPostMatchAr) {
    const slug = decodePathSegment(blogPostMatchAr[1]);
    const sanitySlug = resolveSanityBlogSlug(slug);
    let blogPost: BlogPost | null = null;
    let relatedPosts: RelatedPostsData = { related: [], prev: null, next: null };
    try {
      blogPost = await fetchSanityPostBySlugWithClient(sanitySlug, sanityServer);
      if (blogPost) {
        relatedPosts = await fetchRelatedPostsWithClient(
          sanitySlug,
          blogPost.category,
          blogPost.publishedAtIso || blogPost.date,
          blogPost.country,
          blogPost.tags ?? [],
          sanityServer,
          resolveContentSilo(blogPost),
        );
      }
    } catch {
      blogPost = null;
    }
    blogPost = resolveBlogPostForRoute(slug, blogPost);
    return {
      pageType: 'blog-post',
      blogSlug: slug,
      blogPost,
      relatedPosts,
      lcpPreloadImageUrl: getBlogHeroPreloadUrl(blogPost?.coverImage),
    };
  }

  const industriesInsightPostMatch = path.match(/^\/bionixus-industries\/insights\/([^/]+)\/?$/);
  if (industriesInsightPostMatch) {
    const slug = decodePathSegment(industriesInsightPostMatch[1]);
    const data = await fetchBlogPostRouteData(slug);
    const post = data.blogPost as BlogPost | null;
    if (post && resolveContentSilo(post) !== 'industries') {
      return {
        pageType: 'blog-post',
        blogSlug: slug,
        blogPost: null,
        relatedPosts: { related: [], prev: null, next: null },
        lcpPreloadImageUrl: undefined,
      };
    }
    return data;
  }

  const blogPostMatch = path.match(/^\/blog\/([^/]+)\/?$/);
  if (blogPostMatch) {
    const slug = decodePathSegment(blogPostMatch[1]);
    const data = await fetchBlogPostRouteData(slug);
    const post = data.blogPost as BlogPost | null;
    if (post && resolveContentSilo(post) === 'industries') {
      return {
        pageType: 'redirect',
        statusCode: 301,
        redirectTo: getIndustriesInsightPostPath(slug),
      };
    }
    return data;
  }

  if (path === `/${SKYRIZI_ROOT_SLUG}` || path === `/${SKYRIZI_ROOT_SLUG}/`) {
    return fetchBlogPostRouteData(SKYRIZI_ROOT_SLUG);
  }

  if (path === '/news' || path === '/news/') {
    let pressReleases: PressReleaseListItem[] = [];
    try {
      pressReleases = await fetchSanityPressReleasesWithClient(sanityServer);
    } catch {
      pressReleases = [];
    }
    return {
      pageType: 'press-index',
      pressReleases,
    };
  }

  const pressPostMatch = path.match(/^\/news\/([^/]+)\/?$/);
  if (pressPostMatch) {
    const slug = decodePathSegment(pressPostMatch[1]);
    if (slug === 'feed.xml') {
      return { pageType: 'generic' };
    }
    let pressRelease: PressRelease | null = null;
    try {
      pressRelease = await fetchSanityPressReleaseBySlugWithClient(slug, sanityServer);
    } catch {
      pressRelease = null;
    }
    return {
      pageType: 'press-post',
      pressSlug: slug,
      pressRelease,
      lcpPreloadImageUrl: getPressHeroPreloadUrlForRelease(pressRelease),
    };
  }

  if (path === '/media' || path === '/media/') {
    return { pageType: 'media-kit' };
  }

  if (path === '/bionixus-industries/insights' || path === '/bionixus-industries/insights/') {
    let industriesInsights: BlogPost[] = [];
    try {
      industriesInsights = await fetchIndustriesInsightsWithClient(sanityServer);
    } catch {
      industriesInsights = [];
    }
    return {
      pageType: 'industries-insights-index',
      industriesInsights,
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

