/**
 * Environment Configuration
 *
 * This file provides environment-based configuration for the application.
 * It automatically selects the correct API URL based on the current environment.
 */

export const ENV = {
  // Environment detection
  isDevelopment: import.meta.env.VITE_NODE_ENV === 'development' ||
                 import.meta.env.DEV,
  isProduction: import.meta.env.VITE_NODE_ENV === 'production' ||
                import.meta.env.PROD,

  // API Configuration - Automatically selects based on environment
  apiUrl: (import.meta.env.VITE_NODE_ENV === 'production' || import.meta.env.PROD)
    ? import.meta.env.VITE_API_URL_PROD || 'https://your-production-api.com/api'
    : import.meta.env.VITE_API_URL_DEV || 'http://localhost:5000/api',

  // Reclaim Protocol Configuration
  reclaimAppId: import.meta.env.VITE_RECLAIM_APP_ID || '',
  reclaimAppSecret: import.meta.env.VITE_RECLAIM_APP_SECRET || '',

  // Get current environment name
  env: import.meta.env.MODE || 'development',
} as const;

/**
 * Get the API base URL based on current environment
 * @returns {string} API base URL
 */
export const getApiUrl = (): string => {
  console.log(`🌐 Environment: ${ENV.env}`);
  console.log(`📡 API URL: ${ENV.apiUrl}`);
  return ENV.apiUrl;
};

/**
 * Check if running in development mode
 * @returns {boolean}
 */
export const isDev = (): boolean => ENV.isDevelopment;

/**
 * Check if running in production mode
 * @returns {boolean}
 */
export const isProd = (): boolean => ENV.isProduction;

// Export environment variables for easy access
export default ENV;
