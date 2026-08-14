/**
 * Country SEO pages for “Pharma Insights” and “Real-World Evidence”.
 * Healthcare silo only — link to /healthcare-market-research/{slug} and /real-world-evidence.
 */

const BASE = 'https://www.bionixus.com';

export type CountryKeywordKind = 'pharma-insights' | 'rwe';

export type CountryKeywordCountry = {
  slug: string;
  name: string;
  region: 'Americas' | 'Europe' | 'MENA & GCC';
  /** Regulator / payer cues for unique copy (no fabricated market sizes). */
  regulators: string;
  accessCue: string;
  relatedSlugs: [string, string, ...string[]];
};

export type CountryKeywordContent = {
  slug: string;
  kind: CountryKeywordKind;
  countrySlug: string;
  countryName: string;
  region: string;
  badge: string;
  breadcrumbLabel: string;
  pillarLabel: string;
  pillarHref: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
  intro: string[];
  hubLinks: Array<{ to: string; label: string }>;
  topics: Array<{ name: string; detail: string }>;
  audiences: Array<{ audience: string; description: string }>;
  whyPoints: string[];
  relatedLinks: Array<{ to: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
  areaServed: string[];
};

export const PHARMA_INSIGHTS_RWE_COUNTRIES: CountryKeywordCountry[] = [
  {
    slug: 'united-states',
    name: 'United States',
    region: 'Americas',
    regulators: 'FDA, CMS, and commercial payer / PBM pathways',
    accessCue: 'formulary, prior authorization, and specialty pharmacy dynamics',
    relatedSlugs: ['canada', 'uk', 'germany'],
  },
  {
    slug: 'canada',
    name: 'Canada',
    region: 'Americas',
    regulators: 'Health Canada, CADTH/CDA, and provincial drug plans',
    accessCue: 'federal review followed by provincial listing negotiations',
    relatedSlugs: ['united-states', 'uk', 'france'],
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    region: 'Europe',
    regulators: 'MHRA, NICE, and NHS commissioning pathways',
    accessCue: 'HTA-informed uptake and regional ICS / trust adoption',
    relatedSlugs: ['germany', 'france', 'united-states'],
  },
  {
    slug: 'germany',
    name: 'Germany',
    region: 'Europe',
    regulators: 'BfArM, G-BA, and AMNOG benefit assessment',
    accessCue: 'early benefit assessment and price negotiation after launch',
    relatedSlugs: ['uk', 'france', 'italy'],
  },
  {
    slug: 'france',
    name: 'France',
    region: 'Europe',
    regulators: 'ANSM, HAS, and CEPS pricing governance',
    accessCue: 'ASMR/SMR ratings and hospital vs retail channel dynamics',
    relatedSlugs: ['germany', 'spain', 'uk'],
  },
  {
    slug: 'italy',
    name: 'Italy',
    region: 'Europe',
    regulators: 'AIFA and regional formulary decision-makers',
    accessCue: 'national negotiation plus regional access variation',
    relatedSlugs: ['spain', 'france', 'germany'],
  },
  {
    slug: 'spain',
    name: 'Spain',
    region: 'Europe',
    regulators: 'AEMPS and autonomous-community access pathways',
    accessCue: 'national pricing followed by regional hospital adoption',
    relatedSlugs: ['italy', 'france', 'germany'],
  },
  {
    slug: 'europe',
    name: 'Europe',
    region: 'Europe',
    regulators: 'EMA centralised authorisation with national HTA gatekeeping',
    accessCue: 'multi-country launch sequencing across EU5 and beyond',
    relatedSlugs: ['uk', 'germany', 'france'],
  },
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    region: 'MENA & GCC',
    regulators: 'SFDA registration and NUPCO / MOH procurement',
    accessCue: 'Vision 2030 localisation pressure and tender-led hospital demand',
    relatedSlugs: ['uae', 'egypt', 'kuwait'],
  },
  {
    slug: 'uae',
    name: 'United Arab Emirates',
    region: 'MENA & GCC',
    regulators: 'MOHAP, DHA, and DOH pathways',
    accessCue: 'emirate-level hospital formularies and private-sector adoption',
    relatedSlugs: ['saudi-arabia', 'qatar', 'kuwait'],
  },
  {
    slug: 'egypt',
    name: 'Egypt',
    region: 'MENA & GCC',
    regulators: 'Egyptian Drug Authority (EDA) and UHI procurement',
    accessCue: 'public tender volume with growing private tertiary demand',
    relatedSlugs: ['saudi-arabia', 'uae', 'turkey'],
  },
  {
    slug: 'qatar',
    name: 'Qatar',
    region: 'MENA & GCC',
    regulators: 'MOPH registration and Hamad / private hospital pathways',
    accessCue: 'concentrated institutional buying and specialty referral patterns',
    relatedSlugs: ['uae', 'saudi-arabia', 'kuwait'],
  },
  {
    slug: 'kuwait',
    name: 'Kuwait',
    region: 'MENA & GCC',
    regulators: 'MOH drug registration and hospital procurement committees',
    accessCue: 'public-sector formulary control with private clinic growth',
    relatedSlugs: ['saudi-arabia', 'uae', 'bahrain'],
  },
  {
    slug: 'oman',
    name: 'Oman',
    region: 'MENA & GCC',
    regulators: 'MOH registration and public hospital purchasing',
    accessCue: 'centralised tenders with expanding private specialty centres',
    relatedSlugs: ['uae', 'saudi-arabia', 'bahrain'],
  },
  {
    slug: 'bahrain',
    name: 'Bahrain',
    region: 'MENA & GCC',
    regulators: 'NHRA registration and institutional access pathways',
    accessCue: 'compact market with GCC reference and private hospital demand',
    relatedSlugs: ['kuwait', 'saudi-arabia', 'uae'],
  },
  {
    slug: 'turkey',
    name: 'Turkey',
    region: 'MENA & GCC',
    regulators: 'TİTCK registration and SGK reimbursement',
    accessCue: 'reference pricing and high-volume public reimbursement logic',
    relatedSlugs: ['egypt', 'germany', 'saudi-arabia'],
  },
];

