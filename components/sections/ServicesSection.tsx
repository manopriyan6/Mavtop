"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Code2,
  Cloud,
  Smartphone,
  Globe,
  Zap,
  ChevronRight,
  Bot,
  Database,
  Server,
  Layers,
  Activity,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    category: "AI Solutions",
    color: "var(--brand-blue)",
    gradient: "from-green-900/30 to-transparent",
    borderColor: "rgba(34,197,94,0.2)",
    glowColor: "rgba(34,197,94,0.15)",
    items: ["AI Agents", "Intelligent Chatbots", "Process Automation", "Machine Learning", "Computer Vision", "NLP Solutions"],
    description: "Transform your operations with cutting-edge artificial intelligence — from conversational AI to predictive analytics.",
    badge: "Most Popular",
    size: "col-span-1 md:col-span-2",
  },
  {
    icon: Code2,
    category: "Software Development",
    color: "#2563EB",
    gradient: "from-blue-900/30 to-transparent",
    borderColor: "rgba(37,99,235,0.2)",
    glowColor: "rgba(37,99,235,0.15)",
    items: ["SaaS Platforms", "CRM Systems", "ERP Solutions", "Custom Software"],
    description: "Scalable, enterprise-grade software built with modern architecture.",
    badge: null,
    size: "col-span-1",
  },
  {
    icon: Cloud,
    category: "Cloud & DevOps",
    color: "#7C3AED",
    gradient: "from-purple-900/30 to-transparent",
    borderColor: "rgba(124,58,237,0.2)",
    glowColor: "rgba(124,58,237,0.15)",
    items: ["AWS Solutions", "Azure & GCP", "DevOps & CI/CD", "Infrastructure"],
    description: "Cloud-native solutions for maximum reliability and scale.",
    badge: null,
    size: "col-span-1",
  },
  {
    icon: Smartphone,
    category: "Mobile Apps",
    color: "#059669",
    gradient: "from-emerald-900/30 to-transparent",
    borderColor: "rgba(5,150,105,0.2)",
    glowColor: "rgba(5,150,105,0.15)",
    items: ["Android", "iOS", "Flutter", "React Native"],
    description: "Beautiful, performant apps that users love.",
    badge: null,
    size: "col-span-1",
  },
  {
    icon: Globe,
    category: "Web Applications",
    color: "#D97706",
    gradient: "from-amber-900/30 to-transparent",
    borderColor: "rgba(217,119,6,0.2)",
    glowColor: "rgba(217,119,6,0.15)",
    items: ["React & Next.js", "Laravel", "Node.js", "Full-Stack"],
    description: "High-performance web platforms engineered for scale.",
    badge: null,
    size: "col-span-1",
  },
  {
    icon: Zap,
    category: "Digital Transformation",
    color: "var(--brand-blue)",
    gradient: "from-green-900/20 to-blue-900/20",
    borderColor: "rgba(34,197,94,0.15)",
    glowColor: "rgba(34,197,94,0.1)",
    items: ["Legacy Modernization", "Process Optimization", "AI Integration", "Change Management"],
    description: "Helping businesses move from traditional systems to AI-driven operations — seamlessly and at speed.",
    badge: "Featured",
    size: "col-span-1 md:col-span-2",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-background">
      {/* Section background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
      <div
        className="aurora-blob"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(37,99,235,0.1), transparent 70%)",
          top: "20%",
          right: "-10%",
          animationDelay: "2s",
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6 inline-flex">
            <Activity size={12} />
            What We Build
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-6 mb-4">
            Full-Spectrum{" "}
            <span className="gradient-text-red">Technology</span>
            <br />
            Services
          </h2>
          <p className="text-muted font-jakarta text-lg max-w-2xl mx-auto">
            From AI-powered automation to enterprise cloud platforms — we build
            everything your business needs to lead in the digital era.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.category}
                variants={cardVariants}
                className={`${service.size} glass-card rounded-2xl p-6 md:p-8 group cursor-pointer relative overflow-hidden`}
                style={{ borderColor: service.borderColor }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 20px 60px ${service.glowColor}, 0 0 0 1px ${service.borderColor}`,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  {/* Badge */}
                  {service.badge && (
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold font-grotesk mb-4 border"
                      style={{
                        background: `${service.color}15`,
                        borderColor: `${service.color}40`,
                        color: service.color,
                      }}
                    >
                      {service.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
                  >
                    <Icon size={22} style={{ color: service.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="font-grotesk font-bold text-xl md:text-2xl text-white mb-3">
                    {service.category}
                  </h3>

                  {/* Description */}
                  <p className="text-muted font-jakarta text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Items */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg text-xs font-jakarta font-medium text-white/70 border border-white/10 bg-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="flex items-center gap-1 text-sm font-grotesk font-semibold transition-all duration-200 group-hover:gap-2"
                    style={{ color: service.color }}
                  >
                    Learn More <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
    </section>
  );
}
