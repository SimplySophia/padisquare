'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TopNav() {
  const [cartCount] = useState(3);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
            href="/#vendors" 
            scroll={true}
            className="group relative px-4 py-2 text-gray-300 font-medium transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Products
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#159C47] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="absolute inset-0 bg-[#159C47] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </Link>
          
          <Link 
            href="/#vendors" 
            scroll={true}
            className="group relative px-4 py-2 text-gray-300 font-medium transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Vendors
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
      <nav className="md:hidden flex items-center justify-between px-4 py-3 bg-[#102323] border-b border-[#1a3535] relative z-50">
        <button 
          onClick={toggleMobileMenu}
          className="text-[#159C47] p-2 active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
        
        <h1 className="text-lg font-bold tracking-wide uppercase bg-linear-to-r from-white to-green-400 bg-clip-text text-transparent">
          Padisquare
        </h1>
        
        <div className="flex items-center gap-2">
          {/* Mobile Cart */}
          <button className="relative hover:bg-[#1a3535] rounded-full p-2 active:scale-95 transition-transform">
            <svg 
            className="w-6 h-6 text-gray-400 group-hover:text-[#159C47] transition-colors duration-300 group-hover:scale-110 transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#159C47] p-2 rounded-full text-white text-xs font-bold w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Profile */}
          <button className="p-2 active:scale-95 transition-transform hover:bg-[#1a3535] rounded-full">
            <svg className="w-6 h-6 rounded-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        className={`md:hidden fixed top-13 left-0 h-[calc(100vh-52px)] w-64 bg-[#0D1F1F] border-r border-[#1a3535] z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <nav className="flex flex-col gap-2">
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#1a3535] transition-colors"
            >
              <svg className="w-5 h-5 text-[#159C47]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <span className="text-white font-medium group-hover:text-[#159C47] transition-colors">
                Home
              </span>
            </Link>

            <Link 
              href="/#vendors" 
              scroll={true}
              onClick={closeMobileMenu}
              className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#1a3535] transition-colors"
            >
              <svg className="w-5 h-5 text-[#159C47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
              <span className="text-white font-medium group-hover:text-[#159C47] transition-colors">
                Products
              </span>
            </Link>

            <Link 
              href="/#vendors" 
              scroll={true}
              onClick={closeMobileMenu}
              className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#1a3535] transition-colors"
            >
              <svg className="w-5 h-5 text-[#159C47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span className="text-white font-medium group-hover:text-[#159C47] transition-colors">
                Vendors
              </span>
            </Link>
          </nav>

          {/* Divider */}
          <div className="my-6 border-t border-[#1a3535]"></div>

          {/* Additional Links */}
          <div className="flex flex-col gap-2">
            <Link 
              href="/about" 
              onClick={closeMobileMenu}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMobileMenu}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/help" 
              onClick={closeMobileMenu}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Help & Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}