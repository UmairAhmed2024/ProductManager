'use client'

import { ArrowRight } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export function HeroSection() {
  const { hero } = portfolioData

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-slideUp">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-lg tracking-wide">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {hero.name}
            </h1>
            <p className="text-2xl sm:text-3xl text-foreground/80 font-light">
              {hero.title}
            </p>
          </div>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {hero.tagline}
          </p>

          <div className="flex justify-center pt-8">
            <a
              href="#experience"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
