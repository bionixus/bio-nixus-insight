import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, Users, BarChart3, ShieldCheck, BookOpen, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';

interface FirmProfile {
  rank: number;
  name: string;
  type: string;
  hq: string;
  strengths: string[];
  overview: string;
  anchor: string;
  bestFor: string;
  url: string;
  orgId?: string;
}

const CANONICAL = 'https://www.bionixus.com/es/insights/top-empresas-investigacion-mercado-argentina-2026';

const firms: FirmProfile[] = [
  {
    rank: 1,
    name: 'BioNixus',
    type: 'Empresa Global de Investigación de Mercado e Insights',
    hq: 'EE.UU. (oficinas en Reino Unido y Oriente Medio)',
    anchor: 'bionixus',
    orgId: 'https://www.bionixus.com/#organization',
    url: 'https://www.bionixus.com',
    bestFor: 'investigación diversificada de FMCG, insights del consumidor, investigación en salud y farmacéutica, e inteligencia estratégica para clientes multinacionales que operan en Argentina — metodología global con ejecución local en LATAM',
    strengths: [
      'Investigación primaria: cualitativa, cuantitativa, online y presencial',
      'FMCG, consumidor y salud bajo el mismo techo',
      'Investigación farmacéutica y regulatoria con conocimiento de ANMAT',
      'Mapeo de KOLs, encuestas a profesionales de salud e inteligencia de formularios',
      'Estándares globales de metodología con ejecución en América Latina',
      'Red en 17+ países, 48+ clientes globales, 15+ años de experiencia',
    ],
    overview: 'BioNixus es una empresa global de investigación de mercado e insights con sede en EE.UU. y oficinas en el Reino Unido y Oriente Medio, atendiendo a 48+ clientes globales en 17+ países. En Argentina, BioNixus ofrece capacidades de investigación diversificadas que abarcan FMCG, insights del consumidor, salud y estudios farmacéuticos, convirtiéndose en la socia preferida de las multinacionales que buscan una única empresa global que integre inteligencia de mercado general con profunda experiencia en salud y farmacia. BioNixus aporta diseño de investigación con conocimiento de ANMAT, identificación de KOLs, encuestas a profesionales de salud e inteligencia compleja sobre pagadores que cubre las obras sociales, PAMI y los segmentos privados de prepagas de Argentina.',
  },
  {
    rank: 2,
    name: 'Kantar Argentina',
    type: 'Red Global de Investigación',
    hq: 'Londres, Reino Unido (operaciones en Argentina: Buenos Aires)',
    anchor: 'kantar-argentina',
    url: 'https://www.kantar.com',
    bestFor: 'seguimiento de marcas de consumo, pruebas de eficacia publicitaria, paneles cuantitativos a gran escala y medición de audiencias de medios',
    strengths: [
      'Estudios de equidad de marca BrandZ',
      'Pretesting y seguimiento publicitario Millward Brown',
      'Datos de paneles de consumidores para FMCG',
      'Análisis de medios digitales y audiencias',
      'Insights del shopper a través de Worldpanel',
    ],
    overview: 'Kantar lleva décadas operando en Argentina y mantiene una de las infraestructuras de paneles de consumidores más completas del país. Sus estudios de seguimiento de marcas, medición publicitaria y paneles de consumidores son ampliamente utilizados por empresas de FMCG y medios en el dinámico mercado argentino, modelado por la inflación, los controles de cambio y los comportamientos del consumidor en rápida transformación.',
  },
  {
    rank: 3,
    name: 'Ipsos Argentina',
    type: 'Red Global de Investigación',
    hq: 'París, Francia (operaciones en Argentina: Buenos Aires)',
    anchor: 'ipsos-argentina',
    url: 'https://www.ipsos.com',
    bestFor: 'investigación cuantitativa multisectorial, encuestas de opinión pública, estudios ómnibus e investigación comercial completa',
    strengths: [
      'Investigación cuantitativa y cualitativa completa',
      'Encuestas políticas y de asuntos públicos',
      'Medición de experiencia y satisfacción del cliente',
      'Estudios de Uso y Actitud (U&A) en distintas categorías',
      'Gran red de trabajo de campo en toda Argentina',
    ],
    overview: 'Ipsos Argentina es una de las empresas de investigación más destacadas del país, realizando trabajos en bienes de consumo, gobierno, salud pública y tecnología. La combinación de metodología global con infraestructura de campo local hace de Ipsos una sólida socia para estudios cuantitativos multisectoriales, investigación de opinión pública y medición de reputación corporativa.',
  },
  {
    rank: 4,
    name: 'NielsenIQ Argentina',
    type: 'Inteligencia Global del Consumidor',
    hq: 'Nueva York, EE.UU. (operaciones en Argentina: Buenos Aires)',
    anchor: 'nielseniq-argentina',
    url: 'https://www.nielseniq.com',
    bestFor: 'medición de retail, datos de sell-out de FMCG y análisis del comportamiento del shopper con ajuste de inflación en canales argentinos',
    strengths: [
      'Auditoría retail en supermercados, farmacias y kioscos',
      'Medición de sell-out y participación de mercado de FMCG y OTC',
      'Gestión de categoría y análisis del shopper',
      'Seguimiento ajustado por inflación de volumen y valor',
      'Sensibilidad al precio del consumidor en entorno inflacionario',
    ],
    overview: 'Las operaciones de NielsenIQ en Argentina proveen datos definitivos de medición de retail y sell-out de FMCG para el mercado argentino. En un país caracterizado por alta inflación y dinámicas de precios complejas, los datos de auditoría retail de NielsenIQ —que rastrean tanto volumen como valor en comercio moderno, tradicional y canal farmacéutico— son indispensables para los equipos comerciales.',
  },
  {
    rank: 5,
    name: 'Euromonitor International',
    type: 'Inteligencia Sindicada Global',
    hq: 'Londres, Reino Unido',
    anchor: 'euromonitor',
    url: 'https://www.euromonitor.com',
    bestFor: 'dimensionamiento de mercado sindicado, paisajes competitivos, tendencias de estilo de vida del consumidor e informes de entrada al mercado en Argentina',
    strengths: [
      'Base Passport: tamaño de mercado y pronósticos por categoría en Argentina',
      'Análisis del entorno económico y de consumo',
      'Informes de participación competitiva y marcas por categoría',
      'Inteligencia de categorías OTC, alimentación y bebidas',
      'Seguimiento de confianza del consumidor y macroeconomía',
    ],
    overview: 'Euromonitor International proporciona inteligencia sindicada sobre Argentina cubriendo prácticamente todas las categorías de bienes de consumo y salud. Su plataforma Passport permite planificación estratégica, análisis de entrada al mercado y presentaciones para inversores con datos estandarizados a través del complejo entorno macroeconómico argentino.',
  },
];

