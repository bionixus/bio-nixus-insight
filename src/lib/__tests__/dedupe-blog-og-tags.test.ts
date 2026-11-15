import { describe, expect, it } from 'vitest';
import { dedupeBlogOpenGraphTags } from '../../../lib/dedupe-blog-og-tags.mjs';

function head(html: string): string {
  return html.match(/<head[\s\S]*<\/head>/i)?.[0] ?? '';
}

function count(html: string, property: string): number {
  const re = new RegExp(`<meta\\b[^>]*property=(["'])${property}\\1[^>]*>`, 'gi');
  return (html.match(re) ?? []).filter((tag) => {
    const value = tag.match(/property=(["'])([^"']+)\1/i)?.[2];
    return value === property;
  }).length;
}

describe('dedupeBlogOpenGraphTags', () => {
  it('keeps one data-rh og:title, og:description and og:image on blog pages', () => {
    const html = `<!DOCTYPE html><html><head>
      <meta property="og:title" content="Static title" />
      <meta data-rh="true" property="og:title" content="Helmet title" />
      <meta property="og:description" content="Static description" />
      <meta data-rh="true" property="og:description" content="Helmet description" />
      <meta property="og:image" content="https://www.bionixus.com/og-image.png" />
      <meta data-rh="true" property="og:image" content="https://cdn.sanity.io/images/h2whvvpo/production/cover.jpg" />
      <meta data-rh="true" property="og:image:width" content="1200" />
    </head><body></body></html>`;
    const out = dedupeBlogOpenGraphTags(html, '/blog/egypt-eda-decree-480-drug-pricing-2026');
    expect(count(out, 'og:title')).toBe(1);
    expect(count(out, 'og:description')).toBe(1);
    expect(count(out, 'og:image')).toBe(1);
    expect(head(out)).toContain('data-rh="true" property="og:title" content="Helmet title"');
    expect(head(out)).toContain('data-rh="true" property="og:description" content="Helmet description"');
    expect(head(out)).toContain('cdn.sanity.io/images/h2whvvpo/production/cover.jpg');
    expect(head(out)).not.toContain('og-image.png');
    expect(head(out)).toContain('property="og:image:width" content="1200"');
  });

  it('stamps data-rh on a lone static og tag so client Helmet does not add a second one', () => {
    const html = `<head><meta property="og:title" content="CTR title" /></head>`;
    const out = dedupeBlogOpenGraphTags(html, '/blog/dksh-newbridge-acquisition-mena-launch-market-access');
    expect(count(out, 'og:title')).toBe(1);
    expect(out).toContain('<meta data-rh="true" property="og:title" content="CTR title" />');
  });

  it('leaves non-blog pages unchanged', () => {
    const html = `<head><meta property="og:title" content="A" /><meta data-rh="true" property="og:title" content="B" /></head>`;
    expect(dedupeBlogOpenGraphTags(html, '/healthcare-market-research')).toBe(html);
  });
});
