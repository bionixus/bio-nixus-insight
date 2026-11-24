import type { ReportEntry } from '@/data/healthcareReportTypes';
import {
  KSA_AI_SEARCH_PAGES,
  KSA_AI_SEARCH_REVIEWED_ISO,
  KSA_OFFICE_WORDING,
  KSA_PHYSICIAN_NETWORK,
} from '@/data/ksaAiSearchRefresh';

const SLUG = 'saudi-arabia-diabetes-market-report';
const PAGE = KSA_AI_SEARCH_PAGES.diabetes;

/**
 * Saudi diabetes report. Epidemiology is the IDF Diabetes Atlas, 11th edition
 * (published 2025), country estimates for 2024. No modelled market-size band.
 */
type OverrideCopy = Partial<ReportEntry> & Pick<ReportEntry, 'slug'>;

const IDF_SOURCE = 'IDF Diabetes Atlas 11th ed. (2025), 2024 estimates';

export const SAUDI_ARABIA_DIABETES_COPY: OverrideCopy = {
  slug: SLUG,
  title: 'Saudi Arabia Diabetes & Metabolic Market Report 2026',
  metaTitle: 'Diabetes Market Research Saudi Arabia | BioNixus',
  metaDescription:
    'BioNixus runs diabetes market research in Saudi Arabia with physicians, endocrinologists, patients and payers from its Al Khobar partner office.',
  heroLead: `${PAGE.opening} The studies cover treatment pathways, initiation and switching, and SFDA and NUPCO access, in Arabic and English.`,
  summaryPara1:
    'Diabetes market research in Saudi Arabia asks who starts therapy, who switches, and who pays, across physicians, endocrinologists, patients and payers. BioNixus runs that fieldwork in Arabic and English from its Al Khobar partner office for KSA, with Cairo as the AMEA office. The International Diabetes Federation Diabetes Atlas, 11th edition (published 2025), estimates that in 2024 Saudi Arabia had 5.34 million adults aged 20 to 79 with diabetes, a national prevalence of 21.4 percent, an age-adjusted prevalence of 23.1 percent, and 43.6 percent undiagnosed. Those 2024 estimates set the eligible population. They do not show which hospital is switching or which payer funds an incretin.',
  summaryPara2:
    'Use this briefing with the [healthcare market research hub](/healthcare-market-research) and the [Saudi Arabia healthcare market report](/saudi-arabia-healthcare-market-report). For commissioned obesity and GLP-1 physician work, see [obesity and GLP-1 research in Saudi Arabia](/saudi-arabia-obesity-market). For registration and tender context, see [SFDA and NUPCO research](/market-research-saudi-arabia-pharmaceutical). Validate the access steps against the current SFDA and NUPCO documents before a committee paper is written.',
  modifiedDate: KSA_AI_SEARCH_REVIEWED_ISO,
  stat1Value: '21.4%',
  stat1Label: 'Adult diabetes prevalence, 2024',
  stat1Source: IDF_SOURCE,
  stat2Value: '23.1%',
  stat2Label: 'Age-adjusted prevalence, 2024',
  stat2Source: IDF_SOURCE,
  stat3Value: '43.6%',
  stat3Label: 'Undiagnosed share, 2024',
  stat3Source: IDF_SOURCE,
  sourceNotes: [
    'International Diabetes Federation. IDF Diabetes Atlas, 11th edition. Brussels: IDF; 2025. Saudi Arabia estimates for 2024, adults aged 20 to 79: 5.34 million with diabetes, national prevalence 21.4 percent, age-adjusted prevalence 23.1 percent, undiagnosed 43.6 percent. NCBI Bookshelf country table: https://www.ncbi.nlm.nih.gov/books/NBK618739/',
  ],
  marketAccessNotes:
    'SFDA Economic Evaluation Studies guidance, version 1.1, implementation date 1 July 2025, covers human medicines in pricing procedures including registration, price re-evaluation and renewal. NUPCO unified tenders require SFDA registration, and a technical committee evaluates offers. Public, insured and self-pay routes should be recorded separately.',
  fieldIntelligenceParagraph:
    'BioNixus field programmes treat Saudi diabetes as a set of decisions spread across endocrinologists, primary-care physicians, patients and payers. Pharmacists sit on the same pathway when substitution and supply decide what is dispensed. The 2024 IDF estimates, published in the 2025 Atlas, describe how large the adult population with diabetes is. They do not describe initiation, switching between incretin agents, or which channel funds therapy. Fieldwork therefore pairs bilingual physician quantitative work with patient, payer and pharmacy interviews, and it records the operational gates that a label does not: Ramadan dose-adjustment counselling, primary-care versus specialist initiation, and whether obesity or glycaemic control is the reason a medicine is started. SFDA pricing and NUPCO tender status are captured in the same study as prescribing, because access mechanics change who can stay on therapy. Saudi fieldwork is coordinated from the Al Khobar partner office for KSA. Cairo is the AMEA office. The USA is the Americas office and global HQ. The UK is the Europe office. The physician network is about 3,200 physicians in the Middle East and 82,000+ globally. BioNixus was founded in 2012, has worked with 118 clients in 48 countries, and has run 127 studies in 2026. CGM and digital adherence appear in the interviews only when the same respondent can say whether the device is funded. ${KSA_OFFICE_WORDING} ${KSA_PHYSICIAN_NETWORK}',
  commercialOutlookParagraph:
    'Commercial planning for diabetes in Saudi Arabia should start from the 2024 IDF population frame and from channel evidence, not from an unaudited sales total. GLP-1 receptor agonists and dual incretins are where physician interviews most often change a forecast, because supply, waiting lists and switching sit between preference and dispensed volume. SGLT2 inhibitors are discussed in the same interviews when cardiorenal use changes who is treated. Insulin remains a large public-tender category. Obesity reimbursement is still uneven across public and private payers, so a study should separate public, insured and self-pay routes before a volume case is written. Teams should stress-test uptake by channel: Ministry of Health primary care, specialist endocrinology, and private clinics. Those channels do not share one funding rule. BioNixus scopes the primary work to one decision at a time so the readout can be checked against the next SFDA or NUPCO document.',
  methodologyParagraph:
    'Methodology combines the IDF Diabetes Atlas 11th edition (2025), using its 2024 Saudi estimates as the population frame, with a desk review of SFDA and NUPCO public guidance and with primary modules. Those modules are endocrinologist and primary-care interviews, patient interviews, payer and pharmacy interviews, and a written access map. Epidemiology is a planning input, not a patient-level forecast. Because pricing, tender lists and obesity coverage change on short cycles, access statements should be revalidated before a launch decision. Outputs are written for market access, medical affairs and commercial teams. They are not regulatory or clinical advice. Sample frames are stratified by specialty, public or private sector, and city, including Riyadh, Jeddah and the Eastern Province. Arabic and English fieldwork is standard. A two-page KSA insight brief on this page describes the design. It does not promise a share, a rank or a result.',
  faqs: [
    {
      question: PAGE.firstFaqQuestion,
      answer:
        'Diabetes market research in Saudi Arabia is primary research with the people who start, switch and pay for therapy. BioNixus interviews physicians, endocrinologists, patients and payers, and maps SFDA pricing steps and NUPCO tender routes before a forecast is locked. Saudi fieldwork runs from the Al Khobar partner office for KSA. Cairo is the AMEA office. The USA is the Americas office and global HQ. The UK is the Europe office. The physician network is about 3,200 physicians in the Middle East and 82,000+ globally. BioNixus was founded in 2012, has worked with 118 clients in 48 countries, and has run 127 studies in 2026. The International Diabetes Federation Diabetes Atlas, 11th edition (2025), estimates that in 2024 Saudi Arabia had 5.34 million adults aged 20 to 79 with diabetes. National prevalence was 21.4 percent, age-adjusted prevalence was 23.1 percent, and 43.6 percent were undiagnosed. Those 2024 figures describe the eligible population.',
    },
    {
      question: 'What do the 2024 IDF estimates say about diabetes in Saudi Arabia?',
      answer:
        'The International Diabetes Federation Diabetes Atlas, 11th edition, was published in 2025 and reports estimates for 2024. For Saudi Arabia it counts 5.34 million adults aged 20 to 79 with diabetes. National prevalence in that age band was 21.4 percent. Age-adjusted comparative prevalence was 23.1 percent. The undiagnosed share was 43.6 percent. The source is the Atlas country summary table, available through NCBI Bookshelf. BioNixus uses those 2024 estimates as the population frame for diabetes market research in Saudi Arabia, then asks physicians, endocrinologists, patients and payers what happens in practice. A prevalence figure does not show initiation, switching, persistence or which payer funds an incretin. That is the primary study. Fieldwork is run from the Al Khobar partner office for KSA, with Cairo as the AMEA office.',
    },
    {
      question: 'How do SFDA and NUPCO affect diabetes research in Saudi Arabia?',
      answer:
        'The Saudi Food and Drug Authority handles registration, pricing and pharmacovigilance for human medicines. Its Economic Evaluation Studies guidance, version 1.1, has an implementation date of 1 July 2025 and applies to human pharmaceutical products in pricing procedures, including registration, price re-evaluation and renewal. NUPCO runs unified public procurement. Its tender FAQ states that products offered in those tenders must be registered with the SFDA, and that a technical committee of NUPCO staff and officials from public healthcare entities evaluates products during the tender. BioNixus researches that sequence with physicians, pharmacists and access stakeholders rather than treating registration as the end of the launch. SFDA registration and a NUPCO listing are separate decisions. Diabetes market research in Saudi Arabia should record both.',
    },
    {
      question: 'Which stakeholders does a Saudi diabetes study include?',
      answer:
        'BioNixus scopes diabetes studies around the decision the team has to make. Typical modules are endocrinologist and primary-care interviews on initiation and switching, patient interviews on persistence and cost, payer and pharmacy interviews on funding and substitution, and an access map of SFDA pricing and NUPCO tender steps. Instruments are in Arabic and English. Sample frames are split by specialty, sector and city, including Riyadh, Jeddah and the Eastern Province. Saudi fieldwork is coordinated from the Al Khobar partner office for KSA. Cairo is the AMEA office. The physician network is about 3,200 physicians in the Middle East and 82,000+ globally. Outputs are crosstabs, access notes and a short readout the brand, medical and access teams can use in the same meeting. BioNixus was founded in 2012 and has run 127 studies in 2026.',
    },
    {
      question: 'How are diabetes medicines funded in Saudi Arabia?',
      answer:
        'Public volume for many diabetes medicines depends on NUPCO tenders and Ministry of Health formularies. Private volume depends on Council of Health Insurance plan design, hospital formularies and retail pharmacy. Incretin and SGLT2 classes face pricing and evidence review under SFDA rules, including the Economic Evaluation Studies guidance implemented on 1 July 2025. Insulin and older oral medicines are more tender-sensitive. BioNixus does not assume one national reimbursement rule. Diabetes market research in Saudi Arabia asks physicians and payers which route a named medicine actually uses: public tender, insured private care, or out of pocket. Those answers are dated to the fieldwork year because tender lists and plan rules change. The 2024 IDF estimates describe how many adults have diabetes. They do not describe who pays.',
    },
    {
      question: 'How does BioNixus run a Saudi diabetes study?',
      answer:
        'BioNixus designs bilingual diabetes programmes for launch, supply and indication decisions: physician and endocrinologist interviews, patient persistence work, payer and pharmacy interviews, and an SFDA and NUPCO access map. Saudi fieldwork runs from the Al Khobar partner office for KSA. Cairo is the AMEA office. The USA is the Americas office and global HQ. The UK is the Europe office. The physician network is about 3,200 physicians in the Middle East and 82,000+ globally. BioNixus was founded in 2012, has worked with 118 clients in 48 countries, and has run 127 studies in 2026. A team can request a two-page KSA insight brief from this page or keep the existing scoping call. The brief describes the study design. It does not promise a result, a ranking or a share of the market.',
    },
  ],
};
