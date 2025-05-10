import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { motion, MotionProps } from 'framer-motion'

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900',
        className
      )}
      {...props}
    />
  )
)
Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

// Animated Card with Framer Motion
interface MotionCardProps {
  children: React.ReactNode
  className?: string
  initial?: any
  whileInView?: any
  transition?: any
  viewport?: any
  animate?: any
  exit?: any
  whileHover?: any
  whileTap?: any
  style?: React.CSSProperties
}

const MotionCard = forwardRef<HTMLDivElement, MotionCardProps>(
  ({ className, children, initial, whileInView, transition, viewport, animate, exit, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={initial || { opacity: 0, y: 20 }}
      whileInView={whileInView || { opacity: 1, y: 0 }}
      transition={transition || { duration: 0.5 }}
      viewport={viewport || { once: true }}
      animate={animate}
      exit={exit}
      {...props}
    >
      <Card className={className}>
        {children}
      </Card>
    </motion.div>
  )
)
MotionCard.displayName = 'MotionCard'

// Specialty Cards

// Glassy Card Effect
const GlassCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn(
        'bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-white/20',
        className
      )}
      {...props}
    />
  )
)
GlassCard.displayName = 'GlassCard'

// Hover Card Effect
const HoverCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <motion.div
      ref={ref}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={cn('transition-shadow hover:shadow-lg', className)} {...props}>
        {children}
      </Card>
    </motion.div>
  )
)
HoverCard.displayName = 'HoverCard'

// Interactive Card with custom animations
interface InteractiveCardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'none'
  clickEffect?: boolean
}

const InteractiveCard = forwardRef<HTMLDivElement, InteractiveCardProps>(
  ({ className, children, hoverEffect = 'lift', clickEffect = false, ...props }, ref) => {
    const hoverVariants = {
      lift: { y: -5, transition: { duration: 0.2 } },
      scale: { scale: 1.03, transition: { duration: 0.2 } },
      glow: { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)', transition: { duration: 0.2 } },
      none: {}
    }

    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect !== 'none' ? hoverVariants[hoverEffect] : undefined}
        whileTap={clickEffect ? { scale: 0.98 } : undefined}
      >
        <Card
          className={cn(
            'transition-all duration-200',
            hoverEffect === 'glow' && 'hover:shadow-xl',
            className
          )}
          {...props}
        >
          {children}
        </Card>
      </motion.div>
    )
  }
)
InteractiveCard.displayName = 'InteractiveCard'

// Stats Card
interface StatsCardProps {
  icon?: React.ReactNode
  title: string
  value: string | number
  subtitle?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  color?: 'default' | 'success' | 'warning' | 'error' | 'info'
}

const StatsCard = forwardRef<HTMLDivElement, StatsCardProps & HTMLAttributes<HTMLDivElement>>(
  ({ icon, title, value, subtitle, trend, trendValue, color = 'default', className, ...props }, ref) => {
    const colorClasses = {
      default: 'text-gray-900 dark:text-white',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-amber-600 dark:text-amber-400',
      error: 'text-red-600 dark:text-red-400',
      info: 'text-blue-600 dark:text-blue-400'
    }

    const trendColors = {
      up: 'text-green-600 bg-green-100 dark:bg-green-900/30',
      down: 'text-red-600 bg-red-100 dark:bg-red-900/30',
      neutral: 'text-gray-600 bg-gray-100 dark:bg-gray-700/30'
    }

    return (
      <Card ref={ref} className={cn('p-6', className)} {...props}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {icon && <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">{icon}</div>}
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h4>
          </div>
          {trend && trendValue && (
            <span className={cn(
              'px-2 py-1 text-xs font-medium rounded-full',
              trendColors[trend]
            )}>
              {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
            </span>
          )}
        </div>
        <div>
          <p className={cn('text-2xl font-bold', colorClasses[color])}>{value}</p>
          {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
        </div>
      </Card>
    )
  }
)
StatsCard.displayName = 'StatsCard'

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  MotionCard,
  GlassCard,
  HoverCard,
  InteractiveCard,
  StatsCard
}