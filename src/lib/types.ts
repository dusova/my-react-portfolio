export interface Project {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  category: 'frontend' | 'fullstack' | 'ui-ux' | 'mobile'
  metrics?: {
    stars?: number
    forks?: number
    watchers?: number
  }
}

export interface Experience {
  id: string
  title: string
  company: string
  companyUrl?: string
  location: string
  type: 'full-time' | 'part-time' | 'freelance' | 'intern'
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  skills: string[]
  achievements?: string[]
}

export interface Education {
  id: string
  degree: string
  school: string
  location: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  gpa?: string
  courses?: string[]
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  image?: string
  description?: string
  skills?: string[]
}

export interface Skill {
  name: string
  level: number
  icon: string
  category?: 'frontend' | 'backend' | 'tools' | 'design'
}

export interface SocialLink {
  name: string
  href: string
  icon: string
  username?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  updatedAt?: string
  tags: string[]
  readTime: string
  featured?: boolean
  category: string
}

export interface Music {
  title: string
  artist: string
  album?: string
  coverImage?: string
  spotifyUrl?: string
  youtubeUrl?: string
  duration?: string
  isPlaying?: boolean
}

export interface Stats {
  githubStats?: {
    totalRepos: number
    totalStars: number
    totalForks: number
    totalContributions: number
  }
  codingStats?: {
    totalHours: number
    favoriteLanguage: string
    projectsCompleted: number
  }
  freelanceStats?: {
    clientsServed: number
    projectsDelivered: number
    satisfactionRate: number
  }
}