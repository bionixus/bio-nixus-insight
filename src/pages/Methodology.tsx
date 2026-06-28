import { useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { useLanguage } from '@/contexts/LanguageContext';
import { METHODOLOGY_SEO_AND_HERO } from '@/pages/methodology/methodologySeoHero';
import { methodologyLocalizedPath } from '@/pages/methodology/methodologyLocalizedPath';
import { MethodologyLongFormBody } from '@/pages/methodology/MethodologyLongFormBody';
import { languagePaths, getLocalizedPathForLanguage, localizedContactPath } from '@/lib/seo';

const LANGUAGE_MIRROR = [
  { href: '/methodology', label: 'English' },
  { href: '/de/methodology', label: 'Deutsch' },
  { href: '/fr/methodology', label: 'Français' },
  { href: '/es/methodology', label: 'Español' },
  { href: '/pt/methodology', label: 'Português' },
  { href: '/ru/methodology', label: 'Русский' },
  { href: '/zh/methodology', label: '中文' },
  { href: '/ar/methodology', label: 'العربية' },
];

const Methodology = () => {
  const { language, t } = useLanguage();
  const copy = METHODOLOGY_SEO_AND_HERO[language];

  const homePath = languagePaths[language];
  const methodologyPath = getLocalizedPathForLanguage('/methodology', language);
  const marketResearchHubPath = methodologyLocalizedPath(language, '/market-research-home');
  const gfkEgyptPath = methodologyLocalizedPath(language, '/gfk-alternative-egypt');

  const breadcrumbItems = useMemo(
    () => [
      { name: t.nav.home, href: homePath },
      { name: t.footer.methodology, href: methodologyPath },
    ],
    [homePath, methodologyPath, t.footer.methodology, t.nav.home],
  );

  const jsonLd = useMemo(() => [buildBreadcrumbSchema(breadcrumbItems)], [breadcrumbItems]);
  const contactPath = localizedContactPath(language);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <SEOHead title={copy.seoTitle} description={copy.seoDescription} canonical="https://www.bionixus.com/methodology" jsonLd={jsonLd} />

      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <section className="section-padding pb-8">
          <div className="container-wide max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">{copy.h1}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{copy.intro}</p>

            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              {copy.langMirrorLead}&nbsp;
              {LANGUAGE_MIRROR.map(({ href, label }, i) => (
                <span key={href}>
                  {i > 0 ? ' · ' : null}
                  <Link to={href} className="text-primary font-medium hover:underline">
                    {label}
                  </Link>
                </span>
              ))}
              {copy.langMirrorMid}&nbsp;
              <Link to={marketResearchHubPath} className="text-primary font-medium hover:underline">
                {copy.marketResearchHubLabel}
              </Link>
              &nbsp;{copy.langMirrorTail}&nbsp;
              <Link to={gfkEgyptPath} className="text-primary font-medium hover:underline">
                {copy.gfkAlternativeLabel}
              </Link>
              .
            </p>
          </div>
        </section>

        <MethodologyLongFormBody lang={language} />

        <section className="section-padding bg-primary/5" id="contact-cta">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">{copy.ctaTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">{copy.ctaBody}</p>
            <Link
              to={contactPath}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              {copy.ctaButton}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Methodology;
