import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "Case Studies | Mavtop Technologies",
  description: "Read our case studies to see how we have driven growth and innovation for leading enterprises globally.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-12 text-center bg-[#FAFAFA] dark:bg-[#0D0D0F]">
        <h1 className="text-4xl md:text-5xl font-jakarta font-bold text-slate-900 dark:text-white mb-6">Our Impact</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          We don't just write code—we deliver measurable business impact. Here is how we've transformed organizations.
        </p>
      </div>
      <StatsSection />
      <TestimonialsSection />
      <ContactCTASection />
      <Footer />
    </main>
  );
}
