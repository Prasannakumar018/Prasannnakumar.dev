'use client'

import { useEffect, useRef, useState } from 'react'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Navigation from '@/components/navigation'
import TestingDashboard from '@/components/testing-dashboard'
import TopBanner from '@/components/top-banner'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TopBanner />
        <section id="hero" ref={(el) => { if (el) sectionsRef.current['hero'] = el }}>
          <Hero />
        </section>

        <section id="about" ref={(el) => { if (el) sectionsRef.current['about'] = el }} className="py-20">
          <About />
        </section>

        <section id="skills" ref={(el) => { if (el) sectionsRef.current['skills'] = el }} className="py-20">
          <Skills />
        </section>

        <section id="projects" ref={(el) => { if (el) sectionsRef.current['projects'] = el }} className="py-20">
          <Projects />
        </section>

        <section id="experience" ref={(el) => { if (el) sectionsRef.current['experience'] = el }} className="py-20">
          <Experience />
        </section>

        <section id="testimonials" ref={(el) => { if (el) sectionsRef.current['testimonials'] = el }} className="py-20">
          <Testimonials />
        </section>

        <section id="contact" ref={(el) => { if (el) sectionsRef.current['contact'] = el }} className="py-20">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-border py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>© 2026 PrasannaKumar. Crafted with <b>code</b> , <b>secured</b> secured with precision.</p>
        </div>
      </footer>

      {/* Dynamic Testing Dashboard */}
      {/* <TestingDashboard /> */}
    </div>
  )
}
