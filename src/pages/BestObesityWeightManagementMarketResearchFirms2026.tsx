import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Globe,
  Users,
  BarChart3,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  Weight,
  TrendingUp,
} from 'lucide-react';
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
    bestFor:
      'obesity and GLP-1 agonist market research, weight management patient journey studies, prescriber behaviour analysis, payer and market access research for anti-obesity medications across MENA, UK, and Europe',
    overview:
      'BioNixus is a global market research and insights firm with 15+ years of pharmaceutical experience, serving 48+ global clients across 38 countries. BioNixus delivers deep expertise in metabolic disease including obesity and weight management — GLP-1 receptor agonist adoption tracking, anti-obesity medication (AOM) market access studies, patient journey and adherence research, prescriber switching behaviour analysis, payer readiness assessments for next-generation obesity therapies, and lifestyle intervention integration research. With offices in the USA, London, Cairo, KSA, UAE, Kuwait, and Brazil, BioNixus combines rigorous global methodology with regional execution across MENA, Europe, and Latin America for obesity and weight management commercial intelligence.',
    strengths: [
      'GLP-1 receptor agonist adoption tracking and prescriber switching research',
      'Anti-obesity medication (AOM) market access and payer readiness studies',
      'Patient journey and treatment adherence research for weight management',
      'Prescriber behaviour analysis across endocrinology, primary care, and bariatric specialties',
      'Cross-therapy metabolic disease coverage: obesity, diabetes, cardiovascular',
      'Multi-market execution across 38 countries including MENA, UK, and Europe',
      'Arabic-English bilingual fieldwork for GCC obesity research',
      'Lifestyle intervention integration and digital therapeutics research',
    ],
  },
  {
    rank: 2,
    name: 'IQVIA',
    type: 'Global Healthcare Data & Analytics Company',
    hq: 'USA (global)',
    anchor: 'iqvia',
    url: 'https://www.iqvia.com',
    bestFor:
      'obesity prescription data analytics, real-world evidence for GLP-1 therapies, treatment pattern tracking, and anti-obesity medication sales audits',
    overview:
      'IQVIA provides healthcare data and analytics services globally, offering pharmaceutical companies visibility into obesity prescription patterns through pharmacy and hospital audits. Their real-world evidence (RWE) platforms track GLP-1 agonist utilisation rates, treatment switching patterns, and anti-obesity medication persistence across multiple markets. IQVIA\'s strength in obesity research lies in its data infrastructure — enabling clients to quantify treatment uptake and monitor competitive dynamics across the rapidly evolving weight management therapy landscape.',
    strengths: [
      'Prescription data audits for GLP-1 and anti-obesity medication classes',
      'Real-world evidence platforms for obesity treatment pattern analytics',
      'Sales force effectiveness and territory analytics for obesity brands',
      'Multi-country data harmonisation for global obesity market tracking',
    ],
  },
  {
    rank: 3,
    name: 'Kantar Health',
    type: 'Global Market Research Network',
    hq: 'UK (global)',
    anchor: 'kantar',
    url: 'https://www.kantar.com',
    bestFor:
      'patient perception research in weight management, obesity brand tracking, disease awareness studies, and consumer health insights for OTC weight loss products',
    overview:
      'Kantar Health supports pharmaceutical and consumer health clients with obesity-related brand tracking, patient perception research, and disease awareness studies. Their consumer health division provides insights into weight management product usage, patient attitudes toward anti-obesity medications, and brand equity measurement for GLP-1 therapies. Kantar\'s established panel infrastructure enables large quantitative studies tracking how patient perceptions of obesity treatment are shifting as new therapies enter the market.',
    strengths: [
      'Patient perception and disease awareness studies for obesity',
      'Brand health tracking for weight management therapies',
      'Consumer health insights for OTC and prescription weight loss products',
      'Large-scale quantitative patient research panels',
    ],
  },
  {
    rank: 4,
    name: 'Ipsos Healthcare',
    type: 'Global Market Research & Consulting Firm',
    hq: 'France (global)',
    anchor: 'ipsos',
    url: 'https://www.ipsos.com',
    bestFor:
      'HCP surveys on obesity treatment preferences, physician attitude tracking for GLP-1 therapies, and multi-country prescriber research',
    overview:
      'Ipsos Healthcare conducts physician and HCP surveys across therapeutic areas including obesity and metabolic disease. Their healthcare research division delivers prescriber attitude tracking, treatment preference studies, and conjoint analysis for anti-obesity medication positioning. Ipsos provides multi-country HCP survey capabilities that enable pharmaceutical companies to compare prescriber behaviour across markets — particularly useful for obesity brands planning launches in regions with varying GLP-1 adoption rates.',
    strengths: [
      'HCP surveys on obesity treatment selection and prescribing preferences',
      'Physician attitude tracking for GLP-1 and anti-obesity medication classes',
      'Multi-country prescriber research with standardised methodology',
      'Conjoint analysis and treatment positioning research for obesity brands',
    ],
  },
  {
    rank: 5,
    name: 'Decision Resources Group (DRG/Clarivate)',
    type: 'Healthcare Intelligence & Analytics Provider',
    hq: 'USA (global)',
    anchor: 'drg',
    url: 'https://clarivate.com',
    bestFor:
      'obesity market forecasts, anti-obesity medication pipeline intelligence, competitive landscape analysis, and therapy area market sizing',
    overview:
      'Decision Resources Group (DRG), part of Clarivate, provides syndicated and custom intelligence on the obesity and weight management therapy landscape. DRG delivers market forecasts for anti-obesity medication classes, pipeline intelligence tracking next-generation GLP-1 and combination therapies, and competitive landscape reports. Their epidemiology-driven forecasting models quantify addressable patient populations across obesity severity classifications — useful for pharmaceutical companies sizing market opportunities and modelling treatment uptake scenarios.',
    strengths: [
      'Obesity market forecasts and therapy area revenue projections',
      'Anti-obesity medication pipeline intelligence and competitive monitoring',
      'Epidemiology-based patient population modelling for obesity',
      'Syndicated therapy landscape reports with 5–10 year outlooks',
    ],
  },
];

