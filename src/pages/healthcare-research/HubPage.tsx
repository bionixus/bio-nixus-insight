import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInitialData } from '@/contexts/InitialDataContext';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { CTASection } from '@/components/shared/CTASection';
import { buildHubPageSchemas } from '@/lib/seo/schemas';
import { COUNTRY_CONFIGS } from '@/lib/constants/countries';
import { healthcareCountryRecoveryPaths } from '@/lib/internalLinkRecovery';
import { HubMarketReferenceGuide } from '@/components/seo/HubMarketReferenceGuide';

const HUB_FAQS = [
  {
    question: 'What does pharmaceutical market research across MENA, the UK, and Europe actually involve?',
    answer:
      'It means turning fragmented evidence — physician behaviour, payer logic, patient pathways, and competitor moves — into a decision you can defend. The work itself is consistent across regions; what changes is the context. A pricing question in Saudi Arabia runs through NUPCO and SFDA, the same question in the UK runs through NICE and the NHS, and in Germany it runs through AMNOG. We design each study around the regulator, the buyer, and the language that govern that specific market, then deliver findings your commercial, medical, and access teams can act on.',
  },
  {
    question: 'Which research methods does BioNixus use, and how do you choose between them?',
    answer:
      'We run the full quantitative and qualitative toolkit — CATI and CAPI interviewing, online HCP and patient surveys, in-depth interviews, advisory boards, focus groups, and KOL influence mapping. The method follows the question, not the other way around. If you need to size adoption or validate a forecast, we lead with structured quant; if you need to understand why a prescriber hesitates, we lead with qualitative depth. Most launch and access programmes blend both.',
  },
  {
    question: 'Can you run a single study across several countries and languages at once?',
    answer:
      'Yes — multi-country, multilingual fieldwork is core to how we work. One project office coordinates recruitment, translation, and analysis across markets so your numbers stay comparable from Riyadh to London, while local moderators and bilingual interviewers keep the nuance intact. Across our operating history we have delivered work in 17+ countries and 14+ therapeutic areas, which is what makes side-by-side regional reads dependable rather than approximate.',
  },
  {
    question: 'How fast can you turn around a proposal once we share a brief?',
    answer:
      'Quickly. After a short scoping conversation to lock the decision you are trying to make, we return a proposal covering objectives, target respondents, recommended method, sample, and realistic timeline options mapped to your commercial or access window. Where feasibility is the open question — for example a low-incidence specialist sample — we flag it up front rather than after contracting.',
  },
  {
    question: 'Which therapy areas does your healthcare research cover?',
    answer:
      'We work across oncology, diabetes and cardiometabolic disease, respiratory, immunology, biologics and biosimilars, vaccines, and rare disease, among others — 14+ therapeutic areas in total. Study design shifts with the area: a rare-disease programme leans on a small, hard-to-reach expert panel, while a primary-care diabetes study can support large, statistically robust quantitative samples.',
  },
  {
    question: 'What compliance and data-protection standards do your projects follow?',
    answer:
      'Every project is built to ESOMAR research standards and GDPR data-protection requirements, with adverse-event handling and pharmacovigilance reporting designed into HCP and patient fieldwork. We then layer the local framework that applies — SFDA in Saudi Arabia, DOH and MOHAP in the UAE, EDA in Egypt, and MHRA/NICE-sensitive handling in the UK — so the evidence stands up to both internal governance and external scrutiny.',
  },
];

