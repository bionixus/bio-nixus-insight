import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useCallback, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import IndustriesInsightsFilters from '@/components/blog/IndustriesInsightsFilters';
import { BlogIndexHero } from '@/components/blog/BlogIndexHero';
import { BlogRelatedPathways } from '@/components/blog/BlogRelatedPathways';
import { PremiumComplianceRibbon } from '@/components/home/PremiumComplianceRibbon';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { CTASection } from '@/components/shared/CTASection';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { useIndustriesInsights } from '@/hooks/useSanityBlog';
import { useInitialData } from '@/contexts/InitialDataContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { buildFilterOptions } from '@/lib/blog-index-filters';
import {
  ALL_INDUSTRIES,
  ALL_SEGMENTS,
  DEFAULT_INDUSTRIES_INSIGHTS_FILTER_STATE,
  buildIndustrySlugFilterOptions,
  filterIndustriesInsightsPosts,
  hasActiveIndustriesInsightsFilters,
  type IndustriesInsightsFilterState,
  type IndustrySegmentFilter,
} from '@/lib/industries-insights-filters';
import {
  INDUSTRIES_HUB_PATH,
  INDUSTRIES_INSIGHTS_INDEX_PATH,
  INDUSTRIES_INSIGHT_POST_PATH_PREFIX,
} from '@/lib/blog-content-silo';
import type { BlogPost } from '@/types/blog';

const PAGE_CANONICAL = 'https://www.bionixus.com/bionixus-industries/insights';
const PAGE_TITLE = 'Industry Insights Blog | B2B & B2C Market Research | BioNixus';
const PAGE_DESCRIPTION =
  'B2B and B2C market research insights across technology, energy, FMCG, retail, financial services, and more — fieldwork-led articles for commercial and strategy teams. Separate from BioNixus healthcare blog.';

const INSIGHTS_FAQ = [
  {
    question: 'What industries do these insights cover?',
    answer:
      'Articles span B2B categories (technology, energy, real estate, public sector, education) and B2C categories (FMCG, retail, financial services, telecom, automotive, hospitality, media) across Saudi Arabia, the UAE, Egypt, and the wider GCC — with global coverage expanding by programme.',
  },
  {
    question: 'How is this different from the healthcare blog?',
    answer:
      'The healthcare blog focuses on pharmaceutical, clinical, and market access research. This industry insights blog is for non-healthcare buyers — brand, commercial, and strategy teams in B2B and B2C markets. Both run to the same sampling and governance standards BioNixus built in regulated healthcare.',
  },
  {
    question: 'Can I request a country × industry deep-dive?',
    answer:
      'Yes. Use the contact form with your industry vertical, country, and decision deadline — we typically respond with a tailored methodology outline within one business day.',
  },
] as const;

const SEGMENT_PILLS: { value: IndustrySegmentFilter; label: string }[] = [
  { value: ALL_SEGMENTS, label: 'All segments' },
  { value: 'b2b', label: 'B2B' },
  { value: 'b2c', label: 'B2C' },
];

const RELATED_PATHWAYS = [
  {
    to: INDUSTRIES_HUB_PATH,
    label: 'Industries hub',
    description: 'Bridge between healthcare and B2B/B2C research silos.',
  },
  {
    to: '/b2b-industries',
    label: 'B2B industries',
    description: 'Enterprise, institutional, and infrastructure markets.',
  },
  {
    to: '/b2c-industries',
    label: 'B2C industries',
    description: 'Consumer demand, brands, and shopper journeys.',
  },
  {
    to: '/market-research-by-industry',
    label: 'Market research by industry',
    description: 'Country × industry matrix entry points.',
  },
];

