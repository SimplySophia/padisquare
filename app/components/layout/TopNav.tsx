'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TopNav() {
  const [cartCount] = useState(3); // Example cart count

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 bg-[#102323] border-b border-[#1a3535]">
        <div className="flex gap-2">
          <Link 
            href="/" 
            className="group relative px-4 py-2 text-gray-300 font-medium transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Home
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#159C47] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="absolute inset-0 bg-[#159C47] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </Link>
          
          <Link 
            href="/" 
            className="group relative px-4 py-2 text-gray-300 font-medium transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Products
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#159C47] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="absolute inset-0 bg-[#159C47] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </Link>
          
          <Link 
            href="/" 
            className="group relative px-4 py-2 text-gray-300 font-medium transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Categories
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#159C47] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="absolute inset-0 bg-[#159C47] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </Link>
        </div>
        
        <h1 className="text-xl font-bold tracking-wide uppercase bg-linear-to-r from-white to-green-400 bg-clip-text text-transparent">
          Padisquare
        </h1>
        
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button className="relative p-2 hover:bg-[#1a3535] rounded-full transition-all duration-300 group">
            <svg 
              className="w-6 h-6 text-gray-400 group-hover:text-[#159C47] transition-colors duration-300 group-hover:scale-110 transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#159C47] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Button */}
          <button className="p-2 hover:bg-[#1a3535] rounded-full transition-all duration-300 group">
            <svg 
              className="w-6 h-6 text-gray-400 group-hover:text-[#159C47] transition-colors duration-300 group-hover:scale-110 transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between px-4 py-3 bg-[#102323] border-b border-[#1a3535]">
        <Link href="/" className="text-[#159C47] p-2 active:scale-95 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </Link>
        
        <h1 className="text-lg font-bold tracking-wide uppercase bg-linear-to-r from-white to-green-400 bg-clip-text text-transparent">
          Padisquare
        </h1>
        
        <div className="flex items-center gap-2">
          {/* Mobile Cart */}
          <button className="relative p-2 active:scale-95 transition-transform">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#159C47] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Profile */}
          <button className="p-2 active:scale-95 transition-transform">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}