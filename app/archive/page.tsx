'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Image from 'next/image'

const archiveImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Winter cabins in snow",
    width: 600,
    height: 800,
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=900",
    alt: "Mountain lodges",
    width: 900,
    height: 600,
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Urban buildings",
    width: 600,
    height: 400,
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Communication tower",
    width: 600,
    height: 800,
  },
  {
    id: 5,
    src: "/placeholder.svg?height=500&width=800",
    alt: "Mountain landscape",
    width: 800,
    height: 500,
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Architectural detail",
    width: 800,
    height: 600,
  },
]

export default function Archive() {
  const [columns, setColumns] = useState(3)

  // Responsive column adjustment
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1)
      } else if (window.innerWidth < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  // Distribute images into columns
  const distributeImages = () => {
    const cols = Array.from({ length: columns }, () => [])
    archiveImages.forEach((image, i) => {
      cols[i % columns].push(image)
    })
    return cols
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 px-4 md:px-8 lg:px-12">
        <div className="flex gap-4">
          {distributeImages().map((column, i) => (
            <div key={i} className="flex-1 space-y-4">
              {column.map((image) => (
                <div 
                  key={image.id} 
                  className="relative group cursor-pointer"
                >
                  <div className="relative" style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

