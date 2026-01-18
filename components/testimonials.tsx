'use client'

import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  company: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Prasanna identified critical vulnerabilities in our API that we completely missed. His dynamic testing approach saved us from a potential breach. Exceptional work.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'FinTech Startup',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The full-stack solutions he built have scaled beautifully. Code quality is outstanding and security is baked in from day one. Highly recommended.',
    author: 'Mike Johnson',
    role: 'Engineering Manager',
    company: 'Enterprise Solutions',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'His combination of development and security expertise is rare. He doesn\'t just write code that works—he writes code that\'s secure and maintainable.',
    author: 'Alex Rivera',
    role: 'Security Lead',
    company: 'Tech Corp',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'Working with Prasanna on the security audit was smooth and professional. His reports were clear and his remediation recommendations were practical.',
    author: 'Elena Volkova',
    role: 'Compliance Officer',
    company: 'Healthcare Tech',
    rating: 5,
  },
]

export default function Testimonials() {
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What Others Say</h2>
        <p className="text-lg text-muted-foreground">Testimonials from clients and colleagues</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, idx) => (
          <div
            key={testimonial.id}
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="bg-card border border-border/50 rounded-lg p-6 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 h-full flex flex-col">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
