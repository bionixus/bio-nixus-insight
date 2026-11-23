import { Link } from 'react-router-dom';
import type { ArPharmaCountrySlug } from '@/data/arPharmaDirectories';
import { getArPharmaDeepSections } from '@/data/arPharmaDeepSections';

type Props = {
  countrySlug: ArPharmaCountrySlug;
  enPath: string;
};

export function ArPharmaDeepGuide({ countrySlug, enPath }: Props) {
  const sections = getArPharmaDeepSections(countrySlug);
  if (sections.length === 0) return null;

  return (
    <>
      {sections.map((section) => (
        <section
          key={section.id}
          className={`section-padding py-16 ${section.tinted ? 'bg-muted/30' : ''}`}
          id={section.id}
        >
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">{section.title}</h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="list-disc pr-6 space-y-2 text-sm">
                  {section.bullets.map((item) => (
                    <li key={item.slice(0, 40)}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            {section.id === 'market-overview' ? (
              <p className="mt-6 text-sm text-muted-foreground max-w-4xl">
                للمقارنة الإقليمية راجع{' '}
                <Link to="/ar/healthcare-market-research" className="text-primary hover:underline font-medium">
                  أبحاث السوق الصحية بالعربية
                </Link>
                ، وللنسخة الإنجليزية الأطول{' '}
                <Link to={enPath} className="text-primary hover:underline font-medium">
                  {enPath}
                </Link>
                .
              </p>
            ) : null}
          </div>
        </section>
      ))}
    </>
  );
}