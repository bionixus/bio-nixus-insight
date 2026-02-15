import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type CoverageSection = { heading: string; items?: string[]; text?: string };
type CountryCard = {
  name: string;
  featured?: boolean;
  marketSize?: string;
  sections: CoverageSection[];
};
type GeographicCoverageAr = { title: string; countries: CountryCard[] };
type RegionDe = {
  name: string;
  class?: string;
  countries?: { name: string; items: string[] }[];
  subregions?: { name: string; items: string[] }[];
};
type GeographicCoverageDe = { title: string; regions: RegionDe[] };

type GeographicCoverageFr = GeographicCoverageDe;
type GeographicCoverageEs = GeographicCoverageDe;
type GeographicCoverageZh = GeographicCoverageDe;

const GeographicCoverageSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const dataEn = 'geographicCoverageEn' in t ? (t as { geographicCoverageEn?: GeographicCoverageDe }).geographicCoverageEn : undefined;
  const dataAr = 'geographicCoverageAr' in t ? (t as { geographicCoverageAr?: GeographicCoverageAr }).geographicCoverageAr : undefined;
  const dataDe = 'geographicCoverageDe' in t ? (t as { geographicCoverageDe?: GeographicCoverageDe }).geographicCoverageDe : undefined;
  const dataFr = 'geographicCoverageFr' in t ? (t as { geographicCoverageFr?: GeographicCoverageFr }).geographicCoverageFr : undefined;
  const dataEs = 'geographicCoverageEs' in t ? (t as { geographicCoverageEs?: GeographicCoverageEs }).geographicCoverageEs : undefined;
  const dataZh = 'geographicCoverageZh' in t ? (t as { geographicCoverageZh?: GeographicCoverageZh }).geographicCoverageZh : undefined;

  // English geographic coverage
  if (language === 'en' && dataEn) {
    return (
      <section
        id="geographic-coverage"
        className="geographic-coverage section-padding bg-muted/30"
        lang="en"
        ref={sectionRef}
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 sr sr-up sr-line sr-line-center">
            {dataEn.title}
          </h2>
          <div className="region-overview space-y-10">
            {dataEn.regions.map((region, i) => (
              <div key={i} className={`region ${region.class || ''} sr sr-up`}>
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  {region.name}
                </h3>
                {region.countries && (
                  <div className="country-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {region.countries.map((country, j) => (
                      <div key={j} className="country rounded-xl bg-background p-6 shadow-sm border border-border sr sr-scale-up hover-lift">
                        <h4 className="font-semibold text-foreground mb-3">{country.name}</h4>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                          {country.items.map((item, k) => (
                            <li key={k}>{item}</li>
                          ))}
                        </ul>
                        {country.name === 'Kuwait' && (
                          <Link to="/pharmaceutical-companies-kuwait" className="inline-block mt-3 text-xs font-medium text-primary hover:underline">
                            Pharma industry guide &rarr;
                          </Link>
                        )}
                        {country.name === 'Saudi Arabia' && (
                          <Link to="/pharmaceutical-companies-saudi-arabia" className="inline-block mt-3 text-xs font-medium text-primary hover:underline">
                            Pharma industry guide &rarr;
                          </Link>
                        )}
                        {country.name === 'UAE' && (
                          <Link to="/pharmaceutical-companies-uae" className="inline-block mt-3 text-xs font-medium text-primary hover:underline">
                            Pharma industry guide &rarr;
                          </Link>
                        )}
                        {country.name === 'Qatar' && (
                          <Link to="/pharmaceutical-companies-qatar" className="inline-block mt-3 text-xs font-medium text-primary hover:underline">
                            Pharma industry guide &rarr;
                          </Link>
                        )}
                        {country.name === 'Bahrain' && (
                          <Link to="/pharmaceutical-companies-bahrain" className="inline-block mt-3 text-xs font-medium text-primary hover:underline">
                            Pharma industry guide &rarr;
                          </Link>
                        )}
                        {country.name === 'Oman' && (
                          <Link to="/pharmaceutical-companies-oman" className="inline-block mt-3 text-xs font-medium text-primary hover:underline">
                            Pharma industry guide &rarr;
                          </Link>
                        )}
                        {country.name === 'Egypt' && (
                          <Link to="/pharmaceutical-companies-egypt" className="inline-block mt-3 text-xs font-medium text-primary hover:underline">
                            Pharma industry guide &rarr;
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chinese geographic coverage
  if (language === 'zh' && dataZh) {
    return (
      <section
        id="geographic-coverage"
        className="geographic-coverage section-padding bg-muted/30"
        lang="zh-CN"
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
            {dataZh.title}
          </h2>
          <div className="regions-grid space-y-10">
            {dataZh.regions.map((region, i) => (
              <div key={i} className={`region ${region.class || ''}`}>
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  {region.name}
                </h3>
                {region.countries ? (
                  <div className="countries-compact grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {region.countries.map((country, j) => (
                      <div key={j} className="country rounded-xl bg-background p-6 shadow-sm border border-border">
                        <h4 className="font-semibold text-foreground mb-3">{country.name}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {country.items.join(' ')}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : region.subregions ? (
                  <div className="subregions space-y-6">
                    {region.subregions.map((sub, j) => (
                      <div key={j} className="subregion">
                        <h4 className="font-semibold text-foreground mb-2">{sub.name}：</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {sub.items.join(' ')}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Spanish geographic coverage
  if (language === 'es' && dataEs) {
    return (
      <section
        id="geographic-coverage"
        className="geographic-coverage section-padding bg-muted/30"
        lang="es"
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
            {dataEs.title}
          </h2>
          <div className="regions-grid space-y-10">
            {dataEs.regions.map((region, i) => (
              <div key={i} className={`region ${region.class || ''}`}>
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  {region.name}
                </h3>
                {region.countries ? (
                  <div className="countries-compact grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {region.countries.map((country, j) => (
                      <div key={j} className="country rounded-xl bg-background p-6 shadow-sm border border-border">
                        <h4 className="font-semibold text-foreground mb-3">{country.name}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {country.items.join(' ')}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : region.subregions ? (
                  <div className="subregions space-y-6">
                    {region.subregions.map((sub, j) => (
                      <div key={j} className="subregion">
                        <h4 className="font-semibold text-foreground mb-2">{sub.name}:</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {sub.items.join(' ')}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // French geographic coverage
  if (language === 'fr' && dataFr) {
    return (
      <section
        id="geographic-coverage"
        className="geographic-coverage section-padding bg-muted/30"
        lang="fr"
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
            {dataFr.title}
          </h2>
          <div className="regions-grid space-y-10">
            {dataFr.regions.map((region, i) => (
              <div key={i} className={`region ${region.class || ''}`}>
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  {region.name}
                </h3>
                {region.countries ? (
                  <div className="countries-compact grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {region.countries.map((country, j) => (
                      <div key={j} className="country rounded-xl bg-background p-6 shadow-sm border border-border">
                        <h4 className="font-semibold text-foreground mb-3">{country.name}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {country.items.join(' ')}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : region.subregions ? (
                  <div className="subregions space-y-6">
                    {region.subregions.map((sub, j) => (
                      <div key={j} className="subregion">
                        <h4 className="font-semibold text-foreground mb-2">{sub.name} :</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {sub.items.join(' ')}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // German geographic coverage
  if (language === 'de' && dataDe) {
    return (
      <section
        id="geographic-coverage"
        className="geographic-coverage section-padding bg-muted/30"
        lang="de"
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
            {dataDe.title}
          </h2>
          <div className="region-overview space-y-10">
            {dataDe.regions.map((region, i) => (
              <div key={i} className={`region ${region.class || ''}`}>
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  {region.name}
                </h3>
                {region.countries ? (
                  <div className="country-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {region.countries.map((country, j) => (
                      <div key={j} className="country rounded-xl bg-background p-6 shadow-sm border border-border">
                        <h4 className="font-semibold text-foreground mb-3">{country.name}</h4>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                          {country.items.map((item, k) => (
                            <li key={k}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : region.subregions ? (
                  <div className="space-y-6">
                    {region.subregions.map((sub, j) => (
                      <div key={j} className="subregion">
                        <h4 className="font-semibold text-foreground mb-2">{sub.name}</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {sub.items.map((item, k) => (
                            <li key={k}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Arabic geographic coverage
  if (language !== 'ar' || !dataAr) return null;

  return (
    <section
      id="geographic-coverage"
      className="geographic-coverage section-padding bg-muted/30"
      dir="rtl"
    >
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
          {dataAr.title}
        </h2>
        <div className="country-details grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {dataAr.countries.map((country, i) => (
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
