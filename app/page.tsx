import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/hero/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import StatsSection from "@/components/sections/StatsSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import WhyMavtopSection from "@/components/sections/WhyMavtopSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <StatsSection />
      <TechnologiesSection />
      <WhyMavtopSection />
      <ContactCTASection />
      <Footer />
    </main>
  );
}
