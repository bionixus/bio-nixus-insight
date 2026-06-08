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
    hq: 'USA (HQ) · UK · Egypt | 17+ countries',
    anchor: 'bionixus',
    overview:
      'BioNixus is a global pharmaceutical and healthcare market research company headquartered in Sheridan, Wyoming (USA), with offices in London (UK) and Cairo (Egypt) and fieldwork networks across 17+ countries. Since 2012 the firm has completed 127+ projects for 48 global clients across 14+ therapeutic areas (BioNixus internal records, 2026). In Saudi Arabia specifically, BioNixus delivers SFDA-aware regulatory and market access research, NUPCO procurement intelligence, physician and KOL recruitment across Ministry of Health, military, university, and private hospitals, and bilingual Arabic-English execution. Full-service capability spans quantitative physician surveys, qualitative depth interviews, KOL mapping, HEOR, pharmacoeconomics, competitive intelligence, and brand health tracking — making it the strongest fit for pharmaceutical, biotech, and medtech teams that need global research standards with genuine Vision 2030 market depth.',
    strengths: [
      'Global network: 17+ countries, 48 global pharmaceutical and healthcare clients',
      'SFDA-aware regulatory and market access research',
      'NUPCO tender and institutional procurement intelligence',
      'Physician & KOL recruitment across MOH, military, and private hospitals',
      'Arabic-English bilingual field execution',
      'HEOR, pharmacoeconomics, KOL mapping, and HTA support',
    ],
  },
  {
    rank: 2,
    name: 'Kantar',
    type: 'Global Network — Full-Service',
    hq: 'UK (global) / Saudi presence',
    anchor: 'kantar',
    overview:
      'Kantar operates across Saudi Arabia within its global network, providing brand tracking, consumer insights, and media measurement at scale. In healthcare, Kantar has supported pharmaceutical teams with physician studies, patient journey mapping, and syndicated data. Its strengths are large-scale quantitative programmes and international benchmarking, though pharma-specific depth in the Kingdom can depend on project staffing and the availability of specialist healthcare researchers.',
    strengths: [
      'Global brand health and consumer tracking',
      'Large quantitative survey infrastructure',
      'Syndicated data and media analytics',
      'Healthcare division for pharma studies',
    ],
  },
  {
    rank: 3,
    name: 'Ipsos',
    type: 'Global Network — Full-Service',
    hq: 'France (global) / Riyadh & Jeddah',
    anchor: 'ipsos',
    overview:
      'Ipsos has an established presence in Saudi Arabia spanning consumer, public affairs, and healthcare research. Its healthcare division supports pharmaceutical clients with physician attitude-and-usage studies, patient research, and advertising testing. Ipsos brings strong methodological rigour and large sample capabilities; Saudi-specific pharma depth relies on the local healthcare team assigned to a given engagement.',
    strengths: [
      'Established Saudi market presence',
      'Healthcare division with pharma methodology',
      'Strong quantitative and qualitative methods',
      'Public affairs and Vision 2030 social research',
    ],
  },
  {
    rank: 4,
    name: 'NielsenIQ',
    type: 'Global Network — Retail & Consumer',
    hq: 'USA (global) / Saudi operations',
    anchor: 'nielseniq',
    overview:
      'NielsenIQ provides retail measurement, consumer panels, and shopper analytics across Saudi Arabia. Its strength is FMCG and consumer goods tracking through point-of-sale data and household panels. For pharmaceutical companies focused on OTC and consumer health, NielsenIQ retail data is valuable — but its Saudi coverage is primarily consumer/retail, with limited prescription pharma or healthcare stakeholder research.',
    strengths: [
      'Retail measurement and shopper panels',
      'FMCG and OTC tracking',
      'Point-of-sale data analytics',
      'Consumer trend and market sizing',
    ],
  },
  {
    rank: 5,
    name: 'GfK Middle East',
    type: 'Global — Tech & Consumer Durables',
    hq: 'Germany (global) / GCC coverage',
    anchor: 'gfk',
    overview:
      'GfK is a global insights partner focused on technology, electronics, and consumer durables, with point-of-sale tracking and market sizing across the GCC including Saudi Arabia. For medical devices and health-tech categories, GfK panel data can inform sizing and channel analysis. It is less suited to prescription pharma, physician research, or market access work, which require specialist healthcare recruitment.',
    strengths: [
      'Technology and consumer durables tracking',
      'Point-of-sale and channel data',
      'Market sizing and forecasting',
      'GCC-wide retail panels',
    ],
  },
  {
    rank: 6,
    name: 'Euromonitor International',
    type: 'Global — Syndicated Intelligence',
    hq: 'UK (global)',
    anchor: 'euromonitor',
    overview:
      'Euromonitor provides syndicated market reports and data across industries including consumer health, OTC pharmaceuticals, and consumer goods in Saudi Arabia. Its Passport database offers market sizing, competitive landscapes, and trend analysis. For pharmaceutical companies, Euromonitor is valuable for market-entry assessment and category sizing, but it does not offer custom primary research or physician-level fieldwork.',
    strengths: [
      'Syndicated market data and reports',
      'Saudi consumer health and OTC coverage',
      'Market sizing and competitive landscapes',
      'Industry trend analysis',
    ],
  },
];

