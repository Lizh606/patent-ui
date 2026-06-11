'use client';

import * as React from 'react';

export interface SidebarContextType {
  isCollapsed: boolean;
}

export const SidebarContext = React.createContext<SidebarContextType>({
  isCollapsed: false,
});

export function SidebarProvider({ children, isCollapsed }: { children: React.ReactNode; isCollapsed: boolean }) {
  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return React.useContext(SidebarContext);
}
