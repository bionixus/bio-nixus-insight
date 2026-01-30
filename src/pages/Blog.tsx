import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';

/**
 * Blog list page – ready for Notion integration.
 * Later: fetch posts from Notion API and pass to <BlogSection posts={notionPosts} /> or render a full list here.
 */
const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <BlogSection />
        {/* Placeholder for future full blog list when Notion is connected */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide text-center">
            <p className="text-muted-foreground mb-4">
              More articles will appear here when the blog is connected to Notion.
            </p>
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
