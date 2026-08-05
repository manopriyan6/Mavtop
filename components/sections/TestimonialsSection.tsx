"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO",
    company: "TechVision India",
    initial: "T",
    companyColor: "#2563EB",
    quote:
      "Mavtop transformed our entire operations with their AI automation suite. We went from manual processes taking 8 hours to fully automated workflows in minutes. The ROI was visible within the first month.",
    stars: 5,
    result: "85% reduction in manual work",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    company: "FinServe Solutions",
    initial: "F",
    companyColor: "var(--brand-green)",
    quote:
      "Their Mavtop CRM integration with our existing stack was seamless. The AI lead scoring alone improved our conversion rate by 40%. The support team is incredible — always available, always helpful.",
    stars: 5,
    result: "40% higher conversion rate",
  },
  {
    name: "Arjun Patel",
    role: "MD",
    company: "RetailMax Group",
    initial: "R",
    companyColor: "#7C3AED",
    quote:
      "We had tried 3 other software vendors before Mavtop. None of them understood Indian business requirements like they did. Their GST-compliant billing system saved us countless hours during tax season.",
    stars: 5,
    result: "Zero compliance issues",
  },
  {
    name: "Sunita Nair",
    role: "VP Operations",
    company: "HealthBridge",
    initial: "H",
    companyColor: "#059669",
    quote:
      "The WhatsApp Cloud solution from Mavtop helped us reach 50,000+ patients efficiently. The broadcast templates and chatbot cut our call center load by 60%. Absolutely game-changing for healthcare communication.",
    stars: 5,
    result: "60% fewer support calls",
  },
  {
    name: "Mohammed Faiz",
    role: "Founder",
    company: "EduSpark",
    initial: "E",
    companyColor: "#D97706",
    quote:
      "We launched our EdTech platform in under 6 weeks with Mavtop's team. The Next.js + Supabase stack they chose was perfect. The site handles 10,000 concurrent users without breaking a sweat.",
    stars: 5,
    result: "10K+ concurrent users",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const getVisible = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      items.push({
        data: testimonials[(active + i + testimonials.length) % testimonials.length],
        offset: i,
      });
    }
    return items;
  };

  return (
    <section className="section-padding relative overflow-hidden bg-[#0A0A0C]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-accent/30 to-transparent" />

      <div
        className="aurora-blob"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%)",
          top: "20%",
          left: "10%",
          animationDelay: "4s",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6 inline-flex">
            <Quote size={12} />
            Client Stories
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-6 mb-4">
            Trusted by{" "}
            <span className="gradient-text-green">Industry</span> Leaders
          </h2>
          <p className="text-muted font-inter text-lg max-w-xl mx-auto">
            Real results from real businesses across India.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6 overflow-hidden min-h-[400px]">
            {getVisible().map(({ data, offset }, i) => (
              <motion.div
                key={`${active}-${offset}`}
                initial={{ opacity: 0, x: offset * 100, scale: 0.85 }}
                animate={{
                  opacity: offset === 0 ? 1 : 0.5,
                  x: 0,
                  scale: offset === 0 ? 1 : 0.88,
                }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className={`glass-card rounded-3xl p-8 relative overflow-hidden flex-shrink-0 ${
                  offset === 0
                    ? "w-full max-w-2xl z-10"
                    : "w-72 hidden md:block cursor-pointer"
                }`}
                style={{
                  borderColor: offset === 0 ? `${data.companyColor}25` : "rgba(255,255,255,0.05)",
                  boxShadow: offset === 0 ? `0 20px 80px ${data.companyColor}15` : "none",
                }}
                onClick={() => {
                  if (offset === -1) prev();
                  if (offset === 1) next();
                }}
              >
                {/* Quote icon */}
                <div
                  className="absolute top-6 right-8 opacity-10"
                  style={{ color: data.companyColor }}
                >
                  <Quote size={60} />
                </div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="mb-5">
                    <StarRating count={data.stars} />
                  </div>

                  {/* Result badge */}
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold font-grotesk border mb-5"
                    style={{
                      background: `${data.companyColor}12`,
                      borderColor: `${data.companyColor}30`,
                      color: data.companyColor,
                    }}
                  >
                    ↑ {data.result}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-inter text-white/85 text-base md:text-lg leading-relaxed mb-8 italic">
                    "{data.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-grotesk font-black text-lg flex-shrink-0"
                      style={{
                        background: `${data.companyColor}20`,
                        border: `1px solid ${data.companyColor}30`,
                        color: data.companyColor,
                      }}
                    >
                      {data.initial}
                    </div>
                    <div>
                      <div className="font-grotesk font-bold text-white">{data.name}</div>
                      <div className="font-inter text-sm text-muted">
                        {data.role}, {data.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-muted hover:text-white transition-all duration-200 hover:border-brand-green/40 hover:bg-brand-green/10"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-brand-green" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-muted hover:text-white transition-all duration-200 hover:border-brand-green/40 hover:bg-brand-green/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
    </section>
  );
}
