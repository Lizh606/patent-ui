import * as React from 'react';
import { Alert, AlertDescription } from '@/src/components/ui/alert';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InfoBannerProps {
  message: string;
  variant?: 'info' | 'warning' | 'destructive' | 'default';
  className?: string;
  action?: React.ReactNode;
}

export function InfoBanner({ message, variant = 'info', className, action }: InfoBannerProps) {
  return (
    <Alert variant={variant} className={cn("flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 shadow-sm", className)}>
      <div className="flex items-start gap-3 min-w-0">
        <Info className="h-4.5 w-4.5 mt-0.5 shrink-0" />
        <AlertDescription className="text-t5 font-medium leading-relaxed break-words">
          {message}
        </AlertDescription>
      </div>
      {action && <div className="sm:ml-4 shrink-0 w-full sm:w-auto flex justify-start sm:justify-end">{action}</div>}
    </Alert>
  );
}
