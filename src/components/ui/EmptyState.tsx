import { SearchIcon } from 'lucide-react';

interface EmptyStateProps {
  onRequestProgram: () => void;
}

export const EmptyState = ({ onRequestProgram }: EmptyStateProps): JSX.Element => {
  return (
    <div className="text-center py-16 px-4">
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mb-4">
            <SearchIcon className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Can't find what you're looking for?</h3>
          <p className="text-sm text-gray-500 mb-6">
            Don't worry! Let us know what loyalty program you need, and we'll build it within 24 hours.
          </p>
          <button
            onClick={onRequestProgram}
            className="inline-flex items-center px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 
              text-white rounded-lg text-sm font-medium transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-2"
          >
            Request New Program
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Suggested Programs */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-4">Popular programs you might like</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              className="px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 
              text-gray-600 hover:border-indigo-600/30 hover:text-indigo-600 transition-colors"
            >
              Delta SkyMiles
            </button>
            <button
              className="px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 
              text-gray-600 hover:border-indigo-600/30 hover:text-indigo-600 transition-colors"
            >
              Marriott Bonvoy
            </button>
            <button
              className="px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 
              text-gray-600 hover:border-indigo-600/30 hover:text-indigo-600 transition-colors"
            >
              United MileagePlus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
