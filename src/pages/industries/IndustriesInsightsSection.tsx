import { Link } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { BookOpen } from 'lucide-react';
import BlogSection from '@/components/BlogSection';
import IndustriesInsightsFilters from '@/components/blog/IndustriesInsightsFilters';
import { useIndustriesInsights } from '@/hooks/useSanityBlog';
import { useInitialData } from '@/contexts/InitialDataContext';
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
  INDUSTRIES_INSIGHTS_SECTION_PATH,
  INDUSTRIES_INSIGHT_POST_PATH_PREFIX,
} from '@/lib/blog-content-silo';
import { industrySlugLabel } from '@/lib/industries-insights-filters';
import type { BlogPost } from '@/types/blog';

const INSIGHTS_FAQ = [
  {
    question: 'What industries do these insights cover?',
    answer:
      'Articles span B2B categories (technology, energy, real estate, public sector, education) and B2C categories (FMCG, retail, financial services, telecom, automotive, hospitality, media) across Saudi Arabia, the UAE, Egypt, and the wider GCC.',
  },
  {
    question: 'How is this different from the healthcare blog?',
    answer:
      'The healthcare blog focuses on pharmaceutical, clinical, and market access research. This section is for non-healthcare industry buyers — brand, commercial, and strategy teams in B2B and B2C markets. Both run to the same sampling and governance standards.',
  },
] as const;

const SEGMENT_PILLS: { value: IndustrySegmentFilter; label: string }[] = [
  { value: ALL_SEGMENTS, label: 'All segments' },
  { value: 'b2b', label: 'B2B' },
  { value: 'b2c', label: 'B2C' },
];

