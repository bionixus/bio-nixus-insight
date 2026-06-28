import type { BlogPost } from '@/types/blog';
import {
  ALL_COUNTRIES,
  ALL_TOPICS,
  hasActiveBlogFilters,
  type BlogFilterOption,
  type BlogIndexFilterState,
} from '@/lib/blog-index-filters';
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
    result = result.filter((post) => post.country?.trim() === country);
  }

  const q = search.trim().toLowerCase();
  if (!q) return result;

  return result.filter((post) => {
    const haystack = [
      post.title,
      post.excerpt,
      post.category,
      post.country,
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
