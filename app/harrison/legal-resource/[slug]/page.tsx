import { HeroHarrisonE } from '@/components/heros/harrison-e'
import { ContactFormHarrisonA } from '@/components/contact-form/harrison-a'
import { RelatedSectionHarrisonA } from '@/components/related-section/harrison-a'
// import { DetailHarrisonC } from '@/components/detail/harrison-c'
import { DetailHarrisonB } from '@/components/detail/harrison-b'

export default function Page() {
  return (
    <div>
      <HeroHarrisonE />
      {/* <DetailHarrisonC /> */}
      <DetailHarrisonB />
      <RelatedSectionHarrisonA />
      <ContactFormHarrisonA />
    </div>
  )
}
