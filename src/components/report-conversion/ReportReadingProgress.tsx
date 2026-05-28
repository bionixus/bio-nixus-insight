import { useEffect } from 'react';

type ReportReadingProgressProps = {
  progressId: string;
};

export function ReportReadingProgress({ progressId }: ReportReadingProgressProps) {
  useEffect(() => {
    const bar = document.getElementById(progressId);
    if (!bar) return;
    const update = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (total <= 0) return;
      (bar as HTMLElement).style.width = `${(window.scrollY / total) * 100}%`;
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [progressId]);

  return <div id={progressId} className="blog-reading-progress" style={{ width: '0%' }} />;
}
