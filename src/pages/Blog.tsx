import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();
  const isGerman = pathname.startsWith('/de/');
  const isFrench = pathname.startsWith('/fr/');
  const canonical = isGerman ? 'https://www.bionixus.com/de/blog' : isFrench ? 'https://www.bionixus.com/fr/blog' : 'https://www.bionixus.com/blog';
  const title = isGerman
    ? 'Healthcare Markt-Insights Blog | BioNixus'
    : isFrench
      ? 'Blog Insights Marché Santé | BioNixus'
      : 'Healthcare Market Research Blog | BioNixus';
  const description = isGerman
    ? 'Insights zu pharmazeutischer Marktforschung, Marktzugang und Gesundheitsstrategien für EMEA.'
    : isFrench
      ? 'Insights sur les études de marché santé, le market access et la stratégie pharmaceutique en EMEA.'
      : 'Expert insights on pharmaceutical market research, market access, clinical trials, and healthcare intelligence across Europe, UAE, Saudi Arabia, and MENA.';
  const introTitle = isGerman ? 'Regionale Insights für DACH und EMEA' : isFrench ? 'Insights régionaux pour la France et l’EMEA' : 'Regional healthcare intelligence updates';
  const introText = isGerman
    ? 'Diese Blog-Übersicht enthält praxisnahe Inhalte für pharmazeutische Teams in Deutschland, Europa und der MENA-Region.'
    : isFrench
      ? 'Cette page blog met en avant des analyses actionnables pour les équipes pharma en France, en Europe et en MENA.'
      : 'This blog index highlights practical insights for healthcare and pharma teams across Europe and MENA.';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BioNixus" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.bionixus.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BioNixus" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(blogCollectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(blogBreadcrumbSchema)}</script>
      </Helmet>
      <Navbar />
      <main>
        {(isGerman || isFrench) && (
          <section className="section-padding pt-24 pb-8">
            <div className="container-wide max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-3">{introTitle}</h1>
              <p className="text-muted-foreground leading-relaxed">{introText}</p>
            </div>
          </section>
        )}
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
