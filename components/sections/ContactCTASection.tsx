"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function ContactCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Multi-layer dark gradient bg */}
      <div className="absolute inset-0 bg-[#FAFAFA] dark:bg-[#0D0D0F]" />
      <div className="animated-grid opacity-20" />

      {/* Aurora glows */}
      <div
        className="aurora-blob hidden"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(34,197,94,0.15), transparent 70%)",
          top: "-20%",
          right: "-10%",
          animationDelay: "0s",
          animationDuration: "12s",
        }}
      />
      <div
        className="aurora-blob hidden"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)",
          bottom: "-10%",
          left: "-5%",
          animationDelay: "4s",
          animationDuration: "10s",
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6 inline-flex">
            <MessageSquare size={12} />
            Let's Build Together
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-slate-900 dark:text-white mt-6 mb-6 leading-none">
            Ready to Build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5AC8FA]">the Future?</span>
          </h2>
          <p className="font-jakarta text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's transform your ideas into world-class digital products.
            Book a free consultation — no commitment required.
          </p>

          {/* Quick contact badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a
              href="tel:+919385661495"
              className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#131524] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 dark:border-slate-800 rounded-xl text-sm font-jakarta text-slate-900 dark:text-white/80 hover:text-slate-900 dark:hover:text-white dark:text-white transition-all"
            >
              <Phone size={14} className="text-brand-blue" />
              +91 93856 61495
            </a>
            <a
              href="mailto:hello@mavtop.in"
              className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#131524] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 dark:border-slate-800 rounded-xl text-sm font-jakarta text-slate-900 dark:text-white/80 hover:text-slate-900 dark:hover:text-white dark:text-white transition-all"
            >
              <Mail size={14} className="text-electric-blue" />
              hello@mavtop.in
            </a>
            <span className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#131524] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 dark:border-slate-800 rounded-xl text-sm font-jakarta text-slate-900 dark:text-white/80">
              <MapPin size={14} className="text-purple-accent" />
              Dharmapuri, Tamil Nadu
            </span>
          </div>
        </motion.div>

        {/* Form + Info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Big CTA Block instead of form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-brand-blue/10 dark:bg-brand-blue/5 border border-brand-blue/20 dark:border-brand-blue/10 rounded-3xl p-10 lg:p-12 flex flex-col justify-center items-start relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-accent/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-semibold mb-6 z-10">
              <Calendar size={16} />
              Let's talk about your project
            </div>
            
            <h3 className="font-grotesk font-black text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6 z-10 leading-tight">
              Free 30 Mins <br/>
              <span className="text-electric-blue">Discovery Call</span>
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 font-jakarta text-lg mb-8 max-w-md z-10">
              No forms. No waiting. Pick a time directly on our calendar and let's explore how we can help your business grow.
            </p>
            
            <Link 
              href="/book"
              className="btn-primary inline-flex items-center justify-center gap-3 py-4 px-8 text-lg font-bold rounded-xl z-10 hover:-translate-y-1 transition-transform"
            >
              <Calendar size={20} />
              Book Your Slot Now
            </Link>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-2"
          >
            {/* Process steps */}
            <div className="bg-white dark:bg-[#131524] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 dark:border-slate-800 rounded-2xl p-6 lg:p-8 h-full flex flex-col justify-center">
              <h3 className="font-grotesk font-bold text-slate-900 dark:text-white text-xl mb-8">
                Our Process
              </h3>
              {[
                { step: "01", label: "Discovery Call", desc: "We understand your needs", color: "var(--brand-blue)" },
                { step: "02", label: "Proposal & Quote", desc: "Transparent pricing within 48h", color: "#2563EB" },
                { step: "03", label: "Kickoff Sprint", desc: "Design + architecture phase", color: "#7C3AED" },
                { step: "04", label: "Build & Deliver", desc: "Agile sprints, weekly demos", color: "#059669" },
              ].map((item, i) => (
                <div key={item.step} className="flex items-start gap-4 mb-4 last:mb-0">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-grotesk font-black flex-shrink-0"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <div className="font-grotesk font-semibold text-sm text-slate-900 dark:text-white">{item.label}</div>
                    <div className="font-jakarta text-xs text-slate-500 dark:text-slate-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
