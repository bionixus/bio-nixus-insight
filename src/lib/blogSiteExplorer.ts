import { LOW_INTERNAL_LINK_TARGETS } from '@/lib/lowInternalLinkTargets.generated';

const THERAPY_SLUGS = [
  'oncology',
  'diabetes',
  'respiratory',
  'immunology',
  'biologics',
  'vaccines',
  'cardiology',
  'rare-diseases',
  'aesthetic-medicine',
] as const;

const HC_SERVICE_SLUGS = [
  'market-access',
  'physician-insights',
  'kol-mapping',
  'quantitative-research',
  'qualitative-research',
] as const;

/** Routes not guaranteed to appear in the low-link CSV but are first-class marketing URLs. */
const CANONICAL_EXTRA_PATHS: readonly string[] = [
  '/healthcare-market-research',
  '/healthcare-market-research/riyadh',
  '/healthcare-market-research/jeddah',
  '/healthcare-market-research/dubai',
  '/healthcare-market-research/abu-dhabi',
  '/market-research-home',
  '/sitemap',
  '/strategic-portfolio',
  '/ar/strategic-portfolio',
  '/terms',
  '/insights',
  '/about',
  '/contact',
  '/case-studies',
  '/case-studies/cns-case-study',
  '/bionixus-vs-iqvia-mena',
  '/iqvia-alternative',
  '/kantar-health-alternative-gcc',
  '/gfk-alternative-egypt',
  '/pharmaceutical-therapy-areas',
  '/kuwait-market-access-research',
  '/qatar-market-access-research',
  '/heor-consulting-saudi-arabia',
  '/patient-support-program-research-gcc',
  '/budget-impact-model-saudi-arabia',
  '/healthcare-fieldwork-middle-east',
  '/saudi-payer-market-access-research',
  '/saudi-arabia',
  '/uae',
  '/kuwait',
  '/uk',
  '/europe',
  '/egypt',
  ...THERAPY_SLUGS.map((s) => `/healthcare-market-research/therapy/${s}`),
  ...HC_SERVICE_SLUGS.map((s) => `/healthcare-market-research/services/${s}`),
];

const LOW_LABEL_BY_PATH: ReadonlyMap<string, string> = new Map(
  LOW_INTERNAL_LINK_TARGETS.map((t) => [t.to, t.label]),
);

