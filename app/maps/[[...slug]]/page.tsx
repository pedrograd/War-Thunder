import { getContentBySlug, getAllContentInCategory } from '@/lib/content/loader'
import SectionHeader from '@/components/ui/SectionHeader'
import MapTacticsCard from '@/components/ui/MapTacticsCard'
import ContentHeader from '@/components/content/ContentHeader'
import ContentRenderer from '@/components/content/ContentRenderer'
import ContentFooter from '@/components/content/ContentFooter'
import TableOfContents from '@/components/content/TableOfContents'
import BackToTop from '@/components/content/BackToTop'
import RelatedContent from '@/components/content/RelatedContent'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import InfoGrid from '@/components/ui/InfoGrid'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const maps = getAllContentInCategory('maps')
  return maps.map((map) => ({
    slug: [map.slug],
  }))
}

export default async function MapPage({ params }: { params: { slug?: string[] } }) {
  const mapSlug = params.slug?.[0]
  
  if (!mapSlug) {
    // Show maps hub
    const maps = getAllContentInCategory('maps')
    
    return (
      <>
        <SectionHeader
          eyebrow="OPERATIONAL INTEL"
          title="Map Tactics Academy"
          description="Detailed tactical guides for every major map with positioning and strategies."
        />
        
        {/* Interactive Tactics Link */}
        <div className="mt-6 mb-8">
          <Link
            href="/maps/tactics"
            className="inline-flex items-center gap-2 px-6 py-3 bg-tactical-amber/20 border-2 border-tactical-amber/60 rounded-lg text-tactical-amber font-bold uppercase tracking-wider hover:bg-tactical-amber/30 hover:border-tactical-amber transition-all duration-200"
          >
            <span>🗺️</span>
            <span>Interactive Map Tactics</span>
            <span>→</span>
          </Link>
        </div>
        
        {maps.length > 0 ? (
          <InfoGrid cols={3} gap="lg" className="mt-8">
            {maps.map((map) => (
              <MapTacticsCard
                key={map.slug}
                id={map.slug}
                name={map.frontmatter.title}
                overview={map.frontmatter.description || 'Tactical guide for this map.'}
                href={map.path}
              />
            ))}
          </InfoGrid>
        ) : (
          <div className="text-center py-12 mt-8">
            <p className="text-slate-300 text-lg">
              Map guides are coming soon. Check back later!
            </p>
          </div>
        )}
      </>
    )
  }
  
  const content = getContentBySlug('maps', mapSlug)
  
  if (!content) {
    notFound()
  }
  
  const hasMultipleHeadings = (content.content.match(/^##\s/gm) || []).length >= 2

  return (
    <div className="relative">
      <div className="lg:mr-80">
        <Breadcrumbs 
          items={[
            { label: 'Map Tactics', href: '/maps' },
            { label: content.frontmatter.title }
          ]} 
        />
        <ContentHeader 
          frontmatter={content.frontmatter} 
          category="maps"
          content={content.content}
        />
        
        <ContentRenderer content={content.content} />
        
        <RelatedContent
          currentSlug={mapSlug}
          category="maps"
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

