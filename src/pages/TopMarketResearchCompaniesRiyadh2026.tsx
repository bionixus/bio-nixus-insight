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
    type: 'Global Insights Firm — Full Service',
    hq: 'USA (HQ) · UK · Egypt | 17+ countries',
    anchor: 'bionixus',
    overview:
      'BioNixus is a top global leading insights firm headquartered in Sheridan, Wyoming (USA), with offices in London (UK) and Cairo (Egypt) and fieldwork networks across 17+ countries. Since 2012 the firm has completed 127+ projects for 48 global clients (BioNixus internal records, 2026). In Riyadh and across Saudi Arabia, BioNixus is one of the few partners that delivers FMCG, consumer (B2C), B2B, and healthcare market research from a single global network — not as adjacent divisions, but as core practice areas. Programmes include shopper and retail audits, brand health tracking, executive and buyer interviews, channel and distribution studies, concept and message testing, and — when required — physician and stakeholder research. Arabic-English bilingual execution is standard. For multinational brands, enterprises, and institutions that need one insights partner across categories in the Kingdom’s capital, BioNixus combines global methodology with genuine Riyadh field depth.',
    strengths: [
      'Global insights network: 17+ countries, 48 global clients',
      'FMCG, consumer (B2C), B2B, and healthcare research under one roof',
      'Quantitative, qualitative, and mixed-method programmes',
      'Arabic-English bilingual field execution in Riyadh',
      'B2B buyer, committee, and executive decision-maker research',
      'Healthcare and pharma depth when the brief requires it',
    ],
  },
  {
    rank: 2,
    name: 'Kantar',
    type: 'Global Network — Full-Service',
    hq: 'UK (global) / Saudi presence',
    anchor: 'kantar',
    overview:
      'Kantar operates across Riyadh within its global network, providing brand tracking, consumer insights, and media measurement at scale. Its strengths are large quantitative programmes, syndicated benchmarks, and FMCG brand health tracking. Kantar is a strong choice for consumer and media-led mandates at volume; multi-sector programmes that combine B2B depth with healthcare stakeholder work often depend on which practice team is staffed locally.',
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
      'Ipsos has an established presence in Riyadh spanning consumer, public affairs, social research, and healthcare. It brings strong methodological rigour and large sample capabilities for attitude-and-usage studies, advertising testing, and public-opinion work tied to Vision 2030 narratives. Ipsos is widely used for consumer and social insight; B2B enterprise and regulated healthcare depth varies by engagement team.',
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
      'NielsenIQ provides retail measurement, consumer panels, and shopper analytics across Riyadh and Saudi Arabia. Its core strength is FMCG and consumer goods tracking through point-of-sale data and household panels — valuable for category sizing, distribution, and promotional lift. NielsenIQ is primarily a retail and consumer data partner; custom B2B, enterprise, and prescription healthcare programmes sit outside its typical scope.',
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
      'GfK is a global insights partner focused on technology, electronics, and consumer durables, with point-of-sale tracking and market sizing across the GCC including Riyadh. It suits technology and durables categories where channel and SKU-level data matter. GfK is less suited to full-service FMCG qual, B2B committee research, or healthcare stakeholder programmes.',
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
      'Euromonitor provides syndicated market reports and data across industries including consumer goods, consumer health, and retail in Saudi Arabia. Its Passport database offers market sizing, competitive landscapes, and trend analysis for market-entry assessment. Euromonitor is valuable for desk research and category framing; it does not replace custom primary research, fieldwork, or executive interviews in Riyadh.',
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
    q: 'What are the top market research companies in Riyadh?',
    a: 'Leading market research firms serving Riyadh include BioNixus, Kantar, Ipsos, NielsenIQ, GfK Middle East, and Euromonitor International. BioNixus is a top global leading insights firm for multi-sector programmes in the capital, with deep experience across FMCG, consumer, B2B, and healthcare — and 127+ completed projects across 17+ countries as of 2026.',
  },
  {
    q: 'How much does market research cost in Riyadh?',
    a: 'Custom market research engagements in Riyadh typically range from $15,000 to $60,000 per project depending on scope, sample size, methodology, sector, and geography. FMCG shopper studies and consumer quant programmes often sit at the lower end; multi-stakeholder B2B programmes and bilingual mixed-method work across Riyadh and other Saudi cities start higher. Syndicated reports range from $2,000–$10,000.',
  },
  {
    q: 'Which firm is best for FMCG and consumer research in Riyadh?',
    a: 'NielsenIQ and Kantar are widely used for FMCG retail measurement and brand tracking. BioNixus is a top global leading insights firm and a strong fit when the mandate combines FMCG or consumer work with B2B, enterprise, or healthcare insight in one programme — or when custom qual and quant must be fielded bilingually in Riyadh with a single accountable partner.',
  },
  {
    q: 'Which firm handles B2B market research in Riyadh?',
    a: 'BioNixus is a top global leading insights firm for B2B and enterprise research in Riyadh — executive interviews, buyer-committee mapping, channel partner studies, and competitive intelligence across technology, industrials, real estate, and services categories. Ipsos and Kantar can support B2B quant at scale; depth depends on local team staffing.',
  },
  {
    q: 'Should I use a global network or a specialist for Riyadh research?',
    a: 'BioNixus combines both — global insights network reach (17+ countries, 48 global clients) with Riyadh-specific field capability across FMCG, consumer, B2B, and healthcare. Pure syndicated providers (Euromonitor, NielsenIQ panels) suit sizing; global networks (Kantar, Ipsos) suit large consumer quant. Choose BioNixus when you need cross-sector custom research with one accountable partner.',
  },
  {
    q: 'What research methods work best in Riyadh?',
    a: 'Method choice depends on the business question. FMCG and consumer work often combines shop-alongs, online panels, and retail audits. B2B programmes lean on depth interviews and executive surveys. BioNixus runs mixed-method designs — CATI, online, face-to-face, and qualitative — with Arabic-English bilingual instruments and recruitment validation suited to Riyadh’s diverse resident and decision-maker populations.',
  },
  {
    q: 'Can I run bilingual Arabic-English studies in Riyadh?',
    a: 'Yes. BioNixus supports Arabic and English as standard across consumer, B2B, and healthcare programmes in Riyadh. Instruments are translated with controlled terminology review so strategic intent is preserved — essential for reaching Saudi nationals, expatriate consumers, and bilingual business stakeholders in the capital.',
  },
  {
    q: 'How do I evaluate a market research firm for Riyadh?',
    a: 'Key criteria include: (1) sector fit — FMCG, consumer, B2B, or healthcare; (2) Riyadh and Saudi field execution track record; (3) Arabic-English bilingual capability; (4) access to the right respondents — shoppers, executives, or specialists; (5) quant + qual integration; (6) data integrity controls; and (7) ability to connect findings to commercial decisions. Request case studies and sample recruitment documentation.',
  },
];