/** Human-readable anchor text for explorer links; prefers LOW-internal-link labels when present. */
export function pathLabel(path: string): string {
  const low = LOW_LABEL_BY_PATH.get(path);
  if (low) return low;
  if (path === '/') return 'Home';
  const tail = path.replace(/\/$/, '').split('/').filter(Boolean);
  const last = tail[tail.length - 1] ?? path;
  return last
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export type SiteExplorerSection = {
  id: string;
  title: string;
  description?: string;
  paths: string[];
};

function sectionForPath(path: string): string {
  if (path.startsWith('/admin')) return 'skip';
  if (path === '/' || /^\/(de|fr|es|zh|ar)$/.test(path) || path.startsWith('/zh/')) return 'hubs';
  if (
    path.startsWith('/about') ||
    path.startsWith('/contact') ||
    path.startsWith('/faq') ||
    path.startsWith('/privacy') ||
    path.startsWith('/terms') ||
    path.startsWith('/verify-email') ||
    path.startsWith('/resources') ||
    path.startsWith('/insights') ||
    path.startsWith('/methodology') ||
    path === '/sitemap'
  ) {
    return 'company';
  }
  if (path.startsWith('/services')) return 'services';
  if (path.startsWith('/healthcare-market-research')) return 'healthcare';
  if (path.startsWith('/global-websites')) return 'global';
  if (
    path.startsWith('/blog') ||
    path.startsWith('/ar/blog') ||
    path.endsWith('/blog') ||
    path.startsWith('/de/blog') ||
    path.startsWith('/fr/blog')
  ) {
    return 'blog';
  }
  if (path.startsWith('/case-studies')) return 'cases';
  if (path === '/conf' || path === '/ar/conf' || path.includes('strategic-portfolio')) return 'portfolio';
  if (
    path.includes('-market-report') ||
    path.includes('medical-devices') ||
    path.includes('healthcare-market-report')
  ) {
    return 'reports';
  }
  if (path.startsWith('/pharmaceutical-companies-')) return 'pharma-cos';
  if (
    path.startsWith('/market-research') ||
    path.startsWith('/ar/market-research') ||
    path.startsWith('/qualitative-market-research') ||
    path.startsWith('/quantitative-healthcare') ||
    path.startsWith('/gcc-') ||
    path.startsWith('/mena-') ||
    path.startsWith('/bionixus-') ||
    path.startsWith('/uae-') ||
    path.startsWith('/real-world') ||
    path.startsWith('/kol-mapping') ||
    path.startsWith('/physician-survey') ||
    path.startsWith('/sfda-') ||
    path.startsWith('/biosimilar') ||
    path.startsWith('/heor-') ||
    path.startsWith('/patient-support') ||
    path.startsWith('/budget-impact') ||
    path.startsWith('/pharmacies-') ||
    path.startsWith('/pharmaceutical-market-research') ||
    path.startsWith('/pharmaceutical-therapy') ||
    path.startsWith('/healthcare-fieldwork') ||
    path.startsWith('/healthcare-market-research-agency') ||
    path.startsWith('/gcc-hcp') ||
    path.startsWith('/saudi-payer') ||
    path.startsWith('/uae-market-access') ||
    path.startsWith('/kuwait-market-access') ||
    path.startsWith('/qatar-market-access') ||
    path.startsWith('/iqvia-') ||
    path.startsWith('/kantar-') ||
    path.startsWith('/gfk-') ||
    path.startsWith('/bionixus-ai') ||
    path === '/market-research-home' ||
    path === '/saudi-arabia' ||
    path === '/uae' ||
    path === '/kuwait' ||
    path === '/uk' ||
    path === '/europe' ||
    path === '/egypt'
  ) {
    return 'pillars';
  }
  if (
    path.startsWith('/de/') ||
    path.startsWith('/fr/') ||
    path.startsWith('/es/') ||
    path.startsWith('/ar/contacts')
  ) {
    return 'localized';
  }
  return 'other';
}

/** Master path list: internal-link targets + canonical hub/therapy/service additions, de-duped. */
export function getAllSiteExplorerPaths(): string[] {
  const set = new Set<string>();
  for (const t of LOW_INTERNAL_LINK_TARGETS) {
    if (!t.to.startsWith('/admin')) set.add(t.to);
  }
  for (const p of CANONICAL_EXTRA_PATHS) set.add(p);
  return [...set].sort((a, b) => a.localeCompare(b));
}

export function getSiteExplorerSections(): SiteExplorerSection[] {
  const buckets = new Map<string, string[]>();
  for (const p of getAllSiteExplorerPaths()) {
    const key = sectionForPath(p);
    if (key === 'skip') continue;
    const arr = buckets.get(key) ?? [];
    arr.push(p);
    buckets.set(key, arr);
  }

  const order: { id: string; title: string; description?: string }[] = [
    { id: 'hubs', title: 'Home & language hubs', description: 'Localized entry points for BioNixus.' },
    {
      id: 'company',
      title: 'Company, trust & methodology',
      description: 'About, contact, compliance, and how we work.',
    },
    { id: 'services', title: 'Core services', description: 'Quantitative, qualitative, access, intelligence, trials, KOL.' },
    {
      id: 'healthcare',
      title: 'Healthcare market research hub',
      description: 'Countries, cities, therapy areas, and research modules.',
    },
    {
      id: 'global',
      title: 'Global websites',
      description: 'Country blueprint navigation for international teams.',
    },
    {
      id: 'pillars',
      title: 'GCC, MENA & specialty programs',
      description: 'Pillar landings, alternatives, and deep-dive reports.',
    },
    {
      id: 'pharma-cos',
      title: 'Pharmaceutical company directories',
      description: 'Country-level industry snapshots.',
    },
    {
      id: 'reports',
      title: 'Healthcare & devices market reports',
      description: 'GCC and country medical market briefs.',
    },
    { id: 'blog', title: 'Blog & insights', description: 'Editorial briefs, guides, and regional analysis.' },
    { id: 'cases', title: 'Case studies', description: 'Selected client evidence and programme outcomes.' },
    { id: 'portfolio', title: 'Portfolio & conference', description: 'Strategic portfolio deck and event pages.' },
    {
      id: 'localized',
      title: 'Localized pages',
      description: 'Market access, contacts, and market research by locale.',
    },
    { id: 'other', title: 'Additional pages', description: 'Supporting URLs and tooling.' },
  ];

  return order
    .map((meta) => {
      const paths = (buckets.get(meta.id) ?? []).sort((a, b) => a.localeCompare(b));
      return { ...meta, paths };
    })
    .filter((s) => s.paths.length > 0);
}
