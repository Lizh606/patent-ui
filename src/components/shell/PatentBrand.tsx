import * as React from 'react';
import { ShieldCheck } from 'lucide-react';

export function PatentBrand() {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="flex h-9 w-9 items-center justify-center rounded-control bg-brand text-text-inverse shadow-sm">
        <span className="font-sans font-bold text-lg tracking-tight">P</span>
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-bold text-t4 leading-tight tracking-tight text-sidebar-text">
          Patent
        </span>
        <span className="font-sans font-medium text-t6 leading-none text-sidebar-text-muted">
          EvidenceFlow
        </span>
      </div>
    </div>
  );
}
