import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { useInitialData } from '@/App';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { RelatedPages } from '@/components/healthcare-research/RelatedPages';
import { CTASection } from '@/components/shared/CTASection';
import { COUNTRY_CONFIGS, type CountryConfig, type CountryRegion } from '@/lib/constants/countries';
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

const EUROPE_SLUGS = new Set(['germany', 'france', 'italy', 'spain', 'sweden', 'denmark', 'switzerland']);
const UK_SLUGS = new Set(['united-kingdom', 'uk']);

function slugToCountryName(slug: string): string {
  if (COUNTRY_NAME_OVERRIDES[slug]) return COUNTRY_NAME_OVERRIDES[slug];
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function inferRegion(slug: string): CountryRegion {
  if (UK_SLUGS.has(slug)) return 'uk';
  if (EUROPE_SLUGS.has(slug)) return 'europe';
  return 'mena';
}

function buildFallbackCountryConfig(slug: string): CountryConfig {
  const countryName = slugToCountryName(slug);
  return {
    name: countryName,
    slug,
    region: inferRegion(slug),
    metaSuffix: `${countryName} healthcare and pharmaceutical market research insights for launch, access, and growth decisions.`,
    ogDescription:
      `BioNixus delivers decision-ready pharmaceutical market research in ${countryName} with localized stakeholder insights, market access context, and practical strategy support.`,
    h1: `Pharmaceutical Market Research in ${countryName}`,
    relatedCountries: ['saudi-arabia', 'uae', 'uk', 'europe'],
    relatedTherapies: ['oncology', 'diabetes', 'respiratory', 'immunology'],
    keyStats: [
      { label: 'Market Focus', value: `${countryName} healthcare ecosystem` },
      { label: 'Research Scope', value: 'Physician, payer, and hospital stakeholders' },
      { label: 'Delivery Model', value: 'Quantitative + qualitative mixed-methods' },
      { label: 'Primary Output', value: 'Decision-ready pharmaceutical insight' },
    ],
    faqQuestions: [
      {
        question: `How does BioNixus support pharmaceutical market research in ${countryName}?`,
        answer:
          `BioNixus supports pharmaceutical market research in ${countryName} through localized stakeholder mapping, fit-for-purpose methodology, and execution focused on practical commercial, medical, and access decisions.`,
      },
      {
        question: `Which stakeholder groups are typically included in ${countryName} studies?`,
        answer:
          `Most ${countryName} studies include prescribing specialists, institutional influencers, pharmacy stakeholders, and access-relevant decision contributors, depending on the therapy area and strategic objective.`,
      },
      {
        question: `What outputs do clients receive from ${countryName} market research programs?`,
        answer:
          `Programs typically deliver structured insight summaries, segment priorities, stakeholder influence mapping, and action-focused recommendations that can be applied to launch, expansion, or optimization plans in ${countryName}.`,
      },
    ],
  };
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
  const configuredCountry = resolvedSlug ? COUNTRY_CONFIGS[resolvedSlug] : undefined;
  const config = resolvedSlug ? configuredCountry ?? buildFallbackCountryConfig(resolvedSlug) : undefined;

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
      : config.faqQuestions;
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

  return (
    <main>
      <SEOHead
        title={config.metaTitle ?? `Pharmaceutical Market Research in ${config.name} | BioNixus`}
        description={config.metaDescription ?? config.ogDescription}
        canonical={`/healthcare-market-research/${config.slug}`}
        jsonLd={buildCountryPageSchemas(config)}
      />

      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
          { name: config.name, href: `/healthcare-market-research/${config.slug}` },
        ]}
      />

      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container-wide max-w-5xl mx-auto">
          <h1 className="text-4xl font-display font-semibold mb-4">{heroHeading}</h1>
          <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-4xl">
            {config.slug === 'uae' ? (
              <>
                BioNixus supports healthcare market research in the UAE and pharma market research in the UAE through
                localized research design, stakeholder mapping, and actionable insight synthesis. Explore the full regional
                framework in our{' '}
                <Link to="/healthcare-market-research" className="underline font-semibold">
                  healthcare market research hub
                </Link>{' '}
                and the dedicated{' '}
                <Link to="/market-research-uae" className="underline font-semibold">
                  market research in the UAE
                </Link>{' '}
                page before drilling into country-level execution priorities.
              </>
            ) : (
              <>
                BioNixus supports evidence-led market decisions in {config.name} through localized research design,
                stakeholder mapping, and actionable insight synthesis. Explore the full regional framework in our{' '}
                <Link to="/healthcare-market-research" className="underline font-semibold">
                  healthcare market research hub
                </Link>{' '}
                before drilling into country-level execution priorities.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
            Key Pharmaceutical Market Indicators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {config.keyStats.map((stat) => (
              <article key={stat.label} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">{stat.label}</h3>
                <p className="text-lg font-semibold text-foreground">{stat.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            {typeof marketOverview?.heading === 'string'
              ? marketOverview.heading
              : `${config.name} Pharmaceutical Market Overview`}
          </h2>
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
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            {typeof capabilities?.heading === 'string'
              ? capabilities.heading
              : `BioNixus Capabilities in ${config.name}`}
          </h2>
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
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            Therapy Priorities in {config.name}
          </h2>
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
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            {typeof regulatoryContext?.heading === 'string'
              ? regulatoryContext.heading
              : `Regulatory and Market Context in ${config.name}`}
          </h2>
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
        </div>
      </section>

      {caseStudies.length > 0 ? (
        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Case Studies in {config.name}</h2>
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
          </div>
        </section>
      ) : null}

      {/* Targeted Intelligence & Insight Guides */}
      {config.slug === 'saudi-arabia' && (
        <section className="py-12 bg-card border-y border-border">
          <div className="container-wide max-w-5xl mx-auto space-y-8 text-foreground">
            <h2 className="text-3xl font-display font-semibold">
              Deep Dive: The 2026 Saudi Pharmaceutical Landscape
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                The Saudi Arabian pharmaceutical market is undergoing a structural revolution driven by Vision 2030. The traditional model of relying on imported branded portfolios and generic distributorships is being rapidly replaced by aggressive localization mandates. For pharmaceutical executives targeting the Kingdom, success now hinges on deep alignment with the Ministry of Investment's (MISA) and Ministry of Health's (MOH) push for local manufacturing, clinical trial expansion, and value-based procurement.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Navigating NUPCO and the Shift to Value</h3>
              <p>
                As the National Unified Procurement Company (NUPCO) consolidates its monopsony power across government healthcare sectors, navigating institutional access requires unprecedented sophistication. NUPCO is moving beyond simple unit-price tendering toward comprehensive supply chain integration and preference for localized fill-and-finish partnerships. BioNixus conducts targeted market access feasibility studies to help global pharma teams map tender influence, evaluate competitive pricing intelligence, and align value dossiers with NUPCO’s evolving pharmacoeconomic expectations.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">The Impact of the Health Holding Company (HHC)</h3>
              <p>
                The corporatization of the MOH into the Health Holding Company (HHC) and the creation of regional health clusters represent a massive shift from central decision-making to regional accountability. Commercial teams can no longer rely on a single central strategy. Our qualitative research maps the specific decision dynamics within tier-1 clusters across Riyadh, Jeddah, and the Eastern Province. We help key account managers (KAMs) understand precisely who controls protocol adoption, formulary inclusion, and therapeutic switching at the cluster level.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">SFDA Regulatory Agility and Patient Pathways</h3>
              <p>
                The Saudi Food and Drug Authority (SFDA) is positioning itself as a top-tier global regulator, offering accelerated pathways for breakthrough therapies and orphan drugs. However, securing regulatory approval is only the first step. BioNixus maps complex patient pathways—from diagnosis at primary care centers to specialized tertiary interventions at institutions like KFSH&RC and NGHA. By analyzing patient drop-off rates, biomarker testing bottlenecks, and physician prescribing behavior, we enable commercial teams to build highly effective patient support programs (PSPs) and targeted medical education initiatives.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Omnichannel Strategy and KOL Engagement</h3>
              <p>
                Saudi healthcare professionals (HCPs) are among the most digitally literate in the region, yet traditional field force models are increasingly facing access fatigue. BioNixus provides deep omnichannel intelligence, evaluating channel preferences, content consumption habits, and peer-to-peer influence networks among Saudi Key Opinion Leaders (KOLs). We identify the "true influencers"—who drive clinical consensus in specialized therapy areas like oncology, immunology, and rare diseases—allowing your medical and commercial teams to deploy resource-efficient, high-impact engagement strategies.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Oncology market research in Saudi Arabia</h3>
              <p>
                Oncology market research in Saudi Arabia requires practical evidence on referral flows, treatment sequencing,
                biomarker testing constraints, and institutional adoption criteria. BioNixus combines specialist interviews,
                account-level mapping, and quantitative validation to help teams prioritize oncology launch and access actions
                with stronger confidence.
              </p>
              <p>
                For focused Saudi execution planning, visit our{' '}
                <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary underline">
                  pharma market research company in Saudi Arabia page
                </Link>{' '}
                and connect country-level oncology evidence to field and access strategy.
              </p>
            </div>
          </div>
        </section>
      )}

      {(config.slug === 'saudi-arabia' || config.slug === 'uae' || config.slug === 'uk' || config.slug === 'europe') && (
        <section className="py-12 bg-primary/5 border-y border-primary/10">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Deep Dive: {config.name} Market Intelligence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {config.slug === 'saudi-arabia' && (
                <>
                  <Link to="/blog/pharma-market-entry-saudi-arabia-playbook" className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                    <h3 className="text-base font-semibold text-foreground mb-2">Saudi Market Entry Playbook</h3>
                    <p className="text-sm text-muted-foreground">Master NUPCO, localized manufacturing, and distributor strategy.</p>
                  </Link>
                  <Link to="/blog/sfda-drug-registration-guide" className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                    <h3 className="text-base font-semibold text-foreground mb-2">SFDA Registration Guide</h3>
                    <p className="text-sm text-muted-foreground">Navigating pathways, CTD formatting, and timelines.</p>
                  </Link>
                  <Link to="/blog/top-therapy-areas-pharma-growth-saudi-arabia" className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                    <h3 className="text-base font-semibold text-foreground mb-2">Top 10 Growth Therapy Areas</h3>
                    <p className="text-sm text-muted-foreground">The most lucrative segments driven by Vision 2030.</p>
                  </Link>
                </>
              )}
              {config.slug === 'uae' && (
                <>
                  <Link to="/blog/market-access-strategy-uae" className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                    <h3 className="text-base font-semibold text-foreground mb-2">UAE Market Access Strategy</h3>
                    <p className="text-sm text-muted-foreground">DOH, DHA, and MOHAP formulary inclusion tactics.</p>
                  </Link>
                  <Link to="/blog/kol-mapping-pharma-middle-east" className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                    <h3 className="text-base font-semibold text-foreground mb-2">GCC KOL Mapping</h3>
                    <p className="text-sm text-muted-foreground">Identifying true clinical influencers across the Emirates.</p>
                  </Link>
                  <Link to="/blog/competitive-intelligence-pharma-gcc" className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                    <h3 className="text-base font-semibold text-foreground mb-2">GCC Competitive Intelligence</h3>
                    <p className="text-sm text-muted-foreground">Tracking rival formularies and medical affairs engagement.</p>
                  </Link>
                </>
              )}
              {(config.slug === 'uk' || config.slug === 'europe') && (
                <Link to="/blog/nice-hta-evidence-requirements-guide" className="block p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <h3 className="text-base font-semibold text-foreground mb-2">NICE HTA Evidence Guide</h3>
                  <p className="text-sm text-muted-foreground">Securing NHS commissioning and managing cost-effectiveness.</p>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      <FAQSection
        items={faqItems}
        title={`Frequently Asked Questions About Pharmaceutical Research in ${config.name}`}
      />

      <RelatedPages
        currentSlug={config.slug}
        relatedCountries={config.relatedCountries}
        relatedTherapies={config.relatedTherapies}
      />

      <CTASection variant="country" countryName={config.name} />
    </main>
  );
}

