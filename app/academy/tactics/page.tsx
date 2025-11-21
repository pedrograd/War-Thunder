import TacticsDiagrams from '@/components/academy/TacticsDiagrams'
import Breadcrumbs from '@/components/navigation/Breadcrumbs'

export default function TacticsPage() {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Academy', href: '/academy' },
          { label: 'Tactics Diagrams' }
        ]} 
      />
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-slate-200 header-font">Combat Academy</h2>
        <p className="text-slate-400">Fundamental mechanics and advanced theory.</p>
      </div>
      <TacticsDiagrams />
    </>
  )
}

