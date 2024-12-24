import { SectionContainer } from '@/components/shared/harrison/section-container'
import { Button } from '@/components/ui/button'
import { CardB } from '@/components/shared/harrison/card-b'
import { Filter } from './filter'
import main, { QueryProps } from './queries'

type Props = {
  queryProps: QueryProps
  dynamicProps: {
    searchLabel: string
    learnMoreLabel: string
  }
}
export const FeaturesHarrisonF = async () => {
  const queryProps = await main()
  const dynamicProps = {
    searchLabel: 'Search',
    learnMoreLabel: 'Learn More',
  }
  return <_FeaturesHarrisonF queryProps={queryProps} dynamicProps={dynamicProps} />
}

const _FeaturesHarrisonF = (props: Props) => {
  const { queryProps, dynamicProps } = props

  return (
    <section className="mb-16">
      <SectionContainer>
        <div className="grid gird-cols-1 md:grid-cols-4 gap-x-6">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {queryProps.data.map((item) => (
                <CardB key={item.id} {...item} learnMoreLabel={dynamicProps.learnMoreLabel} />
              ))}
            </div>
            <div className="mt-6 w-[90%] m-auto md:w-[40%] lg:w-[20%]">
              <Button className="w-full p-6">Load More</Button>
            </div>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 mb-6">
            <Filter data={queryProps.relatedData} categories={queryProps.categories} dynamicProps={dynamicProps} />
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
