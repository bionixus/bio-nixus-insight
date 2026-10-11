import { Link } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  Building2,
  Car,
  Cpu,
  Factory,
  GraduationCap,
  Hotel,
  Landmark,
  Radio,
  ShoppingBasket,
  Sparkles,
  Store,
  Truck,
  Utensils,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import IndustriesInsightsFilters from '@/components/blog/IndustriesInsightsFilters';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { SEOHead } from '@/components/seo/SEOHead';
import {
  DirectoryGoldLink,
  DirectoryHero,
  DirectoryJumpNav,
  DirectoryLinkTile,
  DirectorySection,
} from '@/components/seo/DirectoryPremium';
import { QualificationForm, QUALIFICATION_FORM_SCHEDULING_URL } from '@/components/conversion/QualificationForm';
import { useIndustriesInsights } from '@/hooks/useSanityBlog';
import { useInitialData } from '@/contexts/InitialDataContext';
import { buildFilterOptions } from '@/lib/blog-index-filters';
import {
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
  type IndustrySection,
} from '@/data/nonPharmaInsightsCatalog';
import { buildIndustriesInsightsSchemas } from '@/lib/seo/industriesInsightsSchema';
import { trackMeetingLinkClicked } from '@/lib/analytics';
import { BIONIXUS_PHONE_LINES } from '@/components/report-conversion/constants';
import type { BlogPost } from '@/types/blog';

const SEGMENT_PILLS: { value: IndustrySegmentFilter; label: string }[] = [
  { value: ALL_SEGMENTS, label: 'All segments' },
  { value: 'b2b', label: 'B2B' },
  { value: 'b2c', label: 'B2C' },
];

const JUMP_ITEMS = [
  { href: '#overview', label: 'Overview' },
  { href: '#indexes', label: 'Indexes' },
  { href: '#industries', label: 'Industries' },
  { href: '#regions', label: 'Regions' },
  { href: '#articles', label: 'Articles' },
  { href: '#faq', label: 'FAQ' },
  { href: '#request-proposal', label: 'Request a proposal' },
];

const HERO_STATS = [
  { value: '2012', label: 'Since 2012' },
  { value: '118', label: 'Clients' },
  { value: '48', label: 'Countries' },
  { value: '127', label: 'Studies YTD 2026' },
];

const OFFICES = [
  { place: 'Sheridan, Wyoming', role: 'US headquarters' },
  { place: 'London', role: 'Europe' },
  { place: 'Cairo', role: 'Sheikh Zayed, the biggest MEA office' },
  { place: 'Dubai', role: 'UAE' },
];

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  fmcg: ShoppingBasket,
  retail: Store,
  'financial-services': Landmark,
  telecom: Radio,
  technology: Cpu,
  energy: Zap,
  'real-estate': Building2,
  automotive: Car,
  hospitality: Hotel,
  'public-sector': Landmark,
  education: GraduationCap,
  media: Radio,
  'food-beverage': Utensils,
  cosmetics: Sparkles,
  construction: Building2,
  logistics: Truck,
  manufacturing: Factory,
};

const KIND_LABELS: Record<string, string> = {
  'industry-hub': 'Industry hub',
  'country-study': 'Country study',
  'firm-ranking': 'Firm ranking',
  directory: 'Company directory',
  'entity-hub': 'Company index',
  'country-list': 'Country ranking',
  'city-list': 'City ranking',
  pathway: 'Research index',
};

function kindLabel(kind: string): string {
  return KIND_LABELS[kind] ?? 'Published page';
}

function linkMatches(link: CatalogLink, query: string): boolean {
  if (!query) return true;
  const haystack = `${link.label} ${link.countryLabel} ${link.href} ${kindLabel(link.kind)}`.toLowerCase();
  return haystack.includes(query);
}

function PageLinkGrid({ links, query }: { links: CatalogLink[]; query: string }) {
  if (links.length === 0) return null;
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <li key={link.href} className="min-w-0" hidden={!linkMatches(link, query)}>
          <DirectoryLinkTile to={link.href} title={link.label} sub={kindLabel(link.kind)} />
        </li>
      ))}
    </ul>
  );
}

