"use client"

interface WhyOmimixProps {
  t: Record<string, any>
}

export function WhyOmimix({ t }: WhyOmimixProps) {
  const values = [
    {
      id: "quality",
      icon: "⭐",
      title: t.whyOmimix.quality.title,
      description: t.whyOmimix.quality.description,
    },
    {
      id: "flexibility",
      icon: "🎯",
      title: t.whyOmimix.flexibility.title,
      description: t.whyOmimix.flexibility.description,
    },
    {
      id: "sustainability",
      icon: "🌱",
      title: t.whyOmimix.sustainability.title,
      description: t.whyOmimix.sustainability.description,
    },
    {
      id: "innovation",
      icon: "💡",
      title: t.whyOmimix.innovation.title,
      description: t.whyOmimix.innovation.description,
    },
    {
      id: "reliability",
      icon: "🛡️",
      title: t.whyOmimix.reliability.title,
      description: t.whyOmimix.reliability.description,
    },
    {
      id: "techFacilities",
      icon: "🔬",
      title: t.whyOmimix.techFacilities.title,
      description: t.whyOmimix.techFacilities.description,
    },
  ]

  return (
    <section id="whyOmimix" className="py-20 md:py-32 bg-background dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.whyOmimix.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div
              key={value.id}
              className="p-8 rounded-xl border border-border bg-background dark:bg-neutral-800 hover:border-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary-light/20 group animate-slide-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
              <h3 className="text-lg font-bold mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
