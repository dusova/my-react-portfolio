# Mustafa Arda Düşova - Portfolio Website

Modern, responsive, ve etkileşimli bir portfolio web sitesi. Next.js 14, TypeScript, Tailwind CSS ve Framer Motion kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern UI/UX**: Clean, minimal ve professional tasarım
- **Dark Mode**: Sistem tercihini algılayan otomatik dark mode
- **Responsive Design**: Tüm cihazlarda mükemmel görünüm
- **Smooth Animations**: Framer Motion ile yumuşak geçişler ve mikro animasyonlar
- **Interactive Elements**: Hover efektleri ve kullanıcı etkileşimleri
- **Performance Optimized**: Next.js 14 ve modern web teknolojileri
- **SEO Ready**: Meta tags, sitemap ve structured data
- **Contact Form**: Çalışan iletişim formu
- **Project Showcase**: GitHub API entegrasyonu ile güncel projeler
- **Blog System**: MDX ile blog yazıları (gelecekte)
- **PWA Ready**: Progressive Web App özellikleri

## 🛠️ Teknolojiler

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with Radix UI primitives
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Font**: Inter, Playfair Display
- **Deploy**: Vercel (önerilen)

## 📁 Proje Yapısı

```
mdusova-portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── favicon/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── sections/
│   │   ├── layout/
│   │   └── features/
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── types.ts
│   └── hooks/
├── .env.example
├── .prettierrc.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Kurulum

1. **Repoyu klonlayın**
```bash
git clone https://github.com/dusova/mdusova-portfolio.git
cd mdusova-portfolio
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Environment dosyasını oluşturun**
```bash
cp .env.example .env.local
```

4. **Environment değişkenlerini düzenleyin**
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
# Diğer API anahtarlarını ekleyin...
```

5. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

## 📝 Geliştirme

### Yeni Proje Ekleme

Projeleri `src/components/sections/Projects.tsx` dosyasındaki `projects` array'ine ekleyebilirsiniz:

```typescript
{
  id: 'unique-id',
  title: 'Proje Adı',
  description: 'Proje açıklaması...',
  image: '/assets/images/projects/image.jpg',
  tags: ['React', 'Next.js'],
  githubUrl: 'https://github.com/dusova/project',
  liveUrl: 'https://project.com',
  featured: true,
  category: 'frontend'
}
```

### Yeni Blog Yazısı

Blog yazılarını `src/components/sections/Blog.tsx` dosyasındaki `blogPosts` array'ine ekleyebilirsiniz.

## 🎨 Özelleştirme

### Renkler

Tailwind config dosyasında (`tailwind.config.ts`) ana renkleri özelleştirebilirsiniz:

```typescript
colors: {
  accent: {
    DEFAULT: '#2563EB', // Ana renginiz
    light: '#3B82F6',
  },
}
```

### Animasyonlar

Framer Motion animasyonları `src/lib/constants.ts` dosyasındaki `ANIMATION` nesnesinde tanımlanmıştır.

## 📦 Deployment

### Vercel (Önerilen)

1. Projenizi GitHub'a push edin
2. Vercel'de yeni bir proje oluşturun
3. Environment variables ekleyin
4. Deploy!

### Diğer Platformlar

```bash
# Production build
npm run build

# Start production server
npm start
```

## 🔧 Development Scripts

```bash
npm run dev          # Geliştirme sunucusunu başlat
npm run build        # Production build
npm run start        # Production sunucusunu başlat
npm run lint         # ESLint kontrolü
npm run type-check   # TypeScript kontrolü
npm run format       # Prettier ile formatla
npm run analyze      # Bundle analizi
```

## 🧪 Testler

```bash
npm test
```

## 📱 PWA

Proje PWA (Progressive Web App) olarak yapılandırılmıştır. Manifest ve service worker dosyalarını `public` klasöründe bulabilirsiniz.

## 🔍 SEO

- Meta tags optimizasyonu
- Open Graph ve Twitter Card desteği
- Sitemap.xml ve robots.txt
- Structured data (JSON-LD)
- Semantic HTML

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

Mustafa Arda Düşova

- GitHub: [@dusova](https://github.com/dusova)
- LinkedIn: [mdusova](https://linkedin.com/in/mdusova)
- Website: [mdusova.com](https://mdusova.com)

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform

---

Made with ❤️ in Istanbul