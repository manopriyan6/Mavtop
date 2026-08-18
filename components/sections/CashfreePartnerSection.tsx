"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Zap, CreditCard, Award, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Instant KYC & Fast Onboarding",
    description: "Expedited digital onboarding with minimal documentation and priority merchant account verification.",
  },
  {
    icon: CreditCard,
    title: "120+ Payment Modes & UPI",
    description: "Accept UPI, Cards, Net Banking, Pay Later, Wallets, and International Cards with maximum checkout conversion.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security & SLA",
    description: "PCI-DSS Level 1 compliant with multi-layer fraud detection and industry-leading transaction success rates.",
  },
  {
    icon: Award,
    title: "Mavtop Technical Integration",
    description: "Direct technical assistance from our development team to integrate Cashfree SDKs into your app or website.",
  },
];

export default function CashfreePartnerSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const partnerLink = "https://merchant.cashfree.com/merchants/signup?referrer=partner&refCode=CFPMP706566";

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-[#0D0D0F] dark:via-[#131524]/60 dark:to-[#0D0D0F]">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/5 dark:bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 md:p-12 lg:p-14 bg-white dark:bg-[#131524] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#007AFF] via-[#5AC8FA] to-[#007AFF]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Partnership Details */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-jakarta font-semibold bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-6">
                <Sparkles size={14} />
                Official Cashfree Payment Gateway Partner
              </div>

              <h2 className="font-grotesk font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight mb-5 leading-[1.15]">
                Seamless Merchant Onboarding with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5AC8FA]">
                  Cashfree Payments
                </span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 font-jakarta text-base md:text-lg leading-relaxed mb-8">
                As an authorized partner with Cashfree Payment Gateway, Mavtop helps businesses get onboarded rapidly with preferential rates, instant payouts, and tailored integration support for apps and web platforms.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.title}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-[#1E2038]/60 border border-slate-100 dark:border-slate-800/80"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                          <Icon size={16} />
                        </div>
                        <h4 className="font-jakarta font-bold text-sm text-slate-900 dark:text-white">
                          {b.title}
                        </h4>
                      </div>
                      <p className="text-xs font-jakarta text-slate-500 dark:text-slate-400 leading-relaxed pl-9">
                        {b.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA & Partner Certificate */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={partnerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#007AFF] hover:bg-[#0062CC] text-white font-jakarta font-semibold text-sm shadow-[0_4px_20px_rgba(0,122,255,0.25)] transition-all hover:-translate-y-0.5"
                >
                  Register as Merchant <ArrowUpRight size={17} />
                </a>

                <div className="flex items-center gap-2 text-xs font-jakarta text-slate-500 dark:text-slate-400 px-2">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                  <span>Partner Ref Code: <strong className="text-slate-800 dark:text-slate-200">CFPMP706566</strong></span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Certificate Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-sm rounded-2xl p-6 md:p-8 bg-slate-50 dark:bg-[#1E2038] border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center relative shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-4">
                  <Award size={24} />
                </div>

                <h3 className="font-jakarta font-bold text-lg text-slate-900 dark:text-white mb-2">
                  Partner Certification
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 max-w-[260px]">
                  Verified Partner of Cashfree Payments for merchant acquisition and technical enablement.
                </p>

                <a
                  href={partnerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105 active:scale-95"
                >
                  <img
                    width="255"
                    height="70"
                    src="https://cashfreelogo.cashfree.com/All-Partner-Collateral/Cashfree-Partner-Certificate-Logo.png"
                    alt="Cashfree Partner Certificate"
                    className="w-[240px] h-auto object-contain rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 shadow-md"
                  />
                </a>

                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 w-full flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Fast Track KYC</span>
                  <span>•</span>
                  <span>Instant Settlements</span>
                  <span>•</span>
                  <span>Direct Integration</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
