import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy & Terms of Service | BioNixus</title>
        <meta name="description" content="BioNixus privacy policy and terms of service. GDPR-compliant data protection, cookie policy, and your rights regarding personal data collected through our healthcare market research services." />
        <link rel="canonical" href="https://www.bionixus.com/privacy" />
      </Helmet>
      <Navbar />
      <main className="section-padding py-16">
        <div className="container-wide max-w-3xl prose prose-slate dark:prose-invert">
          <h1 className="text-3xl font-display font-semibold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">Last updated: February 2026</p>

          <h2 className="mt-8 text-xl font-semibold">1. Introduction</h2>
          <p>
            BioNixus (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal data in line with the EU General Data Protection Regulation (GDPR), UK GDPR, and applicable data protection laws. This policy explains how we collect, use, store, and protect your information when you use our website and services.
          </p>

          <h2 className="mt-8 text-xl font-semibold">2. Data controller</h2>
          <p>
            BioNixus, headquartered at 1309 Coffeen Ave, Sheridan, WY 82801, USA, with a UK office at 128 City Road, London, EC1V 2NX, GB, is the data controller for the personal data we process. For questions about this policy or your data, contact us at{' '}
            <a href="mailto:admin@bionixus.com" className="text-primary underline hover:no-underline">admin@bionixus.com</a>.
          </p>

          <h2 className="mt-8 text-xl font-semibold">3. What data we collect</h2>
          <p>We may collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Contact and identity data (name, email, company, role) when you get in touch or request a proposal</li>
            <li>Usage data (IP address, browser type, pages visited) for site analytics and security</li>
            <li>Cookie data as described in our cookie notice, with your consent where required</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold">4. Legal basis and purposes</h2>
          <p>
            We process personal data only where we have a lawful basis: your consent (e.g. cookies, marketing), performance of a contract, legitimate interests (e.g. improving our services, security), or legal obligation. We use your data to respond to enquiries, provide market research services, improve our website, and comply with law.
          </p>

          <h2 className="mt-8 text-xl font-semibold">5. Cookies</h2>
          <p>
            We use essential cookies to run the site and, with your consent, optional cookies for analytics and preferences. You can change your cookie choices at any time. See our cookie banner and settings for details.
          </p>

          <h2 className="mt-8 text-xl font-semibold">6. Data retention</h2>
          <p>
            We keep your data only as long as needed for the purposes above or as required by law. When no longer needed, we delete or anonymise it.
          </p>

          <h2 className="mt-8 text-xl font-semibold">7. Your rights (GDPR)</h2>
          <p>If you are in the EEA or UK, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access, rectify, or erase your personal data</li>
            <li>Restrict or object to processing</li>
            <li>Data portability where applicable</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, contact us at{' '}
            <a href="mailto:admin@bionixus.com" className="text-primary underline hover:no-underline">admin@bionixus.com</a>.
          </p>

          <h2 className="mt-8 text-xl font-semibold">8. International transfers</h2>
          <p>
            If we transfer data outside the EEA/UK, we ensure appropriate safeguards (e.g. adequacy decisions, standard contractual clauses) are in place.
          </p>

          <h2 className="mt-8 text-xl font-semibold">9. Security</h2>
          <p>
            We implement technical and organisational measures to protect your data against unauthorised access, loss, or misuse, in line with GDPR and industry standards.
          </p>

          <h2 className="mt-8 text-xl font-semibold">10. Changes</h2>
          <p>
            We may update this policy from time to time. The &quot;Last updated&quot; date at the top will change, and we encourage you to review this page periodically.
          </p>

          <h2 id="terms" className="mt-12 text-xl font-semibold scroll-mt-20">Terms of Service</h2>
          <p>
            Use of this website and our services is subject to these terms. By using our site you agree to this Privacy Policy and our use of cookies as described.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Our commitment to you</h3>
          <p>
            We respect our clients and value the trust you place in us. BioNixus is committed to acting with integrity, transparency, and professionalism in all our engagements. We will always support you throughout our partnership—from initial enquiry through delivery and beyond—and we aim to respond to your needs promptly and fairly. Our goal is to build long-term relationships founded on mutual respect and high-quality healthcare market research.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Services and content</h3>
          <p>
            We provide healthcare market research services. Content on this site is for general information only and does not constitute professional advice. We reserve the right to update these terms; continued use after changes constitutes acceptance.
          </p>

          <p className="mt-10">
            <Link to="/" className="text-primary font-medium hover:underline">Back to home</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
