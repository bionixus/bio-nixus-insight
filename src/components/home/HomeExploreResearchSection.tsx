import { Link } from 'react-router-dom';
import { getLocalizedPathForLanguage } from '@/lib/seo';
import type { Language } from '@/lib/i18n';
import type { UiChromeStrings } from '@/lib/uiChromeStrings';

type ExploreCopy = UiChromeStrings['exploreResearch'];

type ExploreLink = {
  to: string;
  label: string;
  featured?: boolean;
};

function displayPath(to: string): string {
  return `bionixus.com${to}`;
}

function UrlCard({ to, label, featured = false }: ExploreLink) {
  return (
    <li>
      <Link
        to={to}
        className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-gold-warm/50 hover:bg-white/[0.06] ${
          featured ? 'min-h-[8.5rem] sm:p-6' : ''
        }`}
      >
        <span className="font-mono text-[11px] leading-relaxed tracking-wide text-gold-warm/80 break-all">
          {displayPath(to)}
        </span>
        <span
          className={`mt-3 font-display font-medium text-[#FFFEFB] group-hover:text-gold-warm ${
            featured ? 'text-lg leading-snug' : 'text-base leading-snug'
          }`}
        >
          {label}
        </span>
        <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/35 group-hover:text-gold-warm/80 rtl:rotate-180 rtl:self-start">
          →
        </span>
      </Link>
    </li>
  );
}

export function HomeExploreResearchSection({
  explore,
  language,
  servicesLabel,
}: {
  explore: ExploreCopy;
  language: Language;
  servicesLabel: string;
}) {
  const hub = getLocalizedPathForLanguage('/healthcare-market-research', language);
  const services = getLocalizedPathForLanguage('/services', language);

  const spotlight: ExploreLink[] = [
    { to: hub, label: explore.hub, featured: true },
    { to: '/iqvia-alternative', label: explore.iqvia, featured: true },
  ];

  const rankings: ExploreLink[] = [
    { to: '/insights/top-market-research-companies-saudi-arabia-2026', label: explore.ksaFirms },
    { to: '/insights/top-market-research-companies-uae-2026', label: explore.uaeFirms },
    { to: '/insights/top-market-research-companies-egypt-2026', label: explore.egyptFirms },
    { to: '/insights/top-market-research-companies-gcc-2026', label: explore.gccFirms },
    { to: '/insights/top-oncology-market-research-companies-2026', label: explore.oncology },
  ];

  const reports: ExploreLink[] = [
    { to: '/saudi-arabia-healthcare-market-report', label: explore.saudiReport },
    { to: '/uae-healthcare-market-report', label: explore.uaeReport },
    { to: '/usa-healthcare-market-report', label: explore.usaReport },
  ];

  const countries: ExploreLink[] = [
    { to: '/healthcare-market-research/united-states', label: explore.countryUsa },
    { to: '/healthcare-market-research/saudi-arabia', label: explore.countrySaudi },
    { to: '/healthcare-market-research/uae', label: explore.countryUae },
    { to: '/healthcare-market-research/turkey', label: explore.countryTurkey },
    { to: '/healthcare-market-research/egypt', label: explore.countryEgypt },
  ];

  const more: ExploreLink[] = [
    { to: services, label: servicesLabel },
    { to: '/nielsen-alternative', label: explore.nielsen },
    { to: '/healthcare-market-statistics', label: explore.statistics },
    { to: '/faq', label: explore.faq },
  ];

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-navy-deep py-16 md:py-20"
      aria-labelledby="home-explore-research-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,rgba(201,168,76,0.08),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="container-wide relative max-w-6xl mx-auto">
        <p className="mb-3 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-gold-warm">
          {explore.kicker}
        </p>
        <h2
          id="home-explore-research-heading"
          className="max-w-2xl font-display text-3xl md:text-4xl font-semibold text-[#FFFEFB]"
        >
          {explore.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/50">{explore.lede}</p>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {spotlight.map((link) => (
            <UrlCard key={link.to} {...link} featured />
          ))}
        </ul>

        <h3 className="mt-12 mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          {explore.rankings}
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rankings.map((link) => (
            <UrlCard key={link.to} {...link} />
          ))}
        </ul>

        <h3 className="mt-12 mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          {explore.featuredReports}
        </h3>
        <ul className="grid gap-3 md:grid-cols-3">
          {reports.map((link) => (
            <UrlCard key={link.to} {...link} />
          ))}
        </ul>

        <h3 className="mt-12 mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          {explore.byCountry}
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((link) => (
            <UrlCard key={link.to} {...link} />
          ))}
        </ul>

        <h3 className="mt-12 mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
          {explore.more}
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {more.map((link) => (
            <UrlCard key={link.to} {...link} />
          ))}
        </ul>
      </div>
    </section>
  );
}
