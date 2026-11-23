import type { BlogPost } from '@/types/blog';
import {
  PINNED_BLOG_REGIONS,
  postBlogFilterKey,
  resolvePinnedBlogRegion,
} from '@/lib/blog-region-filters';

export type BlogFilterOption = { value: string; label: string; count: number };

export interface BlogIndexFilterState {
  search: string;
  country: string;
  topic: string;
}

export const ALL_COUNTRIES = '__all__';
export const ALL_TOPICS = '__all__';

const SEARCH_PARAM = 'q';
const COUNTRY_PARAM = 'country';
const TOPIC_PARAM = 'topic';

function normalize(s: string): string {
  return s.trim().toLowerCase();
}

export function canonicalBlogCountryParam(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed || trimmed === ALL_COUNTRIES) return ALL_COUNTRIES;
  return resolvePinnedBlogRegion(trimmed) ?? trimmed;
}

export function selectedBlogCountry(raw: string, options: BlogFilterOption[]): string {
  const canonical = canonicalBlogCountryParam(raw);
  if (canonical === ALL_COUNTRIES) return ALL_COUNTRIES;
  return options.some((option) => option.value === canonical) ? canonical : ALL_COUNTRIES;
}

export function blogIndexFiltersFromSearchParams(params: URLSearchParams): BlogIndexFilterState {
  return {
    search: params.get(SEARCH_PARAM) ?? '',
    country: params.get(COUNTRY_PARAM)?.trim() || ALL_COUNTRIES,
    topic: params.get(TOPIC_PARAM)?.trim() || ALL_TOPICS,
  };
}

export function searchParamsForBlogIndexFilters(
  current: URLSearchParams,
  state: BlogIndexFilterState,
): URLSearchParams {
  const next = new URLSearchParams(current);
  const search = state.search.trim();
  if (search) next.set(SEARCH_PARAM, search);
  else next.delete(SEARCH_PARAM);
  if (state.country && state.country !== ALL_COUNTRIES) next.set(COUNTRY_PARAM, state.country);
  else next.delete(COUNTRY_PARAM);
  if (state.topic && state.topic !== ALL_TOPICS) next.set(TOPIC_PARAM, state.topic);
  else next.delete(TOPIC_PARAM);
  return next;
}

export function buildFilterOptions(
  posts: BlogPost[],
  field: 'country' | 'category',
): BlogFilterOption[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    const value = field === 'country' ? postBlogFilterKey(post) : post.category?.trim() ?? '';
    if (!value) continue;
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  if (field === 'country') {
    for (const region of PINNED_BLOG_REGIONS) {
      if (!counts.has(region)) counts.set(region, 0);
    }
  }
  return [...counts.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([value, count]) => ({ value, label: value, count }));
}

export function filterBlogPosts(
  posts: BlogPost[],
  { search, country, topic }: BlogIndexFilterState,
): BlogPost[] {
  const q = normalize(search);
  const selectedCountry = country === ALL_COUNTRIES ? ALL_COUNTRIES : canonicalBlogCountryParam(country);

  return posts.filter((post) => {
    if (selectedCountry !== ALL_COUNTRIES && postBlogFilterKey(post) !== selectedCountry) return false;
    if (topic !== ALL_TOPICS && post.category?.trim() !== topic) return false;

    if (!q) return true;

    const haystack = [
      post.title,
      post.excerpt,
      post.category,
      post.country,
      post.region,
      postBlogFilterKey(post),
      post.slug,
      ...(post.tags ?? []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return haystack.includes(q);
  });
}

export function hasActiveBlogFilters(state: BlogIndexFilterState): boolean {
  return (
    state.search.trim() !== '' ||
    state.country !== ALL_COUNTRIES ||
    state.topic !== ALL_TOPICS
  );
}
