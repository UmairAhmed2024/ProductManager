'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  label: string
  delay?: number
}

export function AnimatedCounter({ value, label, delay = 0 }: AnimatedCounterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [displayValue, setDisplayValue] = useState('0')

  // Extract numeric value from string (e.g., "30K" -> 30, "5+" -> 5)
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0
  const suffix = value.replace(/\d/g, '').trim()

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

    const timeout = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const stepValue = numericValue / steps
      let current = 0
      let step = 0

      const interval = setInterval(() => {
        current += stepValue
        step++

        if (step >= steps) {
          setDisplayValue(numericValue.toString())
          clearInterval(interval)
        } else {
          setDisplayValue(Math.floor(current).toString())
        }
      }, duration / steps)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isVisible, numericValue, delay])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20 animate-slideUp"
    >
      <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
        {displayValue}
        <span className="text-2xl ml-1">{suffix}</span>
      </div>
      <p className="text-foreground/70 text-sm sm:text-base font-medium">{label}</p>
    </div>
  )
}
