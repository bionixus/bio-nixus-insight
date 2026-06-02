import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const CANONICAL = '/market-research-home';
const PAGE_URL = `https://www.bionixus.com${CANONICAL}`;
const SEO_TITLE = 'Market Research Data & Insights | GCC & Middle East | BioNixus';
const SEO_DESCRIPTION =
  'Decision-ready market research across GCC and Middle East. BioNixus delivers pharma and healthcare insights for Saudi Arabia, UAE, Kuwait, Qatar, Egypt and beyond — quant, qual, payer, and access research.';

const faqItems = [
  {
    question: 'How do market research data and insights support decisions in Saudi Arabia and the UAE?',
    answer:
      'Market research converts raw data into clear evidence about physicians, payers, hospitals, and patients. In Saudi Arabia, the combination of NUPCO formulary dynamics, SCFHS-regulated physician workforce, and Vision 2030 transformation creates a research landscape that requires local expertise and culturally nuanced execution. In UAE, the tripartite DHA/DOH/MOHAP structure means formulary access strategies must be emirate-specific. BioNixus designs research from the decision backward — defining the minimum viable evidence for each commercial, medical, or market access choice — rather than collecting data for its own sake.',
  },
  {
    question: 'What types of market research does BioNixus conduct?',
    answer:
      'BioNixus delivers quantitative physician surveys, qualitative in-depth interviews (IDIs), KOL mapping, advisory boards, patient journey research, payer and formulary research, brand tracking, market access intelligence, real-world evidence studies, HEOR economic modelling, and competitive landscape analysis. All programmes are designed for pharmaceutical, biotech, and medical device companies operating in GCC and wider Middle East markets.',
  },
  {
    question: 'What makes healthcare market research insights trustworthy?',
    answer:
      'Trustworthy insights require transparent sampling, validated instruments, documented fieldwork controls, and analysis that connects findings to commercial questions. BioNixus applies a five-layer quality framework: (1) respondent verification against national medical registers (SCFHS, DHA, DOH), (2) screener-to-survey consistency checks, (3) back-translation validation for Arabic instruments, (4) attention trap and speeder removal in online surveys, and (5) principal-led analysis review before every report delivery.',
  },
  {
    question: 'How does BioNixus handle multi-country GCC research programmes?',
    answer:
      'Multi-country GCC programmes are managed from a single project lead with country-level field coordinators in each market. BioNixus operates pre-verified panels across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, and Egypt. Centralised project governance ensures quota consistency, cross-country comparability, and on-time delivery across markets that may have conflicting regulatory or fieldwork timing constraints (e.g., Ramadan scheduling, national holidays).',
  },
  {
    question: 'Where should teams start when they need Middle East market research?',
    answer:
      'Start by defining the decision, the audience, and the evidence gap. Then align research scope to timeline and regulatory context. BioNixus supports teams with a consultancy-led intake process: a 30-minute briefing call to confirm objectives, a scope proposal within 48 hours, and a project plan aligned to your internal decision milestones. For teams early in scoping, the GCC keyword action plan and market access guide pages provide context on what types of evidence matter most in each market.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: PAGE_URL,
    isPartOf: { '@type': 'WebSite', name: 'BioNixus', url: 'https://www.bionixus.com' },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Market Research Insights', href: CANONICAL },
  ]),
  buildFAQSchema(faqItems),
];

const SERVICES = [
  {
    title: 'Quantitative Research',
    description: 'Statistically robust HCP and patient surveys across GCC. SCFHS/DHA-verified panels, n=50–500+, conjoint, MaxDiff, DCE methodologies.',
    to: '/quantitative-healthcare-market-research',
    tag: 'Surveys · Panels · Analytics',
  },
  {
    title: 'Qualitative Research',
    description: 'IDIs, focus groups, advisory boards, and KOL interviews. Arabic/English bilingual moderation, ISO 20252 quality standards.',
    to: '/qualitative-market-research',
    tag: 'IDIs · Advisory Boards · KOL',
  },
  {
    title: 'Market Access & Payer',
    description: 'NUPCO, DHA, DOH, and SFDA payer intelligence. Formulary dossier support, pricing research, and HTA evidence preparation.',
    to: '/gcc-market-access-guide',
    tag: 'Payer · Formulary · HTA',
  },
  {
    title: 'Real-World Evidence',
    description: 'Chart review, physician CRF programmes, and patient registries. SFDA NG-REG-005 compliant non-interventional study design.',
    to: '/real-world-evidence-gcc',
    tag: 'RWE · Chart Review · Registries',
  },
  {
    title: 'Brand Tracking',
    description: 'Multi-wave HCP brand equity trackers covering awareness, prescribing intent, promotional equity, and NPS across GCC.',
    to: '/brand-tracking-pharma-gcc',
    tag: 'Tracking · Awareness · Equity',
  },
  {
    title: 'Patient Insights',
    description: 'Patient journey mapping, adherence research, caregiver interviews, and patient support programme evaluation across Middle East.',
    to: '/patient-journey-research-gcc',
    tag: 'Journey · Adherence · PSP',
  },
];

