import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export function Tooltip({ children, content, className }: TooltipProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div
          className={cn(
            "absolute bottom-full left-1/2 z-tooltip mb-2 -translate-x-1/2 rounded bg-slate-900 px-2 py-1.5 text-t6 font-medium text-text-inverse shadow-sm whitespace-no-wrap max-w-xs text-center animate-in fade-in zoom-in-95 duration-100",
            className
          )}
        >
          {content}
          <div className="absolute top-full left-1/2 -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900" />
        </div>
      )}
    </div>
  );
}
