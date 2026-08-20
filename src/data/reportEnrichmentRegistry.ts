/**
 * Registry of crawlable enrichment sections for programmatic market reports
 * that need additional SSR word depth (biosimilars/vaccines Gulf cluster).
 */
import type { EnrichmentSection } from '@/data/saudiVaccinesReportEnrichment';
import { SAUDI_BIOSIMILARS_REPORT_ENRICHMENT } from '@/data/saudiBiosimilarsReportEnrichment';
import { SAUDI_CANCER_DIAGNOSTICS_REPORT_ENRICHMENT } from '@/data/saudiCancerDiagnosticsReportEnrichment';
import { SAUDI_VACCINES_REPORT_ENRICHMENT } from '@/data/saudiVaccinesReportEnrichment';
import { GCC_VACCINES_REPORT_ENRICHMENT } from '@/data/gccVaccinesReportEnrichment';
import { KUWAIT_BIOSIMILARS_REPORT_ENRICHMENT } from '@/data/kuwaitBiosimilarsReportEnrichment';

/** Shared enrichment blocks for smaller GCC vaccine country reports. */
const GULF_COUNTRY_VACCINES_ENRICHMENT: EnrichmentSection[] = [
  {
    id: 'gulf-country-vaccine-schedule',
    title: 'National immunisation schedule and ministry procurement',
    subtitle: 'Schedule inclusion and tender timing drive volume more than retail pull.',
    paragraphs: [
      'Gulf vaccine markets outside Saudi Arabia and the UAE are ministry-schedule and tender-led. Childhood immunisation programmes set the stable base; adult expansion (HPV, pneumococcal, influenza, RSV) creates the growth corridor when committees approve schedule changes and ministry lots refresh.',
      'BioNixus treats each country as a distinct schedule-and-procurement cell: ministry tender calendars, cold-chain logistics, school mandates, and mass-campaign readiness gate realised volume more than community pharmacy substitution in most Gulf states.',
    ],
  },
  {
    id: 'gulf-country-vaccine-segments',
    title: 'Vaccine segment mix and growth antigens',
    subtitle: 'Pediatric base plus adult and travel corridors.',
    paragraphs: [
      'Segment planning should separate pediatric NIP volume from adult schedule expansion and any travel or employer programmes. Conjugate and meningococcal tenders often bundle school mandates with ministry procurement, while influenza and pneumococcal adult programmes depend on committee decisions and budget cycles.',
    ],
    listItems: [
      'Pediatric NIP — tender-driven base under national childhood schedules.',
      'Adult immunisation — HPV, pneumococcal, influenza, and RSV as shared growth antigens.',
      'Travel and private channels — stronger in UAE; selective in Kuwait, Qatar, Oman, and Bahrain.',
      'Cold-chain and campaign logistics — operational gates for mass vaccination programmes.',
    ],
  },
  {
    id: 'gulf-country-vaccine-outlook',
    title: 'Commercial outlook and regional benchmarking',
    subtitle: 'Pair country depth with GCC and Saudi comparators.',
    paragraphs: [
      'Through 2030 Gulf vaccine outlook remains policy-led: schedule decisions and ministry tenders set step changes in volume rather than smooth retail curves. Stress-test assumptions by tender cycle and schedule committee timing before locking country forecasts.',
      'Pair this country briefing with the GCC vaccine market report for six-market benchmarking, the Saudi Arabia vaccine market report for NIP and Hajj comparators, and the healthcare market research hub to scope bilingual schedule and tender intelligence programmes.',
    ],
  },
  {
    id: 'gulf-country-vaccine-regulatory',
    title: 'Regulatory registration and ministry schedule alignment',
    subtitle: 'Registration clears supply; schedule committees clear demand.',
    paragraphs: [
      'Gulf vaccine manufacturers must separate marketing authorisation from schedule inclusion. Ministry immunisation committees review epidemiology, budget impact, and cold-chain readiness before adding antigens to national programmes — registration alone does not create tender volume.',
      'Childhood schedule expansion for HPV, pneumococcal, or influenza adult programmes typically requires committee dossiers with local burden evidence, even when international WHO recommendations already support adoption. BioNixus maps committee calendars and evidence expectations so commercial teams align fieldwork with realistic schedule decision windows.',
      'Travel and employer vaccine channels in the UAE differ structurally from ministry NIP volume in Kuwait, Qatar, Oman, and Bahrain. Egypt vaccine programmes follow EDA registration and Ministry of Health procurement with distinct tender cadence from Gulf ministry schedules — treat Egypt as a MENA comparator rather than a GCC clone.',
      'Manufacturers should stress-test launch sequencing: schedule inclusion year, first tender award, campaign execution, and second-season refill before locking revenue curves for any single Gulf or North Africa state. BioNixus recommends pairing ministry tender calendars with school vaccination and cold-chain readiness reviews in each country briefing.',
    ],
  },
  {
    id: 'gulf-country-vaccine-operations',
    title: 'Cold-chain logistics and campaign execution',
    subtitle: 'Operational readiness gates realised volume after schedule wins.',
    paragraphs: [
      'Gulf vaccine volume often stalls after schedule inclusion because cold-chain capacity, campaign logistics, and school-mandate execution lag policy announcements. Ministry buyers in Bahrain and Oman score suppliers on delivery reliability, temperature excursion history, and mass-campaign readiness — not only antigen price.',
      'BioNixus interviews immunisation programme managers and hospital pharmacy leads to separate policy intent from operational pull-through, because conjugate and meningococcal programmes can create seasonal demand spikes that stress warehouse and clinic networks.',
    ],
  },
];

