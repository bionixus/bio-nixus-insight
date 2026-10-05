import { Link } from 'react-router-dom';
import type { ReportAccessChannelNarrative } from '@/data/reportAccessChannelNarratives';

type Props = {
  narrative: ReportAccessChannelNarrative;
  hubLink?: { to: string; label: string };
};

export function ReportAccessChannelSection({ narrative, hubLink }: Props) {
  return (
    <section className="section-padding" id={narrative.sectionId}>
      <div className="container-wide max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">{narrative.title}</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {narrative.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 56)}>{paragraph}</p>
          ))}
          {hubLink ? (
            <p>
              <Link to={hubLink.to} className="text-primary hover:underline font-medium">{hubLink.label}</Link>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
