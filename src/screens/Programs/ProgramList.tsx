import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ProgramCard } from '../../components/ui/ProgramCard';
import { Pagination } from '../../components/ui/Pagination';
import { RequestProgram } from '../../components/ui/RequestProgram';
import { usePaginatedSearch } from '../../hooks/usePaginatedSearch';
import { providers } from '../../data/loyalty-programs';
import { useParams } from 'react-router-dom';
import { QRModal } from '../../components/ui/QRModal';
import { RequestProgramModal } from '../../components/ui/RequestProgramModal';

export const ProgramList = (): JSX.Element => {
  const { category } = useParams();

  // Filter providers based on route category
  const programApps = providers.filter((provider) => provider.category.toLowerCase() === category?.toLowerCase());

  const { currentItems, currentPage, totalPages, searchTerm, setSearchTerm, setCurrentPage, filteredItems } =
    usePaginatedSearch({
      items: programApps,
      itemsPerPage: 9,
    });

  // State for QR Modal
  const [selectedProvider, setSelectedProvider] = useState<null | {
    name: string;
    description: string;
    providerId: string;
  }>(null);

  // State for Request Modal
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const handleTryNow = (provider: typeof selectedProvider) => {
    setSelectedProvider(provider);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleRequestProgram = () => {
    setIsRequestModalOpen(true);
  };

  const handleCloseRequestModal = () => {
    setIsRequestModalOpen(false);
  };

  return (
    <div>
      {/* Search Section */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder={`Search ${category?.toLowerCase()} programs...`}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm
              focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600
              placeholder:text-gray-400"
          />
        </div>
        {filteredItems.length > 0 && (
          <p className="mt-3 text-sm text-gray-500">
            Found {filteredItems.length} {category?.toLowerCase()} program{filteredItems.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Cards Grid */}
      {currentItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((app) => (
              <ProgramCard
                key={app.providerId}
                id={app.providerId}
                name={app.name}
                description={`${app.name} loyalty program`}
                logo={app.logoUrl}
                providerId={app.providerId}
                onTryNow={() =>
                  handleTryNow({
                    name: app.name,
                    description: `${app.name} loyalty program`,
                    providerId: app.providerId,
                  })
                }
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          )}
        </>
      ) : (
        <div className="bg-white border border-gray-100 rounded-xl p-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-4">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No matching programs found</h3>
            <p className="text-sm text-gray-500 mb-6">
              {searchTerm ? (
                <>Try adjusting your search or request a new program if you can't find what you're looking for.</>
              ) : (
                <>No {category?.toLowerCase()} programs available at the moment. Request a new one below.</>
              )}
            </p>
            <button
              onClick={handleRequestProgram}
              className="inline-flex items-center px-4 py-2.5 bg-indigo-600 text-white
                hover:bg-indigo-700 rounded-lg text-sm font-medium transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:ring-offset-2"
            >
              Request New Program
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* QR Modal */}
      {selectedProvider && (
        <QRModal isOpen={!!selectedProvider} onClose={() => setSelectedProvider(null)} provider={selectedProvider} />
      )}

      {/* Bottom request section - only show when there are items */}
      {currentItems.length > 0 && (
        <div className="mt-8">
          <RequestProgram variant="section" programType={category?.toLowerCase()} onRequest={handleRequestProgram} />
        </div>
      )}

      {/* Request Modal */}
      <RequestProgramModal isOpen={isRequestModalOpen} onClose={handleCloseRequestModal} category={category} />
    </div>
  );
};
