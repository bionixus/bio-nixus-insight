/**
 * Segment market landing pages — geography × market-segment SEO/GEO pages.
 *
 * URL pattern: /{geo-slug}-{segment-slug}-market (exact-match to the target query,
 * e.g. "saudi arabia molecular diagnostics market" -> /saudi-arabia-molecular-diagnostics-market).
 *
 * DATA DISCIPLINE: no fabricated market sizes, CAGRs, or client names. Content is
 * anchored to verifiable structures (SFDA, NUPCO, Lifera, CBAHI, DHA, DoH Abu Dhabi,
 * MOPH Qatar, EDA, TITCK, Vision 2030 programmes) and to BioNixus primary-research
 * methodology. Quantitative specifics are positioned as deliverables of a
 * commissioned study, not published as invented statistics.
 */

export const SEGMENT_MARKET_BASE = 'https://www.bionixus.com';

export type SegmentMarketGroup =
  | 'saudi-diagnostics'
  | 'saudi-biotech'
  | 'saudi-devices-consumer'
  | 'gcc'
  | 'middle-east'
  | 'country'
  | 'flagship';

export type SegmentMarketContent = {
  /** URL slug without leading slash, e.g. 'saudi-arabia-molecular-diagnostics-market'. */
  slug: string;
  /** Grouping used for hub indexes and internal-link blocks. */
  group: SegmentMarketGroup;
  /** Display geography, e.g. 'Saudi Arabia', 'GCC', 'Middle East', 'Qatar'. */
  geoLabel: string;
  /** Display segment, e.g. 'Molecular Diagnostics'. */
  segmentLabel: string;
  /** Hero pill text. */
  badge: string;
  /** Breadcrumb leaf label. */
  breadcrumbLabel: string;
  /** 50–60 char target title. */
  title: string;
  /** 150–160 char meta description. */
  description: string;
  /** Absolute canonical URL. */
  canonical: string;
  h1: string;
  /** 2–3 opening paragraphs. The first must contain the exact-match keyword. */
  intro: string[];
  /** Answer-first GEO block consumed by LLM crawlers. */
  quickAnswer: {
    question: string;
    answer: string;
    points: Array<{ title: string; description: string }>;
    summary?: string;
  };
  /** "What we research" cards. */
  researchTopics: Array<{ name: string; detail: string }>;
  /**
   * Optional numbered ranking rendered as a cited table directly under the quick answer.
   * Emits ItemList JSON-LD. Every row must carry a public source; no modelled figures.
   */
  rankedList?: {
    heading: string;
    intro?: string;
    /** Column labels for the three detail cells that follow rank and name. */
    columns: [string, string, string];
    items: Array<{
      rank: number;
      name: string;
      /** Official website (used as ItemList item url). */
      url?: string;
      cells: [string, string, string];
      source?: { label: string; href: string };
    }>;
    footnote?: string;
  };
  /** ISO date (YYYY-MM-DD). Shown as "Updated" under the H1 and emitted as dateModified. */
  lastUpdated?: string;
  /** Sub-segment / category breakdown table. */
  segmentBreakdown?: {
    heading: string;
    items: Array<{ label: string; detail: string }>;
  };
  /** Demand-driver grid. */
  demandDrivers: { heading: string; drivers: Array<{ title: string; detail: string }> };
  /** Narrative market-structure section. */
  marketStructure: { heading: string; paragraphs: string[] };
  /** Country / emirate / city level signals. */
  geoSignals?: { heading: string; items: Array<{ name: string; signal: string }> };
  /** Stakeholders BioNixus recruits for this segment. */
  audiences: Array<{ audience: string; description: string }>;
  /** Methodology bullets for the commissioned study. */
  methodology?: string[];
  /** Why-BioNixus checklist. */
  whyBionixus: string[];
  /** Internal cross-links. Must point at real existing routes. */
  relatedLinks: Array<{ to: string; label: string }>;
  /** FAQ — also emits FAQPage schema, so answers must be self-contained. */
  faqs: Array<{ question: string; answer: string }>;
  /** schema.org areaServed country names. */
  areaServed: string[];
};
