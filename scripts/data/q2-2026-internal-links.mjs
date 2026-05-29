/** Therapeutic clusters and internal link targets for Q2 2026 pharma insight articles. */

/** @typedef {{ href: string; anchor: string }} InternalLink */

/** @type {Record<string, string>} */
export const THERAPEUTIC_CLUSTERS = {
  'obesity-pbm-coverage-lilly-portfolio-q2-2026': 'obesity-metabolic',
  'zepbound-kwikpen-goodrx-self-pay-2026': 'obesity-metabolic',
  'foundayo-orforglipron-fda-approval-2026': 'obesity-metabolic',
  'awiqli-insulin-icodec-weekly-fda-2026': 'diabetes-metabolic',
  'langlara-insulin-glargine-biosimilar-fda-2026': 'diabetes-biosimilar',
  'redemplo-plozasiran-fcs-ema-chmp-2026': 'metabolic-rare',
  'camizestrant-pdufa-extension-astrazeneca-2026': 'oncology-breast',
  'datroway-datopotamab-tnbc-fda-approval-2026': 'oncology-breast',
  'decnupaz-pivekimab-bpdcn-fda-approval-2026': 'oncology-hematology',
  'beqalzi-sonrotoclax-mcl-fda-2026': 'oncology-hematology',
  'tecartus-brexucabtagene-mcl-full-approval-2026': 'oncology-hematology',
  'imdylltra-tarlatamab-sclc-ema-chmp-2026': 'oncology-lung',
  'zepzelca-lurbinectedin-sclc-ema-chmp-2026': 'oncology-lung',
  'adstiladrin-nadofaragene-nmibc-ema-chmp-2026': 'oncology-urology',
  'lifyorli-relacorilant-ovarian-cancer-fda-2026': 'oncology-gyn',
  'itvisma-onasemnogene-sma-ema-chmp-2026': 'rare-gene',
  'kresladi-marnetegragene-lad1-fda-2026': 'rare-gene',
  'vijoice-alpelisib-pros-ema-chmp-2026': 'rare-genetic',
  'joenja-leniolisib-apds-ema-chmp-2026': 'rare-immunology',
  'jascayd-nerandomilast-ema-chmp-ipf-2026': 'rare-pulmonary',
  'baxfendy-baxdrostat-hypertension-fda-2026': 'cardiovascular',
  'vasa-lilly-tunelab-camkii-cardiovascular-ai-2026': 'cardiovascular-digital',
  'cenrifki-tolebrutinib-nrspms-ema-chmp-2026': 'neurology-ms',
  'hepcludex-bulevirtide-hdv-fda-approval-2026': 'infectious-liver',
  'idvynso-doravirine-islatravir-hiv-fda-2026': 'infectious-hiv',
  'eli-lilly-vaccine-acquisitions-curevo-limmatech-2026': 'vaccines',
  'icotyde-icotrokinra-psoriasis-fda-2026': 'immunology-dermatology',
  'lynarvo-linerixibat-pbc-fda-2026': 'gastro-hepatology',
  'flovent-hfa-fluticasone-generic-fda-2026': 'respiratory-biosimilar',
  'roche-pathai-acquisition-digital-pathology-2026': 'digital-health',
};

