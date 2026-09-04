/**
 * Preloads the lazy route chunk for a given pathname before hydration.
 *
 * Many public routes are server-rendered but backed by React.lazy() components
 * (country/medical-device reports, blog posts, press releases, market reports).
 * On refresh the SSR HTML paints instantly, then hydration suspends while the
 * chunk downloads — briefly swapping real content for a loading state.
 *
 * Awaiting the matching import() before hydrateRoot resolves the chunk first, so
 * the boundary never suspends. Vite dedupes these specifiers with the import()
 * calls in lazyReportPages.ts, so there is no extra network cost.
 */

import { isSegmentMarketPath } from '@/data/segmentMarketIndex';
import { getSeoExportName, getSeoPageLoader } from '@/routes/lazySeoPages';
import * as seoLazyPages from '@/routes/lazySeoPages';
import * as marketingLazyPages from '@/routes/lazyMarketingPages';
import * as reportLazyPages from '@/routes/lazyReportPages';
import { warmLazy } from '@/lib/warmLazy';

type Importer = () => Promise<unknown>;

/** Standalone country / medical-device report pages (file name follows the slug). */
const reportModules = import.meta.glob('../pages/*MarketReport.tsx');

function slugToComponentName(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/** Report routes whose file name does not match slug -> PascalCase + "Report". */
const IRREGULAR_IMPORTS: Record<string, Importer> = {
  '/gcc-anesthesia-surgical-market-report': () => import('@/pages/GccAnesthesiaSurgicalMarket'),
  '/skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement': () =>
    import('@/pages/BlogPost'),
};

/** Dynamic-slug routes matched by prefix. */
const PREFIX_IMPORTS: Array<{ test: (path: string) => boolean; load: Importer }> = [
  {
    test: (path) =>
      path === '/' ||
      path === '/de' ||
      path === '/fr' ||
      path === '/es' ||
      path === '/zh' ||
      path === '/ar' ||
      path === '/pt' ||
      path === '/ru',
    load: () => import('@/pages/Index'),
  },
  {
    test: (path) => path === '/bionixus-market-research-middle-east',
    load: () => import('@/pages/BionixusMarketResearchMiddleEast'),
  },
  {
    test: (path) => path === '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
    load: () => import('@/pages/AiChatbotsLeadGeneration'),
  },
  {
    test: (path) => path === '/ar/insights/top-market-research-companies-egypt-2026',
    load: () => import('@/pages/ArTopMarketResearchCompaniesEgypt2026'),
  },
  {
    test: (path) => path === '/ar/market-research-uae',
    load: () => import('@/pages/ArMarketResearchUae'),
  },
  {
    test: (path) => path === '/ar/market-research-ksa',
    load: () => import('@/pages/ArMarketResearchKsa'),
  },
  {
    test: (path) => path === '/ar/market-research-saudi',
    load: () => import('@/pages/ArMarketResearchSaudi'),
  },
  {
    test: (path) => path === '/ar/market-research-kuwait',
    load: () => import('@/pages/ArMarketResearchKuwait'),
  },
  {
    test: (path) => path === '/ar/market-research-egypt',
    load: () => import('@/pages/ArMarketResearchEgypt'),
  },
  {
    test: (path) =>
      path.startsWith('/market-reports/') &&
      !path.startsWith('/market-reports/therapy/') &&
      !path.startsWith('/market-reports/country/'),
    load: () => import('@/pages/HealthcareReportPage'),
  },
  {
    test: (path) => isSegmentMarketPath(path),
    load: () => import('@/pages/SegmentMarketRoute'),
  },
  {
    test: (path) => path.startsWith('/news/') && path !== '/news/feed.xml',
    load: () => import('@/pages/PressReleasePage'),
  },
  {
    test: (path) =>
      path.startsWith('/blog/') ||
      path.startsWith('/ar/blog/') ||
      path.startsWith('/bionixus-industries/insights/'),
    load: () => import('@/pages/BlogPost'),
  },
];

function resolveImporter(pathname: string): Importer | undefined {
  if (IRREGULAR_IMPORTS[pathname]) return IRREGULAR_IMPORTS[pathname];

  if (/-market-report$/.test(pathname)) {
    const file = slugToComponentName(pathname.slice(1));
    const importer = reportModules[`../pages/${file}.tsx`];
    if (importer) return importer;
  }

  return PREFIX_IMPORTS.find((entry) => entry.test(pathname))?.load;
}

function isHomePath(path: string): boolean {
  return (
    path === '/' ||
    path === '/de' ||
    path === '/fr' ||
    path === '/es' ||
    path === '/zh' ||
    path === '/ar' ||
    path === '/pt' ||
    path === '/ru'
  );
}

function resolveLazyComponent(pathname: string): unknown {
  if (isHomePath(pathname)) return marketingLazyPages.Index;

  const seoName = getSeoExportName(pathname);
  if (seoName && seoName in seoLazyPages) {
    return (seoLazyPages as Record<string, unknown>)[seoName];
  }

  if (pathname.endsWith('-market-report')) {
    const reportName = slugToComponentName(pathname.slice(1));
    if (reportName in reportLazyPages) {
      return (reportLazyPages as Record<string, unknown>)[reportName];
    }
  }

  const marketingByPath: Record<string, unknown> = {
    '/bionixus-market-research-middle-east': marketingLazyPages.BionixusMarketResearchMiddleEast,
    '/bionixus-ai-chatbots-increase-sales-and-lead-generation': marketingLazyPages.AiChatbotsLeadGeneration,
    '/ar/insights/top-market-research-companies-egypt-2026':
      marketingLazyPages.ArTopMarketResearchCompaniesEgypt2026,
    '/ar/market-research-uae': marketingLazyPages.ArMarketResearchUae,
    '/ar/market-research-ksa': marketingLazyPages.ArMarketResearchKsa,
    '/ar/market-research-saudi': marketingLazyPages.ArMarketResearchSaudi,
    '/ar/market-research-kuwait': marketingLazyPages.ArMarketResearchKuwait,
    '/ar/market-research-egypt': marketingLazyPages.ArMarketResearchEgypt,
  };
  if (marketingByPath[pathname]) return marketingByPath[pathname];

  if (
    pathname.startsWith('/blog/') ||
    pathname.startsWith('/ar/blog/') ||
    pathname.startsWith('/de/blog/') ||
    pathname.startsWith('/fr/blog/') ||
    pathname.startsWith('/es/blog/') ||
    pathname.startsWith('/pt/blog/') ||
    pathname.startsWith('/ru/blog/') ||
    pathname.startsWith('/zh/blog/') ||
    pathname.startsWith('/bionixus-industries/insights/')
  ) {
    return reportLazyPages.BlogPost;
  }

  if (pathname.startsWith('/news/') && pathname !== '/news/feed.xml') {
    return reportLazyPages.PressReleasePage;
  }

  if (
    pathname.startsWith('/market-reports/') &&
    !pathname.startsWith('/market-reports/therapy/') &&
    !pathname.startsWith('/market-reports/country/')
  ) {
    return reportLazyPages.HealthcareReportPage;
  }

  if (isSegmentMarketPath(pathname)) return reportLazyPages.SegmentMarketRoute;

  return undefined;
}

export async function preloadRouteChunk(pathname: string): Promise<void> {
  const normalized = pathname.replace(/\/$/, '') || '/';
  const lazyComponent = resolveLazyComponent(normalized);
  const importer = resolveImporter(normalized) ?? getSeoPageLoader(normalized);

  try {
    if (lazyComponent) {
      await warmLazy(lazyComponent);
      return;
    }
    if (importer) await importer();
  } catch {
    // Preload is best-effort; Suspense handles loading normally if it fails.
  }
}
