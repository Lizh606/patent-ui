'use client';

import * as React from 'react';
import { ExportStatsCards } from './ExportStatsCards';
import { ExportFilters } from './ExportFilters';
import { ExportPackagesTable } from './ExportPackagesTable';
import { LoadingState } from '@/src/components/common/LoadingState';
import { EmptyState } from '@/src/components/common/EmptyState';
import { InfoBanner } from '@/src/components/common/InfoBanner';
import { Button } from '@/src/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/src/components/ui/breadcrumb';
import { AlertCircle, ShieldAlert, ArrowRight, RefreshCw, Layers } from 'lucide-react';
import { mockExportPackages } from '../data/mockExportPackages';
import { ExportPackage, PageStates } from '../types';
import { cn } from '@/lib/utils';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/src/components/ui/pagination';

export function ExportListPage() {
  // States
  const [currentPageState, setCurrentPageState] = React.useState<PageStates>('default');
  const [packagesList, setPackagesList] = React.useState<ExportPackage[]>(mockExportPackages);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  
  // Filtering States
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState("All");
  const [selectedProduct, setSelectedProduct] = React.useState("All");
  const [selectedMarket, setSelectedMarket] = React.useState("All");
  const [selectedFormat, setSelectedFormat] = React.useState("All");
  const [selectedDateRange, setSelectedDateRange] = React.useState("All");

  const handleSearchQueryChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };
  const handleStatusChange = (val: string) => {
    setSelectedStatus(val);
    setCurrentPage(1);
  };
  const handleProductChange = (val: string) => {
    setSelectedProduct(val);
    setCurrentPage(1);
  };
  const handleMarketChange = (val: string) => {
    setSelectedMarket(val);
    setCurrentPage(1);
  };
  const handleFormatChange = (val: string) => {
    setSelectedFormat(val);
    setCurrentPage(1);
  };
  const handleDateRangeChange = (val: string) => {
    setSelectedDateRange(val);
    setCurrentPage(1);
  };

  // Simulated Reload/Refresh trigger
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const handleRefreshClick = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setPackagesList(mockExportPackages);
    }, 800);
  };

  // Keyboard shortcut for Search Focus (simulate ⌘ K)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter Algorithm
  const filteredPackages = packagesList.filter((pkg) => {
    // Search Query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchName = pkg.name.toLowerCase().includes(query);
      const matchAsm = pkg.assessmentName.toLowerCase().includes(query) || pkg.assessmentCode.toLowerCase().includes(query);
      const matchProd = pkg.productName.toLowerCase().includes(query) || pkg.productCode.toLowerCase().includes(query);
      const matchPat = pkg.patent.toLowerCase().includes(query);
      const matchClaim = pkg.claim.toLowerCase().includes(query);
      
      if (!matchName && !matchAsm && !matchProd && !matchPat && !matchClaim) {
        return false;
      }
    }

    // Status Filter
    if (selectedStatus !== "All" && pkg.status !== selectedStatus) {
      return false;
    }

    // Product Filter
    if (selectedProduct !== "All" && pkg.productName !== selectedProduct) {
      return false;
    }

    // Market Filter
    if (selectedMarket !== "All" && pkg.market !== selectedMarket) {
      return false;
    }

    // Format Filter
    if (selectedFormat !== "All" && !pkg.formats.includes(selectedFormat as any)) {
      return false;
    }

    // Date Range Filter (Simulated mapping against mock timestamps)
    if (selectedDateRange === "Last 7 days") {
      if (pkg.id === "exp_01JTF4B3C6M8D9P2Q7R1V5B4N" || pkg.id === "exp_01JTS7YM2H6D4Z9E3P8B1N7GS") {
        return false;
      }
    }

    return true;
  });

  // Pagination parameters
  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(filteredPackages.length / ITEMS_PER_PAGE) || 1;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPackages = filteredPackages.slice(offset, offset + ITEMS_PER_PAGE);

  // Row selection handles
  const handleSelectToggle = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAllToggle = (allSelected: boolean) => {
    if (allSelected) {
      const activeIds = paginatedPackages.map((p) => p.id);
      setSelectedIds(activeIds);
    } else {
      setSelectedIds([]);
    }
  };

  // Retry action: locally flips failed packages back to "Generating"
  const handleRetryPayload = (id: string) => {
    setPackagesList((prev) =>
      prev.map((pkg) => {
        if (pkg.id === id) {
          return { ...pkg, status: 'Generating' };
        }
        return pkg;
      })
    );
    // Simulate process recovery
    setTimeout(() => {
      setPackagesList((prev) =>
        prev.map((pkg) => {
          if (pkg.id === id) {
            return {
              ...pkg,
              status: 'Ready for Download',
              lastDownloaded: null,
              generatedAt: "May 10, 2025 11:45 AM UTC"
            };
          }
          return pkg;
        })
      );
    }, 5000);
  };

  // Clear All Filters
  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedStatus("All");
    setSelectedProduct("All");
    setSelectedMarket("All");
    setSelectedFormat("All");
    setSelectedDateRange("All");
    setCurrentPage(1);
  };

  // Check if any filter is active
  const isAnyFilterActive =
    searchQuery !== "" ||
    selectedStatus !== "All" ||
    selectedProduct !== "All" ||
    selectedMarket !== "All" ||
    selectedFormat !== "All" ||
    selectedDateRange !== "All";

  return (
    <div className="space-y-6">
      
      {/* ==========================================================================
         Prototype Sandbox State Switcher Control Header
         ========================================================================== */}
      <div className="bg-sidebar-bg border border-sidebar-border rounded-panel p-3.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 select-none">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
          <span className="font-mono text-t7 font-semibold text-sidebar-text/70">
            PROTOTYPE CONTROL PANEL:
          </span>
          <span className="text-t6 font-medium text-sidebar-text/70">
            Click these triggers to verify required page states
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 bg-black/20 p-1 rounded-control border border-sidebar-border">
          {(['default', 'loading', 'empty', 'error', 'permissionDenied'] as PageStates[]).map((state) => (
            <button
              key={state}
              onClick={() => setCurrentPageState(state)}
              className={cn(
                "px-2.5 py-1 text-t7 font-bold rounded-control transition-standard cursor-pointer uppercase",
                currentPageState === state
                  ? "bg-brand text-text-inverse"
                  : "text-sidebar-text-muted hover:text-white hover:bg-sidebar-hover-bg/40"
              )}
            >
              {state === 'permissionDenied' ? 'No Pass' : state}
            </button>
          ))}
        </div>
      </div>

      {/* ==========================================================================
         Page Breadcrumb + Header Section
         ========================================================================== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1.5 select-none">
          {/* Breadcrumbs */}
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Exports</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
          
          <h1 className="text-t2 text-text-primary mb-1">
            Exports
          </h1>
          <p className="text-t5 text-text-secondary">
            Access generated attorney-review-ready workpapers across assessments.
          </p>
        </div>

        {/* Global actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="h-9 hover:bg-slate-100 flex items-center gap-2 text-text-secondary">
            <Layers className="h-4 w-4 text-text-secondary" />
            <span>View Assessments</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefreshClick}
            disabled={currentPageState === 'loading'}
            className="h-9 hover:bg-slate-100 flex items-center gap-2 text-text-secondary cursor-pointer"
          >
            <RefreshCw className={cn("h-4 w-4 text-text-secondary", isRefreshing && "animate-spin")} />
            <span>Refresh</span>
          </Button>
        </div>
      </div>

      {/* ==========================================================================
         RENDER STATE MACHINE SWITCH
         ========================================================================== */}
      {(() => {
        switch (currentPageState) {
          
          /* 1. LOADING STATE */
          case 'loading':
            return <LoadingState />;

          /* 2. ERROR STATE */
          case 'error':
            return (
              <div className="flex flex-col items-center justify-center p-12 text-center rounded-panel bg-bg-card border border-border py-20 max-w-lg mx-auto">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-error-bg text-error border border-error-border mb-4 animate-bounce">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="text-t3 font-semibold text-text-primary mb-1.5">
                  Server synchronization failed
                </h3>
                <p className="text-t5 text-text-secondary leading-relaxed mb-6">
                  Secure worker lost connection to the assessment directory database. Click reload to re-establish workspace sockets safely.
                </p>
                <Button variant="primary" onClick={() => setCurrentPageState('default')} className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 shrink-0" />
                  <span>Retry Connection</span>
                </Button>
              </div>
            );

          /* 3. PERMISSION DENIED STATE */
          case 'permissionDenied':
            return (
              <div className="flex flex-col items-center justify-center border border-error-border rounded-panel bg-error-bg/65 p-8 text-center max-w-2xl mx-auto py-16 select-none my-12">
                <div className="rounded-full bg-error-bg p-3.5 mb-4 border border-error-border shrink-0">
                  <ShieldAlert className="h-8 w-8 text-error animate-pulse" />
                </div>
                <h3 className="text-t3 font-bold text-text-primary mb-1.5">
                  Attorney Authorization Clearance Required
                </h3>
                <p className="text-t5 text-text-secondary max-w-md mb-6 leading-relaxed">
                  You do not possess download clearance tags inside Apex Robotics workspace. Row operations, Word/Excel exporters, and audit review tabs have been locked disabled.
                </p>
                <Button variant="outline" size="sm" onClick={() => setCurrentPageState('default')} className="cursor-pointer">
                  Go Back To Active Clearance
                </Button>
              </div>
            );

          /* 4. EMPTY RESULTS STATE */
          case 'empty':
            return (
              <div className="space-y-6">
                <ExportStatsCards />
                <ExportFilters
                  searchQuery={""}
                  setSearchQuery={() => {}}
                  selectedStatus={"All"}
                  setSelectedStatus={() => {}}
                  selectedProduct={"All"}
                  setSelectedProduct={() => {}}
                  selectedMarket={"All"}
                  setSelectedMarket={() => {}}
                  selectedFormat={"All"}
                  setSelectedFormat={() => {}}
                  selectedDateRange={"All"}
                  setSelectedDateRange={() => {}}
                  onClearFilters={() => {}}
                  isAnyFilterActive={true}
                />
                <EmptyState
                  onActionClick={() => setCurrentPageState('default')}
                  title="No export packages matching"
                  description="Loosen your corporate filters or click the button below to quickly load standard assessment packages."
                />
              </div>
            );

          /* 5. DEFAULT workbench VIEW STATE */
          default:
            return (
              <div className="space-y-6">
                {/* Statistics Banner Cards */}
                <ExportStatsCards />

                {/* Search & Select Filters Row */}
                <ExportFilters
                  searchQuery={searchQuery}
                  setSearchQuery={handleSearchQueryChange}
                  selectedStatus={selectedStatus}
                  setSelectedStatus={handleStatusChange}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={handleProductChange}
                  selectedMarket={selectedMarket}
                  setSelectedMarket={handleMarketChange}
                  selectedFormat={selectedFormat}
                  setSelectedFormat={handleFormatChange}
                  selectedDateRange={selectedDateRange}
                  setSelectedDateRange={handleDateRangeChange}
                  onClearFilters={handleClearFilters}
                  isAnyFilterActive={isAnyFilterActive}
                />

                {/* Render Table Core List */}
                {filteredPackages.length > 0 ? (
                  <>
                    <ExportPackagesTable
                      packages={paginatedPackages}
                      onRetry={handleRetryPayload}
                      permissionDenied={false}
                      selectedIds={selectedIds}
                      onSelectToggle={handleSelectToggle}
                      onSelectAllToggle={handleSelectAllToggle}
                    />

                    {/* Footer list controls & pagination */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-transparent px-1 shrink-0 select-none">
                      <span className="text-t6 font-semibold text-text-secondary uppercase tracking-wider">
                        Showing {offset + 1} to {Math.min(offset + ITEMS_PER_PAGE, filteredPackages.length)} of {filteredPackages.length} export packages
                      </span>

                      {/* Pagination widget */}
                      <Pagination className="w-auto mx-0">
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                              disabled={currentPage === 1}
                            />
                          </PaginationItem>
                          
                          {Array.from({ length: totalPages }).map((_, idx) => {
                            const pageNum = idx + 1;
                            return (
                              <PaginationItem key={pageNum}>
                                <PaginationLink
                                  isActive={pageNum === currentPage}
                                  onClick={() => setCurrentPage(pageNum)}
                                >
                                  {pageNum}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          })}

                          <PaginationItem>
                            <PaginationNext
                              onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                              disabled={currentPage === totalPages}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  </>
                ) : (
                  <EmptyState
                    onActionClick={handleClearFilters}
                    title="No package match keys"
                    description="No exports match the query parameters in your search criteria. Click reset filters to populate active records."
                  />
                )}
              </div>
            );
        }
      })()}

      {/* ==========================================================================
         Legal Advisory Boundary Banner Footer
         ========================================================================== */}
      <div className="mt-8">
        <InfoBanner
          message="Export packages are attorney-review-ready workpapers for preliminary patent risk assessment only. Not legal opinion. Not infringement determination."
          variant="info"
          className="border-info-border bg-info-bg/50 shadow-sm"
          action={
            <a
              href="#legal-advisory"
              onClick={() => alert("[Prototype Legal Disclaimer] Accessing corporate boundaries. Export workpapers are prepared conditionally using AI synthesis tools and do not represent final judicial opinion. Certified legal advice is provided solely by registered patent counseling attorneys.")}
              className="inline-flex items-center gap-1.5 text-t5 font-bold text-brand hover:underline"
            >
              <span>Learn more about our legal boundaries</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          }
        />
      </div>

    </div>
  );
}
