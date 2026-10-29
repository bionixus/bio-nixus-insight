import { Link } from 'react-router-dom';
import { HEALTHCARE_MR_COUNTRY_DEPTH } from '@/data/seo/healthcareMrCountryDepthContent';

type Props = {
  countryKey: keyof typeof HEALTHCARE_MR_COUNTRY_DEPTH;
};

export function HealthcareMrCountryDepthSections({ countryKey }: Props) {
  const depth = HEALTHCARE_MR_COUNTRY_DEPTH[countryKey];
  if (!depth) return null;

  return (
    <>
      {depth.sections.map((section, index) => (
        <section
          key={section.id}
          className={`section-padding py-10 ${index % 2 === 1 ? 'bg-muted/20' : ''}`}
          id={section.id}
        >
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">{section.title}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            {section.bullets?.length ? (
              <ul className="mt-6 grid sm:grid-cols-1 gap-2">
                {section.bullets.map((point) => (
                  <li key={point.slice(0, 40)} className="flex gap-2 text-muted-foreground leading-relaxed">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}
      <section className="section-padding py-6 bg-muted/10">
        <div className="container-wide max-w-5xl mx-auto text-muted-foreground leading-relaxed">
          <p>
            Cross-link early to the{' '}
            <Link to="/healthcare-market-research" className="text-primary underline font-medium">
              {depth.hubLinkLabel}
            </Link>{' '}
            for therapy hubs, country reports, and service modules.
          </p>
        </div>
      </section>
    </>
  );
}
