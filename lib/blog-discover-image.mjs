/**
 * Blog share and Discover images.
 * A Sanity openGraph.ogImage is served at its real pixel size.
 * The main image (mainImage / coverImage) is never cropped below 1200px wide.
 */

const SANITY_CDN = 'cdn.sanity.io';
const DEFAULT_ORIGIN = 'https://www.bionixus.com';
const DEFAULT_OG = `${DEFAULT_ORIGIN}/og-image.png`;
const MIN_WIDTH = 1200;

function isSvg(url) {
  if (!url) return false;
  return String(url).split('?')[0].toLowerCase().endsWith('.svg');
}

function toAbsolute(url) {
  const trimmed = String(url || '').trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('//')) return `https:${trimmed}`;
  if (trimmed.startsWith('/')) return `${DEFAULT_ORIGIN}${trimmed}`;
  return trimmed;
}

function mimeOf(url) {
  const path = String(url || '').split('?')[0].toLowerCase();
  if (path.endsWith('.png')) return 'image/png';
  if (path.endsWith('.webp')) return 'image/webp';
  if (path.endsWith('.gif')) return 'image/gif';
  if (path.endsWith('.svg')) return 'image/svg+xml';
  return 'image/jpeg';
}

export function sanityImageDimensions(url, width, height) {
  const w = Number(width);
  const h = Number(height);
  if (w > 0 && h > 0) return { width: w, height: h };
  const match = String(url || '').split('?')[0].match(/-(\d+)x(\d+)\.[a-z0-9]+$/i);
  if (!match) return null;
  return { width: Number(match[1]), height: Number(match[2]) };
}

function raster(url) {
  const trimmed = String(url || '').trim();
  if (!trimmed || isSvg(trimmed)) return '';
  return trimmed;
}

function isSanity(url) {
  return Boolean(url) && url.includes(SANITY_CDN);
}

/**
 * A static /images/blog file never outranks a Sanity asset.
 * Order: openGraph.ogImage, then mainImage at 1200px or wider, then either static file.
 */
function chooseShareSource(og, cover, coverWidth, coverHeight) {
  if (isSanity(og)) return { url: og, fromOg: true };
  if (isSanity(cover)) {
    const dims = sanityImageDimensions(cover, coverWidth, coverHeight);
    if (!dims || dims.width >= MIN_WIDTH) return { url: cover, fromOg: false };
  }
  if (og) return { url: og, fromOg: true };
  if (cover) return { url: cover, fromOg: false };
  return null;
}

/**
 * og:image / twitter:image. Prefer openGraph.ogImage at native size.
 * Otherwise the main image at full size (at least its real width, never a 1200x630 crop).
 */
export function resolveBlogSocialImage(input = {}) {
  const og = raster(input.ogImage);
  const cover = raster(input.coverImage);
  const choice = chooseShareSource(og, cover, input.coverImageWidth, input.coverImageHeight);
  if (!choice) {
    return { url: DEFAULT_OG, width: 1200, height: 630, mime: 'image/png', usedOgAsset: false };
  }
  const chosen = choice.url;
  const usedOgAsset = choice.fromOg;

  const width = usedOgAsset ? input.ogImageWidth : input.coverImageWidth;
  const height = usedOgAsset ? input.ogImageHeight : input.coverImageHeight;

  if (chosen.includes(SANITY_CDN)) {
    const url = toAbsolute(chosen).split('?')[0];
    const dims = sanityImageDimensions(chosen, width, height);
    if (dims) {
      return { url, width: dims.width, height: dims.height, mime: mimeOf(url), usedOgAsset };
    }
    return { url, width: MIN_WIDTH, height: 630, mime: mimeOf(url), usedOgAsset };
  }

  return {
    url: toAbsolute(chosen),
    width: Number(width) > 0 ? Number(width) : MIN_WIDTH,
    height: Number(height) > 0 ? Number(height) : 630,
    mime: mimeOf(chosen),
    usedOgAsset,
  };
}

/**
 * Article JSON-LD uses the same order as og:image:
 * Sanity openGraph.ogImage, then a Sanity mainImage at least 1200px wide, then the static file.
 * A different wide main image is still included after that primary so the 16:9 cover stays in the graph.
 */
export function resolveBlogSchemaLead(input = {}) {
  const social = resolveBlogSocialImage(input);
  const cover = raster(input.coverImage);
  const coverIsSanity = cover.includes(SANITY_CDN);
  const coverDims = coverIsSanity
    ? sanityImageDimensions(cover, input.coverImageWidth, input.coverImageHeight)
    : null;
  const coverUrl = coverIsSanity ? toAbsolute(cover).split('?')[0] : '';
  const socialBase = social.url.split('?')[0];
  const extras = [];
  if (
    coverUrl
    && coverDims
    && coverDims.width >= MIN_WIDTH
    && coverUrl !== socialBase
    && social.url !== DEFAULT_OG
  ) {
    extras.push({ url: coverUrl, width: coverDims.width, height: coverDims.height });
  }
  return {
    primary: { url: social.url, width: social.width, height: social.height },
    extras,
    primaryIsMain: Boolean(coverUrl) && socialBase === coverUrl,
  };
}

/**
 * In-page hero src. Local files stay as authored. Sanity assets keep their real
 * pixel size so a 1920x1080 cover is not cropped down to 1200x630 or 1400x600.
 */
export function blogHeroSrc(url, width, height) {
  const raw = String(url || '').trim();
  if (!raw) return '';
  if (!raw.includes(SANITY_CDN)) return raw;
  const base = toAbsolute(raw).split('?')[0];
  const dims = sanityImageDimensions(raw, width, height);
  if (!dims || dims.width < MIN_WIDTH) return base;
  return `${base}?w=${dims.width}&h=${dims.height}&fit=max&fm=webp&q=80&auto=format`;
}
