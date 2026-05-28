/**
 * Internal link map for legacy (pre–Q2 2026) blog posts.
 * Each slug should receive ≥5 contextual same-site links when rewritten.
 */

/** @typedef {{ href: string; anchor: string }} InternalLink */

/** @type {Record<string, string>} slug → cluster key */
export const LEGACY_SLUG_CLUSTERS = {
  'gcc-pharmaceuticals-market-2026': 'gcc-pillar',
  'gcc-pharmaceuticals-market-arabic-2026': 'gcc-pillar',
  'gcc-pharmaceutical-market-comparison-uae-saudi-kuwait': 'gcc-pillar',
  'gcc-clinical-trials-market-2026': 'gcc-pillar',
  'gcc-pharmacy-market-2026': 'gcc-pillar',
  'gcc-pharmacoeconomics': 'access',
  'pharmacoeconomics-gcc-practical-guide': 'access',
  'middle-east-healthcare-market-statistics-2026': 'gcc-pillar',
  'regional-crisis-impact-middle-east-economies-healthcare-2026': 'gcc-pillar',
  'pharmaceutical-healthcare-market-research-gcc': 'gcc-pillar',
  'healthcare-market-research-methodologies-gcc': 'methodology',
  'competitive-intelligence-pharma-gcc': 'commercial',
  'kol-mapping-pharma-middle-east': 'commercial',
  'pharma-market-entry-saudi-arabia-playbook': 'saudi',
  'pharmaceutical-market-entry-saudi-arabia-2026-guide': 'saudi',
  'saudi-arabia-healthcare-market-2026': 'saudi',
  'nupco-saudi-arabia-tendering-guide': 'saudi',
  'sfda-drug-registration-guide': 'saudi',
  'sfda-approval-qfitlia-saudi-arabia-pharmaceutical-market': 'saudi',
  'rare-disease-orphan-drug-saudi-arabia-sfda-2026': 'saudi',
  'patient-journey-mapping-saudi-arabia': 'saudi',
  'top-healthcare-market-research-firms-saudi-arabia': 'saudi',
  'quantitative-healthcare-market-research-ksa': 'saudi',
  'top-therapy-areas-pharma-growth-saudi-arabia': 'saudi',
  'pharmacies-saudi-arabia-market-research-marketing-automation': 'saudi',
  'saudi-healthcare-market-research-firms-ar': 'saudi',
  'سوق-الدواء-السعودي-2026': 'saudi',
  'market-access-strategy-uae': 'uae',
  'market-research-pharmaceutical-market-access-uae': 'uae',
  'abu-dhabi-doh-vs-dubai-dha-formulary-guide': 'uae',
  'healthcare-market-research-uae-guide-2025': 'uae',
  'uae-healthcare-market-overview-2026': 'uae',
  'uae-healthcare-market-trends-2025': 'uae',
  'oncology-uae-2026-cancer-care-outlook': 'uae',
  'quantitative-healthcare-market-research-uae': 'uae',
  'top-healthcare-market-research-companies-uae': 'uae',
  'kuwait-healthcare-market-trends-2026': 'kuwait',
  'healthcare-overview-kuwait-market-2026': 'kuwait',
  'drug-registration-kuwait-pharma-guide': 'kuwait',
  'healthcare-overview-qatar-market-2026': 'qatar',
  'healthcare-overview-egypt-market-2026': 'egypt',
  'top-market-research-companies-egypt-2026': 'egypt',
  'healthcare-overview-china-market-2026': 'china',
  'pharmaceutical-market-research-uk-2026': 'europe',
  'healthcare-market-research-europe-2026': 'europe',
  'nice-hta-evidence-requirements-guide': 'europe',
  'emea-jca-market-access-update-2026': 'europe',
  'gesundheitsmarkt-deutschland-2026': 'germany',
  'deutsche-pharmaunternehmen-2026-pipeline-updates': 'germany',
  'fda-update-glp-1-obesity-market-crackdown-2026': 'access',
  'digital-therapeutics-regulation-mena-markets': 'digital',
  'physician-surveys-healthcare-digital-health-2026': 'digital',
  'oncology-uae-2026-cancer-care-outlook': 'oncology',
  'recruiting-high-scarcity-specialists-oncology-quantitative-studies': 'oncology',
  'quantitative-market-research-and-market-access': 'methodology',
  'quantitative-healthcare-market-research-ksa': 'saudi',
  'quantitative-healthcare-market-research-uae': 'uae',
  'physician-surveys-healthcare': 'methodology',
  'pharmaceutical-market-research-methods-mena': 'methodology',
  'ai-vs-human-insight-validating-quantitative-data-2026-pharma-research': 'methodology',
  'data-privacy-beyond-hipaa-global-quantitative-research-compliance-2026': 'methodology',
  'maxdiff-vs-conjoint-analysis-medtech-pricing': 'methodology',
  'shift-to-always-on-quantitative-tracking-why-periodic-studies-are-dying': 'methodology',
  'hospital-market-research': 'firm-guide',
  'top-healthcare-market-research-companies-mena': 'firm-guide',
  'أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي': 'gcc-pillar',
};

