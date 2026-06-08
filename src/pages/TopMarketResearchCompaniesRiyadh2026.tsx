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
    bestFor: 'primary research, consumer insights, SFDA-aware healthcare & pharma studies, NUPCO procurement intelligence, competitive intelligence across Riyadh, KSA, and international markets',
    overview:
      'BioNixus is a global market research company headquartered in the USA with offices in the UK and the Middle East, delivering primary research, consumer insights, healthcare and pharmaceutical studies, and strategic intelligence across 17+ countries. In Riyadh, BioNixus brings global methodology standards combined with in-market Arabic-first execution and SFDA regulatory awareness. Riyadh is Saudi Arabia\'s capital and the concentration point for government hospitals, Ministry of Health (MoH) administration, SFDA headquarters, and NUPCO (National Unified Procurement Company) procurement operations. BioNixus research programmes in Riyadh cover physician surveys, KOL mapping, payer and formulary research, consumer intelligence, and competitive landscape analysis.',
    strengths: [
      'Global primary research: healthcare, pharma, and consumer',
      'SFDA and MoH regulatory awareness',
      'Arabic-first bilingual field execution',
      'Riyadh physician, KOL, and payer network access',
      'NUPCO procurement and hospital formulary research',
      'HEOR, market access, and competitive intelligence',
    ],
  },
  {
    rank: 2,
    name: 'IQVIA Saudi Arabia',
    type: 'Global Healthcare Data & Analytics Company',
    hq: 'USA (global) / Riyadh/Saudi Arabia office',
    anchor: 'iqvia',
    url: 'https://www.iqvia.com',
    bestFor: 'prescription data audits, real-world evidence, SFDA submissions support, healthcare analytics for Riyadh and Saudi Arabia',
    overview:
      'IQVIA operates in Riyadh and Saudi Arabia as part of its global healthcare data and analytics network. IQVIA provides pharmaceutical companies with prescription audit data covering Saudi hospital and retail pharmacy channels, real-world evidence programmes, sales force effectiveness studies, and regulatory intelligence aligned with SFDA requirements. IQVIA\'s Riyadh operations serve as a key hub for GCC-wide pharmaceutical analytics. Custom primary research supplements IQVIA\'s proprietary data products for deeper primary market evidence.',
    strengths: [
      'Saudi Arabia prescription data and pharmaceutical audit',
      'Real-world evidence and outcomes research',
      'SFDA regulatory intelligence and submissions support',
      'Analytics-led commercial strategy research',
    ],
  },
  {
    rank: 3,
    name: 'YouGov MENA',
    type: 'Global Consumer Intelligence Company',
    hq: 'UK (global) / Dubai MENA hub',
    anchor: 'yougov',
    url: 'https://business.yougov.com',
    bestFor: 'consumer brand tracking, opinion polling, public sentiment research across Riyadh and Saudi Arabia',
    overview:
      'YouGov provides consumer intelligence across Riyadh and Saudi Arabia through its MENA operations. Using its proprietary online panel and BrandIndex platform, YouGov delivers continuous brand perception tracking, consumer opinion research, and market sentiment studies among Saudi consumers. YouGov\'s Omnibus and custom research products are used by FMCG, financial services, media, and government communications teams for understanding Saudi consumer behaviour and brand performance. Saudi Arabia\'s growing digital connectivity and high smartphone penetration make online panel research highly effective for YouGov\'s methodologies.',
    strengths: [
      'Continuous brand tracking via BrandIndex in Saudi Arabia',
      'Saudi consumer opinion and sentiment research',
      'Online panel covering Riyadh and other major cities',
      'MENA-wide syndicated research capabilities',
    ],
  },
  {
    rank: 4,
    name: 'Kantar MENAP',
    type: 'Global Market Research Network',
    hq: 'UK (global) / Saudi Arabia operations',
    anchor: 'kantar',
    url: 'https://www.kantar.com',
    bestFor: 'consumer brand tracking, advertising testing, large-scale quantitative research for Saudi Arabia',
    overview:
      'Kantar operates across Riyadh and Saudi Arabia through its MENAP regional structure, providing brand tracking, consumer insights, and advertising research for multinational FMCG, retail, and financial services clients. As part of the global Kantar group, the Saudi Arabia operation delivers brand health tracking, media effectiveness studies, and customer experience research that accounts for Vision 2030 consumer transformation dynamics. Saudi Arabia\'s rapidly evolving retail, entertainment, and consumer landscape is a key focus for Kantar\'s research programmes.',
    strengths: [
      'Brand health tracking and consumer panels in KSA',
      'Advertising effectiveness and copy testing',
      'Vision 2030 consumer transformation research',
      'Large quantitative survey infrastructure in Saudi Arabia',
    ],
  },
  {
    rank: 5,
    name: 'NielsenIQ',
    type: 'Global Consumer Intelligence Company',
    hq: 'USA (global) / Saudi Arabia operations',
    anchor: 'nielsen',
    url: 'https://nielseniq.com',
    bestFor: 'retail measurement, FMCG/OTC consumer data, shopper analytics in Riyadh and Saudi Arabia',
    overview:
      'NielsenIQ provides retail measurement and consumer intelligence across Riyadh and Saudi Arabia. Their retail audit covers Riyadh\'s major hypermarkets, supermarkets, and convenience trade channels. For consumer goods and OTC healthcare companies, NielsenIQ provides point-of-sale data, shopper behaviour analytics, and category performance tracking in Riyadh and other Saudi cities. Saudi Arabia\'s growing modern trade sector and Vision 2030 retail transformation make NielsenIQ\'s measurement data particularly relevant for FMCG market strategy.',
    strengths: [
      'Riyadh retail measurement and modern trade data',
      'FMCG and OTC consumer tracking in KSA',
      'Saudi shopper behaviour analytics',
      'Category performance and market share data',
    ],
  },
];

