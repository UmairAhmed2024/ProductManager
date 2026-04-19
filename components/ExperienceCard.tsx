'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ExperienceCardProps {
  company: string
  role: string
  duration: string
  description: string
  achievements: string[]
  tech: string[]
}

export function ExperienceCard({
  company,
  role,
  duration,
  description,
  achievements,
  tech,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground">{role}</h3>
            <p className="text-primary font-semibold mt-1">{company}</p>
            <p className="text-sm text-foreground/60 mt-2">{duration}</p>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-foreground/60 transition-transform duration-300 ${
              isExpanded ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-border/50 animate-slideDown">
          <p className="text-foreground/70 mb-4">{description}</p>

          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">Key Achievements</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex gap-2 text-foreground/70">
                  <span className="text-primary font-bold">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {tech.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
