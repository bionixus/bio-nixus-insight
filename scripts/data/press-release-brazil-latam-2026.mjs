/** Copy and portable-text blocks for Brazil / LATAM press release publish script. */

export const SLUG = 'bionixus-brazil-office-latam-expansion-2026'

export const HEADLINE =
  'BioNixus Expands Latin America Presence with São Paulo Office Opening in Q2 2026'

export const SUBHEADLINE =
  'New Brazil hub strengthens quantitative and qualitative pharmaceutical research, market access intelligence, and launch support across LATAM for global life sciences teams.'

export const DATELINE = 'SÃO PAULO — 30 May 2026'

export const SPOKESPERSON_NAME = 'Laura McConaughey'

export const SPOKESPERSON_TITLE = 'Research Director'

export const SEO_META_TITLE = 'BioNixus São Paulo Office Q2 2026 | LATAM Expansion'

export const SEO_META_DESCRIPTION =
  'BioNixus opens a São Paulo office in Q2 2026 to expand LATAM healthcare and pharma market research, physician insights, and market access programmes in Brazil.'

export const OG_DESCRIPTION = SEO_META_DESCRIPTION

export const RELATED_REPORT_SLUG = 'brazil-healthcare-market-report'

export const BOILERPLATE =
  'BioNixus is a healthcare and pharmaceutical market research firm headquartered in the United States, serving life sciences teams in North America, EMEA, the GCC, and Latin America. The company delivers quantitative physician research, qualitative KOL programmes, payer and HTA intelligence, and launch and market access strategy. BioNixus is opening a São Paulo office in Q2 2026 to strengthen LATAM fieldwork and regulatory-aligned insights for global and regional sponsors.'

export const HERO_ALT =
  'São Paulo business district skyline at dusk representing BioNixus expansion in Brazil and Latin America healthcare market research'

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
  const quoteKey = 'quote'
  const servicesKey = 'services-h2'
  const whyKey = 'why-h2'

  return [
    block('normal', 'lead', [
      {
        text: 'BioNixus, a healthcare and pharmaceutical market research firm, today announced plans to further strengthen and expand its services across Latin America (LATAM) with a new office in São Paulo, Brazil, scheduled to open in Q2 2026. The expansion gives international and regional life sciences clients local fieldwork capacity, faster access to Brazilian payer and regulatory context, and continuity with BioNixus programmes already delivered in the United States, Canada, EMEA, and the GCC.',
      },
    ]),
    block('normal', 'p2', [
      {
        text: 'Brazil is one of the largest pharmaceutical markets in the Americas. Sponsors entering or scaling in the country routinely need evidence aligned with ANVISA registration pathways, CONITEC and public-system reimbursement deliberations, and the distinct dynamics of public (SUS) and private (ANS) coverage. The São Paulo hub will support those decisions with the same governance applied to global BioNixus programmes: quantitative physician and specialist research, qualitative KOL and advisory work, competitive and market-sizing intelligence, and market access strategy linked to launch planning. Teams can align early thinking with the ',
      },
      { text: 'Brazil healthcare market briefing', marks: ['link-brazil'] },
      { text: ' and the wider ', marks: [] },
      { text: 'healthcare market research hub', marks: ['link-hub'] },
      { text: '.', marks: [] },
    ], [
      {
        _key: 'link-brazil',
        _type: 'link',
        href: 'https://www.bionixus.com/brazil-healthcare-market-report',
      },
      {
        _key: 'link-hub',
        _type: 'link',
        href: 'https://www.bionixus.com/healthcare-market-research',
      },
    ]),
    block('normal', quoteKey, [
      {
        text: `“LATAM is a primary growth engine for many of our clients—not a secondary market,” said ${SPOKESPERSON_NAME}, ${SPOKESPERSON_TITLE} at BioNixus. “Opening in São Paulo in Q2 2026 lets us pair deep local execution with the cross-market comparability teams expect when they run US, European, and GCC studies in parallel. Our goal is decision-ready evidence on international quality standards, with Brazilian regulatory and access nuance built in from the first protocol.”`,
      },
    ]),
    block('h2', servicesKey, [{ text: 'Expanded services in LATAM' }]),
    block('normal', 'svc1', [
      {
        text: 'BioNixus’ strengthened LATAM offer includes quantitative healthcare research (physician, specialist, and hospital surveys with bilingual fieldwork); qualitative insights (KOL mapping, advisory boards, and interviews across oncology, metabolic, cardiovascular, and other therapy areas); market access and payer intelligence (ANVISA and reimbursement landscaping, HTA-oriented evidence planning, and launch sequencing); market intelligence (therapy-area and country briefings with competitive landscaping); and integrated launch support linking field insights to commercial, medical affairs, and access workstreams.',
      },
    ]),
    block('normal', 'svc2', [
      {
        text: 'The São Paulo office will coordinate multi-country LATAM programmes with BioNixus’ existing Americas and EMEA hubs so sponsors retain one methodology owner and harmonised reporting.',
      },
    ]),
    block('h2', whyKey, [{ text: 'Why Brazil, why now' }]),
    block('normal', 'why1', [
      {
        text: 'Demand has increased for programmes that combine US and EU governance with LATAM execution speed. Brazil’s scale, complex reimbursement environment, and concentration of clinical and commercial expertise make São Paulo a natural regional anchor. BioNixus expects to confirm inauguration details closer to the Q2 2026 opening. Media and partners may register interest via the BioNixus press contact page.',
      },
    ]),
    block('normal', 'cta', [
      { text: 'For partnership enquiries, visit ', marks: [] },
      { text: 'BioNixus contact', marks: ['link-contact'] },
      { text: ' or the ', marks: [] },
      { text: 'media kit', marks: ['link-media'] },
      { text: '.', marks: [] },
    ], [
      { _key: 'link-contact', _type: 'link', href: 'https://www.bionixus.com/contact' },
      { _key: 'link-media', _type: 'link', href: 'https://www.bionixus.com/media' },
    ]),
  ]
}
