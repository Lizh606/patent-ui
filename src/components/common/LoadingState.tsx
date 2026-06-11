import * as React from 'react';
import { Skeleton } from '@/src/components/ui/skeleton';
import { Card, CardContent } from '@/src/components/ui/card';

export function LoadingState() {
  return (
    <div className="space-y-6 w-full">
      {/* Skeleton Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((idx) => (
          <Card key={idx} className="border-border">
            <CardContent className="p-4 flex items-center justify-between gap-3 min-w-0">
              <div className="space-y-2 min-w-0 flex-1">
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-3 w-1/3" />
              </div>
              <Skeleton className="h-10 w-10 rounded-full shrink-0" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skeleton Filter Row */}
      <div className="flex flex-wrap items-center gap-4 bg-bg-card p-4 rounded-card border border-border">
        <Skeleton className="h-9 flex-1 min-w-[200px]" />
        <Skeleton className="h-9 w-28" />
        <Skeleton className="h-9 w-32" />
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-28" />
      </div>

      {/* Skeleton Table Rows */}
      <Card className="border border-border">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <Skeleton className="h-4 w-1/5" />
            <Skeleton className="h-4 w-1/6" />
            <Skeleton className="h-4 w-1/12" />
            <Skeleton className="h-4 w-1/12" />
            <Skeleton className="h-4 w-1/12" />
            <Skeleton className="h-4 w-1/12" />
          </div>
          {[1, 2, 3, 4, 5].map((row) => (
            <div key={row} className="flex items-center justify-between py-3 border-b border-border/40 last:border-0">
              <div className="space-y-1.5 w-1/5">
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-3 w-1/2" />
              </div>
              <Skeleton className="h-4 w-1/6" />
              <Skeleton className="h-4 w-1/12" />
              <Skeleton className="h-4 w-1/12" />
              <Skeleton className="h-6 w-16 rounded" />
              <Skeleton className="h-8 w-16 rounded" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
