import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Mavtop Technologies",
  description: "Learn about how Mavtop Technologies uses cookies on its website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#131524] text-white">
      <div className="border-b border-white/6">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <span className="text-xs text-[#52525B] font-jakarta">Last updated: July 2025</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <span className="text-xs font-jakarta text-brand-blue uppercase tracking-widest mb-4 block">Legal</span>
          <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-white mb-4">Cookie Policy</h1>
          <p className="text-[#A1A1AA] font-jakarta text-lg">
            This policy explains what cookies are, how we use them, and how you can control them.
          </p>
        </div>

        <div className="space-y-10">
          {[
            {
              title: "1. What Are Cookies?",
              content: `Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, improve performance, and provide analytics data.`,
            },
            {
              title: "2. Types of Cookies We Use",
              content: `Essential Cookies: Required for the website to function. These cannot be disabled.
              
              Analytics Cookies: Help us understand how visitors interact with our website (e.g., Google Analytics).
              
              Preference Cookies: Remember your settings and preferences for a better experience.
              
              Marketing Cookies: Used to deliver relevant advertisements (only with your consent).`,
            },
            {
              title: "3. How We Use Cookies",
              content: `We use cookies to:
              • Keep you logged in to any secure areas
              • Remember your preferences and settings
              • Analyse traffic and usage patterns
              • Improve website performance
              • Provide relevant content`,
            },
            {
              title: "4. Third-Party Cookies",
              content: `We may use third-party services such as Google Analytics, which set their own cookies. We do not control these cookies. Please refer to the respective privacy policies of these services for more information.`,
            },
            {
              title: "5. Managing Cookies",
              content: `You can control cookies through your browser settings:
              • Chrome: Settings → Privacy and Security → Cookies
              • Firefox: Options → Privacy & Security
              • Safari: Preferences → Privacy
              • Edge: Settings → Privacy, Search and Services
              
              Note: Disabling essential cookies may affect website functionality.`,
            },
            {
              title: "6. Contact",
              content: `For cookie-related questions, contact us at hello@mavtop.in.`,
            },
          ].map((section) => (
            <div key={section.title} className="border-b border-white/5 pb-8">
              <h2 className="font-grotesk font-semibold text-xl text-white mb-3">{section.title}</h2>
              <p className="text-[#A1A1AA] font-jakarta text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