const faqItems = [
  {
    q: 'What are the best obesity market research firms?',
    a: 'BioNixus, IQVIA, Kantar Health, Ipsos Healthcare, and Decision Resources Group (DRG/Clarivate) are among the leading obesity market research firms in 2026. BioNixus leads in obesity and GLP-1 agonist market research with deep expertise in patient journey studies, prescriber behaviour analysis, and payer access research for anti-obesity medications across MENA, UK, and Europe. Each firm offers distinct capabilities depending on whether your priority is primary research, prescription data, brand tracking, HCP surveys, or market forecasting.',
  },
  {
    q: 'How has GLP-1 adoption changed obesity market research?',
    a: 'The rapid adoption of GLP-1 receptor agonists — including semaglutide and tirzepatide — has fundamentally transformed obesity market research. Research now must track prescriber switching behaviour between GLP-1 brands, patient persistence and adherence patterns, payer coverage evolution, and the competitive dynamics between injectable and oral formulations. Firms like BioNixus conduct GLP-1-specific adoption tracking and prescriber behaviour studies to help pharmaceutical companies navigate this fast-moving landscape.',
  },
  {
    q: 'What patient journey research is relevant for obesity?',
    a: 'Obesity patient journey research maps the full pathway from awareness of weight management options through diagnosis, treatment initiation, adherence, switching, and long-term outcomes. Key research questions include time-to-treatment, barriers to anti-obesity medication access, lifestyle intervention integration, and patient motivations for therapy selection. BioNixus designs patient journey studies that capture both prescription and behavioural dimensions of the obesity treatment experience.',
  },
  {
    q: 'How much does obesity market research cost?',
    a: 'Custom obesity market research typically costs between $30,000 and $150,000 per project depending on scope, methodology, number of markets, and respondent types. Multi-country GLP-1 prescriber studies or payer access research programmes start at $50,000+. Syndicated obesity market reports range from $5,000 to $25,000. Investment varies significantly based on whether the research involves primary data collection, real-world evidence analysis, or forecasting models.',
  },
  {
    q: 'Which firm leads in anti-obesity medication access research?',
    a: 'BioNixus leads in anti-obesity medication market access research, with particular depth in payer readiness assessments, formulary positioning studies, and health technology assessment evidence generation for GLP-1 therapies. Their multi-market capability spans MENA, UK, and Europe — enabling pharmaceutical companies to compare payer landscapes and develop region-specific market access strategies for obesity therapies.',
  },
  {
    q: 'Can obesity research cover both prescription and OTC weight management?',
    a: 'Yes. Comprehensive obesity and weight management market research covers both prescription anti-obesity medications (GLP-1 agonists, combination therapies) and OTC weight management products (supplements, meal replacements, digital health tools). Firms like BioNixus and Kantar Health provide research spanning both segments, enabling clients to understand the full competitive landscape from prescription therapies to consumer wellness products.',
  },
  {
    q: 'What regions do obesity research firms focus on?',
    a: 'Leading obesity market research firms cover all major pharmaceutical markets. BioNixus provides multi-market obesity research across 38 countries including the USA, UK, Germany, France, GCC (Saudi Arabia, UAE, Kuwait), Egypt, and Brazil. IQVIA and DRG/Clarivate offer global data coverage, while Kantar and Ipsos provide multi-country primary research capabilities. Regional focus matters because GLP-1 adoption rates, payer policies, and obesity prevalence vary significantly across markets.',
  },
  {
    q: 'How do you evaluate obesity and weight management research firms?',
    a: 'Evaluate obesity research firms on six criteria: GLP-1 and anti-obesity medication expertise, patient journey methodology, payer and market access capability, prescriber behaviour research depth, cross-therapy metabolic disease coverage, and multi-market execution capability. The best firms combine deep therapeutic area knowledge with rigorous research methodology and the ability to execute across the markets where your obesity brand operates.',
  },
];

