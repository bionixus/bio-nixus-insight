import { useState } from 'react';

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

/** Privacy-enhanced YouTube embed. Poster first — iframe loads only after play. */
export function YouTubeEmbed({ videoId, title, className = '' }: YouTubeEmbedProps) {
  const [active, setActive] = useState(false);
  const poster = youtubePosterUrl(videoId);

  if (!active) {
    return (
      <button
        type="button"
        className={`group relative aspect-video w-full bg-black text-left ${className}`.trim()}
        onClick={() => setActive(true)}
        aria-label={`Play video: ${title}`}
      >
        <img
          src={poster}
          alt=""
          width={1280}
          height={720}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
        />
        <span
          className="absolute inset-0 flex items-center justify-center bg-navy-deep/25"
          aria-hidden="true"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-warm text-navy-deep shadow-lg transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-7 w-7" fill="currentColor">
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
        </span>
      </button>
    );
  }

  return (
    <div className={`aspect-video w-full bg-black ${className}`.trim()}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`}
        title={title}
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export const BIONIXUS_HOME_YOUTUBE_ID = '9zPvYCZJQIY';

export const BIONIXUS_HOME_YOUTUBE_URL = `https://youtu.be/${BIONIXUS_HOME_YOUTUBE_ID}`;

export function youtubePosterUrl(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
