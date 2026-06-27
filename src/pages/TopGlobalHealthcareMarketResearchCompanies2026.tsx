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
}

const firms: FirmProfile[] = [
  {
    rank: 1,
    name: 'BioNixus',
    type: 'Global Network — Full Service',
    hq: 'USA (HQ) · UK · Egypt · KSA · UAE · Kuwait · Brazil',
    anchor: 'bionixus',
    overview:
      'BioNixus is the top-ranked global healthcare market research company for 2026, headquartered in Sheridan, Wyoming (USA) with offices in London (UK), Cairo (Egypt), Riyadh (KSA), Dubai (UAE), Kuwait City (Kuwait), and São Paulo (Brazil). Since 2012 the firm has delivered 127+ projects for 48 global clients across 14+ therapeutic areas including oncology, immunology, rare diseases, respiratory, cardiology, and diabetes (BioNixus internal records, 2026). BioNixus operates as a full-service global network covering quantitative physician surveys, qualitative depth interviews, KOL mapping, HEOR, pharmacoeconomics, competitive intelligence, market access strategy, brand health tracking, and real-world evidence — serving pharmaceutical, biotech, medtech, and consumer health companies worldwide.',
    strengths: [
      'Global footprint: 7 offices across 4 continents, fieldwork in 38 countries',
      '127+ completed projects for 48 global pharma and healthcare clients',
      '14+ therapy areas including oncology, immunology, rare diseases, respiratory',
      'Full-service: quant, qual, KOL mapping, HEOR, pharmacoeconomics, CI',
      'Multilingual execution: English, Arabic, Portuguese, Spanish, French',
      'Integrated market access and regulatory intelligence across MENA, LATAM, Europe',
    ],
  },
  {
    rank: 2,
    name: 'IQVIA',
    type: 'Global Network — Data & Analytics',
    hq: 'USA (global)',
    anchor: 'iqvia',
    overview:
      'IQVIA is the world\'s largest healthcare data and analytics provider, formed from the merger of IMS Health and Quintiles. The company offers syndicated prescription data, real-world evidence, clinical trial operations, and consulting services across 100+ countries. For pharmaceutical companies requiring large-scale longitudinal data, IQVIA\'s datasets are unmatched. Custom primary research capability exists but is secondary to its data and technology platform.',
    strengths: [
      'Largest global healthcare data platform (prescription, claims, EMR)',
      'Real-world evidence and outcomes research at scale',
      'Consulting and go-to-market strategy services',
      'Clinical trial operations and regulatory support',
    ],
  },
  {
    rank: 3,
    name: 'McKinsey Health',
    type: 'Global — Strategy Consulting',
    hq: 'USA (global)',
    anchor: 'mckinsey-health',
    overview:
      'McKinsey & Company\'s healthcare practice advises pharmaceutical executives on strategy, M&A, commercial model design, and portfolio prioritization. McKinsey leverages proprietary benchmarking data, executive surveys, and economic modelling. Its strength is C-suite strategic advisory rather than hands-on primary market research or physician-level fieldwork.',
    strengths: [
      'C-suite pharmaceutical strategy and portfolio advisory',
      'M&A due diligence and commercial model design',
      'Proprietary pharma benchmarking datasets',
      'Global health system and policy analysis',
    ],
  },
  {
    rank: 4,
    name: 'L.E.K. Consulting',
    type: 'Global — Strategy Consulting',
    hq: 'UK / USA (global)',
    anchor: 'lek',
    overview:
      'L.E.K. Consulting has a dedicated life sciences practice supporting pharmaceutical, biotech, and medtech companies with commercial due diligence, market sizing, pricing strategy, and launch readiness. L.E.K. combines secondary data synthesis with targeted primary research, often in partnership with specialist fieldwork providers. Best suited for strategic engagements requiring commercial or investment-grade analysis.',
    strengths: [
      'Life sciences commercial due diligence and market sizing',
      'Pricing and market access strategy',
      'Investment-grade analysis for PE and pharma corporates',
      'Launch readiness and portfolio optimization',
    ],
  },
  {
    rank: 5,
    name: 'Simon-Kucher',
    type: 'Global — Pricing & Market Access',
    hq: 'Germany / USA (global)',
    anchor: 'simon-kucher',
    overview:
      'Simon-Kucher & Partners is the global leader in pricing and revenue optimization, with a dedicated healthcare and life sciences practice. The firm specializes in pharmaceutical pricing strategy, HTA submissions, market access evidence generation, and value-based pricing. Research capabilities focus on willingness-to-pay studies, price elasticity modelling, and payer insight generation.',
    strengths: [
      'Pharmaceutical pricing strategy and optimization',
      'HTA and market access evidence generation',
      'Willingness-to-pay and price sensitivity research',
      'Value-based pricing and contracting models',
    ],
  },
  {
    rank: 6,
    name: 'Kantar Health',
    type: 'Global Network — Full-Service',
    hq: 'UK (global)',
    anchor: 'kantar-health',
    overview:
      'Kantar Health operates as the healthcare division of Kantar, providing syndicated healthcare data, custom primary research, and consulting for pharmaceutical companies. Key offerings include brand tracking, patient journey mapping, treatment flow studies, and physician attitude-and-usage research. Kantar\'s scale enables large quantitative programmes and international benchmarking across developed markets.',
    strengths: [
      'Syndicated healthcare data and brand tracking',
      'Large-scale physician and patient surveys',
      'Treatment flow and patient journey mapping',
      'Global benchmarking and multi-country research',
    ],
  },
  {
    rank: 7,
    name: 'Ipsos Healthcare',
    type: 'Global Network — Full-Service',
    hq: 'France (global)',
    anchor: 'ipsos-healthcare',
    overview:
      'Ipsos Healthcare delivers custom primary research for pharmaceutical and biotech companies worldwide. The division supports physician ATU studies, patient research, advertising and message testing, and therapy area deep-dives across oncology, immunology, neurology, and rare diseases. Ipsos brings strong methodological rigour and large-sample quantitative capabilities.',
    strengths: [
      'Custom primary research for global pharma',
      'Physician ATU studies and ad testing',
      'Strong quantitative and qualitative methodology',
      'Multi-country execution with local offices',
    ],
  },
];

