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

type PharmaFaqInput = { q: string; a: string };

/** FAQPage JSON-LD aligned with visible <details> content on pharma company guides. */
export function buildPharmaCompaniesFaqLd(pageUrl: string, items: PharmaFaqInput[]) {
  const cleanUrl = pageUrl.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${cleanUrl}#faq`,
    url: `${cleanUrl}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}
