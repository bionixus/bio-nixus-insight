import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import { useSanityBlog } from '@/hooks/useSanityBlog';

const Blog = () => {
  const { data: posts, isLoading } = useSanityBlog();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {isLoading ? (
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
