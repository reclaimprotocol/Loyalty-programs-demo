import React from 'react';
import { categories } from '../../data/categories';
import { ProgramCard } from '../../components/ui/ProgramCard';

export const AirlinesProgram = (): JSX.Element => {
  const airlineApps = categories.Airlines || [];

  const handleTryNow = (providerId: string) => {
    // Handle try now action
    console.log('Try now clicked for:', providerId);
  };

  return (
    <div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {airlineApps.map((app) => (
          <ProgramCard key={app.id} {...app} onTryNow={() => handleTryNow(app.providerId)} />
        ))}
      </div>

      {/* Request Section */}
      <div className="mt-16 text-center border-t border-gray-200 pt-16">
        <div className="max-w-md mx-auto">
          <h3 className="text-base font-medium text-gray-900 mb-2">Can't find your airline?</h3>
          <p className="text-sm text-gray-500 mb-6">We'll add it within 24 hours, just let us know what you need.</p>
          <button
            className="inline-flex items-center px-4 py-2.5 bg-white border border-gray-200 
              hover:border-indigo-600/30 text-gray-700 hover:text-indigo-600
              rounded-lg text-sm font-medium transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-2"
          >
            Request New Airline Program
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
