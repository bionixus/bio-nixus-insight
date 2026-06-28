#!/usr/bin/env node
/**
 * Generates home-hardcoded-i18n-checklist-v2.csv with full native translations
 * (acronyms expanded: GCC → Gulf Cooperation Council in each language, etc.)
 */
import { writeFileSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, 'data');

/** @type {Record<string, Record<'de'|'fr'|'es'|'pt'|'ru'|'zh'|'ar', string>>} */
const T = {
  ema_aligned: {
    de: 'Ausgerichtet an der Europäischen Arzneimittel-Agentur',
    fr: 'Aligné sur l’Agence européenne des médicaments',
    es: 'Alineado con la Agencia Europea de Medicamentos',
    pt: 'Alinhado à Agência Europeia de Medicamentos',
    ru: 'Соответствие Европейскому агентству лекарственных средств',
    zh: '符合欧洲药品管理局要求',
    ar: 'متوافق مع الوكالة الأوروبية للأدوية',
  },
  gdpr: {
    de: 'Konform mit der Datenschutz-Grundverordnung',
    fr: 'Conforme au Règlement général sur la protection des données',
    es: 'Conforme al Reglamento General de Protección de Datos',
    pt: 'Em conformidade com o Regulamento Geral de Proteção de Dados',
    ru: 'Соответствие Общему регламенту по защите данных',
    zh: '符合《通用数据保护条例》',
    ar: 'متوافق مع اللائحة العامة لحماية البيانات',
  },
  fda_saudi: {
    de: 'Konform mit der saudi-arabischen Lebensmittel- und Arzneimittelbehörde',
    fr: 'Conforme à l’Autorité saoudienne des aliments et des médicaments',
    es: 'Conforme con la Autoridad Saudí de Alimentos y Medicamentos',
    pt: 'Em conformidade com a Autoridade Saudita de Alimentos e Medicamentos',
    ru: 'Соответствие Управлению по контролю за продуктами и лекарствами Саудовской Аравии',
    zh: '符合沙特阿拉伯食品药品管理局要求',
    ar: 'متوافق مع الهيئة العامة للغذاء والدواء في السعودية',
  },
  mohap: {
    de: 'Konform mit dem Gesundheitsministerium der Vereinigten Arabischen Emirate',
    fr: 'Conforme au ministère de la Santé des Émirats arabes unis',
    es: 'Conforme con el Ministerio de Salud de los Emiratos Árabes Unidos',
    pt: 'Em conformidade com o Ministério da Saúde dos Emirados Árabes Unidos',
    ru: 'Соответствие Министерству здравоохранения Объединённых Арабских Эмиратов',
    zh: '符合阿联酋卫生部要求',
    ar: 'متوافق مع وزارة الصحة ووقاية المجتمع في الإمارات',
  },
  gcp: {
    de: 'Standards Guter Klinischer Praxis',
    fr: 'Normes de Bonnes Pratiques Cliniques',
    es: 'Estándares de Buenas Prácticas Clínicas',
    pt: 'Padrões de Boas Práticas Clínicas',
    ru: 'Стандарты Надлежащей клинической практики',
    zh: '良好临床规范标准',
    ar: 'معايير ممارسات التصنيع السريري الجيدة',
  },
};

