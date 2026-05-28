import type { ReportEntry } from '@/data/healthcareReportTypes';
import { MARKET_CONTENT, THERAPY_AREA_CONTENT } from '@/data/healthcareReportContent';
import { buildHealthcareFaqs } from '@/data/healthcareReportFaqs';

export const MARKET_STANDALONE_HEALTH_REPORT: Record<string, string> = {
  gcc: '/gcc-pharma-market-report-2026',
  'saudi-arabia': '/saudi-arabia-healthcare-market-report',
  uae: '/uae-healthcare-market-report',
  kuwait: '/kuwait-healthcare-market-report',
  qatar: '/qatar-healthcare-market-report',
  bahrain: '/bahrain-healthcare-market-report',
  oman: '/oman-healthcare-market-report',
  egypt: '/egypt-healthcare-market-report',
  turkey: '/turkey-healthcare-market-report',
  uk: '/uk-healthcare-market-report',
  germany: '/germany-healthcare-market-report',
  india: '/india-healthcare-market-report',
  china: '/china-healthcare-market-report',
  japan: '/japan-healthcare-market-report',
  usa: '/usa-healthcare-market-report',
  brazil: '/brazil-healthcare-market-report',
  'south-korea': '/south-korea-healthcare-market-report',
  australia: '/australia-healthcare-market-report',
  singapore: '/singapore-healthcare-market-report',
  canada: '/canada-healthcare-market-report',
};

type TherapyKey =
  | 'oncology'
  | 'diabetes-metabolic'
  | 'cardiovascular'
  | 'immunology-biologics'
  | 'respiratory'
  | 'rare-diseases'
  | 'neurology-cns'
  | 'biosimilars'
  | 'digital-health'
  | 'vaccines'
  | 'dermatology';

type SpecRow = {
  slug: string;
  marketSlug: string;
  market: string;
  region: string;
  therapySlug: TherapyKey;
  stats: readonly [string, string, string, string, string, string];
  sum1Tail: string;
  sum2Context: string;
};

function therapyMeta(th: TherapyKey) {
  const names: Record<TherapyKey, string> = {
    oncology: 'Oncology',
    'diabetes-metabolic': 'Diabetes & Metabolic',
    cardiovascular: 'Cardiovascular',
    'immunology-biologics': 'Immunology & Biologics',
    respiratory: 'Respiratory',
    'rare-diseases': 'Rare Diseases',
    'neurology-cns': 'Neurology & CNS',
    biosimilars: 'Biosimilars',
    'digital-health': 'Digital Health & AI',
    vaccines: 'Vaccines',
    dermatology: 'Dermatology',
  };
  return { name: names[th], slug: th };
}

const STAT_ONC_GCC: SpecRow['stats'] = ['~$7.8B', 'Market size 2026', '~$13.9B', 'Forecast 2030', '11.6%', 'CAGR 2026–2030'];
const STAT_ONC_SA: SpecRow['stats'] = ['~$1.28B', 'Market size 2026', '~$2.06B', 'Forecast 2030', '10.9%', 'CAGR 2026–2030'];
const STAT_ONC_UAE: SpecRow['stats'] = ['~$458M', 'Market size 2026', '~$736M', 'Forecast 2030', '11.5%', 'CAGR 2026–2030'];
const STAT_ONC_KW: SpecRow['stats'] = ['~$118M', 'Market size 2026', '~$176M', 'Forecast 2030', '11.9%', 'CAGR 2026–2030'];
const STAT_ONC_QA: SpecRow['stats'] = ['~$142M', 'Market size 2026', '~$229M', 'Forecast 2030', '11.8%', 'CAGR 2026–2030'];
const STAT_ONC_BH: SpecRow['stats'] = ['~$62M', 'Market size 2026', '~$98M', 'Forecast 2030', '12.1%', 'CAGR 2026–2030'];
const STAT_ONC_OM: SpecRow['stats'] = ['~$71M', 'Market size 2026', '~$106M', 'Forecast 2030', '11.4%', 'CAGR 2026–2030'];
const STAT_ONC_EG: SpecRow['stats'] = ['~$780M', 'Market size 2026', '~$1.24B', 'Forecast 2030', '10.7%', 'CAGR 2026–2030'];
const STAT_ONC_TR: SpecRow['stats'] = ['~$1.95B', 'Market size 2026', '~$3.20B', 'Forecast 2030', '9.9%', 'CAGR 2026–2030'];

const STAT_DM_GCC: SpecRow['stats'] = ['~$5.25B', 'Market size 2026', '~$8.96B', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];
const STAT_DM_SA: SpecRow['stats'] = ['~$1.06B', 'Market size 2026', '~$1.71B', 'Forecast 2030', '13.8%', 'CAGR 2026–2030'];
const STAT_DM_UAE: SpecRow['stats'] = ['~$382M', 'Market size 2026', '~$652M', 'Forecast 2030', '14.0%', 'CAGR 2026–2030'];
const STAT_DM_KW: SpecRow['stats'] = ['~$104M', 'Market size 2026', '~$166M', 'Forecast 2030', '13.5%', 'CAGR 2026–2030'];
const STAT_DM_QA: SpecRow['stats'] = ['~$128M', 'Market size 2026', '~$208M', 'Forecast 2030', '13.6%', 'CAGR 2026–2030'];
const STAT_DM_BH: SpecRow['stats'] = ['~$54M', 'Market size 2026', '~$92M', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];
const STAT_DM_OM: SpecRow['stats'] = ['~$63M', 'Market size 2026', '~$102M', 'Forecast 2030', '13.8%', 'CAGR 2026–2030'];
const STAT_DM_EG: SpecRow['stats'] = ['~$920M', 'Market size 2026', '~$1.62B', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];
const STAT_DM_TR: SpecRow['stats'] = ['~$2.45B', 'Market size 2026', '~$4.06B', 'Forecast 2030', '12.9%', 'CAGR 2026–2030'];

const STAT_CV_GCC: SpecRow['stats'] = ['~$6.95B', 'Market size 2026', '~$10.92B', 'Forecast 2030', '11.9%', 'CAGR 2026–2030'];
const STAT_CV_SA: SpecRow['stats'] = ['~$1.14B', 'Market size 2026', '~$1.71B', 'Forecast 2030', '11.9%', 'CAGR 2026–2030'];
const STAT_CV_UAE: SpecRow['stats'] = ['~$410M', 'Market size 2026', '~$618M', 'Forecast 2030', '11.7%', 'CAGR 2026–2030'];
const STAT_CV_KW: SpecRow['stats'] = ['~$102M', 'Market size 2026', '~$158M', 'Forecast 2030', '11.9%', 'CAGR 2026–2030'];
const STAT_CV_QA: SpecRow['stats'] = ['~$129M', 'Market size 2026', '~$198M', 'Forecast 2030', '12.4%', 'CAGR 2026–2030'];
const STAT_CV_BH: SpecRow['stats'] = ['~$59M', 'Market size 2026', '~$91M', 'Forecast 2030', '12.9%', 'CAGR 2026–2030'];
const STAT_CV_OM: SpecRow['stats'] = ['~$68M', 'Market size 2026', '~$105M', 'Forecast 2030', '12.8%', 'CAGR 2026–2030'];
const STAT_CV_EG: SpecRow['stats'] = ['~$1.02B', 'Market size 2026', '~$1.71B', 'Forecast 2030', '12.9%', 'CAGR 2026–2030'];

const STAT_IB_GCC: SpecRow['stats'] = ['~$5.92B', 'Market size 2026', '~$9.71B', 'Forecast 2030', '12.6%', 'CAGR 2026–2030'];
const STAT_IB_SA: SpecRow['stats'] = ['~$986M', 'Market size 2026', '~$1.61B', 'Forecast 2030', '12.6%', 'CAGR 2026–2030'];
const STAT_IB_UAE: SpecRow['stats'] = ['~$346M', 'Market size 2026', '~$571M', 'Forecast 2030', '12.9%', 'CAGR 2026–2030'];
const STAT_IB_KW: SpecRow['stats'] = ['~$95M', 'Market size 2026', '~$158M', 'Forecast 2030', '12.9%', 'CAGR 2026–2030'];
const STAT_IB_QA: SpecRow['stats'] = ['~$112M', 'Market size 2026', '~$185M', 'Forecast 2030', '13.7%', 'CAGR 2026–2030'];
const STAT_IB_BH: SpecRow['stats'] = ['~$48M', 'Market size 2026', '~$80M', 'Forecast 2030', '13.5%', 'CAGR 2026–2030'];
const STAT_IB_OM: SpecRow['stats'] = ['~$58M', 'Market size 2026', '~$96M', 'Forecast 2030', '12.9%', 'CAGR 2026–2030'];
const STAT_IB_EG: SpecRow['stats'] = ['~$710M', 'Market size 2026', '~$1.09B', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];

const STAT_RP_GCC: SpecRow['stats'] = ['~$3.94B', 'Market size 2026', '~$6.82B', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];
const STAT_RP_SA: SpecRow['stats'] = ['~$698M', 'Market size 2026', '~$1.06B', 'Forecast 2030', '13.6%', 'CAGR 2026–2030'];
const STAT_RP_UAE: SpecRow['stats'] = ['~$251M', 'Market size 2026', '~$388M', 'Forecast 2030', '13.6%', 'CAGR 2026–2030'];
const STAT_RP_KW: SpecRow['stats'] = ['~$77M', 'Market size 2026', '~$121M', 'Forecast 2030', '13.7%', 'CAGR 2026–2030'];
const STAT_RP_QA: SpecRow['stats'] = ['~$86M', 'Market size 2026', '~$139M', 'Forecast 2030', '14.9%', 'CAGR 2026–2030'];
const STAT_RP_BH: SpecRow['stats'] = ['~$36M', 'Market size 2026', '~$58M', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];
const STAT_RP_OM: SpecRow['stats'] = ['~$43M', 'Market size 2026', '~$69M', 'Forecast 2030', '13.8%', 'CAGR 2026–2030'];
const STAT_RP_EG: SpecRow['stats'] = ['~$640M', 'Market size 2026', '~$1.06B', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];

const STAT_RD_GCC: SpecRow['stats'] = ['~$1.92B', 'Market size 2026', '~$3.31B', 'Forecast 2030', '15.9%', 'CAGR 2026–2030'];
const STAT_RD_SA: SpecRow['stats'] = ['~$392M', 'Market size 2026', '~$685M', 'Forecast 2030', '17.9%', 'CAGR 2026–2030'];
const STAT_RD_UAE: SpecRow['stats'] = ['~$128M', 'Market size 2026', '~$228M', 'Forecast 2030', '16.9%', 'CAGR 2026–2030'];
const STAT_RD_QA: SpecRow['stats'] = ['~$101M', 'Market size 2026', '~$176M', 'Forecast 2030', '16.1%', 'CAGR 2026–2030'];
const STAT_RD_KW: SpecRow['stats'] = ['~$44M', 'Market size 2026', '~$71M', 'Forecast 2030', '15.1%', 'CAGR 2026–2030'];
const STAT_RD_OM: SpecRow['stats'] = ['~$36M', 'Market size 2026', '~$58M', 'Forecast 2030', '15.9%', 'CAGR 2026–2030'];
const STAT_RD_EG: SpecRow['stats'] = ['~$118M', 'Market size 2026', '~$208M', 'Forecast 2030', '16.2%', 'CAGR 2026–2030'];

