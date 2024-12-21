import { SectionContainer } from '@/components/shared/harrison/section-container'

import main, { QueryProps } from './queries'
import { CardC } from '@/components/shared/harrison/card-c'

type Props = {
  queryProps: QueryProps
  dynamicProps: {
    actionLabel: string
  }
}

export const FeaturesHarrisonD = async () => {
  const queryProps = await main()
  const dynamicProps = {
    actionLabel: 'Learn More',
  }
  return <FeaturesHarrisonDWrapper queryProps={queryProps} dynamicProps={dynamicProps} />
}

const FeaturesHarrisonDWrapper = (props: Props) => {
  const { queryProps, dynamicProps } = props

  return (
    <section className="py-6 mb-16">
      <SectionContainer>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {queryProps.data.map((item) => (
            <CardC key={item.id} {...item} actionLabel={dynamicProps.actionLabel} />
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
