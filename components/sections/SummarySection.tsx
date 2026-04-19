'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export function SummarySection() {
  const { summary } = portfolioData

  return (
    <section id="summary" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {summary.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {summary.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {summary.kpis.map((kpi, index) => (
            <AnimatedCounter
              key={kpi.label}
              value={kpi.value}
              label={kpi.label}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-foreground/60 italic">
            &quot;Success is driven by clear vision, strong execution, and continuous improvement.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
