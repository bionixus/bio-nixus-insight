import schemaJson from './q2-pharma-blog-schema.json';

export type Q2PharmaSchemaBundle = {
  articleSection: string;
  mentions: ReadonlyArray<Record<string, unknown>>;
  ogImageWidth: 1200;
  ogImageHeight: 630;
};

const Q2_SCHEMA = schemaJson as Record<
  string,
  { articleSection: string; mentions: Record<string, unknown>[] }
>;

export const Q2_PHARMA_BLOG_SLUGS = new Set(Object.keys(Q2_SCHEMA));

export function getQ2PharmaSchemaBundle(slug: string): Q2PharmaSchemaBundle | undefined {
  const entry = Q2_SCHEMA[slug];
  if (!entry) return undefined;
  return {
    articleSection: entry.articleSection,
    mentions: entry.mentions,
    ogImageWidth: 1200,
    ogImageHeight: 630,
  };
}
