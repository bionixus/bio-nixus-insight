export function standaloneMedicalDevicesTwin(healthcarePath: string): string | null {
  if (!healthcarePath.includes('-healthcare-market-report')) return null;
  return healthcarePath.replace('-healthcare-market-report', '-medical-devices-market-report');
}
