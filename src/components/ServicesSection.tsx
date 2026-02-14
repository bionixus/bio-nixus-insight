import { 
  TrendingUp, 
  Target, 
  Users, 
  Microscope, 
  Rocket, 
  BarChart3 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [TrendingUp, Target, Users, Microscope, Rocket, BarChart3];

/** Maps each service card index to its dedicated page slug (or null for no link). */
const serviceLinks: (string | null)[] = [
  '/services/quantitative-research',
  '/services/qualitative-research',
  '/services/market-access',
  '/services/kol-stakeholder-mapping',
  null, // Geographic Coverage — no dedicated page
  null, // Methodology & Compliance — no dedicated page
];

type PrimaryArBlock = { title: string; lead: string; countries: { name: string; items: string[] }[]; deliverables: string };
type SecondaryArBlock = { title: string; intro: string; regions: { name: string; items: string[] }[]; note: string };
type PrimaryDeBlock = { title: string; lead: string; regions: { name: string; items: string[] }[]; deliverables?: string };
type SecondaryDeBlock = { title: string; intro: string; items: string[] };

const ServicesSection = () => {
  const { t, language } = useLanguage();
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
    <section id="services" className="section-padding bg-cream">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 animate-fade-up">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200">
            {t.services.subtitle}
          </p>
        </div>

        {/* Arabic primary blocks (quantitative + qualitative MENA content) */}
        {showPrimaryAr && primaryBlocks.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="service-primary mb-12 md:mb-16 rounded-xl bg-background p-8 md:p-10 shadow-sm border border-border animate-fade-up"
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
            className="service-primary mb-12 md:mb-16 rounded-xl bg-background p-8 md:p-10 shadow-sm border border-border animate-fade-up"
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
            className="service-secondary mb-12 md:mb-16 rounded-xl bg-background p-8 md:p-10 shadow-sm border border-border animate-fade-up"
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
            className="service-primary mb-12 md:mb-16 rounded-xl bg-background p-8 md:p-10 shadow-sm border border-border animate-fade-up"
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
            className="service-secondary mb-12 md:mb-16 rounded-xl bg-background p-8 md:p-10 shadow-sm border border-border animate-fade-up"
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
            className="service-primary mb-12 md:mb-16 rounded-xl bg-background p-8 md:p-10 shadow-sm border border-border animate-fade-up"
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
            className="service-secondary mb-12 md:mb-16 rounded-xl bg-background p-8 md:p-10 shadow-sm border border-border animate-fade-up"
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
            className="service-primary mb-12 md:mb-16 rounded-xl bg-background p-8 md:p-10 shadow-sm border border-border animate-fade-up"
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
            className="service-secondary mb-12 md:mb-16 rounded-xl bg-background p-8 md:p-10 shadow-sm border border-border animate-fade-up"
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
            className="service-secondary mb-12 md:mb-16 rounded-xl bg-background p-8 md:p-10 shadow-sm border border-border animate-fade-up"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {gridItems.map((service, index) => {
            const iconIndex =
              showPrimaryFr || showPrimaryEs || showPrimaryZh ? index : showPrimaryAr ? index + primaryBlocks.length : showPrimaryDe ? index + primaryDeBlocks.length : index;
            const Icon = icons[iconIndex];
            const linkHref = serviceLinks[iconIndex] || null;

            const cardContent = (
              <>
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="service-card-muted text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                {'bullets' in service && Array.isArray((service as { bullets?: string[] }).bullets) && (
                  <ul className="service-card-muted mt-4 list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                    {(service as { bullets: string[] }).bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </>
            );

            return linkHref ? (
              <Link
                key={index}
                to={linkHref}
                className="service-card group animate-fade-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={index}
                className="service-card group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
