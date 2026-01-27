'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Vendor } from '@/types/vendor';

interface Props {
  vendor: Vendor;
}

export default function VendorHeader({ vendor }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>

          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-[#159C47] flex items-center justify-center border border-white/10 overflow-hidden">
              <Image
                src={vendor.logo}
                alt={vendor.name}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <h2 className="text-white text-base font-bold tracking-tight">
              {vendor.name}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10">
            ❤️
          </button>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10">
            🔗
          </button>
        </div>
      </div>
    </header>
  );
}
