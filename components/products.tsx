"use client"

interface ProductsProps {
  t: Record<string, any>
}

export function Products({ t }: ProductsProps) {
  const productCategories = [
    {
      id: "filler",
      icon: "📦",
      title: t.products.filler.title,
      subtitle: t.products.filler.subtitle,
      description: t.products.filler.description,
      features: t.products.filler.features,
    },
    {
      id: "colorMasterbatch",
      icon: "🎨",
      title: t.products.colorMasterbatch.title,
      description: t.products.colorMasterbatch.description,
      features: t.products.colorMasterbatch.features,
    },
    {
      id: "whiteMasterbatch",
      icon: "⚪",
      title: t.products.whiteMasterbatch.title,
      description: t.products.whiteMasterbatch.description,
      features: t.products.whiteMasterbatch.features,
    },
    {
      id: "blackMasterbatch",
      icon: "⚫",
      title: t.products.blackMasterbatch.title,
      description: t.products.blackMasterbatch.description,
      features: t.products.blackMasterbatch.features,
    },
    {
      id: "additiveMasterbatch",
      icon: "🧪",
      title: t.products.additiveMasterbatch.title,
      description: t.products.additiveMasterbatch.description,
      features: t.products.additiveMasterbatch.features,
    },
  ]

  return (
    <section id="products" className="py-20 md:py-32 bg-background dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.products.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((product, idx) => (
            <div
              key={product.id}
              className="group relative rounded-xl card-ambient overflow-hidden animate-rise-in"
              style={{ animationDelay: `${idx * 110}ms` }}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/0 to-secondary/0 group-hover:from-primary-light/10 group-hover:to-secondary/10 transition-all duration-300"></div>

              <div className="relative p-8">
                <div className="text-5xl mb-4">{product.icon}</div>

                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                {product.subtitle && (
                  <p className="text-sm text-primary-light font-semibold mb-3">{product.subtitle}</p>
                )}

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground uppercase animate-shimmer">{t.products.featuresLabel}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, featureIdx: number) => (
                      <li key={featureIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary-light font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
