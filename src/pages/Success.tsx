import { CheckCircle } from 'lucide-react';

export const Success = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-indigo-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">Verification Success!</h1>
          <p className="text-gray-600 text-lg mb-8">
            You can close this tab and return to the loyalty window to continue.
          </p>

          {/* Optional Close Button */}
          <button
            onClick={() => window.close()}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
