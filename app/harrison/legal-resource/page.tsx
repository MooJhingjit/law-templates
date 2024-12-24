import { HeroHarrisonE } from '@/components/heros/harrison-e'
import { FeaturesHarrisonE } from '@/components/features/harrison-e'
// import { FeaturesHarrisonF } from '@/components/features/harrison-f'
import { ContactFormHarrisonA } from '@/components/contact-form/harrison-a'
import { RelatedSectionHarrisonA } from '@/components/related-section/harrison-a'

export default function Home() {
  return (
    <div>
      <HeroHarrisonE />
      <FeaturesHarrisonE />
      {/* <FeaturesHarrisonF /> */}
      <RelatedSectionHarrisonA />
      <ContactFormHarrisonA />
    </div>
  )
}
