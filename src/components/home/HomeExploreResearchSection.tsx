import { Link } from 'react-router-dom';
import { getLocalizedPathForLanguage } from '@/lib/seo';
import { useLanguage } from '@/contexts/LanguageContext';
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
      <Link to={to} className="premium-card group flex h-full cursor-pointer flex-col p-5">
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
    { to: '/account-level-market-research', label: explore.accountLevel, featured: true },
  ];

  const rankings: ExploreLink[] = [
    { to: '/insights/top-healthcare-market-research-companies-usa-2026', label: explore.usaHealthcareFirms },
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
    { to: '/pricing', label: explore.pricing },
    { to: '/healthcare-market-statistics', label: explore.statistics },
    { to: '/faq', label: explore.faq },
  ];

  const { t } = useLanguage();
  const linksLabel = (count: number) => t.homePage.pathways.moreLinksTemplate.replace('{N}', String(count));

  // Compact, like "Where marketing teams usually start": the three spotlight destinations stay
  // open; each remaining group folds into a row that lists its links when opened.
  const groups: Array<{ key: string; title: string; links: ExploreLink[]; grid: string }> = [
    { key: 'rankings', title: explore.rankings, links: rankings, grid: 'sm:grid-cols-2 lg:grid-cols-3' },
    { key: 'reports', title: explore.featuredReports, links: reports, grid: 'md:grid-cols-3' },
    { key: 'countries', title: explore.byCountry, links: countries, grid: 'sm:grid-cols-2 lg:grid-cols-3' },
    { key: 'more', title: explore.more, links: more, grid: 'sm:grid-cols-2 lg:grid-cols-4' },
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
        <p className="mt-4 mb-10 max-w-2xl text-base leading-relaxed text-white/50">{explore.lede}</p>

        <ul className="mb-6 grid gap-4 md:grid-cols-3">
          {spotlight.map((link) => (
            <UrlCard key={link.to} {...link} featured />
          ))}
        </ul>

        <div className="space-y-3">
          {groups.map((group) => (
            <details key={group.key} className="premium-card p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-medium text-[#0C1B33]">
                <h3 className="text-base">{group.title}</h3>
                <span className="shrink-0 text-sm font-light text-[#7A7267]">{linksLabel(group.links.length)}</span>
              </summary>
              <ul className={`mt-6 grid gap-3 border-t border-[#EDE9E3] pt-6 ${group.grid}`}>
                {group.links.map((link) => (
                  <UrlCard key={link.to} {...link} />
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
