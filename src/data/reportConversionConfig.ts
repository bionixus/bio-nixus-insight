import type { ReportEntry } from '@/data/healthcareReportTypes';
import { MARKET_CONTENT } from '@/data/healthcareReportContent';

export type ReportConversionConfig = {
  marketName: string;
  reportLabel: string;
  canonicalPath: string;
  shareSlug?: string;
  emailSubject: string;
  routingHint: string;
  primaryCtaLabel: string;
  consultationHeadline: string;
  consultationBody?: string;
  asideDeskLabel?: string;
  midPageHeadline?: string;
  midPageBody?: string;
  /** When true, sticky aside and consultation band show the Cairo/Egypt line. */
  showEgyptPhone?: boolean;
};

function regShort(marketSlug: string): string {
  const body = MARKET_CONTENT[marketSlug]?.regulatoryBody;
  if (!body) return 'the national regulator';
  return body.split('•')[0]?.trim() ?? body;
}

export function buildConversionConfigFromReportEntry(report: ReportEntry): ReportConversionConfig {
  const regulator = regShort(report.marketSlug);
  return {
    showEgyptPhone: report.marketSlug === 'egypt' || report.marketSlug === 'gcc',
    marketName: report.market,
    reportLabel: `${report.market} ${report.therapyArea}`,
    canonicalPath: `/market-reports/${report.slug}`,
    shareSlug: report.slug,
    emailSubject: `${report.market} ${report.therapyArea} market research — BioNixus`,
    routingHint: `Mention ${regulator} ${report.therapyArea.toLowerCase()} pathways or centralized tender intelligence for faster routing.`,
    primaryCtaLabel: `Schedule a ${report.market} ${report.therapyArea} briefing`,
    consultationHeadline: `Ready for ${report.market} ${report.therapyArea} market intelligence?`,
    consultationBody:
      'BioNixus pairs hospital consumption analogue analytics with bilingual clinician trackers, formulary uplift simulation boards, and tender vigilance calibrated for GCC, Egypt, and bridging European markets.',
    asideDeskLabel: `${report.market} market desk`,
    midPageHeadline: `Commission custom ${report.market} ${report.therapyArea} fieldwork`,
    midPageBody: `Book a 30-minute briefing to align on formulary hypotheses, ${regulator} dossier sequencing, and competitive intelligence timelines.`,
  };
}

const HUB_CONFIG: ReportConversionConfig = {
  showEgyptPhone: true,
  marketName: 'GCC & MENA',
  reportLabel: 'Healthcare market reports',
  canonicalPath: '/market-reports',
  emailSubject: 'GCC healthcare market research briefing — BioNixus',
  routingHint:
    'Mention your target country (Saudi Arabia, UAE, Kuwait, etc.) and therapy area so we route you to the right practice lead.',
  primaryCtaLabel: 'Book a GCC market access briefing',
  consultationHeadline: 'Ready to commission healthcare market intelligence?',
  consultationBody:
    'BioNixus designs Arabic–English instruments, recruits MOH-aligned stakeholders, monitors tender cycles, and packages board-ready narratives for pharma, biotech, and medtech teams.',
  asideDeskLabel: 'GCC market desk',
};

export function getMarketReportsHubConfig(): ReportConversionConfig {
  return HUB_CONFIG;
}

export function getTherapyHubConfig(therapyName: string, therapySlug: string): ReportConversionConfig {
  return {
    ...HUB_CONFIG,
    reportLabel: `${therapyName} market reports`,
    canonicalPath: `/market-reports/therapy/${therapySlug}`,
    emailSubject: `${therapyName} healthcare market research — BioNixus`,
    primaryCtaLabel: `Schedule a ${therapyName} research briefing`,
    consultationHeadline: `Commission ${therapyName} intelligence across GCC & MENA`,
    routingHint: `Mention ${therapyName.toLowerCase()} and your priority markets (Saudi Arabia, UAE, Egypt, etc.) for faster routing.`,
  };
}

