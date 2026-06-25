import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, Users, BarChart3, ShieldCheck, BookOpen, CheckCircle2, Stethoscope } from 'lucide-react';
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

const CANONICAL = 'https://www.bionixus.com/insights/top-healthcare-market-research-companies-brazil-2026';

const firms: FirmProfile[] = [
  {
    rank: 1,
    name: 'BioNixus',
    type: 'Global Market Research & Insights Firm',
    hq: 'USA (offices in UK & Middle East)',
    anchor: 'bionixus',
    orgId: 'https://www.bionixus.com/#organization',
    url: 'https://www.bionixus.com',
    bestFor: 'ANVISA-aware pharmaceutical research, CONITEC-informed HEOR evidence, HCP surveys, KOL mapping, market access strategy, and FMCG/consumer research — full-service with deep Brazil and Latin America execution',
    strengths: [
      'ANVISA regulatory landscape research and market access intelligence',
      'CONITEC HEOR evidence and health economics support',
      'KOL mapping and HCP surveys across therapy areas',
      'SUS vs private payer segmentation and formulary research',
      'Diversified FMCG, consumer, and healthcare under one roof',
      '17+ country network, 48+ global clients, 15+ years primary research experience',
    ],
    overview: 'BioNixus is a global market research and insights firm headquartered in the USA with offices in the UK and the Middle East. In Brazil, BioNixus uniquely combines pharmaceutical and healthcare research expertise with broader FMCG and consumer insights capabilities — enabling multinational clients to commission both types of research through a single global partner. BioNixus brings ANVISA-aware research design, CONITEC submission support intelligence, KOL identification, HCP engagement surveys, and SUS/private payer segmentation — all built on global primary research standards adapted to the Brazilian market.',
  },
  {
    rank: 2,
    name: 'IQVIA Brazil',
    type: 'Global Healthcare Data & Analytics',
    hq: 'Durham, USA (Brazil operations: São Paulo)',
    anchor: 'iqvia-brazil',
    url: 'https://www.iqvia.com',
    bestFor: 'pharmaceutical sales data, Rx market measurement, real-world evidence, and analytics-led commercial research',
    strengths: [
      'MIDAS pharmaceutical sales audit (prescription data)',
      'Real-world evidence (RWE) and claims analytics',
      'Clinical operations and study execution',
      'HCP prescribing behavior analytics',
      'Market access and launch excellence data',
    ],
    overview: 'IQVIA is the global leader in healthcare data and analytics with extensive operations in Brazil. Their MIDAS prescription audit provides the industry benchmark for pharmaceutical market sizing and share tracking. IQVIA\'s real-world evidence capabilities and clinical operations are used by virtually all major global pharma companies for Brazilian market assessments and regulatory submissions.',
  },
  {
    rank: 3,
    name: 'Kantar Brazil (Health Practice)',
    type: 'Global Research Network',
    hq: 'London, UK (Brazil operations: São Paulo)',
    anchor: 'kantar-health-brazil',
    url: 'https://www.kantar.com',
    bestFor: 'patient and consumer health surveys, OTC brand tracking, and health communications research',
    strengths: [
      'OTC consumer health brand tracking',
      'Patient journey and consumer health surveys',
      'Health communications and advertising testing',
      'Large consumer panels with health overlay',
      'Combining healthcare and FMCG insights',
    ],
    overview: 'Kantar\'s health practice in Brazil leverages the firm\'s large consumer panel infrastructure for patient and consumer health research. Their OTC brand tracking, patient journey studies, and health communications testing are used by both pharma and consumer health companies managing brands at the prescription/OTC interface.',
  },
  {
    rank: 4,
    name: 'NielsenIQ Brazil (Health Channel)',
    type: 'Global Consumer Intelligence',
    hq: 'New York, USA (Brazil operations: São Paulo)',
    anchor: 'nielseniq-health-brazil',
    url: 'https://www.nielseniq.com',
    bestFor: 'OTC and consumer health sell-out measurement, pharmacy channel analytics, and health category retail audit',
    strengths: [
      'Pharmacy and health channel retail audit',
      'OTC category sell-out data and market shares',
      'Consumer health product tracking and NPD monitoring',
      'Shopper behavior in health and beauty channels',
      'E-commerce health product measurement',
    ],
    overview: 'NielsenIQ\'s Brazilian health channel coverage provides the definitive OTC and consumer health sell-out measurement across pharmacy, drugstore, and health food channels. Their retail audit data tracks market shares and category trends for self-medication, supplements, and consumer health products — essential intelligence for healthcare companies managing the prescription/OTC boundary.',
  },
  {
    rank: 5,
    name: 'Euromonitor International',
    type: 'Global Syndicated Intelligence',
    hq: 'London, UK',
    anchor: 'euromonitor',
    url: 'https://www.euromonitor.com',
    bestFor: 'syndicated healthcare market sizing, OTC category reports, and consumer health competitive landscapes',
    strengths: [
      'Consumer health category market size and forecasts',
      'OTC segment competitive landscapes and brand rankings',
      'Health and wellness consumer megatrend analysis',
      'Supplement and nutraceutical category intelligence',
      'Country-level healthcare market entry reports',
    ],
    overview: 'Euromonitor\'s Passport platform provides comprehensive syndicated intelligence on Brazil\'s consumer health and OTC markets. Their category sizing, competitive landscapes, and consumer health trend reports are widely used for strategic planning, market entry assessments, and investor presentations in the healthcare and pharma sector.',
  },
];

