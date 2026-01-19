'use client'

const education = [
  {
    title: 'B.Tech Computer Science',
    description: 'XYZ University, 2018-2022',
    image: '/placeholder-logo.png',
    id: 1,
  },
  {
    title: 'Certified Ethical Hacker',
    description: 'EC-Council, 2023',
    image: '/placeholder-logo.png',
    id: 2,
  },
  // Add more education/certifications as needed
]

export default function EducationPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8">Education & Certifications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {education.map((item) => (
          <div
            key={item.id}
            className="bg-background border border-primary rounded-xl shadow-lg flex flex-col items-start p-6"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 rounded-lg mb-4 border border-border object-cover bg-white"
            />
            <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
