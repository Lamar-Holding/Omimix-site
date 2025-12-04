"use client"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  t: Record<string, any>
  onContactClick: () => void
}

export function Hero({ t, onContactClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-background to-secondary/5 dark:from-primary-dark/20 dark:via-neutral-900 dark:to-secondary/10"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
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
