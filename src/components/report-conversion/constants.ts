export const BIONIXUS_EMAIL = 'admin@bionixus.com';
export const BIONIXUS_PHONE_US = '+18884655557';
export const BIONIXUS_PHONE_US_DISPLAY = '+1 888 465 5557';
export const BIONIXUS_PHONE_UK = '+447727666682';
export const BIONIXUS_PHONE_UK_DISPLAY = '+44 7727 666682';
/** Cairo office — Middle East, Africa & Asia */
export const BIONIXUS_PHONE_EG = '+201206882323';
export const BIONIXUS_PHONE_EG_DISPLAY = '+20 120 688 2323';

export type ReportPhoneLine = {
  tel: string;
  /** Full line shown next to the phone icon, e.g. "US No. +1 888 …" */
  label: string;
  regionLabel: string;
};

export const BIONIXUS_PHONE_LINES: ReportPhoneLine[] = [
  {
    tel: BIONIXUS_PHONE_US,
    regionLabel: 'US No.',
    label: `US No. ${BIONIXUS_PHONE_US_DISPLAY}`,
  },
  {
    tel: BIONIXUS_PHONE_UK,
    regionLabel: 'Europe No.',
    label: `Europe No. ${BIONIXUS_PHONE_UK_DISPLAY}`,
  },
  {
    tel: BIONIXUS_PHONE_EG,
    regionLabel: 'Middle East, Africa and Asia No.',
    label: `Middle East, Africa and Asia No. ${BIONIXUS_PHONE_EG_DISPLAY}`,
  },
];

/** Phone lines for report conversion CTAs and shared contact blocks. */
export function getReportPhoneLines(): ReportPhoneLine[] {
  return BIONIXUS_PHONE_LINES;
}

export function mailtoHref(subject: string): string {
  return `mailto:${BIONIXUS_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