/** Human-readable titles for related-reading blocks. */
/** @type {Record<string, string>} */
export const LEGACY_SLUG_TITLES = {
  'gcc-pharmaceuticals-market-2026': 'GCC pharmaceuticals market 2026',
  'gcc-pharmacoeconomics': 'GCC pharmacoeconomics overview',
  'pharmacoeconomics-gcc-practical-guide': 'GCC pharmacoeconomics practical guide',
  'competitive-intelligence-pharma-gcc': 'competitive intelligence in GCC pharma',
  'kol-mapping-pharma-middle-east': 'KOL mapping for Middle East launches',
  'nupco-saudi-arabia-tendering-guide': 'NUPCO Saudi Arabia tendering guide',
  'sfda-drug-registration-guide': 'SFDA drug registration guide',
  'market-access-strategy-uae': 'UAE market access strategy',
  'abu-dhabi-doh-vs-dubai-dha-formulary-guide': 'Abu Dhabi DOH vs Dubai DHA formulary guide',
  'fda-update-glp-1-obesity-market-crackdown-2026': 'FDA GLP-1 obesity market update 2026',
  'emea-jca-market-access-update-2026': 'EMEA joint HTA (JCA) update 2026',
  'digital-therapeutics-regulation-mena-markets': 'digital therapeutics regulation in MENA',
  'top-healthcare-market-research-companies-uae': 'top UAE healthcare market research companies',
  'top-healthcare-market-research-firms-saudi-arabia': 'top Saudi healthcare research firms',
  'quantitative-healthcare-market-research-uae': 'quantitative healthcare research in the UAE',
  'pharmaceutical-market-entry-saudi-arabia-2026-guide': 'Saudi Arabia pharma market entry guide',
  'foundayo-orforglipron-fda-approval-2026': 'Foundayo oral GLP-1 FDA approval',
  'obesity-pbm-coverage-lilly-portfolio-q2-2026': 'Lilly obesity PBM coverage Q2 2026',
};

/** @type {Record<string, { hub: string; report: string; countryHub?: string; blogPillar?: string }>} */
const CLUSTER_PATHS = {
  'gcc-pillar': {
    hub: '/healthcare-market-research',
    report: '/market-reports/gcc-pharma-market-report-2026',
    blogPillar: '/blog/gcc-pharmaceuticals-market-2026',
  },
  saudi: {
    hub: '/healthcare-market-research/saudi-arabia',
    report: '/market-reports/saudi-arabia-pharma-market-report-2026',
    countryHub: '/healthcare-market-research/saudi-arabia',
    blogPillar: '/blog/saudi-arabia-healthcare-market-2026',
  },
  uae: {
    hub: '/healthcare-market-research/uae',
    report: '/market-reports/uae-pharma-market-report-2026',
    countryHub: '/healthcare-market-research/uae',
    blogPillar: '/blog/uae-healthcare-market-overview-2026',
  },
  kuwait: {
    hub: '/healthcare-market-research/kuwait',
    report: '/market-reports/kuwait-pharma-market-report-2026',
    countryHub: '/healthcare-market-research/kuwait',
    blogPillar: '/blog/healthcare-overview-kuwait-market-2026',
  },
  egypt: {
    hub: '/healthcare-market-research/egypt',
    report: '/market-reports/egypt-pharma-market-report-2026',
    countryHub: '/healthcare-market-research/egypt',
    blogPillar: '/blog/healthcare-overview-egypt-market-2026',
  },
  qatar: {
    hub: '/healthcare-market-research/qatar',
    report: '/market-reports/qatar-pharma-market-report-2026',
    countryHub: '/healthcare-market-research/qatar',
    blogPillar: '/blog/healthcare-overview-qatar-market-2026',
  },
  china: {
    hub: '/healthcare-market-research/china',
    report: '/market-reports/china-pharma-market-report-2026',
    blogPillar: '/blog/healthcare-overview-china-market-2026',
  },
  europe: {
    hub: '/healthcare-market-research/europe',
    report: '/market-reports/europe-pharma-market-report-2026',
    blogPillar: '/blog/healthcare-market-research-europe-2026',
  },
  germany: {
    hub: '/healthcare-market-research/germany',
    report: '/market-reports/germany-pharma-market-report-2026',
    blogPillar: '/blog/gesundheitsmarkt-deutschland-2026',
  },
  access: {
    hub: '/healthcare-market-research',
    report: '/gcc-pharma-market-report-2026',
    blogPillar: '/blog/pharmacoeconomics-gcc-practical-guide',
  },
  methodology: {
    hub: '/healthcare-market-research',
    report: '/market-reports/gcc-pharma-market-report-2026',
    blogPillar: '/blog/pharmaceutical-market-research-methods-mena',
  },
  commercial: {
    hub: '/healthcare-market-research',
    report: '/market-reports/gcc-pharma-market-report-2026',
    blogPillar: '/blog/competitive-intelligence-pharma-gcc',
  },
  oncology: {
    hub: '/healthcare-market-research/therapy/oncology',
    report: '/market-reports/gcc-oncology-market-report',
    blogPillar: '/blog/oncology-uae-2026-cancer-care-outlook',
  },
  digital: {
    hub: '/healthcare-market-research/therapy/digital-health',
    report: '/market-reports/gcc-digital-health-market-report',
    blogPillar: '/blog/digital-therapeutics-regulation-mena-markets',
  },
  'firm-guide': {
    hub: '/healthcare-market-research',
    report: '/market-reports/gcc-pharma-market-report-2026',
    blogPillar: '/blog/top-healthcare-market-research-companies-mena',
  },
};