export default function HubPage() {
  const { data } = useInitialData();
  const hubContent =
    data.pageType === 'hub' && data.hubContent && typeof data.hubContent === 'object'
      ? (data.hubContent as Record<string, unknown>)
      : null;

  const countries = Object.values(COUNTRY_CONFIGS);
  const hubFaqItems =
    Array.isArray(hubContent?.faq) && hubContent?.faq.length > 0
      ? (hubContent.faq as { question: string; answer: string }[])
      : HUB_FAQS;
  const heroTitle =
    typeof hubContent?.title === 'string' && hubContent.title.length > 0
      ? hubContent.title
      : 'Healthcare and pharmaceutical market research across MENA, the UK, and Europe';
  const heroDescription =
    typeof hubContent?.metaDescription === 'string' && hubContent.metaDescription.length > 0
      ? hubContent.metaDescription
      : 'BioNixus turns physician, payer, and patient evidence into launch, growth, and access decisions for pharma, biotech, and medtech teams — with fieldwork run locally in each market and findings that read consistently across borders.';
  const jsonLd = buildHubPageSchemas(hubFaqItems);
  const trustSignals =
    Array.isArray(hubContent?.trustSignals) && hubContent.trustSignals.length > 0
      ? (hubContent.trustSignals as { label: string; value: string }[])
      : [
        { label: 'UK Registration', value: '14408704' },
        { label: 'Core Markets', value: 'MENA, UK, Europe' },
        { label: 'Methods', value: 'CATI, CAPI, IDIs, Quant' },
        { label: 'Compliance', value: 'ESOMAR / GDPR' },
        { label: 'Coverage Model', value: 'Hub-and-spoke regional execution' },
      ];
  const services =
    Array.isArray(hubContent?.servicesOverview) && hubContent.servicesOverview.length > 0
      ? (hubContent.servicesOverview as { title?: string; description?: string; slug?: string }[])
      : [
        {
          title: 'Quantitative Research',
          description: 'Survey programmes sized to give you defensible numbers — for segmentation, adoption tracking, and forecasts you can put in front of a board.',
          slug: 'quantitative-research',
        },
        {
          title: 'Qualitative Research',
          description: 'In-depth interviews and moderated discussions that surface why a prescriber switches, hesitates, or stays — the rationale a survey alone never captures.',
          slug: 'qualitative-research',
        },
        {
          title: 'KOL Mapping',
          description: 'Influence networks mapped so you know which experts move opinion in a market, and how to sequence engagement and evidence around them.',
          slug: 'kol-mapping',
        },
        {
          title: 'Physician Insights',
          description: 'Structured physician intelligence to pressure-test launch plans, positioning, and message before you commit the budget behind them.',
          slug: 'physician-insights',
        },
        {
          title: 'Market Access',
          description: 'Evidence built to the questions payers and hospital committees actually ask, so pricing and reimbursement cases survive the review.',
          slug: 'market-access',
        },
      ];

  return (
    <main>
      <SEOHead
        title="Healthcare & Pharmaceutical Market Research Across MENA, UK & Europe | BioNixus"
        description="BioNixus runs physician, payer, and patient research across MENA, the UK, and Europe — fieldwork executed locally in each market, findings that compare across borders, and outputs your commercial, medical, and access teams can act on."
        canonical="/healthcare-market-research"
        jsonLd={jsonLd}
      />
      <Helmet>
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <meta property="og:locale" content="en_AE" />
      </Helmet>

      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
        ]}
      />

      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container-wide max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            {heroTitle}
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl">
            {heroDescription}
          </p>
          <p className="mt-4 text-sm text-primary-foreground/85 max-w-3xl">
            For therapy- and country-segmented GCC/MENA intelligence (oncology, diabetes, rare disease, and more), see the{' '}
            <Link className="font-semibold underline underline-offset-2 hover:text-primary-foreground" to="/market-reports">
              healthcare market research reports hub
            </Link>
            . Country service pages on this hub remain the primary entry for bespoke quantitative and qualitative programmes.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
            Where to start: country, therapy, and service-level entry points
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
            The Gulf is where most of the regional growth is concentrated — the GCC pharmaceutical market was worth
            roughly $23.7 billion in 2024 and is projected to reach about $49 billion by 2033, a 7.6% CAGR
            (IMARC Group, 2024). The links below take you straight from that regional picture down to the country,
            therapy area, or service you actually need to plan, so you skip the generic overview and land on the
            evidence that informs your next decision.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link to="/healthcare-market-research/uae" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              UAE healthcare market research
            </Link>
            <Link to="/uae-pharmaceutical-market-research" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Healthcare market research company in UAE
            </Link>
            <Link to="/market-research-uae" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Market research in the UAE
            </Link>
            <Link to="/healthcare-market-research/saudi-arabia" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Saudi Arabia pharmaceutical market research
            </Link>
            <Link to="/market-research-saudi-arabia-pharmaceutical" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Healthcare market research company in Saudi Arabia
            </Link>
            <Link to="/market-research-ksa" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Market research KSA
            </Link>
            <Link to="/healthcare-market-research/egypt" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Egypt healthcare market research
            </Link>
            <Link to="/egypt-pharmaceutical-market-research" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Healthcare market research company in Egypt
            </Link>
            <Link to="/market-research-egypt" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Market research in Egypt
            </Link>
            <Link to="/healthcare-market-research/therapy/oncology" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Oncology therapy research
            </Link>
            <Link to="/healthcare-market-research/therapy/immunology" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Immunology therapy research
            </Link>
            <Link to="/market-research-by-industry" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Market research by industry (KSA, UAE, Egypt)
            </Link>
            <Link to="/gcc-pharma-market-report-2026" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              GCC pharmaceutical market report
            </Link>
            <Link to="/market-reports" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Market reports hub
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-muted/20">
        <div className="container-wide max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {trustSignals.map((item) => (
            <article key={`${item.label}-${item.value}`} className="rounded-xl border border-border bg-card p-4">
              <h2 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{item.label}</h2>
              <p className="text-base font-semibold text-foreground">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Regional Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
            {countries.filter(c => !c.isCity).map((country) => (
              <Link
                key={country.slug}
                to={`/healthcare-market-research/${country.slug}`}
                className="block rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{country.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{country.metaSuffix}</p>
                <span className="text-primary text-sm font-medium">
                  Market research in {country.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/5">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Primary Research Hubs</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">City-level depth for the Middle East's densest healthcare clusters, where regulator, payer mix, and hospital ownership differ enough that a country-level read alone misses the decision.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.filter(c => c.isCity).map((city) => (
              <Link
                key={city.slug}
                to={`/healthcare-market-research/${city.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{city.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{city.metaSuffix}</p>
                  <ul className="space-y-2 mb-6">
                    {city.keyStats.slice(0, 2).map((stat, i) => (
                      <li key={i} className="text-xs flex justify-between border-b border-border/50 pb-1">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className="font-medium text-foreground">{stat.value}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="text-primary text-sm font-semibold flex items-center">
                    Explore {city.name} Hub
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dubai & UAE coverage block */}
      <section className="py-16" id="dubai-uae">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
            Healthcare &amp; Pharmaceutical Market Research in Dubai &amp; UAE
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>
              BioNixus runs healthcare and pharmaceutical market research across Dubai, Abu Dhabi, and the wider UAE —
              a market valued at roughly $4.15 billion in 2024 and forecast to reach about $8.02 billion by 2033,
              a 7.3% CAGR (IMARC Group, 2024). What makes the UAE distinct is not its size but its structure: three
              regulators govern the same federation. The{' '}
              <strong className="text-foreground">Dubai Health Authority (DHA)</strong>, the{' '}
              <strong className="text-foreground">Department of Health Abu Dhabi (DOH)</strong>, and the federal{' '}
              <strong className="text-foreground">Ministry of Health and Prevention (MOHAP)</strong> each set their
              own formulary, insurance, and access rules, so a study that treats the UAE as a single market quietly
              averages away the very differences that decide a launch.
            </p>
            <p>
              We design around that reality. Physician research, KOL mapping, market access strategy, and
              launch-readiness programmes are calibrated emirate by emirate — public versus private provider mix,
              mandatory-insurance payer behaviour, and the institutional pathways that move a product onto a formulary —
              for pharma, biotech, and medtech teams entering or scaling in the country.
            </p>
            <p className="font-semibold text-foreground">Our Dubai healthcare market research capabilities include:</p>
            <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
              <li>DHA and MOHAP-aligned physician and HCP surveys</li>
              <li>Private and government hospital stakeholder interviews</li>
              <li>Formulary and reimbursement landscape assessment</li>
              <li>Competitive intelligence across DHA, DOH, and free-zone hospital groups</li>
              <li>Patient journey research in DHA mandatory insurance settings</li>
              <li>KOL mapping across Dubai's major hospital groups and academic centres</li>
              <li>Medical tourism and private-channel demand pathway research</li>
            </ul>
            <p>
              For the{' '}
              <Link to="/healthcare-market-research/uae" className="text-primary hover:underline">
                Dubai healthcare research team
              </Link>{' '}
              and full UAE capability overview, or explore our{' '}
              <Link to="/strategic-portfolio" className="text-primary hover:underline">
                strategic market research portfolio
              </Link>{' '}
              for representative healthcare and pharmaceutical programs.
            </p>
          </div>
        </div>
      </section>

      {/* Why pharma in Dubai choose BioNixus */}
      <section className="py-16 bg-muted/20" id="why-dubai-pharma">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
            Why Pharmaceutical Companies in Dubai Choose BioNixus
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'You work where your teams already sit',
                desc: 'Dubai is the regional headquarters for much of the global pharma industry. We work in the same time zone as your commercial, medical, and market access leads, so reviews happen live rather than over a 10-hour lag.',
              },
              {
                title: 'Fieldwork that holds up to a DHA audit',
                desc: 'Physician recruitment and fieldwork governance are built to DHA standards, so the data you present internally is defensible and the sourcing behind every interview is documented.',
              },
              {
                title: 'Arabic and English, by the same team',
                desc: 'Bilingual moderators and interviewers cover every HCP segment — government-hospital physicians, private-practice specialists, and pharmacists — without losing meaning in translation.',
              },
              {
                title: 'A respondent base we have already validated',
                desc: 'Physician and HCP coverage spans UAE public and private settings and is screened before fieldwork, so quantitative samples hit quota and qualitative panels reach the right specialists.',
              },
              {
                title: 'One office for the whole Gulf',
                desc: 'When a UAE study needs to extend to Saudi Arabia, Kuwait, Qatar, Bahrain, or Oman, a single project office runs it — keeping method, timeline, and reporting consistent across all six markets.',
              },
              {
                title: 'Compliance designed in, not bolted on',
                desc: 'GDPR, ICH-GCP, and MOHAP research-ethics requirements — including adverse-event handling — sit inside the study design from the first draft, not as a checklist at the end.',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Healthcare Research Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={`${service.slug || service.title}`}
                to={
                  service.slug
                    ? `/healthcare-market-research/services/${service.slug}`
                    : '/healthcare-market-research/services/market-access'
                }
                className="block rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title || 'Research service'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description || 'Specialized pharmaceutical market research support for strategic decisions.'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Therapy Area Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {['oncology', 'diabetes', 'respiratory', 'immunology', 'biologics', 'vaccines'].map((area) => (
              <Link
                key={area}
                to={`/healthcare-market-research/therapy/${area}`}
                className="px-4 py-2 rounded-full border border-border bg-background text-sm capitalize hover:border-primary/40 transition-colors"
              >
                {area} market research
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/10">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Featured Guides & Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              to="/bionixus-market-research-middle-east"
              className="block p-5 rounded-xl border border-primary/20 bg-primary/5 hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-primary mb-2">Middle East Pharmaceutical Market Research</h3>
              <p className="text-sm text-muted-foreground">Commercial and market access evidence framework for KSA, UAE, Kuwait, Qatar, Bahrain, and Oman.</p>
            </Link>
            <Link
              to="/quantitative-healthcare-market-research"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-primary mb-2">Featured Guide: Quantitative Healthcare Market Research</h3>
              <p className="text-sm text-muted-foreground">2026 framework for survey design, tracker governance, and GCC validation standards.</p>
            </Link>
            <Link
              to="/blog/middle-east-healthcare-market-statistics-2026"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-primary mb-2">MENA Healthcare Statistics 2026</h3>
              <p className="text-sm text-muted-foreground">Comprehensive market data, disease prevalence, and growth metrics.</p>
            </Link>
            <Link
              to="/blog/nupco-saudi-arabia-tendering-guide"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">NUPCO Saudi Arabia Master Guide</h3>
              <p className="text-sm text-muted-foreground">Master the institutional tendering and procurement process.</p>
            </Link>
            <Link
              to="/blog/abu-dhabi-doh-vs-dubai-dha-formulary-guide"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">UAE: DOH vs. DHA Formulary Guide</h3>
              <p className="text-sm text-muted-foreground">Strategic comparison for emirate-level market access.</p>
            </Link>
            <Link
              to="/blog/sfda-drug-registration-guide"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">SFDA Drug Registration Guide</h3>
              <p className="text-sm text-muted-foreground">Master the Saudi regulatory landscape and pathway requirements.</p>
            </Link>
            <Link
              to="/healthcare-market-research-agency-gcc"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">Healthcare Market Research Agency GCC</h3>
              <p className="text-sm text-muted-foreground">BOFU guide for selecting a GCC healthcare and pharma research partner.</p>
            </Link>
            <Link
              to="/market-research-saudi-arabia-pharmaceutical"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">Healthcare Market Research Company in Saudi Arabia</h3>
              <p className="text-sm text-muted-foreground">BOFU page for SFDA, NUPCO, bilingual fieldwork, and KSA launch evidence.</p>
            </Link>
            <Link
              to="/uae-pharmaceutical-market-research"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">Healthcare Market Research Company in UAE</h3>
              <p className="text-sm text-muted-foreground">BOFU page for DHA, DOH, MOHAP, bilingual fieldwork, and UAE launch evidence.</p>
            </Link>
            <Link
              to="/egypt-pharmaceutical-market-research"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">Healthcare Market Research Company in Egypt</h3>
              <p className="text-sm text-muted-foreground">BOFU page for EDA, UHI, bilingual fieldwork, and Egypt launch evidence.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Country industry guide shortcuts</h2>
          <div className="flex flex-wrap gap-2">
            {[
              '/pharmaceutical-companies-saudi-arabia',
              '/pharmaceutical-companies-uae',
              '/pharmaceutical-companies-egypt',
              '/pharmaceutical-companies-kuwait',
              '/pharmaceutical-companies-qatar',
              '/pharmaceutical-companies-oman',
            ].map((path) => (
              <Link
                key={path}
                to={path}
                className="px-3 py-2 rounded-md border border-border bg-card text-sm text-foreground hover:border-primary/40 transition-colors"
              >
                {path.replace('/pharmaceutical-companies-', '').replaceAll('-', ' ')} pharma companies
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-muted/20">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Global and regional navigation</h2>
          <p className="text-muted-foreground mb-4 max-w-3xl">
            Looking beyond healthcare or routing to a specific country? The global directory maps our full market coverage. Staying in pharma and devices? Keep to this hub and pick the service or market you need to plan.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <Link
              to="/global-websites"
              className="rounded-lg border border-border bg-card p-4 text-primary hover:border-primary/40 transition-colors"
            >
              Open global websites directory
            </Link>
            <Link
              to="/services"
              className="rounded-lg border border-border bg-card p-4 text-primary hover:border-primary/40 transition-colors"
            >
              Compare healthcare research services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
            {healthcareCountryRecoveryPaths.slice(0, 24).map((path) => (
              <Link key={path} to={path} className="text-primary hover:underline break-all text-sm">
                {path}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HubMarketReferenceGuide />

      <FAQSection items={hubFaqItems} />
      <CTASection variant="research-proposal" />
    </main>
  );
}

