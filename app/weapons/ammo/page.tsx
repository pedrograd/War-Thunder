import SectionHeader from '@/components/ui/SectionHeader'
import AmmoCard from '@/components/ui/AmmoCard'
import InfoGrid from '@/components/ui/InfoGrid'

export default function WeaponsAmmo() {
  return (
    <>
      <SectionHeader
        eyebrow="AMMO ENCYCLOPEDIA"
        title="Ammunition Guide"
        description="Complete guide to all ammunition types, penetration values, and tactical applications."
      />

      <InfoGrid cols={2} gap="lg" className="mt-8">
          <AmmoCard
            name="APFSDS"
            type="Armor-Piercing Fin-Stabilized Discarding Sabot"
            penetration={600}
            damage="High"
            description="Modern kinetic energy penetrator. Excellent penetration at all ranges. Minimal post-penetration damage but high chance of crew/module destruction."
            bestFor={['Top tier MBTs', 'Long range engagements', 'Heavy armor']}
          />
          <AmmoCard
            name="HEAT-FS"
            type="High-Explosive Anti-Tank Fin-Stabilized"
            penetration={400}
            damage="Medium-High"
            description="Chemical energy round. Consistent penetration regardless of range. Vulnerable to ERA and spaced armor."
            bestFor={['Mid tier vehicles', 'Angled armor', 'Light vehicles']}
          />
          <AmmoCard
            name="APHE"
            type="Armor-Piercing High-Explosive"
            penetration={150}
            damage="Very High"
            description="Classic round with explosive filler. Good penetration with excellent post-penetration damage. Best for mid-tier gameplay."
            bestFor={['Mid tier tanks', 'Close combat', 'Crew elimination']}
          />
          <AmmoCard
            name="APCR"
            type="Armor-Piercing Composite Rigid"
            penetration={200}
            damage="Low"
            description="High velocity solid shot. Excellent penetration at close range but poor at angles. Minimal post-penetration damage."
            bestFor={['Flat armor', 'Close range', 'Module sniping']}
          />
        </InfoGrid>
    </>
  )
}

