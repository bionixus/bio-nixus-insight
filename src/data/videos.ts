import catalog from '@/data/videos-catalog.json';

export type VideoRelatedLink = {
  href: string;
  label: string;
};

export type SiteVideo = {
  slug: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  /** ISO 8601 datetime with timezone (YouTube uploadDate). */
  uploadDate: string;
  /** ISO 8601 duration, e.g. PT1M30S */
  durationIso: string;
  durationSeconds: number;
  youtubeId?: string;
  embedUrl?: string;
  contentUrl?: string;
  transcript: string;
  relatedLinks: VideoRelatedLink[];
};

export const SITE_VIDEOS: SiteVideo[] = catalog as SiteVideo[];

export function getVideoBySlug(slug: string): SiteVideo | undefined {
  return SITE_VIDEOS.find((v) => v.slug === slug);
}

export function getAllVideos(): SiteVideo[] {
  return SITE_VIDEOS;
}

export function videoWatchPath(slug: string): string {
  return `/videos/${slug}`;
}

/** Canonical watch URL for the homepage overview YouTube embed. */
export const HOME_OVERVIEW_WATCH_PATH = videoWatchPath('healthcare-market-research-overview');

/** Canonical watch URL for the consumer portal YouTube embed. */
export const CONSUMER_RESEARCH_WATCH_PATH = videoWatchPath('consumer-b2b-market-research');
