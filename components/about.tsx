"use client"

interface AboutProps {
  t: Record<string, any>
}

export function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-20 md:py-32 bg-background dark:bg-neutral-900 relative overflow-hidden">
      <div className="section-ambient"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground">{t.about.background}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: t.about.visionTitle, text: t.about.vision },
            { title: t.about.missionTitle, text: t.about.mission },
            { title: t.about.backgroundTitle, text: t.about.background },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl card-ambient animate-rise-in"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <h3 className="text-xl font-bold mb-3 text-primary-light">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