/** Related legacy + Q2 slugs by cluster (for cross-linking). */
/** @type {Record<string, string[]>} */
export const CLUSTER_RELATED_SLUGS = {
  'gcc-pillar': [
    'gcc-pharmaceuticals-market-2026',
    'gcc-clinical-trials-market-2026',
    'middle-east-healthcare-market-statistics-2026',
    'pharmaceutical-healthcare-market-research-gcc',
    'foundayo-orforglipron-fda-approval-2026',
  ],
  saudi: [
    'saudi-arabia-healthcare-market-2026',
    'nupco-saudi-arabia-tendering-guide',
    'sfda-drug-registration-guide',
    'pharmaceutical-market-entry-saudi-arabia-2026-guide',
    'kresladi-marnetegragene-lad1-fda-2026',
  ],
  uae: [
    'uae-healthcare-market-overview-2026',
    'market-access-strategy-uae',
    'abu-dhabi-doh-vs-dubai-dha-formulary-guide',
    'oncology-uae-2026-cancer-care-outlook',
    'baxfendy-baxdrostat-hypertension-fda-2026',
  ],
  kuwait: ['kuwait-healthcare-market-trends-2026', 'healthcare-overview-kuwait-market-2026', 'drug-registration-kuwait-pharma-guide'],
  egypt: ['healthcare-overview-egypt-market-2026', 'top-market-research-companies-egypt-2026'],
  access: [
    'pharmacoeconomics-gcc-practical-guide',
    'emea-jca-market-access-update-2026',
    'fda-update-glp-1-obesity-market-crackdown-2026',
    'nice-hta-evidence-requirements-guide',
    'obesity-pbm-coverage-lilly-portfolio-q2-2026',
  ],
  methodology: [
    'pharmaceutical-market-research-methods-mena',
    'quantitative-market-research-and-market-access',
    'ai-vs-human-insight-validating-quantitative-data-2026-pharma-research',
    'physician-surveys-healthcare',
  ],
  commercial: [
    'competitive-intelligence-pharma-gcc',
    'kol-mapping-pharma-middle-east',
    'pharma-market-entry-saudi-arabia-playbook',
    'roche-pathai-acquisition-digital-pathology-2026',
  ],
  oncology: [
    'oncology-uae-2026-cancer-care-outlook',
    'recruiting-high-scarcity-specialists-oncology-quantitative-studies',
    'datroway-datopotamab-tnbc-fda-approval-2026',
    'imdylltra-tarlatamab-sclc-ema-chmp-2026',
  ],
  europe: ['emea-jca-market-access-update-2026', 'nice-hta-evidence-requirements-guide', 'pharmaceutical-market-research-uk-2026'],
  digital: [
    'digital-therapeutics-regulation-mena-markets',
    'physician-surveys-healthcare-digital-health-2026',
    'roche-pathai-acquisition-digital-pathology-2026',
  ],
  'firm-guide': [
    'top-healthcare-market-research-companies-mena',
    'top-healthcare-market-research-companies-uae',
    'top-healthcare-market-research-firms-saudi-arabia',
  ],
};

