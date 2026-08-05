"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";

// Particle component
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDuration: `${Math.random() * 15 + 8}s`,
            animationDelay: `${Math.random() * 8}s`,
            background:
              i % 3 === 0
                ? "rgba(34,197,94,0.7)"
                : i % 3 === 1
                ? "rgba(37,99,235,0.7)"
                : "rgba(124,58,237,0.5)",
          }}
        />
      ))}
    </div>
  );
}

// Light trails
function LightTrails() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="light-trail"
          style={{
            top: `${20 + i * 15}%`,
            width: `${200 + i * 50}px`,
            animationDuration: `${5 + i * 2}s`,
            animationDelay: `${i * 1.5}s`,
            opacity: 0.4 - i * 0.05,
          }}
        />
      ))}
    </div>
  );
}

// Animated counter hook
function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

export default function HeroSection() {
  const [countersStarted, setCountersStarted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setCountersStarted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated Grid */}
      <div className="animated-grid" />

      {/* Aurora Blobs */}
      <div
        className="aurora-blob"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(34,197,94,0.25), transparent 70%)",
          top: "-10%",
          right: "-5%",
          animationDelay: "0s",
          animationDuration: "10s",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)",
          bottom: "-5%",
          left: "-5%",
          animationDelay: "3s",
          animationDuration: "12s",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)",
          top: "40%",
          left: "45%",
          animationDelay: "5s",
          animationDuration: "9s",
        }}
      />

      {/* Particles & Light Trails */}
      <Particles />
      <LightTrails />

      {/* Hero Content */}
      <div className="container-custom relative z-10 text-center pt-24 pb-16">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <span className="section-label">
            <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
            Chennai · Tamil Nadu · India
          </span>
        </motion.div>




        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-grotesk font-bold mb-6 max-w-5xl mx-auto leading-tight"
        >
          Engineering the Future with{" "}
          <span className="gradient-text-red">Maximum Value</span>
          {" "}+{" "}
          <span className="gradient-text-blue">Top Performance</span>
        </motion.p>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-base md:text-lg text-muted font-inter max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We build AI-powered software, enterprise automation, cloud platforms
          and digital experiences that help businesses scale faster.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-xl"
          >
            Start Your Project
            <ChevronRight size={18} />
          </a>
          <a
            href="#products"
            className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl"
          >
            <Play size={16} className="text-electric-blue" />
            View Our Work
          </a>
        </motion.div>


      </div>


    </section>
  );
}
