import { HeroHarrisonA } from '@/components/heros/harrison-a'
import { AboutUsHarrisonA } from '@/components/about-us/harrison-a'
import { ContactFormHarrisonA } from '@/components/contact-form/harrison-a'
import { FeaturesHarrisonA } from '@/components/features/harrison-a'
import { TestimonialsHarrisonA } from '@/components/testimonials/harrison-a'
import { OverviewHarrisonA } from '@/components/overview/harrison-a'

export default function Home() {
  return (
    <div>
      <HeroHarrisonA />
      <OverviewHarrisonA />
      <AboutUsHarrisonA />
      <FeaturesHarrisonA />
      <TestimonialsHarrisonA />
      <ContactFormHarrisonA />
    </div>
  )
}
