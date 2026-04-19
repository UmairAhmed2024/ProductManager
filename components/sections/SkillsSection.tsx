'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { SkillCard } from '@/components/SkillCard'

export function SkillsSection() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground/70">
            A comprehensive view of my professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.categories.map((category, index) => (
            <div
              key={category.title}
              className="space-y-6 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
