import Image from 'next/image';
import { Vendor } from '@/types/vendor';

interface Props {
  vendor: Vendor;
}

export default function VendorProfile({ vendor }: Props) {
  return (
    <div className="px-4 py-6">
      <div className="flex gap-5 items-center">
        <div className="relative size-24 rounded-2xl border-2 border-[#159C47]/20 overflow-hidden">
          <Image src={vendor.logo} alt={vendor.name} fill className="object-cover" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <p className="text-white text-xl font-bold">{vendor.name}</p>
            <svg className="w-5 h-5 text-[#159C47]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>

          <p className="text-white/60 text-sm">{vendor.description}</p>

          <p className="text-white/80 text-sm font-semibold mt-1">
            ⭐ 4.9 <span className="text-white/40 font-normal">(1.4k reviews)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
