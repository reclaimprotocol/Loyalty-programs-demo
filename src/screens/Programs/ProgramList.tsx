import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { ProgramCard } from '../../components/ui/ProgramCard';
import { Pagination } from '../../components/ui/Pagination';
import { RequestProgram } from '../../components/ui/RequestProgram';
import { usePaginatedSearch } from '../../hooks/usePaginatedSearch';

import { useParams } from 'react-router-dom';
import { QRModal } from '../../components/ui/QRModal';
import { RequestProgramModal } from '../../components/ui/RequestProgramModal';
import { providers, getCategoryTabs } from '../../data/loyalty-programs';

const getRandomDescription = (brandName: string): string => {
  const descriptions = [
    `Prove your ${brandName} status in seconds. No screenshots. No uploads.`,
    `Elite with ${brandName}? Prove it privately in one click.`,
    `Instantly verify your ${brandName} membership. Fully private, Zero hassle.`,
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

export const ProgramList = (): JSX.Element => {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('all');

  // Get tabs for the current category
  const categoryTabsConfig = category ? getCategoryTabs(category) : [];
  const hasMultipleTabs = categoryTabsConfig.length > 1;

  // Filter providers based on route category
  const routeFiltered = category
    ? providers.filter((provider) => provider.category.some((cat) => cat.toLowerCase() === category.toLowerCase()))
    : providers;

  // Apply tab filter if applicable
  const currentTabConfig = categoryTabsConfig.find((tab) => tab.id === activeTab);
  const tabFiltered = currentTabConfig?.filter ? routeFiltered.filter(currentTabConfig.filter) : routeFiltered;

  const programApps = tabFiltered.slice().sort((a, b) => {
    // First, sort by isEnabled status (enabled providers first)
    if (a.isEnabled !== b.isEnabled) {
      return a.isEnabled ? -1 : 1;
    }
    // Then sort alphabetically by name
    return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
  });

  const { currentItems, currentPage, totalPages, searchTerm, setSearchTerm, setCurrentPage, filteredItems } =
    usePaginatedSearch({
      items: programApps,
      itemsPerPage: 9,
    });

  useEffect(() => {
    // Simulate data loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [category]);

  // Reset tab on route change
  useEffect(() => {
    setActiveTab('all');
  }, [category]);

  // State for QR Modal
  const [selectedProvider, setSelectedProvider] = useState<null | {
    name: string;
    description: string;
    providerId: string;
    logo: string;
  }>(null);

  // State for Request Modal
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const handleTryNow = (app: (typeof providers)[0]) => {
    setSelectedProvider({
      name: app.name,
      description: getRandomDescription(app.name),
      providerId: app.providerId,
      logo: app.logoUrl,
    });
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

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse">
            <div className="flex items-center space-x-4 mb-5">
              <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
              <div>
                <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-4"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Search Section - Made sticky */}
      <div className="sticky top-0 z-20 backdrop-blur-sm pb-4 pt-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder={category ? `Search ${category.toLowerCase()} programs...` : 'Search all programs...'}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm
              focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600
              placeholder:text-gray-400 shadow-sm"
          />
        </div>
        {filteredItems.length > 0 && (
          <p className="mt-3 text-sm text-gray-500">
            Found {filteredItems.length} {category ? `${category.toLowerCase()} ` : ''}program
            {filteredItems.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Add spacing after the fixed search bar */}
      <div className="mt-4">
        {/* Enhanced Dynamic Tab System */}
        {hasMultipleTabs && (
          <div className="mb-6">
            <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl flex-wrap">
              {categoryTabsConfig.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Filter Indicator */}
            {activeTab !== 'all' && (
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-lg">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-sm font-medium text-indigo-700">
                    Filter: {categoryTabsConfig.find((tab) => tab.id === activeTab)?.label}
                  </span>
                  <button
                    onClick={() => handleTabChange('all')}
                    className="ml-1 text-indigo-400 hover:text-indigo-600 transition-colors"
                    title="Clear filter"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cards Grid */}
        {currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((app) => (
                <ProgramCard
                  key={app.providerId}
                  id={app.providerId}
                  name={app.name}
                  description={app.description}
                  logo={app.logoUrl}
                  providerId={app.providerId}
                  onTryNow={() => handleTryNow(app)}
                  isEnabled={app.isEnabled}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8">
              {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              )}
            </div>
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

        {/* Bottom request section */}
        {currentItems.length > 0 && (
          <div className="mt-8">
            <RequestProgram variant="section" programType={category?.toLowerCase()} onRequest={handleRequestProgram} />
          </div>
        )}
      </div>

      {/* Modals */}
      {selectedProvider && (
        <QRModal
          isOpen={!!selectedProvider}
          onClose={() => setSelectedProvider(null)}
          provider={selectedProvider}
          requestUrl={null}
        />
      )}
      <RequestProgramModal isOpen={isRequestModalOpen} onClose={handleCloseRequestModal} category={category} />
    </div>
  );
};
