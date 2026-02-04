import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgozewew';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s+\-().]{8,}$/;

type ContactGateValidation = {
  firstName?: string;
  lastName?: string;
  workEmail?: string;
  company?: string;
  phone?: string;
  emailFormat?: string;
  phoneFormat?: string;
};

interface CaseStudyContactGateProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  caseStudyTitle: string;
  onSuccess: () => void;
  /** When set (e.g. "Subscribe to continue reading"), used as dialog title instead of requestAccessTitle */
  dialogTitle?: string;
}

export function CaseStudyContactGate({
  open,
  onOpenChange,
  caseStudyTitle,
  onSuccess,
  dialogTitle,
}: CaseStudyContactGateProps) {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const c = t.contact as Record<string, string | undefined>;
  const validation = (t.contact as { validation?: ContactGateValidation }).validation;
  const v = (key: keyof ContactGateValidation) => validation?.[key] ?? '';
  const cs = (t as { caseStudiesPage?: Record<string, string> }).caseStudiesPage ?? {};
  const optional = cs.optional ?? 'Optional';
  const title = dialogTitle ?? (cs.requestAccessTitle ?? 'Enter your details to view this case study');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const firstName = (data.get('firstName') as string)?.trim() || '';
    const lastName = (data.get('lastName') as string)?.trim() || '';
    const workEmail = (data.get('workEmail') as string)?.trim() || '';
    const company = (data.get('company') as string)?.trim() || '';
    const phone = (data.get('phone') as string)?.trim() || '';
    const message = (data.get('message') as string)?.trim() || '';

    if (!firstName) next.firstName = v('firstName');
    if (!lastName) next.lastName = v('lastName');
    if (!workEmail) next.workEmail = v('workEmail');
    else if (!EMAIL_REGEX.test(workEmail)) next.workEmail = v('emailFormat');
    if (!company) next.company = v('company');
    if (phone && !PHONE_REGEX.test(phone)) next.phone = v('phoneFormat') || 'Please enter a valid phone number';

    setErrors(next);
    setSubmitError(null);
    if (Object.keys(next).length > 0) return;

    data.set('_subject', `New Form Submission - ${firstName} ${lastName}`);
    data.set('requestType', 'Case Study Access Request');
    data.set('caseStudyTitle', caseStudyTitle);

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        onSuccess();
        onOpenChange(false);
      } else {
        const json = await res.json().catch(() => ({}));
        setSubmitError(json.error || v('error'));
      }
    } catch {
      setSubmitError(v('error'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{caseStudyTitle}</DialogDescription>
        </DialogHeader>
        <form action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gate-firstName">{c.firstName}</Label>
              <Input
                id="gate-firstName"
                name="firstName"
                placeholder={c.firstNamePlaceholder}
                required
                className={errors.firstName ? 'border-destructive' : ''}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="gate-lastName">{c.lastName}</Label>
              <Input
                id="gate-lastName"
                name="lastName"
                placeholder={c.lastNamePlaceholder}
                required
                className={errors.lastName ? 'border-destructive' : ''}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="gate-workEmail">{c.workEmail}</Label>
            <Input
              id="gate-workEmail"
              name="workEmail"
              type="email"
              placeholder={c.workEmailPlaceholder}
              required
              className={errors.workEmail ? 'border-destructive' : ''}
            />
            {errors.workEmail && (
              <p className="text-sm text-destructive">{errors.workEmail}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="gate-company">{c.company}</Label>
            <Input
              id="gate-company"
              name="company"
              placeholder={c.companyPlaceholder}
              required
              className={errors.company ? 'border-destructive' : ''}
            />
            {errors.company && (
              <p className="text-sm text-destructive">{errors.company}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="gate-phone">
              {c.phoneLabel} ({optional})
            </Label>
            <Input
              id="gate-phone"
              name="phone"
              type="tel"
              placeholder="+44 20 7123 4567"
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="gate-message">
              {c.message} ({optional})
            </Label>
            <Textarea
              id="gate-message"
              name="message"
              placeholder={c.messagePlaceholder}
              rows={3}
              className="resize-none"
            />
          </div>
          {submitError && (
            <p className="text-sm text-destructive">{submitError}</p>
          )}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              {cs.close ?? 'Close'}
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? '...' : (cs.requestAccess ?? 'Request access')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
