import { MenuIcon } from 'lucide-react';

interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  categoriesCount: number;
  programsCount: number;
}

export const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  categoriesCount,
  programsCount,
}: NavbarProps): JSX.Element => {
  return (
    <header className="h-[70px] bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-6">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600">
              {categoriesCount} Providers
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">
              {programsCount} Programs
            </span>
          </div>
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-3">
        <button
          className="inline-flex items-center justify-center h-8 px-3 rounded-lg text-sm 
          text-gray-600 hover:bg-gray-50 transition-all gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Help Center
        </button>
        <div className="h-6 w-px bg-gray-100" />
      </div>
    </header>
  );
};