export function getCountryHubConfig(marketName: string, marketSlug: string): ReportConversionConfig {
  const regulator = regShort(marketSlug);
  return {
    showEgyptPhone: marketSlug === 'egypt' || marketSlug === 'gcc',
    marketName,
    reportLabel: `${marketName} therapy reports`,
    canonicalPath: `/market-reports/country/${marketSlug}`,
    emailSubject: `${marketName} healthcare market research — BioNixus`,
    routingHint: `Mention ${regulator} formulary or tender priorities for a faster routed response.`,
    primaryCtaLabel: `Schedule a ${marketName} research briefing`,
    consultationHeadline: `Ready for ${marketName} pharmaceutical market intelligence?`,
    consultationBody: HUB_CONFIG.consultationBody,
    asideDeskLabel: `${marketName} market desk`,
  };
}

type PharmaCountryKey =
  | 'saudi-arabia'
  | 'uae'
  | 'egypt'
  | 'qatar'
  | 'oman'
  | 'bahrain'
  | 'iraq'
  | 'iran'
  | 'kuwait';

const PHARMA_GUIDE_CONFIG: Record<PharmaCountryKey, ReportConversionConfig> = {
  'saudi-arabia': {
    marketName: 'Saudi Arabia',
    reportLabel: 'Saudi Arabia pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-saudi-arabia',
    shareSlug: 'pharmaceutical-companies-saudi-arabia',
    emailSubject: 'Saudi Arabia pharma market research — BioNixus',
    routingHint: 'Mention SFDA formulary or NUPCO tender intelligence for a faster routed response.',
    primaryCtaLabel: 'Schedule a Saudi Arabia research briefing',
    consultationHeadline: 'Ready for a Saudi Arabia pharma market intelligence engagement?',
    consultationBody:
      'BioNixus designs Arabic–English instruments, recruits SFDA-aligned stakeholders, monitors NUPCO tender cycles, and packages board-ready narratives for pharma, biotech, and medtech teams across the GCC.',
    asideDeskLabel: 'Saudi Arabia market desk',
    midPageHeadline: 'Need proprietary Saudi physician, payer, or NUPCO intelligence?',
    midPageBody:
      'Book a 30-minute briefing to align on formulary hypotheses, stakeholder mapping across MOH and leading distributors, or competitive intelligence timelines for Saudi Arabia.',
  },
  uae: {
    marketName: 'United Arab Emirates',
    reportLabel: 'UAE pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-uae',
    shareSlug: 'pharmaceutical-companies-uae',
    emailSubject: 'UAE pharma market research — BioNixus',
    routingHint: 'Mention DHA/DOH formulary or MOHAP registration priorities for faster routing.',
    primaryCtaLabel: 'Schedule a UAE research briefing',
    consultationHeadline: 'Ready for a UAE pharma market intelligence engagement?',
    asideDeskLabel: 'UAE market desk',
    midPageHeadline: 'Need proprietary UAE physician, payer, or hospital intelligence?',
    midPageBody: 'Book a briefing on DHA, DOH, and MOHAP-aligned stakeholder mapping and tender dynamics.',
  },
  egypt: {
    showEgyptPhone: true,
    marketName: 'Egypt',
    reportLabel: 'Egypt pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-egypt',
    shareSlug: 'pharmaceutical-companies-egypt',
    emailSubject: 'Egypt pharma market research — BioNixus',
    routingHint: 'Mention EDA registration or UPA reimbursement priorities for faster routing.',
    primaryCtaLabel: 'Schedule an Egypt research briefing',
    consultationHeadline: 'Ready for an Egypt pharma market intelligence engagement?',
    asideDeskLabel: 'Egypt market desk',
  },
  qatar: {
    marketName: 'Qatar',
    reportLabel: 'Qatar pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-qatar',
    shareSlug: 'pharmaceutical-companies-qatar',
    emailSubject: 'Qatar pharma market research — BioNixus',
    routingHint: 'Mention MOPH formulary or HMC tender priorities for faster routing.',
    primaryCtaLabel: 'Schedule a Qatar research briefing',
    consultationHeadline: 'Ready for a Qatar pharma market intelligence engagement?',
    asideDeskLabel: 'Qatar market desk',
  },
  oman: {
    marketName: 'Oman',
    reportLabel: 'Oman pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-oman',
    shareSlug: 'pharmaceutical-companies-oman',
    emailSubject: 'Oman pharma market research — BioNixus',
    routingHint: 'Mention MOH Oman drug registration or tender cycles for faster routing.',
    primaryCtaLabel: 'Schedule an Oman research briefing',
    consultationHeadline: 'Ready for an Oman pharma market intelligence engagement?',
    asideDeskLabel: 'Oman market desk',
  },
  bahrain: {
    marketName: 'Bahrain',
    reportLabel: 'Bahrain pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-bahrain',
    shareSlug: 'pharmaceutical-companies-bahrain',
    emailSubject: 'Bahrain pharma market research — BioNixus',
    routingHint: 'Mention NHRA registration or government tender priorities for faster routing.',
    primaryCtaLabel: 'Schedule a Bahrain research briefing',
    consultationHeadline: 'Ready for a Bahrain pharma market intelligence engagement?',
    asideDeskLabel: 'Bahrain market desk',
  },
  iraq: {
    marketName: 'Iraq',
    reportLabel: 'Iraq pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-iraq',
    shareSlug: 'pharmaceutical-companies-iraq',
    emailSubject: 'Iraq pharma market research — BioNixus',
    routingHint: 'Mention Iraqi MOH registration or public procurement channels for faster routing.',
    primaryCtaLabel: 'Schedule an Iraq research briefing',
    consultationHeadline: 'Ready for an Iraq pharma market intelligence engagement?',
    asideDeskLabel: 'Iraq market desk',
  },
  iran: {
    marketName: 'Iran',
    reportLabel: 'Iran pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-iran',
    shareSlug: 'pharmaceutical-companies-iran',
    emailSubject: 'Iran pharma market research — BioNixus',
    routingHint: 'Mention IFDA registration context and your GCC bridging strategy for faster routing.',
    primaryCtaLabel: 'Schedule an Iran–GCC research briefing',
    consultationHeadline: 'Ready for Iran and GCC comparative market intelligence?',
    asideDeskLabel: 'MENA market desk',
  },
  kuwait: {
    marketName: 'Kuwait',
    reportLabel: 'Kuwait pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-kuwait',
    shareSlug: 'pharmaceutical-companies-kuwait',
    emailSubject: 'Kuwait pharma market research — BioNixus',
    routingHint: 'Mention "Kuwait distributor ranking" in your note for a faster routed response from our GCC practice lead.',
    primaryCtaLabel: 'Schedule a Kuwait research briefing',
    consultationHeadline: 'Ready for a Kuwait pharma market intelligence engagement?',
    consultationBody:
      'BioNixus designs Arabic–English instruments, recruits MOH-aligned stakeholders, monitors tender cycles, and packages board-ready narratives for pharma, biotech, and medtech teams across the GCC.',
    asideDeskLabel: 'Kuwait market desk',
    midPageHeadline: 'Need proprietary Kuwait physician, payer, or tender intelligence?',
    midPageBody:
      'Book a 30-minute briefing with BioNixus to align on formulary hypotheses, stakeholder mapping across MOH CMS and leading distributors, or competitive intelligence timelines for Kuwait.',
  },
};

