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
import ComingSoon from '@/components/ui/ComingSoon'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const content = getAllContentInCategory('weapons')
  return content.map((item) => ({
    slug: [item.slug],
  }))
}

export default async function WeaponsPage({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.[0]
  
  // If no slug provided, show weapons hub
  if (!slug) {
    const weapons = getAllContentInCategory('weapons')
    
    return (
      <>
        <SectionHeader
          eyebrow="TECHNICAL MANUAL"
          title="Weapons & Systems"
          description="Deep technical manual on weapon systems, ammunition types, armor mechanics, and fire control systems. Understand how damage works in War Thunder."
        />
        
        {weapons.length > 0 ? (
          <InfoGrid cols={2} gap="lg" className="mt-8">
            {weapons.map((weapon) => (
              <MetaCard
                key={weapon.slug}
                variant="default"
                title={weapon.frontmatter.title}
                description={weapon.frontmatter.description || 'Weapon systems guide'}
                href={`/weapons/${weapon.slug}`}
              />
            ))}
          </InfoGrid>
        ) : (
          <ComingSoon 
            title="Weapons & Systems - Coming Soon"
            description="Weapon system guides are currently being developed. Check back soon for comprehensive weapon and ammunition guides."
            category="weapons"
          />
        )}
      </>
    )
  }
  
  const content = getContentBySlug('weapons', slug)
  
  if (!content) {
    notFound()
  }
  
  const hasMultipleHeadings = (content.content.match(/^##\s/gm) || []).length >= 2

  return (
    <div className="relative">
      <div className="lg:mr-80">
        <Breadcrumbs 
          items={[
            { label: 'Weapons & Systems', href: '/weapons' },
            { label: content.frontmatter.title }
          ]} 
        />
        <ContentHeader 
          frontmatter={content.frontmatter} 
          category="weapons"
          content={content.content}
        />
        
        <ContentRenderer content={content.content} />
        
        <RelatedContent
          currentSlug={slug}
          category="weapons"
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

