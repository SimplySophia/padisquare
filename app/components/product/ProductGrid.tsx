import Image from 'next/image';
import { Product } from '../../../lib/data';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#159C47]">
            ${product.price.toFixed(2)}
          </span>
          <button className="bg-[#159C47] hover:bg-[#128739] text-white px-4 py-2 rounded-md transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}