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
  const content = getAllContentInCategory('meta')
  return content.map((item) => ({
    slug: [item.slug],
  }))
}

export default async function MetaPage({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.[0] || 'overview'
  
  if (!slug || slug === 'overview') {
    // Show meta hub
    const meta = getAllContentInCategory('meta')
    
    return (
      <>
        <SectionHeader
          eyebrow="META INTELLIGENCE"
          title="Meta Hub"
          description="Understand War Thunder's meta in a timeless, patch-agnostic way. Learn how vehicles, maps, BR ranges, and player behavior interact."
        />
        
        {meta.length > 0 ? (
          <InfoGrid cols={2} gap="lg" className="mt-8">
            {meta.map((item) => (
              <MetaCard
                key={item.slug}
                variant="meta"
                title={item.frontmatter.title}
                description={item.frontmatter.description || 'Meta analysis and insights'}
                href={`/meta/${item.slug}`}
              />
            ))}
          </InfoGrid>
        ) : (
          <div className="text-center py-12 mt-8">
            <p className="text-slate-300 text-lg">
              Meta guides are coming soon. Check back later!
            </p>
          </div>
        )}
      </>
    )
  }
  
  const content = getContentBySlug('meta', slug)
  
  if (!content) {
    notFound()
  }
  
  const hasMultipleHeadings = (content.content.match(/^##\s/gm) || []).length >= 2

  return (
    <div className="relative">
      <div className="lg:mr-80">
        <Breadcrumbs 
          items={[
            { label: 'Meta Hub', href: '/meta' },
            { label: content.frontmatter.title }
          ]} 
        />
        <ContentHeader 
          frontmatter={content.frontmatter} 
          category="meta"
          content={content.content}
        />
        
        <ContentRenderer content={content.content} />
        
        <RelatedContent
          currentSlug={slug}
          category="meta"
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

