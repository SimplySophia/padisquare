import { Vendor } from '@/types/vendor';
import Image from 'next/image';

interface Props {
  vendor: Vendor;
}

export default function HeroSection({ vendor }: Props) {
  return (
    <section className="relative h-100 md:h-225 overflow-hidden">
      <Image
        src={vendor.heroImage}
        alt={vendor.name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <p className="text-[#159C47] text-sm md:text-base font-semibold tracking-wider mb-2">
          EXCLUSIVE ACCESS
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
          Premium Collection
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-xl">
          {vendor.description}
        </p>
      </div>
    </section>
  );
}