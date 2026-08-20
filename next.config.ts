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

  // ── Permanent redirect: www → non-www ──────────────────────────────────────
  // Fixes the "www.mavtop.in → 307 temporary" crawl issue in Search Console.
  // 308 is the permanent equivalent of 307 for non-GET methods; Google treats
  // it identically to 301 for link-equity consolidation.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mavtop.in" }],
        destination: "https://mavtop.in/:path*",
        permanent: true, // emits 308 Permanent Redirect
      },
    ];
  },

  // ── CDN-friendly cache headers ─────────────────────────────────────────────
  // Vercel's Edge Network is a full CDN; these headers instruct edge nodes to
  // cache assets for longer, which fixes the IONOS CDN detection check and
  // speeds up repeat visits for users across regions.
  async headers() {
    return [
      // Immutable static assets (JS/CSS/fonts with content-hash in filename)
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      // Public images and icons
      {
        source: "/:file(.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff2|woff))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      // HTML pages – short-lived so search engines always get fresh content
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;

