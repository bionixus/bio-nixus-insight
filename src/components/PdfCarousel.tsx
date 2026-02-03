import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const pdfVersion = (pdfjs as { version?: string }).version ?? '5.4.296';
if (typeof window !== 'undefined' && pdfjs.GlobalWorkerOptions) {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfVersion}/build/pdf.worker.min.mjs`;
}

interface PdfCarouselProps {
  pdfUrl: string;
  className?: string;
}

export function PdfCarousel({ pdfUrl, className = '' }: PdfCarouselProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const onLoadSuccess = ({ numPages: n }: { numPages: number }) => {
    setNumPages(n);
    setLoadError(null);
  };

  const onLoadError = (error: Error) => {
    setLoadError(error.message);
    setNumPages(null);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setIsInView(true);
      },
      { rootMargin: '120px', threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    setNumPages(null);
    setLoadError(null);
  }, [pdfUrl]);

  const canPrev = currentPage > 1;
  const canNext = numPages !== null && currentPage < numPages;
  const shouldLoadPdf = Boolean(pdfUrl && isInView && !loadError);

  return (
    <div ref={containerRef} className={`rounded-xl border bg-muted/30 overflow-hidden ${className}`}>
      {loadError && (
        <p className="p-4 text-sm text-destructive">{loadError}</p>
      )}
      {pdfUrl && !loadError && (
        <>
          <div className="flex items-center justify-between gap-2 p-2 border-b bg-muted/50">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0 rounded-full h-9 w-9"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={!canPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              {numPages !== null ? `${currentPage} / ${numPages}` : '…'}
            </span>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0 rounded-full h-9 w-9"
              onClick={() => setCurrentPage((p) => Math.min(numPages ?? 1, p + 1))}
              disabled={!canNext}
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-center p-4 bg-background min-h-[320px]">
            {!shouldLoadPdf && (
              <span className="text-muted-foreground text-sm">Loading…</span>
            )}
            {shouldLoadPdf && (
              <Document
                file={pdfUrl}
                onLoadSuccess={onLoadSuccess}
                onLoadError={onLoadError}
                loading={<span className="text-muted-foreground text-sm">Loading PDF…</span>}
              >
                {numPages !== null && (
                  <Page
                    pageNumber={currentPage}
                    width={Math.min(640, typeof window !== 'undefined' ? window.innerWidth - 48 : 640)}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                )}
              </Document>
            )}
          </div>
        </>
      )}
    </div>
  );
}
