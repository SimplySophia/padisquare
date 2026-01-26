'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Error</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We encountered an error while loading this vendor page.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-[#159C47] hover:bg-[#128739] text-white px-6 py-3 rounded-md transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}