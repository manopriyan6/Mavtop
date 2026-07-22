"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#services" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Case Studies", href: "#stats" },
  { label: "About", href: "#why-mavtop" },
  { label: "Careers", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(9,9,11,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] shadow-[0_4px_30px_rgba(220,38,38,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo — horizontal rectangle on white card */}
            <a href="#home" className="flex items-center group">
              <div
                className="relative rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                style={{
                  width: "160px",
                  height: "48px",
                  background: "#FFFFFF",
                  boxShadow: "0 0 0 1px rgba(220,38,38,0.3), 0 0 18px rgba(220,38,38,0.35)",
                }}
              >
                <Image
                  src="/mavtop_rectamgele_png.png"
                  alt="Mavtop Technologies"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </a>


            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, 6).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`relative px-4 py-2 text-sm font-inter font-medium transition-colors duration-200 group ${
                    activeLink === link.label
                      ? "text-white"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-brand-red to-electric-blue transition-all duration-300 ${
                      activeLink === link.label
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-60"
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 btn-primary px-5 py-2.5 text-sm"
              >
                Get Started
                <ChevronRight size={14} />
              </a>
              <button
                className="lg:hidden p-2 text-muted hover:text-white transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#0D0D0F] border-l border-[rgba(255,255,255,0.06)] z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.06)]">
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    width: "140px",
                    height: "44px",
                    background: "#FFFFFF",
                    boxShadow: "0 0 0 1px rgba(220,38,38,0.3), 0 0 14px rgba(220,38,38,0.3)",
                  }}
                >
                  <Image
                    src="/mavtop_rectamgele_png.png"
                    alt="Mavtop Technologies"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-muted hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-muted hover:text-white hover:bg-glass-bg transition-all duration-200 font-inter font-medium"
                  >
                    {link.label}
                    <ChevronRight size={14} className="opacity-40" />
                  </motion.a>
                ))}
              </nav>
              <div className="p-6 border-t border-[rgba(255,255,255,0.06)]">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-sm"
                >
                  Get Started <ChevronRight size={14} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
