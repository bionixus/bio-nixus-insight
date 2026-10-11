import { renderToString } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { beforeAll, describe, expect, it } from 'vitest';
import OpenGraphMeta from '@/components/OpenGraphMeta';

beforeAll(() => {
  // Render the way the SSR server does; under jsdom Helmet would otherwise write to the DOM.
  HelmetProvider.canUseDOM = false;
});

function headMeta(element: JSX.Element): string {
  const context: { helmet?: HelmetServerState } = {};
  renderToString(<HelmetProvider context={context}>{element}</HelmetProvider>);
  return context.helmet?.meta.toString() ?? '';
}

describe('OpenGraphMeta', () => {
  it('renders every article:* tag alongside the og and twitter tags', () => {
    const meta = headMeta(
      <OpenGraphMeta
        title="Mystery Shopping Companies Saudi Arabia 2026 | BioNixus"
        description="Guide description"
        image="https://www.bionixus.com/images/blog/cover.jpg"
        url="https://www.bionixus.com/bionixus-industries/insights/example"
        type="article"
        locale="en_US"
        imageAlt="Cover alt"
        article={{
          publishedTime: '2026-10-11T12:00:00.000Z',
          modifiedTime: '2026-10-12T09:30:00.000Z',
          author: 'BioNixus Research Team',
          section: 'B2C Market Research',
          tags: ['Mystery Shopping', 'Saudi Arabia'],
        }}
      />,
    );
    expect(meta).toContain('property="og:title"');
    expect(meta).toContain('property="article:published_time" content="2026-10-11T12:00:00.000Z"');
    expect(meta).toContain('property="article:modified_time" content="2026-10-12T09:30:00.000Z"');
    expect(meta).toContain('property="article:author" content="BioNixus Research Team"');
    expect(meta).toContain('property="article:section" content="B2C Market Research"');
    expect(meta).toContain('property="article:tag" content="Mystery Shopping"');
    expect(meta).toContain('property="article:tag" content="Saudi Arabia"');
    expect(meta).toContain('name="twitter:card" content="summary_large_image"');
  });

  it('omits article:* tags on website pages', () => {
    const meta = headMeta(
      <OpenGraphMeta
        title="Hub"
        description="Hub description"
        image="https://www.bionixus.com/og-image.png"
        url="https://www.bionixus.com/bionixus-industries/insights"
        locale="en_US"
        article={{ publishedTime: '2026-10-11T12:00:00.000Z', tags: ['Ignored'] }}
      />,
    );
    expect(meta).not.toContain('article:');
  });
});
