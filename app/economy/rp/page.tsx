import SectionHeader from '@/components/ui/SectionHeader'
import GlassPanel from '@/components/ui/GlassPanel'
import StatBar from '@/components/ui/StatBar'
import MiniCard from '@/components/ui/MiniCard'
import InfoGrid from '@/components/ui/InfoGrid'

export default function EconomyRP() {
  return (
    <>
      <SectionHeader
        eyebrow="RESEARCH POINTS"
        title="RP Efficiency Guide"
        description="Maximize your Research Point gains with optimal strategies and vehicle selection."
      />

        <InfoGrid cols={4} gap="md" className="mb-8">
          <MiniCard
            title="Best RP/Hour"
            value="15,000"
            subtitle="Premium + Boosters"
            variant="success"
          />
          <MiniCard
            title="Avg RP/Hour"
            value="8,500"
            subtitle="Standard Account"
            variant="default"
          />
          <MiniCard
            title="Efficiency"
            value="+76%"
            subtitle="With Premium"
            variant="info"
          />
          <MiniCard
            title="Active Boosters"
            value="2x"
            subtitle="RP Multiplier"
            variant="warning"
          />
        </InfoGrid>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GlassPanel>
            <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
              RP Multipliers
            </h3>
            <div className="space-y-4">
              <StatBar label="Premium Account" value={100} max={100} color="green" />
              <StatBar label="Premium Vehicle" value={100} max={100} color="green" />
              <StatBar label="Talisman" value={100} max={100} color="cyan" />
              <StatBar label="Boosters" value={200} max={500} color="orange" />
            </div>
          </GlassPanel>

          <GlassPanel>
            <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
              Best RP Grinders
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-background-elevated rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-200">USS Douglas</span>
                  <span className="text-tactical-green text-sm">Naval RB</span>
                </div>
                <div className="text-xs text-slate-400">~12,000 RP/match</div>
              </div>
              <div className="p-3 bg-background-elevated rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-200">M1A1 Abrams</span>
                  <span className="text-tactical-cyan text-sm">Ground RB</span>
                </div>
                <div className="text-xs text-slate-400">~8,500 RP/match</div>
              </div>
              <div className="p-3 bg-background-elevated rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-200">F-5C</span>
                  <span className="text-tactical-purple text-sm">Air RB</span>
                </div>
                <div className="text-xs text-slate-400">~7,200 RP/match</div>
              </div>
            </div>
          </GlassPanel>
        </div>

        <GlassPanel className="mt-6">
          <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
            RP Efficiency Tips
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li>• Research vehicles within ±1.0 BR of your current lineup for maximum efficiency</li>
            <li>• Use premium vehicles or talismans on vehicles you enjoy playing</li>
            <li>• Focus on completing daily tasks for bonus RP rewards</li>
            <li>• Play Realistic Battles for better RP multipliers</li>
            <li>• Research modifications before moving to next vehicle for better performance</li>
          </ul>
        </GlassPanel>
    </>
  )
}

