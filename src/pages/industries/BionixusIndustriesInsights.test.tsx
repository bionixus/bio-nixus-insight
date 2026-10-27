import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { INDUSTRIES_INSIGHT_EDITORIAL_LINKS } from '@/lib/blog-content-silo';
import { INDUSTRIES_INSIGHTS_FAQ, NON_PHARMA_INSIGHTS_CATALOG } from '@/data/nonPharmaInsightsCatalog';
import BionixusIndustriesInsights from './BionixusIndustriesInsights';

vi.mock('@/hooks/useSanityBlog', () => ({
  useIndustriesInsights: () => ({ data: [], isLoading: false, isError: false, error: null }),
}));

function renderHub() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <HelmetProvider>
      <QueryClientProvider client={client}>
        <MemoryRouter>
          <LanguageProvider>
            <TooltipProvider>
              <BionixusIndustriesInsights />
            </TooltipProvider>
          </LanguageProvider>
        </MemoryRouter>
      </QueryClientProvider>
    </HelmetProvider>,
  );
}

describe('industries insights hub design', () => {
  it('keeps every catalog URL in the HTML and states only approved office facts', () => {
    const { container } = renderHub();
    const hrefs = [...container.querySelectorAll('a[href]')].map((node) => node.getAttribute('href') ?? '');
    for (const link of NON_PHARMA_INSIGHTS_CATALOG.links) {
      expect(hrefs, link.href).toContain(link.href);
    }
    for (const item of INDUSTRIES_INSIGHT_EDITORIAL_LINKS) {
      expect(hrefs).toContain(item.to);
    }

    const text = container.textContent ?? '';
    expect(text).toContain('Global market research across industries');
    expect(text).toContain('A physician network of about 3,200');
    expect(text).toContain('Sheikh Zayed, the biggest MEA office');
    expect(text).toContain('in the process of opening a São Paulo office by the end of 2026');
    expect(text).toContain('partner office for KSA: Al Khobar');
    expect(text).toContain('field office for Kuwait: Salmiya');
    expect(text).toContain('Americas office and global HQ: Sheridan');
    const withoutApprovedSaoPaulo = text.split('in the process of opening a São Paulo office by the end of 2026').join('');
    expect(withoutApprovedSaoPaulo).not.toMatch(/São Paulo/);
    expect(text).not.toMatch(/guaranteed accuracy/i);
    expect(text).not.toMatch(/priced from/i);

    for (const item of INDUSTRIES_INSIGHTS_FAQ) {
      expect(container.querySelector('details')).toBeTruthy();
      expect(text).toContain(item.question);
      expect(text).toContain(item.answer);
    }
    expect(container.querySelector('h1')?.textContent).toBe('Global market research across industries');
    expect(container.querySelectorAll('h1')).toHaveLength(1);
  });
});
