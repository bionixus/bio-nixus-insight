import type { JSX } from 'react';
import type { Language } from '@/lib/i18n';
import { MethodologyLongFormLayout, type MethodologyLongFormCopy } from './MethodologyLongFormLayout';

type Props = { lang: Language };

export const METHODOLOGY_ES_FAQ = [
  {
    question: '¿BioNixus usa la misma metodología para salud y consumo?',
    answer:
      'Sí — la columna de gobernanza es la misma: diseño centrado en la decisión, muestra verificada, protocolos de campo, validación en varias etapas, ética y un informe para quien actúa. Cambian los encuestados, los códigos y el grano de las tablas. Los briefs de salud reclutan médicos, pagadores y cuentas hospitalarias bajo BHBIA, EphMRA y farmacovigilancia. Los de consumo reclutan shoppers, compradores de categoría y cuentas de retail nombradas bajo ESOMAR y códigos locales.',
  },
  {
    question: '¿Cómo verifican las muestras de salud?',
    answer:
      'Los panelistas de salud pasan verificación de licencia contra registros oficiales, confirmación de especialidad y chequeo del lugar de práctica. Reclutamos de bases médicas verificadas, registros hospitalarios y listas de sociedades — no de pools abiertos en internet. Un refresco trimestral retira a médicos que se mudaron o se jubilaron.',
  },
  {
    question: '¿Cómo muestrean estudios de consumo y comercio tradicional?',
    answer:
      'Las muestras de consumo se construyen alrededor de las cuentas y canales donde el volumen se mueve de verdad — modern trade, farmacias y ultramarinos independientes, bakals y distribuidores nombrados — más cuotas de shopper y comprador cuando el brief necesita evidencia de cesta. Los screeners se revisan antes del campo. Mystery shops, visitas a cuentas e intercepts cuando un panel sindicado submuestrea el canal.',
  },
  {
    question: '¿Qué controles de calidad se aplican en campo?',
    answer:
      'Cada proyecto corre contra un protocolo de plazos de reclutamiento, honorarios conformes, ventanas de entrevista y escalado de cuotas. Las encuestas cuantitativas se monitorizan en tiempo real por duración, abandono y straight-lining. Las sesiones cualitativas se graban con consentimiento, se transcriben y se debriefan en 24 horas. Los estudios multi-mercado tienen stand-ups diarios.',
  },
  {
    question: '¿Cómo se trata el RGPD y la protección de datos local?',
    answer:
      'Los proyectos operan bajo RGPD, UK Data Protection Act, directrices ESOMAR y derecho local — incluido el PDPL saudí, la ley federal de datos de EAU y los requisitos CITRA de Kuwait. El trabajo de salud sigue también BHBIA y EphMRA. El consentimiento se obtiene antes de recoger; los datos se seudonimizan; la información identificable no se comparte con el cliente sin consentimiento extra de follow-up.',
  },
  {
    question: '¿Qué incluye un informe metodológico de BioNixus?',
    answer:
      'Cada entregable abre con hallazgos clave y acciones recomendadas, luego los datos de apoyo. Los packs cuantitativos incluyen tablas de muestra, ponderación, intervalos de confianza y el cuestionario. Los cualitativos, análisis temático con verbatim anonimizado. Los trackers pueden incluir dashboards. Los dossiers de salud pueden incluir anexos HTA; los de consumo, cortes de marca y trade para el Head of Marketing.',
  },
] as const;

