'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="bg-[#1a3535] rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <svg
            className={`w-5 h-5 ${
              isWishlisted
                ? 'fill-[#159C47] stroke-[#159C47]'
                : 'fill-none stroke-gray-600'
            }`}
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      
      <div className="p-4">
        <h4 className="font-semibold text-base md:text-lg mb-2 line-clamp-1">
          {product.name}
        </h4>
        <p className="text-[#159C47] font-bold text-lg md:text-xl mb-1">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-500 text-xs md:text-sm">
          REF: #{product.id}
        </p>
      </div>
    </div>
  );
}