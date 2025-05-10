'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ChevronRight, BookOpen, Tag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const blogPosts = [
  {
    id: '1',
    title: 'Next.js 14 ile Başlangıç: App Router ve Server Components',
    excerpt: 'Next.js 14\'un getirdiği yenilikleri ve App Router sistemini detaylı bir şekilde inceliyoruz...',
    content: '',
    coverImage: '/assets/images/blog/nextjs-14.jpg',
    author: {
      name: 'Mustafa Arda Düşova',
      avatar: '/assets/images/avatar.jpg'
    },
    publishedAt: '2025-04-15T10:00:00Z',
    updatedAt: '2025-04-15T10:00:00Z',
    tags: ['Next.js', 'React', 'Web Development'],
    readTime: '8 dakika',
    featured: true,
    category: 'Web Development'
  },
  {
    id: '2',
    title: 'TypeScript ile Güvenli API Geliştirme',
    excerpt: 'TypeScript kullanarak tip güvenli API\'ler geliştirmenin püf noktaları ve en iyi uygulamalar...',
    content: '',
    coverImage: '/assets/images/blog/typescript-api.jpg',
    author: {
      name: 'Mustafa Arda Düşova',
      avatar: '/assets/images/avatar.jpg'
    },
    publishedAt: '2025-04-10T14:30:00Z',
    tags: ['TypeScript', 'API', 'Node.js'],
    readTime: '12 dakika',
    featured: true,
    category: 'Backend'
  },
  {
    id: '3',
    title: 'Tailwind CSS: Utility-First Yaklaşımın Gücü',
    excerpt: 'Tailwind CSS\'in utility-first yaklaşımını neden tercih ettiğimi ve verimli kullanım teknikleri...',
    content: '',
    coverImage: '/assets/images/blog/tailwind-css.jpg',
    author: {
      name: 'Mustafa Arda Düşova',
      avatar: '/assets/images/avatar.jpg'
    },
    publishedAt: '2025-04-05T09:15:00Z',
    tags: ['Tailwind CSS', 'CSS', 'UI Design'],
    readTime: '6 dakika',
    category: 'Frontend'
  },
  {
    id: '4',
    title: 'React Performance: Memoization ve Code Splitting',
    excerpt: 'React uygulamalarının performansını artırmak için kullanabileceğiniz teknikler ve en iyi uygulamalar...',
    content: '',
    coverImage: '/assets/images/blog/react-performance.jpg',
    author: {
      name: 'Mustafa Arda Düşova',
      avatar: '/assets/images/avatar.jpg'
    },
    publishedAt: '2025-03-28T16:45:00Z',
    tags: ['React', 'Performance', 'JavaScript'],
    readTime: '10 dakika',
    category: 'Frontend'
  },
  {
    id: '5',
    title: 'Modern Web Tasarımda Dark Mode Implementasyonu',
    excerpt: 'Kullanıcı dostu dark mode özelliğini uygulamalarınıza nasıl entegre edebileceğinizi öğrenin...',
    content: '',
    coverImage: '/assets/images/blog/dark-mode.jpg',
    author: {
      name: 'Mustafa Arda Düşova',
      avatar: '/assets/images/avatar.jpg'
    },
    publishedAt: '2025-03-20T11:20:00Z',
    tags: ['UI Design', 'CSS', 'User Experience'],
    readTime: '7 dakika',
    category: 'UI/UX'
  },
  {
    id: '6',
    title: 'GraphQL vs REST: Hangi API Mimarisini Seçmeli?',
    excerpt: 'Modern web uygulamaları için GraphQL ve REST API arasında doğru seçimi yapmanızı sağlayacak karşılaştırma...',
    content: '',
    coverImage: '/assets/images/blog/graphql-rest.jpg',
    author: {
      name: 'Mustafa Arda Düşova',
      avatar: '/assets/images/avatar.jpg'
    },
    publishedAt: '2025-03-12T13:00:00Z',
    tags: ['GraphQL', 'REST', 'API', 'Backend'],
    readTime: '15 dakika',
    category: 'Architecture'
  }
]

const BlogCard = ({ post, featured = false }: { post: typeof blogPosts[0], featured?: boolean }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
        featured ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      <Link href={`/blog/${post.id}`}>
        <div className={`relative ${featured ? 'h-64 lg:h-96' : 'h-48'} overflow-hidden`}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {post.featured && (
            <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
              Öne Çıkan
            </div>
          )}
        </div>
      </Link>

      <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time>{new Date(post.publishedAt).toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link href={`/blog/${post.id}`}>
          <h3 className={`font-bold text-gray-900 dark:text-white mb-3 hover:text-accent transition-colors ${
            featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          }`}>
            {post.title}
          </h3>
        </Link>

        <p className={`text-gray-600 dark:text-gray-400 mb-4 ${
          featured ? 'text-base lg:text-lg' : 'text-sm'
        } line-clamp-3`}>
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm font-medium"
        >
          Devamını Oku
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </motion.article>
  )
}

export function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const otherPosts = blogPosts.filter(post => !post.featured).slice(0, 4)

  return (
    <section id="blog" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle mt-4">
            Web geliştirme, tasarım ve teknoloji hakkında yazılarım.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-max">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} featured={true} />
          ))}
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/blog">
              Tüm Yazıları Gör
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-center mb-8">Kategoriler</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from(new Set(blogPosts.map(post => post.category))).map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-accent hover:text-white transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}