const faqItems = [
  {
    q: 'What are the best market research companies in Riyadh?',
    a: 'Leading market research companies in Riyadh include BioNixus, IQVIA Saudi Arabia, YouGov MENA, Kantar MENAP, and NielsenIQ. BioNixus is a global market research company with Riyadh and Saudi Arabia operations covering primary research, consumer insights, and SFDA-aware healthcare and pharmaceutical studies.',
  },
  {
    q: 'How much does market research cost in Riyadh?',
    a: 'Custom market research in Riyadh typically ranges from $20,000 to $65,000 per project depending on scope, methodology, and sector. Healthcare and pharmaceutical studies with Riyadh physician or NUPCO payer recruitment are at the higher end. Consumer research with online panels is more cost-efficient. Syndicated reports range from $2,500–$12,000.',
  },
  {
    q: 'Which market research firm is best for pharmaceutical research in Riyadh?',
    a: 'BioNixus specialises in pharmaceutical market research in Riyadh, covering SFDA regulatory landscapes, physician surveys at government hospitals (King Fahad Medical City, King Abdulaziz Medical City), KOL mapping, NUPCO procurement research, formulary access, and competitive intelligence. IQVIA Saudi Arabia is the leading provider of prescription audit data and real-world evidence in the Saudi market.',
  },
  {
    q: 'Why is Riyadh particularly important for pharmaceutical market research?',
    a: 'Riyadh is the Saudi capital and home to SFDA headquarters, Ministry of Health (MoH) central administration, NUPCO (the national procurement entity), and the highest concentration of government hospitals in Saudi Arabia. Pharmaceutical companies seeking market access to Saudi Arabia\'s public healthcare system must understand the decision-making processes centred in Riyadh, making Riyadh-based primary research essential for market access strategy.',
  },
  {
    q: 'What is NUPCO and why is it important for Riyadh market research?',
    a: 'NUPCO (National Unified Procurement Company) is Saudi Arabia\'s centralised government procurement organisation headquartered in Riyadh, responsible for pharmaceutical and medical device procurement across government hospitals and healthcare facilities nationwide. Understanding NUPCO formulary processes, procurement cycles, and committee decision-making is critical for pharmaceutical companies. BioNixus designs primary research that maps NUPCO\'s requirements and the payer decision landscape.',
  },
  {
    q: 'Can I run Arabic-language research in Riyadh?',
    a: 'Yes. BioNixus supports Arabic as the primary language for Riyadh physician and government stakeholder research. Arabic-first execution is essential for reaching Saudi HCPs, government decision-makers, and Saudi national consumers. English is used for international stakeholder studies and regional headquarters research. BioNixus instruments are developed in Arabic with controlled medical terminology review.',
  },
  {
    q: 'How does Vision 2030 affect market research in Riyadh?',
    a: 'Saudi Vision 2030 is transforming Riyadh\'s economic and social landscape through healthcare privatisation, expanding insurance coverage, entertainment sector development, and increased female workforce participation. Market research must account for rapidly changing consumer behaviour, new healthcare delivery models, and shifting payer dynamics as the government implements privatisation and private investment across sectors.',
  },
  {
    q: 'How do I evaluate a market research company for Riyadh work?',
    a: 'Key criteria include: (1) Saudi Arabia pharma or consumer project experience, (2) SFDA regulatory awareness, (3) Arabic-first execution capability, (4) Riyadh physician and KOL recruitment quality (government hospitals + private sector), (5) NUPCO and formulary research capability, (6) Vision 2030 context awareness, and (7) data integrity controls and NCA/PDPL compliance.',
  },
];

