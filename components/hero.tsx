"use client"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

interface HeroProps {
  t: Record<string, any>
  onContactClick: () => void
}

export function Hero({ t, onContactClick }: HeroProps) {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  const orbBase = {
    size1: { width: 64, height: 64 },
    size2: { width: 88, height: 88 },
    size3: { width: 56, height: 56 },
    size4: { width: 48, height: 48 },
  }

  const orbSide = isRTL
    ? {
        primaryTop: { top: "14%", right: "18%" },
        primaryMid: { top: "8%", right: "12%" },
        primaryBottom: { bottom: "18%", right: "22%" },
        primaryBottom2: { bottom: "14%", right: "12%" },
        light1: { top: "18%", right: "28%" },
        light2: { bottom: "20%", right: "32%" },
        extra1: { bottom: "8%", left: "36%" },
        extra2: { top: "10%", left: "32%" },
        extra3: { top: "32%", right: "16%" },
        extra4: { bottom: "30%", right: "18%" },
        extra5: { top: "46%", right: "28%" },
      }
    : {
        primaryTop: { top: "14%", left: "14%" },
        primaryMid: { top: "8%", left: "10%" },
        primaryBottom: { bottom: "18%", left: "20%" },
        primaryBottom2: { bottom: "14%", left: "10%" },
        light1: { top: "18%", left: "24%" },
        light2: { bottom: "20%", left: "30%" },
        extra1: { bottom: "8%", right: "36%" },
        extra2: { top: "10%", right: "32%" },
        extra3: { top: "32%", left: "12%" },
        extra4: { bottom: "30%", left: "16%" },
        extra5: { top: "46%", left: "24%" },
      }

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-background to-secondary/5 dark:from-primary-dark/20 dark:via-neutral-900 dark:to-secondary/10"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-10 sm:top-16 right-4 sm:right-12 w-64 h-64 bg-primary-light/14 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-10 sm:bottom-16 left-4 sm:left-12 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating decorative orbs near text (layout-aware) */}
      <div
        className="orb glass float-a"
        style={{ ...orbBase.size1, ...orbSide.primaryTop }}
      ></div>
      <div
        className="orb accent float-b"
        style={{ ...orbBase.size2, ...orbSide.primaryMid }}
      ></div>
      <div
        className="orb glass drift"
        style={{ ...orbBase.size3, ...orbSide.primaryBottom }}
      ></div>
      <div
        className="orb accent float-a"
        style={{ ...orbBase.size4, ...orbSide.primaryBottom2 }}
      ></div>
      {/* Extra orbs shown in all modes to surround text */}
      <div
        className="orb accent light float-b"
        style={{ ...orbBase.size2, ...orbSide.light1 }}
      ></div>
      <div
        className="orb glass light float-a"
        style={{ ...orbBase.size3, ...orbSide.light2 }}
      ></div>
      <div
        className="orb accent float-b"
        style={{ width: 80, height: 80, ...orbSide.extra1 }}
      ></div>
      <div
        className="orb glass float-a"
        style={{ ...orbBase.size3, ...orbSide.extra2 }}
      ></div>
      <div
        className="orb accent light float-b"
        style={{ width: 70, height: 70, ...orbSide.extra3 }}
      ></div>
      <div
        className="orb glass light float-a"
        style={{ width: 60, height: 60, ...orbSide.extra4 }}
      ></div>
      <div
        className="orb accent light float-b"
        style={{ width: 64, height: 64, ...orbSide.extra5 }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 animate-slide-in-up">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">{t.hero.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-lg">{t.hero.subtitle}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onContactClick}
                className="px-8 py-3 bg-gradient-to-r from-primary-dark to-[var(--color-secondary-accent)] rounded-lg font-semibold text-white shadow-md hover:shadow-xl hover:shadow-primary-light/30 transition-all duration-300 transform hover:scale-105"
              >
                {t.hero.cta}
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("about")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-3 border-2 border-primary-light text-primary-light rounded-lg font-semibold hover:bg-primary-light/10 transition-all duration-300"
              >
                {t.hero.learnMore}
              </button>
            </div>

            {/* Location Info */}
            <div className="pt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              {t.hero.location}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-[500px] hidden md:block animate-slide-in-down">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-secondary/20 rounded-2xl"></div>
            <Image
              src="/plastic-manufacturing-industrial-production.jpg"
              alt="Omimix Industrial Manufacturing"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary-light" />
        </div>
      </div>
    </section>
  )
}
