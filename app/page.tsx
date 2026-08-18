import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/hero/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import WhyMavtopSection from "@/components/sections/WhyMavtopSection";
import PartnersBadgeSection from "@/components/sections/PartnersBadgeSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <TechnologiesSection />
      <WhyMavtopSection />
      <PartnersBadgeSection />
      <ContactCTASection />
      <Footer />
    </main>
  );
}