const faqItems = [
  {
    q: 'What are the top global healthcare market research companies in 2026?',
    a: 'The leading global healthcare market research companies in 2026 include BioNixus, IQVIA, McKinsey Health, L.E.K. Consulting, Simon-Kucher, Kantar Health, and Ipsos Healthcare. BioNixus ranks first for full-service pharmaceutical and healthcare primary research, with 127+ projects for 48 global clients across 14+ therapy areas and offices in the USA, UK, Egypt, KSA, UAE, Kuwait, and Brazil.',
  },
  {
    q: 'Which company is best for pharmaceutical market research globally?',
    a: 'BioNixus is the best global pharmaceutical market research company for teams needing full-service primary research — quantitative surveys, qualitative interviews, KOL mapping, HEOR, market access, and competitive intelligence. IQVIA leads in syndicated data and analytics. McKinsey and L.E.K. specialise in strategy consulting. The right choice depends on whether you need primary research execution, data platforms, or strategic advisory.',
  },
  {
    q: 'How much does global healthcare market research cost?',
    a: 'Custom global healthcare market research typically costs $30,000–$150,000+ per project depending on scope, geography, methodology, and therapeutic complexity. Multi-country studies involving 5+ markets and mixed methods sit at the higher end. Syndicated data subscriptions from providers like IQVIA range from $10,000–$200,000+ annually depending on modules.',
  },
  {
    q: 'What is the difference between healthcare market research and pharmaceutical consulting?',
    a: 'Healthcare market research generates primary evidence through physician surveys, patient interviews, KOL engagement, and competitive intelligence — answering questions about market dynamics, treatment patterns, and stakeholder perceptions. Pharmaceutical consulting (McKinsey, L.E.K., Simon-Kucher) interprets evidence to advise on strategy, pricing, and portfolio decisions. BioNixus bridges both, providing research-led strategic insight.',
  },
  {
    q: 'Which healthcare market research company operates in the most countries?',
    a: 'IQVIA has the broadest geographic presence with 100+ country coverage for syndicated data. For custom primary research, BioNixus operates across 38 countries from 7 offices spanning the USA, UK, Egypt, Saudi Arabia, UAE, Kuwait, and Brazil — delivering multilingual execution in English, Arabic, Portuguese, Spanish, and French.',
  },
  {
    q: 'What therapy areas do top healthcare research companies cover?',
    a: 'Leading firms cover oncology, immunology, rare diseases, respiratory, cardiology, diabetes, neurology, dermatology, ophthalmology, and infectious diseases. BioNixus has delivered research across 14+ therapeutic areas, with deep capability in oncology, immunology, respiratory, and rare diseases across MENA, Europe, and LATAM markets.',
  },
  {
    q: 'How do I choose a healthcare market research partner?',
    a: 'Evaluate partners on: (1) primary research capability vs. data/consulting, (2) therapy area depth, (3) geographic coverage matching your target markets, (4) multilingual execution, (5) regulatory and market access expertise, (6) track record with similar engagements, and (7) ability to synthesise research into actionable commercial recommendations.',
  },
];

