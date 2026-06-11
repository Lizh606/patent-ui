import * as React from 'react';
import { cn } from '@/lib/utils';

interface DropdownMenuContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement | null>;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextType | undefined>(undefined);

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  // Close when clicking outside
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
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen, triggerRef }}>
      <div ref={triggerRef} className="relative inline-block text-left">
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  const context = React.useContext(DropdownMenuContext);
  if (!context) throw new Error("DropdownMenuTrigger must be used inside DropdownMenu");

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    context.setIsOpen(!context.isOpen);
  };

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>;
    return React.cloneElement(child, {
      onClick: (e: React.MouseEvent) => {
        if (child.props.onClick) child.props.onClick(e);
        toggle(e);
      },
    });
  }

  return (
    <div onClick={toggle} className="cursor-pointer">
      {children}
    </div>
  );
}

export function DropdownMenuContent({
  children,
  align = 'right',
  className
}: {
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}) {
  const context = React.useContext(DropdownMenuContext);
  if (!context) throw new Error("DropdownMenuContent must be used inside DropdownMenu");

  if (!context.isOpen) return null;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "absolute z-50 mt-1 w-56 rounded-panel border border-border bg-bg-card p-1 text-text-primary shadow-overlay animate-in fade-in-80 slide-in-from-top-1 duration-100",
        align === 'right' ? 'right-0' : 'left-0',
        className
      )}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  children,
  onClick,
  disabled,
  className
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}) {
  const context = React.useContext(DropdownMenuContext);

  const handleItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (disabled) return;
    if (onClick) onClick(e);
    if (context) context.setIsOpen(false);
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleItemClick}
      className={cn(
        "flex w-full items-center rounded-control px-2 py-1.5 text-left text-t5 text-text-primary hover:bg-slate-100 focus:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 transition-colors cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-border hover:bg-transparent" />;
}
