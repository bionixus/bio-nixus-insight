import type { PharmaCompaniesCountrySlug } from '@/components/seo/PharmaCompaniesGccHubLinks';

export type PharmaDepthBlock = {
  heading: string;
  paragraphs: string[];
};

export const PHARMA_COMPANIES_DEPTH: Partial<Record<PharmaCompaniesCountrySlug, PharmaDepthBlock>> = {
  egypt: {
    heading: 'Egypt pharma market access and research context (2026)',
    paragraphs: [
      'Egypt\'s Universal Health Insurance (UHI) rollout and Hayah Karima rural expansion are reshaping which products receive public formulary priority versus cash-pay private channels. The Egyptian Drug Authority (EDA) modernisation since 2020 shortened some registration pathways but pricing remains government-controlled through reference pricing — manufacturers must model both tender participation and retail pharmacy dynamics.',
      'Local manufacturing dominance (90% domestic supply) means multinational entrants compete through licensing, contract manufacturing, and distribution partnerships as much as greenfield plants. BioNixus Egypt programmes map prescriber behaviour, pharmacy chain influence, and UHI coverage decisions for teams sizing launch or lifecycle defence.',
    ],
  },
  uae: {
    heading: 'Dubai and UAE pharmaceutical companies: market structure (2026)',
    paragraphs: [
      'Pharmaceutical companies in Dubai and the wider UAE operate across three regulatory lanes — MOHAP federal registration, DHA Dubai licensing, and DOH Abu Dhabi requirements — with mandatory health insurance in Dubai and Abu Dhabi creating distinct reimbursement pathways from northern emirates.',
      'Dubai Healthcare City and Jebel Ali free zones host regional headquarters for multinationals, while local manufacturers (Julphar, Neopharma) and distributors (Alphamed, Medeor) shape hospital and retail access. Oncology, diabetes, and obesity (GLP-1) are the fastest-growing therapy segments; research should segment by emirate and payer type before extrapolating national share.',
      'For companies comparing pharmaceutical companies in Dubai specifically versus the full UAE, BioNixus fieldwork tags DHA versus MOHAP account ownership so launch forecasts reflect where regulatory and insurance infrastructure actually gates uptake.',
    ],
  },
  'saudi-arabia': {
    heading: 'Saudi pharmaceutical market: NUPCO, localization, and access (2026)',
    paragraphs: [
      'Saudi Arabia accounts for roughly 40% of GCC pharmaceutical spend. NUPCO central tenders govern Ministry of Health hospital supply; SFDA registration and the Economic Evaluation System (EES) set the evidence bar for innovative therapies. Vision 2030 localization targets 40% domestic manufacturing by 2030 — in-Kingdom production receives preferential tender evaluation.',
      'SPIMACO, Tabuk Pharmaceutical, and Hikma\'s Saudi operations anchor local supply alongside MNC scientific offices in Riyadh and Jeddah. BioNixus Saudi programmes combine NUPCO tender intelligence with KOL and payer research for launch sequencing aligned to committee calendars.',
    ],
  },
  iran: {
    heading: 'Iran pharmaceutical market: local manufacturing and access realities (2026)',
    paragraphs: [
      'Iran\'s pharmaceutical market is dominated by domestic manufacturers supplying roughly 95% of volume under IFDA price controls. Sanctions constrain import dependency but have accelerated biosimilar and generic innovation — insulin, EPO, and oncology biosimilars are strategic local categories.',
      'Multinational access requires understanding KIMADIA-adjacent distribution, parallel market dynamics, and which therapeutic areas remain import-dependent. BioNixus scopes Iran research with realistic feasibility and compliance review before field investment.',
    ],
  },
  iraq: {
    heading: 'Iraq pharmaceutical market: federal and KRG dual pathways (2026)',
    paragraphs: [
      'Iraq\'s pharmaceutical market splits between federal MOH/KIMADIA procurement and the Kurdistan Region\'s separate health system. NGO and international health partnerships supplement public supply for chronic disease categories.',
      'Local manufacturers (Samarra, State Company for Drugs) coexist with MNC offices in Baghdad and Erbil. Companies targeting full Iraq coverage must engage both federal and KRG tender authorities — BioNixus maps institutional decision points before national extrapolation.',
    ],
  },
  kuwait: {
    heading: 'Kuwait pharmaceutical market: MOH, insurance, and GCC registration (2026)',
    paragraphs: [
      'Kuwait\'s MOH and Kuwait Food and Drug Authority (KFDA) govern a concentrated hospital network where a small number of institutions gate much of institutional volume. GCC Centralised Registration can accelerate entry but country-level pricing and import permits still apply separately.',
      'High per-capita spend and chronic disease burden (diabetes, cardiovascular) sustain demand for innovative therapies; private insurance penetration is lower than UAE but growing. BioNixus Kuwait modules tag ministry versus private hospital behaviour in prescriber and payer research.',
    ],
  },
};
