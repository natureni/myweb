import Navigation from '@/components/navigation'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Info() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Full-width background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Studio interior"
          fill
          className="object-cover"
          priority
        />
      </div>

      <Navigation />

      {/* Content sections */}
      <div className="relative z-10">
        {/* Hero section with main text */}
        <div className="min-h-screen flex items-center">
          <div className="max-w-xl mx-6 md:mx-12 lg:mx-24 bg-white/95 backdrop-blur-sm p-12">
            <div className="prose prose-lg">
              <h1 className="text-3xl font-light mb-8">About MIR</h1>
              <p className="text-xl leading-relaxed mb-8">
                We are a visualization studio specializing in architectural and landscape imagery. 
                Our work is driven by the pursuit of beauty in the built and natural environment.
              </p>
              <p className="text-xl leading-relaxed">
                Through careful attention to detail and a deep understanding of light, materials, 
                and atmosphere, we create images that capture the essence of architectural vision.
              </p>
            </div>
          </div>
        </div>

        {/* Additional info sections */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {/* Contact section */}
              <div className="space-y-12">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-light">Contact</h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      hello@example.com
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      +47 123 45 678
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Bergen, Norway
                    </p>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h2 className="text-2xl font-light">Awards</h2>
                  <ul className="list-none p-0 space-y-4 text-gray-600">
                    <li>CGarchitect Architectural 3D Award, 2023</li>
                    <li>World Architecture Festival Visualization Prize, 2022</li>
                    <li>American Architecture Prize, Rendering of the Year, 2021</li>
                  </ul>
                </div>
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-2 gap-8">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Studio detail 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Studio detail 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Studio detail 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Studio detail 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

