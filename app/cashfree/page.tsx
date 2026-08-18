"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  CreditCard,
  Award,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BadgeCheck,
  TrendingUp,
  Globe,
  Headphones,
  Lock,
  RefreshCw,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PARTNER_LINK =
  "https://merchant.cashfree.com/merchants/signup?referrer=partner&refCode=CFPMP706566";

const features = [
  {
    icon: Zap,
    title: "Instant KYC & Activation",
    description:
      "Streamlined merchant onboarding with minimal documentation. Get your payment gateway live in under 24 hours.",
    color: "#F59E0B",
  },
  {
    icon: CreditCard,
    title: "120+ Payment Modes",
    description:
      "Accept UPI, Cards (Visa/MC/Amex/RuPay), Net Banking, Wallets, Pay Later, EMIs, and International Cards.",
    color: "#007AFF",
  },
  {
    icon: TrendingUp,
    title: "Industry-Best Success Rates",
    description:
      "Highest transaction success rates powered by smart routing, retry logic, and AI-based payment optimization.",
    color: "#10B981",
  },
  {
    icon: RefreshCw,
    title: "Instant Settlements",
    description:
      "Same-day and next-day settlement options. Keep your cash flow healthy with predictable payout schedules.",
    color: "#7C3AED",
  },
  {
    icon: Globe,
    title: "Multi-Currency & International",
    description:
      "Accept payments from 100+ countries. Full support for international cards and cross-border transactions.",
    color: "#D97706",
  },
  {
    icon: Lock,
    title: "PCI-DSS Level 1 Secure",
    description:
      "Bank-grade security with multi-layer fraud detection, tokenization, and real-time risk scoring.",
    color: "#EF4444",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Mavtop's technical team provides direct integration assistance and ongoing support after onboarding.",
    color: "#0348FF",
  },
  {
    icon: BadgeCheck,
    title: "Partner-Tier Benefits",
    description:
      "As an authorized Cashfree partner, Mavtop merchants receive preferential pricing and priority activation.",
    color: "#059669",
  },
];

const steps = [
  {
    step: "01",
    title: "Register via Mavtop's Partner Link",
    description:
      "Click the Onboard as Merchant button below to sign up on Cashfree using our official partner referral code CFPMP706566.",
  },
  {
    step: "02",
    title: "Complete KYC & Business Docs",
    description:
      "Submit your PAN, GST, bank account details, and business documents. Our team can guide you through the process.",
  },
  {
    step: "03",
    title: "Get Technical Integration Support",
    description:
      "Mavtop's dev team will help you integrate Cashfree's payment SDK, APIs, or hosted checkout into your platform.",
  },
  {
    step: "04",
    title: "Go Live & Start Accepting Payments",
    description:
      "Your merchant account goes live. Start accepting UPI, Cards, Net Banking, and 120+ other payment modes instantly.",
  },
];

