import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useIndustriesInsights } from '@/hooks/useSanityBlog';
import { useInitialData } from '@/contexts/InitialDataContext';
import {
  INDUSTRIES_INSIGHTS_INDEX_PATH,
  INDUSTRIES_INSIGHT_POST_PATH_PREFIX,
} from '@/lib/blog-content-silo';
import { industrySlugLabel } from '@/lib/industries-insights-filters';
import type { BlogPost } from '@/types/blog';

/**
 * Teaser portal on `/bionixus-industries#insights`.
 * Full listing, filters, and magazine layout live on `/bionixus-industries/insights`.
 */
export default function IndustriesInsightsSection() {
  const { data: routeData } = useInitialData();
  const ssrPosts =
    routeData.pageType === 'bionixus-industries' && Array.isArray(routeData.industriesInsights)
      ? (routeData.industriesInsights as BlogPost[])
      : undefined;
  const { data: posts, isLoading } = useIndustriesInsights(ssrPosts);

  const allPosts = posts ?? ssrPosts ?? [];
  const postCount = allPosts.length;
  const teaserPosts = allPosts.slice(0, 3);

  useEffect(() => {
    if (window.location.hash === '#insights') {
      document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="insights" className="bx-section bx-insights-portal" aria-labelledby="bx-insights-portal-heading">
      <div className="bx-inner">
        <div className="bx-insights-portal-grid">
          <div className="bx-insights-portal-copy">
            <div className="bx-eyebrow gold">
              <span className="bx-line" /> B2B &amp; B2C insights
            </div>
            <h2 id="bx-insights-portal-heading" className="bx-h2">
              Industry insights <em>blog</em>
            </h2>
            <p className="bx-lead">
              Fieldwork-led articles for non-healthcare buyers — filter by industry vertical and country on our
              dedicated insights index. Healthcare and pharmaceutical research stays on our{' '}
              <Link to="/blog" className="font-medium text-primary hover:underline">
                dedicated healthcare blog
              </Link>
              .
            </p>
            {!isLoading && postCount > 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">
                {postCount} published {postCount === 1 ? 'article' : 'articles'} · GCC &amp; MENA focus
              </p>
            ) : null}
            <div className="bx-cta-actions mt-8">
              <Link to={INDUSTRIES_INSIGHTS_INDEX_PATH} className="bx-btn-gold">
                Open industry insights blog →
              </Link>
              <Link to="/contact" className="bx-btn-ghost dark">
                Request a proposal
              </Link>
            </div>
          </div>
          <div className="bx-insights-portal-panel">
            <div className="bx-insights-portal-panel-head">
              <h3>Latest industry articles</h3>
              {!isLoading && postCount > 0 ? (
                <span className="bx-insights-count">{postCount} published</span>
              ) : null}
            </div>
            {isLoading ? (
              <ul className="bx-insights-teaser-list" aria-busy="true">
                {[0, 1, 2].map((i) => (
                  <li key={i} className="bx-insights-teaser-skeleton" />
                ))}
              </ul>
            ) : teaserPosts.length > 0 ? (
              <ul className="bx-insights-teaser-list">
                {teaserPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`${INDUSTRIES_INSIGHT_POST_PATH_PREFIX}/${post.slug}`}
                      className="bx-insights-teaser-card"
                    >
                      <span className="bx-insights-teaser-meta">
                        {post.industrySlug ? industrySlugLabel(post.industrySlug) : post.category}
                        {post.country ? ` · ${post.country}` : ''}
                      </span>
                      <span className="bx-insights-teaser-title">{post.title}</span>
                      <span className="bx-insights-teaser-arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="bx-insights-empty">
                Articles publishing soon — explore country × industry service pages in the meantime.
              </p>
            )}
            <Link to={INDUSTRIES_INSIGHTS_INDEX_PATH} className="bx-insights-portal-foot">
              Browse all industry insights →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
