/**
 * BIO-435 Day 2 articles — FR CEESP, ES farmacoeconomía, PT CONITEC, ZH NMPA, RU EAEU
 */

import {
  PUBLISHED_DAY2,
  p,
  h2,
  ul,
  execSummary,
  buildBody,
} from './bio435-day2-shared.mjs';

// ─── FR — CEESP ──────────────────────────────────────────────────────────────

const frCeespFaq = [
  {
    question: 'Quand la CEESP évalue-t-elle un médicament ?',
    answer:
      'Lorsque le demandeur revendique une ASMR/ASA I, II ou III ; ou des ventes prévisionnelles ≥ 20 M€ HT en année 2 ; ou un impact revendiqué sur l’organisation des soins. La fast-track LFSS 2025 (15 jours ouvrés) ne s’applique qu’à un périmètre étroit.',
  },
  {
    question: 'La CEESP remplace-t-elle l’évaluation clinique HAS ?',
    answer:
      'Non. SMR/ASMR relèvent de la Commission de la Transparence ; CEESP produit un avis médico-économique transmis au CEPS pour la négociation de prix — deux filières distinctes.',
  },
  {
    question: 'Existe-t-il un seuil ICER obligatoire en France ?',
    answer:
      'Pas de seuil €/QALY unique publié comme gate automatique. La CEESP apprécie coût-efficacité, incertitude et impact budgetaire dans le contexte SMR/ASMR.',
  },
  {
    question: 'Accès précoce et évaluation économique ?',
    answer:
      'L’accès précoce s’évalue sous incertitude clinique (doctrine HAS 2024–2025). La CEESP intervient typiquement au moment du dossier de remboursement complet, pas pour toutes les ATU.',
  },
  {
    question: 'Comment BioNixus aide en France ?',
    answer:
      'Recherche primaire payers/médecins, paramètres de modèles CEESP, préparation dossiers HAS. Voir aussi études de marché France.',
  },
];

