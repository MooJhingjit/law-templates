import { HeroWrightstoneA } from '@/components/heros/wrightstone-a'
import { AboutUsWrightstoneA } from '@/components/about-us/wrightstone-a'
import { FeatureWrightstoneA } from '@/components/features/wrightstone-a'
import { HeroWrightstoneB } from '@/components/heros/wrightstone-b'
import { HeroWrightstoneC } from '@/components/heros/wrightstone-c'
import { HeroWrightstoneD } from '@/components/heros/wrightstone-d'

export default function Home() {
  return (
    <div>
      <HeroWrightstoneA />
      <AboutUsWrightstoneA />
      <FeatureWrightstoneA />
      <HeroWrightstoneB />
      <HeroWrightstoneC />
      <HeroWrightstoneD />
    </div>
  )
}
