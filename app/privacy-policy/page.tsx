import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Mavtop Technologies",
  description: "Learn how Mavtop Technologies collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      {/* Header */}
      <div className="border-b border-white/6">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <span className="text-xs text-[#52525B] font-inter">Last updated: July 2025</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <span className="text-xs font-inter text-brand-green uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
          <p className="text-[#A1A1AA] font-inter text-lg">
            Mavtop Technologies Pvt. Ltd. ("we", "our", or "us") is committed to protecting your privacy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </div>

        <div className="prose-custom space-y-10">
          {[
            {
              title: "1. Information We Collect",
              content: `We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise contact us.
              
              Personal Information: Name, email address, phone number, company name, billing address, and shipping address.
              Payment Information: We process payments through secure third-party payment gateways (e.g., Razorpay, Stripe). We do not store complete credit card numbers or highly sensitive payment details on our servers.
              Automatically Collected Information: IP address, browser and device characteristics, operating system, referring URLs, and information about how and when you use our website.`,
            },
            {
              title: "2. How We Use Your Information",
              content: `We use personal information collected via our website for a variety of business purposes described below:
              • To facilitate account creation and logon process.
              • To fulfill and manage your orders, payments, and subscriptions.
              • To send administrative information to you, such as product, service, and new feature information and/or information about changes to our terms, conditions, and policies.
              • To respond to legal requests and prevent harm.
              • To deliver targeted advertising and marketing communications (with your consent).`,
            },
            {
              title: "3. Sharing of Information",
              content: `We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
              • Third-Party Service Providers: We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf (e.g., payment processing, data analysis, email delivery).
              • Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.`,
            },
            {
              title: "4. Data Security",
              content: `We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. This includes SSL/TLS encryption for data in transit. However, please also remember that we cannot guarantee that the internet itself is 100% secure.`,
            },
            {
              title: "5. Data Retention",
              content: `We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).`,
            },
            {
              title: "6. Your Privacy Rights",
              content: `Depending on your location, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request to our Grievance Officer.`,
            },
            {
              title: "7. Grievance Officer",
              content: `In accordance with the Information Technology Act, 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:
              
              Name: Legal / Grievance Officer
              Mavtop Technologies Pvt. Ltd.
              Address: 293, Permandapatti, K Ichambadi Post, Karimangalam Taluk, Dharmapuri – 635202, Tamil Nadu, India
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

        <div className="mt-12 p-6 rounded-2xl border border-white/6 bg-white/[0.02]">
          <p className="text-[#71717A] font-inter text-sm">
            By using our website or services, you agree to this Privacy Policy. We may update this policy periodically.
            Continued use of our services after changes constitutes acceptance of the updated policy.
          </p>
        </div>
      </div>
    </main>
  );
}