/** Cluster → related Q2 article slugs (excluding self). */
/** @type {Record<string, string[]>} */
export const CLUSTER_RELATED_SLUGS = {
  'obesity-metabolic': [
    'foundayo-orforglipron-fda-approval-2026',
    'zepbound-kwikpen-goodrx-self-pay-2026',
    'obesity-pbm-coverage-lilly-portfolio-q2-2026',
    'awiqli-insulin-icodec-weekly-fda-2026',
  ],
  'diabetes-metabolic': [
    'awiqli-insulin-icodec-weekly-fda-2026',
    'langlara-insulin-glargine-biosimilar-fda-2026',
    'foundayo-orforglipron-fda-approval-2026',
    'obesity-pbm-coverage-lilly-portfolio-q2-2026',
  ],
  'diabetes-biosimilar': [
    'langlara-insulin-glargine-biosimilar-fda-2026',
    'awiqli-insulin-icodec-weekly-fda-2026',
    'flovent-hfa-fluticasone-generic-fda-2026',
  ],
  'metabolic-rare': ['redemplo-plozasiran-fcs-ema-chmp-2026', 'awiqli-insulin-icodec-weekly-fda-2026'],
  'oncology-breast': [
    'datroway-datopotamab-tnbc-fda-approval-2026',
    'camizestrant-pdufa-extension-astrazeneca-2026',
    'lifyorli-relacorilant-ovarian-cancer-fda-2026',
  ],
  'oncology-hematology': [
    'decnupaz-pivekimab-bpdcn-fda-approval-2026',
    'beqalzi-sonrotoclax-mcl-fda-2026',
    'tecartus-brexucabtagene-mcl-full-approval-2026',
  ],
  'oncology-lung': ['imdylltra-tarlatamab-sclc-ema-chmp-2026', 'zepzelca-lurbinectedin-sclc-ema-chmp-2026'],
  'oncology-urology': ['adstiladrin-nadofaragene-nmibc-ema-chmp-2026', 'datroway-datopotamab-tnbc-fda-approval-2026'],
  'oncology-gyn': ['lifyorli-relacorilant-ovarian-cancer-fda-2026', 'camizestrant-pdufa-extension-astrazeneca-2026'],
  'rare-gene': ['itvisma-onasemnogene-sma-ema-chmp-2026', 'kresladi-marnetegragene-lad1-fda-2026'],
  'rare-genetic': ['vijoice-alpelisib-pros-ema-chmp-2026', 'joenja-leniolisib-apds-ema-chmp-2026'],
  'rare-immunology': ['joenja-leniolisib-apds-ema-chmp-2026', 'vijoice-alpelisib-pros-ema-chmp-2026'],
  'rare-pulmonary': ['jascayd-nerandomilast-ema-chmp-ipf-2026', 'flovent-hfa-fluticasone-generic-fda-2026'],
  cardiovascular: ['baxfendy-baxdrostat-hypertension-fda-2026', 'vasa-lilly-tunelab-camkii-cardiovascular-ai-2026'],
  'cardiovascular-digital': [
    'vasa-lilly-tunelab-camkii-cardiovascular-ai-2026',
    'baxfendy-baxdrostat-hypertension-fda-2026',
    'roche-pathai-acquisition-digital-pathology-2026',
  ],
  'neurology-ms': ['cenrifki-tolebrutinib-nrspms-ema-chmp-2026'],
  'infectious-liver': ['hepcludex-bulevirtide-hdv-fda-approval-2026', 'idvynso-doravirine-islatravir-hiv-fda-2026'],
  'infectious-hiv': ['idvynso-doravirine-islatravir-hiv-fda-2026', 'hepcludex-bulevirtide-hdv-fda-approval-2026'],
  vaccines: ['eli-lilly-vaccine-acquisitions-curevo-limmatech-2026'],
  'immunology-dermatology': ['icotyde-icotrokinra-psoriasis-fda-2026'],
  'gastro-hepatology': ['lynarvo-linerixibat-pbc-fda-2026', 'hepcludex-bulevirtide-hdv-fda-approval-2026'],
  'respiratory-biosimilar': [
    'flovent-hfa-fluticasone-generic-fda-2026',
    'jascayd-nerandomilast-ema-chmp-ipf-2026',
    'langlara-insulin-glargine-biosimilar-fda-2026',
  ],
  'digital-health': [
    'roche-pathai-acquisition-digital-pathology-2026',
    'vasa-lilly-tunelab-camkii-cardiovascular-ai-2026',
  ],
};

