'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Building2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const certificates = [
  {
    id: '1',
    title: 'ChatGPT ve Yapay Zeka ile Sosyal Medya Pazarlama Uzmanlığı',
    issuer: 'Udemy',
    issueDate: 'Nisan 2025',
    credentialId: 'UC-cf370684-1b84-4149-a938-e332da64d5a6',
    credentialUrl: 'https://www.udemy.com/certificate/UC-cf370684-1b84-4149-a938-e332da64d5a6/',
    image: '/assets/images/certificates/udemy-1.jpg',
    description: 'Yapay zeka teknolojileri kullanarak sosyal medya pazarlama stratejileri geliştirme.',
    skills: ['ChatGPT', 'Yapay Zeka', 'Sosyal Medya Pazarlama', 'İçerik Üretimi'],
    featured: true
  },
  {
    id: '2',
    title: 'SEO + Google Ads Eğitimi / İkili Dijital Pazarlama Eğitimi',
    issuer: 'Udemy',
    issueDate: 'Nisan 2025',
    credentialId: 'UC-1efed793-d3bc-4153-b631-73cc422dbab0',
    credentialUrl: 'https://www.udemy.com/certificate/UC-1efed793-d3bc-4153-b631-73cc422dbab0/',
    description: 'SEO ve Google Ads konularında kapsamlı eğitim.',
    skills: ['SEO', 'Google Ads', 'Dijital Pazarlama', 'SEM'],
    featured: true
  },
  {
    id: '3',
    title: 'CSS',
    issuer: 'BTK Akademi',
    issueDate: 'Mart 2025',
    credentialId: 'ZA1UMV2kK1',
    credentialUrl: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=ZA1UMV2kK1',
    description: 'CSS temellerinden ileri seviye konulara kadar kapsamlı eğitim.',
    skills: ['CSS', 'Responsive Design', 'Flexbox', 'Grid']
  },
  {
    id: '4',
    title: 'Grafik Tasarıma Giriş',
    issuer: 'BTK Akademi',
    issueDate: 'Mart 2025',
    credentialId: '9Xrtqaz8xl',
    credentialUrl: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=9Xrtqaz8xl',
    description: 'Grafik tasarım prensipleri ve temel tasarım araçları kullanımı.',
    skills: ['Grafik Tasarım', 'Tasarım Prensipleri', 'Adobe Photoshop']
  },
  {
    id: '5',
    title: 'HTML5 ile Web Geliştirme',
    issuer: 'BTK Akademi',
    issueDate: 'Mart 2025',
    credentialId: 'yjahJwl2aV',
    credentialUrl: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=yjahJwl2aV',
    description: 'Modern HTML5 standardları ve semantik web yapısı.',
    skills: ['HTML5', 'Semantic HTML', 'Web Accessibility']
  },
  {
    id: '6',
    title: 'JAVA ile Programlamaya Giriş',
    issuer: 'BTK Akademi',
    issueDate: 'Mart 2025',
    credentialId: 'WJ1SMrO4Le',
    credentialUrl: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=WJ1SMrO4Le',
    description: 'Java programlama dili temellerini öğrenme.',
    skills: ['Java', 'OOP', 'Backend Development']
  },
  {
    id: '7',
    title: 'Sosyal Medya Uzmanlığına Giriş',
    issuer: 'BTK Akademi',
    issueDate: 'Mart 2025',
    credentialId: 'D2xh10ny42',
    credentialUrl: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=D2xh10ny42',
    description: 'Sosyal medya platform yönetimi ve strateji geliştirme.',
    skills: ['Sosyal Medya', 'Instagram', 'Facebook', 'Content Strategy']
  },
  {
    id: '8',
    title: 'Uygulamalı Canva',
    issuer: 'BTK Akademi',
    issueDate: 'Mart 2025',
    credentialId: 'PVghbkaqmX',
    credentialUrl: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=PVghbkaqmX',
    description: 'Canva ile profesyonel tasarım oluşturma.',
    skills: ['Canva', 'Sosyal Medya Tasarımı', 'Görsel Tasarım']
  },
  {
    id: '9',
    title: 'Web Sitesi Kullanılabilirliği',
    issuer: 'BTK Akademi',
    issueDate: 'Mart 2025',
    credentialId: '4qguZ7N7jw',
    credentialUrl: 'https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=4qguZ7N7jw',
    description: 'UX/UI prensipleri ve web sitesi kullanılabilirlik testleri.',
    skills: ['UX Design', 'Usability Testing', 'User Research']
  }
]

const CertificateCard = ({ certificate }: { certificate: typeof certificates[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
        certificate.featured ? 'border-2 border-accent' : ''
      }`}
    >
      {/* Image */}
      {certificate.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 right-4">
            <Award className="h-6 w-6 text-white" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {certificate.featured && (
          <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
            <CheckCircle className="h-4 w-4" />
            Öne Çıkan
          </div>
        )}

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {certificate.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
          <Building2 className="h-4 w-4" />
          <span className="text-sm">{certificate.issuer}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{certificate.issueDate}</span>
        </div>

        {certificate.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {certificate.description}
          </p>
        )}

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Credential Info */}
        {certificate.credentialId && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              ID: {certificate.credentialId}
            </p>
            {certificate.credentialUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full"
              >
                <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                  <span>Sertifikayı Doğrula</span>
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function Certificates() {
  const [showAll, setShowAll] = useState(false)
  const displayedCertificates = showAll ? certificates : certificates.slice(0, 6)

  return (
    <section id="certificates" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Sertifikalarım</h2>
          <p className="section-subtitle mt-4">
            Alanımda uzmanlaşmak için aldığım profesyonel sertifikalar.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && certificates.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button onClick={() => setShowAll(true)} size="lg">
              Tüm Sertifikaları Gör ({certificates.length - 6} daha)
            </Button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {certificates.length}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Toplam Sertifika</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Building2 className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {Array.from(new Set(certificates.map(c => c.issuer))).length}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Farklı Kurum</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {certificates.filter(c => c.featured).length}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Öne Çıkan</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}