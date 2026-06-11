import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export function Separator({ className, orientation = 'horizontal', ...props }: SeparatorProps) {
  return (
    <div
      role="none"
      className={cn(
        "shrink-0 bg-border",
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px mx-1',
        className
      )}
      {...props}
    />
  );
}
