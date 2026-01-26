'use client';

import Link from 'next/link';

interface Props {
  vendorName: string;
}

export default function TopNav({ vendorName }: Props) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 bg-[#102323] border-b border-[#1a3535]">
        <Link href="/" className="text-[#159C47] p-2 hover:bg-[#1a3535] rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </Link>
        
        <h1 className="text-xl font-bold tracking-wide uppercase">{vendorName}</h1>
        
        <button className="p-2 hover:bg-[#1a3535] rounded-full transition-colors">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between px-4 py-3 bg-[#102323] border-b border-[#1a3535]">
        <Link href="/" className="text-[#159C47] p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </Link>
        
        <h1 className="text-lg font-bold tracking-wide uppercase">{vendorName}</h1>
        
        <button className="p-2">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </button>
      </nav>
    </>
  );
}