export default function BionixusIndustriesInsights() {
  const { data: routeData } = useInitialData();
  const ssrPosts =
    (routeData.pageType === 'industries-insights-index' ||
      routeData.pageType === 'bionixus-industries') &&
    Array.isArray(routeData.industriesInsights)
      ? (routeData.industriesInsights as BlogPost[])
      : undefined;
  const { data: posts, isLoading, isError, error } = useIndustriesInsights(ssrPosts);

  const allPosts = posts ?? ssrPosts ?? [];
  const [filterState, setFilterState] = useState<IndustriesInsightsFilterState>(
    DEFAULT_INDUSTRIES_INSIGHTS_FILTER_STATE,
  );

  const countryOptions = useMemo(() => buildFilterOptions(allPosts, 'country'), [allPosts]);
  const industryOptions = useMemo(() => buildIndustrySlugFilterOptions(allPosts), [allPosts]);
  const filteredPosts = useMemo(
    () => filterIndustriesInsightsPosts(allPosts, filterState),
    [allPosts, filterState],
  );
  const filtersActive = hasActiveIndustriesInsightsFilters(filterState);
  const postCount = allPosts.length;
  const visibleCount = filteredPosts.length;

  const handleFilterChange = useCallback((patch: Partial<IndustriesInsightsFilterState>) => {
    setFilterState((prev) => ({ ...prev, ...patch }));
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilterState(DEFAULT_INDUSTRIES_INSIGHTS_FILTER_STATE);
  }, []);

  const heroRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const introRef = useScrollReveal<HTMLElement>({ stagger: 100 });

  const heroStats =
    !isLoading && postCount > 0
      ? [
          { value: String(postCount), label: 'Published articles' },
          { value: 'B2B · B2C', label: 'Research segments' },
          { value: '◈', label: 'Fieldwork-led insights' },
        ]
      : undefined;

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_CANONICAL,
    isPartOf: {
      '@type': 'WebSite',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    about: ['B2B market research', 'B2C market research', 'Industry insights'],
    ...(postCount > 0
      ? {
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: postCount,
            itemListElement: {
              '@type': 'ListItem',
              position: 1,
              name: 'Industry market research articles',
            },
          },
        }
      : {}),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://www.bionixus.com/bionixus-industries',
      },
      { '@type': 'ListItem', position: 3, name: 'Industry Insights', item: PAGE_CANONICAL },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: INSIGHTS_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BioNixus" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={PAGE_CANONICAL} />
        <meta property="og:image" content="https://www.bionixus.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BioNixus" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content="https://www.bionixus.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <BlogIndexHero
          homeHref={INDUSTRIES_HUB_PATH}
          homeLabel="Back to Industries"
          eyebrow="Industry Insights"
          title="B2B & B2C Market Research Insights"
          subtitle="Fieldwork-led articles for commercial and strategy teams — separate from our healthcare and pharmaceutical blog."
          stats={heroStats}
          browseLabel="Browse articles"
          proposalLabel="Request a proposal"
          proposalHref="/contact"
          sectionRef={heroRef}
        />
        <PremiumComplianceRibbon />

        <div className="border-b border-border/60 bg-[#FAF8F4]">
          <div className="container-wide mx-auto max-w-5xl px-4 pt-4">
            <BreadcrumbNav
              items={[
                { name: 'Home', href: '/' },
                { name: 'Industries', href: INDUSTRIES_HUB_PATH },
                { name: 'Industry Insights', href: INDUSTRIES_INSIGHTS_INDEX_PATH },
              ]}
            />
          </div>
        </div>

        <section className="section-padding border-b border-border/60 bg-[#FAF8F4] py-12" ref={introRef}>
          <div className="container-wide mx-auto max-w-5xl">
            <div className="mb-3 inline-flex items-center gap-2.5">
              <span className="h-px w-8 bg-[#C9A84C]/50" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
                Research silo
              </span>
            </div>
            <h2 className="mb-6 font-display text-2xl font-semibold text-foreground md:text-3xl sr sr-up sr-line">
              Insights for industry decisions
            </h2>
            <div className="grid gap-8 text-[15px] leading-relaxed text-muted-foreground md:grid-cols-2">
              <p className="sr sr-left">
                Filter by B2B or B2C segment, industry vertical, and country. Articles are built from primary
                fieldwork — buyer, channel, and competitive intelligence — not syndicated desk-only summaries.
              </p>
              <p className="sr sr-right">
                Pharmaceutical and healthcare research stays on our{' '}
                <Link to="/blog" className="font-medium text-primary hover:underline">
                  healthcare market research blog
                </Link>
                . Start from the{' '}
                <Link to={INDUSTRIES_HUB_PATH} className="font-medium text-primary hover:underline">
                  industries hub
                </Link>{' '}
                when you need segment entry points rather than articles.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding border-b border-border/40 bg-background py-8" aria-label="Filter by segment">
          <div className="container-wide mx-auto max-w-5xl">
            <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by industry segment">
              {SEGMENT_PILLS.map(({ value, label }) => {
                const active = filterState.segment === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleFilterChange({ segment: value })}
                    className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? 'bg-primary text-primary-foreground'
                        : 'border border-border bg-card text-foreground hover:border-primary/40'
                    }`}
                    aria-pressed={active}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            {industryOptions.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Quick filter by industry">
                <button
                  type="button"
                  onClick={() => handleFilterChange({ industry: ALL_INDUSTRIES })}
                  className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                    filterState.industry === ALL_INDUSTRIES
                      ? 'border border-primary/30 bg-primary/15 text-primary'
                      : 'border border-border bg-card text-muted-foreground hover:border-primary/30'
                  }`}
                  aria-pressed={filterState.industry === ALL_INDUSTRIES}
                >
                  All industries
                </button>
                {industryOptions.map((opt) => {
                  const active = filterState.industry === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleFilterChange({ industry: opt.value })}
                      className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                        active
                          ? 'border border-primary/30 bg-primary/15 text-primary'
                          : 'border border-border bg-card text-muted-foreground hover:border-primary/30'
                      }`}
                      aria-pressed={active}
                    >
                      {opt.label} ({opt.count})
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </section>

        {isError ? (
          <section className="section-padding py-8">
            <div className="container-wide mx-auto max-w-xl rounded-2xl border border-destructive/20 bg-destructive/10 px-6 py-12 text-center">
              <p className="font-semibold text-destructive">Unable to load industry insights</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {error instanceof Error ? error.message : String(error)}
              </p>
            </div>
          </section>
        ) : null}

        {!isLoading && postCount > 0 ? (
          <IndustriesInsightsFilters
            state={filterState}
            onChange={handleFilterChange}
            onClear={handleClearFilters}
            industryOptions={industryOptions}
            countryOptions={countryOptions}
            visibleCount={visibleCount}
            totalCount={postCount}
          />
        ) : null}

        {!isLoading && postCount === 0 ? (
          <section className="section-padding py-16">
            <div className="container-wide mx-auto max-w-3xl rounded-2xl border border-border bg-card px-6 py-16 text-center">
              <h2 className="mb-3 font-display text-2xl font-semibold text-foreground">
                Industry insights coming soon
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                We are publishing B2B and B2C fieldwork-led articles tied to our country × industry coverage. Explore
                the industries index or contact us for a scoped proposal.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/market-research-by-industry" className="text-primary font-medium hover:underline">
                  Browse industries index
                </Link>
                <span className="text-muted-foreground" aria-hidden>
                  ·
                </span>
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  Contact us
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <BlogSection
            posts={filteredPosts}
            isLoading={isLoading && !ssrPosts?.length}
            variant="index"
            showHeader={false}
            showViewAllLink={false}
            disableFeatured={filtersActive || postCount < 6}
            postBasePath={INDUSTRIES_INSIGHT_POST_PATH_PREFIX}
          />
        )}

        {!isLoading && filtersActive && visibleCount === 0 && postCount > 0 ? (
          <p className="pb-12 text-center text-muted-foreground">
            No articles match your filters.{' '}
            <button
              type="button"
              onClick={handleClearFilters}
              className="cursor-pointer font-medium text-primary hover:underline"
            >
              Clear filters
            </button>
          </p>
        ) : null}

        <BlogRelatedPathways
          heading="Related industry paths"
          description="Hubs and indexes commonly paired with these B2B and B2C insights."
          links={RELATED_PATHWAYS}
          moreHeading="Explore further"
          moreLinks={[
            { path: '/blog', label: 'Healthcare market research blog' },
            { path: '/market-research', label: 'Market research hub' },
            { path: '/contact', label: 'Contact BioNixus' },
          ]}
        />

        <section className="section-padding border-t border-border/60 bg-cream py-12">
          <FAQSection title="Frequently asked questions" items={[...INSIGHTS_FAQ]} className="bg-transparent py-0" />
        </section>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
