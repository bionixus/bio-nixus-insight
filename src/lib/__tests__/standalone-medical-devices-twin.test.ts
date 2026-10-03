import { describe, expect, it } from 'vitest';
import { standaloneMedicalDevicesTwin } from '@/lib/standaloneMedicalDevicesTwin';

describe('standaloneMedicalDevicesTwin', () => {
  it('returns a live devices report when the twin exists', () => {
    expect(standaloneMedicalDevicesTwin('/singapore-healthcare-market-report')).toBe(
      '/singapore-medical-devices-market-report',
    );
  });

  it('does not invent a Sweden devices URL that 404s', () => {
    expect(standaloneMedicalDevicesTwin('/sweden-healthcare-market-report')).toBeNull();
  });
});
