import React from 'react';
import { cn } from '../../lib/utils';
import { Badge } from './Badge';

interface ProgramCardProps {
  id: string;
  name: string;
  description: string;
  logo: string;
  providerId: string;
  onTryNow: () => void;
  className?: string;
  isEnabled?: boolean;
}

export const ProgramCard = ({
  name,
  description,
  logo,
  providerId,
  onTryNow,
  className,
  isEnabled = true,
}: ProgramCardProps): JSX.Element => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div
      className={cn(
        'group relative bg-white rounded-xl border border-gray-200',
        isEnabled ? 'hover:border-[#635bff]/30 hover:shadow-lg' : 'opacity-90',
        'transition-all duration-200 overflow-hidden',
        className
      )}
    >
      {/* Gradient Hover Effect - only when enabled */}
      {isEnabled && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute inset-0 bg-gradient-to-r from-[#635bff]/3 to-transparent" />
        </div>
      )}

      <div className="relative p-6">
        {/* Header with Logo, Name and Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-4">
            <div
              className="w-12 h-12 rounded-xl border border-gray-100 overflow-hidden flex-shrink-0
                bg-white flex items-center justify-center shadow-sm"
            >
              {!imageError ? (
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-8 h-8 object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-xs font-medium">{name.substring(0, 2).toUpperCase()}</span>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">{name}</h3>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className={cn('text-sm mb-6 line-clamp-2 leading-relaxed', isEnabled ? 'text-gray-600' : 'text-gray-500')}>
          {description}
        </p>

        {/* Connect Button */}
        <button
          onClick={isEnabled ? onTryNow : undefined}
          disabled={!isEnabled}
          className={cn(
            'w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            isEnabled
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-600/20 cursor-pointer'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
          )}
        >
          {isEnabled ? 'Try Now' : 'Coming Soon'}
        </button>
      </div>
    </div>
  );
};
