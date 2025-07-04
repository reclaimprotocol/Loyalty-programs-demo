import React from 'react';
import { SearchBar } from './SearchBar';
import { FilterButtons } from './FilterButtons';
import { ActiveFilters } from './ActiveFilters';

interface SearchSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <SearchBar value={searchTerm} onChange={onSearchChange} />
          <FilterButtons />
        </div>
        <ActiveFilters />
      </div>
    </div>
  );
};
