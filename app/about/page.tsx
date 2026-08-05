import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhyMavtopSection from "@/components/sections/WhyMavtopSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "About Mavtop | Maximum Value & Performance",
  description: "Learn about Mavtop Technologies, our mission to build robust software, enterprise automation, and cloud platforms.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <WhyMavtopSection />
      </div>
      <ContactCTASection />
      <Footer />
    </main>
  );
}
