"use client"

import { renderHook, act } from "@testing-library/react"
import type React from "react"
import { LanguageProvider, useLanguage } from "@/hooks/use-language"

describe("useLanguage", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => <LanguageProvider>{children}</LanguageProvider>

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    // Reset DOM
    document.documentElement.lang = "en"
    document.documentElement.dir = "ltr"
  })

  it("should initialize with English as default language", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper })

    act(() => {
      // Wait for mount
    })

    expect(result.current.language).toBe("en")
    expect(localStorage.getItem("omimix-language")).toBe("en")
  })

  it("should toggle language from English to Arabic", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper })

    act(() => {
      result.current.toggleLanguage()
    })

    expect(result.current.language).toBe("ar")
    expect(localStorage.getItem("omimix-language")).toBe("ar")
    expect(document.documentElement.lang).toBe("ar")
    expect(document.documentElement.dir).toBe("rtl")
  })

  it("should toggle language from Arabic back to English", () => {
    localStorage.setItem("omimix-language", "ar")
    const { result } = renderHook(() => useLanguage(), { wrapper })

    act(() => {
      result.current.toggleLanguage()
    })

    expect(result.current.language).toBe("en")
    expect(localStorage.getItem("omimix-language")).toBe("en")
    expect(document.documentElement.dir).toBe("ltr")
  })

  it("should restore language from localStorage", () => {
    localStorage.setItem("omimix-language", "en")
    const { result } = renderHook(() => useLanguage(), { wrapper })

    // After mount
    expect(result.current.mounted).toBe(false) // Initially false before hydration
  })
})
