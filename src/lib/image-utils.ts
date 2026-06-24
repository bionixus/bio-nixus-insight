/**
 * Optimize Sanity CDN image URLs by appending transform parameters.
 * Produces visually identical images at a fraction of the file size.
 *
 * - Converts to WebP (80-90% smaller than PNG)
 * - Resizes to the exact dimensions needed
 * - Quality 85 — premium sharpness, no visible artifacts
 */

const SANITY_CDN = 'cdn.sanity.io';

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
