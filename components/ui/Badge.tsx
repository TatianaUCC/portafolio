import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        {
          'bg-surface-light text-text-secondary': variant === 'default',
          'bg-accent/20 text-accent': variant === 'accent',
          'border border-white/20 text-text-secondary': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
