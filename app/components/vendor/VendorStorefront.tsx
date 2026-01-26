'use client';

import { useState, useMemo } from 'react';
import ProductGrid from '../product/ProductGrid';
import SortDropdown from '../SortDropdown';
import SearchBar from '../SearchBar';
import HeroSection from '../HeroSection';
import BottomNav from '../layout/BottomNav';
import TopNav from '../layout/TopNav';
import { Vendor } from '@/types/vendor';
import { Product } from '@/types/product';

interface Props {
  vendor: Vendor;
  products: Product[];
}

export default function VendorStorefront({ vendor, products }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'recent':
      default:
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [products, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#0D1F1F] text-white">
      <TopNav vendorName={vendor.name} />
      
      <HeroSection vendor={vendor} />
      
      <main className="px-4 md:px-6 lg:px-8 py-6 pb-24 md:pb-8 max-w-7xl mx-auto">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <SortDropdown value={sortBy} onChange={setSortBy} />
        
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
          <ProductGrid products={filteredAndSortedProducts} />
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Showing {filteredAndSortedProducts.length} of {products.length} products
        </p>
      </main>

      <BottomNav />
    </div>
  );
}