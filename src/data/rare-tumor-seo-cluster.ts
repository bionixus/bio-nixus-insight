/**
 * Hub-and-spoke SEO clusters: pillar = commercial research services; blog = editorial briefing.
 * Keeps titles, schema, and sitemap roles distinct to avoid keyword cannibalization.
 */
export interface RareTumorSeoCluster {
  readonly id: 'nf1' | 'desmoid';
  readonly pillarPath: string;
  readonly blogPath: string;
  readonly blogSlug: string;
  readonly pillarLabel: string;
  readonly blogLabel: string;
  readonly pillarRole: string;
  readonly blogRole: string;
  /** Optional drug-brand editorial spoke (NF1 Koselugo only). */
  readonly drugBlogPath?: string;
  readonly drugBlogSlug?: string;
  readonly drugBlogLabel?: string;
  readonly drugBlogRole?: string;
}

export const NF1_RARE_TUMOR_CLUSTER: RareTumorSeoCluster = {
  id: 'nf1',
  pillarPath: '/nf1-pharma-market-research',
  blogPath: '/blog/neurofibromatosis',
  blogSlug: 'neurofibromatosis',
  pillarLabel: 'NF1 pharma market research services',
  blogLabel: 'NF1 market access briefing',
  pillarRole: 'Commercial research services, competitive intelligence, and clinician sampling programmes',
  blogRole: 'Editorial briefing on NF1 market access, MEK inhibition milestones, and HCP evidence signals',
  drugBlogPath: '/blog/nf1-koselugo-selumetinib-pharma-market-research',
  drugBlogSlug: 'nf1-koselugo-selumetinib-pharma-market-research',
  drugBlogLabel: 'Koselugo (selumetinib) market research article',
  drugBlogRole:
    'Brand-focused editorial on Koselugo (selumetinib) FDA milestones, launch economics, and MEK inhibitor positioning',
};

export const DESMOID_RARE_TUMOR_CLUSTER: RareTumorSeoCluster = {
  id: 'desmoid',
  pillarPath: '/desmoid-tumor-pharma-market-research',
  blogPath: '/blog/desmoid-tumors-nirogacestat-pharma-market-access',
  blogSlug: 'desmoid-tumors-nirogacestat-pharma-market-access',
  pillarLabel: 'Desmoid tumour pharma market research services',
  blogLabel: 'Desmoid Ogsiveo market access briefing',
  pillarRole: 'Commercial research services, sarcoma tumour board intelligence, and tender analytics',
  blogRole: 'Editorial briefing on Ogsiveo (nirogacestat), FDA approval context, and access signals',
};

const BY_BLOG_SLUG = new Map<string, RareTumorSeoCluster>([
  [NF1_RARE_TUMOR_CLUSTER.blogSlug, NF1_RARE_TUMOR_CLUSTER],
  ...(NF1_RARE_TUMOR_CLUSTER.drugBlogSlug
    ? [[NF1_RARE_TUMOR_CLUSTER.drugBlogSlug, NF1_RARE_TUMOR_CLUSTER] as const]
    : []),
  [DESMOID_RARE_TUMOR_CLUSTER.blogSlug, DESMOID_RARE_TUMOR_CLUSTER],
]);

const BY_PILLAR_PATH = new Map<string, RareTumorSeoCluster>([
  [NF1_RARE_TUMOR_CLUSTER.pillarPath, NF1_RARE_TUMOR_CLUSTER],
  [DESMOID_RARE_TUMOR_CLUSTER.pillarPath, DESMOID_RARE_TUMOR_CLUSTER],
]);

export function getRareTumorClusterByBlogSlug(slug: string | undefined): RareTumorSeoCluster | undefined {
  if (!slug) return undefined;
  return BY_BLOG_SLUG.get(slug.trim().toLowerCase());
}

export function getRareTumorClusterByPillarPath(path: string | undefined): RareTumorSeoCluster | undefined {
  if (!path) return undefined;
  return BY_PILLAR_PATH.get(path);
}

export const RARE_TUMOR_PILLAR_SITEMAP_PATHS = [
  NF1_RARE_TUMOR_CLUSTER.pillarPath,
  DESMOID_RARE_TUMOR_CLUSTER.pillarPath,
] as const;
