import React from 'react';
import { Plus } from 'lucide-react';

interface RequestProgramProps {
  variant: 'inline' | 'section';
  programType?: string;
  onRequest: () => void;
}

export const RequestProgram = ({ variant, programType = 'airline', onRequest }: RequestProgramProps): JSX.Element => {
  const isInline = variant === 'inline';

  if (isInline) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mb-4">
            <Plus className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Can't find your {programType} program?</h3>
          <p className="text-sm text-gray-500 mb-6">We'll add it within 24 hours, just let us know what you need.</p>
          <button
            onClick={onRequest}
            className="inline-flex items-center px-4 py-2.5 bg-indigo-600 text-white
              hover:bg-indigo-700 rounded-lg text-sm font-medium transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-2"
          >
            Request New Program
            <Plus className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 text-center border-t border-gray-200 pt-16">
      <div className="max-w-md mx-auto">
        <h3 className="text-base font-medium text-gray-900 mb-2">Can't find your {programType} program?</h3>
        <p className="text-sm text-gray-500 mb-6">We'll add it within 24 hours, just let us know what you need.</p>
        <button
          onClick={onRequest}
          className="inline-flex items-center px-4 py-2.5 bg-white border border-gray-200 
            hover:border-indigo-600/30 text-gray-700 hover:text-indigo-600
            rounded-lg text-sm font-medium transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-2"
        >
          Request New Loyalty Program
          <Plus className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
