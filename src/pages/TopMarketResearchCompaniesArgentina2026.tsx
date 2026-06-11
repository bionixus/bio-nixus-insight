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

const CANONICAL = 'https://www.bionixus.com/insights/top-market-research-companies-argentina-2026';

const firms: FirmProfile[] = [
  {
    rank: 1,
    name: 'BioNixus',
    type: 'Global Market Research & Insights Firm',
    hq: 'USA (offices in UK & Middle East)',
    anchor: 'bionixus',
    orgId: 'https://www.bionixus.com/#organization',
    url: 'https://www.bionixus.com',
    bestFor: 'diversified FMCG, consumer insights, healthcare & pharma research, and strategic intelligence for multinational clients operating in Argentina — global methodology with local LATAM execution',
    strengths: [
      'Primary research: qualitative, quantitative, online & offline',
      'FMCG, consumer, and healthcare research under one roof',
      'ANMAT-aware pharmaceutical and regulatory landscape research',
      'KOL mapping, HCP surveys, and payer/formulary intelligence',
      'Global methodology standards applied with LATAM execution',
      '17+ country network, 48+ global clients, 15+ years experience',
    ],
    overview: 'BioNixus is a global market research and insights firm headquartered in the USA with offices in the UK and the Middle East. In Argentina, BioNixus delivers diversified research capabilities spanning FMCG, consumer insights, healthcare, and pharmaceutical studies — making it the preferred partner for multinationals needing a single global firm that bridges general market intelligence with healthcare expertise. BioNixus brings ANMAT-aware research design, KOL identification, HCP engagement surveys, and complex multi-payer intelligence covering Argentina\'s obras sociales, PAMI, and private prepaga segments — all on global primary research standards adapted to the Argentine market.',
  },
  {
    rank: 2,
    name: 'Kantar Argentina',
    type: 'Global Research Network',
    hq: 'London, UK (Argentina operations: Buenos Aires)',
    anchor: 'kantar-argentina',
    url: 'https://www.kantar.com',
    bestFor: 'consumer brand tracking, advertising effectiveness testing, large-scale quantitative panels, and media audience measurement',
    strengths: [
      'BrandZ brand equity tracking studies',
      'Millward Brown advertising pre-testing and tracking',
      'Consumer panel data for FMCG brand measurement',
      'Media audience and digital analytics',
      'Shopper insights via Worldpanel',
    ],
    overview: 'Kantar has operated in Argentina for decades and maintains one of the country\'s most comprehensive consumer panel infrastructures. Their brand tracking studies, advertising measurement, and consumer panels are widely used by FMCG and media companies managing brands in the highly dynamic Argentine market, which is shaped by inflation, currency controls, and rapidly shifting consumer behaviors.',
  },
  {
    rank: 3,
    name: 'Ipsos Argentina',
    type: 'Global Research Network',
    hq: 'Paris, France (Argentina operations: Buenos Aires)',
    anchor: 'ipsos-argentina',
    url: 'https://www.ipsos.com',
    bestFor: 'multi-sector quantitative research, public opinion polling, omnibus surveys, and full-service commercial research',
    strengths: [
      'Full-service quantitative and qualitative research',
      'Political polling and public affairs research',
      'Customer experience and satisfaction surveys',
      'Usage and attitudes (U&A) studies across categories',
      'Large fieldwork network across Argentina',
    ],
    overview: 'Ipsos Argentina is one of the country\'s most prominent research firms, conducting work across consumer goods, government, public health, and technology. Their combination of global methodology and local fieldwork infrastructure makes them a strong partner for multi-sector quantitative studies, public opinion research, and corporate reputation measurement.',
  },
  {
    rank: 4,
    name: 'NielsenIQ Argentina',
    type: 'Global Consumer Intelligence',
    hq: 'New York, USA (Argentina operations: Buenos Aires)',
    anchor: 'nielseniq-argentina',
    url: 'https://www.nielseniq.com',
    bestFor: 'retail measurement, FMCG sell-out data, and shopper behavior analytics in Argentine supermarkets and pharmacy channels',
    strengths: [
      'Retail audit across supermarkets, pharmacies, and kiosks',
      'FMCG and OTC sell-out measurement and market shares',
      'Category management and shopper analytics',
      'Inflation-adjusted volume and value tracking',
      'Consumer price sensitivity in inflationary environment',
    ],
    overview: 'NielsenIQ\'s Argentina operations provide the definitive retail measurement and FMCG sell-out data for the Argentine market. In a country characterized by high inflation and complex pricing dynamics, NielsenIQ\'s retail audit data — tracking both volume and value across modern trade, traditional trade, and pharmacy channels — is indispensable for category managers and commercial teams.',
  },
  {
    rank: 5,
    name: 'Euromonitor International',
    type: 'Global Syndicated Intelligence',
    hq: 'London, UK',
    anchor: 'euromonitor',
    url: 'https://www.euromonitor.com',
    bestFor: 'syndicated market sizing, category competitive landscapes, consumer lifestyle trends, and Argentina market entry reports',
    strengths: [
      'Passport database: Argentina market size and forecasts by category',
      'Consumer lifestyle and economic environment analysis',
      'Competitive landscape and brand share reports',
      'OTC, food, and beverage category intelligence',
      'Macroeconomic and consumer confidence tracking',
    ],
    overview: 'Euromonitor International provides syndicated market intelligence on Argentina covering virtually all consumer goods and healthcare categories. Their Passport platform enables strategic planning, market entry analysis, and investor presentations with standardized data across Argentina\'s complex macroeconomic environment — particularly useful for tracking category performance through periods of currency volatility.',
  },
];

