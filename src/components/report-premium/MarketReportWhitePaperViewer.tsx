import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download, X } from 'lucide-react';
import type { MarketReportWhitePaper } from '@/data/marketReportWhitePapers';

interface MarketReportWhitePaperViewerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  whitePaper: MarketReportWhitePaper;
}

export function MarketReportWhitePaperViewer({
  open,
  onOpenChange,
  whitePaper,
}: MarketReportWhitePaperViewerProps) {
  const docUrl = whitePaper.publicPath;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[min(96vw,1200px)] w-full h-[min(92vh,900px)] p-0 gap-0 flex flex-col overflow-hidden">
        <DialogHeader className="px-5 py-4 border-b border-border shrink-0 space-y-1">
          <div className="flex items-start justify-between gap-4 pr-8">
            <div>
              <DialogTitle className="text-left text-base font-display font-semibold leading-snug">
                {whitePaper.title}
              </DialogTitle>
              <p className="text-xs text-muted-foreground mt-1">{whitePaper.pageCountLabel}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button asChild size="sm" variant="default">
              <a href={docUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1.5" aria-hidden />
                Open full report
              </a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={docUrl} download={`${whitePaper.reportSlug}.html`}>
                <Download className="w-4 h-4 mr-1.5" aria-hidden />
                Download HTML
              </a>
            </Button>
            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="ml-auto"
            >
              <X className="w-4 h-4 mr-1" aria-hidden />
              Close
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-1 min-h-0 bg-muted/30">
          <iframe
            title={whitePaper.title}
            src={docUrl}
            className="w-full h-full border-0 bg-white"
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