export function getPharmaGuideConfig(countryKey: PharmaCountryKey): ReportConversionConfig {
  return PHARMA_GUIDE_CONFIG[countryKey];
}

function standaloneBase(
  marketName: string,
  reportType: 'healthcare' | 'medical-devices' | 'gcc-pharma' | 'gcc-devices' | 'gcc-anesthesia',
  path: string,
  routingHint: string,
): ReportConversionConfig {
  const typeLabel =
    reportType === 'medical-devices'
      ? 'medical devices market report'
      : reportType === 'gcc-pharma'
        ? 'GCC pharmaceutical market report'
        : reportType === 'gcc-devices'
          ? 'GCC medical devices market report'
          : reportType === 'gcc-anesthesia'
            ? 'GCC anesthesia & surgical market report'
            : 'healthcare market report';
  return {
    marketName,
    reportLabel: `${marketName} ${typeLabel}`,
    canonicalPath: path,
    emailSubject: `${marketName} ${typeLabel} — BioNixus`,
    routingHint,
    primaryCtaLabel: `Schedule a ${marketName} research briefing`,
    consultationHeadline: `Ready for ${marketName} market intelligence?`,
    consultationBody:
      'BioNixus delivers hospital consumption analogue analytics, bilingual clinician trackers, and tender vigilance calibrated for GCC, MENA, and global portfolio teams.',
    asideDeskLabel: `${marketName} market desk`,
    midPageHeadline: `Commission custom ${marketName} fieldwork`,
    midPageBody: `Book a 30-minute briefing on regulatory, payer, and commercial priorities in ${marketName}.`,
  };
}

