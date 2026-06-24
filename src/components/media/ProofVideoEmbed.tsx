import { Link } from 'react-router-dom';
import type { ProofVideoConfig } from '@/data/mediaAssets';
import { OptimizedImage } from '@/components/media/OptimizedImage';

type ProofVideoEmbedProps = {
  config: ProofVideoConfig;
  className?: string;
};

export function ProofVideoEmbed({ config, className = '' }: ProofVideoEmbedProps) {
  const { src, poster, title, description, transcript, fallbackHref, fallbackLabel } = config;

  return (
    <section className={`section-padding py-8 ${className}`} aria-labelledby="proof-video-heading">
      <div className="container-wide max-w-4xl mx-auto">
        <h2 id="proof-video-heading" className="text-2xl font-display font-semibold text-foreground mb-3">
          {title}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

        {src ? (
          <figure className="rounded-xl border border-border bg-card overflow-hidden">
            <video
              controls
              preload="none"
              poster={poster}
              width={1280}
              height={720}
              className="w-full aspect-video bg-muted"
            >
              <source src={src} type="video/mp4" />
              <track kind="captions" />
            </video>
            <figcaption className="p-4 text-xs text-muted-foreground leading-relaxed">
              {transcript}
            </figcaption>
          </figure>
        ) : (
          <figure className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="relative">
              <OptimizedImage
                src={poster}
                alt={`${title} — video poster`}
                width={1280}
                height={720}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              {fallbackHref && fallbackLabel ? (
                <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/40">
                  <Link
                    to={fallbackHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-warm text-navy-deep font-semibold hover:bg-gold-light transition-colors"
                  >
                    {fallbackLabel}
                  </Link>
                </div>
              ) : null}
            </div>
            <figcaption className="p-4 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground block mb-1">Transcript</strong>
              {transcript}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
