import * as React from 'react';
import { cn } from '@/lib/utils';

export function Breadcrumb({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav aria-label="breadcrumb" className={cn("text-t6 text-text-secondary flex items-center", className)} {...props}>
      <ol className="flex flex-wrap items-center gap-1.5 break-words">
        {children}
      </ol>
    </nav>
  );
}

export function BreadcrumbItem({ className, children, ...props }: React.ComponentPropsWithoutRef<"li">) {
  return (
    <li className={cn("inline-flex items-center gap-1.5", className)} {...props}>
      {children}
    </li>
  );
}

export function BreadcrumbSeparator({ children, className, ...props }: React.ComponentPropsWithoutRef<"li">) {
  return (
    <li role="presentation" aria-hidden="true" className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5 text-text-tertiary", className)} {...props}>
      {children || (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </li>
  );
}

export function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { asChild?: boolean }) {
  return (
    <a
      className={cn("hover:text-text-primary transition-colors cursor-pointer", className)}
      {...props}
    />
  );
}

export function BreadcrumbPage({ className, children, ...props }: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-medium text-text-primary", className)}
      {...props}
    >
      {children}
    </span>
  );
}
