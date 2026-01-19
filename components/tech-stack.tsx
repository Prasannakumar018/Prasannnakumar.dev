'use client'

import Image from 'next/image'

const techs = [
  { name: 'React', logo: '/icon-light-32x32.png' },
  { name: 'Next.js', logo: '/icon-dark-32x32.png' },
  { name: 'TypeScript', logo: '/icon.svg' },
  { name: 'Tailwind', logo: '/placeholder-logo.png' },
  { name: 'Node.js', logo: '/placeholder-logo.svg' },
  // Add more techs and their logo paths as needed
]

export default function TechStack() {
  return (
    <div className="w-full overflow-hidden py-8 bg-background">
      <div className="relative w-full">
        <div className="flex animate-marquee gap-8">
          {techs.concat(techs).map((tech, idx) => (
            <div
              key={tech.name + idx}
              className="tech-tile flex items-center gap-4 px-6 py-3 rounded-xl bg-background shadow-lg border border-primary min-w-[180px] max-w-xs"
              style={{ minHeight: 64 }}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={40}
                height={40}
                className="rounded-full bg-primary/10 border border-primary"
              />
              <span className="text-lg font-bold text-primary">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee:has(.tech-tile:hover) {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  )
}
