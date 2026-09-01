import {
  BarChart3,
  Users,
  Landmark,
  Search,
  Microscope,
  Map,
  Phone,
  Monitor,
  UserCheck,
  Eye,
  TrendingUp,
  MessageCircle,
  MousePointerClick,
  Layers,
  LineChart,
  Stethoscope,
  Building2,
  ShoppingBag,
  Cpu,
  Globe2,
} from 'lucide-react';
import type {
  CommercialOffering,
  HealthcareService,
  MethodologyService,
} from './servicesHubContent';

export const PT_HERO_METRICS = [
  { value: 'Brasil+LATAM', label: 'Mercados centrais com profundidade local' },
  { value: '6', label: 'Módulos farmacêuticos' },
  { value: 'LGPD', label: 'Campo em conformidade' },
  { value: '9+', label: 'Métodos de coleta' },
] as const;

export const PT_HEALTHCARE_SERVICES: HealthcareService[] = [
  {
    slug: 'quantitative-research',
    title: 'Pesquisa quantitativa e estudos com médicos',
    summary:
      'Estudos estatisticamente robustos com médicos, pagadores e gestores hospitalares no Brasil e na América Latina — online, por telefone (CATI) e presencial (CAPI), com amostras definidas, cotas e testes de significância que sustentam decisões junto à ANVISA, à CONITEC e às operadoras de saúde suplementar.',
    icon: BarChart3,
    tags: ['Brasil', 'LATAM', 'Pagadores'],
  },
  {
    slug: 'qualitative-research',
    title: 'Pesquisa qualitativa e visão de especialistas',
    summary:
      'Entrevistas em profundidade, grupos focais e advisory boards com KOL, médicos prescritores e decisores de hospitais e operadoras — desenhados para explicar a adoção, a realidade assistencial e o acesso no Brasil e na região, não apenas medi-los.',
    icon: Users,
    tags: ['KOL', 'Advisory boards', 'Linhas de cuidado'],
  },
  {
    slug: 'market-access',
    title: 'Acesso ao mercado, HTA e estratégia de reembolso',
    summary:
      'Programas de precificação, engajamento de pagadores e teste de value story baseados em evidência para o Brasil (ANVISA, CONITEC, SUS e saúde suplementar) e para os demais mercados de LATAM, Europa e EUA — alinhados à lógica de HTA e reembolso de cada país.',
    icon: Landmark,
    tags: ['HTA', 'CONITEC', 'Reembolso'],
  },
  {
    slug: 'competitive-intelligence',
    title: 'Inteligência competitiva',
    summary:
      'Monitoramento de concorrentes, avaliação de pipeline e de cenário competitivo, prontidão para lançamento e estudos de impacto de biossimilares e genéricos — traduzidos em uma leitura clara de onde sua marca pode realmente ganhar espaço.',
    icon: Search,
    tags: ['Pipeline', 'Lançamento', 'Biossimilares'],
  },
  {
    slug: 'clinical-trial-support',
    title: 'Suporte a estudos clínicos',
    summary:
      'Identificação de centros e perfil de investigadores, viabilidade de recrutamento de pacientes, feedback de protocolo com médicos assistentes e planejamento de RWE no Brasil, na América Latina e nos mercados adjacentes, dentro dos padrões ICH-GCP.',
    icon: Microscope,
    tags: ['Viabilidade', 'RWE', 'Investigadores'],
  },
  {
    slug: 'kol-stakeholder-mapping',
    title: 'Mapeamento de KOL e stakeholders',
    summary:
      'Identificação de líderes de opinião, comissões e vozes de compra que definem decisões em hospitais universitários, sociedades médicas brasileiras e processos de incorporação — com jornada do paciente e análise de linha de cuidado onde o contexto clínico importa.',
    icon: Map,
    tags: ['Stakeholders', 'Jornada do paciente', 'Influência'],
  },
];