const STAT_NR_GCC: SpecRow['stats'] = ['~$2.71B', 'Market size 2026', '~$4.82B', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];
const STAT_NR_SA: SpecRow['stats'] = ['~$448M', 'Market size 2026', '~$706M', 'Forecast 2030', '13.6%', 'CAGR 2026–2030'];
const STAT_NR_UAE: SpecRow['stats'] = ['~$152M', 'Market size 2026', '~$248M', 'Forecast 2030', '14.9%', 'CAGR 2026–2030'];
const STAT_NR_KW: SpecRow['stats'] = ['~$48M', 'Market size 2026', '~$78M', 'Forecast 2030', '14.2%', 'CAGR 2026–2030'];
const STAT_NR_QA: SpecRow['stats'] = ['~$54M', 'Market size 2026', '~$89M', 'Forecast 2030', '14.8%', 'CAGR 2026–2030'];
const STAT_NR_BH: SpecRow['stats'] = ['~$22M', 'Market size 2026', '~$36M', 'Forecast 2030', '14.1%', 'CAGR 2026–2030'];
const STAT_NR_OM: SpecRow['stats'] = ['~$26M', 'Market size 2026', '~$42M', 'Forecast 2030', '14.5%', 'CAGR 2026–2030'];
const STAT_NR_EG: SpecRow['stats'] = ['~$520M', 'Market size 2026', '~$868M', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];

const STAT_BS_GCC: SpecRow['stats'] = ['~$1.55B', 'Market size 2026', '~$2.93B', 'Forecast 2030', '17.9%', 'CAGR 2026–2030'];
const STAT_BS_SA: SpecRow['stats'] = ['~$382M', 'Market size 2026', '~$676M', 'Forecast 2030', '17.9%', 'CAGR 2026–2030'];
const STAT_BS_UAE: SpecRow['stats'] = ['~$138M', 'Market size 2026', '~$248M', 'Forecast 2030', '17.4%', 'CAGR 2026–2030'];
const STAT_BS_KW: SpecRow['stats'] = ['~$42M', 'Market size 2026', '~$74M', 'Forecast 2030', '17.2%', 'CAGR 2026–2030'];
const STAT_BS_QA: SpecRow['stats'] = ['~$48M', 'Market size 2026', '~$86M', 'Forecast 2030', '17.6%', 'CAGR 2026–2030'];
const STAT_BS_BH: SpecRow['stats'] = ['~$19M', 'Market size 2026', '~$34M', 'Forecast 2030', '17.1%', 'CAGR 2026–2030'];
const STAT_BS_OM: SpecRow['stats'] = ['~$23M', 'Market size 2026', '~$41M', 'Forecast 2030', '17.3%', 'CAGR 2026–2030'];
const STAT_BS_EG: SpecRow['stats'] = ['~$210M', 'Market size 2026', '~$398M', 'Forecast 2030', '18.1%', 'CAGR 2026–2030'];

const STAT_DH_GCC: SpecRow['stats'] = ['~$982M', 'Market size 2026', '~$1.71B', 'Forecast 2030', '17.9%', 'CAGR 2026–2030'];
const STAT_DH_SA: SpecRow['stats'] = ['~$268M', 'Market size 2026', '~$458M', 'Forecast 2030', '17.6%', 'CAGR 2026–2030'];
const STAT_DH_UAE: SpecRow['stats'] = ['~$96M', 'Market size 2026', '~$168M', 'Forecast 2030', '17.5%', 'CAGR 2026–2030'];
const STAT_DH_KW: SpecRow['stats'] = ['~$29M', 'Market size 2026', '~$51M', 'Forecast 2030', '17.2%', 'CAGR 2026–2030'];
const STAT_DH_QA: SpecRow['stats'] = ['~$33M', 'Market size 2026', '~$58M', 'Forecast 2030', '17.8%', 'CAGR 2026–2030'];
const STAT_DH_BH: SpecRow['stats'] = ['~$14M', 'Market size 2026', '~$25M', 'Forecast 2030', '17.0%', 'CAGR 2026–2030'];
const STAT_DH_OM: SpecRow['stats'] = ['~$17M', 'Market size 2026', '~$30M', 'Forecast 2030', '17.4%', 'CAGR 2026–2030'];
const STAT_DH_EG: SpecRow['stats'] = ['~$185M', 'Market size 2026', '~$338M', 'Forecast 2030', '18.0%', 'CAGR 2026–2030'];

const STAT_VC_GCC: SpecRow['stats'] = ['~$1.18B', 'Market size 2026', '~$2.06B', 'Forecast 2030', '17.9%', 'CAGR 2026–2030'];
const STAT_VC_SA: SpecRow['stats'] = ['~$248M', 'Market size 2026', '~$438M', 'Forecast 2030', '17.2%', 'CAGR 2026–2030'];
const STAT_VC_UAE: SpecRow['stats'] = ['~$142M', 'Market size 2026', '~$238M', 'Forecast 2030', '16.9%', 'CAGR 2026–2030'];
const STAT_VC_KW: SpecRow['stats'] = ['~$44M', 'Market size 2026', '~$76M', 'Forecast 2030', '16.8%', 'CAGR 2026–2030'];
const STAT_VC_QA: SpecRow['stats'] = ['~$49M', 'Market size 2026', '~$84M', 'Forecast 2030', '17.1%', 'CAGR 2026–2030'];
const STAT_VC_BH: SpecRow['stats'] = ['~$20M', 'Market size 2026', '~$35M', 'Forecast 2030', '16.7%', 'CAGR 2026–2030'];
const STAT_VC_OM: SpecRow['stats'] = ['~$24M', 'Market size 2026', '~$41M', 'Forecast 2030', '16.9%', 'CAGR 2026–2030'];
const STAT_VC_EG: SpecRow['stats'] = ['~$198M', 'Market size 2026', '~$348M', 'Forecast 2030', '17.4%', 'CAGR 2026–2030'];

const STAT_DR_GCC: SpecRow['stats'] = ['~$428M', 'Market size 2026', '~$706M', 'Forecast 2030', '17.9%', 'CAGR 2026–2030'];
const STAT_DR_SA: SpecRow['stats'] = ['~$86M', 'Market size 2026', '~$148M', 'Forecast 2030', '17.6%', 'CAGR 2026–2030'];
const STAT_DR_UAE: SpecRow['stats'] = ['~$48M', 'Market size 2026', '~$82M', 'Forecast 2030', '17.4%', 'CAGR 2026–2030'];
const STAT_DR_KW: SpecRow['stats'] = ['~$15M', 'Market size 2026', '~$26M', 'Forecast 2030', '17.0%', 'CAGR 2026–2030'];
const STAT_DR_QA: SpecRow['stats'] = ['~$17M', 'Market size 2026', '~$29M', 'Forecast 2030', '17.2%', 'CAGR 2026–2030'];
const STAT_DR_BH: SpecRow['stats'] = ['~$7M', 'Market size 2026', '~$12M', 'Forecast 2030', '16.8%', 'CAGR 2026–2030'];
const STAT_DR_OM: SpecRow['stats'] = ['~$8M', 'Market size 2026', '~$14M', 'Forecast 2030', '17.1%', 'CAGR 2026–2030'];
const STAT_DR_EG: SpecRow['stats'] = ['~$72M', 'Market size 2026', '~$126M', 'Forecast 2030', '17.8%', 'CAGR 2026–2030'];

// Turkey expansion
const STAT_CV_TR: SpecRow['stats'] = ['~$2.82B', 'Market size 2026', '~$4.24B', 'Forecast 2030', '10.6%', 'CAGR 2026–2030'];
const STAT_IB_TR: SpecRow['stats'] = ['~$1.95B', 'Market size 2026', '~$3.12B', 'Forecast 2030', '12.7%', 'CAGR 2026–2030'];
const STAT_RP_TR: SpecRow['stats'] = ['~$1.42B', 'Market size 2026', '~$2.28B', 'Forecast 2030', '12.5%', 'CAGR 2026–2030'];
const STAT_RD_TR: SpecRow['stats'] = ['~$580M', 'Market size 2026', '~$1.02B', 'Forecast 2030', '15.2%', 'CAGR 2026–2030'];

// UK
const STAT_ONC_UK: SpecRow['stats'] = ['~£6.5B', 'Market size 2026', '~£9.8B', 'Forecast 2030', '8.6%', 'CAGR 2026–2030'];
const STAT_DM_UK: SpecRow['stats'] = ['~£4.2B', 'Market size 2026', '~£7.1B', 'Forecast 2030', '14.1%', 'CAGR 2026–2030'];
const STAT_CV_UK: SpecRow['stats'] = ['~£5.8B', 'Market size 2026', '~£8.6B', 'Forecast 2030', '10.3%', 'CAGR 2026–2030'];
const STAT_IB_UK: SpecRow['stats'] = ['~£8.1B', 'Market size 2026', '~£12.4B', 'Forecast 2030', '11.2%', 'CAGR 2026–2030'];
const STAT_RP_UK: SpecRow['stats'] = ['~£4.4B', 'Market size 2026', '~£6.8B', 'Forecast 2030', '11.1%', 'CAGR 2026–2030'];

// Germany
const STAT_ONC_DE: SpecRow['stats'] = ['~€9.2B', 'Market size 2026', '~€13.6B', 'Forecast 2030', '10.3%', 'CAGR 2026–2030'];
const STAT_DM_DE: SpecRow['stats'] = ['~€5.8B', 'Market size 2026', '~€9.4B', 'Forecast 2030', '13.6%', 'CAGR 2026–2030'];
const STAT_CV_DE: SpecRow['stats'] = ['~€7.4B', 'Market size 2026', '~€11.1B', 'Forecast 2030', '10.7%', 'CAGR 2026–2030'];
const STAT_IB_DE: SpecRow['stats'] = ['~€10.5B', 'Market size 2026', '~€15.9B', 'Forecast 2030', '10.3%', 'CAGR 2026–2030'];
const STAT_RP_DE: SpecRow['stats'] = ['~€5.2B', 'Market size 2026', '~€7.8B', 'Forecast 2030', '10.6%', 'CAGR 2026–2030'];

// India
const STAT_ONC_IN: SpecRow['stats'] = ['~$2.1B', 'Market size 2026', '~$4.2B', 'Forecast 2030', '18.1%', 'CAGR 2026–2030'];
const STAT_DM_IN: SpecRow['stats'] = ['~$3.8B', 'Market size 2026', '~$7.6B', 'Forecast 2030', '18.9%', 'CAGR 2026–2030'];
const STAT_CV_IN: SpecRow['stats'] = ['~$2.9B', 'Market size 2026', '~$5.8B', 'Forecast 2030', '18.9%', 'CAGR 2026–2030'];
const STAT_IB_IN: SpecRow['stats'] = ['~$1.4B', 'Market size 2026', '~$2.8B', 'Forecast 2030', '18.9%', 'CAGR 2026–2030'];

