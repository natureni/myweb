import Navigation from '@/components/navigation'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "Dhermi Hotel",
    category: "Architecture",
    architect: "Ricardo Bofill Taller de Arquitectura",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2023"
  },
  {
    id: 2,
    title: "Urban Dreams",
    category: "Architecture",
    architect: "Studio Architects",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2023"
  },
  {
    id: 3,
    title: "Natural Harmony",
    category: "Landscape",
    architect: "Green Design Co",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2022"
  }
]

export default function Work() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              href={`/work/${project.id}`} 
              key={project.id}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h2 className="text-lg font-medium">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.architect}</p>
                <p className="text-sm text-gray-400">{project.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

