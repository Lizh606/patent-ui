'use client';

import * as React from 'react';
import { PatentShell } from '@/src/components/shell/PatentShell';
import { ExportListPage } from '@/src/features/exports/components/ExportListPage';

export default function ExportsPage() {
  return (
    <PatentShell currentRoute="/exports">
      <ExportListPage />
    </PatentShell>
  );
}
