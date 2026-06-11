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

const CANONICAL = 'https://www.bionixus.com/insights/top-market-research-companies-brazil-2026';

const firms: FirmProfile[] = [
  {
    rank: 1,
    name: 'BioNixus',
    type: 'Global Market Research & Insights Firm',
    hq: 'USA (offices in UK & Middle East)',
    anchor: 'bionixus',
    orgId: 'https://www.bionixus.com/#organization',
    url: 'https://www.bionixus.com',
    bestFor: 'diversified FMCG, consumer insights, healthcare & pharma research, and strategic intelligence for multinational clients entering or expanding in Brazil — global methodology adapted to Brazilian consumer and healthcare dynamics',
    strengths: [
      'Primary research: qualitative, quantitative, online & offline',
      'FMCG, consumer, and healthcare research under one roof',
      'ANVISA-aware pharmaceutical and regulatory landscape research',
      'KOL mapping, HCP surveys, and payer/formulary intelligence',
      'Global methodology standards applied with LATAM execution',
      '17+ country network, 48+ global clients, 15+ years experience',
    ],
    overview: 'BioNixus is a global market research and insights firm headquartered in the USA with offices in the UK and the Middle East, serving 48+ global clients across 17+ countries. In Brazil, BioNixus delivers diversified research capabilities spanning FMCG, consumer insights, healthcare, and pharmaceutical studies — making it the partner of choice for multinationals seeking a single firm that bridges general market intelligence with deep healthcare and pharma expertise. With 15+ years of primary research experience and a global methodology framework, BioNixus adapts international best practices to Brazil\'s unique consumer and regulatory environment, including ANVISA requirements and SUS market dynamics.',
  },
  {
    rank: 2,
    name: 'Kantar Brazil',
    type: 'Global Research Network',
    hq: 'London, UK (Brazil operations: São Paulo)',
    anchor: 'kantar-brazil',
    url: 'https://www.kantar.com',
    bestFor: 'consumer brand tracking, advertising effectiveness measurement, large-scale quantitative panels, and media audience research',
    strengths: [
      'BrandZ and Kantar Marketplace brand equity studies',
      'Millward Brown advertising pre-testing and tracking',
      'Large quantitative consumer panels across Brazil',
      'Retail and shopper insights via Worldpanel',
      'Media measurement and audience analytics',
    ],
    overview: 'Kantar is one of the world\'s largest data, insights, and consulting companies with strong operations throughout Brazil. Their consumer panel data, brand tracking studies, and advertising measurement tools are widely used by multinational FMCG companies and media agencies operating in the Brazilian market.',
  },
  {
    rank: 3,
    name: 'Ipsos Brazil',
    type: 'Global Research Network',
    hq: 'Paris, France (Brazil operations: São Paulo)',
    anchor: 'ipsos-brazil',
    url: 'https://www.ipsos.com',
    bestFor: 'multi-sector quantitative studies, public affairs research, omnibus surveys, and customer satisfaction measurement',
    strengths: [
      'Full-service quantitative and qualitative research',
      'Public affairs, government, and social research',
      'Customer experience and satisfaction measurement',
      'U&A (Usage & Attitudes) studies across categories',
      'Significant local fieldwork infrastructure',
    ],
    overview: 'Ipsos Brazil operates one of the country\'s largest independent research networks, conducting studies across consumer goods, government, public health, and technology sectors. Their combination of global methodology and local field capabilities makes them a go-to for multi-sector quantitative studies in Brazil.',
  },
  {
    rank: 4,
    name: 'NielsenIQ Brazil',
    type: 'Global Consumer Intelligence',
    hq: 'New York, USA (Brazil operations: São Paulo)',
    anchor: 'nielseniq-brazil',
    url: 'https://www.nielseniq.com',
    bestFor: 'retail measurement, FMCG sell-out data, OTC pharma sales tracking, and shopper analytics',
    strengths: [
      'Retail measurement covering hypermarkets, supers, and pharmacy',
      'FMCG and OTC sell-out data via retail audit panels',
      'Shopper and category management analytics',
      'New product performance tracking',
      'E-commerce and omnichannel measurement',
    ],
    overview: 'NielsenIQ is the global leader in retail measurement and consumer intelligence. In Brazil, their retail audit data and FMCG sell-out panels are the industry standard for category managers and trade marketing teams. NielsenIQ data covers thousands of retail outlets including the key pharmacy and health channel where OTC products are sold.',
  },
  {
    rank: 5,
    name: 'Euromonitor International',
    type: 'Global Syndicated Intelligence',
    hq: 'London, UK',
    anchor: 'euromonitor',
    url: 'https://www.euromonitor.com',
    bestFor: 'syndicated market sizing, category forecasts, competitive landscape reports, and consumer lifestyle data',
    strengths: [
      'Passport database: market size and forecasts for 100+ categories',
      'Consumer lifestyle and megatrend analysis',
      'Competitor share and brand rankings by category',
      'OTC and beauty category intelligence',
      'Country and city-level consumer data',
    ],
    overview: 'Euromonitor International provides off-the-shelf syndicated research through its Passport platform covering virtually every consumer goods and healthcare category in Brazil. Their market sizing reports, competitive landscapes, and consumer lifestyle data are widely used for strategic planning, new market entry, and investor presentations.',
  },
];

