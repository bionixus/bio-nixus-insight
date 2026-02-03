import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const MESSAGE_PROMPT = 'Please Enter BioNixus VIP Code';
const MESSAGE_ERROR =
  'Code is wrong please contact your BioNixus Account Manager or send email to admin@bionixus.com';

interface ClientPortalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ClientPortalDialog({ open, onOpenChange }: ClientPortalDialogProps) {
  const [step, setStep] = useState<'code' | 'error'>('code');
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('error');
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setStep('code');
      setCode('');
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {step === 'code' ? MESSAGE_PROMPT : 'Invalid Code'}
          </DialogTitle>
        </DialogHeader>

        {step === 'code' ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="vip-code">VIP Code</Label>
              <Input
                id="vip-code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter code"
                className="w-full"
                autoFocus
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full sm:w-auto">
                Submit
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              {MESSAGE_ERROR}{' '}
              <a
                href="mailto:admin@bionixus.com"
                className="text-primary font-medium underline hover:no-underline"
              >
                admin@bionixus.com
              </a>
            </p>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
                Close
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
