export interface ReportFAQ {
  question: string;
  answer: string;
}

export interface ReportEntry {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  market: string;
  marketSlug: string;
  region: string;
  therapyArea: string;
  therapyAreaSlug: string;
  stat1Value: string;
  stat1Label: string;
  stat1Source: string;
  stat2Value: string;
  stat2Label: string;
  stat2Source: string;
  stat3Value: string;
  stat3Label: string;
  stat3Source: string;
  /** Distinct sources for footnotes (market size, CAGR, epidemiology). */
  sourceNotes: string[];
  /** Country therapy segments for spend chart when available. */
  therapySegments?: import('@/data/marketIntelligence/types').TherapySegment[];
  /** Optional hero lead; when set, replaces the generic intro on the report page. */
  heroLead?: string;
  summaryPara1: string;
  summaryPara2: string;
  /** Spec-specific access signals (from sum1Tail). */
  marketAccessNotes: string;
  /** Additional visible copy for depth and SEO word count. */
  fieldIntelligenceParagraph: string;
  commercialOutlookParagraph: string;
  methodologyParagraph: string;
  faqs: ReportFAQ[];
  relatedSlugs: string[];
  publishedDate: string;
  modifiedDate: string;
}
