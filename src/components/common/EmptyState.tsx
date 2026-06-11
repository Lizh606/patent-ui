import * as React from 'react';
import { Button } from '@/src/components/ui/button';
import { FileQuestion } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  title?: string;
  description?: string;
  onActionClick?: () => void;
  actionText?: string;
  className?: string;
}

export function EmptyState({
  title = "No export packages found",
  description = "No packages match your chosen filters. Try loosening your search criteria or resetting filters.",
  onActionClick,
  actionText = "Clear Filters",
  className
}: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-border rounded-card bg-bg-card max-w-lg mx-auto mt-8", className)}>
      <div className="rounded-full bg-slate-100 p-3 mb-4 ring-8 ring-slate-100/50">
        <FileQuestion className="h-6 w-6 text-text-secondary" />
      </div>
      <h3 className="text-t3 font-semibold text-text-primary mb-1">{title}</h3>
      <p className="text-t5 text-text-secondary max-w-sm mb-6 leading-relaxed">
        {description}
      </p>
      {onActionClick && (
        <Button variant="outline" size="sm" onClick={onActionClick}>
          {actionText}
        </Button>
      )}
    </div>
  );
}
