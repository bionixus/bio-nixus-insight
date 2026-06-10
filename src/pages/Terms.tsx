import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | BioNixus</title>
        <meta
          name="description"
          content="BioNixus terms of service for our website and healthcare market research: acceptable use, confidentiality, and client policies."
        />
        <link rel="canonical" href="https://www.bionixus.com/terms" />
      </Helmet>
      <Navbar />
      <main className="section-padding py-16">
        <div className="container-wide max-w-3xl prose prose-slate dark:prose-invert">
          <h1 className="text-3xl font-display font-semibold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground text-sm">Last updated: February 2026</p>
          <p className="text-muted-foreground text-sm">
            Related pages:{' '}
            <Link to="/privacy" className="text-primary underline hover:no-underline">Privacy Policy</Link>{' '}
            ·{' '}
            <Link to="/contact" className="text-primary underline hover:no-underline">Contact</Link>{' '}
            ·{' '}
            <Link to="/services" className="text-primary underline hover:no-underline">Services</Link>{' '}
            ·{' '}
            <Link to="/faq" className="text-primary underline hover:no-underline">FAQ</Link>{' '}
            ·{' '}
            <Link to="/methodology" className="text-primary underline hover:no-underline">Methodology</Link>
          </p>

          <h2 className="mt-8 text-xl font-semibold">1. Acceptance of terms</h2>
          <p>
            Use of this website and our services is subject to these terms. By using our site you agree to these Terms of Service and our{' '}
            <Link to="/privacy" className="text-primary underline hover:no-underline">Privacy Policy</Link>.
          </p>

          <h2 className="mt-8 text-xl font-semibold">2. Our commitment to you</h2>
          <p>
            We respect our clients and value the trust you place in us. BioNixus is committed to acting with integrity, transparency, and professionalism in all our engagements. We will always support you throughout our partnership—from initial enquiry through delivery and beyond—and we aim to respond to your needs promptly and fairly. Our goal is to build long-term relationships founded on mutual respect and high-quality healthcare market research.
          </p>

          <h2 className="mt-8 text-xl font-semibold">3. Services and content</h2>
          <p>
            We provide healthcare market research services. Content on this site is for general information only and does not constitute professional advice. We reserve the right to update these terms; continued use after changes constitutes acceptance.
          </p>

          <p className="mt-10 flex gap-6">
            <Link to="/privacy" className="text-primary font-medium hover:underline">Privacy Policy</Link>
            <Link to="/contact" className="text-primary font-medium hover:underline">Contact</Link>
            <Link to="/" className="text-primary font-medium hover:underline">Back to home</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
