import { 
  TrendingUp, 
  Target, 
  Users, 
  Microscope, 
  Rocket, 
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { HomePageUiOverlay } from '@/lib/homePageUiStrings';
import { getLocalizedPathForLanguage, localizedContactPath } from '@/lib/seo';
import { HOME_SERVICE_PATHS } from '@/lib/homePageJsonLd';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';

type ServicesOverlayCopy = NonNullable<HomePageUiOverlay['services']>;

const icons = [TrendingUp, Target, Users, Microscope, Rocket, BarChart3];

const ICON_WELLS = [
  'bg-[#EBF4FF] text-[#2563EB]',
  'bg-[#E6FAF8] text-[#0EA5A0]',
  'bg-[#FFF0ED] text-[#E06852]',
  'bg-[#FDF6E3] text-[#C9A84C]',
  'bg-[#E8EEF6] text-[#12284A]',
  'bg-[#F3F1EC] text-[#3D3830]',
] as const;

type PrimaryArBlock = { title: string; lead: string; countries: { name: string; items: string[] }[]; deliverables: string };
type SecondaryArBlock = { title: string; intro: string; regions: { name: string; items: string[] }[]; note: string };
type PrimaryDeBlock = { title: string; lead: string; regions: { name: string; items: string[] }[]; deliverables?: string };
type SecondaryDeBlock = { title: string; intro: string; items: string[] };

const ServicesSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 100 });
  // getTranslations layers homePageUiStrings over t.services, but the English bundle type
  // does not declare those keys, so read them through the overlay shape.
  const servicesCopy = t.services as typeof t.services & ServicesOverlayCopy;
  const rawPrimaryAr = 'servicePrimaryAr' in t.services ? (t.services as { servicePrimaryAr?: PrimaryArBlock | PrimaryArBlock[] }).servicePrimaryAr : undefined;
  const primaryBlocks: PrimaryArBlock[] = Array.isArray(rawPrimaryAr) ? rawPrimaryAr : (rawPrimaryAr ? [rawPrimaryAr] : []);
  const rawSecondaryAr = 'serviceSecondaryAr' in t.services ? (t.services as { serviceSecondaryAr?: SecondaryArBlock | SecondaryArBlock[] }).serviceSecondaryAr : undefined;
  const secondaryBlocks: SecondaryArBlock[] = Array.isArray(rawSecondaryAr) ? rawSecondaryAr : (rawSecondaryAr ? [rawSecondaryAr] : []);
  const rawPrimaryDe = 'servicePrimaryDe' in t.services ? (t.services as { servicePrimaryDe?: PrimaryDeBlock | PrimaryDeBlock[] }).servicePrimaryDe : undefined;
  const primaryDeBlocks: PrimaryDeBlock[] = Array.isArray(rawPrimaryDe) ? rawPrimaryDe : (rawPrimaryDe ? [rawPrimaryDe] : []);
  const rawSecondaryDe = 'serviceSecondaryDe' in t.services ? (t.services as { serviceSecondaryDe?: SecondaryDeBlock | SecondaryDeBlock[] }).serviceSecondaryDe : undefined;
  const secondaryDeBlocks: SecondaryDeBlock[] = Array.isArray(rawSecondaryDe) ? rawSecondaryDe : (rawSecondaryDe ? [rawSecondaryDe] : []);
  const rawPrimaryFr = 'servicePrimaryFr' in t.services ? (t.services as { servicePrimaryFr?: PrimaryDeBlock | PrimaryDeBlock[] }).servicePrimaryFr : undefined;
  const primaryFrBlocks: PrimaryDeBlock[] = Array.isArray(rawPrimaryFr) ? rawPrimaryFr : (rawPrimaryFr ? [rawPrimaryFr] : []);
  const rawSecondaryFr = 'serviceSecondaryFr' in t.services ? (t.services as { serviceSecondaryFr?: SecondaryDeBlock | SecondaryDeBlock[] }).serviceSecondaryFr : undefined;
  const secondaryFrBlocks: SecondaryDeBlock[] = Array.isArray(rawSecondaryFr) ? rawSecondaryFr : (rawSecondaryFr ? [rawSecondaryFr] : []);
  const rawPrimaryEs = 'servicePrimaryEs' in t.services ? (t.services as { servicePrimaryEs?: PrimaryDeBlock | PrimaryDeBlock[] }).servicePrimaryEs : undefined;
  const primaryEsBlocks: PrimaryDeBlock[] = Array.isArray(rawPrimaryEs) ? rawPrimaryEs : (rawPrimaryEs ? [rawPrimaryEs] : []);
  const rawSecondaryEs = 'serviceSecondaryEs' in t.services ? (t.services as { serviceSecondaryEs?: SecondaryDeBlock | SecondaryDeBlock[] }).serviceSecondaryEs : undefined;
  const secondaryEsBlocks: SecondaryDeBlock[] = Array.isArray(rawSecondaryEs) ? rawSecondaryEs : (rawSecondaryEs ? [rawSecondaryEs] : []);
  const rawPrimaryZh = 'servicePrimaryZh' in t.services ? (t.services as { servicePrimaryZh?: PrimaryDeBlock | PrimaryDeBlock[] }).servicePrimaryZh : undefined;
  const primaryZhBlocks: PrimaryDeBlock[] = Array.isArray(rawPrimaryZh) ? rawPrimaryZh : (rawPrimaryZh ? [rawPrimaryZh] : []);
  const rawSecondaryZh = 'serviceSecondaryZh' in t.services ? (t.services as { serviceSecondaryZh?: SecondaryDeBlock | SecondaryDeBlock[] }).serviceSecondaryZh : undefined;
  const secondaryZhBlocks: SecondaryDeBlock[] = Array.isArray(rawSecondaryZh) ? rawSecondaryZh : (rawSecondaryZh ? [rawSecondaryZh] : []);
  const showPrimaryAr = language === 'ar' && primaryBlocks.length > 0;
  const showSecondaryAr = language === 'ar' && secondaryBlocks.length > 0;
  const showPrimaryDe = language === 'de' && primaryDeBlocks.length > 0;
  const showSecondaryDe = language === 'de' && secondaryDeBlocks.length > 0;
  const showPrimaryFr = language === 'fr' && primaryFrBlocks.length > 0;
  const showSecondaryFr = language === 'fr' && secondaryFrBlocks.length > 0;
  const showPrimaryEs = language === 'es' && primaryEsBlocks.length > 0;
  const showSecondaryEs = language === 'es' && secondaryEsBlocks.length > 0;
  const showPrimaryZh = language === 'zh' && primaryZhBlocks.length > 0;
  const showSecondaryZh = language === 'zh' && secondaryZhBlocks.length > 0;
  const gridItems = showPrimaryFr || showPrimaryEs || showPrimaryZh
    ? []
    : showPrimaryAr
      ? t.services.items.slice(primaryBlocks.length)
      : showPrimaryDe
        ? t.services.items.slice(primaryDeBlocks.length)
        : t.services.items;

  return (
    <section id="services" className="premium-home-cream section-padding" ref={sectionRef}>
      <div className="container-wide max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="sr sr-up">
            <PremiumEyebrow>{t.nav.services}</PremiumEyebrow>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-tight text-[#0C1B33] mb-5 sr sr-up">
            {t.services.title}
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed text-[#7A7267] sr sr-up">
            {t.services.subtitle}
          </p>
        </div>

        {/* Arabic primary blocks (quantitative + qualitative MENA content) */}
        {showPrimaryAr && primaryBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="service-primary premium-card mb-10 md:mb-12 animate-fade-up"
            dir="rtl"
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
              {block.title}
            </h3>
            <p className="service-lead text-muted-foreground leading-relaxed mb-8">
              {block.lead}
            </p>
            <div className="service-details space-y-6">
              {block.countries.map((country, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-foreground mb-2 mt-6 first:mt-0">
                    {country.name}:
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {country.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="deliverables mt-6 pt-4 border-t border-border">
                <strong className="text-foreground">{block.deliverables}</strong>
              </div>
            </div>
          </div>
        ))}

        {/* German primary blocks */}
        {showPrimaryDe && primaryDeBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="service-primary premium-card mb-10 md:mb-12 animate-fade-up"
            lang="de"
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
              {block.title}
            </h3>
            <p className="service-lead text-muted-foreground leading-relaxed mb-8">
              {block.lead}
            </p>
            <div className="service-details space-y-6">
              {block.regions.map((region, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-foreground mb-2 mt-6 first:mt-0">
                    {region.name}:
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {region.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {block.deliverables && (
                <div className="deliverables mt-6 pt-4 border-t border-border">
                  <strong className="text-foreground">{block.deliverables}</strong>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* German secondary blocks */}
        {showSecondaryDe && secondaryDeBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="service-secondary premium-card mb-10 md:mb-12 animate-fade-up"
            lang="de"
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
              {block.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {block.intro}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* French primary blocks */}
        {showPrimaryFr && primaryFrBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="service-primary premium-card mb-10 md:mb-12 animate-fade-up"
            lang="fr"
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
              {block.title}
            </h3>
            <p className="service-lead text-muted-foreground leading-relaxed mb-8">
              {block.lead}
            </p>
            <div className="service-details space-y-6">
              {block.regions.map((region, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-foreground mb-2 mt-6 first:mt-0">
                    {region.name} :
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {region.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {block.deliverables && (
                <div className="deliverables mt-6 pt-4 border-t border-border">
                  <strong className="text-foreground">{block.deliverables}</strong>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* French secondary blocks */}
        {showSecondaryFr && secondaryFrBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="service-secondary premium-card mb-10 md:mb-12 animate-fade-up"
            lang="fr"
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
              {block.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {block.intro}
            </p>
            {block.items.length > 0 && (
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Spanish primary blocks */}
        {showPrimaryEs && primaryEsBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="service-primary premium-card mb-10 md:mb-12 animate-fade-up"
            lang="es"
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
              {block.title}
            </h3>
            <p className="service-lead text-muted-foreground leading-relaxed mb-8">
              {block.lead}
            </p>
            <div className="service-details space-y-6">
              {block.regions.map((region, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-foreground mb-2 mt-6 first:mt-0">
                    {region.name}:
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {region.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {block.deliverables && (
                <div className="deliverables mt-6 pt-4 border-t border-border">
                  <strong className="text-foreground">{block.deliverables}</strong>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Spanish secondary blocks */}
        {showSecondaryEs && secondaryEsBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="service-secondary premium-card mb-10 md:mb-12 animate-fade-up"
            lang="es"
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
              {block.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {block.intro}
            </p>
            {block.items.length > 0 && (
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Chinese primary blocks */}
        {showPrimaryZh && primaryZhBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="service-primary premium-card mb-10 md:mb-12 animate-fade-up"
            lang="zh-CN"
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
              {block.title}
            </h3>
            <p className="service-lead text-muted-foreground leading-relaxed mb-8">
              {block.lead}
            </p>
            <div className="service-details space-y-6">
              {block.regions.map((region, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-foreground mb-2 mt-6 first:mt-0">
                    {region.name}：
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {region.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {block.deliverables && (
                <div className="deliverables mt-6 pt-4 border-t border-border">
                  <strong className="text-foreground">{block.deliverables}</strong>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Chinese secondary blocks */}
        {showSecondaryZh && secondaryZhBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="service-secondary premium-card mb-10 md:mb-12 animate-fade-up"
            lang="zh-CN"
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
              {block.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {block.intro}
            </p>
            {block.items.length > 0 && (
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Arabic secondary blocks (Market Access, Clinical Trials, etc.) */}
        {showSecondaryAr && secondaryBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="service-secondary premium-card mb-10 md:mb-12 animate-fade-up"
            dir="rtl"
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
              {block.title}
            </h3>
            <p className="service-intro text-muted-foreground leading-relaxed mb-8">
              {block.intro}
            </p>
            <div className="service-overview space-y-6">
              {block.regions.map((region, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-foreground mb-2 mt-6 first:mt-0">
                    {region.name}:
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {region.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="service-note mt-6 pt-4 border-t border-border text-muted-foreground italic">
                {block.note}
              </p>
            </div>
          </div>
        ))}

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {gridItems.map((service, index) => {
            const iconIndex =
              showPrimaryFr || showPrimaryEs || showPrimaryZh ? index : showPrimaryAr ? index + primaryBlocks.length : showPrimaryDe ? index + primaryDeBlocks.length : index;
            const Icon = icons[iconIndex];
            const rawLink = HOME_SERVICE_PATHS[iconIndex];
            const linkHref = rawLink ? getLocalizedPathForLanguage(rawLink, language) : null;
            const showCountryDepthBadge = iconIndex === 4;
            const well = ICON_WELLS[iconIndex] ?? ICON_WELLS[0];

            const cardContent = (
              <>
                {showCountryDepthBadge ? (
                  <span className="mb-4 inline-flex rounded-full bg-[#C9A84C]/15 px-2.5 py-1 text-[11px] font-semibold text-[#9A7A2E]">
                    {servicesCopy.countryDepthBadge}
                  </span>
                ) : null}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${well}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 font-display text-xl font-medium tracking-tight text-[#0C1B33] transition-colors group-hover:text-[#C9A84C]">
                  {service.title}
                </h3>
                <p className="service-card-muted text-[15px] font-light leading-relaxed text-[#7A7267]">
                  {service.description}
                </p>
                {'bullets' in service && Array.isArray((service as { bullets?: string[] }).bullets) && (
                  <ul className="service-card-muted mt-4 list-disc space-y-1 ps-5 text-[15px] font-light leading-relaxed text-[#7A7267]">
                    {(service as { bullets: string[] }).bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
                {linkHref ? (
                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-[#C9A84C] transition-all group-hover:gap-3">
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
                  </span>
                ) : null}
              </>
            );

            return linkHref ? (
              <Link
                key={index}
                to={linkHref}
                className="premium-card group flex h-full flex-col sr sr-scale-up sr-spring cursor-pointer"
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={index}
                className="premium-card group flex h-full flex-col sr sr-scale-up sr-spring"
              >
                {cardContent}
              </div>
            );
          })}
        </div>

        <div className="premium-card mt-12 text-center sr sr-up">
          <p className="mb-6 font-display text-xl font-medium text-[#0C1B33]">{servicesCopy.bottomCtaPrompt}</p>
          <Link to={localizedContactPath(language)} className="premium-gold-btn">
            {servicesCopy.bottomCtaButton}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
