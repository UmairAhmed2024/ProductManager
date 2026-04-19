'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { SummarySection } from '@/components/sections/SummarySection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { StrengthsSection } from '@/components/sections/StrengthsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <StrengthsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
