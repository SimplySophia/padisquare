import Image from 'next/image';

interface Props {
  heroImage: string;
  vendorName: string;
}

export default function VendorHero({ heroImage, vendorName }: Props) {
  return (
    <div className="px-4">
      <div className="relative overflow-hidden rounded-xl min-h-64 border border-white/5">
        <Image
          src={heroImage}
          alt={vendorName}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        <div className="p-6 relative z-10 mt-6">
          <p className="text-[#159C47] text-xs md:text-lg font-bold uppercase tracking-[0.2em] mb-1">
            New Season
          </p>
          <p className="text-white text-3xl md:text-4xl font-bold">Premium Collection</p>
          <p className="text-white/70 text-sm md:text-xl mt-2 max-w-90">
            Explore our curated selection of exclusive items.
          </p>
        </div>
      </div>
    </div>
  );
}
