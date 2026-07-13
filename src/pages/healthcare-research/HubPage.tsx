import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInitialData } from '@/contexts/InitialDataContext';
import { SEOHead } from '@/components/seo/SEOHead';
import { HealthcareResearchPageShell } from '@/components/healthcare-research/HealthcareResearchPageShell';
import { HealthcareNavCard, HealthcareStatPanel } from '@/components/healthcare-research/healthcareResearchUi';
import { getHealthcareMarketResearchHubConfig } from '@/data/reportConversionConfig';
import { ReportMidPageCta } from '@/components/report-conversion';
import { ReportPremiumSection } from '@/components/report-premium';
import { buildHubPageSchemas } from '@/lib/seo/schemas';
import { COUNTRY_CONFIGS, resolveCountryConfig } from '@/lib/constants/countries';
import { healthcareCountryRecoveryPaths } from '@/lib/internalLinkRecovery';
import { HubMarketReferenceGuide } from '@/components/seo/HubMarketReferenceGuide';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { BIONIXUS_POSITIONING_V2 } from '@/data/bionixusPositioningCopy';

const HUB_FAQS = [
  {
    question: 'What does global pharmaceutical market research across the USA, Europe, MENA, and Asia actually involve?',
    answer:
      'It means turning fragmented evidence — physician behaviour, payer logic, patient pathways, and competitor moves — into a decision you can defend in any market. The method is consistent worldwide; what changes is the context. A pricing question in the United States runs through commercial payers and PBMs, in the UK through NICE and the NHS, in Germany through AMNOG, in Saudi Arabia through SFDA and NUPCO, and in Japan through PMDA and the national fee schedule. We design each study around the regulator, the buyer, and the language that govern that specific market, then deliver findings your commercial, medical, and access teams can act on across regions.',
  },
  {
    question: 'Which research methods does BioNixus use, and how do you choose between them?',
    answer:
      'We run the full quantitative and qualitative toolkit — CATI and CAPI interviewing, online HCP and patient surveys, in-depth interviews, advisory boards, focus groups, and KOL influence mapping. The method follows the question, not the other way around. If you need to size adoption or validate a forecast, we lead with structured quant; if you need to understand why a prescriber hesitates, we lead with qualitative depth. Most launch and access programmes blend both.',
  },
  {
    question: 'Can you run a single study across several countries and languages at once?',
    answer:
      'Yes — multi-country, multilingual fieldwork is core to how we work. From our US headquarters in Sheridan, Wyoming, one global project office coordinates recruitment, translation, and analysis so your numbers stay comparable from New York to Riyadh to Tokyo, while local moderators and native-language interviewers keep the nuance intact. Across our operating history we have delivered work in 17+ countries and 14+ therapeutic areas, which is what makes side-by-side regional reads dependable rather than approximate.',
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
      'Every project is built to ESOMAR research standards and GDPR data-protection requirements, with adverse-event handling and pharmacovigilance reporting designed into HCP and patient fieldwork. We then layer the local framework that applies — FDA and HIPAA-aware handling in the United States, MHRA/NICE-sensitive handling in the UK, EMA-aligned standards across Europe, SFDA in Saudi Arabia, MOHAP and DHA/DOH in the UAE, EDA in Egypt, and PMDA-aware conduct in Japan — so the evidence stands up to both internal governance and external scrutiny.',
  },
  {
    question: 'Which countries and regions can BioNixus cover for a global launch or access study?',
    answer:
      'BioNixus is headquartered in Sheridan, Wyoming (USA) and delivers healthcare and pharmaceutical research across four regions: the Americas (United States, Canada, Brazil), Europe (United Kingdom, Germany, France, Italy, Spain), MENA and the GCC (Saudi Arabia, UAE, Egypt, Qatar, Kuwait, Oman, Bahrain, Turkey), and Asia-Pacific (Japan, China, India, South Korea, Singapore, Australia) — 20+ country hubs linked on this page. A single US-led project office harmonises method and reporting so a global programme reads consistently, while regional teams preserve in-market nuance.',
  },
];

