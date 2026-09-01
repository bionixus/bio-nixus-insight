import { describe, expect, it } from 'vitest';
import {
  isSvgImageUrl,
  pickSocialShareImage,
  socialShareImageMime,
  toSocialShareImageUrl,
} from '@/lib/image-utils';

describe('social share images', () => {
  it('crops Sanity URLs to a LinkedIn-safe JPEG', () => {
    const url = toSocialShareImageUrl(
      'https://cdn.sanity.io/images/h2whvvpo/production/abc-800x1000.svg',
    );
    expect(url).toContain('w=1200');
    expect(url).toContain('h=630');
    expect(url).toContain('fm=jpg');
    expect(socialShareImageMime(url)).toBe('image/jpeg');
  });

  it('prefers a raster cover over an SVG og:image', () => {
    const share = pickSocialShareImage(
      'https://cdn.sanity.io/images/h2whvvpo/production/og-800x1000.svg',
      'https://cdn.sanity.io/images/h2whvvpo/production/hero-4599x2887.png',
    );
    expect(share.isFallback).toBe(false);
    expect(share.url).toContain('hero-4599x2887.png');
    expect(share.url).toContain('fm=jpg');
    expect(isSvgImageUrl(share.url)).toBe(false);
  });

  it('absolutizes local blog covers', () => {
    const share = pickSocialShareImage('/images/blog/gcc-pharmacoeconomics-cover.jpg');
    expect(share.url).toBe('https://www.bionixus.com/images/blog/gcc-pharmacoeconomics-cover.jpg');
    expect(share.mime).toBe('image/jpeg');
  });

  it('falls back to the site OG image when nothing is set', () => {
    const share = pickSocialShareImage(undefined, '');
    expect(share.isFallback).toBe(true);
    expect(share.url).toBe('https://www.bionixus.com/og-image.png');
    expect(share.mime).toBe('image/png');
  });
});
