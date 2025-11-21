import { getContentBySlug, getAllContentInCategory } from '@/lib/content/loader'
import SectionHeader from '@/components/ui/SectionHeader'
import ContentHeader from '@/components/content/ContentHeader'
import ContentRenderer from '@/components/content/ContentRenderer'
import ContentFooter from '@/components/content/ContentFooter'
import TableOfContents from '@/components/content/TableOfContents'
import BackToTop from '@/components/content/BackToTop'
import RelatedContent from '@/components/content/RelatedContent'
import MetaCard from '@/components/ui/MetaCard'
import InfoGrid from '@/components/ui/InfoGrid'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const content = getAllContentInCategory('nations')
  return content.map((item) => ({
    slug: [item.slug],
  }))
}

export default async function NationPage({ params }: { params: { slug?: string[] } }) {
  const nationSlug = params.slug?.[0]
  
  if (!nationSlug) {
    // Show nations hub with interactive selector
    const nations = getAllContentInCategory('nations')
    
    const nationIdentities: Record<string, string> = {
      'usa': 'Stabilized firepower & strong CAS',
      'germany': 'Precision guns & heavy armor',
      'ussr': 'Brute force & reliable brawling',
      'britain': 'Solid shot precision & accuracy',
      'japan': 'Mobility & flanking excellence',
      'china': 'Hybrid versatility & unique designs',
      'italy': 'Speed & autoloader mechanics',
      'france': 'Autoloaders & mobile firepower',
      'sweden': 'Unique designs & powerful guns',
      'israel': 'Modern MBTs & top-tier focus',
    }
    
    const nationFlags: Record<string, string> = {
      'usa': '🇺🇸',
      'germany': '🇩🇪',
      'ussr': '🇷🇺',
      'britain': '🇬🇧',
      'japan': '🇯🇵',
      'china': '🇨🇳',
      'italy': '🇮🇹',
      'france': '🇫🇷',
      'sweden': '🇸🇪',
      'israel': '🇮🇱',
    }
    
    return (
      <>
        <SectionHeader
          eyebrow="INTELLIGENCE REPORTS"
          title="Nation Dossiers"
          description="Complete guides for all playable nations with vehicle progression, lineups, and strategies. Master each nation's unique doctrine and playstyle."
        />
        
        {/* Interactive Nation Selector */}
        <div className="mb-12 mt-8">
          {await import('@/components/ui/NationSelector').then(({ default: NationSelector }) => (
            <NationSelector />
          ))}
        </div>
        
        <SectionHeader
          eyebrow="GUIDES"
          title="Nation Guides"
          description="Detailed guides for each nation"
          className="mb-8"
        />
        
        {nations.length > 0 ? (
          <InfoGrid cols={3} gap="lg" className="mt-8">
            {nations.map((nation) => (
              <MetaCard
                key={nation.slug}
                variant="default"
                title={`${nationFlags[nation.slug] || '🏳️'} ${nation.frontmatter.title?.replace(' – Doctrine & Identity', '').replace(' – ', '') || nation.slug.toUpperCase()}`}
                description={nationIdentities[nation.slug] || nation.frontmatter.description || 'Complete nation guide'}
                href={`/nations/${nation.slug}`}
              />
            ))}
          </InfoGrid>
        ) : (
          <div className="text-center py-12 mt-8">
            <p className="text-slate-300 text-lg">
              Nation guides are coming soon. Check back later!
            </p>
          </div>
        )}
      </>
    )
  }
  
  const content = getContentBySlug('nations', nationSlug)
  
  if (!content) {
    notFound()
  }
  
  // Check if content has enough headings for TOC (at least 2)
  const hasMultipleHeadings = (content.content.match(/^##\s/gm) || []).length >= 2

  return (
    <div className="relative">
      <div className="lg:mr-80">
        <ContentHeader 
          frontmatter={content.frontmatter} 
          category="nations"
          content={content.content}
        />
        
        <ContentRenderer content={content.content} />
        
        <RelatedContent
          currentSlug={nationSlug}
          category="nations"
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

