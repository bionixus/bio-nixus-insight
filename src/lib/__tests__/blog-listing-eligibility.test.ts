import { describe, expect, it } from 'vitest';
import {
  blogCardPath,
  isListableBlogPost,
  listingRedirectTarget,
  selectListablePosts,
} from '@/lib/blog-listing-eligibility';

const REDIRECTING_HEALTHCARE_SLUGS = [
  'drug-registration-kuwait-pharma-guide',
  'top-healthcare-market-research-firms-mena-europe',
  'top-healthcare-market-research-companies-2026',
  'top-healthcare-market-research-companies-kuwait',
  'top-healthcare-market-research-firms-saudi-arabia',
  'top-market-research-companies-egypt-2026',
  'top-healthcare-market-research-companies-uae',
  'competitive-intelligence-pharma-gcc',
  'top-healthcare-market-research-companies-mena',
] as const;

const LIVE_SLUGS = [
  'gazya-obinutuzumab-lupus-anvisa-brazil-access-2026',
  'saudi-hematology-diagnostics-vs-ward-brand-cut',
  'saudi-diabetes-syndicated-vs-hospital-switching',
] as const;

describe('blog listing eligibility', () => {
  it('hides Sanity drafts and posts whose card URL redirects', () => {
    const posts = [
      { id: 'drafts.f962a332', slug: 'drug-registration-kuwait-pharma-guide', title: 'Kuwait draft' },
      { id: 'drafts.46250f59', slug: 'gcc-pharmaceutical-market-comparison-uae-saudi-kuwait', title: 'GCC draft' },
      ...REDIRECTING_HEALTHCARE_SLUGS.map((slug) => ({ id: slug, slug, title: slug })),
      ...LIVE_SLUGS.map((slug) => ({ id: slug, slug, title: slug })),
    ];
    const listed = selectListablePosts(posts, 'healthcare');
    expect(listed.map((post) => post.slug)).toEqual([...LIVE_SLUGS]);
    expect(listed).toHaveLength(LIVE_SLUGS.length);
  });

  it('names the redirect target for the Kuwait draft and the old insight cards', () => {
    expect(listingRedirectTarget(blogCardPath('drug-registration-kuwait-pharma-guide', 'healthcare'))).toBe(
      '/blog/healthcare-overview-kuwait-market-2026',
    );
    expect(listingRedirectTarget('/blog/competitive-intelligence-pharma-gcc')).toBe(
      '/services/competitive-intelligence',
    );
    expect(listingRedirectTarget('/blog/top-healthcare-market-research-companies-mena')).toBe(
      '/insights/top-healthcare-market-research-companies-mena-2026',
    );
    expect(listingRedirectTarget('/blog/top-market-research-companies-egypt-2026')).toBe(
      '/insights/top-market-research-companies-egypt-2026',
    );
  });

  it('keeps an industries article on its own hub when the old /blog URL redirects', () => {
    const post = {
      id: 'published',
      slug: 'market-entry-research-saudi-arabia',
    };
    expect(isListableBlogPost(post, 'healthcare')).toBe(false);
    expect(isListableBlogPost(post, 'industries')).toBe(true);
    expect(listingRedirectTarget(blogCardPath(post.slug, 'industries'))).toBeNull();
  });
});
