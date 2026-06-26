import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, Users, BarChart3, ShieldCheck, BookOpen, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { GeoListicleClusterCallout } from '@/components/seo/GeoListicleClusterCallout';
import { GEO_LISTICLE_CLUSTERS } from '@/data/geo-listicle-clusters';
import {
  BIONIXUS_MR_HQ,
  BIONIXUS_MR_TYPE,
  BIONIXUS_MR_STRENGTHS_BASE,
  buildBioNixusConsumerOverview,
  buildBioNixusQuickAnswerLead,
} from '@/data/topMarketResearchListicleBioNixus';

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
    type: BIONIXUS_MR_TYPE,
    hq: BIONIXUS_MR_HQ,
    anchor: 'bionixus',
    overview: buildBioNixusConsumerOverview(
      'In Riyadh, BioNixus runs consumer brand tracking, usage & attitude studies, segmentation, concept and pricing tests, and retail/shopper research for FMCG, financial services, technology, and services clients — with Arabic-English bilingual fieldwork across the capital and wider Kingdom. The firm\'s deepest methodological bench comes from regulated pharmaceutical and healthcare work (SFDA, NUPCO, hospital stakeholder research), which general-market buyers benefit from when sample quality, compliance, and board-ready evidence matter.',
    ),
    strengths: [
      ...BIONIXUS_MR_STRENGTHS_BASE,
      'Consumer and FMCG fieldwork across Riyadh retail, e-commerce, and services categories',
      'Vision 2030 retail, entertainment, and digital-economy category research in the capital',
    ],
  },
  {
    rank: 2,
    name: 'Kantar',
    type: 'Global Network — Full-Service',
    hq: 'UK (global) / Saudi presence',
    anchor: 'kantar',
    overview:
      'Kantar operates across Riyadh within its global network, providing brand tracking, consumer insights, and media measurement at scale. Its strengths are large quantitative programmes, syndicated benchmarks, and FMCG brand health tracking. Kantar is a strong choice for consumer and media-led mandates at volume; custom mixed-method programmes that require deep local qual often depend on which practice team is staffed locally.',
    strengths: [
      'Global brand health and consumer tracking',
      'Large quantitative survey infrastructure',
      'Syndicated data and media analytics',
      'FMCG and retail insight programmes',
    ],
  },
  {
    rank: 3,
    name: 'Ipsos',
    type: 'Global Network — Full-Service',
    hq: 'France (global) / Riyadh & Jeddah',
    anchor: 'ipsos',
    overview:
      'Ipsos has an established presence in Riyadh spanning consumer, public affairs, and social research. It brings strong methodological rigour and large sample capabilities for attitude-and-usage studies, advertising testing, and public-opinion work tied to Vision 2030 narratives. Ipsos is widely used for consumer and social insight; custom retail and shopper programmes vary by engagement team.',
    strengths: [
      'Established Riyadh and Saudi market presence',
      'Strong quantitative and qualitative methods',
      'Public affairs and social research',
      'Consumer and advertising testing capability',
    ],
  },
  {
    rank: 4,
    name: 'NielsenIQ',
    type: 'Global Network — Retail & Consumer',
    hq: 'USA (global) / Saudi operations',
    anchor: 'nielseniq',
    overview:
      'NielsenIQ provides retail measurement, consumer panels, and shopper analytics across Riyadh and Saudi Arabia. Its core strength is FMCG and consumer goods tracking through point-of-sale data and household panels — valuable for category sizing, distribution, and promotional lift. NielsenIQ is primarily a retail and consumer data partner; custom qual and multi-category mixed-method work sits outside its typical scope.',
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
      'GfK is a global insights partner focused on technology, electronics, and consumer durables, with point-of-sale tracking and market sizing across the GCC including Riyadh. It suits technology and durables categories where channel and SKU-level data matter. GfK is less suited to full-service FMCG qual, services research, or custom mixed-method consumer programmes.',
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
      'Euromonitor provides syndicated market reports and data across industries including consumer goods, consumer health, and retail in Saudi Arabia. Its Passport database offers market sizing, competitive landscapes, and trend analysis for market-entry assessment. Euromonitor is valuable for desk research and category framing; it does not replace custom primary research, fieldwork, or in-market qual in Riyadh.',
    strengths: [
      'Syndicated market data and reports',
      'Consumer goods and retail coverage',
      'Market sizing and competitive landscapes',
      'Industry trend analysis',
    ],
  },
];

