"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import type { Language } from "@/lib/i18n"

type LanguageContextValue = {
  language: Language
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function applyLanguage(lang: Language) {
  if (typeof document === "undefined") return
  localStorage.setItem("omimix-language", lang)
  document.documentElement.lang = lang
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("omimix-language") as Language | null
    const initial = stored === "ar" || stored === "en" ? stored : "en"
    setLanguageState(initial)
    applyLanguage(initial)
    setMounted(true)
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    applyLanguage(lang)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next: Language = prev === "ar" ? "en" : "ar"
      applyLanguage(next)
      return next
    })
  }, [])

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      setLanguage,
      mounted,
    }),
    [language, mounted, setLanguage, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
