import * as React from 'react';
import { Search, SlidersHorizontal, RefreshCcw } from 'lucide-react';
import { Input } from '@/src/components/ui/input';
import { Select } from '@/src/components/ui/select';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/lib/utils';

interface ExportFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedProduct: string;
  setSelectedProduct: (product: string) => void;
  selectedMarket: string;
  setSelectedMarket: (market: string) => void;
  selectedFormat: string;
  setSelectedFormat: (format: string) => void;
  selectedDateRange: string;
  setSelectedDateRange: (range: string) => void;
  onClearFilters: () => void;
  isAnyFilterActive: boolean;
}

export function ExportFilters({
  searchQuery,
  setSearchQuery,
  selectedStatus,
  setSelectedStatus,
  selectedProduct,
  setSelectedProduct,
  selectedMarket,
  setSelectedMarket,
  selectedFormat,
  setSelectedFormat,
  selectedDateRange,
  setSelectedDateRange,
  onClearFilters,
  isAnyFilterActive
}: ExportFiltersProps) {
  const [showMoreFilters, setShowMoreFilters] = React.useState(false);

  return (
    <div className="bg-bg-page/60 border border-border rounded-card p-3.5 space-y-4 shadow-sm select-none">
      
      {/* Top Filter Row */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
        {/* Search Input Box */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-text-tertiary" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by package name, assessment, product, patent, claim..."
            className="pl-9 h-9.5 text-t5 bg-white border border-border"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-t6 text-text-tertiary hover:text-text-primary focus:outline-none"
            >
              Clear
            </button>
          )}
        </div>

        {/* Essential Inline Select Columns */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Status Select Filter */}
          <Select
            label="Status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="h-9.5 text-t5 bg-white border border-border"
          >
            <option value="All">All</option>
            <option value="Ready for Download">Ready for Download</option>
            <option value="Generating">Generating</option>
            <option value="Failed">Failed</option>
          </Select>

          {/* Product Select Filter */}
          <Select
            label="Product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="h-9.5 text-t5 bg-white border border-border"
          >
            <option value="All">All Products</option>
            <option value="ApexGrip AG-2">ApexGrip AG-2</option>
            <option value="FlexArm CX-5">FlexArm CX-5</option>
            <option value="VisionPack VP-4">VisionPack VP-4</option>
          </Select>

          {/* More Filters Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowMoreFilters(!showMoreFilters)}
            className={cn("h-9.5 px-3 flex items-center gap-2", showMoreFilters && "border-brand text-brand bg-slate-50")}
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>More Filters</span>
          </Button>

          {/* Clear Filters Callout */}
          {isAnyFilterActive && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="h-9.5 px-2 text-text-secondary hover:text-text-primary gap-1 select-none hover:bg-slate-100"
            >
              <RefreshCcw className="h-3.5 w-3.5 text-text-secondary" />
              <span>Reset</span>
            </Button>
          )}
        </div>
      </div>

      {/* Expandable Secondary Filter Drawer */}
      {showMoreFilters && (
        <div className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Market Selector */}
          <div className="flex flex-col gap-1.5 justify-end">
            <span className="text-t6 font-semibold uppercase tracking-wider text-text-secondary">
              Market
            </span>
            <Select
              value={selectedMarket}
              onChange={(e) => setSelectedMarket(e.target.value)}
              className="w-full bg-white border border-border"
            >
              <option value="All">All Markets</option>
              <option value="US">US - United States</option>
              <option value="EU">EU - European Union</option>
              <option value="JP">JP - Japan</option>
            </Select>
          </div>

          {/* Export Format Box */}
          <div className="flex flex-col gap-1.5 justify-end">
            <span className="text-t6 font-semibold uppercase tracking-wider text-text-secondary">
              Format / Export Type
            </span>
            <Select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full bg-white border border-border"
            >
              <option value="All">All Formats</option>
              <option value="Word">Word (.docx)</option>
              <option value="Excel">Excel (.xlsx)</option>
              <option value="Evidence">Evidence Bundle</option>
              <option value="PDF">PDF Report</option>
            </Select>
          </div>

          {/* Date Created Filter */}
          <div className="flex flex-col gap-1.5 justify-end">
            <span className="text-t6 font-semibold uppercase tracking-wider text-text-secondary">
              Date Limit
            </span>
            <Select
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
              className="w-full bg-white border border-border"
            >
              <option value="All">All Time</option>
              <option value="Last 7 days">Last 7 days</option>
              <option value="Last 30 days">Last 30 days</option>
            </Select>
          </div>
        </div>
      )}

    </div>
  );
}