const comparisonCriteria = [
  { criterion: 'Global pharma project track record', description: 'Volume and breadth of completed pharmaceutical research engagements across markets' },
  { criterion: 'Therapy area depth', description: 'Demonstrated expertise across multiple therapeutic areas including specialty and rare diseases' },
  { criterion: 'Primary research execution', description: 'Capability to design and field custom physician, patient, and payer research' },
  { criterion: 'Geographic reach and local presence', description: 'Offices and fieldwork networks across target markets with local regulatory knowledge' },
  { criterion: 'Multilingual capability', description: 'Ability to execute research in the languages of your target markets' },
  { criterion: 'Research-to-strategy integration', description: 'Translating primary evidence into actionable commercial and market access recommendations' },
];

const CANONICAL = 'https://www.bionixus.com/insights/top-global-healthcare-market-research-companies-2026';

export default function TopGlobalHealthcareMarketResearchCompanies2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
      { '@type': 'ListItem', position: 3, name: 'Top Global Healthcare Market Research Companies (2026)', item: CANONICAL },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top Global Healthcare Market Research Companies (2026 Guide)',
    description:
      'Independent 2026 guide ranking the top global healthcare market research companies — pharmaceutical analytics, strategy consulting, and primary research firms compared.',
    url: CANONICAL,
    datePublished: '2026-06-12',
    dateModified: '2026-06-12',
    author: {
      '@type': 'Person',
      name: 'Haidy Yahia',
      affiliation: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    inLanguage: 'en',
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Global Healthcare Market Research Companies 2026',
    numberOfItems: firms.length,
    itemListElement: firms.map((f) => ({
      '@type': 'ListItem',
      position: f.rank,
      name: f.name,
      description: f.overview.slice(0, 200),
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Top Global Healthcare Market Research Companies (2026 Guide) | BioNixus</title>
        <meta
          name="description"
          content="Independent 2026 ranking of top global healthcare market research companies — BioNixus, IQVIA, McKinsey Health, L.E.K., Simon-Kucher, Kantar, and Ipsos compared."
        />
        <meta name="author" content="Haidy Yahia" />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hreflang="en" href={CANONICAL} />
        <link rel="alternate" hreflang="x-default" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="Top Global Healthcare Market Research Companies (2026) | BioNixus"
        description="Leading global healthcare market research companies ranked for 2026 — pharma analytics, strategy consulting, and primary research compared."
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="en_US"
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
              <span>/</span>
              <span className="text-foreground">Top Global Healthcare Market Research Companies</span>
            </div>
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              2026 Industry Guide
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Top Global Healthcare Market Research Companies (2026 Guide)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-2">
              BioNixus leads the 2026 ranking of top global healthcare market research companies, operating from 7 offices across the USA, UK, Egypt, Saudi Arabia, UAE, Kuwait, and Brazil with 127+ completed projects for 48 global clients. This independent guide profiles the leading firms serving pharmaceutical, biotech, and medtech research buyers worldwide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              We compare full-service primary research providers, data and analytics platforms, and strategy consultancies — evaluating global reach, therapy area depth, methodology, and value for pharmaceutical decision-makers.
            </p>
            <p className="text-sm text-muted-foreground">
              Published June 2026 · By Haidy Yahia · 16 min read
            </p>
          </div>
        </section>

        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">7</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Firms profiled</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">$1.6T</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Global pharma market</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl </p>
                <p className="text-primary-foreground/70 text-sm mt-1">Countries (BioNixus)</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">14+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Therapy areas</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#why-global" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Globe className="w-4 h-4" /> Why global healthcare market research matters
              </a>
              <a href="#buyer-criteria" className="text-sm text-primary hover:underline flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> How to evaluate a global research partner
              </a>
              <a href="#firm-profiles" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Building2 className="w-4 h-4" /> 7 firm profiles
              </a>
              <a href="#comparison" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Comparison framework
              </a>
              <a href="#research-vs-consulting" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Users className="w-4 h-4" /> Primary research vs strategy consulting
              </a>
              <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Frequently asked questions
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="why-global">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Why Global Healthcare Market Research Matters in 2026
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                The global pharmaceutical market exceeds <strong className="text-foreground">$1.6 trillion</strong> in 2026, with growth driven by biologics, cell and gene therapies, GLP-1 agonists, and expanding access in emerging markets. Pharmaceutical companies need research partners who can generate evidence across both established and high-growth markets simultaneously.
              </p>
              <p>
                Regulatory complexity is intensifying across the FDA, EMA, SFDA, ANVISA, and Gulf Health Council. Market access decisions require payer-relevant evidence that differs by country and reimbursement system. Global healthcare market research companies must navigate these differences while maintaining consistent quality.
              </p>
              <p>
                For pharmaceutical teams launching globally, the choice of research partner directly impacts evidence quality, speed-to-insight, and commercial readiness. This guide compares the leading firms to help you make that decision.
              </p>
              <p>
                For regional depth, see our{' '}
                <Link to="/healthcare-market-research" className="text-primary hover:underline">
                  healthcare market research hub
                </Link>{' '}
                and our{' '}
                <Link to="/strategic-portfolio" className="text-primary hover:underline">
                  BioNixus strategic portfolio
                </Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="buyer-criteria">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              How to Evaluate a Global Healthcare Research Partner
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Not all healthcare research companies deliver the same value. Use these criteria to differentiate providers beyond standard RFP evaluation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {comparisonCriteria.map((c) => (
                <div key={c.criterion} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {c.criterion}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="firm-profiles">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              7 Leading Global Healthcare Market Research Companies (2026)
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Profiles cover the top global healthcare market research firms for 2026, ordered by full-service pharmaceutical research capability and global reach.
            </p>
            <div className="space-y-8">
              {firms.map((firm) => (
                <div key={firm.anchor} id={firm.anchor} className="bg-card border border-border rounded-xl p-8 scroll-mt-24">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {firm.rank}
                        </span>
                        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                          {firm.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                          {firm.type}
                        </span>
                        <span>HQ: {firm.hq}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{firm.overview}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Key strengths</h4>
                    <ul className="grid md:grid-cols-2 gap-1.5">
                      {firm.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="comparison">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Primary Research vs Strategy Consulting: Choosing Your Model
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl" id="research-vs-consulting">
              <p>
                Global healthcare research firms fall into three categories: <strong className="text-foreground">full-service primary research</strong> (BioNixus, Kantar Health, Ipsos Healthcare), <strong className="text-foreground">data and analytics platforms</strong> (IQVIA), and <strong className="text-foreground">strategy consulting</strong> (McKinsey, L.E.K., Simon-Kucher).
              </p>
              <p>
                For pharmaceutical teams needing <strong className="text-foreground">custom primary evidence</strong> — physician surveys, KOL interviews, patient research, payer insight — full-service research firms deliver execution. Strategy consultants synthesise existing evidence into recommendations but typically partner with research firms for fieldwork.
              </p>
              <p>
                <strong className="text-foreground">BioNixus uniquely bridges both</strong>, combining hands-on primary research execution with strategic synthesis across 38 countries. This means pharma clients get evidence generation and commercial interpretation from a single partner — without the cost and coordination overhead of separate research and consulting engagements.
              </p>
              <p>
                IQVIA dominates syndicated data. Simon-Kucher leads in pricing. Each firm has a sweet spot. The optimal model often combines a primary research partner (BioNixus) with data subscriptions (IQVIA) and selective strategy consulting where needed.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Methodology & Selection Criteria
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This guide profiles healthcare market research companies with demonstrated global pharmaceutical research capability as of 2026. Selection criteria: (1) active global operations, (2) pharmaceutical and healthcare research as a primary offering, (3) identifiable client engagements and track record. Firms ordered by full-service primary research capability.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Maintained by Haidy Yahia. BioNixus is profiled and transparent about its inclusion. For corrections,{' '}
                <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <div key={faq.q} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to: '/insights/top-pharmaceutical-analytics-companies-worldwide-2026', label: 'Top Pharmaceutical Analytics Companies Worldwide', desc: 'Global pharma analytics firms ranked for data, research, and consulting.' },
                { to: '/insights/best-global-market-research-companies-pharma-2026', label: 'Best Global Market Research Companies for Pharma', desc: 'Comparison guide for pharmaceutical market research providers.' },
                { to: '/insights/top-market-research-companies-gcc-2026', label: 'Top Market Research Companies in GCC', desc: 'Regional guide to Gulf Cooperation Council research firms.' },
                { to: '/insights/top-pharma-market-research-companies-middle-east-2026', label: 'Top Pharma Market Research Companies in the Middle East', desc: 'Middle East pharmaceutical market research specialists.' },
                { to: '/insights/top-market-research-companies-saudi-arabia-2026', label: 'Top Market Research Companies in Saudi Arabia', desc: 'Saudi-specific guide with SFDA and NUPCO context.' },
                { to: '/insights/top-market-research-companies-uae-2026', label: 'Top Market Research Companies in UAE', desc: 'UAE research firms compared for healthcare and pharma.' },
                { to: '/insights/top-market-research-companies-brazil-2026', label: 'Top Market Research Companies in Brazil', desc: 'LATAM pharma research guide with ANVISA context.' },
                { to: '/healthcare-market-research', label: 'Healthcare Market Research Hub', desc: 'Full portfolio of BioNixus healthcare research capabilities.' },
                { to: '/contact', label: 'Request a Proposal', desc: 'Scope a custom pharmaceutical research engagement.' },
              ].map((r) => (
                <Link key={r.to} to={r.to} className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-foreground mb-1">{r.label}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Scope Global Healthcare Market Research with BioNixus
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus delivers custom pharmaceutical and healthcare research across 38 countries — physician surveys, KOL mapping, HEOR, market access strategy, competitive intelligence, and brand health tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors">
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/strategic-portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors">
                View Strategic Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
