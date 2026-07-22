import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, BarChart3, ShieldCheck, BookOpen, CheckCircle2 } from 'lucide-react';
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
    name: 'IQVIA',
    type: 'Global — Data, Technology & CRO',
    hq: 'USA (global)',
    anchor: 'iqvia',
    overview:
      'IQVIA is the largest company operating in and around healthcare market research, formed from the 2016 merger of IMS Health and Quintiles. It is best understood as a health data, technology, and clinical-research company with market research as one capability among many — its real strength is proprietary real-world data (claims, EHRs, patient-reported outcomes) layered with commercial analytics, syndicated sales data, and consulting.',
    strengths: [
      'Global real-world data and claims infrastructure',
      'Syndicated sales and prescription data',
      'Full-service CRO and clinical research',
      'Enterprise-scale commercial analytics',
    ],
  },
  {
    rank: 2,
    name: 'Ipsos Healthcare',
    type: 'Global Network — Full-Service',
    hq: 'France (global)',
    anchor: 'ipsos-healthcare',
    overview:
      'Ipsos Healthcare is the dedicated healthcare and pharma division of Ipsos, one of the world’s largest market research groups, operating in roughly 50 countries with over 1,000 healthcare specialists. It covers the full commercial lifecycle — brand tracking, payer research, patient/caregiver surveys, physician studies, and message testing — with the methodological consistency of a large multinational research group.',
    strengths: [
      'Dedicated healthcare practice in ~50 countries',
      'Full commercial-lifecycle research',
      'Large-scale quant and qual capability',
      'Consistent multi-country methodology',
    ],
  },
  {
    rank: 3,
    name: 'GlobalData Healthcare',
    type: 'Global — Data & Analytics Platform',
    hq: 'UK (global)',
    anchor: 'globaldata-healthcare',
    overview:
      'GlobalData Healthcare is a data and analytics platform, not a fieldwork-first agency, built on proprietary datasets covering physicians, healthcare facilities, payers, pipelines, and epidemiology reviewed by a large in-house analyst team. Its value is subscription access to structured healthcare intelligence — market sizing, forecasting, competitive benchmarking, and clinical trial tracking — through a unified platform rather than bespoke fieldwork.',
    strengths: [
      'Subscription-based syndicated intelligence',
      'Pipeline and clinical-trial tracking',
      'Market sizing and forecasting',
      'Large in-house analyst team',
    ],
  },
  {
    rank: 4,
    name: 'Clarivate (Cortellis / DRG)',
    type: 'Global — Data & IP Intelligence',
    hq: 'UK (global)',
    anchor: 'clarivate',
    overview:
      'Clarivate’s life sciences business, anchored by the Cortellis platform and the DRG (Decision Resources Group) commercial and market-access analytics it acquired, provides curated intelligence spanning R&D, regulatory, competitive, and market-access data. It is used by most top-20 pharma companies for pipeline tracking and competitive intelligence rather than custom HCP or patient fieldwork.',
    strengths: [
      'Cortellis R&D and regulatory intelligence',
      'DRG market-access analytics',
      'Competitive and pipeline tracking',
      'Used across most top-20 pharma companies',
    ],
  },
  {
    rank: 5,
    name: 'Escalent (Health & Life Sciences)',
    type: 'Global — Full-Service Primary Research',
    hq: 'USA',
    anchor: 'escalent',
    overview:
      'Escalent was formed from the 2018 merger of Market Strategies International and Morpace (with roots dating to 1975) and operates a dedicated Health & Life Sciences practice within a broader multi-industry research and consulting firm. It is known for the depth of its primary qualitative and quantitative methodology — patient journey mapping, segmentation, and behavioral-science-informed brand strategy.',
    strengths: [
      'Dedicated Health & Life Sciences practice',
      'Patient journey mapping and segmentation',
      'Behavioral-science-informed strategy',
      'Full product-lifecycle coverage',
    ],
  },
  {
    rank: 6,
    name: 'M3 Global Research',
    type: 'Global — Physician Panel & Fieldwork',
    hq: 'Japan (global)',
    anchor: 'm3-global-research',
    overview:
      'M3 Global Research is the market research arm of M3 Inc., a Tokyo-listed healthcare technology company, and operates what is generally recognized as the largest verified physician and HCP panel in the industry, reachable across dozens of markets. Its differentiator is fieldwork infrastructure and panel quality — ISO-certified recruitment and verification — rather than consulting or analytics.',
    strengths: [
      'Largest verified physician/HCP panel',
      'ISO-certified recruitment and verification',
      'Fast, high-quality fieldwork infrastructure',
      'Coverage across dozens of markets',
    ],
  },
  {
    rank: 7,
    name: 'Sermo',
    type: 'Global — Physician Community & Panel',
    hq: 'USA (global)',
    anchor: 'sermo',
    overview:
      'Sermo is a physician-only social network that has built a market research business on top of its engaged HCP community, reaching over a million physicians and healthcare professionals across many countries, with drug-rating and peer-discussion data as a distinctive by-product of the platform. Its clients include a large share of the top pharmaceutical companies.',
    strengths: [
      'Physician-only social network + panel',
      '1M+ reachable physicians globally',
      'Real physician sentiment and discussion data',
      'Quant and qual physician research',
    ],
  },
  {
    rank: 8,
    name: 'Research Partnership (Inizio Ignite)',
    type: 'Global — Healthcare-Dedicated Agency',
    hq: 'UK (global)',
    anchor: 'research-partnership',
    overview:
      'Research Partnership is a healthcare-only market research agency founded in 1997, headquartered in London with offices across the US, Europe, and Asia, now operating as part of Inizio Ignite (alongside Putnam, STEM, and Vynamic). It runs both proprietary syndicated products and custom qualitative/quantitative research across a wide range of therapeutic areas.',
    strengths: [
      'Healthcare-only since 1997',
      'Part of Inizio Ignite group',
      'Proprietary syndicated products',
      'Recognized for adherence/behavioral research',
    ],
  },
  {
    rank: 9,
    name: 'Cello Health Insight (Lumanity)',
    type: 'Global — Custom Research & Consulting',
    hq: 'UK (global)',
    anchor: 'cello-health-insight',
    overview:
      'Cello Health Insight is the custom market research and customer-insight arm built on the long-running Cello Health brand; following Cello Health’s 2020 acquisition by Arsenal Capital Partners, it now sits within the Lumanity group alongside value-demonstration and market-access consulting businesses. It positions itself around understanding the behavioral drivers behind physician and patient decisions.',
    strengths: [
      'Decades of healthcare research experience',
      'Bundled with Lumanity value/access consulting',
      'Behavioral-driver focused methodology',
      'Physician and patient decision research',
    ],
  },
  {
    rank: 10,
    name: 'Adelphi Real World',
    type: 'Global — Real-World Evidence Specialist',
    hq: 'UK',
    anchor: 'adelphi-real-world',
    overview:
      'Adelphi Real World is known specifically for its Disease Specific Programmes (DSPs) — a proprietary, published, and independently repeatable real-world evidence methodology run continuously since 1995 across more than 100 individual diseases, with particular depth in oncology, rare disease, CNS, and women’s health. Because DSPs are fielded independently, licensable data can answer a commercial question without a bespoke fieldwork cycle.',
    strengths: [
      'Disease Specific Programmes since 1995',
      '100+ diseases covered',
      'Citable, cross-country RWE',
      'Deep oncology, rare disease, CNS coverage',
    ],
  },
  {
    rank: 11,
    name: 'Within3',
    type: 'Global — Advisory Board Platform',
    hq: 'USA',
    anchor: 'within3',
    overview:
      'Within3 is a technology platform, not a fieldwork agency — it powers virtual advisory boards and other structured qualitative engagement (KOL panels, steering committees) for pharma, biotech, and medtech medical affairs and commercial teams. Its differentiation is workflow: asynchronous, always-on engagement with built-in translation, moderation, and compliance controls.',
    strengths: [
      'Virtual advisory-board platform',
      'Asynchronous, always-on KOL engagement',
      'Built-in translation and moderation',
      'Compresses advisory cycles from months to days',
    ],
  },
  {
    rank: 12,
    name: 'Symphony Health (HealthVerity)',
    type: 'US — Claims Data Platform',
    hq: 'USA',
    anchor: 'symphony-health',
    overview:
      'Symphony Health has historically been one of the major providers of open and closed pharmaceutical claims data in the US, offering a tokenized, longitudinal view of prescribing and patient treatment patterns; it now operates as part of HealthVerity’s real-world data ecosystem. It is a data-licensing business rather than a primary-research agency.',
    strengths: [
      'US pharmaceutical claims data',
      'Tokenized longitudinal patient view',
      'Part of HealthVerity RWD ecosystem',
      'Underpins commercial analytics and RWE',
    ],
  },
  {
    rank: 13,
    name: 'Health Union',
    type: 'US — Patient Communities & Insight',
    hq: 'USA',
    anchor: 'health-union',
    overview:
      'Health Union operates dozens of condition-specific online patient communities in the US, generating a continuous stream of patient-reported, socially driven insight that it packages into custom market research and social listening offerings for pharma partners. Its differentiator is direct, longitudinal access to patient voice inside communities patients already use.',
    strengths: [
      'Dozens of condition-specific patient communities',
      'Longitudinal patient-reported insight',
      'Social listening + custom research',
      'US-focused patient-journey depth',
    ],
  },
  {
    rank: 14,
    name: 'Kantar Health (legacy brand)',
    type: 'Legacy — Now Split Across M3 & Oracle',
    hq: 'N/A — no longer a standalone unit',
    anchor: 'kantar-health',
    overview:
      'Kantar Health was, for over a decade, one of the best-known names in pharmaceutical primary market research and real-world evidence. That single entity no longer exists in its original form: in 2021, Cerner (now Oracle Health) acquired its real-world data and technology business for $375 million, and in 2023 Kantar sold its remaining specialist healthcare businesses — including its Profiles Health panel — to M3 Global Research.',
    strengths: [
      'Historic pharma RWE brand (legacy)',
      'RWD business now inside Oracle Health',
      'Panel/fieldwork legacy now inside M3 Global Research',
      'Worth verifying scope before shortlisting by name',
    ],
  },
  {
    rank: 15,
    name: 'BioNixus',
    type: 'Regional Specialist — MENA/GCC Primary Research',
    hq: 'USA (HQ) / London, Cairo, GCC offices',
    anchor: 'bionixus',
    overview:
      'BioNixus is a healthcare and pharmaceutical market research firm founded in 2012, with its global headquarters in the US and regional and country offices across London, Cairo, Saudi Arabia, the UAE, Kuwait, and Brazil. Unlike most firms above, BioNixus’s core is primary research — quantitative physician and payer surveys, qualitative interviews, and market-access/payer evidence — rather than syndicated data licensing, with its strongest coverage in the GCC and wider MENA, expanding into Asia. It is not positioned here as the largest or most globally comprehensive option — it is best suited to teams that specifically need regionally grounded MENA/GCC (and expanding Asia) primary research delivered by a team with on-the-ground presence, often alongside a larger global vendor handling other regions.',
    strengths: [
      'Primary research core — quant, qual, market access',
      'Deepest coverage: MENA/GCC, expanding Asia',
      'On-the-ground offices, not a remote hub model',
      'Project-based, no enterprise minimum',
    ],
  },
];

