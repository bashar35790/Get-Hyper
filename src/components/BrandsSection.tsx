"use client";

import FadeInWrapper from "./FadeInWrapper";

export default function BrandsSection() {
  // Placeholder array since we lack specific brand logos, 
  // we use a repeating pattern of simulated logo boxes.
  const brands = Array.from({ length: 8 }, (_, i) => `Brand ${i + 1}`);

  return (
    <section className="w-full py-24 bg-gh-cream overflow-hidden">
      <FadeInWrapper direction="up" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          These brands got hyped.
        </h2>
      </FadeInWrapper>

      {/* Infinite Marquee using manual CSS animation classes via Tailwind later or just standard flex scroll */}
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="flex animate-marquee space-x-12 px-6 py-4 items-center whitespace-nowrap">
          {brands.map((brand, idx) => (
            <div
              key={`marquee-1-${idx}`}
              className="flex items-center justify-center min-w-[200px] h-24 bg-white/50 backdrop-blur-md rounded-2xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 shadow-sm border border-gray-100"
            >
              <span className="text-2xl font-extrabold text-gray-400 uppercase tracking-widest">
                {brand}
              </span>
            </div>
          ))}
          {/* Duplicate for infinite effect */}
          {brands.map((brand, idx) => (
            <div
              key={`marquee-2-${idx}`}
              className="flex items-center justify-center min-w-[200px] h-24 bg-white/50 backdrop-blur-md rounded-2xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 shadow-sm border border-gray-100"
            >
              <span className="text-2xl font-extrabold text-gray-400 uppercase tracking-widest">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
