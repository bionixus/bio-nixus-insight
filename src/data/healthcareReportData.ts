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

const STAT_NR_GCC: SpecRow['stats'] = ['~$2.71B', 'Market size 2026', '~$4.82B', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];
const STAT_NR_SA: SpecRow['stats'] = ['~$448M', 'Market size 2026', '~$706M', 'Forecast 2030', '13.6%', 'CAGR 2026–2030'];
const STAT_NR_UAE: SpecRow['stats'] = ['~$152M', 'Market size 2026', '~$248M', 'Forecast 2030', '14.9%', 'CAGR 2026–2030'];
const STAT_NR_EG: SpecRow['stats'] = ['~$520M', 'Market size 2026', '~$868M', 'Forecast 2030', '13.9%', 'CAGR 2026–2030'];

const STAT_BS_GCC: SpecRow['stats'] = ['~$1.55B', 'Market size 2026', '~$2.93B', 'Forecast 2030', '17.9%', 'CAGR 2026–2030'];
const STAT_BS_SA: SpecRow['stats'] = ['~$382M', 'Market size 2026', '~$676M', 'Forecast 2030', '17.9%', 'CAGR 2026–2030'];
const STAT_BS_EG: SpecRow['stats'] = ['~$210M', 'Market size 2026', '~$398M', 'Forecast 2030', '18.1%', 'CAGR 2026–2030'];

const STAT_DH_GCC: SpecRow['stats'] = ['~$982M', 'Market size 2026', '~$1.71B', 'Forecast 2030', '17.9%', 'CAGR 2026–2030'];
const STAT_DH_SA: SpecRow['stats'] = ['~$268M', 'Market size 2026', '~$458M', 'Forecast 2030', '17.6%', 'CAGR 2026–2030'];

const STAT_VC_GCC: SpecRow['stats'] = ['~$1.18B', 'Market size 2026', '~$2.06B', 'Forecast 2030', '17.9%', 'CAGR 2026–2030'];
const STAT_VC_UAE: SpecRow['stats'] = ['~$142M', 'Market size 2026', '~$238M', 'Forecast 2030', '16.9%', 'CAGR 2026–2030'];

