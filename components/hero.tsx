'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import InteractiveShell from './interactive-shell'
import TypingEffect from './typing-effect'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [showShell, setShowShell] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`') setShowShell((prev) => !prev)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-max flex flex-col justify-center items-center pt-32 pb-10 text-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-3 inline-block">
          <div className="px-4 py-3 rounded-full border border-primary/50 bg-primary/10 text-primary">
            <span
              className="text-sm font-medium cursor-pointer select-none"
              onClick={() => scrollToSection('contact')}
            >
              <span className="inline-block animate-wave origin-bottom-left" style={{ display: 'inline-block' }}>👋</span> (tracert me)
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-12">
          {/* Left side - Avatar Video */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-linear-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-3xl animate-pulse" />
              <video
                autoPlay
                loop
                muted
                src="/wave_avatar.mp4"
                className="relative right-40 w-full h-full rounded-full object-cover border-4 border-primary/50 shadow-2xl animate-float"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col justify-start">
            <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight text-left">
              I'm PrasannaKumar,
            </h1>
            <h1 className="text-5xl md:text-4xl font-bold mb-6 leading-tight text-left">
              a&nbsp;
              <TypingEffect 
                texts={[
                  'Full Stack Developer',
                  'Security Researcher',
                  'Penetration Tester',
                  'Application Architect'
                ]}
                speed={100}
                deleteSpeed={50}
                pauseDuration={2000}
                className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary"
              />
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-left">
              I build secure, scalable applications with React, Angular, and Spring Boot. As a junior pentester, I ensure code integrity with Burp Suite and network analysis via Nmap. Dynamic testing is my philosophy.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="px-8 h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="px-8 h-12 text-base font-semibold border-primary/50 hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-12 mt-16 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projects Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years in Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Security Focused</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Shell */}
      {showShell && (
        <div className="w-full mt-20">
          <InteractiveShell />
        </div>
      )}

      {/* Scroll indicator */}
      <div className="mt-12 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary/50 mx-auto" />
      </div>

      {/* Interactive Shell Popup Button */}
      <button
        type="button"
        className="fixed bottom-6 right-6 z-40 bg-background/90 border border-primary rounded-xl px-5 py-3 shadow-lg text-base text-primary font-semibold hover:bg-primary/10 transition-all"
        onClick={() => setShowShell(true)}
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)' }}
      >
       Click <span className="font-mono">~</span> for Interactive Shell
      </button>

      {/* Interactive Shell Modal */}
      {showShell && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-background rounded-2xl shadow-2xl p-0 max-w-2xl w-full relative border border-primary">
            <InteractiveShell />
            <button
              className="absolute top-2 right-2 text-2xl text-muted-foreground hover:text-primary bg-background rounded-full w-10 h-10 flex items-center justify-center border border-border"
              onClick={() => setShowShell(false)}
              aria-label="Close"
              style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
