import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps): JSX.Element => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg border 
          border-gray-200 text-gray-500 hover:border-indigo-600/30 hover:text-indigo-600
          disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-500
          transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium
              transition-colors ${
                currentPage === page ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg border 
          border-gray-200 text-gray-500 hover:border-indigo-600/30 hover:text-indigo-600
          disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-500
          transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