/** Rows: [id, section, file, field, english, rule, de, fr, es, pt, ru, zh, ar] */
const rows = [
  [1, 'Compliance ribbon', 'PremiumComplianceRibbon.tsx', 'badge', 'EMA Aligned', 'Expand EMA', ...L('ema_aligned')],
  [2, 'Compliance ribbon', 'PremiumComplianceRibbon.tsx', 'badge', 'GDPR Compliant', 'Expand GDPR', ...L('gdpr')],
  [3, 'Compliance ribbon', 'PremiumComplianceRibbon.tsx', 'badge', 'FDA Compliant', 'Expand FDA (Saudi SFDA context on site)', ...L('fda_saudi')],
  [4, 'Compliance ribbon', 'PremiumComplianceRibbon.tsx', 'badge', 'MOHAP Compliant', 'Expand MOHAP', ...L('mohap')],
  [5, 'Compliance ribbon', 'PremiumComplianceRibbon.tsx', 'badge', 'GCP Standards', 'Expand GCP', ...L('gcp')],
  [
    6,
    'Hero dashboard',
    'PremiumHeroDashboard.tsx',
    'heading',
    'Market Intelligence Dashboard',
    'No English loanwords',
    'Marktinformations-Dashboard',
    'Tableau de bord d’information marché',
    'Panel de información de mercado',
    'Painel de informações de mercado',
    'Панель рыночной информации',
    '市场信息仪表盘',
    'لوحة معلومات السوق',
  ],
  [
    7,
    'Hero dashboard',
    'PremiumHeroDashboard.tsx',
    'status',
    'Live',
    'Translate UI label',
    'Aktuell',
    'En direct',
    'En vivo',
    'Ao vivo',
    'Актуально',
    '实时',
    'مباشر',
  ],
  [
    8,
    'Hero dashboard',
    'PremiumHeroDashboard.tsx',
    'callout_value',
    '~$1.8T',
    'Keep numeric',
    '~1,8 Bio. USD',
    '~1,8 bill. USD',
    '~1,8 bill. USD',
    '~US$ 1,8 tri',
    '~1,8 трln USD',
    '约 1.8 万亿美元',
    '~1.8 تريليون دولار',
  ],
  [
    9,
    'Hero dashboard',
    'PremiumHeroDashboard.tsx',
    'callout_label',
    'Global Pharma Market (2026E)',
    'Pharma → native; E → Prognose',
    'Globaler Arzneimittelmarkt (Prognose 2026)',
    'Marché mondial des médicaments (estimation 2026)',
    'Mercado farmacéutico global (estimación 2026)',
    'Mercado farmacêutico global (estimativa 2026)',
    'Глобальный фармацевтический рынок (прогноз 2026)',
    '全球医药市场（2026 年预测）',
    'السوق الدوائي العالمي (تقدير 2026)',
  ],
  [
    10,
    'Hero dashboard',
    'PremiumHeroDashboard.tsx',
    'callout_cagr',
    '↑ ~6% CAGR 2024–2026',
    'Expand CAGR',
    '↑ ~6 % durchschnittliche jährliche Wachstumsrate 2024–2026',
    '↑ ~6 % taux de croissance annuel composé 2024–2026',
    '↑ ~6 % tasa de crecimiento anual compuesta 2024–2026',
    '↑ ~6% taxa de crescimento anual composta 2024–2026',
    '↑ ~6% среднегодовой темп роста 2024–2026',
    '↑ 约 6% 复合年增长率 2024–2026',
    '↑ ~6% معدل النمو السنوي المركب 2024–2026',
  ],
  [
    11,
    'Hero dashboard',
    'PremiumHeroDashboard.tsx',
    'legend',
    'Global benchmark',
    'No Benchmark loanword',
    'Globale Referenz',
    'Référence mondiale',
    'Referencia global',
    'Referência global',
    'Глобальный ориентир',
    '全球参照基准',
    'معيار عالمي',
  ],
  [
    12,
    'Hero dashboard',
    'PremiumHeroDashboard.tsx',
    'legend',
    'Regional depth',
    'Full translation',
    'Regionale Markttiefe',
    'Profondeur régionale',
    'Profundidad regional',
    'Profundidade regional',
    'Региональная глубина',
    '区域深度',
    'عمق إقليمي',
  ],
  [
    13,
    'Hero dashboard',
    'PremiumHeroDashboard.tsx',
    'metric_label',
    'Global Pharma',
    'Pharma → Arzneimittel',
    'Globaler Arzneimittelmarkt',
    'Médicaments — monde',
    'Fármacos — global',
    'Medicamentos — global',
    'Мировые лекарства',
    '全球医药',
    'الأدوية — عالمياً',
  ],
  [
    14,
    'Hero dashboard',
    'PremiumHeroDashboard.tsx',
    'metric_sub',
    '2026E market',
    'E → Prognose',
    'Marktprognose 2026',
    'Marché estimé 2026',
    'Mercado estimado 2026',
    'Mercado estimado 2026',
    'Прогноз рынка 2026',
    '2026 年预测市场',
    'تقدير السوق 2026',
  ],
  [
    15,
    'Hero dashboard',
    'PremiumHeroDashboard.tsx',
    'metric_label',
    'Americas Pharma',
    'Expand region + pharma',
    'Arzneimittelmarkt Amerika',
    'Médicaments — Amériques',
    'Fármacos — Américas',
    'Medicamentos — Américas',
    'Лекарства — Америка',
    '美洲医药市场',
    'الأدوية — الأمريكتان',
  ],
  [
    16,
    'Hero dashboard',
    'PremiumHeroDashboard.tsx',
    'metric_label',
    'APAC Pharma',
    'Expand APAC',
    'Arzneimittelmarkt Asien und Pazifik',
    'Médicaments — Asie et Pacifique',
    'Fármacos — Asia y Pacífico',
    'Medicamentos — Ásia e Pacífico',
    'Лекарства — Азия и Тихий океан',
    '亚太医药市场',
    'الأدوية — آسيا والمحيط الهادئ',
  ],
  [
    17,
    'Global reach',
    'GlobalReachSection.tsx',
    'signal',
    '6 continents · 38 countries',
    'Full translation',
    '6 Kontinente · 38 Länder',
    '6 continents · 38 pays',
    '6 continentes · 38 países',
    '6 continentes · 38 países',
    '6 континентов · 38 стран',
    '6 大洲 · 38 个国家',
    '6 قارات · 38 دولة',
  ],
  [
    18,
    'Global reach',
    'GlobalReachSection.tsx',
    'signal',
    'Pharma & healthcare — where we lead',
    'No Pharma/Healthcare English',
    'Arzneimittel und Gesundheitswesen — unsere Kernkompetenz',
    'Médicaments et santé — notre cœur de métier',
    'Medicamentos y sanidad — donde lideramos',
    'Medicamentos e saúde — onde lideramos',
    'Лекарства и здравоохранение — наше ядро',
    '医药与健康 — 我们的核心优势',
    'الأدوية والرعاية الصحية — حيث نتصدر',
  ],
  [
    19,
    'Global reach',
    'GlobalReachSection.tsx',
    'signal',
    'Enterprise & consumer research',
    'No B2B shorthand in DE',
    'Forschung für Unternehmen und Verbraucher',
    'Recherche entreprises et consommateurs',
    'Investigación empresarial y de consumo',
    'Pesquisa empresarial e de consumo',
    'Исследования для предприятий и потребителей',
    '企业与消费者研究',
    'أبحاث المؤسسات والمستهلكين',
  ],
  [
    20,
    'Global reach',
    'GlobalReachSection.tsx',
    'signal',
    'GDPR · GCP · local regulatory alignment',
    'Expand acronyms',
    'Datenschutz-Grundverordnung · Gute Klinische Praxis · lokale Regulierungskonformität',
    'RGPD · Bonnes Pratiques Cliniques · alignement réglementaire local',
    'RGPD · Buenas Prácticas Clínicas · alineamiento regulatorio local',
    'Proteção de dados · Boas Práticas Clínicas · conformidade regulatória local',
    'Защита данных · Надлежащая клиническая практика · соответствие местным нормам',
    '数据保护条例 · 良好临床规范 · 本地监管合规',
    'حماية البيانات · ممارسات التصنيع السريري · التوافق التنظيمي المحلي',
  ],
  [
    21,
    'Industries gateway',
    'IndustriesGatewaySection.tsx',
    'h2',
    'Beyond healthcare — research across industries',
    'Healthcare → Gesundheitswesen',
    'Über das Gesundheitswesen hinaus — Forschung in allen Branchen',
    'Au-delà de la santé — recherche dans tous les secteurs',
    'Más allá de la sanidad — investigación en todos los sectores',
    'Além da saúde — pesquisa em todos os setores',
    'За пределами здравоохранения — исследования во всех отраслях',
    '超越医疗健康 — 跨行业研究',
    'ما وراء الرعاية الصحية — أبحاث في جميع القطاعات',
  ],
  [
    22,
    'Industries gateway',
    'IndustriesGatewaySection.tsx',
    'intro',
    'The same sampling discipline and senior-led analysis we built for pharma now extends to B2B and B2C markets.',
    'Pharma/B2B/B2C fully native',
    'Dieselbe Stichprobenmethodik und von erfahrenen Analysten geleitete Auswertung, die wir für die Pharmaindustrie entwickelt haben, gilt jetzt auch für Geschäfts- und Privatkundenmärkte.',
    'La même rigueur d’échantillonnage et la même analyse pilotée par des experts, développées pour l’industrie pharmaceutique, s’étendent désormais aux marchés entreprises et consommateurs.',
    'La misma disciplina de muestreo y el análisis liderado por expertos que creamos para la industria farmacéutica se extiende ahora a mercados empresariales y de consumo.',
    'A mesma disciplina de amostragem e análise liderada por especialistas que construímos para a indústria farmacêutica agora se estende aos mercados corporativos e de consumo.',
    'Та же дисциплина выборки и экспертный анализ, созданные для фармацевтики, теперь распространяются на корпоративные и потребительские рынки.',
    '我们在制药行业建立的抽样规范与资深分析师主导的方法，现已延伸至企业市场与消费者市场。',
    'نفس انضباط العيّنة والتحليل بقيادة خبراء كبار الذي بنيناه للصناعة الدوائية يمتد الآن إلى أسواق الشركات والمستهلكين.',
  ],
  [
    25,
    'Industries gateway',
    'IndustriesGatewaySection.tsx',
    'stat_label',
    'GCC/MENA markets with industry pages',
    'Expand GCC + MENA',
    'Märkte des Golf-Kooperationsrats und des Nahen Ostens und Nordafrikas mit Branchenseiten',
    'Marchés du Conseil de coopération du Golfe et du Moyen-Orient et de l’Afrique du Nord avec pages sectorielles',
    'Mercados del Consejo de Cooperación del Golfo y de Oriente Medio y Norte de África con páginas sectoriales',
    'Mercados do Conselho de Cooperação do Golfo e do Oriente Médio e Norte da África com páginas setoriais',
    'Рынки Совета сотрудничества стран Залива и Ближнего Востока и Северной Африки со страницами отраслей',
    '海湾合作委员会与中东和北非市场行业页面',
    'أسواق مجلس التعاون الخليجي والشرق الأوسط وشمال أفريقيا بصفحات قطاعية',
  ],
  [
    50,
    'Pathway card 4',
    'Index.tsx',
    'label',
    'GCC Priority',
    'Expand GCC',
    'Priorität Golf-Kooperationsrat',
    'Priorité Conseil de coopération du Golfe',
    'Prioridad Consejo de Cooperación del Golfo',
    'Prioridade Conselho de Cooperação do Golfo',
    'Приоритет Совета сотрудничества стран Залива',
    '海湾合作委员会优先',
    'أولوية مجلس التعاون الخليجي',
  ],
  [
    51,
    'Pathway card 4',
    'Index.tsx',
    'description',
    'GCC-focused pharmaceutical evidence programs for launch sequencing, market access, and cross-country execution.',
    'GCC + launch + access native',
    'Arzneimittel-Evidenzprogramme mit Fokus auf den Golf-Kooperationsrat für Reihenfolge der Markteinführung, Marktzugang und länderübergreifende Umsetzung.',
    'Programmes de preuves pharmaceutiques centrés sur le Conseil de coopération du Golfe pour séquençage des lancements, accès au marché et exécution transfrontalière.',
    'Programas de evidencia farmacéutica centrados en el Consejo de Cooperación del Golfo para secuencia de lanzamientos, acceso al mercado y ejecución transfronteriza.',
    'Programas de evidência farmacêutica focados no Conselho de Cooperação do Golfo para sequência de lançamentos, acesso ao mercado e execução entre países.',
    'Программы фармацевтических доказательств с фокусом на Совет сотрудничества стран Залива: последовательность вывода на рынок, доступ и межстрановое исполнение.',
    '以海湾合作委员会为重点的制药证据项目，支持上市排序、市场准入与跨国执行。',
    'برامج أدلة دوائية مركّزة على مجلس التعاون الخليجي لتسلسل الإطلاق والوصول إلى السوق والتنفيذ عبر الدول.',
  ],
];

