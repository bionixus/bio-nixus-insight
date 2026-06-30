import { useCallback, useEffect, useState } from 'react';
import { BookOpen, Download, FileText, Lock, Unlock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { MarketReportWhitePaper } from '@/data/marketReportWhitePapers';
import {
  grantWhitePaperAccess,
  hasWhitePaperAccess,
} from '@/lib/marketReportWhitePaperAccess';
import { MarketReportContactGate } from '@/components/report-premium/MarketReportContactGate';
import { MarketReportWhitePaperViewer } from '@/components/report-premium/MarketReportWhitePaperViewer';

interface MarketReportWhitePaperBandProps {
  whitePaper: MarketReportWhitePaper;
}

export function MarketReportWhitePaperBand({ whitePaper }: MarketReportWhitePaperBandProps) {
  const [accessGranted, setAccessGranted] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<'browse' | 'download' | null>(null);

  useEffect(() => {
    setAccessGranted(hasWhitePaperAccess(whitePaper.reportSlug));
  }, [whitePaper.reportSlug]);

  const openAfterAccess = useCallback(
    (action: 'browse' | 'download') => {
      if (action === 'browse') {
        setViewerOpen(true);
        return;
      }
      const anchor = document.createElement('a');
      anchor.href = whitePaper.publicPath;
      anchor.download = `${whitePaper.reportSlug}.html`;
      anchor.rel = 'noopener';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
    },
    [whitePaper.publicPath, whitePaper.reportSlug],
  );

  const requestAccess = (action: 'browse' | 'download') => {
    if (accessGranted) {
      openAfterAccess(action);
      return;
    }
    setPendingAction(action);
    setGateOpen(true);
  };

  const handleGateSuccess = () => {
    grantWhitePaperAccess(whitePaper.reportSlug);
    setAccessGranted(true);
    setGateOpen(false);
    if (pendingAction) {
      openAfterAccess(pendingAction);
      setPendingAction(null);
    }
  };

  return (
    <>
      <section
        id="full-report-white-paper"
        className="py-14 md:py-16 px-6 border-t border-border/60"
        aria-labelledby="white-paper-band-title"
      >
        <div className="max-w-screen-lg mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl border border-border/80 shadow-lg"
            style={{
              background:
                'linear-gradient(145deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 55%, hsl(215 45% 22%) 100%)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background:
                  'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--gold-light)) 50%, transparent 100%)',
              }}
              aria-hidden
            />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] p-8 md:p-10 lg:p-12">
              <div>
                <p className="text-[10px] font-extrabold tracking-[0.18em] uppercase text-white/50 mb-3 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" aria-hidden />
                  Comprehensive white paper
                </p>
                <h2
                  id="white-paper-band-title"
                  className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-4 text-balance"
                >
                  {whitePaper.title}
                </h2>
                <p className="text-sm md:text-[15px] text-white/70 leading-relaxed mb-6 max-w-xl">
                  {whitePaper.subtitle}
                </p>
                <p className="text-xs text-white/45 mb-6">{whitePaper.pageCountLabel}</p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <Button
                    type="button"
                    size="lg"
                    className="font-bold shadow-lg"
                    style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
                    onClick={() => requestAccess('browse')}
                  >
                    {accessGranted ? (
                      <>
                        <BookOpen className="w-4 h-4 mr-2" aria-hidden />
                        Browse full report
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-2" aria-hidden />
                        Unlock &amp; browse full report
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                    onClick={() => requestAccess('download')}
                  >
                    {accessGranted ? (
                      <>
                        <Download className="w-4 h-4 mr-2" aria-hidden />
                        Download report
                      </>
                    ) : (
                      <>
                        <Unlock className="w-4 h-4 mr-2" aria-hidden />
                        Unlock &amp; download
                      </>
                    )}
                  </Button>
                </div>
                {!accessGranted && (
                  <p className="text-xs text-white/45 mt-4 max-w-md">
                    Work email and company required. Once verified, you can browse the full HTML report in-browser or
                    download for offline reading and print-to-PDF.
                  </p>
                )}
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-7">
                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/45 mb-4">
                  What&apos;s inside
                </p>
                <ul className="space-y-3 list-none p-0 m-0">
                  {whitePaper.sections.map((section) => (
                    <li
                      key={section}
                      className="flex items-start gap-3 text-sm text-white/80 leading-snug"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: 'hsl(var(--accent))' }}
                        aria-hidden
                      />
                      {section}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-white/40 mt-6 leading-relaxed">
                  Published {whitePaper.publishedDate} · BioNixus market intelligence · Planning estimates; validate
                  live policy before implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketReportContactGate
        open={gateOpen}
        onOpenChange={setGateOpen}
        reportTitle={whitePaper.title}
        reportSlug={whitePaper.reportSlug}
        onSuccess={handleGateSuccess}
      />

      {accessGranted && (
        <MarketReportWhitePaperViewer
          open={viewerOpen}
          onOpenChange={setViewerOpen}
          whitePaper={whitePaper}
        />
      )}
    </>
  );
}
