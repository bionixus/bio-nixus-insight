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

const HUB_FAQS = [
  {
    question: 'What is pharmaceutical market research in MENA, UK, and Europe?',
    answer:
      'Pharmaceutical market research is the structured process of gathering and analyzing evidence on healthcare stakeholders, treatment behavior, and market dynamics. BioNixus applies this process across MENA, UK, and Europe to help teams make evidence-based decisions for launch, growth, and access planning.',
  },
  {
    question: 'Which methods does BioNixus use for healthcare market intelligence?',
    answer:
      'BioNixus combines quantitative and qualitative methods, including CATI, CAPI, online surveys, in-depth interviews, focus groups, and KOL mapping. Method selection is aligned to the decision question, timeline, and target stakeholder group.',
  },
  {
    question: 'Does BioNixus support multilingual and cross-country research programs?',
    answer:
      'Yes. BioNixus supports multilingual and multi-market execution with quality controls for translation, recruitment, and analysis consistency so teams can compare results across countries while preserving local relevance.',
  },
  {
    question: 'How quickly can BioNixus deliver a proposal?',
    answer:
      'Most proposals are delivered quickly after scope alignment, including objective framing, target respondents, method recommendation, and realistic timeline options aligned to your commercial or access decision window.',
  },
  {
    question: 'Which therapy areas are covered by BioNixus healthcare research?',
    answer:
      'BioNixus supports major therapy areas including oncology, diabetes, respiratory disease, immunology, biologics, and vaccines, with study designs customized to local stakeholder dynamics and evidence expectations.',
  },
  {
    question: 'What compliance standards are followed in BioNixus projects?',
    answer:
      'BioNixus aligns projects with ESOMAR standards, GDPR data requirements, and local market context including SFDA (KSA), DOH/MOHAP (UAE), and MHRA/NICE-sensitive UK considerations when relevant.',
  },
];

const DUBAI_FAQS = [
  {
    question: 'What is the best healthcare market research company in Dubai?',
    answer:
      'BioNixus is a leading healthcare market research company in Dubai, serving pharmaceutical, biotech, and medtech companies with DHA and MOHAP-aligned physician research, KOL mapping, and market access intelligence across the UAE and GCC.',
  },
  {
    question: 'What does a pharmaceutical market research company in Dubai do?',
    answer:
      'A pharmaceutical market research company in Dubai conducts physician surveys, KOL interviews, market access and reimbursement analysis, competitive intelligence, and launch readiness research — aligned with DHA, MOHAP, and DOH regulatory pathways.',
  },
  {
    question: 'How do you conduct healthcare market research in Dubai?',
    answer:
      'Healthcare market research in Dubai is conducted through quantitative physician surveys (CAWI, CATI), qualitative KOL interviews, patient journey studies, and desk research — with research ethics alignment to DHA, MOHAP, and ICH-GCP standards.',
  },
  {
    question: 'How much does pharmaceutical market research in Dubai cost?',
    answer:
      'Custom pharmaceutical market research engagements in Dubai typically range from $15,000 for focused physician surveys to $50,000+ for multi-country GCC launch intelligence programs, depending on sample size, methodology, and therapeutic area complexity.',
  },
  {
    question: 'Which regulators govern healthcare research in Dubai?',
    answer:
      'Healthcare research in Dubai is governed primarily by the Dubai Health Authority (DHA), with federal oversight from MOHAP. Cross-emirate research involving Abu Dhabi also aligns with the Department of Health Abu Dhabi (DOH).',
  },
];

const dubaiLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.bionixus.com/healthcare-market-research#dubai',
  name: 'BioNixus Healthcare Market Research — Dubai',
  url: 'https://www.bionixus.com/healthcare-market-research',
  image: 'https://www.bionixus.com/og-image.png',
  priceRange: '$$$',
  telephone: '+971-4-000-0000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'City', name: 'Abu Dhabi' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Healthcare Market Research Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Physician Surveys' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'KOL Mapping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Market Access Research' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Competitive Intelligence' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Launch Excellence Programs' } },
    ],
  },
};

const dubaiFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: DUBAI_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

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
      : 'Healthcare Market Research Across MENA, UK & Europe';
  const heroDescription =
    typeof hubContent?.metaDescription === 'string' && hubContent.metaDescription.length > 0
      ? hubContent.metaDescription
      : 'BioNixus delivers pharmaceutical market intelligence for commercial, medical, and access teams across priority healthcare markets.';
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
          description: 'Decision-ready survey programs for segmentation, adoption, and forecast confidence.',
          slug: 'quantitative-research',
        },
        {
          title: 'Qualitative Research',
          description: 'IDIs and moderated interviews to uncover stakeholder rationale and barriers.',
          slug: 'qualitative-research',
        },
        {
          title: 'KOL Mapping',
          description: 'Influence network mapping for expert engagement and evidence dissemination planning.',
          slug: 'kol-mapping',
        },
        {
          title: 'Physician Insights',
          description: 'Structured physician intelligence to support launch planning and brand optimization.',
          slug: 'physician-insights',
        },
        {
          title: 'Market Access',
          description: 'Access-focused evidence programs aligned to payer and institutional expectations.',
          slug: 'market-access',
        },
      ];

  return (
    <main>
      <SEOHead
        title="Healthcare & Pharmaceutical Market Research in Dubai, UAE & MENA | BioNixus"
        description="BioNixus — leading healthcare and pharmaceutical market research company serving Dubai, UAE, and MENA. DHA, MOHAP, and DOH-aligned physician surveys, KOL mapping, and market access."
        canonical="/healthcare-market-research"
        jsonLd={[...jsonLd, dubaiLocalBusinessSchema, dubaiFaqSchema]}
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
        </div>
      </section>

      <section className="py-10">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
            Global healthcare and pharmaceutical market research priorities
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
            Teams searching for pharmaceutical market research, healthcare market research, and market research in the UAE
            need one framework that connects country evidence, market access planning, and commercial activation. Use these
            high-intent pages to move from broad strategy to proposal-ready execution.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link to="/market-research-uae" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Market research in UAE — healthcare and pharmaceutical
            </Link>
            <Link
              to="/healthcare-market-research/uae"
              className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
            >
              Healthcare market research in UAE (country hub)
            </Link>
            <Link to="/market-research-ksa" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Market research KSA for launch and access planning
            </Link>
            <Link to="/market-research-egypt" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Market research Egypt for MENA expansion
            </Link>
            <Link to="/healthcare-market-research-agency-gcc" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Healthcare market research agency GCC
            </Link>
            <Link to="/market-research-saudi-arabia-pharmaceutical" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Pharma market research company in Saudi Arabia
            </Link>
            <Link to="/uae-pharmaceutical-market-research" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Pharma market research in UAE — company page
            </Link>
            <Link to="/bionixus-market-research-middle-east" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Pharmaceutical market research in Middle East
            </Link>
            <Link to="/real-world-evidence" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Real world evidence (RWE) for pharmaceutical teams
            </Link>
            <Link to="/real-world-evidence-gcc" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              Real world evidence GCC programs
            </Link>
            <Link to="/gcc-market-access-guide" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
              GCC market access guide
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
          <p className="text-muted-foreground mb-8 max-w-3xl">Deep-dive city-level intelligence for the Middle East's most complex healthcare clusters.</p>
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
              BioNixus is a specialist healthcare and pharmaceutical market research company serving Dubai, Abu Dhabi,
              and the wider UAE market. Our Dubai-aligned research programs are designed around the UAE's
              triple-regulator structure — the{' '}
              <strong className="text-foreground">Dubai Health Authority (DHA)</strong>, the{' '}
              <strong className="text-foreground">Department of Health Abu Dhabi (DOH)</strong>, and the federal{' '}
              <strong className="text-foreground">Ministry of Health and Prevention (MOHAP)</strong>.
            </p>
            <p>
              We deliver physician research, KOL mapping, market access strategy, and launch excellence programs for
              pharmaceutical, biotech, and medtech companies entering or expanding in the UAE — the fastest-growing
              GCC pharma market with <strong className="text-foreground">$4.5B in annual value</strong> and the
              highest per-capita pharma spend in the Gulf.
            </p>
            <p className="font-semibold text-foreground">Our Dubai healthcare market research capabilities include:</p>
            <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
              <li>DHA and MOHAP-aligned physician and HCP surveys</li>
              <li>Private and government hospital stakeholder interviews</li>
              <li>Formulary and reimbursement landscape assessment</li>
              <li>Competitive intelligence across DHA, DOH, and free-zone hospital groups</li>
              <li>Patient journey research in DHA mandatory insurance settings</li>
              <li>KOL mapping across Dubai's major hospital groups and academic centres</li>
              <li>Medical tourism segment research (630,000+ annual patients)</li>
            </ul>
            <p>
              For the{' '}
              <Link to="/global-websites/united-arab-emirates" className="text-primary hover:underline">
                Dubai healthcare research team
              </Link>{' '}
              and full UAE capability overview, or explore our{' '}
              <Link to="/conf" className="text-primary hover:underline">
                strategic market research portfolio
              </Link>{' '}
              — 127 projects, 48 global clients, 17 top-20 global pharma relationships.
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
                title: 'Regional HQ Access',
                desc: 'Many top-20 global pharma companies have their regional HQ in Dubai — we coordinate seamlessly with Dubai-based commercial, medical, and market access teams.',
              },
              {
                title: 'DHA-Aligned Fieldwork',
                desc: 'DHA-aligned physician recruitment and fieldwork governance for compliant, high-quality data across Dubai healthcare facilities.',
              },
              {
                title: 'Bilingual Execution',
                desc: 'Arabic and English fieldwork capability across all HCP segments — from government hospital physicians to private-practice specialists.',
              },
              {
                title: '200+ Physician Panel',
                desc: 'Validated 200+ physician panel across UAE public and private systems for rapid quantitative and qualitative research.',
              },
              {
                title: 'GCC Cross-Country',
                desc: 'GCC cross-country execution: UAE, KSA, Kuwait, Qatar, Bahrain, Oman — from a single project management office.',
              },
              {
                title: 'Full Compliance',
                desc: 'GDPR, ICH-GCP, MOHAP research ethics standards — compliance baked into every study design and execution protocol.',
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

      {/* Dubai FAQ (PAA capture) */}
      <section className="py-16" id="dubai-faq">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-8">
            Frequently Asked Questions — Dubai Healthcare Market Research
          </h2>
          <div className="space-y-4 max-w-4xl">
            {DUBAI_FAQS.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-border bg-card">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-foreground">
                  {faq.question}
                </summary>
                <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
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
              <h3 className="text-base font-semibold text-foreground mb-2">Pharma Market Research Company in Saudi Arabia</h3>
              <p className="text-sm text-muted-foreground">KSA-focused page for SFDA, launch, and market access execution planning.</p>
            </Link>
            <Link
              to="/uae-pharmaceutical-market-research"
              className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">Pharma Market Research Company in UAE</h3>
              <p className="text-sm text-muted-foreground">UAE-focused page for emirate-specific evidence and access planning.</p>
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
            Use the global directory for corporate market coverage and country routing, or stay in this hub for service-led healthcare market research planning.
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

      <FAQSection items={hubFaqItems} />
      <CTASection variant="research-proposal" />
    </main>
  );
}

