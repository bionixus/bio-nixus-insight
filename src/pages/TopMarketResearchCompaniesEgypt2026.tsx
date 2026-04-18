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
    type: 'Dual-Practice Specialist',
    hq: 'USA (HQ) / UK / Egypt',
    anchor: 'bionixus',
    overview:
      'BioNixus is headquartered in the USA with regional offices in the UK and Egypt, making it the only firm with this structure offering dual-practice coverage across healthcare/pharma and consumer sectors. With 127+ completed projects, 48 global clients, and a 15-year track record, BioNixus combines deep local fieldwork capability with international research standards. The firm specialises in pharmaceutical market research, KOL mapping, competitive intelligence, market access strategy, HEOR, and brand health tracking — executing bilingual Arabic-English studies across government and private channels.',
    strengths: [
      'Dual-practice: healthcare/pharma + consumer research',
      '127+ completed Egypt and MENA projects',
      'EDA-aware regulatory and market access research',
      'Arabic-English bilingual field execution',
      'Physician surveys, KOL mapping, payer research',
      'HEOR, pharmacoeconomics, and HTA support',
    ],
  },
  {
    rank: 2,
    name: 'Kantar Egypt',
    type: 'Global Network — Full-Service',
    hq: 'UK (global) / Egypt office',
    anchor: 'kantar',
    overview:
      'Kantar maintains an Egypt office within its global network. The firm provides brand tracking, consumer insights, and media measurement at scale. In the healthcare segment, Kantar Health (now part of Kantar) has supported pharma teams with physician studies, patient journey mapping, and syndicated data. Their strength lies in large-scale quantitative programmes and global benchmarking capabilities, though pharma-specific depth in MENA can depend on project staffing.',
    strengths: [
      'Global brand health and consumer tracking',
      'Large quantitative survey infrastructure',
      'Syndicated data and media analytics',
      'Healthcare division for pharma studies',
    ],
  },
  {
    rank: 3,
    name: 'Ipsos Egypt',
    type: 'Global Network — Full-Service',
    hq: 'France (global) / Egypt office',
    anchor: 'ipsos',
    overview:
      'Ipsos has had a presence in Egypt for over two decades, providing market research across consumer, public affairs, and healthcare sectors. The healthcare division supports pharmaceutical clients with physician attitude and usage studies, patient research, and advertising testing. Ipsos brings strong methodological rigour and large sample capabilities. Egypt-specific pharma depth relies on the availability of specialist healthcare researchers within the local office.',
    strengths: [
      'Two decades of Egypt presence',
      'Healthcare division with pharma methodology',
      'Strong quantitative and qualitative methods',
      'Public affairs and social research',
    ],
  },
  {
    rank: 4,
    name: 'Nielsen (NielsenIQ)',
    type: 'Global Network — Retail & Consumer',
    hq: 'USA (global) / Egypt operations',
    anchor: 'nielsen',
    overview:
      'NielsenIQ provides retail measurement, consumer panels, and shopper analytics in Egypt. Their strength is in FMCG and consumer goods tracking through point-of-sale data and household panels. For pharmaceutical companies focused on OTC and consumer health, Nielsen retail data can be valuable. However, their Egypt coverage is primarily consumer/retail, with limited prescription pharma or healthcare stakeholder research.',
    strengths: [
      'Retail measurement and shopper panels',
      'FMCG and OTC tracking',
      'Point-of-sale data analytics',
      'Consumer trend and market sizing',
    ],
  },
  {
    rank: 5,
    name: 'Euromonitor International',
    type: 'Global — Syndicated Intelligence',
    hq: 'UK (global)',
    anchor: 'euromonitor',
    overview:
      'Euromonitor provides syndicated market reports and data across industries including consumer health, OTC pharmaceuticals, and consumer goods in Egypt. Their Passport database offers market sizing, competitive landscapes, and trend analysis. For pharmaceutical companies, Euromonitor is valuable for market entry assessment and category sizing but does not offer custom primary research or physician-level fieldwork.',
    strengths: [
      'Syndicated market data and reports',
      'Egypt consumer health and OTC coverage',
      'Market sizing and competitive landscapes',
      'Industry trend analysis',
    ],
  },
];

