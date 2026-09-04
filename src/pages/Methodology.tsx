import { useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { useLanguage } from '@/contexts/LanguageContext';
import { METHODOLOGY_SEO_AND_HERO } from '@/pages/methodology/methodologySeoHero';
import { methodologyLocalizedPath } from '@/pages/methodology/methodologyLocalizedPath';
import { MethodologyLongFormBody } from '@/pages/methodology/MethodologyLongFormBody';
import { METHODOLOGY_EN_FAQ } from '@/pages/methodology/MethodologyLongFormEn';
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
  const healthcareHubPath = methodologyLocalizedPath(language, '/healthcare-market-research');
  const industriesPath = methodologyLocalizedPath(language, '/bionixus-industries');

  const breadcrumbItems = useMemo(
    () => [
      { name: t.nav.home, href: homePath },
      { name: t.footer.methodology, href: methodologyPath },
    ],
    [homePath, methodologyPath, t.footer.methodology, t.nav.home],
  );

  const usesEnglishFaq = language === 'en' || language === 'pt' || language === 'ru';
  const jsonLd = useMemo(() => {
    const nodes: object[] = [buildBreadcrumbSchema(breadcrumbItems)];
    if (usesEnglishFaq) {
      nodes.push(buildFAQSchema(METHODOLOGY_EN_FAQ, { pageUrl: 'https://www.bionixus.com/methodology' }));
    }
    return nodes;
  }, [breadcrumbItems, usesEnglishFaq]);
  const contactPath = localizedContactPath(language);

  return (
    <div className="min-h-screen bg-[#FFFEFB]">
      <Navbar />

      <SEOHead title={copy.seoTitle} description={copy.seoDescription} canonical="https://www.bionixus.com/methodology" jsonLd={jsonLd} />

      <main>
        <div className="premium-home-ivory pt-24 pb-0">
          <div className="container-wide mx-auto max-w-6xl">
            <BreadcrumbNav items={breadcrumbItems} className="px-0" />
          </div>
        </div>

        <section className="premium-home-midnight section-padding pt-10 pb-16 md:pt-14 md:pb-24" aria-labelledby="methodology-heading">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/30 to-transparent" aria-hidden="true" />
          <div className="container-wide relative z-10 mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
              <div>
                <PremiumEyebrow>Healthcare · Consumer · One spine</PremiumEyebrow>
                <h1
                  id="methodology-heading"
                  className="sr-lcp max-w-4xl font-display text-3xl font-light leading-[1.12] tracking-tight text-[#FFFEFB] md:text-5xl"
                >
                  {copy.h1}
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/55">{copy.intro}</p>
                <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-white/40">
                  {copy.langMirrorLead}&nbsp;
                  {LANGUAGE_MIRROR.map(({ href, label }, i) => (
                    <span key={href}>
                      {i > 0 ? ' · ' : null}
                      <Link to={href} className="text-[#C9A84C] underline-offset-4 hover:underline">
                        {label}
                      </Link>
                    </span>
                  ))}
                  {copy.langMirrorMid}&nbsp;
                  <Link to={marketResearchHubPath} className="text-[#C9A84C] underline-offset-4 hover:underline">
                    {copy.marketResearchHubLabel}
                  </Link>
                  &nbsp;{copy.langMirrorTail}&nbsp;
                  <Link to={gfkEgyptPath} className="text-[#C9A84C] underline-offset-4 hover:underline">
                    {copy.gfkAlternativeLabel}
                  </Link>
                  .
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link to={contactPath} className="premium-gold-btn">
                    {copy.ctaButton}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to={healthcareHubPath}
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/12 px-8 py-[15px] text-sm font-medium tracking-wide text-white/65 transition-colors hover:border-white/25 hover:text-[#FFFEFB]"
                  >
                    Healthcare programmes
                  </Link>
                </div>
              </div>

              <aside className="premium-card-dark p-7 md:p-8" aria-label="Healthcare and consumer methodology theatres">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">Two theatres</p>
                <p className="mt-3 font-display text-xl font-light text-[#FFFEFB]">Same quality bar. Different respondents.</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/40">
                  The brief names the industry. The spine — design, sample, field, validate, report — does not change.
                </p>
                <ul className="mt-7 space-y-4">
                  <li className="border-b border-white/10 pb-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">Healthcare</p>
                    <p className="mt-1.5 font-display text-lg font-light text-[#FFFEFB]">Physicians, payers, KOLs, hospitals</p>
                    <p className="mt-1 text-sm font-light text-white/40">
                      <Link to={healthcareHubPath} className="text-[#C9A84C] underline-offset-4 hover:underline">
                        Healthcare market research
                      </Link>
                    </p>
                  </li>
                  <li>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">Consumer</p>
                    <p className="mt-1.5 font-display text-lg font-light text-[#FFFEFB]">Shoppers, buyers, retailers, trade</p>
                    <p className="mt-1 text-sm font-light text-white/40">
                      <Link to={industriesPath} className="text-[#C9A84C] underline-offset-4 hover:underline">
                        Industries we study
                      </Link>
                    </p>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <MethodologyLongFormBody lang={language} />

        <section className="premium-home-midnight section-padding py-20 md:py-24" id="contact-cta">
          <div className="container-wide relative z-10 mx-auto max-w-3xl text-center">
            <span className="mx-auto mb-6 block h-px w-10 bg-[#C9A84C]/40" aria-hidden="true" />
            <h2 className="mb-5 font-display text-3xl font-light tracking-tight text-[#FFFEFB] md:text-4xl">{copy.ctaTitle}</h2>
            <p className="mb-9 text-base font-light leading-relaxed text-white/45">{copy.ctaBody}</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to={contactPath} className="premium-gold-btn">
                {copy.ctaButton}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="mailto:admin@bionixus.com?subject=Research%20methodology"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 px-8 py-[15px] text-sm font-medium tracking-wide text-white/60 transition-colors hover:border-white/25 hover:text-[#FFFEFB]"
              >
                Email admin@bionixus.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Methodology;
