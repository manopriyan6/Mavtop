import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Mavtop Technologies",
  description: "Mavtop Technologies strict refund and cancellation policy for all digital services and SaaS products.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-slate-900">
      <div className="border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-sm text-[#A1A1AA] hover:text-slate-900 transition-colors">
            ← Back to Home
          </Link>
          <span className="text-xs text-[#52525B] font-jakarta">Last updated: July 2025</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <span className="text-xs font-jakarta text-brand-blue uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-900 mb-4">Refund & Cancellation Policy</h1>
          <p className="text-[#A1A1AA] font-jakarta text-lg">
            This policy outlines our strict guidelines for refunds and cancellations, as required by payment processing regulations.
          </p>
        </div>

        <div className="space-y-10">
          {[
            {
              title: "1. Cancellation Policy",
              content: `Services and Custom Software: You may request a cancellation of services within 24 hours of placing an order or signing a contract, provided that the execution of the project has not commenced. Once the work has officially started and resources have been allocated, the project cannot be cancelled outright without incurring charges for the work already completed.
              
              SaaS Subscriptions: Subscriptions can be cancelled at any time through your account dashboard. Cancellations will take effect at the end of the current billing cycle.`,
            },
            {
              title: "2. Refund Eligibility",
              content: `We offer refunds under the following strict conditions:
              • Double Payment: If you are accidentally charged twice for the same transaction, the duplicate transaction will be refunded in full.
              • Failure to Deliver: If Mavtop Technologies fails to deliver the agreed-upon initial milestone or service within the stipulated timeframe due to reasons solely attributable to us.
              • Cancellation before Commencement: If a valid cancellation request is received within 24 hours of payment and before any work has commenced.`,
            },
            {
              title: "3. Non-Refundable Items",
              content: `The following are strictly non-refundable:
              • Payments made for completed and client-approved milestones.
              • Setup fees, consultation fees, and advance deposits once work has commenced.
              • Third-party expenses incurred on your behalf (e.g., server hosting, domain registration, API licenses).
              • SaaS subscription charges for the active billing period (no pro-rated refunds).`,
            },
            {
              title: "4. Refund Processing Timeline",
              content: `If a refund is approved by Mavtop Technologies:
              • The refund will be initiated within 5 to 7 business days from the date of approval.
              • The amount will be credited back to the original method of payment (Credit Card, Debit Card, Net Banking, UPI, etc.).
              • Please note that depending on your bank or payment provider, it may take an additional 3 to 10 business days for the funds to reflect in your account.`,
            },
            {
              title: "5. How to Request a Cancellation or Refund",
              content: `All cancellation and refund requests must be made in writing. Please email our billing department at hello@mavtop.in with the subject line "Refund/Cancellation Request - [Your Invoice/Order Number]". Provide a detailed reason for the request and any supporting documentation.`,
            },
          ].map((section) => (
            <div key={section.title} className="border-b border-white/5 pb-8">
              <h2 className="font-grotesk font-semibold text-xl text-slate-900 mb-3">{section.title}</h2>
              <p className="text-[#A1A1AA] font-jakarta text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-brand-blue/15 bg-brand-blue/5">
          <p className="text-[#A1A1AA] font-jakarta text-sm">
            <span className="text-slate-900 font-semibold">Need help?</span> Contact our billing support at{" "}
            <a href="mailto:hello@mavtop.in" className="text-brand-blue hover:underline">hello@mavtop.in</a>{" "}
            or call <a href="tel:+919385661495" className="text-brand-blue hover:underline">+91 93856 61495</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
