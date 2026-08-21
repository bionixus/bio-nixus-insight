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

export const ES_HERO_METRICS = [
  { value: 'EU5+UK', label: 'Mercados núcleo con profundidad por país' },
  { value: '6', label: 'Módulos farmacéuticos' },
  { value: 'RGPD', label: 'Trabajo de campo conforme' },
  { value: '9+', label: 'Modos de recogida' },
] as const;

export const ES_HEALTHCARE_SERVICES: HealthcareService[] = [
  {
    slug: 'quantitative-research',
    title: 'Investigación cuantitativa y encuestas a médicos',
    summary:
      'Encuestas estadísticamente robustas a médicos, pagadores y decisores hospitalarios en España, EU5 y Reino Unido — online, telefónicas (CATI) y presenciales (CAPI), con muestras dimensionadas, cuotas y pruebas de significación para decisiones vinculadas a la AEMPS, al Ministerio de Sanidad y a las comisiones autonómicas de farmacia.',
    icon: BarChart3,
    tags: ['España', 'EU5', 'Pagadores'],
  },
  {
    slug: 'qualitative-research',
    title: 'Investigación cualitativa y visión experta',
    summary:
      'Entrevistas en profundidad, focus groups y advisory boards con KOL, médicos prescriptores y decisores hospitalarios — diseñados para explicar la adopción, la realidad asistencial y las condiciones de acceso en España y Europa, no solo para medirlas.',
    icon: Users,
    tags: ['KOL', 'Advisory boards', 'Rutas asistenciales'],
  },
  {
    slug: 'market-access',
    title: 'Acceso al mercado, HTA y estrategia de financiación',
    summary:
      'Programas de precio, interlocución con pagadores y construcción de la propuesta de valor basados en evidencia para España (AEMPS, Ministerio de Sanidad, comisiones autonómicas), Alemania (G-BA, IQWiG), Francia (HAS) y Reino Unido (NICE) — alineados con la lógica nacional de evaluación HTA y de reembolso.',
    icon: Landmark,
    tags: ['HTA', 'AEMPS', 'NICE'],
  },
  {
    slug: 'competitive-intelligence',
    title: 'Inteligencia competitiva',
    summary:
      'Análisis de pipeline y del panorama competitivo, revisiones de preparación para el lanzamiento y escenarios de biosimilares y genéricos — como base sólida para las decisiones de cartera y de lanzamiento en Europa.',
    icon: Search,
    tags: ['Pipeline', 'Lanzamiento', 'Biosimilares'],
  },
  {
    slug: 'clinical-trial-support',
    title: 'Apoyo a ensayos clínicos',
    summary:
      'Identificación de centros e investigadores, factibilidad de reclutamiento, feedback de protocolo con médicos prescriptores y planificación de RWE en España, EU5 y mercados europeos y latinoamericanos adyacentes.',
    icon: Microscope,
    tags: ['Factibilidad', 'RWE', 'Investigadores'],
  },
  {
    slug: 'kol-stakeholder-mapping',
    title: 'Mapeo de KOL y grupos de interés',
    summary:
      'Identificación de líderes de opinión, comités y voces de compras en hospitales universitarios españoles, sociedades científicas europeas y procesos nacionales de HTA — incluye recorrido del paciente y análisis de rutas asistenciales.',
    icon: Map,
    tags: ['Grupos de interés', 'Recorrido del paciente', 'Influencia'],
  },
];

