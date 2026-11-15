import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { InitialDataProvider } from '@/contexts/InitialDataContext';
import type { BlogPost } from '@/types/blog';
import Blog from './Blog';

const { posts } = vi.hoisted(() => {
  const posts: BlogPost[] = [
    {
      id: 'gazyva',
      slug: 'gazyva-primary-membranous-nephropathy-fda-approval-2026',
      title: 'Gazyva primary membranous nephropathy FDA approval',
      excerpt: 'United States approval note.',
      date: '2026-03-01',
      category: 'Regulatory & Policy',
      country: 'United States',
    },
    {
      id: 'brazil',
      slug: 'gazya-obinutuzumab-lupus-anvisa-brazil-access-2026',
      title: 'Gazya ANVISA Brazil access',
      excerpt: 'Brazil access note.',
      date: '2026-02-01',
      category: 'Market Access',
      country: 'Brazil',
    },
  ];
  return { posts };
});

vi.mock('@/hooks/useSanityBlog', () => ({
  useSanityBlog: () => ({ data: posts, isLoading: false, isError: false, error: null }),
}));

beforeEach(() => {
  class IntersectionObserverStub {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  vi.stubGlobal('IntersectionObserver', IntersectionObserverStub);
});

function renderBlog(path: string) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <HelmetProvider>
      <QueryClientProvider client={client}>
        <MemoryRouter initialEntries={[path]}>
          <LanguageProvider>
            <TooltipProvider>
              <InitialDataProvider value={{ pageType: 'blog-index', blogPosts: posts }}>
                <Blog />
              </InitialDataProvider>
            </TooltipProvider>
          </LanguageProvider>
        </MemoryRouter>
      </QueryClientProvider>
    </HelmetProvider>,
  );
}

describe('blog region filter URL state', () => {
  it('shows the United States article on ?country=USA and keeps Brazil out', () => {
    renderBlog('/blog?country=USA');
    expect(screen.getByRole('link', { name: /Gazyva primary membranous nephropathy FDA approval/i })).toBeTruthy();
    expect(screen.queryByRole('link', { name: /Gazya ANVISA Brazil access/i })).toBeNull();
    expect(screen.queryByTestId('blog-filter-empty')).toBeNull();
  });

  it('shows an empty state with a link back to all insights when Canada has no posts', () => {
    renderBlog('/blog?country=Canada');
    const empty = screen.getByTestId('blog-filter-empty');
    expect(empty.textContent).toContain('No insights for this filter yet');
    const back = screen.getByRole('link', { name: 'Browse all insights' });
    expect(back.getAttribute('href')).toBe('/blog');
    expect(empty.contains(back)).toBe(true);
    expect(screen.queryByRole('link', { name: /Gazyva primary membranous nephropathy FDA approval/i })).toBeNull();
  });
});
