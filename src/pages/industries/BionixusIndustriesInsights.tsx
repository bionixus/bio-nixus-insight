import { Link } from 'react-router-dom';
import { useCallback, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import IndustriesInsightsFilters from '@/components/blog/IndustriesInsightsFilters';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { CTASection } from '@/components/shared/CTASection';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEOHead } from '@/components/seo/SEOHead';
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
  INDUSTRIES_HUB_PATH,
  INDUSTRIES_INSIGHT_EDITORIAL_LINKS,
  INDUSTRIES_INSIGHT_POST_PATH_PREFIX,
} from '@/lib/blog-content-silo';
import {
  INDUSTRIES_INSIGHTS_CANONICAL,
  INDUSTRIES_INSIGHTS_DESCRIPTION,
  INDUSTRIES_INSIGHTS_FAQ,
  INDUSTRIES_INSIGHTS_PATH,
  INDUSTRIES_INSIGHTS_TITLE,
  LATAM_COVERAGE_SENTENCE,
  NON_PHARMA_INSIGHTS_CATALOG,
  type CatalogCountryGroup,
  type CatalogLink,
} from '@/data/nonPharmaInsightsCatalog';
import { buildIndustriesInsightsSchemas } from '@/lib/seo/industriesInsightsSchema';
import type { BlogPost } from '@/types/blog';
import { PremiumIndustriesStyles } from './PremiumIndustriesStyles';

const SEGMENT_PILLS: { value: IndustrySegmentFilter; label: string }[] = [
  { value: ALL_SEGMENTS, label: 'All segments' },
  { value: 'b2b', label: 'B2B' },
  { value: 'b2c', label: 'B2C' },
];

