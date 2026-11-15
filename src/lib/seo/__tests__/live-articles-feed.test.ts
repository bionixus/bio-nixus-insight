import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = join(__dirname, '../../../..');
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');
const llmsFull = readFileSync(join(root, 'public/llms-full.txt'), 'utf8');
const rss = readFileSync(join(root, 'public/blog/rss.xml'), 'utf8');
const blogPage = readFileSync(join(root, 'src/pages/Blog.tsx'), 'utf8');

const REQUIRED = [
  '/blog/gazya-obinutuzumab-lupus-anvisa-brazil-access-2026',
  '/blog/saudi-hematology-diagnostics-vs-ward-brand-cut',
  '/blog/saudi-diabetes-syndicated-vs-hospital-switching',
];

describe('live article feeds', () => {
  it('lists the Gazya, Saudi hematology and Saudi diabetes posts in llms.txt, llms-full.txt and the RSS feed', () => {
    for (const path of REQUIRED) {
      expect(llms).toContain(`https://www.bionixus.com${path}`);
      expect(llmsFull).toContain(`https://www.bionixus.com${path}`);
      expect(rss).toContain(`https://www.bionixus.com${path}`);
    }
    expect(llms).toContain('<!-- live-articles:start -->');
    expect(llmsFull).toContain('<!-- live-articles:start -->');
    expect(rss).toContain('<rss version="2.0"');
    const dates = [...rss.matchAll(/<pubDate>([^<]+)<\/pubDate>/g)].map((match) => Date.parse(match[1] ?? ''));
    const sorted = [...dates].sort((a, b) => b - a);
    expect(dates).toEqual(sorted);
  });

  it('advertises the RSS feed on the blog index', () => {
    expect(blogPage).toContain('rel="alternate"');
    expect(blogPage).toContain('type="application/rss+xml"');
    expect(blogPage).toContain('https://www.bionixus.com/blog/rss.xml');
  });
});
