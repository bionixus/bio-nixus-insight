import { describe, expect, it } from 'vitest';
import {
  mergeRows,
  noteToRow,
  parseCsv,
  parseLeadNote,
  rowsInRange,
  toCsv,
} from '../../../scripts/leads/export-highlevel-leads.mjs';
import { buildNote } from '@/server/highlevelLead';

const SCOPING_FIELDS = {
  firstName: 'Jane',
  lastName: 'Doe',
  workEmail: 'jane.doe@pharma.com',
  company: 'Pharma Co',
  requestType: 'Scoping Call Request',
  formVariant: 'healthcare_hub_who_to_brief',
  sourcePage: '/healthcare-market-research',
  need: 'Market access',
  markets: 'Saudi Arabia, United Arab Emirates',
  timeline: '1-3 months',
  budget: '$50K-150K',
  qualified: 'yes',
  utmSource: 'google',
};

describe('export-highlevel-leads', () => {
  it('parses the note written by the HighLevel lead handler', () => {
    const fields = parseLeadNote(buildNote(SCOPING_FIELDS));
    expect(fields).toMatchObject({
      request_type: 'Scoping Call Request',
      form: 'healthcare_hub_who_to_brief',
      source_page: '/healthcare-market-research',
      need: 'Market access',
      markets: 'Saudi Arabia, United Arab Emirates',
      timeline: '1-3 months',
      budget: '$50K-150K',
      qualified: 'yes',
      utm_source: 'google',
    });
  });

  it('ignores notes that are not website-lead notes', () => {
    expect(parseLeadNote('Called back, left voicemail')).toBeNull();
    expect(noteToRow({ id: 'n1', body: 'Manual note', dateAdded: '2026-10-01T10:00:00Z' })).toBeNull();
  });

  it('flags scoping calls as meeting requests and keeps no personal data', () => {
    const row = noteToRow({ id: 'n1', body: buildNote(SCOPING_FIELDS), dateAdded: '2026-10-02T08:30:00Z' });
    expect(row).toMatchObject({ date: '2026-10-02', meeting_request: 'yes', note_id: 'n1' });
    const csv = toCsv([row!]);
    expect(csv).not.toMatch(/jane|doe|pharma\.com|Pharma Co/i);

    const enquiry = noteToRow({
      id: 'n2',
      body: buildNote({ ...SCOPING_FIELDS, requestType: 'Research Enquiry (below minimum)' }),
      dateAdded: '2026-10-02T09:00:00Z',
    });
    expect(enquiry?.meeting_request).toBe('no');
  });

  it('round-trips CSV with commas in fields and de-duplicates on note id', () => {
    const a = noteToRow({ id: 'n1', body: buildNote(SCOPING_FIELDS), dateAdded: '2026-10-02T08:30:00Z' })!;
    const b = { ...a, note_id: 'n2', date: '2026-10-03' };
    const parsed = parseCsv(toCsv([a]));
    expect(parsed[0].markets).toBe('Saudi Arabia, United Arab Emirates');
    const merged = mergeRows(parsed, [a, b]);
    expect(merged.map((r) => r.note_id)).toEqual(['n2', 'n1']);
    expect(rowsInRange(merged, '2026-10-03', '2026-10-04').map((r) => r.note_id)).toEqual(['n2']);
  });
});