export const ES_METHODOLOGY_SERVICES: MethodologyService[] = [
  {
    id: 'cati',
    title: 'CATI — entrevista telefónica',
    abbr: 'CATI',
    summary:
      'Entrevistas telefónicas asistidas por ordenador para llegar a médicos, pagadores y decisores B2B difíciles de contactar — con supervisión en directo, gestión de cuotas y moderación en español e inglés en España, EU5 y Latinoamérica.',
    icon: Phone,
    industries: 'Farmacéutico · B2B · Servicios financieros',
    href: '/services/quantitative-research',
  },
  {
    id: 'cawi',
    title: 'CAWI — encuestas online',
    abbr: 'CAWI',
    summary:
      'Encuestas web escalables para trackers de médicos, estudios de marca y paneles — diseño mobile-first, control de fraude y armonización multipaís en Europa y Latinoamérica.',
    icon: Monitor,
    industries: 'Salud · Todos los sectores',
    href: '/services/quantitative-research',
  },
  {
    id: 'capi',
    title: 'CAPI — trabajo de campo presencial',
    abbr: 'CAPI',
    summary:
      'Entrevistas presenciales para auditorías hospitalarias, auditorías de farmacia y retail y conversaciones B2B in situ — con dispositivos operativos sin conexión y control de calidad por supervisor en España y Europa.',
    icon: UserCheck,
    industries: 'Salud · Retail · Gran consumo',
    href: '/services/quantitative-research',
  },
  {
    id: 'focus-groups',
    title: 'Focus groups y minigrupos',
    summary:
      'Discusiones de grupo moderadas — presenciales, virtuales o híbridas — para test de concepto y afinado de mensajes, con traducción simultánea en español, inglés y portugués.',
    icon: MessageCircle,
    industries: 'Farmacéutico · B2C · Turismo',
    href: '/services/qualitative-research',
  },
  {
    id: 'mystery-shopping',
    title: 'Mystery shopping y programas de auditoría',
    summary:
      'Auditorías de servicio estructuradas para oficinas bancarias, hostelería, farmacias y atención presencial en centros sanitarios — evaluadas frente a sus propios estándares de servicio.',
    icon: Eye,
    industries: 'Banca · Retail · Hostelería',
    href: '/contact',
  },
  {
    id: 'price-elasticity',
    title: 'Elasticidad de precio y conjoint',
    summary:
      'Modelos Van Westendorp, Gabor-Granger y de elección discreta para medir la sensibilidad al precio y la disposición a pagar — en lanzamientos farmacéuticos, gran consumo y productos aseguradores en Europa.',
    icon: TrendingUp,
    industries: 'Farmacéutico · Gran consumo · Seguros',
    href: '/contact',
  },
  {
    id: 'online-behaviour',
    title: 'Seguimiento del comportamiento online',
    summary:
      'Análisis de recorridos digitales y estudios de clickstream — combinados con datos declarados para e-commerce, banca y portales de salud.',
    icon: MousePointerClick,
    industries: 'B2C · E-commerce · Health-tech',
    href: '/contact',
  },
  {
    id: 'brand-tracking',
    title: 'Tracking de marca y notoriedad',
    summary:
      'Trackers continuos o de pulso para notoriedad, consideración, NPS y share of voice — en CAWI o CATI, con cuadros de mando accionables por los equipos de marketing.',
    icon: LineChart,
    industries: 'Gran consumo · Telecomunicaciones · OTC',
    href: '/services/competitive-intelligence',
  },
  {
    id: 'segmentation',
    title: 'Segmentación y MaxDiff',
    summary:
      'Segmentación por necesidades, análisis de clases latentes y priorización MaxDiff para decisiones de cartera en B2B y B2C.',
    icon: Layers,
    industries: 'B2B · Tecnología · Consumo',
    href: '/services/quantitative-research',
  },
];

export const ES_COMMERCIAL_OFFERINGS: CommercialOffering[] = [
  {
    to: '/services/cross-industry',
    title: 'Investigación de mercado multisectorial',
    summary:
      'Página dedicada del itinerario Track B para clientes ajenos al sector salud — investigación cuantitativa y cualitativa multipaís en Europa y MENA para gran consumo, servicios financieros, tecnología, industria y sector público.',
    icon: Globe2,
    examples: 'Gran consumo · banca · tecnología · industria · sector público',
  },
  {
    to: '/pharma-healthcare-industries',
    title: 'Farmacéutico, biotecnología y tecnología médica',
    summary:
      'Nuestro núcleo — lanzamiento de fármacos, acceso al mercado, diagnóstico, biotecnología y salud de consumo con la disciplina de muestreo y cumplimiento que exigen las categorías reguladas en España y Europa.',
    icon: Stethoscope,
    examples: 'Oncología · enfermedades raras · dispositivos médicos · OTC · vacunas',
  },
  {
    to: '/b2b-industries',
    title: 'Investigación B2B y corporativa',
    summary:
      'Mapeo de comités de compra, dimensionamiento de mercado e inteligencia competitiva para tecnología, energía, inmobiliario, sector público e industria — con ejecución sólida en España y en la UE.',
    icon: Building2,
    examples: 'Tecnología · inmobiliario · energía · industria',
  },
  {
    to: '/b2c-industries',
    title: 'Investigación B2C y de consumo',
    summary:
      'Tracking de marca, recorrido de compra, segmentación y estudios de demanda para gran consumo, retail, servicios financieros, telecomunicaciones y automoción en los mercados europeos.',
    icon: ShoppingBag,
    examples: 'Banca · retail · turismo · gran consumo · telecomunicaciones',
  },
  {
    to: '/bionixus-industries',
    title: 'IA, TI y empresas en crecimiento',
    summary:
      'Análisis win-loss, investigación de buyer personas y validación go-to-market para software B2B, ciberseguridad, IA sanitaria y servicios de TI.',
    icon: Cpu,
    examples: 'SaaS · startups de IA · servicios TI · health-tech',
  },
];

