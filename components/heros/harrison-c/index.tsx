import { cn } from '@/lib/utils'
import { SectionContainer } from '@/components/shared/harrison/section-container'

type Props = {
  dynamicProps: { title: string; description: string; image: string }
}

export const HeroHarrisonC = () => {
  const dynamicProps = {
    title: 'Practice Area',
    description:
      'Harrison is a full-service law firm with a focus on business and commercial law. Our attorneys have experience in a wide range of practice areas, including corporate law, real estate, and litigation. We are dedicated to providing our clients with the highest quality legal services and personalized attention. Contact us today to learn more about how we can help you with your legal needs.',
    image: '/harrison/practice-area.png',
  }

  return <_HeroHarrisonC dynamicProps={dynamicProps} />
}
const _HeroHarrisonC = (props: Props) => {
  const { dynamicProps } = props
  const { title, description, image } = dynamicProps
  return (
    <section
      className={cn('py-6 lg:py-24 px-6 lg:px-28 bg-no-repeat bg-cover text-white text-center mb-16')}
      style={{ backgroundImage: `url('${image || '/harrison/about-us-banner.png'}')` }}
    >
      <SectionContainer>
        <h1 className="text-6xl font-semibold leading-relaxed">{title}</h1>
        <p className="text-base leading-relaxed">{description}</p>
      </SectionContainer>
    </section>
  )
}
