'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Trophy, BookOpen } from 'lucide-react'

// Define the EducationItem interface
interface EducationItem {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  gpa?: string;
  courses?: string[];
  achievements?: string[];
}

const education: EducationItem[] = [
  {
    id: '1',
    degree: 'Bilgisayar Programcılığı',
    school: 'Teknik Üniversite',
    location: 'İstanbul, Türkiye',
    startDate: '2024',
    current: true,
    description: 'Web teknolojileri, veritabanı yönetimi ve temel programlama konularında kapsamlı eğitim alıyorum.',
    gpa: '3.83 / 4.00',
    courses: [
      'Nesne Yönelimli Programlama',
      'Veri Yapıları ve Algoritmalar',
      'Web Programlama',
      'Veritabanı Yönetim Sistemleri',
      'İnsan Bilgisayar Etkileşimi',
      'Yazılım Mühendisliği'
    ],
    achievements: [
      'Akademik başarı bursu',
      'Bilgisayar Teknolojileri kulübü üyesi',
      'Üniversite hackathon katılımcısı'
    ]
  },
  {
    id: '2',
    degree: 'Lise Eğitimi',
    school: 'TOKİ Cumhuriyet Anadolu Lisesi',
    location: 'Silivri, İstanbul',
    startDate: '2020',
    endDate: '2024',
    description: 'Eşit ağırlık bölümünde eğitim aldım. Teknoloji ve tasarım alanlarına yoğunlaştım.',
    gpa: '85.2 / 100',
    achievements: [
      'Okul Teknoloji Kulübü Başkanı (2023-2024)',
      'Lise 1. Sınıf Takdir Belgesi',
      'Matematik Olimpiyatı Bölge Yarı Finali',
      'TÜBİTAK Lise Öğrenci Araştırma Projeleri Yarışması'
    ],
    courses: [
      'Matematik',
      'Fizik',
      'Kimya',
      'Bilgisayar Bilimleri',
      'İngilizce',
      'Türk Dili ve Edebiyatı'
    ]
  },
  {
    id: '3',
    degree: 'Ortaokul Eğitimi',
    school: 'Silivri İMKB Ortaokulu',
    location: 'Silivri, İstanbul',
    startDate: '2016',
    endDate: '2020',
    description: 'Temel eğitim dönemini başarıyla tamamladım. Bilişim teknolojilerine ilgim bu dönemde başladı.',
    achievements: [
      'Bilişim Teknolojileri dersinden teşekkür belgesi',
      'Fen Bilimleri dersinden teşekkür belgesi',
      'Okul Öğrenci Temsilcisi (2019-2020)'
    ]
  }
]

const EducationCard = ({ education, index }: { education: EducationItem, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ml-8 before:absolute before:left-[-18px] before:top-8 before:w-8 before:h-8 before:bg-accent before:rounded-full before:border-4 before:border-white dark:before:border-gray-900"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {education.degree}
          </h3>
          <div className="flex items-center gap-2 text-accent mt-1">
            <GraduationCap className="h-4 w-4" />
            <span className="font-medium">{education.school}</span>
          </div>
          {education.gpa && (
            <div className="flex items-center gap-2 mt-2">
              <Trophy className="h-4 w-4 text-amber-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                GPA: <span className="font-medium text-amber-600">{education.gpa}</span>
              </span>
            </div>
          )}
        </div>
        <span className={`px-3 py-1 text-xs rounded-full ${
          education.current
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
        }`}>
          {education.current ? 'Devam Ediyor' : 'Tamamlandı'}
        </span>
      </div>

      {/* Location and Date */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {education.location}
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {education.startDate} - {education.current ? 'Günümüz' : education.endDate}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {education.description}
      </p>

      {/* Courses */}
      {education.courses && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Aldığım Dersler:
          </h4>
          <div className="flex flex-wrap gap-2">
            {education.courses.map((course) => (
              <span
                key={course}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {education.achievements && (
        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Başarılar:</h4>
          <ul className="space-y-1">
            {education.achievements.map((achievement) => (
              <li key={achievement} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  )
}

export function Education() {
  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Eğitimim</h2>
          <p className="section-subtitle mt-4">
            Akademik yolculuğum ve aldığım eğitimler.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <EducationCard key={edu.id} education={edu} index={index} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <GraduationCap className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {education.filter(e => !e.current).length + 1}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Eğitim Kademesi</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Trophy className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3.83</h3>
            <p className="text-gray-600 dark:text-gray-400">GPA</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {education.reduce((acc, curr) => acc + (curr.courses?.length || 0), 0)}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Tamamlanan Ders</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}