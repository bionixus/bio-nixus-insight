import { describe, expect, it } from 'vitest';
import { finishHub } from '@/data/companyDirectories/build';
import {
  medicalDeviceCompaniesHub,
  pharmaceuticalCompaniesHub,
  pharmaceuticalDistributorsHub,
} from '@/data/companyDirectories/hubs/entities';

const APPROVED = 'Medical Device Company Directory by Country (2026)';

describe('medical device hub title', () => {
  it('ships the approved title without trimming the h1 or description', () => {
    const hub = finishHub(medicalDeviceCompaniesHub);
    expect(hub.path).toBe('/medical-device-companies');
    expect(hub.title).toBe(APPROVED);
    expect(Array.from(hub.title)).toHaveLength(50);
    expect(hub.h1).toBe('Medical Device Companies by country');
    expect(hub.metaDescription).toBe(medicalDeviceCompaniesHub.metaDescription);
    expect(hub.modifiedDate).toBe('2026-11-26');
  });

  it('leaves the other truncated hub titles on the shared template', () => {
    expect(finishHub(pharmaceuticalCompaniesHub).title).toBe(
      'Pharmaceutical Companies by Country (2026 Directories) | BioNixus',
    );
    expect(finishHub(pharmaceuticalDistributorsHub).title).toBe(
      'Pharmaceutical Distributors by Country (2026 Directories) | BioNixus',
    );
  });
});
