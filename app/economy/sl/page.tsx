import SectionHeader from '@/components/ui/SectionHeader'
import GlassPanel from '@/components/ui/GlassPanel'
import StatBar from '@/components/ui/StatBar'
import MiniCard from '@/components/ui/MiniCard'
import InfoGrid from '@/components/ui/InfoGrid'

export default function EconomySL() {
  return (
    <>
      <SectionHeader
        eyebrow="SILVER LIONS"
        title="SL Grinding Guide"
        description="Maximize your Silver Lion earnings with efficient strategies and vehicle recommendations."
      />

        <InfoGrid cols={4} gap="md" className="mb-8">
          <MiniCard
            title="Best SL/Hour"
            value="250K"
            subtitle="Premium + Boosters"
            variant="success"
          />
          <MiniCard
            title="Avg SL/Hour"
            value="120K"
            subtitle="Standard Account"
            variant="default"
          />
          <MiniCard
            title="Efficiency"
            value="+108%"
            subtitle="With Premium"
            variant="info"
          />
          <MiniCard
            title="Repair Costs"
            value="-45K"
            subtitle="Top Tier Avg"
            variant="warning"
          />
        </InfoGrid>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GlassPanel>
            <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
              SL Multipliers
            </h3>
            <div className="space-y-4">
              <StatBar label="Premium Account" value={100} max={100} color="green" />
              <StatBar label="Premium Vehicle" value={100} max={100} color="green" />
              <StatBar label="Boosters" value={150} max={500} color="orange" />
              <StatBar label="Wager Active" value={0} max={100} color="cyan" />
            </div>
          </GlassPanel>

          <GlassPanel>
            <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
              Best SL Printers
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-background-elevated rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-200">USS Douglas</span>
                  <span className="text-tactical-green text-sm">+85K/match</span>
                </div>
                <div className="text-xs text-slate-400">Naval RB • Coastal Fleet</div>
              </div>
              <div className="p-3 bg-background-elevated rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-200">Ju 288 C</span>
                  <span className="text-tactical-cyan text-sm">+65K/match</span>
                </div>
                <div className="text-xs text-slate-400">Air RB • Bomber</div>
              </div>
              <div className="p-3 bg-background-elevated rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-200">M4A1 (FL10)</span>
                  <span className="text-tactical-purple text-sm">+45K/match</span>
                </div>
                <div className="text-xs text-slate-400">Ground RB • Premium</div>
              </div>
            </div>
          </GlassPanel>
        </div>

        <GlassPanel className="mt-6">
          <h3 className="text-xl font-semibold text-slate-200 mb-4 uppercase tracking-wide">
            SL Efficiency Tips
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li>• Avoid high repair cost vehicles unless you&apos;re consistently performing well</li>
            <li>• Use premium vehicles for consistent SL income</li>
            <li>• Focus on completing daily tasks for bonus SL rewards</li>
            <li>• Play lower BR brackets (3.7-5.7) for better SL-to-repair ratios</li>
            <li>• Use boosters during events for maximum efficiency</li>
            <li>• Consider Naval RB for high SL multipliers on coastal fleet</li>
          </ul>
        </GlassPanel>
    </>
  )
}

