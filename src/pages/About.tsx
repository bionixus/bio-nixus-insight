import { useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Globe, HeartPulse, ShieldCheck, Target, Microscope, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SchemaMarkup from '@/components/SchemaMarkup';
import { CTASection } from '@/components/shared/CTASection';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEOHead } from '@/components/seo/SEOHead';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { getCanonicalUrl, getLocalizedPathForLanguage, localizedContactPath } from '@/lib/seo';
import { PremiumComplianceRibbon } from '@/components/home/PremiumComplianceRibbon';
import GlobalReachSection from '@/components/home/GlobalReachSection';
import IndustriesGatewaySection from '@/components/home/IndustriesGatewaySection';
import {
  ABOUT_LANGUAGE_MIRROR,
  getAboutPageCopy,
  type AboutPageCopy,
} from '@/pages/about';

const DIFF_ICONS = [Globe, HeartPulse, ShieldCheck] as const;
const VALUE_ICONS = [ShieldCheck, Target, Microscope, Globe] as const;

function AboutOfficeBlock({
  office,
  index,
  egyptPath,
}: {
  office: AboutPageCopy['offices'][number];
  index: number;
  egyptPath: string;
}) {
  const reveal = index === 0 ? 'sr-left' : index === 1 ? 'sr-up' : 'sr-right';
  return (
    <div className={`bg-card border border-border rounded-xl p-8 ${reveal} hover-lift sr sr-scale-up sr-spring`}>
      <div className="flex items-center gap-3 mb-3">
        <Building2 className="w-5 h-5 text-primary" aria-hidden />
        <h3 className="text-lg font-display font-semibold text-foreground">{office.title}</h3>
      </div>
      <p className="text-muted-foreground">
        {office.lines.map((line, lineIndex) => {
          if (line.startsWith('+1 ')) {
            return (
              <span key={line}>
                <a href="tel:+18884655557" className="text-primary hover:underline cursor-pointer">
                  {line}
                </a>
                {lineIndex < office.lines.length - 1 ? <br /> : null}
              </span>
            );
          }
          if (line.startsWith('+44 ')) {
            return (
              <span key={line}>
                <a href="tel:+447727666682" className="text-primary hover:underline cursor-pointer">
                  {line}
                </a>
                {lineIndex < office.lines.length - 1 ? <br /> : null}
              </span>
            );
          }
          if (line.startsWith('+20 ')) {
            return (
              <span key={line}>
                <a href="tel:+201206882323" className="text-primary hover:underline cursor-pointer">
                  {line}
                </a>
                {lineIndex < office.lines.length - 1 ? <br /> : null}
              </span>
            );
          }
          return (
            <span key={line}>
              {line}
              {lineIndex < office.lines.length - 1 ? <br /> : null}
            </span>
          );
        })}
        {office.linkLabel ? (
          <>
            {' '}
            <Link to={egyptPath} className="text-primary font-medium hover:underline">
              {office.linkLabel}
            </Link>
          </>
        ) : null}
      </p>
    </div>
  );
}

