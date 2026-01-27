'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroSlides = [
  {
    image: '/assets/hero/hero.jpg',
    title: 'Premium Collection',
    subtitle: 'EXCLUSIVE ACCESS',
    description: 'Experience the pinnacle of craftsmanship and design in our latest curated selection.',
    vendorSlug: 'techmart' 
  },
  {
    image: '/assets/hero/hero7.png',
    title: 'New Arrivals',
    subtitle: 'FRESH & TRENDING',
    description: 'Discover the latest additions to our collection, handpicked for discerning customers.',
    vendorSlug: 'fashionhub' 
  },
  {
    image: '/assets/hero/hero-3.jpg',
    title: 'Limited Edition',
    subtitle: 'EXCLUSIVE DROPS',
    description: 'Get access to rare and limited items before they sell out.',
    vendorSlug: 'homestyle' 
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="relative h-100 md:h-125 overflow-hidden bg-[#0D1F1F]">
      
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={95}
            sizes="(max-width: 708px) 100vw, (max-width: 1100px) 100vw, 100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gA//2Q=="
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20" />
        </div>
      ))}

      
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="p-6 md:p-12 lg:p-16 max-w-4xl">
          <div
            className={`transition-all duration-700 transform ${
              isTransitioning
                ? 'opacity-0 translate-y-8'
                : 'opacity-100 translate-y-0'
            }`}
          >
            
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#159C47]"></div>
              <p className="text-[#159C47] text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-linear-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {heroSlides[currentSlide].title}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-base md:text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>

            {/* CTA Button */}
            <Link 
              href={`/site/${heroSlides[currentSlide].vendorSlug}`}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#159C47] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#128739] hover:shadow-lg hover:shadow-[#159C47]/50 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                Visit Store
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? 'w-12 bg-[#159C47]'
                    : 'w-8 bg-gray-500 hover:bg-gray-400'
                }`}
              ></div>
              {index === currentSlide && (
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="h-full bg-white/40 animate-progress origin-left"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 w-full justify-between px-6 z-20">
          <button
            onClick={() => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
            className="group p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-white group-hover:text-[#159C47] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
            className="group p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-white group-hover:text-[#159C47] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Brand Badge */}
        <div className="absolute top-6 right-6 bg-green-400/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <p className="text-white text-sm font-semibold">Padisquare</p>
        </div>
      </div>
    </section>
  );
}