/** @type {Record<string, { href: string; anchor: string }>} */
export const Q2_SLUG_TITLES = {
  'obesity-pbm-coverage-lilly-portfolio-q2-2026': 'Lilly obesity PBM coverage Q2 2026',
  'decnupaz-pivekimab-bpdcn-fda-approval-2026': 'Decnupaz BPDCN FDA approval',
  'camizestrant-pdufa-extension-astrazeneca-2026': 'Camizestrant PDUFA extension',
  'eli-lilly-vaccine-acquisitions-curevo-limmatech-2026': 'Lilly vaccine M&A',
  'datroway-datopotamab-tnbc-fda-approval-2026': 'Datroway TNBC FDA approval',
  'hepcludex-bulevirtide-hdv-fda-approval-2026': 'Hepcludex HDV accelerated approval',
  'jascayd-nerandomilast-ema-chmp-ipf-2026': 'Jascayd IPF CHMP opinion',
  'vijoice-alpelisib-pros-ema-chmp-2026': 'Vijoice PROS CHMP opinion',
  'baxfendy-baxdrostat-hypertension-fda-2026': 'Baxfendy hypertension approval',
  'beqalzi-sonrotoclax-mcl-fda-2026': 'Beqalzi MCL accelerated approval',
  'langlara-insulin-glargine-biosimilar-fda-2026': 'Langlara glargine biosimilar',
  'cenrifki-tolebrutinib-nrspms-ema-chmp-2026': 'Cenrifki nrSPMS CHMP opinion',
  'itvisma-onasemnogene-sma-ema-chmp-2026': 'Itvisma SMA gene therapy CHMP',
  'redemplo-plozasiran-fcs-ema-chmp-2026': 'Redemplo FCS CHMP opinion',
  'idvynso-doravirine-islatravir-hiv-fda-2026': 'Idvynso HIV two-drug regimen',
  'tecartus-brexucabtagene-mcl-full-approval-2026': 'Tecartus MCL full approval',
  'vasa-lilly-tunelab-camkii-cardiovascular-ai-2026': 'Vasa–Lilly CAMKII AI partnership',
  'roche-pathai-acquisition-digital-pathology-2026': 'Roche PathAI acquisition',
  'zepbound-kwikpen-goodrx-self-pay-2026': 'Zepbound KwikPen self-pay access',
  'foundayo-orforglipron-fda-approval-2026': 'Foundayo oral GLP-1 approval',
  'kresladi-marnetegragene-lad1-fda-2026': 'Kresladi LAD-I gene therapy',
  'awiqli-insulin-icodec-weekly-fda-2026': 'Awiqli weekly basal insulin',
  'adstiladrin-nadofaragene-nmibc-ema-chmp-2026': 'Adstiladrin NMIBC CHMP opinion',
  'imdylltra-tarlatamab-sclc-ema-chmp-2026': 'Imdylltra ES-SCLC CHMP opinion',
  'zepzelca-lurbinectedin-sclc-ema-chmp-2026': 'Zepzelca SCLC maintenance CHMP',
  'joenja-leniolisib-apds-ema-chmp-2026': 'Joenja APDS CHMP opinion',
  'lifyorli-relacorilant-ovarian-cancer-fda-2026': 'Lifyorli ovarian cancer approval',
  'lynarvo-linerixibat-pbc-fda-2026': 'Lynarvo PBC pruritus approval',
  'icotyde-icotrokinra-psoriasis-fda-2026': 'Icotyde oral psoriasis approval',
  'flovent-hfa-fluticasone-generic-fda-2026': 'Flovent HFA interchangeable generic',
};