const About = () => {
  const { language, isRTL } = useLanguage();
  const copy = getAboutPageCopy(language);
  const aboutPath = getLocalizedPathForLanguage('/about', language);
  const contactPath = localizedContactPath(language);
  const homePath = getLocalizedPathForLanguage('/', language);
  const saPath = '/market-research-saudi-arabia-pharmaceutical';
  const uaePath = '/uae-pharmaceutical-market-research';
  const egyptPath = '/egypt-pharmaceutical-market-research';
  const pharmaIndustriesPath = '/pharma-healthcare-industries';
  const industriesHubPath = '/bionixus-industries';
  const methodologyPath = getLocalizedPathForLanguage('/methodology', language);
  const gccAccessPath = '/gcc-market-access-guide';

  const heroRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const storyRef = useScrollReveal<HTMLElement>({ stagger: 100 });
  const diffRef = useScrollReveal<HTMLElement>({ stagger: 120 });
  const valuesRef = useScrollReveal<HTMLElement>({ stagger: 100 });
  const presenceRef = useScrollReveal<HTMLElement>({ stagger: 100 });

  const breadcrumbItems = useMemo(
    () => [
      { name: copy.breadcrumbHome, href: homePath },
      { name: copy.breadcrumbAbout, href: aboutPath },
    ],
    [copy.breadcrumbAbout, copy.breadcrumbHome, aboutPath, homePath],
  );

  const jsonLd = useMemo(() => [buildBreadcrumbSchema(breadcrumbItems)], [breadcrumbItems]);
  const canonicalUrl = getCanonicalUrl(aboutPath);

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup pageType="about" pageUrl={canonicalUrl} language={language} />
      <SEOHead title={copy.seoTitle} description={copy.seoDescription} canonical={canonicalUrl} jsonLd={jsonLd} />
      <Navbar />
      <main dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
        <div className="section-padding pt-24 pb-2">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <section
          className="section-padding relative overflow-hidden pb-12 pt-4 text-[#FFFEFB]"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 65% 45%, rgba(12,27,51,1) 0%, transparent 70%),
              radial-gradient(ellipse 50% 45% at 20% 80%, rgba(14,165,160,0.08) 0%, transparent 50%),
              linear-gradient(180deg, #06101F 0%, #081628 100%)
            `,
          }}
          ref={heroRef}
        >
          <div className="container-wide relative z-10 mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2.5 sr sr-left sr-fast revealed">
              <span className="h-px w-8 bg-[#C9A84C]/40" aria-hidden="true" />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">{copy.heroTagline}</span>
            </div>
            <h1 className="mb-6 max-w-4xl font-display text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl sr sr-up sr-line revealed">
              {copy.h1}
            </h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl sr sr-up revealed">
              {copy.heroSubheadBeforeSa}
              <Link to={saPath} className="font-medium text-[#E4CC7A] underline underline-offset-2 hover:text-[#C9A84C]">
                {copy.heroLinkSa}
              </Link>
              {copy.heroSubheadBeforeUae}
              <Link to={uaePath} className="font-medium text-[#E4CC7A] underline underline-offset-2 hover:text-[#C9A84C]">
                {copy.heroLinkUae}
              </Link>
              {copy.heroSubheadBeforeEg}
              <Link to={egyptPath} className="font-medium text-[#E4CC7A] underline underline-offset-2 hover:text-[#C9A84C]">
                {copy.heroLinkEg}
              </Link>
              {copy.heroSubheadAfter}
            </p>
            <div className="mb-10 flex flex-wrap gap-3 sr sr-up revealed">
              <Link
                to={contactPath}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#C9A84C] to-[#B8933E] px-6 py-3 text-sm font-semibold text-[#06101F] shadow-[0_4px_20px_rgba(201,168,76,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(201,168,76,0.35)] cursor-pointer"
              >
                {copy.ctaPrimary}
              </Link>
              <Link
                to={industriesHubPath}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-normal text-white/60 transition-colors hover:border-white/30 hover:text-white cursor-pointer"
              >
                {copy.ctaSecondary}
              </Link>
            </div>
            <ul
              className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sr sr-up revealed"
              aria-label="Company credentials"
            >
              {copy.metrics.map((metric) => (
                <li key={metric.label} className="rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-center">
                  <p className="font-display text-2xl font-semibold text-[#FFFEFB] md:text-3xl">{metric.value}</p>
                  <p className="mt-1 text-xs text-white/60 md:text-sm">{metric.label}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 sr sr-up revealed" aria-label="Compliance standards">
              {copy.compliance.map((badge) => (
                <span key={badge} className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        <PremiumComplianceRibbon />
        <GlobalReachSection />

        <section className="section-padding py-16 bg-cream-dark" ref={storyRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 sr sr-up sr-line">
              {copy.storyH2}
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mb-6 sr sr-up font-display">{copy.storyTagline}</p>
            <p className="text-sm text-muted-foreground mb-10 sr sr-up">
              {copy.langMirrorLead}{' '}
              {ABOUT_LANGUAGE_MIRROR.map(({ href, label }, i) => (
                <span key={href}>
                  {i > 0 ? ' · ' : null}
                  <Link to={href} className="text-primary font-medium hover:underline">
                    {label}
                  </Link>
                </span>
              ))}
            </p>

            <div className="space-y-12">
              <div className="space-y-5 text-muted-foreground leading-relaxed sr sr-left">
                <h3 className="text-lg font-display font-semibold text-foreground">{copy.storyAct1H3}</h3>
                <p>{copy.storyAct1P1}</p>
                <p>{copy.storyAct1P2}</p>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed sr sr-right">
                <h3 className="text-lg font-display font-semibold text-foreground">{copy.storyAct2H3}</h3>
                <p>{copy.storyAct2P1}</p>
                <p>
                  {copy.storyAct2P2BeforeLink}
                  <Link to={egyptPath} className="text-primary font-medium hover:underline">
                    {copy.storyAct2LinkCairo}
                  </Link>
                  {copy.storyAct2P2AfterLink}
                </p>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed sr sr-left">
                <h3 className="text-lg font-display font-semibold text-foreground">{copy.storyAct3H3}</h3>
                <p>{copy.storyAct3P1}</p>
                <p>
                  {copy.storyAct3P2BeforePharma}
                  <Link to={pharmaIndustriesPath} className="text-primary font-medium hover:underline">
                    {copy.storyAct3LinkPharma}
                  </Link>
                  {copy.storyAct3P2Mid1}
                  <Link to={industriesHubPath} className="text-primary font-medium hover:underline">
                    {copy.storyAct3LinkIndustries}
                  </Link>
                  {copy.storyAct3P2Mid2}
                  <Link to={methodologyPath} className="text-primary font-medium hover:underline">
                    {copy.storyAct3LinkMethodology}
                  </Link>
                  {copy.storyAct3P2After}
                </p>
              </div>
            </div>
          </div>
        </section>

        <IndustriesGatewaySection />

        <section className="section-padding py-16" ref={diffRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 sr sr-up sr-line">{copy.diffH2}</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl sr sr-up">{copy.diffIntro}</p>
            <div className="grid md:grid-cols-3 gap-8">
              {copy.differentiators.map((item, index) => {
                const Icon = DIFF_ICONS[index] ?? Globe;
                return (
                  <div key={item.title} className="bg-card border border-border rounded-xl p-8 sr sr-scale-up sr-spring hover-lift">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6" aria-hidden>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-cream-dark" ref={valuesRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-12 sr sr-up sr-line">{copy.valuesH2}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {copy.values.map((value, index) => {
                const Icon = VALUE_ICONS[index] ?? ShieldCheck;
                return (
                  <div key={value.title} className={`flex gap-5 sr ${index % 2 === 0 ? 'sr-left' : 'sr-right'} hover-lift`}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1" aria-hidden>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.bodyBeforeLink ? (
                          <>
                            {value.bodyBeforeLink}
                            <Link to={gccAccessPath} className="text-primary font-medium hover:underline">
                              {value.linkLabel}
                            </Link>
                            {value.bodyAfterLink}
                          </>
                        ) : (
                          value.body
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" ref={presenceRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 sr sr-up sr-line">{copy.presenceH2}</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl sr sr-up">{copy.presenceIntro}</p>
            <div className="grid md:grid-cols-3 gap-8">
              {copy.offices.map((office, index) => (
                <AboutOfficeBlock key={office.title} office={office} index={index} egyptPath={egyptPath} />
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
};

export default About;
