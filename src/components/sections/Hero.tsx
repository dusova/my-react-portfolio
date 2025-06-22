'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Instagram } from 'lucide-react'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

interface TypeWriterProps {
  words: string[]
  speed?: number
}

const TypeWriter = ({ words, speed = 100 }: TypeWriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentCharIndex < currentWord.length) {
          setDisplayText(prev => prev + currentWord[currentCharIndex])
          setCurrentCharIndex(prev => prev + 1)
        } else {
          // Word completed, wait before deleting
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting
        if (currentCharIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1))
          setCurrentCharIndex(prev => prev - 1)
        } else {
          // Word deleted, move to next word
          setIsDeleting(false)
          setCurrentWordIndex(prev => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentCharIndex, currentWordIndex, isDeleting, speed, words])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const FloatingIcons: React.FC = () => {
  // Spotify icon component
  const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )

  const icons = [
    { Icon: Github, delay: 0, x: [0, 10, 0], y: [0, -10, 0] },
    { Icon: Linkedin, delay: 0.2, x: [0, -10, 0], y: [0, 10, 0] },
    { Icon: Instagram, delay: 0.4, x: [0, 10, 0], y: [0, -10, 0] },
    { Icon: SpotifyIcon, delay: 0.6, x: [0, -10, 0], y: [0, 10, 0] },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.8 }}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <motion.div
            animate={{
              x,
              y,
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 2,
              ease: 'easeInOut',
            }}
          >
            <Icon className="h-12 w-12" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export function Hero() {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Spotify icon'unu SVG olarak tanımla
  const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
    spotify: SpotifyIcon
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" id="hero">
      <FloatingIcons />

      <div className="container relative z-10 mx-auto px-4 py-32 md:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm uppercase tracking-wider text-accent md:text-base"
            >
              Bilgisayar Programcılığı Öğrencisi | Yazılım Geliştirici & Grafik Tasarımcı
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
            >
              Mustafa Arda Düşova
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-300 md:text-xl"
            >
              <span>Ben bir </span>
              <span className="text-accent font-medium">
                <TypeWriter
                  words={[
                    'UI/UX Tasarımcısıyım',
                    'Front-End Geliştiriciyim',
                    'Full Stack Geliştiriciyim',
                    'Grafik Tasarımcıyım',
                  ]}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-gray-600 dark:text-gray-300"
            >
              Modern ve kullanıcı dostu web siteleri ve uygulamalar geliştiriyorum.
              Silivri&apos;de yaşıyorum ve 5+ yıldır yazılım ve tasarım alanlarında çalışıyorum.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="group"
              >
                <Link href="#projects">
                  <span>Projelerimi Gör</span>
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group"
              >
                <a href="/assets/files/mdusovaCV.pdf" download>
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  <span>CV İndir</span>
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-center space-x-4 pt-4"
            >
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 transition-colors hover:text-accent dark:text-gray-400"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto h-[500px] w-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 p-1 lg:h-[600px] lg:w-[500px]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent backdrop-blur-sm" />
              <Image
                src="/assets/images/hero.webp"
                alt="Mustafa Arda Düşova"
                fill
                className="rounded-2xl object-cover object-center"
                priority
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute left-0 top-20 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm dark:bg-gray-800/90"
            >
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Yıl Deneyim</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="absolute bottom-32 right-0 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm dark:bg-gray-800/90"
            >
              <div className="text-2xl font-bold text-accent">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Tamamlanan Proje</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={handleScroll}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400"
          >
            <span className="text-sm">Aşağı Kaydır</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}