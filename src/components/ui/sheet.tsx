import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  side?: 'left' | 'right';
  className?: string;
}

export function Sheet({ open, onOpenChange, children, side = 'right', className }: SheetProps) {
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
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/45 backdrop-blur-xs transition-opacity duration-200"
        onClick={() => onOpenChange(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 z-50 h-full w-full max-w-sm bg-bg-card border-border border-l p-6 shadow-overlay transition-transform duration-200 ease-in-out scroll-bar overflow-y-auto",
          {
            "left-0 border-r border-l-0": side === 'left',
            "right-0": side === 'right',
          },
          className
        )}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-control p-1.5 text-slate-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-1 focus:ring-brand transition-colors duration-150"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="flex flex-col h-full">{children}</div>
      </div>
    </div>
  );
}

export function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-2 text-left pb-4 border-b border-border mb-4", className)} {...props} />
  );
}

export function SheetTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-t3 font-semibold text-text-primary", className)} {...props} />
  );
}

export function SheetDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-t5 text-text-secondary mt-1", className)} {...props} />
  );
}
