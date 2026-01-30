import { 
  TrendingUp, 
  Target, 
  Users, 
  Microscope, 
  Rocket, 
  BarChart3 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [TrendingUp, Target, Users, Microscope, Rocket, BarChart3];

type PrimaryArBlock = { title: string; lead: string; countries: { name: string; items: string[] }[]; deliverables: string };
type SecondaryArBlock = { title: string; intro: string; regions: { name: string; items: string[] }[]; note: string };

const ServicesSection = () => {
  const { t, language } = useLanguage();
  const rawPrimaryAr = 'servicePrimaryAr' in t.services ? (t.services as { servicePrimaryAr?: PrimaryArBlock | PrimaryArBlock[] }).servicePrimaryAr : undefined;
  const primaryBlocks: PrimaryArBlock[] = Array.isArray(rawPrimaryAr) ? rawPrimaryAr : (rawPrimaryAr ? [rawPrimaryAr] : []);
  const rawSecondaryAr = 'serviceSecondaryAr' in t.services ? (t.services as { serviceSecondaryAr?: SecondaryArBlock | SecondaryArBlock[] }).serviceSecondaryAr : undefined;
  const secondaryBlocks: SecondaryArBlock[] = Array.isArray(rawSecondaryAr) ? rawSecondaryAr : (rawSecondaryAr ? [rawSecondaryAr] : []);
  const showPrimaryAr = language === 'ar' && primaryBlocks.length > 0;
  const showSecondaryAr = language === 'ar' && secondaryBlocks.length > 0;
  const gridItems = showPrimaryAr ? t.services.items.slice(primaryBlocks.length) : t.services.items;

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
            const Icon = icons[showPrimaryAr ? index + primaryBlocks.length : index];
            return (
              <div
                key={index}
                className="group bg-background p-8 rounded-xl shadow-sm hover:shadow-elegant transition-all duration-500 border border-border hover:border-primary/20 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
