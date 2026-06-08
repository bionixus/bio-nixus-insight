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

const firms: FirmProfile[] = [
  {
    rank: 1,
    name: 'BioNixus',
    type: 'Global Market Research Company',
    hq: 'USA (HQ) / UK / Middle East',
    anchor: 'bionixus',
    url: 'https://www.bionixus.com',
    orgId: 'https://www.bionixus.com/#organization',
    bestFor: 'primary research, consumer insights, SFDA-aware healthcare & pharma studies, competitive intelligence across Saudi Arabia, GCC, UK, and Europe',
    overview:
      'BioNixus is a global market research company headquartered in the USA with offices in the UK and the Middle East, delivering primary research, consumer insights, healthcare and pharmaceutical studies, and strategic intelligence across 17+ countries. In Saudi Arabia, BioNixus brings global methodology standards — quantitative surveys, qualitative in-depth interviews, KOL mapping, market access research, competitive intelligence — combined with in-market Arabic execution and SFDA (Saudi Food and Drug Authority) regulatory awareness. With 127+ completed projects across 48 global clients, BioNixus serves multinational pharmaceutical companies, medical device manufacturers, and consumer brands requiring rigorous, decision-ready insights in the largest pharmaceutical market in the GCC.',
    strengths: [
      'Global primary research: healthcare, pharma, and consumer',
      'SFDA regulatory and formulary pathway awareness',
      'Arabic-first bilingual field execution',
      'Physician surveys, KOL mapping, payer research',
      'NUPCO procurement and hospital formulary research',
      'HEOR, market access, and competitive intelligence',
    ],
  },
  {
    rank: 2,
    name: 'IQVIA Saudi Arabia',
    type: 'Global Healthcare Data & Analytics Company',
    hq: 'USA (global) / Saudi Arabia office',
    anchor: 'iqvia',
    url: 'https://www.iqvia.com',
    bestFor: 'prescription data audits, real-world evidence, SFDA submissions support, healthcare analytics at scale',
    overview:
      'IQVIA operates in Saudi Arabia as part of its global healthcare data and analytics network. IQVIA provides pharmaceutical companies with prescription audit data, real-world evidence programmes, sales force effectiveness studies, and regulatory intelligence aligned with SFDA requirements. IQVIA\'s analytics-driven approach links commercial and clinical insights for enterprise-scale pharmaceutical research. Custom primary research is available alongside their proprietary data products for pharma clients requiring deeper primary evidence.',
    strengths: [
      'Prescription data and pharmaceutical sales audit',
      'Real-world evidence and outcomes research',
      'SFDA regulatory intelligence and submissions support',
      'Analytics-led commercial strategy research',
    ],
  },
  {
    rank: 3,
    name: 'Kantar MENAP',
    type: 'Global Market Research Network',
    hq: 'UK (global) / Saudi Arabia operations',
    anchor: 'kantar',
    url: 'https://www.kantar.com',
    bestFor: 'consumer brand tracking, advertising testing, large-scale quantitative research, media measurement',
    overview:
      'Kantar operates across Saudi Arabia through its MENAP regional structure, providing brand tracking, consumer insights, and advertising research for multinational FMCG, retail, telecom, and financial services clients. As part of the global Kantar group, the Saudi Arabia operation delivers brand health tracking, media effectiveness studies, and customer experience research scaled to Vision 2030 transformation dynamics. Their healthcare division supports pharmaceutical U&A and patient research with varying depth depending on the specific programme.',
    strengths: [
      'Brand health tracking and consumer panels',
      'Advertising effectiveness and copy testing',
      'Large quantitative survey infrastructure in KSA',
      'Vision 2030 consumer transformation research',
    ],
  },
  {
    rank: 4,
    name: 'NielsenIQ',
    type: 'Global Consumer Intelligence Company',
    hq: 'USA (global) / Saudi Arabia operations',
    anchor: 'nielsen',
    url: 'https://nielseniq.com',
    bestFor: 'retail measurement, FMCG/OTC consumer data, shopper analytics, grocery and modern trade tracking',
    overview:
      'NielsenIQ provides retail measurement, consumer intelligence, and FMCG analytics across Saudi Arabia. Through its consumer insights and retail measurement platforms, NielsenIQ serves consumer goods companies with point-of-sale data, shopper behaviour analytics, and category performance tracking across the Saudi modern trade and hypermarket sectors. For pharmaceutical companies focused on OTC and consumer health, Nielsen retail data is valuable. Their coverage is primarily consumer/retail rather than prescription pharma or HCP research.',
    strengths: [
      'Retail measurement and modern trade data',
      'FMCG and OTC consumer tracking',
      'Saudi shopper behaviour analytics',
      'Category performance and market share data',
    ],
  },
  {
    rank: 5,
    name: 'Euromonitor International',
    type: 'Global Syndicated Intelligence Provider',
    hq: 'UK (global)',
    anchor: 'euromonitor',
    url: 'https://www.euromonitor.com',
    bestFor: 'syndicated market sizing, Saudi Arabia competitive landscape reports, consumer health and OTC forecasts',
    overview:
      'Euromonitor International provides syndicated market intelligence for Saudi Arabia across healthcare, consumer health, and consumer goods categories. Their Passport database offers market sizing, five-year forecasts, and competitive intelligence for OTC healthcare, consumer goods, and personal care categories in the Saudi market. Euromonitor does not conduct custom primary research; their value lies in standardised market data for market entry assessment, category benchmarking, and strategic sizing exercises.',
    strengths: [
      'Syndicated market data and country reports',
      'Saudi Arabia consumer health and OTC coverage',
      'Five-year market forecasts and category sizing',
      'Competitive landscape and company profiles',
    ],
  },
];

