import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set worker for Vite (react-pdf default path may not resolve)
const pdfVersion = (pdfjs as { version?: string }).version ?? '5.4.296';
if (typeof window !== 'undefined' && pdfjs.GlobalWorkerOptions) {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfVersion}/build/pdf.worker.min.mjs`;
}

interface CaseStudyPdfViewerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  pdfUrl: string;
}

export function CaseStudyPdfViewer({
  open,
  onOpenChange,
  title,
  pdfUrl,
}: CaseStudyPdfViewerProps) {
  const { t } = useLanguage();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const cs = (t as { caseStudiesPage?: Record<string, string> }).caseStudiesPage ?? {};
  const closeLabel = cs.close ?? 'Close';

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
      setNumPages(null);
      setLoadError(null);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col p-0 gap-0 [&>button]:absolute [&>button]:right-2 [&>button]:top-2 [&>button]:z-10">
        <DialogHeader className="px-6 pt-6 pb-2 shrink-0">
          <DialogTitle>{cs.pdfViewerTitle ?? 'Case Study'}: {title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 min-h-[60vh] max-h-[75vh] px-6 pb-6">
          <div className="flex flex-col items-center gap-4 py-4">
            {loadError && (
              <p className="text-destructive text-sm">{loadError}</p>
            )}
            {pdfUrl && (
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="flex items-center justify-center py-12 text-muted-foreground">
                    Loading PDF…
                  </div>
                }
              >
                {numPages !== null &&
                  Array.from(new Array(numPages), (_, i) => (
                    <Page
                      key={`page-${i + 1}`}
                      pageNumber={i + 1}
                      width={Math.min(700, typeof window !== 'undefined' ? window.innerWidth - 80 : 700)}
                      renderTextLayer
                      renderAnnotationLayer
                    />
                  ))}
              </Document>
            )}
          </div>
        </ScrollArea>
        <div className="px-6 pb-6 pt-2 shrink-0 border-t flex justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {closeLabel}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
