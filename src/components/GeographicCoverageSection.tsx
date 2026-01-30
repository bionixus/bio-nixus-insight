import { useLanguage } from '@/contexts/LanguageContext';

type CoverageSection = { heading: string; items?: string[]; text?: string };
type CountryCard = {
  name: string;
  featured?: boolean;
  marketSize?: string;
  sections: CoverageSection[];
};
type GeographicCoverageAr = { title: string; countries: CountryCard[] };

const GeographicCoverageSection = () => {
  const { t, language } = useLanguage();
  const data = 'geographicCoverageAr' in t ? (t as { geographicCoverageAr?: GeographicCoverageAr }).geographicCoverageAr : undefined;

  if (language !== 'ar' || !data) return null;

  return (
    <section
      id="geographic-coverage"
      className="geographic-coverage section-padding bg-muted/30"
      dir="rtl"
    >
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
          {data.title}
        </h2>
        <div className="country-details grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {data.countries.map((country, i) => (
            <div
              key={i}
              className={`country-card rounded-xl bg-background p-6 md:p-8 shadow-sm border border-border animate-fade-up ${country.featured ? 'featured border-primary/30 ring-1 ring-primary/10' : ''}`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
                {country.name}
              </h3>
              {country.marketSize && (
                <p className="market-size text-primary font-medium text-sm mb-4">
                  {country.marketSize}
                </p>
              )}
              <div className="space-y-4">
                {country.sections.map((section, j) => (
                  <div key={j}>
                    <h4 className="font-semibold text-foreground text-sm mb-2">
                      {section.heading}:
                    </h4>
                    {section.items ? (
                      <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                        {section.items.map((item, k) => (
                          <li key={k}>{item}</li>
                        ))}
                      </ul>
                    ) : section.text ? (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {section.text}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeographicCoverageSection;