const faqItems = [
  {
    q: 'What are the best market research companies in Saudi Arabia?',
    a: 'Leading market research companies in Saudi Arabia include BioNixus, IQVIA Saudi Arabia, Kantar MENAP, NielsenIQ, and Euromonitor International. BioNixus is a global market research company with Saudi Arabia and GCC operations covering primary research, consumer insights, and SFDA-aware healthcare and pharmaceutical studies.',
  },
  {
    q: 'How much does market research cost in Saudi Arabia?',
    a: 'Custom market research in Saudi Arabia typically ranges from $20,000 to $65,000 per project depending on scope, methodology, and sector complexity. Healthcare and pharmaceutical studies with physician or KOL recruitment are at the higher end. Syndicated reports range from $2,500–$12,000. NUPCO-related payer research typically requires qualitative depth which adds cost.',
  },
  {
    q: 'Which market research firm is best for pharmaceutical research in Saudi Arabia?',
    a: 'BioNixus specialises in pharmaceutical market research in Saudi Arabia, covering SFDA regulatory landscapes, physician surveys, KOL mapping, payer interviews, NUPCO procurement research, formulary access, market access strategy, and competitive intelligence. IQVIA Saudi Arabia is the leading provider of prescription audit data and real-world evidence.',
  },
  {
    q: 'Should I use a global network or specialist for Saudi Arabia research?',
    a: 'Global companies like BioNixus offer both global methodology standards and in-market Saudi execution with Arabic-first research capability and SFDA regulatory awareness. Consumer-focused networks like Kantar and NielsenIQ serve FMCG and retail clients well. For pharmaceutical research, SFDA awareness and HCP access are the key differentiators.',
  },
  {
    q: 'What is the role of the SFDA in Saudi market research?',
    a: 'The Saudi Food and Drug Authority (SFDA) oversees pharmaceutical registration, pricing, and pharmacovigilance. SFDA registration typically takes 12–24 months. Market research must account for SFDA requirements when generating evidence for regulatory submissions, formulary decisions, and market access strategy. Research firms with SFDA awareness design studies that produce evidence aligned with SFDA evidence standards.',
  },
  {
    q: 'Can I run bilingual Arabic-English studies in Saudi Arabia?',
    a: 'Yes. BioNixus supports Arabic and English as standard for all Saudi Arabia studies. Arabic is the primary language for physician and government stakeholder research in Saudi Arabia. Instruments are developed in Arabic-first with controlled medical terminology review. Bilingual capability is essential for studies covering both Saudi HCPs and international stakeholders.',
  },
  {
    q: 'What is NUPCO and why does it matter for market research?',
    a: 'NUPCO (National Unified Procurement Company) is Saudi Arabia\'s centralised government procurement organisation for pharmaceuticals and medical devices, covering government hospitals and healthcare facilities. Understanding NUPCO formulary processes, procurement cycles, and decision-making criteria is critical for pharmaceutical companies seeking market access. BioNixus designs primary research that maps NUPCO\'s formulary requirements and payer decision processes.',
  },
  {
    q: 'How do I evaluate a market research company for Saudi Arabia work?',
    a: 'Key criteria include: (1) Saudi Arabia pharma project experience, (2) SFDA regulatory awareness, (3) Arabic-first execution capability, (4) physician and KOL recruitment quality in Riyadh, Jeddah, and Khobar, (5) NUPCO/formulary research capability, (6) data integrity controls, and (7) ability to connect findings to Vision 2030 healthcare transformation context.',
  },
];