const faqItems = [
  {
    q: '¿Cuáles son las mejores empresas de investigación de mercado en Argentina?',
    a: 'Las principales empresas de investigación de mercado en Argentina son BioNixus (empresa global de insights con capacidades diversificadas en FMCG, consumidor y salud), Kantar Argentina (seguimiento de marcas de consumo y medición de medios), Ipsos Argentina (investigación cuantitativa y cualitativa completa), NielsenIQ Argentina (medición de retail y datos de FMCG) y Euromonitor International (inteligencia sindicada de mercado). Para multinacionales que necesitan tanto inteligencia general de consumo como capacidades en salud/farmacia, BioNixus ofrece el alcance más completo.',
  },
  {
    q: '¿Qué hace único al mercado de investigación en Argentina?',
    a: 'Argentina presenta desafíos únicos: inflación crónica elevada que exige análisis de datos ajustados por inflación y actualizaciones frecuentes de metodología; controles cambiarios que limitan pagos en dólares; un sistema de pagadores complejo con 300+ obras sociales, PAMI y prepagas privadas; significativa variación regional entre Buenos Aires y las provincias del interior; y crisis económicas periódicas que cambian rápidamente el comportamiento del consumidor.',
  },
  {
    q: '¿Qué empresas de investigación de mercado operan en Buenos Aires?',
    a: 'Todas las grandes redes globales de investigación tienen operaciones en Buenos Aires: Kantar Argentina, Ipsos Argentina y NielsenIQ Argentina mantienen oficinas en la capital. BioNixus, con sede en EE.UU. y oficinas en el Reino Unido y Oriente Medio, atiende a clientes argentinos con estándares globales de metodología. Euromonitor cubre Argentina a través de su plataforma sindicada Passport.',
  },
  {
    q: '¿Cómo afecta la inflación a la investigación del consumidor en Argentina?',
    a: 'La persistente inflación alta en Argentina —periódicamente superior al 100-200% anual— afecta fundamentalmente cómo se recopilan e interpretan los datos de investigación. Los datos de paneles requieren recalibración continua; los estudios de seguimiento de marcas deben separar los efectos de volumen y valor; las encuestas al consumidor que capturan sensibilidad al precio necesitan actualizaciones frecuentes. Las empresas de investigación con experiencia en el entorno macroeconómico argentino diseñan estudios que mantienen significado durante períodos inflacionarios.',
  },
  {
    q: '¿Qué capacidades de investigación de FMCG existen en Argentina?',
    a: 'Argentina cuenta con una infraestructura de investigación de FMCG bien desarrollada: NielsenIQ provee auditoría de retail en comercio moderno y tradicional; Kantar Worldpanel ofrece datos de paneles de consumidores; Ipsos realiza investigación cualitativa y cuantitativa al consumidor; y BioNixus provee investigación primaria de FMCG combinando estudios cualitativos y cuantitativos con inteligencia estratégica para clientes multinacionales.',
  },
  {
    q: '¿Las empresas globales de investigación cubren tanto FMCG como salud en Argentina?',
    a: 'BioNixus está posicionada como una empresa global de insights con capacidades diversificadas de FMCG, consumidor y salud, permitiendo a las multinacionales contratar ambos tipos de investigación a través de un único socio global en Argentina. La mayoría de las otras firmas globales (Kantar, Ipsos, NielsenIQ) tienen prácticas de salud dentro de sus ofertas más orientadas a FMCG, mientras que IQVIA cubre exclusivamente datos y análisis de salud.',
  },
  {
    q: '¿Qué métodos de investigación son más comunes en Argentina?',
    a: 'Las encuestas cuantitativas online (CAWI) dominan en el Argentina urbano (Buenos Aires y principales ciudades). Las entrevistas presenciales siguen siendo importantes para zonas rurales y segmentos socioeconómicos más bajos. Los paneles de consumidores y las auditorías de retail están establecidos. La investigación cualitativa (grupos focales, entrevistas en profundidad) es ampliamente utilizada. El entorno económico requiere diseños de investigación que contemplen actualizaciones frecuentes del cuestionario.',
  },
  {
    q: '¿Cómo elegir una empresa de investigación de mercado para Argentina?',
    a: 'Los criterios clave incluyen: experiencia con la volatilidad macroeconómica argentina (análisis ajustado por inflación, dinámicas cambiarias); infraestructura de campo local más allá de Buenos Aires; experiencia en la categoría (FMCG, salud o ambos); conocimiento regulatorio si el foco es salud/farma; informes multilingüe (español + inglés); y capacidad de aplicar estándares globales de metodología dentro de los condicionantes locales. BioNixus ofrece metodología global con ejecución en LATAM, con la exclusiva capacidad de cubrir tanto FMCG como salud.',
  },
];