function FeatureCard({
  feature,
  index,
  isInView,
}: {
  feature: (typeof features)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="bg-white dark:bg-[#131524] border border-slate-100 dark:border-slate-800 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:hover:border-slate-700 transition-all duration-300 group"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${feature.color}15`, border: `1px solid ${feature.color}30` }}
      >
        <Icon size={20} style={{ color: feature.color }} />
      </div>
      <h3 className="font-grotesk font-bold text-lg text-slate-900 dark:text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-sm font-jakarta text-slate-500 dark:text-slate-400 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function CashfreePage() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const stepsRef = useRef(null);
  const ctaRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <main>
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative pt-36 pb-24 overflow-hidden bg-[#FAFAFA] dark:bg-[#0D0D0F]"
      >
        {/* Subtle gradient backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/60 dark:from-brand-blue/8 via-transparent to-transparent" />
        </div>

        <div className="container-custom relative z-10 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-jakarta font-semibold bg-white dark:bg-[#131524] border border-blue-500/30 shadow-sm mb-8"
          >
            <Sparkles size={14} className="text-brand-blue" />
            <span className="text-slate-700 dark:text-slate-200">
              Official <span className="text-brand-blue">Cashfree Payment Gateway</span> Partner
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
              Verified
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-grotesk font-bold text-slate-900 dark:text-white tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]"
          >
            Accept Payments with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5AC8FA]">
              Cashfree
            </span>{" "}
            — Onboard via Mavtop
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-jakarta max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Mavtop is an authorized partner of Cashfree Payment Gateway. Register your
            merchant account through us and get instant KYC activation, priority support,
            and seamless payment integration for your business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href={PARTNER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#007AFF] hover:bg-[#0062CC] rounded-xl shadow-[0_8px_30px_rgba(0,122,255,0.25)] transition-all hover:-translate-y-0.5"
            >
              Onboard as Merchant
              <ArrowUpRight size={18} />
            </a>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-slate-800 dark:text-white bg-white dark:bg-[#131524] border border-slate-200 dark:border-slate-800 hover:border-brand-blue/40 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm"
            >
              Talk to Our Team
              <ArrowRight size={18} className="text-brand-blue" />
            </Link>
          </motion.div>

          {/* Partner Certificate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href={PARTNER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform active:scale-95"
            >
              <img
                src="https://cashfreelogo.cashfree.com/All-Partner-Collateral/Cashfree-Partner-Certificate-Logo.png"
                alt="Cashfree Partner Certificate"
                width="255"
                height="70"
                className="w-[240px] h-auto object-contain bg-white dark:bg-[#131524] border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-md"
              />
            </a>
            <p className="text-xs font-jakarta text-slate-400 dark:text-slate-500">
              Partner Ref Code: <strong className="text-slate-600 dark:text-slate-300">CFPMP706566</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Features Grid ──────────────────────────────────── */}
      <section
        ref={featuresRef}
        className="section-padding bg-[#FAFAFA] dark:bg-[#0D0D0F] relative"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="section-label mb-5 inline-flex">
              <CreditCard size={12} />
              Why Cashfree
            </span>
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mt-5 mb-4">
              Everything your business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5AC8FA]">
                needs to collect payments
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-jakarta text-lg max-w-2xl mx-auto">
              India's leading payment gateway trusted by 800,000+ businesses — from startups to enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
                isInView={featuresInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────── */}
      <section
        ref={stepsRef}
        className="section-padding bg-white dark:bg-[#131524] relative"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="section-label mb-5 inline-flex">
              <CheckCircle2 size={12} />
              How It Works
            </span>
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-900 dark:text-white mt-5 mb-4">
              Get your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5AC8FA]">
                merchant account
              </span>{" "}
              live in 4 steps
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent z-0" />

            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#131524] relative z-10 mx-auto mb-5 flex items-center justify-center border border-brand-blue/20 shadow-[0_0_15px_rgba(0,122,255,0.1)]">
                  <div className="absolute inset-0 bg-brand-blue/10 rounded-2xl"></div>
                  <span className="relative z-20 font-grotesk font-black text-lg text-brand-blue">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-grotesk font-bold text-lg text-slate-900 dark:text-white mb-3 px-2">
                  {step.title}
                </h3>
                <p className="text-sm font-jakarta text-slate-500 dark:text-slate-400 leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────── */}
      <section ref={ctaRef} className="section-padding bg-[#FAFAFA] dark:bg-[#0D0D0F] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-10 md:p-16 bg-gradient-to-br from-[#007AFF]/10 via-white dark:via-[#131524] to-[#5AC8FA]/10 border border-brand-blue/20 dark:border-brand-blue/20 text-center overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007AFF] via-[#5AC8FA] to-[#007AFF]" />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-jakarta font-semibold bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-6">
              <Award size={13} />
              Mavtop × Cashfree Official Partnership
            </div>

            <h2 className="font-grotesk font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-5 leading-tight">
              Ready to accept payments for your business?
            </h2>

            <p className="text-slate-600 dark:text-slate-300 font-jakarta text-lg max-w-xl mx-auto mb-10">
              Register via Mavtop's partner link for priority activation, preferential rates, and full technical integration support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={PARTNER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#007AFF] hover:bg-[#0062CC] rounded-xl shadow-[0_8px_30px_rgba(0,122,255,0.3)] transition-all hover:-translate-y-0.5"
              >
                Onboard as Merchant
                <ArrowUpRight size={18} />
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-slate-800 dark:text-white bg-white dark:bg-[#0D0D0F] border border-slate-300 dark:border-slate-700 hover:border-brand-blue/50 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm"
              >
                Talk to Our Team
                <ArrowRight size={18} className="text-brand-blue" />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs font-jakarta text-slate-500 dark:text-slate-400 flex-wrap">
              {["Fast KYC Activation", "120+ Payment Modes", "Partner-Grade Support", "Lowest TDR Rates"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