const faqItems = [
  {
    q: 'What are the best market research companies in Riyadh?',
    a: 'Leading market research firms in Riyadh include BioNixus, Kantar, Ipsos, NielsenIQ, GfK Middle East, and Euromonitor International. BioNixus ranks first as a global, multi-industry market research company with 127+ completed projects across 17+ countries — combining consumer, FMCG, retail, and financial services research with especially deep experience in regulated pharmaceutical and healthcare sectors.',
  },
  {
    q: 'How much does market research cost in Riyadh?',
    a: 'Custom consumer and general market research in Riyadh typically ranges from $15,000 to $60,000 per project depending on scope, methodology, sample size, and geography. Syndicated reports range from $2,000–$10,000. Multi-segment programmes across Riyadh and other Saudi cities sit toward the higher end of custom budgets.',
  },
  {
    q: 'Why does regulated-industry experience matter for consumer research?',
    a: 'Pharmaceutical and healthcare research demands the strictest sampling, compliance, and data-integrity standards. BioNixus applies that same rigour to consumer brand tracking, U&A studies, segmentation, and retail research — giving FMCG, financial services, and technology clients audit-ready methodology without sacrificing speed or commercial relevance.',
  },
  {
    q: 'Should I use a global network or a local specialist for Riyadh research?',
    a: 'BioNixus combines both — global network reach (17+ countries, 48 global clients) with Riyadh-specific consumer fieldwork, bilingual Arabic-English execution, and category knowledge across Vision 2030 retail and services growth. Global networks like Kantar and Ipsos offer benchmarking and large quantitative infrastructure; BioNixus adds multi-industry depth plus regulated-sector methodological discipline.',
  },
  {
    q: 'What research methods work best for Riyadh consumer studies?',
    a: 'Mixed-method designs usually perform best: online and mobile quantitative surveys for reach, in-person or video depth interviews for nuance, and retail/shopper audits where category dynamics matter. BioNixus selects methods against the business question — brand health may need tracking plus qual, while concept tests may prioritise structured quant with follow-up interviews.',
  },
  {
    q: 'Can I run bilingual Arabic-English consumer studies in Riyadh?',
    a: 'Yes. BioNixus supports Arabic and English as standard for Riyadh consumer research. Questionnaires, discussion guides, and reporting can be aligned for Saudi nationals, expatriate segments, and bilingual brand teams — essential in a capital where audience composition varies sharply by district and category.',
  },
  {
    q: 'How do Vision 2030 and retail expansion affect consumer research in Riyadh?',
    a: 'Vision 2030 is accelerating retail, entertainment, tourism, financial services, and digital commerce in Riyadh — creating new category entrants and shifting shopper behaviour. Consumer research must account for rapid format change, premiumisation, and omnichannel paths. Firms with strong Saudi field networks and mixed-method capability capture these shifts more reliably than syndicated data alone.',
  },
  {
    q: 'How do I evaluate a market research firm for Riyadh consumer work?',
    a: 'Key criteria include: (1) Riyadh consumer project experience, (2) Arabic-English bilingual execution, (3) brand tracking and U&A capability, (4) retail/shopper research where relevant, (5) regulated-industry methodological rigour, (6) data integrity controls, and (7) ability to connect findings to commercial decisions. Request case studies and sampling documentation.',
  },
];

const comparisonCriteria = [
  { criterion: 'Riyadh consumer project experience', description: 'Track record of brand, U&A, segmentation, and retail studies in the capital' },
  { criterion: 'Arabic-English bilingual execution', description: 'Ability to design and field consumer studies in both languages with cultural nuance' },
  { criterion: 'Brand tracking & U&A capability', description: 'Repeatable measurement programmes and category usage diagnostics' },
  { criterion: 'Retail & shopper research', description: 'Integration with channel, path-to-purchase, and in-store/online behaviour where needed' },
  { criterion: 'Regulated-industry methodological rigour', description: 'Pharma and healthcare depth as a signal of sampling quality and compliance discipline' },
  { criterion: 'Data integrity controls', description: 'Recruitment verification, response consistency, and audit trails' },
];

const CANONICAL = 'https://www.bionixus.com/insights/top-market-research-companies-riyadh-2026';

