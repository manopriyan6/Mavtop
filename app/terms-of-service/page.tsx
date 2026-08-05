import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Mavtop Technologies",
  description: "Read the terms and conditions governing use of Mavtop Technologies services.",
};

export default function TermsOfServicePage() {
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
          <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-[#A1A1AA] font-jakarta text-lg">
            These terms govern your use of Mavtop Technologies Pvt. Ltd.&apos;s website and services. Please read them carefully.
          </p>
        </div>

        <div className="space-y-10">
          {[
            {
              title: "1. Acceptance of Terms",
              content: `By accessing or using our website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services. You must be at least 18 years of age to use our services or enter into a contract with us.`,
            },
            {
              title: "2. Services and Delivery",
              content: `Mavtop Technologies provides software development, AI solutions, cloud services, and digital products. Delivery of these services is digital. We do not ship physical products. Delivery timelines and specifics are outlined in individual project agreements or our Shipping & Delivery Policy.`,
            },
            {
              title: "3. Pricing and Payments",
              content: `All prices are subject to change without prior notice. For custom projects, pricing is fixed as per the agreed Statement of Work (SOW). 
              • Payments must be made in INR (or USD as agreed) via our secure payment gateways.
              • Clients are responsible for any applicable taxes (such as GST) unless explicitly stated otherwise.
              • Failure to make timely payments may result in suspension or termination of services.`,
            },
            {
              title: "4. User Conduct and Obligations",
              content: `As a user or client, you agree to:
              • Provide accurate, current, and complete information.
              • Not use our services for any unlawful, fraudulent, or prohibited purposes.
              • Not attempt to gain unauthorized access to our systems, networks, or data.
              • Ensure that any material provided to us (text, images, data) does not infringe on third-party copyrights.`,
            },
            {
              title: "5. Intellectual Property",
              content: `Mavtop Technologies retains all rights, title, and interest in its generic components, frameworks, branding, website content, and proprietary tools. Upon full payment for custom development services, the client receives intellectual property rights to the specific deliverables as explicitly outlined in their contract.`,
            },
            {
              title: "6. Disclaimer of Warranties",
              content: `Our services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our services will be uninterrupted or error-free.`,
            },
            {
              title: "7. Limitation of Liability",
              content: `To the maximum extent permitted by law, Mavtop Technologies Pvt. Ltd., its directors, employees, or agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your use of our services. Our total liability shall not exceed the total amount paid by you to us in the preceding 3 months.`,
            },
            {
              title: "8. Governing Law and Jurisdiction",
              content: `These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts located in Dharmapuri, Tamil Nadu, India.`,
            },
            {
              title: "9. Contact Information",
              content: `Questions about the Terms of Service should be sent to us at:
              Email: hello@mavtop.in
              Phone: +91 93856 61495
              Address: Mavtop Technologies Pvt. Ltd., 293, Permandapatti, K Ichambadi Post, Karimangalam Taluk, Dharmapuri – 635202, Tamil Nadu, India`,
            },
          ].map((section) => (
            <div key={section.title} className="border-b border-white/5 pb-8">
              <h2 className="font-grotesk font-semibold text-xl text-slate-900 mb-3">{section.title}</h2>
              <p className="text-[#A1A1AA] font-jakarta text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
