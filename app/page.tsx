import Link from 'next/link';
import Image from 'next/image';
import { vendors } from '@/lib/data/vendors';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D1F1F] text-white">
      {/* Header */}
      <header className="bg-[#102323] border-b border-[#1a3535] py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
            Padisquare
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Discover premium products from our curated vendors
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
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

        {/* CTA Section */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="bg-[#1a3535] rounded-2xl p-8 md:p-12 border border-[#2a4545]">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start shopping?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Explore our collection of premium vendors and discover unique products tailored to your style and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#159C47] hover:bg-[#128739] text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                Browse All Vendors
              </button>
              <button className="bg-[#2a4545] hover:bg-[#3a5555] text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#102323] border-t border-[#1a3535] mt-16 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-400">
          <p>&copy; 2024 Padisquare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}