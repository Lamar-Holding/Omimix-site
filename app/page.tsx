"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Sectors } from "@/components/sectors"
import { Workflow } from "@/components/workflow"
import { Certifications } from "@/components/certifications"
import { WhyOmimix } from "@/components/why-omimix"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import arTranslations from "@/locales/ar.json"
import enTranslations from "@/locales/en.json"

export default function Home() {
  const { language, mounted } = useLanguage()
  const translations = language === "ar" ? arTranslations : enTranslations

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleContactClick = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background dark:bg-neutral-900 transition-colors duration-300">
      <Header t={translations} onNavClick={handleNavClick} />
      <Hero t={translations} onContactClick={handleContactClick} />
      <About t={translations} />
      <Products t={translations} />
      <Sectors t={translations} />
      <Workflow t={translations} />
      <Certifications t={translations} />
      <WhyOmimix t={translations} />
      <ContactSection t={translations} />
      <Footer t={translations} />
    </main>
  )
}
