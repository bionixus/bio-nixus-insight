import type { MediaFigure } from '@/data/mediaAssets';
import { OptimizedImage } from '@/components/media/OptimizedImage';

type MediaVisualBriefingProps = {
  heading: string;
  figures: MediaFigure[];
  className?: string;
};

export function MediaVisualBriefing({ heading, figures, className = '' }: MediaVisualBriefingProps) {
  if (!figures.length) return null;

  return (
    <section
      className={`section-padding py-8 ${className}`}
      aria-labelledby="visual-briefing-heading"
    >
      <div className="container-wide max-w-6xl mx-auto">
        <h2 id="visual-briefing-heading" className="text-2xl font-display font-semibold text-foreground mb-6">
          {heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {figures.map((figure) => (
            <figure
              key={`${figure.src}-${figure.alt.slice(0, 32)}`}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <OptimizedImage
                src={figure.src}
                alt={figure.alt}
                width={figure.width}
                height={figure.height}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <figcaption className="p-4 text-xs text-muted-foreground leading-relaxed">
                {figure.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
