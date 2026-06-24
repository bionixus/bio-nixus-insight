export type MediaFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type ProofVideoConfig = {
  /** MP4 path under /public; omit to show poster + link fallback */
  src?: string;
  poster: string;
  title: string;
  description: string;
  transcript: string;
  /** Fallback route when no video file is available */
  fallbackHref?: string;
  fallbackLabel?: string;
};

export type PageMediaConfig = {
  heroImage?: MediaFigure;
  visualBriefing?: {
    heading: string;
    figures: MediaFigure[];
  };
  proofVideo?: ProofVideoConfig;
  processHeading?: string;
};

export const SHARED_FIGURES = {
  hcpWorkshop: {
    src: '/images/quant-hcp-survey-executive.png',
    alt: 'Healthcare market research workshop with GCC commercial and market access leaders reviewing pharmaceutical evidence',
    caption: 'Decision workshop: converting pharmaceutical evidence into launch and access actions.',
    width: 800,
    height: 448,
  },
  validationLab: {
    src: '/images/quant-ai-validation-lab.png',
    alt: 'Pharmaceutical data validation workflow combining quantitative analytics and AI-assisted quality review',
    caption: 'Validation operations with governed AI-assisted quality controls for healthcare datasets.',
    width: 800,
    height: 448,
  },
  teamTrust: {
    src: '/images/quant-hcp-survey-executive.png',
    alt: 'BioNixus senior research team facilitating a pharmaceutical market access briefing for GCC clients',
    caption: 'Senior-led briefing with bilingual Arabic–English fieldwork capability across GCC and Europe.',
    width: 960,
    height: 720,
  },
} satisfies Record<string, MediaFigure>;

export const PAGE_MEDIA: Record<string, PageMediaConfig> = {
  home: {
    visualBriefing: {
      heading: 'How BioNixus turns field evidence into launch decisions',
      figures: [SHARED_FIGURES.hcpWorkshop, SHARED_FIGURES.validationLab],
    },
    proofVideo: {
      poster: '/images/quant-hcp-survey-executive.png',
      title: 'BioNixus healthcare market research overview',
      description:
        'A short overview of how BioNixus designs quantitative, qualitative, and access programs for pharmaceutical teams in GCC and Europe.',
      transcript:
        'BioNixus supports pharmaceutical and healthcare teams with market research built for real decisions — launch readiness, market access, payer evidence, and competitive intelligence. Programs combine senior-led design, bilingual Arabic–English fieldwork, and audit-ready governance across GCC and European markets.',
      fallbackHref: '/case-studies',
      fallbackLabel: 'Browse anonymized case studies',
    },
  },
  'market-research': {
    visualBriefing: {
      heading: 'Executive visual briefing — market research in practice',
      figures: [
        {
          ...SHARED_FIGURES.hcpWorkshop,
          alt: 'Market research services workshop with healthcare and pharmaceutical leaders reviewing GCC launch evidence',
          caption: 'Hub programs start from the decision: sizing, pathway mapping, or access evidence.',
        },
        {
          ...SHARED_FIGURES.validationLab,
          alt: 'Quantitative healthcare market research validation workflow for pharmaceutical survey datasets',
          caption: 'Quantitative modules include respondent QA, sampling governance, and executive-ready cuts.',
        },
      ],
    },
    processHeading: 'From brief to decision-ready insight',
  },
  'healthcare-market-research-agency-gcc': {
    heroImage: {
      ...SHARED_FIGURES.hcpWorkshop,
      alt: 'Healthcare market research agency GCC workshop with pharmaceutical launch and access stakeholders',
    },
    visualBriefing: {
      heading: 'GCC agency execution — field to formulary',
      figures: [
        {
          ...SHARED_FIGURES.hcpWorkshop,
          alt: 'GCC healthcare market research agency session mapping SFDA and MOHAP access requirements',
          caption: 'Country-specific modules for Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman.',
        },
        {
          ...SHARED_FIGURES.validationLab,
          alt: 'GCC pharmaceutical market research data validation and quality governance workflow',
          caption: 'One evidence framework with documented QA before insight handover.',
        },
      ],
    },
    proofVideo: {
      poster: '/images/quant-ai-validation-lab.png',
      title: 'GCC pharmaceutical market research — agency approach',
      description: 'How BioNixus aligns commercial, medical, and access outputs in one GCC evidence program.',
      transcript:
        'For GCC pharmaceutical teams, agency selection affects speed, trust, and launch risk. BioNixus runs bilingual field programs with country depth — SFDA, MOHAP, and committee calendars — and translates field protocols into decision-ready outputs for pricing, access, and medical affairs milestones.',
      fallbackHref: '/contact',
      fallbackLabel: 'Book a GCC discovery call',
    },
    processHeading: 'Agency delivery workflow',
  },
  'real-world-evidence-gcc': {
    heroImage: {
      ...SHARED_FIGURES.validationLab,
      alt: 'Real world evidence GCC data review session for pharmaceutical market access and lifecycle strategy',
    },
    visualBriefing: {
      heading: 'RWE execution — cohort design to committee-ready outputs',
      figures: [
        {
          ...SHARED_FIGURES.validationLab,
          alt: 'Real world evidence GCC chart review and data quality governance for pharmaceutical studies',
          caption: 'Fit-for-purpose RWE design with transparent assumptions and documented limitations.',
        },
        {
          ...SHARED_FIGURES.hcpWorkshop,
          alt: 'GCC real world evidence stakeholder briefing linking clinical outcomes to payer expectations',
          caption: 'Outputs mapped to SFDA EES, MOHAP, and access committee review cycles.',
        },
      ],
    },
    proofVideo: {
      poster: '/images/quant-hcp-survey-executive.png',
      title: 'Real world evidence GCC — study design overview',
      description: 'Protocol alignment, data quality governance, and stakeholder-ready RWE outputs for GCC access decisions.',
      transcript:
        'Real world evidence bridges clinical trial results and payer expectations when market-access choices carry high financial risk. BioNixus designs retrospective chart review, prospective cohorts, and RWE-to-HEOR bridges with audit-ready methodology documentation for medical affairs and access reviewers.',
      fallbackHref: '/contact',
      fallbackLabel: 'Request RWE scope',
    },
    processHeading: 'RWE study workflow',
  },
  contact: {
    heroImage: SHARED_FIGURES.teamTrust,
  },
  'case-studies': {
    visualBriefing: {
      heading: 'Evidence programs across GCC and Europe',
      figures: [SHARED_FIGURES.hcpWorkshop, SHARED_FIGURES.validationLab],
    },
  },
  'default-service': {
    visualBriefing: {
      heading: 'Healthcare market research in practice',
      figures: [SHARED_FIGURES.hcpWorkshop, SHARED_FIGURES.validationLab],
    },
    processHeading: 'Service delivery workflow',
  },
};

export function getPageMedia(slug: string): PageMediaConfig | undefined {
  return PAGE_MEDIA[slug];
}