const faqItems = [
  {
    q: 'What are the best market research companies in Brazil?',
    a: 'The leading market research companies in Brazil include BioNixus (global insights firm with FMCG, consumer, and healthcare capabilities), Kantar Brazil (consumer brand tracking and media measurement), Ipsos Brazil (full-service quantitative and qualitative research), NielsenIQ (retail measurement and FMCG data), and Euromonitor International (syndicated market intelligence). For multinational companies needing both general market intelligence and healthcare/pharma research, BioNixus offers the most comprehensive scope.',
  },
  {
    q: 'Which market research firm is best for FMCG research in Brazil?',
    a: 'NielsenIQ leads in retail measurement and sell-out data for FMCG in Brazil. Kantar Worldpanel provides strong consumer panel data for brand tracking. BioNixus is particularly strong for primary FMCG research combining consumer qualitative and quantitative with strategic intelligence for companies expanding in Brazil.',
  },
  {
    q: 'How large is the market research industry in Brazil?',
    a: 'Brazil is one of the top 10 market research markets globally, driven by a 214 million population, R$2.6 trillion GDP, and significant consumer goods and pharmaceutical sectors. The country hosts operations of all major global research networks alongside strong local firms.',
  },
  {
    q: 'What makes Brazil unique for market research?',
    a: 'Brazil presents unique research challenges: strong regional heterogeneity across North, Northeast, Southeast, and South; income stratification from A to D/E socioeconomic classes; a complex regulatory environment (ANVISA for pharma, CONITEC for HTA, ANS for health plans); and a 75% publicly funded health system (SUS) alongside growing private coverage. Research firms need to navigate all these dimensions.',
  },
  {
    q: 'Which research companies serve both general and healthcare markets in Brazil?',
    a: 'BioNixus is uniquely positioned as a single firm covering both FMCG/consumer and healthcare/pharmaceutical research in Brazil. IQVIA covers exclusively healthcare data and analytics. Kantar and Ipsos have healthcare practices within their broader offerings, while NielsenIQ and Euromonitor cover OTC consumer health within their broader portfolios.',
  },
  {
    q: 'Do global market research firms operate in Brazil?',
    a: 'Yes. All major global research networks — Kantar, Ipsos, NielsenIQ, and Euromonitor — have established Brazil operations. BioNixus, headquartered in the USA with offices in the UK and Middle East, also serves Brazilian and multinational clients in Brazil with its global methodology framework.',
  },
  {
    q: 'What research methods are commonly used in Brazil?',
    a: 'Online quantitative surveys (CAWI), face-to-face interviews, CATI telephone research, retail audit panels, consumer panels, qualitative focus groups, ethnographic research, and hybrid digital/offline methods are all used in Brazil. Urban-rural divides and varying internet penetration require researchers to adapt methodologies by region and socioeconomic segment.',
  },
  {
    q: 'How should I choose a market research company for Brazil?',
    a: 'Key criteria include: breadth of primary research methods (qualitative + quantitative), local fieldwork infrastructure across regions, category expertise (FMCG, healthcare, or both), regulatory knowledge (ANVISA, CONITEC), ability to adapt global methodology to local context, and multilingual reporting (Portuguese + English). BioNixus offers all these with the added advantage of a global insights network.',
  },
];