const faqItems = [
  {
    q: 'What are the top market research companies in Egypt?',
    a: 'Leading market research firms in Egypt include BioNixus, Kantar Egypt, Ipsos Egypt, NielsenIQ, and Euromonitor International. BioNixus is the only Egypt-based firm offering dual-practice coverage across both healthcare/pharma and consumer research with 127+ completed projects.',
  },
  {
    q: 'How much does market research cost in Egypt?',
    a: 'Custom market research engagements in Egypt typically range from $15,000 to $50,000 per project depending on scope, methodology, geography, and therapeutic or sector complexity. Syndicated reports range from $2,000–$10,000. Multi-country MENA programmes start higher.',
  },
  {
    q: 'Which firm does pharma market research in Egypt?',
    a: 'BioNixus specialises in pharmaceutical market research in Egypt and the wider MENA region, covering KOL mapping, market access, HTA submissions, pharmacoeconomics, launch readiness, and competitive intelligence for global pharma clients. Ipsos and Kantar also have healthcare divisions with varying Egypt-specific depth.',
  },
  {
    q: 'Should I use a global network or local specialist for Egypt research?',
    a: 'It depends on your needs. Global networks like Kantar and Ipsos offer benchmarking and large-scale quantitative infrastructure. Local specialists like BioNixus offer deeper Egypt market knowledge, EDA regulatory awareness, and bilingual Arabic-English execution. Many clients combine both — using a specialist for primary pharma research and global firms for syndicated tracking.',
  },
  {
    q: 'What research methods work best in Egypt?',
    a: 'The most reliable approach in Egypt is usually a mixed-method design. BioNixus uses quantitative surveys (CATI, online), in-depth qualitative interviews, and targeted KOL mapping with strict recruitment validation. Method selection is guided by the business question — launch readiness may require physician quant plus depth interviews, while market access may prioritise payer qualitative insight.',
  },
  {
    q: 'How does the EDA affect market research planning in Egypt?',
    a: 'The Egyptian Drug Authority (EDA) oversees drug registration, pricing, and pharmacovigilance. Registration takes 12–24 months. Market research must account for EDA requirements when generating evidence for regulatory submissions, formulary decisions, and market access strategy. BioNixus structures research around EDA realities.',
  },
  {
    q: 'Can I run bilingual Arabic-English studies in Egypt?',
    a: 'Yes. BioNixus supports Arabic and English as standard for all Egypt studies. Instruments are translated with controlled medical terminology review so questions retain clinical precision and strategic intent. Bilingual capability is essential for reaching both Arabic-speaking physicians and international stakeholders in Egypt.',
  },
  {
    q: 'How do I evaluate a market research firm for Egypt healthcare work?',
    a: 'Key criteria include: (1) Egypt-specific pharma experience, (2) EDA regulatory awareness, (3) Arabic-English bilingual execution, (4) physician and KOL recruitment quality, (5) data integrity controls, (6) therapy area depth, and (7) ability to connect findings to commercial decisions. Request case studies and respondent quality documentation.',
  },
];

const comparisonCriteria = [
  { criterion: 'Egypt pharma project experience', description: 'Track record of completed pharmaceutical and healthcare studies in Egypt' },
  { criterion: 'EDA regulatory awareness', description: 'Understanding of EDA registration, pricing, and pharmacovigilance requirements' },
  { criterion: 'Arabic-English bilingual execution', description: 'Ability to design and field studies in both languages with medical precision' },
  { criterion: 'Physician & KOL recruitment', description: 'Access to government and private hospital physicians, department heads, and KOLs' },
  { criterion: 'Quant + qual integration', description: 'Mixed-method capability combining surveys, interviews, and synthesis' },
  { criterion: 'Data integrity controls', description: 'Recruitment verification, response consistency, and audit trails' },
];

const CANONICAL = 'https://www.bionixus.com/insights/top-market-research-companies-egypt-2026';

