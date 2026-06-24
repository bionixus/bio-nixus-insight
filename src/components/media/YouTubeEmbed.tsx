type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

/** Privacy-enhanced YouTube embed with native controls (sound on user play). */
export function YouTubeEmbed({ videoId, title, className = '' }: YouTubeEmbedProps) {
  return (
    <div className={`aspect-video w-full bg-black ${className}`.trim()}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={title}
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

export const BIONIXUS_HOME_YOUTUBE_ID = 'XEFjIQRUkCk';

export const BIONIXUS_HOME_YOUTUBE_URL = `https://youtu.be/${BIONIXUS_HOME_YOUTUBE_ID}`;

export function youtubePosterUrl(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
