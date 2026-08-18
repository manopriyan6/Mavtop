import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Commented out for Vercel deployment. 
  // ONLY uncomment these if you go back to Hostinger/cPanel static hosting.
  // output: "export",
  // trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cashfreelogo.cashfree.com",
      },
    ],
  },
};

export default nextConfig;

