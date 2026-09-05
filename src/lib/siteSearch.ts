export type SiteSearchIndex = {
  generatedAt?: string;
  count?: number;
  paths: string[];
};

/** Common market aliases so “usa” also surfaces united-states URLs. */
const QUERY_ALIASES: Record<string, readonly string[]> = {
  usa: ['usa', 'united-states'],
  us: ['usa', 'united-states'],
  ksa: ['ksa', 'saudi', 'saudi-arabia'],
  saudi: ['saudi', 'ksa', 'saudi-arabia'],
  uae: ['uae', 'united-arab-emirates'],
  uk: ['uk', 'united-kingdom'],
  britain: ['uk', 'united-kingdom'],
  gcc: ['gcc'],
};

let cachedPaths: string[] | null = null;
let inflight: Promise<string[]> | null = null;

function uniqueSorted(paths: string[]): string[] {
  return [...new Set(paths)].sort((a, b) => a.localeCompare(b));
}

function extractPathsFromSitemapXml(xml: string): string[] {
  const paths: string[] = [];
  const locRe = /<loc>\s*([^<]+)\s*<\/loc>/gi;
  let match: RegExpExecArray | null;
  while ((match = locRe.exec(xml))) {
    try {
      const pathname = new URL(match[1].trim()).pathname.replace(/\/$/, '') || '/';
      paths.push(decodeURIComponent(pathname));
    } catch {
      // skip
    }
  }
  return paths;
}

async function loadSitemapFallback(): Promise<string[]> {
  const files = ['/sitemap.xml', '/sitemap-directories.xml', '/sitemap-healthcare-markets.xml'];
  const collected: string[] = [];
  await Promise.all(
    files.map(async (file) => {
      try {
        const res = await fetch(file);
        if (!res.ok) return;
        collected.push(...extractPathsFromSitemapXml(await res.text()));
      } catch {
        // ignore missing sitemap in local/dev
      }
    }),
  );
  return uniqueSorted(collected);
}

export async function loadSiteSearchPaths(): Promise<string[]> {
  if (cachedPaths) return cachedPaths;
  if (inflight) return inflight;

  inflight = (async () => {
    try {
      const res = await fetch('/site-search-index.json');
      if (res.ok) {
        const data = (await res.json()) as SiteSearchIndex;
        if (Array.isArray(data.paths) && data.paths.length > 0) {
          cachedPaths = uniqueSorted(data.paths);
          return cachedPaths;
        }
      }
    } catch {
      // fall through to sitemap parse
    }
    cachedPaths = await loadSitemapFallback();
    return cachedPaths;
  })();

  try {
    return await inflight;
  } finally {
    inflight = null;
  }
}

export function normalizeSearchQuery(raw: string): string {
  return raw.trim().toLowerCase();
}

function matchTokens(query: string): string[] {
  const compact = query.replace(/\s+/g, '-');
  const spaced = query.replace(/\s+/g, '');
  const aliases = QUERY_ALIASES[query] ?? QUERY_ALIASES[compact] ?? [];
  return uniqueSorted([query, compact, spaced, ...aliases].filter((token) => token.length >= 2));
}

export function pathMatchesQuery(path: string, rawQuery: string): boolean {
  const query = normalizeSearchQuery(rawQuery);
  if (query.length < 2) return false;
  const hay = path.toLowerCase();
  return matchTokens(query).some((token) => hay.includes(token));
}

export function filterSitePaths(paths: string[], rawQuery: string): string[] {
  const query = normalizeSearchQuery(rawQuery);
  if (query.length < 2) return [];
  return paths.filter((path) => pathMatchesQuery(path, query));
}

export function pathToSearchLabel(path: string): string {
  if (path === '/') return 'Home';
  return path
    .split('/')
    .filter(Boolean)
    .map((segment) =>
      decodeURIComponent(segment)
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase()),
    )
    .join(' · ');
}
