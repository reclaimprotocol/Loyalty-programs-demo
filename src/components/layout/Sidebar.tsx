import { useLocation, Link } from 'react-router-dom';
import { loyaltyPrograms } from '../../data/loyalty-programs';
import { RequestProgramModal } from '../ui/RequestProgramModal';
import { useState } from 'react';

export const Sidebar = (): JSX.Element => {
  const location = useLocation();
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  // Get unique categories from providers
  const enabledCategories = ['Airlines', 'Hotels', 'Exchange', 'Gaming'];

  // Get current category from location
  const currentCategory = location.pathname.split('/').pop();

  return (
    <>
      <div className="w-[280px] md:w-80 h-full bg-white overflow-hidden flex flex-col border-r border-gray-100 relative z-10">
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="px-4 md:px-6 h-[70px] flex items-center border-b border-gray-50">
            <Link to="/">
              <img src="/vector.svg" alt="Reclaim Logo" className="h-[22px]" />
            </Link>
          </div>

          {/* Categories Section */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Section Header */}
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-sm font-medium text-gray-900">All Loyalty Programs</h2>
            </div>

            {/* Program Categories */}
            <div className="flex-1 px-3 overflow-y-auto">
              {loyaltyPrograms.map((program) => {
                const Icon = program.icon;
                const isActive = location.pathname === `/programs/${program.id}`;
                const isEnabled = enabledCategories.includes(program.category);

                return (
                  <Link
                    key={program.id}
                    to={isEnabled ? `/programs/${program.id.toLowerCase()}` : '#'}
                    className={`group relative w-full flex items-start px-3 py-2.5 mb-1 rounded-lg transition-all
                      ${isActive ? 'bg-indigo-600' : 'hover:bg-gray-50'}
                      ${!isEnabled ? 'cursor-default' : ''}`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center mr-3 flex-shrink-0
                      ${
                        isActive ? 'bg-indigo-500/20 text-white' : 'bg-gray-50 text-gray-500 group-hover:text-gray-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[13px] font-medium truncate
                          ${isActive ? 'text-white' : 'text-gray-700'}`}
                        >
                          {program.name}
                        </span>
                        {!isEnabled && (
                          <span
                            className="inline-flex px-1.5 py-0.5 rounded-full text-[11px] font-medium 
                            whitespace-nowrap bg-indigo-50 text-indigo-600"
                          >
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="p-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-sm font-medium text-gray-900">Missing a program?</h3>
              <p className="text-xs text-gray-600 mt-1 mb-3">We'll add it within 24 hours!</p>
              <button
                onClick={() => setIsRequestModalOpen(true)}
                className="w-full px-3 py-2 bg-indigo-600 text-white rounded-lg text-xs font-medium
                  hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 
                  focus:ring-indigo-600/20 focus:ring-offset-2"
              >
                Request Program
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Request Modal */}
      <RequestProgramModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        category={currentCategory}
      />
    </>
  );
};
