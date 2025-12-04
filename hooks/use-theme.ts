"use client"

import { useCallback, useEffect, useState } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get theme from localStorage or system preference
    const stored = localStorage.getItem("omimix-theme") as "light" | "dark" | null
    if (stored) {
      setTheme(stored)
      document.documentElement.classList.toggle("dark", stored === "dark")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const initialTheme = prefersDark ? "dark" : "light"
      setTheme(initialTheme)
      document.documentElement.classList.toggle("dark", prefersDark)
    }
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light"
      localStorage.setItem("omimix-theme", newTheme)
      document.documentElement.classList.toggle("dark", newTheme === "dark")
      return newTheme
    })
  }, [])

  return { theme, toggleTheme, mounted }
}