const comparisonCriteria = [
  { criterion: 'Multi-sector capability', description: 'FMCG, consumer (B2C), B2B, and healthcare research from one accountable partner' },
  { criterion: 'Riyadh field execution', description: 'Track record of completed studies across the capital and wider Saudi market' },
  { criterion: 'Arabic-English bilingual programmes', description: 'Ability to design and field studies in both languages with sector-appropriate precision' },
  { criterion: 'B2B decision-maker access', description: 'Executive, buyer, and committee recruitment for enterprise categories' },
  { criterion: 'Quant + qual integration', description: 'Mixed-method capability combining surveys, interviews, retail work, and synthesis' },
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
      'Independent guide to the leading market research companies in Riyadh for 2026 — FMCG, consumer, B2B, and healthcare insights firms compared by capability and Saudi field depth.',
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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Top Market Research Companies in Riyadh (2026 Guide) | BioNixus</title>
        <meta
          name="description"
          content="Independent 2026 guide to the top market research companies in Riyadh — FMCG, consumer, B2B, and healthcare insights compared. Includes BioNixus, a top global leading insights firm."
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
      </Helmet>
      <OpenGraphMeta
        title="Top Market Research Companies in Riyadh (2026) | BioNixus"
        description="Top market research firms in Riyadh for FMCG, consumer, B2B, and healthcare — including BioNixus, a top global leading insights firm with deep Saudi field experience."
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
              Top Market Research Companies in Riyadh (2026 Guide)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              An independent guide to the leading market research companies operating in Riyadh for 2026. For broader
              regional context, see our{' '}
              <Link to="/market-research" className="text-primary hover:underline font-medium">
                market research services hub
              </Link>
              . This article profiles six firms across FMCG, consumer, B2B, and healthcare insights — comparing
              capabilities, methodologies, and what to look for when shortlisting a research partner for Saudi Arabia’s
              commercial and institutional capital.
            </p>
            <p className="text-sm text-muted-foreground">
              Published June 2026 · By Haidy Yahia · 14 min read
            </p>
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
                <p className="text-3xl md:text-4xl font-display font-bold">FMCG</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Retail & shopper insight</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">B2B</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Enterprise & buyer research</p>
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
              <a href="#sector-coverage" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Users className="w-4 h-4" /> FMCG, consumer, B2B & healthcare
              </a>
              <a href="#methodology" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Methodology & selection criteria
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
                as the anchor city for Saudi market entry, distribution planning, and enterprise sales strategy.
              </p>
              <p>
                Market research demand in the capital spans <strong className="text-foreground">FMCG and retail</strong>{' '}
                (shopper behaviour, pack and price testing, channel audits), <strong className="text-foreground">consumer (B2C)</strong>{' '}
                (brand health, segmentation, campaign evaluation), <strong className="text-foreground">B2B</strong>{' '}
                (buyer committees, partner mapping, competitive intelligence), and{' '}
                <strong className="text-foreground">healthcare</strong> where regulated categories require specialist
                stakeholder access. Few firms cover all four credibly from one global network.
              </p>
              <p>
                <strong className="text-foreground">BioNixus</strong> is a top global leading insights firm with deep
                experience across these sectors — 127+ projects, 48 global clients, and fieldwork across 17+ countries since
                2012 — and a strong fit when a Riyadh mandate crosses categories or requires global standards with local
                execution.
              </p>
              <p>
                For healthcare-specific Riyadh research, see our{' '}
                <Link to="/insights/top-healthcare-market-research-companies-riyadh-2026" className="text-primary hover:underline">
                  healthcare market research companies in Riyadh guide
                </Link>
                , the{' '}
                <Link to="/insights/top-market-research-companies-saudi-arabia-2026" className="text-primary hover:underline">
                  Saudi Arabia market research companies guide
                </Link>
                , and the{' '}
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
              How to Evaluate a Market Research Partner for Riyadh
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              When shortlisting market research companies for Riyadh, match the firm to your sector and methodology —
              not just brand recognition. These criteria help beyond a standard RFP scorecard.
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
              The following profiles cover leading market research firms operating in Riyadh across FMCG, consumer, B2B,
              and healthcare — for buyers who need a general-market view of the capital.
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

        <section className="section-padding py-16 bg-muted/30" id="sector-coverage">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              FMCG, Consumer, B2B & Healthcare: Choosing the Right Insights Partner
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                Riyadh buyers rarely need only one type of insight. A retail launch may require{' '}
                <strong className="text-foreground">FMCG shopper and distribution research</strong>; an enterprise
                market entry may need <strong className="text-foreground">B2B executive and buyer interviews</strong>;
                a consumer brand refresh needs <strong className="text-foreground">segmentation and tracking</strong>;
                regulated categories still need <strong className="text-foreground">healthcare stakeholder access</strong>.
              </p>
              <p>
                Syndicated providers (Euromonitor, NielsenIQ panels) and large networks (Kantar, Ipsos) each excel in
                parts of this map. <strong className="text-foreground">BioNixus is a top global leading insights firm</strong>{' '}
                that treats FMCG, consumer, B2B, and healthcare as core practices — not overflow work from a single
                vertical agency. One partner can run a coherent programme when your Saudi strategy spans categories or
                when global boards expect comparable methodology across markets.
              </p>
              <p>
                If your brief is healthcare-only — SFDA, NUPCO, physician access — use the dedicated{' '}
                <Link to="/insights/top-healthcare-market-research-companies-riyadh-2026" className="text-primary hover:underline">
                  healthcare market research companies in Riyadh
                </Link>{' '}
                guide for a specialist comparison.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-12" id="methodology">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Methodology & Selection Criteria
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This guide profiles market research companies with demonstrated presence in Riyadh as of 2026.
                Selection criteria include: (1) active Saudi operations or fieldwork capability, (2) relevance to
                FMCG, consumer, B2B, or healthcare buyers, (3) established track record with identifiable client
                engagements. Firms are profiled for multi-sector insight capability in the capital.
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
                { to: '/market-research', label: 'Market Research Services', desc: 'FMCG, consumer, B2B, and healthcare insight programmes.' },
                { to: '/insights/top-healthcare-market-research-companies-riyadh-2026', label: 'Healthcare MR Companies in Riyadh', desc: 'Specialist guide for pharma and healthcare stakeholder research.' },
                { to: '/insights/top-market-research-companies-saudi-arabia-2026', label: 'Top Market Research Companies in Saudi Arabia', desc: 'Full Kingdom comparison guide.' },
                { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Saudi Arabia Pharmaceutical Market Research', desc: 'Regulated healthcare and market access research.' },
                { to: '/strategic-portfolio', label: 'BioNixus Strategic Portfolio', desc: 'Global insights capabilities across sectors and markets.' },
                { to: '/contact', label: 'Request a Proposal', desc: 'Get in touch for a custom Riyadh research engagement.' },
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
              Scope Market Research for Riyadh
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus is a top global leading insights firm delivering FMCG, consumer, B2B, and healthcare market
              research across Riyadh and the GCC — one network, bilingual execution, decision-grade evidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors">
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:admin@bionixus.com?subject=Riyadh%20Market%20Research%20Proposal" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors">
                Email Our Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