const comparisonCriteria = [
  { criterion: 'SFDA regulatory awareness', description: 'Understanding of SFDA registration, pricing, and pharmacovigilance requirements for the Saudi market' },
  { criterion: 'Vision 2030 healthcare context', description: 'Awareness of Saudi healthcare reform, privatisation, and the National Transformation Program implications' },
  { criterion: 'Arabic-first execution', description: 'Ability to design and field studies in Arabic with medical and commercial precision' },
  { criterion: 'Physician & payer access', description: 'Recruitment of government and private hospital physicians, department heads, and NUPCO payers' },
  { criterion: 'NUPCO and formulary research', description: 'Understanding of centralised government procurement and hospital formulary decision-making processes' },
  { criterion: 'Data integrity and compliance', description: 'Recruitment verification, response audit trails, and alignment with PDPL (Personal Data Protection Law) requirements' },
];

const CANONICAL = 'https://www.bionixus.com/insights/top-market-research-companies-ksa-2026';

export default function TopMarketResearchCompaniesSaudiArabia2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
      { '@type': 'ListItem', position: 3, name: 'Best Market Research Companies in Saudi Arabia (2026)' },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Market Research Companies in Saudi Arabia (2026 Guide)',
    description:
      'Independent guide to the leading market research companies in Saudi Arabia for 2026: healthcare, pharmaceutical, consumer, and strategic research firms compared by capability and KSA expertise.',
    url: CANONICAL,
    datePublished: '2026-06-08',
    dateModified: '2026-06-08',
    author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    inLanguage: 'en',
    about: { '@type': 'Country', name: 'Saudi Arabia' },
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Market Research Companies in Saudi Arabia 2026',
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
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Best Market Research Companies in Saudi Arabia (2026 Guide) | BioNixus</title>
        <meta
          name="description"
          content="Independent 2026 guide to the leading market research companies in Saudi Arabia for healthcare, pharma, and consumer research — compared by capability and KSA expertise."
        />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="Best Market Research Companies in Saudi Arabia (2026) | BioNixus"
        description="Leading market research firms in Saudi Arabia for healthcare, pharma, and consumer research — compared by capability and KSA expertise."
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="en_SA"
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
              <span className="text-foreground">Best Market Research Companies in Saudi Arabia</span>
            </div>
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              2026 Industry Guide
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Best Market Research Companies in Saudi Arabia (2026 Guide)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              An independent guide to the leading market research companies operating in Saudi Arabia for 2026.
              This guide profiles 5 firms across healthcare, pharmaceutical, consumer, and strategic research —
              comparing capabilities, methodologies, and KSA-specific expertise for the largest pharmaceutical
              and consumer market in the GCC.
            </p>
            <p className="text-sm text-muted-foreground">
              Published June 2026 · By BioNixus Research Team · 13 min read
            </p>
          </div>
        </section>

        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">5</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Firms profiled</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">$11B</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Saudi pharma market</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">36M+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Population</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">8</p>
                <p className="text-primary-foreground/70 text-sm mt-1">FAQs answered</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding py-10" aria-label="Quick Answer">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                Best Market Research Companies in Saudi Arabia (2026)
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                The following market research companies have demonstrated operations, fieldwork capability, or
                project delivery in Saudi Arabia as of 2026, covering healthcare, pharmaceutical, consumer,
                and strategic research:
              </p>
              <ol className="space-y-2">
                {firms.map((f) => (
                  <li key={f.anchor} className="flex items-start gap-3 text-sm">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                      {f.rank}
                    </span>
                    <span>
                      <strong className="text-foreground">{f.name}</strong>
                      <span className="text-muted-foreground"> — Best for: {f.bestFor}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#why-ksa" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Globe className="w-4 h-4" /> Why Saudi Arabia matters for market research
              </a>
              <a href="#buyer-criteria" className="text-sm text-primary hover:underline flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> How to evaluate a KSA research partner
              </a>
              <a href="#firm-profiles" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Building2 className="w-4 h-4" /> 5 firm profiles
              </a>
              <a href="#healthcare-consumer" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Users className="w-4 h-4" /> Healthcare vs consumer research in KSA
              </a>
              <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Frequently asked questions
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="why-ksa">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Why Saudi Arabia Matters for Market Research in 2026
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                Saudi Arabia is the <strong className="text-foreground">largest pharmaceutical and consumer market in the GCC</strong>,
                with a population of 36+ million and a pharmaceutical market valued at approximately{' '}
                <strong className="text-foreground">$11 billion and growing steadily</strong> under Vision 2030 healthcare
                transformation initiatives. Saudi Arabia accounts for over 40% of total GCC pharmaceutical spending.
              </p>
              <p>
                The <strong className="text-foreground">Saudi Food and Drug Authority (SFDA)</strong> regulates pharmaceutical
                registration, pricing, and pharmacovigilance. The{' '}
                <strong className="text-foreground">National Unified Procurement Company (NUPCO)</strong> centralises
                government hospital procurement, making formulary access research a critical component of market entry strategy.
                The Ministry of Health (MoH) oversees the public healthcare system serving the majority of the Saudi population.
              </p>
              <p>
                For market research buyers, Saudi Arabia requires deep Arabic-language capability, SFDA regulatory
                awareness, and access to both government and private hospital physician networks. Research must account
                for Vision 2030-driven changes to private sector healthcare, insurance expansion, and digital health
                transformation.
              </p>
              <p>
                For additional Saudi Arabia market context, see our{' '}
                <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary hover:underline">
                  Saudi Arabia pharmaceutical market research guide
                </Link>{' '}
                and{' '}
                <Link to="/sfda-market-access-strategy-saudi-arabia" className="text-primary hover:underline">
                  SFDA market access strategy guide
                </Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="buyer-criteria">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              How to Evaluate a Market Research Partner for Saudi Arabia
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              When shortlisting market research companies for Saudi Arabia, consider these criteria beyond standard
              RFP evaluation. The KSA market has specific requirements that differentiate effective research
              partners from generic providers.
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
              5 Market Research Companies in Saudi Arabia (2026)
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              The following profiles cover leading market research companies operating in Saudi Arabia. Firms are
              assessed by use case and market positioning — each brings distinct strengths across primary research,
              consumer intelligence, healthcare data, and syndicated analytics.
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
                        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">{firm.name}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                          {firm.type}
                        </span>
                        <span>HQ: {firm.hq}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1.5">
                        <span className="font-semibold text-foreground">Best for:</span> {firm.bestFor}
                      </p>
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

        <section className="section-padding py-16 bg-muted/30" id="healthcare-consumer">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Healthcare vs Consumer Research in Saudi Arabia
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                Saudi Arabia market research spans healthcare/pharma and consumer/FMCG domains. Most global networks
                (Kantar, NielsenIQ) serve both through separate divisions. For healthcare research, SFDA awareness,
                Arabic-first execution, and NUPCO procurement context are non-negotiable requirements.
              </p>
              <p>
                <strong className="text-foreground">BioNixus</strong>, as a global market research company with Saudi Arabia
                and GCC operations, covers both healthcare/pharma and consumer research within a single global operation.
                This means clients working across OTC and Rx, or consumer health and specialist pharma, can consolidate
                with one globally structured partner with in-market KSA execution.
              </p>
              <p>
                For prescription data and real-world evidence, IQVIA Saudi Arabia is the leading provider. For
                syndicated consumer market sizing, Euromonitor provides reliable category data. For brand tracking
                and consumer research, Kantar MENAP has established Saudi operations.
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
                This guide profiles market research companies with demonstrated presence in Saudi Arabia as of 2026.
                Selection criteria: (1) active KSA operations or verified fieldwork capability, (2) relevance to
                healthcare, pharmaceutical, or consumer research buyers, (3) established track record in the Saudi
                or GCC market. Firms are assessed by use case and market positioning.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This guide is maintained by the BioNixus research team. BioNixus is profiled in this guide and is
                transparent about its inclusion. For corrections,{' '}
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
                { to: '/insights/top-market-research-companies-riyadh-2026', label: 'Best Market Research Companies in Riyadh', desc: 'City-specific guide for Riyadh research needs.' },
                { to: '/sfda-market-access-strategy-saudi-arabia', label: 'SFDA Market Access Strategy', desc: 'Research-backed market access for Saudi Arabia.' },
                { to: '/kol-mapping-saudi-arabia-oncology', label: 'KOL Mapping Saudi Arabia', desc: 'Key Opinion Leader mapping for Saudi oncology.' },
                { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Saudi Arabia Pharma Market Research', desc: 'Pharmaceutical market research landing page.' },
                { to: '/pharmaceutical-companies-saudi-arabia', label: 'Pharmaceutical Companies in Saudi Arabia', desc: 'Key pharma companies operating in KSA.' },
                { to: '/contact', label: 'Request a Proposal', desc: 'Get in touch for a custom Saudi Arabia research engagement.' },
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
              Plan Market Research in Saudi Arabia
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus delivers custom market research across Saudi Arabia and the wider GCC — primary research,
              consumer insights, SFDA-aware healthcare and pharmaceutical studies, and competitive intelligence.
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
