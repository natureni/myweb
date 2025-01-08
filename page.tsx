'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Full-screen background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Winter landscape"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation */}
      <div className="relative z-10">
        <div 
          className={`fixed top-0 left-0 w-40 bg-white p-6 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-40'
          }`}
        >
          <Link href="/" className="block mb-8">
            <span className="text-2xl font-bold text-red-700">mir</span>
          </Link>
          <nav className="space-y-4">
            <Link 
              href="/work" 
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Work
            </Link>
            <Link 
              href="/archive" 
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Archive
            </Link>
            <Link 
              href="/team" 
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Team
            </Link>
            <Link 
              href="/info" 
              className="block text-gray-600 hover:text-black transition-colors"
            >
              Info
            </Link>
          </nav>
        </div>

        {/* Menu toggle button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-6 left-6 z-20 w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-white group-hover:bg-gray-200 transition-colors"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-0.5 bg-white group-hover:bg-gray-200 transition-colors"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-white group-hover:bg-gray-200 transition-colors"
          />
        </button>
      </div>
    </div>
  )
}

