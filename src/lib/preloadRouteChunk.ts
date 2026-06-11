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
};

/** Dynamic-slug routes matched by prefix. */
const PREFIX_IMPORTS: Array<{ test: (path: string) => boolean; load: Importer }> = [
  {
    test: (path) =>
      path.startsWith('/market-reports/') &&
      !path.startsWith('/market-reports/therapy/') &&
      !path.startsWith('/market-reports/country/'),
    load: () => import('@/pages/HealthcareReportPage'),
  },
  {
    test: (path) => path.startsWith('/news/') && path !== '/news/feed.xml',
    load: () => import('@/pages/PressReleasePage'),
  },
  {
    test: (path) => path.startsWith('/blog/') || path.startsWith('/ar/blog/'),
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

export async function preloadRouteChunk(pathname: string): Promise<void> {
  const importer = resolveImporter(pathname);
  if (!importer) return;
  try {
    await importer();
  } catch {
    // Preload is best-effort; Suspense handles loading normally if it fails.
  }
}