// China
const STAT_ONC_CN: SpecRow['stats'] = ['~$22B', 'Market size 2026', '~$38B', 'Forecast 2030', '15.3%', 'CAGR 2026–2030'];
const STAT_DM_CN: SpecRow['stats'] = ['~$18B', 'Market size 2026', '~$32B', 'Forecast 2030', '15.5%', 'CAGR 2026–2030'];
const STAT_CV_CN: SpecRow['stats'] = ['~$28B', 'Market size 2026', '~$48B', 'Forecast 2030', '14.4%', 'CAGR 2026–2030'];
const STAT_IB_CN: SpecRow['stats'] = ['~$12B', 'Market size 2026', '~$22B', 'Forecast 2030', '16.9%', 'CAGR 2026–2030'];

// Japan
const STAT_ONC_JP: SpecRow['stats'] = ['~$10.5B', 'Market size 2026', '~$15.8B', 'Forecast 2030', '10.8%', 'CAGR 2026–2030'];
const STAT_DM_JP: SpecRow['stats'] = ['~$7.2B', 'Market size 2026', '~$11.6B', 'Forecast 2030', '12.0%', 'CAGR 2026–2030'];
const STAT_CV_JP: SpecRow['stats'] = ['~$8.9B', 'Market size 2026', '~$13.2B', 'Forecast 2030', '10.4%', 'CAGR 2026–2030'];

// USA
const STAT_ONC_US: SpecRow['stats'] = ['~$65B', 'Market size 2026', '~$102B', 'Forecast 2030', '12.4%', 'CAGR 2026–2030'];
const STAT_DM_US: SpecRow['stats'] = ['~$58B', 'Market size 2026', '~$96B', 'Forecast 2030', '13.6%', 'CAGR 2026–2030'];
const STAT_CV_US: SpecRow['stats'] = ['~$52B', 'Market size 2026', '~$78B', 'Forecast 2030', '10.8%', 'CAGR 2026–2030'];
const STAT_IB_US: SpecRow['stats'] = ['~$112B', 'Market size 2026', '~$168B', 'Forecast 2030', '10.9%', 'CAGR 2026–2030'];

// Brazil
const STAT_ONC_BR: SpecRow['stats'] = ['~$3.2B', 'Market size 2026', '~$5.8B', 'Forecast 2030', '16.2%', 'CAGR 2026–2030'];
const STAT_DM_BR: SpecRow['stats'] = ['~$4.1B', 'Market size 2026', '~$7.4B', 'Forecast 2030', '16.0%', 'CAGR 2026–2030'];
const STAT_CV_BR: SpecRow['stats'] = ['~$3.8B', 'Market size 2026', '~$6.8B', 'Forecast 2030', '15.6%', 'CAGR 2026–2030'];

// South Korea
const STAT_ONC_KR: SpecRow['stats'] = ['~$4.8B', 'Market size 2026', '~$7.6B', 'Forecast 2030', '12.0%', 'CAGR 2026–2030'];
const STAT_DM_KR: SpecRow['stats'] = ['~$3.2B', 'Market size 2026', '~$5.4B', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];
const STAT_CV_KR: SpecRow['stats'] = ['~$4.1B', 'Market size 2026', '~$6.4B', 'Forecast 2030', '12.4%', 'CAGR 2026–2030'];

// Australia
const STAT_ONC_AU: SpecRow['stats'] = ['~$3.1B', 'Market size 2026', '~$4.8B', 'Forecast 2030', '11.8%', 'CAGR 2026–2030'];
const STAT_DM_AU: SpecRow['stats'] = ['~$2.1B', 'Market size 2026', '~$3.4B', 'Forecast 2030', '13.6%', 'CAGR 2026–2030'];

// Singapore
const STAT_ONC_SG: SpecRow['stats'] = ['~$680M', 'Market size 2026', '~$1.08B', 'Forecast 2030', '12.7%', 'CAGR 2026–2030'];
const STAT_DM_SG: SpecRow['stats'] = ['~$420M', 'Market size 2026', '~$695M', 'Forecast 2030', '13.5%', 'CAGR 2026–2030'];

// Canada
const STAT_ONC_CA: SpecRow['stats'] = ['~$4.2B', 'Market size 2026', '~$6.8B', 'Forecast 2030', '12.9%', 'CAGR 2026–2030'];

function row(
  slug: string,
  marketSlug: keyof typeof MARKET_CONTENT,
  market: string,
  region: string,
  therapySlug: TherapyKey,
  stats: SpecRow['stats'],
  sum1Tail: string,
  sum2Context: string,
): SpecRow {
  return { slug, marketSlug: marketSlug as string, market, region, therapySlug, stats, sum1Tail, sum2Context };
}

