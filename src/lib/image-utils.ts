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
