'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new window.IntersectionObserver(
      ([entry]) => setShowLogo(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? ''
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-full bg-background/80 backdrop-blur-md border border-border/20 shadow-lg mt-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <div
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer flex items-center gap-2 group"
          >
            <img
              src="/avatarphoto.jpeg"
              alt="Avatar"
              className="w-8 h-8 rounded-full object-cover border-2 border-primary shadow"
              style={{ background: 'white' }}
            />
            <span className="font-bold text-lg hidden sm:inline group-hover:text-primary transition-colors">
              Prasanna
            </span>
          </div> */}


          {showLogo && (
            <div
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer flex items-center gap-2 group"
            >
              <img
                src="/avatarphoto.jpeg"
                alt="Avatar"
                className="w-8 h-8 rounded-full object-cover border-2 border-primary shadow"
                style={{ background: 'white' }}
              />
              <span className="font-bold text-lg hidden sm:inline group-hover:text-primary transition-colors">
                Prasanna
              </span>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-1 ${showLogo ? '' : 'flex-1 justify-center w-full'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary/20 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-sm hover:bg-primary/10 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border/20 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2 rounded-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary/20 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
