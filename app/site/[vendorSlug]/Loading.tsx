export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0D1F1F]">
      {/* Header Skeleton */}
      <div className="bg-[#102323] border-b border-[#1a3535]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#1a3535] rounded-full animate-pulse" />
            <div className="flex-1">
              <div className="h-8 bg-[#1a3535] rounded w-48 mb-2 animate-pulse" />
              <div className="h-4 bg-[#1a3535] rounded w-64 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="h-100 md:h-125 bg-[#1a3535] animate-pulse" />

      {/* Products Skeleton */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 h-14 bg-[#1a3535] rounded-xl animate-pulse" />
          <div className="w-48 h-14 bg-[#1a3535] rounded-xl animate-pulse" />
        </div>

        <div className="mb-6">
          <div className="h-8 bg-[#1a3535] rounded w-48 mb-6 animate-pulse" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-[#1a3535] rounded-2xl overflow-hidden">
                <div className="aspect-square bg-[#2a4545] animate-pulse" />
                <div className="p-4">
                  <div className="h-6 bg-[#2a4545] rounded w-3/4 mb-2 animate-pulse" />
                  <div className="h-6 bg-[#2a4545] rounded w-24 mb-1 animate-pulse" />
                  <div className="h-4 bg-[#2a4545] rounded w-20 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}