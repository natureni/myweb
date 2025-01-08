'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Navigation from '@/components/navigation'

// Simulated project data
const projects = {
  '1': {
    title: "Dhermi Hotel",
    architect: "Ricardo Bofill Taller de Arquitectura",
    website: "ricardobofill.com",
    images: [
      {
        url: "/placeholder.svg?height=1080&width=1920",
        alt: "Coastal view with olive trees"
      },
      {
        url: "/placeholder.svg?height=1080&width=1920",
        alt: "Hotel exterior"
      },
      {
        url: "/placeholder.svg?height=1080&width=1920",
        alt: "Pool area"
      }
    ]
  },
  '2': {
    title: "Urban Dreams",
    architect: "Studio Architects",
    website: "studioarchitects.com",
    images: [
      {
        url: "/placeholder.svg?height=1080&width=1920",
        alt: "City skyline"
      }
    ]
  },
  '3': {
    title: "Natural Harmony",
    architect: "Green Design Co",
    website: "greendesign.com",
    images: [
      {
        url: "/placeholder.svg?height=1080&width=1920",
        alt: "Forest landscape"
      }
    ]
  }
}

export default function ProjectDetail() {
  const params = useParams()
  const project = projects[params.id as keyof typeof projects]

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Full-screen image slider */}
      <div className="fixed inset-0 z-0">
        <Image
          src={project.images[0].url}
          alt={project.images[0].alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Project info overlay */}
      <div className="fixed bottom-0 left-0 z-10 p-6 md:p-12">
        <div className="bg-white/90 backdrop-blur-sm p-6 max-w-md">
          <h1 className="text-xl font-medium mb-2">{project.title}</h1>
          <p className="text-gray-600 mb-4">{project.architect}</p>
          <a 
            href={`https://${project.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            {project.website}
          </a>
        </div>
      </div>

      {/* Image navigation dots */}
      <div className="fixed bottom-6 right-6 z-10 flex gap-2">
        {project.images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === 0 ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

