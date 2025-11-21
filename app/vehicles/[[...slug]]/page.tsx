import { getContentBySlug, getAllContentInCategory } from '@/lib/content/loader'
import SectionHeader from '@/components/ui/SectionHeader'
import ContentHeader from '@/components/content/ContentHeader'
import ContentRenderer from '@/components/content/ContentRenderer'
import ContentFooter from '@/components/content/ContentFooter'
import TableOfContents from '@/components/content/TableOfContents'
import BackToTop from '@/components/content/BackToTop'
import RelatedContent from '@/components/content/RelatedContent'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const vehicles = getAllContentInCategory('vehicles')
  return vehicles.map((vehicle) => {
    const pathParts = vehicle.slug.split('/')
    return {
      slug: pathParts,
    }
  })
}

export default async function VehiclePage({ params }: { params: { slug?: string[] } }) {
  const vehicleSlug = params.slug?.join('/') || params.slug?.[0]
  
  if (!vehicleSlug) {
    // Check if there's an encyclopedia overview
    const encyclopediaOverview = getContentBySlug('encyclopedia', 'vehicles')
    
    if (encyclopediaOverview) {
      return (
        <>
          <Breadcrumbs 
            items={[
              { label: 'Vehicle Encyclopedia', href: '/vehicles' },
              { label: encyclopediaOverview.frontmatter.title }
            ]} 
          />
          <ContentHeader frontmatter={encyclopediaOverview.frontmatter} category="vehicles" />
          <ContentRenderer content={encyclopediaOverview.content} />
          <ContentFooter frontmatter={encyclopediaOverview.frontmatter} />
        </>
      )
    }
    
    // Show vehicles hub
    const vehicles = getAllContentInCategory('vehicles')
    
    // Group by nation
    const vehiclesByNation: Record<string, typeof vehicles> = {}
    vehicles.forEach((vehicle) => {
      const nation = vehicle.frontmatter.nation || 'other'
      if (!vehiclesByNation[nation]) {
        vehiclesByNation[nation] = []
      }
      vehiclesByNation[nation].push(vehicle)
    })
    
    return (
      <>
        <SectionHeader
          eyebrow="INTELLIGENCE DATABASE"
          title="Vehicle Encyclopedia"
          description="Comprehensive guide to understanding vehicle types, characteristics, and how to evaluate vehicles for your playstyle."
        />
      
        {Object.keys(vehiclesByNation).length > 0 ? (
          Object.entries(vehiclesByNation).map(([nation, nationVehicles]) => (
            <div key={nation} className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 capitalize">{nation} Vehicles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nationVehicles.map((vehicle) => (
                  <a
                    key={vehicle.slug}
                    href={vehicle.path}
                    className="block p-4 bg-background-surface border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">{vehicle.frontmatter.title}</h3>
                    {vehicle.frontmatter.description && (
                      <p className="text-text-secondary text-sm">{vehicle.frontmatter.description}</p>
                    )}
                    {vehicle.frontmatter.br && (
                      <span className="text-xs text-text-muted mt-2 inline-block">BR {vehicle.frontmatter.br}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg">
              Vehicle guides are coming soon. Check back later!
            </p>
          </div>
        )}
      </>
    )
  }
  
  const content = getContentBySlug('vehicles', vehicleSlug)
  
  if (!content) {
    notFound()
  }
  
  const hasMultipleHeadings = (content.content.match(/^##\s/gm) || []).length >= 2

  return (
    <div className="relative">
      <div className="lg:mr-80">
        <Breadcrumbs 
          items={[
            { label: 'Vehicle Encyclopedia', href: '/vehicles' },
            { label: content.frontmatter.title }
          ]} 
        />
        <ContentHeader 
          frontmatter={content.frontmatter} 
          category="vehicles"
          content={content.content}
        />
        
        <ContentRenderer content={content.content} />
        
        <RelatedContent
          currentSlug={vehicleSlug}
          category="vehicles"
          tags={content.frontmatter.tags || []}
          maxItems={4}
        />
        
        <ContentFooter frontmatter={content.frontmatter} />
      </div>
      
      {hasMultipleHeadings && (
        <TableOfContents content={content.content} />
      )}
      
      <BackToTop />
    </div>
  )
}