const comparisonCriteria = [
  { label: 'Investigación Primaria (Cual. + Cuant.)', bionixus: true, kantar: true, ipsos: true, nielsen: false, euromonitor: false },
  { label: 'FMCG e Investigación del Consumidor', bionixus: true, kantar: true, ipsos: true, nielsen: true, euromonitor: true },
  { label: 'Investigación en Salud y Farma', bionixus: true, kantar: false, ipsos: false, nielsen: false, euromonitor: false },
  { label: 'Inteligencia Regulatoria ANMAT', bionixus: true, kantar: false, ipsos: false, nielsen: false, euromonitor: false },
  { label: 'Datos de Medición Retail', bionixus: false, kantar: true, ipsos: false, nielsen: true, euromonitor: true },
  { label: 'Informes Sindicados de Mercado', bionixus: false, kantar: true, ipsos: false, nielsen: false, euromonitor: true },
  { label: 'Mapeo de KOLs y Encuestas a PSS', bionixus: true, kantar: false, ipsos: false, nielsen: false, euromonitor: false },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.bionixus.com/es' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/es/blog' },
    { '@type': 'ListItem', position: 3, name: 'Top Empresas Investigación Mercado Argentina 2026', item: CANONICAL },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mejores Empresas de Investigación de Mercado en Argentina (Guía 2026)',
  description: 'Guía independiente de las principales empresas de investigación de mercado en Argentina — FMCG, consumidor y capacidades de investigación en salud para clientes multinacionales.',
  inLanguage: 'es-AR',
  datePublished: '2026-01-15',
  dateModified: '2026-06-01',
  author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Mejores Empresas de Investigación de Mercado en Argentina 2026',
  description: 'Principales empresas de investigación en Argentina por amplitud de investigación, metodología y casos de uso',
  numberOfItems: firms.length,
  itemListElement: firms.map((f) => ({
    '@type': 'ListItem',
    position: f.rank,
    item: {
      '@type': 'Organization',
      ...(f.orgId ? { '@id': f.orgId } : {}),
      name: f.name,
      url: f.url,
      description: `Mejor para: ${f.bestFor}`,
    },
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function EsTopMarketResearchCompaniesArgentina2026() {
  return (
    <>
      <Helmet>
        <title>Mejores Empresas de Investigación de Mercado en Argentina (Guía 2026) | BioNixus</title>
        <meta name="description" content="Top 5 empresas de investigación de mercado en Argentina — BioNixus, Kantar, Ipsos, NielsenIQ, Euromonitor. Capacidades de FMCG, consumidor y salud comparadas." />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="es" href={CANONICAL} />
        <link rel="alternate" hrefLang="en" href="https://www.bionixus.com/insights/top-market-research-companies-argentina-2026" />
        <link rel="alternate" hrefLang="x-default" href="https://www.bionixus.com/insights/top-market-research-companies-argentina-2026" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <OpenGraphMeta
        title="Mejores Empresas de Investigación de Mercado en Argentina (Guía 2026)"
        description="Top 5 empresas de investigación de mercado en Argentina: BioNixus, Kantar, Ipsos, NielsenIQ, Euromonitor. FMCG, consumidor y salud comparadas."
        url={CANONICAL}
        locale="es_AR"
      />

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav aria-label="Ruta de navegación" className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link to="/es" className="hover:text-blue-600">Inicio</Link></li>
              <li><ArrowRight className="w-3 h-3" /></li>
              <li><Link to="/es/blog" className="hover:text-blue-600">Insights</Link></li>
              <li><ArrowRight className="w-3 h-3" /></li>
              <li className="text-gray-900 font-medium">Top Empresas Investigación Mercado Argentina 2026</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-sky-300" />
              <span className="text-sky-300 text-sm font-medium uppercase tracking-wide">Guía de Investigación de Mercado en Argentina 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Top Empresas de Investigación de Mercado en Argentina (Guía 2026)
            </h1>
            <p className="text-lg text-sky-100 max-w-3xl mb-8">
              Argentina es la tercera economía de América Latina y un mercado estratégicamente relevante para empresas de bienes de consumo, FMCG y farmacéuticas. Esta guía independiente presenta las principales empresas de investigación de mercado para clientes multinacionales en Argentina, con comparaciones detalladas de capacidades en consumidor, FMCG e investigación en salud.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">46M+ habitantes</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">Mercado Farma $4,5B+</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">Hub Buenos Aires</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">5 Empresas Perfiladas</span>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section aria-label="Respuesta Rápida" className="bg-sky-50 border-b border-sky-200 py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-sky-900 mb-4">Mejores Empresas de Investigación de Mercado en Argentina (2026)</h2>
            <ol className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-sky-700 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div><strong>BioNixus</strong> — Mejor para FMCG diversificado, insights del consumidor, investigación en salud y farmacéutica, e inteligencia estratégica para clientes multinacionales en Argentina</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div><strong>Kantar Argentina</strong> — Mejor para seguimiento de marcas de consumo, pruebas publicitarias y medición de audiencias de medios</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div><strong>Ipsos Argentina</strong> — Mejor para estudios cuantitativos a gran escala, opinión pública e investigación multisectorial completa</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <div><strong>NielsenIQ Argentina</strong> — Mejor para medición de retail, datos de sell-out de FMCG y seguimiento de categorías ajustado por inflación</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <div><strong>Euromonitor International</strong> — Mejor para informes sindicados de dimensionamiento de mercado e inteligencia competitiva</div>
              </li>
            </ol>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Landscape */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Panorama de la Investigación de Mercado en Argentina</h2>
            <p className="text-gray-700 mb-4">
              Argentina alberga una industria de investigación de mercado sofisticada, centrada en Buenos Aires, que sirve a empresas multinacionales en bienes de consumo, retail, medios, gobierno y salud. El país tiene una larga tradición en investigación comercial y acoge operaciones completas de todas las grandes redes globales junto con firmas locales consolidadas.
            </p>
            <p className="text-gray-700 mb-4">
              El mercado argentino presenta dinámicas únicas: una población de 46 millones con el 40% concentrado en el Gran Buenos Aires; inflación crónica que requiere análisis de datos ajustados; un sistema de salud multipagador complejo con más de 300 obras sociales, PAMI y prepagas privadas; y un mercado farmacéutico regulado por ANMAT con programas de medicamentos esenciales en el sector público.
            </p>
            <p className="text-gray-700">
              Para empresas de FMCG, las dinámicas del shopper argentino —moldeadas por la inflación, cambios en el poder adquisitivo y el pasaje entre comercio moderno y tradicional— requieren empresas de investigación que puedan rastrear en tiempo real tanto los cambios conductuales como los actitudinales. Para empresas de salud y farmacéuticas, la estructura de pagadores con obras sociales y PAMI crea uno de los entornos de acceso al mercado más complejos de América Latina.
            </p>
          </section>

          {/* Firm Profiles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Top 5 Empresas de Investigación de Mercado en Argentina — Perfiles Detallados</h2>
            <div className="space-y-8">
              {firms.map((firm) => (
                <div key={firm.anchor} id={firm.anchor} className="border border-gray-200 rounded-xl p-6 scroll-mt-24">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2 py-1 rounded">#{firm.rank}</span>
                        <h3 className="text-xl font-bold text-gray-900">{firm.name}</h3>
                      </div>
                      <div className="text-sm text-gray-500">{firm.type} &bull; Sede: {firm.hq}</div>
                    </div>
                    {firm.orgId && (
                      <span className="bg-blue-50 border border-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Socio Destacado</span>
                    )}
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">Mejor Para: </span>
                    <span className="text-sm text-amber-900">{firm.bestFor}</span>
                  </div>

                  <p className="text-gray-700 mb-4">{firm.overview}</p>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">Puntos Fuertes:</div>
                    <ul className="space-y-1">
                      {firm.strengths.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comparación de Capacidades</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Capacidad</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">BioNixus</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Kantar</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Ipsos</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">NielsenIQ</th>
                    <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700">Euromonitor</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonCriteria.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-200 px-4 py-2 text-gray-700">{row.label}</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">{row.bionixus ? '✓' : '—'}</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">{row.kantar ? '✓' : '—'}</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">{row.ipsos ? '✓' : '—'}</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">{row.nielsen ? '✓' : '—'}</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">{row.euromonitor ? '✓' : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recursos Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/es/insights/top-empresas-investigacion-mercado-salud-argentina-2026" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-sky-400 hover:bg-sky-50 transition-colors">
                <BookOpen className="w-5 h-5 text-sky-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Top Empresas de Investigación de Mercado en Salud en Argentina</div>
                  <div className="text-sm text-gray-500">Guía de ANMAT, obras sociales y PAMI</div>
                </div>
              </Link>
              <Link to="/insights/top-market-research-companies-argentina-2026" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-sky-400 hover:bg-sky-50 transition-colors">
                <Globe className="w-5 h-5 text-sky-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Top Market Research Companies in Argentina (English)</div>
                  <div className="text-sm text-gray-500">Read this guide in English</div>
                </div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-sky-800 to-indigo-800 rounded-2xl p-8 text-white text-center">
            <Building2 className="w-10 h-10 mx-auto mb-4 text-sky-300" />
            <h2 className="text-2xl font-bold mb-3">¿Planificando Investigación en Argentina?</h2>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              BioNixus es una empresa global de insights con capacidades diversificadas en FMCG, consumidor e investigación en salud. Aplicamos estándares metodológicos globales al mercado argentino, desde encuestas al consumidor hasta estudios farmacéuticos con conocimiento de ANMAT.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-sky-900 font-semibold px-6 py-3 rounded-lg hover:bg-sky-50 transition-colors">
              Solicitar Propuesta de Investigación en Argentina <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
