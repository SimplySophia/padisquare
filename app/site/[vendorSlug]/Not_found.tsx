import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D1F1F] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-[#159C47] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Vendor Not Found
          </h2>
          <p className="text-gray-400 mb-8">
            The vendor you&apos;re looking for doesn&apos;t exist or has been removed from our marketplace.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#159C47] hover:bg-[#128739] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#2a4545] hover:bg-[#3a5555] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Browse Vendors
          </Link>
        </div>
      </div>
    </div>
  );
}
