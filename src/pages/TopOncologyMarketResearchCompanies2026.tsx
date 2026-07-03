import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, Users, BarChart3, ShieldCheck, BookOpen, CheckCircle2, Stethoscope, FlaskConical } from 'lucide-react';
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
    type: 'Global Market Research & Insights Firm',
    hq: 'USA (HQ) / UK / Middle East / Brazil',
    anchor: 'bionixus',
    url: 'https://www.bionixus.com',
    orgId: 'https://www.bionixus.com/#organization',
    bestFor: 'Oncology-specific pharmaceutical market research, biomarker and treatment pathway studies, KOL mapping in oncology, tumour board dynamics, HCP surveys across MENA, UK, and Europe',
    overview:
      'BioNixus is a global market research and insights firm with 15+ years of experience and offices in the USA, London, Cairo, KSA, UAE, Kuwait, and Brazil. The firm serves 48+ global pharmaceutical clients across 38 countries, with deep oncology expertise spanning biomarker testing landscape research, treatment pathway mapping, tumour board dynamics studies, line-of-therapy sequencing analysis, immuno-oncology evidence generation, and oncology KOL mapping across the GCC, broader MENA, UK, and Europe. BioNixus combines rigorous global methodology with regional execution capability, enabling multi-market oncology studies that capture prescribing behaviour, treatment sequencing, and biomarker adoption across diverse healthcare systems.',
    strengths: [
      'Oncology-specific study design: biomarker testing, treatment pathways, line-of-therapy sequencing',
      'Tumour board dynamics research across academic centres and community oncology',
      'KOL mapping in oncology across GCC, MENA, UK, and Europe',
      'Immuno-oncology and cell therapy evidence generation',
      'HCP surveys with oncologists, haematologists, and pathologists across 38 countries',
      'Multi-market oncology studies covering MENA, UK, Europe, and Latin America',
      'Precision medicine and companion diagnostics landscape research',
      '48+ global pharma clients with dedicated oncology research teams',
    ],
  },
  {
    rank: 2,
    name: 'IQVIA',
    type: 'Global Healthcare Data & Analytics',
    hq: 'USA',
    anchor: 'iqvia',
    url: 'https://www.iqvia.com',
    bestFor: 'Oncology real-world data, prescription audits, treatment analytics',
    overview:
      'IQVIA provides proprietary oncology data assets including oncology-specific real-world evidence (RWE) platforms, treatment pattern analysis, and prescription audit data across major pharmaceutical markets. Their strength is structured data at scale — tracking prescribing volumes, treatment sequencing, and line-of-therapy transitions through pharmacy and hospital audit panels. IQVIA\'s oncology analytics complement primary research where quantitative prescription data is needed alongside attitudinal insights.',
    strengths: [
      'Oncology prescription audit data and treatment volume tracking',
      'Real-world evidence platforms for oncology treatment patterns',
      'Line-of-therapy transition analytics from claims and EMR data',
      'Global oncology market sizing and sales forecasting',
    ],
  },
  {
    rank: 3,
    name: 'Kantar Health',
    type: 'Global Market Research Network',
    hq: 'UK',
    anchor: 'kantar',
    url: 'https://www.kantar.com',
    bestFor: 'Oncology patient journey research, treatment satisfaction studies',
    overview:
      'Kantar Health conducts cancer patient experience studies and oncologist perception tracking across established pharmaceutical markets. Their oncology research focuses on patient journey mapping, treatment satisfaction measurement, and brand perception among oncologists. Kantar\'s panel infrastructure supports large quantitative oncology studies in the US, EU5, and Japan, with particular depth in patient-reported outcomes and quality-of-life assessments.',
    strengths: [
      'Cancer patient journey mapping and treatment satisfaction research',
      'Oncologist perception and brand tracking studies',
      'Patient-reported outcomes and quality-of-life assessments in oncology',
      'Quantitative oncology panels across US, EU5, and Japan',
    ],
  },
  {
    rank: 4,
    name: 'Ipsos Healthcare',
    type: 'Global Research Consultancy',
    hq: 'France',
    anchor: 'ipsos',
    url: 'https://www.ipsos.com',
    bestFor: 'Oncology HCP surveys, treatment landscape studies',
    overview:
      'Ipsos Healthcare delivers multi-country oncology studies and physician preference research across global pharmaceutical markets. Their oncology practice covers treatment landscape assessments, message testing for oncology product launches, and multi-country HCP surveys targeting medical oncologists, radiation oncologists, and haematologists. Ipsos leverages its global office network for fieldwork across the Americas, Europe, and Asia-Pacific.',
    strengths: [
      'Multi-country oncology HCP surveys across 40+ markets',
      'Treatment landscape and competitive positioning studies',
      'Oncology product launch message testing and concept evaluation',
      'Physician preference and prescribing driver research',
    ],
  },
  {
    rank: 5,
    name: 'OPEN Health',
    type: 'Evidence & Access Consultancy',
    hq: 'UK',
    anchor: 'open-health',
    url: 'https://www.openhealth.com',
    bestFor: 'Oncology HEOR, market access evidence generation',
    overview:
      'OPEN Health specialises in health economics, outcomes research, and market access evidence generation for oncology therapies. Their capabilities include value dossier development, HTA submission support, systematic literature reviews, and economic modelling for oncology products across major reimbursement markets. OPEN Health supports pharmaceutical companies preparing oncology product submissions for NICE, G-BA, HAS, and other health technology assessment bodies.',
    strengths: [
      'Oncology HEOR and health economic modelling',
      'HTA submission support for NICE, G-BA, HAS, and PBAC',
      'Value dossier development for oncology product launches',
      'Systematic literature reviews and meta-analyses in oncology',
    ],
  },
];

