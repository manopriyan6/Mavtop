"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/book" },
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
            ? "bg-white dark:bg-[#131524]/90 backdrop-blur-md transform-gpu border-b border-slate-200 dark:border-slate-800 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-[140px] h-[40px] flex items-center justify-center">
                <Image src="/logo_black.png" alt="Mavtop Logo" fill className="object-contain dark:hidden" priority unoptimized />
                <Image src="/logo_white.png" alt="Mavtop Logo" fill className="object-contain hidden dark:block" priority unoptimized />
              </div>
            </Link>


            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`relative px-4 py-2 text-sm font-jakarta font-medium transition-colors duration-200 group ${
                    activeLink === link.label
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#007AFF] transform origin-left transition-transform duration-300 ease-out ${
                      activeLink === link.label ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3">
              <Link
                href="/book"
                className="hidden md:inline-flex items-center gap-2 btn-primary px-5 py-2.5 text-sm"
              >
                Get Started
                <ChevronRight size={14} />
              </Link>
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
                <div className="relative w-[130px] h-[36px] flex items-center justify-center">
                  <Image src="/logo_black.png" alt="Mavtop Logo" fill className="object-contain dark:hidden" priority unoptimized />
                  <Image src="/logo_white.png" alt="Mavtop Logo" fill className="object-contain hidden dark:block" priority unoptimized />
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white dark:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col space-y-2 mt-8 px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-3 text-lg font-jakarta font-semibold text-slate-800 dark:text-slate-200 hover:text-[#007AFF] dark:hover:text-[#5AC8FA] hover:bg-slate-50 dark:hover:bg-[#131524] rounded-xl transition-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto p-6 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/book"
                  className="w-full flex items-center justify-center gap-2 btn-primary py-3.5 text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started <ChevronRight size={14} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
