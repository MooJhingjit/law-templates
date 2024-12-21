import { FeaturesHarrisonB } from '@/components/features/harrison-b'
import { FeaturesHarrisonC } from '@/components/features/harrison-c'
import { HeroHarrisonB } from '@/components/heros/harrison-b'
import { OurTeamHarrisonA } from '@/components/our-team/harrison-a'

export default function AboutUs() {
  return (
    <div>
      <HeroHarrisonB />
      <FeaturesHarrisonB />
      <FeaturesHarrisonC />
      <FeaturesHarrisonB />
      <OurTeamHarrisonA />
    </div>
  )
}