/**
 * @param {string} slug
 */
export function inferLegacyCluster(slug) {
  if (LEGACY_SLUG_CLUSTERS[slug]) return LEGACY_SLUG_CLUSTERS[slug];
  if (/saudi|ksa|nupco|sfda|سوق-الدواء/i.test(slug)) return 'saudi';
  if (/uae|dubai|abu-dhabi|dha|doh/i.test(slug)) return 'uae';
  if (/kuwait/i.test(slug)) return 'kuwait';
  if (/egypt/i.test(slug)) return 'egypt';
  if (/qatar/i.test(slug)) return 'qatar';
  if (/china/i.test(slug)) return 'china';
  if (/germany|deutsche|gesundheit/i.test(slug)) return 'germany';
  if (/uk|nice|europe|emea|jca/i.test(slug)) return 'europe';
  if (/oncology|cancer|specialist/i.test(slug)) return 'oncology';
  if (/rare|orphan/i.test(slug)) return 'saudi';
  if (/quantitative|conjoint|maxdiff|physician-survey|privacy|ai-vs-human|always-on|methodolog/i.test(slug)) {
    return 'methodology';
  }
  if (/competitive|kol|market-entry|patient-journey|playbook/i.test(slug)) return 'commercial';
  if (/pharmacoecon|market-access|fda-update|glp/i.test(slug)) return 'access';
  if (/digital|dtx|therapeutic/i.test(slug)) return 'digital';
  if (/top-healthcare|hospital-market/i.test(slug)) return 'firm-guide';
  if (/gcc|middle-east|pharmaceutical-healthcare|clinical-trial/i.test(slug)) return 'gcc-pillar';
  return 'gcc-pillar';
}

/**
 * @param {string} slug
 * @returns {InternalLink[]}
 */
export function getInternalLinksForSlug(slug) {
  const cluster = inferLegacyCluster(slug);
  const paths = CLUSTER_PATHS[cluster] ?? CLUSTER_PATHS['gcc-pillar'];

  /** @type {InternalLink[]} */
  const links = [
    { href: '/healthcare-market-research', anchor: 'healthcare market research hub' },
    { href: paths.hub, anchor: `${cluster.replace(/-/g, ' ')} research programmes` },
    { href: paths.report, anchor: 'GCC and MENA market report' },
    { href: '/gcc-market-access-guide', anchor: 'GCC market access guide' },
    { href: '/sfda-market-access-strategy-saudi-arabia', anchor: 'SFDA registration strategy' },
    { href: '/uae-market-access-research', anchor: 'UAE MOHAP and DHA market access' },
    { href: '/saudi-payer-market-access-research', anchor: 'NUPCO and Saudi payer research' },
    { href: '/services/market-access', anchor: 'pharmaceutical market access consulting' },
    { href: '/services/quantitative-research', anchor: 'quantitative healthcare research' },
    { href: '/contact', anchor: 'contact BioNixus' },
  ];

  if (paths.blogPillar && paths.blogPillar !== `/blog/${slug}`) {
    links.push({
      href: paths.blogPillar,
      anchor: LEGACY_SLUG_TITLES[paths.blogPillar.replace('/blog/', '')] ?? 'related market intelligence',
    });
  }

  const related = (CLUSTER_RELATED_SLUGS[cluster] ?? CLUSTER_RELATED_SLUGS['gcc-pillar'] ?? [])
    .filter((s) => s !== slug)
    .slice(0, 4);

  for (const rel of related) {
    links.push({
      href: `/blog/${rel}`,
      anchor: LEGACY_SLUG_TITLES[rel] ?? rel.replace(/-/g, ' '),
    });
  }

  return links;
}

/**
 * @param {string} slug
 * @returns {{ href: string; anchor: string }[]}
 */
export function getRelatedReading(slug) {
  const cluster = inferLegacyCluster(slug);
  return (CLUSTER_RELATED_SLUGS[cluster] ?? [])
    .filter((s) => s !== slug)
    .slice(0, 5)
    .map((s) => ({
      href: `/blog/${s}`,
      anchor: LEGACY_SLUG_TITLES[s] ?? s.replace(/-/g, ' '),
    }));
}
