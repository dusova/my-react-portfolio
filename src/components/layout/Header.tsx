'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Code2, Sun, Moon, Github, Linkedin, Instagram } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface HeaderProps {
  currentSection?: string
}

export function Header({ currentSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = savedDarkMode ? JSON.parse(savedDarkMode) : prefersDark

    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }

    // Handle scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode))

    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  if (!mounted) return null

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Code2 className="h-8 w-8 text-accent" />
            </motion.div>
            <span className="font-serif text-xl font-bold md:text-2xl">MAD</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {SITE_CONFIG.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-accent',
                  currentSection === item.href.slice(1) ? 'text-accent' : 'text-gray-700 dark:text-gray-300'
                )}
              >
                {item.title}
                {currentSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-x-0 -bottom-[1.5rem] h-0.5 bg-accent"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Desktop */}
            <div className="hidden items-center space-x-4 md:flex">
              <motion.a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 transition-colors hover:text-accent dark:text-gray-300"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 transition-colors hover:text-accent dark:text-gray-300"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={SITE_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 transition-colors hover:text-accent dark:text-gray-300"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 transition-colors hover:text-accent dark:text-gray-300"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-16 bg-black/50 md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white p-6 shadow-xl dark:bg-gray-900 md:hidden"
            >
              <div className="flex flex-col space-y-4">
                {SITE_CONFIG.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={cn(
                      'text-lg font-medium transition-colors',
                      currentSection === item.href.slice(1) ? 'text-accent' : 'text-gray-700 dark:text-gray-300'
                    )}
                  >
                    {item.title}
                  </Link>
                ))}

                {/* Mobile Social Links */}
                <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={SITE_CONFIG.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-accent dark:text-gray-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={SITE_CONFIG.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-accent dark:text-gray-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={SITE_CONFIG.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-accent dark:text-gray-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}