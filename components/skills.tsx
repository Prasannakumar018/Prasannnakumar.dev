'use client'

import { useEffect, useRef, useState } from 'react'

interface SkillCategory {
  title: string
  skills: { name: string; level: number }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Angular', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Java', level: 88 },
      { name: 'Spring Boot', level: 87 },
      { name: 'Python', level: 85 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Security & Testing',
    skills: [
      { name: 'Burp Suite', level: 82 },
      { name: 'Nmap', level: 80 },
      { name: 'OWASP Testing', level: 85 },
      { name: 'Penetration Testing', level: 78 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 93 },
      { name: 'Docker', level: 80 },
      { name: 'SQL & Databases', level: 88 },
      { name: 'Linux', level: 85 },
    ],
  },
]

export default function Skills() {
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

  return (
    <div ref={ref} className="scroll-mt-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-lg text-muted-foreground">Comprehensive toolkit spanning full-stack development and security testing</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIdx) => (
          <div
            key={category.title}
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${categoryIdx * 100}ms` }}
          >
            <div className="bg-card border border-border/50 rounded-lg p-6 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ${
                          isVisible ? 'w-full' : 'w-0'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Technologies */}
      <div className={`mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-2xl font-bold mb-6">Featured Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {[
            'React',
            'Angular',
            'Spring Boot',
            'TypeScript',
            'Python',
            'Java',
            'Burp Suite',
            'Nmap',
            'Docker',
            'PostgreSQL',
            'Git',
            'Linux',
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-primary/10 border border-primary/50 text-primary text-sm font-medium hover:bg-primary/20 transition-colors duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