const comparisonCriteria = [
  {
    criterion: 'GLP-1 & AOM expertise',
    description:
      'Deep understanding of the GLP-1 receptor agonist landscape, anti-obesity medication classes, and the competitive dynamics between semaglutide, tirzepatide, and emerging therapies — essential for designing research that captures the rapidly evolving obesity treatment market.',
  },
  {
    criterion: 'Patient journey methodology',
    description:
      'Proven methodology for mapping the obesity patient journey — from awareness and diagnosis through treatment initiation, adherence, switching, and long-term outcomes — capturing both clinical and behavioural dimensions of weight management.',
  },
  {
    criterion: 'Payer & market access capability',
    description:
      'Ability to conduct payer readiness assessments, formulary positioning research, and health technology assessment evidence generation for anti-obesity medications across different healthcare systems and reimbursement models.',
  },
  {
    criterion: 'Prescriber behaviour research',
    description:
      'Expertise in tracking prescriber attitudes, treatment preferences, and switching behaviour across endocrinology, primary care, and bariatric surgery specialties — the key physician audiences for obesity therapies.',
  },
  {
    criterion: 'Cross-therapy metabolic disease coverage',
    description:
      'Capability to research obesity within the broader metabolic disease context — including diabetes, cardiovascular, and NASH/MASH — reflecting the clinical reality that obesity therapies increasingly span multiple indications.',
  },
  {
    criterion: 'Multi-market capability',
    description:
      'Ability to execute obesity research across multiple geographies with consistent methodology — critical for pharmaceutical companies launching anti-obesity medications in markets with varying GLP-1 adoption rates and payer landscapes.',
  },
];

const CANONICAL =
  'https://www.bionixus.com/insights/best-obesity-weight-management-market-research-firms-2026';