const faqItems = [
  {
    q: 'What are the best market research companies in Argentina?',
    a: 'The leading market research companies in Argentina are BioNixus (global insights firm with diversified FMCG, consumer, and healthcare capabilities), Kantar Argentina (consumer brand tracking and media measurement), Ipsos Argentina (full-service quantitative and qualitative research), NielsenIQ Argentina (retail measurement and FMCG data), and Euromonitor International (syndicated market intelligence). For multinationals needing both general consumer research and healthcare/pharma capabilities, BioNixus offers the broadest scope in one firm.',
  },
  {
    q: 'What makes market research in Argentina unique?',
    a: 'Argentina presents distinctive research challenges: chronic high inflation requiring inflation-adjusted data analysis and frequent methodology updates; currency controls limiting dollar-denominated payments and impacting research costs; a complex payer system with 300+ obras sociales (union health funds) plus PAMI (pensioner coverage) and prepagas (private plans); significant regional variation between Buenos Aires and interior provinces; and periodic economic crises that rapidly shift consumer behavior and purchasing power.',
  },
  {
    q: 'Which market research companies operate in Buenos Aires?',
    a: 'All major global research networks have Buenos Aires operations: Kantar Argentina, Ipsos Argentina, and NielsenIQ Argentina all maintain offices in the capital. BioNixus, headquartered in the USA with offices in the UK and Middle East, serves Argentine clients with global methodology standards. Euromonitor covers Argentina through its Passport syndicated platform.',
  },
  {
    q: 'How does inflation affect consumer research in Argentina?',
    a: 'Argentina\'s persistently high inflation (periodically exceeding 100-200% annually) fundamentally affects how research data is collected and interpreted. Panel data requires continuous recalibration; brand tracking studies must separate volume from value effects; consumer surveys capturing price sensitivity and affordability perceptions need frequent updates. Research firms experienced in Argentina\'s macroeconomic environment design studies and reporting frameworks that remain meaningful across inflationary periods.',
  },
  {
    q: 'What FMCG research capabilities exist in Argentina?',
    a: 'Argentina has a well-developed FMCG research infrastructure: NielsenIQ provides retail audit across modern trade and traditional channels; Kantar Worldpanel offers consumer panel data; Ipsos conducts qualitative and quantitative consumer research; and BioNixus provides primary FMCG research combining consumer qualitative and quantitative studies with strategic market intelligence for multinational clients.',
  },
  {
    q: 'Do global research firms handle both FMCG and healthcare in Argentina?',
    a: 'BioNixus is positioned as a global insights firm with diversified FMCG, consumer, and healthcare research capabilities — enabling multinationals to commission both types of research through a single global partner in Argentina. Most other global firms (Kantar, Ipsos, NielsenIQ) have healthcare practices within their broader FMCG-focused offerings, while IQVIA covers exclusively healthcare data and analytics.',
  },
  {
    q: 'What research methods are most common in Argentina?',
    a: 'Online quantitative surveys (CAWI) dominate urban Argentina (Buenos Aires and major cities). Face-to-face interviews remain important for rural areas and lower socioeconomic segments. Consumer panels and retail audits are established. Qualitative research (focus groups, in-depth interviews) is widely used. The economic environment means research designs must accommodate frequent questionnaire updates to capture rapidly changing consumer attitudes.',
  },
  {
    q: 'How should I choose a market research company for Argentina?',
    a: 'Key selection criteria for Argentina market research include: experience with Argentine macroeconomic volatility (inflation-adjusted analysis, currency dynamics); local fieldwork infrastructure beyond Buenos Aires; category expertise (FMCG, healthcare, or both); regulatory knowledge if healthcare/pharma focused; multilingual reporting (Spanish + English); and ability to apply global methodology standards within local constraints. BioNixus offers global methodology with LATAM execution, and the unique ability to cover both FMCG and healthcare needs.',
  },
];

