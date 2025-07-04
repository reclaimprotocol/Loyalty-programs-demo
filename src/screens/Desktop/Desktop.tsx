import { SearchIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/layout/Navbar';
import { Sidebar } from '../../components/layout/Sidebar';
import { categories } from '../../data/categories';

export const Desktop = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Check if device is mobile on component mount
  useEffect(() => {
    const checkMobile =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) ||
      (typeof window.orientation !== 'undefined' ? window.orientation : -1) > -1;
    setIsMobile(checkMobile);
  }, []);

  return (
    <div className="flex h-screen bg-[#f6f9fc] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(79,70,229,0.12)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(35%_35%_at_-10%_-10%,rgba(79,70,229,0.08)_0%,rgba(255,255,255,0)_100%)] pointer-events-none" />

      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          categoriesCount={Object.keys(categories).length}
          programsCount={Object.values(categories).flat().length}
        />

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-[#f6f9fc]">
          {/* Search and Filter Bar */}
          <div className="bg-white border-b border-gray-200 py-4">
            <div className="max-w-[1200px] mx-auto px-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Main Search */}
                <div className="relative flex-1 w-full">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by program name, category, or features..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm
                      focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600
                      placeholder:text-gray-400"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Category Filter */}
                  <div className="relative">
                    <button
                      className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium
                      text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600/20
                      inline-flex items-center gap-2"
                    >
                      <span>Category</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="max-w-[1200px] mx-auto p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
