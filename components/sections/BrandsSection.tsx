"use client";

import Image from "next/image";

const brands = [
  { 
    srcLight: "/client logo/logo-final copy.png", 
    srcDark: "/client logo/logo-final.png", 
    alt: "Client Logo 1" 
  },
  { 
    srcLight: "/client logo/logo.png", 
    srcDark: "/client logo/logo.png", 
    alt: "Client Logo 2" 
  },
  { 
    srcLight: "/client logo/logo-final copy.png", 
    srcDark: "/client logo/logo-final.png", 
    alt: "Client Logo 3" 
  },
  { 
    srcLight: "/client logo/logo.png", 
    srcDark: "/client logo/logo.png", 
    alt: "Client Logo 4" 
  },
  { 
    srcLight: "/client logo/logo-final copy.png", 
    srcDark: "/client logo/logo-final.png", 
    alt: "Client Logo 5" 
  },
  { 
    srcLight: "/client logo/logo.png", 
    srcDark: "/client logo/logo.png", 
    alt: "Client Logo 6" 
  },
];

export default function BrandsSection() {
  return (
    <div className="w-full mt-auto pt-10 pb-6 relative z-20">
      <div className="container-custom">
        <p className="text-center text-sm font-jakarta font-semibold text-slate-400 dark:text-slate-500 tracking-widest uppercase mb-8">
          Trusted by industry leaders globally
        </p>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-hidden group">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-[#0D0D0F] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-[#0D0D0F] to-transparent pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex items-center space-x-16 md:space-x-24 animate-marquee whitespace-nowrap">
            {/* First Set */}
            {brands.map((brand, i) => (
              <div 
                key={`brand-1-${i}`} 
                className="relative w-64 h-24 md:w-80 md:h-32 flex items-center justify-center cursor-default"
              >
                <Image src={brand.srcLight} alt={brand.alt} fill className="object-contain dark:hidden" unoptimized />
                <Image src={brand.srcDark} alt={brand.alt} fill className="object-contain hidden dark:block" unoptimized />
              </div>
            ))}
            {/* Duplicated Set for infinite loop */}
            {brands.map((brand, i) => (
              <div 
                key={`brand-2-${i}`} 
                className="relative w-64 h-24 md:w-80 md:h-32 flex items-center justify-center cursor-default"
              >
                <Image src={brand.srcLight} alt={brand.alt} fill className="object-contain dark:hidden" unoptimized />
                <Image src={brand.srcDark} alt={brand.alt} fill className="object-contain hidden dark:block" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


