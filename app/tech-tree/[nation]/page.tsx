import SectionHeader from '@/components/ui/SectionHeader'
import GlassPanel from '@/components/ui/GlassPanel'
import VehicleCard from '@/components/ui/VehicleCard'

interface TechTreePageProps {
  params: {
    nation: string
  }
}

export default function TechTreePage({ params }: TechTreePageProps) {
  const nation = params.nation.toUpperCase()
  const nationMap: Record<string, string> = {
    'USA': 'United States',
    'GERMANY': 'Germany',
    'USSR': 'Soviet Union',
    'BRITAIN': 'Great Britain',
    'JAPAN': 'Japan',
    'CHINA': 'China',
    'ITALY': 'Italy',
    'FRANCE': 'France',
    'SWEDEN': 'Sweden',
    'ISRAEL': 'Israel',
  }

  const displayName = nationMap[nation] || nation

  return (
    <>
      <SectionHeader
        eyebrow="VEHICLE PROGRESSION"
        title={`${displayName} Tech Tree`}
        description="Complete vehicle progression guide with recommended research paths and lineups."
      />

        <GlassPanel className="mt-8">
          <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
            Recommended Research Path
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-background-elevated rounded-lg border-l-4 border-tactical-orange">
              <div className="font-semibold text-slate-200 mb-2">Early Tier (1.0-3.7)</div>
              <p className="text-sm text-slate-300">
                Focus on medium tanks and light vehicles. Build a balanced 3.7 lineup before advancing.
              </p>
            </div>
            <div className="p-4 bg-background-elevated rounded-lg border-l-4 border-tactical-cyan">
              <div className="font-semibold text-slate-200 mb-2">Mid Tier (4.0-6.7)</div>
              <p className="text-sm text-slate-300">
                Research heavy tanks and tank destroyers. This is where nation characteristics become clear.
              </p>
            </div>
            <div className="p-4 bg-background-elevated rounded-lg border-l-4 border-tactical-purple">
              <div className="font-semibold text-slate-200 mb-2">High Tier (7.0-9.7)</div>
              <p className="text-sm text-slate-300">
                Modern MBTs and advanced systems. Focus on thermal imaging and laser rangefinders.
              </p>
            </div>
            <div className="p-4 bg-background-elevated rounded-lg border-l-4 border-tactical-green">
              <div className="font-semibold text-slate-200 mb-2">Top Tier (10.0+)</div>
              <p className="text-sm text-slate-300">
                Latest generation vehicles. Requires full lineup with SPAA and CAS support.
              </p>
            </div>
          </div>
        </GlassPanel>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
            Key Vehicles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <VehicleCard
              id="placeholder-1"
              name="Key Vehicle 1"
              br={5.7}
              role="Main Battle Tank"
              nation={nation}
              type="tank"
              strengths={['Excellent gun', 'Good mobility']}
              weaknesses={['Weak armor']}
              metaNotes={['Meta vehicle for this BR bracket']}
            />
            <VehicleCard
              id="placeholder-2"
              name="Key Vehicle 2"
              br={7.3}
              role="Heavy Tank"
              nation={nation}
              type="tank"
              strengths={['Strong armor', 'Powerful gun']}
              weaknesses={['Slow mobility']}
              metaNotes={['Excellent for defensive play']}
            />
            <VehicleCard
              id="placeholder-3"
              name="Key Vehicle 3"
              br={10.0}
              role="Main Battle Tank"
              nation={nation}
              type="tank"
              strengths={['Modern systems', 'Thermal imaging']}
              weaknesses={['High repair cost']}
              metaNotes={['Top tier meta vehicle']}
            />
          </div>
        </div>
    </>
  )
}