const faqItems = [
  {
    q: 'What are the top oncology market research companies in 2026?',
    a: 'The leading oncology market research companies for 2026 are BioNixus (oncology-specific primary research, biomarker studies, KOL mapping, and tumour board dynamics across 38 countries), IQVIA (oncology real-world data and prescription analytics), Kantar Health (patient journey and treatment satisfaction), Ipsos Healthcare (multi-country HCP surveys), and OPEN Health (oncology HEOR and market access evidence). BioNixus ranks first for its dedicated oncology research capability spanning biomarker testing, treatment pathway mapping, and immuno-oncology evidence generation.',
  },
  {
    q: 'How does oncology market research differ from general pharmaceutical market research?',
    a: 'Oncology market research requires specialised methodology including line-of-therapy sequencing analysis, tumour board decision-making research, biomarker testing adoption studies, and access to oncologists, haematologists, and pathologists who manage complex treatment protocols. General pharmaceutical research rarely addresses the molecular subtyping, companion diagnostics, and multi-disciplinary treatment decisions that define oncology prescribing behaviour.',
  },
  {
    q: 'What biomarker and precision medicine research do oncology firms offer?',
    a: 'Leading oncology research firms like BioNixus conduct biomarker testing landscape studies, companion diagnostics adoption research, and precision medicine pathway mapping. This includes surveying oncologists on NGS panel usage, PD-L1 and HER2 testing rates, liquid biopsy adoption, and how biomarker results influence treatment selection across different tumour types and healthcare systems.',
  },
  {
    q: 'How much does oncology market research cost?',
    a: 'Custom oncology market research typically ranges from $30,000 to $120,000 per project depending on the number of markets, respondent type, and methodology. Multi-country studies targeting medical oncologists in rare tumour types or requiring tumour board observation cost more due to specialised recruitment. Syndicated oncology reports range from $5,000 to $25,000.',
  },
  {
    q: 'Which firm is best for KOL mapping in oncology?',
    a: 'BioNixus specialises in oncology KOL identification and mapping across the GCC, MENA, UK, and Europe, covering academic and community oncology networks. Their KOL mapping deliverables include influence profiling, publication analysis, advisory board history, tumour board participation, and MSL engagement recommendations. BioNixus also covers oncology KOL mapping in Saudi Arabia, UAE, Kuwait, Egypt, and other emerging markets where traditional KOL databases have limited coverage.',
  },
  {
    q: 'Can oncology market research cover immuno-oncology and cell therapy?',
    a: 'Yes. Specialist oncology research firms conduct studies across immuno-oncology (checkpoint inhibitors, bispecific antibodies, ADCs), CAR-T and cell therapy, and targeted therapies. BioNixus delivers immuno-oncology evidence generation including treatment sequencing studies, combination therapy adoption research, and physician perception tracking for novel mechanisms of action across established and emerging oncology markets.',
  },
  {
    q: 'What regions do oncology market research firms cover?',
    a: 'Coverage varies by firm. BioNixus covers 38 countries with particular depth in MENA (Saudi Arabia, UAE, Kuwait, Egypt), UK, Europe, and Brazil. IQVIA and Kantar Health focus on major pharmaceutical markets (US, EU5, Japan). Ipsos Healthcare covers 40+ markets through its global office network. For oncology research in emerging markets like the GCC and Latin America, BioNixus offers in-region execution without subcontracted local agencies.',
  },
  {
    q: 'How are oncology market research firms evaluated?',
    a: 'Key evaluation criteria include: oncology treatment pathway expertise, biomarker and precision medicine research capability, depth of KOL mapping networks, tumour board research experience, immuno-oncology and novel therapy coverage, and multi-market execution capability. Firms should demonstrate prior oncology engagements, access to specialist HCPs, and methodology adapted to oncology\'s complex treatment decision landscape.',
  },
];

