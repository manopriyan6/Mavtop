import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductsSection from "@/components/sections/ProductsSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "Products | Mavtop Technologies",
  description: "Discover our suite of SaaS platforms and proprietary digital products designed to accelerate business operations.",
};

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <ProductsSection />
      </div>
      <ContactCTASection />
      <Footer />
    </main>
  );
}
