"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

export default function ContactCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent(`New Project Inquiry from ${formState.name} - ${formState.company}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nCompany: ${formState.company}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:hello@mavtop.in?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Multi-layer dark gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0010] via-background to-[#000D1A]" />
      <div className="animated-grid opacity-20" />

      {/* Aurora glows */}
      <div
        className="aurora-blob"
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
        className="aurora-blob"
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
          <h2 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-white mt-6 mb-6 leading-none">
            Ready to Build
            <br />
            <span className="gradient-text-red">the Future?</span>
          </h2>
          <p className="font-jakarta text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's transform your ideas into world-class digital products.
            Book a free consultation — no commitment required.
          </p>

          {/* Quick contact badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a
              href="tel:+919385661495"
              className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-xl text-sm font-jakarta text-white/80 hover:text-white transition-all"
            >
              <Phone size={14} className="text-brand-blue" />
              +91 93856 61495
            </a>
            <a
              href="mailto:hello@mavtop.in"
              className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-xl text-sm font-jakarta text-white/80 hover:text-white transition-all"
            >
              <Mail size={14} className="text-electric-blue" />
              hello@mavtop.in
            </a>
            <span className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-xl text-sm font-jakarta text-white/80">
              <MapPin size={14} className="text-purple-accent" />
              Dharmapuri, Tamil Nadu
            </span>
          </div>
        </motion.div>

        {/* Form + Info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 glass-card rounded-3xl p-8 border-brand-blue/15"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center mb-4">
                  <Send size={24} className="text-brand-blue" />
                </div>
                <h3 className="font-grotesk font-bold text-2xl text-white mb-2">Message Sent!</h3>
                <p className="text-muted font-jakarta text-sm">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-grotesk font-bold text-xl text-white mb-1">
                    Start Your Project
                  </h3>
                  <p className="text-muted font-jakarta text-sm">
                    Fill in the details and we'll reach out within one business day.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-jakarta font-medium text-muted mb-2 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Raj Kumar"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-jakarta text-white placeholder-white/30 focus:outline-none focus:border-brand-blue/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-jakarta font-medium text-muted mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="raj@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-jakarta text-white placeholder-white/30 focus:outline-none focus:border-brand-blue/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-jakarta font-medium text-muted mb-2 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-jakarta text-white placeholder-white/30 focus:outline-none focus:border-brand-blue/50 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-jakarta font-medium text-muted mb-2 uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="Your Company"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-jakarta text-white placeholder-white/30 focus:outline-none focus:border-brand-blue/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-jakarta font-medium text-muted mb-2 uppercase tracking-wider">
                    Tell us about your project *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="What would you like to build? What's your timeline and budget?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-jakarta text-white placeholder-white/30 focus:outline-none focus:border-brand-blue/50 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-base font-bold rounded-xl"
                >
                  <Send size={16} />
                  Book Free Consultation
                </button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Process steps */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-grotesk font-bold text-white text-lg mb-5">
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
                    <div className="font-grotesk font-semibold text-sm text-white">{item.label}</div>
                    <div className="font-jakarta text-xs text-muted">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Booking CTA */}
            <div
              className="glass-card rounded-2xl p-6 relative overflow-hidden"
              style={{ borderColor: "rgba(34,197,94,0.2)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center mb-4">
                  <Calendar size={18} className="text-brand-blue" />
                </div>
                <h3 className="font-grotesk font-bold text-white text-lg mb-2">
                  Free 30-min Call
                </h3>
                <p className="font-jakarta text-muted text-sm mb-4">
                  Book a strategy call with our tech lead. No sales pitch — just a real conversation about your goals.
                </p>
                <a
                  href="mailto:hello@mavtop.in?subject=Book%20a%20Free%20Consultation"
                  className="flex items-center gap-2 text-sm font-grotesk font-bold text-brand-blue hover:gap-3 transition-all duration-200"
                >
                  Book Now <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
