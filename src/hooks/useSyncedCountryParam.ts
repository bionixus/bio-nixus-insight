import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ALL_COUNTRIES,
  canonicalBlogCountryParam,
  type BlogFilterOption,
} from '@/lib/blog-index-filters';

/**
 * Keep `?country=` aligned with a real filter option.
 * "United States" and "Brazil" become USA and LATAM. Unknown values are removed
 * only after the post list has loaded, so a valid country is not stripped during fetch.
 */
export function useSyncedCountryParam(options: BlogFilterOption[], ready: boolean) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const raw = searchParams.get('country');
    if (!raw) return;
    const canonical = canonicalBlogCountryParam(raw);
    const known = canonical !== ALL_COUNTRIES && options.some((option) => option.value === canonical);
    if (canonical !== raw && known) {
      const next = new URLSearchParams(searchParams);
      next.set('country', canonical);
      setSearchParams(next, { replace: true });
      return;
    }
    if (ready && canonical !== ALL_COUNTRIES && !known) {
      const next = new URLSearchParams(searchParams);
      next.delete('country');
      setSearchParams(next, { replace: true });
    }
  }, [options, ready, searchParams, setSearchParams]);

  return [searchParams, setSearchParams] as const;
}
