'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Heart, Code2, ArrowUp } from 'lucide-react'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerSections = {
    navigation: [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Hakkımda', href: '#about' },
      { label: 'Kariyerim', href: '#career' },
      { label: 'Eğitimim', href: '#education' },
      { label: 'Sertifikalar', href: '#certificates' },
    ],
    projects: [
      { label: 'Projelerim', href: '#projects' },
      { label: 'GitHub', href: SITE_CONFIG.links.github },
      { label: 'Blog', href: '#blog' },
      { label: 'CV İndir', href: '/assets/files/mdusovaCV.pdf' },
    ],
    connect: [
      { label: 'İletişim', href: '#contact' },
      { label: 'LinkedIn', href: SITE_CONFIG.links.linkedin },
      { label: 'Instagram', href: SITE_CONFIG.links.instagram },
      { label: 'E-posta', href: `mailto:${SITE_CONFIG.links.email}` },
    ]
  }

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
  }

  const socialLinks = SOCIAL_LINKS.map(link => ({
    icon: socialIcons[link.icon as keyof typeof socialIcons],
    href: link.href,
    label: link.name
  }))

  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center z-40 transition-colors hover:bg-accent/90"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </motion.button>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Code2 className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold font-serif">Mustafa Arda Düşova</span>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed">
              UI/UX tasarımcısı ve front-end geliştirici olarak modern, kullanıcı dostu
              dijital çözümler üretiyorum. 5+ yıllık deneyimimle markalarınızın dijital
              varlığını güçlendiriyorum.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              {footerSections.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 py-1"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects & Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Kaynak ve Projeler</h3>
            <ul className="space-y-2">
              {footerSections.projects.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 py-1"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Blog Güncellemeleri</h3>
            <p className="text-gray-400 text-sm mb-4">
              Yeni yazılarımdan haberdar olmak için e-posta adresinizi paylaşın.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Mustafa Arda Düşova.</span>
              <span>Tüm hakları saklıdır.</span>
            </div>

            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span>in Istanbul</span>
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Kullanım Koşulları
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Site Haritası
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
    </footer>
  )
}

export { Footer }