const COUNTRY_BY_SLUG = Object.fromEntries(
  PHARMA_INSIGHTS_RWE_COUNTRIES.map((c) => [c.slug, c]),
) as Record<string, CountryKeywordCountry>;

export function healthcareHubPathForCountry(countrySlug: string): string {
  return `/healthcare-market-research/${countrySlug}`;
}

export function pharmaInsightsPath(countrySlug: string): string {
  return `/pharma-insights-${countrySlug}`;
}

export function rweCountryPath(countrySlug: string): string {
  return `/real-world-evidence-${countrySlug}`;
}

export function isPharmaInsightsRweCountry(countrySlug: string): boolean {
  return Boolean(COUNTRY_BY_SLUG[countrySlug]);
}

function displayName(countrySlug: string): string {
  return COUNTRY_BY_SLUG[countrySlug]?.name ?? countrySlug;
}

function buildPharmaInsights(country: CountryKeywordCountry): CountryKeywordContent {
  const hubPath = healthcareHubPathForCountry(country.slug);
  const slug = `pharma-insights-${country.slug}`;
  const relatedLinks: Array<{ to: string; label: string }> = [
    { to: hubPath, label: `${country.name} healthcare market research` },
    { to: '/healthcare-market-research', label: 'Global healthcare market research hub' },
    { to: rweCountryPath(country.slug), label: `Real-world evidence in ${country.name}` },
    ...country.relatedSlugs.slice(0, 2).map((s) => ({
      to: pharmaInsightsPath(s),
      label: `Pharma insights — ${displayName(s)}`,
    })),
  ];

  return {
    slug,
    kind: 'pharma-insights',
    countrySlug: country.slug,
    countryName: country.name,
    region: country.region,
    badge: `${country.name} · Pharma Insights`,
    breadcrumbLabel: `Pharma Insights — ${country.name}`,
    pillarLabel: 'Healthcare Market Research',
    pillarHref: '/healthcare-market-research',
    title: `Pharma Insights ${country.name} | Market Research | BioNixus`,
    description: `Pharma insights for ${country.name}: physician, payer, and access intelligence shaped by ${country.regulators}. Primary research for launch and growth decisions.`,
    canonical: `${BASE}/${slug}`,
    h1: `Pharma Insights in ${country.name}: Evidence for Launch & Access Decisions`,
    intro: [
      `Pharmaceutical teams searching for pharma insights in ${country.name} need more than desk research — they need defensible primary evidence on prescribing, access barriers, and competitor behaviour under ${country.regulators}. BioNixus designs programmes that turn those signals into decisions your commercial, medical, and access teams can act on.`,
      `Our ${country.name} pharma insight work sits inside a broader healthcare research practice. We map ${country.accessCue} so insights stay grounded in how products actually reach patients — not in generic regional averages.`,
    ],
    hubLinks: [
      { to: '/healthcare-market-research', label: 'healthcare market research hub' },
      { to: hubPath, label: `${country.name} healthcare market research` },
    ],
    topics: [
      {
        name: 'Prescriber and pathway intelligence',
        detail: `How specialists and primary-care physicians in ${country.name} initiate, switch, and persist therapy — including referral bottlenecks and guideline friction.`,
      },
      {
        name: 'Payer and access reality checks',
        detail: `What ${country.regulators} imply for listing, tender, or formulary success — and where evidence gaps stall uptake.`,
      },
      {
        name: 'Competitive and message testing',
        detail: `How stakeholders compare your brand narrative against incumbents in live ${country.name} conversations — not only in brand books.`,
      },
      {
        name: 'Launch and lifecycle sequencing',
        detail: `Where to invest first across accounts, regions, or channels given ${country.accessCue}.`,
      },
    ],
    audiences: [
      {
        audience: 'Physicians and KOLs',
        description: `Specialty and high-volume treaters who shape adoption curves in ${country.name}.`,
      },
      {
        audience: 'Payers and access stakeholders',
        description: `Decision-makers influenced by ${country.regulators} and institutional budget holders.`,
      },
      {
        audience: 'Hospital pharmacy and procurement',
        description: `Teams that translate clinical preference into formulary and tender outcomes.`,
      },
      {
        audience: 'Medical and commercial leads',
        description: 'Internal clients who need insight packaged for brand plans, advisory boards, and access dossiers.',
      },
    ],
    whyPoints: [
      'Decision-led primary research — not syndicated table dumps',
      `Protocols aware of ${country.regulators} from the first design workshop`,
      'Verified HCP and access-stakeholder recruitment',
      'Comparable instruments when you roll insights into multi-country programmes',
      'Board-ready synthesis with evidence gaps and owners flagged',
    ],
    relatedLinks,
    faqs: [
      {
        question: `What do “pharma insights” programmes in ${country.name} typically cover?`,
        answer: `Most briefs combine prescribing and pathway research, competitive message testing, and access friction under ${country.regulators}. Scope follows the decision — launch sequencing, brand defence, or indication expansion — rather than a fixed catalogue.`,
      },
      {
        question: `How is this different from BioNixus ${country.name} healthcare market research?`,
        answer: `This page focuses on pharmaceutical insight use cases. The ${country.name} healthcare market research hub covers the full country programme architecture — methods, stakeholders, and service mix — and is the right starting point for multi-workstream briefs.`,
      },
      {
        question: `Can BioNixus combine ${country.name} insights with other markets?`,
        answer:
          'Yes. We run single-country deep dives or multi-country designs with comparable instruments so regional leadership can read markets side by side without forcing a one-size template.',
      },
      {
        question: 'How quickly can we receive a proposal?',
        answer:
          'After a short scope alignment on objectives, audiences, and timelines, BioNixus typically returns a proposal on a fast cadence with method options, sample logic, and realistic field windows.',
      },
    ],
    areaServed: [country.name],
  };
}

