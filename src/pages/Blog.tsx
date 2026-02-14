import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import { useSanityBlog } from '@/hooks/useSanityBlog';

const blogCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Healthcare Market Research Blog',
  description: 'Expert insights on pharmaceutical market research, market access, and healthcare intelligence across Europe and MENA.',
  url: 'https://www.bionixus.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'BioNixus',
    url: 'https://www.bionixus.com',
  },
};

const blogBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog' },
  ],
};

const Blog = () => {
  const { data: posts, isLoading, isError, error } = useSanityBlog();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Market Research Blog | BioNixus</title>
        <meta name="description" content="Expert insights on pharmaceutical market research, market access, clinical trials, and healthcare intelligence across Europe, UAE, Saudi Arabia, and MENA." />
        <link rel="canonical" href="https://www.bionixus.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BioNixus" />
        <meta property="og:title" content="Healthcare Market Research Blog | BioNixus" />
        <meta property="og:description" content="Expert insights on pharmaceutical market research, market access, and healthcare intelligence across Europe and MENA." />
        <meta property="og:url" content="https://www.bionixus.com/blog" />
        <meta property="og:image" content="https://www.bionixus.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BioNixus" />
        <meta name="twitter:title" content="Healthcare Market Research Blog | BioNixus" />
        <meta name="twitter:description" content="Expert insights on pharmaceutical market research, market access, and healthcare intelligence across Europe and MENA." />
        <script type="application/ld+json">{JSON.stringify(blogCollectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(blogBreadcrumbSchema)}</script>
      </Helmet>
      <Navbar />
      <main>
        {isError ? (
          <section className="section-padding">
            <div className="container-wide max-w-xl mx-auto text-center py-12 px-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <p className="font-semibold text-destructive">Sanity not connected</p>
              <p className="text-sm text-muted-foreground mt-2">
                {error instanceof Error ? error.message : String(error)}
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                Add this exact origin to CORS: sanity.io/manage → your project → API → CORS origins → add{' '}
                <strong className="text-foreground">{typeof window !== 'undefined' ? window.location.origin : 'http://localhost:8082'}</strong>
                {' '}(port can be 8082, 8086, etc. if other servers are running).
              </p>
            </div>
          </section>
        ) : isLoading ? (
          <section className="section-padding">
            <div className="container-wide">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="h-10 w-64 mx-auto bg-muted/60 rounded-lg animate-pulse mb-4" />
                <div className="h-5 w-96 mx-auto bg-muted/40 rounded-lg animate-pulse" />
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[16/10] rounded-xl bg-muted/50 mb-6" />
                    <div className="h-4 w-20 bg-muted/40 rounded mb-3" />
                    <div className="h-6 w-full bg-muted/50 rounded mb-2" />
                    <div className="h-4 w-3/4 bg-muted/30 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <BlogSection posts={posts ?? undefined} />
        )}
        <section className="section-padding bg-muted/30">
          <div className="container-wide text-center">
            <Link
              to="/"
              className="text-primary font-medium hover:underline"
            >
              Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