const MARKETS = [
  { name: 'Saudi Arabia', size: '$8.5B market', note: 'SCFHS-verified panel · NUPCO/SFDA expertise', to: '/market-research-saudi-arabia-pharmaceutical' },
  { name: 'UAE', size: '$4.5B market', note: 'DHA · DOH · MOHAP tripartite coverage', to: '/uae-pharmaceutical-market-research' },
  { name: 'Kuwait', size: '$1.5B market', note: 'MOPH formulary · private sector research', to: '/market-research-kuwait' },
  { name: 'Qatar', size: '$1.2B market', note: 'SCH/NHIC payer intelligence · HCP panel', to: '/market-research-ksa' },
  { name: 'Egypt', size: '106M population', note: 'CAPMAS data · MOHP access research', to: '/market-research-egypt' },
  { name: 'GCC-wide', size: '6 markets', note: 'Single project governance · cross-country', to: '/healthcare-market-research-agency-gcc' },
];

export default function MarketResearchHome() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        {jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <Navbar />

      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Market Research Insights', href: CANONICAL },
          ]}
        />

        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70 mb-4">
              GCC &amp; Middle East · Healthcare &amp; Pharma
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight">
              Market Research Data<br className="hidden md:block" /> &amp; Insights
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mb-8">
              Decision-ready evidence for pharmaceutical and healthcare teams across Saudi Arabia, UAE, Kuwait, Qatar,
              Egypt, and beyond. Quant, qual, payer, and real-world research — designed for the decisions your
              team must make in the next 6–12 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-block bg-white text-primary font-semibold px-7 py-3 rounded-lg hover:bg-white/90 transition-colors text-center"
              >
                Get a research proposal
              </Link>
              <Link
                to="/healthcare-market-research"
                className="inline-block border border-white/40 text-primary-foreground font-semibold px-7 py-3 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Explore services
              </Link>
            </div>
          </div>
        </section>

        {/* Proof metrics */}
        <section className="py-10 border-b border-border bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '8,000+', label: 'Verified GCC HCPs in panel' },
                { value: '10+', label: 'Middle East markets covered' },
                { value: '48 hrs', label: 'Proposal turnaround time' },
                { value: '15+ yrs', label: 'Regional pharma research expertise' },
              ].map(({ value, label }) => (
                <div key={label} className="py-4">
                  <p className="text-3xl font-display font-bold text-primary mb-1">{value}</p>
                  <p className="text-sm text-muted-foreground leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Why it matters</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In GCC markets, regulatory updates, tender cycles, and formulary changes can shift competitive
                  positions within a quarter. Timely, well-designed research converts market signals into evidence
                  that leadership can act on — not reports that sit in a shared drive.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-3">What the evidence says</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pharma teams that invest in primary research before major access or launch decisions report fewer
                  pricing resubmissions, faster formulary listing timelines, and better MSL engagement quality.
                  Local evidence reduces rework by catching market assumptions that don't hold in KSA or UAE contexts.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-3">What to do next</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Identify the decision you need to make in the next 90 days. Define the evidence gap. BioNixus
                  will scope the minimum viable research programme — not the largest possible study — to fill
                  that gap within your timeline and budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-14 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-2">Research services</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Every module is designed to answer a specific category of strategic question — not to generate data volume.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map(({ title, description, to, tag }) => (
                <Link
                  key={to}
                  to={to}
                  className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">{tag}</p>
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Market coverage */}
        <section className="py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-2">Market coverage</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Primary research execution, payer intelligence, and field operations across the full Middle East &amp; North Africa region.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {MARKETS.map(({ name, size, note, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {name}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">
                      {size}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Long-form content */}
        <section className="py-14 bg-muted/20">
          <div className="container-wide max-w-4xl mx-auto space-y-12 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                From research design to insight delivery
              </h2>
              <p className="mb-4">
                Strong market research begins with a precise question. Whether the objective is sizing a therapy area,
                understanding switching behaviour, mapping payer criteria, or evaluating a launch narrative, the research
                design should match the evidence standard required for the decision. Quantitative programmes generate
                structured data at scale, while qualitative research explains motivations, barriers, and the language that
                quantitative instruments may miss.
              </p>
              <p>
                BioNixus approaches each engagement as a consultancy partnership. That means aligning fieldwork realities
                with analytical rigour, ensuring translations preserve clinical meaning, and building reporting that
                connects data tables to strategic implications. The outcome is insight that teams can use in workshops,
                leadership reviews, and cross-functional planning sessions — not a PDF that requires a separate
                interpretation layer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Saudi Arabia: market context and research execution
              </h2>
              <p className="mb-4">
                Saudi Arabia remains the most important pharmaceutical market in GCC, valued at approximately $8.5 billion
                in 2024. NUPCO controls centralised procurement for the 260+ MOH hospital network — any drug not on
                the NUPCO formulary is inaccessible to the majority of Saudi patients treated in the government system.
                Research that maps NUPCO evidence requirements, therapeutic committee priorities, and MOH clinical
                practice guideline alignment gives pharma teams a measurable head start in the access sequencing process.
              </p>
              <p>
                Effective market research in Saudi Arabia combines representative survey data — verified against the
                SCFHS register — with depth interviews covering specialists, payers, and pharmacy stakeholders. The
                right methodology mix depends on the therapy area, competitive intensity, and the specific decision being
                supported. When research is executed with local nuance (Ramadan scheduling, gender-segregated fieldwork,
                Arabic-first instruments), findings are more reliable and require less post-delivery interpretation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                UAE: data signals and competitive insight
              </h2>
              <p className="mb-4">
                The UAE's tripartite regulatory structure — DHA (Dubai), DOH (Abu Dhabi), MOHAP (federal and Northern
                Emirates) — means market research designed for Saudi Arabia cannot be directly transposed to UAE.
                Formulary access routes, reimbursement evidence requirements, and prescribing authority differ across
                the three regulatory zones. Research designs that sample across all zones and differentiate findings
                by emirate produce the most actionable output for UAE commercial and access teams.
              </p>
              <p>
                UAE's cosmopolitan HCP workforce (approximately 70% expatriate) also influences research methodology.
                Language preference, clinical training background, and prescribing defaults vary significantly across
                the UAE physician pool. Bilingual instruments and nationality/training quotas are sometimes necessary
                to ensure insight accurately reflects the prescribing landscape rather than a single cultural segment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Trends shaping market research across the Middle East
              </h2>
              <p className="mb-4">
                Several structural trends are reshaping research investment priorities for pharma companies in the region.
                First, Vision 2030 hospital privatisation in Saudi Arabia is multiplying the number of formulary
                decision points — from centralised NUPCO to institution-level P&amp;T committees — requiring more
                granular account-level intelligence. Second, UAE's outcomes-based contracting pilots (Daman/HAAD) are
                creating demand for real-world evidence packages that did not exist three years ago.
              </p>
              <p>
                Third, digital health infrastructure is maturing — the Saudi NHIC health data platform and UAE's
                Salama/Al Emissary EMR systems are creating future opportunities for real-world data studies that
                previously required primary chart-review programmes. Fourth, AI-assisted literature review and
                modelling are accelerating HEOR timelines, but the quality of GCC-specific input data (utility
                values from Arab populations, local unit costs, NUPCO drug prices) still requires primary research
                to fill.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Quality, ethics, and compliance in GCC research programmes
              </h2>
              <p className="mb-4">
                High-quality market research depends on ethical recruitment, informed consent where applicable, data
                privacy safeguards, and honest representation of limitations. In GCC markets, this includes PDPL
                compliance (Saudi Arabia and UAE), DHA Research Ethics Committee approval for patient studies in Dubai,
                and DOH Ethics Committee approval for Abu Dhabi patient research.
              </p>
              <p>
                BioNixus applies operational controls so data collection respects participant time and professional
                obligations while meeting the timelines commercial teams depend on. Compliance considerations also
                influence question framing, sensitive topic handling, and internal distribution protocols. A
                consultancy-led research partner helps teams navigate these constraints without compromising
                analytical standards.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Frequently asked questions</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-5">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-5">Explore related resources</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Healthcare market research hub', to: '/healthcare-market-research' },
                { label: 'Market research services', to: '/market-research' },
                { label: 'GCC market access guide', to: '/gcc-market-access-guide' },
                { label: 'Real-world evidence GCC', to: '/real-world-evidence-gcc' },
                { label: 'Quantitative research', to: '/quantitative-healthcare-market-research' },
                { label: 'Qualitative research', to: '/qualitative-market-research' },
                { label: 'Healthcare market research agency GCC', to: '/healthcare-market-research-agency-gcc' },
                { label: 'Patient journey research GCC', to: '/patient-journey-research-gcc' },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted hover:border-primary/30 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-display font-semibold">
              Ready for decision-ready market research?
            </h2>
            <p className="text-primary-foreground/90 leading-relaxed">
              Share your objective, markets, and timeline. BioNixus will propose a research design that connects
              data collection to the insights your leadership team needs — within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-7 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Contact BioNixus
              </Link>
              <Link
                to="/market-research"
                className="px-7 py-3 rounded-lg border border-white/40 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
              >
                Market research hub
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
