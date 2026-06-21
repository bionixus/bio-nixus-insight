/**
 * Generates SEO JSON scaffolds for BIO-435 Day 1 articles.
 * Copywriter replaces bodyHtml placeholders before publish.
 *
 * Usage: node scripts/scaffold-bio435-day1-json.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/bio435-day1-manifest.json'), 'utf8'),
);

/** @type {Record<string, { title: string; metaTitle: string; metaDescription: string; focusKeyword: string; keywords: string[]; excerpt: string; toc: { heading: string; anchor: string }[]; faq: { question: string; answer: string }[]; internalLinks: string[] }>} */
const SPECS = {
  'ema-hta-evidence-requirements-europe-2026': {
    title: 'EMA HTA Evidence Requirements for Pharmaceutical Market Access in Europe (2026)',
    metaTitle: 'EMA HTA Evidence Requirements Europe 2026 | BioNixus',
    metaDescription:
      'How EU HTA Regulation shapes pharmaceutical market access evidence in 2026: JCA timelines, RWE expectations, and primary research for HTA dossiers.',
    focusKeyword: 'healthcare market research europe',
    keywords: ['healthcare market research europe', 'EMA HTA regulation', 'joint clinical assessment EU', 'pharmaceutical market access Europe'],
    excerpt: 'A 2026 guide to EMA and EU HTA evidence requirements for pharmaceutical market access, covering JCA timelines, RWE, and country-level pricing divergence.',
    toc: [
      { heading: 'EU HTA Regulation timeline and what changes in 2026', anchor: 'hta-timeline' },
      { heading: 'Joint Clinical Assessment vs Joint Scientific Consultation', anchor: 'jca-vs-jsc' },
      { heading: 'Real-world evidence expectations for EU HTA', anchor: 'rwe-expectations' },
      { heading: 'Country-level pricing divergence across DE, FR, and ES', anchor: 'country-divergence' },
      { heading: 'How primary research supports HTA dossiers', anchor: 'primary-research' },
      { heading: 'How BioNixus supports EU fieldwork', anchor: 'bionixus-eu' },
      { heading: 'FAQ', anchor: 'faq' },
    ],
    faq: [
      { question: 'When does the EU HTA Regulation apply to new products?', answer: 'Placeholder — MRM to validate JCA rollout dates for oncology and ATMPs.' },
      { question: 'Is a Joint Clinical Assessment mandatory for all EU launches?', answer: 'Placeholder — Copywriter to expand with scoped product categories.' },
      { question: 'What RWE do EU HTA bodies accept?', answer: 'Placeholder — cite EMA/RWE framework directionally.' },
      { question: 'Do Germany, France, and Spain still require local evidence?', answer: 'Placeholder — AMNOG/HAS/regional pricing context.' },
      { question: 'How can market research reduce HTA dossier risk?', answer: 'Placeholder — physician/payer primary research value prop.' },
    ],
    internalLinks: ['/healthcare-market-research', '/healthcare-market-research/europe', '/healthcare-market-research/germany', '/heor-consulting'],
  },
  'fda-real-world-evidence-market-access-usa-2026': {
    title: 'FDA Real-World Evidence for Market Access: A 2026 Guide for Pharma Teams',
    metaTitle: 'FDA Real-World Evidence Market Access USA 2026 | BioNixus',
    metaDescription:
      'How pharma teams use FDA-aligned real-world evidence for US market access in 2026: payer vs FDA needs, RWD sources, and launch design pitfalls.',
    focusKeyword: 'pharmaceutical market research USA',
    keywords: ['pharmaceutical market research USA', 'FDA real world evidence guidance', 'RWE market access USA', 'HEOR United States'],
    excerpt: 'A practical 2026 guide to FDA real-world evidence for US pharmaceutical market access, payer alignment, and RWD design for launch teams.',
    toc: [
      { heading: 'FDA real-world evidence framework update', anchor: 'fda-rwe-framework' },
      { heading: 'Payer vs FDA evidence needs', anchor: 'payer-vs-fda' },
      { heading: 'Claims, EHR, and RWD sources', anchor: 'rwd-sources' },
      { heading: 'Design pitfalls for US launches', anchor: 'design-pitfalls' },
      { heading: 'Linking RWE to pricing and access decisions', anchor: 'rwe-pricing' },
      { heading: 'How BioNixus supports US programs', anchor: 'bionixus-us' },
      { heading: 'FAQ', anchor: 'faq' },
    ],
    faq: [
      { question: 'Does FDA accept RWE for label expansions in 2026?', answer: 'Placeholder — MRM to cite current FDA RWE guidance.' },
      { question: 'What do US payers require beyond FDA approval?', answer: 'Placeholder — ICER/payer dossier context.' },
      { question: 'Which RWD sources are most defensible?', answer: 'Placeholder — claims vs EHR vs registries.' },
      { question: 'When should RWE planning start for a US launch?', answer: 'Placeholder — 18–24 month planning horizon.' },
      { question: 'How does BioNixus combine RWE with primary research?', answer: 'Placeholder — mixed-methods value prop.' },
    ],
    internalLinks: ['/healthcare-market-research', '/healthcare-market-research/united-states', '/real-world-evidence', '/contact'],
  },
  'saudi-healthcare-market-research-guide-ar-2026': {
    title: 'دليل أبحاث السوق الصحي في المملكة العربية السعودية 2026',
    metaTitle: 'أبحاث السوق الصحي السعودية 2026 | BioNixus',
    metaDescription:
      'دليل عملي لأبحاث السوق الصحي والدوائي في السعودية 2026: SFDA وNUPCO والمنهجيات الكمية والنوعية لفرق الأدوية.',
    focusKeyword: 'أبحاث السوق الصحي السعودية',
    keywords: ['أبحاث السوق الصحي السعودية', 'أبحاث السوق الدوائية السعودية', 'SFDA', 'NUPCO'],
    excerpt: 'دليل 2026 لأبحاث السوق الصحي في المملكة العربية السعودية يغطي SFDA وNUPCO والمنهجيات والمجالات العلاجية ذات الأولوية.',
    toc: [
      { heading: 'مشهد الرعاية الصحية وVision 2030', anchor: 'vision-2030' },
      { heading: 'SFDA وNUPCO: ما يحتاجه فرق الأدوية', anchor: 'sfda-nupco' },
      { heading: 'المنهجيات الكمية والنوعية', anchor: 'methodologies' },
      { heading: 'مجالات علاجية ذات أولوية', anchor: 'therapy-areas' },
      { heading: 'أخطاء شائعة في الدراسات المحلية', anchor: 'common-mistakes' },
      { heading: 'BioNixus في السعودية', anchor: 'bionixus-ksa' },
      { heading: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    faq: [
      { question: 'ما الفرق بين أبحاث السوق الصحي والدوائي في السعودية؟', answer: 'Placeholder — Copywriter AR.' },
      { question: 'كيف يؤثر SFDA على تصميم الدراسات؟', answer: 'Placeholder — MRM validate.' },
      { question: 'هل NUPCO يتطلب أدلة اقتصادية؟', answer: 'Placeholder.' },
      { question: 'متى نبدأ البحث قبل الإطلاق؟', answer: 'Placeholder.' },
      { question: 'هل BioNixus تدعم الدراسات ثنائية اللغة؟', answer: 'Placeholder.' },
    ],
    internalLinks: ['/ar/healthcare-market-research/saudi-arabia', '/sfda-market-access-strategy-saudi-arabia'],
  },
  'pharmamarktforschung-deutschland-2026': {
    title: 'Pharmamarktforschung Deutschland 2026: AMNOG, G-BA und Evidenzanforderungen',
    metaTitle: 'Pharmamarktforschung Deutschland 2026 | BioNixus',
    metaDescription:
      'Pharmamarktforschung in Deutschland 2026: AMNOG, G-BA-Evidenz, Marktzugang und primäre Forschung für Pharma-Teams.',
    focusKeyword: 'pharmamarktforschung deutschland',
    keywords: ['pharmamarktforschung deutschland', 'Gesundheitsmarktforschung Deutschland', 'AMNOG Marktzugang'],
    excerpt: 'Leitfaden zur Pharmamarktforschung in Deutschland 2026 mit Fokus auf AMNOG, G-BA und Evidenzanforderungen.',
    toc: [
      { heading: 'Deutscher Pharmamarkt 2026', anchor: 'markt-2026' },
      { heading: 'AMNOG und frühe Nutzenbewertung', anchor: 'amnog' },
      { heading: 'G-BA-Evidenzanforderungen', anchor: 'gba-evidenz' },
      { heading: 'Primärforschung mit Ärzten und Kostenträgern', anchor: 'primaerforschung' },
      { heading: 'Typische Fehler bei lokalen Studien', anchor: 'fehler' },
      { heading: 'BioNixus in Deutschland', anchor: 'bionixus-de' },
      { heading: 'FAQ', anchor: 'faq' },
    ],
    faq: [
      { question: 'Was verlangt der G-BA von Marktforschungsdaten?', answer: 'Placeholder DE.' },
      { question: 'Wann startet AMNOG für neue Wirkstoffe?', answer: 'Placeholder.' },
      { question: 'Welche Methoden kombiniert BioNixus?', answer: 'Placeholder.' },
      { question: 'Brauchen Studien deutsche und englische Instrumente?', answer: 'Placeholder.' },
      { question: 'Wie unterstützt BioNixus den Marktzugang?', answer: 'Placeholder.' },
    ],
    internalLinks: ['/de/healthcare-market-research/germany', '/healthcare-market-research/germany'],
  },
  'etudes-marche-pharmaceutique-france-2026': {
    title: 'Études de marché pharmaceutique en France 2026 : HAS, accès et recherche',
    metaTitle: 'Études de marché pharmaceutique France 2026 | BioNixus',
    metaDescription:
      'Études de marché pharmaceutique en France 2026 : exigences HAS, accès au marché et recherche primaire pour équipes pharma.',
    focusKeyword: 'études de marché pharmaceutique france',
    keywords: ['études de marché pharmaceutique france', 'recherche santé france', 'accès au marché HAS'],
    excerpt: 'Guide 2026 des études de marché pharmaceutique en France : HAS, accès au marché et méthodologies de recherche.',
    toc: [
      { heading: 'Panorama du marché pharma français 2026', anchor: 'panorama' },
      { heading: 'HAS et exigences d\'accès', anchor: 'has-acces' },
      { heading: 'Recherche quantitative et qualitative', anchor: 'methodologies' },
      { heading: 'Erreurs fréquentes dans les études locales', anchor: 'erreurs' },
      { heading: 'BioNixus en France', anchor: 'bionixus-fr' },
      { heading: 'FAQ', anchor: 'faq' },
    ],
    faq: [
      { question: 'Quelles données la HAS exige-t-elle?', answer: 'Placeholder FR.' },
      { question: 'Quand lancer une étude avant accès?', answer: 'Placeholder.' },
      { question: 'BioNixus couvre-t-elle les payeurs français?', answer: 'Placeholder.' },
      { question: 'Études en français ou bilingues?', answer: 'Placeholder.' },
      { question: 'Comment lier recherche et stratégie d\'accès?', answer: 'Placeholder.' },
    ],
    internalLinks: ['/fr/healthcare-market-research/france'],
  },
  'investigacion-mercado-farmaceutico-espana-2026': {
    title: 'Investigación de mercado farmacéutico en España 2026: guía para equipos de acceso',
    metaTitle: 'Investigación mercado farmacéutico España 2026 | BioNixus',
    metaDescription:
      'Guía 2026 de investigación de mercado farmacéutico en España: acceso al mercado, metodologías y evidencia para equipos de lanzamiento.',
    focusKeyword: 'investigación de mercado farmacéutico',
    keywords: ['investigación de mercado farmacéutico', 'estudios de mercado salud españa', 'acceso mercado farmacéutico'],
    excerpt: 'Guía práctica de investigación de mercado farmacéutico en España para equipos de acceso al mercado en 2026.',
    toc: [
      { heading: 'Panorama del mercado farmacéutico español 2026', anchor: 'panorama' },
      { heading: 'Requisitos de acceso al mercado', anchor: 'acceso' },
      { heading: 'Metodologías cuantitativas y cualitativas', anchor: 'metodologias' },
      { heading: 'Errores comunes en estudios locales', anchor: 'errores' },
      { heading: 'BioNixus en España', anchor: 'bionixus-es' },
      { heading: 'FAQ', anchor: 'faq' },
    ],
    faq: [
      { question: '¿Qué evidencia exigen los pagadores en España?', answer: 'Placeholder ES.' },
      { question: '¿Cuándo iniciar la investigación pre-lanzamiento?', answer: 'Placeholder.' },
      { question: '¿Estudios en español o bilingües?', answer: 'Placeholder.' },
      { question: '¿Cómo evitar sesgos metodológicos?', answer: 'Placeholder.' },
      { question: '¿Cómo apoya BioNixus el acceso al mercado?', answer: 'Placeholder.' },
    ],
    internalLinks: ['/es/healthcare-market-research/spain'],
  },
  'pesquisa-mercado-farmaceutico-brasil-anvisa-2026': {
    title: 'Pesquisa de mercado farmacêutico no Brasil 2026: ANVISA, CONITEC e lançamento',
    metaTitle: 'Pesquisa mercado farmacêutico Brasil 2026 | BioNixus',
    metaDescription:
      'Pesquisa de mercado farmacêutico no Brasil 2026: ANVISA, CONITEC, metodologias e erros comuns para equipes de lançamento.',
    focusKeyword: 'pesquisa de mercado farmacêutico brasil',
    keywords: ['pesquisa de mercado farmacêutico brasil', 'ANVISA registro', 'CONITEC incorporação', 'pesquisa mercado saúde brasil'],
    excerpt: 'Guia 2026 de pesquisa de mercado farmacêutico no Brasil com foco em ANVISA, CONITEC e preparação de lançamento.',
    toc: [
      { heading: 'Panorama do mercado farmacêutico brasileiro 2026', anchor: 'panorama' },
      { heading: 'ANVISA e registro', anchor: 'anvisa' },
      { heading: 'CONITEC e incorporação', anchor: 'conitec' },
      { heading: 'Pesquisa primária com médicos e pagadores', anchor: 'pesquisa-primaria' },
      { heading: 'Erros comuns em estudos locais', anchor: 'erros' },
      { heading: 'BioNixus no Brasil', anchor: 'bionixus-br' },
      { heading: 'FAQ', anchor: 'faq' },
    ],
    faq: [
      { question: 'O que a CONITEC exige de evidências?', answer: 'Placeholder PT-BR.' },
      { question: 'Quando iniciar pesquisa antes do lançamento?', answer: 'Placeholder.' },
      { question: 'ANVISA vs exigências de pagadores privados?', answer: 'Placeholder.' },
      { question: 'Estudos em português ou bilíngues?', answer: 'Placeholder.' },
      { question: 'Como a BioNixus apoia lançamentos no Brasil?', answer: 'Placeholder.' },
    ],
    internalLinks: ['/healthcare-market-research/brazil', '/top-market-research-companies-brazil-2026'],
  },
  'pharmaceutical-market-research-china-2026': {
    title: '2026年医药市场研究指南：全球药企亚太证据策略',
    metaTitle: '医药市场研究指南 2026 | BioNixus',
    metaDescription:
      '2026年医药市场研究指南：亚太证据策略、研究方法与市场准入要点，助力全球药企区域决策。',
    focusKeyword: '医药市场研究',
    keywords: ['医药市场研究', '制药市场研究', '医疗健康市场调研'],
    excerpt: '2026年医药市场研究指南，涵盖亚太证据策略与全球药企区域研究方法。',
    toc: [
      { heading: '亚太医药市场趋势 2026', anchor: 'trends' },
      { heading: '研究方法：定量与定性', anchor: 'methods' },
      { heading: '证据策略与监管考量', anchor: 'regulatory' },
      { heading: '常见研究设计误区', anchor: 'pitfalls' },
      { heading: 'BioNixus 亚太支持', anchor: 'bionixus-apac' },
      { heading: '常见问题', anchor: 'faq' },
    ],
    faq: [
      { question: '全球药企为何需要亚太本地化研究?', answer: 'Placeholder ZH.' },
      { question: '定量与定性如何组合?', answer: 'Placeholder.' },
      { question: '研究应何时启动?', answer: 'Placeholder.' },
      { question: 'BioNixus 提供哪些服务?', answer: 'Placeholder.' },
      { question: '如何确保数据可比性?', answer: 'Placeholder.' },
    ],
    internalLinks: ['/zh/healthcare-market-research'],
  },
  'farmacevticheskie-issledovaniya-rynka-2026': {
    title: 'Фармацевтические исследования рынка 2026: методология и доступ на рынок',
    metaTitle: 'Фармацевтические исследования рынка 2026 | BioNixus',
    metaDescription:
      'Фармацевтические исследования рынка в 2026: методология, доступ на рынок и первичные исследования для фармкоманд.',
    focusKeyword: 'фармацевтические исследования рынка',
    keywords: ['фармацевтические исследования рынка', 'маркетинговые исследования фарма', 'исследование рынка здравоохранения'],
    excerpt: 'Руководство по фармацевтическим исследованиям рынка 2026: методология и доступ на рынок.',
    toc: [
      { heading: 'Обзор рынка 2026', anchor: 'overview' },
      { heading: 'Методология количественных и качественных исследований', anchor: 'methods' },
      { heading: 'Требования доступа на рынок', anchor: 'access' },
      { heading: 'Типичные ошибки локальных исследований', anchor: 'mistakes' },
      { heading: 'BioNixus в регионе', anchor: 'bionixus' },
      { heading: 'FAQ', anchor: 'faq' },
    ],
    faq: [
      { question: 'Какие методы исследования наиболее востребованы?', answer: 'Placeholder RU.' },
      { question: 'Когда начинать исследование перед запуском?', answer: 'Placeholder.' },
      { question: 'Как обеспечить достоверность данных?', answer: 'Placeholder.' },
      { question: 'Поддерживает ли BioNixus многострановые программы?', answer: 'Placeholder.' },
      { question: 'Как связать исследование со стратегией доступа?', answer: 'Placeholder.' },
    ],
    internalLinks: ['/ru/healthcare-market-research'],
  },
};

function buildBodySkeleton(title, toc, internalLinks) {
  const hub = internalLinks[0] || '/healthcare-market-research';
  const sections = toc
    .filter((t) => t.anchor !== 'faq')
    .map(
      (t) =>
        `<h2 id="${t.anchor}">${t.heading}</h2>\n<p>[COPYWRITER: Expand this section with 250–350 words. Cite regulators/payers where applicable. E-E-A-T tone.]</p>`,
    )
    .join('\n\n');
  return `<h1>${title}</h1>\n\n<p>[COPYWRITER: Opening paragraph — link to <a href="${hub}">healthcare market research</a> within first 200 words. Match search intent.]</p>\n\n${sections}`;
}

const now = new Date().toISOString();
let written = 0;

for (const entry of manifest.articles) {
  const spec = SPECS[entry.slug];
  if (!spec) continue;
  const data = {
    seo: {
      metaTitle: spec.metaTitle,
      metaDescription: spec.metaDescription,
      focusKeyword: spec.focusKeyword,
      keywords: spec.keywords,
      canonicalUrl: `https://www.bionixus.com/blog/${entry.slug}`,
      noIndex: false,
    },
    title: spec.title,
    slug: { current: entry.slug },
    excerpt: spec.excerpt,
    language: entry.language,
    country: entry.country,
    category: entry.category,
    readingTime: entry.readingTime,
    publishedAt: now,
    updatedAt: now,
    tags: spec.keywords.slice(0, 5),
    tableOfContents: spec.toc,
    faq: spec.faq,
    bodyHtml: buildBodySkeleton(spec.title, spec.toc, spec.internalLinks),
    _scaffold: true,
    _copywriterNote: 'Replace all [COPYWRITER: ...] blocks and FAQ Placeholder answers before running publish-bio435-article.mjs',
  };
  const outPath = path.join(__dirname, 'data', `${entry.slug}.json`);
  fs.writeFileSync(outPath, `${JSON.stringify(data, null, 2)}\n`);
  written += 1;
}

console.log(`Wrote ${written} scaffold JSON files to scripts/data/`);