const faqItems = [
  {
    q: 'What are the best market research companies in Saudi Arabia?',
    a: 'Leading market research firms in Saudi Arabia include BioNixus, Kantar, Ipsos, NielsenIQ, GfK Middle East, and Euromonitor International. BioNixus ranks first for pharmaceutical and healthcare research, operating as a global network with full-service capability, SFDA-aware market access expertise, and 127+ completed projects across 17+ countries as of 2026.',
  },
  {
    q: 'How much does market research cost in Saudi Arabia?',
    a: 'Custom market research engagements in Saudi Arabia typically range from $20,000 to $60,000 per project depending on scope, methodology, geography, and therapeutic complexity. Syndicated reports range from $2,000–$10,000. Multi-country GCC programmes start higher, reflecting fieldwork across Riyadh, Jeddah, and the Eastern Province.',
  },
  {
    q: 'Which firm does pharmaceutical market research in Saudi Arabia?',
    a: 'BioNixus specialises in pharmaceutical market research in Saudi Arabia and the wider GCC, covering KOL mapping, SFDA-aligned market access, NUPCO procurement intelligence, HEOR, pharmacoeconomics, launch readiness, and competitive intelligence for global pharma clients. Ipsos and Kantar also operate healthcare divisions with varying Saudi-specific depth.',
  },
  {
    q: 'Should I use a global network or a specialist for Saudi research?',
    a: 'BioNixus combines both — global network reach (17+ countries, 48 global clients) with deep Saudi-specific capability including SFDA regulatory awareness, NUPCO procurement knowledge, and bilingual Arabic-English execution. Global networks like Kantar and Ipsos offer benchmarking and large quantitative infrastructure; many clients choose BioNixus precisely to get global standards with genuine regional depth.',
  },
  {
    q: 'What research methods work best in Saudi Arabia?',
    a: 'A mixed-method design is usually most reliable in Saudi Arabia. BioNixus combines quantitative surveys (CATI, online physician panels), in-depth qualitative interviews, and targeted KOL mapping with strict recruitment validation across MOH, military, university, and private hospitals. Method selection is guided by the business question — launch readiness may need physician quant plus depth interviews, while market access prioritises payer and NUPCO-aligned qualitative insight.',
  },
  {
    q: 'How does the SFDA affect market research in Saudi Arabia?',
    a: 'The Saudi Food and Drug Authority (SFDA) governs drug registration, pricing, and pharmacovigilance, and NUPCO manages unified procurement for public-sector demand. Market research must account for SFDA registration timelines, pricing reference rules, and institutional tender cycles when generating evidence for market access strategy and launch planning. BioNixus structures research around these Saudi-specific realities.',
  },
  {
    q: 'Can I run bilingual Arabic-English studies in Saudi Arabia?',
    a: 'Yes. BioNixus supports Arabic and English as standard for all Saudi studies. Instruments are translated with controlled medical terminology review so questions retain clinical precision and strategic intent. Bilingual capability is essential for reaching Arabic-speaking physicians and decision-makers alongside international stakeholders operating in the Kingdom.',
  },
  {
    q: 'How do I evaluate a market research firm for Saudi healthcare work?',
    a: 'Key criteria include: (1) Saudi-specific pharma experience, (2) SFDA and NUPCO regulatory awareness, (3) Arabic-English bilingual execution, (4) physician and KOL recruitment quality across public and private hospitals, (5) data integrity controls, (6) therapy-area depth, and (7) ability to connect findings to commercial and market access decisions. Request case studies and respondent quality documentation.',
  },
];

