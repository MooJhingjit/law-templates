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
      'Harrison is a full-service law firm with a focus on business and commercial law. Our attorneys have experience in a wide range of practice areas, including corporate law, real estate, and litigation. We are dedicated to providing our clients with the highest quality legal services and personalized attention. Contact us today to learn more about how we can help you with your legal needs.',
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
