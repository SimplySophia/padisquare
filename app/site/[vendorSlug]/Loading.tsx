export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-[#1A1A1A] animate-pulse" />
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-[#1A1A1A] animate-pulse" />
              <div className="h-5 w-32 bg-[#1A1A1A] rounded animate-pulse" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="size-10 rounded-full bg-[#1A1A1A] animate-pulse" />
            <div className="size-10 rounded-full bg-[#1A1A1A] animate-pulse" />
          </div>
        </div>
      </div>

      <main>
        {/* Profile Skeleton */}
        <div className="px-4 py-6">
          <div className="flex gap-5 items-center">
            <div className="size-24 rounded-2xl bg-[#1A1A1A] animate-pulse" />
            <div className="flex flex-col gap-2 flex-1">
              <div className="h-6 bg-[#1A1A1A] rounded w-48 animate-pulse" />
              <div className="h-4 bg-[#1A1A1A] rounded w-64 animate-pulse" />
              <div className="h-4 bg-[#1A1A1A] rounded w-32 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Hero Skeleton */}
        <div className="px-4">
          <div className="rounded-xl min-h-64 bg-[#1A1A1A] animate-pulse" />
        </div>

        {/* Search & Filter Skeleton */}
        <div className="flex flex-col gap-4 px-4 py-8">
          <div className="flex gap-3">
            <div className="flex-1 h-12 rounded-lg bg-[#1A1A1A] animate-pulse" />
            <div className="size-12 rounded-lg bg-[#1A1A1A] animate-pulse" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 w-32 bg-[#1A1A1A] rounded animate-pulse" />
            <div className="h-4 w-24 bg-[#1A1A1A] rounded animate-pulse" />
          </div>
        </div>

        {/* Product Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="aspect-3/4 w-full bg-[#1A1A1A] rounded-xl animate-pulse" />
              <div className="px-1">
                <div className="h-4 bg-[#1A1A1A] rounded w-3/4 mb-2 animate-pulse" />
                <div className="h-5 bg-[#1A1A1A] rounded w-20 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Nav Skeleton */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A]/80 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex justify-between items-center z-50">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="size-6 bg-[#1A1A1A] rounded animate-pulse" />
            <div className="h-2 w-10 bg-[#1A1A1A] rounded animate-pulse" />
          </div>
        ))}
      </nav>
    </div>
  );
}