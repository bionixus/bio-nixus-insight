/** Copy and portable-text blocks for Egypt New Administrative Capital press release. */

export const SLUG = 'bionixus-egypt-new-administrative-capital-office-2026'

export const HEADLINE =
  "BioNixus Becomes First Market Research Company to Open Offices in Egypt's New Administrative Capital"

export const SUBHEADLINE =
  "New office will serve as BioNixus's regional headquarters for the Middle East and Africa, with expanded investment in Egypt across the company's 2026–2027 plan"

export const DATELINE = 'NEW ADMINISTRATIVE CAPITAL, EGYPT — August 11, 2026'

export const SPOKESPERSON_NAME = 'Dr. Mohammad Alsaadany'

export const SPOKESPERSON_TITLE = 'MEA Director'

export const SEO_META_TITLE =
  'BioNixus Opens Egypt New Administrative Capital Office | MEA HQ'

export const SEO_META_DESCRIPTION =
  "BioNixus becomes the first market research firm to open in Egypt's New Administrative Capital. Q4 2026 MEA regional HQ with expanded Egypt investment for 2026–2027."

export const OG_DESCRIPTION = SEO_META_DESCRIPTION

export const RELATED_REPORT_SLUG = 'egypt-healthcare-market-report'

export const PUBLISHED_AT = '2026-08-11T09:00:00.000Z'

export const BOILERPLATE =
  'BioNixus is a leading global market research and analytics firm, headquartered in the United States with a presence in more than 38 countries. The company has a track record of delivering projects across the pharmaceutical, healthcare, B2B and B2C sectors. In Egypt, BioNixus recently signed an agreement with one of the country\'s leading EGX-listed wood manufacturers, and works with more than ten pharmaceutical companies as well as leading FMCG and retail brands.'

export const HERO_ALT =
  'Dr. Mohammad Alsaadany, MEA Director at BioNixus, speaking at Bibliotheca Alexandrina during a formal presentation'

export const HERO_CAPTION =
  'Dr. Mohammad Alsaadany, MEA Director at BioNixus, announces the company\'s New Administrative Capital office plans.'

/** @param {string} key */
function span(text, key, marks = []) {
  return { _type: 'span', _key: `${key}-span`, text, marks }
}

/** @param {'normal'|'h2'|'h3'} style @param {string} key @param {Array<{text: string, marks?: string[]}>} parts @param {Array<Record<string, unknown>>} markDefs */
function block(style, key, parts, markDefs = []) {
  return {
    _type: 'block',
    _key: key,
    style,
    children: parts.map((p, i) => span(p.text, `${key}-${i}`, p.marks || [])),
    markDefs,
  }
}

export function buildPressReleaseBody() {
  return [
    block('normal', 'lead', [
      {
        text: "BioNixus Market Research today announced plans to open an office in Egypt's New Administrative Capital, becoming the first market research company to establish a presence in the city. The office is scheduled to open in the fourth quarter of 2026 and will be developed into the company's regional headquarters for the Middle East and Africa.",
      },
    ]),
    block('normal', 'p2', [
      {
        text: 'The announcement was made by Dr. Mohammad Alsaadany, MEA Director at BioNixus. It marks the company\'s second office in Egypt, alongside its existing premises in Beverly Hills, Sheikh Zayed, Giza. From the New Administrative Capital, BioNixus will serve clients across the Gulf, the Levant, and North Africa.',
      },
    ]),
    block('normal', 'p3', [
      {
        text: 'Dr. Alsaadany also confirmed that BioNixus will increase its investment in Egypt as part of the company\'s 2026–2027 plan, reflecting the country\'s growing role in the firm\'s regional strategy.',
      },
    ]),
    block('normal', 'p4', [
      {
        text: 'BioNixus selected the New Administrative Capital for its proximity to government entities and to the regional headquarters of multinational organizations. The company intends to expand its partnership with the Egyptian government from the new location.',
      },
    ]),
    block('normal', 'quote1', [
      {
        text: `"Egypt is not a market we serve from a distance — it is where we are choosing to build," said ${SPOKESPERSON_NAME}, ${SPOKESPERSON_TITLE} at BioNixus. "The New Administrative Capital puts us alongside the institutions and the multinational headquarters that shape decision-making in this region. Being the first market research company to open here reflects our confidence in where the country is heading, and it is why we are increasing our investment in Egypt over the next two years."`,
      },
    ]),
    block('normal', 'quote2', [
      {
        text: '"Making this our regional headquarters means that decisions about the Middle East and Africa will be taken within the region," he added. "Clients across the Gulf, the Levant and North Africa will be served by teams who understand these markets because they operate in them. We also see real opportunity to deepen our partnership with the Egyptian government, and this location brings us closer to that work."',
      },
    ]),
    block('h2', 'egypt-context', [{ text: 'Egypt in BioNixus\'s regional strategy' }]),
    block('normal', 'ctx1', [
      {
        text: 'Egypt anchors BioNixus fieldwork and commercial programmes across North Africa and the wider Middle East. Teams and clients can align planning with the ',
      },
      { text: 'Egypt healthcare market report', marks: ['link-egypt'] },
      { text: ', ', marks: [] },
      { text: 'market research companies in Egypt', marks: ['link-egypt-list'] },
      { text: ', and the ', marks: [] },
      { text: 'healthcare market research hub', marks: ['link-hub'] },
      { text: '.', marks: [] },
    ], [
      {
        _key: 'link-egypt',
        _type: 'link',
        href: 'https://www.bionixus.com/egypt-healthcare-market-report',
      },
      {
        _key: 'link-egypt-list',
        _type: 'link',
        href: 'https://www.bionixus.com/insights/top-market-research-companies-egypt-2026',
      },
      {
        _key: 'link-hub',
        _type: 'link',
        href: 'https://www.bionixus.com/healthcare-market-research',
      },
    ]),
    block('normal', 'cta', [
      { text: 'For media and partnership enquiries, visit ', marks: [] },
      { text: 'BioNixus contact', marks: ['link-contact'] },
      { text: ' or the ', marks: [] },
      { text: 'newsroom', marks: ['link-news'] },
      { text: '.', marks: [] },
    ], [
      { _key: 'link-contact', _type: 'link', href: 'https://www.bionixus.com/contact' },
      { _key: 'link-news', _type: 'link', href: 'https://www.bionixus.com/news' },
    ]),
  ]
}
