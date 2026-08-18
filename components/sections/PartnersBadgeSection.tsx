"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PartnersBadgeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-14 bg-[#FAFAFA] dark:bg-[#0D0D0F] relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5"
        >
          <p className="text-xs font-jakarta font-semibold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            We are partnered with
          </p>
          <a
            href="https://merchant.cashfree.com/merchants/signup?referrer=partner&refCode=CFPMP706566"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-[1.04] active:scale-95"
          >
            <img
              width="255"
              height="70"
              src="https://cashfreelogo.cashfree.com/All-Partner-Collateral/Cashfree-Partner-Certificate-Logo.png"
              alt="Cashfree Partner Certificate"
              className="w-[255px] h-[70px] object-contain"
            />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
    </section>
  );
}
