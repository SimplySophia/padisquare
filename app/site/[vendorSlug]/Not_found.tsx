import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center size-24 rounded-full bg-[#159C47]/10 mb-6">
            <svg className="w-12 h-12 text-[#159C47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            Vendor Not Found
          </h2>
          <p className="text-white/60 text-base mb-2">
            The vendor you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <p className="text-white/40 text-sm">
            Check the URL or browse our available vendors.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#159C47] hover:bg-[#128739] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-white/10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Browse Vendors
          </Link>
        </div>

        {/* Popular Vendors */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-4">Popular Vendors:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/site/techmart" className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-sm text-white/80 hover:text-white transition-colors">
              TechMart
            </Link>
            <Link href="/site/fashionhub" className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-sm text-white/80 hover:text-white transition-colors">
              Fashion Hub
            </Link>
            <Link href="/site/homestyle" className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg text-sm text-white/80 hover:text-white transition-colors">
              HomeStyle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}