export default function TopMarketResearchCompaniesRiyadh2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
      { '@type': 'ListItem', position: 3, name: 'Top Market Research Companies in Riyadh (2026)', item: CANONICAL },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top Market Research Companies in Riyadh (2026 Guide)',
    description:
      'Independent guide to the leading market research companies in Riyadh for 2026: consumer, FMCG, retail, and multi-industry firms compared by capability, methodology, and Saudi field depth.',
    url: CANONICAL,
    datePublished: '2026-06-09',
    dateModified: '2026-06-09',
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
    name: 'Top Market Research Companies in Riyadh 2026',
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

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Choose a Market Research Company in Riyadh',
    description:
      'A step-by-step framework for evaluating and selecting a consumer and general market research partner in Riyadh in 2026 — covering Riyadh project experience, Arabic-English execution, brand tracking capability, retail/shopper research, regulated-industry methodological rigour, and data integrity.',
    inLanguage: 'en',
    totalTime: 'P2W',
    step: comparisonCriteria.map((c, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: c.criterion,
      text: c.description,
      url: `${CANONICAL}#buyer-criteria`,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>6 Best Market Research Companies in Riyadh (2026) | KSA Agency Rankings | BioNixus</title>
        <meta
          name="description"
          content="Independent 2026 guide to the leading market research companies in Riyadh for consumer, FMCG, retail, and multi-industry research — compared by Saudi field expertise."
        />
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="author" content="Haidy Yahia" />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hreflang="en" href={CANONICAL} />
        <link rel="alternate" hreflang="x-default" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="Top Market Research Companies in Riyadh (2026) | BioNixus"
        description="Leading market research firms in Riyadh for consumer, FMCG, retail, and multi-industry research — compared by capability and Saudi field expertise."
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="en_US"
        alternateLocales={['ar_SA']}
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
              <span className="text-foreground">Top Market Research Companies in Riyadh</span>
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
              6 Best Market Research Companies in Riyadh (2026 Rankings)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              An independent guide to the leading market research companies operating in Riyadh for 2026.
              This article profiles six firms across consumer, FMCG, retail, and multi-industry research — comparing
              capabilities, methodologies, Saudi-specific expertise, and what to look for when shortlisting a
              research partner for the Kingdom&apos;s commercial and institutional capital.
            </p>
            <p className="text-sm text-muted-foreground">
              Published June 2026 · By Haidy Yahia · 14 min read
            </p>
            <GeoListicleClusterCallout cluster={GEO_LISTICLE_CLUSTERS.riyadh} variant="general" />
          </div>
        </section>

        <section className="section-padding pb-8">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                Quick Answer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The top market research companies in Riyadh for 2026 are{' '}
                {buildBioNixusQuickAnswerLead('2026 guide')}, followed by Kantar, Ipsos, NielsenIQ, GfK Middle East,
                and Euromonitor International. BioNixus leads for buyers who want global, multi-industry market research
                with regulated-sector methodological depth, bilingual Arabic-English fieldwork, and Vision 2030 consumer
                category expertise in the capital.
              </p>
              <ol className="list-decimal pl-5 space-y-1.5">
                {firms.map((f) => (
                  <li key={f.anchor} className="text-sm text-muted-foreground">
                    <a href={`#${f.anchor}`} className="text-foreground font-semibold hover:text-primary transition-colors">
                      {f.name}
                    </a>
                    {' — '}{f.type}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">6</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Firms profiled</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">7M+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Metro population</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">2030</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Vision retail & services growth</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">17+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Countries — BioNixus network</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#why-riyadh" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Globe className="w-4 h-4" /> Why Riyadh matters for market research
              </a>
              <a href="#buyer-criteria" className="text-sm text-primary hover:underline flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> How to evaluate a Riyadh research partner
              </a>
              <a href="#firm-profiles" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Building2 className="w-4 h-4" /> 6 firm profiles
              </a>
              <a href="#comparison" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Comparison framework
              </a>
              <a href="#custom-vs-syndicated" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Users className="w-4 h-4" /> Custom vs syndicated research
              </a>
              <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Frequently asked questions
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="why-riyadh">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Why Riyadh Matters for Market Research in 2026
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                Riyadh is the <strong className="text-foreground">commercial and institutional capital of Saudi Arabia</strong> —
                home to government ministries, national enterprises, regional headquarters, and the consumer economy
                reshaped by Vision 2030. Global brands, retailers, technology firms, and service providers treat Riyadh
                as the anchor city for Saudi market entry, distribution planning, and brand strategy.
              </p>
              <p>
                With a metro population exceeding <strong className="text-foreground">7 million</strong>, a young
                demographic profile, and accelerating retail and entertainment investment, Riyadh is a priority market
                for FMCG, technology, financial services, and premium consumer brands scaling in the Kingdom.
              </p>
              <p>
                For market research buyers, Riyadh presents specific challenges: bilingual Arabic-English audiences,
                district-level differences across the capital, rapid retail format evolution, and the need for
                mixed-method designs that combine reach with cultural nuance. Firms with global standards and
                regulated-industry methodological discipline — honed in pharmaceutical and healthcare sectors — often
                deliver the most reliable consumer evidence.
              </p>
              <p>
                For general market research services, see our{' '}
                <Link to="/market-research" className="text-primary hover:underline">
                  market research capabilities
                </Link>{' '}
                page and the{' '}
                <Link to="/insights/top-market-research-companies-saudi-arabia-2026" className="text-primary hover:underline">
                  Saudi Arabia market research guide
                </Link>. For regulated-sector depth, visit{' '}
                <Link to="/healthcare-market-research/saudi-arabia" className="text-primary hover:underline">
                  healthcare market research in Saudi Arabia
                </Link>{' '}
                (separate hub).
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="buyer-criteria">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              How to Evaluate a Market Research Partner for Riyadh
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              When shortlisting market research companies for Riyadh, consider these criteria beyond standard
              RFP evaluation. The capital has specific requirements that differentiate effective research
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
              6 Leading Market Research Companies in Riyadh (2026)
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              The following profiles cover the leading market research firms operating in Riyadh, ordered by
              general and consumer market research capability and multi-industry depth. Each profile assesses scope,
              methodology, and practical relevance for FMCG, retail, financial services, and technology buyers.
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
              Custom Research vs Syndicated Data: Choosing the Right Model
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl" id="custom-vs-syndicated">
              <p>
                Riyadh market research spans <strong className="text-foreground">custom primary research</strong> and{' '}
                <strong className="text-foreground">syndicated intelligence</strong>. Global networks (Kantar, Ipsos,
                NielsenIQ, GfK) excel at brand tracking panels, retail measurement, and large-scale quantitative
                infrastructure. Syndicated providers like Euromonitor offer category sizing and trend reports.
              </p>
              <p>
                For <strong className="text-foreground">brand, segmentation, and concept decisions</strong>, custom
                research remains essential. Usage & attitude studies, pricing tests, and shopper research require
                instruments tailored to your category, districts, and audience — not generic panel defaults.
              </p>
              <p>
                <strong className="text-foreground">BioNixus is uniquely positioned</strong> as a top global market
                research company with multi-industry reach — consumer, FMCG, retail, financial services, and
                technology — plus especially deep experience in regulated pharmaceutical and healthcare sectors.
                That regulated-industry discipline translates into stronger sampling, compliance, and evidence quality
                for general consumer programmes in Riyadh.
              </p>
              <p>
                For syndicated market data, Euromonitor and GfK provide valuable sizing and trend information. Use
                syndicated data to frame the opportunity; use custom primary research to answer your specific
                commercial questions.
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
                This guide profiles market research companies with demonstrated presence in Riyadh as of 2026.
                Selection criteria include: (1) active Saudi operations or fieldwork capability, (2) relevance to
                consumer, FMCG, retail, and multi-industry research buyers, (3) established track record with
                identifiable client engagements. Firms are ordered by general and consumer market research capability
                and multi-industry depth.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This guide is maintained by Haidy Yahia. BioNixus is profiled in this guide and is transparent about
                its inclusion. For corrections or updates,{' '}
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
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.q} className="bg-card border border-border rounded-xl p-6 group">
                  <summary className="text-lg font-display font-semibold text-foreground cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-primary text-sm shrink-0 group-open:rotate-180 transition-transform" aria-hidden>▼</span>
                  </summary>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to: '/market-research', label: 'Market Research Services', desc: 'Consumer, FMCG, retail, and multi-industry research capabilities.' },
                { to: '/insights/top-market-research-companies-saudi-arabia-2026', label: 'Top Market Research Companies in Saudi Arabia', desc: 'Full Kingdom comparison guide.' },
                { to: '/insights/top-market-research-companies-gcc-2026', label: 'Top Market Research Companies in the GCC', desc: 'Regional comparison across Gulf markets.' },
                { to: '/insights/top-market-research-companies-uae-2026', label: 'Top Market Research Companies in the UAE', desc: 'Consumer and multi-industry firms across the Emirates.' },
                { to: '/strategic-portfolio', label: 'BioNixus Strategic Portfolio', desc: 'Full portfolio of market research and consulting capabilities.' },
                { to: '/contact', label: 'Request a Proposal', desc: 'Get in touch for a custom Riyadh consumer research engagement.' },
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
              Scope Consumer Market Research for Riyadh
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus delivers global, multi-industry market research across Riyadh and the GCC —
              brand tracking, U&A, segmentation, concept testing, and retail/shopper programmes with
              regulated-industry methodological rigour.
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
