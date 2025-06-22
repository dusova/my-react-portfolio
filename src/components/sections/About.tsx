'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code2, Palette, Laptop, Rocket } from 'lucide-react'
import { SKILLS } from '@/lib/constants'

const SkillBar = ({ name, level, icon }: { name: string; level: number; icon: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export function About() {
  const aboutPoints = [
    {
      icon: Code2,
      title: 'Front-End Development',
      description: 'React, Next.js, TypeScript ile modern ve performanslı web uygulamaları geliştiriyorum.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Kullanıcı deneyimi odaklı, minimalist ve etkileyici arayüzler tasarlıyorum.'
    },
    {
      icon: Laptop,
      title: 'Responsive Design',
      description: 'Tüm cihazlarda mükemmel görünüm sağlayan responsive ve mobile-first tasarımlar yapıyorum.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'SEO dostu, hızlı yüklenen ve optimize edilmiş web uygulamaları geliştiriyorum.'
    }
  ]

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Hakkımda</h2>
          <p className="section-subtitle mt-4">
            5+ yıllık deneyimimle modern web teknolojileri kullanarak kullanıcı dostu çözümler üretiyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Merhaba! Ben Mustafa Arda, Silivri / İstanbul merkezli bir yazılım geliştirici ve grafik tasarımcıyım.
                5 yılı aşkın süredir teknoloji ve tasarım odaklı projeler geliştiriyorum.
              </p>
              <p>
                Modern web teknolojileri ve tasarım prensiplerini kullanarak, hem estetik hem de fonksiyonel
                çözümler üretmeyi hedefliyorum. Her projede kullanıcı deneyimini ön planda tutarak,
                markaların dijital varlıklarını güçlendiriyorum.
              </p>
            </div>

            {/* About Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {aboutPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                >
                  <point.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{point.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5">
              <Image
                src="/assets/images/about.webp"
                alt="Mustafa Arda Düşova"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Uzmanlık Alanlarım</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">Front-End</h4>
              {SKILLS.frontend.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>

            {/* Backend Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">Back-End</h4>
              {SKILLS.backend.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>

            {/* Tools Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">Araçlar</h4>
              {SKILLS.tools.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}