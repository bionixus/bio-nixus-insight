import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { render as renderSsr } from '@/entry-server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { InitialDataProvider } from '@/contexts/InitialDataContext';
import { formatListDate } from '@/lib/formatListDate';
import { mediaCreditsForAuthor } from '@/data/inTheMedia';
import NewsHub, { InTheMediaSection } from './NewsHub';

vi.mock('@/lib/sanity', () => ({
  isSanityConfigured: () => false,
  getSanityClient: () => {
    throw new Error('Sanity should stay unused while rendering the news hub test');
  },
}));

const HIT_URL =
  'https://www.healthcareittoday.com/2026/11/13/when-your-billing-team-is-overseas-what-data-residency-laws-teach-about-ehr-access/';

function renderNews() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <HelmetProvider>
      <QueryClientProvider client={client}>
        <MemoryRouter initialEntries={['/news']}>
          <LanguageProvider>
            <TooltipProvider>
              <InitialDataProvider value={{ pageType: 'other' }}>
                <NewsHub />
              </InitialDataProvider>
            </TooltipProvider>
          </LanguageProvider>
        </MemoryRouter>
      </QueryClientProvider>
    </HelmetProvider>,
  );
}

describe('In the media on /news', () => {
  it('formats a date-only value as 13 November 2026', () => {
    expect(formatListDate('2026-11-13')).toBe('13 November 2026');
  });

  it('falls back to the Healthcare IT Today credit for Mohammad when Sanity featuredIn is empty', () => {
    const credits = mediaCreditsForAuthor({ isMohammad: true, featuredIn: [] });
    expect(credits).toHaveLength(1);
    expect(credits[0]?.url).toBe(HIT_URL);
    expect(mediaCreditsForAuthor({
      isMohammad: true,
      featuredIn: [{
        headline: 'A later interview',
        url: 'https://example.com/interview',
        publicationName: 'Example Journal',
        date: '2026-12-01',
      }],
    })[0]?.headline).toBe('A later interview');
    expect(mediaCreditsForAuthor({ isMohammad: false, featuredIn: [] })).toEqual([]);
  });

  it('hides the section when there are no items', () => {
    const { container } = render(<InTheMediaSection items={[]} />);
    expect(container.querySelector('#in-the-media')).toBeNull();
  });

  it('keeps the News h1 and links the guest article out without a logo or iframe', () => {
    renderNews();
    expect(screen.getAllByRole('heading', { level: 1 }).map((node) => node.textContent)).toEqual(['News']);
    expect(screen.getByRole('link', { name: 'In the media' }).getAttribute('href')).toBe('/news#in-the-media');
    const section = document.getElementById('in-the-media');
    expect(section).not.toBeNull();
    expect(section?.querySelector('img')).toBeNull();
    expect(section?.querySelector('iframe')).toBeNull();
    expect(section?.textContent).toContain('13 November 2026');
    expect(section?.textContent).toContain('Healthcare IT Today');
    expect(section?.textContent).toContain('Guest article');
    expect(section?.textContent).toContain('by Mohammad Alsaadany, Director, BioNixus');
    const articleLink = screen.getByRole('link', { name: /When Your Billing Team is Overseas/i });
    expect(articleLink.getAttribute('href')).toBe(HIT_URL);
    expect(articleLink.getAttribute('target')).toBe('_blank');
    expect(articleLink.getAttribute('rel')).toBe('noopener noreferrer');
    expect(screen.getByText(/No press releases are published yet/i)).toBeTruthy();
  });

  it('puts the guest article in the server HTML for /news and links it from /media', async () => {
    HelmetProvider.canUseDOM = false;
    const news = await renderSsr('/news');
    expect(news.html).toContain('id="in-the-media"');
    expect(news.html).toContain('When Your Billing Team is Overseas');
    expect(news.html).toContain('Guest article');
    expect(news.html).toContain('by Mohammad Alsaadany, Director, BioNixus');
    expect(news.html).toContain(`href="${HIT_URL}"`);
    expect(news.html).not.toContain('healthcareittoday.com/wp-content');
    expect((news.html.match(/<h1[\s>]/g) ?? []).length).toBe(1);
    expect(news.html).not.toContain('<iframe');

    const media = await renderSsr('/media');
    expect(media.html).toContain('href="/news#in-the-media"');
    expect(media.html).toContain('In the media');

    const blog = await renderSsr('/blog/gazya-obinutuzumab-lupus-anvisa-brazil-access-2026');
    expect(blog.html).toContain('Featured in:');
    expect(blog.html).toContain(HIT_URL);
    expect(blog.html).toContain('Healthcare IT Today');
    expect(blog.html).toContain('13 November 2026');
    const head = [blog.helmetData.script].map((part) => part.toString()).join('\n');
    expect(head).toContain('"subjectOf"');
    expect(head).toContain('https://www.linkedin.com/in/mohammad-alsaadany');
    expect(head).toContain('https://www.alsaadany.com/');
    expect(head).not.toContain('honorificPrefix');
  });
});
