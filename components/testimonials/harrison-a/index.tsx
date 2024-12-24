import { EmblaOptionsType } from 'embla-carousel'
import Carousel from './carousel'
import { SectionContainer } from '@/components/shared/harrison/section-container'
import main, { QueryProps } from './quires'

type Props = {
  dynamicProps: {
    title: string
  }
  queryProps: QueryProps
}

export const TestimonialsHarrisonA = async () => {
  const queryProps = await main()
  const dynamicProps = {
    title: 'What Our Clients Are “Saying”',
  }
  return <_TestimonialsHarrisonA dynamicProps={dynamicProps} queryProps={queryProps} />
}

const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }

export const _TestimonialsHarrisonA = (props: Props) => {
  const { dynamicProps, queryProps } = props
  return (
    <section className="py-6 mb-16">
      <SectionContainer>
        <Carousel slides={queryProps.data} options={OPTIONS} title={dynamicProps.title} />
      </SectionContainer>
    </section>
  )
}
