export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Skeleton */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
            <div className="flex-1">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-2 animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-64 animate-pulse" />
            </div>
          </div>
        </div>
        <div className="h-64 md:h-96 bg-gray-300 dark:bg-gray-700 animate-pulse" />
      </div>

      {/* Products Skeleton */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="w-48 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300 dark:bg-gray-700 animate-pulse" />
              <div className="p-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-1 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4 animate-pulse" />
                <div className="flex items-center justify-between">
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
                  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-28 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
