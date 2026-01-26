import { Vendor } from '@/types/vendor';
import Image from 'next/image';

export default function VendorHeader({ vendor }: { vendor: Vendor }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <Image
            src={vendor.logo}
            alt={`${vendor.name} logo`}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {vendor.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {vendor.description}
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={vendor.heroImage}
          alt={`${vendor.name} hero`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
      </div>
    </header>
  );
}