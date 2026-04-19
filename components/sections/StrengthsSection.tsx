'use client'

import { portfolioData } from '@/lib/portfolio-data'
import * as Icons from 'lucide-react'

export function StrengthsSection() {
  const { strengths } = portfolioData

  // Map icon names to Lucide components
  const iconMap: Record<string, any> = {
    Lightbulb: Icons.Lightbulb,
    BarChart3: Icons.BarChart3,
    Users: Icons.Users,
    Zap: Icons.Zap,
    CheckCircle2: Icons.CheckCircle2,
    Award: Icons.Award,
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Key Strengths
          </h2>
          <p className="text-lg text-foreground/70">
            What drives my professional success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((strength, index) => {
            const IconComponent = iconMap[strength.icon]
            return (
              <div
                key={index}
                className="bg-card rounded-lg border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-primary" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {strength.title}
                </h3>
                <p className="text-foreground/70">
                  {strength.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