const STAT_DR_GCC: SpecRow['stats'] = ['~$428M', 'Market size 2026', '~$706M', 'Forecast 2030', '17.9%', 'CAGR 2026–2030'];

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

  row('gcc-neurology-cns-market-report', 'gcc', 'GCC', 'GCC', 'neurology-cns', STAT_NR_GCC, 'MS high efficacy escalation governance, migraine CGRP PA sequencing, Alzheimer infusion MRI safety monitoring heterogeneity.', '[GCC pharma briefing](/gcc-pharma-market-report-2026) • [Healthcare hub](/healthcare-market-research).'),
  row('saudi-arabia-neurology-cns-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'neurology-cns', STAT_NR_SA, 'national neuro institutes expansion plus insured PA stacks on DMT outpatient monitoring cadence burdens.', '[Saudi briefing](/saudi-arabia-healthcare-market-report) • [GCC pharma briefing](/gcc-pharma-market-report-2026).'),
  row('uae-neurology-cns-market-report', 'uae', 'United Arab Emirates', 'GCC', 'neurology-cns', STAT_NR_UAE, 'premium electrophysiology lab clustering Dubai Abu Dhabi divergence steering epilepsy adjunct uptake.', '[UAE briefing](/uae-healthcare-market-report) • [GCC pharma briefing](/gcc-pharma-market-report-2026).'),
  row('egypt-neurology-cns-market-report', 'egypt', 'Egypt', 'MENA', 'neurology-cns', STAT_NR_EG, 'Cairo overcrowded outpatient neurology juxtaposed affluent private EEG waitlist compression artefacts.', '[Egypt briefing](/egypt-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),

  row('gcc-biosimilars-market-report', 'gcc', 'GCC', 'GCC', 'biosimilars', STAT_BS_GCC, 'trastuzumab and adalimumab tender waves intersecting interchangeable naming confidence asymmetry across ministries.', '[GCC pharma outlook](/gcc-pharma-market-report-2026) • [GCC market access dossier rehearsals](/gcc-market-access-guide).'),
  row('saudi-arabia-biosimilars-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'biosimilars', STAT_BS_SA, 'NUPCO award clustering plus SFDA accelerated generic/biosim corridor interplay with clinician confidence trackers.', '[Saudi briefing](/saudi-arabia-healthcare-market-report) • [Biosimilar launch Saudi analogue](/biosimilar-market-entry-saudi-arabia).'),
  row('gcc-digital-health-market-report', 'gcc', 'GCC', 'GCC', 'digital-health', STAT_DH_GCC, 'RPM pilots, cybersecurity residency friction cloud imaging harmonization delays, insurer pilot budget churn.', '[GCC pharma outlook](/gcc-pharma-market-report-2026) • [Healthcare hub](/healthcare-market-research).'),
  row('saudi-arabia-digital-health-market-report', 'saudi-arabia', 'Saudi Arabia', 'GCC', 'digital-health', STAT_DH_SA, 'NEOM healthtech sandboxes interplay with SFDA SaMD dossier reciprocity doctrines accelerating digital therapeutics dossier pilots.', '[Saudi briefing](/saudi-arabia-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('gcc-vaccines-market-report', 'gcc', 'GCC', 'GCC', 'vaccines', STAT_VC_GCC, 'conjugate tenders bundling syringe premiums, Hajj influenza surge logistics, meningococcal pilgrimage demand inelasticities.', '[GCC pharma outlook](/gcc-pharma-market-report-2026) • [Healthcare hub](/healthcare-market-research).'),
  row('uae-vaccines-market-report', 'uae', 'United Arab Emirates', 'GCC', 'vaccines', STAT_VC_UAE, 'school mandates pilot heterogeneity among emirates, private international school HPV uptake gradients, MOHPA federal labeling harmonization interplay.', '[UAE briefing](/uae-healthcare-market-report) • [GCC pharma outlook](/gcc-pharma-market-report-2026).'),
  row('gcc-dermatology-market-report', 'gcc', 'GCC', 'GCC', 'dermatology', STAT_DR_GCC, 'biologic step therapy photographic PA burdens, chlorine pool eczema flares among tourism corridors, topical JAK import grey market artefacts.', '[GCC pharma briefing](/gcc-pharma-market-report-2026) • [Healthcare hub](/healthcare-market-research).'),
  row('egypt-biosimilars-market-report', 'egypt', 'Egypt', 'MENA', 'biosimilars', STAT_BS_EG, 'localized manufacturing amortization juxtaposed multinational originator clinician loyalty networks inside Cairo elite wards bifurcating audited substitution telemetry.', '[Egypt briefing](/egypt-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),

  row('turkey-oncology-market-report', 'turkey', 'Turkey', 'Europe / MENA', 'oncology', STAT_ONC_TR, 'TİTCK approval reciprocity interplay with SGK budgeting lag, Aegean trial investigator bandwidth elasticity, biosim export constraints episodically rewiring landed net parallels.', '[Turkey healthcare briefing](/turkey-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),
  row('turkey-diabetes-market-report', 'turkey', 'Turkey', 'Europe / MENA', 'diabetes-metabolic', STAT_DM_TR, 'young adult metabolic syndrome clusters Istanbul versus Anatolia referral gravity plus SGK versus private supplemental GLP‑1 divergence.', '[Turkey healthcare briefing](/turkey-healthcare-market-report) • [Healthcare hub](/healthcare-market-research).'),
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

function assembleEntry(spec: SpecRow): Omit<ReportEntry, 'relatedSlugs'> {
  const th = therapyMeta(spec.therapySlug);
  const title = titleFor(spec);
  const therapy = THERAPY_AREA_CONTENT[spec.therapySlug];
  const market = MARKET_CONTENT[spec.marketSlug];
  const summaryPara1 =
    `${spec.market}’s pharmaceutical landscape for ${th.name} in 2026 is shaped by centralized procurement pacing, clinician adoption ladders, payer prior‑authorization granularity, genome or precision medicine adjacency where relevant, pilgrimage seasonal inpatient displacement artefacts, migrant workforce insurance fragmentation, hydrocarbon‑linked fiscal collars, IMF macro‑sensitivity overlays, tertiary expansion cadence—all triangulated in BioNixus longitudinal analogue panels. Highlights include ${spec.sum1Tail}`;
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
  const summaryPara2 = `Cross‑programme linkage: ${spec.sum2Context}`;
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
