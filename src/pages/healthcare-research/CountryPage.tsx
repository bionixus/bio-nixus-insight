import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { useInitialData } from '@/contexts/InitialDataContext';
import { SEOHead } from '@/components/seo/SEOHead';
import { RelatedPages } from '@/components/healthcare-research/RelatedPages';
import { HealthcareResearchPageShell } from '@/components/healthcare-research/HealthcareResearchPageShell';
import { HealthcareNavCard, HealthcareStatPanel } from '@/components/healthcare-research/healthcareResearchUi';
import { CountryMarketReferenceGuide } from '@/components/seo/CountryMarketReferenceGuide';
import { GeoMarketClusterCallout } from '@/components/seo/GeoMarketClusterCallout';
import { getGeoMarketClusterForSlug } from '@/data/geo-market-page-clusters';
import { COUNTRY_CONFIGS, resolveCountryConfig, type CountryConfig } from '@/lib/constants/countries';
import { getHealthcareMarketResearchCountryConfig } from '@/data/reportConversionConfig';
import { ReportMidPageCta } from '@/components/report-conversion';
import { ReportPremiumSection } from '@/components/report-premium';
import { buildCountryPageSchemas } from '@/lib/seo/schemas';

function portableTextToParagraphs(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((block) => {
      if (!block || typeof block !== 'object') return '';
      const children = (block as { children?: unknown[] }).children;
      if (!Array.isArray(children)) return '';
      return children
        .map((child) => (child && typeof child === 'object' ? (child as { text?: string }).text || '' : ''))
        .join('')
        .trim();
    })
    .filter(Boolean);
}

const COUNTRY_NAME_OVERRIDES: Record<string, string> = {
  'united-states': 'United States',
  'united-kingdom': 'United Kingdom',
  'united-arab-emirates': 'United Arab Emirates',
};

function buildCountryFaqFallback(config: CountryConfig): { question: string; answer: string }[] {
  const regionLabel =
    config.region === 'uk' ? 'the United Kingdom' : config.region === 'europe' ? 'European markets' : 'MENA markets';
  return [
    {
      question: `How does BioNixus approach healthcare market research in ${config.name}?`,
      answer: `Programs in ${config.name} are designed around decision-critical questions first, then matched to the right qualitative and quantitative methods so recommendations are practical for commercial, medical, and market-access teams.`,
    },
    {
      question: `Which stakeholders are usually prioritized in ${config.name} studies?`,
      answer: `Sampling typically includes prescribing specialists, institutional decision influencers, and access-relevant stakeholders based on therapy objectives and care-setting dynamics in ${config.name}.`,
    },
    {
      question: `How is ${config.name} research aligned with cross-country strategy?`,
      answer: `Each ${config.name} study is built with comparable core metrics and localized modules so leadership can benchmark against ${regionLabel} without losing local execution realism.`,
    },
    {
      question: `What outputs are delivered from ${config.name} market research engagements?`,
      answer: `Deliverables usually include stakeholder maps, adoption barriers and accelerators, segment-level opportunity framing, and action-oriented recommendations tied to launch or lifecycle decisions.`,
    },
  ];
}

function buildEvidenceSafeStats(config: CountryConfig): { label: string; value: string }[] {
  return [
    { label: 'Market Focus', value: `${config.name} healthcare and pharmaceutical decision environment` },
    { label: 'Stakeholder Scope', value: 'Physician, institutional, and access-relevant audiences' },
    {
      label: 'Execution Model',
      value:
        config.region === 'mena'
          ? 'Localized MENA fieldwork and interpretation'
          : config.region === 'uk'
            ? 'UK-context qualitative and quantitative delivery'
            : 'Multi-country European coordination with local adaptation',
    },
    { label: 'Primary Output', value: 'Decision-ready evidence for strategy and execution planning' },
  ];
}

