import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

interface ComingSoonProps {
  title?: string
  description?: string
  category?: string
  className?: string
}

export default function ComingSoon({ 
  title = 'Content Coming Soon',
  description = 'This content is currently being developed. Check back soon for updates.',
  category,
  className = ''
}: ComingSoonProps) {
  const categoryColors = {
    academy: 'academy',
    meta: 'meta',
    economy: 'economy',
    nations: 'academy',
    maps: 'academy',
    weapons: 'warning',
  } as const
  
  const accent = category && category in categoryColors 
    ? categoryColors[category as keyof typeof categoryColors]
    : 'academy'
  
  return (
    <Card 
      variant="glass" 
      padding="lg" 
      accent={accent}
      className={`text-center py-16 ${className}`}
    >
      <div className="max-w-md mx-auto">
        <div className="text-6xl mb-6 opacity-50">
          <i className="fa-solid fa-lock"></i>
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-4 font-stencil uppercase">
          {title}
        </h2>
        <p className="text-text-secondary mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" accent={accent}>
              <i className="fa-solid fa-home mr-2"></i>
              Return to Dashboard
            </Button>
          </Link>
          {category && (
            <Link href={`/${category}`}>
              <Button variant="secondary">
                <i className="fa-solid fa-arrow-left mr-2"></i>
                Browse {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}

