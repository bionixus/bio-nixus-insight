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
        <h2 id="visual-briefing-heading" className="mb-8 font-display text-2xl md:text-3xl font-light tracking-tight text-[#0C1B33]">
          {heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {figures.map((figure) => (
            <figure
              key={`${figure.src}-${figure.alt.slice(0, 32)}`}
              className="premium-card overflow-hidden p-0"
            >
              <OptimizedImage
                src={figure.src}
                alt={figure.alt}
                width={figure.width}
                height={figure.height}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <figcaption className="p-5 text-xs font-light leading-relaxed text-[#7A7267]">
                {figure.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
