import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-control border px-2 py-0.5 text-t7 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2",
        {
          "bg-slate-900 text-text-inverse border-transparent": variant === 'default',
          "bg-slate-100 text-text-secondary border-slate-200": variant === 'secondary',
          "bg-success-bg text-success border-success-border font-medium": variant === 'success',
          "bg-warning-bg text-warning border-warning-border font-medium": variant === 'warning',
          "bg-error-bg text-error border-error-border font-medium": variant === 'error',
          "bg-info-bg text-info border-info-border font-medium": variant === 'info',
          "text-text-primary border-border bg-transparent": variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
