'use client'
import { cn } from '@/lib/utils'
import { SectionContainer } from '@/components/shared/harrison/section-container'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {
  dynamicProps: { title: string; description: string; image: string }
}

export const HeroHarrisonD = () => {
  const dynamicProps = {
    title: 'Practice Area',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly",
    image: '/harrison/practice-area.png',
  }

  return <HeroHarrisonDWrapper dynamicProps={dynamicProps} />
}
const HeroHarrisonDWrapper = (props: Props) => {
  const { dynamicProps } = props
  const { title, description, image } = dynamicProps
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }
  return (
    <section
      className={cn('py-6 lg:py-14  bg-no-repeat bg-cover text-white text-center mb-16')}
      style={{ backgroundImage: `url('${image || '/harrison/about-us-banner.png'}')` }}
    >
      <SectionContainer>
        <div className=" cursor-pointer" onClick={handleBack}>
          <ArrowLeft size={36} className="text-white" />
        </div>
        <div className="px-6 lg:px-28">
          <h1 className="text-6xl font-semibold leading-relaxed">{title}</h1>
          <p className="text-base leading-relaxed">{description}</p>
        </div>
      </SectionContainer>
    </section>
  )
}
