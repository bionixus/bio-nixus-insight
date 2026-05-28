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
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
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
