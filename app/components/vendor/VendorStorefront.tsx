'use client';

import { useState, useMemo, useEffect } from 'react';

import BottomNav from "../layout/BottomNav";
import ProductCard from "../product/ProductCard";
import ProductSearchBar from "./ProductSearchBar";
import ProductSortBar from "./ProductSortBar";
import VendorHeader from "./VendorHeader";
import VendorHero from "./VendorHero";
import VendorProfile from "./VendorProfile";

import { Vendor } from '@/types/vendor';
import { Product } from '@/types/product';
import EmptyState from './EmptyState';
import Footer from '../landing/Footer';

interface Props {
  vendor: Vendor;
  products: Product[];
}

export default function VendorStorefront({ vendor, products }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4); // mobile default

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // reset to first page asynchronously to avoid synchronous state update causing cascading renders
    const id = window.setTimeout(() => setCurrentPage(1), 0);
    return () => clearTimeout(id);
  }, [searchQuery, sortBy]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'popularity':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );
    }

    return result;
  }, [products, searchQuery, sortBy]);

  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / itemsPerPage
  );

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredAndSortedProducts.slice(start, end);
  }, [filteredAndSortedProducts, currentPage, itemsPerPage]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <VendorHeader vendor={vendor} />

      <main>
        <VendorProfile vendor={vendor} />

        <VendorHero
          heroImage={vendor.heroImage}
          vendorName={vendor.name}
        />

        <div className="px-4 py-8 flex flex-col gap-4">
          <ProductSearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <ProductSortBar
            total={filteredAndSortedProducts.length}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-6">
          {paginatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-10 px-6">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-white/40 text-sm font-medium text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/5"
            >
              Prev
            </button>

            <span className="text-white/60 text-sm">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-white/10 text-sm font-medium text-white disabled:opacity-40 disabled:cursor-not-allowed bg-green-500/20 hover:bg-white/5"
            >
              Next
            </button>
          </div>
        )}

        {filteredAndSortedProducts.length === 0 && <EmptyState />}
      </main>

      <BottomNav />

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
