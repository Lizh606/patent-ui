import * as React from 'react';
import { cn } from '@/lib/utils';

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

export function Tabs({
  value,
  defaultValue,
  onValueChange,
  children,
  className
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const [activeValue, setActiveValue] = React.useState(value || defaultValue || "");
  const [prevValue, setPrevValue] = React.useState(value);

  if (value !== undefined && value !== prevValue) {
    setActiveValue(value);
    setPrevValue(value);
  }

  const handleValueChange = (val: string) => {
    if (value === undefined) {
      setActiveValue(val);
    }
    if (onValueChange) {
      onValueChange(val);
    }
  };

  return (
    <TabsContext.Provider value={{ value: activeValue, onValueChange: handleValueChange }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("inline-flex items-center justify-center rounded-control bg-slate-100 p-1 text-text-secondary border border-border/40", className)}>
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used inside Tabs");

  const isActive = context.value === value;

  return (
    <button
      type="button"
      onClick={() => context.onValueChange(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-control px-3 py-1.5 text-t6 font-semibold transition-standard cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-bg-card text-text-primary shadow-sm"
          : "text-text-secondary hover:text-text-primary hover:bg-slate-50/50",
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
  className
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used inside Tabs");

  if (context.value !== value) return null;

  return (
    <div className={cn("mt-2 focus-visible:outline-none", className)}>
      {children}
    </div>
  );
}
