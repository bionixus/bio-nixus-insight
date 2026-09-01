import { Link } from 'react-router-dom';
import type { ProofVideoConfig } from '@/data/mediaAssets';
import { OptimizedImage } from '@/components/media/OptimizedImage';
import { YouTubeEmbed } from '@/components/media/YouTubeEmbed';

type ProofVideoEmbedProps = {
  config: ProofVideoConfig;
  className?: string;
  /** Dedicated Google watch-page URL (e.g. /videos/healthcare-market-research-overview). */
  watchHref?: string;
  watchLabel?: string;
};

export function ProofVideoEmbed({
  config,
  className = '',
  watchHref,
  watchLabel = 'Open full watch page',
}: ProofVideoEmbedProps) {
  const { src, youtubeId, poster, title, description, transcript, fallbackHref, fallbackLabel } = config;

  return (
    <section className={`section-padding py-8 ${className}`} aria-labelledby="proof-video-heading">
      <div className="container-wide max-w-4xl mx-auto">
        <h2 id="proof-video-heading" className="mb-3 font-display text-2xl md:text-3xl font-light tracking-tight text-[#0C1B33]">
          {title}
        </h2>
        <p className="mb-8 text-base font-light leading-relaxed text-[#7A7267]">{description}</p>

        {youtubeId ? (
          <figure className="overflow-hidden rounded-[20px] border border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_16px_60px_rgba(6,16,31,0.06)]">
            <YouTubeEmbed videoId={youtubeId} title={title} />
            <figcaption className="p-5 text-xs font-light leading-relaxed text-[#7A7267]">
              {transcript}
              {watchHref ? (
                <p className="mt-3">
                  <Link to={watchHref} className="text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    {watchLabel}
                  </Link>
                </p>
              ) : null}
            </figcaption>
          </figure>
        ) : src ? (
          <figure className="overflow-hidden rounded-[20px] border border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_16px_60px_rgba(6,16,31,0.06)]">
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
            <figcaption className="p-5 text-xs font-light leading-relaxed text-[#7A7267]">
              {transcript}
              {watchHref ? (
                <p className="mt-3">
                  <Link to={watchHref} className="text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    {watchLabel}
                  </Link>
                </p>
              ) : null}
            </figcaption>
          </figure>
        ) : (
          <figure className="overflow-hidden rounded-[20px] border border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_16px_60px_rgba(6,16,31,0.06)]">
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