export const PT_METHODOLOGY_SERVICES: MethodologyService[] = [
  {
    id: 'cati',
    title: 'CATI — entrevistas por telefone',
    abbr: 'CATI',
    summary:
      'Entrevistas telefônicas assistidas por computador para médicos, pagadores e decisores B2B difíceis de alcançar — com supervisão ao vivo, gestão de cotas e equipes de campo em português, espanhol e inglês no Brasil e na América Latina.',
    icon: Phone,
    industries: 'Farmacêutico · B2B · Serviços financeiros',
    href: '/services/quantitative-research',
  },
  {
    id: 'cawi',
    title: 'CAWI — pesquisas online',
    abbr: 'CAWI',
    summary:
      'Pesquisas web em escala para trackers com médicos, saúde de marca e painéis de consumo — design mobile-first, triagem antifraude e harmonização entre países da região em um único desenho amostral.',
    icon: Monitor,
    industries: 'Saúde · Todos os setores',
    href: '/services/quantitative-research',
  },
  {
    id: 'capi',
    title: 'CAPI — campo presencial',
    abbr: 'CAPI',
    summary:
      'Entrevistas pessoais assistidas por computador para auditorias hospitalares, auditorias de farmácia e varejo e conversas B2B in loco — com dispositivos que operam offline, verificação por GPS e QC de supervisor no Brasil e em LATAM.',
    icon: UserCheck,
    industries: 'Saúde · Varejo · Bens de consumo',
    href: '/services/quantitative-research',
  },
  {
    id: 'focus-groups',
    title: 'Grupos focais e minigrupos',
    summary:
      'Discussões em grupo moderadas — presenciais, virtuais ou híbridas — para teste de conceito, refinamento de mensagem e exploração de categoria, com tradução simultânea em português, espanhol e inglês.',
    icon: MessageCircle,
    industries: 'Farmacêutico · B2C · Turismo',
    href: '/services/qualitative-research',
  },
  {
    id: 'mystery-shopping',
    title: 'Cliente oculto e programas de auditoria',
    summary:
      'Programas estruturados de cliente oculto e auditoria de serviço para agências bancárias, hotelaria, varejo farmacêutico e atendimento em saúde — avaliados segundo os seus padrões de serviço, com evidência em foto e áudio quando permitido.',
    icon: Eye,
    industries: 'Bancos · Varejo · Hotelaria',
    href: '/contact',
  },
  {
    id: 'price-elasticity',
    title: 'Elasticidade de preço e conjoint',
    summary:
      'Van Westendorp, Gabor-Granger e experimentos de escolha discreta (DCE) para modelar sensibilidade a preço, trade-offs de apresentação e disposição a pagar — em lançamentos farmacêuticos, bens de consumo e produtos financeiros.',
    icon: TrendingUp,
    industries: 'Farmacêutico · Consumo · Seguros',
    href: '/contact',
  },
  {
    id: 'online-behaviour',
    title: 'Monitoramento de comportamento online',
    summary:
      'Análise de jornada digital, estudos de click-stream e módulos de medição passiva — combinados a dados de survey para conectar preferência declarada e comportamento observado em e-commerce, bancos e portais de saúde.',
    icon: MousePointerClick,
    industries: 'B2C · E-commerce · Health-tech',
    href: '/contact',
  },
  {
    id: 'brand-tracking',
    title: 'Tracking de marca e conhecimento',
    summary:
      'Trackers contínuos ou de pulso para conhecimento assistido e espontâneo, consideração, NPS e share-of-voice competitivo — em campo por CAWI ou CATI, com dashboards acionáveis para o time de marketing.',
    icon: LineChart,
    industries: 'Consumo · Telecom · OTC',
    href: '/services/competitive-intelligence',
  },
  {
    id: 'segmentation',
    title: 'Segmentação e MaxDiff',
    summary:
      'Segmentação por necessidades, análise de classes latentes e priorização por MaxDiff para ordenar atributos, mensagens e funcionalidades — alimentando decisões de targeting e portfólio em categorias B2B e B2C.',
    icon: Layers,
    industries: 'B2B · Tecnologia · Consumo',
    href: '/services/quantitative-research',
  },
];

