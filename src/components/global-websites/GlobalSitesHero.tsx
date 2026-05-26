import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';

type GlobalSitesHeroProps = {
  backTo?: { to: string; label: string };
  children: ReactNode;
};

/** Navy + gold executive hero used on global hub and country blueprint pages */
export function GlobalSitesHero({ backTo, children }: GlobalSitesHeroProps) {
  return (
    <section
      data-global-sites-hero
      className="relative section-padding pt-14 pb-12 md:pt-24 md:pb-20 overflow-hidden bg-gradient-to-br from-navy-deep via-navy-medium to-primary text-primary-foreground"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[14rem] -left-[8rem] h-[34rem] w-[34rem] rounded-full bg-primary-foreground/[0.065] blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[8%] -right-[12%] h-[22rem] w-[22rem] rounded-full bg-gold-warm/20 blur-[88px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[480px] w-[min(100%,920px)] -translate-x-1/2 rounded-[100%] bg-primary-foreground/[0.04] blur-[80px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/28 to-transparent"
      />
      <div className="container-wide relative z-[1] mx-auto max-w-5xl">
        {backTo ? (
          <Link
            to={backTo.to}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/82 transition-colors hover:text-gold-light md:mb-10"
          >
            <ArrowLeft className="size-4 shrink-0" aria-hidden />
            {backTo.label}
          </Link>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export const globalSitesHubCardLink =
  'group relative flex flex-col gap-3 rounded-2xl border border-border/55 bg-gradient-to-br from-card via-card to-card/90 p-6 shadow-[0_26px_64px_-40px_rgba(15,40,72,0.55)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-elegant md:p-7';

export const globalSitesMutedSectionWrap =
  'relative overflow-hidden rounded-3xl border border-border/50 bg-muted/35 px-5 py-10 shadow-[inset_0_1px_0_0_hsl(var(--border)/0.25)] backdrop-blur-[2px] sm:px-8 md:px-10 md:py-12';

export const globalSitesInsightCard =
  'rounded-2xl border border-dashed border-border/70 bg-muted/50 p-6 shadow-inner shadow-primary/5 backdrop-blur-sm';

/** Long-form market blueprint sections and overview panels */
export const globalSitesArticleCard =
  'relative rounded-2xl border border-border/55 bg-gradient-to-br from-card via-card to-card/95 p-6 shadow-[0_26px_64px_-40px_rgba(15,40,72,0.45)] transition-shadow duration-500 hover:shadow-elegant md:p-8';

/** In-page TOC / anchor jump rows on blueprint pages */
export const globalSitesTocLink =
  'group relative flex flex-wrap items-center gap-3 rounded-xl border border-border/55 bg-gradient-to-br from-card via-card to-card/92 px-5 py-[1.0625rem] text-sm font-semibold text-primary shadow-[0_20px_50px_-36px_rgba(15,40,72,0.42)] transition-all duration-500 hover:border-accent/38 hover:text-primary hover:shadow-elegant md:text-[0.9375rem]';

export const globalSitesHeroPrimaryCta =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-warm text-navy-deep font-semibold shadow-[0_12px_40px_-14px_rgba(200,154,62,0.65)] hover:bg-gold-light transition-colors';

export const globalSitesHeroSecondaryCta =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/35 bg-white/10 font-semibold text-white shadow-inner shadow-black/10 transition-colors hover:bg-white/17';
