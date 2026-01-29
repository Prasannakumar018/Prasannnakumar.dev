'use client'

const education = [
  {
    title: 'B.E Computer Science',
    description: 'Rajalakshmi Institute of Technology, 2020-2024',
    id: 1,
  },
  {
    title: 'M.Tech Software Engineering',
    description: 'Birla Institute of Technology and Science, 2024-2026',
    id: 1,
  },
  
  // Add more education/certifications as needed
]
const Certifications = [
 {
    title: 'Certified Ethical Hacker',
    description: 'EC-Council, 2023',
    id: 2,
  },
]

export default function EducationPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Education </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {education.map((item) => (
          <div
            key={item.id}
            className="bg-background border border-primary rounded-xl shadow-lg flex flex-col items-start p-6"
          >
            <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
          </div>
        ))}
      </div>
     
      <h1 className="text-3xl font-bold text-primary mb-4 py-4">Certifications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Certifications.map((item) => (
          <div
            key={item.id}
            className="bg-background border border-primary rounded-xl shadow-lg flex flex-col items-start p-6"
          >
            <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