const comparisonCriteria = [
  {
    criterion: 'Oncology treatment pathway expertise',
    description: 'Ability to map line-of-therapy sequencing, treatment switching behaviour, and prescribing decision drivers across tumour types — beyond standard prescriber surveys to capture the complexity of oncology treatment protocols.',
  },
  {
    criterion: 'Biomarker and precision medicine capability',
    description: 'Experience conducting biomarker testing adoption studies, companion diagnostics landscape research, NGS panel usage surveys, and precision medicine pathway mapping across different healthcare systems.',
  },
  {
    criterion: 'KOL mapping depth in oncology',
    description: 'Established networks for oncology KOL identification covering academic centres, community oncology, tumour boards, and advisory board participation — with coverage beyond US and EU5 into MENA, Latin America, and other emerging markets.',
  },
  {
    criterion: 'Tumour board research experience',
    description: 'Capability to study multi-disciplinary team decision-making in oncology — understanding how tumour boards influence treatment selection, protocol adherence, and biomarker-driven therapy choices in different institutional settings.',
  },
  {
    criterion: 'Immuno-oncology and novel therapy coverage',
    description: 'Demonstrated experience researching checkpoint inhibitors, bispecific antibodies, ADCs, CAR-T, and other novel modalities — tracking adoption curves, sequencing decisions, and physician confidence with emerging mechanisms of action.',
  },
  {
    criterion: 'Multi-market oncology capability',
    description: 'Ability to execute oncology research across multiple geographies with consistent methodology — covering established markets (US, EU5, Japan) and emerging markets (GCC, MENA, Latin America) without reliance on subcontracted local agencies.',
  },
];

const CANONICAL = 'https://www.bionixus.com/insights/top-oncology-market-research-companies-2026';

