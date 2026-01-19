'use client'

import { useEffect, useRef, useState } from 'react'

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
  type: 'work' | 'education' | 'milestone'
}

const timeline: TimelineItem[] = [
  {
    year: '2024 - 2025',
    title: 'Junior Pentester',
    company: 'SAP LABS INDIA',
    description: 'Building secure applications and conducting dynamic security testing. Led migration of legacy systems to microservices architecture.',
    type: 'work',
  },
  {
    year: '2024-2025',
    title: 'Full Stack Developer ',
    description: 'Completed advanced penetration testing certification focusing on web application security and dynamic testing methodologies.',
    company: 'SAP LABS INDIA',
    type: 'work',
  },
  {
    year: '2023 - 2024',
    title: 'Information Technology Trainee',
    company: 'CADD prime',
    description: 'Developed React-based interfaces for enterprise applications. Implemented accessibility standards and performance optimizations.',
    type: 'work',
  }
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-primary/20 border-primary/50'
      case 'education':
        return 'bg-accent/20 border-yellow/50'
      case 'milestone':
        return 'bg-green-500/20 border-green-500/50'
      default:
        return 'bg-primary/20 border-primary/50'
    }
  }

  return (
    <div ref={ref} className="scroll-mt-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Timeline</h2>
        <p className="text-lg text-muted-foreground">My journey in development and security through the years</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent" />

        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-16 h-16 rounded-full border-4 border-background flex items-center justify-center ${getTypeColor(item.type)}`}>
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-card border border-border/50 rounded-lg p-6 backdrop-blur-sm hover:border-primary/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm text-primary font-medium">{item.company}</p>
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
