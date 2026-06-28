import { Link } from 'react-router-dom';
import type { RefObject } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
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
}: BlogIndexHeroProps) {
  const isRtl = dir === 'rtl';

  return (
    <section
      ref={sectionRef}
      data-hero-lcp
      className="relative overflow-hidden bg-[#06101F] text-[#FFFEFB]"
      dir={dir}
      lang={lang}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 65% 45%, rgba(12,27,51,1) 0%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 20% 80%, rgba(14,165,160,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 35% 30% at 85% 15%, rgba(201,168,76,0.06) 0%, transparent 40%),
            linear-gradient(180deg, #06101F 0%, #081628 100%)
          `,
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.04]" aria-hidden>
        <svg viewBox="0 0 1440 900" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <pattern id="blogHeroHexGrid" width="60" height="52" patternUnits="userSpaceOnUse">
              <path
                d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blogHeroHexGrid)" />
        </svg>
      </div>

      <PremiumHeroOrbitals />

      <div className="relative z-10 container-wide mx-auto max-w-[1260px] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-32">
        <Link
          to={homeHref}
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/45 transition-colors hover:text-white/80"
        >
          <ArrowLeft className={`h-4 w-4 shrink-0${isRtl ? ' rotate-180' : ''}`} aria-hidden />
          {homeLabel}
        </Link>

        <div className="max-w-3xl premium-fade-up">
          <div className="mb-8 inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-[#C9A84C]/40" aria-hidden />
            <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              {eyebrow}
            </span>
          </div>

          <h1 className="mb-7 font-display text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.12] tracking-tight text-balance">
            {title}
          </h1>

          <p className="mb-10 max-w-2xl text-[17px] font-light leading-[1.8] text-white/45">{subtitle}</p>

          {stats && stats.length > 0 ? (
            <ul
              className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
              aria-label="Blog highlights"
            >
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center backdrop-blur-sm"
                >
                  <p className="font-display text-2xl font-medium text-[#C9A84C] md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#insights"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#C9A84C] to-[#B8933E] px-9 py-[15px] text-sm font-semibold tracking-wide text-[#06101F] shadow-[0_4px_20px_rgba(201,168,76,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(201,168,76,0.35)]"
            >
              {browseLabel}
            </a>
            <Link
              to={proposalHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-8 py-[15px] text-sm font-normal tracking-wide text-white/55 transition-colors hover:border-white/25 hover:text-white"
            >
              {proposalLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
