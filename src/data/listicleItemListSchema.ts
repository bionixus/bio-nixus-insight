export type ListicleItemListFirm = {
  rank: number;
  name: string;
  anchor: string;
  overview?: string;
  bestFor?: string;
  url?: string;
  orgId?: string;
};

/** ItemList of ranked firms — Organization items + in-page anchors. */
export function buildListicleItemListSchema(opts: {
  name: string;
  description?: string;
  canonical: string;
  firms: ListicleItemListFirm[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    numberOfItems: opts.firms.length,
    itemListElement: opts.firms.map((f) => ({
      '@type': 'ListItem',
      position: f.rank,
      name: f.name,
      url: `${opts.canonical}#${f.anchor}`,
      item: {
        '@type': 'Organization',
        ...(f.orgId ? { '@id': f.orgId } : {}),
        name: f.name,
        ...(f.url ? { url: f.url } : {}),
        description: f.bestFor ? `Best for: ${f.bestFor}` : (f.overview ?? '').slice(0, 200),
      },
    })),
  };
}
