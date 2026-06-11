import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  align?: 'left' | 'right' | 'center';
}

export function Popover({ children, content, align = 'center' }: PopoverProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={triggerRef} className="relative inline-block text-left">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {children}
      </div>

      {isOpen && (
        <div
          className={cn(
            "absolute z-50 mt-2 w-72 rounded-panel border border-border bg-bg-card p-4 text-text-primary shadow-overlay animate-in fade-in-80 duration-150-webkit",
            {
              "right-0": align === 'right',
              "left-0": align === 'left',
              "left-1/2 -translate-x-1/2": align === 'center',
            }
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
