import * as React from 'react';
import {
  Home as HomeIcon,
  ClipboardList,
  Package,
  FileText,
  Download,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import { PatentBrand } from './PatentBrand';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentRoute?: string;
  isCollapsed?: boolean;
  setIsCollapsed?: (collapsed: boolean) => void;
  className?: string;
}

export function PatentSidebar({
  currentRoute = '/exports',
  isCollapsed = false,
  setIsCollapsed,
  className
}: SidebarProps) {
  const navItems = [
    { label: 'Home', icon: HomeIcon, route: '/' },
    { label: 'Assessments', icon: ClipboardList, route: '/assessments' },
    { label: 'Products', icon: Package, route: '/products' },
    { label: 'Review Queue', icon: FileText, route: '/review-queue', badge: 5 },
    { label: 'Exports', icon: Download, route: '/exports', badge: 12 },
  ];

  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-sidebar-bg border-r border-sidebar-border transition-all duration-300 select-none text-sidebar-text",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Sidebar Header Brand Panel */}
      <div className={cn("p-4 h-16 border-b border-sidebar-border flex items-center shrink-0", isCollapsed ? "justify-center" : "justify-between")}>
        {!isCollapsed ? (
          <PatentBrand />
        ) : (
          <div className="h-9 w-9 flex items-center justify-center rounded-control bg-brand text-text-inverse">
            <span className="font-sans font-bold text-lg">P</span>
          </div>
        )}
      </div>

      {/* Main Nav Items List */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = currentRoute === item.route;
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              className={cn(
                "flex items-center w-full rounded-control p-2.5 text-t5 font-medium transition-standard group cursor-pointer text-sidebar-text",
                isActive
                  ? "bg-sidebar-active-bg text-text-inverse shadow-sm hover:text-text-inverse"
                  : "hover:bg-sidebar-hover-bg hover:text-white",
                isCollapsed ? "justify-center" : "justify-between"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon className={cn("h-4 w-4 shrink-0", isActive ? "text-text-inverse" : "text-sidebar-text-muted group-hover:text-white")} />
                {!isCollapsed && <span className={isActive ? "text-text-inverse" : ""}>{item.label}</span>}
              </div>

              {/* Badges */}
              {item.badge && !isCollapsed && (
                <span
                  className={cn(
                    "text-t7 px-1.5 py-0.5 rounded-full font-bold",
                    isActive
                      ? "bg-white/20 text-text-inverse"
                      : "bg-sidebar-active-bg text-text-inverse"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Collapse Toggle Footer */}
      {setIsCollapsed && (
        <div className="p-3 border-t border-sidebar-border shrink-0">
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center gap-3 w-full rounded-control px-2.5 py-2 text-t6 font-semibold text-sidebar-text-muted hover:text-white hover:bg-sidebar-hover-bg transition-standard cursor-pointer"
          >
            {isCollapsed ? (
              <ChevronsRight className="h-4 w-4 mx-auto" />
            ) : (
              <>
                <ChevronsLeft className="h-4 w-4" />
                <span>Collapse Code</span>
              </>
            )}
          </button>
        </div>
      )}
    </aside>
  );
}
