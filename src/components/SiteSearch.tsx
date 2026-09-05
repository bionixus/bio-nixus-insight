import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Loader2, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { filterSitePaths, loadSiteSearchPaths, pathToSearchLabel } from '@/lib/siteSearch';
import { formatTemplate } from '@/lib/uiChromeStrings';
import { useLanguage } from '@/contexts/LanguageContext';

type SiteSearchProps = {
  variant?: 'icon' | 'field' | 'mobile';
  onNavigate?: () => void;
};

function HighlightMatch({ text, query }: { text: string; query: string }) {
  const needle = query.trim();
  if (needle.length < 2) return <>{text}</>;
  const lower = text.toLowerCase();
  const tokens = [...new Set([needle.toLowerCase(), needle.toLowerCase().replace(/\s+/g, '-')])].filter(
    (token) => token.length >= 2,
  );
  let hit = -1;
  let hitLen = 0;
  for (const token of tokens) {
    const index = lower.indexOf(token);
    if (index >= 0 && (hit < 0 || index < hit)) {
      hit = index;
      hitLen = token.length;
    }
  }
  if (hit < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, hit)}
      <mark className="rounded-[2px] bg-[#C9A84C]/25 text-inherit">{text.slice(hit, hit + hitLen)}</mark>
      {text.slice(hit + hitLen)}
    </>
  );
}

export function SiteSearch({ variant = 'icon', onNavigate }: SiteSearchProps) {
  const { t } = useLanguage();
  const copy = t.ui.nav;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [paths, setPaths] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigatingRef = useRef(false);
  const listId = useId();

  useEffect(() => {
    if (variant === 'mobile') return;
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [variant]);

  useEffect(() => {
    if (!open) return;
    setLoadError(false);
    if (paths.length > 0) return;
    setLoading(true);
    loadSiteSearchPaths()
      .then((next) => {
        setPaths(next);
        setLoadError(next.length === 0);
      })
      .catch(() => setLoadError(true))
      .finally(() => setLoading(false));
  }, [open, paths.length]);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  const matches = useMemo(() => filterSitePaths(paths, query), [paths, query]);
  const readyQuery = query.trim().length >= 2;

  const go = (path: string) => {
    if (navigatingRef.current) return;
    navigatingRef.current = true;
    inputRef.current?.blur();
    // Commit the close before routing so Radix can drop iOS scroll-lock / inert.
    // A same-tick <Link> inside the dialog updates the URL on mobile but leaves
    // the previous page painted.
    flushSync(() => {
      setQuery('');
      setOpen(false);
    });
    onNavigate?.();
    window.setTimeout(() => {
      navigatingRef.current = false;
      navigate(path);
    }, 50);
  };

  const triggerClass =
    variant === 'field'
      ? 'hidden lg:flex items-center gap-2 min-w-[220px] h-10 px-3 rounded-lg border border-border bg-background text-sm text-foreground/70 hover:border-[#C9A84C]/40 hover:text-foreground transition-colors'
      : variant === 'mobile'
        ? 'flex w-full items-center gap-2 min-h-11 px-3 rounded-lg border border-border bg-background text-sm text-foreground/80'
        : 'group relative inline-flex items-center justify-center p-2 min-h-11 min-w-11 rounded-lg border border-border bg-background text-foreground/80 hover:bg-muted hover:text-foreground transition-colors md:min-h-9 md:min-w-9';

  return (
    <>
      <button
        type="button"
        className={triggerClass}
        onClick={() => setOpen(true)}
        aria-label={copy.searchOpen}
      >
        <Search className="w-4 h-4 shrink-0" aria-hidden />
        {variant === 'icon' ? (
          <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
            {copy.searchTooltip}
          </span>
        ) : (
          <>
            <span className="flex-1 text-left">{copy.searchPlaceholder}</span>
            {variant === 'field' ? (
              <kbd className="hidden xl:inline-flex items-center rounded border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                ⌘K
              </kbd>
            ) : null}
          </>
        )}
      </button>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setQuery('');
        }}
      >
        <DialogContent
          className="overflow-hidden gap-0 p-0 max-w-[40rem] border-[#1A2A44]/20 shadow-[0_24px_80px_rgba(12,27,51,0.28)] [&>button]:text-white [&>button]:hover:text-[#E8C56A] [&>button]:opacity-80"
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            inputRef.current?.focus();
          }}
          onCloseAutoFocus={(event) => event.preventDefault()}
        >
          <DialogTitle className="sr-only">{copy.searchTitle}</DialogTitle>
          <DialogDescription className="sr-only">{copy.searchHint}</DialogDescription>
          <div className="bg-[#0C1B33] px-5 pt-5 pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A84C] mb-2">
              {copy.searchKicker}
            </p>
            <label className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/6 px-3">
              <Search className="w-4 h-4 text-[#C9A84C] shrink-0" aria-hidden />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={copy.searchPlaceholder}
                autoComplete="off"
                spellCheck={false}
                aria-controls={listId}
                className="w-full h-12 bg-transparent text-[15px] text-white placeholder:text-white/45 outline-none"
              />
              {loading ? <Loader2 className="w-4 h-4 animate-spin text-white/50" aria-hidden /> : null}
            </label>
            <p className="mt-2 text-xs text-white/50">{copy.searchHint}</p>
          </div>

          <div id={listId} className="max-h-[min(62vh,28rem)] overflow-y-auto bg-[#FFFEFB]" role="listbox">
            {loadError ? (
              <p className="px-5 py-8 text-sm text-center text-muted-foreground">{copy.searchError}</p>
            ) : !readyQuery ? (
              <p className="px-5 py-8 text-sm text-center text-muted-foreground">{copy.searchEmpty}</p>
            ) : matches.length === 0 ? (
              <p className="px-5 py-8 text-sm text-center text-muted-foreground">{copy.searchNoResults}</p>
            ) : (
              <ul className="py-2">
                <li className="px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9A7A2E]">
                  {formatTemplate(copy.searchCount, { count: String(matches.length) })}
                </li>
                {matches.map((path) => (
                  <li key={path}>
                    <Link
                      to={path}
                      role="option"
                      className="flex items-start gap-3 px-5 py-2.5 hover:bg-[#C9A84C]/10 focus-visible:bg-[#C9A84C]/10 outline-none"
                      onClick={(event) => {
                        event.preventDefault();
                        go(path);
                      }}
                    >
                      <ArrowUpRight className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A84C]" aria-hidden />
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-[#0C1B33]">
                          <HighlightMatch text={pathToSearchLabel(path)} query={query} />
                        </span>
                        <span className="block text-xs text-muted-foreground break-all">
                          <HighlightMatch text={path} query={query} />
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
