import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Kufi_Arabic } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })
const notoKufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "Omimix - Leaders in Innovative Plastic Additives",
  description:
    "Omimix specializes in plastic fillers and masterbatches. We are leaders in manufacturing innovative plastic additives for various industries.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://omimix.sa"),
  alternates: {
    languages: {
      ar: "/ar",
      en: "/en",
    },
  },
  openGraph: {
    title: "Omimix",
    description: "Leaders in innovative plastic additives and solutions",
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground transition-colors duration-300`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