function L(key) {
  const o = T[key];
  return [o.de, o.fr, o.es, o.pt, o.ru, o.zh, o.ar];
}

function esc(v) {
  const s = String(v);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

// Merge with v1 for rows not yet in partial v2 — read v1 and upgrade de + other langs for remaining
const v1Path = join(outDir, 'home-hardcoded-i18n-checklist.csv');
const v1Lines = readFileSync(v1Path, 'utf8').trim().split('\n');
const v1Header = v1Lines[0];
const v1Rows = v1Lines.slice(1).map((line) => {
  // naive CSV parse for our format
  const parts = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQ = !inQ;
      cur += c;
    } else if (c === ',' && !inQ) {
      parts.push(cur.replace(/^"|"$/g, '').replace(/""/g, '"'));
      cur = '';
    } else cur += c;
  }
  parts.push(cur.replace(/^"|"$/g, '').replace(/""/g, '"'));
  return parts;
});

const overrideById = new Map(rows.map((r) => [String(r[0]), r]));

const header =
  'ID,Section,File,Field,English,Translation_rule,de,fr,es,pt,ru,zh,ar,de_status,other_langs_status';

const outRows = [header];

for (const p of v1Rows) {
  const id = p[0];
  const override = overrideById.get(id);
  if (override) {
    const [, section, file, field, english, rule, de, fr, es, pt, ru, zh, ar] = override;
    outRows.push(
      [id, section, file, field, english, rule, de, fr, es, pt, ru, zh, ar, 'revised-full-native', 'revised-full-native']
        .map(esc)
        .join(','),
    );
    continue;
  }

  // Upgrade remaining rows: apply full-native pass on top of v1
  const [section, file, field, english, de0, fr0, es0, pt0, ru0, zh0, ar0] = [
    p[1],
    p[2],
    p[3],
    p[4],
    p[5],
    p[6],
    p[7],
    p[8],
    p[9],
    p[10],
    p[11],
  ];
  const upgraded = upgradeRow(english, de0, fr0, es0, pt0, ru0, zh0, ar0);
  outRows.push(
    [id, section, file, field, english, upgraded.rule, upgraded.de, upgraded.fr, upgraded.es, upgraded.pt, upgraded.ru, upgraded.zh, upgraded.ar, upgraded.deStatus, 'needs-review']
      .map(esc)
      .join(','),
  );
}

