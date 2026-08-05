import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "Services | Mavtop Technologies",
  description: "Explore our comprehensive suite of services including Web Development, Mobile Apps, Enterprise Automation, and Digital Transformation.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <ServicesSection />
      </div>
      <ContactCTASection />
      <Footer />
    </main>
  );
}
