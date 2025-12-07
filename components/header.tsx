"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { Menu, Moon, Sun, X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface HeaderProps {
  t: Record<string, any>
  onNavClick: (sectionId: string) => void
}

const navItems = ["home", "about", "products", "sectors", "workflow", "certifications", "whyOmimix", "contact"]

export function Header({ t, onNavClick }: HeaderProps) {
  const { language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 dark:bg-neutral-900/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="flex items-center gap-3 group w-32 shrink-0"
            aria-label="Reload page"
          >
            <span className="relative block h-10 w-32">
              <Image
                src="/Omimix for white mode.png"
                alt="Omimix logo"
                fill
                className="object-contain block dark:hidden"
                sizes="96px"
                priority
              />
              <Image
                src="/Omimix for dark mode.png"
                alt="Omimix logo"
                fill
                className="object-contain hidden dark:block"
                sizes="96px"
                priority
              />
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavClick(item)}
                className="text-sm font-medium text-muted-foreground hover:text-primary-light transition-colors duration-200 relative group"
              >
                {t.common[item]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 flex items-center gap-1"
            >
              <span className="w-5 h-5 flex items-center justify-center text-xs font-bold">
                {language.toUpperCase()}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-muted-foreground" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-slide-in-down">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavClick(item)
                    setIsMenuOpen(false)
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                >
                  {t.common[item]}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
