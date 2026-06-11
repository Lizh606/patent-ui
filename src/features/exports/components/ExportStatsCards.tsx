import * as React from 'react';
import { Card, CardContent } from '@/src/components/ui/card';
import { Folder, CheckCircle, Clock, AlertTriangle, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ExportStatsCards() {
  const stats = [
    {
      title: "Total Packages",
      value: "28",
      helper: "All time records",
      icon: Folder,
      colorClass: "bg-slate-100 text-text-secondary border-border",
      valueColorClass: "text-text-primary",
    },
    {
      title: "Ready",
      value: "19",
      helper: "Completed packages",
      icon: CheckCircle,
      colorClass: "bg-success-bg text-success border-success-border",
      valueColorClass: "text-success",
    },
    {
      title: "Generating",
      value: "2",
      helper: "In progress tasks",
      icon: Clock,
      colorClass: "bg-warning-bg text-warning border-warning-border",
      valueColorClass: "text-warning",
    },
    {
      title: "Failed",
      value: "3",
      helper: "Need troubleshooting",
      icon: AlertTriangle,
      colorClass: "bg-error-bg text-error border-error-border",
      valueColorClass: "text-error",
    },
    {
      title: "Recent",
      value: "7",
      helper: "Last 30 days active",
      icon: Download,
      colorClass: "bg-slate-100 text-text-secondary border-border",
      valueColorClass: "text-text-primary",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <Card key={idx} className="border-border bg-white rounded-card hover:shadow-card transition-standard">
            <CardContent className="p-4 flex items-center justify-between gap-3 min-w-0">
              <div className="space-y-1 min-w-0 flex-1">
                <span className="text-t6 font-semibold uppercase tracking-widest text-text-tertiary block truncate" title={stat.title}>
                  {stat.title}
                </span>
                <span className={cn("text-t2 font-bold leading-tight block", stat.valueColorClass)}>
                  {stat.value}
                </span>
                <span className="text-t6 italic text-text-tertiary block truncate" title={stat.helper}>
                  {stat.helper}
                </span>
              </div>
              <div className={cn("flex h-9 w-9 items-center justify-center rounded-control border shrink-0", stat.colorClass)}>
                <Icon className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
