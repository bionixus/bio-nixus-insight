import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { STATS } from '@/lib/companyStats';

export type RankingCoverChip = {
  rank: string;
  name: string;
  tag: string;
  featured?: boolean;
};

export type RankingCoverStat = {
  label: string;
  value: string;
  accent?: string;
};

type CountryRankingCoverProps = {
  h1: string;
  kicker: string;
  subtitle: ReactNode;
  badge: string;
  meta: string;
  crumbLabel: string;
  crumbHref: string;
  chips: RankingCoverChip[];
  stats: RankingCoverStat[];
};

export function CountryRankingCover({
  h1,
  kicker,
  subtitle,
  badge,
  meta,
  crumbLabel,
  crumbHref,
  chips,
  stats,
}: CountryRankingCoverProps) {
  return (
    <section className="cover">
      <div className="cover-dot" />
      <div className="cover-tri" aria-hidden="true" />
      <div className="cover-tri2" aria-hidden="true" />
      <div className="cover-sheen" aria-hidden="true" />
      <div className="cover-gold-top" aria-hidden="true" />
      <div className="cover-gold" aria-hidden="true" />
      <div className="cover-inner">
        <nav className="crumb-on-cover px-0 pt-0 pb-6 text-sm" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="mx-2 text-white/35">/</span>
          <Link to="/insights">Insights</Link>
          <span className="mx-2 text-white/35">/</span>
          <Link to={crumbHref} aria-current="page">
            {crumbLabel}
          </Link>
        </nav>
        <div className="cover-top">
          <div className="clogorow">
            <div>
              <div className="clogoname">BIONIXUS</div>
              <div className="clogosub">Intelligence For Business Growth</div>
            </div>
          </div>
          <div className="cover-top-right">
            <div className="cref">
              {meta}
              <br />
              1 September 2026
            </div>
            <div className="cbadge">{badge}</div>
          </div>
        </div>
        <div className="cover-ornament">
          <span className="or-diamond" />
          <span className="or-txt">{kicker}</span>
          <span className="or-line" />
        </div>
        <h1 className="cover-title">
          <span className="h1-kicker">{kicker}</span>
          {h1}
        </h1>
        <p className="cover-subtitle">{subtitle}</p>
        <div className="cover-mkts">
          {chips.map((chip) => (
            <div key={chip.name} className={chip.featured ? 'cmkt live' : 'cmkt'}>
              <span className="iso">{chip.rank}</span>
              <span className="nm">{chip.name}</span>
              <span className="tag">{chip.tag}</span>
            </div>
          ))}
        </div>
        <div className="cdrow">
          {stats.map((stat) => (
            <div key={stat.label} className="cdcell">
              <div className="cdlbl">{stat.label}</div>
              <div className="cdval">
                {stat.value}
                {stat.accent ? (
                  <>
                    <br />
                    <span className="accent">{stat.accent}</span>
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="cover-foot">
          <div>
            <strong>Global HQ</strong> Sheridan, Wyoming · USA · London · Cairo · Riyadh · Dubai ·{' '}
            <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>
          </div>
          <div>
            {STATS.clients} clients · {STATS.countries} countries · {STATS.projectsAnnual} projects
            annually · {STATS.projects2025} in 2025
          </div>
        </div>
      </div>
    </section>
  );
}
