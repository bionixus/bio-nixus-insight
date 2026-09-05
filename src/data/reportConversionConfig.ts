import type { DirectoryEntitySlug } from '@/data/companyDirectories/types';
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
  | 'kuwait'
  | 'usa'
  | 'uk'
  | 'germany'
  | 'brazil'
  | 'canada';

const PHARMA_GUIDE_CONFIG: Record<PharmaCountryKey, ReportConversionConfig> = {
  'saudi-arabia': {
    marketName: 'Saudi Arabia',
    reportLabel: 'Saudi Arabia pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-saudi-arabia',
    shareSlug: 'pharmaceutical-companies-saudi-arabia',
    emailSubject: 'Saudi Arabia pharma market research — BioNixus',
    routingHint: 'Mention SFDA formulary or NUPCO tender intelligence for a faster routed response.',
    primaryCtaLabel: 'Request a Saudi Arabia research proposal',
    consultationHeadline: 'Need brand and competitor data in Saudi Arabia?',
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
    primaryCtaLabel: 'Request a UAE research proposal',
    consultationHeadline: 'Need brand and competitor data in the UAE?',
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
    primaryCtaLabel: 'Request an Egypt research proposal',
    consultationHeadline: 'Need brand and competitor data in Egypt?',
    asideDeskLabel: 'Egypt market desk',
  },
  qatar: {
    marketName: 'Qatar',
    reportLabel: 'Qatar pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-qatar',
    shareSlug: 'pharmaceutical-companies-qatar',
    emailSubject: 'Qatar pharma market research — BioNixus',
    routingHint: 'Mention MOPH formulary or HMC tender priorities for faster routing.',
    primaryCtaLabel: 'Request a Qatar research proposal',
    consultationHeadline: 'Need brand and competitor data in Qatar?',
    asideDeskLabel: 'Qatar market desk',
  },
  oman: {
    marketName: 'Oman',
    reportLabel: 'Oman pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-oman',
    shareSlug: 'pharmaceutical-companies-oman',
    emailSubject: 'Oman pharma market research — BioNixus',
    routingHint: 'Mention MOH Oman drug registration or tender cycles for faster routing.',
    primaryCtaLabel: 'Request an Oman research proposal',
    consultationHeadline: 'Need brand and competitor data in Oman?',
    asideDeskLabel: 'Oman market desk',
  },
  bahrain: {
    marketName: 'Bahrain',
    reportLabel: 'Bahrain pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-bahrain',
    shareSlug: 'pharmaceutical-companies-bahrain',
    emailSubject: 'Bahrain pharma market research — BioNixus',
    routingHint: 'Mention NHRA registration or government tender priorities for faster routing.',
    primaryCtaLabel: 'Request a Bahrain research proposal',
    consultationHeadline: 'Need brand and competitor data in Bahrain?',
    asideDeskLabel: 'Bahrain market desk',
  },
  iraq: {
    marketName: 'Iraq',
    reportLabel: 'Iraq pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-iraq',
    shareSlug: 'pharmaceutical-companies-iraq',
    emailSubject: 'Iraq pharma market research — BioNixus',
    routingHint: 'Mention Iraqi MOH registration or public procurement channels for faster routing.',
    primaryCtaLabel: 'Request an Iraq research proposal',
    consultationHeadline: 'Need brand and competitor data in Iraq?',
    asideDeskLabel: 'Iraq market desk',
  },
  iran: {
    marketName: 'Iran',
    reportLabel: 'Iran pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-iran',
    shareSlug: 'pharmaceutical-companies-iran',
    emailSubject: 'Iran pharma market research — BioNixus',
    routingHint: 'Mention IFDA registration context and your GCC bridging strategy for faster routing.',
    primaryCtaLabel: 'Request an Iran research proposal',
    consultationHeadline: 'Need brand and competitor data in Iran?',
    asideDeskLabel: 'MENA market desk',
  },
  kuwait: {
    marketName: 'Kuwait',
    reportLabel: 'Kuwait pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-kuwait',
    shareSlug: 'pharmaceutical-companies-kuwait',
    emailSubject: 'Kuwait pharma market research — BioNixus',
    routingHint: 'Mention "Kuwait distributor ranking" in your note for a faster routed response from our GCC practice lead.',
    primaryCtaLabel: 'Request a Kuwait research proposal',
    consultationHeadline: 'Need brand and competitor data in Kuwait?',
    consultationBody:
      'BioNixus designs Arabic–English instruments, recruits MOH-aligned stakeholders, monitors tender cycles, and packages board-ready narratives for pharma, biotech, and medtech teams across the GCC.',
    asideDeskLabel: 'Kuwait market desk',
    midPageHeadline: 'Need proprietary Kuwait physician, payer, or tender intelligence?',
    midPageBody:
      'Book a 30-minute briefing with BioNixus to align on formulary hypotheses, stakeholder mapping across MOH CMS and leading distributors, or competitive intelligence timelines for Kuwait.',
  },
  usa: {
    marketName: 'United States',
    reportLabel: 'USA pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-usa',
    shareSlug: 'pharmaceutical-companies-usa',
    emailSubject: 'USA pharma market research — BioNixus',
    routingHint: 'Mention FDA/CMS formulary, Part D, or specialty pharmacy priorities for faster routing.',
    primaryCtaLabel: 'Request a USA research proposal',
    consultationHeadline: 'Need brand and competitor data in the USA?',
    consultationBody:
      'BioNixus designs instruments for US physicians, payers, and specialty pharmacy stakeholders, monitors formulary and channel dynamics, and packages board-ready narratives for pharma and biotech teams.',
    asideDeskLabel: 'USA market desk',
    midPageHeadline: 'Need proprietary US physician, payer, or channel intelligence?',
    midPageBody:
      'Book a 30-minute briefing to align on FDA/CMS-aligned stakeholder mapping, specialty pharmacy access, or competitive intelligence timelines for the United States.',
  },
  uk: {
    marketName: 'United Kingdom',
    reportLabel: 'UK pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-uk',
    shareSlug: 'pharmaceutical-companies-uk',
    emailSubject: 'UK pharma market research — BioNixus',
    routingHint: 'Mention MHRA registration or NICE/NHS formulary priorities for faster routing.',
    primaryCtaLabel: 'Request a UK research proposal',
    consultationHeadline: 'Need brand and competitor data in the UK?',
    asideDeskLabel: 'UK market desk',
    midPageHeadline: 'Need proprietary UK physician, NHS, or NICE intelligence?',
    midPageBody:
      'Book a briefing on MHRA, NICE, and NHS-aligned stakeholder mapping and reimbursement dynamics in the United Kingdom.',
  },
  germany: {
    marketName: 'Germany',
    reportLabel: 'Germany pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-germany',
    shareSlug: 'pharmaceutical-companies-germany',
    emailSubject: 'Germany pharma market research — BioNixus',
    routingHint: 'Mention BfArM registration or G-BA/AMNOG pricing priorities for faster routing.',
    primaryCtaLabel: 'Request a Germany research proposal',
    consultationHeadline: 'Need brand and competitor data in Germany?',
    asideDeskLabel: 'Germany market desk',
    midPageHeadline: 'Need proprietary German physician, G-BA, or AMNOG intelligence?',
    midPageBody:
      'Book a briefing on BfArM, G-BA, and SHI-aligned stakeholder mapping and pricing dynamics in Germany.',
  },
  brazil: {
    marketName: 'Brazil',
    reportLabel: 'Brazil pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-brazil',
    shareSlug: 'pharmaceutical-companies-brazil',
    emailSubject: 'Brazil pharma market research — BioNixus',
    routingHint: 'Mention ANVISA registration or CONITEC/SUS reimbursement priorities for faster routing.',
    primaryCtaLabel: 'Request a Brazil research proposal',
    consultationHeadline: 'Need brand and competitor data in Brazil?',
    asideDeskLabel: 'Brazil market desk',
    midPageHeadline: 'Need proprietary Brazilian physician, CONITEC, or retail intelligence?',
    midPageBody:
      'Book a briefing on ANVISA, CONITEC, and SUS/private-channel stakeholder mapping for Brazil.',
  },
  canada: {
    marketName: 'Canada',
    reportLabel: 'Canada pharmaceutical companies',
    canonicalPath: '/pharmaceutical-companies-canada',
    shareSlug: 'pharmaceutical-companies-canada',
    emailSubject: 'Canada pharma market research — BioNixus',
    routingHint: 'Mention Health Canada registration or CADTH/pCPA priorities for faster routing.',
    primaryCtaLabel: 'Request a Canada research proposal',
    consultationHeadline: 'Need brand and competitor data in Canada?',
    asideDeskLabel: 'Canada market desk',
    midPageHeadline: 'Need proprietary Canadian physician, CADTH, or provincial payer intelligence?',
    midPageBody:
      'Book a briefing on Health Canada, CADTH, and provincial formulary stakeholder mapping for Canada.',
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
  sweden: 'Mention TLV, NT-rådet, or regional formulary priorities for faster routing.',
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

/** Conversion config for standalone therapy/country SEO landing pages aligned to the hub shell. */
export function getHealthcareMarketResearchLandingConfig(
  reportLabel: string,
  canonicalPath: string,
  marketName: string,
  options?: { showEgyptPhone?: boolean; therapyArea?: string },
): ReportConversionConfig {
  const therapyHint = options?.therapyArea ? ` Mention ${options.therapyArea.toLowerCase()} and` : '';
  return {
    ...HEALTHCARE_MR_HUB_BASE,
    showEgyptPhone: options?.showEgyptPhone ?? marketName.toLowerCase().includes('egypt'),
    marketName,
    reportLabel,
    canonicalPath: ensureStandalonePath(canonicalPath),
    emailSubject: `${reportLabel} — BioNixus`,
    routingHint: `${therapyHint} UAE payer and formulary priorities for faster routing.`.trim(),
    primaryCtaLabel: `Schedule a ${marketName} research briefing`,
    consultationHeadline: `Ready for ${reportLabel.toLowerCase()}?`,
    asideDeskLabel: `${marketName} research desk`,
    midPageHeadline: `Commission ${reportLabel.toLowerCase()}`,
    midPageBody: `Book a 30-minute briefing to align methodology, sample design, and delivery timelines for ${marketName}.`,
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

// ---------------------------------------------------------------------------
// Company directory matrix (src/data/companyDirectories) — per-entity CTA copy
// ---------------------------------------------------------------------------

export type DirectoryConversionCopy = {
  /** Heading above the after-table proposal form. `{place}` is replaced with the country display name. */
  bridgeHeadline: string;
  /** Paragraph under the bridge heading. */
  bridgeBody: string;
  /** Footer band headline. */
  footerHeadline: string;
  /** Footer band body. */
  footerBody: string;
};

const DIRECTORY_DEFAULT_COPY: DirectoryConversionCopy = {
  bridgeHeadline: 'These are the {label} accounts we study in {place}',
  bridgeBody:
    'Need account-level or SKU-level data for a brand in {place}? BioNixus runs primary fieldwork — brand vs competitors, including the channels a dashboard averages away. Proposal ready within 48 hours of a brief.',
  footerHeadline: 'Need account-level {label} data in {place}?',
  footerBody:
    'Brand versus competitor, including the channels and accounts a dashboard averages away. Proposal ready within 48 hours of a brief.',
};

const DIRECTORY_ENTITY_COPY: Partial<Record<DirectoryEntitySlug, Partial<DirectoryConversionCopy>>> = {
  'pharmaceutical-companies': {
    footerHeadline: 'Need brand and competitor data in {place}?',
    footerBody:
      'Physician, pharmacist and payer fieldwork on the accounts above — prescription share, formulary position and tender exposure. Proposal within 48 hours.',
  },
  'pharmaceutical-distributors': {
    bridgeHeadline: 'These are the distributors and wholesalers we map in {place}',
    bridgeBody:
      'Choosing or auditing a distribution partner in {place}? BioNixus runs distributor due-diligence interviews, channel-share estimates and pharmacy-level availability checks. Proposal ready within 48 hours of a brief.',
    footerHeadline: 'Need distributor and channel data in {place}?',
    footerBody:
      'Coverage, credit terms, cold-chain capability and share of pharmacy purchases by wholesaler — from the pharmacies and hospitals themselves, not a directory.',
  },
  'pharmacy-chains': {
    bridgeHeadline: 'These are the pharmacy banners we audit in {place}',
    bridgeBody:
      'Launching an OTC, consumer-health or Rx brand through retail pharmacy in {place}? BioNixus runs shelf audits, pharmacist recommendation trackers and shopper studies across the chains above. Proposal within 48 hours.',
    footerHeadline: 'Need pharmacy-level data in {place}?',
    footerBody:
      'Availability, recommendation share, promotional compliance and category share by banner — fielded in-store and by pharmacist interview.',
  },
  'hospital-groups': {
    bridgeHeadline: 'These are the hospital operators we work with in {place}',
    bridgeBody:
      'Selling into private hospitals in {place}? BioNixus runs procurement-committee interviews, formulary-listing studies and KOL mapping across the groups above. Proposal ready within 48 hours of a brief.',
    footerHeadline: 'Need hospital-level data in {place}?',
    footerBody:
      'Procurement pathways, formulary status, device usage and clinician preference by operator — fielded with the people who make the decisions.',
  },
  'medical-device-companies': {
    footerHeadline: 'Need device-level competitive data in {place}?',
    footerBody:
      'Installed base, procedure volumes, surgeon preference and tender outcomes by hospital — fielded across public and private operators.',
  },
  'biotech-companies': {
    bridgeHeadline: 'These are the biotech and innovation accounts we track in {place}',
    bridgeBody:
      'Partnering, licensing or launching a biologic in {place}? BioNixus runs KOL, payer and regulator interviews plus hospital-level demand sizing. Proposal within 48 hours.',
    footerHeadline: 'Need biotech and biologics market data in {place}?',
    footerBody: 'Payer appetite, biosimilar uptake, KOL sentiment and tender exposure — primary research, not desk estimates.',
  },
  'cro-companies': {
    bridgeHeadline: 'These are the clinical research partners we benchmark in {place}',
    bridgeBody:
      'Selecting sites or a CRO in {place}? BioNixus runs investigator and site-feasibility interviews, patient-pathway mapping and competitor-trial landscaping. Proposal within 48 hours.',
    footerHeadline: 'Need site and investigator intelligence in {place}?',
    footerBody: 'Feasibility, recruitment realism and investigator preference — from the sites, not the sponsor deck.',
  },
  'health-insurers': {
    bridgeHeadline: 'These are the payers we interview in {place}',
    bridgeBody:
      'Building a market-access or reimbursement case in {place}? BioNixus runs payer, TPA and employer interviews plus willingness-to-cover studies. Proposal within 48 hours.',
    footerHeadline: 'Need payer and reimbursement data in {place}?',
    footerBody: 'Coverage rules, formulary influence and price sensitivity by insurer — fielded with medical directors and claims teams.',
  },
  banks: {
    bridgeHeadline: 'These are the banks whose customers we survey in {place}',
    bridgeBody:
      'Launching a card, digital product or SME proposition in {place}? BioNixus runs customer-satisfaction, brand-health and mystery-shopping programs across the banks above. Proposal within 48 hours.',
    footerHeadline: 'Need customer and brand data on banks in {place}?',
    footerBody: 'NPS, switching intent, product penetration and branch experience by bank — fielded with account holders and SMEs.',
  },
  'fmcg-companies': {
    bridgeHeadline: 'These are the FMCG manufacturers we audit in {place}',
    bridgeBody:
      'Launching or defending a grocery brand in {place}? BioNixus runs shopper, retailer-audit and traditional-trade studies across the houses above. Proposal within 48 hours.',
    footerHeadline: 'Need SKU-level grocery data in {place}?',
    footerBody:
      'Availability, substitution, shopper mission and banner share — fielded in modern trade and the wholesale route the panel undersamples.',
  },
  'food-beverage-companies': {
    bridgeHeadline: 'These are the food and beverage manufacturers we field with in {place}',
    bridgeBody:
      'Pricing a dairy, snack or HORECA launch in {place}? BioNixus runs buyer, distributor and food-service interviews across the plants above. Proposal within 48 hours.',
    footerHeadline: 'Need food-service and retail data in {place}?',
    footerBody:
      'Listing, food-service specification and shopper preference by manufacturer — from the buyers and chefs, not a catalogue.',
  },
  'automotive-distributors': {
    bridgeHeadline: 'These are the dealer groups we field with in {place}',
    bridgeBody:
      'Tracking showroom traffic, aftersales satisfaction or brand consideration in {place}? BioNixus runs mystery shopping, buyer interviews and dealer audits across the groups above. Proposal within 48 hours.',
    footerHeadline: 'Need dealer and buyer data in {place}?',
    footerBody: 'Consideration, showroom experience, aftersales loyalty and dealer compliance — fielded at the point of sale.',
  },
  'real-estate-companies': {
    bridgeHeadline: 'These are the developers whose buyers we survey in {place}',
    bridgeBody:
      'Pricing a launch or sizing buyer demand in {place}? BioNixus runs buyer and investor interviews, broker panels and community-satisfaction studies across the developers above. Proposal within 48 hours.',
    footerHeadline: 'Need buyer and broker data in {place}?',
    footerBody: 'Purchase intent, price sensitivity, community satisfaction and broker preference by developer — from the people who buy.',
  },
  'hotel-groups': {
    bridgeHeadline: 'These are the hospitality operators we field with in {place}',
    bridgeBody:
      'Benchmarking guest experience or sizing a new property in {place}? BioNixus runs guest, corporate-buyer and travel-trade interviews across the groups above. Proposal within 48 hours.',
    footerHeadline: 'Need guest and travel-trade data in {place}?',
    footerBody: 'Guest satisfaction, corporate account preference and OTA dynamics by operator — fielded with guests and bookers.',
  },
};

function fill(template: string, vars: { label: string; place: string }): string {
  return template.replace(/\{label\}/g, vars.label).replace(/\{place\}/g, vars.place);
}

/** CTA copy for a directory page, with `{label}` / `{place}` resolved. */
export function getDirectoryConversionCopy(
  entity: DirectoryEntitySlug,
  vars: { label: string; place: string },
): DirectoryConversionCopy {
  const merged = { ...DIRECTORY_DEFAULT_COPY, ...(DIRECTORY_ENTITY_COPY[entity] ?? {}) };
  return {
    bridgeHeadline: fill(merged.bridgeHeadline, vars),
    bridgeBody: fill(merged.bridgeBody, vars),
    footerHeadline: fill(merged.footerHeadline, vars),
    footerBody: fill(merged.footerBody, vars),
  };
}
