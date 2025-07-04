import { useMemo, useState } from 'react';

interface PaginatedSearchProps<T> {
  items: T[];
  itemsPerPage: number;
}

export const usePaginatedSearch = <T extends { name: string }>({ items, itemsPerPage }: PaginatedSearchProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter items based on search term
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [items, searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Get current page items
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredItems, currentPage, itemsPerPage]);

  // Reset to first page when search term changes
  const handleSetSearchTerm = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return {
    currentItems,
    currentPage,
    totalPages,
    searchTerm,
    setSearchTerm: handleSetSearchTerm,
    setCurrentPage,
    filteredItems,
  };
};
