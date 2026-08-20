import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mavtop.in'

  return [
    // ── Core pages ────────────────────────────────────────
    // Update lastModified whenever you meaningfully change page content.
    // Static dates let Google trust your sitemap and prioritize crawling correctly.
    {
      url: baseUrl,
      lastModified: new Date('2026-08-20'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-08-10'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // ── Service / product pages ───────────────────────────
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-08-10'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date('2026-08-10'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date('2026-08-10'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // ── Partner pages ─────────────────────────────────────
    {
      url: `${baseUrl}/cashfree`,
      lastModified: new Date('2026-08-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ── Conversion page ───────────────────────────────────
    {
      url: `${baseUrl}/book`,
      lastModified: new Date('2026-08-10'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    // ── Legal / policy pages ──────────────────────────────
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-07-22'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2026-07-22'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date('2026-07-22'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/shipping-policy`,
      lastModified: new Date('2026-07-22'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date('2026-07-22'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
