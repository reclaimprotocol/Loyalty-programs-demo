import React from 'react';
import { HeaderTitle } from './HeaderTitle';
import { HeaderActions } from './HeaderActions';

interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <header className="h-[70px] bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-20">
      <HeaderTitle isSidebarOpen={isSidebarOpen} onToggleSidebar={onToggleSidebar} />
      <HeaderActions />
    </header>
  );
};
