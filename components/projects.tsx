'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  id: number
  title: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  outcome: string
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with secure payment integration and user authentication',
    problem: 'Needed a scalable platform supporting thousands of concurrent users with secure transactions',
    solution: 'Built React frontend with Spring Boot backend, integrated Stripe for payments, and implemented JWT authentication with role-based access control',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Stripe API', 'Docker'],
    outcome: 'Platform handles 10,000+ daily users with 99.9% uptime. Reduced checkout time by 40%.',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Vulnerability Scanner Dashboard',
    description: 'Dynamic security testing tool integrating Burp Suite and Nmap for automated vulnerability detection',
    problem: 'Manual security testing was time-consuming and prone to human error',
    solution: 'Developed Angular dashboard that orchestrates Burp Suite scans and Nmap reconnaissance, displaying real-time vulnerability reports with risk scoring',
    technologies: ['Angular', 'Node.js', 'Burp Suite API', 'Nmap', 'Python'],
    outcome: 'Identified 50+ critical vulnerabilities in production systems. Reduced testing time by 60%.',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Real-Time Monitoring System',
    description: 'Cloud-based monitoring system with WebSocket real-time updates and predictive alerting',
    problem: 'Legacy monitoring system had 5-minute data latency, missing critical issues',
    solution: 'Architected WebSocket-based system using React frontend and Java backend with machine learning anomaly detection',
    technologies: ['React', 'Java', 'WebSocket', 'MongoDB', 'TensorFlow'],
    outcome: 'Reduced detection latency to 500ms. False positives dropped by 85%.',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'API Security Suite',
    description: 'Comprehensive Python-based tool for testing and securing REST APIs against OWASP top 10',
    problem: 'API endpoints exposed to OWASP vulnerabilities without proper testing framework',
    solution: 'Created Python framework automating OWASP testing against REST APIs with detailed reporting and remediation guidance',
    technologies: ['Python', 'Flask', 'Burp Suite', 'SQLAlchemy', 'Pytest'],
    outcome: 'Standardized security testing across 20+ APIs. Prevented 15 critical vulnerabilities in production.',
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-muted-foreground">Real-world solutions combining development excellence with security rigor</p>
      </div>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div
              className="group bg-card border border-border/50 rounded-lg p-8 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">PROBLEM</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">SOLUTION</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-primary mb-3">OUTCOME</h4>
                    <p className="text-sm text-muted-foreground bg-primary/5 border border-primary/20 rounded px-3 py-2">
                      {project.outcome}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.link && (
                      <Button
                        size="sm"
                        className="gap-2"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2 bg-transparent"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
