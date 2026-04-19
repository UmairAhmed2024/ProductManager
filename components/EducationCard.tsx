'use client'

import { Award } from 'lucide-react'

interface EducationCardProps {
  institution: string
  degree: string
  gpa?: string
  graduationYear: number
  details?: string
  isCertification?: boolean
}

export function EducationCard({
  institution,
  degree,
  gpa,
  graduationYear,
  details,
  isCertification = false,
}: EducationCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Award className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground">{degree}</h3>
          <p className="text-primary font-semibold mt-1">{institution}</p>
          <p className="text-sm text-foreground/60 mt-2">
            {isCertification ? `Issued ${graduationYear}` : `Graduated ${graduationYear}`}
          </p>
          {gpa && <p className="text-sm text-foreground/70 mt-1">GPA: {gpa}</p>}
          {details && <p className="text-sm text-foreground/70 mt-2 italic">{details}</p>}
        </div>
      </div>
    </div>
  )
}
