import { Github, Linkedin, Twitter, Heart } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-0">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. Hecho con{' '}
          <Heart size={12} className="inline text-accent" /> en Colombia.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-text-muted hover:text-accent transition-colors"
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
