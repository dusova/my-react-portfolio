'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork, Eye, Filter } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const projects = [
  {
    id: '1',
    title: 'KLU360 - Virtual Tour',
    description: 'Kırklareli Üniversitesi için geliştirdiğim 360 derece sanal tur web uygulaması. Panoramik görüntüler ve interaktif özelliklerle kampüs deneyimini dijital ortama taşıdım.',
    image: '/assets/images/projects/klu360.jpg',
    imageAlt: 'KLU360 Virtual Tour ekran görüntüsü',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Three.js', 'Pannellum'],
    githubUrl: 'https://github.com/dusova/klu360',
    liveUrl: 'https://virtual.klu.edu.tr',
    featured: true,
    category: 'fullstack' as const,
    metrics: {
      stars: 45,
      forks: 12,
      watchers: 8
    }
  },
  {
    id: '2',
    title: 'Spotify Recently Played',
    description: 'Spotify API kullanarak kullanıcıların son dinlediği şarkıları gösteren ve sosyal medyada paylaşabilen basit bir web uygulaması.',
    image: '/assets/images/projects/spotify-recent.jpg',
    imageAlt: 'Spotify Recently Played uygulaması',
    tags: ['TypeScript', 'Next.js', 'Spotify API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/dusova/spotify-recently-played',
    liveUrl: 'https://spotify-recent.mdusova.com',
    featured: true,
    category: 'frontend' as const,
    metrics: {
      stars: 28,
      forks: 7,
      watchers: 5
    }
  },
  {
    id: '3',
    title: 'Modern Developer Portfolio',
    description: 'Bu portföy sitesi! Next.js 14, TypeScript ve Tailwind CSS ile geliştirildi. Dark mode, responsive tasarım ve animasyonlar içeriyor.',
    image: '/assets/images/projects/portfolio.jpg',
    imageAlt: 'Modern Developer Portfolio',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/dusova/mdusova-portfolio',
    liveUrl: 'https://mdusova.com',
    featured: true,
    category: 'frontend' as const,
    metrics: {
      stars: 15,
      forks: 3,
      watchers: 2
    }
  },
  {
    id: '4',
    title: 'E-Ticaret Dashboard',
    description: 'React ve Redux kullanarak geliştirilmiş kapsamlı e-ticaret yönetim paneli. Satış raporları, ürün yönetimi ve müşteri analizi özellikleri.',
    image: '/assets/images/projects/ecommerce-dashboard.jpg',
    imageAlt: 'E-Ticaret Dashboard',
    tags: ['React', 'Redux', 'Material-UI', 'REST API'],
    githubUrl: 'https://github.com/dusova/ecommerce-dashboard',
    category: 'frontend' as const,
    metrics: {
      stars: 32,
      forks: 10,
      watchers: 6
    }
  },
  {
    id: '5',
    title: 'AI Blog Generator',
    description: 'OpenAI API kullanarak blog yazıları üreten ve SEO optimizasyonu yapan bir araç. Markdown export ve sosyal medya paylaşım özellikleri içeriyor.',
    image: '/assets/images/projects/ai-blog.jpg',
    imageAlt: 'AI Blog Generator',
    tags: ['Next.js', 'OpenAI API', 'MDX', 'TailwindCSS'],
    githubUrl: 'https://github.com/dusova/ai-blog-generator',
    category: 'fullstack' as const,
    metrics: {
      stars: 48,
      forks: 15,
      watchers: 9
    }
  },
  {
    id: '6',
    title: 'Weather App',
    description: 'OpenWeatherMap API kullanılarak yapılmış modern hava durumu uygulaması. 5 günlük hava tahmini ve konum tabanlı bildirimler.',
    image: '/assets/images/projects/weather-app.jpg',
    imageAlt: 'Weather App',
    tags: ['React', 'OpenWeatherMap API', 'Charts.js', 'PWA'],
    githubUrl: 'https://github.com/dusova/weather-app',
    liveUrl: 'https://weather.mdusova.com',
    category: 'frontend' as const,
    metrics: {
      stars: 18,
      forks: 5,
      watchers: 3
    }
  },
  {
    id: '7',
    title: 'Task Management System',
    description: 'Ekip çalışması için geliştirilmiş görev yönetim sistemi. Scrum/Agile metodolojileri destekli, gerçek zamanlı güncellemeler.',
    image: '/assets/images/projects/task-management.jpg',
    imageAlt: 'Task Management System',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/dusova/task-management',
    category: 'fullstack' as const,
    metrics: {
      stars: 22,
      forks: 8,
      watchers: 4
    }
  },
  {
    id: '8',
    title: 'Social Media Scheduler',
    description: 'Çoklu sosyal medya platformlarına post zamanlama özelliği sunan uygulama. Instagram, Twitter ve Facebook API entegrasyonu.',
    image: '/assets/images/projects/social-scheduler.jpg',
    imageAlt: 'Social Media Scheduler',
    tags: ['Python', 'Django', 'Celery', 'Redis'],
    githubUrl: 'https://github.com/dusova/social-scheduler',
    category: 'fullstack' as const,
    metrics: {
      stars: 35,
      forks: 12,
      watchers: 7
    }
  }
]

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'ui-ux', label: 'UI/UX' },
  { id: 'mobile', label: 'Mobile' }
]

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
        project.featured ? 'border-2 border-accent' : ''
      }`}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            {project.githubUrl && (
              <Button
                asChild
                size="sm"
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/20"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                asChild
                size="sm"
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/20"
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Live
                </a>
              </Button>
            )}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
            Öne Çıkan
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        {project.metrics && (
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{project.metrics.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{project.metrics.forks}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{project.metrics.watchers}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projects.filter(
    project => selectedCategory === 'all' || project.category === selectedCategory
  )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projelerim</h2>
          <p className="section-subtitle mt-4">
            Geliştirdiğim açık kaynak projeleri ve uygulamaları keşfedin.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-accent text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button onClick={() => setShowAll(true)} size="lg">
              Daha Fazla Proje Gör ({filteredProjects.length - 6} daha)
            </Button>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Tüm projelerimi GitHub&apos;da inceleyebilirsiniz
            </p>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/dusova" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub Profilimi Ziyaret Et
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}