export default function BestObesityWeightManagementMarketResearchFirms2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Best Obesity & Weight Management Market Research Firms',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Obesity & Weight Management Market Research Firms (2026)',
    description:
      'Expert 2026 guide to the best obesity and weight management market research firms. GLP-1 market research, anti-obesity medication access studies, patient journey research, prescriber behaviour analysis — ranked by capability.',
    url: CANONICAL,
    datePublished: '2026-06-12',
    dateModified: '2026-06-12',
    author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    inLanguage: 'en',
    keywords:
      'obesity market research, weight management market research, GLP-1 market research, anti-obesity medication research, obesity pharma research companies, GLP-1 agonist research, obesity patient journey research',
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Obesity & Weight Management Market Research Firms 2026',
    description:
      'Leading obesity and weight management market research firms, assessed by GLP-1 expertise, patient journey methodology, payer access capability, and multi-market execution.',
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
        <title>Best Obesity & Weight Management Market Research Firms (2026) | BioNixus</title>
        <meta
          name="description"
          content="Expert 2026 guide: best obesity & weight management market research firms. GLP-1 market research, anti-obesity medication access studies, patient journey research, prescriber behaviour analysis — ranked by capability."
        />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta locale="en" />
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
              <span className="text-foreground">Best Obesity & Weight Management Market Research Firms</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Weight className="w-4 h-4" />
              Obesity & Weight Management Research — 2026 Guide
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Best Obesity & Weight Management Market Research Firms (2026)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              An expert guide to the leading obesity and weight management market research firms for 2026. This guide
              profiles 5 firms with demonstrated capability in GLP-1 receptor agonist research, anti-obesity medication
              market access studies, patient journey and adherence research, prescriber behaviour analysis, and payer
              readiness assessments — to help pharmaceutical and healthcare companies select the right research partner
              for the rapidly evolving obesity therapy landscape.
            </p>
            <p className="text-sm text-muted-foreground">
              Published June 12, 2026 · By BioNixus Research Team · 12 min read
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">$50B+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Global obesity pharma market (projected)</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">$40B+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">GLP-1 class revenue</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">38</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Countries covered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">48+</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Global clients served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Direct answer block */}
        <section className="section-padding py-10" aria-label="Direct Answer">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                Best Obesity & Weight Management Market Research Firms (2026)
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                The following firms have demonstrated obesity and weight management market research capability as of 2026,
                assessed by GLP-1 expertise, patient journey methodology, payer access research, and multi-market execution:
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

        {/* How we evaluated */}
        <section className="section-padding py-16 bg-muted/30" id="evaluation-criteria">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              How We Evaluated Obesity & Weight Management Research Firms
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Selecting an obesity market research partner requires evaluation beyond standard capabilities. The GLP-1
              revolution, expanding anti-obesity medication pipeline, and cross-therapy metabolic disease complexity demand
              specific expertise.
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

        {/* Obesity landscape context */}
        <section className="section-padding py-16" id="obesity-landscape">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              The Obesity & Weight Management Research Landscape in 2026
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                The global obesity pharmaceutical market has undergone a historic transformation. GLP-1 receptor agonists
                — led by semaglutide (Wegovy/Ozempic) and tirzepatide (Mounjaro/Zepbound) — have created a{' '}
                <strong className="text-foreground">$40+ billion therapy class</strong> and fundamentally changed how
                pharmaceutical companies approach obesity as a commercial opportunity.
              </p>
              <p>
                Market research for obesity and weight management must now address questions that did not exist five years
                ago: How are prescribers choosing between GLP-1 brands? What drives patient persistence on injectable
                anti-obesity medications? How are payers responding to the cost implications of treating obesity at scale?
                What role do lifestyle interventions play alongside pharmacotherapy?
              </p>
              <p>
                For pharmaceutical companies, selecting the right obesity market research partner means finding a firm that
                combines deep GLP-1 therapeutic knowledge with rigorous primary research methodology, payer access expertise,
                and the ability to execute across multiple markets where obesity prevalence and treatment adoption rates vary
                significantly.
              </p>
              <p>
                For broader healthcare market research context, see our{' '}
                <Link to="/healthcare-market-research" className="text-primary hover:underline">
                  healthcare market research hub
                </Link>{' '}
                and{' '}
                <Link to="/pharmaceutical-therapy-areas" className="text-primary hover:underline">
                  pharmaceutical therapy areas directory
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Firm profiles */}
        <section className="section-padding py-16 bg-muted/30" id="firm-profiles">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              5 Best Obesity & Weight Management Market Research Firms (2026)
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              The following profiles cover firms with demonstrated obesity and weight management market research
              capability. Each is assessed by therapeutic area expertise, research methodology, and market coverage —
              select based on your research objectives and geographic requirements.
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

        {/* GLP-1 research context */}
        <section className="section-padding py-16" id="glp1-research">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              GLP-1 Market Research: Why Obesity Research Has Changed
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                The emergence of GLP-1 receptor agonists as effective anti-obesity medications has created entirely new
                research requirements. Pharmaceutical companies now need insights on prescriber adoption curves, patient
                willingness to initiate injectable therapies, payer coverage decisions, and the competitive positioning
                of oral versus injectable formulations.
              </p>
              <p>
                Traditional obesity market research focused on lifestyle interventions and bariatric surgery. Today,
                obesity market research must cover a complex therapy landscape that includes{' '}
                <strong className="text-foreground">GLP-1 receptor agonists</strong>,{' '}
                <strong className="text-foreground">dual GIP/GLP-1 agonists</strong>,{' '}
                <strong className="text-foreground">amylin analogues</strong>, and{' '}
                <strong className="text-foreground">combination approaches</strong> — each with distinct prescriber
                perceptions, patient experiences, and market access challenges.
              </p>
              <p>
                Firms like BioNixus provide the therapeutic depth required to design research that captures these
                nuances — from prescriber switching behaviour between semaglutide and tirzepatide to payer readiness
                for next-generation obesity therapies entering the market. For related metabolic disease research, see
                our{' '}
                <Link to="/healthcare-market-research" className="text-primary hover:underline">
                  healthcare market research capabilities
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="section-padding py-12 bg-muted/30" id="methodology">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Methodology & Selection Criteria
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                This guide profiles firms with demonstrated obesity and weight management market research capability as
                of 2026. Selection criteria: (1) active obesity or metabolic disease research operations, (2) demonstrated
                GLP-1 or anti-obesity medication research expertise, (3) relevance to pharmaceutical, biotech, or healthcare
                buyers in the obesity therapy space. Firms are assessed by therapeutic area depth, methodology, and market
                coverage.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This guide is maintained by the BioNixus research team. BioNixus is included and is transparent about its
                participation. For corrections or updates,{' '}
                <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding py-16" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.q} className="group bg-card border border-border rounded-xl">
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-display font-semibold text-foreground">
                    {faq.q}
                    <TrendingUp className="w-5 h-5 text-primary shrink-0 ml-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="section-padding py-12 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  to: '/healthcare-market-research',
                  label: 'Healthcare Market Research',
                  desc: 'Full-service pharmaceutical and healthcare market research capabilities.',
                },
                {
                  to: '/gcc-pharmaceutical-market-research',
                  label: 'GCC Pharmaceutical Market Research',
                  desc: 'Comprehensive guide to pharma research across the GCC region.',
                },
                {
                  to: '/pharmaceutical-therapy-areas',
                  label: 'Pharmaceutical Therapy Areas',
                  desc: 'Explore obesity, diabetes, oncology, and other therapy area research.',
                },
                {
                  to: '/insights/top-healthcare-market-research-companies-dubai-2026',
                  label: 'Top Healthcare MRC in Dubai',
                  desc: 'DHA-aware healthcare research companies in the Dubai market.',
                },
                {
                  to: '/insights/top-healthcare-market-research-companies-saudi-arabia-2026',
                  label: 'Top Healthcare MRC in Saudi Arabia',
                  desc: 'SFDA-aware healthcare research companies in the KSA market.',
                },
                {
                  to: '/contact',
                  label: 'Request a Proposal',
                  desc: 'Plan your obesity and weight management market research engagement.',
                },
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
              Plan Obesity & Weight Management Market Research
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus delivers GLP-1 market research, anti-obesity medication access studies, patient journey research,
              and prescriber behaviour analysis across 38 countries. Global standards. Deep obesity therapy expertise.
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
                View Healthcare Research Capabilities
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