const faqItems = [
  {
    q: 'What is the difference between healthcare market research and general market research?',
    a: 'Healthcare market research targets specific, credentialed audiences — physicians, other HCPs, payers, and patients with defined conditions — rather than general consumer panels, and it operates under stricter compliance requirements (HCP engagement codes, patient privacy rules, and in some markets restrictions on discussing off-label use). It also requires therapeutic-area fluency to write a valid discussion guide or survey instrument.',
  },
  {
    q: 'What is the difference between primary and syndicated (secondary) healthcare market research?',
    a: 'Primary research is commissioned fresh to answer a specific question — a custom physician survey, patient interviews, a payer advisory board. Syndicated (secondary) research is data or reports that already exist and are licensed or subscribed to, such as claims databases or pipeline-tracking platforms. Most commercial teams use both: syndicated data for ongoing monitoring, primary research when a specific brand or access decision needs direct evidence.',
  },
  {
    q: 'How much does healthcare market research cost?',
    a: 'Costs vary widely by methodology, sample size, number of countries, and respondent type. As a general guide, a single-market qualitative study is typically a lower five- to low six-figure engagement in USD, while multi-country quantitative tracking programs or advisory-board series can run into the six or seven figures depending on scope. Get comparable, itemized quotes from at least two or three vendors before assuming a number.',
  },
  {
    q: 'What is the largest healthcare market research company?',
    a: 'By scale of data infrastructure, client base, and revenue, IQVIA is generally regarded as the largest company operating in this space — though it is more accurately described as a health data, technology, and clinical-research company with market research as one of several capabilities. Among firms built primarily around market research and insights, Ipsos (through Ipsos Healthcare) is among the largest global players with a dedicated healthcare practice.',
  },
  {
    q: 'Do healthcare market research companies need special compliance or certifications?',
    a: 'Reputable vendors working with real HCPs and patients typically maintain panel-quality certifications (such as ISO 20252 for market research and ISO 27001 for information security), verify HCP credentials before recruitment, and have documented processes for managing incentive payments, informed consent, and data privacy (GDPR in Europe, HIPAA-adjacent handling in the US, and local equivalents elsewhere).',
  },
  {
    q: 'How do I choose between a large global firm and a regional or specialist firm?',
    a: 'Use a large global firm (IQVIA, Ipsos Healthcare, GlobalData, Clarivate) when the brief needs broad syndicated data coverage or research replicated identically across many markets with one methodology. Use a specialist or regional firm (Adelphi Real World for disease-specific RWE, Within3 for advisory-board workflow, BioNixus for MENA/GCC and expanding Asia primary research) when the brief needs deep therapeutic, methodological, or in-market expertise a generalist may not have on the ground.',
  },
];

