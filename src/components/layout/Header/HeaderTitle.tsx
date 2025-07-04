import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface HeaderTitleProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <div className="flex items-center gap-6">
      <button
        onClick={onToggleSidebar}
        className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-500 
          hover:bg-gray-50 transition-all"
      >
        {isSidebarOpen ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <MenuIcon className="h-5 w-5" strokeWidth={1.5} />
        )}
      </button>

      <div className="flex items-center gap-5">
        <h1 className="text-[15px] font-semibold text-gray-900">Loyalty Programs</h1>
        <div className="flex items-center gap-2.5">
          <Badge variant="indigo">12 Categories</Badge>
          <Badge variant="success">48 Programs</Badge>
        </div>
      </div>
    </div>
  );
};
