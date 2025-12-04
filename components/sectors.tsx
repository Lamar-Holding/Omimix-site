"use client"

interface SectorsProps {
  t: Record<string, any>
}

export function Sectors({ t }: SectorsProps) {
  const sectorsList = [
    {
      id: "industrial",
      icon: "🏭",
      title: t.sectors.industrial.title,
      description: t.sectors.industrial.description,
    },
    {
      id: "agricultural",
      icon: "🌾",
      title: t.sectors.agricultural.title,
      description: t.sectors.agricultural.description,
    },
    {
      id: "medical",
      icon: "⚕️",
      title: t.sectors.medical.title,
      description: t.sectors.medical.description,
    },
    {
      id: "packaging",
      icon: "📦",
      title: t.sectors.packaging.title,
      description: t.sectors.packaging.description,
    },
    {
      id: "consumerGoods",
      icon: "🛍️",
      title: t.sectors.consumerGoods.title,
      description: t.sectors.consumerGoods.description,
    },
    {
      id: "construction",
      icon: "🏗️",
      title: t.sectors.construction.title,
      description: t.sectors.construction.description,
    },
  ]

  return (
    <section id="sectors" className="py-20 md:py-32 bg-background dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.sectors.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorsList.map((sector, idx) => (
            <div
              key={sector.id}
              className="group relative p-8 rounded-xl border border-border bg-background dark:bg-neutral-700 hover:border-secondary hover:bg-background dark:hover:bg-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 cursor-pointer animate-slide-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{sector.icon}</div>
              <h3 className="text-xl font-bold mb-3">{sector.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{sector.description}</p>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-secondary/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