const STANDALONE_REPORT_CONFIG: Record<string, ReportConversionConfig> = {
  '/saudi-arabia-healthcare-market-report': standaloneBase(
    'Saudi Arabia',
    'healthcare',
    '/saudi-arabia-healthcare-market-report',
    'Mention SFDA or NUPCO tender intelligence for faster routing.',
  ),
  '/uae-healthcare-market-report': standaloneBase(
    'United Arab Emirates',
    'healthcare',
    '/uae-healthcare-market-report',
    'Mention DHA/DOH or MOHAP priorities for faster routing.',
  ),
  '/kuwait-healthcare-market-report': standaloneBase(
    'Kuwait',
    'healthcare',
    '/kuwait-healthcare-market-report',
    'Mention Kuwait MOH formulary or CMS tender cycles for faster routing.',
  ),
  '/qatar-healthcare-market-report': standaloneBase(
    'Qatar',
    'healthcare',
    '/qatar-healthcare-market-report',
    'Mention MOPH or HMC formulary priorities for faster routing.',
  ),
  '/bahrain-healthcare-market-report': standaloneBase(
    'Bahrain',
    'healthcare',
    '/bahrain-healthcare-market-report',
    'Mention NHRA registration priorities for faster routing.',
  ),
  '/oman-healthcare-market-report': standaloneBase(
    'Oman',
    'healthcare',
    '/oman-healthcare-market-report',
    'Mention MOH Oman drug registration for faster routing.',
  ),
  '/egypt-healthcare-market-report': {
    ...standaloneBase(
      'Egypt',
      'healthcare',
      '/egypt-healthcare-market-report',
      'Mention EDA or UPA reimbursement priorities for faster routing.',
    ),
    showEgyptPhone: true,
  },
  '/egypt-medical-devices-market-report': {
    ...standaloneBase(
      'Egypt',
      'medical-devices',
      '/egypt-medical-devices-market-report',
      'Mention EDA or UPA reimbursement priorities for faster routing.',
    ),
    showEgyptPhone: true,
  },
  '/turkey-healthcare-market-report': standaloneBase(
    'Turkey',
    'healthcare',
    '/turkey-healthcare-market-report',
    'Mention TITCK registration or SSI reimbursement for faster routing.',
  ),
  '/china-healthcare-market-report': standaloneBase(
    'China',
    'healthcare',
    '/china-healthcare-market-report',
    'Mention NMPA, NRDL, or VBP context and your GCC bridging strategy for faster routing.',
  ),
  '/gcc-pharma-market-report-2026': {
    ...standaloneBase(
      'GCC',
      'gcc-pharma',
      '/gcc-pharma-market-report-2026',
      'Mention NUPCO, SFDA, or MOHAP tender intelligence for faster routing.',
    ),
    showEgyptPhone: true,
  },
  '/gcc-pharmaceutical-market-research': {
    ...standaloneBase(
      'GCC',
      'pharmaceutical market research',
      '/gcc-pharmaceutical-market-research',
      'Mention biologics, generic injectables, or precision medicine priorities for faster routing.',
    ),
    showEgyptPhone: true,
  },
  '/gcc-medical-devices-market-report': {
    ...standaloneBase(
      'GCC',
      'gcc-devices',
      '/gcc-medical-devices-market-report',
      'Mention SFDA MDMA or MOHAP device registration for faster routing.',
    ),
    showEgyptPhone: true,
  },
  '/gcc-anesthesia-surgical-market-report': {
    ...standaloneBase(
      'GCC',
      'gcc-anesthesia',
      '/gcc-anesthesia-surgical-market-report',
      'Mention hospital procurement or anesthesia formulary priorities for faster routing.',
    ),
    showEgyptPhone: true,
  },
};

