import type { BlogPost } from '@/types/blog';
import {
  ALL_COUNTRIES,
  ALL_TOPICS,
  filterBlogPosts,
  hasActiveBlogFilters,
  type BlogIndexFilterState,
} from '@/lib/blog-index-filters';

export const ALL_SEGMENTS = '__all__';

export type IndustrySegmentFilter = '__all__' | 'b2b' | 'b2c';

export interface IndustriesInsightsFilterState extends BlogIndexFilterState {
  segment: IndustrySegmentFilter;
}

export function filterIndustriesInsightsPosts(
  posts: BlogPost[],
  { segment, ...blogFilters }: IndustriesInsightsFilterState,
): BlogPost[] {
  const bySegment =
    segment === ALL_SEGMENTS
      ? posts
      : posts.filter((post) => post.industrySegment === segment);

  return filterBlogPosts(bySegment, blogFilters);
}

export function hasActiveIndustriesInsightsFilters(state: IndustriesInsightsFilterState): boolean {
  return state.segment !== ALL_SEGMENTS || hasActiveBlogFilters(state);
}

export const DEFAULT_INDUSTRIES_INSIGHTS_FILTER_STATE: IndustriesInsightsFilterState = {
  search: '',
  country: ALL_COUNTRIES,
  topic: ALL_TOPICS,
  segment: ALL_SEGMENTS,
};
