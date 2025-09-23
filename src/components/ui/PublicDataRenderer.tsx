import React from 'react';
import { Shield } from 'lucide-react';

interface PublicDataRendererProps {
  publicData?: string;
  className?: string;
}

const PublicDataRenderer = ({ publicData, className = '' }: PublicDataRendererProps) => {
  // Safely parse public data
  const parsePublicData = (data: string | undefined): Record<string, any> | null => {
    if (!data) return null;

    try {
      const parsed = JSON.parse(data);
      return typeof parsed === 'object' && parsed !== null ? parsed : null;
    } catch (error) {
      console.error('Failed to parse public data:', error);
      return null;
    }
  };

  const formatKey = (key: string): string => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  const formatValue = (value: any): string => {
    if (value === null || value === undefined) return 'N/A';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (typeof value === 'number') return value.toLocaleString();
    return String(value);
  };

  const data = parsePublicData(publicData);

  if (!data) {
    return null; // Don't render anything if no valid public data
  }

  const entries = Object.entries(data).filter(([_, value]) => value !== null && value !== undefined);

  if (entries.length === 0) {
    return null; // Don't render if no valid entries
  }

  return (
    <div
      className={`bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 ${className}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
          <Shield className="w-4 h-4 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Verified Public Data</h3>
      </div>

      <div className="space-y-3">
        {entries.map(([key, value]) => (
          <div key={key} className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-sm transition-shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <span className="text-sm font-medium text-gray-600">{formatKey(key)}</span>
              <span className="text-base font-semibold text-gray-900 break-words">{formatValue(value)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span>Verified by Reclaim Protocol</span>
      </div>
    </div>
  );
};

export default PublicDataRenderer;