export const ES_HUB_LINKS = [
  { to: '/healthcare-market-research/spain', label: 'Investigación de mercado sanitario España' },
  { to: '/healthcare-market-research', label: 'Hub de investigación de mercado sanitario Europa' },
  { to: '/services/cross-industry', label: 'Investigación de mercado multisectorial (Track B)' },
  { to: '/blog/pharmaceutical-market-research-uk-2026', label: 'Investigación de mercado farmacéutico Reino Unido (2026)' },
  { to: '/blog/healthcare-market-research-europe-2026', label: 'Investigación de mercado sanitario Europa (2026)' },
  { to: '/methodology', label: 'Metodología y cumplimiento' },
  { to: '/case-studies', label: 'Casos de estudio' },
] as const;

export const ES_SERVICE_FAQ = [
  {
    question: '¿BioNixus cubre otros mercados europeos además de España?',
    answer:
      'Sí. El foco es España, EU5 y Reino Unido — con Portugal, Italia, los países nórdicos y los programas paneuropeos como extensión natural, además de Latinoamérica cuando la estrategia lo requiere. La misma metodología se aplica a las categorías B2B y B2C; el detalle está en el hub sectorial.',
  },
  {
    question: '¿Qué modo de campo encaja mejor: CATI, CAWI o CAPI?',
    answer:
      'CAWI encaja con grandes paneles online y trackers. CATI llega a los médicos y pagadores difíciles de contactar por vía digital. CAPI es imprescindible para auditorías hospitalarias y entrevistas in situ. Recomendamos el modo adecuado — o un diseño mixto — según el público objetivo, el mercado y el calendario.',
  },
  {
    question: '¿Qué servicios encajan en un lanzamiento en España?',
    answer:
      'Lo habitual es combinar encuestas cuantitativas a médicos, profundidad cualitativa con KOL y un bloque de acceso al mercado orientado a la AEMPS, al Ministerio de Sanidad y a las comisiones autonómicas. Los módulos se ajustan a su fase — posicionamiento, precio o expediente de HTA — y al calendario de gobernanza en España y Europa.',
  },
  {
    question: '¿Se puede contratar un módulo aislado o un programa europeo integrado?',
    answer:
      'Ambos. Cada tarjeta de servicio enlaza con una página de alcance dedicada. Puede contratar una ola CATI, un programa de focus groups, un estudio de elasticidad de precio o un programa multipaís con la misma lógica de muestreo y el mismo reporting.',
  },
  {
    question: '¿Cuál es su cobertura en España y Europa?',
    answer:
      'Ejecutamos trabajo de campo en España, EU5, Reino Unido y otros mercados europeos, dentro de una capacidad que cubre 38 países — con oficinas y redes de campo en Estados Unidos, Reino Unido, Egipto, Arabia Saudí, Emiratos Árabes Unidos, Kuwait y Brasil. Los programas globales siguen siendo posibles cuando su estrategia va más allá de Europa.',
  },
  {
    question: '¿En cuánto tiempo recibimos una propuesta?',
    answer:
      'Envíe su objetivo, público, sector y calendario a través del formulario de contacto. Normalmente devolvemos una propuesta metodológica a medida en un día laborable.',
  },
] as const;

