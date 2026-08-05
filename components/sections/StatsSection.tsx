"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";

function AnimatedCounter({
  target,
  suffix,
  duration = 2500,
  start,
}: {
  target: number;
  suffix: string;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target * 10) / 10);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, target, duration]);

  return (
    <span>
      {target % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 99.9,
    suffix: "%",
    label: "System Uptime",
    sublabel: "Guaranteed SLA",
    color: "var(--brand-green)",
  },
  {
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "Across industries",
    color: "#2563EB",
  },
  {
    value: 50,
    suffix: "+",
    label: "Enterprise Clients",
    sublabel: "Pan-India & Global",
    color: "#7C3AED",
  },
  {
    value: 24,
    suffix: "×7",
    label: "Support Coverage",
    sublabel: "Zero downtime support",
    color: "#D97706",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="stats"
      className="relative py-20 md:py-28 overflow-hidden"
      ref={ref}
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0010] via-[#070012] to-[#000D1A]" />
      <div className="animated-grid opacity-40" />

      {/* Glow accents */}
      <div
        className="aurora-blob"
        style={{
          width: "600px",
          height: "300px",
          background: "linear-gradient(90deg, rgba(34,197,94,0.15), rgba(37,99,235,0.15))",
          borderRadius: "0",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(100px)",
          animation: "none",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6 inline-flex">
            <TrendingUp size={12} />
            By the Numbers
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-6">
            Results That{" "}
            <span className="gradient-text-green">Speak</span> for Themselves
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 text-center relative overflow-hidden group"
              style={{ borderColor: `${stat.color}20` }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 50px ${stat.color}20`,
                transition: { duration: 0.3 },
              }}
            >
              {/* Glow dot */}
              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse"
                style={{ background: stat.color }}
              />

              {/* Number */}
              <div
                className="font-grotesk font-black text-4xl md:text-5xl xl:text-6xl mb-3 leading-none"
                style={{
                  background: `linear-gradient(135deg, #fff, ${stat.color})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: `drop-shadow(0 0 15px ${stat.color}50)`,
                }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  start={isInView}
                />
              </div>

              <div className="font-grotesk font-bold text-white text-sm md:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-muted font-inter text-xs">{stat.sublabel}</div>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
