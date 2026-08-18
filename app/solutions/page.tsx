import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "Solutions | Mavtop Technologies",
  description: "End-to-end technology solutions tailored for your business needs, powered by modern architectures and AI.",
};

export default function SolutionsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-20 text-center bg-[#FAFAFA] dark:bg-[#0D0D0F]">
        <h1 className="text-4xl md:text-5xl font-jakarta font-bold text-slate-900 dark:text-white mb-6">Our Solutions</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          We engineer scalable, resilient, and forward-thinking solutions that empower enterprises to thrive in the digital age.
        </p>
      </div>
      <TechnologiesSection />
      <ContactCTASection />
      <Footer />
    </main>
  );
}


