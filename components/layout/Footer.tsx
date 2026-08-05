"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "AI Solutions", href: "#services" },
    { label: "Software Development", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "Web Applications", href: "#services" },
    { label: "Digital Transformation", href: "#services" },
  ],
  Products: [
    { label: "Mavtop CRM", href: "#products" },
    { label: "WhatsApp Cloud", href: "#products" },
    { label: "Mavtop AI", href: "#products" },
    { label: "Mavtop Billing", href: "#products" },
  ],
  Company: [
    { label: "About Us", href: "#why-mavtop" },
    { label: "Our Team", href: "#why-mavtop" },
    { label: "Careers", href: "#contact" },
    { label: "Blog", href: "#contact" },
    { label: "Case Studies", href: "#stats" },
    { label: "Press", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Shipping & Delivery", href: "/shipping-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/mavtop",
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://twitter.com/mavtoptech",
    color: "hover:text-white hover:border-white/30 hover:bg-white/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/mavtoptech",
    color: "hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@mavtoptech",
    color: "hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#060608]">

      {/* ─── Top gradient line ──────────────────────────────── */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-red/60 to-transparent" />

      {/* ─── Main grid ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">

        {/* Row 1: Brand | Links */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ── Brand column ── */}
          <div className="flex-shrink-0 w-full lg:w-64">
            <a href="#home" className="inline-block mb-6 group">
              <div
                className="relative transition-transform duration-300 group-hover:scale-105"
                style={{
                  width: "240px",
                  height: "76px",
                }}
              >
                <Image
                  src="/mavtop-tran.png"
                  alt="Mavtop Technologies"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

            <p className="text-[#A1A1AA] text-sm font-inter leading-relaxed mb-5 max-w-[240px]">
              Maximum Value + Top Performance. Building the future through AI, software, and cloud innovation.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["AI", "Cloud", "Software", "Automation", "Digital"].map((t) => (
                <span key={t} className="text-[11px] font-inter text-[#71717A] border border-white/8 rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#71717A] transition-all duration-200 ${s.color}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Nav link columns ── */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-xs font-inter font-semibold text-white uppercase tracking-widest mb-5">
                  {section}
                </h4>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm font-inter text-[#71717A] hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Contact cards ────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {/* Phone */}
          <a
            href="tel:+919385661495"
            className="flex items-center gap-4 p-5 rounded-2xl border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-red/20 transition-all duration-200 group"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-red/10 border border-brand-red/25 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <div className="text-[10px] font-inter text-[#71717A] uppercase tracking-widest mb-1">Call Us</div>
              <div className="text-sm font-inter text-white">+91 93856 61495</div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@mavtop.in"
            className="flex items-center gap-4 p-5 rounded-2xl border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-electric-blue/20 transition-all duration-200 group"
          >
            <div className="w-11 h-11 rounded-xl bg-electric-blue/10 border border-electric-blue/25 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-electric-blue" />
            </div>
            <div>
              <div className="text-[10px] font-inter text-[#71717A] uppercase tracking-widest mb-1">Email Us</div>
              <div className="text-sm font-inter text-white">hello@mavtop.in</div>
            </div>
          </a>

          {/* Address */}
          <a
            href="https://maps.google.com/?q=Karimangalam,Dharmapuri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-5 rounded-2xl border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple/20 transition-all duration-200 group"
          >
            <div className="w-11 h-11 rounded-xl bg-purple/10 border border-purple/25 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-5 h-5 text-purple" />
            </div>
            <div>
              <div className="text-[10px] font-inter text-[#71717A] uppercase tracking-widest mb-1">Visit Us</div>
              <div className="text-sm font-inter text-white leading-snug">
                293, Permandapatti, K Ichambadi Post<br />
                Karimangalam Taluk, Dharmapuri – 635202
              </div>
            </div>
          </a>
        </div>

        {/* ─── Bottom divider ───────────────────────────────── */}
        <div className="mt-10 mb-6 h-px bg-white/[0.06]" />

        {/* ─── Copyright bar ────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-inter text-[#52525B] text-center sm:text-left">
            © {new Date().getFullYear()} Mavtop Technologies Pvt. Ltd. All rights reserved.
            <span className="mx-2 text-white/10">·</span>
            <span className="text-[#3F3F46] italic">Maximum Value + Top Performance · Dharmapuri, Tamil Nadu</span>
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center text-[#71717A] hover:text-white hover:border-brand-red/40 hover:bg-brand-red/10 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
