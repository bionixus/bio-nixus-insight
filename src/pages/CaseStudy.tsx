import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { fetchCaseStudyBySlug } from '@/lib/sanity-case-studies';
import { isCaseStudiesConfigured } from '@/lib/sanity-case-studies';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PdfCarousel } from '@/components/PdfCarousel';
import { ArrowLeft } from 'lucide-react';

function sanitizeBodyHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ADD_ATTR: ['class', 'style'],
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'br', 'hr',
      'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'a', 'blockquote',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'sub', 'sup',
    ],
    ALLOW_DATA_ATTR: false,
  });
}

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const cs = (t as { caseStudiesPage?: Record<string, string> }).caseStudiesPage ?? {};

  const { data: caseStudy, isLoading, isError } = useQuery({
    queryKey: ['case-study', slug],
    queryFn: () => fetchCaseStudyBySlug(slug!),
    enabled: Boolean(slug) && isCaseStudiesConfigured(),
  });

  if (!slug) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding container-wide">
          <p className="text-muted-foreground">Invalid case study.</p>
          <Link to="/case-studies" className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" /> {cs.backToHome ?? 'Back to case studies'}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding container-wide">
          <p className="text-muted-foreground">Loading case study…</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!caseStudy || isError) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding container-wide">
          <p className="text-muted-foreground">Case study not found.</p>
          <Link to="/case-studies" className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" /> {cs.backToHome ?? 'Back to case studies'}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> {cs.backToHome ?? 'Back to case studies'}
          </Link>

          <article>
            <div className="flex flex-wrap gap-3 mb-4">
              {caseStudy.category && (
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {caseStudy.category}
                </span>
              )}
              {caseStudy.country && (
                <span className="text-sm text-muted-foreground">{caseStudy.country}</span>
              )}
              {caseStudy.date && (
                <span className="text-sm text-muted-foreground">{caseStudy.date}</span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              {caseStudy.title}
            </h1>

            {caseStudy.pdfUrl && (
              <div className="mb-10">
                <PdfCarousel pdfUrl={caseStudy.pdfUrl} />
              </div>
            )}

            {caseStudy.coverImage && (
              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-8 bg-muted">
                <img
                  src={caseStudy.coverImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {caseStudy.excerpt && (
              <p className="text-muted-foreground leading-relaxed mb-8">
                {caseStudy.excerpt}
              </p>
            )}

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {caseStudy.body ? (
                <div
                  className="prose-body text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sanitizeBodyHtml(caseStudy.body) }}
                />
              ) : null}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
