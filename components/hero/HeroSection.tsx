"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, Star } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-16 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Background styling - very clean, no neon glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center">
        {/* Subtle radial gradient to center focus */}
        <div className="absolute top-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/80 via-transparent to-transparent"></div>
        
        {/* Subtle grid pattern - very light */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay"></div>
      </div>

      <div className="container-custom relative z-10 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <div className="w-5 h-5 rounded-full bg-[#FF4F00] flex items-center justify-center">
              <Star className="w-3 h-3 text-white fill-white" />
            </div>
            <span className="text-sm font-medium text-slate-700">
              TRUSTED BY 50+ ENTERPRISE CLIENTS
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-jakarta font-bold mb-6 max-w-5xl mx-auto leading-[1.1] tracking-tight text-slate-900"
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
          className="text-lg md:text-xl text-slate-500 font-jakarta max-w-2xl mx-auto mb-10 leading-relaxed"
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
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-[0_8px_30px_rgb(37,99,235,0.2)] transition-all hover:-translate-y-0.5"
          >
            Get started for FREE
            <ArrowRight size={18} />
          </a>
          
          {/* Trust Text */}
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-500 font-medium">
            <span>No credit card required</span>
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            <div className="flex items-center gap-1.5">
              <span className="flex items-center bg-slate-200/50 rounded-full px-1.5 py-0.5">
                <Star className="w-3 h-3 text-slate-700 fill-slate-700" />
              </span>
              Rated 4.9/5 by our clients
            </div>
          </div>
        </motion.div>

        {/* Large Mockup Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-5xl mx-auto mt-4 relative"
        >
          <div className="relative w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 p-2 md:p-4 flex flex-col">
            
            {/* Mock browser header */}
            <div className="flex items-center gap-2 mb-4 px-2 pt-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              </div>
              <div className="mx-auto bg-slate-100 rounded-md h-6 w-1/3 flex items-center justify-center">
                <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
              </div>
            </div>

            {/* Inner Content Area */}
            <div className="flex-1 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100 overflow-hidden relative group cursor-pointer">
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-[#2563EB] fill-[#2563EB] ml-1" />
                </div>
              </div>
              
              {/* Gradient abstract background representing software/video */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E0E7FF] via-[#F3E8FF] to-[#DBEAFE] opacity-70"></div>
              
              {/* Fake UI elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 flex gap-4">
                <div className="w-1/3 h-full bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 p-4">
                  <div className="w-full h-4 bg-slate-200/50 rounded mb-4"></div>
                  <div className="w-3/4 h-3 bg-slate-200/50 rounded mb-2"></div>
                  <div className="w-5/6 h-3 bg-slate-200/50 rounded mb-2"></div>
                  <div className="w-full h-24 bg-[#2563EB]/10 rounded-lg mt-6 border border-[#2563EB]/20"></div>
                </div>
                <div className="flex-1 h-full bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#007AFF] to-[#5AC8FA]"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