export default function IndustriesInsightsSection() {
  const { data: routeData } = useInitialData();
  const ssrPosts =
    routeData.pageType === 'bionixus-industries' && Array.isArray(routeData.industriesInsights)
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

  useEffect(() => {
    if (window.location.hash === '#insights') {
      document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <section id="insights" className="bx-section bx-insights-portal" aria-labelledby="bx-insights-portal-heading">
        <div className="bx-inner">
          <div className="bx-insights-portal-grid">
            <div className="bx-insights-portal-copy">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> B2B &amp; B2C insights
              </div>
              <h2 id="bx-insights-portal-heading" className="bx-h2">
                Industry insights <em>portal</em>
              </h2>
              <p className="bx-lead">
                Fieldwork-led articles for non-healthcare buyers — filter by industry vertical and country.
                Healthcare and pharmaceutical research stays on our{' '}
                <Link to="/blog" className="text-primary font-medium hover:underline">
                  dedicated healthcare blog
                </Link>
                .
              </p>
              {!isLoading && postCount > 0 ? (
                <p className="text-sm text-muted-foreground mt-4">
                  {postCount} published {postCount === 1 ? 'article' : 'articles'} · GCC &amp; MENA focus
                </p>
              ) : null}
              <div className="bx-cta-actions mt-8">
                <a href="#insights-filters" className="bx-btn-gold">
                  Browse articles ↓
                </a>
                <Link to="/contact" className="bx-btn-ghost dark">
                  Request a proposal
                </Link>
              </div>
            </div>
            <div className="bx-insights-portal-panel">
              <div className="bx-insights-portal-panel-head">
                <h3>Latest industry articles</h3>
                {!isLoading && postCount > 0 ? (
                  <span className="bx-insights-count">{postCount} published</span>
                ) : null}
              </div>
              {isLoading ? (
                <ul className="bx-insights-teaser-list" aria-busy="true">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="bx-insights-teaser-skeleton" />
                  ))}
                </ul>
              ) : allPosts.length > 0 ? (
                <ul className="bx-insights-teaser-list">
                  {allPosts.slice(0, 3).map((post) => (
                    <li key={post.id}>
                      <Link to={`${INDUSTRIES_INSIGHT_POST_PATH_PREFIX}/${post.slug}`} className="bx-insights-teaser-card">
                        <span className="bx-insights-teaser-meta">
                          {post.industrySlug ? industrySlugLabel(post.industrySlug) : post.category}
                          {post.country ? ` · ${post.country}` : ''}
                        </span>
                        <span className="bx-insights-teaser-title">{post.title}</span>
                        <span className="bx-insights-teaser-arrow" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="bx-insights-empty">
                  Articles publishing soon — explore country × industry service pages in the meantime.
                </p>
              )}
              <a href="#insights-filters" className="bx-insights-portal-foot">
                Browse all industry insights ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="insights-filters" className="bx-section cream">
        <div className="bx-inner max-w-5xl">
          <div className="bx-section-head">
            <div className="bx-eyebrow gold">
              <span className="bx-line" /> Refine results
            </div>
            <h2 className="bx-h2">
              Filter by <em>segment</em>, industry, and market
            </h2>
            <p className="bx-lead">
              Browse B2B and B2C fieldwork articles by vertical and country — separate from our{' '}
              <Link to="/blog" className="text-primary font-medium hover:underline">
                healthcare insights blog
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mb-2" role="group" aria-label="Filter by industry segment">
            {SEGMENT_PILLS.map(({ value, label }) => {
              const active = filterState.segment === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleFilterChange({ segment: value })}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors cursor-pointer ${
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
            <div className="flex flex-wrap gap-2 mt-4" role="group" aria-label="Quick filter by industry">
              <button
                type="button"
                onClick={() => handleFilterChange({ industry: ALL_INDUSTRIES })}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  filterState.industry === ALL_INDUSTRIES
                    ? 'bg-primary/15 text-primary border border-primary/30'
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
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      active
                        ? 'bg-primary/15 text-primary border border-primary/30'
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
          <div className="container-wide max-w-xl mx-auto text-center py-12 px-6 rounded-2xl bg-destructive/10 border border-destructive/20">
            <p className="font-semibold text-destructive">Unable to load industry insights</p>
            <p className="text-sm text-muted-foreground mt-2">
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

      <section className="bg-cream-dark/30 border-t border-border">
        {!isLoading && postCount === 0 ? (
          <div className="section-padding pb-16">
            <div className="container-wide max-w-3xl mx-auto text-center py-16 px-6 rounded-2xl border border-border bg-card">
              <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" aria-hidden />
              <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                Industry insights coming soon
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are publishing B2B and B2C fieldwork-led articles tied to our country × industry coverage. In the
                meantime, explore service pages or contact us for a scoped proposal.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/market-research-by-industry" className="bx-btn-gold inline-flex">
                  Browse industries index
                </Link>
                <Link to="/contact" className="bx-btn-ghost inline-flex">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <BlogSection
            posts={filteredPosts}
            isLoading={isLoading && !ssrPosts?.length}
            variant="index"
            showHeader={false}
            disableFeatured={postCount < 6}
            postBasePath={INDUSTRIES_INSIGHT_POST_PATH_PREFIX}
          />
        )}
        {!isLoading && filtersActive && visibleCount === 0 && postCount > 0 ? (
          <p className="text-center text-muted-foreground pb-12">
            No articles match your filters.{' '}
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-primary font-medium hover:underline cursor-pointer"
            >
              Clear filters
            </button>
          </p>
        ) : null}
      </section>

      <section className="bx-section cream" aria-labelledby="bx-insights-faq-heading">
        <div className="bx-inner">
          <div className="bx-section-head center">
            <div className="bx-eyebrow gold">
              <span className="bx-line" /> Industry insights <span className="bx-line" />
            </div>
            <h2 id="bx-insights-faq-heading" className="bx-h2">
              About this <em>section</em>
            </h2>
          </div>
          <div className="bx-faq-wrap">
            {INSIGHTS_FAQ.map((item) => (
              <details className="bx-faq" key={item.question}>
                <summary>
                  {item.question}
                  <span className="bx-faq-icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="bx-faq-a">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Permalink:{' '}
            <Link to={INDUSTRIES_INSIGHTS_SECTION_PATH} className="text-primary font-medium hover:underline">
              {INDUSTRIES_INSIGHTS_SECTION_PATH}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