function LinkList({ links }: { links: CatalogLink[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="bx-link-columns">
      {links.map((link) => (
        <li key={link.href}>
          <Link to={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}

function CountryGroups({ groups }: { groups: CatalogCountryGroup[] }) {
  return (
    <>
      {groups.map((group) => (
        <div key={group.label}>
          <h4>{group.label}</h4>
          <LinkList links={group.links} />
        </div>
      ))}
    </>
  );
}

export default function BionixusIndustriesInsights() {
  const { data: routeData } = useInitialData();
  const ssrPosts =
    routeData.pageType === 'industries-insights-index' && Array.isArray(routeData.industriesInsights)
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

  const articles = useMemo(
    () =>
      postCount > 0
        ? allPosts.map((post) => ({ title: post.title, slug: post.slug }))
        : INDUSTRIES_INSIGHT_EDITORIAL_LINKS.map((item) => ({
            title: item.label,
            slug: item.to.split('/').pop() ?? item.to,
          })),
    [allPosts, postCount],
  );

  const schemas = useMemo(() => buildIndustriesInsightsSchemas(articles), [articles]);
  const pageCount = NON_PHARMA_INSIGHTS_CATALOG.links.length;

  const handleFilterChange = useCallback((patch: Partial<IndustriesInsightsFilterState>) => {
    setFilterState((prev) => ({ ...prev, ...patch }));
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilterState(DEFAULT_INDUSTRIES_INSIGHTS_FILTER_STATE);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={INDUSTRIES_INSIGHTS_TITLE}
        description={INDUSTRIES_INSIGHTS_DESCRIPTION}
        canonical={INDUSTRIES_INSIGHTS_CANONICAL}
        ogImageAlt="BioNixus — global market research across industries"
        exactMeta
        jsonLd={schemas}
      />
      <PremiumIndustriesStyles />
      <Navbar />
      <main className="bx-ind">
        <section className="bx-hero" data-hero-lcp>
          <div className="bx-hero-bg" aria-hidden="true" />
          <div className="bx-inner bx-hero-inner bx-solo">
            <div className="bx-hero-copy">
              <BreadcrumbNav
                tone="on-dark"
                items={[
                  { name: 'Home', href: '/' },
                  { name: 'Industries', href: INDUSTRIES_HUB_PATH },
                  { name: 'Industry Insights', href: INDUSTRIES_INSIGHTS_PATH },
                ]}
              />
              <div className="bx-eyebrow">
                <span className="bx-line" /> Industry insights
              </div>
              <h1>
                Global market research <em>across industries</em>
              </h1>
              <p className="bx-hero-sub">
                BioNixus is a global market research firm for FMCG, retail, real estate, financial services,
                automotive, technology, telecom, energy, hospitality, education and wider B2B and B2C markets.
              </p>
              <div className="bx-hero-actions">
                <Link to="/contact" className="bx-btn-gold">
                  Request a proposal
                </Link>
                <a href="#industries" className="bx-btn-ghost">
                  Browse industries
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bx-stats" aria-label="BioNixus at a glance">
          <div className="bx-stats-inner">
            <div className="bx-stat">
              <div className="bx-stat-num">2012</div>
              <div className="bx-stat-label">Founded</div>
            </div>
            <div className="bx-stat">
              <div className="bx-stat-num">118</div>
              <div className="bx-stat-label">Clients</div>
            </div>
            <div className="bx-stat">
              <div className="bx-stat-num">48</div>
              <div className="bx-stat-label">Countries</div>
            </div>
            <div className="bx-stat">
              <div className="bx-stat-num">127</div>
              <div className="bx-stat-label">Studies so far in 2026</div>
            </div>
          </div>
        </section>

        <section className="bx-section" aria-labelledby="insights-intro-heading">
          <div className="bx-inner">
            <div className="bx-eyebrow gold">
              <span className="bx-line" /> Global coverage
            </div>
            <h2 id="insights-intro-heading" className="bx-h2">
              Research for commercial decisions <em>worldwide</em>
            </h2>
            <div className="bx-prose">
              <p>
                BioNixus was founded in 2012 and has served 118 clients across 48 countries, with 127 studies
                so far in 2026. Offices are in London (EC1V 2NX), Sheikh Zayed, Giza, Egypt (biggest MEA
                office) and Dubai (Thuraya Tower 1), with the US headquarters in Sheridan, Wyoming.{' '}
                {LATAM_COVERAGE_SENTENCE}
              </p>
              <p>
                The index below links {pageCount} published non-pharma industry, country and city pages,
                plus the industry articles. New articles join this list from the editorial desk without a
                manual edit to the page. Start from the{' '}
                <Link to={INDUSTRIES_HUB_PATH}>industries hub</Link> or the{' '}
                <Link to="/blog">healthcare market research blog</Link> when the brief is pharmaceutical.
              </p>
              <p>
                <Link to="/contact">Request a proposal</Link>
                {' · '}
                <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>
              </p>
            </div>
          </div>
        </section>

        <section className="bx-section cream" aria-labelledby="insights-pathways-heading">
          <div className="bx-inner">
            <h2 id="insights-pathways-heading" className="bx-h2">
              Research indexes
            </h2>
            <LinkList links={NON_PHARMA_INSIGHTS_CATALOG.pathways} />
          </div>
        </section>

        <section className="bx-section" id="industries" aria-labelledby="insights-industries-heading">
          <div className="bx-inner">
            <div className="bx-eyebrow gold">
              <span className="bx-line" /> By industry
            </div>
            <h2 id="insights-industries-heading" className="bx-h2">
              Industries <em>we publish</em>
            </h2>
            {NON_PHARMA_INSIGHTS_CATALOG.industries.map((industry) => (
              <article key={industry.slug} className="bx-directory-block" id={`industry-${industry.slug}`}>
                <h3>{industry.name}</h3>
                <LinkList links={industry.introLinks} />
                <CountryGroups groups={industry.countries} />
              </article>
            ))}
          </div>
        </section>

        <section className="bx-section cream" id="regions" aria-labelledby="insights-regions-heading">
          <div className="bx-inner">
            <div className="bx-eyebrow gold">
              <span className="bx-line" /> By region
            </div>
            <h2 id="insights-regions-heading" className="bx-h2">
              Regions <em>with published pages</em>
            </h2>
            {NON_PHARMA_INSIGHTS_CATALOG.regions.map((region) => (
              <article key={region.id} className="bx-region-card" id={`region-${region.id}`}>
                <h3>{region.title}</h3>
                <p>{region.description}</p>
                <CountryGroups groups={region.countries} />
              </article>
            ))}
          </div>
        </section>

        <section className="bx-section" id="articles" aria-labelledby="insights-articles-heading">
          <div className="bx-inner">
            <div className="bx-eyebrow gold">
              <span className="bx-line" /> Articles
            </div>
            <h2 id="insights-articles-heading" className="bx-h2">
              Industry insight <em>articles</em>
            </h2>
            <p className="bx-lead">
              Every non-pharma insight with the industries silo is listed here. A newly published article
              appears on this page on the next render.
            </p>
          </div>

          {postCount > 0 ? (
            <div className="border-b border-border/40 bg-background py-8" aria-label="Filter articles">
              <div className="bx-inner">
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
              </div>
            </div>
          ) : null}

          {isError ? (
            <div className="bx-inner py-8">
              <p className="font-semibold text-destructive">Unable to load industry insights</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {error instanceof Error ? error.message : String(error)}
              </p>
            </div>
          ) : null}

          {postCount > 0 ? (
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

          {postCount === 0 ? (
            <div className="bx-inner">
              <ul className="bx-link-columns">
                {INDUSTRIES_INSIGHT_EDITORIAL_LINKS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
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
        </section>

        <section className="bx-section cream">
          <FAQSection title="Frequently asked questions" items={[...INDUSTRIES_INSIGHTS_FAQ]} className="bg-transparent py-0" />
        </section>

        <CTASection variant="research-proposal" premium />
      </main>
      <Footer />
    </div>
  );
}
