'use client'

import Link from 'next/link'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built with Next.js and Tailwind CSS.',
    image: '/placeholder-logo.png',
    id: 1,
  },
  {
    title: 'E-Commerce App',
    description: 'A scalable e-commerce platform with secure payments.',
    image: '/placeholder-logo.png',
    id: 2,
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat app using WebSockets and Node.js.',
    image: '/placeholder-logo.png',
    id: 3,
  },
  // Add more projects as needed
]

export default function ProjectTiles() {
  return (
    <div className="w-full py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Projects</h2>
        <Link href="/projects" className="text-primary underline font-medium hover:text-primary/80">
          View All
        </Link>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {projects.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="min-w-[320px] max-w-xs bg-background border border-primary rounded-xl shadow-lg flex flex-col items-start p-20"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-16 h-16 rounded-lg mb-4 border border-border object-cover bg-white"
            />
            <h3 className="text-lg font-bold text-primary mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
            <Link href="/projects" className="mt-auto text-sm text-primary underline hover:text-primary/80">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
