import { Link } from 'react-router-dom';
import type { ArPharmaLongFormSection } from '@/data/arPharmaDirectoryLongForm';

type Props = {
  sections: ArPharmaLongFormSection[];
  enPath: string;
};

export function ArPharmaDirectoryLongFormSections({ sections, enPath }: Props) {
  if (sections.length === 0) return null;

  return (
    <>
      {sections.map((section) => (
        <section key={section.id} className="section-padding py-16 bg-muted/20" id={section.id}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">{section.heading}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="section-padding py-8">
        <div className="container-wide max-w-5xl mx-auto text-sm text-muted-foreground">
          <p>
            للنسخة الإنجليزية الموسّعة مع جداول إضافية وأسئلة شائعة:{' '}
            <Link to={enPath} className="text-primary hover:underline font-medium">{enPath}</Link>
            . للبحث الأولي:{' '}
            <Link to="/contact" className="text-primary hover:underline font-medium">تواصل مع بيونيكسس</Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
