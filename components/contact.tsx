'use client'

import React from "react"

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <div ref={ref} className="scroll-mt-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to discuss security testing? I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-card border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-card border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-card border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              disabled={formStatus === 'loading'}
              className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
            >
              {formStatus === 'loading' && '⏳ Sending...'}
              {formStatus === 'idle' && '📧 Send Message'}
              {formStatus === 'success' && '✅ Message Sent!'}
              {formStatus === 'error' && '❌ Failed to Send'}
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="space-y-8">
            {/* Direct Contact */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:prasanna@example.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      prasanna@example.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Me</h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all group"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all group"
                >
                  <Twitter className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all group"
                >
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Portfolio</span>
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <p className="text-foreground mb-3">
                Available for full-time roles, freelance projects, and security consulting.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