export const PT_COMMERCIAL_OFFERINGS: CommercialOffering[] = [
  {
    to: '/services/cross-industry',
    title: 'Pesquisa de mercado multissetorial',
    summary:
      'Página dedicada da Track B para clientes fora da saúde — pesquisa quantitativa e qualitativa multipaís na América Latina, Europa e Oriente Médio para bens de consumo, serviços financeiros, tecnologia, indústria e setor público.',
    icon: Globe2,
    examples: 'Consumo · bancos · tecnologia · indústria · setor público',
  },
  {
    to: '/pharma-healthcare-industries',
    title: 'Farmacêutico, biotecnologia e dispositivos médicos',
    summary:
      'A disciplina que deu origem à BioNixus — lançamento de medicamentos, acesso ao mercado, dispositivos médicos, diagnósticos, biotecnologia e consumer health com o rigor amostral e de conformidade que categorias reguladas exigem.',
    icon: Stethoscope,
    examples: 'Oncologia · doenças raras · dispositivos · OTC · vacinas',
  },
  {
    to: '/b2b-industries',
    title: 'Pesquisa B2B e corporativa',
    summary:
      'Mapeamento do comitê de compra, dimensionamento de mercado e inteligência competitiva para tecnologia, energia, imobiliário, setor público, educação e manufatura industrial — com execução sólida no Brasil e em LATAM.',
    icon: Building2,
    examples: 'Tecnologia · imobiliário · energia · manufatura',
  },
  {
    to: '/b2c-industries',
    title: 'Pesquisa B2C e de consumo',
    summary:
      'Tracking de marca, insight de shopper, segmentação e estudos de demanda para bens de consumo, varejo, serviços financeiros, telecom, automotivo, hotelaria e turismo — onde o comportamento de massa define a decisão.',
    icon: ShoppingBag,
    examples: 'Bancos · varejo · turismo · consumo · telecom',
  },
  {
    to: '/bionixus-industries',
    title: 'IA, TI e empresas em crescimento',
    summary:
      'Análise win-loss, pesquisa de buyer persona e validação de go-to-market para software B2B, cibersegurança, IA em saúde e serviços de TI — combinando profundidade no comprador corporativo com a velocidade que times de crescimento exigem.',
    icon: Cpu,
    examples: 'SaaS · startups de IA · serviços de TI · health-tech',
  },
];

export const PT_HUB_LINKS = [
  { to: '/healthcare-market-research', label: 'Hub de pesquisa de mercado em saúde' },
  { to: '/services/cross-industry', label: 'Pesquisa de mercado multissetorial (Track B)' },
  { to: '/bionixus-industries', label: 'A BioNixus nos diferentes setores' },
  { to: '/market-research-by-industry', label: 'Pesquisa de mercado por setor (índice global)' },
  { to: '/market-research', label: 'Visão geral dos serviços de pesquisa de mercado' },
  { to: '/methodology', label: 'Metodologia de pesquisa e conformidade' },
  { to: '/case-studies', label: 'Casos de clientes' },
] as const;

export const PT_SERVICE_FAQ = [
  {
    question: 'A BioNixus atende apenas o Brasil ou também outros mercados da América Latina?',
    answer:
      'Nosso foco está no Brasil, com extensão para México, Argentina, Colômbia, Chile e demais mercados de LATAM, além de programas nos EUA, na Europa e no Oriente Médio. A mesma metodologia conduzida por profissionais sêniores se aplica a categorias B2B e B2C — o escopo por setor está no hub de setores.',
  },
  {
    question: 'Qual método de coleta é mais adequado — CATI, CAWI ou CAPI?',
    answer:
      'O CAWI atende painéis online de grande escala e trackers. O CATI alcança médicos, pagadores e compradores sêniores que não respondem online. O CAPI é indispensável para auditorias hospitalares, visitas a farmácias e entrevistas presenciais. Recomendamos o método — ou um desenho mixed-mode — no escopo, conforme público, geografia e cronograma.',
  },
  {
    question: 'Quais serviços fazem sentido para um lançamento farmacêutico no Brasil?',
    answer:
      'A combinação típica reúne estudos quantitativos com médicos, profundidade qualitativa com KOL e suporte de acesso ao mercado com leitura de ANVISA, CONITEC, SUS e saúde suplementar. Dimensionamos os módulos conforme a sua fase — viabilidade, posicionamento, precificação ou HTA — e sequenciamos o campo de acordo com o seu calendário de governança.',
  },
  {
    question: 'É possível contratar um único módulo ou um programa integrado?',
    answer:
      'Ambos. Cada card de saúde leva a uma página de escopo dedicada. Você pode contratar uma onda isolada de CATI, um programa de grupos focais, uma auditoria de cliente oculto, um estudo de elasticidade de preço ou um programa multipaís em que os módulos compartilham lógica amostral e modelos de reporte.',
  },
  {
    question: 'Quais geografias esses serviços cobrem?',
    answer:
      'A BioNixus executa em 48 países nas Américas, Europa, Oriente Médio, Norte da África e mercados prioritários da Ásia-Pacífico — com escritórios e redes de campo nos Estados Unidos, Reino Unido, Egito, Arábia Saudita, Emirados Árabes Unidos, Kuwait e Brasil.',
  },
  {
    question: 'Em quanto tempo recebemos uma proposta?',
    answer:
      'Envie objetivo, público, setor e cronograma pelo formulário de contato. Normalmente retornamos um desenho metodológico sob medida em até um dia útil.',
  },
] as const;