function buildRwe(country: CountryKeywordCountry): CountryKeywordContent {
  const hubPath = healthcareHubPathForCountry(country.slug);
  const slug = `real-world-evidence-${country.slug}`;
  const relatedLinks: Array<{ to: string; label: string }> = [
    { to: '/real-world-evidence', label: 'Real-world evidence hub' },
    { to: hubPath, label: `${country.name} healthcare market research` },
    { to: pharmaInsightsPath(country.slug), label: `Pharma insights — ${country.name}` },
    ...country.relatedSlugs.slice(0, 2).map((s) => ({
      to: rweCountryPath(s),
      label: `RWE — ${displayName(s)}`,
    })),
  ];

  if (country.region === 'MENA & GCC') {
    relatedLinks.splice(1, 0, {
      to: '/real-world-evidence-gcc',
      label: 'Real-world evidence GCC programmes',
    });
  }

  return {
    slug,
    kind: 'rwe',
    countrySlug: country.slug,
    countryName: country.name,
    region: country.region,
    badge: `${country.name} · Real-World Evidence`,
    breadcrumbLabel: `RWE — ${country.name}`,
    pillarLabel: 'Real-World Evidence',
    pillarHref: '/real-world-evidence',
    title: `Real-World Evidence (RWE) in ${country.name} | BioNixus`,
    description: `Real-world evidence in ${country.name} for pharma teams: pathway, payer, and practice-pattern RWE aligned with ${country.regulators}. Primary research for HTA, medical, and commercial decisions.`,
    canonical: `${BASE}/${slug}`,
    h1: `Real-World Evidence in ${country.name}: Practice-Pattern Insight for Access & Medical Teams`,
    intro: [
      `Real-world evidence in ${country.name} must reflect how care is delivered under ${country.regulators} — not only what pivotal trials show. BioNixus designs RWE programmes that capture treatment pathways, unmet need, and stakeholder behaviour so medical, HEOR, and commercial teams can defend decisions with transparent methods.`,
      `Whether you need qualitative depth with specialists or structured pathway surveys, we align each protocol to the ${country.name} decision at hand and to ${country.accessCue}.`,
    ],
    hubLinks: [
      { to: '/real-world-evidence', label: 'real-world evidence hub' },
      { to: hubPath, label: `${country.name} healthcare market research` },
    ],
    topics: [
      {
        name: 'Treatment pathway and sequencing evidence',
        detail: `How physicians in ${country.name} move patients through lines of therapy, including delays driven by ${country.accessCue}.`,
      },
      {
        name: 'Unmet need and burden narratives',
        detail: `Stakeholder-validated unmet need language that supports medical affairs and access storytelling.`,
      },
      {
        name: 'Payer and HTA-relevant practice patterns',
        detail: `Evidence structured for conversations shaped by ${country.regulators} — comparators, local practice, and residual uncertainty.`,
      },
      {
        name: 'Post-launch effectiveness questions',
        detail: 'Primary insight that complements clinical packages when trial populations diverge from routine care.',
      },
    ],
    audiences: [
      {
        audience: 'Treating physicians and multidisciplinary teams',
        description: `Clinicians who define real-world sequences and outcomes in ${country.name}.`,
      },
      {
        audience: 'Payers / HTA-informed stakeholders',
        description: `Decision-makers working within frameworks influenced by ${country.regulators}.`,
      },
      {
        audience: 'Hospital pharmacists and pathway leads',
        description: 'Actors who operationalise guidelines into local protocols and stock decisions.',
      },
      {
        audience: 'Medical affairs and HEOR teams',
        description: 'Internal owners who package RWE for dossiers, advisory boards, and publications.',
      },
    ],
    whyPoints: [
      'Principal-led design matched to one concrete decision',
      `Geography-aware protocols for ${country.name} recruitment and governance`,
      'Transparent assumptions, limitations, and quality controls',
      'Outputs usable by medical, access, and commercial in the same cycle',
      'Option to connect ${country.name} RWE into multi-country evidence plans',
    ],
    relatedLinks,
    faqs: [
      {
        question: `What counts as real-world evidence for pharmaceutical teams in ${country.name}?`,
        answer: `RWE here means insight from practice patterns, pathways, and stakeholder behaviour outside tightly controlled trials — designed around ${country.regulators} and local care delivery, with methods documentation your teams can defend.`,
      },
      {
        question: `How does this page relate to BioNixus’ global RWE offering?`,
        answer: `This is a country spoke. Start at the real-world evidence hub for the overall approach, then use this page when your brief is specifically about ${country.name} execution and stakeholder context.`,
      },
      {
        question: `Can RWE in ${country.name} support access or HTA-informed discussions?`,
        answer: `Yes when the design targets the questions those stakeholders ask — local practice, comparator context, and residual uncertainty under ${country.regulators}. We scope that explicitly rather than promising a universal dossier template.`,
      },
      {
        question: 'How do we start an RWE conversation with BioNixus?',
        answer:
          'Share the decision, geography, specialty, and timing window. We return a short methodology memo covering design options, sample logic, and field realities before you commit to a full programme.',
      },
    ],
    areaServed: [country.name],
  };
}

export const COUNTRY_KEYWORD_PAGES: CountryKeywordContent[] = PHARMA_INSIGHTS_RWE_COUNTRIES.flatMap((country) => [
  buildPharmaInsights(country),
  buildRwe(country),
]);

export const PHARMA_INSIGHTS_PAGES = COUNTRY_KEYWORD_PAGES.filter((p) => p.kind === 'pharma-insights');
export const RWE_COUNTRY_PAGES = COUNTRY_KEYWORD_PAGES.filter((p) => p.kind === 'rwe');

export function getCountryKeywordPage(slug: string): CountryKeywordContent | undefined {
  return COUNTRY_KEYWORD_PAGES.find((p) => p.slug === slug);
}
