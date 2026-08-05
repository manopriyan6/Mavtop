"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
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
            ? "bg-white dark:bg-[#131524]/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="#home" className="flex items-center group">
              <div className="relative w-[140px] h-[40px] flex items-center justify-center">
                <Image src="/logo_black.png" alt="Mavtop Logo" fill className="object-contain dark:hidden" priority />
                <Image src="/logo_white.png" alt="Mavtop Logo" fill className="object-contain hidden dark:block" priority />
              </div>
            </a>


            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, 6).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`relative px-4 py-2 text-sm font-jakarta font-medium transition-colors duration-200 group ${
                    activeLink === link.label
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white dark:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-brand-blue to-electric-blue transition-all duration-300 ${
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
              <ThemeToggle />
              <button
                className={`p-2 rounded-lg transition-colors text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="fixed top-0 right-0 bottom-0 w-72 bg-slate-50 dark:bg-[#0D0D0F] border-l border-slate-200 dark:border-slate-800 z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <Image src="/logo-symbol-transparent.png" alt="Mavtop Symbol" fill className="object-contain" priority />
                  </div>
                  <span className="font-jakarta font-extrabold text-2xl text-slate-900 dark:text-white tracking-tight mt-1">
                    Mavtop
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white dark:text-white"
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
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white dark:text-white hover:bg-white dark:bg-[#131524] transition-all duration-200 font-jakarta font-medium"
                  >
                    {link.label}
                    <ChevronRight size={14} className="opacity-40" />
                  </motion.a>
                ))}
              </nav>
              <div className="p-6 border-t border-slate-200 dark:border-slate-800">
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
