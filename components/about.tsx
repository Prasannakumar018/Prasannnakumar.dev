'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Dynamic texting state
  const dynamicItems = [
    {
      title: 'Full Stack Development',
      description: 'Building complete applications from frontend to backend with modern architectures',
    },
    {
      title: 'Security Testing',
      description: 'Dynamic testing with Burp Suite and network reconnaissance with Nmap',
    },
    {
      title: 'Code Optimization',
      description: 'Performance tuning and security hardening for production deployments',
    },
    {
      title: 'System Architecture',
      description: 'Designing scalable solutions that balance functionality with security',
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicItems.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [dynamicItems.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Prasanna Kumar, a full-stack developer with a passion for building secure, scalable applications. My journey in tech started with a curiosity about how systems work and how they can be broken—which led me into cybersecurity.
            </p>
            <p>
              With expertise in <span className="text-primary font-semibold">React, Angular, Python, Java, and Spring Boot</span>, I create robust frontend and backend solutions. As a junior pentester, I use <span className="text-primary font-semibold">Burp Suite and Nmap</span> to identify vulnerabilities before they become threats.
            </p>
            <p>
              My philosophy is simple: <span className="text-primary font-semibold">dynamic testing reveals what static analysis misses</span>. Every line of code I write is tested, secured, and optimized for performance.
            </p>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="bg-card border border-border/50 rounded-lg p-8 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-6">What I Do</h3>
            <div className="relative min-h-30">
              {dynamicItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentIndex
                      ? 'opacity-100 translate-y-0'
                      : index < currentIndex
                      ? 'opacity-0 -translate-y-4'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 justify-center mt-6">
              {dynamicItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
