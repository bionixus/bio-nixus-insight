import type { BlogPost } from '@/types/blog';

export type BlogFilterOption = { value: string; label: string; count: number };

export interface BlogIndexFilterState {
  search: string;
  country: string;
  topic: string;
}

export const ALL_COUNTRIES = '__all__';
export const ALL_TOPICS = '__all__';

function normalize(s: string): string {
  return s.trim().toLowerCase();
}

export function buildFilterOptions(
  posts: BlogPost[],
  field: 'country' | 'category',
): BlogFilterOption[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    const raw = field === 'country' ? post.country : post.category;
    const value = raw?.trim();
    if (!value) continue;
    counts.set(value, (counts.get(value) ?? 0) + 1);
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

  return posts.filter((post) => {
    if (country !== ALL_COUNTRIES && post.country?.trim() !== country) return false;
    if (topic !== ALL_TOPICS && post.category?.trim() !== topic) return false;

    if (!q) return true;

    const haystack = [
      post.title,
      post.excerpt,
      post.category,
      post.country,
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
