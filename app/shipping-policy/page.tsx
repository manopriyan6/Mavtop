import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Mavtop Technologies",
  description: "Shipping and delivery policy for digital services and software products by Mavtop Technologies.",
};

export default function ShippingDeliveryPolicyPage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <div className="border-b border-white/6">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <span className="text-xs text-[#52525B] font-inter">Last updated: July 2025</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <span className="text-xs font-inter text-brand-green uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-white mb-4">Shipping & Delivery Policy</h1>
          <p className="text-[#A1A1AA] font-inter text-lg">
            Information regarding the delivery of our software products and digital services.
          </p>
        </div>

        <div className="space-y-10">
          {[
            {
              title: "1. Digital Delivery",
              content: `Mavtop Technologies is a provider of IT services, software development, cloud solutions, and digital products. As our products and services are purely digital, we do not ship physical goods. All deliverables are transmitted electronically.`,
            },
            {
              title: "2. Delivery Methods",
              content: `Depending on the nature of the service or product purchased, delivery will be fulfilled via:
              • Secure email transmission containing access credentials or files.
              • Direct deployment to your designated servers or cloud infrastructure.
              • Provision of access links to digital repositories (e.g., GitHub, GitLab).
              • Account activation for SaaS products (e.g., Mavtop CRM, Mavtop AI).`,
            },
            {
              title: "3. Delivery Timelines",
              content: `Delivery timelines vary based on the specific service or product:
              • SaaS Subscriptions / Ready-made Software: Access credentials and account activation are typically processed and delivered within 24 hours of successful payment confirmation.
              • Custom Software Development / IT Services: Delivery timelines are strictly tied to the milestones explicitly agreed upon in your individual Project Contract or Statement of Work (SOW).`,
            },
            {
              title: "4. Confirmation of Delivery",
              content: `Delivery is considered complete when:
              • An email containing the final deliverables, access links, or credentials has been sent to the registered email address.
              • The software has been deployed to the agreed-upon production environment and handed over.
              
              Clients are responsible for ensuring that the email address provided during billing is accurate and capable of receiving emails from the @mavtop.in domain.`,
            },
            {
              title: "5. Delivery Delays",
              content: `While we strive to meet all agreed deadlines, delivery may be delayed due to unforeseen technical difficulties, force majeure events, or delays in receiving prerequisite information/feedback from the client. In such instances, the client will be notified promptly with a revised delivery schedule.`,
            },
            {
              title: "6. Contact Us",
              content: `If you have not received your digital product or service access within the specified timeframe, please contact our support team immediately:
              Email: hello@mavtop.in
              Phone: +91 93856 61495`,
            },
          ].map((section) => (
            <div key={section.title} className="border-b border-white/5 pb-8">
              <h2 className="font-grotesk font-semibold text-xl text-white mb-3">{section.title}</h2>
              <p className="text-[#A1A1AA] font-inter text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
