import { cn } from '@/lib/utils'
import { SectionContainer } from '@/components/shared/harrison/section-container'

type Props = {
  dynamicProps: { title: string; description: string; image: string }
}

export const HeroHarrisonB = () => {
  const dynamicProps = {
    title: 'About Us',
    description:
      'Harrison is a leading provider of building materials, construction supplies, and services to professional contractors and builders in the United States. Our core values are based on the principles of honesty, integrity, and respect for our customers and employees.',
    image: '/harrison/about-us-banner.png',
  }

  return <_HeroHarrisonB dynamicProps={dynamicProps} />
}
const _HeroHarrisonB = (props: Props) => {
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
