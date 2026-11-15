import { describe, expect, it } from 'vitest';
import {
  blogHeroSrc,
  resolveBlogSchemaLead,
  resolveBlogSocialImage,
} from '../../../lib/blog-discover-image.mjs';
import { ensureRobotsMeta, withMaxImagePreview } from '../../../lib/robots-meta.mjs';

const MAIN = 'https://cdn.sanity.io/images/h2whvvpo/production/cover-1920x1080.jpg';
const OG = 'https://cdn.sanity.io/images/h2whvvpo/production/social-1200x630.jpg';
const OLD = 'https://cdn.sanity.io/images/h2whvvpo/production/d-hero-1280x720.jpg';

describe('blog discover images', () => {
  it('uses the Sanity social asset at its real 1200x630 size and keeps the 16:9 cover in JSON-LD', () => {
    const input = { ogImage: OG, coverImage: MAIN };
    const social = resolveBlogSocialImage(input);
    const schema = resolveBlogSchemaLead(input);
    expect(social.url).toBe(OG);
    expect(social).toMatchObject({ width: 1200, height: 630, usedOgAsset: true });
    expect(social.url).not.toContain('w=1200');
    expect(schema.primary).toEqual({ url: OG, width: 1200, height: 630 });
    expect(schema.extras).toEqual([{ url: MAIN, width: 1920, height: 1080 }]);
    expect(blogHeroSrc(MAIN)).toBe(`${MAIN}?w=1920&h=1080&fit=max&fm=webp&q=80&auto=format`);
  });

  it('does not crop a 1280x720 main image down to 1200x630 when no social image is set', () => {
    const social = resolveBlogSocialImage({ coverImage: OLD });
    expect(social.url).toBe(OLD);
    expect(social).toMatchObject({ width: 1280, height: 720, usedOgAsset: false });
    expect(resolveBlogSchemaLead({ coverImage: OLD }).primary).toEqual({ url: OLD, width: 1280, height: 720 });
  });

  it('prefers metadata dimensions over the filename', () => {
    const social = resolveBlogSocialImage({
      ogImage: OG,
      ogImageWidth: 1200,
      ogImageHeight: 630,
      coverImage: MAIN,
      coverImageWidth: 1920,
      coverImageHeight: 1080,
    });
    expect(social).toMatchObject({ url: OG, width: 1200, height: 630 });
  });

  it('lets a Sanity asset replace a static /images/blog cover on og and JSON-LD', () => {
    const local = '/images/blog/europe-to-gcc-market-entry-research-cover.jpg';
    const input = { ogImage: local, coverImage: MAIN, coverImageWidth: 1920, coverImageHeight: 1080 };
    const social = resolveBlogSocialImage(input);
    const schema = resolveBlogSchemaLead(input);
    expect(social.url).toBe(MAIN);
    expect(social).toMatchObject({ width: 1920, height: 1080, usedOgAsset: false });
    expect(schema.primary.url).toBe(MAIN);
    expect(schema.primary).toMatchObject({ width: 1920, height: 1080 });

    const withOg = resolveBlogSocialImage({ ogImage: OG, coverImage: local });
    expect(withOg.url).toBe(OG);
    expect(withOg).toMatchObject({ width: 1200, height: 630 });
    expect(resolveBlogSchemaLead({ ogImage: OG, coverImage: MAIN }).primary.url).toBe(OG);
  });

  it('keeps a local cover absolute and 1200x630', () => {
    const social = resolveBlogSocialImage({ coverImage: '/images/blog/card.jpg' });
    expect(social.url).toBe('https://www.bionixus.com/images/blog/card.jpg');
    expect(social).toMatchObject({ width: 1200, height: 630 });
    expect(blogHeroSrc('/images/blog/hero.jpg')).toBe('/images/blog/hero.jpg');
  });
});

describe('robots meta', () => {
  it('merges the preview directive into one existing tag and does not add noindex', () => {
    const html = '<head><meta data-rh="true" name="robots" content="index, follow"/></head>';
    const out = ensureRobotsMeta(html);
    expect(out.match(/name="robots"/g)).toHaveLength(1);
    expect(out).toContain('data-rh="true"');
    expect(out).toContain('content="index, follow, max-image-preview:large"');
    expect(out).not.toContain('noindex');
  });

  it('leaves a tag that already has the directive unchanged', () => {
    const html = '<head><meta data-rh="true" name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"/></head>';
    expect(ensureRobotsMeta(html)).toBe(html);
  });

  it('keeps noindex and collapses a second robots meta', () => {
    const html = '<head><meta name="robots" content="noindex, nofollow"><meta name="robots" content="index, follow"></head>';
    const out = ensureRobotsMeta(html);
    expect(out.match(/name="robots"/g)).toHaveLength(1);
    expect(out).toContain('content="noindex, nofollow, max-image-preview:large"');
    expect(out).not.toContain('content="index');
  });

  it('inserts a single tag when the head has none', () => {
    const out = ensureRobotsMeta('<head><title>BioNixus</title></head>');
    expect(out.match(/name="robots"/g)).toHaveLength(1);
    expect(out).toContain(`content="${withMaxImagePreview('')}"`);
    expect(out).not.toContain('noindex');
  });
});