/** Cluster → therapy hub + market report paths. */
/** @type {Record<string, { therapyHub: string; gccReport: string; saudiReport?: string; uaeReport?: string; blogPillar?: string }>} */
const CLUSTER_REPORT_LINKS = {
  'obesity-metabolic': {
    therapyHub: '/healthcare-market-research/therapy/diabetes-metabolic',
    gccReport: '/market-reports/gcc-diabetes-market-report',
    saudiReport: '/market-reports/saudi-arabia-diabetes-market-report',
    uaeReport: '/market-reports/uae-diabetes-market-report',
    blogPillar: '/blog/fda-update-glp-1-obesity-market-crackdown-2026',
  },
  'diabetes-metabolic': {
    therapyHub: '/healthcare-market-research/therapy/diabetes-metabolic',
    gccReport: '/market-reports/gcc-diabetes-market-report',
    saudiReport: '/market-reports/saudi-arabia-diabetes-market-report',
    uaeReport: '/market-reports/uae-diabetes-market-report',
  },
  'diabetes-biosimilar': {
    therapyHub: '/healthcare-market-research/therapy/biosimilars',
    gccReport: '/market-reports/gcc-biosimilars-market-report',
    saudiReport: '/market-reports/saudi-arabia-biosimilars-market-report',
    uaeReport: '/market-reports/uae-biosimilars-market-report',
  },
  'metabolic-rare': {
    therapyHub: '/healthcare-market-research/therapy/rare-diseases',
    gccReport: '/market-reports/gcc-rare-diseases-market-report',
    saudiReport: '/market-reports/saudi-arabia-rare-diseases-market-report',
  },
  'oncology-breast': {
    therapyHub: '/healthcare-market-research/therapy/oncology',
    gccReport: '/market-reports/gcc-oncology-market-report',
    saudiReport: '/market-reports/saudi-arabia-oncology-market-report',
    uaeReport: '/market-reports/uae-oncology-market-report',
  },
  'oncology-hematology': {
    therapyHub: '/healthcare-market-research/therapy/oncology',
    gccReport: '/market-reports/gcc-oncology-market-report',
    saudiReport: '/market-reports/saudi-arabia-oncology-market-report',
    uaeReport: '/market-reports/uae-oncology-market-report',
  },
  'oncology-lung': {
    therapyHub: '/healthcare-market-research/therapy/oncology',
    gccReport: '/market-reports/gcc-oncology-market-report',
    saudiReport: '/market-reports/saudi-arabia-oncology-market-report',
    uaeReport: '/market-reports/uae-oncology-market-report',
  },
  'oncology-urology': {
    therapyHub: '/healthcare-market-research/therapy/oncology',
    gccReport: '/market-reports/gcc-oncology-market-report',
    saudiReport: '/market-reports/saudi-arabia-oncology-market-report',
  },
  'oncology-gyn': {
    therapyHub: '/healthcare-market-research/therapy/oncology',
    gccReport: '/market-reports/gcc-oncology-market-report',
    saudiReport: '/market-reports/saudi-arabia-oncology-market-report',
  },
  'rare-gene': {
    therapyHub: '/healthcare-market-research/therapy/rare-diseases',
    gccReport: '/market-reports/gcc-rare-diseases-market-report',
    saudiReport: '/market-reports/saudi-arabia-rare-diseases-market-report',
  },
  'rare-genetic': {
    therapyHub: '/healthcare-market-research/therapy/rare-diseases',
    gccReport: '/market-reports/gcc-rare-diseases-market-report',
  },
  'rare-immunology': {
    therapyHub: '/healthcare-market-research/therapy/rare-diseases',
    gccReport: '/market-reports/gcc-rare-diseases-market-report',
  },
  'rare-pulmonary': {
    therapyHub: '/healthcare-market-research/therapy/respiratory',
    gccReport: '/market-reports/gcc-respiratory-market-report',
    saudiReport: '/market-reports/saudi-arabia-respiratory-market-report',
  },
  cardiovascular: {
    therapyHub: '/healthcare-market-research/therapy/cardiovascular',
    gccReport: '/market-reports/gcc-cardiovascular-market-report',
    saudiReport: '/market-reports/saudi-arabia-cardiovascular-market-report',
    uaeReport: '/market-reports/uae-cardiovascular-market-report',
  },
  'cardiovascular-digital': {
    therapyHub: '/healthcare-market-research/therapy/digital-health',
    gccReport: '/market-reports/gcc-digital-health-market-report',
    uaeReport: '/market-reports/uae-digital-health-market-report',
  },
  'neurology-ms': {
    therapyHub: '/healthcare-market-research/therapy/neurology-cns',
    gccReport: '/market-reports/gcc-neurology-cns-market-report',
    saudiReport: '/market-reports/saudi-arabia-neurology-cns-market-report',
  },
  'infectious-liver': {
    therapyHub: '/healthcare-market-research',
    gccReport: '/gcc-pharma-market-report-2026',
    blogPillar: '/blog/gcc-pharmaceuticals-market-2026',
  },
  'infectious-hiv': {
    therapyHub: '/healthcare-market-research',
    gccReport: '/gcc-pharma-market-report-2026',
    blogPillar: '/blog/market-access-strategy-uae',
  },
  vaccines: {
    therapyHub: '/healthcare-market-research/therapy/vaccines',
    gccReport: '/market-reports/gcc-vaccines-market-report',
    saudiReport: '/market-reports/saudi-arabia-vaccines-market-report',
  },
  'immunology-dermatology': {
    therapyHub: '/healthcare-market-research/therapy/immunology-biologics',
    gccReport: '/market-reports/gcc-dermatology-market-report',
    saudiReport: '/market-reports/saudi-arabia-dermatology-market-report',
    uaeReport: '/market-reports/uae-dermatology-market-report',
  },
  'gastro-hepatology': {
    therapyHub: '/healthcare-market-research/therapy/rare-diseases',
    gccReport: '/market-reports/gcc-rare-diseases-market-report',
  },
  'respiratory-biosimilar': {
    therapyHub: '/healthcare-market-research/therapy/respiratory',
    gccReport: '/market-reports/gcc-respiratory-market-report',
    saudiReport: '/market-reports/saudi-arabia-respiratory-market-report',
  },
  'digital-health': {
    therapyHub: '/healthcare-market-research/therapy/digital-health',
    gccReport: '/market-reports/gcc-digital-health-market-report',
    uaeReport: '/market-reports/uae-digital-health-market-report',
  },
};

