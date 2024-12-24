import { SectionContainer } from '@/components/shared/harrison/section-container'

import { Button } from '@/components/ui/button'
import { CardB } from '@/components/shared/harrison/card-b'
import { Filter } from './filter'
import main, { QueryProps } from './queries'

type Props = {
  queryProps: QueryProps
  dynamicProps: {
    learnMoreLabel: string
  }
}
export const FeaturesHarrisonE = async () => {
  const queryProps = await main()
  const dynamicProps = {
    learnMoreLabel: 'Learn Mores',
  }
  return <_FeaturesHarrisonE queryProps={queryProps} dynamicProps={dynamicProps} />
}

const _FeaturesHarrisonE = (props: Props) => {
  const { queryProps, dynamicProps } = props

  return (
    <section className="mb-16">
      <SectionContainer>
        <Filter />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {queryProps.data.map((item) => (
            <CardB key={item.id} {...item} learnMoreLabel={dynamicProps.learnMoreLabel} />
          ))}
        </div>
        <div className="mt-6 w-[90%] m-auto md:w-[40%] lg:w-[20%]">
          <Button className="w-full p-6">Load More</Button>
        </div>
      </SectionContainer>
    </section>
  )
}