export const PT_RECOVERY_LINK_LABELS: Record<string, string> = {
  '/blog/healthcare-market-research-europe-2026': 'Pesquisa de mercado em saúde na Europa (guia 2026)',
  '/blog/pharmaceutical-market-research-uk-2026': 'Pesquisa de mercado farmacêutico no Reino Unido (guia 2026)',
  '/blog/quantitative-market-research-and-market-access': 'Pesquisa quantitativa e acesso ao mercado',
  '/blog/hospital-market-research': 'Pesquisa de mercado hospitalar para a indústria farmacêutica',
  '/healthcare-market-research/germany': 'Pesquisa de mercado em saúde na Alemanha',
  '/healthcare-market-research/france': 'Pesquisa de mercado em saúde na França',
  '/healthcare-market-research/uk': 'Pesquisa de mercado em saúde no Reino Unido',
};

export const PT_SERVICES_HUB_COPY = {
  seo: {
    title: 'Pesquisa de Mercado Farmacêutico no Brasil e LATAM | BioNixus',
    description:
      'Pesquisa de mercado farmacêutico e de saúde com foco no Brasil e na América Latina — estudos quantitativos e qualitativos com médicos, HTA e acesso ao mercado, mapeamento de KOL e campo em conformidade com a LGPD.',
    canonical: 'https://www.bionixus.com/pt/services',
  },
  breadcrumb: { home: 'Início', services: 'Serviços' },
  hero: {
    eyebrow: 'Brasil e América Latina',
    h1: 'Pesquisa de mercado farmacêutico e de saúde para o Brasil e a América Latina',
    subtitle:
      'A BioNixus conduz programas liderados por profissionais sêniores no Brasil e em LATAM — de estudos com médicos e estratégia de HTA a campo CATI, CAWI e CAPI, grupos focais e elasticidade de preço. Uma metodologia, um time sênior, dimensionados para a decisão de lançamento ou de acesso que você precisa tomar.',
    ctaProposal: 'Solicitar proposta',
    ctaMethodology: 'Metodologia de pesquisa',
  },
  intro: {
    h2: 'Três portfólios de pesquisa conectados',
    columns: [
      {
        h3: 'Farmacêutico e saúde',
        body: 'Categorias reguladas que exigem amostras verificadas de médicos e pagadores, síntese orientada a HTA e evidência pronta para lançamento no Brasil, em LATAM, nos EUA e na Europa.',
      },
      {
        h3: 'Metodologias e campo',
        body: 'CATI, CAWI, CAPI, grupos focais, cliente oculto, elasticidade de preço, tracking de marca e módulos de comportamento digital — combináveis em um único programa com QC e reporte compartilhados.',
      },
      {
        h3: 'Comercial e multissetorial',
        body: 'Programas fora da indústria farmacêutica para compradores corporativos, decisores institucionais e mercados de consumo — disponíveis no',
      },
    ],
  },
  healthcare: {
    h2: 'Módulos farmacêuticos e de saúde',
    intro:
      'Métodos quantitativos e qualitativos, acesso ao mercado, inteligência competitiva, suporte a estudos clínicos e mapeamento de stakeholders — combináveis em um programa único para o Brasil e a região.',
    viewScope: 'Ver escopo',
  },
  methodology: {
    eyebrow: 'Campo e analytics',
    h2: 'Metodologias para farmacêutico e demais setores',
    intro:
      'O mesmo time sênior conduz campo CATI, CAWI e CAPI para painéis de médicos e programas B2B — além de cliente oculto, elasticidade de preço, grupos focais e monitoramento online quando a sua categoria exige.',
    learnMore: 'Saiba mais',
  },
  commercial: {
    h2: 'Pesquisa comercial e multissetorial',
    intro:
      'Programas fora da indústria farmacêutica para compradores corporativos, decisores institucionais e mercados de consumo — com foco em Brasil, LATAM, Europa e Oriente Médio.',
    explore: 'Explorar segmento',
  },
  links: {
    h2: 'Hubs de pesquisa e setores relacionados',
    intro:
      'Comece por um hub de saúde, por um segmento setorial ou por um índice global — conforme a sua categoria e geografia.',
    moreGuides: 'Mais guias de pesquisa',
    linksCount: 'links',
  },
  faq: { h2: 'Perguntas frequentes' },
  jsonLd: {
    collectionName: 'Pesquisa de Mercado Farmacêutico no Brasil e na América Latina',
    collectionDescription:
      'Pesquisa de mercado farmacêutico e de saúde com foco no Brasil e em LATAM — métodos quantitativos e qualitativos, HTA e acesso ao mercado, e campo em conformidade com a LGPD e o GDPR.',
  },
} as const;
