'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export function ContactSection() {
  const { contact } = portfolioData

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-foreground/70">
            I&apos;m always open to new opportunities and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-lg border border-border p-8 text-center hover:border-primary/50 transition-all duration-300 animate-slideUp">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <a
              href={`mailto:${contact.email}`}
              className="text-foreground/70 hover:text-primary transition-colors break-all"
            >
              {contact.email}
            </a>
          </div>

          <div className="bg-card rounded-lg border border-border p-8 text-center hover:border-primary/50 transition-all duration-300 animate-slideUp" style={{ animationDelay: '100ms' }}>
            <div className="flex justify-center mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <a
              href={`tel:${contact.phone}`}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              {contact.phone}
            </a>
          </div>

          <div className="bg-card rounded-lg border border-border p-8 text-center hover:border-primary/50 transition-all duration-300 animate-slideUp" style={{ animationDelay: '200ms' }}>
            <div className="flex justify-center mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-foreground/70">{contact.location}</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-foreground/60">
            I typically respond to inquiries within 24-48 hours. Feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  )
}
