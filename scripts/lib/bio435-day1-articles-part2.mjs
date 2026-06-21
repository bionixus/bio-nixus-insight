/**
 * BIO-435 Day 1 articles — FR, ES, PT, ZH, RU
 */

const PUBLISHED = '2026-06-18T12:00:00.000Z';

function p(text) {
  return `<p>${text}</p>`;
}
function h2(id, text) {
  return `<h2 id="${id}">${text}</h2>`;
}
function ul(items) {
  return `<ul>\n${items.map((i) => `<li>${i}</li>`).join('\n')}\n</ul>`;
}
function faqHtml(items) {
  return items
    .map(
      (f) =>
        `<details>\n<summary><strong>${f.question}</strong></summary>\n<p>${f.answer}</p>\n</details>`,
    )
    .join('\n\n');
}
function execSummary(intro, bullets) {
  return [
    { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: [], text: intro }] },
    ...bullets.map((text) => ({
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      level: 1,
      children: [{ _type: 'span', text }],
    })),
  ];
}
function buildBody(intro, sections, faq, faqHeading = 'FAQ') {
  return [
    intro,
    ...sections.flatMap((s) => [h2(s.id, s.heading), ...s.blocks]),
    h2('faq', faqHeading),
    faqHtml(faq),
  ].join('\n\n');
}

// ─── FR — France ─────────────────────────────────────────────────────────────

const frFaq = [
  {
    question: 'La HAS remplace-t-elle les études de marché locales ?',
    answer:
      'Non. La HAS évalue le bénéfice clinique (ASMR) et le médico-économique via la CEESP, mais les données de pratique réelle et de parcours de soins en France restent essentielles pour des dossiers crédibles.',
  },
  {
    question: 'Quand lancer une étude de marché en France ?',
    answer:
      'Idéalement 24–36 mois avant l’AMM pour alimenter le dossier HAS, les négociations de prix avec le CEPS et les accès précoce (ATU).',
  },
  {
    question: 'Les payers français acceptent-ils les RWE ?',
    answer:
      'Oui, lorsque la méthodologie est robuste : registres, SNDS, ou études primaires documentant comparateurs et trajectoires de traitement.',
  },
  {
    question: 'Quelle différence entre ASMR et accès hospitalier ?',
    answer:
      'L’ASMR influence le prix et le remboursement ; l’accès hospitalier dépend aussi des commissions médicales d’établissement et des budgets régionaux.',
  },
  {
    question: 'Comment BioNixus intervient en France ?',
    answer:
      'BioNixus mène des panels médecins, entretiens payers et recherche qualitative alignée HAS/CEESP pour les équipes market access.',
  },
];

