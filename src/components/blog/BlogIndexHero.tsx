import { Link } from 'react-router-dom';
import type { RefObject } from 'react';
import { ArrowRight } from 'lucide-react';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
import { PremiumHeroOrbitals } from '@/components/home/PremiumHeroOrbitals';

export type BlogIndexHeroStat = { value: string; label: string };

export interface BlogIndexHeroProps {
  dir?: 'ltr' | 'rtl';
  lang?: string;
  homeHref: string;
  homeLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  stats?: BlogIndexHeroStat[];
  browseLabel: string;
  proposalLabel: string;
  proposalHref: string;
  sectionRef?: RefObject<HTMLElement | null>;
  /** When false, the hero sits under a breadcrumb strip and does not pad for the navbar. */
  clearsNavbar?: boolean;
}

export function BlogIndexHero({
  dir = 'ltr',
  lang = 'en',
  homeHref,
  homeLabel,
  eyebrow,
  title,
  subtitle,
  stats,
  browseLabel,
  proposalLabel,
  proposalHref,
  sectionRef,
  clearsNavbar = true,
}: BlogIndexHeroProps) {
  return (
    <section
      ref={sectionRef}
      data-hero-lcp
      className={`premium-home-midnight section-padding pb-16 md:pb-24 ${
        clearsNavbar ? 'pt-24 md:pt-28' : 'pt-10 md:pt-14'
      }`}
      dir={dir}
      lang={lang}
      aria-labelledby="blog-index-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/30 to-transparent" aria-hidden="true" />
      <PremiumHeroOrbitals />

      <div className="container-wide relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
          <div>
            <PremiumEyebrow>{eyebrow}</PremiumEyebrow>
            <h1
              id="blog-index-heading"
              className="sr-lcp max-w-4xl font-display text-3xl font-light leading-[1.12] tracking-tight text-[#FFFEFB] md:text-5xl"
            >
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/55">{subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#insights" className="premium-gold-btn">
                {browseLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to={proposalHref}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/12 px-8 py-[15px] text-sm font-medium tracking-wide text-white/65 transition-colors hover:border-white/25 hover:text-[#FFFEFB]"
              >
                {proposalLabel}
              </Link>
            </div>
            <p className="mt-5">
              <Link
                to={homeHref}
                className="text-sm font-medium text-white/40 underline-offset-4 transition-colors hover:text-[#C9A84C] hover:underline"
              >
                {homeLabel}
              </Link>
            </p>
          </div>

          {stats && stats.length > 0 ? (
            <aside className="premium-card-dark p-7 md:p-8" aria-label="Blog highlights">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">{eyebrow}</p>
              <ul className="mt-7 space-y-4">
                {stats.map((stat) => (
                  <li key={stat.label} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">{stat.label}</p>
                    <p className="mt-1.5 font-display text-lg font-light text-[#FFFEFB]">{stat.value}</p>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
