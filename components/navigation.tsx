'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="relative z-10">
      <div 
        className={`fixed top-0 left-0 w-40 bg-white p-6 h-screen transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-40'
        }`}
      >
        <Link href="/" className="block mb-8">
          <span className="text-2xl font-bold text-red-700">mir</span>
        </Link>
        <nav className="space-y-4">
          {[
            ['Work', '/work'],
            ['Archive', '/archive'],
            ['Team', '/team'],
            ['Info', '/info'],
          ].map(([title, url]) => (
            <Link 
              key={url}
              href={url} 
              className={`block transition-colors ${
                pathname === url 
                  ? 'text-black font-medium' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>

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
  )
}
