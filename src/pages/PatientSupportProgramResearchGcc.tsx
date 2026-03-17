import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/patient-support-program-research-gcc';

export default function PatientSupportProgramResearchGcc() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Patient Support Program Research GCC | BioNixus</title>
        <meta
          name="description"
          content="Patient support program research GCC for adherence, persistence, and pathway optimization with practical evidence for pharmaceutical and medical teams."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Patient Support Program Research GCC', href: '/patient-support-program-research-gcc' }]} />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">Patient Support Program Research GCC</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              BioNixus designs patient support program research for GCC markets to improve adherence, persistence, and operational quality across diagnosis-to-treatment pathways.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>Patient-journey diagnostics with drop-off and bottleneck mapping.</li>
              <li>PSP effectiveness assessment with practical optimization hypotheses.</li>
              <li>Stakeholder evidence synthesis for medical, access, and commercial teams.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/real-world-evidence-gcc" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Real world evidence GCC
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Request PSP research scope
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

