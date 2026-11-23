import type { BlogPost } from '@/types/blog';
import {
  ALL_COUNTRIES,
  ALL_TOPICS,
  canonicalBlogCountryParam,
  hasActiveBlogFilters,
  searchParamsForBlogIndexFilters,
  blogIndexFiltersFromSearchParams,
  type BlogFilterOption,
  type BlogIndexFilterState,
} from '@/lib/blog-index-filters';
import { postBlogFilterKey } from '@/lib/blog-region-filters';
import {
  MATRIX_INDUSTRIES,
  type MatrixIndustrySlug,
} from '@/data/industryMarketResearchMatrix';

export const ALL_SEGMENTS = '__all__';
export const ALL_INDUSTRIES = '__all__';

export type IndustrySegmentFilter = '__all__' | 'b2b' | 'b2c';

export interface IndustriesInsightsFilterState extends BlogIndexFilterState {
  segment: IndustrySegmentFilter;
  industry: string;
}

function titleCaseSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function industrySlugLabel(slug: string): string {
  const config = MATRIX_INDUSTRIES[slug as MatrixIndustrySlug];
  return config?.displayNameShort ?? config?.displayName ?? titleCaseSlug(slug);
}

export function buildIndustrySlugFilterOptions(posts: BlogPost[]): BlogFilterOption[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    const slug = post.industrySlug?.trim();
    if (!slug) continue;
    counts.set(slug, (counts.get(slug) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort(([a], [b]) => industrySlugLabel(a).localeCompare(industrySlugLabel(b)))
    .map(([value, count]) => ({
      value,
      label: industrySlugLabel(value),
      count,
    }));
}

export function filterIndustriesInsightsPosts(
  posts: BlogPost[],
  state: IndustriesInsightsFilterState,
): BlogPost[] {
  const { segment, industry, search, country } = state;
  let result = posts;

  if (segment !== ALL_SEGMENTS) {
    result = result.filter((post) => post.industrySegment === segment);
  }
  if (industry !== ALL_INDUSTRIES) {
    result = result.filter((post) => post.industrySlug?.trim() === industry);
  }
  if (country !== ALL_COUNTRIES) {
    const selectedCountry = canonicalBlogCountryParam(country);
    result = result.filter((post) => postBlogFilterKey(post) === selectedCountry);
  }

  const q = search.trim().toLowerCase();
  if (!q) return result;

  return result.filter((post) => {
    const haystack = [
      post.title,
      post.excerpt,
      post.category,
      post.country,
      post.region,
      postBlogFilterKey(post),
      post.slug,
      post.industrySlug,
      post.industrySlug ? industrySlugLabel(post.industrySlug) : '',
      ...(post.tags ?? []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function hasActiveIndustriesInsightsFilters(state: IndustriesInsightsFilterState): boolean {
  return (
    state.segment !== ALL_SEGMENTS ||
    state.industry !== ALL_INDUSTRIES ||
    hasActiveBlogFilters(state)
  );
}

export const DEFAULT_INDUSTRIES_INSIGHTS_FILTER_STATE: IndustriesInsightsFilterState = {
  search: '',
  country: ALL_COUNTRIES,
  topic: ALL_TOPICS,
  segment: ALL_SEGMENTS,
  industry: ALL_INDUSTRIES,
};

export function industriesFiltersFromSearchParams(params: URLSearchParams): IndustriesInsightsFilterState {
  const base = blogIndexFiltersFromSearchParams(params);
  const segmentRaw = params.get('segment');
  const segment: IndustrySegmentFilter =
    segmentRaw === 'b2b' || segmentRaw === 'b2c' ? segmentRaw : ALL_SEGMENTS;
  return {
    ...base,
    segment,
    industry: params.get('industry')?.trim() || ALL_INDUSTRIES,
  };
}

export function searchParamsForIndustriesFilters(
  current: URLSearchParams,
  state: IndustriesInsightsFilterState,
): URLSearchParams {
  const next = searchParamsForBlogIndexFilters(current, state);
  if (state.segment !== ALL_SEGMENTS) next.set('segment', state.segment);
  else next.delete('segment');
  if (state.industry !== ALL_INDUSTRIES) next.set('industry', state.industry);
  else next.delete('industry');
  return next;
}
