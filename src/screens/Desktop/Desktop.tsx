import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/layout/Navbar';
import { Sidebar } from '../../components/layout/Sidebar';

export const Desktop = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-[#f6f9fc] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(79,70,229,0.12)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(35%_35%_at_-10%_-10%,rgba(79,70,229,0.08)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />

      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-[#f6f9fc]">
          {/* Search and Filter Bar */}

          {/* Dynamic Content */}
          <div className="max-w-[1200px] mx-auto p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