const COUNTRY_STANDALONE_HINTS: Record<string, string> = {
  usa: 'Mention FDA approval or CMS reimbursement context for faster routing.',
  uk: 'Mention MHRA or NICE HTA context for faster routing.',
  germany: 'Mention BfArM or G-BA reimbursement for faster routing.',
  france: 'Mention ANSM or HAS assessment context for faster routing.',
  italy: 'Mention AIFA pricing or regional formulary context for faster routing.',
  spain: 'Mention AEMPS or regional HTA for faster routing.',
  india: 'Mention CDSCO or NPPA pricing context for faster routing.',
  japan: 'Mention PMDA or Chuikyo reimbursement for faster routing.',
  australia: 'Mention TGA or PBS listing context for faster routing.',
  canada: 'Mention Health Canada or CADTH HTA for faster routing.',
  brazil: 'Mention ANVISA or SUS procurement for faster routing.',
  'south-korea': 'Mention MFDS or HIRA reimbursement for faster routing.',
  singapore: 'Mention HSA or MOH drug listing for faster routing.',
};

function countryDisplayName(slug: string): string {
  const names: Record<string, string> = {
    usa: 'United States',
    uk: 'United Kingdom',
    'south-korea': 'South Korea',
    'saudi-arabia': 'Saudi Arabia',
    uae: 'United Arab Emirates',
  };
  if (names[slug]) return names[slug];
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function ensureStandalonePath(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}

/** Resolve config for standalone healthcare / devices / GCC report pages by canonical path. */
export function getStandaloneReportConfig(canonicalPath: string): ReportConversionConfig {
  const path = ensureStandalonePath(canonicalPath);
  const existing = STANDALONE_REPORT_CONFIG[path];
  if (existing) return existing;

  const healthcareMatch = path.match(/^\/(.+)-healthcare-market-report$/);
  if (healthcareMatch) {
    const slug = healthcareMatch[1];
    return {
      ...standaloneBase(
        countryDisplayName(slug),
        'healthcare',
        path,
        COUNTRY_STANDALONE_HINTS[slug] ?? 'Mention your regulatory and payer priorities for faster routing.',
      ),
      showEgyptPhone: slug === 'egypt',
    };
  }

  const devicesMatch = path.match(/^\/(.+)-medical-devices-market-report$/);
  if (devicesMatch) {
    const slug = devicesMatch[1];
    return {
      ...standaloneBase(
        countryDisplayName(slug),
        'medical-devices',
        path,
        COUNTRY_STANDALONE_HINTS[slug] ?? 'Mention device registration and hospital procurement priorities for faster routing.',
      ),
      showEgyptPhone: slug === 'egypt',
    };
  }

  return {
    ...HUB_CONFIG,
    canonicalPath: path,
    reportLabel: 'Healthcare market report',
    emailSubject: 'Healthcare market research briefing — BioNixus',
  };
}

const HEALTHCARE_MR_HUB_BASE: ReportConversionConfig = {
  showEgyptPhone: true,
  marketName: 'MENA, UK & Europe',
  reportLabel: 'Healthcare market research',
  canonicalPath: '/healthcare-market-research',
  emailSubject: 'Healthcare & pharmaceutical market research — BioNixus',
  routingHint:
    'Mention target countries, therapy areas, and whether you need quant, qual, or market access modules so we route you to the right practice lead.',
  primaryCtaLabel: 'Book a healthcare research briefing',
  consultationHeadline: 'Ready to commission pharmaceutical market intelligence?',
  consultationBody:
    'BioNixus designs Arabic–English instruments, recruits MOH-aligned stakeholders, monitors tender cycles, and packages board-ready narratives for pharma, biotech, and medtech teams.',
  asideDeskLabel: 'Healthcare research desk',
  midPageHeadline: 'Commission custom healthcare market research',
  midPageBody:
    'Book a 30-minute briefing to align methodology, sample design, and delivery timelines with your launch or access milestones.',
};

/** Conversion config for `/healthcare-market-research` hub. */
export function getHealthcareMarketResearchHubConfig(): ReportConversionConfig {
  return { ...HEALTHCARE_MR_HUB_BASE };
}

/** Conversion config for `/healthcare-market-research/:country`. */
export function getHealthcareMarketResearchCountryConfig(
  countryName: string,
  countrySlug: string,
): ReportConversionConfig {
  const regulator = regShort(countrySlug);
  return {
    ...HEALTHCARE_MR_HUB_BASE,
    showEgyptPhone: countrySlug === 'egypt' || countrySlug === 'saudi-arabia' || countrySlug === 'uae',
    marketName: countryName,
    reportLabel: `${countryName} pharmaceutical market research`,
    canonicalPath: `/healthcare-market-research/${countrySlug}`,
    emailSubject: `${countryName} healthcare market research — BioNixus`,
    routingHint: `Mention ${regulator} formulary or tender priorities and your therapy area for faster routing.`,
    primaryCtaLabel: `Schedule a ${countryName} research briefing`,
    consultationHeadline: `Ready for ${countryName} pharmaceutical market intelligence?`,
    asideDeskLabel: `${countryName} research desk`,
    midPageHeadline: `Commission ${countryName} physician, payer, or hospital intelligence`,
    midPageBody: `Book a briefing to align stakeholder mapping, evidence plans, and fieldwork timelines for ${countryName}.`,
  };
}

/** Conversion config for `/healthcare-market-research/therapy/:area`. */
export function getHealthcareMarketResearchTherapyConfig(
  therapyName: string,
  therapySlug: string,
): ReportConversionConfig {
  const label = therapyName.charAt(0).toUpperCase() + therapyName.slice(1);
  return {
    ...HEALTHCARE_MR_HUB_BASE,
    marketName: label,
    reportLabel: `${label} therapy market research`,
    canonicalPath: `/healthcare-market-research/therapy/${therapySlug}`,
    emailSubject: `${label} pharmaceutical market research — BioNixus`,
    routingHint: `Mention ${label.toLowerCase()} and priority markets (Saudi Arabia, UAE, UK, etc.) for faster routing.`,
    primaryCtaLabel: `Schedule a ${label} research briefing`,
    consultationHeadline: `Commission ${label} market intelligence across MENA, UK & Europe`,
    asideDeskLabel: `${label} therapy desk`,
    midPageHeadline: `Design a ${label.toLowerCase()} insight program`,
    midPageBody: `Align quant/qual modules, stakeholder lists, and timelines for your ${label.toLowerCase()} portfolio decisions.`,
  };
}

/** Conversion config for `/healthcare-market-research/services/:service`. */
export function getHealthcareMarketResearchServiceConfig(
  serviceName: string,
  serviceSlug: string,
): ReportConversionConfig {
  const label = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
  return {
    ...HEALTHCARE_MR_HUB_BASE,
    marketName: 'Multi-market',
    reportLabel: `${label} healthcare research service`,
    canonicalPath: `/healthcare-market-research/services/${serviceSlug}`,
    emailSubject: `${label} healthcare research service — BioNixus`,
    routingHint: `Mention the ${label.toLowerCase()} module and target countries so we scope the right methodology mix.`,
    primaryCtaLabel: `Request a ${label.toLowerCase()} proposal`,
    consultationHeadline: `Ready to scope ${label.toLowerCase()} healthcare research?`,
    asideDeskLabel: `${label} service desk`,
    midPageHeadline: `Integrate ${label.toLowerCase()} with country and therapy workstreams`,
    midPageBody: `Book a scoping call to connect this service module with your wider launch or access program.`,
  };
}