/** Shared enrichment for smaller GCC biosimilars country reports. */
const GULF_COUNTRY_BIOSIMILARS_ENRICHMENT: EnrichmentSection[] = [
  {
    id: 'gulf-country-biosimilar-tenders',
    title: 'MOH tender lots and hospital substitution',
    subtitle: 'Tender awards set price; clinician confidence sets share.',
    paragraphs: [
      'Gulf biosimilar markets outside Saudi Arabia concentrate in MOH tender lots and flagship hospital formularies. Oncology monoclonal biosimilars (trastuzumab, bevacizumab) and immunology anti-TNF biosimilars (adalimumab, etanercept) account for most hospital-administered value.',
      'Tender outcomes set net price, but rheumatology and oncology switching behaviour at flagship centres determines realised share. Substitution often stalls on operational frictions—infusion throughput, cold-chain confidence, dual-coding clawback risk—rather than price alone.',
    ],
  },
  {
    id: 'gulf-country-biosimilar-molecules',
    title: 'Molecule waves and account concentration',
    subtitle: 'Plan by tender cycle and centre concentration.',
    paragraphs: [
      'BioNixus field programmes pair tender post-mortems with bilingual prescriber confidence studies and pharmacist workflow reviews because Gulf biosimilar share concentrates in a handful of oncology and rheumatology centres rather than diffuse retail channels.',
    ],
    listItems: [
      'Oncology mAbs — trastuzumab and bevacizumab lots at cancer centres.',
      'Immunology anti-TNF — adalimumab and etanercept under MOH rheumatology awards.',
      'Supportive care — filgrastim and insulin glargine with pharmacist substitution nuance.',
      'Originator defence — patient-support and device narratives in private hospital channels.',
    ],
  },
  {
    id: 'gulf-country-biosimilar-outlook',
    title: 'Commercial outlook to 2030',
    subtitle: 'Tender-driven step changes in compact Gulf markets.',
    paragraphs: [
      'The outlook to 2030 is steady-growth with tender-driven step changes. Biosimilar developers gain access through MOH lots but must plan for dual-channel coding complexity and clinician confidence barriers in oncology maintenance settings.',
      'Use the GCC biosimilars market report for Gulf-wide benchmarking and the Saudi Arabia biosimilars market report for NUPCO framework comparators when building regional launch sequencing.',
    ],
  },
  {
    id: 'gulf-country-biosimilar-regulatory',
    title: 'Registration, formulary listing, and hospital committee behaviour',
    subtitle: 'MOH listing and hospital P&T are separate commercial gates.',
    paragraphs: [
      'Gulf biosimilar access requires marketing authorisation, MOH tender placement, and hospital formulary or protocol adoption — three gates that rarely align in a single quarter. BioNixus maps each gate with primary stakeholders so launch teams do not confuse registration clearance with pull-through volume.',
      'Hospital pharmacy and therapeutics committees in compact Gulf networks can standardise switching faster than large EU systems when leadership sponsors change — but they also revert when nocebo concerns surface in oncology maintenance or rheumatology continuity clinics.',
      'Dual public–private coding splits in Kuwait and similar markets create clawback risk when patients move between MOH hospitals and private specialists. Substitution programmes must be designed with payer operations teams, not only rheumatology and oncology chairs.',
      'Private hospital channels remain originator defence terrain: patient-support programmes, device experience, and quality narratives retain share when MOH tenders compress public net prices. BioNixus separates public tender intelligence from private account defence when scoping Gulf biosimilar programmes. Account-level validation is recommended before applying regional switch curves to Oman, Bahrain, or Qatar forecasts.',
    ],
  },
];

export const REPORT_ENRICHMENT_BY_SLUG: Record<string, EnrichmentSection[]> = {
  'saudi-arabia-biosimilars-market-report': SAUDI_BIOSIMILARS_REPORT_ENRICHMENT,
  'saudi-arabia-cancer-diagnostics-market-report': SAUDI_CANCER_DIAGNOSTICS_REPORT_ENRICHMENT,
  'saudi-arabia-vaccines-market-report': SAUDI_VACCINES_REPORT_ENRICHMENT,
  'gcc-vaccines-market-report': GCC_VACCINES_REPORT_ENRICHMENT,
  'kuwait-biosimilars-market-report': KUWAIT_BIOSIMILARS_REPORT_ENRICHMENT,
  'qatar-biosimilars-market-report': GULF_COUNTRY_BIOSIMILARS_ENRICHMENT,
  'bahrain-biosimilars-market-report': GULF_COUNTRY_BIOSIMILARS_ENRICHMENT,
  'oman-biosimilars-market-report': GULF_COUNTRY_BIOSIMILARS_ENRICHMENT,
  'kuwait-vaccines-market-report': GULF_COUNTRY_VACCINES_ENRICHMENT,
  'qatar-vaccines-market-report': GULF_COUNTRY_VACCINES_ENRICHMENT,
  'bahrain-vaccines-market-report': GULF_COUNTRY_VACCINES_ENRICHMENT,
  'oman-vaccines-market-report': GULF_COUNTRY_VACCINES_ENRICHMENT,
  'egypt-vaccines-market-report': GULF_COUNTRY_VACCINES_ENRICHMENT,
};
