'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { ExperienceCard } from '@/components/ExperienceCard'

export function ExperienceSection() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-foreground/70">
            A track record of impact across multiple organizations and roles
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