const comparisonCriteria = [
  { criterion: 'SFDA regulatory awareness', description: 'Understanding of SFDA registration, formulary listing, and pharmacovigilance requirements specific to Riyadh operations' },
  { criterion: 'NUPCO procurement research', description: 'Knowledge of NUPCO\'s centralised procurement processes, formulary committees, and government hospital purchasing cycles' },
  { criterion: 'Arabic-first execution', description: 'Research design and fieldwork in Arabic — essential for reaching Saudi HCPs, government stakeholders, and Saudi national consumers' },
  { criterion: 'Riyadh HCP network access', description: 'Recruitment capability at King Fahad Medical City, King Abdulaziz Medical City, and Riyadh\'s major private hospital clusters' },
  { criterion: 'Vision 2030 healthcare context', description: 'Awareness of Saudi healthcare privatisation, insurance expansion, and the transformation of Riyadh\'s healthcare delivery model' },
  { criterion: 'Data integrity and NCA compliance', description: 'Respondent verification, audit trails, and alignment with Saudi PDPL and NCA (National Cybersecurity Authority) requirements' },
];

const CANONICAL = 'https://www.bionixus.com/insights/top-market-research-companies-riyadh-2026';

export default function TopMarketResearchCompaniesRiyadh2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
      { '@type': 'ListItem', position: 3, name: 'Best Market Research Companies in Riyadh (2026)' },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Market Research Companies in Riyadh (2026 Guide)',
    description:
      'Independent guide to the leading market research companies in Riyadh for 2026: healthcare, pharmaceutical, consumer, and strategic research firms compared by SFDA expertise and Riyadh market capability.',
    url: CANONICAL,
    datePublished: '2026-06-08',
    dateModified: '2026-06-08',
    author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    inLanguage: 'en',
    about: { '@type': 'City', name: 'Riyadh', containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' } },
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Market Research Companies in Riyadh 2026',
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
        <title>Best Market Research Companies in Riyadh (2026 Guide) | BioNixus</title>
        <meta
          name="description"
          content="Independent 2026 guide to the leading market research companies in Riyadh for healthcare, pharma, and consumer research — compared by SFDA expertise and Riyadh market capability."
        />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="Best Market Research Companies in Riyadh (2026) | BioNixus"
        description="Leading market research firms in Riyadh for healthcare, pharma, and consumer research — compared by SFDA expertise and Riyadh market capability."
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
              <span className="text-foreground">Best Market Research Companies in Riyadh</span>
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
              Best Market Research Companies in Riyadh (2026 Guide)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              An independent guide to the leading market research companies operating in Riyadh for 2026.
              This guide profiles 5 firms across healthcare, pharmaceutical, consumer, and strategic research —
              comparing capabilities, SFDA regulatory knowledge, and Riyadh-specific expertise for Saudi Arabia's
              capital city and the GCC's most important pharmaceutical hub.
            </p>
            <p className="text-sm text-muted-foreground">
              Published June 2026 · By BioNixus Research Team · 12 min read
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
                <p className="text-3xl md:text-4xl font-display font-bold">8M+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Riyadh population</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">SFDA</p>
                <p className="text-primary-foreground/70 text-sm mt-1">HQ in Riyadh</p>
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
                Best Market Research Companies in Riyadh (2026)
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                The following market research companies have demonstrated operations, fieldwork capability, or
                project delivery in Riyadh as of 2026, covering healthcare, pharmaceutical, consumer, and
                strategic research:
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
              <a href="#why-riyadh" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Globe className="w-4 h-4" /> Why Riyadh matters for market research
              </a>
              <a href="#buyer-criteria" className="text-sm text-primary hover:underline flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> How to evaluate a Riyadh research partner
              </a>
              <a href="#firm-profiles" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Building2 className="w-4 h-4" /> 5 firm profiles
              </a>
              <a href="#healthcare-consumer" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Users className="w-4 h-4" /> Healthcare vs consumer research in Riyadh
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
                Riyadh is <strong className="text-foreground">Saudi Arabia's capital and the GCC's most important
                pharmaceutical hub</strong>, with a population of over 8 million and home to the{' '}
                <strong className="text-foreground">SFDA headquarters, Ministry of Health (MoH)</strong>, and{' '}
                <strong className="text-foreground">NUPCO (National Unified Procurement Company)</strong> — the
                centralised government procurement entity for all pharmaceutical and medical device purchasing
                across Saudi public hospitals.
              </p>
              <p>
                Riyadh accounts for approximately 35% of Saudi Arabia's pharmaceutical consumption and hosts
                the country's largest government hospitals: King Fahad Medical City, King Abdulaziz Medical City,
                and the Armed Forces Medical Services network. Any pharmaceutical company seeking access to the
                Saudi government healthcare sector must engage with Riyadh-based decision-makers, payers, and
                formulary committees.
              </p>
              <p>
                Under <strong className="text-foreground">Vision 2030</strong>, Riyadh is transforming rapidly —
                healthcare privatisation, insurance expansion, entertainment sector development, and increased
                female workforce participation are reshaping both consumer behaviour and healthcare delivery.
                Market research in Riyadh must account for these fast-moving structural changes.
              </p>
              <p>
                For additional Saudi Arabia context, see our{' '}
                <Link to="/insights/top-market-research-companies-ksa-2026" className="text-primary hover:underline">
                  best market research companies in Saudi Arabia
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
              How to Evaluate a Market Research Partner for Riyadh
            </h2>
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
              5 Market Research Companies in Riyadh (2026)
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              The following profiles cover leading market research companies operating in Riyadh. Firms are
              assessed by use case and market positioning — each brings distinct strengths across primary research,
              consumer intelligence, healthcare data, and strategic analytics.
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
              Healthcare vs Consumer Research in Riyadh
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                Riyadh research spans healthcare/pharma and consumer/FMCG domains. Riyadh is unique in Saudi
                Arabia because of its concentration of government hospitals and NUPCO procurement operations —
                making healthcare primary research here particularly relevant for any pharmaceutical company
                seeking national formulary access.
              </p>
              <p>
                <strong className="text-foreground">BioNixus</strong>, as a global market research company with Riyadh
                and Saudi Arabia operations, covers both healthcare/pharma and consumer research within a single global
                operation — with SFDA awareness, NUPCO procurement intelligence, and Arabic-first execution capability.
              </p>
              <p>
                For prescription data and real-world evidence, IQVIA Saudi Arabia is the leading provider in Riyadh.
                For consumer brand tracking and public opinion research, YouGov MENA has strong Saudi coverage. For
                FMCG retail measurement, NielsenIQ covers the Riyadh modern trade effectively.
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
                This guide profiles market research companies with demonstrated presence in Riyadh or Saudi Arabia
                as of 2026. Selection criteria: (1) active Riyadh/KSA operations or verified fieldwork capability,
                (2) relevance to healthcare, pharmaceutical, or consumer research buyers, (3) established track record
                in the Saudi or GCC market. Firms are assessed by use case and market positioning.
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
                { to: '/insights/top-market-research-companies-ksa-2026', label: 'Best Market Research Companies in Saudi Arabia', desc: 'Country-level guide for the full KSA market.' },
                { to: '/sfda-market-access-strategy-saudi-arabia', label: 'SFDA Market Access Strategy', desc: 'Research-backed market access for Saudi Arabia.' },
                { to: '/kol-mapping-saudi-arabia-oncology', label: 'KOL Mapping Saudi Arabia', desc: 'Key Opinion Leader mapping for Saudi oncology.' },
                { to: '/physician-survey-saudi-arabia', label: 'Physician Survey Saudi Arabia', desc: 'Custom physician attitude and usage research in KSA.' },
                { to: '/pharmaceutical-companies-saudi-arabia', label: 'Pharmaceutical Companies in Saudi Arabia', desc: 'Key pharma companies operating in KSA.' },
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
              Plan Market Research in Riyadh
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus delivers custom market research across Riyadh and Saudi Arabia — primary research,
              consumer insights, SFDA-aware healthcare and pharmaceutical studies, NUPCO procurement intelligence,
              and strategic competitive analysis.
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
