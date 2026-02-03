import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import DOMPurify from 'dompurify';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CaseStudyContactGate } from '@/components/CaseStudyContactGate';
import type { CaseStudy } from '@/types/caseStudy';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const pdfVersion = (pdfjs as { version?: string }).version ?? '5.4.296';
if (typeof window !== 'undefined' && pdfjs.GlobalWorkerOptions) {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfVersion}/build/pdf.worker.min.mjs`;
}

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

const FREE_SLIDES_COUNT = 3;

interface CaseStudyDetailViewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  caseStudy: CaseStudy;
  accessGranted: boolean;
  onSubscribeSuccess: () => void;
}

export function CaseStudyDetailView({
  open,
  onOpenChange,
  caseStudy,
  accessGranted,
  onSubscribeSuccess,
}: CaseStudyDetailViewProps) {
  const { t } = useLanguage();
  const cs = (t as { caseStudiesPage?: Record<string, string> }).caseStudiesPage ?? {};
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [subscribeOpen, setSubscribeOpen] = useState(false);

  const slideOf = (cs.slideOf ?? 'Slide {current} of {total}')
    .replace('{current}', String(currentSlide + 1))
    .replace('{total}', String(numPages ?? 0));
  const canGoPrev = currentSlide > 0;
  const canGoNext = numPages !== null && currentSlide < numPages - 1;
  const wouldHitGate = !accessGranted && currentSlide === FREE_SLIDES_COUNT - 1 && canGoNext;

  const handlePrev = () => {
    if (canGoPrev) setCurrentSlide((s) => s - 1);
  };

  const handleNext = () => {
    if (!canGoNext) return;
    if (wouldHitGate) {
      setSubscribeOpen(true);
      return;
    }
    setCurrentSlide((s) => s + 1);
  };

  const onDocumentLoadSuccess = ({ numPages: n }: { numPages: number }) => {
    setNumPages(n);
    setLoadError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    setLoadError(error.message);
    setNumPages(null);
  };

  useEffect(() => {
    if (!open) {
      setCurrentSlide(0);
      setNumPages(null);
      setLoadError(null);
      setSubscribeOpen(false);
    }
  }, [open]);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0 [&>button]:absolute [&>button]:right-2 [&>button]:top-2 [&>button]:z-10">
          <DialogHeader className="px-6 pt-6 pb-2 shrink-0">
            <DialogTitle>{caseStudy.title}</DialogTitle>
          </DialogHeader>

          <ScrollArea className="flex-1 min-h-[50vh] max-h-[85vh] px-6 pb-6">
            {/* Cover image */}
            {caseStudy.coverImage && (
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-muted">
                <img
                  src={caseStudy.coverImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Excerpt */}
            {caseStudy.excerpt && (
              <p className="text-muted-foreground leading-relaxed mb-6">
                {caseStudy.excerpt}
              </p>
            )}

            {/* Body (HTML) */}
            {caseStudy.body && (
              <div
                className="prose prose-sm max-w-none dark:prose-invert mb-8"
                dangerouslySetInnerHTML={{
                  __html: sanitizeBodyHtml(caseStudy.body),
                }}
              />
            )}

            {/* PDF slides carousel (LinkedIn-style: one slide, arrows) */}
            {caseStudy.pdfUrl && (
              <div className="border rounded-xl bg-muted/30 p-4 mb-6">
                <p className="text-sm font-medium text-foreground mb-3">
                  {cs.pdfViewerTitle ?? 'Case Study'} – {slideOf}
                </p>
                {loadError && (
                  <p className="text-destructive text-sm mb-3">{loadError}</p>
                )}
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="shrink-0 rounded-full h-10 w-10"
                    onClick={handlePrev}
                    disabled={!canGoPrev}
                    aria-label={cs.previousSlide ?? 'Previous'}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <div className="flex-1 flex justify-center min-h-[400px] items-center bg-background rounded-lg overflow-hidden">
                    {caseStudy.pdfUrl && (
                      <Document
                        file={caseStudy.pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        loading={
                          <div className="text-muted-foreground py-12">
                            Loading…
                          </div>
                        }
                      >
                        {numPages !== null && currentSlide < numPages && (
                          <Page
                            pageNumber={currentSlide + 1}
                            width={Math.min(600, typeof window !== 'undefined' ? window.innerWidth - 120 : 600)}
                            renderTextLayer
                            renderAnnotationLayer
                          />
                        )}
                      </Document>
                    )}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="shrink-0 rounded-full h-10 w-10"
                    onClick={handleNext}
                    disabled={!canGoNext}
                    aria-label={cs.nextSlide ?? 'Next'}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
                {!accessGranted && (numPages ?? 0) > FREE_SLIDES_COUNT && (
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    {cs.subscribeToContinue ?? 'Subscribe to continue reading'} – {FREE_SLIDES_COUNT} of {numPages} slides visible.
                  </p>
                )}
              </div>
            )}

            <div className="flex justify-end pb-4">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                {cs.close ?? 'Close'}
              </Button>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <CaseStudyContactGate
        open={subscribeOpen}
        onOpenChange={setSubscribeOpen}
        caseStudyTitle={caseStudy.title}
        onSuccess={() => {
          onSubscribeSuccess();
          setSubscribeOpen(false);
        }}
        dialogTitle={cs.subscribeToContinueTitle ?? cs.subscribeToContinue ?? 'Subscribe to continue reading'}
      />
    </>
  );
}