export const franceCeespFr = {
  seo: {
    metaTitle: 'Évaluation économique HAS CEESP 2026 | BioNixus',
    metaDescription:
      'Évaluation économique HAS et CEESP en France 2026 : déclencheurs ASMR, LFSS fast-track, avis médico-économiques et accès au marché.',
    focusKeyword: 'évaluation économique HAS',
    keywords: [
      'évaluation économique HAS',
      'CEESP France',
      'ASMR pharmacoeconomics',
      'accès marché France',
      'LFSS 2025',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/evaluation-economique-has-france-2026',
    noIndex: false,
  },
  title: 'Évaluation économique HAS : CEESP et accès au marché en France (2026)',
  slug: { current: 'evaluation-economique-has-france-2026' },
  excerpt:
    'Guide 2026 de l’évaluation économique HAS : CEESP, déclencheurs ASMR, LFSS fast-track et recherche pour dossiers crédibles.',
  readingTime: 18,
  language: 'fr',
  country: 'France',
  coverAlt: 'Évaluation économique HAS CEESP France accès marché 2026',
  tags: ['France', 'HAS', 'CEESP', 'ASMR', 'pharmacoeconomics', 'accès marché'],
  publishedAt: PUBLISHED_DAY2,
  updatedAt: PUBLISHED_DAY2,
  tableOfContents: [
    { heading: 'CEESP et rôle économique', anchor: 'ceesp-role' },
    { heading: 'Déclencheurs d’évaluation', anchor: 'declencheurs' },
    { heading: 'SMR/ASMR vs avis économique', anchor: 'smr-vs-economique' },
    { heading: 'LFSS 2025 et fast-track', anchor: 'lfss-fast-track' },
    { heading: 'Recherche pour modèles CEESP', anchor: 'recherche-modeles' },
    { heading: 'BioNixus en France', anchor: 'bionixus-fr' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: frCeespFaq,
  ctaSection: {
    title: 'Briefing évaluation économique France',
    description: 'BioNixus accompagne CEESP, HAS et recherche payers en France.',
    buttonText: 'Demander un briefing',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Points clés pour market access France', [
    'CEESP évalue coût-efficacité et impact pour produits à ASMR I–III, budget ≥ 20 M€ Y2 ou impact organisation des soins.',
    'Avis CEESP transmis au CEPS — distinct de SMR/ASMR clinique.',
    'Fast-track LFSS 2025 (15 jours) : périmètre restreint (ASMR I–III + CEESP favorable + coût-efficacité démontrée).',
  ]),
  bodyHtml: buildBody(
    `${p('L’<strong>évaluation économique HAS</strong> via la CEESP structure une part croissante des négociations de prix en France. Ce guide 2026 complète <a href="/blog/etudes-marche-pharmaceutique-france-2026">études de marché pharmaceutique France</a> en se concentrant sur pharmacoeconomics et CEESP — pas la recherche générale. Hub : <a href="/healthcare-market-research/france">France healthcare market research</a> et <a href="/heor-consulting">HEOR consulting</a>.')}`,
    [
      {
        id: 'ceesp-role',
        heading: 'CEESP et rôle économique',
        blocks: [
          p(
            'La Commission d’évaluation économique et de santé publique (CEESP), rattachée à la HAS, produit des avis médico-économiques pour les produits innovants à enjeu budgétaire. Modèles CEA, impact budgetaire et analyse de sensibilité utilisent coûts et épidémiologie français.',
          ),
        ],
      },
      {
        id: 'declencheurs',
        heading: 'Déclencheurs d’évaluation',
        blocks: [
          p(
            'CEESP intervient lorsque : ASMR/ASA I, II ou III revendiquée ; ventes prévisionnelles ≥ 20 M€ HT année 2 ; ou impact revendiqué sur l’organisation des soins. Ne pas généraliser la fast-track à tous les produits.',
          ),
          ul([
            '<strong>ASMR I–III :</strong> bénéfice clinique substantiel revendiqué.',
            '<strong>Seuil budget :</strong> 20 M€ HT année 2 (prévisionnel).',
            '<strong>Organisation des soins :</strong> revendication explicite d’impact parcours.',
          ]),
        ],
      },
      {
        id: 'smr-vs-economique',
        heading: 'SMR/ASMR vs avis économique',
        blocks: [
          p(
            'SMR (Service Médical Rendu) et ASMR relèvent de la Commission de la Transparence. CEESP traite la dimension économique séparément ; avis transmis au CEPS pour négociation. Confondre les deux filières fausse calendrier dossier.',
          ),
        ],
      },
      {
        id: 'lfss-fast-track',
        heading: 'LFSS 2025 et fast-track',
        blocks: [
          p(
            'LFSS 2025 prévoit une procédure accélérée de 15 jours ouvrés pour un périmètre étroit : ASMR I–III, avis CEESP sans réserve majeure, démonstration coût-efficacité. Clause de sauvegarde 2025 : seuil M = 27,25 Md€ dépenses remboursées.',
          ),
        ],
      },
      {
        id: 'recherche-modeles',
        heading: 'Recherche pour modèles CEESP',
        blocks: [
          p(
            'Paramètres d’utilisation réelle, comparateurs prescrits et coûts hospitaliers alimentent modèles CEESP. Entretiens payers et panels médecins complètent SNDS/registres quand disponibles.',
          ),
        ],
      },
      {
        id: 'bionixus-fr',
        heading: 'BioNixus en France',
        blocks: [
          p(
            'BioNixus réalise <strong>évaluation économique</strong> support : recherche primaire, préparation CEESP/HAS. <a href="/contact">Contact</a>.',
          ),
        ],
      },
    ],
    frCeespFaq,
  ),
};

// ─── ES — Farmacoeconomía ───────────────────────────────────────────────────

const esFarmEcoFaq = [
  {
    question: '¿Qué establece el RD 415/2026?',
    answer:
      'Marco de evaluación HTA (BOE 27 mayo 2026, vigente 18 junio 2026). AEMPS aloja la oficina de evaluación; RedETS para tecnologías no farmacológicas. Evaluaciones obligatorias de elaborar pero no vinculantes para fijación de precios.',
  },
  {
    question: '¿180 días de evaluación significa acceso en 180 días?',
    answer:
      'No. El reloj regulatorio de evaluación no coincide con acceso real del paciente — el pathway total puede superar 500 días por financiación autonómica.',
  },
  {
    question: '¿Persiste la variación regional?',
    answer:
      'Sí. 17 comunidades autónomas mantienen financiación regional que puede retrasar acceso tras evaluación nacional.',
  },
  {
    question: '¿Qué módulos farmacoeconómicos se esperan?',
    answer:
      'CEA y análisis de impacto presupuestario (BIA) cada vez más formalizados en dossiers HTA bajo el nuevo marco.',
  },
  {
    question: '¿Cómo apoya BioNixus en España?',
    answer:
      'Investigación primaria, modelos farmacoeconómicos y contexto RD 415. Ver también investigación de mercado España.',
  },
];

export const farmacoeconomiaEs = {
  seo: {
    metaTitle: 'Farmacoeconomía acceso mercado España 2026 | BioNixus',
    metaDescription:
      'Farmacoeconomía y acceso al mercado en España 2026: RD 415/2026, AEMPS, evaluación HTA y financiación autonómica.',
    focusKeyword: 'farmacoeconomía acceso mercado españa',
    keywords: [
      'farmacoeconomía acceso mercado españa',
      'RD 415 2026',
      'AEMPS HTA',
      'evaluación económica España',
      'RedETS',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/farmacoeconomia-acceso-mercado-espana-2026',
    noIndex: false,
  },
  title: 'Farmacoeconomía y acceso al mercado en España: RD 415/2026',
  slug: { current: 'farmacoeconomia-acceso-mercado-espana-2026' },
  excerpt:
    'Guía 2026 de farmacoeconomía y acceso en España: Real Decreto 415/2026, evaluaciones HTA, comunidades autónomas y evidencia para payers.',
  readingTime: 18,
  language: 'es',
  country: 'Spain',
  coverAlt: 'Farmacoeconomía acceso mercado España RD 415 2026',
  tags: ['España', 'farmacoeconomía', 'RD 415', 'AEMPS', 'HTA', 'acceso mercado'],
  publishedAt: PUBLISHED_DAY2,
  updatedAt: PUBLISHED_DAY2,
  tableOfContents: [
    { heading: 'RD 415/2026: marco HTA', anchor: 'rd-415-marco' },
    { heading: 'AEMPS y RedETS', anchor: 'aemps-redets' },
    { heading: 'Evaluaciones no vinculantes', anchor: 'no-vinculantes' },
    { heading: 'Financiación autonómica', anchor: 'financiacion-autonomica' },
    { heading: 'Módulos farmacoeconómicos', anchor: 'modulos-farmacoeconomicos' },
    { heading: 'Investigación primaria para dossiers HTA', anchor: 'investigacion-primaria-es' },
    { heading: 'BioNixus en España', anchor: 'bionixus-es' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: esFarmEcoFaq,
  ctaSection: {
    title: 'Briefing farmacoeconomía España',
    description: 'BioNixus apoya HTA, investigación primaria y modelos en España.',
    buttonText: 'Solicitar briefing',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Puntos clave para equipos de acceso en España', [
    'RD 415/2026 (vigente 18 jun 2026) formaliza evaluación HTA — preceptiva pero no vinculante en precios.',
    '17 comunidades autónomas pueden retrasar acceso tras evaluación nacional.',
    'CEA y BIA cada vez más esperados en dossiers bajo el nuevo marco.',
  ]),
  bodyHtml: buildBody(
    `${p('La <strong>farmacoeconomía y acceso al mercado en España</strong> entra en una fase más estructurada con el Real Decreto 415/2026, vigente desde el 18 de junio de 2026. Este artículo profundiza en evaluación económica — distinto de <a href="/blog/investigacion-mercado-farmaceutico-espana-2026">investigación de mercado farmacéutico España</a>. Contexto: <a href="/healthcare-market-research/spain">healthcare market research Spain</a>.')}`,
    [
      {
        id: 'rd-415-marco',
        heading: 'RD 415/2026: marco HTA',
        blocks: [
          p(
            'Publicado en BOE-A-2026-11587 (27 mayo 2026), el RD 415/2026 establece el marco de evaluación HTA. Evaluaciones son obligatorias de elaborar pero no vinculantes (*preceptivas pero no vinculantes*) para organismos de precios.',
          ),
        ],
      },
      {
        id: 'aemps-redets',
        heading: 'AEMPS y RedETS',
        blocks: [
          p(
            'AEMPS aloja la oficina de evaluación de medicamentos; RedETS cubre tecnologías no farmacológicas. Los dossiers incorporan módulos clínicos y económicos según el preámbulo del real decreto.',
          ),
        ],
      },
      {
        id: 'no-vinculantes',
        heading: 'Evaluaciones no vinculantes',
        blocks: [
          p(
            'Un informe HTA favorable no garantiza precio ni financiación. Equipos deben planificar negociación con Ministerio de Sanidad y comunidades autónomas en paralelo a la evaluación.',
          ),
        ],
      },
      {
        id: 'financiacion-autonomica',
        heading: 'Financiación autonómica',
        blocks: [
          p(
            'Las 17 comunidades autónomas gestionan financiación que puede retrasar acceso del paciente. El reloj de 180 días de evaluación no equivale al tiempo total de acceso — pathways de 500+ días son frecuentes en análisis sectorial.',
          ),
        ],
      },
      {
        id: 'modulos-farmacoeconomicos',
        heading: 'Módulos farmacoeconómicos',
        blocks: [
          p(
            'CEA y análisis de impacto presupuestario (BIA) refuerzan dossiers bajo RD 415. Investigación primaria valida comparadores y costes de recursos en práctica clínica española.',
          ),
          p(
            'Los modelos deben usar costes unitarios españoles, epidemiología nacional o autonómica cuando esté disponible, y escenarios de uptake alineados con patrones reales de prescripción — no supuestos importados de dossiers franceses o alemanes sin adaptación.',
          ),
          ul([
            '<strong>CEA:</strong> incremental cost-effectiveness cuando el comparador y la población son controvertidos.',
            '<strong>BIA:</strong> impacto fiscal a 3–5 años para comités de precio y financiación.',
            '<strong>Coste-consecuencia:</strong> cuando múltiples desenlaces dificultan un ratio único.',
            '<strong>Sensibilidad:</strong> variación de precio neto, adherencia y duración de tratamiento.',
          ]),
        ],
      },
      {
        id: 'investigacion-primaria-es',
        heading: 'Investigación primaria para dossiers HTA',
        blocks: [
          p(
            'Entrevistas a médicos hospitalarios y de atención primaria documentan secuencias terapéuticas que los ensayos pivot no capturan. Entrevistas a gestores autonómicos y farmacéuticos hospitalarios aclaran criterios de inclusión en listas y retrasos post-evaluación.',
          ),
          p(
            'La investigación cualitativa debe planificarse 18–24 meses antes del lanzamiento para alimentar tanto el módulo clínico como el económico del dossier AEMPS.',
          ),
        ],
      },
      {
        id: 'bionixus-es',
        heading: 'BioNixus en España',
        blocks: [
          p(
            'BioNixus apoya <strong>farmacoeconomía acceso mercado España</strong>: modelos, investigación médicos/payers. <a href="/contact">Contacto</a>.',
          ),
        ],
      },
    ],
    esFarmEcoFaq,
  ),
};

// ─── PT — CONITEC ────────────────────────────────────────────────────────────

const conitecFaq = [
  {
    question: 'CONITEC é obrigatória para todo lançamento no Brasil?',
    answer:
      'Para incorporação ao SUS, sim: registro ANVISA seguido de avaliação CONITEC e decisão do Ministério (SCTIE). O mercado privado (~70% das vendas) não exige CONITEC para comercialização.',
  },
  {
    question: 'Quais são os prazos legais?',
    answer:
      'Avaliação CONITEC: 180 dias (+ prorrogações). Se aprovado, mais 180 dias para disponibilidade no SUS — atrasos operacionais além disso são risco, não falha da lei.',
  },
  {
    question: 'Qual o papel da CMED?',
    answer:
      'CMED define tetos de preço — separado do registro ANVISA e da avaliação CONITEC.',
  },
  {
    question: 'O que é a Lei 14.785/2023?',
    answer:
      'Trilha prioritária de revisão ANVISA visando aprovação em ~180 dias para fármacos clinicamente superiores.',
  },
  {
    question: 'Como a BioNixus apoia CONITEC?',
    answer:
      'Pesquisa primária, dossiers HTA e inteligência SUS. Ver também pesquisa de mercado Brasil.',
  },
];

export const conitecPt = {
  seo: {
    metaTitle: 'Avaliação CONITEC Brasil 2026 | BioNixus',
    metaDescription:
      'Avaliação de tecnologias CONITEC no Brasil 2026: ANVISA, SUS, prazos HTA e mercado privado vs público.',
    focusKeyword: 'avaliação tecnologias CONITEC',
    keywords: [
      'avaliação tecnologias CONITEC',
      'CONITEC ANVISA',
      'incorporação SUS',
      'HTA Brasil',
      'acesso mercado Brasil',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/avaliacao-tecnologias-conitec-brasil-2026',
    noIndex: false,
  },
  title: 'Avaliação de tecnologias CONITEC: acesso ao SUS no Brasil (2026)',
  slug: { current: 'avaliacao-tecnologias-conitec-brasil-2026' },
  excerpt:
    'Guia 2026 da avaliação CONITEC: pathway ANVISA → CONITEC → SUS, prazos, mercado privado e evidência HTA.',
  readingTime: 18,
  language: 'pt',
  country: 'Brazil',
  coverAlt: 'Avaliação tecnologias CONITEC Brasil SUS 2026',
  tags: ['Brasil', 'CONITEC', 'ANVISA', 'SUS', 'HTA', 'acesso mercado'],
  publishedAt: PUBLISHED_DAY2,
  updatedAt: PUBLISHED_DAY2,
  tableOfContents: [
    { heading: 'Pathway ANVISA e CONITEC', anchor: 'pathway-anvisa-conitec' },
    { heading: 'Prazos de avaliação SUS', anchor: 'prazos-sus' },
    { heading: 'Mercado privado vs SUS', anchor: 'privado-vs-sus' },
    { heading: 'CMED e precificação', anchor: 'cmed-precificacao' },
    { heading: 'Lei 14.785/2023', anchor: 'lei-prioritaria' },
    { heading: 'Evidência para relatórios CONITEC', anchor: 'evidencia-hta-brasil' },
    { heading: 'BioNixus no Brasil', anchor: 'bionixus-br' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: conitecFaq,
  ctaSection: {
    title: 'Briefing CONITEC e acesso Brasil',
    description: 'BioNixus apoia HTA CONITEC, pesquisa primária e estratégia SUS/privado.',
    buttonText: 'Solicitar briefing',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Pontos-chave para market access Brasil', [
    'Acesso SUS: ANVISA → CONITEC → decisão SCTIE → disponibilidade SUS (180+180 dias legais).',
    'Mercado privado ~70% — CONITEC não é gate comercial.',
    'CMED precifica separadamente do registro; Lei 14.785/2023 acelera ANVISA seletivamente.',
  ]),
  bodyHtml: buildBody(
    `${p('A <strong>avaliação de tecnologias CONITEC</strong> define incorporação ao SUS após registro ANVISA — tema distinto de <a href="/blog/pesquisa-mercado-farmaceutico-brasil-anvisa-2026">pesquisa de mercado farmacêutico Brasil</a>. Hub: <a href="/healthcare-market-research/brazil">Brazil healthcare market research</a>. Mercado direcional 2026: USD 36–44B conforme escopo (Day-1 validação).')}`,
    [
      {
        id: 'pathway-anvisa-conitec',
        heading: 'Pathway ANVISA e CONITEC',
        blocks: [
          p(
            'Dois passos para acesso público: registro ANVISA, depois avaliação HTA CONITEC para incorporação SUS. Decisão final do Ministério (SCTIE). Evidência clínica e econômica alimenta relatórios CONITEC.',
          ),
        ],
      },
      {
        id: 'prazos-sus',
        heading: 'Prazos de avaliação SUS',
        blocks: [
          p(
            '180 dias para avaliação CONITEC (+ extensões); 180 dias para disponibilidade SUS se aprovado. Atrasos operacionais além dos prazos legais são risco de planejamento — não falha automática da lei.',
          ),
        ],
      },
      {
        id: 'privado-vs-sus',
        heading: 'Mercado privado vs SUS',
        blocks: [
          p(
            'O mercado privado representa ~70% das vendas — lançamento comercial não exige CONITEC. Estratégia dual: privado para receita early, SUS para volume e impacto.',
          ),
        ],
      },
      {
        id: 'cmed-precificacao',
        heading: 'CMED e precificação',
        blocks: [
          p(
            'CMED estabelece tetos de preço independentemente de ANVISA/CONITEC. Pesquisa de pricing e willingness-to-pay informa negociação privada e dossiers SUS.',
          ),
        ],
      },
      {
        id: 'lei-prioritaria',
        heading: 'Lei 14.785/2023',
        blocks: [
          p(
            'Trilha prioritária ANVISA (~180 dias) para fármacos clinicamente superiores — acelera registro, não substitui CONITEC para SUS.',
          ),
        ],
      },
      {
        id: 'evidencia-hta-brasil',
        heading: 'Evidência para relatórios CONITEC',
        blocks: [
          p(
            'Relatórios CONITEC exigem síntese clínica, impacto orçamentário e análise de custo-efetividade quando aplicável. Dados brasileiros — prevalência, prática clínica, custos hospitalares — devem substituir extrapolações de modelos europeus ou norte-americanos.',
          ),
          ul([
            '<strong>Revisão sistemática + BR:</strong> incluir estudos locais quando disponíveis.',
            '<strong>Impacto orçamentário SUS:</strong> horizonte e população elegível alinhados ao PCDT.',
            '<strong>Stakeholders:</strong> entrevistas com especialistas para validar comparadores.',
            '<strong>Risco operacional:</strong> atrasos além dos prazos legais — planear cenários conservadores.',
          ]),
          p(
            'Pesquisa primária com médicos do setor privado informa pricing CMED e estratégia dual público/privado enquanto CONITEC avança.',
          ),
          p(
            'Relatórios de impacto orçamentário devem explicitar população elegível ao SUS, curva de uptake conservadora e comparador alinhado ao PCDT vigente. Comitês técnicos frequentemente solicitam análises de sensibilidade sobre preço proposto e taxa de difusão hospitalar.',
          ),
        ],
      },
      {
        id: 'bionixus-br',
        heading: 'BioNixus no Brasil',
        blocks: [
          p(
            'BioNixus conduz <strong>avaliação CONITEC</strong> support e pesquisa primária. Programas incluem mapeamento de comparadores SUS, entrevistas com especialistas clínicos e modelagem de impacto orçamentário alinhada aos templates CONITEC. <a href="/contact">Contato</a>.',
          ),
        ],
      },
    ],
    conitecFaq,
  ),
};

// ─── ZH — NMPA/NRDL ──────────────────────────────────────────────────────────

const nmpaZhFaq = [
  {
    question: 'NMPA注册与NRDL谈判的关系是什么？',
    answer:
      'NMPA/CDE负责上市许可；国家医保目录（NRDL）谈判是公立报销的主要路径。成功纳入常伴随显著降价——近年周期报告平均降幅约60%（须引用具体NRDL周期来源）。',
  },
  {
    question: '与Day-1亚太市场研究文章有何不同？',
    answer:
      '本文聚焦NMPA注册证据、NRDL准入规划与CDE数据要求；Day-1文章侧重亚太通用MR方法论。避免关键词蚕食。',
  },
  {
    question: 'CDE 2025受理量说明什么？',
    answer:
      'CDE 2025年受理注册申请20,149件（+3.0% YoY，CiSema汇总）——反映注册竞争强度，不宜杜撰单一市场规模数字。',
  },
  {
    question: 'RWE试点如何支持准入？',
    answer:
      '海南博鳌乐城、粤港澳大湾区等RWE试点可作为补充证据路径——设计须符合当地监管框架。',
  },
  {
    question: 'BioNixus如何支持中国项目？',
    answer:
      '医生与支付方定性研究、注册证据规划、NRDL场景建模。见/heor-consulting与/contact。',
  },
];

export const nmpaZh = {
  seo: {
    metaTitle: 'NMPA NRDL医药市场研究2026 | BioNixus',
    metaDescription:
      'NMPA与NRDL医药市场研究2026：注册证据、CDE受理、医保谈判与本地MR方法。',
    focusKeyword: 'nmpa pharmaceutical market research china',
    keywords: [
      'nmpa pharmaceutical market research china',
      'NRDL 2026',
      'CDE 注册',
      '中国医药准入',
      'real world evidence 中国',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/nmpa-pharmaceutical-market-research-china-2026',
    noIndex: false,
  },
  title: 'NMPA与NRDL医药市场研究：2026年注册与准入证据规划',
  slug: { current: 'nmpa-pharmaceutical-market-research-china-2026' },
  excerpt:
    '2026年NMPA/NRDL医药市场研究指南：注册证据、医保谈判、CDE数据与本地定性研究方法。',
  readingTime: 18,
  language: 'zh',
  country: 'China',
  coverAlt: 'NMPA NRDL医药市场研究中国注册准入2026',
  tags: ['中国', 'NMPA', 'NRDL', 'CDE', '医药市场研究', '准入'],
  publishedAt: PUBLISHED_DAY2,
  updatedAt: PUBLISHED_DAY2,
  tableOfContents: [
    { heading: 'NMPA/CDE注册证据', anchor: 'nmpa-cde' },
    { heading: 'NRDL谈判与定价逻辑', anchor: 'nrdl-negotiation' },
    { heading: 'CDE受理趋势', anchor: 'cde-volume' },
    { heading: 'RWE试点路径', anchor: 'rwe-pilots' },
    { heading: '本地MR方法', anchor: 'local-mr-methods' },
    { heading: 'BioNixus中国支持', anchor: 'bionixus-cn' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: nmpaZhFaq,
  ctaSection: {
    title: '规划中国注册与NRDL证据简报',
    description: 'BioNixus支持NMPA证据规划、医生与支付方研究及准入场景分析。',
    buttonText: '联系BioNixus',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('2026中国医药准入要点', [
    'NMPA/CDE负责注册；NRDL是公立报销主路径，成功纳入常需显著降价谈判。',
    'CDE 2025受理20,149件（+3.0% YoY）——用流程数据而非杜撰市场规模。',
    '与Day-1 APAC MR文章区分：本文聚焦注册+NRDL证据 mechanics。',
  ]),
  bodyHtml: buildBody(
    `${p('2026年<strong>NMPA医药市场研究</strong>的核心问题是：如何将注册证据与NRDL准入规划同步，而非仅做泛亚太方法论。中国为全球第二大医药市场（IQVIA 2025年12月），但准入逻辑由NMPA/CDE审评与医保目录谈判驱动。请参阅<a href="/healthcare-market-research/china">China healthcare market research</a>；与<a href="/blog/pharmaceutical-market-research-china-2026">Day-1亚太MR指南</a>形成互补而非重复。')}`,
    [
      {
        id: 'nmpa-cde',
        heading: 'NMPA/CDE注册证据',
        blocks: [
          p(
            '国家药监局（NMPA）及药品审评中心（CDE）负责上市许可。注册策略需匹配适应症、临床数据来源及与NRDL时间线的衔接——避免注册完成后再启动准入证据。',
          ),
        ],
      },
      {
        id: 'nrdl-negotiation',
        heading: 'NRDL谈判与定价逻辑',
        blocks: [
          p(
            'NRDL谈判是公立报销主路径；近年成功纳入常伴随显著降价（周期报告平均约60%降幅——引用具体NRDL周期来源）。市场研究应支持预算影响、竞品定价与医院药事会预期。',
          ),
        ],
      },
      {
        id: 'cde-volume',
        heading: 'CDE受理趋势',
        blocks: [
          p(
            'CDE 2025年受理注册申请20,149件，同比+3.0%（CiSema CDE 2025汇总）——反映注册队列竞争，优于引用单一 headline 市场规模。',
          ),
        ],
      },
      {
        id: 'rwe-pilots',
        heading: 'RWE试点路径',
        blocks: [
          p(
            '海南博鳌乐城、粤港澳大湾区等RWE试点提供补充证据路径（2019–2022+政策延续）。设计须符合当地监管与数据治理要求。',
          ),
        ],
      },
      {
        id: 'local-mr-methods',
        heading: '本地MR方法',
        blocks: [
          p(
            '医生深度访谈、医院药事调研与支付方定性研究参数化NRDL场景。避免直接移植欧美 epidemiology 与 comparator 假设。',
          ),
        ],
      },
      {
        id: 'bionixus-cn',
        heading: 'BioNixus中国支持',
        blocks: [
          p(
            'BioNixus提供<strong>NMPA/NRDL医药市场研究</strong>与证据规划。<a href="/contact">联系我们</a>。',
          ),
        ],
      },
    ],
    nmpaZhFaq,
  ),
};

// ─── RU — EAEU ─────────────────────────────────────────────────────────────

const eaeuFaq = [
  {
    question: 'С 1 января 2026 все новые ЛС регистрируются только по процедуре ЕАЭС?',
    answer:
      'Да — для новых препаратов национальные процедуры регистрации прекращены. Действующие РУ с подачей заявления на приведение до 31 декабря 2025 могут продлеваться до 3 лет на период экспертизы.',
  },
  {
    question: 'Что такое ПП РФ №719?',
    answer:
      'Локализация производства: ≥50 баллов для статуса «российская промышленная продукция»; поправки от сентября 2025 (ПП 1392). Влияет на преференции закупок, отдельно от регистрации.',
  },
  {
    question: 'Как связаны GRLS, VED и FAS?',
    answer:
      'GRLS — госреестр; VED — перечень жизненно важных; FAS регистрирует предельные цены для VED.',
  },
  {
    question: 'Чем эта статья отличается от Day-1?',
    answer:
      'Day-1 — общая MR-методология; Day-2 — механика регистрации ЕАЭС и доступа, локализация, пересечение с VED.',
  },
  {
    question: 'Как BioNixus поддерживает доступ в ЕАЭС?',
    answer:
      'Исследование payers, локализация, регистрационная стратегия. См. также исследования рынка RU.',
  },
];

export const eaeuRu = {
  seo: {
    metaTitle: 'Доступ на рынок ЕАЭС 2026 | BioNixus',
    metaDescription:
      'Фармацевтический доступ ЕАЭС 2026: регистрация, локализация ПП 719, GRLS/VED и исследование рынка.',
    focusKeyword: 'eaeu pharmaceutical market access',
    keywords: [
      'eaeu pharmaceutical market access',
      'регистрация лекарств ЕАЭС',
      'локализация 719',
      'GRLS VED',
      'доступ на рынок Россия',
    ],
    canonicalUrl: 'https://www.bionixus.com/blog/eaeu-farmacevticheskiy-dostup-2026',
    noIndex: false,
  },
  title: 'Доступ на рынок ЕАЭС: регистрация и локализация в 2026',
  slug: { current: 'eaeu-farmacevticheskiy-dostup-2026' },
  excerpt:
    'ЕАЭС 2026: единая регистрация, локализация по ПП 719, GRLS/VED и исследование доступа для международных RA-команд.',
  readingTime: 18,
  language: 'ru',
  country: 'Russia',
  coverAlt: 'Доступ на рынок ЕАЭС фарма регистрация 2026',
  tags: ['ЕАЭС', 'Россия', 'регистрация', 'локализация', 'GRLS', 'VED', 'market access'],
  publishedAt: PUBLISHED_DAY2,
  updatedAt: PUBLISHED_DAY2,
  tableOfContents: [
    { heading: 'Переход на регистрацию ЕАЭС', anchor: 'eaeu-registration' },
    { heading: 'Локализация: ПП 719', anchor: 'localization-719' },
    { heading: 'GRLS и перечень VED', anchor: 'grls-ved' },
    { heading: 'Исследование payers и доступа', anchor: 'payer-research' },
    { heading: 'Календарь перехода 2025–2026', anchor: 'eaeu-timeline' },
    { heading: 'BioNixus в регионе ЕАЭС', anchor: 'bionixus-eaeu' },
    { heading: 'FAQ', anchor: 'faq' },
  ],
  faq: eaeuFaq,
  ctaSection: {
    title: 'Брифинг по доступу ЕАЭС',
    description: 'BioNixus поддерживает регистрацию, локализацию и исследование рынка в ЕАЭС.',
    buttonText: 'Связаться',
    buttonUrl: 'https://www.bionixus.com/contact',
  },
  executiveSummary: execSummary('Ключевые выводы для RA и market access', [
    'С 1 января 2026 новые ЛС — только процедура ЕАЭС (РФ, РБ, KZ, AM, KG; ~180 млн+ населения).',
    'ПП №719: ≥50 баллов локализации для преференций закупок — отдельно от MA.',
    'GRLS/VED/FAS: сегменты коммерческого и VED-рынка требуют разных исследовательских рамок.',
  ]),
  bodyHtml: buildBody(
    `${p('С <strong>1 января 2026</strong> новые лекарственные препараты регистрируются только по процедуре ЕАЭС — национальные процедуры для новых продуктов прекращены. Эта статья дополняет <a href="/blog/farmacevticheskie-issledovaniya-rynka-2026">фармацевтические исследования рынка</a> (Day-1) фокусом на регистрацию и доступ. Контекст: <a href="/healthcare-market-research">healthcare market research</a>.')}`,
    [
      {
        id: 'eaeu-registration',
        heading: 'Переход на регистрацию ЕАЭС',
        blocks: [
          p(
            'Члены ЕАЭС: Россия, Беларусь, Казахстан, Армения, Кыргызстан. Действующие РУ с подачей заявления на приведение до 31.12.2025 могут продлеваться до 3 лет на период экспертизы (решение ЕЭК 34/2025).',
          ),
        ],
      },
      {
        id: 'localization-719',
        heading: 'Локализация: ПП 719',
        blocks: [
          p(
            'ПП РФ №719 определяет баллы локализации (≥50 для статуса российской промышленной продукции); поправки сентября 2025 (ПП 1392). Локализация влияет на преференции закупок, не заменяя регистрацию.',
          ),
        ],
      },
      {
        id: 'grls-ved',
        heading: 'GRLS и перечень VED',
        blocks: [
          p(
            'GRLS — государственный реестр. Препараты VED подлежат регистрации предельных цен FAS. Коммерческий сегмент и VED требуют разных моделей доступа и ценовых исследований; рублёвые оценки датировать и указывать FX-чувствительность.',
          ),
        ],
      },
      {
        id: 'payer-research',
        heading: 'Исследование payers и доступа',
        blocks: [
          p(
            'Качественные интервью с KOL, больничными комитетами и дистрибьюторами дополняют регистрационную стратегию. Избегайте политических комментариев — фокус на RA и market access для международных команд.',
          ),
          p(
            'Единая регистрация ЕАЭС упрощает MA в пяти юрисдикциях, но цены, перечни VED и требования локализации остаются национальными. Исследование должно сегментировать коммерческий рынок, госзакупки и VED отдельно.',
          ),
          ul([
            '<strong>Регистрация:</strong> единый досье ЕАЭС, сроки экспертизы, приведение legacy РУ.',
            '<strong>Локализация:</strong> баллы ПП 719 для преференций закупок.',
            '<strong>Цены VED:</strong> регистрация предельных цен FAS.',
            '<strong>Каналы:</strong> дистрибуция и hospital tenders по странам ЕАЭС.',
          ]),
        ],
      },
      {
        id: 'eaeu-timeline',
        heading: 'Календарь перехода 2025–2026',
        blocks: [
          p(
            'Команды с legacy национальными РУ должны были подать заявления на приведение до 31 декабря 2025. Новые продукты с 1 января 2026 — только процедура ЕАЭС. Планирование исследования рынка и RA синхронизируют с этими датами.',
          ),
          p(
            'Международным производителям следует заранее картировать требования локализации по ПП 719 и сценарии участия в госзакупках — это влияет на выбор площадки производства и контрактное производство в регионе ЕАЭС.',
          ),
        ],
      },
      {
        id: 'bionixus-eaeu',
        heading: 'BioNixus в регионе ЕАЭС',
        blocks: [
          p(
            'BioNixus проводит <strong>исследования доступа ЕАЭС</strong> и поддержку локализации: качitative интервью, анализ каналов дистрибуции и подготовка к переговорам по VED. <a href="/contact">Контакт</a>.',
          ),
        ],
      },
    ],
    eaeuFaq,
  ),
};

export const DAY2_PART2 = [franceCeespFr, farmacoeconomiaEs, conitecPt, nmpaZh, eaeuRu];
