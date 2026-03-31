export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tech: string[]
  image?: string
  github?: string
  live?: string
  featured: boolean
  category: 'web' | 'mobile' | 'backend' | 'other'
}

export interface Skill {
  name: string
  level: number // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'design'
  icon?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string[]
  tech: string[]
  current?: boolean
}

export interface Education {
  id: string
  institution: string
  degree: string
  period: string
  description?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
