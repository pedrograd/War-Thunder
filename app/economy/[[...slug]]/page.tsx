import { getAllContentInCategory, getContentBySlug } from '@/lib/content/loader'
import SectionHeader from '@/components/ui/SectionHeader'
import MetaCard from '@/components/ui/MetaCard'
import InfoGrid from '@/components/ui/InfoGrid'
import ContentHeader from '@/components/content/ContentHeader'
import ContentRenderer from '@/components/content/ContentRenderer'
import ContentFooter from '@/components/content/ContentFooter'
import TableOfContents from '@/components/content/TableOfContents'
import BackToTop from '@/components/content/BackToTop'
import RelatedContent from '@/components/content/RelatedContent'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const content = getAllContentInCategory('economy')
  return content.map((item) => ({
    slug: [item.slug],
  }))
}

export default async function EconomyPage({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.[0] || 'overview'
  
  if (!slug || slug === 'overview') {
    // Show economy hub with calculator
    const economy = getAllContentInCategory('economy')
    
    return (
      <>
        <SectionHeader
          eyebrow="ECONOMIC INTELLIGENCE"
          title="Economy Lab"
          description="Comprehensive guide to War Thunder's economy, grinding, and Silver Lion management. Optimize your progression and resource management."
        />
        
        {/* RP Calculator Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            {await import('@/components/ui/RPGrindCalculator').then(({ default: RPGrindCalculator }) => (
              <RPGrindCalculator />
            ))}
          </div>
        </div>

        {/* SL Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-background-elevated p-6 rounded-lg shadow border border-slate-700/60">
            <h4 className="font-bold text-slate-200 mb-3">Naval: The SL Printing Press</h4>
            <p className="text-sm text-slate-300">
              The USS Moffett and USS Frank Knox remain the highest SL modifiers in the game (1200%+ with boosters). 
              Play Naval RB, capture points, and aim for ammo racks. Expect 100k-200k SL per match.
            </p>
          </div>
          <div className="bg-background-elevated p-6 rounded-lg shadow border border-slate-700/60">
            <h4 className="font-bold text-slate-200 mb-3">Wager Strategy</h4>
            <p className="text-sm text-slate-300">
              Use &quot;Best Squad&quot; wagers. Play with 3 friends in a squad. Stick together (&lt;100m). 
              You don&apos;t need to win, just get &quot;Teamwork&quot; awards. This is the safest way to turn Gold Wagers into 500k SL.
            </p>
          </div>
        </div>
        
        {economy.length > 0 && (
          <>
            <SectionHeader
              eyebrow="GUIDES"
              title="Economy Guides"
              description="Detailed guides on economy optimization"
              className="mb-8"
            />
            <InfoGrid cols={2} gap="lg" className="mt-8">
              {economy.map((item) => (
                <MetaCard
                  key={item.slug}
                  variant="economy"
                  title={item.frontmatter.title}
                  description={item.frontmatter.description || 'Economy guide'}
                  href={`/economy/${item.slug}`}
                />
              ))}
            </InfoGrid>
          </>
        )}
      </>
    )
  }
  
  const content = getContentBySlug('economy', slug)
  
  if (!content) {
    notFound()
  }
  
  const hasMultipleHeadings = (content.content.match(/^##\s/gm) || []).length >= 2

  return (
    <div className="relative">
      <div className="lg:mr-80">
        <Breadcrumbs 
          items={[
            { label: 'Economy Lab', href: '/economy' },
            { label: content.frontmatter.title }
          ]} 
        />
        <ContentHeader 
          frontmatter={content.frontmatter} 
          category="economy"
          content={content.content}
        />
        
        <ContentRenderer content={content.content} />
        
        <RelatedContent
          currentSlug={slug}
          category="economy"
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