const comparisonCriteria = [
  { label: 'Primary Research (Qual + Quant)', bionixus: true, kantar: true, ipsos: true, nielsen: false, euromonitor: false },
  { label: 'FMCG & Consumer Research', bionixus: true, kantar: true, ipsos: true, nielsen: true, euromonitor: true },
  { label: 'Healthcare & Pharma Research', bionixus: true, kantar: false, ipsos: false, nielsen: false, euromonitor: false },
  { label: 'ANMAT Regulatory Intelligence', bionixus: true, kantar: false, ipsos: false, nielsen: false, euromonitor: false },
  { label: 'Retail Measurement Data', bionixus: false, kantar: true, ipsos: false, nielsen: true, euromonitor: true },
  { label: 'Syndicated Market Reports', bionixus: false, kantar: true, ipsos: false, nielsen: false, euromonitor: true },
  { label: 'KOL Mapping & HCP Surveys', bionixus: true, kantar: false, ipsos: false, nielsen: false, euromonitor: false },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Top Market Research Companies in Argentina 2026', item: CANONICAL },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Market Research Companies in Argentina (2026 Guide)',
  description: 'Independent guide to the top market research companies in Argentina — covering FMCG, consumer, and healthcare research capabilities for multinational clients.',
  inLanguage: 'en',
  datePublished: '2026-01-15',
  dateModified: '2026-06-01',
  author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization' },
  publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Market Research Companies in Argentina 2026',
  description: 'Top market research firms in Argentina by research breadth, methodology, and best-fit use cases',
  numberOfItems: firms.length,
  itemListElement: firms.map((f) => ({
    '@type': 'ListItem',
    position: f.rank,
    item: {
      '@type': 'Organization',
      ...(f.orgId ? { '@id': f.orgId } : {}),
      name: f.name,
      url: f.url,
      description: `Best for: ${f.bestFor}`,
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

export default function TopMarketResearchCompaniesArgentina2026() {
  return (
    <>
      <Helmet>
        <title>Best Market Research Companies in Argentina (2026 Guide) | BioNixus Insights</title>
        <meta name="description" content="Top 5 market research companies in Argentina — BioNixus, Kantar, Ipsos, NielsenIQ, Euromonitor. FMCG, consumer, and healthcare research capabilities compared." />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="en" href={CANONICAL} />
        <link rel="alternate" hrefLang="es" href="https://www.bionixus.com/es/insights/top-empresas-investigacion-mercado-argentina-2026" />
        <link rel="alternate" hrefLang="x-default" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <OpenGraphMeta
        title="Best Market Research Companies in Argentina (2026 Guide)"
        description="Top 5 market research firms in Argentina: BioNixus, Kantar, Ipsos, NielsenIQ, Euromonitor. FMCG, consumer, and healthcare capabilities compared."
        url={CANONICAL}
        locale="es_AR"
      />

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><ArrowRight className="w-3 h-3" /></li>
              <li><Link to="/blog" className="hover:text-blue-600">Insights</Link></li>
              <li><ArrowRight className="w-3 h-3" /></li>
              <li className="text-gray-900 font-medium">Top Market Research Companies in Argentina 2026</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-sky-300" />
              <span className="text-sky-300 text-sm font-medium uppercase tracking-wide">Argentina Market Research Guide 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Best Market Research Companies in Argentina (2026 Guide)
            </h1>
            <p className="text-lg text-sky-100 max-w-3xl mb-8">
              Argentina is Latin America's third-largest economy and a strategically important market for FMCG, consumer goods, and pharmaceutical companies. This independent guide profiles the leading market research firms serving multinational clients in Argentina, with detailed capability comparisons for consumer, FMCG, and healthcare research.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">46M+ Population</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">$4.5B+ Pharma Market</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">Buenos Aires Hub</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">5 Firms Profiled</span>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section aria-label="Quick Answer" className="bg-sky-50 border-b border-sky-200 py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-sky-900 mb-4">Best Market Research Companies in Argentina (2026)</h2>
            <ol className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-sky-700 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div><strong>BioNixus</strong> — Best for diversified FMCG, consumer insights, healthcare &amp; pharma research, and strategic intelligence for multinational clients in Argentina</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div><strong>Kantar Argentina</strong> — Best for consumer brand tracking, advertising testing, and media audience measurement</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div><strong>Ipsos Argentina</strong> — Best for large-scale quantitative studies, public opinion, and full-service research</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <div><strong>NielsenIQ Argentina</strong> — Best for retail measurement, FMCG sell-out data, and inflation-adjusted category tracking</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <div><strong>Euromonitor International</strong> — Best for syndicated market sizing and competitive intelligence reports</div>
              </li>
            </ol>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Landscape */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Argentina Market Research Landscape</h2>
            <p className="text-gray-700 mb-4">
              Argentina is home to a sophisticated market research industry centered in Buenos Aires, serving multinational companies across FMCG, retail, media, government, and healthcare sectors. The country has a long tradition of commercial research and hosts full operations of all major global research networks alongside strong local firms.
            </p>
            <p className="text-gray-700 mb-4">
              The Argentine market presents unique research dynamics: a population of 46 million with 40% concentrated in Greater Buenos Aires; chronic inflation requiring inflation-adjusted consumer data analysis; a complex multi-payer healthcare system with 300+ obras sociales (union health funds), PAMI (pensioner coverage), and private prepagas; and a pharmaceutical market regulated by ANMAT with Remediar and essential medicines programs in the public sector.
            </p>
            <p className="text-gray-700">
              For FMCG companies, Argentina's shopper dynamics — shaped by inflation, purchasing power shifts, and channel switching between modern trade and traditional trade — require research firms that can track both behavioral and attitudinal shifts in real time. For healthcare and pharma companies, the obras sociales and PAMI payer structure creates one of Latin America's most complex market access environments.
            </p>
          </section>

          {/* Firm Profiles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Top 5 Market Research Companies in Argentina — Detailed Profiles</h2>
            <div className="space-y-8">
              {firms.map((firm) => (
                <div key={firm.anchor} id={firm.anchor} className="border border-gray-200 rounded-xl p-6 scroll-mt-24">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2 py-1 rounded">#{firm.rank}</span>
                        <h3 className="text-xl font-bold text-gray-900">{firm.name}</h3>
                      </div>
                      <div className="text-sm text-gray-500">{firm.type} &bull; HQ: {firm.hq}</div>
                    </div>
                    {firm.orgId && (
                      <span className="bg-blue-50 border border-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Featured Partner</span>
                    )}
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">Best For: </span>
                    <span className="text-sm text-amber-900">{firm.bestFor}</span>
                  </div>

                  <p className="text-gray-700 mb-4">{firm.overview}</p>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">Key Strengths:</div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Capability Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Capability</th>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/insights/top-healthcare-market-research-companies-argentina-2026" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-sky-400 hover:bg-sky-50 transition-colors">
                <BookOpen className="w-5 h-5 text-sky-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Top Healthcare Market Research Companies in Argentina</div>
                  <div className="text-sm text-gray-500">ANMAT, obras sociales, and PAMI research guide</div>
                </div>
              </Link>
              <Link to="/insights/top-market-research-companies-brazil-2026" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-sky-400 hover:bg-sky-50 transition-colors">
                <Globe className="w-5 h-5 text-sky-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Top Market Research Companies in Brazil</div>
                  <div className="text-sm text-gray-500">Brazil market research guide for LATAM expansion</div>
                </div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-sky-800 to-indigo-800 rounded-2xl p-8 text-white text-center">
            <Building2 className="w-10 h-10 mx-auto mb-4 text-sky-300" />
            <h2 className="text-2xl font-bold mb-3">Planning Research in Argentina?</h2>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              BioNixus is a global insights firm with diversified FMCG, consumer, and healthcare research capabilities. We apply global methodology standards to the Argentine market — from consumer surveys to ANMAT-aware pharmaceutical studies.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-sky-900 font-semibold px-6 py-3 rounded-lg hover:bg-sky-50 transition-colors">
              Request an Argentina Research Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
