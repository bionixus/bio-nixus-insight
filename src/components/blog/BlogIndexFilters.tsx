import { Globe, LayoutGrid, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { BlogFilterOption, BlogIndexFilterState } from '@/lib/blog-index-filters';
import { ALL_COUNTRIES, ALL_TOPICS } from '@/lib/blog-index-filters';

export interface BlogIndexFiltersLabels {
  searchPlaceholder: string;
  countryLabel: string;
  countryAll: string;
  topicLabel: string;
  topicAll: string;
  clear: string;
  showing: (visible: number, total: number) => string;
}

const DEFAULT_LABELS: BlogIndexFiltersLabels = {
  searchPlaceholder: 'Search articles by title, topic, or keyword…',
  countryLabel: 'Country / region',
  countryAll: 'All countries',
  topicLabel: 'Topic',
  topicAll: 'All topics',
  clear: 'Clear filters',
  showing: (visible, total) =>
    visible === total ? `${total} articles` : `Showing ${visible} of ${total} articles`,
};

interface BlogIndexFiltersProps {
  state: BlogIndexFilterState;
  onChange: (patch: Partial<BlogIndexFilterState>) => void;
  onClear: () => void;
  countryOptions: BlogFilterOption[];
  topicOptions: BlogFilterOption[];
  visibleCount: number;
  totalCount: number;
  labels?: Partial<BlogIndexFiltersLabels>;
  dir?: 'ltr' | 'rtl';
}

function OptionLabel({ label, count }: { label: string; count: number }) {
  return (
    <span className="flex w-full items-center justify-between gap-3">
      <span className="truncate">{label}</span>
      <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{count}</span>
    </span>
  );
}

const triggerClass =
  'h-11 rounded-xl border-border/80 bg-background/80 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/30 focus:ring-primary/20';

const BlogIndexFilters = ({
  state,
  onChange,
  onClear,
  countryOptions,
  topicOptions,
  visibleCount,
  totalCount,
  labels: labelOverrides,
  dir = 'ltr',
}: BlogIndexFiltersProps) => {
  const labels = { ...DEFAULT_LABELS, ...labelOverrides };
  const filtersActive =
    state.search.trim() !== '' ||
    state.country !== ALL_COUNTRIES ||
    state.topic !== ALL_TOPICS;

  return (
    <section
      className="section-padding pt-0 pb-6 bg-cream-dark/40"
      aria-label="Filter blog articles"
      dir={dir}
    >
      <div className="container-wide">
        <div className="rounded-2xl border border-border/80 bg-card/95 p-4 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative sm:col-span-2 lg:col-span-1">
                <label htmlFor="blog-search" className="sr-only">
                  {labels.searchPlaceholder}
                </label>
                <Search
                  className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden
                />
                <Input
                  id="blog-search"
                  type="search"
                  value={state.search}
                  onChange={(e) => onChange({ search: e.target.value })}
                  placeholder={labels.searchPlaceholder}
                  className={`${triggerClass} ps-10`}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="blog-country-filter"
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  <Globe className="h-3.5 w-3.5" aria-hidden />
                  {labels.countryLabel}
                </label>
                <Select
                  value={state.country}
                  onValueChange={(country) => onChange({ country })}
                >
                  <SelectTrigger id="blog-country-filter" className={triggerClass}>
                    <SelectValue placeholder={labels.countryAll} />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-border/80 shadow-lg max-h-72">
                    <SelectItem value={ALL_COUNTRIES}>{labels.countryAll}</SelectItem>
                    {countryOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        <OptionLabel label={opt.label} count={opt.count} />
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="blog-topic-filter"
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  <LayoutGrid className="h-3.5 w-3.5" aria-hidden />
                  {labels.topicLabel}
                </label>
                <Select value={state.topic} onValueChange={(topic) => onChange({ topic })}>
                  <SelectTrigger id="blog-topic-filter" className={triggerClass}>
                    <SelectValue placeholder={labels.topicAll} />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-border/80 shadow-lg max-h-72">
                    <SelectItem value={ALL_TOPICS}>{labels.topicAll}</SelectItem>
                    {topicOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        <OptionLabel label={opt.label} count={opt.count} />
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-end lg:pb-0.5">
              <p className="text-sm text-muted-foreground tabular-nums">
                {labels.showing(visibleCount, totalCount)}
              </p>
              {filtersActive ? (
                <button
                  type="button"
                  onClick={onClear}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" aria-hidden />
                  {labels.clear}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIndexFilters;
