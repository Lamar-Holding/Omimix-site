"use client"

interface WorkflowProps {
  t: Record<string, any>
}

export function Workflow({ t }: WorkflowProps) {
  const steps = [
    {
      title: t.workflow.design,
      description: t.workflow.designDesc,
      icon: "✏️",
    },
    {
      title: t.workflow.manufacturing,
      description: t.workflow.manufacturingDesc,
      icon: "⚙️",
    },
    {
      title: t.workflow.qc,
      description: t.workflow.qcDesc,
      icon: "✅",
    },
    {
      title: t.workflow.packaging,
      description: t.workflow.packagingDesc,
      icon: "📦",
    },
    {
      title: t.workflow.logistics,
      description: t.workflow.logisticsDesc,
      icon: "🚀",
    },
  ]

  return (
    <section id="workflow" className="py-20 md:py-32 bg-background dark:bg-neutral-900 relative overflow-hidden">
      <div className="section-ambient"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.workflow.title}</h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="divider-glow hidden md:block"></div>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`flex gap-8 items-start md:gap-0 animate-rise-in`}
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  {/* Left side - Content */}
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <div className="p-6 rounded-xl card-ambient">
                      <div className="text-3xl mb-3">{step.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center - Circle Node */}
                  <div className="hidden md:flex w-1/2 justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary-light shadow-lg shadow-primary-light/50 relative z-10 animate-float-slow"></div>
                  </div>

                  {/* Right side - Empty (for alternating layout) */}
                  <div
                    className={`md:w-1/2 ${
                      idx % 2 === 0 ? "md:col-start-2 md:pl-12" : "md:text-left md:pl-0 hidden md:block"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
