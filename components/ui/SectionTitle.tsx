import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({ title, subtitle, className, align = 'left' }: SectionTitleProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
      <div className={cn('h-1 w-16 bg-accent rounded-full', align === 'center' && 'mx-auto')} />
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}
