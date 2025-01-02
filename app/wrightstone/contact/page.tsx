import { HeroWrightstoneD } from '@/components/heros/wrightstone-d'
import { HeroWrigntstoneE } from '@/components/heros/wrightstone-e'
import { FeatureWrighstoneB } from '@/components/features/wrightstone-b'
import { ContactFormWrightstoneA } from '@/components/contact-form/wrightstone-a'
import { DetailWrightstoneA } from '@/components/detail/wrightstone-a'
import { ContactInfoWrightstoneA } from '@/components/contact-info/wrightstone-a'

export default function Page() {
  return (
    <div>
      <HeroWrigntstoneE />
      <FeatureWrighstoneB />
      <ContactInfoWrightstoneA />
      <ContactFormWrightstoneA />
      <DetailWrightstoneA />
      <HeroWrightstoneD />
    </div>
  )
}