writeFileSync(join(outDir, 'home-hardcoded-i18n-checklist-v2.csv'), outRows.join('\n') + '\n');

// zh: Chinese numerals; ar: Arabic-Indic digits + بيونكسس
const { applyNumeralLocalization } = await import('./localize-checklist-numerals.mjs');
const checklistPath = join(outDir, 'home-hardcoded-i18n-checklist-v2.csv');
writeFileSync(checklistPath, applyNumeralLocalization(readFileSync(checklistPath, 'utf8')));

// Glossary sheet
const glossaryHeader = 'English_term,Rule,de,fr,es,pt,ru,zh,ar';
const glossaryRows = [
  glossaryHeader,
  ...Object.entries({
    GCC: [
      'Use full institution name, not abbreviation alone',
      'Golf-Kooperationsrat',
      'Conseil de coopération du Golfe',
      'Consejo de Cooperación del Golfo',
      'Conselho de Cooperação do Golfo',
      'Совет сотрудничества стран Залива',
      '海湾合作委员会',
      'مجلس التعاون الخليجي',
    ],
    MENA: [
      'Geographic region — spell out',
      'Naher Osten und Nordafrika',
      'Moyen-Orient et Afrique du Nord',
      'Oriente Medio y Norte de África',
      'Oriente Médio e Norte da África',
      'Ближний Восток и Северная Африка',
      '中东与北非',
      'الشرق الأوسط وشمال أفريقيا',
    ],
    'Pharma / pharmaceutical': [
      'Industry term — native word',
      'Pharmaindustrie / Arzneimittel',
      'industrie pharmaceutique / médicaments',
      'industria farmacéutica / medicamentos',
      'indústria farmacêutica / medicamentos',
      'фармацевтика / лекарственные препараты',
      '医药 / 制药',
      'الصناعة الدوائية / الأدوية',
    ],
    Healthcare: [
      'Not Healthcare loanword in DE',
      'Gesundheitswesen',
      'santé / soins de santé',
      'sanidad / salud',
      'saúde',
      'здравоохранение',
      '医疗健康',
      'الرعاية الصحية',
    ],
    Launch: [
      'Commercial term',
      'Markteinführung',
      'lancement',
      'lanzamiento',
      'lançamento',
      'вывод на рынок',
      '上市',
      'الإطلاق',
    ],
    'Market access': [
      'Payer/regulatory term',
      'Marktzugang',
      'accès au marché',
      'acceso al mercado',
      'acesso ao mercado',
      'доступ на рынок',
      '市场准入',
      'الوصول إلى السوق',
    ],
    B2B: [
      'Spell out market type',
      'Geschäftskundenmarkt',
      'marché entreprises',
      'mercado empresarial',
      'mercado corporativo',
      'корпоративный рынок',
      '企业市场',
      'سوق الشركات',
    ],
    B2C: [
      'Spell out market type',
      'Privatkundenmarkt',
      'marché consommateurs',
      'mercado de consumo',
      'mercado de consumo',
      'потребительский рынок',
      '消费者市场',
      'سوق المستهلكين',
    ],
    APAC: [
      'Geographic',
      'Asien und Pazifik',
      'Asie et Pacifique',
      'Asia y Pacífico',
      'Ásia e Pacífico',
      'Азия и Тихоокеанский регион',
      '亚太地区',
      'آسيا والمحيط الهادئ',
    ],
    CAGR: [
      'Financial metric',
      'durchschnittliche jährliche Wachstumsrate',
      'taux de croissance annuel composé',
      'tasa de crecimiento anual compuesta',
      'taxa de crescimento anual composta',
      'среднегодовой темп роста',
      '复合年增长率',
      'معدل النمو السنوي المركب',
    ],
    Intelligence: [
      'Not Intelligence loanword',
      'Marktinformationen / Erkenntnisse',
      'informations marché / insights',
      'información de mercado',
      'informações de mercado',
      'рыночная информация',
      '市场信息',
      'معلومات السوق',
    ],
    Hub: [
      'Navigation — not Hub',
      'Übersichtsbereich',
      'espace central',
      'centro de recursos',
      'central de recursos',
      'центральный раздел',
      '枢纽页',
      'المركز',
    ],
    Insights: [
      'Not Insights in DE nav body',
      'Erkenntnisse',
      'analyses / perspectives',
      'perspectivas',
      'insights → percepções',
      'аналитика',
      '洞察',
      'رؤى',
    ],
    KSA: [
      'Country name',
      'Saudi-Arabien',
      'Arabie saoudite',
      'Arabia Saudí',
      'Arábia Saudita',
      'Саудовская Аравия',
      '沙特阿拉伯',
      'المملكة العربية السعودية',
    ],
    UAE: [
      'Country name',
      'Vereinigte Arabische Emirate',
      'Émirats arabes unis',
      'Emiratos Árabes Unidos',
      'Emirados Árabes Unidos',
      'Объединённые Арабские Эмираты',
      '阿拉伯联合酋长国',
      'الإمارات العربية المتحدة',
    ],
    LATAM: [
      'Region',
      'Lateinamerika',
      'Amérique latine',
      'América Latina',
      'América Latina',
      'Латинская Америка',
      '拉丁美洲',
      'أمريكا اللاتينية',
    ],
  }).map(([term, rest]) => [term, ...rest].map(esc).join(',')),
];

