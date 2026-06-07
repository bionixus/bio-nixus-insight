/** ItemList JSON-LD for pharmaceutical company BOFU pages. */
export function buildPharmaCompaniesItemListLd(pageUrl: string, companyNames: string[]) {
  const names = companyNames.filter(Boolean).slice(0, 12);
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pharmaceutical companies',
    url: pageUrl,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: names.length,
    itemListElement: names.map((name, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
    })),
  };
}