function CountryAccordions({
  groups,
  query,
  idPrefix,
  openFirst = false,
}: {
  groups: CatalogCountryGroup[];
  query: string;
  idPrefix: string;
  openFirst?: boolean;
}) {
  if (groups.length === 0) return null;
  return (
    <div className="mt-6 space-y-3">
      {groups.map((group, index) => {
        const anyMatch = group.links.some((link) => linkMatches(link, query));
        const expanded = (query && anyMatch) || (openFirst && index === 0 && query === '');
        return (
          <details
            key={`${idPrefix}-${group.label}`}
            className="group scroll-mt-28"
            hidden={query !== '' && !anyMatch}
            {...(expanded ? { open: true } : {})}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2">
              <span className="min-w-0">
                <h4 className="m-0 font-display text-lg font-semibold text-foreground">{group.label}</h4>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {group.links.length} {group.links.length === 1 ? 'page' : 'pages'}
                </span>
              </span>
              <span className="shrink-0 text-[#C9A84C] transition-transform group-open:rotate-180" aria-hidden>
                ▾
              </span>
            </summary>
            <div className="px-4 pb-4">
              <PageLinkGrid links={group.links} query={query} />
            </div>
          </details>
        );
      })}
    </div>
  );
}

function IndustryIcon({ slug }: { slug: string }) {
  const Icon = INDUSTRY_ICONS[slug] ?? Building2;
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#EDE9E3] bg-[#F4F2ED] text-[#A8872E]">
      <Icon className="h-5 w-5" aria-hidden />
    </div>
  );
}

function AnchorRow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 max-w-full overflow-x-auto overscroll-x-contain">
      <ul className="flex w-max gap-1 pb-1">{children}</ul>
    </div>
  );
}

function industryHasMatch(industry: IndustrySection, query: string): boolean {
  if (!query) return true;
  return (
    industry.introLinks.some((link) => linkMatches(link, query)) ||
    industry.countries.some((group) => group.links.some((link) => linkMatches(link, query)))
  );
}

