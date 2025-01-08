import Image from 'next/image'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <div className="fixed inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Winter landscape"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Navigation />
    </div>
  )
}