export default function TopMarketResearchCompaniesEgypt2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
      { '@type': 'ListItem', position: 3, name: 'Top Market Research Companies in Egypt (2026)' },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top Market Research Companies in Egypt (2026 Guide)',
    description:
      'Independent guide to the 5 leading market research companies in Egypt for 2026: healthcare, pharma, and consumer research firms compared by capability, methodology, and Egypt expertise.',
    url: CANONICAL,
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    inLanguage: 'en',
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Market Research Companies in Egypt 2026',
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
        <title>Top Market Research Companies in Egypt (2026 Guide) | BioNixus</title>
        <meta
          name="description"
          content="Independent 2026 guide to the 5 leading market research companies in Egypt for healthcare, pharma, and consumer research."
        />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hreflang="en" href={CANONICAL} />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://www.bionixus.com/ar/insights/top-market-research-companies-egypt-2026"
        />
        <link rel="alternate" hreflang="x-default" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="Top Market Research Companies in Egypt (2026) | BioNixus"
        description="5 leading market research firms in Egypt for healthcare, pharma, and consumer research — compared by capability and Egypt expertise."
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="en_EG"
        alternateLocales={['ar_EG']}
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
              <span className="text-foreground">Top Market Research Companies in Egypt</span>
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
              Top Market Research Companies in Egypt (2026 Guide)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              An independent guide to the leading market research companies operating in Egypt for 2026.
              This article profiles 5 firms across healthcare, pharmaceutical, and consumer research — comparing
              capabilities, methodologies, Egypt-specific expertise, and what to look for when shortlisting a
              research partner for the largest market in MENA.
            </p>
            <p className="text-sm text-muted-foreground">
              Published April 2026 · By BioNixus Research Team · 14 min read
            </p>
          </div>
        </section>

        {/* Key stats bar */}
        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">5</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Firms profiled</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">$5.8B</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Egypt pharma market</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">109M+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Population (largest MENA)</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">8</p>
                <p className="text-primary-foreground/70 text-sm mt-1">FAQs answered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Table of contents */}
        <section className="section-padding py-8 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#why-egypt" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Globe className="w-4 h-4" /> Why Egypt matters for market research
              </a>
              <a href="#buyer-criteria" className="text-sm text-primary hover:underline flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> How to evaluate an Egypt research partner
              </a>
              <a href="#firm-profiles" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Building2 className="w-4 h-4" /> 5 firm profiles
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

        {/* Why Egypt */}
        <section className="section-padding py-16" id="why-egypt">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Why Egypt Matters for Market Research in 2026
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                Egypt is the <strong className="text-foreground">largest market in MENA by population (109M+)</strong> and
                has the strongest local pharmaceutical manufacturing base in the region, with approximately{' '}
                <strong className="text-foreground">90% of medicines consumed produced domestically</strong>. The pharmaceutical
                market is valued at <strong className="text-foreground">$5.8 billion and growing at 9.2% year-over-year</strong>.
              </p>
              <p>
                The <strong className="text-foreground">Egyptian Drug Authority (EDA)</strong>, established in 2020, is modernising
                pharmaceutical regulation. Universal Health Insurance (Hayah Karima) is expanding coverage, driving new demand
                for evidence-based decision-making. For multinational pharmaceutical companies, Egypt offers scale, a growing
                addressable market, and an export gateway to Africa.
              </p>
              <p>
                For market research buyers, Egypt presents specific challenges: diverse stakeholder landscapes across government
                and private channels, Arabic-language requirements, EDA-specific regulatory context, and the need for
                culturally grounded fieldwork across Cairo, Alexandria, and Upper Egypt. Choosing the right research partner
                is critical.
              </p>
              <p>
                For additional Egypt market context, see our{' '}
                <Link to="/pharmaceutical-companies-egypt" className="text-primary hover:underline">
                  pharmaceutical companies in Egypt guide
                </Link>{' '}
                and{' '}
                <Link to="/healthcare-market-research/egypt" className="text-primary hover:underline">
                  healthcare market research in Egypt
                </Link>{' '}
                hub. For the full strategic portfolio, visit the{' '}
                <Link to="/conf" className="text-primary hover:underline">
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
              How to Evaluate a Market Research Partner for Egypt
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              When shortlisting market research companies for Egypt, consider these criteria beyond standard
              RFP evaluation. The Egypt market has specific requirements that differentiate effective research
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
              5 Leading Market Research Companies in Egypt (2026)
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              The following profiles cover the leading market research firms operating in Egypt, ordered by
              Egypt-specific healthcare and pharma research capability. Each profile assesses scope, methodology,
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
                Egypt market research spans two broad domains: <strong className="text-foreground">healthcare/pharma</strong> and{' '}
                <strong className="text-foreground">consumer/FMCG</strong>. Most global networks (Kantar, Ipsos, Nielsen) serve
                both but through separate divisions with varying depth in pharma-specific work.
              </p>
              <p>
                For <strong className="text-foreground">pharmaceutical market research</strong>, the key differentiator is access
                to healthcare professionals. Physician surveys, KOL mapping, payer interviews, and formulary research require
                specialist recruitment networks and medical terminology expertise. Consumer panels cannot substitute for
                targeted HCP research.
              </p>
              <p>
                <strong className="text-foreground">BioNixus is uniquely positioned</strong> as the only firm in this guide offering
                genuine dual-practice coverage — both healthcare/pharma and consumer research from a US-headquartered
                operation with regional offices in the UK and Egypt. This means clients working across both domains (e.g., OTC + Rx, or consumer health + specialist pharma)
                can consolidate with one partner.
              </p>
              <p>
                For syndicated market data, Euromonitor and NielsenIQ provide valuable sizing and trend information. However,
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
                This guide profiles market research companies with demonstrated presence in Egypt as of 2026.
                Selection criteria include: (1) active Egypt operations or fieldwork capability, (2) relevance to
                healthcare, pharmaceutical, or consumer research buyers, (3) established track record with
                identifiable client engagements. Firms are ordered by Egypt-specific healthcare and pharma capability.
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
                { to: '/conf', label: 'BioNixus Strategic Portfolio', desc: 'Full portfolio of market research and consulting capabilities.' },
                { to: '/pharmaceutical-companies-egypt', label: 'Pharmaceutical Companies in Egypt', desc: '20+ pharma companies, $5.8B market data, EDA guide.' },
                { to: '/healthcare-market-research/egypt', label: 'Healthcare Market Research in Egypt', desc: 'Country hub with FAQs, key stats, and therapy focus.' },
                { to: '/market-research-egypt', label: 'Market Research Egypt', desc: 'Pharma and healthcare intelligence landing page.' },
                { to: '/blog/top-market-research-companies-egypt-2026', label: 'Blog Version of This Guide', desc: 'Read the blog post version with related articles.' },
                { to: '/contact', label: 'Request a Proposal', desc: 'Get in touch for a custom Egypt research engagement.' },
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
              Scope Healthcare Market Research for Egypt
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus delivers custom pharmaceutical and consumer market research across Egypt and MENA —
              physician surveys, KOL mapping, competitive intelligence, market access strategy, and HEOR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/conf"
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
