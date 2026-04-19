'use client'

import { Mail, Phone } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export function Footer() {
  const { contact } = portfolioData
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary/5 border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                {contact.phone}
              </a>
              <p className="flex items-center gap-2 text-foreground/70">
                📍 {contact.location}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Summary', 'Experience', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-foreground/60 text-sm">
          <p>&copy; {currentYear} Muhammad Umair Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