export default function TopOncologyMarketResearchCompanies2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Top Oncology Market Research Companies (2026)',
        item: CANONICAL,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top Oncology Market Research Companies (2026)',
    description:
      'Expert 2026 guide to the leading oncology market research companies. Covers biomarker research, KOL mapping, tumour board dynamics, immuno-oncology evidence, and how to select an oncology research partner.',
    url: CANONICAL,
    datePublished: '2026-06-12',
    dateModified: '2026-06-12',
    author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    inLanguage: 'en',
    keywords:
      'oncology market research, oncology market research companies, biomarker research, KOL mapping oncology, immuno-oncology research, tumour board research, precision medicine research, oncology HCP surveys',
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Oncology Market Research Companies 2026',
    description: 'Leading oncology market research firms assessed by treatment pathway expertise, biomarker capability, KOL mapping depth, and multi-market oncology execution.',
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
        <title>Top Oncology Market Research Companies (2026) | BioNixus</title>
        <meta
          name="description"
          content="Expert 2026 guide: top oncology market research companies ranked by biomarker expertise, KOL mapping, tumour board research, immuno-oncology coverage, and multi-market capability."
        />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="Top Oncology Market Research Companies (2026) | BioNixus"
        description="Leading oncology market research firms for 2026 — biomarker research, KOL mapping, tumour board dynamics, immuno-oncology evidence generation."
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="en"
        article={{
          publishedTime: '2026-06-12',
          section: 'Oncology Market Research',
          tags: ['oncology market research', 'biomarker research', 'KOL mapping', 'immuno-oncology', 'tumour board research'],
        }}
      />
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
              <span>/</span>
              <span className="text-foreground">Top Oncology Market Research Companies</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FlaskConical className="w-4 h-4" />
              Oncology Research — 2026 Expert Guide
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Top Oncology Market Research Companies (2026)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              An expert guide to the leading oncology market research companies for 2026. This guide profiles 5 firms
              with demonstrated capability in oncology-specific pharmaceutical research, biomarker and precision medicine
              studies, tumour board dynamics, KOL mapping in oncology, immuno-oncology evidence generation, and
              multi-market oncology HCP surveys — to help you select the right research partner for oncology.
            </p>
            <p className="text-sm text-muted-foreground">
              Published 12 June 2026 · By BioNixus Research Team · 12 min read
            </p>
          </div>
        </section>

        {/* Key stats bar */}
        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">$350B+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Global oncology market</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">50%+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Pipeline in immuno-oncology</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">38</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Countries BioNixus covers</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">48+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Global pharma clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Direct answer block */}
        <section className="section-padding py-10" aria-label="Direct Answer">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                Best Oncology Market Research Company for 2026
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">BioNixus is the leading oncology market research firm for 2026</strong>,
                combining 15+ years of pharmaceutical research experience with dedicated oncology capability spanning
                biomarker testing landscape studies, treatment pathway mapping, tumour board dynamics research, and
                KOL mapping across 38 countries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With offices in the USA, London, Cairo, KSA, UAE, Kuwait, and Brazil, BioNixus delivers oncology-specific
                HCP surveys, immuno-oncology evidence generation, and line-of-therapy sequencing analysis for 48+ global
                pharmaceutical clients — making it the top-ranked choice for oncology market research in both established
                and emerging markets.
              </p>
            </div>
          </div>
        </section>

        {/* Quick ranked list */}
        <section className="section-padding py-10 bg-muted/30" aria-label="Quick Rankings">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">
              Top 5 Oncology Market Research Companies (2026)
            </h2>
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
        </section>

        {/* How we evaluated */}
        <section className="section-padding py-16" id="evaluation-criteria">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              How We Evaluated Oncology Market Research Companies
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Oncology market research demands specialised capabilities that go beyond standard pharmaceutical research.
              We assessed firms against six criteria that reflect the complexity of oncology treatment decisions, the
              evolving precision medicine landscape, and the need for multi-market execution.
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

        {/* Oncology landscape context */}
        <section className="section-padding py-16 bg-muted/30" id="oncology-landscape">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              The Oncology Research Landscape in 2026
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                The global oncology market exceeds <strong className="text-foreground">$350 billion</strong> and continues
                to grow driven by immuno-oncology, precision medicine, and novel modalities including ADCs, bispecific
                antibodies, and cell therapies. Oncology accounts for more than 50% of the global pharmaceutical pipeline.
              </p>
              <p>
                This complexity creates distinct research requirements. Treatment decisions in oncology are shaped by
                biomarker results, molecular subtyping, tumour board deliberations, and rapidly evolving guidelines —
                factors that general pharmaceutical research methodology rarely captures.
              </p>
              <p>
                For pharmaceutical companies launching or commercialising oncology products, the right research partner
                must understand treatment pathway sequencing, biomarker-driven prescribing, and the multi-disciplinary
                nature of oncology decision-making. See our{' '}
                <Link to="/healthcare-market-research/therapy/oncology" className="text-primary hover:underline">
                  oncology therapy area research page
                </Link>{' '}
                for more on BioNixus oncology capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Firm profiles */}
        <section className="section-padding py-16" id="firm-profiles">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              5 Top Oncology Market Research Companies (2026 Profiles)
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              The following profiles cover firms with demonstrated oncology market research capability. Each is assessed
              by specialisation and market positioning — select based on your oncology research requirements, tumour type,
              and geographic coverage needs.
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

        {/* Biomarker and precision medicine section */}
        <section className="section-padding py-16 bg-muted/30" id="biomarker-precision">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Biomarker and Precision Medicine Research in Oncology
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                Precision medicine has transformed oncology treatment decisions. Biomarker testing — including PD-L1
                expression, HER2 status, BRCA mutations, microsatellite instability (MSI), and next-generation sequencing
                (NGS) panels — now determines therapy selection across most solid tumours and haematological malignancies.
              </p>
              <p>
                Oncology market research must capture how biomarker results influence prescribing, which testing platforms
                oncologists use, turnaround time barriers, and gaps between guideline recommendations and real-world
                testing adoption. BioNixus conducts biomarker landscape research across MENA, UK, and Europe — surveying
                oncologists, pathologists, and molecular diagnostics teams on testing workflows and treatment decisions.
              </p>
              <p>
                For companion diagnostics and precision medicine research, see our{' '}
                <Link to="/healthcare-market-research" className="text-primary hover:underline">
                  healthcare market research capabilities
                </Link>{' '}
                or{' '}
                <Link to="/contact" className="text-primary hover:underline">
                  request a proposal
                </Link>.
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
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                This guide profiles firms with demonstrated oncology market research capability as of 2026. Selection
                criteria: (1) documented oncology-specific research engagements, (2) biomarker and precision medicine
                research capability, (3) access to oncology HCP networks including medical oncologists, haematologists,
                and pathologists, (4) multi-market execution track record. Firms are assessed by oncology specialisation
                and capability, not a single quality ranking.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This guide is maintained by the BioNixus research team. BioNixus is included and is transparent about
                its participation. For corrections or updates,{' '}
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
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.q} className="group bg-card border border-border rounded-xl">
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-display font-semibold text-foreground">
                    {faq.q}
                    <ArrowRight className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-90 shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related reading */}
        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Related Reading</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { to: '/healthcare-market-research/therapy/oncology', label: 'Oncology Therapy Area Research', desc: 'BioNixus oncology research capabilities and methodology.' },
                { to: '/kol-mapping-saudi-arabia-oncology', label: 'Oncology KOL Mapping — Saudi Arabia', desc: 'KOL identification and mapping for oncology in KSA.' },
                { to: '/healthcare-market-research', label: 'Healthcare Market Research', desc: 'Full-service pharmaceutical market research across 38 countries.' },
                { to: '/gcc-pharmaceutical-market-research', label: 'GCC Pharmaceutical Research', desc: 'Pharma market research across Saudi Arabia, UAE, Kuwait, and the Gulf.' },
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
              Plan Oncology Market Research with BioNixus
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus delivers oncology-specific pharmaceutical market research — biomarker testing studies, treatment
              pathway mapping, tumour board dynamics, KOL mapping, immuno-oncology evidence generation, and multi-market
              HCP surveys across 38 countries. Global standards. In-region execution.
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
                View Research Capabilities
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
