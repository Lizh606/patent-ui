import * as React from 'react';
import { Search, HelpCircle, ChevronDown, Menu } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/src/components/ui/avatar';
import { Input } from '@/src/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/src/components/ui/dropdown-menu';

interface TopbarProps {
  onMenuToggle?: () => void;
  workspaceName?: string;
  userName?: string;
}

export function PatentTopbar({
  onMenuToggle,
  workspaceName = "Apex Robotics",
  userName = "Alice Maintainer"
}: TopbarProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-white px-6 select-none shrink-0">
      
      {/* Workspace Selector & Mobile Toggle Trigger */}
      <div className="flex items-center gap-4">
        {onMenuToggle && (
          <button
            type="button"
            onClick={onMenuToggle}
            className="rounded-control p-1.5 text-text-secondary hover:bg-bg-page hover:text-text-primary md:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
 
        {/* Workspace Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-md px-3 py-1.5 text-t5 font-medium bg-bg-page border border-border transition-standard cursor-pointer focus:outline-none hover:bg-border/30">
              <span className="font-semibold text-text-primary">{workspaceName}</span>
              <ChevronDown className="h-4 w-4 text-text-secondary" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="left">
            <DropdownMenuItem className="font-semibold text-brand bg-bg-page">
              {workspaceName}
            </DropdownMenuItem>
            <DropdownMenuItem>Apex Silicon Systems</DropdownMenuItem>
            <DropdownMenuItem>Vector Dynamics Lab</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Manage Workspaces...</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Global Search Bar (with Command Prompt K) */}
      <div className="hidden lg:flex items-center relative w-full max-w-md mx-6">
        <Search className="absolute left-3.5 h-4.5 w-4.5 text-text-tertiary pointer-events-none z-10" />
        <Input
          type="text"
          placeholder="Search assessments, products, patents, exports..."
          className="w-full h-9 bg-white border border-border pl-10 pr-12 py-1 text-t5 placeholder-text-tertiary transition-colors"
        />
        <div className="absolute right-3 flex items-center gap-0.5 border border-border rounded px-1.5 py-0.5 bg-white text-t7 text-text-tertiary">
          <span>⌘</span>
          <span>K</span>
        </div>
      </div>

      {/* Right Auxiliary Actions */}
      <div className="flex items-center gap-4">
        {/* Help Center Popover */}
        <button
          type="button"
          title="Help Center"
          className="rounded-full p-2 text-text-secondary hover:bg-bg-page hover:text-text-primary transition-standard cursor-pointer focus:outline-none"
        >
          <HelpCircle className="h-5 w-5" />
        </button>

        {/* User Account Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 group focus:outline-none cursor-pointer">
              <Avatar className="h-8 w-8 ring-1 ring-border group-hover:ring-brand/40 transition-standard">
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline-block text-t5 font-semibold text-text-primary group-hover:text-brand transition-standard">
                {userName}
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-text-secondary group-hover:text-brand transition-standard" />
            </button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent align="right">
            <div className="px-2 py-1.5 text-t6 text-text-secondary border-b border-border/60 mb-1">
              Signed in as <strong className="text-text-primary block font-medium truncate">{userName}</strong>
            </div>
            <DropdownMenuItem>User Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>API Keys Manager</DropdownMenuItem>
            <DropdownMenuItem>Legal Disclaimer</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-error hover:bg-error-bg">Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </header>
  );
}