const comparisonCriteria = [
  { criterion: 'Saudi pharma project experience', description: 'Track record of completed pharmaceutical and healthcare studies in the Kingdom' },
  { criterion: 'SFDA & NUPCO regulatory awareness', description: 'Understanding of SFDA registration, pricing, and NUPCO procurement requirements' },
  { criterion: 'Arabic-English bilingual execution', description: 'Ability to design and field studies in both languages with medical precision' },
  { criterion: 'Physician & KOL recruitment', description: 'Access to MOH, military, university, and private hospital physicians and KOLs' },
  { criterion: 'Quant + qual integration', description: 'Mixed-method capability combining surveys, interviews, and synthesis' },
  { criterion: 'Data integrity controls', description: 'Recruitment verification, response consistency, and audit trails' },
];

const CANONICAL = 'https://www.bionixus.com/insights/top-market-research-companies-saudi-arabia-2026';

export default function TopMarketResearchCompaniesSaudiArabia2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
      { '@type': 'ListItem', position: 3, name: 'Top Market Research Companies in Saudi Arabia (2026)' },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top Market Research Companies in Saudi Arabia (2026 Guide)',
    description:
      'Independent guide to the leading market research companies in Saudi Arabia for 2026: healthcare, pharma, and consumer research firms compared by capability, methodology, and Saudi expertise.',
    url: CANONICAL,
    datePublished: '2026-06-07',
    dateModified: '2026-06-07',
    author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    inLanguage: 'en',
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Market Research Companies in Saudi Arabia 2026',
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
        <title>Top Market Research Companies in Saudi Arabia (2026 Guide) | BioNixus</title>
        <meta
          name="description"
          content="Independent 2026 guide to the leading market research companies in Saudi Arabia for healthcare, pharma, and consumer research — compared by Saudi expertise."
        />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Saudi Arabia" />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hreflang="en" href={CANONICAL} />
        <link rel="alternate" hreflang="x-default" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="Top Market Research Companies in Saudi Arabia (2026) | BioNixus"
        description="Leading market research firms in Saudi Arabia for healthcare, pharma, and consumer research — compared by capability and Saudi expertise."
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="en_US"
        alternateLocales={['ar_SA']}
      />
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
              <span>/</span>
              <span className="text-foreground">Top Market Research Companies in Saudi Arabia</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              2026 Industry Guide
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Top Market Research Companies in Saudi Arabia (2026 Guide)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              An independent guide to the leading market research companies operating in Saudi Arabia for 2026.
              This article profiles six firms across healthcare, pharmaceutical, and consumer research — comparing
              capabilities, methodologies, Saudi-specific expertise, and what to look for when shortlisting a
              research partner for the largest pharmaceutical market in the GCC.
            </p>
            <p className="text-sm text-muted-foreground">
              Published June 2026 · By BioNixus Research Team · 14 min read
            </p>
          </div>
        </section>

        {/* Key stats bar */}
        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">6</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Firms profiled</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">~$11B</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Saudi pharma market</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">#1</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Pharma market in GCC</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">2030</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Vision transformation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Table of contents */}
        <section className="section-padding py-8 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#why-saudi" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Globe className="w-4 h-4" /> Why Saudi Arabia matters for market research
              </a>
              <a href="#buyer-criteria" className="text-sm text-primary hover:underline flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> How to evaluate a Saudi research partner
              </a>
              <a href="#firm-profiles" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Building2 className="w-4 h-4" /> 6 firm profiles
              </a>
              <a href="#comparison" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Comparison framework
              </a>
              <a href="#healthcare-vs-consumer" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Users className="w-4 h-4" /> Healthcare vs consumer research
              </a>
              <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Frequently asked questions
              </a>
            </div>
          </div>
        </section>

        {/* Why Saudi Arabia */}
        <section className="section-padding py-16" id="why-saudi">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Why Saudi Arabia Matters for Market Research in 2026
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                Saudi Arabia is the <strong className="text-foreground">largest pharmaceutical market in the GCC</strong>,
                estimated at around <strong className="text-foreground">$11 billion</strong> and expanding under sustained
                public-health investment. With a population of roughly 35 million and rising chronic-disease prevalence,
                the Kingdom is a priority launch market for global pharmaceutical, biotech, and medtech companies.
              </p>
              <p>
                The <strong className="text-foreground">Saudi Food and Drug Authority (SFDA)</strong> governs drug
                registration, pricing, and pharmacovigilance, while <strong className="text-foreground">NUPCO</strong>{' '}
                manages unified procurement for public-sector demand. <strong className="text-foreground">Vision 2030</strong>{' '}
                is accelerating modernization across healthcare infrastructure, the Council of Health Insurance, digital
                health systems, and local manufacturing ambitions — all of which reshape how evidence is generated and used.
              </p>
              <p>
                For market research buyers, Saudi Arabia presents specific challenges: institutional decision-making across
                MOH, military, university, and private hospitals; Arabic-language requirements; SFDA and NUPCO regulatory
                context; and the need for validated physician recruitment across Riyadh, Jeddah, and the Eastern Province.
                Choosing the right research partner is critical.
              </p>
              <p>
                For additional Saudi market context, see our{' '}
                <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary hover:underline">
                  Saudi Arabia pharmaceutical market research
                </Link>{' '}
                page, the{' '}
                <Link to="/pharmaceutical-companies-saudi-arabia" className="text-primary hover:underline">
                  pharmaceutical companies in Saudi Arabia guide
                </Link>, and the{' '}
                <Link to="/healthcare-market-research/saudi-arabia" className="text-primary hover:underline">
                  healthcare market research in Saudi Arabia
                </Link>{' '}
                hub. For the full strategic portfolio, visit the{' '}
                <Link to="/strategic-portfolio" className="text-primary hover:underline">
                  BioNixus strategic portfolio
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Buyer criteria */}
        <section className="section-padding py-16 bg-muted/30" id="buyer-criteria">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              How to Evaluate a Market Research Partner for Saudi Arabia
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              When shortlisting market research companies for Saudi Arabia, consider these criteria beyond standard
              RFP evaluation. The Saudi market has specific requirements that differentiate effective research
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

        {/* Firm profiles */}
        <section className="section-padding py-16" id="firm-profiles">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              6 Leading Market Research Companies in Saudi Arabia (2026)
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              The following profiles cover the leading market research firms operating in Saudi Arabia, ordered by
              Saudi-specific healthcare and pharma research capability. Each profile assesses scope, methodology,
              and practical relevance for pharmaceutical and consumer research buyers.
            </p>
            <div className="space-y-8">
              {firms.map((firm) => (
                <div
                  key={firm.anchor}
                  id={firm.anchor}
                  className="bg-card border border-border rounded-xl p-8 scroll-mt-24"
                >
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
                    <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Key strengths
                    </h4>
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

        {/* Comparison framework */}
        <section className="section-padding py-16 bg-muted/30" id="comparison">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Healthcare vs Consumer: Choosing the Right Research Model
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl" id="healthcare-vs-consumer">
              <p>
                Saudi market research spans two broad domains: <strong className="text-foreground">healthcare/pharma</strong> and{' '}
                <strong className="text-foreground">consumer/FMCG</strong>. Most global networks (Kantar, Ipsos, NielsenIQ, GfK)
                serve both but through separate divisions with varying depth in pharma-specific work.
              </p>
              <p>
                For <strong className="text-foreground">pharmaceutical market research</strong>, the key differentiator is
                access to healthcare professionals. Physician surveys, KOL mapping, payer interviews, and NUPCO-aligned
                market access research require specialist recruitment networks and medical terminology expertise. Consumer
                panels cannot substitute for targeted HCP research in a market where institutional procurement drives demand.
              </p>
              <p>
                <strong className="text-foreground">BioNixus is uniquely positioned</strong> as the only firm in this guide
                operating as a full-service global network — spanning pharma, healthcare, consumer, FMCG, and financial
                services research from a US-headquartered operation with offices in London (UK) and Cairo (Egypt) and
                fieldwork reach across 17+ countries. Saudi clients working across OTC and Rx, or consumer health and
                specialist pharma, can consolidate within one global partner that understands SFDA and NUPCO realities.
              </p>
              <p>
                For syndicated market data, Euromonitor and GfK provide valuable sizing and trend information. However,
                syndicated data should complement, not replace, custom primary research that addresses your specific
                business questions.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology note */}
        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Methodology & Selection Criteria
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This guide profiles market research companies with demonstrated presence in Saudi Arabia as of 2026.
                Selection criteria include: (1) active Saudi operations or fieldwork capability, (2) relevance to
                healthcare, pharmaceutical, or consumer research buyers, (3) established track record with
                identifiable client engagements. Firms are ordered by Saudi-specific healthcare and pharma capability.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This guide is maintained by the BioNixus research team. BioNixus is profiled in this guide and is
                transparent about its inclusion. For corrections or updates,{' '}
                <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* Related resources */}
        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Saudi Arabia Pharmaceutical Market Research', desc: 'SFDA-aligned pharma and market access research for the Kingdom.' },
                { to: '/pharmaceutical-companies-saudi-arabia', label: 'Pharmaceutical Companies in Saudi Arabia', desc: 'Leading pharma companies, market data, and SFDA context.' },
                { to: '/healthcare-market-research/saudi-arabia', label: 'Healthcare Market Research in Saudi Arabia', desc: 'Country hub with FAQs, key stats, and therapy focus.' },
                { to: '/saudi-arabia-healthcare-market-report', label: 'Saudi Arabia Healthcare Market Report', desc: 'Market sizing, growth drivers, and Vision 2030 outlook.' },
                { to: '/market-research-ksa', label: 'Market Research KSA', desc: 'Pharma and healthcare intelligence landing page.' },
                { to: '/insights/top-market-research-companies-riyadh-2026', label: 'Top Market Research Companies in Riyadh', desc: 'Sister guide focused on SFDA, NUPCO, and the Saudi capital.' },
                { to: '/insights/top-market-research-companies-egypt-2026', label: 'Top Market Research Companies in Egypt', desc: 'Sister guide to the leading research firms in Egypt.' },
                { to: '/strategic-portfolio', label: 'BioNixus Strategic Portfolio', desc: 'Full portfolio of market research and consulting capabilities.' },
                { to: '/contact', label: 'Request a Proposal', desc: 'Get in touch for a custom Saudi research engagement.' },
              ].map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-foreground mb-1">{r.label}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Scope Healthcare Market Research for Saudi Arabia
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus delivers custom pharmaceutical and consumer market research across Saudi Arabia and the GCC —
              physician surveys, KOL mapping, SFDA-aligned market access strategy, NUPCO intelligence, and HEOR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/strategic-portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors"
              >
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