writeFileSync(join(outDir, 'home-i18n-glossary.csv'), glossaryRows.join('\n') + '\n');

console.log('Wrote home-hardcoded-i18n-checklist-v2.csv and home-i18n-glossary.csv');

/** @param {string} en @param {string} de @param {string} fr @param {string} es @param {string} pt @param {string} ru @param {string} zh @param {string} ar */
function upgradeRow(en, de, fr, es, pt, ru, zh, ar) {
  const replacers = [
    [/GCC\/MENA/g, 'Golf-Kooperationsrat und Naher Osten und Nordafrika'],
    [/GCC/g, 'Golf-Kooperationsrat'],
    [/MENA/g, 'Naher Osten und Nordafrika'],
    [/Healthcare/g, 'Gesundheitswesen'],
    [/Pharma/g, 'Pharmaindustrie'],
    [/Launch/g, 'Markteinführung'],
    [/Access-/g, 'Marktzugang-'],
    [/ Access /g, ' Marktzugang '],
    [/B2B/g, 'Geschäftskunden'],
    [/B2C/g, 'Privatkunden'],
    [/Insights/g, 'Erkenntnisse'],
    [/Hub/g, 'Übersichtsbereich'],
    [/Intelligence/g, 'Marktinformationen'],
    [/Benchmark/g, 'Referenz'],
    [/APAC/g, 'Asien und Pazifik'],
    [/CAGR/g, 'durchschnittliche jährliche Wachstumsrate'],
    [/KSA/g, 'Saudi-Arabien'],
    [/UAE/g, 'Vereinigte Arabische Emirate'],
    [/VAE/g, 'Vereinigte Arabische Emirate'],
    [/FDA-/g, 'saudi-arabische Arzneimittelbehörde-'],
    [/FDA /g, 'saudi-arabische Arzneimittelbehörde '],
    [/FDA/g, 'saudi-arabische Arzneimittelbehörde'],
    [/Live/g, 'Aktuell'],
    [/Trackers/g, 'Laufende Studien'],
    [/Tracker-/g, 'Laufende-Studien-'],
    [/AI-/g, 'KI-'],
    [/AI /g, 'KI '],
    [/Multi-Country/g, 'Mehrländer'],
    [/senior-/g, 'erfahrene '],
    [/Sampling-/g, 'Stichproben-'],
  ];

  let deOut = de;
  for (const [re, sub] of replacers) deOut = deOut.replace(re, sub);

  const frRepl = [
    [/GCC/g, 'Conseil de coopération du Golfe'],
    [/MENA/g, 'Moyen-Orient et Afrique du Nord'],
    [/pharma/gi, 'industrie pharmaceutique'],
    [/Healthcare/g, 'santé'],
    [/Launch/g, 'lancement'],
    [/Access/g, 'accès au marché'],
    [/B2B/g, 'entreprises'],
    [/B2C/g, 'consommateurs'],
    [/Insights/g, 'analyses'],
    [/Hub/g, 'espace central'],
    [/Intelligence/g, 'information marché'],
    [/APAC/g, 'Asie et Pacifique'],
    [/CAGR/g, 'taux de croissance annuel composé'],
  ];
  let frOut = fr;
  for (const [re, sub] of frRepl) frOut = frOut.replace(re, sub);

  const esRepl = [
    [/GCC/g, 'Consejo de Cooperación del Golfo'],
    [/MENA/g, 'Oriente Medio y Norte de África'],
    [/pharma/gi, 'farmacéutico'],
    [/Healthcare/g, 'sanitario'],
    [/Launch/g, 'lanzamiento'],
    [/Access/g, 'acceso al mercado'],
    [/B2B/g, 'empresarial'],
    [/B2C/g, 'consumo'],
    [/Insights/g, 'perspectivas'],
    [/Hub/g, 'centro'],
    [/Intelligence/g, 'información de mercado'],
    [/APAC/g, 'Asia y Pacífico'],
    [/CAGR/g, 'tasa de crecimiento anual compuesta'],
  ];
  let esOut = es;
  for (const [re, sub] of esRepl) esOut = esOut.replace(re, sub);

  const ptRepl = [
    [/GCC/g, 'Conselho de Cooperação do Golfo'],
    [/MENA/g, 'Oriente Médio e Norte da África'],
    [/pharma/gi, 'farmacêutico'],
    [/Healthcare/g, 'saúde'],
    [/Launch/g, 'lançamento'],
    [/Access/g, 'acesso ao mercado'],
    [/B2B/g, 'corporativo'],
    [/B2C/g, 'consumo'],
    [/Insights/g, 'percepções'],
    [/Hub/g, 'central'],
    [/Intelligence/g, 'informações de mercado'],
    [/APAC/g, 'Ásia e Pacífico'],
    [/CAGR/g, 'taxa de crescimento anual composta'],
  ];
  let ptOut = pt;
  for (const [re, sub] of ptRepl) ptOut = ptOut.replace(re, sub);

  const ruRepl = [
    [/GCC/g, 'Совет сотрудничества стран Залива'],
    [/MENA/g, 'Ближний Восток и Северная Африка'],
    [/pharma/gi, 'фармацевт'],
    [/Healthcare/g, 'здравоохран'],
    [/Launch/g, 'вывод на рынок'],
    [/Access/g, 'доступ на рынок'],
    [/B2B/g, 'корпоратив'],
    [/B2C/g, 'потребитель'],
    [/Insights/g, 'аналитик'],
    [/Hub/g, 'центральный раздел'],
    [/Intelligence/g, 'информаци'],
    [/APAC/g, 'Азия и Тихий океан'],
    [/CAGR/g, 'среднегодовой темп роста'],
    [/KSA/g, 'Саудовская Аравия'],
  ];
  let ruOut = ru;
  for (const [re, sub] of ruRepl) ruOut = ruOut.replace(re, sub);

  const zhRepl = [
    [/GCC/g, '海湾合作委员会'],
    [/MENA/g, '中东与北非'],
    [/Pharma/g, '医药'],
    [/Healthcare/g, '医疗健康'],
    [/Launch/g, '上市'],
    [/Market access/g, '市场准入'],
    [/B2B/g, '企业'],
    [/B2C/g, '消费者'],
    [/Insights/g, '洞察'],
    [/Hub/g, '枢纽'],
    [/Intelligence/g, '情报'],
    [/APAC/g, '亚太'],
    [/CAGR/g, '复合年增长率'],
    [/FDA/g, '沙特食品药品管理局'],
    [/KSA/g, '沙特阿拉伯'],
    [/UAE/g, '阿联酋'],
  ];
  let zhOut = zh;
  for (const [re, sub] of zhRepl) zhOut = zhOut.replace(re, sub);

  const arRepl = [
    [/GCC/g, 'مجلس التعاون الخليجي'],
    [/MENA/g, 'الشرق الأوسط وشمال أفريقيا'],
    [/Pharma/g, 'دوائي'],
    [/Healthcare/g, 'الرعاية الصحية'],
    [/Launch/g, 'الإطلاق'],
    [/Market access/g, 'الوصول إلى السوق'],
    [/B2B/g, 'الشركات'],
    [/B2C/g, 'المستهلكين'],
    [/Insights/g, 'رؤى'],
    [/Hub/g, 'المركز'],
    [/Intelligence/g, 'معلومات السوق'],
    [/APAC/g, 'آسيا والمحيط الهادئ'],
    [/CAGR/g, 'معدل النمو السنوي المركب'],
    [/FDA/g, 'هيئة الغذاء والدواء السعودية'],
    [/KSA/g, 'المملكة العربية السعودية'],
    [/UAE/g, 'الإمارات العربية المتحدة'],
  ];
  let arOut = ar;
  for (const [re, sub] of arRepl) arOut = arOut.replace(re, sub);

  return {
    rule: 'Auto-expanded acronyms/loanwords — native review required',
    de: deOut,
    fr: frOut,
    es: esOut,
    pt: ptOut,
    ru: ruOut,
    zh: zhOut,
    ar: arOut,
    deStatus: deOut !== de ? 'auto-revised' : 'carry-forward-review',
  };
}
