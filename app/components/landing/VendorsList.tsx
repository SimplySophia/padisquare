import Link from 'next/link';
import Image from 'next/image';
import { vendors } from '@/lib/data/vendors';

export default function VendorsList() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Vendors</h2>
        <p className="text-gray-400">
          Explore unique storefronts from our elite vendor collection
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {vendors.map(vendor => (
          <Link
            key={vendor.slug}
            href={`/site/${vendor.slug}`}
            className="group bg-[#1a3535] rounded-2xl overflow-hidden hover:bg-[#2a4545] transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-56 md:h-64 overflow-hidden">
              <Image
                src={vendor.heroImage}
                alt={vendor.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={vendor.logo}
                    alt={`${vendor.name} logo`}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-white/20"
                  />
                  <h3 className="text-xl font-bold">{vendor.name}</h3>
                </div>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {vendor.description}
                </p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-[#159C47] font-semibold group-hover:gap-2 transition-all inline-flex items-center">
                  Visit Store
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-gray-500 text-sm">
                  View catalog →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}