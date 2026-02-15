'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo with Image - Fixed Path */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="INSAF Logo" 
              style={{
                width: '48px',
                height: '48px',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
              onError={(e) => {
                // লোগো লোড না হলে এই টেক্সট লোগোটি দেখাবে
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Placeholder (যদি ইমেজ না পায় তবেই এটি দেখা যাবে) */}
            <div className="hidden w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
              I
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-black">INSAF</span>
              <span className="text-2xl font-light text-gray-500 ml-1">LIMITED</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">Services</Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">Portfolio</Link>
            <Link href="/blog" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">Blog</Link>
            <Link href="/contact" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}