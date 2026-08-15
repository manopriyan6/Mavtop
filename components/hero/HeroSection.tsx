"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import BrandsSection from "@/components/sections/BrandsSection";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now.getMonth() === 7 && now.getDate() < 16) {
      setShowVideo(true);
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.15;
      videoRef.current.play().catch(e => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(console.error);
        }
      });
    }
  }, [showVideo]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-between pt-32 pb-0 overflow-hidden bg-[#FAFAFA] dark:bg-[#0D0D0F]"
    >
      {/* Background styling - very clean, no neon glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center">
        {/* Subtle radial gradient to center focus */}
        <div className="absolute top-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/80 dark:from-brand-blue/5 via-transparent to-transparent transform-gpu"></div>
      </div>

      <div className="container-custom relative z-10 text-center flex flex-col items-center flex-1 justify-center">
        


        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-bold mb-6 max-w-5xl mx-auto leading-[1.1] tracking-tight text-slate-900 dark:text-white"
        >
          Engineering the future with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5AC8FA]">
            Maximum Value & Performance
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-jakarta max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build robust software, enterprise automation, and cloud platforms
          that help businesses scale faster and save up to 80% on operational costs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center mb-16"
        >
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-[0_8px_30px_rgb(37,99,235,0.2)] transition-all hover:-translate-y-0.5"
          >
            Book a Call
            <ArrowRight size={18} />
          </Link>
          
        </motion.div>
      </div> {/* End of container-custom */}

      {/* Full-width container for Massive Mockup Image/Video */}
      <div className="w-full flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full px-3 md:px-0 md:w-[85vw] lg:w-[70vw] max-w-6xl mx-auto mt-8 relative"
        >
          <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-white dark:bg-[#131524] shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
            
            {showVideo ? (
              <div className="absolute inset-0 bg-white dark:bg-[#131524] flex items-center justify-center overflow-hidden">
                 <video 
                   ref={videoRef}
                   src="/inde.mp4"
                   loop 
                   playsInline
                   className="w-full h-full object-cover object-center transform-gpu"
                 />
              </div>
            ) : (
              <div className="absolute inset-0 bg-white dark:bg-[#131524] flex items-center justify-center overflow-hidden">
                 <img 
                   src="/hero-abstract.png" 
                   alt="Mavtop Abstract Technology"
                   className="w-full h-full object-cover object-center dark:opacity-30 transform-gpu"
                 />
                 <div className="absolute inset-0 hidden dark:block bg-gradient-to-tr from-[#0D0D0F]/90 via-transparent to-[#1E2038]/60 transform-gpu pointer-events-none" />
              </div>
            )}

          </div>
        </motion.div>
      </div>

      {/* Brands at the bottom of the hero */}
      <BrandsSection />
    </section>
  );
}
