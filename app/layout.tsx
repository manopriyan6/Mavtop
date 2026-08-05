import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
