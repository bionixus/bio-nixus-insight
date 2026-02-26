import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { formatLanguages, getCountryBySlug } from '@/lib/globalWebsitesData';

const GlobalWebsiteCountry = () => {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const country = countrySlug ? getCountryBySlug(countrySlug) : undefined;

  if (!country) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding pt-24 pb-20">
          <div className="container-wide max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Country page not found
            </h1>
            <p className="text-muted-foreground mb-8">
              The requested country page is not available. Browse all countries from the global websites hub.
            </p>
            <Link to="/global-websites" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Global Websites
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const canonicalUrl = `https://www.bionixus.com/global-websites/${country.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{country.countryName} | BioNixus Global Websites</title>
        <meta
          name="description"
          content={`BioNixus country page for ${country.countryName}: regional context, language availability, and quick access to Services and Contact.`}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />

      <main>
        <section className="section-padding pt-24 pb-6">
          <div className="container-wide max-w-5xl mx-auto">
            <Link
              to="/global-websites"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Global Websites
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              BioNixus in {country.countryName}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {country.countryName} is part of our {country.regionName} coverage. This page provides localized entry
              information and direct paths to our core service offerings.
            </p>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Country details</h2>
              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">Country:</strong> {country.countryName}
              </p>
              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">Region:</strong> {country.regionName}
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Languages:</strong> {formatLanguages(country.languages)}
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Market website</h2>
              <a
                href={country.url}
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Visit primary route for {country.countryName}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-5">Work with BioNixus</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Contact BioNixus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <Link to={basePath} className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              <ArrowLeft className="w-4 h-4" /> Return to home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GlobalWebsiteCountry;
