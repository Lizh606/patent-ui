import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, label, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center">
        {label && (
          <span className="text-t6 font-semibold text-text-secondary leading-none mr-2 uppercase tracking-wider">
            {label}
          </span>
        )}
        <div className="relative min-w-[120px]">
          <select
            ref={ref}
            className={cn(
              "flex h-9 w-full appearance-none rounded-control border border-border bg-transparent pl-3 pr-8 py-1 text-t5 shadow-sm transition-colors focus:border-brand focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            {...props}
          >
            {children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
            <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
