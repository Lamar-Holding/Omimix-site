"use client"

interface CertificationsProps {
  t: Record<string, any>
}

export function Certifications({ t }: CertificationsProps) {
  const certs = [
    {
      id: "fda",
      badge: "FDA",
      title: t.certifications.fda.title,
      description: t.certifications.fda.description,
    },
    {
      id: "rohs",
      badge: "RoHS",
      title: t.certifications.rohs.title,
      description: t.certifications.rohs.description,
    },
    {
      id: "reach",
      badge: "REACH",
      title: t.certifications.reach.title,
      description: t.certifications.reach.description,
    },
  ]

  return (
    <section id="certifications" className="py-20 md:py-32 bg-background dark:bg-neutral-900 relative overflow-hidden">
      <div className="section-ambient"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.certifications.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {certs.map((cert, idx) => (
            <div
              key={cert.id}
              className="text-center p-8 rounded-xl card-ambient animate-rise-in"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-light to-secondary flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg shadow-primary-light/30">
                {cert.badge}
              </div>
              <h3 className="text-lg font-bold mb-3">{cert.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
