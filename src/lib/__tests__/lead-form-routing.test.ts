import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const root = path.resolve(__dirname, '../../..');

function readSrc(rel: string) {
  return readFileSync(path.join(root, rel), 'utf8');
}

describe('lead form routing', () => {
  it('keeps Formspree off WhatsApp and gated download forms', () => {
    expect(readSrc('src/components/WhatsAppProposalWidget.tsx')).not.toMatch(/formspree/i);
    expect(readSrc('src/components/conversion/GatedAssetForm.tsx')).not.toMatch(/formspree/i);
    expect(readSrc('src/components/conversion/GatedAssetForm.tsx')).toContain('notifyDownloadLead');
    expect(readSrc('src/pages/BionixusMarketResearchMiddleEast.tsx')).toContain('destination="notify"');
    expect(readSrc('src/pages/BionixusMarketResearchMiddleEast.tsx')).not.toMatch(/formspree\.io/i);
  });

  it('removes the free-mail acknowledge / second-chance pattern', () => {
    const files = [
      'src/components/conversion/GatedAssetForm.tsx',
      'src/components/conversion/QualificationForm.tsx',
      'src/components/WhatsAppProposalWidget.tsx',
      'src/components/ContactSection.tsx',
      'src/components/CaseStudyContactGate.tsx',
    ];
    for (const file of files) {
      const src = readSrc(file);
      expect(src, file).not.toContain('freeMailAcknowledged');
      expect(src, file).not.toContain('freeMailWarning');
      expect(src, file).toContain('getWorkEmailValidationError');
    }
  });

  it('notifies admin via the Resend download route', () => {
    expect(readSrc('api/notify-download.ts')).toContain('admin@bionixus.com');
    expect(readSrc('api/notify-download.ts')).toContain('RESEND_API_KEY');
    expect(readSrc('src/lib/notifyDownloadLead.ts')).toContain('/api/notify-download');
  });
});
