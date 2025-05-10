'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const experiences = [
  {
    id: '1',
    title: 'Bilgisayar Programcısı',
    company: 'Kırklareli Üniversitesi',
    companyUrl: 'https://www.klu.edu.tr',
    location: 'Kırklareli, Türkiye',
    type: 'intern' as const,
    startDate: 'Mar 2025',
    current: true,
    description: 'İŞKUR Gençlik Programı kapsamında üniversitede stajyer olarak çalışıyorum.',
    skills: ['Yazılım Geliştirme', 'Kurumsal Yazılım', 'Panoramik Fotoğrafçılık'],
    achievements: [
      'KLU360 Virtual Tour projesi geliştirildi',
      'Üniversite web sitesi güncellemeleri yapıldı'
    ]
  },
  {
    id: '2',
    title: 'Yazılım Programcısı',
    company: 'Wall Street Consulting Services LLC',
    location: 'İstanbul, Türkiye',
    type: 'full-time' as const,
    startDate: 'Oca 2025',
    current: true,
    description: 'Kurumsal yazılım çözümleri ve proje yönetimi alanlarında çalışıyorum.',
    skills: ['Yazılım Proje Yönetimi', 'Veri Analizi', 'Grafik Tasarımı', 'Sosyal Medya'],
    achievements: [
      'Yeni müşteri yönetim sistemi geliştirildi',
      'Veri analiz dashboardları oluşturuldu'
    ]
  },
  {
    id: '3',
    title: 'Grafik Tasarımcısı',
    company: 'Evdiz Mağazaları',
    location: 'Silivri, İstanbul',
    type: 'full-time' as const,
    startDate: 'Tem 2024',
    endDate: 'Mar 2025',
    description: 'Market zincirine yönelik görsel tasarım ve sosyal medya yönetimi.',
    skills: ['Photoshop', 'Tasarım', 'Grafik Tasarımı', 'Sosyal Medya Yönetimi'],
    achievements: [
      '500+ sosyal medya görseli tasarlandı',
      'Market içi tasarım çözümleri geliştirildi'
    ]
  },
  {
    id: '4',
    title: 'Pazarlama Uzmanı',
    company: 'By Pipo Tobacco',
    location: 'Silivri, İstanbul',
    type: 'full-time' as const,
    startDate: 'Eyl 2023',
    endDate: 'Oca 2025',
    description: 'Ürün pazarlama ve e-ticaret yönetimi.',
    skills: ['Ürün Pazarlama', 'E-Ticaret', 'Sosyal Medya Pazarlama'],
    achievements: [
      'E-ticaret satışları %200 artırıldı',
      'Sosyal medya takipçi sayısı 10K+ arttırıldı'
    ]
  },
  {
    id: '5',
    title: 'Şirket Sahibi',
    company: 'Missio Parfüm',
    location: 'İstanbul, Türkiye',
    type: 'full-time' as const,
    startDate: 'Mar 2022',
    endDate: 'Kas 2024',
    description: 'E-ticaret parfüm mağazasının kurulması ve yönetimi.',
    skills: ['Yazılım Geliştirme', 'E-Ticaret', 'SEO', 'Muhasebe', 'Veri Analizi'],
    achievements: [
      'Sıfırdan e-ticaret sitesi geliştirildi',
      '1000+ ürün ve 500+ müşteri portföyü oluşturuldu'
    ]
  },
  {
    id: '6',
    title: 'Yazılım Programcısı',
    company: 'Bionluk',
    location: 'İstanbul, Türkiye',
    type: 'freelance' as const,
    startDate: 'Haz 2017',
    current: true,
    description: 'Freelance platformunda yazılım geliştirme projeleri.',
    skills: ['Kurumsal Yazılım', 'UI/UX Tasarımı', 'Web Geliştirme'],
    achievements: [
      '50+ proje tamamlandı',
      '4.8/5 müşteri memnuniyet puanı'
    ]
  },
  {
    id: '7',
    title: 'Grafik Tasarımcı',
    company: 'Freelancer.com',
    location: 'İstanbul, Türkiye',
    type: 'freelance' as const,
    startDate: 'May 2014',
    endDate: 'Eki 2023',
    description: 'Uluslararası freelance platformunda tasarım projeleri.',
    skills: ['Photoshop', 'İllüstrasyon', 'Logo Tasarımı', 'Kurumsal Kimlik'],
    achievements: [
      '200+ logo tasarımı yapıldı',
      '30+ ülkeden müşterilerle çalışıldı'
    ]
  }
]

const ExperienceCard = ({
  experience,
  index
}: {
  experience: typeof experiences[0]
  index: number
}) => {
  const isOdd = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white dark:border-gray-900 z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
      </div>

      {/* Content */}
      <div className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center',
        isOdd ? 'lg:flex-row' : 'lg:flex-row-reverse'
      )}>
        {/* Date Badge */}
        <div className={cn(
          'hidden lg:block',
          isOdd ? 'text-right' : 'text-left'
        )}>
          <div className={cn(
            'inline-block px-4 py-2 bg-accent text-white rounded-full text-sm',
            isOdd ? 'ml-auto' : 'mr-auto'
          )}>
            {experience.startDate} - {experience.current ? 'Günümüz' : experience.endDate}
          </div>
        </div>

        {/* Card */}
        <div className={cn(
          'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg',
          isOdd ? 'lg:ml-8' : 'lg:mr-8'
        )}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-accent mt-1">
                <Building2 className="h-4 w-4" />
                <span className="font-medium">{experience.company}</span>
              </div>
            </div>
            <span className={cn(
              'px-3 py-1 text-xs rounded-full',
              {
                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': experience.type === 'full-time',
                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': experience.type === 'freelance',
                'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200': experience.type === 'intern',
              }
            )}>
              {experience.type === 'full-time' ? 'Tam Zamanlı' :
               experience.type === 'freelance' ? 'Freelance' :
               'Stajyer'}
            </span>
          </div>

          {/* Location and Date */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {experience.location}
            </div>
            <div className="flex items-center gap-1 lg:hidden">
              <Calendar className="h-4 w-4" />
              {experience.startDate} - {experience.current ? 'Günümüz' : experience.endDate}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {experience.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Achievements */}
          {experience.achievements && (
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Başarılar:</h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Spacer */}
        <div className="hidden lg:block" />
      </div>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="career" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Kariyerim</h2>
          <p className="section-subtitle mt-4">
            Çeşitli sektörlerde edindiğim deneyimler ve başarılarım.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}