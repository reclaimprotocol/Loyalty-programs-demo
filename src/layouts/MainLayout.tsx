import React from 'react';
import { Header } from '@/components/layout/Header/Header';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, isSidebarOpen, onToggleSidebar }) => {
  return (
    <div className="flex h-screen bg-[#f6f9fc] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(79,70,229,0.12)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(35%_35%_at_-10%_-10%,rgba(79,70,229,0.08)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />

      <Sidebar isOpen={isSidebarOpen} />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Header isSidebarOpen={isSidebarOpen} onToggleSidebar={onToggleSidebar} />
        <main className="flex-1 overflow-auto bg-[#f6f9fc]">{children}</main>
      </div>
    </div>
  );
};
