'use client'

import { useEffect, useRef, useState } from 'react'

interface SkillCardProps {
  name: string
  proficiency: number
}

export function SkillCard({ name, proficiency }: SkillCardProps) {
  const [displayProficiency, setDisplayProficiency] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 1500
    const steps = 50
    const stepValue = proficiency / steps
    let current = 0

    const interval = setInterval(() => {
      current += stepValue
      if (current >= proficiency) {
        setDisplayProficiency(proficiency)
        clearInterval(interval)
      } else {
        setDisplayProficiency(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [isVisible, proficiency])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-foreground">{name}</h4>
        <span className="text-sm text-foreground/60">{displayProficiency}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${displayProficiency}%` }}
        />
      </div>
    </div>
  )
}
