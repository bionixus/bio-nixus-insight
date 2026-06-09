import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  GlobalSitesHero,
  globalSitesHubCardLink,
  globalSitesInsightCard,
  globalSitesMutedSectionWrap,
} from '@/components/global-websites/GlobalSitesHero';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Globe2, MapPinned } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import {
  topMarkets,
  regionGroups,
  globalResources,
  getCountryDirectory,
  formatLanguages,
} from '@/lib/globalWebsitesData';
import { healthcareCountryRecoveryPaths, languageRecoveryPaths } from '@/lib/internalLinkRecovery';

const canonicalUrl = 'https://www.bionixus.com/global-websites';

const GlobalWebsites = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';

  const allCountryLinks = getCountryDirectory();
  const countryByCode = new Map(allCountryLinks.map((country) => [country.countryCode, country]));
  const itemList = allCountryLinks.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: `${item.countryName} - ${formatLanguages(item.languages)}`,
    url: `https://www.bionixus.com/global-websites/${item.slug}`,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Global Websites | BioNixus Country & Regional Navigation</title>
        <meta
          name="description"
          content="Browse BioNixus country and regional websites by top markets and geography. Find localized language routes and global resources from one navigation hub."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Global Websites | BioNixus" />
        <meta
          property="og:description"
          content="Country and regional navigation hub for BioNixus websites, languages, and global resources."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'BioNixus Global Websites',
            url: canonicalUrl,
            description:
              'Country and regional navigation page listing top markets, language options, and global BioNixus resources.',
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'BioNixus country and region websites',
            itemListElement: itemList,
          })}
        </script>
      </Helmet>

      <Navbar />

      <main>
        <GlobalSitesHero backTo={{ to: basePath, label: 'Back to home' }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light/95 shadow-inner shadow-black/10">
            <MapPinned className="size-3.5 text-gold-light" aria-hidden />
            Country &amp; Region Navigation
          </div>
          <h1 className="mb-4 max-w-4xl text-balance text-4xl font-display font-semibold tracking-tight text-primary-foreground md:text-5xl lg:text-[3.35rem]">
            Global Websites
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            Browse BioNixus websites by priority markets and regions. Use this hub to reach the correct language routes
            with local stakeholder context layered in from day one.
          </p>
        </GlobalSitesHero>

        <section className="section-padding py-12 md:py-16 bg-gradient-to-b from-background via-muted/40 to-background">
          <div className="container-wide mx-auto max-w-5xl">
            <div className={globalSitesMutedSectionWrap}>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-display font-semibold text-foreground md:text-[1.75rem]">
              Why country-first navigation matters for pharmaceutical market research
            </h2>
            <p>
              Pharmaceutical teams rarely make decisions in a single abstract &quot;global&quot; market. Evidence needs
              are shaped by regulators, payers, hospital formularies, and physician behavior that differ materially between
              the United Kingdom, Germany, Saudi Arabia, and the United Arab Emirates. A country-first navigation model
              helps you land on the right language route faster, compare adjacent markets, and build cross-country
              programs without losing local nuance.
            </p>
            <p>
              BioNixus maintains deep execution experience across GCC and MENA alongside EU5 and UK research programs.
              That combination matters when you need comparable survey instruments with country-appropriate translations,
              when you need payer interviews that respect confidentiality norms, and when you need market access
              narratives that align to local HTA and pricing realities. This hub explains how we cluster regions, how we
              highlight bilingual Arabic–English routes, and where to find therapy-specific and service-specific follow-on
              pages.
            </p>
            <p>
              Use the sections below to move from discovery to action: pick a priority market, open the corresponding
              global website profile, then connect to healthcare market research services, blog insights, and case
              studies that reinforce the same strategic storyline. If you are unsure which market to prioritize, start
              with the top markets list and validate demand signals against your launch sequence and access milestones.
            </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding py-12 md:py-16 border-t border-border/60 bg-muted/15">
          <div className="container-wide mx-auto max-w-5xl">
            <div className="mb-10 max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/90">Prioritized access</p>
              <h2 className="text-3xl font-display font-semibold tracking-tight text-foreground md:text-[2rem]">Top markets</h2>
              <div className="h-px w-12 bg-accent" aria-hidden />
            </div>
            <ul className="grid gap-5 md:grid-cols-2">
              {topMarkets.map((item) => (
                <li key={item.countryCode}>
                  <Link
                    to={`/global-websites/${countryByCode.get(item.countryCode)?.slug ?? item.countryCode.toLowerCase()}`}
                    className={globalSitesHubCardLink}
                  >
                    <span className="font-display text-lg font-semibold text-foreground tracking-tight group-hover:text-primary">
                      {item.countryName}
                    </span>
                    <span className="flex items-center justify-between gap-3 border-t border-border/50 pt-3 text-sm font-medium text-primary">
                      {formatLanguages(item.languages)}
                      <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding py-14 md:py-20 border-t border-border/40 bg-muted/35">
          <div className="container-wide mx-auto max-w-5xl">
            <div className="mb-12 max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/90">Regional directory</p>
              <h2 className="text-3xl font-display font-semibold tracking-tight text-foreground md:text-[2rem]">Countries &amp; regions</h2>
              <div className="h-px w-12 bg-accent" aria-hidden />
            </div>
            <div className="space-y-8">
              {regionGroups.map((group) => (
                <section key={group.regionKey} aria-labelledby={`${group.regionKey}-title`}>
                  <h2 id={`${group.regionKey}-title`} className="mb-5 text-xl font-display font-semibold tracking-tight text-foreground md:text-2xl">
                    {group.regionName}
                  </h2>
                  <ul className="grid gap-5 md:grid-cols-2">
                    {group.countries.map((item) => (
                      <li key={`${group.regionKey}-${item.countryCode}`}>
                        <Link
                          to={`/global-websites/${countryByCode.get(item.countryCode)?.slug ?? item.countryCode.toLowerCase()}`}
                          className={globalSitesHubCardLink}
                        >
                          <span className="font-semibold tracking-tight text-foreground group-hover:text-primary">{item.countryName}</span>
                          <span className="flex items-center justify-between gap-3 border-t border-border/50 pt-3 text-sm text-muted-foreground group-hover:border-accent/35">
                            {formatLanguages(item.languages)}
                            <ArrowRight className="size-4 shrink-0 text-primary opacity-75 transition-opacity group-hover:opacity-100" aria-hidden />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background py-14 md:py-20 border-t border-border/50">
          <div className="container-wide mx-auto max-w-5xl">
            <div className="mb-12 max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/90">Operational links</p>
              <h2 className="text-3xl font-display font-semibold tracking-tight text-foreground md:text-[2rem]">Global resources</h2>
              <div className="h-px w-12 bg-accent" aria-hidden />
            </div>
            <ul className="grid gap-5 md:grid-cols-2">
              {globalResources.map((resource) => (
                <li key={resource.label}>
                  <a href={resource.url} className={globalSitesHubCardLink}>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      <Globe2 className="size-3.5 text-accent" aria-hidden />
                      BioNixus network
                    </span>
                    <span className="flex items-center justify-between gap-3 border-t border-border/55 pt-3">
                      <span className="text-base font-semibold text-foreground group-hover:text-primary">{resource.label}</span>
                      <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="relative mt-10 overflow-hidden rounded-2xl border border-border/65 bg-card p-6 shadow-elegant md:p-9">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.08),transparent_52%)]" />
              <h2 className="relative text-xl font-display font-semibold tracking-tight text-foreground mb-3 md:text-2xl">
                Looking for service-focused research planning?
              </h2>
              <p className="relative text-sm leading-relaxed text-muted-foreground mb-5 max-w-2xl md:text-[0.9375rem]">
                Switch to our healthcare methodology and therapy playbook when you move from country selection to scoped fieldwork design.
              </p>
              <Link
                to="/healthcare-market-research"
                className="relative inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/92"
              >
                Open healthcare market research hub
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className={`relative mt-8 ${globalSitesInsightCard}`}>
              <h2 className="text-lg font-display font-semibold tracking-tight text-foreground mb-4">Regional discovery links</h2>
              <div className="grid gap-2 md:grid-cols-2">
                {languageRecoveryPaths.slice(0, 12).map((path) => (
                  <Link key={path} to={path} className="text-primary hover:underline break-all text-sm">
                    {path}
                  </Link>
                ))}
              </div>
            </div>
            <div className={`relative mt-6 ${globalSitesInsightCard}`}>
              <h2 className="text-lg font-display font-semibold tracking-tight text-foreground mb-4">Healthcare market country paths</h2>
              <div className="grid gap-2 md:grid-cols-2">
                {healthcareCountryRecoveryPaths.slice(0, 16).map((path) => (
                  <Link key={path} to={path} className="text-primary hover:underline break-all text-sm">
                    {path}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GlobalWebsites;
