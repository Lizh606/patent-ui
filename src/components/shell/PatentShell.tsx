'use client';

import * as React from 'react';
import { PatentSidebar } from './PatentSidebar';
import { PatentTopbar } from './PatentTopbar';
import { Sheet } from '@/src/components/ui/sheet';
import { SidebarProvider } from './SidebarContext';

interface ShellProps {
  children: React.ReactNode;
  currentRoute?: string;
  workspaceName?: string;
  userName?: string;
}

export function PatentShell({
  children,
  currentRoute = '/exports',
  workspaceName,
  userName
}: ShellProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Close mobile drawer on resize to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-bg-page text-text-primary font-sans antialiased">
      
      {/* 1. Desktop Sidebar (Hidden under 768px mobile view) */}
      <PatentSidebar
        currentRoute={currentRoute}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        className="hidden md:flex shrink-0"
      />

      {/* 2. Mobile Responsive Slide Drawer (Under 768px tablet/mobile view) */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} side="left" className="p-0 bg-sidebar-bg border-none w-[240px] max-w-xs">
        <PatentSidebar
          currentRoute={currentRoute}
          isCollapsed={false}
          className="w-full border-none"
        />
      </Sheet>

      {/* 3. Main Workspace Division Panel */}
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* Top Navigation Bar */}
        <PatentTopbar
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          workspaceName={workspaceName}
          userName={userName}
        />

        {/* content panels (Scrolls inside) */}
        <main className="flex-1 overflow-y-auto px-6 py-6 md:px-8 bg-bg-page">
          <div className="mx-auto w-full max-w-7xl">
            <SidebarProvider isCollapsed={isSidebarCollapsed}>
              {children}
            </SidebarProvider>
          </div>
        </main>
      </div>

    </div>
  );
}