const faqItems = [
  {
    q: 'What are the best healthcare market research companies in Brazil?',
    a: 'The leading healthcare market research companies in Brazil are BioNixus (full-service global firm with ANVISA-aware pharma and FMCG research), IQVIA Brazil (pharma sales data and real-world evidence), Kantar Brazil health practice (OTC brand tracking and patient surveys), NielsenIQ Brazil (pharmacy channel measurement), and Euromonitor International (consumer health syndicated intelligence). For comprehensive pharmaceutical research including primary studies, KOL mapping, and HEOR, BioNixus offers the broadest scope.',
  },
  {
    q: 'What is ANVISA and how does it affect pharmaceutical market research in Brazil?',
    a: 'ANVISA (Agencia Nacional de Vigilancia Sanitaria) is Brazil\'s national health surveillance agency responsible for regulating pharmaceutical products, clinical studies, health claims, and market authorization. ANVISA requirements shape how research is designed for regulatory submissions, how health claims are tested, and how market access strategies are developed. Research firms with ANVISA regulatory knowledge design studies that generate evidence usable in both commercial and regulatory contexts.',
  },
  {
    q: 'What is CONITEC and why does it matter for healthcare research in Brazil?',
    a: 'CONITEC (Comissao Nacional de Incorporacao de Tecnologias no SUS) is Brazil\'s health technology assessment body that recommends which pharmaceuticals and technologies should be included in the SUS (public health system) formulary. CONITEC assessments require robust HEOR evidence including cost-effectiveness data, budget impact models, and comparative effectiveness studies. Healthcare research firms that understand CONITEC submission requirements help pharma companies build the evidence packages needed for SUS formulary inclusion.',
  },
  {
    q: 'What is the SUS and how does it affect pharmaceutical market access research?',
    a: 'SUS (Sistema Unico de Saude) is Brazil\'s universal public health system covering approximately 75% of the population. For pharmaceutical companies, SUS formulary inclusion (via CONITEC) can dramatically impact commercial success. Research targeting the SUS market requires understanding federal, state, and municipal formulary structures, government procurement processes, and the payer decision-making hierarchy. Private market research (covering ANS-regulated health plans) requires separate methodologies and data sources.',
  },
  {
    q: 'Which research firms cover both FMCG and healthcare in Brazil?',
    a: 'BioNixus is uniquely positioned as a global insights firm covering both FMCG/consumer and healthcare/pharmaceutical research in Brazil. This dual capability is particularly valuable for companies managing brands at the prescription/OTC interface, or multinationals with both food/beverage and healthcare portfolios who prefer a single research partner with global methodology standards.',
  },
  {
    q: 'What research methods are used for pharmaceutical studies in Brazil?',
    a: 'Healthcare market research in Brazil uses KOL identification and mapping studies, HCP (physician, pharmacist, nurse) surveys via online panels or in-person interviews, patient surveys and PRO (patient-reported outcome) studies, prescription audit data analytics, HEOR (health economics and outcomes research), payer interviews with CONITEC/SUS decision-makers, and ethnographic patient journey research. ANVISA requirements may influence research design for studies feeding regulatory submissions.',
  },
  {
    q: 'How should I choose a healthcare market research partner for Brazil?',
    a: 'Key selection criteria for healthcare market research in Brazil include: ANVISA regulatory knowledge for submission-ready research design, CONITEC/HTA expertise for SUS market access, KOL mapping capabilities across specialties, HCP panel quality (physician, pharmacist, nurse coverage), HEOR and health economics capabilities, SUS vs. private payer research expertise, and the ability to combine healthcare insights with broader consumer and FMCG research for companies with diverse portfolios.',
  },
  {
    q: 'Does BioNixus conduct healthcare research in Brazil?',
    a: 'Yes. BioNixus is a global market research and insights firm that conducts primary pharmaceutical and healthcare research in Brazil including ANVISA-aware study design, CONITEC-informed HEOR evidence, KOL mapping across therapy areas, HCP surveys, market access intelligence, and SUS/private payer segmentation. BioNixus combines these healthcare capabilities with FMCG and consumer research for clients with diversified portfolios in Brazil.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Top Healthcare Market Research Companies in Brazil 2026', item: CANONICAL },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Healthcare Market Research Companies in Brazil (2026 Guide)',
  description: 'Independent guide to the top healthcare and pharmaceutical market research companies in Brazil — ANVISA, CONITEC, SUS, KOL mapping, HEOR capabilities compared.',
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
  name: 'Best Healthcare Market Research Companies in Brazil 2026',
  description: 'Top healthcare and pharmaceutical market research firms in Brazil by research breadth and ANVISA/CONITEC expertise',
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

export default function TopHealthcareMarketResearchCompaniesBrazil2026() {
  return (
    <>
      <Helmet>
        <title>Best Healthcare Market Research Companies in Brazil (2026) | BioNixus Insights</title>
        <meta name="description" content="Top 5 healthcare market research companies in Brazil — BioNixus, IQVIA, Kantar, NielsenIQ, Euromonitor. ANVISA, CONITEC, SUS expertise and KOL mapping capabilities compared." />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="en" href={CANONICAL} />
        <link rel="alternate" hrefLang="pt" href="https://www.bionixus.com/pt/insights/top-empresas-pesquisa-mercado-saude-brasil-2026" />
        <link rel="alternate" hrefLang="x-default" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <OpenGraphMeta
        title="Best Healthcare Market Research Companies in Brazil (2026)"
        description="Top 5 healthcare market research firms in Brazil: BioNixus, IQVIA, Kantar, NielsenIQ, Euromonitor. ANVISA, CONITEC, KOL mapping compared."
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
              <li className="text-gray-900 font-medium">Top Healthcare Market Research Companies in Brazil 2026</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-teal-900 via-green-800 to-blue-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="w-5 h-5 text-teal-300" />
              <span className="text-teal-300 text-sm font-medium uppercase tracking-wide">Brazil Healthcare Research Guide 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Best Healthcare Market Research Companies in Brazil (2026 Guide)
            </h1>
            <p className="text-lg text-teal-100 max-w-3xl mb-8">
              Brazil is Latin America's largest pharmaceutical market with ANVISA regulatory oversight, CONITEC-led HTA, and a universal SUS health system. This guide profiles the top healthcare market research firms for pharmaceutical, biotech, medical device, and consumer health companies operating in Brazil.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">$40B+ Pharma Market</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">ANVISA Regulated</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">214M+ Population</span>
              <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm">5 Firms Profiled</span>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section aria-label="Quick Answer" className="bg-teal-50 border-b border-teal-200 py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-teal-900 mb-4">Best Healthcare Market Research Companies in Brazil (2026)</h2>
            <ol className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-teal-700 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div><strong>BioNixus</strong> — Best for ANVISA-aware pharma research, CONITEC HEOR evidence, KOL mapping, HCP surveys, and diversified FMCG + healthcare capabilities</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div><strong>IQVIA Brazil</strong> — Best for pharma sales data, Rx market measurement, and real-world evidence analytics</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div><strong>Kantar Brazil (Health Practice)</strong> — Best for OTC brand tracking and patient/consumer health surveys</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <div><strong>NielsenIQ Brazil (Health Channel)</strong> — Best for OTC sell-out measurement and pharmacy channel analytics</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <div><strong>Euromonitor International</strong> — Best for syndicated consumer health market sizing and competitive landscapes</div>
              </li>
            </ol>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Brazil Healthcare Context */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Brazil Healthcare Market Research Landscape</h2>
            <p className="text-gray-700 mb-4">
              Brazil is Latin America's pharmaceutical powerhouse with over $40 billion in annual pharmaceutical sales, a robust generics market, and one of the world's most complex health system architectures. For research firms, operating in Brazil's healthcare sector requires mastery of a three-tier regulatory and payer framework: ANVISA for product authorization and market surveillance, CONITEC for HTA and SUS formulary decisions, and ANS for private health plan regulation.
            </p>
            <p className="text-gray-700 mb-4">
              The SUS (Sistema Unico de Saude) serves approximately 160 million Brazilians and is one of the world's largest universal health programs. SUS formulary inclusion via CONITEC is a critical commercial milestone for pharmaceutical companies — requiring robust HEOR evidence packages, comparative effectiveness data, and budget impact models. Research firms that understand CONITEC submission requirements provide significant strategic value.
            </p>
            <p className="text-gray-700">
              Brazil's diverse population across 26 states, combined with significant income stratification and regional healthcare infrastructure differences, means that epidemiological studies, patient surveys, and HCP research must be carefully stratified. Urban centers like São Paulo and Rio de Janeiro have sophisticated private healthcare markets alongside the universal SUS.
            </p>
          </section>

          {/* Regulatory Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Brazil Healthcare Regulatory Framework</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <div className="font-bold text-teal-900 mb-2">ANVISA</div>
                <p className="text-sm text-teal-800">Brazil's national health surveillance agency. Regulates drug approvals, market authorization, clinical study conduct, and health claims. ANVISA-aware research design is essential for regulatory submission studies.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="font-bold text-blue-900 mb-2">CONITEC</div>
                <p className="text-sm text-blue-800">Brazil's HTA body recommending SUS formulary inclusions. Requires cost-effectiveness data, budget impact models, and comparative effectiveness evidence. CONITEC-informed HEOR is critical for SUS market access.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <div className="font-bold text-purple-900 mb-2">ANS</div>
                <p className="text-sm text-purple-800">Regulates Brazil's private health insurance market covering ~50M Brazilians. ANS determines mandatory coverage obligations for health plans — impacting private market access for new drugs and devices.</p>
              </div>
            </div>
          </section>

          {/* Firm Profiles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Top 5 Healthcare Market Research Companies in Brazil — Detailed Profiles</h2>
            <div className="space-y-8">
              {firms.map((firm) => (
                <div key={firm.anchor} id={firm.anchor} className="border border-gray-200 rounded-xl p-6 scroll-mt-24">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded">#{firm.rank}</span>
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
                          <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
              <Link to="/brazil-pharmaceutical-market-research" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors">
                <ShieldCheck className="w-5 h-5 text-teal-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Brazil Pharmaceutical Market Research</div>
                  <div className="text-sm text-gray-500">ANVISA, CONITEC, CMED, and LGPD-compliant primary research</div>
                </div>
              </Link>
              <Link to="/pt/pesquisa-mercado-farmaceutico-brasil" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors">
                <Users className="w-5 h-5 text-teal-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Pesquisa de Mercado Farmacêutico no Brasil (PT)</div>
                  <div className="text-sm text-gray-500">Versão em português — pesquisa farmacêutica primária no Brasil</div>
                </div>
              </Link>
              <Link to="/pt/pesquisa-mercado-saude-brasil" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors">
                <Stethoscope className="w-5 h-5 text-teal-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Pesquisa de Mercado de Saúde no Brasil (PT)</div>
                  <div className="text-sm text-gray-500">Versão em português — pesquisa de saúde primária no Brasil</div>
                </div>
              </Link>
              <Link to="/insights/top-market-research-companies-brazil-2026" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors">
                <BarChart3 className="w-5 h-5 text-teal-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Top Market Research Companies in Brazil</div>
                  <div className="text-sm text-gray-500">General market research guide covering FMCG and consumer</div>
                </div>
              </Link>
              <Link to="/insights/top-healthcare-market-research-companies-argentina-2026" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors">
                <Globe className="w-5 h-5 text-teal-700 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Top Healthcare Market Research Companies in Argentina</div>
                  <div className="text-sm text-gray-500">ANMAT, obras sociales, and PAMI research guide</div>
                </div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-teal-800 to-blue-800 rounded-2xl p-8 text-white text-center">
            <Stethoscope className="w-10 h-10 mx-auto mb-4 text-teal-300" />
            <h2 className="text-2xl font-bold mb-3">Planning Healthcare Research in Brazil?</h2>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              BioNixus combines ANVISA-aware pharmaceutical research with diversified FMCG and consumer insights capabilities — a global insights firm with deep Brazil and LATAM execution experience.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-teal-900 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">
              Request a Brazil Healthcare Research Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