function openDetailsFromHash() {
  if (typeof window === 'undefined') return;
  const id = window.location.hash.replace(/^#/, '');
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  const details: HTMLDetailsElement[] = [];
  if (target instanceof HTMLDetailsElement) details.push(target);
  let parent = target.parentElement;
  while (parent) {
    if (parent instanceof HTMLDetailsElement) details.push(parent);
    parent = parent.parentElement;
  }
  for (const node of details) node.open = true;
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
  const [directoryQuery, setDirectoryQuery] = useState('');
  const query = directoryQuery.trim().toLowerCase();

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
  const directoryMatchCount = useMemo(() => {
    if (!query) return pageCount;
    return NON_PHARMA_INSIGHTS_CATALOG.links.filter((link) => linkMatches(link, query)).length;
  }, [pageCount, query]);

  const handleFilterChange = useCallback((patch: Partial<IndustriesInsightsFilterState>) => {
    setFilterState((prev) => ({ ...prev, ...patch }));
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilterState(DEFAULT_INDUSTRIES_INSIGHTS_FILTER_STATE);
  }, []);

  useEffect(() => {
    openDetailsFromHash();
    window.addEventListener('hashchange', openDetailsFromHash);
    return () => window.removeEventListener('hashchange', openDetailsFromHash);
  }, []);

  return (
    <div className="directory-page min-h-screen">
      <SEOHead
        title={INDUSTRIES_INSIGHTS_TITLE}
        description={INDUSTRIES_INSIGHTS_DESCRIPTION}
        canonical={INDUSTRIES_INSIGHTS_CANONICAL}
        ogImageAlt="BioNixus — global market research across industries"
        exactMeta
        jsonLd={schemas}
      />
      <Navbar />
      <main>
        <div data-hero-lcp>
          <DirectoryHero
            breadcrumbs={[
              { name: 'Home', href: '/' },
              { name: 'Industries', href: INDUSTRIES_HUB_PATH },
              { name: 'Industry Insights', href: INDUSTRIES_INSIGHTS_PATH },
            ]}
            kicker="Industry insights"
            h1="Global market research across industries"
            lead="Primary market research for commercial teams across FMCG, retail, finance, technology, energy and the wider B2B and B2C economy."
            stats={HERO_STATS}
            actions={
              <>
                <DirectoryGoldLink to="#request-proposal">Request a proposal</DirectoryGoldLink>
                {QUALIFICATION_FORM_SCHEDULING_URL ? (
                  <a
                    href={QUALIFICATION_FORM_SCHEDULING_URL}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06101F]"
                    onClick={() =>
                      trackMeetingLinkClicked({
                        formId: 'industries_insights_hub',
                        sourceContext: 'Industry insights hub',
                        targetUrl: QUALIFICATION_FORM_SCHEDULING_URL,
                      })
                    }
                  >
                    Book a call
                  </a>
                ) : null}
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-[#E8C56A] underline decoration-[#E8C56A]/40 underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06101F] rounded"
                >
                  Contact page
                </Link>
              </>
            }
          />
        </div>

        <DirectoryJumpNav items={JUMP_ITEMS} />

        <section className="border-b border-[#EDE9E3] bg-[#FFFEFB]" aria-label="Offices and physician network">
          <div className="container-wide mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#A8872E]">
              Offices and network
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {OFFICES.map((office) => (
                <li key={office.place} className="rounded-2xl border border-[#EDE9E3] bg-[#F4F2ED] px-4 py-4">
                  <p className="font-display text-lg font-semibold text-foreground">{office.place}</p>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{office.role}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A physician network of about 3,200. {LATAM_COVERAGE_SENTENCE}
            </p>
          </div>
        </section>

        <DirectorySection
          id="overview"
          eyebrow="Global coverage"
          title="Research for commercial decisions worldwide"
          surface="ivory"
        >
          <div className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              This index links {pageCount} published non-pharma industry, country and city pages, plus the industry
              articles. Start from the <Link to={INDUSTRIES_HUB_PATH} className="font-semibold text-foreground underline decoration-[#C9A84C]/55 underline-offset-4 hover:text-[#A8872E]">industries hub</Link> when
              you need segment entry points, or the{' '}
              <Link to="/blog" className="font-semibold text-foreground underline decoration-[#C9A84C]/55 underline-offset-4 hover:text-[#A8872E]">
                healthcare market research blog
              </Link>{' '}
              when the brief is pharmaceutical.
            </p>
            <p>
              BioNixus was founded in 2012 and has served 118 clients across 48 countries, with 127 studies so far in
              2026. Fieldwork is designed around the commercial decision, with the same sampling and governance
              standards used for regulated work.
            </p>
            <p>
              <Link to="/contact" className="font-semibold text-foreground underline decoration-[#C9A84C]/55 underline-offset-4 hover:text-[#A8872E]">
                Request a proposal
              </Link>
              {' · '}
              <a href="mailto:admin@bionixus.com" className="font-semibold text-foreground underline decoration-[#C9A84C]/55 underline-offset-4 hover:text-[#A8872E]">
                admin@bionixus.com
              </a>
            </p>
          </div>
        </DirectorySection>

        <DirectorySection id="indexes" eyebrow="Start here" title="Research indexes" surface="cream">
          <PageLinkGrid links={NON_PHARMA_INSIGHTS_CATALOG.pathways} query={query} />
        </DirectorySection>

        <DirectorySection
          id="industries"
          eyebrow="By industry"
          title="Industries we publish"
          surface="ivory"
          body={
            <div className="max-w-3xl space-y-4">
              <p>
                Each industry opens by country. Page titles stay in the page HTML, grouped so the list can be scanned
                a country at a time.
              </p>
              <div className="max-w-xl">
                <label htmlFor="industries-directory-search" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Search pages
                </label>
                <input
                  id="industries-directory-search"
                  type="search"
                  value={directoryQuery}
                  onChange={(event) => setDirectoryQuery(event.target.value)}
                  placeholder="Industry, country, or page title"
                  autoComplete="off"
                  className="h-11 w-full rounded-xl border border-[#EDE9E3] bg-[#FFFEFB] px-4 text-sm text-foreground focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30"
                />
              </div>
              <p className="text-sm" aria-live="polite">
                {query
                  ? `${directoryMatchCount} of ${pageCount} pages match`
                  : `${pageCount} published pages`}
              </p>
            </div>
          }
        >
          <AnchorRow>
            {NON_PHARMA_INSIGHTS_CATALOG.industries.map((industry) => (
              <li key={industry.slug}>
                <a href={`#industry-${industry.slug}`} className="directory-jump-link">
                  {industry.name}
                </a>
              </li>
            ))}
          </AnchorRow>
          <div className="space-y-3">
            {NON_PHARMA_INSIGHTS_CATALOG.industries.map((industry) => {
              const total =
                industry.introLinks.length +
                industry.countries.reduce((sum, group) => sum + group.links.length, 0);
              const isFirst = industry.slug === NON_PHARMA_INSIGHTS_CATALOG.industries[0]?.slug;
              const expanded = (query !== '' && industryHasMatch(industry, query)) || (isFirst && query === '');
              return (
                <details
                  key={industry.slug}
                  id={`industry-${industry.slug}`}
                  className="group scroll-mt-28"
                  hidden={query !== '' && !industryHasMatch(industry, query)}
                  {...(expanded ? { open: true } : {})}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2">
                    <span className="flex min-w-0 items-center gap-4">
                      <IndustryIcon slug={industry.slug} />
                      <span className="min-w-0">
                        <h3 className="m-0 font-display text-2xl font-semibold text-foreground">{industry.name}</h3>
                        <span className="mt-0.5 block text-sm text-muted-foreground">
                          {total} published {total === 1 ? 'page' : 'pages'}
                        </span>
                      </span>
                    </span>
                    <span className="shrink-0 text-[#C9A84C] transition-transform group-open:rotate-180" aria-hidden>
                      ▾
                    </span>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5">
                    <PageLinkGrid links={industry.introLinks} query={query} />
                    <CountryAccordions groups={industry.countries} query={query} idPrefix={industry.slug} openFirst={isFirst} />
                  </div>
                </details>
              );
            })}
          </div>
        </DirectorySection>

        <DirectorySection
          id="regions"
          eyebrow="By region"
          title="Regions with published pages"
          surface="cream"
        >
          <AnchorRow>
            {NON_PHARMA_INSIGHTS_CATALOG.regions.map((region) => (
              <li key={region.id}>
                <a href={`#region-${region.id}`} className="directory-jump-link">
                  {region.title}
                </a>
              </li>
            ))}
          </AnchorRow>
          <div className="space-y-8">
            {NON_PHARMA_INSIGHTS_CATALOG.regions.map((region) => {
              const anyMatch =
                !query ||
                region.countries.some((group) => group.links.some((link) => linkMatches(link, query)));
              return (
                <article
                  key={region.id}
                  id={`region-${region.id}`}
                  className="scroll-mt-28 rounded-2xl border border-[#EDE9E3] bg-[#FFFEFB] p-5 sm:p-7"
                  hidden={query !== '' && !anyMatch}
                >
                  <h3 className="font-display text-2xl font-semibold text-foreground">{region.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{region.description}</p>
                  <CountryAccordions groups={region.countries} query={query} idPrefix={`region-${region.id}`} />
                </article>
              );
            })}
          </div>
        </DirectorySection>

        <section id="articles" className="scroll-mt-28 border-t border-[#EDE9E3] bg-[#FFFEFB] pt-16 md:pt-20">
          <div className="container-wide mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#A8872E]">Articles</p>
            <h2 className="mb-3 max-w-3xl font-display text-2xl font-semibold text-foreground md:text-3xl">
              Industry insight articles
            </h2>
            <p className="mb-2 max-w-3xl leading-relaxed text-muted-foreground">
              Every non-pharma insight in the industries silo is listed here. A newly published article appears on
              this page on the next render.
            </p>
          </div>

          {postCount > 0 ? (
            <div className="container-wide mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by industry segment">
                {SEGMENT_PILLS.map(({ value, label }) => {
                  const active = filterState.segment === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleFilterChange({ segment: value })}
                      className={`min-h-11 cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 ${
                        active
                          ? 'bg-[#06101F] text-[#FFFEFB]'
                          : 'border border-[#EDE9E3] bg-[#FFFEFB] text-foreground hover:border-[#C9A84C]'
                      }`}
                      aria-pressed={active}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          {isError ? (
            <div className="container-wide mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
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
            <div className="container-wide mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {INDUSTRIES_INSIGHT_EDITORIAL_LINKS.map((item) => (
                  <li key={item.to} className="min-w-0">
                    <DirectoryLinkTile to={item.to} title={item.label} sub="Industry insight article" />
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
            <p className="px-4 pb-12 text-center text-muted-foreground">
              No articles match your filters.{' '}
              <button
                type="button"
                onClick={handleClearFilters}
                className="cursor-pointer font-medium text-[#A8872E] underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
              >
                Clear filters
              </button>
            </p>
          ) : null}
        </section>

        <section className="border-t border-[#EDE9E3] bg-[#F4F2ED]">
          <FAQSection
            premium
            title="Frequently asked questions"
            items={[...INDUSTRIES_INSIGHTS_FAQ]}
            className="scroll-mt-28 bg-transparent"
            sectionId="faq"
          />
        </section>

        <section id="request-proposal" className="scroll-mt-28 border-t border-[#EDE9E3] bg-[#FFFEFB] py-16 md:py-20">
          <div className="container-wide mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:px-8">
            <div className="min-w-0 rounded-2xl border border-[#EDE9E3] bg-[#FFFEFB] p-5 shadow-[0_16px_50px_rgba(6,16,31,0.05)] sm:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#A8872E]">Proposal</p>
              <h2 className="mb-3 font-display text-2xl font-semibold text-foreground md:text-3xl">
                Request a proposal
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Share the industry, country and the decision the study needs to support. A research lead replies
                with a methodology outline.
              </p>
              <QualificationForm
                formId="industries_insights_hub"
                sourceContext="Industry insights hub"
                defaultNeed="Primary market research"
              />
            </div>
            <aside className="min-w-0 rounded-2xl border border-[#EDE9E3] bg-[#F4F2ED] p-5 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">Book a call</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Prefer a time on the calendar? Use the booking page, or call an office directly.
              </p>
              {QUALIFICATION_FORM_SCHEDULING_URL ? (
                <a
                  href={QUALIFICATION_FORM_SCHEDULING_URL}
                  className="premium-gold-btn mt-5 w-full sm:w-auto"
                  onClick={() =>
                    trackMeetingLinkClicked({
                      formId: 'industries_insights_hub',
                      sourceContext: 'Industry insights hub',
                      targetUrl: QUALIFICATION_FORM_SCHEDULING_URL,
                    })
                  }
                >
                  Book a call
                </a>
              ) : null}
              <ul className="mt-6 space-y-2 text-sm">
                {BIONIXUS_PHONE_LINES.map((line) => (
                  <li key={line.tel}>
                    <a className="font-medium text-foreground underline decoration-[#C9A84C]/50 underline-offset-4 hover:text-[#A8872E]" href={`tel:${line.tel}`}>
                      {line.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a className="font-medium text-foreground underline decoration-[#C9A84C]/50 underline-offset-4 hover:text-[#A8872E]" href="mailto:admin@bionixus.com">
                    admin@bionixus.com
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
