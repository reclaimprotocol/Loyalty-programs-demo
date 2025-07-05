import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/layout/Navbar';
import { Sidebar } from '../../components/layout/Sidebar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RequestProgramModal } from '../../components/ui/RequestProgramModal';

export const Desktop = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const location = useLocation();
  const currentCategory = location.pathname.split('/').pop();

  return (
    <div className="flex h-screen bg-[#f6f9fc] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(79,70,229,0.12)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(35%_35%_at_-10%_-10%,rgba(79,70,229,0.08)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity lg:hidden z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition duration-300 ease-in-out z-30
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
      >
        <Sidebar onRequestProgram={() => setIsRequestModalOpen(true)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-[#f6f9fc]">
          {/* Search and Filter Bar */}

          {/* Dynamic Content */}
          <div className="max-w-[1200px] mx-auto p-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Request Modal - Moved to root level */}
      <RequestProgramModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        category={currentCategory}
      />
    </div>
  );
};
