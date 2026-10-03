/** Standalone device reports that have a route. Guessing the twin path 404s (Sweden). */
const PUBLISHED_MEDICAL_DEVICES_REPORTS = new Set([
  '/saudi-arabia-medical-devices-market-report',
  '/uae-medical-devices-market-report',
  '/gcc-medical-devices-market-report',
  '/kuwait-medical-devices-market-report',
  '/qatar-medical-devices-market-report',
  '/bahrain-medical-devices-market-report',
  '/oman-medical-devices-market-report',
  '/egypt-medical-devices-market-report',
  '/uk-medical-devices-market-report',
  '/germany-medical-devices-market-report',
  '/france-medical-devices-market-report',
  '/italy-medical-devices-market-report',
  '/spain-medical-devices-market-report',
  '/usa-medical-devices-market-report',
  '/brazil-medical-devices-market-report',
  '/canada-medical-devices-market-report',
  '/india-medical-devices-market-report',
  '/china-medical-devices-market-report',
  '/japan-medical-devices-market-report',
  '/south-korea-medical-devices-market-report',
  '/australia-medical-devices-market-report',
  '/singapore-medical-devices-market-report',
  '/turkey-medical-devices-market-report',
]);

export function standaloneMedicalDevicesTwin(healthcarePath: string): string | null {
  if (!healthcarePath.includes('-healthcare-market-report')) return null;
  const twin = healthcarePath.replace('-healthcare-market-report', '-medical-devices-market-report');
  return PUBLISHED_MEDICAL_DEVICES_REPORTS.has(twin) ? twin : null;
}
