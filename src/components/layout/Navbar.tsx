import { MenuIcon } from 'lucide-react';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const Navbar = (): JSX.Element => {
  const location = useLocation();

  // Function to get the current program name based on route
  const getCurrentProgramName = () => {
    const path = location.pathname;
    if (path === '/programs/airlines') return 'Airlines Programs';
    if (path === '/programs/hotels') return 'Hotel Programs';
    if (path === '/programs/credit-cards') return 'Credit Card Programs';
    return 'Loyalty Programs';
  };

  return (
    <header className="h-[70px] bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Left side with menu and title */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-[15px] font-semibold text-gray-900">{getCurrentProgramName()}</h1>
          <div className="h-4 w-px bg-gray-200" />
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-3">
        <button
          className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 
            hover:border-indigo-600/30 text-gray-700 hover:text-indigo-600
            rounded-lg text-sm font-medium transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        >
          Need Help?
        </button>
        <div className="h-6 w-px bg-gray-100" />
      </div>
    </header>
  );
};