const SPECS: SpecRow[] = [
  row('gcc-oncology-market-report', 'gcc', 'GCC', 'GCC', 'oncology', STAT_ONC_GCC, 'radiopharm throughput, genome programme adjacency uplift, Hajj oncology surge preparedness, tertiary expansion megaprojects, multinational parallel submission harmonization stress tests.', '[GCC pharmaceutical market outlook 2026](/gcc-pharma-market-report-2026) • [Healthcare research hub](/healthcare-market-research) • [Oncology therapy programmes](/healthcare-market-research/therapy/oncology) • [GCC market access dossier rehearsals](/gcc-market-access-guide).'),
  row('saudi-arabia-oncology-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'oncology', STAT_ONC_SA, 'NUPCO award cyclicalities, Vision 2030 cancer centre rollout, Saudi Genome tumour board adoption, insured expansion steering PA intensity.', '[Saudi Arabia healthcare outlook](/saudi-arabia-healthcare-market-report) • [GCC pharma briefing](/gcc-pharma-market-report-2026) • [KOL mapping oncology Saudi](/kol-mapping-saudi-arabia-oncology).'),
  row('uae-oncology-market-report', 'uae', 'United Arab Emirates', 'GCC', 'oncology', STAT_ONC_UAE, 'dual DHA versus DOH PA pathways, infusion chair premium ward stratification, medical tourism oncology referrals, multinational reinsurance behavioural carve-outs.', '[UAE healthcare report](/uae-healthcare-market-report) • [Pharma research Dubai](/pharmaceutical-market-research-dubai) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('kuwait-oncology-market-report', 'kuwait', 'Kuwait', 'GCC', 'oncology', STAT_ONC_KW, 'MOH oncology centre queues, dialysis overlapping cardio‑renal trial eligibility, reinsurer stop‑loss biologic carve-outs episodic resets.', '[Kuwait healthcare market report](/kuwait-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026) • [Kuwait market access programmes](/kuwait-market-access-research).'),
  row('qatar-oncology-market-report', 'qatar', 'Qatar', 'GCC', 'oncology', STAT_ONC_QA, 'Sidra genomics interplay, Hamad tumour board dossier rehearsals, sovereign health security stockpiling analogue influences on award cadence.', '[Qatar healthcare market report](/qatar-healthcare-market-report) • [Qatar payer access roadmap](/qatar-market-access-research) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('bahrain-oncology-market-report', 'bahrain', 'Bahrain', 'GCC', 'oncology', STAT_ONC_BH, 'NHRA rapid review interplay with Salmaniya formulary cohesion, commuter leakage across King Fahd Causeway referral attribution noise.', '[Bahrain healthcare report](/bahrain-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('oman-oncology-market-report', 'oman', 'Oman', 'GCC', 'oncology', STAT_ONC_OM, 'interior geography referral latency influencing stage mix, Gulf of Oman logistical cold chain SLA variance, Sultan Qaboos academic gatekeeper pacing.', '[Oman healthcare report](/oman-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('egypt-oncology-market-report', 'egypt', 'Egypt', 'MENA', 'oncology', STAT_ONC_EG, 'UHI oncology listing warfare, CCHE philanthropic adjacency underwriting crowding‑in artefacts, forex LC settlement volatility compressing importer landed cost forecasts.', '[Egypt healthcare outlook](/egypt-healthcare-market-report) • [GCC pharma parallels](/gcc-pharma-market-report-2026).'),

  row('gcc-diabetes-market-report', 'gcc', 'GCC', 'GCC', 'diabetes-metabolic', STAT_DM_GCC, 'GLP‑1 share shock versus tender insulin analogue anchors, CGM penetration gradients, migrant worker screening camp elasticities.', '[GCC pharma briefing](/gcc-pharma-market-report-2026) • [Healthcare research hub](/healthcare-market-research) • [UAE metabolic corridor analogue](/uae-healthcare-market-report).'),
  row('saudi-arabia-diabetes-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'diabetes-metabolic', STAT_DM_SA, 'young adult BMI trajectories anchoring renal cardio protection triple classes, pharmacist substitution pilots, compulsory insurance behavioural shifts.', '[Saudi Arabia healthcare briefing](/saudi-arabia-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026) • [GCC market access guide](/gcc-market-access-guide).'),
  row('uae-diabetes-market-report', 'uae', 'United Arab Emirates', 'GCC', 'diabetes-metabolic', STAT_DM_UAE, 'Thiqa versus EBP divergence in GLP‑1 PA stacks, Cleveland Clinic cardio‑renal speciality referral bridges, insurer step therapy granularity.', '[UAE healthcare report](/uae-healthcare-market-report) • [GCC pharma briefing](/gcc-pharma-market-report-2026) • [Dubai pharma research corridor](/pharmaceutical-market-research-dubai).'),
  row('kuwait-diabetes-market-report', 'kuwait', 'Kuwait', 'GCC', 'diabetes-metabolic', STAT_DM_KW, 'public ambulatory basal analogue inertia juxtaposed affluent private CGM acceleration, dialysis prevalent CKD SGLT2 caution overlays.', '[Kuwait healthcare report](/kuwait-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('qatar-diabetes-market-report', 'qatar', 'Qatar', 'GCC', 'diabetes-metabolic', STAT_DM_QA, 'national screening camps plus football medicine campus lifestyle branding spillovers into adolescent obesity prevention tenders.', '[Qatar healthcare report](/qatar-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('bahrain-diabetes-market-report', 'bahrain', 'Bahrain', 'GCC', 'diabetes-metabolic', STAT_DM_BH, 'compact NHRA dossier interplay with Salmaniya formulary cohesion plus insurer stop‑loss GLP‑1 escalation committees.', '[Bahrain healthcare outlook](/bahrain-healthcare-market-report) • [GCC pharma briefing](/gcc-pharma-market-report-2026).'),
  row('oman-diabetes-market-report', 'oman', 'Oman', 'GCC', 'diabetes-metabolic', STAT_DM_OM, 'rugged geography driving tele‑coach abandonment unless Arabic UX localized beyond machine translation artefacts.', '[Oman healthcare report](/oman-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('egypt-diabetes-market-report', 'egypt', 'Egypt', 'MENA', 'diabetes-metabolic', STAT_DM_EG, 'UHI formulary basal analogue listings plus private chain GLP‑1 premium wards splitting analogue curves.', '[Egypt healthcare report](/egypt-healthcare-market-report) • [Healthcare research hub](/healthcare-market-research).'),

  row('gcc-cardiovascular-market-report', 'gcc', 'GCC', 'GCC', 'cardiovascular', STAT_CV_GCC, 'HFpEF phenotype rise, PCSK9 PA mining, migrant South Asian genotype antiplatelet trade-offs reverberating interventional cath lab scheduling.', '[GCC pharma outlook](/gcc-pharma-market-report-2026) • [Healthcare hub](/healthcare-market-research) • [UAE cardio anchors](/uae-healthcare-market-report).'),
  row('saudi-arabia-cardiovascular-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'cardiovascular', STAT_CV_SA, 'NGHA versus MOH dual procurement interplay, Hajj ACS surge pharmaceuticals stockpiling, Vision 2030 cath lab rollout ladders.', '[Saudi Arabia healthcare briefing](/saudi-arabia-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('uae-cardiovascular-market-report', 'uae', 'United Arab Emirates', 'GCC', 'cardiovascular', STAT_CV_UAE, 'DHA DOH parallel device and drug PA pathways, medical tourism cardiac centre anchoring anticoagulant intensity.', '[UAE healthcare report](/uae-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('kuwait-cardiovascular-market-report', 'kuwait', 'Kuwait', 'GCC', 'cardiovascular', STAT_CV_KW, 'dialysis prevalent populations modulating MRA and SGLT2 adoption guardrails inside MOH algorithm updates.', '[Kuwait healthcare report](/kuwait-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('qatar-cardiovascular-market-report', 'qatar', 'Qatar', 'GCC', 'cardiovascular', STAT_CV_QA, 'Aspetar orthopaedic synergies influencing perioperative thromboprophylaxis protocols interfacing cardiovascular drug PA committees.', '[Qatar healthcare briefing](/qatar-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('bahrain-cardiovascular-market-report', 'bahrain', 'Bahrain', 'GCC', 'cardiovascular', STAT_CV_BH, 'Salmaniya centralisation juxtaposed Arabian Gulf university hospital academic detailing intensity oscillations.', '[Bahrain healthcare briefing](/bahrain-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('oman-cardiovascular-market-report', 'oman', 'Oman', 'GCC', 'cardiovascular', STAT_CV_OM, 'mountain corridor STEMI cath lab arrival drag influencing secondary prevention antidepressant laden polypharmacy adherence counselling throughput.', '[Oman healthcare briefing](/oman-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('egypt-cardiovascular-market-report', 'egypt', 'Egypt', 'MENA', 'cardiovascular', STAT_CV_EG, 'Cairo pollution respiratory overlap confounding CHF readmission analytics unless chart harmonization applied, UHI expansion steering statin intensity.', '[Egypt healthcare outlook](/egypt-healthcare-market-report) • [GCC analogue comparator](/gcc-pharma-market-report-2026).'),

  row('gcc-immunology-biologics-market-report', 'gcc', 'GCC', 'GCC', 'immunology-biologics', STAT_IB_GCC, 'adalimumab biosimilar award waves, JAK thromboembolism insurer medical policy overlays, Ramadan fasting counselling friction on oral switch programmes.', '[GCC pharma outlook](/gcc-pharma-market-report-2026) • [Healthcare hub](/healthcare-market-research) • [Saudi access strategy](/sfda-market-access-strategy-saudi-arabia).'),
  row('saudi-arabia-immunology-biologics-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'immunology-biologics', STAT_IB_SA, 'SFDA biosimilar substitution nuance interplay with clinician confidence surveys, infusion chair Friday prayer scheduling ergonomics influencing IV biologic pacing.', '[Saudi briefing](/saudi-arabia-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('uae-immunology-biologics-market-report', 'uae', 'United Arab Emirates', 'GCC', 'immunology-biologics', STAT_IB_UAE, 'premium ward biologic carve-outs versus mandatory insurance step therapy ladders across emirates.', '[UAE healthcare report](/uae-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('kuwait-immunology-biologics-market-report', 'kuwait', 'Kuwait', 'GCC', 'immunology-biologics', STAT_IB_KW, 'dual channel affluent versus public rheumatology fragmentation biasing analogue persistence extrapolations.', '[Kuwait healthcare report](/kuwait-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('qatar-immunology-biologics-market-report', 'qatar', 'Qatar', 'GCC', 'immunology-biologics', STAT_IB_QA, 'Sidra genomic counselling interplay with rheumatology biologic escalation documentation burdens.', '[Qatar briefing](/qatar-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('bahrain-immunology-biologics-market-report', 'bahrain', 'Bahrain', 'GCC', 'immunology-biologics', STAT_IB_BH, 'rapid NHRA dossier throughput versus smaller infusion centre footprint amortization curvature.', '[Bahrain briefing](/bahrain-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('oman-immunology-biologics-market-report', 'oman', 'Oman', 'GCC', 'immunology-biologics', STAT_IB_OM, 'interior geography TB screening logistical drag extending first biologic initiation clocks versus coastal Muscat precincts.', '[Oman briefing](/oman-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('egypt-immunology-biologics-market-report', 'egypt', 'Egypt', 'MENA', 'immunology-biologics', STAT_IB_EG, 'localized manufacturing biosimilar price caps juxtaposed affluent private payer originator inertia split storytelling.', '[Egypt briefing](/egypt-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),

  row('gcc-respiratory-market-report', 'gcc', 'GCC', 'GCC', 'respiratory', STAT_RP_GCC, 'severe asthma biologic pacing, COPD triple therapy tenders, Hajj airborne transmission contingency packs.', '[GCC pharma outlook](/gcc-pharma-market-report-2026) • [Healthcare hub](/healthcare-market-research).'),
  row('saudi-arabia-respiratory-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'respiratory', STAT_RP_SA, 'Vision tertiary pulmonology expansion, sandstorm exacerbation analogue elasticities anchored MOH wards.', '[Saudi briefing](/saudi-arabia-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('uae-respiratory-market-report', 'uae', 'United Arab Emirates', 'GCC', 'respiratory', STAT_RP_UAE, 'construction dust occupational subsets Dubai corridor, insurer PA triple therapy sequencing.', '[UAE briefing](/uae-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('kuwait-respiratory-market-report', 'kuwait', 'Kuwait', 'GCC', 'respiratory', STAT_RP_KW, 'dust storm clusters plus high tobacco prevalence overlays steering LAMA tenders.', '[Kuwait briefing](/kuwait-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('qatar-respiratory-market-report', 'qatar', 'Qatar', 'GCC', 'respiratory', STAT_RP_QA, 'FIFA legacy sports medicine intertwined athlete asthma programmes influencing ICS perception.', '[Qatar briefing](/qatar-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('bahrain-respiratory-market-report', 'bahrain', 'Bahrain', 'GCC', 'respiratory', STAT_RP_BH, 'causeway commuter pollution overlap plus compact NHRA device plus drug dossier interplay.', '[Bahrain briefing](/bahrain-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('oman-respiratory-market-report', 'oman', 'Oman', 'GCC', 'respiratory', STAT_RP_OM, 'quarry particulate migrant workforce clusters plus mountainous interior inhaler adherence logistics friction.', '[Oman briefing](/oman-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('egypt-respiratory-market-report', 'egypt', 'Egypt', 'MENA', 'respiratory', STAT_RP_EG, 'delta agricultural burning overlays plus UHI formulary ICS scaling.', '[Egypt briefing](/egypt-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),

  row('gcc-rare-diseases-market-report', 'gcc', 'GCC', 'GCC', 'rare-diseases', STAT_RD_GCC, 'genome initiatives, philanthropic bridge programmes, sovereign budget shock collars on ultra‑orphans.', '[GCC pharma outlook](/gcc-pharma-market-report-2026) • [Rare disease SEO pillar](/nf1-pharma-market-research).'),
  row('saudi-arabia-rare-diseases-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'rare-diseases', STAT_RD_SA, 'Saudi Genome newborn screening interplay with compassionate access dossier adjudication velocities.', '[Saudi briefing](/saudi-arabia-healthcare-market-report) • [NF1 intelligence analogue](/nf1-pharma-market-research).'),
  row('uae-rare-diseases-market-report', 'uae', 'United Arab Emirates', 'GCC', 'rare-diseases', STAT_RD_UAE, 'premium ward gene therapy readiness MRI cadence divergence versus MOHAP national screening baselines.', '[UAE briefing](/uae-healthcare-market-report) • [Rare disease analogue](/nf1-pharma-market-research).'),
  row('kuwait-rare-diseases-market-report', 'kuwait', 'Kuwait', 'GCC', 'rare-diseases', STAT_RD_KW, 'Kuwait Cancer Control rare tumour board throughput anchoring lysosomal therapy readiness documentation.', '[Kuwait briefing](/kuwait-healthcare-market-report) • [Rare disease analogue](/nf1-pharma-market-research).'),
  row('oman-rare-diseases-market-report', 'oman', 'Oman', 'GCC', 'rare-diseases', STAT_RD_OM, 'Royal Hospital Muscat genomic counselling queue intervals interfacing philanthropic copay bridges distorting audited persistence telemetry.', '[Oman briefing](/oman-healthcare-market-report) • [Rare disease analogue](/nf1-pharma-market-research).'),
  row('qatar-rare-diseases-market-report', 'qatar', 'Qatar', 'GCC', 'rare-diseases', STAT_RD_QA, 'Sidra precision medicine interplay with sovereign health security warehousing of ultra‑cold gene therapy SKUs.', '[Qatar briefing](/qatar-healthcare-market-report) • [Rare disease analogue](/nf1-pharma-market-research).'),
  row('egypt-rare-diseases-market-report', 'egypt', 'Egypt', 'MENA', 'rare-diseases', STAT_RD_EG, 'UHI ultra‑orphan listing warfare, CCHE 57357 philanthropic bridge programmes, ERT affordability stress amid FX settlement delays, newborn screening expansion versus genetic counsellor throughput deficits in public wards.', '[Egypt healthcare outlook](/egypt-healthcare-market-report) • [NF1 rare disease intelligence](/nf1-pharma-market-research) • [GCC rare disease comparator](/gcc-rare-diseases-market-report).'),

  row('gcc-neurology-cns-market-report', 'gcc', 'GCC', 'GCC', 'neurology-cns', STAT_NR_GCC, 'MS high efficacy escalation governance, migraine CGRP PA sequencing, Alzheimer infusion MRI safety monitoring heterogeneity.', '[GCC pharma briefing](/gcc-pharma-market-report-2026) • [Healthcare hub](/healthcare-market-research).'),
  row('saudi-arabia-neurology-cns-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'neurology-cns', STAT_NR_SA, 'national neuro institutes expansion plus insured PA stacks on DMT outpatient monitoring cadence burdens.', '[Saudi briefing](/saudi-arabia-healthcare-market-report) • [GCC pharma briefing](/gcc-pharma-market-report-2026).'),
  row('uae-neurology-cns-market-report', 'uae', 'United Arab Emirates', 'GCC', 'neurology-cns', STAT_NR_UAE, 'premium electrophysiology lab clustering Dubai Abu Dhabi divergence steering epilepsy adjunct uptake.', '[UAE briefing](/uae-healthcare-market-report) • [GCC pharma briefing](/gcc-pharma-market-report-2026).'),
  row('egypt-neurology-cns-market-report', 'egypt', 'Egypt', 'MENA', 'neurology-cns', STAT_NR_EG, 'Cairo overcrowded outpatient neurology juxtaposed affluent private EEG waitlist compression artefacts.', '[Egypt briefing](/egypt-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('kuwait-neurology-cns-market-report', 'kuwait', 'Kuwait', 'GCC', 'neurology-cns', STAT_NR_KW, 'Ibn Sina and Kuwait Cancer Control neurology referral bridges, MOH DMT monitoring cadence burdens, reinsurer stop‑loss carve‑outs on high‑cost MS biologics, Friday prayer infusion scheduling friction.', '[Kuwait healthcare report](/kuwait-healthcare-market-report) • [GCC neurology comparator](/gcc-neurology-cns-market-report) • [Kuwait market access](/kuwait-market-access-research).'),
  row('qatar-neurology-cns-market-report', 'qatar', 'Qatar', 'GCC', 'neurology-cns', STAT_NR_QA, 'Hamad neuro institute expansion, Sidra epilepsy genomic counselling adjacency, Aspetar concussion protocol spillovers into migraine CGRP PA sequencing, sovereign budget global neurology dossier rehearsals.', '[Qatar healthcare report](/qatar-healthcare-market-report) • [GCC neurology briefing](/gcc-neurology-cns-market-report) • [Qatar market access](/qatar-market-access-research).'),
  row('bahrain-neurology-cns-market-report', 'bahrain', 'Bahrain', 'GCC', 'neurology-cns', STAT_NR_BH, 'Salmaniya centralised neurology queues, NHRA rapid review on DMT safety registries, causeway commuter referral attribution noise into MS escalation governance.', '[Bahrain healthcare report](/bahrain-healthcare-market-report) • [GCC neurology outlook](/gcc-neurology-cns-market-report).'),
  row('oman-neurology-cns-market-report', 'oman', 'Oman', 'GCC', 'neurology-cns', STAT_NR_OM, 'Royal Hospital Muscat electrophysiology throughput, interior governorate referral latency stretching first‑seizure workup intervals, mountainous tele‑neurology adherence gaps unless Arabic UX localized.', '[Oman healthcare report](/oman-healthcare-market-report) • [GCC neurology comparator](/gcc-neurology-cns-market-report).'),

  row('gcc-biosimilars-market-report', 'gcc', 'GCC', 'GCC', 'biosimilars', STAT_BS_GCC, 'trastuzumab and adalimumab tender waves intersecting interchangeable naming confidence asymmetry across ministries.', '[GCC pharma outlook](/gcc-pharma-market-report-2026) • [GCC market access dossier rehearsals](/gcc-market-access-guide).'),
  row('saudi-arabia-biosimilars-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'biosimilars', STAT_BS_SA, 'NUPCO award clustering plus SFDA accelerated generic/biosim corridor interplay with clinician confidence trackers.', '[Saudi briefing](/saudi-arabia-healthcare-market-report) • [Biosimilar launch Saudi analogue](/biosimilar-market-entry-saudi-arabia).'),
  row('uae-biosimilars-market-report', 'uae', 'United Arab Emirates', 'GCC', 'biosimilars', STAT_BS_UAE, 'DHA versus DOH interchangeable naming hesitancy, Cleveland Clinic Abu Dhabi rituximab vial pooling economics, insurer medical policy refresh on adalimumab biosimilar step therapy.', '[UAE healthcare report](/uae-healthcare-market-report) • [GCC biosimilars outlook](/gcc-biosimilars-market-report) • [Biosimilar Saudi comparator](/biosimilar-market-entry-saudi-arabia).'),
  row('kuwait-biosimilars-market-report', 'kuwait', 'Kuwait', 'GCC', 'biosimilars', STAT_BS_KW, 'MOH tender trastuzumab lot awards, dual public‑private rheumatology coding splits inflating payer clawback risk, pharmacist substitution statute ambiguity on insulin glargine ASMP parity claims.', '[Kuwait healthcare report](/kuwait-healthcare-market-report) • [GCC biosimilars briefing](/gcc-biosimilars-market-report).'),
  row('qatar-biosimilars-market-report', 'qatar', 'Qatar', 'GCC', 'biosimilars', STAT_BS_QA, 'Hamad global budget carve‑outs on bevacizumab maintenance, Sidra paediatric filgrastim chair throughput amortization, sovereign warehousing of cold‑chain biosimilar SKUs.', '[Qatar healthcare report](/qatar-healthcare-market-report) • [GCC biosimilars outlook](/gcc-biosimilars-market-report).'),
  row('bahrain-biosimilars-market-report', 'bahrain', 'Bahrain', 'GCC', 'biosimilars', STAT_BS_BH, 'compact NHRA interchangeability dossiers versus Salmaniya infusion footprint constraints, causeway leakage distorting audited substitution counts.', '[Bahrain healthcare report](/bahrain-healthcare-market-report) • [GCC biosimilars comparator](/gcc-biosimilars-market-report).'),
  row('oman-biosimilars-market-report', 'oman', 'Oman', 'GCC', 'biosimilars', STAT_BS_OM, 'Sultan Qaboos University Hospital oncology‑rheumatology indication split coding, interior hospital referral latency on first biosimilar initiation clocks.', '[Oman healthcare report](/oman-healthcare-market-report) • [GCC biosimilars briefing](/gcc-biosimilars-market-report).'),
  row('egypt-biosimilars-market-report', 'egypt', 'Egypt', 'MENA', 'biosimilars', STAT_BS_EG, 'localized manufacturing amortization juxtaposed multinational originator clinician loyalty networks inside Cairo elite wards bifurcating audited substitution telemetry.', '[Egypt briefing](/egypt-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),

  row('gcc-digital-health-market-report', 'gcc', 'GCC', 'GCC', 'digital-health', STAT_DH_GCC, 'RPM pilots, cybersecurity residency friction cloud imaging harmonization delays, insurer pilot budget churn.', '[GCC pharma outlook](/gcc-pharma-market-report-2026) • [Healthcare hub](/healthcare-market-research).'),
  row('saudi-arabia-digital-health-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'digital-health', STAT_DH_SA, 'NEOM healthtech sandboxes interplay with SFDA SaMD dossier reciprocity doctrines accelerating digital therapeutics dossier pilots.', '[Saudi briefing](/saudi-arabia-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('uae-digital-health-market-report', 'uae', 'United Arab Emirates', 'GCC', 'digital-health', STAT_DH_UAE, 'DHA NABIDH interoperability mandates, DOH value‑based RPM diabetes bundles, AI chest X‑ray triage false‑positive governance in Dubai emergency wards, teledermatology structured photography protocols.', '[UAE healthcare report](/uae-healthcare-market-report) • [GCC digital health outlook](/gcc-digital-health-market-report) • [Pharma research Dubai](/pharmaceutical-market-research-dubai).'),
  row('kuwait-digital-health-market-report', 'kuwait', 'Kuwait', 'GCC', 'digital-health', STAT_DH_KW, 'MOH cybersecurity residency reviews delaying cloud PACS harmonization, affluent private CGM app pilots versus public hospital RPM budget caps.', '[Kuwait healthcare report](/kuwait-healthcare-market-report) • [GCC digital health briefing](/gcc-digital-health-market-report).'),
  row('qatar-digital-health-market-report', 'qatar', 'Qatar', 'GCC', 'digital-health', STAT_DH_QA, 'Sidra genomics cloud adjacency, Hamad tumour board virtual synchronicity blocked by zero‑trust imaging repositories, FIFA sports medicine digital therapeutics pilots.', '[Qatar healthcare report](/qatar-healthcare-market-report) • [GCC digital health comparator](/gcc-digital-health-market-report).'),
  row('bahrain-digital-health-market-report', 'bahrain', 'Bahrain', 'GCC', 'digital-health', STAT_DH_BH, 'NHRA SaMD fast‑track juxtaposed Salmaniya legacy EMR integration debt, causeway commuter telehealth attribution noise.', '[Bahrain healthcare report](/bahrain-healthcare-market-report) • [GCC digital health outlook](/gcc-digital-health-market-report).'),
  row('oman-digital-health-market-report', 'oman', 'Oman', 'GCC', 'digital-health', STAT_DH_OM, 'interior governorate connectivity gaps breaking Arabic dialect NLP accuracy in chatbot adherence programmes, Royal Hospital Muscat cloud imaging pilot scale‑up.', '[Oman healthcare report](/oman-healthcare-market-report) • [GCC digital health briefing](/gcc-digital-health-market-report).'),
  row('egypt-digital-health-market-report', 'egypt', 'Egypt', 'MENA', 'digital-health', STAT_DH_EG, 'UHI digital formulary pilots, Cleopatra tele‑oncology adherence dashboards, fintech‑linked chronic disease wallets in Cairo versus Upper Egypt connectivity deficits.', '[Egypt healthcare outlook](/egypt-healthcare-market-report) • [GCC digital health comparator](/gcc-digital-health-market-report).'),

  row('gcc-vaccines-market-report', 'gcc', 'GCC', 'GCC', 'vaccines', STAT_VC_GCC, 'conjugate tenders bundling syringe premiums, Hajj influenza surge logistics, meningococcal pilgrimage demand inelasticities.', '[GCC pharma outlook](/gcc-pharma-market-report-2026) • [Healthcare hub](/healthcare-market-research).'),
  row('saudi-arabia-vaccines-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'vaccines', STAT_VC_SA, 'Vision 2030 immunization scale‑up, Hajj meningococcal surge procurement, SFDA conjugate tender bundling, MOH school mandate enforcement heterogeneity across regions.', '[Saudi Arabia healthcare briefing](/saudi-arabia-healthcare-market-report) • [GCC vaccines outlook](/gcc-vaccines-market-report) • [GCC pharma briefing](/gcc-pharma-market-report-2026).'),
  row('uae-vaccines-market-report', 'uae', 'United Arab Emirates', 'GCC', 'vaccines', STAT_VC_UAE, 'school mandates pilot heterogeneity among emirates, private international school HPV uptake gradients, MOHPA federal labeling harmonization interplay.', '[UAE briefing](/uae-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('kuwait-vaccines-market-report', 'kuwait', 'Kuwait', 'GCC', 'vaccines', STAT_VC_KW, 'MOH childhood schedule updates, influenza seasonal southern hemisphere antigen selection, private clinic HPV premium uptake among affluent households.', '[Kuwait healthcare report](/kuwait-healthcare-market-report) • [GCC vaccines comparator](/gcc-vaccines-market-report).'),
  row('qatar-vaccines-market-report', 'qatar', 'Qatar', 'GCC', 'vaccines', STAT_VC_QA, 'Hamad pilgrimage worker vaccination campaigns, RSV neonatal allotment queuing, sovereign cold‑chain warehousing for conjugate lots.', '[Qatar healthcare report](/qatar-healthcare-market-report) • [GCC vaccines briefing](/gcc-vaccines-market-report).'),
  row('bahrain-vaccines-market-report', 'bahrain', 'Bahrain', 'GCC', 'vaccines', STAT_VC_BH, 'NHRA rapid conjugate reviews, Salmaniya school mandate cohesion, causeway commuter vaccination attribution challenges.', '[Bahrain healthcare report](/bahrain-healthcare-market-report) • [GCC vaccines outlook](/gcc-vaccines-market-report).'),
  row('oman-vaccines-market-report', 'oman', 'Oman', 'GCC', 'vaccines', STAT_VC_OM, 'Muscat littoral dengue vector surveillance speculation, interior outreach midwife counselling minute deficits, meningococcal Hajj worker bundles.', '[Oman healthcare report](/oman-healthcare-market-report) • [GCC vaccines comparator](/gcc-vaccines-market-report).'),
  row('egypt-vaccines-market-report', 'egypt', 'Egypt', 'MENA', 'vaccines', STAT_VC_EG, 'UHI expanded childhood immunization, HPV gender‑neutral school programme cultural gatekeepers in rural Upper Egypt, Cairo international school rapid uptake parallels.', '[Egypt healthcare outlook](/egypt-healthcare-market-report) • [GCC vaccines briefing](/gcc-vaccines-market-report).'),

  row('gcc-dermatology-market-report', 'gcc', 'GCC', 'GCC', 'dermatology', STAT_DR_GCC, 'biologic step therapy photographic PA burdens, chlorine pool eczema flares among tourism corridors, topical JAK import grey market artefacts.', '[GCC pharma briefing](/gcc-pharma-market-report-2026) • [Healthcare hub](/healthcare-market-research).'),
  row('saudi-arabia-dermatology-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'dermatology', STAT_DR_SA, 'Vision 2030 dermatology centre rollout, NUPCO biologic step therapy photo‑PA documentation, desert climate psoriasis flare counselling, SFDA topical JAK import scrutiny.', '[Saudi Arabia healthcare briefing](/saudi-arabia-healthcare-market-report) • [GCC dermatology outlook](/gcc-dermatology-market-report).'),
  row('uae-dermatology-market-report', 'uae', 'United Arab Emirates', 'GCC', 'dermatology', STAT_DR_UAE, 'Dubai tourism chlorine pool eczema clusters, dupilumab adolescent atopic programmes in international schools, DOH versus DHA biologic PA divergence.', '[UAE healthcare report](/uae-healthcare-market-report) • [GCC dermatology briefing](/gcc-dermatology-market-report).'),
  row('kuwait-dermatology-market-report', 'kuwait', 'Kuwait', 'GCC', 'dermatology', STAT_DR_KW, 'affluent private psoriasis biologic acceleration versus public hospital topical inertia, MOH photographic prior authorization burdens on moderate disease segments.', '[Kuwait healthcare report](/kuwait-healthcare-market-report) • [GCC dermatology comparator](/gcc-dermatology-market-report).'),
  row('qatar-dermatology-market-report', 'qatar', 'Qatar', 'GCC', 'dermatology', STAT_DR_QA, 'Hamad hidradenitis adalimumab surgical adjacency packs, Sidra adolescent atopic school bullying counselling overlays undervalued in pricing committees.', '[Qatar healthcare report](/qatar-healthcare-market-report) • [GCC dermatology outlook](/gcc-dermatology-market-report).'),
  row('bahrain-dermatology-market-report', 'bahrain', 'Bahrain', 'GCC', 'dermatology', STAT_DR_BH, 'compact NHRA dossier throughput on dupilumab, Salmaniya chronic urticaria omalizumab dosing interval optimization, causeway commuter rosacea heat flare clusters.', '[Bahrain healthcare report](/bahrain-healthcare-market-report) • [GCC dermatology briefing](/gcc-dermatology-market-report).'),
  row('oman-dermatology-market-report', 'oman', 'Oman', 'GCC', 'dermatology', STAT_DR_OM, 'outdoor labourer Gulf heat rosacea and eczema flare linkages, interior hospital teledermatology structured photography protocol adoption gaps.', '[Oman healthcare report](/oman-healthcare-market-report) • [GCC dermatology comparator](/gcc-dermatology-market-report).'),
  row('egypt-dermatology-market-report', 'egypt', 'Egypt', 'MENA', 'dermatology', STAT_DR_EG, 'Cairo elite private biologic corridors versus UHI topical JAK listing warfare, rural cultural gatekeepers delaying HPV‑adjacent skin programme narratives, grey market EU passenger import distortions.', '[Egypt healthcare outlook](/egypt-healthcare-market-report) • [GCC dermatology briefing](/gcc-dermatology-market-report).'),

  row('turkey-oncology-market-report', 'turkey', 'Turkey', 'Europe / MENA', 'oncology', STAT_ONC_TR, 'TİTCK approval reciprocity interplay with SGK budgeting lag, Aegean trial investigator bandwidth elasticity, biosim export constraints episodically rewiring landed net parallels.', '[Turkey healthcare briefing](/turkey-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('turkey-diabetes-market-report', 'turkey', 'Turkey', 'Europe / MENA', 'diabetes-metabolic', STAT_DM_TR, 'young adult metabolic syndrome clusters Istanbul versus Anatolia referral gravity plus SGK versus private supplemental GLP‑1 divergence.', '[Turkey healthcare briefing](/turkey-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // Turkey expansion — 4 additional therapy areas
  row('turkey-cardiovascular-market-report', 'turkey', 'Turkey', 'Europe / MENA', 'cardiovascular', STAT_CV_TR, 'SGK PCSK9 inhibitor PA criteria rigidity juxtaposed private hospital premium cardiology reimbursement supplement riders, medical tourism cardiac surgery margins influencing device and drug bundling decisions.', '[Turkey healthcare briefing](/turkey-healthcare-market-report) • [Turkey medical devices](/turkey-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('turkey-immunology-biologics-market-report', 'turkey', 'Turkey', 'Europe / MENA', 'immunology-biologics', STAT_IB_TR, 'adalimumab biosimilar SGK substitution mandate interplay with rheumatologist brand loyalty panels, JAK inhibitor SGK step-therapy criteria oscillations, infusion chair Friday prayer scheduling friction.', '[Turkey healthcare briefing](/turkey-healthcare-market-report) • [GCC biosimilars analogue](/gcc-biosimilars-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('turkey-respiratory-market-report', 'turkey', 'Turkey', 'Europe / MENA', 'respiratory', STAT_RP_TR, 'Istanbul air quality exacerbation clusters driving COPD triple therapy SGK criteria reforms, severe asthma biologic SGK PA stack complexity versus private insurer supplemental bridge.', '[Turkey healthcare briefing](/turkey-healthcare-market-report) • [GCC respiratory analogue](/gcc-respiratory-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('turkey-rare-diseases-market-report', 'turkey', 'Turkey', 'Europe / MENA', 'rare-diseases', STAT_RD_TR, 'SGK ultra-orphan compassionate access adjudication windows, gene therapy cold chain Istanbul hub ambitions, academic medical centre rare disease centre excellence designations driving patient identification acceleration.', '[Turkey healthcare briefing](/turkey-healthcare-market-report) • [GCC rare diseases analogue](/gcc-rare-diseases-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // UK — 5 therapy areas
  row('uk-oncology-market-report', 'uk', 'United Kingdom', 'Europe', 'oncology', STAT_ONC_UK, 'NHS England Cancer Drugs Fund real-world evidence collection obligations, NICE HST accelerated oncology pathways, Innovative Medicines Fund bridging access dynamics, ICB formulary implementation lag variation.', '[UK healthcare briefing](/uk-healthcare-market-report) • [UK medical devices report](/uk-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('uk-diabetes-market-report', 'uk', 'United Kingdom', 'Europe', 'diabetes-metabolic', STAT_DM_UK, 'NHS England GLP-1 prescribing guidance post-NICE TA, tirzepatide vs semaglutide head-to-head formulary positioning, ICB budget impact carve-outs, NHS England obesity management programme device and drug bundling.', '[UK healthcare briefing](/uk-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('uk-cardiovascular-market-report', 'uk', 'United Kingdom', 'Europe', 'cardiovascular', STAT_CV_UK, 'NICE heart failure guideline SGLT2 expansion, PCSK9 inhibitor primary prevention NICE threshold deliberations, ICS-level integrated care cardiovascular network formulary synchronisation.', '[UK healthcare briefing](/uk-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('uk-immunology-biologics-market-report', 'uk', 'United Kingdom', 'Europe', 'immunology-biologics', STAT_IB_UK, 'NHS commercial framework biosimilar mandatory switch programmes for adalimumab and etanercept, NICE TA technology appraisal outcomes for IL-17/23 inhibitors, JAK inhibitor MHRA safety review prescribing restrictions.', '[UK healthcare briefing](/uk-healthcare-market-report) • [GCC immunology analogue](/gcc-immunology-biologics-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('uk-respiratory-market-report', 'uk', 'United Kingdom', 'Europe', 'respiratory', STAT_RP_UK, 'NHS England severe asthma biologic ICS-level prescribing hub network structure, NICE dupilumab and mepolizumab TA outcomes, COPD triple therapy formulary uptake variation across ICBs.', '[UK healthcare briefing](/uk-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // Germany — 5 therapy areas
  row('germany-oncology-market-report', 'germany', 'Germany', 'Europe', 'oncology', STAT_ONC_DE, 'AMNOG early benefit assessment G-BA oncology dossier major vs considerable benefit stratification, hospital NUB payment applications for novel CAR-T and ADC therapies, IQWiG comparative effectiveness overlay.', '[Germany healthcare briefing](/germany-healthcare-market-report) • [Germany medical devices report](/germany-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('germany-diabetes-market-report', 'germany', 'Germany', 'Europe', 'diabetes-metabolic', STAT_DM_DE, 'GKV GLP-1 prescribing guideline cascade interplay with PKV premium tier tirzepatide uptake, AMNOG cardiovascular outcome benefit assessment leverage for SGLT2 extension indications, AOK/TK rebate contract positioning.', '[Germany healthcare briefing](/germany-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('germany-cardiovascular-market-report', 'germany', 'Germany', 'Europe', 'cardiovascular', STAT_CV_DE, 'G-BA heart failure guideline alignment SGLT2/MRA combination benefit assessment, PCSK9 inhibitor GKV rebate contract dynamics, structural heart disease hospital DRG NUB supplement negotiations for TAVI/MitraClip.', '[Germany healthcare briefing](/germany-healthcare-market-report) • [Germany medical devices report](/germany-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('germany-immunology-biologics-market-report', 'germany', 'Germany', 'Europe', 'immunology-biologics', STAT_IB_DE, 'GKV biosimilar mandatory substitution framework for adalimumab, AMNOG benefit assessment for IL-17/23 and JAK inhibitors, rebate contract (Rabattvertrag) bidding dynamics among SHI funds for biologic tenders.', '[Germany healthcare briefing](/germany-healthcare-market-report) • [GCC immunology analogue](/gcc-immunology-biologics-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('germany-respiratory-market-report', 'germany', 'Germany', 'Europe', 'respiratory', STAT_RP_DE, 'AMNOG COPD triple therapy fixed-dose combination benefit assessment, dupilumab and mepolizumab G-BA considerable benefit decisions, GKV respiratory rebate contract bundling dynamics with generics substitution competition.', '[Germany healthcare briefing](/germany-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // India — 4 therapy areas
  row('india-oncology-market-report', 'india', 'India', 'Asia-Pacific', 'oncology', STAT_ONC_IN, 'CDSCO priority review oncology pathway, NPPA DPCO scheduled medicine pricing impact on branded generic oncology economics, PM-JAY hospital empanelment oncology package rates, Apollo/Fortis/Tata Cancer Centre private premium tier.', '[India healthcare briefing](/india-healthcare-market-report) • [India medical devices report](/india-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('india-diabetes-market-report', 'india', 'India', 'Asia-Pacific', 'diabetes-metabolic', STAT_DM_IN, 'PM-JAY insulin subsidy dynamics, NPPA insulin pricing regulatory oversight, GLP-1 premium tier private hospital bifurcation, Jan Aushadhi generic store biosimilar insulin penetration anchoring net pricing floors.', '[India healthcare briefing](/india-healthcare-market-report) • [GCC diabetes analogue](/gcc-diabetes-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('india-cardiovascular-market-report', 'india', 'India', 'Asia-Pacific', 'cardiovascular', STAT_CV_IN, 'DPCO statin and antihypertensive price ceiling compliance requirements, NPPA PCSK9 pricing watch, cardiac surgery PM-JAY package rate negotiation dynamics, private cardiac centre (Narayana Health, Fortis Heart) premium drug formulary.', '[India healthcare briefing](/india-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('india-immunology-biologics-market-report', 'india', 'India', 'Asia-Pacific', 'immunology-biologics', STAT_IB_IN, 'Local biosimilar champion competition (Biocon, Dr Reddy\'s, Intas) versus originator premium ward positioning, CDSCO biologic registration bridging study requirements, PM-JAY rheumatology indication coverage criteria gaps.', '[India healthcare briefing](/india-healthcare-market-report) • [GCC biosimilars analogue](/gcc-biosimilars-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // China — 4 therapy areas
  row('china-oncology-market-report', 'china', 'China', 'Asia-Pacific', 'oncology', STAT_ONC_CN, 'NMPA Breakthrough Therapy Designation oncology pipeline acceleration, NHSA NRDL annual oncology negotiation price cut magnitudes, VBP biosimilar trastuzumab/bevacizumab impact, provincial supplemental Huimin insurance premium oncology tier.', '[China healthcare briefing](/china-healthcare-market-report) • [China medical devices report](/china-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('china-diabetes-market-report', 'china', 'China', 'Asia-Pacific', 'diabetes-metabolic', STAT_DM_CN, 'VBP insulin centralized procurement 70–80% price reduction aftermath, GLP-1 agonist NRDL negotiation rounds, SGLT2 heart failure extension NRDL inclusion, digital diabetes management platform integration with hospital prescription workflows.', '[China healthcare briefing](/china-healthcare-market-report) • [GCC diabetes analogue](/gcc-diabetes-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('china-cardiovascular-market-report', 'china', 'China', 'Asia-Pacific', 'cardiovascular', STAT_CV_CN, 'NHSA NRDL cardiovascular drug negotiation outcomes, VBP coronary stent centralized tender price collapse impact on device and adjunct drug economics, NMPA PCSK9 inhibitor domestic competitor regulatory pipeline.', '[China healthcare briefing](/china-healthcare-market-report) • [China medical devices report](/china-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('china-immunology-biologics-market-report', 'china', 'China', 'Asia-Pacific', 'immunology-biologics', STAT_IB_CN, 'NRDL adalimumab originator versus biosimilar negotiation dynamics post-VBP signal, IL-17/23 inhibitor NRDL inclusion cycles, JAK inhibitor NMPA post-marketing safety commitment requirements, domestic biologic champion (Hengrui, CSPC, 3SBio) competition.', '[China healthcare briefing](/china-healthcare-market-report) • [GCC immunology analogue](/gcc-immunology-biologics-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // Japan — 3 therapy areas
  row('japan-oncology-market-report', 'japan', 'Japan', 'Asia-Pacific', 'oncology', STAT_ONC_JP, 'PMDA Sakigake designation oncology fast-track dynamics, NHI biannual price revision oncology category price erosion modelling, MHLW conditional early approval post-market confirmatory study obligations, CAR-T and ADC world-first approval positioning.', '[Japan healthcare briefing](/japan-healthcare-market-report) • [Japan medical devices report](/japan-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('japan-diabetes-market-report', 'japan', 'Japan', 'Asia-Pacific', 'diabetes-metabolic', STAT_DM_JP, 'NHI price revision SGLT2/GLP-1 biannual cut projection modelling, tirzepatide MHLW approval timeline, elderly population polypharmacy interaction surveillance PMDA post-market commitments, Japanese-specific DPP-4 prescribing dominance transition curve.', '[Japan healthcare briefing](/japan-healthcare-market-report) • [GCC diabetes analogue](/gcc-diabetes-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('japan-cardiovascular-market-report', 'japan', 'Japan', 'Asia-Pacific', 'cardiovascular', STAT_CV_JP, 'MHLW PCSK9 inhibitor NHI listing and price revision trajectory, heart failure SGLT2/ARNi combination NHI formulary inclusion, Japan-specific hypertension prescribing patterns calcium channel blocker dominance transition dynamics.', '[Japan healthcare briefing](/japan-healthcare-market-report) • [Japan medical devices report](/japan-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // USA — 4 therapy areas
  row('usa-oncology-market-report', 'usa', 'United States', 'Americas', 'oncology', STAT_ONC_US, 'IRA Medicare drug negotiation oncology candidate selection impact, FDA Breakthrough Therapy/Accelerated Approval oncology pipeline velocity, GPO/IDN formulary pull-through dynamics, PBM rebate contract biosimilar oncology trastuzumab/bevacizumab tier positioning.', '[USA healthcare briefing](/usa-healthcare-market-report) • [USA medical devices report](/usa-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('usa-diabetes-market-report', 'usa', 'United States', 'Americas', 'diabetes-metabolic', STAT_DM_US, 'GLP-1/GIP agonist market Ozempic/Wegovy/Mounjaro/Zepbound tier war, IRA insulin price cap Medicare $35 implementation impact, PBM formulary exclusion list GLP-1 rebate leverage, obesity indication CMS Medicare coverage expansion deliberations.', '[USA healthcare briefing](/usa-healthcare-market-report) • [GCC diabetes analogue](/gcc-diabetes-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('usa-cardiovascular-market-report', 'usa', 'United States', 'Americas', 'cardiovascular', STAT_CV_US, 'IRA PCSK9 inhibitor Medicare negotiation list inclusion probability, FDA SGLT2 heart failure label expansion competitive dynamics, GPO Vizient/Premier cardiovascular device and drug bundled contract evolution, ACC/AHA guideline update formulary pull-through velocity.', '[USA healthcare briefing](/usa-healthcare-market-report) • [USA medical devices report](/usa-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('usa-immunology-biologics-market-report', 'usa', 'United States', 'Americas', 'immunology-biologics', STAT_IB_US, 'Humira biosimilar wave commercial impact (Hadlima, Hyrimoz, Cyltezo, Yusimry) net price erosion modelling, IRA biologic negotiation 13-year exclusivity threshold implications, JAK inhibitor FDA safety label black box prescribing cascade, IL-17/23 market share dynamics psoriasis/IBD.', '[USA healthcare briefing](/usa-healthcare-market-report) • [GCC biosimilars analogue](/gcc-biosimilars-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // Brazil — 3 therapy areas
  row('brazil-oncology-market-report', 'brazil', 'Brazil', 'Americas', 'oncology', STAT_ONC_BR, 'CONITEC HTA oncology PCDT protocol incorporation timelines, ANVISA priority review oncology pathways, SUS high-cost drug component oncology coverage expansion pressures, Sírio-Libanês/Albert Einstein private tier premium oncology drug access.', '[Brazil healthcare briefing](/brazil-healthcare-market-report) • [Brazil medical devices report](/brazil-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('brazil-diabetes-market-report', 'brazil', 'Brazil', 'Americas', 'diabetes-metabolic', STAT_DM_BR, 'CONITEC GLP-1 agonist SUS incorporation deliberation timeline, CMED GLP-1 maximum price adjustment category, ANVISA regulatory fast track for combination products, Raia Drogasil pharmacy chain generic/biosimilar insulin substitution dynamics.', '[Brazil healthcare briefing](/brazil-healthcare-market-report) • [GCC diabetes analogue](/gcc-diabetes-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('brazil-cardiovascular-market-report', 'brazil', 'Brazil', 'Americas', 'cardiovascular', STAT_CV_BR, 'CONITEC PCSK9 SUS incorporation economic analysis threshold constraints, DPVAT accident insurance cardiovascular procedure coverage, InCor/UNIFESP/UERJ academic cardiovascular centre clinical trial investigator bandwidth.', '[Brazil healthcare briefing](/brazil-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // South Korea — 3 therapy areas
  row('south-korea-oncology-market-report', 'south-korea', 'South Korea', 'Asia-Pacific', 'oncology', STAT_ONC_KR, 'HIRA risk-sharing agreement outcome-based payment model negotiations for CAR-T and ADC therapies, MFDS conditional approval post-market confirmatory study obligations, Samsung Medical Centre/Asan Medical Centre KOL investigator panel dynamics.', '[South Korea healthcare briefing](/south-korea-healthcare-market-report) • [South Korea medical devices report](/south-korea-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('south-korea-diabetes-market-report', 'south-korea', 'South Korea', 'Asia-Pacific', 'diabetes-metabolic', STAT_DM_KR, 'NHIS GLP-1/SGLT2 formulary criteria step-therapy requirement stringency, HIRA real-world evidence data linkage for diabetes drug outcome monitoring, Celltrion/Hanmi biosimilar insulin competition dynamics in NHIS procurement.', '[South Korea healthcare briefing](/south-korea-healthcare-market-report) • [GCC diabetes analogue](/gcc-diabetes-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('south-korea-cardiovascular-market-report', 'south-korea', 'South Korea', 'Asia-Pacific', 'cardiovascular', STAT_CV_KR, 'NHIS PCSK9 inhibitor selective listing criteria scope, HIRA biannual drug utilization review cardiovascular outcome monitoring obligations, Samsung Biologics biosimilar cardiovascular monoclonal pipeline GKV/NHIS parallel filing.', '[South Korea healthcare briefing](/south-korea-healthcare-market-report) • [South Korea medical devices report](/south-korea-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // Australia — 2 therapy areas
  row('australia-oncology-market-report', 'australia', 'Australia', 'Asia-Pacific', 'oncology', STAT_ONC_AU, 'PBAC cost-effectiveness threshold end-of-life weighting oncology modelling, MBS MSAC genomic testing new service assessment, Life-Saving Drugs Programme gene therapy inclusion deliberations, Peter MacCallum/Royal Adelaide/Chris O\'Brien Lifehouse KOL oncology ecosystem.', '[Australia healthcare briefing](/australia-healthcare-market-report) • [Australia medical devices report](/australia-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('australia-diabetes-market-report', 'australia', 'Australia', 'Asia-Pacific', 'diabetes-metabolic', STAT_DM_AU, 'PBS tirzepatide/semaglutide PBAC cost-effectiveness submission modelling, CGM MBS item number inclusion for Type 2 diabetes PBAC deliberations, Diabetes Australia real-world outcomes data integration into PBAC resubmission dossiers.', '[Australia healthcare briefing](/australia-healthcare-market-report) • [GCC diabetes analogue](/gcc-diabetes-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // Singapore — 2 therapy areas
  row('singapore-oncology-market-report', 'singapore', 'Singapore', 'Asia-Pacific', 'oncology', STAT_ONC_SG, 'ACE HTA cost-effectiveness NCCS/SGH formulary oncology deliberations, MOH Medifund exceptional assistance oncology subsidy for lower-income patients, medical tourism premium oncology private hospital (Gleneagles, Mount Elizabeth) international patient pricing.', '[Singapore healthcare briefing](/singapore-healthcare-market-report) • [Singapore medical devices report](/singapore-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('singapore-diabetes-market-report', 'singapore', 'Singapore', 'Asia-Pacific', 'diabetes-metabolic', STAT_DM_SG, 'MOH Chronic Disease Management Programme (CDMP) Medisave withdrawal eligibility for GLP-1/SGLT2, ACE HTA tirzepatide cost-effectiveness evaluation, SingHealth cluster standardised formulary versus private hospital premium tier dynamics.', '[Singapore healthcare briefing](/singapore-healthcare-market-report) • [GCC diabetes analogue](/gcc-diabetes-market-report) • [Healthcare hub](/healthcare-market-research).'),

  // Canada — 1 therapy area
  row('canada-oncology-market-report', 'canada', 'Canada', 'Americas', 'oncology', STAT_ONC_CA, 'CADTH pan-Canadian Oncology Drug Review (pCODR) recommendation timelines, pCPA negotiation confidential net price outcomes, provincial formulary implementation lag variation (Ontario ODAC vs BC Cancer), provincial catastrophic drug programme coverage gaps for high-cost cell therapies.', '[Canada healthcare briefing](/canada-healthcare-market-report) • [Canada medical devices report](/canada-medical-devices-market-report) • [Healthcare hub](/healthcare-market-research).'),
];

function titleFor(spec: SpecRow) {
  return `${spec.market} ${therapyMeta(spec.therapySlug).name} Market Report 2026`;
}

function metaDescriptionFor(spec: SpecRow, title: string) {
  const [v1, , v2] = spec.stats;
  const base = `${title}: ${therapyMeta(spec.therapySlug).name} sized near ${v1} in 2026 toward ${v2} by decade-end covering ${MARKET_CONTENT[spec.marketSlug].regulatoryBody.split('•')[0].trim()} registration, payer access, tenders, clinician adoption ladders.`;
  return base.length > 165 ? `${base.slice(0, 162)}…` : base;
}

function metaTitleFor(title: string) {
  let t = `${title} | BioNixus`;
  if (t.length > 65) t = `${title.slice(0, 54)}… | BioNixus`;
  return t;
}

function fitWordRange(text: string, min: number, max: number): string {
  const pad =
    'BioNixus reconciles ministry tender gazettes, insurer prior-authorization rulebooks, and hospital consumption analogue panels before leadership sign-off.';
  let words = text.trim().replace(/\s+/g, ' ').split(/\s+/).filter(Boolean);
  let guard = 0;
  while (words.length < min && guard < 6) {
    words = words.concat(pad.split(/\s+/));
    guard += 1;
  }
  if (words.length > max) {
    words = words.slice(0, max);
    const last = words[words.length - 1] ?? '';
    if (last.endsWith(',') || last.endsWith(';')) words[words.length - 1] = last.slice(0, -1);
    if (!words[words.length - 1]?.endsWith('.')) words[words.length - 1] += '.';
  }
  return words.join(' ');
}

function buildFieldIntelligenceParagraph(
  spec: SpecRow,
  therapy: (typeof THERAPY_AREA_CONTENT)[keyof typeof THERAPY_AREA_CONTENT],
  market: (typeof MARKET_CONTENT)[keyof typeof MARKET_CONTENT],
): string {
  const reg = market.regulatoryBody.split('•')[0]?.trim() ?? market.regulatoryBody;
  const raw = [
    `BioNixus field intelligence for ${spec.market} ${therapy.name} maps ${spec.sum1Tail}`,
    therapy.overviewParagraph.split('\n\n')[0] ?? therapy.overviewParagraph,
    market.payerLandscape.split('\n\n')[0] ?? market.payerLandscape,
    `Regulatory and procurement teams should align dossier sequencing with ${reg} pharmacovigilance, bilingual labelling, and tender award calendars before scaling medical affairs or access investments.`,
    `Scenario planning bands incorporate FX-linked net price stress, pilgrimage seasonal inpatient displacement, and multinational pricing governance ripple effects—reconciled against EphMRA / BHBIA governance and GDPR-aligned HCP outreach.`,
    spec.marketSlug === 'saudi-arabia'
      ? 'Saudi Arabia–specific signals include NUPCO award cyclicality, Vision 2030 tertiary expansion, Saudi Genome tumour-board adoption, and insured-population prior-authorization intensity that can outpace EU analogue curves.'
      : '',
  ].join(' ');
  return fitWordRange(raw, 280, 400);
}

function buildCommercialOutlookParagraph(
  spec: SpecRow,
  therapy: (typeof THERAPY_AREA_CONTENT)[keyof typeof THERAPY_AREA_CONTENT],
  market: (typeof MARKET_CONTENT)[keyof typeof MARKET_CONTENT],
): string {
  const clinicalSecond = therapy.clinicalLandscape.split('\n\n')[1] ?? therapy.menaMarketDynamics;
  const raw = [
    `Commercial outlook — ${spec.market} ${therapy.name}: ${spec.sum1Tail}`,
    clinicalSecond,
    `Leadership teams should stress-test uptake against ${market.name} payer refresh cycles, distributor cold-chain SLAs, and tender award cadence before committing medical affairs or access headcount.`,
  ].join(' ');
  return fitWordRange(raw, 140, 175);
}

function buildMethodologyParagraph(
  spec: SpecRow,
  therapy: (typeof THERAPY_AREA_CONTENT)[keyof typeof THERAPY_AREA_CONTENT],
  market: (typeof MARKET_CONTENT)[keyof typeof MARKET_CONTENT],
): string {
  const raw = [
    therapy.overviewParagraph,
    therapy.menaMarketDynamics,
    market.regulatoryOverview,
    `BioNixus documents ${spec.market} ${therapy.name} decisions with EphMRA-compliant qualitative boards, GDPR-aligned HCP outreach, bilingual survey instruments, tender monitoring, and hospital consumption analogue reconciliation before executive workshops.`,
  ].join(' ');
  return fitWordRange(raw, 230, 290);
}

function assembleEntry(spec: SpecRow): Omit<ReportEntry, 'relatedSlugs'> {
  const th = therapyMeta(spec.therapySlug);
  const title = titleFor(spec);
  const therapy = THERAPY_AREA_CONTENT[spec.therapySlug];
  const market = MARKET_CONTENT[spec.marketSlug];
  const summaryPara1Raw = `${spec.market}’s pharmaceutical landscape for ${th.name} in 2026 is shaped by centralized procurement pacing, clinician adoption ladders, payer prior‑authorization granularity, genome or precision medicine adjacency where relevant, pilgrimage seasonal inpatient displacement artefacts, migrant workforce insurance fragmentation, hydrocarbon‑linked fiscal collars, IMF macro‑sensitivity overlays, tertiary expansion cadence—all triangulated in BioNixus longitudinal analogue panels. Highlights include ${spec.sum1Tail}`;
  const summaryPara1 = fitWordRange(summaryPara1Raw, 80, 120);
  const statSummaryLine = `${title} benchmarks ${therapy.name.toLowerCase()} revenue potential near ${spec.stats[0]} (${spec.stats[1]}) in 2026, trending toward roughly ${spec.stats[2]} (${spec.stats[3]}) by 2030, implying compounded annual expansion near ${spec.stats[4]} (${spec.stats[5]}).`;
  const faqs = buildHealthcareFaqs({
    marketName: spec.market,
    marketSlug: spec.marketSlug,
    therapyName: th.name,
    therapySlug: spec.therapySlug,
    statSummaryLine,
    therapy,
    market,
  });
  const summaryPara2 = fitWordRange(`Cross‑programme linkage: ${spec.sum2Context}`, 60, 90);
  const fieldIntelligenceParagraph = buildFieldIntelligenceParagraph(spec, therapy, market);
  const commercialOutlookParagraph = buildCommercialOutlookParagraph(spec, therapy, market);
  const methodologyParagraph = buildMethodologyParagraph(spec, therapy, market);
  const publishedDate = '2026-05-27';
  return {
    slug: spec.slug,
    title,
    metaTitle: metaTitleFor(title),
    metaDescription: metaDescriptionFor(spec, title),
    market: spec.market,
    marketSlug: spec.marketSlug,
    region: spec.region,
    therapyArea: th.name,
    therapyAreaSlug: th.slug,
    stat1Value: spec.stats[0],
    stat1Label: spec.stats[1],
    stat2Value: spec.stats[2],
    stat2Label: spec.stats[3],
    stat3Value: spec.stats[4],
    stat3Label: spec.stats[5],
    summaryPara1,
    summaryPara2,
    marketAccessNotes: spec.sum1Tail,
    fieldIntelligenceParagraph,
    commercialOutlookParagraph,
    methodologyParagraph,
    faqs,
    publishedDate,
    modifiedDate: publishedDate,
  };
}

const BASE_ENTRIES = SPECS.map(assembleEntry);

function attachRelated(entries: ReportEntry[]): ReportEntry[] {
  return entries.map((e) => {
    const pool = entries.filter((x) => x.slug !== e.slug);
    const sameTherapy = pool.filter((x) => x.therapyAreaSlug === e.therapyAreaSlug);
    const sameMarket = pool.filter((x) => x.marketSlug === e.marketSlug);
    const picks: ReportEntry[] = [];
    sameTherapy.forEach((x) => {
      if (!picks.find((y) => y.slug === x.slug)) picks.push(x);
    });
    sameMarket.forEach((x) => {
      if (!picks.find((y) => y.slug === x.slug)) picks.push(x);
    });
    pool.forEach((x) => {
      if (picks.length < 6 && !picks.find((y) => y.slug === x.slug)) picks.push(x);
    });
    const relatedSlugs = picks.slice(0, 5).map((x) => x.slug);
    return { ...e, relatedSlugs };
  });
}

export const REPORT_ENTRIES: ReportEntry[] = attachRelated(BASE_ENTRIES);

export const REPORT_BY_SLUG: Map<string, ReportEntry> = new Map(REPORT_ENTRIES.map((r) => [r.slug, r]));

export function getReportSafe(slug: string | undefined) {
  if (!slug) return undefined;
  return REPORT_BY_SLUG.get(slug);
}

export function getMarketHealthcarePath(marketSlug: string) {
  return MARKET_STANDALONE_HEALTH_REPORT[marketSlug] ?? '/gcc-pharma-market-report-2026';
}