export const METHODOLOGY_ES_COPY: MethodologyLongFormCopy = {
  faqTitle: 'Preguntas frecuentes',
  faq: METHODOLOGY_ES_FAQ,
  theatre: {
    eyebrow: 'Una misma columna',
    h2: 'Salud y consumo comparten el método, no al encuestado',
    leadBefore:
      'BioNixus es un instituto de investigación primaria. Los mismos seis controles — diseño, muestra, campo, validación, ética e informe — corren en un brief de',
    healthcareLink: 'investigación de mercado sanitario',
    leadMid: 'y en un brief de consumo o',
    industryLink: 'industria',
    leadAfter:
      '. Lo que cambia es quién está en la muestra, qué código gobierna el honorario y con qué finura hay que cortar las tablas.',
    caption: 'Cómo se aplica la metodología BioNixus en salud frente a consumo',
    controlCol: 'Control',
    healthcareCol: 'Salud',
    consumerCol: 'Consumo y otras industrias',
    rows: [
      {
        cut: 'Con quién hablamos',
        healthcare: 'Médicos, pagadores, KOL, cuentas hospitalarias y de farmacia',
        consumer: 'Shoppers, compradores de categoría, retailers, distribuidores, comercio tradicional',
      },
      {
        cut: 'Cómo los encontramos',
        healthcare: 'Registros de licencia, redes hospitalarias, sociedades de especialidad',
        consumer: 'Cuentas nombradas, listas de trade, intercepts, mystery shops, recontacto con consentimiento',
      },
      {
        cut: 'Códigos que vinculan el trabajo',
        healthcare: 'BHBIA, EphMRA, farmacovigilancia, honorarios a valor de mercado justo',
        consumer: 'ESOMAR, códigos locales de investigación de consumo, incentivos auditables',
      },
      {
        cut: 'Lo que el pack debe superar',
        healthcare: 'Diligencia médica, de acceso y HTA',
        consumer: 'Escrutinio de marca, trade y director comercial',
      },
    ],
  },
  design: {
    h2: 'Principios de diseño de investigación',
    lead:
      'Cada programa empieza por convertir una pregunta de negocio en algo que un estudio puede responder de verdad. Nos sentamos con quienes usarán la evidencia — marca, medical y market access en salud; marca, categoría y trade en consumo — y fijamos objetivos lo bastante concretos para decidir y lo bastante flexibles para corregir el rumbo. Un estudio alrededor de la pregunta equivocada es rápido, barato e inútil.',
    quantitative: {
      title: 'Cuantitativo',
      body:
        'Cuestionarios estructurados, escalas validadas y conjoint o MaxDiff cuando importan los trade-offs — elección de tratamiento del médico o de pack del shopper. Los instrumentos pasan un pretest cognitivo con al menos cinco encuestados.',
      link: 'Investigación cuantitativa',
    },
    qualitative: {
      title: 'Cualitativo',
      body:
        'Guías semiestructuradas con lógica de árbol de decisión. Salud: entrevistas a médicos, boards de pagadores, etnografía hospitalaria. Consumo: depths con shoppers, entrevistas a retailers y distribuidores, observación en tienda.',
      link: 'Investigación cualitativa',
    },
    mixed: {
      title: 'Método mixto',
      body:
        'Cuando el brief necesita grano estadístico y profundidad explicativa — un estudio de lanzamiento que une una encuesta a 200 médicos con depths a especialistas, o un estudio de categoría que une encuesta de shopper con visitas a cuentas que el feed sindicado no muestra.',
    },
  },
  sampling: {
    h2: 'Marcos de muestreo y gobernanza del tamaño muestral',
    lead:
      'La calidad de la muestra determina la credibilidad de cualquier insight. Las muestras de salud salen de paneles profesionales propios en 17+ mercados EMEA y CCG, más partners ESOMAR y BHBIA. Las de consumo e industria se construyen alrededor de las cuentas y canales del brief — no de un pool abierto en internet.',
    healthcareKicker: 'Salud',
    panelTitle: 'Origen del panel',
    panel: [
      {
        title: 'Verificación de licencia.',
        body:
          'Reclutamiento desde bases regulatorias — DHA Dubái, DOH Abu Dhabi, SFDA Arabia Saudí, MOHAP EAU y MOH Kuwait — para que cada panelista tenga licencia, especialidad y lugar de práctica auditables antes del primer contacto.',
      },
      {
        title: 'Redes hospitalarias.',
        body:
          'Derivación especializada a través de coordinadores en SEHA, Mediclinic, Aster, NMC, Cleveland Clinic Abu Dhabi y Saudi German Hospital.',
      },
      {
        title: 'Sociedades profesionales.',
        body: 'Las listas de sociedades se cruzan con registros de licencia para que la afiliación nunca quede sola.',
      },
      {
        title: 'Validación en tres capas.',
        body: 'Licencia, especialidad y lugar de práctica. Un refresco trimestral retira a médicos que se mudaron o se jubilaron.',
      },
    ],
    consumerKicker: 'Consumo e industria',
    channelTitle: 'Origen por cuenta y canal',
    namedTitle: 'Cuentas nombradas.',
    namedBefore:
      'Retailers, distribuidores, farmacias independientes, ultramarinos y bakals se muestrean donde se mueve el volumen — el grano que los feeds sindicados',
    nielsen: 'Nielsen',
    namedMid: 'y',
    gfk: 'tipo GfK',
    namedMid2: 'suelen perder. Véase',
    accountLink: 'investigación a nivel de cuenta',
    namedAfter: '.',
    shopper: {
      title: 'Cuotas de shopper y comprador.',
      body:
        'Los compradores de categoría y shoppers de hogar se reclutan para el SKU, canal y ciudad del brief — no una media nacional que oculta la cuenta.',
    },
    mystery: {
      title: 'Mystery shop e intercept.',
      body: 'Cuando la pregunta es qué ocurre en el lineal, en el mostrador o en el comercio tradicional.',
    },
    recontact: {
      title: 'Recontacto con consentimiento.',
      body:
        'Los encuestados verificados de olas anteriores que aceptaron un nuevo contacto siguen siendo la vía más rápida cuando manda el plazo.',
    },
    closing:
      'Los tamaños de muestra se calculan contra objetivos de potencia estadística. En la mayoría de los programas cuantitativos apuntamos a al menos ±5 % de margen de error al 95 % de confianza en cada subgrupo reportable. Si la población es pequeña — especialistas en enfermedades raras, miembros de formulario nacional o una lista corta de key accounts — aplicamos reclutamiento tipo censo y ajustamos el análisis.',
  },
  field: {
    h2: 'Gobernanza de campo y controles de calidad',
    p1:
      'El campo es donde la metodología encuentra disciplina operativa. Cada proyecto — salud o consumo — corre contra un protocolo de plazos de reclutamiento, honorarios (conformes al código del sector), ventanas de entrevista y escalado de cuotas.',
    p2:
      'Las encuestas cuantitativas incluyen dashboards en tiempo real de tasa de cierre, tiempo mediano, abandono y straight-lining. Las que terminan en menos de un tercio del tiempo mediano esperado se marcan y se excluyen si falla la calidad.',
    p3:
      'El cualitativo se graba con consentimiento y se transcribe. Los moderadores entregan notas de debrief en 24 horas. Los estudios multi-mercado tienen un gestor de proyecto central y stand-ups diarios con equipos locales.',
    p4Before: 'El campo de',
    clinicalLink: 'apoyo a ensayos clínicos',
    p4After:
      'sigue la misma columna, con controles extra de identificación de centros y perfil de investigadores. Las olas de mystery shop y visita a cuentas siguen la misma columna, con logs de selección de tienda y disponibilidad de SKU.',
  },
  validation: {
    h2: 'Validación de datos y aseguramiento de calidad con IA',
    p1:
      'Los datos brutos pasan un pipeline de validación en varias etapas. La primera es automática: los algoritmos marcan IDs duplicados, combinaciones imposibles y patrones de respuesta anómalos.',
    p2:
      'La segunda la dirige un analista. Un investigador sénior revisa los registros marcados contra los datos de reclutamiento y, si hace falta, contacta al encuestado. Los registros que no se validan se retiran con un motivo documentado.',
    p3:
      'El aseguramiento de calidad con IA añade una tercera capa. Modelos de lenguaje evalúan abiertas. Las transcripciones cualitativas pasan por modelado temático. Los temas generados por máquina los valida el equipo de análisis — la IA acelera la detección; cada conclusión interpretativa la revisa un humano.',
    p4Before:
      'Los clientes reciben conjuntos de datos en los que pueden confiar para decisiones internas y, en briefs de salud, para presentaciones regulatorias o HTA. Cómo la evidencia alimenta',
    accessLink: 'el acceso al mercado y la estrategia HTA',
    p4After: '.',
  },
  ethics: {
    h2: 'Ética, RGPD y códigos sectoriales',
    p1:
      'Cada proyecto BioNixus opera bajo RGPD, UK Data Protection Act, directrices ESOMAR y derecho local de protección de datos — incluido PDPL saudí, la ley federal de EAU y CITRA en Kuwait. Ese suelo aplica a salud y a consumo.',
    p2:
      'Los programas de salud añaden las Legal & Ethical Guidelines de BHBIA y el código EphMRA. Los estudios que tocan datos de pacientes — incluso de forma indirecta vía registros reportados por médicos — obtienen revisión ética cuando se exige. El reporte de eventos adversos se briefea a cada moderador, con escalado de 24 horas a la farmacovigilancia del cliente.',
    p3:
      'Los programas de consumo e industria se quedan dentro de ESOMAR y del código local aplicable. Los incentivos pasan por canales auditables. Los honorarios de salud se alinean además con directrices de valor de mercado justo.',
    p4:
      'El consentimiento se obtiene antes de recoger, en el idioma preferido del encuestado. Los datos personales se seudonimizan y se almacenan en servidores cifrados en la UE.',
  },
  reporting: {
    h2: 'Estándares de reporting y estructura de entregables',
    p1:
      'Un insight no tiene valor hasta que llega a quien actúa. Los informes abren con tres a cinco hallazgos clave y las acciones recomendadas — antes de los datos de apoyo. Eso vale para un Head of Marketing de una marca de consumo y para un lead de acceso en un lanzamiento terapéutico.',
    p2:
      'Los informes cuantitativos incluyen anexos de metodología — composición de la muestra, ponderación, intervalos de confianza y el cuestionario. Los cualitativos presentan análisis temático con verbatim anonimizado.',
    p3Before:
      'Los entregables estándar incluyen dashboards para trackers, decks ejecutivos y anexos técnicos. Los packs de salud se pueden cortar para equipos HTA. Los de consumo, para decisiones de marca, trade y SKU. Para',
    intelLink: 'inteligencia competitiva',
    p3After: 'entregamos informes de monitorización con alertas en ambos escenarios.',
    p4Before: 'Todos los informes pasan una revisión interna en dos etapas — analista para precisión, director sénior para coherencia estratégica. ',
    kolLink: 'El mapeo de KOL y stakeholders',
    p4After: 'sigue el mismo protocolo, con visualización extra de redes de influencia.',
  },
};

export function MethodologyLongFormEs({ lang }: Props): JSX.Element {
  return <MethodologyLongFormLayout lang={lang} copy={METHODOLOGY_ES_COPY} />;
}
