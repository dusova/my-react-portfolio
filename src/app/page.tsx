'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { About } from '../components/sections/About'
import { Experience } from '../components/sections/Experience'
import { Education } from '../components/sections/Education'
import { Certificates } from '../components/sections/Certificates'
import { Projects } from '../components/sections/Projects'
import { Blog } from '../components/sections/Blog'
import { Contact } from '../components/sections/Contact'
import { Footer } from '../components/layout/Footer'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'career',
        'education',
        'certificates',
        'projects',
        'blog',
        'contact',
      ]

      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setCurrentSection(current)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header currentSection={currentSection} />

      <Hero />
      <About />
      <Experience />
      <Education />
      <Certificates />
      <Projects />
      <Blog />
      <Contact />

      <Footer />
    </main>
  )
}