/** Universal access / research links present in every article. */
/** @type {InternalLink[]} */
export const UNIVERSAL_LINKS = [
  { href: '/healthcare-market-research', anchor: 'healthcare market research hub' },
  { href: '/gcc-market-access-guide', anchor: 'GCC market access guide' },
  { href: '/sfda-market-access-strategy-saudi-arabia', anchor: 'SFDA registration strategy for Saudi Arabia' },
  { href: '/uae-market-access-research', anchor: 'UAE MOHAP and DHA market access research' },
  { href: '/saudi-payer-market-access-research', anchor: 'NUPCO tender and Saudi payer research' },
  { href: '/contact', anchor: 'contact BioNixus for a launch briefing' },
  { href: '/services/market-access', anchor: 'pharmaceutical market access consulting' },
];

/**
 * @param {string} slug
 * @returns {InternalLink[]}
 */
export function getInternalLinksForSlug(slug) {
  const cluster = THERAPEUTIC_CLUSTERS[slug] ?? 'general';
  const reports = CLUSTER_REPORT_LINKS[cluster] ?? {
    therapyHub: '/healthcare-market-research',
    gccReport: '/gcc-pharma-market-report-2026',
  };

  /** @type {InternalLink[]} */
  const links = [
    { href: '/healthcare-market-research', anchor: 'healthcare market research hub' },
    { href: reports.therapyHub, anchor: `${cluster.replace(/-/g, ' ')} therapy research programmes` },
    { href: reports.gccReport, anchor: 'GCC therapy market report' },
    { href: '/healthcare-market-research/saudi-arabia', anchor: 'Saudi Arabia healthcare market research' },
    { href: '/healthcare-market-research/uae', anchor: 'UAE healthcare market research' },
  ];

  if (reports.saudiReport) {
    links.push({ href: reports.saudiReport, anchor: 'Saudi Arabia therapy market report' });
  }
  if (reports.uaeReport) {
    links.push({ href: reports.uaeReport, anchor: 'UAE therapy market report' });
  }
  if (reports.blogPillar) {
    links.push({ href: reports.blogPillar, anchor: 'related GCC pharma market intelligence' });
  }

  links.push(
    { href: '/gcc-market-access-guide', anchor: 'GCC market access dossier guide' },
    { href: '/sfda-market-access-strategy-saudi-arabia', anchor: 'SFDA registration strategy for Saudi Arabia' },
    { href: '/saudi-payer-market-access-research', anchor: 'NUPCO tender and Saudi payer research' },
    { href: '/uae-market-access-research', anchor: 'UAE MOHAP and DHA market access research' },
    { href: '/blog/competitive-intelligence-pharma-gcc', anchor: 'competitive intelligence in GCC pharma' },
    { href: '/blog/kol-mapping-pharma-middle-east', anchor: 'KOL mapping for Middle East launches' },
    { href: '/blog/gcc-pharmacoeconomics', anchor: 'GCC pharmacoeconomics practical guide' },
    { href: '/services/market-access', anchor: 'pharmaceutical market access consulting' },
    { href: '/services/quantitative-research', anchor: 'quantitative healthcare research' },
    { href: '/contact', anchor: 'request a commercial launch briefing' },
  );

  const related = (CLUSTER_RELATED_SLUGS[cluster] ?? [])
    .filter((s) => s !== slug)
    .slice(0, 3);

  for (const rel of related) {
    links.push({
      href: `/blog/${rel}`,
      anchor: Q2_SLUG_TITLES[rel] ?? rel,
    });
  }

  return links;
}

/**
 * @param {string} slug
 * @returns {{ href: string; anchor: string }[]}
 */
export function getRelatedQ2Articles(slug) {
  const cluster = THERAPEUTIC_CLUSTERS[slug] ?? 'general';
  return (CLUSTER_RELATED_SLUGS[cluster] ?? [])
    .filter((s) => s !== slug)
    .slice(0, 4)
    .map((s) => ({ href: `/blog/${s}`, anchor: Q2_SLUG_TITLES[s] ?? s }));
}
