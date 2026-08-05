"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  MessageCircle,
  Cpu,
  Receipt,
  ChevronRight,
  Star,
  Box,
  Sparkles,
} from "lucide-react";

const products = [
  {
    id: "crm",
    name: "Mavtop CRM",
    tagline: "AI-Powered Relationships",
    description:
      "Intelligent customer relationship management with AI insights, automated workflows, and 360° customer views. Turn every interaction into an opportunity.",
    icon: Users,
    color: "#DC2626",
    gradientFrom: "from-red-900/40",
    gradientTo: "to-transparent",
    features: ["AI Lead Scoring", "Pipeline Automation", "Real-time Analytics", "WhatsApp Integration"],
    badge: "Flagship Product",
    badgeColor: "#DC2626",
  },
  {
    id: "whatsapp",
    name: "Mavtop WhatsApp Cloud",
    tagline: "Business Messaging Platform",
    description:
      "Enterprise-grade WhatsApp Business API platform with bulk messaging, chatbots, campaign management, and deep analytics.",
    icon: MessageCircle,
    color: "#25D366",
    gradientFrom: "from-green-900/40",
    gradientTo: "to-transparent",
    features: ["Bulk Campaigns", "AI Chatbot", "Multi-Agent", "Broadcast Templates"],
    badge: "WhatsApp Verified",
    badgeColor: "#25D366",
  },
  {
    id: "ai",
    name: "Mavtop AI",
    tagline: "Enterprise AI Assistant",
    description:
      "Your company's private AI — trained on your data, integrated with your tools, deployed on your infrastructure. No data leaves your environment.",
    icon: Cpu,
    color: "#7C3AED",
    gradientFrom: "from-purple-900/40",
    gradientTo: "to-transparent",
    features: ["Private LLM", "Document AI", "Knowledge Base", "API Integration"],
    badge: "New",
    badgeColor: "#7C3AED",
  },
  {
    id: "billing",
    name: "Mavtop Billing",
    tagline: "GST-Ready Invoicing",
    description:
      "Complete billing and invoicing solution built for Indian businesses — GST compliant, e-invoicing ready, with automated follow-ups.",
    icon: Receipt,
    color: "#D97706",
    gradientFrom: "from-amber-900/40",
    gradientTo: "to-transparent",
    features: ["GST Compliance", "E-Invoicing", "Auto Reminders", "Multi-Currency"],
    badge: "GST Certified",
    badgeColor: "#D97706",
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding relative overflow-hidden bg-[#0A0A0C]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-accent/30 to-transparent" />

      {/* Background decoration */}
      <div
        className="aurora-blob"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)",
          bottom: "10%",
          right: "-5%",
          animationDelay: "1s",
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
            <Box size={12} />
            Our Products
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-6 mb-4">
            Built by Mavtop,{" "}
            <span className="gradient-text-blue">Trusted</span>
            <br />
            by Enterprises
          </h2>
          <p className="text-muted font-inter text-lg max-w-2xl mx-auto">
            Production-ready software products designed for the Indian market —
            and built to scale globally.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className={`glass-card rounded-3xl p-8 group cursor-pointer relative overflow-hidden hover-glow-red`}
                style={{ borderColor: `${product.color}15` }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradientFrom} ${product.gradientTo} opacity-60 transition-opacity duration-400 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  {/* Badge + Icon row */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${product.color}15`,
                        border: `1px solid ${product.color}30`,
                      }}
                    >
                      <Icon size={26} style={{ color: product.color }} />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold font-grotesk border"
                      style={{
                        background: `${product.badgeColor}10`,
                        borderColor: `${product.badgeColor}30`,
                        color: product.badgeColor,
                      }}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Name & tagline */}
                  <h3 className="font-grotesk font-bold text-2xl text-white mb-1">
                    {product.name}
                  </h3>
                  <p
                    className="font-grotesk font-semibold text-sm mb-4"
                    style={{ color: product.color }}
                  >
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-muted font-inter text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-inter font-medium border"
                        style={{
                          background: `${product.color}08`,
                          borderColor: `${product.color}25`,
                          color: `${product.color}CC`,
                        }}
                      >
                        <Star size={8} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-4">
                    <button
                      className="flex items-center gap-2 font-grotesk font-bold text-sm transition-all duration-200 group-hover:gap-3"
                      style={{ color: product.color }}
                    >
                      Explore Product <ChevronRight size={14} />
                    </button>
                    <span className="text-muted/40 text-sm">|</span>
                    <button className="text-muted hover:text-white font-inter text-sm transition-colors">
                      Request Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted font-inter text-sm mb-4">
            Looking for a custom solution?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm rounded-xl"
          >
            <Sparkles size={16} />
            Build Custom Software
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
    </section>
  );
}
