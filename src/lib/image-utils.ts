/**
 * Optimize Sanity CDN image URLs by appending transform parameters.
 * Produces visually identical images at a fraction of the file size.
 *
 * - Converts to WebP (80-90% smaller than PNG)
 * - Resizes to the exact dimensions needed
 * - Quality 85 — premium sharpness, no visible artifacts
 */

const SANITY_CDN = 'cdn.sanity.io';
const UNSPLASH_CDN = 'images.unsplash.com';

/** LinkedIn / Facebook / Twitter share canvas. */
export const SOCIAL_OG_WIDTH = 1200;
export const SOCIAL_OG_HEIGHT = 630;
const DEFAULT_SITE_ORIGIN = 'https://www.bionixus.com';
const DEFAULT_OG_IMAGE_URL = `${DEFAULT_SITE_ORIGIN}/og-image.png`;

export function isSvgImageUrl(url: string | undefined): boolean {
  if (!url) return false;
  const path = url.split('?')[0].toLowerCase();
  return path.endsWith('.svg');
}

export function toAbsoluteImageUrl(url: string, origin = DEFAULT_SITE_ORIGIN): string {
  const trimmed = url.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('//')) return `https:${trimmed}`;
  if (trimmed.startsWith('/')) return `${origin}${trimmed}`;
  return trimmed;
}

export function socialShareImageMime(url: string | undefined): string {
  if (!url) return 'image/jpeg';
  const [path, query = ''] = url.split('?');
  if (/(?:^|&)fm=jpe?g(?:&|$)/i.test(query)) return 'image/jpeg';
  if (/(?:^|&)fm=png(?:&|$)/i.test(query)) return 'image/png';
  if (/(?:^|&)fm=webp(?:&|$)/i.test(query)) return 'image/webp';
  const lower = path.toLowerCase();
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.svg')) return 'image/svg+xml';
  if (lower.endsWith('.gif')) return 'image/gif';
  return 'image/jpeg';
}

/**
 * LinkedIn and Facebook ignore SVG and often skip WebP. Force a 1200×630 JPEG
 * crop for Sanity / Unsplash so every article has a unique raster share image.
 */
export function toSocialShareImageUrl(
  url: string | undefined,
  origin = DEFAULT_SITE_ORIGIN,
): string | undefined {
  if (!url?.trim()) return undefined;
  const absolute = toAbsoluteImageUrl(url, origin);
  if (!absolute) return undefined;

  if (absolute.includes(SANITY_CDN)) {
    const base = absolute.split('?')[0];
    const params = new URLSearchParams();
    params.set('w', String(SOCIAL_OG_WIDTH));
    params.set('h', String(SOCIAL_OG_HEIGHT));
    params.set('fit', 'crop');
    params.set('fm', 'jpg');
    params.set('q', '90');
    return `${base}?${params.toString()}`;
  }

  if (absolute.includes(UNSPLASH_CDN)) {
    try {
      const parsed = new URL(absolute);
      parsed.searchParams.set('w', String(SOCIAL_OG_WIDTH));
      parsed.searchParams.set('h', String(SOCIAL_OG_HEIGHT));
      parsed.searchParams.set('fit', 'crop');
      parsed.searchParams.set('q', '85');
      parsed.searchParams.set('fm', 'jpg');
      return parsed.toString();
    } catch {
      return absolute;
    }
  }

  return absolute;
}

/**
 * Prefer a raster cover over SVG (LinkedIn drops SVG og:image). Falls back to
 * the site OG image only when no article image exists.
 */
export function pickSocialShareImage(
  ...candidates: Array<string | undefined>
): { url: string; mime: string; isFallback: boolean } {
  const raster = candidates.find((candidate) => candidate?.trim() && !isSvgImageUrl(candidate));
  const any = candidates.find((candidate) => candidate?.trim());
  const chosen = toSocialShareImageUrl(raster || any);
  if (chosen) {
    return { url: chosen, mime: socialShareImageMime(chosen), isFallback: false };
  }
  return { url: DEFAULT_OG_IMAGE_URL, mime: 'image/png', isFallback: true };
}

export function optimizeSanityImage(
  url: string | undefined,
  width: number,
  height?: number,
  quality = 85,
): string {
  if (!url) return '';
  // Only transform Sanity CDN URLs
  if (!url.includes(SANITY_CDN)) return url;

  // Don't double-append params
  const base = url.split('?')[0];
  const params = new URLSearchParams();
  params.set('w', String(width));
  if (height) params.set('h', String(height));
  params.set('fit', 'crop');
  params.set('fm', 'webp');
  params.set('q', String(quality));
  // auto=format lets Sanity serve AVIF to browsers that support it
  params.set('auto', 'format');

  return `${base}?${params.toString()}`;
}

/** SSR/LCP preload URL for blog hero covers (matches BlogPost hero dimensions). */
export function getBlogHeroPreloadUrl(coverImage: string | undefined): string | undefined {
  const url = optimizeSanityImage(coverImage, 1400, 600);
  return url || undefined;
}

/** SSR/LCP preload URL for press release hero images. */
export function getPressHeroPreloadUrl(heroImage: string | undefined): string | undefined {
  const url = optimizeSanityImage(heroImage, 1400, 700);
  return url || undefined;
}

const STATIC_SRCSET_WIDTHS = [400, 640, 800, 1120, 1280] as const;

/**
 * Build a srcSet for static public images. For Sanity URLs, delegates to optimizeSanityImage.
 * Static paths are returned as-is (same URL per width) until AVIF/WebP variants exist on disk.
 */
export function buildImageSrcSet(
  src: string,
  widths: readonly number[] = STATIC_SRCSET_WIDTHS,
): string {
  if (!src) return '';
  if (src.includes(SANITY_CDN)) {
    return widths.map((w) => `${optimizeSanityImage(src, w)} ${w}w`).join(', ');
  }
  return widths.map((w) => `${src} ${w}w`).join(', ');
}

/** Default sizes attribute for full-width content figures. */
export const CONTENT_FIGURE_SIZES = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px';

/** Default sizes for hero visuals in a two-column layout. */
export const HERO_VISUAL_SIZES = '(max-width: 1024px) 100vw, 560px';
