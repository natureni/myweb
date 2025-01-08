import Navigation from '@/components/navigation'
import Image from 'next/image'

export default function Team() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Full-width background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Team with vintage car"
          fill
          className="object-cover"
          priority
        />
      </div>

      <Navigation />

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-xl mx-6 md:mx-12 lg:mx-24 bg-white/95 backdrop-blur-sm p-12">
          <div className="prose prose-lg">
            <p className="text-xl leading-relaxed mb-8">
              We are a small and closely-knit team that has set out to create fantastic images of architecture and landscapes.
            </p>
            
            <p className="text-xl leading-relaxed mb-8">
              Our goal is to create as much enthusiasm as possible.
            </p>
            
            <p className="text-xl leading-relaxed mb-12">
              Enthusiasm is important because it is the first spark of change.
            </p>

            <p className="text-lg text-gray-600 italic">
              Mats Andersen & Trond Greve Andersen
            </p>
          </div>
        </div>
      </div>

      {/* Additional team images grid */}
      <div className="relative z-10 bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Studio space"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="prose max-w-none">
                <h2 className="text-2xl font-light">Our Studio</h2>
                <p className="text-gray-600">
                  Located in the heart of Bergen, our studio is where imagination meets technical precision.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Work process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="prose max-w-none">
                <h2 className="text-2xl font-light">Our Process</h2>
                <p className="text-gray-600">
                  Every project begins with a conversation and evolves through careful attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

