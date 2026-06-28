import { Link } from 'react-router-dom';
import { useCallback, useMemo, useState } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import IndustriesInsightsFilters from '@/components/blog/IndustriesInsightsFilters';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { useIndustriesInsights } from '@/hooks/useSanityBlog';
import { useInitialData } from '@/contexts/InitialDataContext';
import {
  ALL_COUNTRIES,
  buildFilterOptions,
} from '@/lib/blog-index-filters';
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
import { INDUSTRIES_INSIGHTS_INDEX_PATH } from '@/lib/blog-content-silo';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import type { BlogPost } from '@/types/blog';
import { PREMIUM_INDUSTRIES_CSS } from './premiumIndustriesCss';

const HUB_PATH = '/bionixus-industries';
const CANONICAL = `https://www.bionixus.com${INDUSTRIES_INSIGHTS_INDEX_PATH}`;

const PAGE_TITLE = 'Industry Insights | B2B & B2C Market Research | BioNixus';
const PAGE_DESCRIPTION =
  'Fieldwork-led B2B and B2C market research insights from BioNixus — FMCG, technology, retail, and enterprise research across the GCC and MENA, built on the same standards as our pharmaceutical practice.';

const HUB_FAQ = [
  {
    question: 'What industries do these insights cover?',
    answer:
      'Articles span B2B categories (technology, energy, real estate, public sector, education) and B2C categories (FMCG, retail, financial services, telecom, automotive, hospitality, media) across Saudi Arabia, the UAE, Egypt, and the wider GCC.',
  },
  {
    question: 'How is this different from the healthcare blog?',
    answer:
      'The healthcare blog focuses on pharmaceutical, clinical, and market access research. This hub is for non-healthcare industry buyers — brand, commercial, and strategy teams in B2B and B2C markets. Both run to the same sampling and governance standards.',
  },
  {
    question: 'Which markets are covered in industry insights?',
    answer:
      'Most articles focus on GCC and MENA markets where BioNixus runs bilingual Arabic–English fieldwork. Each article links to country × industry service pages for deeper BOFU coverage.',
  },
] as const;

const SEGMENT_PILLS: { value: IndustrySegmentFilter; label: string }[] = [
  { value: ALL_SEGMENTS, label: 'All segments' },
  { value: 'b2b', label: 'B2B' },
  { value: 'b2c', label: 'B2C' },
];

const NEXT_LINKS = [
  {
    to: '/market-research-by-industry',
    label: 'Industries index — GCC & MENA',
    description: 'Every published country-by-industry page in one place.',
  },
  {
    to: '/b2b-industries',
    label: 'B2B industries',
    description: 'Technology, energy, real estate, public sector, and education.',
  },
  {
    to: '/b2c-industries',
    label: 'B2C industries',
    description: 'FMCG, retail, telecom, hospitality, and consumer categories.',
  },
  {
    to: '/blog',
    label: 'Healthcare & pharmaceutical insights',
    description: 'Physician research, market access, and launch strategy articles.',
  },
] as const;

function buildCollectionSchema(postCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    ...(postCount > 0
      ? {
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: postCount,
            itemListElement: {
              '@type': 'ListItem',
              position: 1,
              name: 'B2B and B2C industry market research articles',
            },
          },
        }
      : {}),
  };
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

  const handleFilterChange = useCallback((patch: Partial<IndustriesInsightsFilterState>) => {
    setFilterState((prev) => ({ ...prev, ...patch }));
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilterState(DEFAULT_INDUSTRIES_INSIGHTS_FILTER_STATE);
  }, []);

  const jsonLd = [
    buildCollectionSchema(postCount),
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Industries', href: HUB_PATH },
      { name: 'Industry Insights', href: INDUSTRIES_INSIGHTS_INDEX_PATH },
    ]),
    buildFAQSchema([...HUB_FAQ], { pageUrl: CANONICAL }),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical={INDUSTRIES_INSIGHTS_INDEX_PATH}
        jsonLd={jsonLd}
      />
      <style dangerouslySetInnerHTML={{ __html: PREMIUM_INDUSTRIES_CSS }} />
      <Navbar />
      <main className="bx-ind">
        <section className="bx-hero">
          <div className="bx-hero-bg" aria-hidden="true" />
          <div className="bx-inner bx-hero-inner bx-solo">
            <div className="bx-hero-copy">
              <nav className="bx-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link to={HUB_PATH}>Industries</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Insights</span>
              </nav>
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> B2B &amp; B2C <span className="bx-line" />
              </div>
              <h1 className="bx-h1">Industry Insights</h1>
              <p className="bx-lead">
                Fieldwork-led market research across B2B and B2C markets — built on the same sampling
                discipline and senior-led analysis BioNixus applies to pharmaceutical research.
              </p>
              {!isLoading && postCount > 0 ? (
                <p className="text-sm text-white/70 mt-4">
                  {postCount} published {postCount === 1 ? 'article' : 'articles'} · GCC &amp; MENA focus
                </p>
              ) : null}
              <div className="bx-cta-actions mt-8">
                <a href="#insights" className="bx-btn-gold">
                  Browse articles
                </a>
                <Link to="/contact" className="bx-btn-ghost">
                  Request a proposal
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bx-section cream">
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

        <section id="insights" className="bg-cream-dark/30 border-t border-border">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'Industries', href: HUB_PATH },
              { name: 'Industry Insights', href: INDUSTRIES_INSIGHTS_INDEX_PATH },
            ]}
            className="pt-6"
          />
          {!isLoading && postCount === 0 ? (
            <div className="section-padding pb-16">
              <div className="container-wide max-w-3xl mx-auto text-center py-16 px-6 rounded-2xl border border-border bg-card">
                <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" aria-hidden />
                <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
                  Industry insights coming soon
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are publishing B2B and B2C fieldwork-led articles tied to our country × industry
                  coverage. In the meantime, explore service pages or contact us for a scoped proposal.
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
              postBasePath={INDUSTRIES_INSIGHTS_INDEX_PATH}
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

        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Explore further
              </div>
              <h2 className="bx-h2">
                Related <em>resources</em>
              </h2>
            </div>
            <div className="bx-next-grid">
              {NEXT_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="bx-next-card">
                  <span className="bx-next-label">
                    {link.label} <span className="bx-next-arrow" aria-hidden="true">→</span>
                  </span>
                  <span className="bx-next-desc">{link.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head center">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Questions <span className="bx-line" />
              </div>
              <h2 className="bx-h2">
                Frequently asked <em>questions</em>
              </h2>
            </div>
            <div className="bx-faq-wrap">
              {HUB_FAQ.map((item) => (
                <details className="bx-faq" key={item.question}>
                  <summary>
                    {item.question}
                    <span className="bx-faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="bx-faq-a">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bx-cta-section">
          <div className="bx-cta-card">
            <h2>Plan your next B2B or B2C study</h2>
            <p>
              Tell us the industry, market, and decision deadline — we will respond with a tailored methodology
              outline.
            </p>
            <div className="bx-cta-actions">
              <Link to="/contact" className="bx-btn-gold">
                Book a discovery call →
              </Link>
              <Link to="/market-research-by-industry" className="bx-btn-ghost">
                Browse industries index
              </Link>
            </div>
          </div>
        </section>

        <div className="section-padding pt-0 pb-8">
          <div className="container-wide">
            <Link
              to={HUB_PATH}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden />
              Back to Industries hub
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
