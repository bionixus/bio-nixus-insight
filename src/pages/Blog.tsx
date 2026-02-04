import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import { useSanityBlog } from '@/hooks/useSanityBlog';

const Blog = () => {
  const { data: posts, isLoading, isError, error } = useSanityBlog();

  return (
    <div className="min-h-screen bg-background">
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
            <div className="container-wide text-center py-20">
              <p className="text-muted-foreground">Loading articles...</p>
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
