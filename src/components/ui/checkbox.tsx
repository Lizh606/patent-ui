import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, onCheckedChange, onChange, checked, ...props }, ref) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
      if (onCheckedChange) onCheckedChange(e.target.checked);
    };

    return (
      <input
        type="checkbox"
        ref={ref}
        checked={checked}
        onChange={handleChange}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-[4px] border border-border text-brand bg-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer accent-brand transition-standard",
          className
        )}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
