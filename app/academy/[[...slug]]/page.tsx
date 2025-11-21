import { getModule, getContentBySlug } from '@/lib/content/loader'
import ContentHeader from '@/components/content/ContentHeader'
import ContentRenderer from '@/components/content/ContentRenderer'
import ContentFooter from '@/components/content/ContentFooter'
import ChapterNav from '@/components/academy/ChapterNav'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'
import SectionHeader from '@/components/ui/SectionHeader'
import MetaCard from '@/components/ui/MetaCard'
import InfoGrid from '@/components/ui/InfoGrid'
import Card from '@/components/ui/Card'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  // Generate params for all academy modules
  const moduleIds = ['ground-forces', 'air-forces', 'helicopters', 'naval-forces']
  return moduleIds.flatMap((moduleId) => {
    const academyModule = getModule(moduleId)
    if (!academyModule) return []
    const paths = [{ slug: [moduleId] }]
    academyModule.chapters.forEach((chapter) => {
      paths.push({ slug: [moduleId, chapter.slug] })
    })
    return paths
  })
}

export default async function AcademyPage({ params }: { params: { slug?: string[] } }) {
  const moduleId = params.slug?.[0]
  const chapterSlug = params.slug?.[1]
  
  if (!moduleId) {
    // Show academy hub
    return (
      <>
        <SectionHeader
          eyebrow="TRAINING CENTER"
          title="Combat Academies"
          description="Comprehensive training modules for all War Thunder vehicle types. Master the fundamentals and advanced tactics."
        />

        <InfoGrid cols={2} gap="lg" className="mt-8">
          <MetaCard
            variant="training"
            title="New Player Path"
            description="Complete onboarding manual for new War Thunder players. Learn the fundamentals from your first battle to becoming a competent team player."
            href="/academy/new-player-path"
          />
          <MetaCard
            variant="training"
            title="Ground Tactics Academy"
            description="Master tank combat from armor mechanics to advanced positioning. Learn the fundamentals that separate good players from great ones."
            href="/academy/ground-forces"
          />
          <MetaCard
            variant="training"
            title="Air Tactics Academy"
            description="Master air combat from energy fighting to close air support. Learn the principles that separate skilled pilots from targets."
            href="/academy/air-forces"
          />
          <MetaCard
            variant="training"
            title="Heli Academy"
            description="Master helicopter combat from basic controls to advanced ATGM tactics. Learn to survive and dominate in helicopter engagements."
            href="/academy/helicopters"
          />
          <MetaCard
            variant="training"
            title="Naval Academy"
            description="Master naval combat from ship classes to gunnery and torpedo tactics. Learn to command the seas effectively."
            href="/academy/naval-forces"
          />
        </InfoGrid>
      </>
    )
  }
  
  // Check if this is a flat content file (e.g., /academy/ground)
  if (!chapterSlug) {
    const flatContent = getContentBySlug('academy', moduleId)
    if (flatContent) {
      return (
        <>
          <Breadcrumbs 
            items={[
              { label: 'Academy', href: '/academy' },
              { label: flatContent.frontmatter.title }
            ]} 
          />
          <ContentHeader frontmatter={flatContent.frontmatter} category="academy" />
          <ContentRenderer content={flatContent.content} />
          <ContentFooter frontmatter={flatContent.frontmatter} category="academy" />
        </>
      )
    }
  }

  const academyModule = getModule(moduleId)
  if (!academyModule) {
    notFound()
  }
  
  // If chapter slug provided, show chapter content
  if (chapterSlug) {
    const content = getContentBySlug('academy', `${moduleId}/${chapterSlug}`)
    if (!content) {
      notFound()
    }
    
    const currentChapterIndex = academyModule.chapters.findIndex(ch => ch.slug === chapterSlug)
    const previousChapter = currentChapterIndex > 0 ? academyModule.chapters[currentChapterIndex - 1] : null
    const nextChapter = currentChapterIndex < academyModule.chapters.length - 1 ? academyModule.chapters[currentChapterIndex + 1] : null
    
    return (
      <>
        <Breadcrumbs 
          items={[
            { label: 'Academy', href: '/academy' },
            { label: academyModule.title, href: `/academy/${moduleId}` },
            { label: content.frontmatter.title }
          ]} 
        />
        <ContentHeader frontmatter={content.frontmatter} category="academy" />
        
        <ChapterNav 
          previous={previousChapter}
          next={nextChapter}
          currentChapter={currentChapterIndex + 1}
          totalChapters={academyModule.chapters.length}
          modulePath={`/academy/${moduleId}`}
        />
        
        <ContentRenderer content={content.content} />
        
        <ChapterNav 
          previous={previousChapter}
          next={nextChapter}
          currentChapter={currentChapterIndex + 1}
          totalChapters={academyModule.chapters.length}
          modulePath={`/academy/${moduleId}`}
        />
        
        <ContentFooter frontmatter={content.frontmatter} category="academy" />
      </>
    )
  }
  
  // Show module overview
  if (academyModule.overview) {
    return (
      <>
        <Breadcrumbs 
          items={[
            { label: 'Academy', href: '/academy' },
            { label: academyModule.title }
          ]} 
        />
        <ContentHeader frontmatter={academyModule.overview.frontmatter} category="academy" />
        
        <ContentRenderer content={academyModule.overview.content} />
        
        <div className="mt-12">
          <SectionHeader
            eyebrow="MODULE CONTENTS"
            title="Chapters"
            accent="academy"
            className="mb-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {academyModule.chapters.map((chapter, index) => (
              <Link
                key={chapter.id}
                href={`/academy/${moduleId}/${chapter.slug}`}
                className="group"
              >
                <Card variant="glass" padding="md" hover accent="academy" className="h-full stagger-item">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-xs text-text-muted mb-2 font-hud uppercase tracking-wide">Chapter {chapter.order}</div>
                      <h3 className="text-lg font-semibold mb-2 text-text-primary group-hover:text-accent-academy transition-colors duration-smooth">{chapter.title}</h3>
                      {chapter.description && (
                        <p className="text-sm text-text-secondary leading-relaxed">{chapter.description}</p>
                      )}
                    </div>
                    <i className="fa-solid fa-arrow-right text-accent-academy opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-smooth ml-3"></i>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        
        <ContentFooter frontmatter={academyModule.overview.frontmatter} category="academy" />
      </>
    )
  }
  
  // Fallback: show module without overview
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">{academyModule.title}</h1>
      <p className="text-xl text-text-secondary mb-8">{academyModule.description}</p>
      
      <div className="mt-8">
        <SectionHeader
          eyebrow="MODULE CONTENTS"
          title="Chapters"
          accent="academy"
          className="mb-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {academyModule.chapters.map((chapter, index) => (
            <Link
              key={chapter.id}
              href={`/academy/${moduleId}/${chapter.slug}`}
              className="group"
            >
              <Card variant="glass" padding="md" hover accent="academy" className="h-full stagger-item">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-xs text-text-muted mb-2 font-hud uppercase tracking-wide">Chapter {chapter.order}</div>
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-academy transition-colors duration-smooth">{chapter.title}</h3>
                  </div>
                  <i className="fa-solid fa-arrow-right text-accent-academy opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-smooth ml-3"></i>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

