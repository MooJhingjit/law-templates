import { cn } from '@/lib/utils'
import { SectionContainer } from '@/components/shared/harrison/section-container'

type Props = {
  dynamicProps: { title: string; description: string; image: string }
}

export const HeroHarrisonE = () => {
  const dynamicProps = {
    title: 'Legal Resources',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly",
    image: '/harrison/legal-resource.png',
  }

  return <_HeroHarrisonE dynamicProps={dynamicProps} />
}
const _HeroHarrisonE = (props: Props) => {
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
