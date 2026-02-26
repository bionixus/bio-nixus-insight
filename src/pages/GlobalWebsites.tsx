import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, Globe2, MapPinned } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import {
  topMarkets,
  regionGroups,
  globalResources,
  getCountryDirectory,
  formatLanguages,
} from '@/lib/globalWebsitesData';

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
        <section className="section-padding pt-24 pb-6">
          <div className="container-wide max-w-5xl mx-auto">
            <Link
              to={basePath}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPinned className="w-4 h-4" />
              Country & Region Navigation
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              Global Websites
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Browse BioNixus websites by priority markets and regions. Use this page to choose the most relevant
              language route and local market context.
            </p>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-5">Top markets</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {topMarkets.map((item) => (
                <li key={item.countryCode} className="bg-card border border-border rounded-xl p-5">
                  <Link
                    to={`/global-websites/${countryByCode.get(item.countryCode)?.slug ?? item.countryCode.toLowerCase()}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    {item.countryName} - {formatLanguages(item.languages)}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-6">Countries and regions</h2>
            <div className="space-y-8">
              {regionGroups.map((group) => (
                <section key={group.regionKey} aria-labelledby={`${group.regionKey}-title`}>
                  <h2 id={`${group.regionKey}-title`} className="text-xl font-display font-semibold text-foreground mb-4">
                    {group.regionName}
                  </h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {group.countries.map((item) => (
                      <li key={`${group.regionKey}-${item.countryCode}`} className="bg-card border border-border rounded-xl p-5">
                        <Link
                          to={`/global-websites/${countryByCode.get(item.countryCode)?.slug ?? item.countryCode.toLowerCase()}`}
                          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                        >
                          {item.countryName} - {formatLanguages(item.languages)}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-5">Global resources</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {globalResources.map((resource) => (
                <li key={resource.label} className="bg-card border border-border rounded-xl p-5">
                  <a href={resource.url} className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                    <Globe2 className="w-4 h-4" />
                    {resource.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GlobalWebsites;
