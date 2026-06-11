import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  // ESC key to close
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/45 backdrop-blur-xs transition-opacity duration-150"
        onClick={() => onOpenChange(false)}
      />
      {/* Modal Wrapper */}
      <div className="relative z-50 w-full max-w-lg scale-100 p-4 animate-in zoom-in-95 duration-150">
        <div className="rounded-panel border border-border bg-bg-card p-6 shadow-overlay">
          {children}
        </div>
      </div>
    </div>
  );
}

export function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left pb-4 border-b border-border mb-4", className)} {...props} />
  );
}

export function DialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-t3 font-semibold leading-none tracking-tight text-text-primary", className)}
      {...props}
    />
  );
}

export function DialogDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-t5 text-text-secondary mt-1", className)}
      {...props}
    />
  );
}

export function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6 pt-4 border-t border-border", className)}
      {...props}
    />
  );
}

export function DialogClose({ onClick, ...props }: { onClick?: () => void; children: React.ReactNode }) {
  return (
    <Button variant="outline" onClick={onClick} {...props} />
  );
}