const comparisonCriteria = [
  { criterion: 'Scale and breadth of data assets', description: 'Firms built around large proprietary or licensed datasets (claims, EHRs, pipeline intelligence) you subscribe to rather than commission fresh.' },
  { criterion: 'Primary vs. syndicated research capability', description: 'Whether the firm designs and fields bespoke quant/qual studies against a specific brief, or provides panel/fieldwork infrastructure others build on.' },
  { criterion: 'Specialization: therapeutic, methodological, or regional', description: 'Disease-area depth, methodology/technology differentiation, or geographic specialization — often a better fit than a generalist for a narrow brief.' },
  { criterion: 'Regulatory and quality standards', description: 'Panel verification (ISO 20252/27001, ID checks), and how HCP engagement, incentive payments, and patient privacy are handled per market.' },
];

const CANONICAL = 'https://www.bionixus.com/healthcare-market-research-companies';

export default function HealthcareMarketResearchCompanies2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Healthcare Market Research Companies', item: CANONICAL },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 15 Healthcare Market Research Companies (2026)',
    description:
      'Independent 2026 guide to the leading healthcare and pharmaceutical market research companies — global data platforms, dedicated healthcare agencies, and regional specialists compared by capability.',
    url: CANONICAL,
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    author: {
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      name: 'BioNixus',
    },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    inLanguage: 'en',
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top 15 Healthcare Market Research Companies 2026',
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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Healthcare Market Research',
    description:
      'BioNixus provides primary healthcare and pharmaceutical market research — quantitative physician and payer surveys, qualitative interviews, and market-access evidence — with deepest coverage across MENA/GCC and expanding into Asia.',
    serviceType: 'Healthcare Market Research',
    provider: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Egypt', 'Qatar', 'Bahrain', 'Oman', 'GCC', 'MENA'],
    url: CANONICAL,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Top 15 Healthcare Market Research Companies (2026)</title>
        <meta
          name="description"
          content="Independent 2026 guide to the top healthcare and medical market research companies and agencies — global data platforms, dedicated healthcare agencies, and regional specialists compared."
        />
        <meta name="author" content="BioNixus" />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hreflang="en" href={CANONICAL} />
        <link rel="alternate" hreflang="x-default" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="Top 15 Healthcare Market Research Companies (2026) | BioNixus"
        description="Independent 2026 guide to the top healthcare and medical market research companies — global data platforms, dedicated agencies, and regional specialists compared."
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="en_US"
      />
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground">Healthcare Market Research Companies</span>
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
              Top 15 Healthcare Market Research Companies (2026)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              This 2026 guide ranks 15 healthcare market research companies — spanning global data and analytics
              providers, dedicated primary-research specialists, and regional GCC/MENA firms — to help pharma, biotech,
              and medtech buyers shortlist a partner in minutes rather than weeks.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              Choosing a healthcare market research partner is different from choosing a general-purpose research
              agency. Pharma, biotech, and medtech buyers are usually evaluating vendors against a specific mix of
              requirements: access to verified physicians, payers, and patients — not general consumer panels;
              therapeutic-area fluency; regulatory literacy around HCP engagement and patient privacy; and,
              increasingly, the ability to operate across multiple regulatory environments at once. This list mixes
              large data/analytics providers, dedicated healthcare primary-research agencies, and regional specialists
              — including BioNixus — because the &quot;best&quot; company depends entirely on the question being asked.
            </p>
            <p className="text-sm text-muted-foreground">
              Published July 2026 · By BioNixus Research Team · 16 min read
            </p>
          </div>
        </section>

        {/* Quick answer */}
        <section className="section-padding pb-8">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                Quick Answer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The largest healthcare market research companies by data scale are IQVIA, GlobalData Healthcare, and
                Clarivate; the largest dedicated primary-research agencies are Ipsos Healthcare, Escalent, and
                Research Partnership (Inizio Ignite). Specialist and regional firms — including M3 Global Research,
                Sermo, Adelphi Real World, and BioNixus (MENA/GCC and expanding Asia) — are often the better fit for
                a narrowly defined brief. Use this list to shortlist by capability match, not brand size alone.
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

        {/* CTA block 1 */}
        <section className="section-padding py-10 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-3">
              Need primary research on this market?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Talk to our team about physician, payer, and patient research across MENA/GCC and expanding Asia markets.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Talk to our team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Table of contents */}
        <section className="section-padding py-8 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#firm-profiles" className="text-sm text-primary hover:underline flex items-center gap-2">
                <Building2 className="w-4 h-4" /> 15 company profiles
              </a>
              <a href="#comparison" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> How these were selected
              </a>
              <a href="#buyer-criteria" className="text-sm text-primary hover:underline flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Comparison criteria
              </a>
              <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Frequently asked questions
              </a>
            </div>
          </div>
        </section>

        {/* Buyer criteria */}
        <section className="section-padding py-16" id="buyer-criteria">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              How These Were Selected — and How to Compare Them
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              There is no single &quot;biggest&quot; or &quot;best&quot; healthcare market research company — the
              right vendor depends on what&apos;s being bought. Use these four criteria to compare any shortlist.
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
        <section className="section-padding py-16 bg-muted/30" id="firm-profiles">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              15 Healthcare Market Research Companies (2026)
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Ordered from broadest data/enterprise scale toward regional and methodological specialists. This is not
              a strict quality ranking — see &quot;How these were selected&quot; above for the comparison logic.
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

        {/* Selection methodology */}
        <section className="section-padding py-16" id="comparison">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              A Note on Methodology
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                This guide reflects publicly available company information (official sites and industry press) as of
                mid-2026. Company ownership, service lines, and group structures change — confirm current details
                directly with each firm before engaging. BioNixus is profiled in this guide and is transparent about
                its inclusion: it is positioned honestly as a regional MENA/GCC (and expanding Asia) primary-research
                specialist, not as the largest or most globally comprehensive option on this list.
              </p>
              <p>
                For corrections or updates,{' '}
                <Link to="/contact" className="text-primary hover:underline">contact our team</Link>. For BioNixus&apos;s
                own regional service pages, see{' '}
                <Link to="/healthcare-market-research" className="text-primary hover:underline">
                  healthcare market research
                </Link>{' '}
                and the{' '}
                <Link to="/gcc-market-access-guide" className="text-primary hover:underline">
                  GCC market access guide
                </Link>.
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
                { to: '/healthcare-market-research', label: 'Healthcare Market Research', desc: 'BioNixus core service hub.' },
                { to: '/iqvia-alternative', label: 'IQVIA Alternatives Compared', desc: 'Detailed comparison hub for IQVIA competitors.' },
                { to: '/heor-consulting', label: 'HEOR Consulting', desc: 'Economic modeling, RWE, payer research, and value dossiers.' },
                { to: '/insights/top-market-research-companies-egypt-2026', label: 'Market Research Companies in Egypt', desc: 'Country-specific comparison guide.' },
                { to: '/gcc-market-access-guide', label: 'GCC Market Access Guide', desc: 'Registration, pricing, and tenders across six GCC countries.' },
                { to: '/contact', label: 'Request a Proposal', desc: 'Get in touch for a scoped healthcare research engagement.' },
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

        {/* CTA block 2 */}
        <section className="section-padding py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Scope Healthcare Market Research With BioNixus
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Primary physician, payer, and patient research across MENA/GCC and expanding Asia markets — project-based,
              no enterprise minimum, senior-led design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/healthcare-market-research"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors"
              >
                View Healthcare Research Hub
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
