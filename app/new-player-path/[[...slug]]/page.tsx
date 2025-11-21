import { getContentBySlug, getAllContentInCategory } from '@/lib/content/loader'
import ContentHeader from '@/components/content/ContentHeader'
import ContentRenderer from '@/components/content/ContentRenderer'
import ContentFooter from '@/components/content/ContentFooter'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const content = getAllContentInCategory('new-player-path')
  return content.map((item) => ({
    slug: [item.slug],
  }))
}

export default async function NewPlayerPathPage({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.[0] || 'overview'
  
  let content = getContentBySlug('new-player-path', slug)
  
  // If no content found, try overview
  if (!content && slug !== 'overview') {
    content = getContentBySlug('new-player-path', 'overview')
  }
  
  if (!content) {
    notFound()
  }
  
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'New Player Path', href: '/new-player-path/overview' },
          { label: content.frontmatter.title }
        ]} 
      />
      <ContentHeader frontmatter={content.frontmatter} category="new-player-path" />
      
      <ContentRenderer content={content.content} />
      
      <ContentFooter frontmatter={content.frontmatter} category="new-player-path" />
    </>
  )
}

