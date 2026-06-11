import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center md:justify-end select-none", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1.5", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"button">;

const PaginationLink = ({
  className,
  isActive,
  ...props
}: PaginationLinkProps) => (
  <button
    type="button"
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "h-8 w-8 text-t6 font-semibold rounded-control border border-border text-text-secondary hover:bg-bg-page hover:text-text-primary transition-standard flex items-center justify-center cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-50 disabled:cursor-not-allowed",
      isActive && "bg-brand text-text-inverse border-brand hover:bg-brand hover:text-text-inverse shadow-sm",
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn("gap-1 px-2.5 h-8 w-auto text-t6 font-bold", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4 shrink-0" />
    <span>Prev</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn("gap-1 px-2.5 h-8 w-auto text-t6 font-bold", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4 shrink-0" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-8 w-8 items-center justify-center text-text-disabled text-t6 select-none", className)}
    {...props}
  >
    <MoreHorizontal className="h-4.5 w-4.5 shrink-0" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
