export const SITE_CONFIG = {
  name: 'Mustafa Arda Düşova',
  description: 'Bilgisayar Programcılığı Öğrencisi | Yazılım Geliştirici & Grafik Tasarımcı | Silivri / İstanbul',
  url: 'https://mdusova.com',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/dusova',
    linkedin: 'https://linkedin.com/in/mdusova',
    instagram: 'https://instagram.com/mdusova',
    spotify: 'https://open.spotify.com/user/31e4wu2ua42rf5qvqaukgjwgz7tu',
    email: 'contact@mdusova.com',
    phone: '+905437891563',
  },
  nav: [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Hakkımda', href: '#about' },
    { title: 'Kariyerim', href: '#career' },
    { title: 'Eğitimim', href: '#education' },
    { title: 'Sertifikalar', href: '#certificates' },
    { title: 'Projelerim', href: '#projects' },
    { title: 'Blog', href: '#blog' },
    { title: 'İletişim', href: '#contact' },
  ],
}

// Social links'i ayrı bir const olarak tanımlıyoruz
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: SITE_CONFIG.links.github,
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    href: SITE_CONFIG.links.linkedin,
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    href: SITE_CONFIG.links.instagram,
    icon: 'instagram',
  },
]

export const SKILLS = {
  frontend: [
    { name: 'React', level: 95, icon: 'react' },
    { name: 'Next.js', level: 90, icon: 'nextjs' },
    { name: 'TypeScript', level: 90, icon: 'typescript' },
    { name: 'JavaScript', level: 95, icon: 'javascript' },
    { name: 'HTML/CSS', level: 98, icon: 'html' },
    { name: 'Tailwind CSS', level: 95, icon: 'tailwind' },
    { name: 'Sass', level: 90, icon: 'sass' },
  ],
  backend: [
    { name: 'PHP', level: 75, icon: 'php' },
    { name: 'MySQL', level: 70, icon: 'mysql' },
    { name: 'Node.js', level: 65, icon: 'nodejs' },
    { name: 'REST API', level: 80, icon: 'api' },
  ],
  tools: [
    { name: 'Figma', level: 95, icon: 'figma' },
    { name: 'Photoshop', level: 90, icon: 'photoshop' },
    { name: 'Git', level: 85, icon: 'git' },
    { name: 'Docker', level: 60, icon: 'docker' },
    { name: 'VS Code', level: 100, icon: 'vscode' },
  ],
}

export const ANIMATION = {
  transition: { type: 'spring', duration: 0.8 },
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  },
  slideLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  },
  slideRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  },
  stagger: {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1 },
    },
  },
}

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}