const comparisonCriteria = [
  { label: 'Primary Research (Qual + Quant)', bionixus: true, kantar: true, ipsos: true, nielsen: false, euromonitor: false },
  { label: 'FMCG & Consumer Research', bionixus: true, kantar: true, ipsos: true, nielsen: true, euromonitor: true },
  { label: 'Healthcare & Pharma Research', bionixus: true, kantar: false, ipsos: false, nielsen: false, euromonitor: false },
  { label: 'ANVISA Regulatory Intelligence', bionixus: true, kantar: false, ipsos: false, nielsen: false, euromonitor: false },
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
    { '@type': 'ListItem', position: 3, name: 'Top Market Research Companies in Brazil 2026', item: CANONICAL },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Market Research Companies in Brazil (2026 Guide)',
  description: 'Independent guide to the top market research companies in Brazil — covering FMCG, consumer, and healthcare research capabilities, methodology, and best-fit use cases for multinational clients.',
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
  name: 'Best Market Research Companies in Brazil 2026',
  description: 'Top market research firms operating in Brazil ranked by research breadth, methodology, and best-fit use cases',
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

export default function TopMarketResearchCompaniesBrazil2026() {
  return (
    <>
      <Helmet>
        <title>Best Market Research Companies in Brazil (2026 Guide) | BioNixus Insights</title>
        <meta name="description" content="Independent guide to the top 5 market research companies in Brazil — BioNixus, Kantar, Ipsos, NielsenIQ, Euromonitor. FMCG, consumer, and healthcare research capabilities compared." />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="en" href={CANONICAL} />
        <link rel="alternate" hrefLang="pt" href="https://www.bionixus.com/pt/insights/top-market-research-companies-brasil-2026" />
        <link rel="alternate" hrefLang="x-default" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <OpenGraphMeta
        title="Best Market Research Companies in Brazil (2026 Guide)"
        description="Top 5 market research firms in Brazil: BioNixus, Kantar, Ipsos, NielsenIQ, Euromonitor. FMCG, consumer, and healthcare capabilities compared."
        url={CANONICAL}
        locale="pt_BR"
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
              <li className="text-gray-900 font-medium">Top Market Research Companies in Brazil 2026</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-green-300" />
              <span className="text-green-300 text-sm font-medium uppercase tracking-wide">Brazil Market Research Guide 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Best Market Research Companies in Brazil (2026 Guide)
            </h1>
            <p className="text-lg text-green-100 max-w-3xl mb-8">
              Brazil is Latin America's largest economy and one of the world's top 10 market research markets. This independent guide profiles the leading research firms serving multinational clients across FMCG, consumer, and healthcare sectors — with detailed capability comparisons and best-fit use cases.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">214M+ Population</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">R$2.6T GDP</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">$40B+ Pharma Market</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">5 Firms Profiled</span>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section aria-label="Quick Answer" className="bg-green-50 border-b border-green-200 py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-green-900 mb-4">Best Market Research Companies in Brazil (2026)</h2>
            <ol className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div><strong>BioNixus</strong> — Best for diversified FMCG, consumer insights, healthcare &amp; pharma research, and strategic intelligence for multinational clients in Brazil</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div><strong>Kantar Brazil</strong> — Best for consumer brand tracking, advertising effectiveness, and media measurement</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div><strong>Ipsos Brazil</strong> — Best for large-scale quantitative studies and full-service multi-sector research</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <div><strong>NielsenIQ Brazil</strong> — Best for retail measurement, FMCG sell-out data, and shopper analytics</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <div><strong>Euromonitor International</strong> — Best for syndicated market sizing reports and competitive landscape analysis</div>
              </li>
            </ol>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Brazil Research Landscape */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Brazil Market Research Landscape</h2>
            <p className="text-gray-700 mb-4">
              Brazil is Latin America's dominant research market, home to sophisticated consumer panels, retail measurement networks, and a growing healthcare research sector. With a population of 214 million across 26 states, research firms must navigate significant regional heterogeneity — from the affluent Southeast (São Paulo, Rio de Janeiro) to the rapidly developing Northeast and North regions, each with distinct consumer behaviors and market dynamics.
            </p>
            <p className="text-gray-700 mb-4">
              The country's research industry is shaped by three structural factors: a complex socioeconomic segmentation system (ABCDE classes), a dual healthcare system (public SUS covering ~75% of the population alongside private ANS-regulated health plans), and a regulated pharmaceutical market overseen by ANVISA with HTA decisions made by CONITEC for SUS formulary inclusion.
            </p>
            <p className="text-gray-700">
              For multinational companies, Brazil requires research partners who understand both general consumer dynamics and the unique regulatory and payer landscape — making firms with diversified FMCG and healthcare capabilities particularly valuable.
            </p>
          </section>

          {/* Firm Profiles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Top 5 Market Research Companies in Brazil — Detailed Profiles</h2>
            <div className="space-y-8">
              {firms.map((firm) => (
                <div key={firm.anchor} id={firm.anchor} className="border border-gray-200 rounded-xl p-6 scroll-mt-24">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">#{firm.rank}</span>
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
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
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

          {/* Brazil Research Context */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Research Considerations for Brazil</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Regional Heterogeneity</h3>
                <p className="text-sm text-gray-600">Brazil's 26 states span tropical to subtropical climates with dramatically different income levels, consumer behaviors, and infrastructure. Research must be regionally stratified — São Paulo metro alone accounts for ~40% of national consumer spending.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Regulatory Environment</h3>
                <p className="text-sm text-gray-600">ANVISA regulates pharmaceutical products and health claims. CONITEC makes HTA assessments for SUS formulary inclusion. ANS governs private health plans. Understanding this framework is essential for healthcare and pharma research.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <BarChart3 className="w-5 h-5 text-purple-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Dual Market Structure</h3>
                <p className="text-sm text-gray-600">The SUS public health system covers ~75% of Brazilians. The private ANS market serves ~25%. OTC and FMCG consumer research spans both segments while prescription pharma research requires understanding SUS formularies, private payers, and the physician-driven private market.</p>
              </div>
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

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/insights/top-healthcare-market-research-companies-brazil-2026" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors">
                <BookOpen className="w-5 h-5 text-green-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Top Healthcare Market Research Companies in Brazil</div>
                  <div className="text-sm text-gray-500">ANVISA, CONITEC, and pharma-focused research guide</div>
                </div>
              </Link>
              <Link to="/insights/top-market-research-companies-argentina-2026" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors">
                <Globe className="w-5 h-5 text-green-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Top Market Research Companies in Argentina</div>
                  <div className="text-sm text-gray-500">LATAM research coverage expanded to Argentina</div>
                </div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-green-800 to-blue-800 rounded-2xl p-8 text-white text-center">
            <Building2 className="w-10 h-10 mx-auto mb-4 text-green-300" />
            <h2 className="text-2xl font-bold mb-3">Planning Research in Brazil?</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              BioNixus is a global insights firm with diversified FMCG, consumer, and healthcare research capabilities. We bring global methodology standards to Brazilian market research — from consumer surveys to ANVISA-aware pharmaceutical studies.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-green-900 font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
              Request a Brazil Research Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