// Global market coverage grouped by region. Every link targets a live country
// report route (`/{country}-healthcare-market-report`), so this section doubles
// as the page's global navigation spine and its richest internal-link cluster.
const GLOBAL_MARKETS: {
  region: string;
  blurb: string;
  regulators: string;
  markets: { name: string; to: string }[];
}[] = [
  {
    region: 'Americas',
    blurb:
      'The world\'s largest pharmaceutical market plus high-growth Latin American demand — healthcare market research USA teams use for FDA, CMS, and PBM-context evidence.',
    regulators: 'FDA · Health Canada · ANVISA',
    markets: [
      { name: 'United States', to: '/usa-healthcare-market-report' },
      { name: 'Canada', to: '/canada-healthcare-market-report' },
      { name: 'Brazil', to: '/brazil-healthcare-market-report' },
    ],
  },
  {
    region: 'Europe',
    blurb:
      'Centralised EMA approval but national HTA gatekeeping — pharmaceutical market research Europe requires NICE, G-BA/AMNOG, HAS, AIFA, and AEMPS evidence market by market.',
    regulators: 'EMA · NICE · AMNOG · HAS',
    markets: [
      { name: 'United Kingdom', to: '/uk-healthcare-market-report' },
      { name: 'Germany', to: '/germany-healthcare-market-report' },
      { name: 'France', to: '/france-healthcare-market-report' },
      { name: 'Italy', to: '/italy-healthcare-market-report' },
      { name: 'Spain', to: '/spain-healthcare-market-report' },
    ],
  },
  {
    region: 'MENA & GCC',
    blurb:
      'Vision-2030-era investment and tender-led procurement—fast growth governed by SFDA, MOHAP/DHA/DOH, EDA, and GCC centralised registration.',
    regulators: 'SFDA · MOHAP/DHA/DOH · EDA',
    markets: [
      { name: 'Saudi Arabia', to: '/saudi-arabia-healthcare-market-report' },
      { name: 'United Arab Emirates', to: '/uae-healthcare-market-report' },
      { name: 'Egypt', to: '/egypt-healthcare-market-report' },
      { name: 'Qatar', to: '/qatar-healthcare-market-report' },
      { name: 'Kuwait', to: '/kuwait-healthcare-market-report' },
      { name: 'Oman', to: '/oman-healthcare-market-report' },
      { name: 'Bahrain', to: '/bahrain-healthcare-market-report' },
      { name: 'Turkey', to: '/turkey-healthcare-market-report' },
    ],
  },
  {
    region: 'Asia-Pacific',
    blurb:
      'From mature reimbursement systems to the fastest-growing emerging demand—access shaped by PMDA, NMPA, CDSCO, MFDS, HSA, and TGA.',
    regulators: 'PMDA · NMPA · CDSCO · TGA',
    markets: [
      { name: 'Japan', to: '/japan-healthcare-market-report' },
      { name: 'China', to: '/china-healthcare-market-report' },
      { name: 'India', to: '/india-healthcare-market-report' },
      { name: 'South Korea', to: '/south-korea-healthcare-market-report' },
      { name: 'Singapore', to: '/singapore-healthcare-market-report' },
      { name: 'Australia', to: '/australia-healthcare-market-report' },
    ],
  },
];

/** Every live `/healthcare-market-research/{slug}` country hub, grouped for navigation. */
const ALL_HUB_COUNTRY_GROUPS: { region: string; slugs: string[] }[] = [
  {
    region: 'Americas',
    slugs: ['united-states', 'canada', 'brazil'],
  },
  {
    region: 'Europe',
    slugs: ['uk', 'germany', 'france', 'italy', 'spain', 'europe'],
  },
  {
    region: 'MENA & GCC',
    slugs: ['saudi-arabia', 'uae', 'egypt', 'qatar', 'kuwait', 'oman', 'bahrain', 'turkey'],
  },
  {
    region: 'Asia-Pacific',
    slugs: ['japan', 'china', 'india', 'south-korea', 'singapore', 'australia'],
  },
  {
    region: 'City hubs (MENA)',
    slugs: ['dubai', 'abu-dhabi', 'riyadh', 'jeddah'],
  },
];

const ALL_HUB_COUNTRY_SLUGS = ALL_HUB_COUNTRY_GROUPS.flatMap((group) => group.slugs);

