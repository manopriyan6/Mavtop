"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Users, MessageCircle, Cpu, Receipt, ArrowRight } from "lucide-react";

const products = [
  {
    id: "crm",
    name: "Mavtop CRM",
    description: "Intelligent customer relationship management with automated workflows and real-time analytics to close more deals.",
    icon: Users,
    color: "#2563EB",
    isImportant: true
  },
  {
    id: "whatsapp",
    name: "WhatsApp Cloud",
    description: "Enterprise-grade WhatsApp Business platform for bulk campaigns, chatbots, and multi-agent customer support.",
    icon: MessageCircle,
    color: "#25D366",
    isImportant: false
  },
  {
    id: "ai",
    name: "Mavtop AI",
    description: "Your secure, private AI assistant trained on your own company data to automate internal workflows instantly.",
    icon: Cpu,
    color: "#007AFF",
    isImportant: false
  },
  {
    id: "pos",
    name: "Mavtop POS",
    description: "Modern cloud-based point-of-sale system with seamless inventory syncing, offline mode, and tax automation.",
    icon: Receipt,
    color: "#7C3AED",
    isImportant: false
  }
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section id="products" className="py-24 bg-[#FAFAFA] dark:bg-[#0D0D0F]" ref={sectionRef}>
      <div className="container-custom">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-jakarta font-bold text-slate-900 dark:text-white tracking-tight mb-6"
          >
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5AC8FA]">scale.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-500 dark:text-slate-400 font-jakarta leading-relaxed"
          >
            Production-ready software products designed to help you manage and scale your digital business efficiently.
          </motion.p>
        </div>

        {/* Simple Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-white dark:bg-[#131524] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 dark:bg-[#1E2038] border border-slate-100 dark:border-slate-800">
                    <Icon size={24} style={{ color: product.color }} />
                  </div>
                  <h3 className="text-2xl font-jakarta font-bold text-slate-900 dark:text-white">
                    {product.name}
                  </h3>
                </div>
                
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8 flex-1">
                  {product.description}
                </p>
                
                <Link href="/book" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-blue-700 transition-colors">
                  Explore solution <ArrowRight size={16} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
