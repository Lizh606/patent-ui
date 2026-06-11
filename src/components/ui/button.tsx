import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control text-t5 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            // Variants
            "bg-brand text-text-inverse hover:bg-brand-hover active:bg-brand-active shadow-sm": variant === 'primary',
            "bg-slate-100 text-text-primary hover:bg-slate-200 active:bg-slate-300": variant === 'secondary',
            "border border-border bg-transparent text-text-primary hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100": variant === 'outline',
            "bg-transparent text-text-primary hover:bg-slate-100 active:bg-slate-200": variant === 'ghost',
            "bg-error text-text-inverse hover:bg-red-600 active:bg-red-750 shadow-sm": variant === 'destructive',
            "bg-transparent text-brand underline-offset-4 hover:underline pr-0 pl-0": variant === 'link',

            // Sizes
            "h-8 px-3 text-t6": size === 'sm',
            "h-9 px-4": size === 'md',
            "h-10 px-5 text-t4": size === 'lg',
            "h-9 w-9 p-0": size === 'icon',
          },
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
