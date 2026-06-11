import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-9 w-full rounded-control border border-border bg-transparent px-3 py-1 text-t5 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-t5 file:font-medium placeholder:text-text-tertiary focus-visible:outline-none focus-visible:border-brand focus-visible:ring-1 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
