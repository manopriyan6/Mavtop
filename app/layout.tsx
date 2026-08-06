import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mavtop Technologies — Maximum Value + Top Performance",
  description:
    "Mavtop Technologies builds AI-powered software, enterprise automation, cloud platforms, and digital experiences that help businesses scale faster. Chennai, Tamil Nadu, India.",
  keywords: [
    "AI software development",
    "enterprise automation",
    "cloud platforms",
    "digital transformation",
    "SaaS development",
    "mobile app development",
    "Chennai software company",
    "Tamil Nadu IT company",
    "Mavtop Technologies",
  ],
  authors: [{ name: "Mavtop Technologies" }],
  creator: "Mavtop Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mavtop.in",
    siteName: "Mavtop Technologies",
    title: "Mavtop Technologies — Maximum Value + Top Performance",
    description:
      "AI-powered software, enterprise automation, cloud platforms and digital experiences. Chennai, Tamil Nadu, India.",
    images: [
      {
        url: "/mavtop.png",
        width: 1200,
        height: 630,
        alt: "Mavtop Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavtop Technologies",
    description: "Maximum Value + Top Performance",
    images: ["/mavtop.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-symbol-transparent.png",
    apple: "/logo-symbol-transparent.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mavtop Technologies",
              "url": "https://mavtop.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mavtop.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mavtop Technologies",
              "url": "https://mavtop.in",
              "logo": "https://mavtop.in/logo-symbol-transparent.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-93856-61495",
                "contactType": "Customer Service"
              }
            })
          }}
        />
      </head>
      <body className="antialiased font-jakarta text-slate-900 dark:text-slate-100 bg-[#FAFAFA] dark:bg-[#0D0D0F] transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
