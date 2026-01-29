'use client'

import Link from 'next/link'

const education = [
  
  {
    title: 'B.E Computer Science',
    description: 'Rajalakshmi Institute of Technology, 2020-2024',
    id: 1,
  },
  {
    title: 'M.Tech Software Engineering',
    description: 'Birla Institute of Technology and Science, 2024-2026',
    id: 2,
  },
  // Add more education/certifications as needed
]

export default function EducationTiles() {
  return (
    <div className="w-full py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Education & Certifications</h2>
        <Link href="/education" className="text-primary underline font-medium hover:text-primary/80">
          View All
        </Link>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {education.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="min-w-[320px] max-w-xs bg-background border border-primary rounded-xl shadow-lg flex flex-col items-start p-5"
          >
            <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
            <Link href="/education" className="mt-auto text-sm text-primary underline hover:text-primary/80">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