export default function CountryPage() {
  const { country } = useParams<{ country: string }>();
  const location = useLocation();
  const { data } = useInitialData();
  const aliasSlug = location.pathname.match(/^\/(saudi-arabia|uae|kuwait|uk|europe|riyadh|jeddah|dubai|abu-dhabi)$/)?.[1];
  const resolvedSlug =
    country ||
    (typeof data.slug === 'string' ? data.slug : undefined) ||
    aliasSlug;
  const config = resolvedSlug ? resolveCountryConfig(resolvedSlug) : undefined;

  if (!config) {
    return <Navigate to="/healthcare-market-research" replace />;
  }

  const countryContent =
    data.pageType === 'country' &&
      data.slug === config.slug &&
      data.countryContent &&
      typeof data.countryContent === 'object'
      ? (data.countryContent as Record<string, unknown>)
      : null;

  const faqItems =
    Array.isArray(countryContent?.faq) && countryContent.faq.length > 0
      ? (countryContent.faq as { question: string; answer: string }[])
      : buildCountryFaqFallback(config);
  const evidenceSafeStats = buildEvidenceSafeStats(config);
  const heroHeading =
    typeof countryContent?.title === 'string' && countryContent.title.length > 0
      ? countryContent.title
      : config.h1;
  const marketOverview =
    countryContent?.marketOverview && typeof countryContent.marketOverview === 'object'
      ? (countryContent.marketOverview as Record<string, unknown>)
      : null;
  const capabilities =
    countryContent?.capabilities && typeof countryContent.capabilities === 'object'
      ? (countryContent.capabilities as Record<string, unknown>)
      : null;
  const regulatoryContext =
    countryContent?.regulatoryContext && typeof countryContent.regulatoryContext === 'object'
      ? (countryContent.regulatoryContext as Record<string, unknown>)
      : null;
  const caseStudies = Array.isArray(countryContent?.caseStudies)
    ? (countryContent.caseStudies as { title?: string; challenge?: string; solution?: string; result?: string }[])
    : [];
  const overviewParagraphs = portableTextToParagraphs(marketOverview?.content);
  const capabilityParagraphs = portableTextToParagraphs(capabilities?.content);
  const regulatoryParagraphs = portableTextToParagraphs(regulatoryContext?.content);
  const capabilityBullets = Array.isArray(capabilities?.bulletPoints)
    ? (capabilities.bulletPoints as string[]).filter(Boolean)
    : [];

  const conversionConfig = getHealthcareMarketResearchCountryConfig(config.name, config.slug);
  const geoCluster = getGeoMarketClusterForSlug(config.slug);
  const geoClusterVariant =
    config.slug === 'united-arab-emirates' ? ('healthcare-mr-full-name' as const) : ('healthcare-mr' as const);
  const heroStats =
    config.keyStats.length >= 3
      ? config.keyStats.slice(0, 3).map((stat) => ({ value: stat.value, label: stat.label }))
      : evidenceSafeStats.slice(0, 3).map((stat) => ({ value: stat.value, label: stat.label }));
  const faqSectionId = `healthcare-mr-country-${config.slug}-faq`;

  return (
    <>
      <SEOHead
        title={config.metaTitle ?? `Pharmaceutical Market Research in ${config.name} | BioNixus`}
        description={config.metaDescription ?? config.ogDescription}
        canonical={`/healthcare-market-research/${config.slug}`}
        jsonLd={buildCountryPageSchemas(config)}
      />

      <HealthcareResearchPageShell
        progressId={`healthcare-mr-country-${config.slug}`}
        config={conversionConfig}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
          { name: config.name, href: `/healthcare-market-research/${config.slug}` },
        ]}
        hero={{
          title: heroHeading,
          countryName: config.name,
          marketSlug: config.slug,
          stats: heroStats,
          statsCaption: '',
          description: (
            <p>
              {config.slug === 'united-arab-emirates' ? (
                <>
                  BioNixus designs federated United Arab Emirates studies across MOHAP, DHA, and DOH jurisdictions —
                  with UAE-wide stakeholder sampling and emirate-level execution detail. Compare with{' '}
                  <Link to="/healthcare-market-research/uae" className="text-primary font-medium hover:underline">
                    UAE emirate-focused market research
                  </Link>{' '}
                  or the{' '}
                  <Link to="/global-websites/united-arab-emirates" className="text-primary font-medium hover:underline">
                    UAE go-to-market blueprint
                  </Link>
                  .
                </>
              ) : config.slug === 'saudi-arabia' ? (
                <>
                  BioNixus delivers SFDA-aware physician surveys, Arabic fieldwork, and hospital stakeholder evidence
                  across KSA. For launch sequencing and NUPCO context, see the{' '}
                  <Link to="/global-websites/saudi-arabia" className="text-primary font-medium hover:underline">
                    Saudi Arabia market entry blueprint
                  </Link>
                  .
                </>
              ) : config.slug === 'uae' ? (
                <>
                  BioNixus runs DHA and DOH-aligned{' '}
                  <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
                    healthcare market research
                  </Link>{' '}
                  in Dubai and Abu Dhabi with MOHAP-aware payer evidence. For the Dubai MR cluster see{' '}
                  <Link
                    to="/pharmaceutical-market-research-dubai"
                    className="text-primary font-medium hover:underline"
                  >
                    healthcare market research Dubai
                  </Link>{' '}
                  and our{' '}
                  <Link
                    to="/insights/top-healthcare-market-research-companies-dubai-2026"
                    className="text-primary font-medium hover:underline"
                  >
                    top healthcare market research companies in Dubai
                  </Link>
                  . For federated UAE planning, see{' '}
                  <Link
                    to="/healthcare-market-research/united-arab-emirates"
                    className="text-primary font-medium hover:underline"
                  >
                    United Arab Emirates healthcare market research
                  </Link>
                  .
                </>
              ) : (
                <>
                  BioNixus supports evidence-led decisions in {config.name} through localized study design, stakeholder
                  mapping, and implementation-focused interpretation. Start from the{' '}
                  <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
                    healthcare market research hub
                  </Link>{' '}
                  to align country priorities with therapy and service planning.
                </>
              )}
            </p>
          ),
        }}
        tocItems={[
          { href: '#key-indicators', label: 'Market indicators' },
          { href: '#market-overview', label: 'Market overview' },
          { href: '#capabilities', label: 'Capabilities' },
          { href: '#therapy-priorities', label: 'Therapy priorities' },
          { href: '#regulatory-context', label: 'Regulatory context' },
          { href: `#${faqSectionId}`, label: 'FAQ' },
        ]}
        faq={{
          sectionId: faqSectionId,
          title: `Frequently Asked Questions About Pharmaceutical Research in ${config.name}`,
          items: faqItems,
        }}
      >
        {geoCluster ? (
          <div className="mb-8">
            <GeoMarketClusterCallout cluster={geoCluster} variant={geoClusterVariant} />
          </div>
        ) : null}
        <ReportPremiumSection
          id="key-indicators"
          title="Key pharmaceutical market indicators"
          variant="cream"
          countryName={config.name}
          marketSlug={config.slug}
        >
          <HealthcareStatPanel stats={config.keyStats.length > 0 ? config.keyStats : evidenceSafeStats} />
        </ReportPremiumSection>

        <ReportPremiumSection
          id="market-overview"
          title={
            typeof marketOverview?.heading === 'string'
              ? marketOverview.heading
              : `${config.name} pharmaceutical market overview`
          }
          countryName={config.name}
          marketSlug={config.slug}
        >
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {overviewParagraphs.length > 0 ? (
              overviewParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            ) : (
              <>
                <p>
                  BioNixus provides market-level intelligence in {config.name} with a practical focus on adoption
                  behavior, stakeholder influence, and evidence requirements across institutional settings.
                </p>
                <p>
                  Research outputs are structured for commercial, medical, and access teams so strategy decisions can
                  be converted into actionable execution plans with lower uncertainty.
                </p>
              </>
            )}
          </div>
        </ReportPremiumSection>

        <ReportPremiumSection
          id="capabilities"
          title={
            typeof capabilities?.heading === 'string'
              ? capabilities.heading
              : `BioNixus capabilities in ${config.name}`
          }
          variant="muted"
          countryName={config.name}
          marketSlug={config.slug}
        >
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-5">
            {capabilityParagraphs.length > 0 ? (
              capabilityParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            ) : (
              <p>
                Our delivery model combines local field execution, decision-focused analysis, and cross-functional
                interpretation support to improve strategy quality in {config.name}.
              </p>
            )}
          </div>
          {capabilityBullets.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilityBullets.map((item) => (
                <li key={item} className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </ReportPremiumSection>

        <ReportPremiumSection
          id="therapy-priorities"
          title={`Therapy priorities in ${config.name}`}
          countryName={config.name}
          marketSlug={config.slug}
        >
          <div className="flex flex-wrap gap-2">
            {config.relatedTherapies.map((therapy) => (
              <Link
                key={therapy}
                to={`/healthcare-market-research/therapy/${therapy}`}
                className="px-4 py-2 rounded-full border border-border bg-background text-sm capitalize hover:border-primary/40 transition-colors"
              >
                {therapy} market research
              </Link>
            ))}
          </div>
        </ReportPremiumSection>

        <ReportPremiumSection
          id="regulatory-context"
          title={
            typeof regulatoryContext?.heading === 'string'
              ? regulatoryContext.heading
              : `Regulatory and market context in ${config.name}`
          }
          variant="cream"
          countryName={config.name}
          marketSlug={config.slug}
        >
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {regulatoryParagraphs.length > 0 ? (
              regulatoryParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            ) : (
              <p>
                BioNixus aligns research programs with local policy context, stakeholder decision structures, and
                market access considerations to ensure results remain practical and implementation-ready.
              </p>
            )}
          </div>
        </ReportPremiumSection>

      {caseStudies.length > 0 ? (
        <ReportPremiumSection
          id="case-studies"
          title={`Case studies in ${config.name}`}
          variant="muted"
          countryName={config.name}
          marketSlug={config.slug}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {caseStudies.map((study, idx) => (
                <article key={`${study.title || 'case'}-${idx}`} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{study.title || 'Project case study'}</h3>
                  {study.challenge ? <p className="text-sm text-muted-foreground mb-2"><strong>Challenge:</strong> {study.challenge}</p> : null}
                  {study.solution ? <p className="text-sm text-muted-foreground mb-2"><strong>Solution:</strong> {study.solution}</p> : null}
                  {study.result ? <p className="text-sm text-foreground"><strong>Result:</strong> {study.result}</p> : null}
                </article>
              ))}
            </div>
        </ReportPremiumSection>
      ) : null}

      {/* Targeted Intelligence & Insight Guides */}
      {config.slug === 'saudi-arabia' && (
        <ReportPremiumSection
          id="saudi-deep-dive"
          title="Deep dive: the 2026 Saudi pharmaceutical landscape"
          variant="default"
          countryName={config.name}
          marketSlug={config.slug}
        >
          <div className="space-y-8 text-foreground">
            <p className="text-base leading-relaxed text-muted-foreground">
              For BOFU company-intent searches, use our{' '}
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary underline font-medium">
                healthcare market research company in Saudi Arabia
              </Link>{' '}
              page; for KSA keyword variants see{' '}
              <Link to="/market-research-ksa" className="text-primary underline font-medium">
                market research KSA
              </Link>{' '}
              and{' '}
              <Link to="/market-research-saudi" className="text-primary underline font-medium">
                market research Saudi
              </Link>
              .
            </p>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Saudi pharmaceutical market strategy is increasingly shaped by Vision 2030 priorities, including
                localization, health-system transformation, and stronger evidence expectations in institutional decision
                processes. For teams entering or expanding in the Kingdom, planning should align with evolving policy,
                procurement, and access requirements.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Navigating NUPCO and the Shift to Value</h3>
              <p>
                With National Unified Procurement Company (NUPCO) involvement across government channels, institutional
                access planning often requires clear tender mapping, value communication, and account-level execution
                sequencing. BioNixus supports market-access feasibility work to map tender influence, pricing dynamics,
                and evidence expectations.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">The Impact of the Health Holding Company (HHC)</h3>
              <p>
                The shift toward regional health-cluster accountability means commercial and medical teams often need
                cluster-specific plans rather than a single centralized approach. Our qualitative work maps decision
                dynamics across major clusters and clarifies who influences protocol adoption, formulary inclusion, and
                therapeutic switching.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">SFDA Regulatory Agility and Patient Pathways</h3>
              <p>
                Regulatory approval alone is not sufficient for adoption. BioNixus maps patient pathways from diagnosis
                through specialist treatment and identifies operational bottlenecks such as referral delays, testing
                constraints, and prescribing variability, helping teams shape practical patient-support and medical
                education programs.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Omnichannel Strategy and KOL Engagement</h3>
              <p>
                Omnichannel planning works best when channel assumptions are tested against actual specialist behavior,
                institutional constraints, and peer influence patterns. BioNixus uses structured research to identify where
                in-person, digital, and hybrid engagement can improve consistency without adding communication noise.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Oncology market research in Saudi Arabia</h3>
              <p>
                Oncology market research in Saudi Arabia requires practical evidence on referral flows, treatment sequencing,
                biomarker testing constraints, and institutional adoption criteria. BioNixus combines specialist interviews,
                account-level mapping, and quantitative validation to help teams prioritize oncology launch and access actions
                with stronger confidence.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Saudi Arabia precision medicine &amp; biologics segments</h3>
              <p>
                For segment-specific sizing aligned to high-impression search demand, use the{' '}
                <Link to="/market-reports/saudi-arabia-rare-diseases-market-report" className="text-primary underline font-medium">
                  Saudi Arabia precision medicine &amp; rare diseases market report
                </Link>
                , the{' '}
                <Link to="/market-reports/saudi-arabia-immunology-biologics-market-report" className="text-primary underline font-medium">
                  Saudi immunology &amp; biologics market report
                </Link>
                , the{' '}
                <Link to="/market-reports/saudi-arabia-biosimilars-market-report" className="text-primary underline font-medium">
                  Saudi biosimilars market report
                </Link>
                , and the{' '}
                <Link to="/gcc-pharma-market-report-2026" className="text-primary underline font-medium">
                  GCC pharma market report 2026
                </Link>{' '}
                for Gulf-wide context. For GCC in vitro diagnostic (IVD) and medical device procurement intelligence, see the{' '}
                <Link to="/gcc-medical-devices-market-report" className="text-primary underline font-medium">
                  GCC medical devices market report
                </Link>{' '}
                and{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline font-medium">
                  GCC pharmaceutical market research
                </Link>{' '}
                service overview.
              </p>
              <p>
                For focused Saudi execution planning, visit our{' '}
                <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary underline">
                  healthcare market research company in Saudi Arabia
                </Link>{' '}
                and connect country-level oncology evidence to field and access strategy.
              </p>
            </div>
          </div>
        </ReportPremiumSection>
      )}

      {config.slug === 'uae' && (
        <ReportPremiumSection
          id="uae-company-intent"
          title="UAE pharmaceutical market research — company intent"
          countryName={config.name}
          marketSlug={config.slug}
        >
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              For BOFU company-intent searches, use our{' '}
              <Link to="/uae-pharmaceutical-market-research" className="text-primary underline font-medium">
                healthcare market research company in UAE
              </Link>{' '}
              page; for mid-funnel planning see{' '}
              <Link to="/market-research-uae" className="text-primary underline font-medium">
                market research in the UAE
              </Link>
              .
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Dubai drives much of the UAE&apos;s{' '}
              <strong className="font-semibold text-foreground">healthcare market research</strong> query volume — see{' '}
              <Link to="/pharmaceutical-market-research-dubai" className="text-primary underline font-medium">
                pharmaceutical market research in Dubai
              </Link>
              , our{' '}
              <Link
                to="/insights/top-healthcare-market-research-companies-dubai-2026"
                className="text-primary underline font-medium"
              >
                top healthcare market research companies in Dubai (2026)
              </Link>
              , and the{' '}
              <Link to="/healthcare-market-research/dubai" className="text-primary underline font-medium">
                Dubai country research hub
              </Link>
              .
            </p>
        </ReportPremiumSection>
      )}

      {config.slug === 'kuwait' && (
        <ReportPremiumSection
          id="kuwait-company-intent"
          title="Kuwait healthcare market research — company intent"
          countryName={config.name}
          marketSlug={config.slug}
        >
          <p className="text-base leading-relaxed text-muted-foreground">
            Kuwait is the site&apos;s #1 pharma BOFU click driver — connect{' '}
            <Link to="/pharmaceutical-companies-kuwait" className="text-primary underline font-medium">
              pharmaceutical companies in Kuwait
            </Link>{' '}
            with{' '}
            <Link to="/market-research-kuwait" className="text-primary underline font-medium">
              market research in Kuwait
            </Link>{' '}
            and{' '}
            <Link to="/healthcare-market-research-agency-gcc" className="text-primary underline font-medium">
              healthcare market research agency GCC
            </Link>{' '}
            for full-funnel coverage.
          </p>
        </ReportPremiumSection>
      )}

      {(config.slug === 'qatar' || config.slug === 'oman' || config.slug === 'bahrain') && (
        <ReportPremiumSection
          id={`${config.slug}-company-intent`}
          title={`${config.name} healthcare market research — company intent`}
          countryName={config.name}
          marketSlug={config.slug}
        >
          <p className="text-base leading-relaxed text-muted-foreground">
            For company-intent traffic, see{' '}
            <Link
              to={`/pharmaceutical-companies-${config.slug}`}
              className="text-primary underline font-medium"
            >
              pharmaceutical companies in {config.name}
            </Link>
            ; for mid-funnel planning see{' '}
            <Link to={`/market-research-${config.slug}`} className="text-primary underline font-medium">
              market research in {config.name}
            </Link>
            .
          </p>
        </ReportPremiumSection>
      )}

      {config.slug === 'egypt' && (
        <ReportPremiumSection
          id="egypt-company-intent"
          title="Egypt pharmaceutical market research — company intent"
          countryName={config.name}
          marketSlug={config.slug}
        >
            <p className="text-base leading-relaxed text-muted-foreground">
              For BOFU company-intent searches, use our{' '}
              <Link to="/egypt-pharmaceutical-market-research" className="text-primary underline font-medium">
                healthcare market research company in Egypt
              </Link>{' '}
              page; for mid-funnel planning see{' '}
              <Link to="/market-research-egypt" className="text-primary underline font-medium">
                market research in Egypt
              </Link>
              . For agency listicle intent, see{' '}
              <Link
                to="/blog/top-market-research-companies-egypt-2026"
                className="text-primary underline font-medium"
              >
                top market research companies in Egypt (2026)
              </Link>
              .
            </p>
        </ReportPremiumSection>
      )}

      {(config.slug === 'saudi-arabia' || config.slug === 'uae' || config.slug === 'uk' || config.slug === 'europe' || config.slug === 'egypt') && (
        <ReportPremiumSection
          id="market-intelligence-guides"
          title={`Deep dive: ${config.name} market intelligence`}
          variant="muted"
          countryName={config.name}
          marketSlug={config.slug}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {config.slug === 'saudi-arabia' && (
                <>
                  <HealthcareNavCard
                    to="/blog/pharma-market-entry-saudi-arabia-playbook"
                    title="Saudi market entry playbook"
                    description="Master NUPCO, localized manufacturing, and distributor strategy."
                  />
                  <HealthcareNavCard
                    to="/blog/sfda-drug-registration-guide"
                    title="SFDA registration guide"
                    description="Navigating pathways, CTD formatting, and timelines."
                  />
                  <HealthcareNavCard
                    to="/blog/top-therapy-areas-pharma-growth-saudi-arabia"
                    title="Priority therapy area signals"
                    description="Country-specific demand and access signals for portfolio planning."
                  />
                </>
              )}
              {config.slug === 'uae' && (
                <>
                  <HealthcareNavCard
                    to="/uae-pharmaceutical-market-research"
                    title="Healthcare market research company in UAE"
                    description="BOFU page for DHA, DOH, MOHAP, and emirate-aware launch evidence."
                  />
                  <HealthcareNavCard
                    to="/blog/market-access-strategy-uae"
                    title="UAE market access strategy"
                    description="DOH, DHA, and MOHAP formulary inclusion tactics."
                  />
                  <HealthcareNavCard
                    to="/blog/kol-mapping-pharma-middle-east"
                    title="GCC KOL mapping"
                    description="Identifying true clinical influencers across the Emirates."
                  />
                  <HealthcareNavCard
                    to="/blog/competitive-intelligence-pharma-gcc"
                    title="GCC competitive intelligence"
                    description="Tracking rival formularies and medical affairs engagement."
                  />
                </>
              )}
              {config.slug === 'egypt' && (
                <>
                  <HealthcareNavCard
                    to="/egypt-pharmaceutical-market-research"
                    title="Healthcare market research company in Egypt"
                    description="BOFU page for EDA, UHI, bilingual fieldwork, and Egypt launch evidence."
                  />
                  <HealthcareNavCard
                    to="/insights/top-market-research-companies-egypt-2026"
                    title="Top market research companies in Egypt (2026)"
                    description="Independent guide to leading firms for healthcare, pharma, and consumer research."
                  />
                  <HealthcareNavCard
                    to="/pharmaceutical-companies-egypt"
                    title="Pharmaceutical companies in Egypt"
                    description="Industry landscape, regulatory context, and market structure orientation."
                  />
                  <HealthcareNavCard
                    to="/strategic-portfolio"
                    title="BioNixus strategic portfolio"
                    description="Capability overview and representative project archetypes."
                  />
                </>
              )}
              {(config.slug === 'uk' || config.slug === 'europe') && (
                <HealthcareNavCard
                  to="/blog/nice-hta-evidence-requirements-guide"
                  title="NICE HTA evidence guide"
                  description="Securing NHS commissioning and managing cost-effectiveness."
                />
              )}
            </div>
        </ReportPremiumSection>
      )}

      <CountryMarketReferenceGuide countryName={config.name} countrySlug={config.slug} region={config.region} />

      <ReportMidPageCta config={conversionConfig} className="my-4" />

      <RelatedPages
        currentSlug={config.slug}
        relatedCountries={config.relatedCountries}
        relatedTherapies={config.relatedTherapies}
      />
      </HealthcareResearchPageShell>
    </>
  );
}