export const franceFr = {
  seo: {
    metaTitle: 'Études marché pharmaceutique France 2026 | BioNixus',
    metaDescription:
      'Études de marché pharmaceutique en France 2026 : HAS, accès au marché, CEESP et recherche primaire pour dossiers crédibles.',
    focusKeyword: 'études de marché pharmaceutique france',
    keywords: [
      'études de marché pharmaceutique france',
      'recherche santé france',
      'accès au marché HAS',
      'ASMR CEESP',
      'études de marché santé',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/etudes-marche-pharmaceutique-france-2026',
    noIndex: false,
  },
  title: 'Études de marché pharmaceutique en France 2026 : HAS, accès et recherche',
  slug: { current: 'etudes-marche-pharmaceutique-france-2026' },
  excerpt:
    'Guide 2026 des études de marché pharmaceutique en France : HAS, ASMR, CEESP et recherche primaire pour l’accès au marché.',
  readingTime: 18,
  language: 'fr',
  country: 'France',
  coverAlt: 'Études de marché pharmaceutique en France HAS accès marché 2026',
  tags: ['France', 'HAS', 'market access', 'études de marché', 'CEESP', 'ASMR', 'pharmaceutique'],
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  tableOfContents: [
    { heading: 'Le marché pharmaceutique français en 2026', anchor: 'marche-fr' },
    { heading: 'HAS : ASMR et procédures', anchor: 'has-asmr' },
    { heading: 'CEESP et évaluation médico-économique', anchor: 'ceesp' },
    { heading: 'Méthodologies de recherche santé', anchor: 'methodes-fr' },
    { heading: 'Accès précoce et hôpital', anchor: 'acces-precoce' },
    { heading: 'BioNixus en France', anchor: 'bionixus-fr' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: frFaq,
  ctaSection: {
    title: 'Planifier votre briefing accès marché France',
    description:
      'BioNixus accompagne les études de marché, la préparation HAS et la recherche payers en France.',
    buttonText: 'Demander un briefing',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Points clés pour les équipes market access en France', [
    'La HAS et la CEESP exigent des comparateurs et des parcours de soins crédibles au niveau français.',
    'Les études primaires complètent les essais pivot pour l’ASMR et les négociations CEPS.',
    'BioNixus propose panels médecins, entretiens payers et préparation de dossiers HAS.',
  ]),
  bodyHtml: buildBody(
    `${p('Les <strong>études de marché pharmaceutique France</strong> restent un pilier de l’accès au marché alors que la HAS renforce l’exigence de données françaises sur les comparateurs, les trajectoires thérapeutiques et la valeur médico-économique. Pour les équipes internationales, la question n’est plus « faut-il une étude ? » mais « comment produire des preuves crédibles pour l’ASMR et la CEESP ? »')} ${p('Ce guide 2026 couvre HAS, CEESP, méthodologies et accès précoce. Contexte : <a href="/healthcare-market-research">recherche santé</a> et <a href="/fr/healthcare-market-research/france">études de marché France</a>.')}`,
    [
      {
        id: 'marche-fr',
        heading: 'Le marché pharmaceutique français en 2026',
        blocks: [
          p(
            'La France combine un système de remboursement centralisé (Assurance Maladie), une autorité de prix (CEPS) et une évaluation clinique par la HAS. Le marché reste stratégique pour le lancement EU : l’ASMR (Amélioration du Service Médical Rendu) détermine directement la marge de prix négociable.',
          ),
          p(
            'Les spécialités hospitalières et les produits à budget impact élevé (oncologie, immunologie, maladies rares) font l’objet d’un scrutin renforcé. Les études de marché doivent refléter la pratique en ville et à l’hôpital, pas des benchmarks US ou allemands transposés.',
          ),
          ul([
            '<strong>Volume :</strong> 2e marché EU par valeur ; forte densité de KOL.',
            '<strong>Transparence :</strong> base publique des avis HAS consultable pour calibrer les dossiers.',
            '<strong>Régionalisation :</strong> variations d’adoption entre régions et centres experts.',
          ]),
        ],
      },
      {
        id: 'has-asmr',
        heading: 'HAS : ASMR et procédures',
        blocks: [
          p(
            'La Haute Autorité de Santé évalue le bénéfice clinique via une échelle ASMR I à V. Les comparateurs doivent correspondre à la pratique française ; les indirect treatment comparisons sont acceptées sous conditions méthodologiques strictes.',
          ),
          p(
            'La Commission de la Transparence examine les données d’efficacité, de tolérance et de place dans la stratégie thérapeutique. Les sous-groupes et les données de vie réelle peuvent modifier l’ASMR si elles répondent à des questions explicites du rapport.',
          ),
        ],
      },
      {
        id: 'ceesp',
        heading: 'CEESP et évaluation médico-économique',
        blocks: [
          p(
            'La CEESP (Commission économique) produit des avis médico-économiques pour les produits à enjeu budgétaire. Modèles de coût-efficacité, impact budgetaire et analyse de sensibilité doivent utiliser des coûts et des epidemiologie françaises.',
          ),
          ul([
            '<strong>Perspective payer :</strong> Assurance Maladie et hôpital.',
            '<strong>Horizon :</strong> souvent aligné sur les recommandations HAS.',
            '<strong>Recherche primaire :</strong> utile pour paramètres d’utilisation réelle non couverts par le SNDS.',
          ]),
        ],
      },
      {
        id: 'methodes-fr',
        heading: 'Méthodologies de recherche santé',
        blocks: [
          p(
            'Les <strong>études de marché pharmaceutique</strong> combinent enquêtes quantitatives auprès de médecins (prescription, parts de marché, switching), entretiens qualitatifs (KOL, pharmaciens hospitaliers) et analyse de données administratives quand disponibles.',
          ),
          p(
            'Les panels advisory valident les comparateurs avant soumission HAS. Les études de parcours patient documentent les étapes de traitement en oncologie ou en maladies chroniques — données rarement capturées par les seuls essais pivot.',
          ),
        ],
      },
      {
        id: 'acces-precoce',
        heading: 'Accès précoce et hôpital',
        blocks: [
          p(
            'Les dispositifs d’accès précoce (ATU nominative/cohort, AAP) permettent une utilisation avant remboursement complet. Les études de marché éclairent la demande hospitalière et préparent la transition vers le remboursement.',
          ),
          p(
            'Les commissions du medicament des établissements décident de l’inscription aux listes hospitalières. Des données locales sur le volume de patients et le budget sont souvent requises.',
          ),
        ],
      },
      {
        id: 'bionixus-fr',
        heading: 'BioNixus en France',
        blocks: [
          p(
            'BioNixus réalise des <strong>études de marché pharmaceutique France</strong> : panels, payers, préparation HAS. <a href="/fr/healthcare-market-research/france">En savoir plus</a> ou <a href="/contact">contact</a>.',
          ),
        ],
      },
    ],
    frFaq,
  ),
};

// ─── ES — Spain ────────────────────────────────────────────────────────────────

const esFaq = [
  {
    question: '¿La AEMPS sustituye estudios de mercado locales?',
    answer:
      'No. AEMPS autoriza el medicamento, pero el acceso real depende de precios autonómicos, hospitalarios y datos de práctica clínica española.',
  },
  {
    question: '¿Cuándo iniciar investigación de mercado en España?',
    answer:
      'Al menos 24 meses antes del lanzamiento para alinear comparadores, epidemiología y negociación con comunidades autónomas.',
  },
  {
    question: '¿Se acepta evidencia del mundo real (RWE)?',
    answer:
      'Sí, cuando el diseño es robusto y los comparadores reflejan la práctica en España, no solo ensayos pivot globales.',
  },
  {
    question: '¿Por qué importa la variación autonómica?',
    answer:
      'Cada comunidad autónoma gestiona presupuestos y listas hospitalarias; la adopción varía entre Madrid, Cataluña, Andalucía y otras regiones.',
  },
  {
    question: '¿Cómo apoya BioNixus en España?',
    answer:
      'BioNixus realiza paneles de médicos, entrevistas a pagadores y estudios de consumo hospitalario alineados al acceso en España.',
  },
];

export const spainEs = {
  seo: {
    metaTitle: 'Investigación mercado farmacéutico España 2026 | BioNixus',
    metaDescription:
      'Investigación de mercado farmacéutico en España 2026: AEMPS, acceso autonómico, RWE y estudios primarios para equipos de market access.',
    focusKeyword: 'investigación de mercado farmacéutico',
    keywords: [
      'investigación de mercado farmacéutico',
      'estudios de mercado salud españa',
      'acceso mercado farmacéutico',
      'AEMPS',
      'market access España',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/investigacion-mercado-farmaceutico-espana-2026',
    noIndex: false,
  },
  title: 'Investigación de mercado farmacéutico en España 2026: guía para equipos de acceso',
  slug: { current: 'investigacion-mercado-farmaceutico-espana-2026' },
  excerpt:
    'Guía 2026 de investigación de mercado farmacéutico en España: AEMPS, variación autonómica, RWE y metodologías para market access.',
  readingTime: 18,
  language: 'es',
  country: 'Spain',
  coverAlt: 'Investigación de mercado farmacéutico en España guía acceso mercado 2026',
  tags: ['España', 'AEMPS', 'market access', 'investigación de mercado', 'RWE', 'farmacéutico'],
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  tableOfContents: [
    { heading: 'Panorama del mercado farmacéutico español', anchor: 'panorama-es' },
    { heading: 'AEMPS y autorización', anchor: 'aemps' },
    { heading: 'Precios y acceso autonómico', anchor: 'acceso-autonomico' },
    { heading: 'Metodologías de investigación', anchor: 'metodologias-es' },
    { heading: 'RWE y registros en España', anchor: 'rwe-es' },
    { heading: 'BioNixus en España', anchor: 'bionixus-es' },
    { heading: 'Preguntas frecuentes', anchor: 'faq' },
  ],
  faq: esFaq,
  ctaSection: {
    title: 'Planifique su briefing de acceso al mercado en España',
    description:
      'BioNixus apoya investigación de mercado, paneles médicos y estrategia de acceso en España.',
    buttonText: 'Solicitar briefing',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Conclusiones clave para equipos de acceso en España', [
    'AEMPS autoriza, pero el acceso real exige evidencia autonómica y hospitalaria.',
    'La investigación primaria documenta comparadores y trayectorias terapéuticas españolas.',
    'BioNixus ofrece paneles, auditorías hospitalarias y preparación de dossiers.',
  ]),
  bodyHtml: buildBody(
    `${p('La <strong>investigación de mercado farmacéutico</strong> en España es esencial porque el acceso combina autorización AEMPS, negociación de precios y decisiones autonómicas e hospitalarias. Los equipos que lanzan en 2026 necesitan datos locales — no solo traducciones de dossiers europeos.')} ${p('Consulte <a href="/healthcare-market-research">investigación de mercado sanitaria</a> y <a href="/es/healthcare-market-research/spain">España</a>.')}`,
    [
      {
        id: 'panorama-es',
        heading: 'Panorama del mercado farmacéutico español',
        blocks: [
          p(
            'España es el cuarto mercado farmacéutico de la UE. El sistema SNS combina financiación estatal y autonómica; las listas hospitalarias y los protocolos terapéuticos varían por región. Oncología, enfermedades raras e inmunología concentran el gasto y la presión HTA.',
          ),
          p(
            'Los estudios de mercado deben capturar variación entre comunidades autónomas: Madrid, Cataluña, Andalucía y País Vasco tienen dinámicas distintas de prescripción y compra centralizada.',
          ),
        ],
      },
      {
        id: 'aemps',
        heading: 'AEMPS y autorización',
        blocks: [
          p(
            'La Agencia Española de Medicamentos y Productos Sanitarios (AEMPS) participa en procedimientos EU y supervisa farmacovigilancia. La autorización de comercialización no garantiza inclusión en guías ni financiación autonómica.',
          ),
          ul([
            '<strong>EU-HTA:</strong> JCA alimenta evaluación clínica; España mantiene capa económica propia.',
            '<strong>Ensayos clínicos:</strong> España es hub de investigación; aprovechar redes para RWE post-autorización.',
          ]),
        ],
      },
      {
        id: 'acceso-autonomico',
        heading: 'Precios y acceso autonómico',
        blocks: [
          p(
            'Tras la autorización, el precio se negocia en el contexto del SNS. Las comunidades autónomas gestionan presupuestos farmacéuticos hospitalarios. Comisiones de farmacia hospitalaria evalúan impacto presupuestario y alternativas terapéuticas.',
          ),
          p(
            'La investigación primaria — encuestas a médicos, farmacéuticos hospitalarios, entrevistas a gestores — documenta comparadores reales y barreras de adopción que los modelos globales omiten.',
          ),
        ],
      },
      {
        id: 'metodologias-es',
        heading: 'Metodologías de investigación',
        blocks: [
          p(
            'Combine cuantitativo (cuota de mercado, pacientes elegibles, switching) y cualitativo (profundidad con KOL). Auditorías de consumo hospitalario apoyan negociaciones de volumen.',
          ),
        ],
      },
      {
        id: 'rwe-es',
        heading: 'RWE y registros en España',
        blocks: [
          p(
            'Registros de oncología, enfermedades raras y bases administrativas regionales apoyan RWE cuando la metodología es transparente. La evidencia debe alinearse con guías clínicas españolas y comparadores locales.',
          ),
        ],
      },
      {
        id: 'bionixus-es',
        heading: 'BioNixus en España',
        blocks: [
          p(
            'BioNixus ejecuta <strong>investigación de mercado farmacéutico</strong> en España. <a href="/es/healthcare-market-research/spain">Más información</a> o <a href="/contact">contacto</a>.',
          ),
        ],
      },
    ],
    esFaq,
    'Preguntas frecuentes',
  ),
};

// ─── PT — Brazil ───────────────────────────────────────────────────────────────

const ptFaq = [
  {
    question: 'A ANVISA exige pesquisa de mercado local?',
    answer:
      'Não para registro, mas CONITEC e pagadores públicos/privados exigem evidências brasileiras de efetividade, custo e impacto orçamentário para incorporação.',
  },
  {
    question: 'Qual a diferença entre registro ANVISA e incorporação CONITEC?',
    answer:
      'ANVISA autoriza o produto; CONITEC recomenda (ou não) incorporação ao SUS com impacto em acesso e volume público.',
  },
  {
    question: 'Quando iniciar pesquisa de mercado no Brasil?',
    answer:
      'Idealmente 24–36 meses antes do lançamento para alinhar dossier CONITEC, pricing privado e sequência SUS.',
  },
  {
    question: 'RWE é aceita no Brasil?',
    answer:
      'Sim, quando desenhada com comparadores e população brasileira; registros e claims complementam ensaios pivot.',
  },
  {
    question: 'Como a BioNixus apoia no Brasil?',
    answer:
      'BioNixus conduz pesquisa primária com médicos e pagadores, apoio a dossiers ANVISA/CONITEC e inteligência de mercado LATAM.',
  },
];

export const brazilPt = {
  seo: {
    metaTitle: 'Pesquisa mercado farmacêutico Brasil 2026 | BioNixus',
    metaDescription:
      'Pesquisa de mercado farmacêutico no Brasil 2026: ANVISA, CONITEC, incorporação SUS e estudos primários para lançamento.',
    focusKeyword: 'pesquisa de mercado farmacêutico brasil',
    keywords: [
      'pesquisa de mercado farmacêutico brasil',
      'ANVISA registro',
      'CONITEC incorporação',
      'pesquisa mercado saúde brasil',
      'market access Brasil',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/pesquisa-mercado-farmaceutico-brasil-anvisa-2026',
    noIndex: false,
  },
  title: 'Pesquisa de mercado farmacêutico no Brasil 2026: ANVISA, CONITEC e lançamento',
  slug: { current: 'pesquisa-mercado-farmaceutico-brasil-anvisa-2026' },
  excerpt:
    'Guia 2026 de pesquisa de mercado farmacêutico no Brasil: ANVISA, CONITEC, SUS e metodologias para market access.',
  readingTime: 20,
  language: 'pt',
  country: 'Brazil',
  coverAlt: 'Pesquisa de mercado farmacêutico no Brasil ANVISA CONITEC 2026',
  tags: ['Brasil', 'ANVISA', 'CONITEC', 'SUS', 'market access', 'pesquisa de mercado', 'farmacêutico'],
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  tableOfContents: [
    { heading: 'Panorama do mercado 2026', anchor: 'panorama-br' },
    { heading: 'ANVISA e registro', anchor: 'anvisa' },
    { heading: 'CONITEC e incorporação ao SUS', anchor: 'conitec' },
    { heading: 'Pesquisa primária com médicos e pagadores', anchor: 'pesquisa-primaria' },
    { heading: 'Erros comuns em estudos locais', anchor: 'erros-comuns' },
    { heading: 'BioNixus Brasil', anchor: 'bionixus-br' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: ptFaq,
  ctaSection: {
    title: 'Agende seu briefing de market access no Brasil',
    description:
      'BioNixus apoia pesquisa de mercado, dossiers CONITEC e estratégia ANVISA para equipes farmacêuticas.',
    buttonText: 'Fale conosco',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Principais conclusões para equipes de acesso no Brasil', [
    'ANVISA registra; CONITEC e pagadores definem incorporação e volume real no SUS e privado.',
    'Pesquisa primária brasileira fortalece dossiers de custo-efetividade e impacto orçamentário.',
    'BioNixus oferece painéis médicos, pagadores e inteligência de mercado LATAM.',
  ]),
  bodyHtml: buildBody(
    `${p('A <strong>pesquisa de mercado farmacêutico Brasil</strong> é crítica em 2026 porque o maior mercado LATAM combina regulação ANVISA, recomendação CONITEC para o SUS e um setor privado robusto. Equipes globais não podem reutilizar dossiers europeus sem adaptação epidemiológica e de comparadores.')} ${p('Veja <a href="/healthcare-market-research">pesquisa de mercado em saúde</a>, <a href="/healthcare-market-research/brazil">Brasil</a> e <a href="/top-market-research-companies-brazil-2026">empresas de pesquisa</a>.')}`,
    [
      {
        id: 'panorama-br',
        heading: 'Panorama do mercado 2026',
        blocks: [
          p(
            'O Brasil permanece líder em volume LATAM com crescimento em oncologia, doenças raras, imunologia e medicamentos biológicos. O SUS atende a maior parte da população; o setor privado concentra medicamentos de alto custo. Estratégias de lançamento devem equilibrar registro, incorporação pública e pricing privado.',
          ),
          p(
            'A diversidade regional — Sudeste, Sul, Nordeste — exige amostragem representativa em estudos de mercado, não apenas centros de São Paulo e Rio de Janeiro.',
          ),
        ],
      },
      {
        id: 'anvisa',
        heading: 'ANVISA e registro',
        blocks: [
          p(
            'A ANVISA regula registro, boas práticas e farmacovigilância. Procedimentos harmonizados com ICH aceleram submissões, mas exigem documentação local e, muitas vezes, bridging com dados latino-americanos.',
          ),
          ul([
            '<strong>Registro:</strong> Pré-requisito comercial, não garantia de SUS.',
            '<strong>PV:</strong> Monitoramento pós-comercialização obrigatório.',
            '<strong>Importação:</strong> Regras específicas para produtos ainda não incorporados.',
          ]),
        ],
      },
      {
        id: 'conitec',
        heading: 'CONITEC e incorporação ao SUS',
        blocks: [
          p(
            'A CONITEC avalia custo-efetividade, impacto orçamentário e evidência clínica para incorporação, alteração ou exclusão no SUS. Relatórios públicos definem expectativas metodológicas; comparadores devem refletir prática brasileira.',
          ),
          p(
            'Modelos de impacto orçamentário alimentados por pesquisa primária — prevalência, diagnóstico, linhas de tratamento — têm maior credibilidade do que parâmetros importados.',
          ),
        ],
      },
      {
        id: 'pesquisa-primaria',
        heading: 'Pesquisa primária com médicos e pagadores',
        blocks: [
          p(
            'Painéis com especialistas, entrevistas com gestores hospitalares e operadoras privadas documentam prática clínica real. Chart review e auditorias de consumo apoiam negociações de volume.',
          ),
        ],
      },
      {
        id: 'erros-comuns',
        heading: 'Erros comuns em estudos locais',
        blocks: [
          ul([
            '<strong>Comparador incorreto:</strong> terapia não disponível no SUS ou privado.',
            '<strong>Subnotificação regional:</strong> amostra apenas capitals.',
            '<strong>Atraso:</strong> pesquisa iniciada após submissão CONITEC.',
            '<strong>Ignorar privado:</strong> SUS e privado exigem narrativas distintas.',
          ]),
        ],
      },
      {
        id: 'bionixus-br',
        heading: 'BioNixus Brasil',
        blocks: [
          p(
            'BioNixus conduz <strong>pesquisa de mercado farmacêutico Brasil</strong> com foco ANVISA/CONITEC. <a href="/healthcare-market-research/brazil">Saiba mais</a> ou <a href="/contact">contato</a>.',
          ),
        ],
      },
    ],
    ptFaq,
  ),
};

// ─── ZH — China/APAC ───────────────────────────────────────────────────────────

const zhFaq = [
  {
    question: '中国医药市场研究是否必须包含真实世界证据？',
    answer:
      '对于创新药和高值疗法，医保谈判与医院准入 increasingly 需要本土 RWE 与药物经济学证据；具体取决于产品类别与 NMPA 注册路径。',
  },
  {
    question: '何时启动亚太证据规划？',
    answer:
      '建议在关键临床读出前 24–36 个月启动，以便设计符合 NMPA 与医保要求的本土研究与比较器策略。',
  },
  {
    question: '跨国药企常见的研究错误是什么？',
    answer:
      '直接移植欧美 epidemiology 与 treatment pathway，忽视中国城市层级差异、医保目录与医院药事会流程。',
  },
  {
    question: '定量与定性研究如何配合？',
    answer:
      '定量估计患者规模与处方份额；定性解释 KOL 决策、准入障碍与定价敏感度。',
  },
  {
    question: 'BioNixus 如何支持亚太项目？',
    answer:
      'BioNixus 提供医生与支付方调研、HEOR 模块及多市场 fieldwork，支持亚太上市与证据 dossier。',
  },
];

export const chinaZh = {
  seo: {
    metaTitle: '2026医药市场研究指南 亚太 | BioNixus',
    metaDescription:
      '2026年医药市场研究指南：全球药企亚太证据策略、NMPA、医保谈判与 primary research 方法。',
    focusKeyword: '医药市场研究',
    keywords: ['医药市场研究', '制药市场研究', '医疗健康市场调研', '亚太 market access', 'NMPA', 'RWE'],
    canonicalUrl: 'https://www.bionixus.com/blog/pharmaceutical-market-research-china-2026',
    noIndex: false,
  },
  title: '2026年医药市场研究指南：全球药企亚太证据策略',
  slug: { current: 'pharmaceutical-market-research-china-2026' },
  excerpt:
    '2026年医药市场研究指南：亚太监管、医保准入、RWE 与 primary research 方法。',
  readingTime: 19,
  language: 'zh',
  country: 'China',
  coverAlt: '2026年医药市场研究指南全球药企亚太证据策略',
  tags: ['医药市场研究', '亚太', 'NMPA', 'market access', 'RWE', 'HEOR', '中国'],
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  tableOfContents: [
    { heading: '亚太医药市场 2026 概览', anchor: 'apac-overview' },
    { heading: 'NMPA 与中国注册路径', anchor: 'nmpa' },
    { heading: '医保谈判与医院准入', anchor: 'nrdl-access' },
    { heading: '医药市场研究方法论', anchor: 'methodology-zh' },
    { heading: '真实世界证据在亚太的应用', anchor: 'rwe-apac' },
    { heading: 'BioNixus 亚太支持', anchor: 'bionixus-apac' },
    { heading: '常见问题', anchor: 'faq' },
  ],
  faq: zhFaq,
  ctaSection: {
    title: '预约亚太 market access 简报',
    description: 'BioNixus 支持医药市场研究、HEOR 与亚太上市证据策略。',
    buttonText: '联系我们',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('亚太 market access 与医学事务负责人要点', [
    '中国及亚太准入 combine NMPA 注册、医保谈判与医院药事会多层决策。',
    '本土 primary research 与 RWE 是跨国 dossier 可信度的关键补充。',
    'BioNixus 提供医生/支付方调研与 HEOR 支持亚太项目。',
  ]),
  bodyHtml: buildBody(
    `${p('2026 年，<strong>医药市场研究</strong>已成为全球药企亚太战略的核心：NMPA 加速创新药审评，医保谈判 (NRDL) 决定可及性，医院药事会控制实际处方。跨国团队必须回答：如何用本土证据支撑注册、定价与准入？')} ${p('请参阅 <a href="/healthcare-market-research">healthcare market research</a> 与 <a href="/zh/healthcare-market-research">亚太医药市场研究</a>。')}`,
    [
      {
        id: 'apac-overview',
        heading: '亚太医药市场 2026 概览',
        blocks: [
          p(
            '亚太占全球 pharma 增长的重要份额。中国、日本、韩国、东南亚各自 regulatory 与 payer 体系不同。单一 regional dossier  rarely 满足所有市场；China-first 或 multi-hub 策略需 tailored 研究设计。',
          ),
          p(
            '肿瘤、代谢、罕见病与生物类似药是 research 投入重点。City-tier 差异（一线 vs 二三线城市）影响 adoption curve 与 KOL 网络。',
          ),
        ],
      },
      {
        id: 'nmpa',
        heading: 'NMPA 与中国注册路径',
        blocks: [
          p(
            '国家药监局 (NMPA) 管理注册、临床 trial 与 pharmacovigilance。Breakthrough therapy 与 priority review 缩短 timeline，但不替代 post-marketing 与 health economic 要求。',
          ),
        ],
      },
      {
        id: 'nrdl-access',
        heading: '医保谈判与医院准入',
        blocks: [
          p(
            'NRDL 谈判决定医保报销范围与价格；医院药事会决定 formulary 与 actual utilization。Budget impact 与 pharmacoeconomic 模型需中国本土参数。',
          ),
          ul([
            '<strong>NRDL：</strong> 年度 cycle，需 prepared evidence package。',
            '<strong>Hospital P&amp;T：</strong> 省级/三甲 vs 基层路径不同。',
            '<strong>Private pay：</strong> 高端私立渠道 parallel 于医保。',
          ]),
        ],
      },
      {
        id: 'methodology-zh',
        heading: '医药市场研究方法论',
        blocks: [
          p(
            '<strong>制药市场研究</strong> 结合 physician survey（处方行为、比较器）、payer interview（预算阈值）与 patient flow 分析。Qualitative KOL depth interview 解释 quantitative 结果。',
          ),
        ],
      },
      {
        id: 'rwe-apac',
        heading: '真实世界证据在亚太的应用',
        blocks: [
          p(
            'Hospital EHR、registry 与 claims（视市场 availability）支持 RWE。Study protocol 需 pre-specify；confounding adjustment 与 data provenance 是 payer 审查重点。',
          ),
        ],
      },
      {
        id: 'bionixus-apac',
        heading: 'BioNixus 亚太支持',
        blocks: [
          p(
            'BioNixus 提供 <strong>医药市场研究</strong> 与 HEOR：<a href="/zh/healthcare-market-research">了解更多</a> 或 <a href="/contact">联系</a>。',
          ),
        ],
      },
    ],
    zhFaq,
    '常见问题',
  ),
};

// ─── RU — Russia ─────────────────────────────────────────────────────────────

const ruFaq = [
  {
    question: 'Нужны ли локальные исследования рынка для регистрации?',
    answer:
      'Минздрав и формулярные комитеты ожидают данные по российской практике лечения, эpidemiology и pharmacoeconomics для включения в программы ЛЛО и госпитальные перечни.',
  },
  {
    question: 'Когда начинать маркетинговые исследования?',
    answer:
      'За 24–36 месяцев до выхода на рынок, чтобы согласовать comparators, ценовую стратегию и dossier для плательщиков.',
  },
  {
    question: 'Принимается ли RWE?',
    answer:
      'Да, при прозрачной методологии и локальных comparators; регистры и первичные исследования дополняют pivot trials.',
  },
  {
    question: 'Чем количественные методы отличаются от качественных?',
    answer:
      'Количественные оценивают объём и долю рынка; качественные объясняют решения врачей и барьеры доступа.',
  },
  {
    question: 'Как BioNixus поддерживает в регионе?',
    answer:
      'BioNixus проводит панели врачей, интервью с плательщиками и HEOR-моделирование для фарма-команд.',
  },
];

export const russiaRu = {
  seo: {
    metaTitle: 'Фарма исследования рынка 2026 | BioNixus',
    metaDescription:
      'Фармацевтические исследования рынка 2026: методология, доступ на рынок, RWE и primary research для pharma-команд.',
    focusKeyword: 'фармацевтические исследования рынка',
    keywords: [
      'фармацевтические исследования рынка',
      'маркетинговые исследования фарма',
      'исследование рынка здравоохранения',
      'market access',
      'HEOR',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/farmacevticheskie-issledovaniya-rynka-2026',
    noIndex: false,
  },
  title: 'Фармацевтические исследования рынка 2026: методология и доступ на рынок',
  slug: { current: 'farmacevticheskie-issledovaniya-rynka-2026' },
  excerpt:
    'Руководство 2026 по фармацевтическим исследованиям рынка: методология, регуляторика, RWE и доступ.',
  readingTime: 18,
  language: 'ru',
  country: 'Russia',
  coverAlt: 'Фармацевтические исследования рынка методология доступ 2026',
  tags: [
    'фарма',
    'исследования рынка',
    'market access',
    'RWE',
    'HEOR',
    'здравоохранение',
    'Россия',
  ],
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  tableOfContents: [
    { heading: 'Рынок здравоохранения 2026', anchor: 'market-overview-ru' },
    { heading: 'Регуляторные требования', anchor: 'regulatory-ru' },
    { heading: 'Методология исследований', anchor: 'methodology-ru' },
    { heading: 'Фармакоэкономика и плательщики', anchor: 'heor-ru' },
    { heading: 'RWE и регистры', anchor: 'rwe-ru' },
    { heading: 'BioNixus', anchor: 'bionixus-ru' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: ruFaq,
  ctaSection: {
    title: 'Запросить briefing по market access',
    description:
      'BioNixus поддерживает фармацевтические исследования рынка, HEOR и стратегию доступа.',
    buttonText: 'Связаться',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Ключевые выводы для market access', [
    'Локальные данные по практике лечения критичны для dossier и переговоров с плательщиками.',
    'Комбинация количественных и качественных методов повышает credibility HTA-пакета.',
    'BioNixus проводит панели врачей, интервью с плательщиками и HEOR-моделирование.',
  ]),
  bodyHtml: buildBody(
    `${p('<strong>Фармацевтические исследования рынка</strong> остаются основой стратегии доступа: без понимания реальной практики назначения, comparators и ожиданий плательщиков dossier теряет убедительность. В 2026 году команды должны интегрировать primary research, RWE и pharmacoeconomics.')} ${p('См. <a href="/healthcare-market-research">healthcare market research</a> и <a href="/ru/healthcare-market-research">исследования рынка</a>.')}`,
    [
      {
        id: 'market-overview-ru',
        heading: 'Рынок здравоохранения 2026',
        blocks: [
          p(
            'Фармацевтический рынок сочетает программы льготного лекарственного обеспечения (ЛЛО), госпитальный сектор и частное страхование. Онкология, редкие заболевания и хронические состояния — приоритетные therapy areas для исследований.',
          ),
        ],
      },
      {
        id: 'regulatory-ru',
        heading: 'Регуляторные требования',
        blocks: [
          p(
            'Регистрация лекарственных средств требует локализации clinical и quality dossier. Экономическая оценка и данные использования в реальной практике increasingly влияют на listing и volume.',
          ),
        ],
      },
      {
        id: 'methodology-ru',
        heading: 'Методология исследований',
        blocks: [
          p(
            '<strong>Маркетинговые исследования фарма</strong> включают опросы врачей, глубинные интервью с KOL, audit назначений и моделирование epidemiology. Representative sampling по федеральным округам снижает bias.',
          ),
        ],
      },
      {
        id: 'heor-ru',
        heading: 'Фармакоэкономика и плательщики',
        blocks: [
          p(
            'Budget impact и cost-effectiveness модели должны использовать локальные costs и treatment shares. Payer interviews выявляют evidence gaps до submission.',
          ),
        ],
      },
      {
        id: 'rwe-ru',
        heading: 'RWE и регистры',
        blocks: [
          p(
            'Регистры и административные данные поддерживают RWE при документированной методологии. Primary chart review заполняет пробелы coding.',
          ),
        ],
      },
      {
        id: 'bionixus-ru',
        heading: 'BioNixus',
        blocks: [
          p(
            'BioNixus проводит <strong>фармацевтические исследования рынка</strong>. <a href="/ru/healthcare-market-research">Подробнее</a> или <a href="/contact">контакт</a>.',
          ),
        ],
      },
    ],
    ruFaq,
  ),
};

export const PART2_ARTICLES = [franceFr, spainEs, brazilPt, chinaZh, russiaRu];