export default function HubPage() {
  const { data } = useInitialData();
  const hubContent =
    data.pageType === 'hub' && data.hubContent && typeof data.hubContent === 'object'
      ? (data.hubContent as Record<string, unknown>)
      : null;

  const countries = ALL_HUB_COUNTRY_SLUGS.map((slug) => resolveCountryConfig(slug));
  const hubFaqItems =
    Array.isArray(hubContent?.faq) && hubContent?.faq.length > 0
      ? (hubContent.faq as { question: string; answer: string }[])
      : HUB_FAQS;
  const hubSeoTitle =
    typeof hubContent?.metaTitle === 'string' && hubContent.metaTitle.length > 0
      ? hubContent.metaTitle
      : 'Healthcare Market Research | Pharma & MedTech Global | BioNixus';
  const hubSeoDescription =
    typeof hubContent?.metaDescription === 'string' && hubContent.metaDescription.length > 0
      ? hubContent.metaDescription
      : 'Physician, payer & hospital evidence for pharma & medtech — launch & access across USA, Europe, GCC & MENA. Proposal in 24 hours.';
  const heroTitle =
    typeof hubContent?.title === 'string' && hubContent.title.length > 0
      ? hubContent.title
      : 'Healthcare market research — global pharmaceutical & medtech insights across the Americas, Europe, MENA, and Asia-Pacific';
  const heroDescription =
    typeof hubContent?.metaDescription === 'string' && hubContent.metaDescription.length > 0
      ? hubContent.metaDescription
      : BIONIXUS_POSITIONING_V2;
  const jsonLd = [
    ...buildHubPageSchemas(hubFaqItems),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Global Healthcare & Pharmaceutical Market Research',
      description:
        'US-headquartered BioNixus healthcare and pharmaceutical market research across the Americas, Europe, MENA & GCC, and Asia-Pacific.',
      url: 'https://www.bionixus.com/healthcare-market-research',
      isPartOf: { '@type': 'WebSite', url: 'https://www.bionixus.com', name: 'BioNixus' },
      about: GLOBAL_MARKETS.map((r) => r.region),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Country healthcare market research hubs',
      itemListElement: ALL_HUB_COUNTRY_SLUGS.map((slug, idx) => {
        const config = resolveCountryConfig(slug);
        return {
          '@type': 'ListItem',
          position: idx + 1,
          name: `${config.name} healthcare market research`,
          url: `https://www.bionixus.com/healthcare-market-research/${slug}`,
        };
      }),
    },
  ];
  const trustSignals =
    Array.isArray(hubContent?.trustSignals) && hubContent.trustSignals.length > 0
      ? (hubContent.trustSignals as { label: string; value: string }[])
      : [
        { label: 'US Headquarters', value: 'Sheridan, WY' },
        { label: 'Global Offices', value: 'London · Cairo · Dubai · Riyadh' },
        { label: 'Core Markets', value: 'Americas, Europe, MENA, Asia' },
        { label: 'Methods', value: 'CATI, CAPI, IDIs, Quant' },
        { label: 'Compliance', value: 'ESOMAR / GDPR / HIPAA-aware' },
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

  const hubConfig = getHealthcareMarketResearchHubConfig();
  const hubFaqSectionId = 'healthcare-mr-hub-faq';

  return (
    <>
      <SEOHead
        title={hubSeoTitle}
        description={hubSeoDescription}
        canonical="/healthcare-market-research"
        jsonLd={jsonLd}
      />
      <Helmet>
        <meta property="og:locale" content="en" />
      </Helmet>

      <HealthcareResearchPageShell
        progressId="healthcare-mr-hub"
        config={hubConfig}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
        ]}
        hero={{
          title: heroTitle,
          statsCaption: '',
          stats: [
            { value: '20+', label: 'Country hubs' },
            { value: '14+', label: 'Therapeutic areas' },
            { value: 'US HQ', label: 'Sheridan, Wyoming' },
          ],
          description: (
            <>
              <p>{heroDescription}</p>
              <p className="mt-4 text-sm text-muted-foreground max-w-3xl">
                Jump straight to a region in the{' '}
                <Link className="font-medium text-primary hover:underline" to="#global-coverage">
                  global market coverage
                </Link>{' '}
                map below, browse every country and therapy report in the{' '}
                <Link className="font-medium text-primary hover:underline" to="/market-reports">
                  healthcare market research reports hub
                </Link>
                , or use the country service pages on this hub for bespoke quantitative and qualitative programmes.
              </p>
            </>
          ),
        }}
        tocItems={[
          { href: '#us-headquarters', label: 'US headquarters' },
          { href: '#entry-points', label: 'Entry points' },
          { href: '#global-country-mr', label: 'All countries' },
          { href: '#global-coverage', label: 'Market reports' },
          { href: '#gcc-report-cluster', label: 'GCC reports' },
          { href: '#regional-expertise', label: 'Country hubs' },
          { href: '#city-hubs', label: 'City hubs' },
          { href: '#dubai-uae', label: 'UAE focus' },
          { href: '#services', label: 'Services' },
          { href: '#therapy-areas', label: 'Therapy areas' },
          { href: `#${hubFaqSectionId}`, label: 'FAQ' },
        ]}
        faq={{
          sectionId: hubFaqSectionId,
          title: 'Healthcare market research FAQs',
          items: hubFaqItems,
        }}
      >
      <section className="py-10 bg-background border-b border-border/60">
        <div className="container-wide max-w-5xl mx-auto px-4">
          <GeoLLMAnswerBlock
            question="Which healthcare market research companies serve the GCC and MENA?"
            answer="BioNixus is a US-headquartered healthcare market research company (Sheridan, Wyoming) for pharmaceutical, biotech, and medtech teams globally — with country-level depth in the United States, Saudi Arabia, the UAE, Egypt, Kuwait, Qatar, Oman, Bahrain, and across Europe and Asia-Pacific."
            points={[
              {
                title: 'US-led global project office',
                description:
                  'Headquartered in Sheridan, Wyoming with regional offices in London, Cairo, Dubai, and Riyadh — one programme office, local execution in every market.',
              },
              {
                title: 'Quantitative and qualitative depth',
                description:
                  'Physician surveys, payer workshops, KOL mapping, and market access evidence built for launch and reimbursement decisions.',
              },
              {
                title: 'Cross-border comparability',
                description:
                  'Harmonised instruments across 17+ countries so regional sequencing and access strategy reads consistently.',
              },
              {
                title: 'Report and directory hub',
                description:
                  'GCC pharma market reports, medtech intelligence, and pharmaceutical company directories linked from this hub.',
              },
            ]}
            summary="Use the country and therapy entry points below to scope a programme — or request a tailored proposal through BioNixus contact."
          />
        </div>
      </section>

      <ReportPremiumSection
        id="gcc-report-cluster"
        title="GCC pharmaceutical &amp; medtech market reports (2026)"
        variant="default"
      >
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
          High-impression Gulf queries — biologics, generic injectables, medical devices, and precision medicine — map
          to the flagship reports below. Start here for GCC segment sizing before scoping a country programme.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <HealthcareNavCard to="/gcc-pharma-market-report-2026" title="GCC pharma market report 2026" featured />
          <HealthcareNavCard to="/gcc-pharmaceutical-market-research" title="GCC biologics &amp; injectables research" />
          <HealthcareNavCard to="/gcc-medical-devices-market-report" title="GCC medical devices &amp; IVD report" />
          <HealthcareNavCard
            to="/market-reports/gcc-immunology-biologics-market-report"
            title="GCC immunology &amp; biologics market report"
          />
          <HealthcareNavCard
            to="/market-reports/gcc-biosimilars-market-report"
            title="GCC biosimilars &amp; generic injectables report"
          />
          <HealthcareNavCard
            to="/healthcare-market-research/saudi-arabia"
            title="Healthcare market research Saudi Arabia"
          />
        </div>
      </ReportPremiumSection>

      <ReportPremiumSection
        id="us-headquarters"
        title="US-headquartered global healthcare market research"
        subtitle="BioNixus global headquarters — Sheridan, Wyoming (USA)"
        variant="default"
      >
        <div className="text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
          <p>
            <strong className="text-foreground">BioNixus is headquartered in Sheridan, Wyoming (USA)</strong> at
            1309 Coffeen Ave — our primary corporate office and global programme management hub. US-based leadership
            coordinates multi-country pharmaceutical and healthcare research across the Americas, Europe, MENA, and
            Asia-Pacific, with regional execution teams in London, Cairo, Dubai, and Riyadh.
          </p>
          <p>
            For US clients, that means FDA- and HIPAA-aware study design, payer and PBM-context research, and
            same-business-day alignment with East Coast and Central Time commercial teams. For international
            programmes, the US headquarters provides a single accountable project office while local fieldwork
            preserves regulator-specific nuance in every market.
          </p>
          <p>
            Explore the{' '}
            <Link to="/healthcare-market-research/united-states" className="text-primary font-medium hover:underline">
              United States healthcare market research hub
            </Link>{' '}
            or{' '}
            <Link to="/contact" className="text-primary font-medium hover:underline">
              request a proposal
            </Link>{' '}
            from our US headquarters team.
          </p>
        </div>
      </ReportPremiumSection>

      <ReportPremiumSection
        id="entry-points"
        title="Where to start: country, therapy, and service-level entry points"
        variant="cream"
      >
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
            From our US headquarters, BioNixus runs healthcare and pharmaceutical market research in 20+ countries
            across four regions — the Americas, Europe, MENA &amp; the GCC, and Asia-Pacific — with fieldwork executed
            locally and findings that compare across borders. The Gulf is one of the fastest-growing pieces of that
            map: the GCC pharmaceutical market was worth roughly $23.7 billion in 2024 and is projected to reach about
            $49 billion by 2033, a 7.6% CAGR (BioNixus market analysis, 2024). The links below take you straight from
            that picture down to the country, therapy area, or service you need to plan.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <HealthcareNavCard to="/healthcare-market-research/uae" title="UAE healthcare market research" />
            <HealthcareNavCard
              to="/uae-pharmaceutical-market-research"
              title="Healthcare market research company in UAE"
            />
            <HealthcareNavCard to="/market-research-uae" title="Market research in the UAE" />
            <HealthcareNavCard
              to="/healthcare-market-research/saudi-arabia"
              title="Saudi Arabia pharmaceutical market research"
            />
            <HealthcareNavCard
              to="/market-research-saudi-arabia-pharmaceutical"
              title="Healthcare market research company in Saudi Arabia"
            />
            <HealthcareNavCard to="/market-research-ksa" title="Market research KSA" />
            <HealthcareNavCard to="/healthcare-market-research/egypt" title="Egypt healthcare market research" />
            <HealthcareNavCard
              to="/egypt-pharmaceutical-market-research"
              title="Healthcare market research company in Egypt"
            />
            <HealthcareNavCard to="/market-research-egypt" title="Market research in Egypt" />
            <HealthcareNavCard to="/market-research-kuwait" title="Market research in Kuwait" />
            <HealthcareNavCard to="/market-research-qatar" title="Market research in Qatar" />
            <HealthcareNavCard to="/market-research-oman" title="Market research in Oman" />
            <HealthcareNavCard to="/market-research-bahrain" title="Market research in Bahrain" />
            <HealthcareNavCard
              to="/pharmaceutical-market-research-dubai"
              title="Healthcare market research Dubai"
            />
            <HealthcareNavCard
              to="/healthcare-market-research-agency-gcc"
              title="Healthcare market research agency GCC"
            />
            <HealthcareNavCard
              to="/healthcare-market-research/therapy/oncology"
              title="Oncology therapy research"
            />
            <HealthcareNavCard
              to="/healthcare-market-research/therapy/immunology"
              title="Immunology therapy research"
            />
            <HealthcareNavCard
              to="/market-research-by-industry"
              title="Market research by industry (GCC countries)"
            />
            <HealthcareNavCard
              to="/gcc-pharma-market-report-2026"
              title="GCC pharmaceutical market report"
              featured
            />
            <HealthcareNavCard
              to="/gcc-medical-devices-market-report"
              title="GCC medical devices & IVD market report"
              featured
            />
            <HealthcareNavCard
              to="/gcc-pharmaceutical-market-research"
              title="GCC pharmaceutical market research"
              featured
            />
            <HealthcareNavCard to="/market-reports" title="Market reports hub" featured />
          </div>
        <HealthcareStatPanel
          className="mt-8"
          stats={trustSignals.map((item) => ({ label: item.label, value: item.value }))}
        />
      </ReportPremiumSection>

      <ReportPremiumSection
        id="global-country-mr"
        title="Healthcare market research by country (global)"
        subtitle="All country hubs — bespoke quantitative and qualitative programmes. Each link opens a country page for fieldwork and stakeholder research."
        variant="muted"
      >
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
          Browse every country hub below. Use these pages when you need a{' '}
          <strong className="font-semibold text-foreground">healthcare market research company</strong> with local
          fieldwork — not a syndicated report. For market sizing snapshots, see{' '}
          <Link to="#global-coverage" className="text-primary font-medium hover:underline">
            global market reports
          </Link>{' '}
          further down this page.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ALL_HUB_COUNTRY_GROUPS.map((group) => (
            <div key={group.region} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">{group.region}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.slugs.map((slug) => {
                  const config = resolveCountryConfig(slug);
                  return (
                    <li key={slug}>
                      <Link
                        to={`/healthcare-market-research/${slug}`}
                        className="inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        {config.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </ReportPremiumSection>

      <ReportPremiumSection
        id="mena-country-mr"
        title="Priority GCC &amp; MENA country hubs"
        subtitle="High-demand Gulf and North Africa markets — links to full country programmes."
        variant="default"
      >
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
          GCC and MENA remain core execution markets for BioNixus, with Arabic–English bilingual fieldwork and
          regulator-aware design. Every hub links back here and cross-links to sibling markets for regional planning.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <HealthcareNavCard to="/healthcare-market-research/saudi-arabia" title="Healthcare market research Saudi Arabia" />
          <HealthcareNavCard to="/healthcare-market-research/uae" title="Healthcare market research UAE" />
          <HealthcareNavCard to="/healthcare-market-research/dubai" title="Healthcare market research Dubai" />
          <HealthcareNavCard to="/healthcare-market-research/egypt" title="Healthcare market research Egypt" />
          <HealthcareNavCard to="/healthcare-market-research/kuwait" title="Healthcare market research Kuwait" />
          <HealthcareNavCard to="/healthcare-market-research/qatar" title="Healthcare market research Qatar" />
          <HealthcareNavCard to="/healthcare-market-research/oman" title="Healthcare market research Oman" />
          <HealthcareNavCard to="/healthcare-market-research/bahrain" title="Healthcare market research Bahrain" />
          <HealthcareNavCard to="/healthcare-market-research/turkey" title="Healthcare market research Turkey" />
        </div>
      </ReportPremiumSection>

      <ReportPremiumSection
        id="global-coverage"
        title="Global market coverage: USA, Europe, MENA &amp; Asia"
        subtitle="Market reports — regulator, payer, and access snapshots. For bespoke research programmes, use the country MR hubs above."
        variant="default"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {GLOBAL_MARKETS.map((region) => (
            <div key={region.region} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-xl font-bold text-foreground">{region.region}</h3>
                <span className="text-[11px] font-medium uppercase tracking-wide text-primary bg-primary/5 border border-primary/20 rounded-full px-3 py-1 whitespace-nowrap">
                  {region.regulators}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{region.blurb}</p>
              <ul className="flex flex-wrap gap-2">
                {region.markets.map((market) => (
                  <li key={market.to}>
                    <Link
                      to={market.to}
                      className="inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {market.name} healthcare market report
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-6 max-w-4xl">
          Planning a device or diagnostics launch? Every market above also has a dedicated{' '}
          <Link to="/market-reports" className="text-primary hover:underline">
            medical devices and IVD report
          </Link>{' '}
          in the reports hub. For a multi-country programme, start from{' '}
          <Link to="/healthcare-market-research/services/market-access" className="text-primary hover:underline">
            market access research
          </Link>{' '}
          or tell us your target markets on the{' '}
          <Link to="/contact" className="text-primary hover:underline">
            contact page
          </Link>
          .
        </p>
      </ReportPremiumSection>

      <ReportPremiumSection
        id="gcc-report-cluster-extended"
        title="GCC pharma company directories &amp; peer country links"
        variant="default"
      >
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
          Country pharma company directories link into the GCC report cluster above to pass authority from page-one
          BOFU URLs into segment reports.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <HealthcareNavCard
            to="/pharmaceutical-companies-saudi-arabia"
            title="Pharmaceutical companies in Saudi Arabia"
          />
          <HealthcareNavCard to="/pharmaceutical-companies-uae" title="Pharmaceutical companies in UAE" />
          <HealthcareNavCard to="/pharmaceutical-companies-kuwait" title="Pharmaceutical companies in Kuwait" />
        </div>
      </ReportPremiumSection>

      <ReportPremiumSection id="regional-expertise" title="All country research hubs" variant="muted">
          <p className="text-muted-foreground mb-6 max-w-4xl">
            Every country below has a dedicated healthcare market research hub with local fieldwork context,
            stakeholder FAQs, and cross-links to related markets — coordinated from BioNixus US headquarters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {countries.filter((c) => !c.isCity).map((country) => (
              <HealthcareNavCard
                key={country.slug}
                to={`/healthcare-market-research/${country.slug}`}
                title={country.name}
                description={country.metaSuffix}
              />
            ))}
          </div>
      </ReportPremiumSection>

      <ReportPremiumSection
        id="city-hubs"
        title="Primary research hubs"
        subtitle="City-level depth for the Middle East's densest healthcare clusters."
      >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </ReportPremiumSection>

      <ReportPremiumSection
        id="dubai-uae"
        title="Healthcare & pharmaceutical market research in Dubai & UAE"
        variant="cream"
      >
          <div className="text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>
              BioNixus runs healthcare and pharmaceutical market research across Dubai, Abu Dhabi, and the wider UAE —
              a market valued at roughly $4.15 billion in 2024 and forecast to reach about $8.02 billion by 2033,
              a 7.3% CAGR (BioNixus market analysis, 2024). What makes the UAE distinct is not its size but its structure: three
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
      </ReportPremiumSection>

      <ReportPremiumSection id="why-dubai-pharma" title="Why pharmaceutical companies in Dubai choose BioNixus" variant="muted">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'US headquarters, global reach',
                desc: 'Programmes are managed from Sheridan, Wyoming (USA) with regional execution in London, Cairo, Dubai, and Riyadh — so US and international clients share one accountable project office.',
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
      </ReportPremiumSection>

      <ReportPremiumSection id="services" title="Healthcare research services">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map((service) => (
              <HealthcareNavCard
                key={`${service.slug || service.title}`}
                to={
                  service.slug
                    ? `/healthcare-market-research/services/${service.slug}`
                    : '/healthcare-market-research/services/market-access'
                }
                title={service.title || 'Research service'}
                description={
                  service.description ||
                  'Specialized pharmaceutical market research support for strategic decisions.'
                }
              />
            ))}
          </div>
      </ReportPremiumSection>

      <ReportPremiumSection id="therapy-areas" title="Therapy area expertise" variant="muted">
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
      </ReportPremiumSection>

      <ReportPremiumSection id="featured-guides" title="Featured guides & market insights">
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
      </ReportPremiumSection>

      <ReportPremiumSection id="country-shortcuts" title="Country industry guide shortcuts" variant="muted">
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
      </ReportPremiumSection>

      <ReportPremiumSection id="global-nav" title="Global and regional navigation">
          <p className="text-muted-foreground mb-4 max-w-3xl">
            Looking beyond healthcare or routing to a specific country? The global directory maps our full market coverage. Staying in pharma and devices? Keep to this hub and pick the service or market you need to plan.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <HealthcareNavCard to="/global-websites" title="Open global websites directory" />
            <HealthcareNavCard to="/services" title="Compare healthcare research services" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
            {healthcareCountryRecoveryPaths.slice(0, 24).map((path) => (
              <Link key={path} to={path} className="text-primary hover:underline break-all text-sm">
                {path}
              </Link>
            ))}
          </div>
      </ReportPremiumSection>

      <HubMarketReferenceGuide />
      <ReportMidPageCta config={hubConfig} className="my-4" />
      </HealthcareResearchPageShell>
    </>
  );
}

