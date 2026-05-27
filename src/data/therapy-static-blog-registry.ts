/**
 * Consolidated wiring for rarity / oncology topical blog packages that bypass Sanity body delivery.
 */
import {
  DESMOID_BLOG_BODY_HTML,
  DESMOID_BLOG_COVER_IMAGE,
  DESMOID_BLOG_DISPLAY_TITLE,
  DESMOID_BLOG_EXECUTIVE_SUMMARY_HTML,
  DESMOID_BLOG_META_DESCRIPTION,
  DESMOID_BLOG_META_TITLE,
  DESMOID_BLOG_OG_DESCRIPTION,
  DESMOID_BLOG_SCHEMA_FAQ,
  DESMOID_BLOG_TAGS,
  DESMOID_BLOG_TABLE_OF_CONTENTS,
  DESMOID_NIROGACESTAT_BLOG_SLUG,
  DESMOID_STATIC_BLOG_SCHEMA_ITEM_LIST,
} from '@/data/blog-desmoid-ogsiveo-market-research';
import {
  NF1_KOSELUGO_BODY_HTML,
  NF1_KOSELUGO_COVER_IMAGE,
  NF1_KOSELUGO_DISPLAY_TITLE,
  NF1_KOSELUGO_EXECUTIVE_SUMMARY_HTML,
  NF1_KOSELUGO_META_DESCRIPTION,
  NF1_KOSELUGO_META_TITLE,
  NF1_KOSELUGO_OG_DESCRIPTION,
  NF1_KOSELUGO_SCHEMA_FAQ,
  NF1_KOSELUGO_TAGS,
  NF1_KOSELUGO_TABLE_OF_CONTENTS,
  NF1_KOSELUGO_BLOG_SLUG,
  NF1_STATIC_BLOG_SCHEMA_ITEM_LIST,
  NF1_KOSELUGO_SCHEMA_MENTIONS,
} from '@/data/blog-nf1-koselugo-market-research';

export type TherapyStaticBlogBundle = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  coverImage?: string;
  displayTitle: string;
  bodyHtml: string;
  executiveSummaryHtml: string | null;
  tableOfContents: { heading: string; anchor?: string }[];
  schemaFaq: { question: string; answer: string }[];
  tags: string[];
  itemListSchema?: { name: string; items: { name: string; description: string }[] };
  /** Optional JSON-LD `mentions` (e.g. MedicalCondition / Drug for therapy articles). */
  schemaMentions?: ReadonlyArray<Record<string, unknown>>;
  /** Hero/OG intrinsic dimensions used for structured `ImageObject` width & height */
  schemaOgImageDimensions?: { width: number; height: number };
};

export const THERAPY_STATIC_BLOG_SLUG_SET = new Set<string>([
  NF1_KOSELUGO_BLOG_SLUG,
  DESMOID_NIROGACESTAT_BLOG_SLUG,
]);

function cloneFaq(items: readonly { question: string; answer: string }[]) {
  return items.map(({ question, answer }) => ({ question, answer }));
}

const NF1_BUNDLE: TherapyStaticBlogBundle = {
  slug: NF1_KOSELUGO_BLOG_SLUG,
  metaTitle: NF1_KOSELUGO_META_TITLE,
  metaDescription: NF1_KOSELUGO_META_DESCRIPTION,
  ogDescription: NF1_KOSELUGO_OG_DESCRIPTION,
  coverImage: NF1_KOSELUGO_COVER_IMAGE,
  displayTitle: NF1_KOSELUGO_DISPLAY_TITLE,
  bodyHtml: NF1_KOSELUGO_BODY_HTML,
  executiveSummaryHtml: NF1_KOSELUGO_EXECUTIVE_SUMMARY_HTML,
  tableOfContents: [...NF1_KOSELUGO_TABLE_OF_CONTENTS],
  schemaFaq: cloneFaq(NF1_KOSELUGO_SCHEMA_FAQ),
  tags: [...NF1_KOSELUGO_TAGS],
  itemListSchema: NF1_STATIC_BLOG_SCHEMA_ITEM_LIST,
  schemaMentions: [...NF1_KOSELUGO_SCHEMA_MENTIONS],
  schemaOgImageDimensions: { width: 1600, height: 1067 },
};

const DESMOID_BUNDLE: TherapyStaticBlogBundle = {
  slug: DESMOID_NIROGACESTAT_BLOG_SLUG,
  metaTitle: DESMOID_BLOG_META_TITLE,
  metaDescription: DESMOID_BLOG_META_DESCRIPTION,
  ogDescription: DESMOID_BLOG_OG_DESCRIPTION,
  coverImage: DESMOID_BLOG_COVER_IMAGE,
  displayTitle: DESMOID_BLOG_DISPLAY_TITLE,
  bodyHtml: DESMOID_BLOG_BODY_HTML,
  executiveSummaryHtml: DESMOID_BLOG_EXECUTIVE_SUMMARY_HTML,
  tableOfContents: [...DESMOID_BLOG_TABLE_OF_CONTENTS],
  schemaFaq: cloneFaq(DESMOID_BLOG_SCHEMA_FAQ),
  tags: [...DESMOID_BLOG_TAGS],
  itemListSchema: DESMOID_STATIC_BLOG_SCHEMA_ITEM_LIST,
  schemaOgImageDimensions: { width: 1600, height: 1067 },
};

const BY_SLUG: Record<string, TherapyStaticBlogBundle> = {
  [NF1_KOSELUGO_BLOG_SLUG]: NF1_BUNDLE,
  [DESMOID_NIROGACESTAT_BLOG_SLUG]: DESMOID_BUNDLE,
};

export function getTherapyStaticBlogBundle(slug: string | undefined): TherapyStaticBlogBundle | undefined {
  if (!slug) return undefined;
  return BY_SLUG[slug];
}
