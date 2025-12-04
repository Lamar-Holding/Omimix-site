import type { Metadata } from "next"

export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://omimix.sa"),
  title: "Omimix - رواد في تصنيع إضافات البلاستيك المبتكرة",
  description:
    "Omimix specializes in high-quality plastic fillers and masterbatches. Leaders in manufacturing innovative plastic additives supporting Vision 2030.",
  keywords: [
    "plastic additives",
    "masterbatch",
    "calcium carbonate",
    "plastic filler",
    "Saudi Arabia",
    "manufacturing",
    "additive masterbatch",
    "color masterbatch",
    "إضافات البلاستيك",
    "الماسترباتش",
  ],
  authors: [{ name: "Omimix", url: "https://omimix.sa" }],
  creator: "Omimix",
  publisher: "Omimix",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: "https://omimix.sa",
    siteName: "Omimix",
    title: "Omimix - Innovative Plastic Additives Manufacturer",
    description: "Leading manufacturer of plastic fillers and masterbatches in Saudi Arabia",
    images: [
      {
        url: "https://omimix.sa/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omimix - Plastic Additives",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omimix",
    description: "Leaders in plastic additives manufacturing",
    creator: "@omimix",
    images: ["https://omimix.sa/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
}
