import { Building2, Globe, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { BlogFilterOption } from '@/lib/blog-index-filters';
import { ALL_COUNTRIES } from '@/lib/blog-index-filters';
import {
  ALL_INDUSTRIES,
  type IndustriesInsightsFilterState,
} from '@/lib/industries-insights-filters';

interface IndustriesInsightsFiltersProps {
  state: IndustriesInsightsFilterState;
  onChange: (patch: Partial<IndustriesInsightsFilterState>) => void;
  onClear: () => void;
  industryOptions: BlogFilterOption[];
  countryOptions: BlogFilterOption[];
  visibleCount: number;
  totalCount: number;
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

export default function IndustriesInsightsFilters({
  state,
  onChange,
  onClear,
  industryOptions,
  countryOptions,
  visibleCount,
  totalCount,
}: IndustriesInsightsFiltersProps) {
  const filtersActive =
    state.search.trim() !== '' ||
    state.country !== ALL_COUNTRIES ||
    state.industry !== ALL_INDUSTRIES;

  return (
    <section className="bx-section cream !py-10" aria-label="Filter industry insights">
      <div className="bx-inner">
        <div className="rounded-2xl border border-border/80 bg-card/95 p-4 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative sm:col-span-2 lg:col-span-1">
                <label htmlFor="industry-insights-search" className="sr-only">
                  Search industry insights
                </label>
                <Search
                  className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden
                />
                <Input
                  id="industry-insights-search"
                  type="search"
                  value={state.search}
                  onChange={(e) => onChange({ search: e.target.value })}
                  placeholder="Search by title, industry, or keyword…"
                  className={`${triggerClass} ps-10`}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="industry-insights-industry-filter"
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  <Building2 className="h-3.5 w-3.5" aria-hidden />
                  Industry
                </label>
                <Select
                  value={state.industry}
                  onValueChange={(industry) => onChange({ industry })}
                >
                  <SelectTrigger id="industry-insights-industry-filter" className={triggerClass}>
                    <SelectValue placeholder="All industries" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-border/80 shadow-lg max-h-72">
                    <SelectItem value={ALL_INDUSTRIES}>All industries</SelectItem>
                    {industryOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        <OptionLabel label={opt.label} count={opt.count} />
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="industry-insights-country-filter"
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  <Globe className="h-3.5 w-3.5" aria-hidden />
                  Country / market
                </label>
                <Select value={state.country} onValueChange={(country) => onChange({ country })}>
                  <SelectTrigger id="industry-insights-country-filter" className={triggerClass}>
                    <SelectValue placeholder="All countries" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-border/80 shadow-lg max-h-72">
                    <SelectItem value={ALL_COUNTRIES}>All countries</SelectItem>
                    {countryOptions.map((opt) => (
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
                {visibleCount === totalCount
                  ? `${totalCount} articles`
                  : `Showing ${visibleCount} of ${totalCount} articles`}
              </p>
              {filtersActive ? (
                <button
                  type="button"
                  onClick={onClear}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" aria-hidden />
                  Clear filters
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
