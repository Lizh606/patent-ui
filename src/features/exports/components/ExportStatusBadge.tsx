import * as React from 'react';
import { Badge } from '@/src/components/ui/badge';
import { ExportStatus } from '../types';

interface ExportStatusBadgeProps {
  status: ExportStatus;
}

export function ExportStatusBadge({ status }: ExportStatusBadgeProps) {
  switch (status) {
    case 'Ready for Download':
      return (
        <Badge variant="success" className="px-2.5 py-1 text-t6 select-none">
          Ready for Download
        </Badge>
      );
    case 'Generating':
      return (
        <Badge variant="warning" className="px-2.5 py-1 text-t6 flex items-center gap-1.5 select-none font-medium">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
          </span>
          Generating
        </Badge>
      );
    case 'Failed':
      return (
        <Badge variant="error" className="px-2.5 py-1 text-t6 select-none">
          Failed
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}
