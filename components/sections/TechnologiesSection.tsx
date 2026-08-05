"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers } from "lucide-react";

const technologies = [
  { name: "React", color: "#61DAFB", letter: "R" },
  { name: "Next.js", color: "#FFFFFF", letter: "N" },
  { name: "Node.js", color: "#68A063", letter: "No" },
  { name: "Laravel", color: "#FF2D20", letter: "L" },
  { name: "Python", color: "#3776AB", letter: "Py" },
  { name: "Docker", color: "#2496ED", letter: "D" },
  { name: "AWS", color: "#FF9900", letter: "AWS" },
  { name: "Supabase", color: "#3ECF8E", letter: "Sb" },
  { name: "PostgreSQL", color: "#4169E1", letter: "PG" },
  { name: "OpenAI", color: "#74AA9C", letter: "AI" },
  { name: "Meta", color: "#1877F2", letter: "M" },
  { name: "Google Cloud", color: "#4285F4", letter: "GC" },
  { name: "TypeScript", color: "#3178C6", letter: "TS" },
  { name: "Flutter", color: "#54C5F8", letter: "Fl" },
  { name: "Redis", color: "#DC382D", letter: "Re" },
  { name: "Nginx", color: "#009900", letter: "Nx" },
];

function TechBadge({ tech }: { tech: (typeof technologies)[0] }) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 rounded-2xl border bg-white dark:bg-[#131524] border-slate-200 dark:border-slate-800 transition-all duration-300 mx-3 cursor-default group hover:-translate-y-1 shadow-sm"
    >
      {/* Letter icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center font-grotesk font-black text-xs flex-shrink-0"
        style={{
          background: `${tech.color}18`,
          border: `1px solid ${tech.color}30`,
          color: tech.color,
        }}
      >
        {tech.letter}
      </div>
      <span className="font-jakarta font-semibold text-sm text-slate-900 dark:text-white/70 group-hover:text-slate-900 dark:hover:text-white dark:text-white transition-colors whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

// Duplicate array for seamless infinite scroll
const techRow1 = [...technologies, ...technologies];
const techRow2 = [...technologies.slice(8), ...technologies.slice(0, 8), ...technologies.slice(8), ...technologies.slice(0, 8)];

export default function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden bg-[#FAFAFA] dark:bg-[#0D0D0F]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

      <div className="container-custom relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="section-label mb-6 inline-flex">
            <Layers size={12} />
            Our Tech Stack
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white mt-6 mb-4">
            Powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5AC8FA]">World-Class</span>
            <br />
            Technology
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-jakarta text-lg max-w-xl mx-auto">
            We select the best tools for every project — no dogma, just results.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — left to right */}
      <div className="relative overflow-hidden mb-4 mt-20">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#FAFAFA] dark:from-[#0D0D0F] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#FAFAFA] dark:from-[#0D0D0F] to-transparent pointer-events-none" />

        <div className="marquee-track">
          {techRow1.map((tech, i) => (
            <TechBadge key={`r1-${i}`} tech={tech} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#FAFAFA] dark:from-[#0D0D0F] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#FAFAFA] dark:from-[#0D0D0F] to-transparent pointer-events-none" />

        <div className="marquee-track marquee-track-reverse">
          {techRow2.map((tech, i) => (
            <TechBadge key={`r2-${i}`} tech={tech} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />
    </section>
  );
}
