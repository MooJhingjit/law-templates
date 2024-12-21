import { cn } from '@/lib/utils'

type Props = {
  dynamicProps: { image: string }
}

export const HeroHarrisonF = () => {
  const dynamicProps = {
    image: '/harrison/contact-us.png',
  }
  return <_HeroHarrisonF dynamicProps={dynamicProps} />
}
const _HeroHarrisonF = (props: Props) => {
  const { dynamicProps } = props
  return (
    <section
      className={cn('py-6 lg:py-32 px-6 lg:px-28 bg-no-repeat bg-cover text-white text-center mb-16')}
      style={{ backgroundImage: `url('${dynamicProps.image || '/harrison/about-us-banner.png'}')` }}
    ></section>
  )
}