export const ES_RECOVERY_LINK_LABELS: Record<string, string> = {
  '/blog/healthcare-market-research-europe-2026': 'Investigación de mercado sanitario en Europa (guía 2026)',
  '/blog/pharmaceutical-market-research-uk-2026': 'Investigación de mercado farmacéutico en Reino Unido (guía 2026)',
  '/blog/quantitative-market-research-and-market-access': 'Investigación cuantitativa y acceso al mercado',
  '/blog/hospital-market-research': 'Investigación de mercado hospitalario para farma',
  '/healthcare-market-research/germany': 'Investigación de mercado sanitario en Alemania',
  '/healthcare-market-research/france': 'Investigación de mercado sanitario en Francia',
  '/healthcare-market-research/uk': 'Investigación de mercado sanitario en Reino Unido',
};

export const ES_SERVICES_HUB_COPY = {
  seo: {
    title: 'Investigación de mercado farmacéutico en España | BioNixus',
    description:
      'Investigación de mercado farmacéutico y sanitario en España, EU5 y Reino Unido: encuestas a médicos, HTA y acceso al mercado, mapeo de KOL y trabajo de campo conforme al RGPD.',
    canonical: 'https://www.bionixus.com/es/services',
  },
  breadcrumb: { home: 'Inicio', services: 'Servicios' },
  hero: {
    eyebrow: 'España y Europa',
    h1: 'Investigación de mercado farmacéutico y sanitario para España y Europa',
    subtitle:
      'BioNixus ejecuta programas dirigidos por consultores senior en España, EU5 y Reino Unido — desde encuestas a médicos y estrategia de HTA hasta CATI, CAWI, CAPI, focus groups y elasticidad de precio. Una metodología y un equipo senior, ajustados a la decisión de lanzamiento o de acceso que tenga delante.',
    ctaProposal: 'Solicitar propuesta',
    ctaMethodology: 'Metodología de investigación',
  },
  intro: {
    h2: 'Tres carteras de investigación conectadas',
    columns: [
      {
        h3: 'Farmacéutico y sanitario',
        body: 'Categorías reguladas con muestras verificadas de profesionales sanitarios y pagadores, síntesis orientada a HTA y evidencia lista para el lanzamiento en España, EU5, Reino Unido y mercados europeos adyacentes.',
      },
      {
        h3: 'Metodologías y trabajo de campo',
        body: 'CATI, CAWI, CAPI, focus groups, mystery shopping, elasticidad de precio, tracking de marca y comportamiento digital — combinables en un solo programa con control de calidad y reporting compartidos.',
      },
      {
        h3: 'Comercial y multisectorial',
        body: 'Programas ajenos a la industria farmacéutica para compradores corporativos, decisores institucionales y mercados de consumo. Punto de entrada:',
      },
    ],
  },
  healthcare: {
    h2: 'Módulos farmacéuticos y sanitarios',
    intro:
      'Métodos cuantitativos y cualitativos, acceso al mercado, inteligencia competitiva, apoyo a ensayos clínicos y mapeo de grupos de interés — combinables en un único programa europeo.',
    viewScope: 'Ver alcance',
  },
  methodology: {
    eyebrow: 'Campo y analítica',
    h2: 'Métodos para farma y otros sectores',
    intro:
      'El mismo equipo senior ejecuta el campo CATI, CAWI y CAPI para paneles de médicos y programas B2B — además de mystery shopping, elasticidad de precio, focus groups y seguimiento del comportamiento online cuando su categoría lo exige.',
    learnMore: 'Saber más',
  },
  commercial: {
    h2: 'Investigación comercial y multisectorial',
    intro:
      'Programas ajenos a la industria farmacéutica para compradores corporativos, decisores institucionales y mercados de consumo — con foco en España, EU5 y Reino Unido.',
    explore: 'Explorar segmento',
  },
  links: {
    h2: 'Hubs de investigación y sectores relacionados',
    intro:
      'Empiece por el hub sanitario, por un segmento sectorial o por un índice de países — según su categoría y su geografía.',
    moreGuides: 'Más guías de investigación',
    linksCount: 'enlaces',
  },
  faq: { h2: 'Preguntas frecuentes' },
  jsonLd: {
    collectionName: 'Investigación de mercado farmacéutico España y Europa',
    collectionDescription:
      'Investigación de mercado farmacéutico y sanitario centrada en España y Europa — métodos cuantitativos y cualitativos, HTA y acceso al mercado, y trabajo de campo conforme al RGPD.',
  },
} as const;
