import { describe, expect, it } from 'vitest';
import { getSeoExportName } from '@/routes/lazySeoPages';

describe('video watch page preload', () => {
  it('resolves watch URLs to VideoWatchPage so SSR is not an empty shell', () => {
    expect(getSeoExportName('/videos')).toBe('VideosIndex');
    expect(getSeoExportName('/videos/healthcare-market-research-overview')).toBe('VideoWatchPage');
    expect(getSeoExportName('/videos/consumer-b2b-market-research')).toBe('VideoWatchPage');
  });
});
